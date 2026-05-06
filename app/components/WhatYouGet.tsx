"use client";

import { FadeIn } from "./FadeIn";

const deliverables = [
  {
    num: "01",
    title: "20 unike creatives",
    desc: "10 still ads og 10 video ads — produsert for Meta og klare til bruk i Facebook- og Instagram-annonser.",
  },
  {
    num: "02",
    title: "Flere hooks og vinkler å teste",
    desc: "Ulike åpningslinjer og argumenter slik at du finner hva som faktisk stopper scrollingen og konverterer.",
  },
  {
    num: "03",
    title: "Klart for Facebook og Instagram",
    desc: "Alt er tilpasset Meta-plattformen og klar til å kjøres direkte i annonsekontoen din.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-4">
            Hva du får
          </p>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.08] tracking-tight mb-3 text-[#101010]">
            20 creatives.{" "}
            <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
              5 000 kr.
            </span>{" "}
            Ingen binding.
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-12 max-w-md">
            Prøvepakken er laget for bedrifter som vil teste Meta-annonsering
            uten å binde seg til et dyrt byråopplegg. Vanlig pris 10 000 kr —
            50% rabatt på første runde.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {deliverables.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08}>
              <div className="bg-[#F7F4EE] rounded-2xl border border-black/[0.07] p-7 h-full flex flex-col shadow-sm">
                <span className="text-[10px] font-mono font-bold text-[#A3A3A3] tracking-widest mb-4 block">
                  {item.num}
                </span>
                <h3 className="text-base font-black text-[#101010] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
