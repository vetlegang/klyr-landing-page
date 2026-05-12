"use client";

import { FadeIn } from "./FadeIn";

export default function FounderNote() {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start max-w-4xl">
          <div>
            <FadeIn>
              <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-8">
                Hvorfor Fujii
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-light">
                Jeg startet ikke med byråspråk.{" "}
                <span className="text-white font-normal">Jeg startet med creative.</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.13}>
              <p className="text-base text-white/45 leading-relaxed mb-5">
                Bakgrunnen min er i kreativ produksjon og performance
                marketing. Det betyr at jeg forstår hva som gjør en hook
                uimotståelig, hva som får folk til å stoppe scrollingen, og
                hvordan man bruker Meta-signaler aktivt til å bygge bedre
                annonser over tid — ikke bare rapportere om dem.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="text-sm text-white/35 leading-relaxed mb-10">
                Fujii er ikke et massebyrå. Vi er et lite team som leverer
                konkret og raskt — og som er ærlige om hva som virker og
                hva som ikke gjør det. Du skal alltid forstå hva som skjer,
                og nøyaktig hvorfor.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full shrink-0">
                  {/* Intentional monogram placeholder — replace with photo when available */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/[0.15] flex items-center justify-center">
                    <span className="text-sm font-black text-white tracking-widest">V</span>
                  </div>
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.08]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Vetle Gangeskar</p>
                  <p className="text-xs text-white/30">Founder, Fujii</p>
                </div>
                <a
                  href="#kontakt"
                  className="ml-auto inline-flex items-center bg-[#BEFF00] text-black text-xs font-bold px-5 py-2.5 rounded-full tracking-tight hover:bg-white transition-colors duration-200 shrink-0"
                >
                  Book gratis vurdering
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Pull quote */}
          <FadeIn delay={0.25}>
            <div className="hidden md:block w-64 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase mb-4">
                Tilnærming
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Vi forstår hva som stopper scrollingen",
                  "Vi bygger læringsløkker, ikke enkeltannonser",
                  "Vi kombinerer kreativ praksis og performance",
                  "Vi er ærlige om hva som ikke virker",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#BEFF00] text-xs leading-5 shrink-0">✓</span>
                    <span className="text-xs text-white/40 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
