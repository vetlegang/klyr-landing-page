"use client";

import {
  FlaskConical,
  Megaphone,
  Film,
  Database,
  MousePointerClick,
  Layers,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const pillars = [
  {
    icon: FlaskConical,
    title: "Creative Strategy",
    body: "Vi finner ut hvilke vinkler, argumenter og budskap som selger produktet ditt – basert på markedet, ikke mavefølelse. Du vet hva vi tester og hvorfor.",
  },
  {
    icon: Megaphone,
    title: "Paid Social",
    body: "Vi setter opp og driver annonsering i Meta som er bygget for testing og lønnsom vekst – ikke bare klikk og eksponering.",
  },
  {
    icon: Film,
    title: "Creative Production",
    body: "Vi lager stillbilder, video ads og variasjoner klare til bruk i annonsekontoen din – produsert for å konvertere, ikke bare se bra ut.",
  },
  {
    icon: Database,
    title: "Tracking & Measurement",
    body: "Vi sørger for at du vet hvem som kjøper, hva de kjøper og hva det koster å skaffe dem – slik at du kan ta beslutninger på data, ikke magefølelse.",
  },
  {
    icon: MousePointerClick,
    title: "CRO / Landingssider",
    body: "Vi optimaliserer sidene dine slik at folk som klikker på annonsen faktisk kjøper. Mer trafikk hjelper lite hvis siden ikke konverterer.",
  },
  {
    icon: Layers,
    title: "Monthly Testing System",
    body: "Vi lager en fast plan for testing, læring og forbedring uke for uke – slik at du alltid vet hva som skjer, hva som testes og hva neste steg er.",
  },
];

export default function GrowthEngine() {
  return (
    <section id="tjenester" className="bg-[#080808] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-6">
              Hva vi leverer
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight">
              Én partner.{" "}
              <span className="text-[#BEFF00]">
                Alt på ett sted.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              I stedet for å koordinere designer, videoredigerer, mediabyrå
              og strateg selv – får du alt levert fra ett sted, med én plan
              og ett mål: flere kunder til lavest mulig kostnad.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div className="group bg-[#080808] p-8 md:p-10 h-full flex flex-col hover:bg-[#0d0d0d] transition-colors duration-300">
                  <div className="mb-6 w-9 h-9 flex items-center justify-center border border-white/[0.08] group-hover:border-[#BEFF00]/25 transition-colors duration-300">
                    <Icon
                      size={16}
                      className="text-white/40 group-hover:text-[#BEFF00] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed flex-1">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
