"use client";

import { FadeIn } from "./FadeIn";
import LeadForm from "./LeadForm";
import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

const T = {
  no: {
    label:   "Kontakt",
    heading: ["Klar til", "å teste?"],
    sub:     "Send oss nettsiden din — vi vurderer og tar kontakt innen 1 arbeidsdag.",
    bullets: [
      "20 unike creatives klare for testing",
      "5 000 kr · 50% rabatt på første runde",
      "Ingen binding",
    ],
    formTitle: "Start testpakken",
    formSub:   "Vi svarer innen 1 arbeidsdag.",
  },
  en: {
    label:   "Contact",
    heading: ["Ready to", "test us?"],
    sub:     "Send us your website — we assess and get back to you within 1 business day.",
    bullets: [
      "20 unique creatives ready for testing",
      "5 000 kr · 50% off the first round",
      "No commitment",
    ],
    formTitle: "Start the test package",
    formSub:   "We respond within 1 business day.",
  },
};

export default function FinalCTA() {
  const { lang } = useLanguage();
  const t = T[lang];

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
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: G, opacity: 0.5 }}>
                {t.label}
              </p>
            </div>

            <h2
              className="leading-[0.96] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: G }}
            >
              {t.heading[0]}
              <br />
              {t.heading[1]}
            </h2>

            <p className="text-[14px] leading-relaxed mb-12 max-w-sm" style={{ color: G, opacity: 0.5 }}>
              {t.sub}
            </p>

            <div className="flex flex-col gap-3">
              {t.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-4">
                  <span className="w-5 h-px shrink-0" style={{ background: G, opacity: 0.4 }} />
                  <p className="text-[13px]" style={{ color: G, opacity: 0.55 }}>{bullet}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form — dark green card */}
          <FadeIn delay={0.12}>
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{ background: G, boxShadow: "0 12px 48px rgba(42,92,24,0.28), 0 2px 8px rgba(0,0,0,0.10)" }}
            >
              <p
                className="text-[15px] font-black mb-1 tracking-tight text-white"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {t.formTitle}
              </p>
              <p className="text-[12px] mb-7 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {t.formSub}
              </p>
              <LeadForm dark lang={lang} />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
