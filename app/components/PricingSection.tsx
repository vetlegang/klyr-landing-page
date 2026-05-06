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
    <section className="bg-[#F7F4EE] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
            Priser
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-14 text-[#101010]">
            Enkle priser.{" "}
            <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
              Ingen overraskelser.
            </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main package */}
          <FadeIn>
            <div className="bg-white rounded-2xl border border-black/[0.08] p-8 md:p-10 flex flex-col h-full relative shadow-sm">
              <span className="absolute top-0 left-8 -translate-y-1/2 bg-[#101010] text-white text-[9px] font-black px-3 py-1 tracking-[0.15em] uppercase rounded-full">
                Start her
              </span>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">
                Creative Sprint
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-black text-[#101010]">5 000</span>
                <span className="text-base text-[#737373] font-bold">kr</span>
              </div>
              <p className="text-xs text-[#A3A3A3] mb-1">eks. mva</p>
              <p className="text-xs text-[#A3A3A3] line-through mb-4">
                Vanlig pris: 10 000 kr per runde
              </p>
              <p className="text-xs text-[#737373] font-semibold mb-6">
                50% rabatt på første runde
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} className="text-[#101010] shrink-0" />
                    <span className="text-xs text-[#737373]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#737373] leading-relaxed mb-6">
                Etter prøvepakken: 10 000 kr per runde.
                <br />
                Anbefalt minimum én runde per måned.
              </p>

              <a
                href="#kontakt"
                className="mt-auto inline-flex items-center justify-center bg-[#101010] text-white text-sm font-bold px-6 py-3.5 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200"
              >
                Start med prøvepakke
              </a>
            </div>
          </FadeIn>

          {/* Add-ons */}
          <FadeIn delay={0.08}>
            <div className="bg-white rounded-2xl border border-black/[0.08] p-8 md:p-10 flex flex-col h-full shadow-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">
                Tilvalg
              </p>
              <h3 className="text-lg font-black text-[#101010] mb-6 leading-snug">
                Legg til det du trenger
              </h3>
              <div className="flex flex-col gap-3 flex-1">
                {addOns.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div key={addon.label} className="flex items-start gap-3 p-4 bg-[#F7F4EE] rounded-xl border border-black/[0.06]">
                      <div className="w-7 h-7 border border-black/[0.1] rounded-lg flex items-center justify-center shrink-0 bg-white">
                        <Icon size={12} className="text-[#737373]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <span className="text-xs font-bold text-[#101010]">{addon.label}</span>
                          <span className="text-xs font-black text-[#101010]">{addon.price}</span>
                        </div>
                        <p className="text-[11px] text-[#A3A3A3] mt-0.5">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Custom package */}
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl border border-black/[0.08] p-8 md:p-10 flex flex-col h-full shadow-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">
                Skreddersydd
              </p>
              <h3 className="text-lg font-black text-[#101010] mb-4 leading-snug">
                Lag din egen pakke
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-8 flex-1">
                Trenger du mer volum, filming, UGC, landingssider eller
                annonsering inkludert? Vi setter sammen en pakke rundt
                budsjettet og målene dine.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border border-black/[0.15] text-[#101010] text-sm font-bold px-6 py-3.5 rounded-full hover:bg-black/[0.04] transition-colors duration-200 self-start"
              >
                Lag egen pakke <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Disclaimers */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col md:flex-row gap-6 pt-8 border-t border-black/[0.07]">
            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-md">
              Alle priser er eks. mva. Annonsebudsjett betales direkte til
              Meta og er ikke inkludert i pakkeprisen.
            </p>
            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-md">
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
