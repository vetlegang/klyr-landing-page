"use client";

import { FadeIn } from "./FadeIn";
import LeadForm from "./LeadForm";

const bullets = [
  "20 unike creatives — still ads og video ads til Meta",
  "50% rabatt på første runde — kun 5 000 kr",
  "Ingen binding. Du bestemmer om vi skal hjelpe videre.",
];

export default function Hero() {
  return (
    <section className="bg-[#F7F4EE] pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
              Prøvepakke · Meta-annonser
            </p>
            <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-black leading-[1.04] tracking-tight mb-6 text-[#101010]">
              Test 20 unike{" "}
              <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
                Meta-creatives
              </span>{" "}
              for 5&nbsp;000&nbsp;kr.
            </h1>
            <p className="text-base md:text-lg text-[#737373] leading-relaxed mb-8 max-w-lg">
              Vi lager 20 unike creatives til Facebook- og Instagram-annonser
              — slik at bedriften din kan teste flere hooks og vinkler uten
              dyre byråavtaler. 50% rabatt på første runde. Ingen binding.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] border border-black/20 mt-2 shrink-0" />
                  <span className="text-sm text-[#737373] leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-[#101010]">5 000</span>
                <span className="text-base font-bold text-[#737373]">kr</span>
              </div>
              <span className="text-xs text-[#A3A3A3]">eks. mva</span>
              <span className="text-xs line-through text-[#A3A3A3]">10 000 kr</span>
              <span className="inline-flex bg-[#101010] text-white text-[10px] font-black px-3 py-1 tracking-[0.1em] uppercase rounded-full">
                50% rabatt
              </span>
            </div>
          </FadeIn>

          {/* Right: form card */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-7 md:p-8">
              <p className="text-sm font-black text-[#101010] mb-1">
                Start med prøvepakken
              </p>
              <p className="text-xs text-[#737373] mb-6 leading-relaxed">
                Send nettsiden din — vi ser om prøvepakken passer for deg.
              </p>
              <LeadForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
