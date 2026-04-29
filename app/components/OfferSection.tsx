"use client";

import { CheckCircle2, Camera, User, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const included = [
  "10 stillbilder (still ads)",
  "10 video ads",
  "20 unike annonsevarianter totalt",
  "Ulike hooks og vinkler per annonse",
  "Tilpasset Meta-testing",
  "Klar til bruk i annonsekontoen din",
  "Anbefaling: minimum 5 000 kr Meta-spend",
];

const addOns = [
  {
    icon: Camera,
    title: "Vi filmer hos dere",
    price: "+3 000 kr",
    desc: "Ekte produkt-, butikk- eller teaminnhold filmet på stedet.",
  },
  {
    icon: User,
    title: "UGC creator shoot",
    price: "+5 000 kr",
    desc: "Ekte brukerinnhold fra ekstern kreatør.",
  },
];

export default function OfferSection() {
  return (
    <section
      id="provepakke"
      className="bg-black py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-4">
              Prøvepakke
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-4">
              Start enkelt: 20 unike creatives{" "}
              <span className="text-[#BEFF00]">for 5 000 kr</span>
            </h2>
            <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-xl">
              En konkret prøvepakke for deg som vil teste om bedre annonser
              kan gi flere salg eller leads – uten å binde seg til et stort
              byrå.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-px bg-white/[0.07]">
          {/* LEFT: package card */}
          <FadeIn>
            <div className="bg-[#080808] p-8 md:p-10 flex flex-col h-full relative">
              {/* Badge */}
              <div className="absolute top-8 right-8">
                <span className="inline-flex bg-[#BEFF00] text-black text-[10px] font-black px-3 py-1.5 tracking-[0.12em] uppercase">
                  50% rabatt første runde
                </span>
              </div>

              {/* Title + price */}
              <div className="pr-36 mb-6">
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Prøvepakke
                  <br />
                  <span className="text-white/40 font-light text-lg">20 annonsevarianter</span>
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#BEFF00] leading-none">5 000</span>
                  <span className="text-lg font-bold text-white/50">kr</span>
                </div>
                <p className="text-xs text-white/25 mt-1 mb-1">eks. mva · første runde</p>
                <p className="text-xs text-white/20 line-through">Vanlig pris: 10 000 kr per runde</p>
              </div>

              {/* Included */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#BEFF00] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/65">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Recommendation */}
              <div className="bg-white/[0.04] border border-white/[0.07] p-4 mb-8 rounded-sm">
                <p className="text-xs text-white/40 leading-relaxed">
                  Vi anbefaler minimum én creative-runde per måned for å
                  holde annonsene ferske og gi algoritmen nye signaler å
                  jobbe med.
                </p>
              </div>

              {/* Add-ons */}
              <div className="mb-8">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase mb-3">
                  Tilvalg
                </p>
                <div className="flex flex-col gap-2.5">
                  {addOns.map((addon) => {
                    const Icon = addon.icon;
                    return (
                      <div
                        key={addon.title}
                        className="flex items-start gap-3 p-3.5 border border-white/[0.07] hover:border-white/[0.14] transition-colors"
                      >
                        <div className="w-7 h-7 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={13} className="text-white/40" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2 flex-wrap">
                            <span className="text-xs font-bold text-white/75">{addon.title}</span>
                            <span className="text-xs font-black text-[#BEFF00]">{addon.price}</span>
                          </div>
                          <p className="text-[11px] text-white/30 mt-0.5 leading-relaxed">{addon.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-[#BEFF00] text-black text-sm font-bold px-7 py-4 tracking-tight hover:bg-white transition-colors duration-200"
                >
                  Start med prøvepakke
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center border border-white/15 text-white/55 text-sm font-medium px-6 py-4 hover:border-white/35 hover:text-white transition-colors duration-200"
                >
                  Book gratis vekstanalyse
                </a>
              </div>
              <p className="text-[11px] text-white/20 mt-3 text-center">
                Ingen lang binding. Første runde er laget for å teste oss.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT: custom package */}
          <FadeIn delay={0.1}>
            <div className="bg-[#060606] p-8 md:p-10 flex flex-col h-full">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase mb-4">
                Skreddersydd
              </p>
              <h3 className="text-xl font-black text-white mb-3 leading-snug">
                Lag din egen pakke
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                Trenger du mer volum, filming, UGC, landingssider eller
                annonsering inkludert? Vi setter sammen en pakke rundt
                budsjettet og målene dine.
              </p>

              <div className="flex flex-col gap-2 mb-8">
                {[
                  "Høyere creative-volum",
                  "Filming og videoproduksjon",
                  "UGC-strategi og kreatørbriefs",
                  "Landing page og konverteringsoptimalisering",
                  "Paid social management i Meta",
                  "Tracking og attribusjon",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/40">
                    <div className="w-1 h-1 rounded-full bg-[#BEFF00]/40 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-bold px-7 py-3.5 hover:border-[#BEFF00]/40 hover:text-[#BEFF00] transition-colors duration-200 self-start mb-auto"
              >
                Lag egen pakke <ArrowRight size={14} />
              </a>

              <div className="mt-10 pt-8 border-t border-white/[0.06] space-y-3">
                <p className="text-[10px] font-bold tracking-[0.18em] text-white/20 uppercase">
                  Viktig å vite
                </p>
                <p className="text-xs text-white/30 leading-relaxed">
                  Annonsebudsjett er ikke inkludert og betales direkte til
                  Meta. For prøvepakken anbefaler vi minimum 5 000 kr i
                  Meta-spend.
                </p>
                <p className="text-xs text-white/20 leading-relaxed">
                  Alle priser er eks. mva. Etter prøvepakken er prisen
                  10 000 kr per creative-runde.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
