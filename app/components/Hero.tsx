"use client";

import { motion, type Variants } from "framer-motion";

const marqueeWords = [
  "VEKST", "TESTING", "SIGNAL", "CREATIVES", "CPA", "META ADS",
  "HOOKS", "VINKLER", "MER", "SKALERING", "ROAS", "ANNONSERING",
];
const marqueeContent = [...marqueeWords, ...marqueeWords, ...marqueeWords];

const proofCards = [
  { value: "20", label: "creatives per runde" },
  { value: "5 000 kr", label: "første pakke" },
  { value: "10 stills", label: "+ 10 video ads" },
  { value: "Klar", label: "til testing i Meta" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.11, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-[#BEFF00]/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-0">
        {/* Eyebrow */}
        <motion.p
          className="text-xs font-bold tracking-[0.28em] text-white/35 uppercase mb-7"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          KLYR · Performance Marketing
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-[clamp(2.4rem,7.5vw,7rem)] font-black leading-[0.95] tracking-tighter max-w-4xl mb-7"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          Få flere kunder med annonser som faktisk{" "}
          <span className="text-[#BEFF00]">blir testet skikkelig.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl mb-5"
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
        >
          KLYR lager 20 unike annonsevarianter i måneden for bedrifter som
          vil ha flere salg, flere leads og mindre sløsing på Meta.
        </motion.p>

        {/* Explanation */}
        <motion.p
          className="text-sm text-white/35 leading-relaxed max-w-xl mb-10"
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
        >
          Du får stillbilder, video ads, hooks og vinkler klare til testing –
          uten å ansette designer, videoredigerer eller performance-team selv.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
        >
          <a
            href="#provepakke"
            className="inline-flex items-center justify-center bg-[#BEFF00] text-black text-sm font-bold px-8 py-4 tracking-tight hover:bg-white transition-colors duration-200"
          >
            Start med prøvepakke
          </a>
          <a
            href="#hva-du-faar"
            className="inline-flex items-center justify-center border border-white/20 text-white text-sm font-semibold px-8 py-4 hover:border-white/45 hover:bg-white/[0.03] transition-colors duration-200"
          >
            Se hva du får
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="text-xs text-white/30 font-medium tracking-wide mb-12"
          custom={5} initial="hidden" animate="visible" variants={fadeUp}
        >
          20 creatives · 10 stills · 10 video ads · Fra{" "}
          <span className="text-[#BEFF00]/70">5 000 kr</span> eks. mva
        </motion.p>

        {/* Proof cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] max-w-2xl"
          custom={6} initial="hidden" animate="visible" variants={fadeUp}
        >
          {proofCards.map((card) => (
            <div key={card.label} className="bg-black px-5 py-4">
              <p className="text-base font-black text-white mb-0.5">{card.value}</p>
              <p className="text-[10px] text-white/30 leading-tight">{card.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 md:mt-20 border-t border-b border-white/[0.05] py-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee">
          {marqueeContent.map((word, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-5 text-[11px] font-bold tracking-[0.22em] text-white/18 whitespace-nowrap uppercase"
            >
              {word}
              <span className="text-[#BEFF00]/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
