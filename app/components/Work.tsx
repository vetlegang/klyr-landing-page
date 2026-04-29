"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const cases = [
  {
    industry: "Supplement-brand",
    category: "Paid Social · Creative Strategy",
    headline:
      "Skalerte vinnende annonsevinkler og senket CPA gjennom raskere kreativ testing.",
    metrics: [
      { label: "CPA-reduksjon", value: "↓ 34%" },
      { label: "Testvolum", value: "3× raskere" },
    ],
  },
  {
    industry: "Fashion-nettbutikk",
    category: "Paid Social · Measurement",
    headline:
      "Forbedret MER ved å rydde opp i kampanjestruktur og kreative signaler.",
    metrics: [
      { label: "MER-forbedring", value: "+0.8" },
      { label: "Budsjetteffektivitet", value: "↑ signifikant" },
    ],
  },
  {
    industry: "Home & living",
    category: "Paid Social · CRO · Creative",
    headline:
      "Bygget ny paid social-funnel med tydeligere hooks, bedre landingssider og mer effektiv retargeting.",
    metrics: [
      { label: "Konverteringsrate", value: "↑ 41%" },
      { label: "ROAS", value: "Lønnsom skala" },
    ],
  },
];

export default function Work() {
  return (
    <section id="arbeid" className="bg-black py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
              Arbeid
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight">
              Resultater som{" "}
              <span className="text-[#BEFF00]">faktisk teller</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/40 text-sm max-w-xs">
              Vi erstatter disse kortene med reelle cases etter hvert som vi
              kan dele dem.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {cases.map((c, i) => (
            <FadeIn key={c.industry} delay={i * 0.1}>
              <div className="group bg-black p-8 md:p-10 h-full flex flex-col hover:bg-[#0a0a0a] transition-colors duration-300 cursor-pointer">
                {/* Category */}
                <p className="text-[10px] font-semibold tracking-[0.18em] text-white/30 uppercase mb-3">
                  {c.category}
                </p>

                {/* Industry */}
                <h3 className="text-lg font-bold text-white mb-5 leading-snug">
                  {c.industry}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-[#BEFF00] mb-6 group-hover:w-16 transition-all duration-300" />

                {/* Headline */}
                <p className="text-sm text-white/55 leading-relaxed mb-8 flex-1">
                  {c.headline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-[#BEFF00] text-lg font-black leading-none mb-1">
                        {m.value}
                      </p>
                      <p className="text-xs text-white/35">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-xs font-semibold text-white/30 group-hover:text-[#BEFF00] transition-colors duration-300">
                  <span>Les mer</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
