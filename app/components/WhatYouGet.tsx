"use client";

import { FadeIn } from "./FadeIn";

const deliverables = [
  {
    num: "01",
    title: "20 unike creatives",
    desc: "10 still ads og 10 video ads — produsert for Meta og klare til kjøring i Facebook- og Instagram-annonser.",
    tag: "Still + Video",
  },
  {
    num: "02",
    title: "Ulike hooks og vinkler",
    desc: "Vi analyserer tilbudet og målgruppen din og bygger en testbar vinkelbank — slik at du vet hva som stopper scrollingen.",
    tag: "Strategisk",
  },
  {
    num: "03",
    title: "Klart for Meta",
    desc: "Alt er tilpasset Meta-plattformen og klar til å kjøres direkte i annonsekontoen din. Ingen ekstra redigering nødvendig.",
    tag: "Produksjonsklart",
  },
];

export default function WhatYouGet() {
  return (
    <section id="hva-du-faar" className="bg-white py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-[#101010]/20" />
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#737373] uppercase">
              Hva du får
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-[#101010] max-w-xl">
              20 creatives.{" "}
              <span className="underline underline-offset-[5px] decoration-[#BEFF00] decoration-[3px]">
                5 000 kr.
              </span>{" "}
              Ingen binding.
            </h2>
            <p className="text-[14px] text-[#888] leading-relaxed max-w-xs md:text-right">
              Prøvepakken er laget for bedrifter som vil teste Meta-annonsering
              uten å binde seg til dyre byråavtaler.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {deliverables.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08}>
              <div className="bg-[#F7F4EE] rounded-2xl p-7 h-full flex flex-col border border-black/[0.05]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold text-[#C0C0C0] tracking-[0.2em]">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#888] uppercase bg-white border border-black/[0.07] px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-[17px] font-black text-[#101010] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#737373] leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.26}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/[0.06]">
            <p className="text-[12px] text-[#ABABAB] leading-relaxed max-w-md">
              Shoot er ikke inkludert i basisprisen, men kan legges til direkte i bestillingsskjemaet — fra +3 000 kr.
            </p>
            <a
              href="#kontakt"
              className="shrink-0 inline-flex items-center gap-2 text-[13px] font-bold text-[#101010] hover:text-[#505050] transition-colors"
            >
              Se bestillingsskjema
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
