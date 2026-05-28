"use client";

import { useLanguage } from "../i18n/LanguageContext";

const G = "#2A5C18";

const linksNo = [
  { label: "Arbeid",  href: "#arbeid" },
  { label: "Tilbud",  href: "#tilbud" },
  { label: "Om oss",  href: "/om-oss" },
  { label: "Prosess", href: "#prosess" },
  { label: "FAQ",     href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const linksEn = [
  { label: "Work",    href: "#arbeid" },
  { label: "Offer",   href: "#tilbud" },
  { label: "About",   href: "/om-oss" },
  { label: "Process", href: "#prosess" },
  { label: "FAQ",     href: "#faq" },
  { label: "Contact", href: "#kontakt" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const footerLinks = lang === "no" ? linksNo : linksEn;
  const tagline = lang === "no"
    ? "Performance-creatives for Meta — klare for testing."
    : "Performance creatives for Meta — ready for testing.";
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-14 pt-16 pb-10 md:pt-20 md:pb-12 border-t"
      style={{ background: "#F5F4F0", borderColor: `rgba(42,92,24,0.1)` }}
    >
      <div className="max-w-[1440px] mx-auto">

        {/* Top row: wordmark + character */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p
              className="font-black tracking-[-0.04em] leading-none mb-3"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "clamp(2.5rem,7vw,6rem)",
                color: G,
              }}
            >
              Fujii
            </p>
            <p
              className="text-[12px] leading-relaxed max-w-[200px]"
              style={{ color: G, opacity: 0.4 }}
            >
              {tagline}
            </p>
          </div>

        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-wide transition-opacity duration-150 hover:opacity-100"
              style={{ color: G, opacity: 0.35 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t"
          style={{ borderColor: `rgba(42,92,24,0.08)` }}
        >
          <p className="text-[11px]" style={{ color: G, opacity: 0.3 }}>
            © {year} Fujii AS · Org. 937 775 792 · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/personvern"
              className="text-[11px] transition-opacity duration-150 hover:opacity-60"
              style={{ color: G, opacity: 0.3 }}
            >
              Personvern
            </a>
            <p className="text-[11px] tracking-wide" style={{ color: G, opacity: 0.3 }}>
              Creative Performance · Meta Ads · Norge
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
