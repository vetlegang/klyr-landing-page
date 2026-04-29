"use client";

import { FadeIn } from "./FadeIn";

export default function FinalCTA() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[#BEFF00]/[0.035] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.25em] text-white/30 uppercase mb-6">
            Ta neste steg nå
          </p>
          <h2 className="text-[clamp(2rem,6vw,5rem)] font-black leading-[0.97] tracking-tighter mb-6">
            Vil du teste 20 creatives{" "}
            <span className="text-[#BEFF00]">for 5 000 kr?</span>
          </h2>
          <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-lg mx-auto mb-10">
            Send oss nettsiden din, så ser vi om prøvepakken passer for
            deg – og hva slags vinkler og hooks vi bør teste.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-[#BEFF00] text-black text-sm font-bold px-10 py-4 tracking-tight hover:bg-white transition-colors duration-200"
            >
              Start med prøvepakke
            </a>
            <a
              href="#kalkulator"
              className="inline-flex items-center justify-center border border-white/15 text-white/55 text-sm font-medium px-7 py-4 hover:border-white/30 hover:text-white transition-colors duration-200"
            >
              Beregn annonsebehov
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { value: "Gratis", label: "Første vurdering" },
              { value: "1 dag", label: "Responstid" },
              { value: "Ingen", label: "Binding" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl font-black text-[#BEFF00] mb-0.5">{item.value}</p>
                <p className="text-xs text-white/25 tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
