"use client";

import { FadeIn } from "./FadeIn";

const pains = [
  {
    num: "01",
    title: "Du bruker penger uten å lære",
    body: "Hvis du bare kjører 2–3 annonser, vet du ikke hvilke bilder, tekster eller budskap som faktisk selger. Du betaler for eksponering, ikke innsikt.",
  },
  {
    num: "02",
    title: "Annonsene blir slitne",
    body: "Folk ser samme annonse igjen og igjen. Klikkene faller, kostnaden per kunde øker og resultater stopper. Det kalles annonseutmattelse.",
  },
  {
    num: "03",
    title: "Du mangler system",
    body: "Uten fast produksjon av nye annonser blir annonsering tilfeldig. Og tilfeldige annonser gir tilfeldige resultater – sjelden lønnsom vekst.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl mb-14 md:mb-18">
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
              Hvorfor feiler de fleste
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5">
              Problemet er sjelden at{" "}
              <span className="text-[#BEFF00]">Meta ikke fungerer.</span>
            </h2>
            <p className="text-base md:text-lg text-white/50 leading-relaxed">
              Problemet er at de fleste bedrifter tester for lite, for sakte
              og for tilfeldig.
            </p>
          </div>
        </FadeIn>

        {/* Simple explanation */}
        <FadeIn delay={0.08}>
          <div className="border-l-2 border-[#BEFF00]/25 pl-6 mb-14 max-w-2xl">
            <p className="text-sm md:text-base text-white/45 leading-relaxed">
              Når du kjører de samme annonsene for lenge, blir folk lei. Meta
              får færre signaler å jobbe med. Kostnaden per kunde går opp.
              Salgene går ned. Og de fleste tror det er Meta sin feil –{" "}
              <span className="text-white/70">
                men det er annonsene som er problemet.
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {pains.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.09}>
              <div className="bg-[#080808] p-8 md:p-10 h-full">
                <span className="text-[10px] font-mono font-bold text-white/20 tracking-widest block mb-5">
                  {p.num}
                </span>
                <div className="w-8 h-0.5 bg-[#BEFF00]/40 mb-5" />
                <h3 className="text-base font-black text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
