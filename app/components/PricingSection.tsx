"use client";

import { CheckCircle2, Camera, User, Settings, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const included = [
  "10 still ads",
  "10 video ads",
  "20 unike annonsevarianter",
  "Hooks og vinkler",
  "Tilpasset Meta-testing",
  "Klar til bruk i annonsekonto",
];

const addOns = [
  { icon: Camera, label: "Filming hos dere", price: "+3 000 kr", desc: "Ekte produkt-, butikk- eller teaminnhold." },
  { icon: User, label: "UGC creator shoot", price: "+5 000 kr", desc: "Ekte UGC-innhold med kreatør." },
  { icon: Settings, label: "Meta Ads oppsett / rådgivning", price: "Etter avtale", desc: "Kampanjestruktur, testing og anbefalinger." },
  { icon: ArrowRight, label: "Landingsside / CRO", price: "Etter avtale", desc: "Optimalisering av siden annonsene sender til." },
];

export default function PricingSection() {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
            Priser
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-14">
            Enkle priser.{" "}
            <span className="text-[#BEFF00]">Ingen overraskelser.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-px bg-white/[0.06]">
          {/* Main package */}
          <FadeIn>
            <div className="bg-[#080808] p-8 md:p-10 flex flex-col h-full relative col-span-1 lg:col-span-1">
              <span className="absolute top-0 left-8 -translate-y-1/2 bg-[#BEFF00] text-black text-[9px] font-black px-3 py-1 tracking-[0.15em] uppercase">
                Start her
              </span>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
                Prøvepakke
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-black text-[#BEFF00]">5 000</span>
                <span className="text-base text-white/50 font-bold">kr</span>
              </div>
              <p className="text-xs text-white/25 mb-1">eks. mva</p>
              <p className="text-xs text-white/20 line-through mb-4">
                Vanlig pris: 10 000 kr per runde
              </p>
              <p className="text-xs text-[#BEFF00]/70 font-semibold mb-6">
                50% rabatt på første runde
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} className="text-[#BEFF00] shrink-0" />
                    <span className="text-xs text-white/60">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-white/30 leading-relaxed mb-6">
                Etter prøvepakken: 10 000 kr per runde.
                <br />
                Anbefalt minimum én runde per måned.
              </p>

              <a
                href="#kontakt"
                className="mt-auto inline-flex items-center justify-center bg-[#BEFF00] text-black text-sm font-bold px-6 py-3.5 tracking-tight hover:bg-white transition-colors duration-200"
              >
                Start med prøvepakke
              </a>
            </div>
          </FadeIn>

          {/* Add-ons */}
          <FadeIn delay={0.08}>
            <div className="bg-[#080808] p-8 md:p-10 flex flex-col h-full">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
                Tilvalg
              </p>
              <h3 className="text-lg font-black text-white mb-6 leading-snug">
                Legg til det du trenger
              </h3>
              <div className="flex flex-col gap-4 flex-1">
                {addOns.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div key={addon.label} className="flex items-start gap-3 p-4 border border-white/[0.07]">
                      <div className="w-7 h-7 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon size={12} className="text-white/35" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <span className="text-xs font-bold text-white/75">{addon.label}</span>
                          <span className="text-xs font-black text-[#BEFF00]">{addon.price}</span>
                        </div>
                        <p className="text-[11px] text-white/30 mt-0.5">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Custom package */}
          <FadeIn delay={0.15}>
            <div className="bg-[#060606] p-8 md:p-10 flex flex-col h-full">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
                Skreddersydd
              </p>
              <h3 className="text-lg font-black text-white mb-4 leading-snug">
                Lag din egen pakke
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-8 flex-1">
                Trenger du mer volum, filming, UGC, landingssider eller
                annonsering inkludert? Vi setter sammen en pakke rundt
                budsjettet og målene dine.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-bold px-6 py-3.5 hover:border-[#BEFF00]/40 hover:text-[#BEFF00] transition-colors duration-200 self-start"
              >
                Lag egen pakke <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Disclaimers */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col md:flex-row gap-6 pt-8 border-t border-white/[0.05]">
            <p className="text-xs text-white/25 leading-relaxed max-w-md">
              Alle priser er eks. mva. Annonsebudsjett betales direkte til
              Meta og er ikke inkludert i pakkeprisen.
            </p>
            <p className="text-xs text-white/20 leading-relaxed max-w-md">
              For prøvepakken anbefaler vi minimum 5 000 kr i Meta-spend for
              å få nok signaler. Vi kan hjelpe med anbefaling basert på mål
              og budsjett.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
