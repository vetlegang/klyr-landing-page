"use client";

import { FadeIn } from "./FadeIn";

const G = "#2A5C18";

const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "Du sender oss nettside og hva du selger. Vi responderer innen 1 arbeidsdag med en konkret vurdering.",
  },
  {
    num: "02",
    title: "Vinkler og hooks",
    desc: "Vi analyserer tilbudet og målgruppen og velger de sterkeste kreative vinklene og argumentene for testing.",
  },
  {
    num: "03",
    title: "Produksjon",
    desc: "20 creatives produsert og tilpasset Meta — still ads og video ads, klar til å kjøres direkte.",
  },
  {
    num: "04",
    title: "Testing",
    desc: "Du kjører annonsene i Facebook/Instagram og finner hva som faktisk konverterer for din bedrift.",
  },
];

export default function Process() {
  return (
    <section id="prosess" className="px-6 md:px-12 py-24 md:py-36" style={{ background: "#F5F4F0" }}>
      <div className="max-w-[1440px] mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
            <p
              className="text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: G, opacity: 0.5 }}
            >
              Prosess
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div
                className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_200px_1fr] items-start gap-6 md:gap-10 py-8 md:py-10 border-t"
                style={{ borderColor: `rgba(42,92,24,0.1)` }}
              >
                <span
                  className="text-[11px] font-mono font-bold tracking-[0.15em] pt-1"
                  style={{ color: G, opacity: 0.25 }}
                >
                  {step.num}
                </span>

                <h3
                  className="leading-tight tracking-tight"
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                    color: G,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[14px] leading-relaxed col-span-2 md:col-span-1 -mt-2 md:mt-0 ml-[38px] md:ml-0"
                  style={{ color: G, opacity: 0.5 }}
                >
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
          <div className="border-t" style={{ borderColor: `rgba(42,92,24,0.1)` }} />
        </div>

        <FadeIn delay={0.35}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
            <p className="text-[13px]" style={{ color: G, opacity: 0.45 }}>
              Fra brief til levering — typisk 5–10 arbeidsdager.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-[11px] font-black px-5 py-3 rounded-full transition-all duration-150 tracking-widest uppercase w-fit"
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
              Start nå
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
