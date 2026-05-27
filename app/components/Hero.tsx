"use client";

import { motion } from "framer-motion";
import { FujiMountain } from "./Illustrations";

export default function Hero() {
  return (
    <section className="min-h-[92svh] flex flex-col justify-end pt-24 pb-14 md:pt-36 md:pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full relative">

        {/* Mountain illustration — top right, editorial placement */}
        <motion.div
          className="absolute top-0 right-0 -translate-y-6 text-[#0A0A0A]/[0.06] pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <FujiMountain className="w-[180px] md:w-[260px]" />
        </motion.div>

        {/* Kicker */}
        <motion.div
          className="flex items-center gap-3 mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block w-7 h-px bg-[#0A0A0A]/20" />
          <p className="text-[10px] font-bold tracking-[0.3em] text-[#AAA] uppercase">
            Performance Creative — Meta Ads
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-[clamp(3rem,8.5vw,7.5rem)] font-black leading-[0.93] tracking-[-0.02em] text-[#0A0A0A] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Creatives
          <br />
          <span className="text-[#0A0A0A]/15">klare for</span>
          <br />
          testing.
        </motion.h1>

        {/* Bottom strip */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-7 border-t border-black/[0.07]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
        >
          <p className="text-[15px] text-[#888] leading-relaxed max-w-[380px]">
            Vi lager performance-creatives for Meta.
            20 unike ads — klart for testing innen 5–10 arbeidsdager.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8">
            <div>
              <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-black text-[#0A0A0A] leading-none">
                5 000 kr
              </p>
              <p className="text-[11px] text-[#BBB] mt-1.5 tracking-wide">
                eks. mva · ingen binding
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] text-[11px] font-black px-6 py-3 hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-150 tracking-widest uppercase shrink-0"
            >
              Start testpakken
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
