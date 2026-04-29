"use client";

import {
  Megaphone,
  FlaskConical,
  ShoppingCart,
  MousePointerClick,
  Database,
  Layers,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: Megaphone,
    title: "Paid Social",
    tag: "Meta · TikTok · Snapchat",
    body: "Kampanjer bygget rundt testing, signaler og lønnsom skalering. Vi driver betalt annonsering som faktisk konverterer – ikke bare eksponering.",
  },
  {
    icon: FlaskConical,
    title: "Creative Strategy",
    tag: "Hooks · Konsepter · Testing",
    body: "Vi utvikler vinkler, hooks, konsepter og annonsevarianter basert på hva markedet faktisk responderer på – ikke hva som ser fint ut.",
  },
  {
    icon: ShoppingCart,
    title: "Search & Shopping",
    tag: "Google · Shopping · PMax",
    body: "Google Search, Shopping og Performance Max med fokus på intensjon, margin og faktisk lønnsomhet – ikke bare volum.",
  },
  {
    icon: MousePointerClick,
    title: "CRO",
    tag: "Landingssider · Konvertering",
    body: "Landingssider og konverteringsløp optimalisert for å gjøre mer av trafikken om til kunder. Fordi trafikk uten konvertering er sløsing.",
  },
  {
    icon: Database,
    title: "Measurement & Attribution",
    tag: "MER · CPA · Incrementality",
    body: "Bedre beslutninger gjennom tracking, attribusjon, MER, CPA, kohorter og incrementality-tankegang. Sannheten i tallene.",
  },
  {
    icon: Layers,
    title: "Growth Systems",
    tag: "Testing · Rapportering · Skalering",
    body: "Et operativt system for testing, læring, rapportering og skalering uke etter uke – ikke tilfeldige kampanjer.",
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="bg-[#080808] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
            Tjenester
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight max-w-2xl mb-16 md:mb-20">
            Tjenester bygget for{" "}
            <span className="text-[#BEFF00]">lønnsom vekst</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 0.07}>
                <div className="group bg-[#080808] p-8 md:p-10 h-full flex flex-col hover:bg-[#0f0f0f] transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#BEFF00]/30 transition-colors duration-300">
                      <Icon size={18} className="text-white/50 group-hover:text-[#BEFF00] transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-white/30 uppercase mb-3">
                    {service.tag}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed flex-1">
                    {service.body}
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
