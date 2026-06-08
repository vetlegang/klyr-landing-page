"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

const CHARS = [
  { key: "arbeid",         webm: "/characters/karakter-1.webm", safari: "/characters/karakter-1-safari.mp4", png: "/characters/arbeid.png?v=7" },
  { key: "meta-creatives", webm: "/characters/karakter-2.webm", safari: "/characters/karakter-2-safari.mp4", png: "/characters/meta-creatives.png?v=7" },
  { key: "testpakken",     webm: "/characters/karakter-3.webm", safari: "/characters/karakter-3-safari.mp4", png: "/characters/testpakken.png?v=7" },
  { key: "produksjon",     webm: "/characters/karakter-4.webm", safari: "/characters/karakter-4-safari.mp4", png: "/characters/produksjon.png?v=7" },
  { key: "prosess",        webm: "/characters/karakter-5.webm", safari: "/characters/karakter-5-safari.mp4", png: "/characters/prosess.png?v=7" },
  { key: "kontakt",        webm: "/characters/karakter-6.webm", safari: "/characters/karakter-6-safari.mp4", png: "/characters/kontakt.png?v=7" },
];

const menuItemsNo = [
  { label: "Arbeid",         href: "#arbeid",  char: "arbeid" },
  { label: "Meta Creatives", href: "#tilbud",  char: "meta-creatives" },
  { label: "Testpakken",     href: "#tilbud",  char: "testpakken" },
  { label: "Produksjon",     href: "#tilbud",  char: "produksjon" },
  { label: "Prosess",        href: "#prosess", char: "prosess" },
  { label: "Kontakt",        href: "#kontakt", char: "kontakt" },
];

const menuItemsEn = [
  { label: "Work",           href: "#arbeid",  char: "arbeid" },
  { label: "Meta Creatives", href: "#tilbud",  char: "meta-creatives" },
  { label: "Test Package",   href: "#tilbud",  char: "testpakken" },
  { label: "Production",     href: "#tilbud",  char: "produksjon" },
  { label: "Process",        href: "#prosess", char: "prosess" },
  { label: "Contact",        href: "#kontakt", char: "kontakt" },
];

const offerTagsNo = ["20 Meta-creatives", "5 000 kr", "Ingen binding"];
const offerTagsEn = ["20 Meta-creatives", "5 000 kr", "No commitment"];
const ctaNo = "Start testpakken →";
const ctaEn = "Start the test package →";

const FADE_MS = 500;

// ── Canvas-based chromakey for Safari (black background → transparent) ──────
// Runs requestAnimationFrame only when isActive to save CPU on inactive chars.
function ChromakeyCanvas({
  src,
  isActive,
  style,
}: {
  src: string;
  isActive: boolean;
  style: React.CSSProperties;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const readyRef  = useRef(false);   // true once canplay fired

  // Start loading / playing all videos immediately (preload for instant switch)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [src]);

  const drawLoop = useCallback(() => {
    const video  = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const W = 240, H = 240;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(video, 0, 0, W, H);

    const imgData = ctx.getImageData(0, 0, W, H);
    const d = imgData.data;

    // Black-background chromakey: pixels close to (0,0,0) → transparent
    for (let i = 0; i < d.length; i += 4) {
      const sum = d[i] + d[i + 1] + d[i + 2];
      if (sum < 60) {
        d[i + 3] = 0;                                       // pure black → fully transparent
      } else if (sum < 200) {
        d[i + 3] = Math.round(((sum - 60) / 140) * 255);   // edge fade for anti-aliasing
      }
    }

    ctx.putImageData(imgData, 0, 0);
    rafRef.current = requestAnimationFrame(drawLoop);
  }, []);

  useEffect(() => {
    if (isActive && readyRef.current) {
      rafRef.current = requestAnimationFrame(drawLoop);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive, drawLoop]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        preload="auto"
        style={{ display: "none" }}
        onCanPlay={() => {
          readyRef.current = true;
          if (isActive) {
            rafRef.current = requestAnimationFrame(drawLoop);
          }
        }}
      />
      <canvas ref={canvasRef} width={240} height={240} style={style} />
    </>
  );
}

// ── Main hero component ───────────────────────────────────────────────────────
export default function StudioIndexHero() {
  const { lang } = useLanguage();
  const menuItems = lang === "no" ? menuItemsNo : menuItemsEn;
  const offerTags = lang === "no" ? offerTagsNo : offerTagsEn;
  const ctaLabel  = lang === "no" ? ctaNo : ctaEn;

  const [activeIndex, setActiveIndex]   = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // null = not yet detected; true = use canvas (Safari); false = use WebM
  const [useSafariCanvas, setUseSafariCanvas] = useState<boolean | null>(null);

  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimer  = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);
  const imgRefs    = useRef<(HTMLImageElement | null)[]>([]);

  // Detect WebM VP9 support on mount
  useEffect(() => {
    const v = document.createElement("video");
    const canVP9 = v.canPlayType('video/webm; codecs="vp9"') !== "";
    setUseSafariCanvas(!canVP9);
  }, []);

  // WebM path: preload + play all videos in background, reset active to frame 0
  useEffect(() => {
    if (useSafariCanvas !== false) return;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      if (i === activeIndex) v.currentTime = 0;
      v.play().catch(() => {});
    });
  }, [activeIndex, useSafariCanvas]);

  // Auto-rotate on touch devices
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) return;
    autoTimer.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % CHARS.length);
    }, 2400);
    return () => { if (autoTimer.current) clearInterval(autoTimer.current); };
  }, []);

  const handleEnter = (index: number) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setActiveIndex(index);
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
    resetTimer.current = setTimeout(() => setActiveIndex(0), 600);
  };

  const mediaStyle: React.CSSProperties = {
    position:       "absolute",
    inset:          0,
    width:          "100%",
    height:         "100%",
    objectFit:      "contain",
    objectPosition: "center center",
  };

  return (
    <section
      className="min-h-screen flex flex-col px-8 md:px-16 pt-8 md:pt-10 pb-8 md:pb-12"
      style={{ background: "#fcfcfc" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1">

        {/* ── Fujii wordmark ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 1] }}
        >
          <a href="/" aria-label="Fujii — tilbake til forsiden">
            <h1
              className="leading-none select-none"
              style={{
                fontSize:      "clamp(5.5rem, 20vw, 17rem)",
                fontWeight:    900,
                fontFamily:    "var(--font-nunito), sans-serif",
                letterSpacing: "-0.025em",
                color:         G,
              }}
            >
              Fujii
            </h1>
          </a>
        </motion.div>

        {/* ── Character (left) + Menu (right) ── */}
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-0 flex-1 mt-2 md:mt-0">

          {/* ── Character stage ── */}
          <motion.div
            className="w-full md:w-[40%] flex items-end justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            <div
              style={{
                position:    "relative",
                width:       "clamp(180px, 55vw, 480px)",
                aspectRatio: "1 / 1",
                flexShrink:  0,
              }}
            >
              {CHARS.map((char, i) => {
                const wrapStyle: React.CSSProperties = {
                  position:   "absolute",
                  inset:      0,
                  opacity:    i === activeIndex ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease-in-out`,
                  willChange: "opacity",
                };

                return (
                  <div key={char.key} style={wrapStyle} aria-hidden={i !== activeIndex}>

                    {useSafariCanvas === true ? (
                      // ── Safari: canvas chromakey (black bg → transparent) ──
                      <ChromakeyCanvas
                        src={char.safari}
                        isActive={i === activeIndex}
                        style={mediaStyle}
                      />
                    ) : useSafariCanvas === false ? (
                      // ── Chrome / Firefox / Android: WebM VP9 with alpha ──
                      <>
                        {/* PNG fallback until video fires canplay */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          ref={el => { imgRefs.current[i] = el; }}
                          src={char.png}
                          alt={i === 0 ? "Fujii karakter" : ""}
                          style={mediaStyle}
                        />
                        <video
                          ref={el => { videoRefs.current[i] = el; }}
                          muted
                          playsInline
                          loop
                          preload="auto"
                          aria-hidden
                          style={{ ...mediaStyle, opacity: 0 }}
                          onCanPlay={e => {
                            e.currentTarget.style.opacity = "1";
                            const img = imgRefs.current[i];
                            if (img) img.style.opacity = "0";
                          }}
                        >
                          <source src={char.webm} type="video/webm" />
                        </video>
                      </>
                    ) : (
                      // ── Not yet detected: show PNG ──
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={char.png}
                        alt={i === 0 ? "Fujii karakter" : ""}
                        style={mediaStyle}
                      />
                    )}

                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Menu + offer note ── */}
          <div className="w-full md:w-[60%] flex flex-col justify-end pb-0 md:pb-2">

            <nav aria-label="Hovedmeny">
              <ul className="flex flex-col" onMouseLeave={handleLeave}>
                {menuItems.map((item, i) => {
                  const isHovered  = hoveredIndex === i;
                  const anyHovered = hoveredIndex !== null;

                  return (
                    <motion.li
                      key={item.char}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: "easeOut" }}
                      className="border-b first:border-t"
                      style={{ borderColor: "rgba(42,92,24,0.12)" }}
                    >
                      <a
                        href={item.href}
                        className="flex items-baseline py-3 md:py-3.5 outline-none"
                        style={{
                          opacity:    anyHovered && !isHovered ? 0.28 : 1,
                          transition: "opacity 0.18s ease",
                        }}
                        onMouseEnter={() => handleEnter(i)}
                        onFocus={() => handleEnter(i)}
                      >
                        <span
                          style={{
                            fontFamily:              "var(--font-nunito), sans-serif",
                            fontWeight:              900,
                            fontSize:                "clamp(1.9rem, 3.8vw, 4rem)",
                            letterSpacing:           "-0.01em",
                            lineHeight:              1,
                            color:                   G,
                            textDecoration:          isHovered ? "underline" : "none",
                            textUnderlineOffset:     "6px",
                            textDecorationThickness: "2px",
                            textDecorationColor:     G,
                          }}
                        >
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* ── Offer note ── */}
            <motion.div
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.92 }}
            >
              {offerTags.map((t, i) => (
                <span key={t} className="contents">
                  {i > 0 && (
                    <span className="text-[11px]" style={{ color: G, opacity: 0.2 }}>·</span>
                  )}
                  <span className="text-[11px] tracking-wide" style={{ color: G, opacity: 0.45 }}>
                    {t}
                  </span>
                </span>
              ))}
              <span className="text-[11px]" style={{ color: G, opacity: 0.2 }}>·</span>
              <a
                href="#kontakt"
                className="text-[11px] font-bold transition-opacity duration-150 hover:opacity-40"
                style={{
                  color:                 G,
                  opacity:               0.7,
                  textDecoration:        "underline",
                  textUnderlineOffset:   "3px",
                  textDecorationColor:   G,
                }}
              >
                {ctaLabel}
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
