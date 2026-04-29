"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Du sender oss nettsiden din",
    body: "Vi ser på produktet, tilbudet, målgruppen og nåværende annonser. Alt vi trenger for å forstå hva vi skal lage og hvem vi skal nå.",
  },
  {
    num: "02",
    title: "Vi lager testplan",
    body: "Vi bestemmer hvilke vinkler, hooks og formater som bør testes først – basert på produkt og marked, ikke tilfeldighet.",
  },
  {
    num: "03",
    title: "Vi produserer creatives",
    body: "Du får 10 stillbilder og 10 video ads klare til bruk – med ulike vinkler, tekster og formater for Meta.",
  },
  {
    num: "04",
    title: "Du tester i Meta",
    body: "Vi gir deg en enkel anbefaling for hvordan du setter opp testingen, eller hjelper med oppsett hvis du vil ha det.",
  },
  {
    num: "05",
    title: "Vi dobler ned på det som virker",
    body: "Etter første runde ser vi hvilke vinkler som fikk signaler. Neste runde bygger på det – slik at annonsene alltid blir bedre.",
  },
];

export default function Approach() {
  return (
    <section id="prosess" className="bg-[#080808] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
            Slik fungerer det
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-14 max-w-xl">
            Fra første møte til{" "}
            <span className="text-[#BEFF00]">ferdige annonser</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Desktop connector */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/[0.07]" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.09}>
                <div className="relative">
                  {/* Desktop dot */}
                  <div className="hidden md:block absolute -top-[calc(1.5rem+1px)] left-0">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#BEFF00]" : "bg-white/20"}`} />
                  </div>
                  {/* Mobile left line */}
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/[0.08]" />

                  <div className="md:pt-8 pl-5 md:pl-0">
                    <span className="text-[10px] font-mono font-bold text-[#BEFF00]/55 tracking-widest block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-black text-white mb-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA below */}
        <FadeIn delay={0.25}>
          <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center gap-5">
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Klar til å sette i gang? Det tar bare noen minutter å komme i gang.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center bg-[#BEFF00] text-black text-sm font-bold px-7 py-3.5 hover:bg-white transition-colors duration-200 shrink-0"
            >
              Start med prøvepakke
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
