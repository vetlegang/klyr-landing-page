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
    body: "Vi analyserer markedet ditt og bygger en vinkelbank av testbare argumenter — hooks, USP-er og problemstillinger som selger til akkurat dine kunder.",
  },
  {
    icon: Megaphone,
    title: "Paid Social · Meta",
    body: "Meta er spesialiteten vår. Vi setter opp kampanjer for systematisk testing og lønnsomhet — ikke bare klikk, likes og tomme målinger.",
  },
  {
    icon: Film,
    title: "Creative Production",
    body: "Vi produserer still ads, video ads og variasjoner med én hensikt: generere sterke signaler til Meta-algoritmen. Laget for å konvertere, ikke bare for å se bra ut.",
  },
  {
    icon: Database,
    title: "Tracking & Measurement",
    body: "Vi sørger for at du vet nøyaktig hva som driver salg — slik at vi kan ta beslutninger på data, kutte det som ikke konverterer og skalere det som gjør.",
  },
  {
    icon: MousePointerClick,
    title: "CRO / Landingssider",
    body: "Annonsen er bare halvparten av historien. Vi optimaliserer siden folk lander på slik at trafikken faktisk konverterer til leads og kjøp.",
  },
  {
    icon: Layers,
    title: "Monthly Testing System",
    body: "En fast plan for creative-iterasjon, signal-analyse og forbedring — uke for uke. Du vet alltid hva som testes, hva som virker og hva neste steg er.",
  },
];

export default function GrowthEngine() {
  return (
    <section id="tjenester" className="bg-[#F7F4EE] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-6">
              Tjenester
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight text-[#101010]">
              Én partner.{" "}
              <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
                Alt på ett sted.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <p className="text-[#737373] text-sm md:text-base leading-relaxed mb-4">
                I stedet for å koordinere designer, videoredigerer,
                mediabyrå og strateg — får du alt levert fra ett sted, med
                én plan og ett mål: flere kunder til lavest mulig kostnad.
              </p>
              <p className="text-xs text-[#A3A3A3]">
                Spesialiserer oss på Meta. TikTok og andre kanaler kan
                legges til etter hvert som merkevaren vokser.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-black/[0.07] p-8 md:p-9 h-full flex flex-col hover:shadow-md hover:border-black/[0.12] transition-all duration-300 shadow-sm">
                  <div className="mb-6 w-10 h-10 flex items-center justify-center border border-black/[0.1] rounded-xl bg-[#F7F4EE] group-hover:border-black/[0.2] transition-colors duration-300">
                    <Icon
                      size={17}
                      className="text-[#737373] group-hover:text-[#101010] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#101010] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed flex-1">
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
