"use client";

import { FadeIn } from "./FadeIn";

const traits = [
  { label: "Kreativ forståelse", desc: "Vi forstår hva som stopper scrollingen og hva som konverterer." },
  { label: "Kommersiell teft", desc: "Vi tenker i margin, LTV og hva som faktisk driver forretningen videre." },
  { label: "Performance-disiplin", desc: "Vi måler alt, tester systematisk og tar beslutninger på data." },
];

export default function People() {
  return (
    <section className="bg-[#080808] py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
                Hvem vi er
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight mb-8">
                Smartere systemer.{" "}
                <span className="text-[#BEFF00]">Skarpere mennesker.</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                Teknologi gir oss signaler. Mennesker tar beslutningene. KLYR
                kombinerer kreativ forståelse, kommersiell teft og
                performance-disiplin for å skape vekst som faktisk holder.
              </p>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-px bg-white/[0.06]">
            {traits.map((t, i) => (
              <FadeIn key={t.label} delay={i * 0.1}>
                <div className="bg-[#080808] px-8 py-7 hover:bg-[#0f0f0f] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] mt-1.5 shrink-0" />
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {t.label}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
