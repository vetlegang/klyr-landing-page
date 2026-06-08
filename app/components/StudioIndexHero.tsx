"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

// Each character has its own measured background colour (sampled from video corners).
// Used for per-character canvas chromakey so every video is keyed precisely.
const CHARS = [
  { key: "arbeid",         webm: "/characters/karakter-1.webm", safari: "/characters/karakter-1-safari.mp4", png: "/characters/arbeid.png?v=7",         bg: [249, 250, 250] as [number, number, number] },
  { key: "meta-creatives", webm: "/characters/karakter-2.webm", safari: "/characters/karakter-2-safari.mp4", png: "/characters/meta-creatives.png?v=7",  bg: [246, 249, 249] as [number, number, number] },
  { key: "testpakken",     webm: "/characters/karakter-3.webm", safari: "/characters/karakter-3-safari.mp4", png: "/characters/testpakken.png?v=7",      bg: [248, 250, 250] as [number, number, number] },
  { key: "produksjon",     webm: "/characters/karakter-4.webm", safari: "/characters/karakter-4-safari.mp4", png: "/characters/produksjon.png?v=7",      bg: [249, 250, 250] as [number, number, number] },
  { key: "prosess",        webm: "/characters/karakter-5.webm", safari: "/characters/karakter-5-safari.mp4", png: "/characters/prosess.png?v=7",         bg: [249, 249, 249] as [number, number, number] },
  { key: "kontakt",        webm: "/characters/karakter-6.webm", safari: "/characters/karakter-6-safari.mp4", png: "/characters/kontakt.png?v=7",         bg: [247, 249, 249] as [number, number, number] },
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

// ── Per-character canvas chromakey ───────────────────────────────────────────
// bg = exact background colour measured from the video's corner pixels.
// Uses Euclidean colour-distance so each character's unique tint is removed cleanly.
function ChromakeyCanvas({
  src,
  bg,
  isActive,
  style,
}: {
  src: string;
  bg: [number, number, number];
  isActive: boolean;
  style: React.CSSProperties;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef   = useRef<number>(0);
  const readyRef = useRef(false);

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

    const [bgR, bgG, bgB] = bg;
    const HARD = 18;  // pixels within 18 units of bg colour → fully transparent
    const SOFT = 45;  // pixels within 45 units → fade (anti-aliasing / edge pixels)

    for (let i = 0; i < d.length; i += 4) {
      const dr = d[i]     - bgR;
      const dg = d[i + 1] - bgG;
      const db = d[i + 2] - bgB;
      // Euclidean distance in RGB space
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);

      if (dist < HARD) {
        d[i + 3] = 0;
      } else if (dist < SOFT) {
        d[i + 3] = Math.round(((dist - HARD) / (SOFT - HARD)) * 255);
      }
    }

    ctx.putImageData(imgData, 0, 0);
    rafRef.current = requestAnimationFrame(drawLoop);
  }, [bg]);

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
      {/* iOS Safari requires video to be in DOM (not display:none) for canvas drawImage */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        preload="auto"
        style={{
          position:      "fixed",
          left:          "-9999px",
          top:           0,
          width:         1,
          height:        1,
          opacity:       0,
          pointerEvents: "none",
        }}
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
  const [isSafari, setIsSafari]         = useState<boolean | null>(null);

  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimer  = useRef<ReturnType<typeof setInterval> | null>(null);
  const webmRefs   = useRef<(HTMLVideoElement | null)[]>([]);
  const imgRefs    = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const v = document.createElement("video");
    setIsSafari(v.canPlayType('video/webm; codecs="vp9"') === "");
  }, []);

  useEffect(() => {
    if (isSafari !== false) return;
    webmRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      if (i === activeIndex) v.currentTime = 0;
      v.play().catch(() => {});
    });
  }, [activeIndex, isSafari]);

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

                    {isSafari === true ? (
                      // ── Safari: canvas chromakey with per-character bg colour ──
                      <ChromakeyCanvas
                        src={char.safari}
                        bg={char.bg}
                        isActive={i === activeIndex}
                        style={mediaStyle}
                      />

                    ) : isSafari === false ? (
                      // ── Chrome / Firefox / Android: WebM VP9 with alpha ──
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          ref={el => { imgRefs.current[i] = el; }}
                          src={char.png}
                          alt={i === 0 ? "Fujii karakter" : ""}
                          style={mediaStyle}
                        />
                        <video
                          ref={el => { webmRefs.current[i] = el; }}
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
                      // ── Detecting (first paint): show PNG ──
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
