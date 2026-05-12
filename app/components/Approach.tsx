"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Marked & tilbud",
    body: "Vi analyserer hva du selger, hvem som kjøper og hva som gjør tilbudet ditt unikt.",
  },
  {
    num: "02",
    title: "Hook research",
    body: "Vi finner åpningslinjene som stopper scrollingen — basert på marked og data, ikke magefølelse.",
  },
  {
    num: "03",
    title: "Vinkelbank",
    body: "Vi bygger en testbar bank av argumenter: pris, problem, resultat, trygghet og mer.",
  },
  {
    num: "04",
    title: "Creative-produksjon",
    body: "10 still ads og 10 video ads klare for Meta — laget for å generere sterke signaler.",
  },
  {
    num: "05",
    title: "Meta-test",
    body: "Du kjører annonsene. Vi gir konkrete anbefalinger for testoppsett og budsjett.",
  },
  {
    num: "06",
    title: "Signal-lesing",
    body: "Vi leser hva Meta returnerer: hook rate, CTR, CPA og hvilke vinkler som overlever.",
  },
  {
    num: "07",
    title: "Iterasjon & skalering",
    body: "Neste runde bygger på det som fungerte. Hvert sprint er smartere enn det forrige.",
  },
];

export default function Approach() {
  return (
    <section id="metode" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
            Vår metode
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5 text-[#101010]">
            Fujii Creative Loop
          </h2>
          <p className="text-sm md:text-base text-[#737373] leading-relaxed max-w-xl mb-10">
            Et systematisk kreativt feedback-system — fra markedsforståelse
            til skalering. Hvert steg bygger på det forrige.
          </p>
        </FadeIn>

        {/* Visual pill flow — compact overview */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-2 flex-wrap bg-[#F7F4EE] border border-black/[0.07] rounded-2xl p-5 mb-14 shadow-sm">
            {steps.map((step, i) => (
              <span key={step.num} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-white border border-black/[0.1] rounded-full px-3.5 py-1.5 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-[#101010] text-white text-[8px] font-black flex items-center justify-center shrink-0">
                    {parseInt(step.num)}
                  </span>
                  <span className="text-xs font-semibold text-[#101010]">{step.title}</span>
                </span>
                {i < steps.length - 1 && (
                  <span className="text-[#C3C0BA] text-xs shrink-0">→</span>
                )}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Row 1: steps 1–4 */}
        <div className="relative mb-8">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-black/[0.07]" />
          <div className="grid md:grid-cols-4 gap-6 md:gap-5">
            {steps.slice(0, 4).map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div className="relative">
                  <div className="hidden md:flex absolute -top-[calc(1.5rem+1px)] left-0 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#101010]" />
                  </div>
                  <div className="md:pt-8 pl-5 md:pl-0">
                    <span className="text-[10px] font-mono font-bold text-[#A3A3A3] tracking-widest block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-black text-[#101010] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#737373] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Row 2: steps 5–7 (step 7 spans 2 cols for visual prominence) */}
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-black/[0.07]" />
          <div className="grid md:grid-cols-4 gap-6 md:gap-5">
            {steps.slice(4, 6).map((step, i) => (
              <FadeIn key={step.num} delay={(i + 4) * 0.08}>
                <div className="relative">
                  <div className="hidden md:flex absolute -top-[calc(1.5rem+1px)] left-0 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black/[0.15]" />
                  </div>
                  <div className="md:pt-8 pl-5 md:pl-0">
                    <span className="text-[10px] font-mono font-bold text-[#A3A3A3] tracking-widest block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-black text-[#101010] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#737373] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Step 07 — spanning 2 cols, highlighted */}
            <FadeIn delay={6 * 0.08} className="md:col-span-2">
              <div className="relative">
                <div className="hidden md:flex absolute -top-[calc(1.5rem+1px)] left-0 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#BEFF00] border-2 border-[#BEFF00]/50" />
                </div>
                <div className="md:pt-8 pl-5 md:pl-0 bg-[#F7F4EE] rounded-2xl border border-black/[0.07] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#A3A3A3] tracking-widest">
                      07
                    </span>
                    <span className="inline-flex bg-[#BEFF00] text-black text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-wide">
                      Loop-start
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#101010] mb-2 leading-snug">
                    {steps[6].title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{steps[6].body}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="mt-16 pt-10 border-t border-black/[0.07] flex flex-col md:flex-row items-start md:items-center gap-5">
            <p className="text-sm text-[#737373] max-w-xs leading-relaxed">
              Vil du se hvordan vi ville kjørt loopen for din bedrift?
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center bg-[#101010] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#2a2a2a] transition-colors duration-200 shrink-0"
            >
              Få en gratis creative-vurdering
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
