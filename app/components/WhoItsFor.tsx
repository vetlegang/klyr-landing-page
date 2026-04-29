"use client";

import { FadeIn } from "./FadeIn";

const audiences = [
  { label: "Selger produkter på nett", icon: "🛒" },
  { label: "Vil ha flere leads eller bookinger", icon: "📈" },
  { label: "Har prøvd Meta Ads, men fått ujevne resultater", icon: "📊" },
  { label: "Mangler tid til å lage annonser selv", icon: "⏱" },
  { label: "Trenger mer creative-volum", icon: "🎯" },
  { label: "Vil teste før du binder deg til et stort byrå", icon: "🔍" },
];

const industries = [
  "Nettbutikker",
  "Supplement-brands",
  "Klesmerker",
  "Lokale bedrifter",
  "Rørleggere og håndverkere",
  "Bilforhandlere",
  "Klinikker",
  "Treningssentre",
  "Restauranter",
  "Eiendomsmeglere",
];

export default function WhoItsFor() {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
            Hvem passer det for
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-4">
            Dette passer for deg som
            <span className="text-[#BEFF00]">...</span>
          </h2>
          <p className="text-sm text-white/35 mb-12 max-w-lg leading-relaxed">
            Du trenger ikke forstå annonsering. Det er vår jobb. Du trenger
            bare å vite hva du selger og hvem du vil nå.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: audience checkboxes */}
          <div>
            <div className="grid grid-cols-1 gap-3">
              {audiences.map((a, i) => (
                <FadeIn key={a.label} delay={i * 0.06}>
                  <div className="flex items-center gap-4 p-4 border border-white/[0.07] hover:border-[#BEFF00]/20 hover:bg-white/[0.02] transition-all duration-200 group">
                    <span className="text-lg leading-none">{a.icon}</span>
                    <span className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                      {a.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: industries */}
          <FadeIn delay={0.1}>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
                Bransjer vi hjelper
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs font-semibold px-3 py-2 border border-white/[0.1] text-white/45 tracking-wide hover:border-[#BEFF00]/30 hover:text-white/70 transition-all duration-200 cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>

              <div className="p-6 bg-[#080808] border border-[#BEFF00]/10">
                <p className="text-sm font-black text-white mb-2">
                  Lokale bedrifter – ja, det passer for deg også.
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Hvis du trenger flere leads, bookinger eller kunder lokalt,
                  kan vi lage creatives som forklarer tilbudet ditt tydeligere
                  – slik at folk faktisk tar kontakt.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
