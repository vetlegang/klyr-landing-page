"use client";

import { FadeIn } from "./FadeIn";

const agencyItems = [
  { text: "Store retainere — 20 000–100 000+ kr/mnd", sub: "Terskelen er høy før du ser resultater" },
  { text: "Treg onboarding på 4–8 uker", sub: "Mye møter. Lite produksjon." },
  { text: "Bred kanalstrategi uten tydelig fokus", sub: "Meta, Google, TikTok, SEO — alt på en gang" },
  { text: "Creative som ettertanke", sub: "Mediabyrå ≠ kreativt team" },
  { text: "Generiske rapporter i PowerPoint", sub: "Tall uten klar retning" },
];

const klyrItems = [
  { text: "Konkret creative sprint fra 5 000 kr", sub: "Lav risiko. Klart resultat." },
  { text: "Levering på dager — ikke uker", sub: "Rask oppstart, rask læring" },
  { text: "Meta-first, full fokus", sub: "Én plattform. Bedre signaler." },
  { text: "Creative er selve kjernen", sub: "Hook, vinkel, produksjon, test" },
  { text: "Klare signaler og neste steg", sub: "Du vet hva som fungerte og hva neste runde er" },
];

const benefits = [
  {
    title: "Creative først. Performance alltid.",
    body: "Vi starter i hooken — ikke i rapporten. En god hook skaper signaler. Signaler gir Meta noe å lære av. Det er der vekst starter.",
  },
  {
    title: "Vi bygger systemer, ikke enkeltannonser.",
    body: "Hver creative-runde er en del av en læringsløkke. Vi ser hva som fungerer, bygger videre og kutter det som ikke gir signaler.",
  },
  {
    title: "Meta belønner bedre signaler — ikke flere annonser.",
    body: "Det handler ikke om å teste 100 ting på én gang. Det handler om å finne de riktige vinklene og skalere dem systematisk.",
  },
  {
    title: "Vi kommer fra kreativ praksis, ikke mediabyrå.",
    body: "Vi forstår hva som gjør en annonse minneverdig fra innsiden — ikke bare fra dashboardet. Den kombinasjonen er det få har.",
  },
];

export default function WhyCreatives() {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/40 uppercase mb-5">
            Ikke et vanlig byrå
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Store byråer er bygget for{" "}
            <em className="not-italic font-light text-white/50">store klienter.</em>
          </h2>
          <p className="text-base text-white/50 max-w-xl mb-14 leading-relaxed">
            KLYR er bygget for bedrifter som trenger hastighet, tydelighet
            og annonser som faktisk lærer — uten å betale for det de ikke trenger.
          </p>
        </FadeIn>

        {/* Comparison table */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.07] rounded-2xl overflow-hidden mb-12">
          {/* Agency col */}
          <FadeIn>
            <div className="bg-[#191919] p-8 md:p-10">
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/30 uppercase mb-7">
                Tradisjonelt byrå
              </p>
              <ul className="flex flex-col gap-5">
                {agencyItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-white/20 mt-0.5 shrink-0 text-base leading-none">—</span>
                    <div>
                      <span className="text-sm text-white/28 line-through decoration-white/15 block leading-snug">
                        {item.text}
                      </span>
                      <span className="text-[11px] text-white/20 mt-0.5 block">{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* KLYR col */}
          <FadeIn delay={0.07}>
            <div className="bg-[#161616] p-8 md:p-10 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-flex bg-[#BEFF00] text-black text-[9px] font-black px-2.5 py-1 tracking-[0.1em] uppercase rounded-full">
                  KLYR
                </span>
              </div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/50 uppercase mb-7">
                Slik jobber vi
              </p>
              <ul className="flex flex-col gap-5">
                {klyrItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-[#BEFF00] mt-0.5 shrink-0 text-xs leading-5">✓</span>
                    <div>
                      <span className="text-sm text-white/80 block leading-snug">{item.text}</span>
                      <span className="text-[11px] text-white/35 mt-0.5 block">{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.07}>
              <div className="bg-[#111111] p-7 md:p-9 hover:bg-[#161616] transition-colors">
                <h3 className="text-sm font-black text-white mb-2.5 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {b.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
