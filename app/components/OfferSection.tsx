"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G  = "#2A5C18";
const BG = "#fcfcfc";

type Plan = {
  id: string;
  name: string;
  price?: string;
  unit?: string;
  tag?: string | null;
  desc: string;
  features: string[];
  absent: string[];
  cta: string;
  featured: boolean;
  // Revenue Share only:
  revenueShare?: boolean;
  badge?: string;
  headline?: string;
  subheadline?: string;
  metricValue?: string;
  metricUnit?: string;
  metricNote?: string;
  eligibility?: string;
  qualifier?: string;
  calcLabel?: string;
  calcAnswer?: string;
};

const plansNo: Plan[] = [
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
    id: "revenue-share",
    name: "Revenue Share",
    desc: "For bedrifter vi virkelig tror vi kan skape vekst for, tilbyr vi en resultatbasert modell. Du betaler kun annonsebudsjettet — vi tar kostnaden og risikoen på arbeidet.",
    features: [
      "0 kr i fast honorar",
      "Kreativ produksjon inkludert",
      "Shoot inkludert",
      "UGC inkludert – vi dekker produksjonen",
      "Annonseoppsett og optimalisering",
      "Løpende creative testing",
      "Performance-oppfølging",
    ],
    absent: [],
    cta: "Søk om Revenue Share",
    featured: false,
    revenueShare: true,
    badge: "Performance-modell",
    headline: "0 kr i honorar.",
    subheadline: "Vi tjener når du tjener.",
    metricValue: "20%",
    metricUnit: "av generert overskudd",
    metricNote: "Fujii mottar 20% av overskuddet som genereres gjennom samarbeidet. Du finansierer kun annonsebudsjettet.",
    eligibility: "Kun tilgjengelig for utvalgte bedrifter.",
    qualifier: "Revenue Share tilbys kun etter en vurdering av produkt, marginer og vekstpotensial.",
    calcLabel: "Hvordan beregnes dette?",
    calcAnswer: "Revenue Share beregnes av dokumenterbart overskudd generert gjennom Fujii sine kampanjer, etter annonsekostnader og avtalte direkte kostnader.",
  },
];

const plansEn: Plan[] = [
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
    id: "revenue-share",
    name: "Revenue Share",
    desc: "For businesses we truly believe we can grow, we offer a results-based model. You only fund the ad spend — we take on the cost and risk of the work.",
    features: [
      "0 kr fixed fee",
      "Creative production included",
      "Shoot included",
      "UGC included – we cover production",
      "Ad setup and optimization",
      "Ongoing creative testing",
      "Performance follow-up",
    ],
    absent: [],
    cta: "Apply for Revenue Share",
    featured: false,
    revenueShare: true,
    badge: "Performance model",
    headline: "0 kr in fees.",
    subheadline: "We earn when you earn.",
    metricValue: "20%",
    metricUnit: "of generated profit",
    metricNote: "Fujii receives 20% of the profit generated through the partnership. You only fund the ad budget.",
    eligibility: "Only available to selected businesses.",
    qualifier: "Revenue Share is offered only after an assessment of product, margins and growth potential.",
    calcLabel: "How is this calculated?",
    calcAnswer: "Revenue Share is calculated on documented profit generated through Fujii's campaigns, after ad costs and agreed direct costs.",
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

// ─── Small inline accordion for the "How is this calculated?" explainer ────
function CalcAccordion({ label, answer }: { label?: string; answer?: string }) {
  const [open, setOpen] = useState(false);
  if (!label || !answer) return null;

  return (
    <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(42,92,24,0.08)" }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5"
        style={{ color: G, opacity: 0.65 }}
        aria-expanded={open}
      >
        <span className="text-[11px] font-bold">{label}</span>
        <span
          className="text-[13px] font-light leading-none transition-transform duration-200 select-none"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-[11px] leading-relaxed pt-2" style={{ color: G, opacity: 0.5 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Standard package card (original design, unchanged) ────────────────────
function StandardPlanCard({ plan, i, scrollToContact }: { plan: Plan; i: number; scrollToContact: () => void }) {
  return (
    <motion.div
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
              (e.currentTarget as HTMLElement).style.color = "#fcfcfc";
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
  );
}

// ─── Revenue Share card — same visual language, distinct commercial model ──
function RevenueShareCard({ plan, i, scrollToContact }: { plan: Plan; i: number; scrollToContact: () => void }) {
  return (
    <motion.div
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background:  "#fff",
        border:      "1.5px solid rgba(190,255,0,0.5)",
        boxShadow:   "0 8px 40px rgba(42,92,24,0.10)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute top-4 right-4 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{ background: "#BEFF00", color: "#0D1F0A" }}
        >
          {plan.badge}
        </div>
      )}

      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Plan name */}
        <p
          className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4"
          style={{ color: `rgba(42,92,24,0.5)` }}
        >
          {plan.name}
        </p>

        {/* Headline */}
        <div className="mb-3">
          <span
            className="font-black leading-tight block"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontSize:      "clamp(1.5rem, 2.6vw, 2rem)",
              color:         G,
              letterSpacing: "-0.02em",
            }}
          >
            {plan.headline}
          </span>
          <span
            className="font-black leading-tight block"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontSize:      "clamp(1.5rem, 2.6vw, 2rem)",
              color:         G,
              letterSpacing: "-0.02em",
              opacity:       0.55,
            }}
          >
            {plan.subheadline}
          </span>
        </div>

        <p
          className="text-[13px] leading-relaxed mb-6"
          style={{ color: `rgba(42,92,24,0.5)` }}
        >
          {plan.desc}
        </p>

        {/* Metric block */}
        <div
          className="rounded-xl p-4 md:p-5 mb-6"
          style={{ background: "rgba(42,92,24,0.045)", border: "1px solid rgba(42,92,24,0.08)" }}
        >
          <div className="flex items-baseline gap-2">
            <span
              className="font-black leading-none"
              style={{
                fontFamily:    "var(--font-nunito), sans-serif",
                fontSize:      "clamp(1.9rem, 3vw, 2.4rem)",
                color:         G,
                letterSpacing: "-0.03em",
              }}
            >
              {plan.metricValue}
            </span>
            <span className="text-[12px] font-semibold" style={{ color: `rgba(42,92,24,0.45)` }}>
              {plan.metricUnit}
            </span>
          </div>
          <p className="text-[12px] leading-relaxed mt-2" style={{ color: `rgba(42,92,24,0.45)` }}>
            {plan.metricNote}
          </p>

          <CalcAccordion label={plan.calcLabel} answer={plan.calcAnswer} />
        </div>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="w-full py-3.5 rounded-xl text-[13px] font-black tracking-tight transition-all duration-150 mb-2"
          style={{ background: G, color: "#fff" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#1f4611";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = G;
          }}
        >
          {plan.cta} →
        </button>
        <p className="text-[11px] text-center mb-6" style={{ color: `rgba(42,92,24,0.4)` }}>
          {plan.eligibility}
        </p>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ background: "rgba(42,92,24,0.1)" }} />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map(f => (
            <li key={f} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-[13px] leading-snug" style={{ color: `rgba(42,92,24,0.7)` }}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {plan.qualifier && (
          <p className="text-[11px] leading-relaxed mt-6" style={{ color: `rgba(42,92,24,0.35)` }}>
            {plan.qualifier}
          </p>
        )}
      </div>
    </motion.div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch max-w-4xl">
          {plans.map((plan, i) => (
            plan.revenueShare ? (
              <RevenueShareCard key={plan.id} plan={plan} i={i} scrollToContact={scrollToContact} />
            ) : (
              <StandardPlanCard key={plan.id} plan={plan} i={i} scrollToContact={scrollToContact} />
            )
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
