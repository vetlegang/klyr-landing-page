"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G  = "#2A5C18";
const BG = "#F5F4F0";

const plansNo = [
  {
    id: "basis",
    name: "Testpakken",
    price: "5 000",
    unit: "kr eks. mva",
    tag: null,
    desc: "Kom i gang med Meta-annonsering basert på eksisterende materiell.",
    features: [
      "20 unike Meta-creatives",
      "Still ads + video ads",
      "Hooks og vinkler",
      "Copy til hvert creative",
      "Feed, Stories og Reels",
      "Levering innen avtalt frist",
      "Ingen binding",
    ],
    absent: ["Filming hos dere", "UGC-person/creator"],
    cta: "Velg Testpakken",
    featured: false,
  },
  {
    id: "shoot",
    name: "Testpakken + Shoot",
    price: "8 000",
    unit: "kr eks. mva",
    tag: "Mest populær",
    desc: "Alt i Testpakken, pluss at vi kommer og filmer nytt materiell hos dere.",
    features: [
      "20 unike Meta-creatives",
      "Still ads + video ads",
      "Hooks og vinkler",
      "Copy til hvert creative",
      "Feed, Stories og Reels",
      "Filming hos dere inkludert",
      "Ingen binding",
    ],
    absent: ["UGC-person/creator"],
    cta: "Velg Shoot-pakken",
    featured: true,
  },
  {
    id: "ugc",
    name: "Testpakken + UGC",
    price: "10 000",
    unit: "kr eks. mva",
    tag: null,
    desc: "Alt i Testpakken, pluss filming med UGC-person eller creator.",
    features: [
      "20 unike Meta-creatives",
      "Still ads + video ads",
      "Hooks og vinkler",
      "Copy til hvert creative",
      "Feed, Stories og Reels",
      "Filming med UGC/creator",
      "Ingen binding",
    ],
    absent: [],
    cta: "Velg UGC-pakken",
    featured: false,
  },
];

const plansEn = [
  {
    id: "basis",
    name: "Test Package",
    price: "5 000",
    unit: "kr excl. VAT",
    tag: null,
    desc: "Get started with Meta advertising based on existing material.",
    features: [
      "20 unique Meta creatives",
      "Still ads + video ads",
      "Hooks and angles",
      "Copy for each creative",
      "Feed, Stories and Reels",
      "Delivery within agreed deadline",
      "No commitment",
    ],
    absent: ["On-location shoot", "UGC creator"],
    cta: "Choose Test Package",
    featured: false,
  },
  {
    id: "shoot",
    name: "Test Package + Shoot",
    price: "8 000",
    unit: "kr excl. VAT",
    tag: "Most popular",
    desc: "Everything in the Test Package, plus we come and film new material at your location.",
    features: [
      "20 unique Meta creatives",
      "Still ads + video ads",
      "Hooks and angles",
      "Copy for each creative",
      "Feed, Stories and Reels",
      "On-location shoot included",
      "No commitment",
    ],
    absent: ["UGC creator"],
    cta: "Choose Shoot Package",
    featured: true,
  },
  {
    id: "ugc",
    name: "Test Package + UGC",
    price: "10 000",
    unit: "kr excl. VAT",
    tag: null,
    desc: "Everything in the Test Package, plus filming with a UGC creator.",
    features: [
      "20 unique Meta creatives",
      "Still ads + video ads",
      "Hooks and angles",
      "Copy for each creative",
      "Feed, Stories and Reels",
      "Filming with UGC creator",
      "No commitment",
    ],
    absent: [],
    cta: "Choose UGC Package",
    featured: false,
  },
];

const headingNo = "Velg pakken som passer deg.";
const headingEn = "Choose the package that fits you.";
const subNo = "50% rabatt på første runde. Vanlig pris er det dobbelte — vi gir deg halv pris for å teste oss.";
const subEn = "50% off the first round. Regular price is double — we give you half price to test us.";
const footerNoteNo = "Ingen binding · du bestemmer hva som skjer etter første runde";
const footerNoteEn = "No commitment · you decide what happens after the first round";
const labelNo = "Tilbudet";
const labelEn = "Offer";

function CheckIcon({ dim }: { dim?: boolean }) {
  return (
    <svg
      width="15" height="15" viewBox="0 0 15 15" fill="none"
      style={{ flexShrink: 0, opacity: dim ? 0.25 : 1 }}
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={dim ? "#aaa" : G} fillOpacity={dim ? 0.2 : 0.12} />
      <path
        d="M4.5 7.5l2 2 4-4"
        stroke={dim ? "#aaa" : G}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, opacity: 0.2 }}>
      <circle cx="7.5" cy="7.5" r="7.5" fill="#aaa" fillOpacity={0.15} />
      <path d="M5 5l5 5M10 5l-5 5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function OfferSection() {
  const { lang } = useLanguage();
  const plans    = lang === "no" ? plansNo : plansEn;
  const heading  = lang === "no" ? headingNo : headingEn;
  const sub      = lang === "no" ? subNo : subEn;
  const footerNote = lang === "no" ? footerNoteNo : footerNoteEn;
  const sectionLabel = lang === "no" ? labelNo : labelEn;

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tilbud" className="px-6 md:px-12 py-24 md:py-32" style={{ background: BG }}>
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-14 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: G, opacity: 0.5 }}>
              {sectionLabel}
            </p>
          </div>
          <h2
            className="leading-tight tracking-tight"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(1.75rem, 4vw, 3.2rem)",
              color:         G,
              maxWidth:      "600px",
            }}
          >
            {heading}
          </h2>
          <p className="mt-3 text-[14px] max-w-md" style={{ color: G, opacity: 0.5 }}>
            {sub}
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background:  plan.featured ? G            : "rgba(42,92,24,0.04)",
                border:      plan.featured ? "none"       : "1.5px solid rgba(42,92,24,0.1)",
                boxShadow:   plan.featured ? "0 8px 40px rgba(42,92,24,0.22)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Badge */}
              {plan.tag && (
                <div
                  className="absolute top-4 right-4 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: "#BEFF00",
                    color:      "#0D1F0A",
                  }}
                >
                  {plan.tag}
                </div>
              )}

              <div className="flex flex-col flex-1 p-7 md:p-8">
                {/* Plan name */}
                <p
                  className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4"
                  style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : `rgba(42,92,24,0.5)` }}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className="font-black leading-none"
                    style={{
                      fontFamily: "var(--font-nunito), sans-serif",
                      fontSize:   "clamp(2.2rem, 4vw, 3rem)",
                      color:      plan.featured ? "#fff" : G,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="ml-2 text-[12px] font-semibold"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.45)" : `rgba(42,92,24,0.4)` }}
                  >
                    {plan.unit}
                  </span>
                </div>

                <p
                  className="text-[13px] leading-relaxed mb-8"
                  style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : `rgba(42,92,24,0.5)` }}
                >
                  {plan.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full py-3.5 rounded-xl text-[13px] font-black tracking-tight transition-all duration-150 mb-8"
                  style={
                    plan.featured
                      ? {
                          background: "#BEFF00",
                          color:      "#0D1F0A",
                        }
                      : {
                          background:     "transparent",
                          color:          G,
                          border:         `1.5px solid rgba(42,92,24,0.3)`,
                        }
                  }
                  onMouseEnter={e => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = G;
                      (e.currentTarget as HTMLElement).style.color = "#F5F4F0";
                      (e.currentTarget as HTMLElement).style.border = `1.5px solid ${G}`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = G;
                      (e.currentTarget as HTMLElement).style.border = `1.5px solid rgba(42,92,24,0.3)`;
                    }
                  }}
                >
                  {plan.cta} →
                </button>

                {/* Divider */}
                <div
                  className="w-full h-px mb-6"
                  style={{ background: plan.featured ? "rgba(255,255,255,0.12)" : "rgba(42,92,24,0.1)" }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon />
                      <span
                        className="text-[13px] leading-snug"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.8)" : `rgba(42,92,24,0.7)` }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.absent.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="text-[13px] leading-snug" style={{ color: "rgba(42,92,24,0.25)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-10 text-[12px]"
          style={{ color: G, opacity: 0.35 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {footerNote}
        </motion.p>

      </div>
    </section>
  );
}
