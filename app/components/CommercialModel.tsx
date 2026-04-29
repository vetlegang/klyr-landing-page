"use client";

import { FadeIn } from "./FadeIn";

const models = [
  {
    tag: "Hybrid",
    title: "Fast + performance",
    desc: "Lavere fastpris kombinert med bonus på lønnsom vekst. Vi er motivert av det samme som deg: at budsjettet faktisk skaper salg.",
    bullets: [
      "Redusert månedspris",
      "Vekstbonus på definerte KPI-er",
      "Tettere alignment mellom oss og deg",
    ],
    highlight: true,
  },
  {
    tag: "Intensiv",
    title: "Growth Sprint",
    desc: "90 dager med intensiv testing, tracking og kreativ produksjon. For brands som vil finne ut raskt hva som faktisk fungerer.",
    bullets: [
      "Komprimert testperiode",
      "Høyt kreativt volum",
      "Klare læringspunkter og neste steg",
    ],
    highlight: false,
  },
  {
    tag: "Full partner",
    title: "Full Growth Partner",
    desc: "For brands med høyt volum som trenger media buying, creative og måling under ett – med full operativ støtte.",
    bullets: [
      "Media buying + creative + tracking",
      "Ukentlig rapportering og prioritering",
      "Skaleres med din spend",
    ],
    highlight: false,
  },
];

export default function CommercialModel() {
  return (
    <section className="bg-black py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-6">
              Samarbeidsmodell
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight">
              Vi vil heller tjene på{" "}
              <span className="text-[#BEFF00]">vekst enn på timer.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              Standard retainere gjør byråer komfortable. Vi foretrekker
              modeller som knytter oss tettere til resultatene vi skaper –
              fordi vi tror det er riktig for alle parter.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {models.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.09}>
              <div
                className={`h-full flex flex-col p-8 md:p-10 relative ${
                  model.highlight
                    ? "bg-[#0f0f0f] border border-[#BEFF00]/15"
                    : "bg-[#080808] border border-transparent"
                }`}
              >
                {model.highlight && (
                  <span className="absolute top-0 left-8 -translate-y-1/2 text-[9px] font-bold tracking-[0.2em] bg-[#BEFF00] text-black px-3 py-1 uppercase">
                    Mest populær
                  </span>
                )}

                <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase mb-4">
                  {model.tag}
                </p>
                <h3 className="text-xl font-black text-white mb-4 leading-snug">
                  {model.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed mb-7">
                  {model.desc}
                </p>

                <ul className="flex flex-col gap-3 mt-auto">
                  {model.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-white/55">
                      <span className="w-1 h-1 rounded-full bg-[#BEFF00] mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-xs text-white/25 leading-relaxed max-w-lg">
            Endelig modell avhenger av margin, modenhet, tracking og
            annonsebudsjett. Vi avklarer dette i første samtale.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
