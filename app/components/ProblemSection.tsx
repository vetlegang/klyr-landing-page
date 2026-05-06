"use client";

import { FadeIn } from "./FadeIn";

const pains = [
  {
    num: "01",
    title: "Svake hooks stopper ikke scrollingen",
    body: "De første to sekundene avgjør om noen ser annonsen din i det hele tatt. Uten testede hooks gir du Meta dårlige signaler fra start — og algoritmen lærer ingenting nyttig.",
  },
  {
    num: "02",
    title: "Annonseutmattelse spiser budsjettet",
    body: "Folk ser samme annonse 8–12 ganger. CTR faller, CPA stiger. Uten en systematisk creative-refresh kjøper du dyrere og dyrere kunder — og ingen ser det komme.",
  },
  {
    num: "03",
    title: "Ingen learning loop = ingen fremgang",
    body: "Tilfeldige tester gir tilfeldig data. Uten et system for å lese signaler og iterere på dem starter du på nytt etter hver kampanje — og mister all oppsamlet kunnskap.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#F7F4EE] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
              Hvorfor annonser slutter å virke
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5 text-[#101010]">
              Problemet er sjelden{" "}
              <em className="not-italic font-light text-[#737373]">Meta.</em>
              <br />
              Det er creative-systemet.
            </h2>
            <p className="text-base md:text-lg text-[#737373] leading-relaxed">
              De fleste bedrifter tester for få vinkler, for sakte og uten
              et system for å lære av signalene de faktisk mottar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="border-l-2 border-[#BEFF00] pl-6 mb-14 max-w-2xl">
            <p className="text-sm md:text-base text-[#737373] leading-relaxed">
              Når du kjører de samme annonsene for lenge, tørker signalene
              opp. Meta har ikke noe nytt å lære. Kostnaden per kunde øker.
              Salgene faller. De fleste tror plattformen svikter —{" "}
              <span className="text-[#101010] font-semibold">
                men det er creative-systemet som mangler.
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.09}>
              <div className="bg-white rounded-2xl border border-black/[0.07] p-8 md:p-10 h-full shadow-sm">
                <span className="text-[10px] font-mono font-bold text-[#A3A3A3] tracking-widest block mb-5">
                  {p.num}
                </span>
                <div className="w-8 h-0.5 bg-[#BEFF00] rounded-full mb-5" />
                <h3 className="text-base font-black text-[#101010] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
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
