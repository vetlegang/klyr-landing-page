"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VideoCard, { VideoCardData } from "./VideoCard";
import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

const T = {
  no: { heading: "Arbeid", sub: "Hover for å se kampanjen", intro: "annonser produsert" },
  en: { heading: "Work",   sub: "Hover to see the campaign", intro: "ads produced" },
};

// ─── Edit videos here ────────────────────────────────────────────────────────
const videos: VideoCardData[] = [
  {
    src: "/videos/camilo-12lover-1.mp4",
    client: "Camillo 12 Lover",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/camilo-12lover-2.mp4",
    client: "Camillo 12 Lover",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/mars-bilpleie-1.mp4",
    client: "Mars Bilpleie",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/mars-bilpleie-2.mp4",
    client: "Mars Bilpleie",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/boyer-bil-1.mp4",
    client: "Boyer Bil",
    label: "ROAS 5.6",
    stat: "5.6×",
    statLabel: "ROAS",
  },
  {
    src: "/videos/boyer-bil-2.mp4",
    client: "Boyer Bil",
    label: "ROAS 5.6",
    stat: "5.6×",
    statLabel: "ROAS",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "intro" | "grid";

export default function ArbeidSection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [phase, setPhase] = useState<Phase>("intro");
  const sectionRef = useRef<HTMLElement>(null);
  const fired      = useRef(false);

  useEffect(() => {
    // Skip intro if already seen this session
    if (typeof window !== "undefined" && sessionStorage.getItem("arbeid-played")) {
      setPhase("grid");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          // Hold intro for 2s, then reveal grid
          setTimeout(() => {
            setPhase("grid");
            sessionStorage.setItem("arbeid-played", "1");
          }, 2200);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="arbeid"
      className="px-8 md:px-16 py-16 md:py-24 overflow-hidden"
      style={{ background: "#F5F4F0" }}
    >
      <div className="max-w-[1440px] mx-auto w-full">

        {/* Section heading — always visible */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.2, 0, 0.2, 1] }}
        >
          <h2
            className="leading-none"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color:         G,
            }}
          >
            {t.heading}
          </h2>
          <p
            className="mt-2"
            style={{
              fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
              color:    G,
              opacity:  0.45,
            }}
          >
            {t.sub}
          </p>
        </motion.div>

        {/* ── Content area: intro OR grid ── */}
        <div className="relative">
          <AnimatePresence mode="wait">

            {phase === "intro" && (
              <motion.div
                key="intro"
                className="flex flex-col items-center justify-center text-center py-16 md:py-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  filter: "blur(12px)",
                  transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Big number */}
                <motion.p
                  className="leading-none font-black select-none"
                  style={{
                    fontFamily:    "var(--font-nunito), sans-serif",
                    fontSize:      "clamp(5rem, 22vw, 18rem)",
                    letterSpacing: "-0.04em",
                    color:         G,
                    lineHeight:    0.9,
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
                >
                  1000+
                </motion.p>

                {/* Label */}
                <motion.p
                  className="mt-4 font-black tracking-tight select-none"
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize:   "clamp(1.2rem, 3vw, 2.5rem)",
                    color:      G,
                    opacity:    0.55,
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 0.55, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
                >
                  {t.intro}
                </motion.p>
              </motion.div>
            )}

            {phase === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              >
                {videos.map((v, i) => (
                  <motion.div
                    key={v.src}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: [0.2, 0, 0.2, 1],
                    }}
                  >
                    <VideoCard {...v} />
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
