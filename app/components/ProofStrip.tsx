"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Send nettsiden din",
    desc: "Fyll ut skjemaet med nettside og hva du selger.",
  },
  {
    num: "02",
    title: "Vi finner hooks og vinkler",
    desc: "Vi analyserer tilbudet og målgruppen din og bygger en testbar vinkelbank.",
  },
  {
    num: "03",
    title: "Vi lager 20 creatives",
    desc: "10 still ads og 10 video ads, produsert og tilpasset Meta-plattformen.",
  },
  {
    num: "04",
    title: "Du tester i Meta",
    desc: "Du kjører annonsene i Facebook/Instagram og ser hva som faktisk konverterer.",
  },
];

export default function ProofStrip() {
  return (
    <section className="bg-[#111111] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-4">
            Slik fungerer det
          </p>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.08] tracking-tight mb-12 text-white">
            Fra nettside til 20 Meta-creatives — raskt og konkret.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.07}>
              <div className="bg-[#161616] p-7 md:p-8 h-full">
                <span className="text-[10px] font-mono font-bold text-white/25 tracking-widest block mb-4">
                  {step.num}
                </span>
                <h3 className="text-sm font-black text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-6 md:gap-12">
            {[
              { value: "20", label: "Unike creatives" },
              { value: "5 000", label: "kr eks. mva" },
              { value: "50%", label: "Rabatt første runde" },
              { value: "0", label: "Binding" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-black text-[#BEFF00]">{item.value}</p>
                <p className="text-xs text-white/30 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
