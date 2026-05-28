"use client";

import { FadeIn } from "./FadeIn";
import LeadForm from "./LeadForm";

const G = "#2A5C18";

export default function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="px-6 md:px-14 py-24 md:py-36 border-t"
      style={{ background: "#F5F4F0", borderColor: `rgba(42,92,24,0.1)` }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-28 items-start">

          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
              <p
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: G, opacity: 0.5 }}
              >
                Kontakt
              </p>
            </div>

            <h2
              className="leading-[0.96] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: G,
              }}
            >
              Klar til
              <br />
              å teste?
            </h2>

            <p
              className="text-[14px] leading-relaxed mb-12 max-w-sm"
              style={{ color: G, opacity: 0.5 }}
            >
              Send oss nettsiden din — vi vurderer og tar kontakt
              innen 1 arbeidsdag.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "20 unike creatives klare for testing",
                "5 000 kr · 50% rabatt på første runde",
                "Ingen binding",
              ].map((t) => (
                <div key={t} className="flex items-center gap-4">
                  <span className="w-5 h-px shrink-0" style={{ background: G, opacity: 0.4 }} />
                  <p className="text-[13px]" style={{ color: G, opacity: 0.55 }}>{t}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form — dark green card */}
          <FadeIn delay={0.12}>
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{
                background: G,
                boxShadow: "0 12px 48px rgba(42,92,24,0.28), 0 2px 8px rgba(0,0,0,0.10)",
              }}
            >
              <p
                className="text-[15px] font-black mb-1 tracking-tight text-white"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                Start testpakken
              </p>
              <p className="text-[12px] mb-7 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Vi svarer innen 1 arbeidsdag.
              </p>
              <LeadForm dark />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
