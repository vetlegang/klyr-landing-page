"use client";

import { ShoppingBag, MapPin, User, TrendingUp } from "lucide-react";
import { FadeIn } from "./FadeIn";

const profiles = [
  {
    icon: ShoppingBag,
    title: "Nettbutikk",
    desc: "Du har et produkt som selger og vil skalere med Meta-annonser.",
    accent: false,
  },
  {
    icon: MapPin,
    title: "Lokal tjeneste",
    desc: "Du vil ha flere leads, bookinger og lokale kunder.",
    accent: false,
  },
  {
    icon: User,
    title: "Founder-led brand",
    desc: "Du er produktet og merkevaren — og vil nå ut til flere.",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Ambisiøs småbedrift",
    desc: "Du er klar for neste steg og vil vite hva som faktisk virker.",
    accent: true,
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-[#F7F4EE] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-4">
            Passer for deg som
          </p>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.08] tracking-tight mb-12 text-[#101010]">
            Vi er ikke for alle — men er du her, passer det sannsynligvis.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div
                  className={`rounded-2xl border p-6 h-full flex flex-col shadow-sm ${
                    p.accent
                      ? "bg-[#101010] border-[#101010]"
                      : "bg-white border-black/[0.07]"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 border ${
                      p.accent
                        ? "bg-[#BEFF00] border-[#BEFF00]"
                        : "bg-[#F7F4EE] border-black/[0.1]"
                    }`}
                  >
                    <Icon size={16} className={p.accent ? "text-black" : "text-[#737373]"} />
                  </div>
                  <h3
                    className={`text-sm font-black mb-2 leading-snug ${
                      p.accent ? "text-white" : "text-[#101010]"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      p.accent ? "text-white/55" : "text-[#737373]"
                    }`}
                  >
                    {p.desc}
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
