"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G   = "#2A5C18";
const V   = "7";

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

const FADE_MS = 220;

export default function StudioIndexHero() {
  const { lang } = useLanguage();
  const menuItems = lang === "no" ? menuItemsNo : menuItemsEn;
  const offerTags = lang === "no" ? offerTagsNo : offerTagsEn;
  const ctaLabel  = lang === "no" ? ctaNo : ctaEn;

  const [activeChar, setActiveChar] = useState("arbeid");
  const [prevChar,   setPrevChar]   = useState<string | null>(null);
  const [generation, setGeneration] = useState(0);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);
  const resetTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swapPending = useRef(false);
  const autoTimer   = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoIndex   = useRef(0);

  const switchTo = (char: string) => {
    if (char === activeChar) return;
    if (swapPending.current) return;
    swapPending.current = true;
    setPrevChar(activeChar);
    setActiveChar(char);
    setGeneration((g) => g + 1);
    setTimeout(() => { setPrevChar(null); swapPending.current = false; }, FADE_MS + 30);
  };

  const handleEnter = (char: string) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    switchTo(char);
    setHoveredChar(char);
  };

  const handleLeave = () => {
    setHoveredChar(null);
    resetTimer.current = setTimeout(() => switchTo("arbeid"), 700);
  };

  // Auto-rotate characters on touch devices
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) return;

    const chars = menuItemsNo.map((m) => m.char);
    autoTimer.current = setInterval(() => {
      autoIndex.current = (autoIndex.current + 1) % chars.length;
      switchTo(chars[autoIndex.current]);
    }, 2000);

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Plain <img> tags — bypasses Next/Image cache. ?v= busts browser cache after re-export.
  const src = (name: string) => `/characters/${name}.png?v=${V}`;

  return (
    <section
      className="min-h-screen flex flex-col px-8 md:px-16 pt-8 md:pt-10 pb-8 md:pb-12"
      style={{ background: "#F5F4F0" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1">

        {/* ── Massive Fujii wordmark — dominates the first screen ── */}
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
                fontSize:   "clamp(5.5rem, 20vw, 17rem)",
                fontWeight: 900,
                fontFamily: "var(--font-nunito), sans-serif",
                letterSpacing: "-0.025em",
                color: G,
              }}
            >
              Fujii
            </h1>
          </a>
        </motion.div>

        {/* ── Character (left) + Menu (right) ── fills remaining height */}
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-0 flex-1 mt-2 md:mt-0">

          {/* ── Left: fixed-ratio character stage ── */}
          <motion.div
            className="w-full md:w-[40%] flex items-end justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            {/*
              900×900 canvas. All PNGs exported at 900×900 with
              identical head center at (450, 215). Only opacity changes —
              no layout, size, or position shift on character swap.
            */}
            <div
              style={{
                position:    "relative",
                width:       "clamp(180px, 55vw, 480px)",
                aspectRatio: "1 / 1",
                flexShrink:  0,
              }}
            >
              {/* Fading-out previous character */}
              {prevChar && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`out-${prevChar}-${generation}`}
                  src={src(prevChar)}
                  alt=""
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                    animation: `char-fade-out ${FADE_MS}ms ease forwards`,
                  }}
                />
              )}

              {/* Active character — fades in */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`in-${activeChar}-${generation}`}
                src={src(activeChar)}
                alt="Fujii karakter"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center center",
                  animation: `char-fade-in ${FADE_MS}ms ease forwards`,
                }}
              />
            </div>
          </motion.div>

          {/* ── Right: vertical menu + offer note ── */}
          <div className="w-full md:w-[60%] flex flex-col justify-end pb-0 md:pb-2">

            <nav aria-label="Hovedmeny">
              <ul className="flex flex-col" onMouseLeave={handleLeave}>
                {menuItems.map((item, i) => {
                  const isHovered  = hoveredChar === item.char;
                  const anyHovered = hoveredChar !== null;

                  return (
                    <motion.li
                      key={item.char}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: "easeOut" }}
                      className="border-b first:border-t"
                      style={{ borderColor: `rgba(42,92,24,0.12)` }}
                    >
                      <a
                        href={item.href}
                        className="flex items-baseline py-3 md:py-3.5 outline-none"
                        style={{
                          opacity:    anyHovered && !isHovered ? 0.28 : 1,
                          transition: "opacity 0.18s ease",
                        }}
                        onMouseEnter={() => handleEnter(item.char)}
                        onFocus={() => handleEnter(item.char)}
                      >
                        <span
                          style={{
                            fontFamily:             "var(--font-nunito), sans-serif",
                            fontWeight:             900,
                            fontSize:               "clamp(1.9rem, 3.8vw, 4rem)",
                            letterSpacing:          "-0.01em",
                            lineHeight:             1,
                            color:                  G,
                            textDecoration:         isHovered ? "underline" : "none",
                            textUnderlineOffset:    "6px",
                            textDecorationThickness:"2px",
                            textDecorationColor:    G,
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

            {/* ── Offer note — studio index style, not a sales card ── */}
            <motion.div
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.92 }}
            >
              {offerTags.map((t, i) => (
                <span key={t} className="contents">
                  {i > 0 && (
                    <span
                      className="text-[11px]"
                      style={{ color: G, opacity: 0.2 }}
                    >
                      ·
                    </span>
                  )}
                  <span
                    className="text-[11px] tracking-wide"
                    style={{ color: G, opacity: 0.45 }}
                  >
                    {t}
                  </span>
                </span>
              ))}
              <span
                className="text-[11px]"
                style={{ color: G, opacity: 0.2 }}
              >
                ·
              </span>
              <a
                href="#kontakt"
                className="text-[11px] font-bold transition-opacity duration-150 hover:opacity-40"
                style={{
                  color:                  G,
                  opacity:                0.7,
                  textDecoration:         "underline",
                  textUnderlineOffset:    "3px",
                  textDecorationColor:    G,
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
