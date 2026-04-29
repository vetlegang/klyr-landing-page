"use client";

import { FadeIn } from "./FadeIn";

const proofCards = [
  {
    metric: "700+",
    unit: "salg på 30 dager",
    category: "Supplement",
    color: "text-[#BEFF00]",
  },
  {
    metric: "800 → 420",
    unit: "kr CPA",
    category: "Paid Social",
    color: "text-white",
  },
  {
    metric: "100+",
    unit: "annonsevarianter/mnd",
    category: "Creative Volume",
    color: "text-[#BEFF00]",
  },
  {
    metric: "3",
    unit: "nye vinnervinkler",
    category: "Creative Strategy",
    color: "text-white",
  },
];

export default function ProofStrip() {
  return (
    <section className="bg-[#080808] border-b border-white/[0.06] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer label */}
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.22em] text-white/20 uppercase mb-8">
            Eksempeldata / erstattes med reelle cases
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
          {proofCards.map((card, i) => (
            <FadeIn key={card.category} delay={i * 0.07}>
              <div className="bg-[#080808] px-6 py-8 md:px-8 md:py-10">
                <p
                  className={`text-3xl md:text-4xl font-black tracking-tight mb-1 ${card.color}`}
                >
                  {card.metric}
                </p>
                <p className="text-sm text-white/50 mb-3">{card.unit}</p>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase">
                  {card.category}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-xs text-white/20 leading-relaxed max-w-lg">
            Når vi publiserer reelle kundecases, viser vi tall som CPA,
            spend, salg, MER og kreative vinkler som faktisk er verifisert.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
