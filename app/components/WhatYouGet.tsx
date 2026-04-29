"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const deliverables = [
  {
    title: "Vi analyserer produktet og tilbudet ditt",
    desc: "Vi ser på hva du selger, til hvem og hva som gjør det unikt.",
  },
  {
    title: "Vi finner sterke vinkler og hooks",
    desc: "Vi bestemmer hvilke argumenter og åpningslinjer som bør testes.",
  },
  {
    title: "Vi lager stillbilder (still ads)",
    desc: "10 statiske annonsevarianter klare til bruk i Meta.",
  },
  {
    title: "Vi lager video ads",
    desc: "10 video-annonsevarianter med ulike hooks og formater.",
  },
  {
    title: "Vi lager variasjoner for testing",
    desc: "Ulike versjoner av tekst, bildevalg, CTA og format.",
  },
  {
    title: "Vi anbefaler hvordan de bør testes",
    desc: "Du får en enkel guide for hvordan du setter opp testingen i Meta.",
  },
  {
    title: "Vi kan hjelpe med anbefalinger om annonsebudsjett",
    desc: "Vi gir konkrete råd om hva du bør bruke for å få signaler raskt.",
  },
  {
    title: "Vi kan lage en ny runde hver måned",
    desc: "Friske creatives jevnlig holder kontoen i bevegelse og algoritmene aktive.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="hva-du-faar" className="bg-[#080808] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: header */}
          <div className="md:sticky md:top-28">
            <FadeIn>
              <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
                Leveransen
              </p>
              <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-6">
                Dette får du{" "}
                <span className="text-[#BEFF00]">fra KLYR</span>
              </h2>
              <p className="text-sm md:text-base text-white/45 leading-relaxed mb-8 max-w-sm">
                Konkret leveranse. Ingen vage strategidokumenter. Alt du
                trenger for å starte testing i Meta.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center bg-[#BEFF00] text-black text-sm font-bold px-7 py-3.5 tracking-tight hover:bg-white transition-colors duration-200"
              >
                Start med prøvepakke
              </a>
            </FadeIn>
          </div>

          {/* Right: deliverables list */}
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {deliverables.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="py-5 flex items-start gap-4">
                  <CheckCircle2
                    size={16}
                    className="text-[#BEFF00] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
