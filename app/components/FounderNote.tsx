"use client";

import { FadeIn } from "./FadeIn";

export default function FounderNote() {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/30 uppercase mb-8">
              Byrået jeg selv ville brukt
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-light">
              Jeg bygger KLYR for bedrifter som er lei av diffuse
              byråleveranser, lange møter og annonser som aldri blir
              testet skikkelig.
            </p>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="text-base text-white/45 leading-relaxed mb-6">
              Målet er enkelt: flere tydelige annonsevarianter, raskere
              læring og mindre sløsing. Du skal ikke trenge å forstå
              hele Meta-systemet. Du skal få en konkret pakke, tydelige
              anbefalinger og creatives som kan testes.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="text-sm text-white/35 leading-relaxed mb-10">
              Vi er ikke et massebyrå som lover alt. Vi er et lite team
              som leverer konkret og raskt – og som er ærlige om hva som
              virker og hva som ikke gjør det.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-white/10 bg-white/[0.04] flex items-center justify-center text-sm font-black text-white tracking-widest">
                V
              </div>
              <div>
                <p className="text-sm font-bold text-white">Vetle</p>
                <p className="text-xs text-white/30">Founder, KLYR</p>
              </div>
              <a
                href="#kontakt"
                className="ml-auto inline-flex items-center bg-[#BEFF00] text-black text-xs font-bold px-5 py-2.5 tracking-tight hover:bg-white transition-colors duration-200"
              >
                Start med prøvepakke
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
