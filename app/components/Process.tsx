"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

const stepsNo = [
  {
    num: "01",
    title: "Brief",
    desc: "Du sender oss nettside og hva du selger. Vi responderer innen 1 arbeidsdag med en konkret vurdering.",
    accent: false,
  },
  {
    num: "02",
    title: "Vinkler og hooks",
    desc: "Vi analyserer tilbudet og målgruppen og velger de sterkeste kreative vinklene og argumentene for testing.",
    accent: false,
  },
  {
    num: "03",
    title: "Produksjon",
    desc: "20 creatives produsert og tilpasset Meta — still ads og video ads, klar til å kjøres direkte.",
    accent: false,
  },
  {
    num: "04",
    title: "Testing",
    desc: "Vi tester annonsene og bygger videre på de som faktisk vinner, for å få mest mulig ut av kampanjen.",
    accent: false,
  },
  {
    num: "05",
    title: "Hva skal du gjøre?",
    desc: "Lene deg tilbake og forberede deg på et økt salg.",
    accent: true,
  },
];

const stepsEn = [
  { num: "01", title: "Brief",        desc: "You send us your website and what you sell. We respond within 1 business day with a concrete assessment.", accent: false },
  { num: "02", title: "Angles & hooks", desc: "We analyse the offer and target audience and select the strongest creative angles and arguments for testing.", accent: false },
  { num: "03", title: "Production",   desc: "20 creatives produced and adapted for Meta — still ads and video ads, ready to run immediately.", accent: false },
  { num: "04", title: "Testing",      desc: "We test the ads and build on the ones that actually win, to get the most out of the campaign.", accent: false },
  { num: "05", title: "What do you do?", desc: "Sit back and prepare for increased sales.", accent: true },
];

const introLinesNo = ["Creatives", "som kan", "performance."];
const introLinesEn = ["Creatives", "that drive", "performance."];

const sectionLabelNo = "Prosess";
const sectionLabelEn = "Process";
const footerLineNo   = "Fra brief til levering — typisk 5–10 arbeidsdager.";
const footerLineEn   = "From brief to delivery — typically 5–10 business days.";

type Phase = "intro" | "steps";

export default function Process() {
  const { lang } = useLanguage();
  const steps      = lang === "no" ? stepsNo : stepsEn;
  const introLines = lang === "no" ? introLinesNo : introLinesEn;
  const sectionLabel = lang === "no" ? sectionLabelNo : sectionLabelEn;
  const footerLine   = lang === "no" ? footerLineNo   : footerLineEn;

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

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: G, opacity: 0.5 }}>
            {sectionLabel}
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
                      opacity:       i === 2 ? 0.45 : 1,
                    }}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: i === 2 ? 0.45 : 1, x: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.14, ease: [0.2, 0, 0.2, 1] }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            )}

            {/* ── Process step cards ── */}
            {phase === "steps" && (
              <motion.div
                key="steps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Grid: 2 col on md, 1 col on mobile. Last card spans full width. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {steps.slice(0, 4).map((step, i) => (
                    <motion.div
                      key={step.num}
                      className="relative rounded-2xl p-7 md:p-8 flex flex-col gap-4 overflow-hidden"
                      style={{
                        background: "rgba(42,92,24,0.07)",
                        border:     "1.5px solid rgba(42,92,24,0.1)",
                      }}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: [0.2, 0, 0.2, 1] }}
                    >
                      {/* Big faded number in background */}
                      <span
                        className="absolute right-5 top-3 font-black select-none pointer-events-none"
                        style={{
                          fontFamily:    "var(--font-nunito), sans-serif",
                          fontSize:      "clamp(4rem, 8vw, 7rem)",
                          letterSpacing: "-0.04em",
                          color:         G,
                          opacity:       0.06,
                          lineHeight:    1,
                        }}
                      >
                        {step.num}
                      </span>

                      {/* Small step number */}
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ color: G, opacity: 0.35 }}
                      >
                        {step.num}
                      </span>

                      <h3
                        className="leading-tight tracking-tight"
                        style={{
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontWeight: 900,
                          fontSize:   "clamp(1.2rem, 2vw, 1.55rem)",
                          color:      G,
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: G, opacity: 0.55 }}
                      >
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}

                  {/* Step 05 — full width, solid green accent card */}
                  <motion.div
                    className="md:col-span-2 relative rounded-2xl p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 overflow-hidden"
                    style={{ background: G }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.42, ease: [0.2, 0, 0.2, 1] }}
                  >
                    {/* Big faded number */}
                    <span
                      className="absolute right-8 top-4 font-black select-none pointer-events-none"
                      style={{
                        fontFamily:    "var(--font-nunito), sans-serif",
                        fontSize:      "clamp(5rem, 12vw, 11rem)",
                        letterSpacing: "-0.04em",
                        color:         "#fff",
                        opacity:       0.06,
                        lineHeight:    1,
                      }}
                    >
                      05
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                        05
                      </span>
                      <h3
                        className="leading-tight tracking-tight"
                        style={{
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontWeight: 900,
                          fontSize:   "clamp(1.5rem, 3vw, 2.2rem)",
                          color:      "#fff",
                        }}
                      >
                        {steps[4].title}
                      </h3>
                    </div>

                    <p
                      className="text-[15px] leading-relaxed md:max-w-sm"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {steps[4].desc}
                    </p>

                    {/* CTA pill */}
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-2 text-[11px] font-black px-6 py-3.5 rounded-full tracking-widest uppercase shrink-0 transition-all duration-150"
                      style={{ background: "#BEFF00", color: "#0D1F0A" }}
                    >
                      {lang === "no" ? "Start nå →" : "Start now →"}
                    </a>
                  </motion.div>

                </div>

                {/* Footer note */}
                <motion.p
                  className="mt-8 text-[12px]"
                  style={{ color: G, opacity: 0.35 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {footerLine}
                </motion.p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
