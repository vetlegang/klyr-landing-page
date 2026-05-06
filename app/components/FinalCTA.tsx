"use client";

import { FadeIn } from "./FadeIn";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section id="kontakt" className="bg-[#111111] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
              Start prøvepakken
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5 text-white">
              20 unike Meta-creatives.{" "}
              <span className="text-[#BEFF00]">5 000 kr.</span>{" "}
              Ingen binding.
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Send nettsiden din — vi ser på tilbudet og målgruppen din og
              lager 20 creatives klare til bruk i Facebook- og
              Instagram-annonser.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "10 still ads + 10 video ads til Meta",
                "Ulike hooks og vinkler for systematisk testing",
                "50% rabatt på første runde — vanlig pris 10 000 kr",
                "Ingen binding — du bestemmer neste steg",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-[#BEFF00] text-xs leading-5 shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-white/50 leading-snug">{t}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/[0.07]">
              <p className="text-xs text-white/25 leading-relaxed max-w-xs">
                Vi er creatives som jobber med Meta — ikke et tungt byrå med
                lange prosesser og store retainere.
              </p>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.1}>
            <div className="bg-white/[0.05] border border-white/[0.09] rounded-2xl p-7 md:p-8">
              <p className="text-sm font-black text-white mb-1">
                Start med prøvepakken
              </p>
              <p className="text-xs text-white/40 mb-6 leading-relaxed">
                Send nettsiden din — vi ser om prøvepakken passer for deg.
              </p>
              <LeadForm dark />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
