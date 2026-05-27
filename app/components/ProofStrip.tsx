"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Send nettsiden din",
    desc: "Fyll ut skjemaet med nettside og hva du selger. Vi tar kontakt innen 1 arbeidsdag.",
  },
  {
    num: "02",
    title: "Vi finner hooks og vinkler",
    desc: "Vi analyserer tilbudet og målgruppen og bygger en testbar vinkelbank med de sterkeste argumentene.",
  },
  {
    num: "03",
    title: "20 creatives produsert",
    desc: "10 still ads og 10 video ads — produsert og tilpasset Meta-plattformen, klar til kjøring.",
  },
  {
    num: "04",
    title: "Du tester i Meta",
    desc: "Kjør annonsene i Facebook/Instagram og finn hva som faktisk konverterer for din bedrift.",
  },
];

const stats = [
  { value: "20", label: "Unike creatives" },
  { value: "5 000", label: "kr eks. mva" },
  { value: "50%", label: "Rabatt første runde" },
  { value: "0", label: "Binding" },
];

export default function ProofStrip() {
  return (
    <section className="bg-[#0D0D0D] py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-white/20" />
            <p className="text-[10px] font-bold tracking-[0.28em] text-white/30 uppercase">
              Slik fungerer det
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-14 text-white max-w-2xl">
            Fra nettside til 20 Meta-creatives — raskt og konkret.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-14">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.07}>
              <div className="bg-[#141414] p-7 md:p-8 h-full flex flex-col">
                <span className="text-[10px] font-mono font-bold text-white/20 tracking-[0.2em] block mb-8">
                  {step.num}
                </span>
                <h3 className="text-[15px] font-black text-white mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-white/[0.06]">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[2rem] font-black text-[#BEFF00] leading-none mb-1">{s.value}</p>
                <p className="text-[12px] text-white/25">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
