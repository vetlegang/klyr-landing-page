"use client";

import { CheckCircle2, Camera, User, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const included = [
  "10 stillbilder (still ads)",
  "10 video ads",
  "20 unike annonsevarianter totalt",
  "Ulike hooks og vinkler per annonse",
  "Tilpasset Meta-testing",
  "Klar til bruk i annonsekontoen din",
];

const addOns = [
  {
    icon: Camera,
    title: "Vi filmer hos dere",
    price: "+3 000 kr",
    desc: "Ekte produkt-, butikk- eller teaminnhold filmet på stedet.",
  },
  {
    icon: User,
    title: "UGC creator shoot",
    price: "+5 000 kr",
    desc: "Ekte brukerinnhold fra ekstern kreatør.",
  },
];

/* ── Deliverables mockup ── */
function DeliverablesMockup() {
  const hookLines = ["Problem → Løsning", "Pris-vinkel", "Sosiale bevis", "Hastverk-hook", "Ekspert-forklaring"];
  const signalBars = [
    { label: "Thumbstop", pct: 74 },
    { label: "Hook rate", pct: 61 },
    { label: "CTR", pct: 48 },
  ];

  return (
    <div className="bg-[#F7F4EE] rounded-2xl border border-black/[0.08] p-6 shadow-sm h-full">
      <p className="text-[10px] font-bold text-[#737373] uppercase tracking-wider mb-5">
        Du mottar i sprinten
      </p>

      {/* Hook bank */}
      <div className="mb-5 bg-white rounded-xl border border-black/[0.07] p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-black text-[#101010]">Hook Bank</p>
          <span className="text-[10px] bg-[#101010] text-white px-2.5 py-0.5 rounded-full font-bold">
            5+ hooks
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {hookLines.map((h) => (
            <div key={h} className="flex items-center gap-2.5 py-1.5 border-b border-black/[0.05] last:border-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] border border-black/20 shrink-0" />
              <span className="text-xs text-[#737373]">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Creative batch */}
      <div className="mb-5 bg-white rounded-xl border border-black/[0.07] p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-black text-[#101010]">Creative Batch</p>
          <span className="text-[10px] text-[#737373] font-semibold">20 varianter</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 mb-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg border flex items-center justify-center ${
                i < 2
                  ? "bg-[#BEFF00] border-[#BEFF00]/50"
                  : i < 5
                  ? "bg-[#101010] border-[#101010]"
                  : "bg-[#F7F4EE] border-black/[0.08]"
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-sm ${
                i < 2 ? "bg-black/20" : i < 5 ? "bg-white/20" : "bg-[#E5E2DA]"
              }`} />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#A3A3A3]">Stills: 10 · Video: 10</p>
      </div>

      {/* Signal report */}
      <div className="bg-white rounded-xl border border-black/[0.07] p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-black text-[#101010]">Signal Rapport</p>
          <span className="text-[10px] text-[#A3A3A3] font-mono">Runde 1</span>
        </div>
        <div className="flex flex-col gap-2">
          {signalBars.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-[#737373]">{s.label}</span>
                <span className="font-bold text-[#101010]">~{s.pct}%</span>
              </div>
              <div className="h-1.5 bg-[#F0EDE6] rounded-full">
                <div className="h-full bg-[#101010] rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[#A3A3A3] mt-3">
          *Illustrativ eksempeldata — ikke reelle klientresultater
        </p>
      </div>
    </div>
  );
}

export default function OfferSection() {
  return (
    <section id="provepakke" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-4">
              Creative Sprint · Lavrisiko inngang
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-4 text-[#101010]">
              Test oss med{" "}
              <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
                20 creatives for 5 000 kr
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#737373] leading-relaxed max-w-xl">
              Dette er ikke billig arbeid — det er en fokusert sprint der vi
              viser deg nøyaktig hvordan vi tenker. Du ser hva vi leverer
              før du bestemmer deg for noe mer.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* LEFT: package details */}
          <FadeIn>
            <div className="bg-[#F7F4EE] rounded-2xl border border-black/[0.08] p-8 md:p-10 flex flex-col h-full shadow-sm">
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-flex bg-[#101010] text-white text-[10px] font-black px-3 py-1.5 tracking-[0.12em] uppercase rounded-full">
                  50% rabatt første runde
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-[#101010] mb-3 leading-tight">
                  Creative Sprint
                  <br />
                  <span className="text-[#737373] font-light text-lg">20 annonsevarianter</span>
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#101010] leading-none">5 000</span>
                  <span className="text-lg font-bold text-[#737373]">kr</span>
                </div>
                <p className="text-xs text-[#A3A3A3] mt-1 mb-1">eks. mva · første runde</p>
                <p className="text-xs text-[#A3A3A3] line-through">Vanlig pris: 10 000 kr per runde</p>
              </div>

              {/* Included */}
              <ul className="flex flex-col gap-2.5 mb-7">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#101010] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#737373]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Add-ons */}
              <div className="mb-7">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase mb-3">
                  Tilvalg
                </p>
                <div className="flex flex-col gap-2.5">
                  {addOns.map((addon) => {
                    const Icon = addon.icon;
                    return (
                      <div
                        key={addon.title}
                        className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-black/[0.07] hover:border-black/[0.14] transition-colors"
                      >
                        <div className="w-7 h-7 border border-black/[0.1] rounded-lg flex items-center justify-center shrink-0 bg-[#F7F4EE]">
                          <Icon size={13} className="text-[#737373]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2 flex-wrap">
                            <span className="text-xs font-bold text-[#101010]">{addon.title}</span>
                            <span className="text-xs font-black text-[#101010]">{addon.price}</span>
                          </div>
                          <p className="text-[11px] text-[#A3A3A3] mt-0.5 leading-relaxed">{addon.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-[#101010] text-white text-sm font-bold px-7 py-4 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200"
                >
                  Start med prøvepakke
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center border border-black/[0.15] text-[#737373] text-sm font-medium px-6 py-4 rounded-full hover:border-black/[0.3] hover:text-[#101010] transition-colors duration-200"
                >
                  Book gratis vurdering
                </a>
              </div>
              <p className="text-[11px] text-[#A3A3A3] mt-3 text-center">
                Ingen binding. Første sprint er laget for å teste oss.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT: deliverables mockup */}
          <FadeIn delay={0.1}>
            <DeliverablesMockup />
          </FadeIn>
        </div>

        {/* Custom package — below the main grid */}
        <FadeIn delay={0.15}>
          <div className="bg-[#F7F4EE] rounded-2xl border border-black/[0.08] p-7 md:p-9 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase mb-2">
                  Trenger du mer?
                </p>
                <h3 className="text-lg font-black text-[#101010] mb-2">Lag din egen pakke</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Mer volum, filming, UGC, landingssider eller annonsering
                  inkludert? Vi setter sammen en pakke rundt budsjettet og
                  målene dine.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:w-auto">
                {["Høyere volum", "Filming", "UGC", "Landing page", "Meta management", "Tracking"].map((item) => (
                  <span key={item} className="text-xs text-[#737373] border border-black/[0.1] px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[#101010] text-white text-sm font-bold px-6 py-3.5 rounded-full hover:bg-[#2a2a2a] transition-colors duration-200 shrink-0"
              >
                Lag egen pakke <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
