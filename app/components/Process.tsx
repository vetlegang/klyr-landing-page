"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const G = "#2A5C18";

const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "Du sender oss nettside og hva du selger. Vi responderer innen 1 arbeidsdag med en konkret vurdering.",
  },
  {
    num: "02",
    title: "Vinkler og hooks",
    desc: "Vi analyserer tilbudet og målgruppen og velger de sterkeste kreative vinklene og argumentene for testing.",
  },
  {
    num: "03",
    title: "Produksjon",
    desc: "20 creatives produsert og tilpasset Meta — still ads og video ads, klar til å kjøres direkte.",
  },
  {
    num: "04",
    title: "Testing",
    desc: "Vi tester annonsene og bygger videre på de som faktisk vinner, for å få mest mulig ut av kampanjen.",
  },
  {
    num: "05",
    title: "Hva skal du gjøre?",
    desc: "Lene deg tilbake og forberede deg på et økt salg.",
  },
];

// Two-word split for dramatic stagger
const introLines = [
  { big: "Creatives",    small: null },
  { big: "som kan",      small: null },
  { big: "performance.", small: null },
];

type Phase = "intro" | "steps";

export default function Process() {
  const [phase, setPhase] = useState<Phase>("intro");
  const sectionRef = useRef<HTMLElement>(null);
  const fired      = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("prosess-played")) {
      setPhase("steps");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          setTimeout(() => {
            setPhase("steps");
            sessionStorage.setItem("prosess-played", "1");
          }, 2400);
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
      id="prosess"
      className="px-8 md:px-16 py-16 md:py-24 overflow-hidden"
      style={{ background: "#F5F4F0" }}
    >
      <div className="max-w-[1440px] mx-auto">

        {/* Section label — always visible */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
          <p
            className="text-[10px] font-bold tracking-[0.3em] uppercase"
            style={{ color: G, opacity: 0.5 }}
          >
            Prosess
          </p>
        </motion.div>

        {/* ── Content area ── */}
        <div className="relative">
          <AnimatePresence mode="wait">

            {/* ── Intro statement ── */}
            {phase === "intro" && (
              <motion.div
                key="intro"
                className="py-10 md:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(10px)",
                  transition: { duration: 0.6, ease: [0.4, 0, 1, 1] },
                }}
              >
                {introLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="leading-[0.88] font-black select-none"
                    style={{
                      fontFamily:    "var(--font-nunito), sans-serif",
                      fontSize:      "clamp(3.2rem, 13vw, 11rem)",
                      letterSpacing: "-0.03em",
                      color:         G,
                      // Alternate: last word slightly faded for depth
                      opacity: i === 2 ? 0.45 : 1,
                    }}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    animate={{
                      opacity: i === 2 ? 0.45 : 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.14,
                      ease: [0.2, 0, 0.2, 1],
                    }}
                  >
                    {line.big}
                  </motion.p>
                ))}
              </motion.div>
            )}

            {/* ── Process steps ── */}
            {phase === "steps" && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_200px_1fr] items-start gap-6 md:gap-10 py-8 md:py-10 border-t"
                      style={{ borderColor: "rgba(42,92,24,0.1)" }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: i * 0.09,
                        ease: "easeOut",
                      }}
                    >
                      <span
                        className="text-[11px] font-mono font-bold tracking-[0.15em] pt-1"
                        style={{ color: G, opacity: 0.25 }}
                      >
                        {step.num}
                      </span>

                      <h3
                        className="leading-tight tracking-tight"
                        style={{
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontWeight: 900,
                          fontSize:   "clamp(1.1rem, 1.8vw, 1.4rem)",
                          color:      G,
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="text-[14px] leading-relaxed col-span-2 md:col-span-1 -mt-2 md:mt-0 ml-[38px] md:ml-0"
                        style={{ color: G, opacity: 0.5 }}
                      >
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                  <div className="border-t" style={{ borderColor: "rgba(42,92,24,0.1)" }} />
                </div>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
                    <p className="text-[13px]" style={{ color: G, opacity: 0.45 }}>
                      Fra brief til levering — typisk 5–10 arbeidsdager.
                    </p>
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-2 text-[11px] font-black px-5 py-3 rounded-full transition-all duration-150 tracking-widest uppercase w-fit"
                      style={{ border: "1.5px solid rgba(42,92,24,0.35)", color: G }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = G;
                        (e.currentTarget as HTMLElement).style.color = "#F5F4F0";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = G;
                      }}
                    >
                      Start nå
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </FadeIn>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
