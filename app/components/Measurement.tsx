"use client";

import { FadeIn } from "./FadeIn";

const metrics = [
  {
    label: "CPA",
    title: "Kostnad per anskaffelse",
    body: "Den eneste sannheten om hva en ny kunde faktisk koster deg – ikke hva plattformen forteller deg.",
  },
  {
    label: "MER",
    title: "Marketing Efficiency Ratio",
    body: "Total annonsekostnad delt på total omsetning. Det bredeste bildet av markedsføringseffektiviteten din.",
  },
  {
    label: "Kreativ fatigue",
    title: "Kreativ utmattelse",
    body: "Å vite når en annonse er ferdig å levere – før du kaster mer budsjett etter den.",
  },
  {
    label: "Incrementality",
    title: "Inkrementell effekt",
    body: "Hva er den faktiske veksten som skyldes annonsene dine – og hva hadde skjedd uansett?",
  },
  {
    label: "LTV",
    title: "Livstidsverdi",
    body: "Kunder med høy LTV kan bære en høyere CPA. Vi hjelper deg å forstå hvem du faktisk bør betale for.",
  },
  {
    label: "Margin",
    title: "Marginstyring",
    body: "ROAS uten marginforståelse er meningsløst. Vi jobber alltid med lønnsomheten som kompass.",
  },
];

export default function Measurement() {
  return (
    <section className="bg-black py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-20">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
              Måling og analyse
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight">
              Sannheten ligger i tallene –{" "}
              <span className="text-[#BEFF00]">
                men bare hvis du vet hva du ser etter.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Vi kombinerer plattformdata, kreative signaler,
              marginforståelse og testing for å finne ut hva som faktisk
              driver vekst – og hva som bare bruker penger.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.06]">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.06}>
              <div className="group bg-black p-6 md:p-8 h-full hover:bg-[#0a0a0a] transition-colors duration-300">
                <span className="block text-[#BEFF00] text-xs font-bold tracking-[0.18em] uppercase mb-3">
                  {m.label}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed">
                  {m.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
