"use client";

import { FadeIn } from "./FadeIn";

const profiles = [
  {
    title: "Nettbutikk",
    desc: "Du har et produkt som selger og vil skalere med Meta-annonser.",
    dark: false,
  },
  {
    title: "Lokal tjeneste",
    desc: "Du vil ha flere leads, bookinger og lokale kunder — uten å bruke en formue på byrå.",
    dark: false,
  },
  {
    title: "Founder-led brand",
    desc: "Du er produktet og merkevaren. Du vil nå ut til flere — på en måte som faktisk konverterer.",
    dark: false,
  },
  {
    title: "Ambisiøs småbedrift",
    desc: "Du er klar for neste steg og vil vite hva som faktisk virker — ikke bare hva som ser bra ut.",
    dark: true,
  },
];

export default function WhoItsFor() {
  return (
    <section id="for-hvem" className="bg-[#F7F4EE] py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-[#101010]/20" />
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#737373] uppercase">
              Passer for deg som
            </p>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-14 text-[#101010] max-w-2xl">
            Vi er ikke for alle — men er du her, passer det sannsynligvis.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {profiles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className={`rounded-2xl p-7 h-full flex flex-col min-h-[200px] ${
                p.dark
                  ? "bg-[#101010]"
                  : "bg-white border border-black/[0.06]"
              }`}>
                <span className={`text-[10px] font-mono font-bold tracking-[0.18em] mb-auto block pb-8 ${
                  p.dark ? "text-white/20" : "text-[#D0D0D0]"
                }`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`text-[17px] font-black mb-2 leading-snug ${
                    p.dark ? "text-white" : "text-[#101010]"
                  }`}>
                    {p.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${
                    p.dark ? "text-white/45" : "text-[#737373]"
                  }`}>
                    {p.desc}
                  </p>
                </div>
                {p.dark && (
                  <div className="mt-5 pt-5 border-t border-white/[0.08]">
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#BEFF00]"
                    >
                      Start prøvepakken
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
