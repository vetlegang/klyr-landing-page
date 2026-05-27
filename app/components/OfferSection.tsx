"use client";

import { FadeIn } from "./FadeIn";

const G = "#2A5C18";

const included = [
  "20 unike Meta-creatives (still ads + video ads)",
  "Hooks og vinkler basert på tilbudet og målgruppen din",
  "Copy og tekstvarianter for hvert creative",
  "Formatert for Feed, Stories og Reels",
  "Kreativ regi — vi bestemmer hva som bør testes",
  "Levering innen avtalt frist",
  "Ingen binding etter første runde",
];

const pricing = [
  {
    label: "Basis",
    desc: "20 creatives — basert på tilgjengelig materiell",
    price: "5 000",
    featured: true,
  },
  {
    label: "Shoot hos dere",
    desc: "Vi kommer og filmer enkelt materiell",
    price: "+ 3 000",
    featured: false,
  },
  {
    label: "Shoot med UGC",
    desc: "Vi filmer med UGC-person/creator",
    price: "+ 5 000",
    featured: false,
  },
];

export default function OfferSection() {
  return (
    <section id="tilbud" className="px-6 md:px-12 py-24 md:py-36" style={{ background: "#F5F4F0" }}>
      <div className="max-w-[1440px] mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
            <p
              className="text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: G, opacity: 0.5 }}
            >
              Tilbudet
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-36 items-start">

          {/* Left: what's included */}
          <FadeIn>
            <h2
              className="leading-[1.04] tracking-tight mb-12"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: G,
              }}
            >
              Alt du trenger for å starte testing på Meta.
            </h2>
            <ul className="flex flex-col">
              {included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 py-4 border-b first:border-t"
                  style={{ borderColor: `rgba(42,92,24,0.1)` }}
                >
                  <span
                    className="text-[11px] font-mono font-bold shrink-0 mt-[2px] w-5 text-right select-none"
                    style={{ color: G, opacity: 0.25 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-snug" style={{ color: G, opacity: 0.7 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: pricing table */}
          <FadeIn delay={0.1}>
            <div>
              <div
                className="grid grid-cols-[1fr_auto] pb-3 mb-1 border-b"
                style={{ borderColor: `rgba(42,92,24,0.12)` }}
              >
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: G, opacity: 0.35 }}>Pakke</p>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-right" style={{ color: G, opacity: 0.35 }}>Pris eks. mva</p>
              </div>

              {pricing.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1fr_auto] items-start border-b ${item.featured ? "py-6" : "py-5"}`}
                  style={{ borderColor: `rgba(42,92,24,0.08)` }}
                >
                  <div>
                    <p
                      className="text-[15px] font-black tracking-tight leading-snug"
                      style={{ color: G, opacity: item.featured ? 1 : 0.55 }}
                    >
                      {item.label}
                    </p>
                    <p className="text-[12px] mt-1 leading-snug" style={{ color: G, opacity: 0.35 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="font-black leading-none"
                      style={{
                        color: G,
                        opacity: item.featured ? 1 : 0.45,
                        fontSize: item.featured ? "1.75rem" : "1.25rem",
                        fontFamily: "var(--font-nunito), sans-serif",
                      }}
                    >
                      {item.price}
                    </p>
                    <p className="text-[10px] tracking-wide mt-1" style={{ color: G, opacity: 0.25 }}>kr</p>
                  </div>
                </div>
              ))}

              <div className="pt-7 flex flex-col gap-5">
                <p className="text-[12px] leading-relaxed" style={{ color: G, opacity: 0.45 }}>
                  50% rabatt på første runde. Vanlig pris: 10 000 kr for basis.
                  Ingen binding — du bestemmer hva som skjer videre.
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-[11px] font-black px-6 py-3 transition-all duration-150 tracking-widest uppercase w-fit"
                  style={{
                    border: `1.5px solid rgba(42,92,24,0.35)`,
                    color: G,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = G;
                    (e.currentTarget as HTMLElement).style.color = "#F5F4F0";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = G;
                  }}
                >
                  Start testpakken
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
