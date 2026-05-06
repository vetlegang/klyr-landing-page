"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

function formatNOK(amount: number): string {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getRecommendedMinimum(spend: number): number {
  if (spend < 10_000) return 10;
  if (spend < 50_000) return 20;
  if (spend < 100_000) return 30;
  if (spend < 250_000) return 50;
  if (spend < 500_000) return 75;
  if (spend < 1_000_000) return 120;
  return 180;
}

type SignalStatus = "low" | "ok" | "strong";

function getSignal(spend: number, minimum: number): { status: SignalStatus; label: string; desc: string } {
  if (spend < 10_000) {
    return {
      status: "low",
      label: "Lavt budsjett",
      desc: "Start med prøvepakken på 20 creatives og 5 000 kr Meta-spend.",
    };
  }
  if (minimum <= 20) {
    return {
      status: "ok",
      label: "Godt utgangspunkt",
      desc: "Prøvepakken dekker behovet. Start med 20 creatives og bygg derfra.",
    };
  }
  return {
    status: "strong",
    label: "Sterkt testgrunnlag",
    desc: "Du bør teste et høyere volum. Snakk med oss om en custom pakke.",
  };
}

const signalStyle: Record<SignalStatus, { border: string; text: string; dot: string; bg: string }> = {
  low:    { border: "border-amber-500/20",    text: "text-amber-600",    dot: "bg-amber-500",    bg: "bg-amber-50" },
  ok:     { border: "border-[#101010]/20",    text: "text-[#101010]",    dot: "bg-[#BEFF00]",    bg: "bg-[#F7F4EE]" },
  strong: { border: "border-[#101010]/20",    text: "text-[#101010]",    dot: "bg-[#BEFF00]",    bg: "bg-[#F7F4EE]" },
};

export default function CreativeCalculator() {
  const [spend, setSpend] = useState(50_000);
  const pct = ((spend - 5_000) / (1_000_000 - 5_000)) * 100;

  const { minimum, signal } = useMemo(() => {
    const minimum = getRecommendedMinimum(spend);
    const signal = getSignal(spend, minimum);
    return { minimum, signal };
  }, [spend]);

  const style = signalStyle[signal.status];

  return (
    <section id="kalkulator" className="bg-[#F7F4EE] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
            Annonsekalkulator
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-4 text-[#101010] max-w-2xl">
            Beregn hvor mange creatives{" "}
            <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
              du bør teste
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#737373] leading-relaxed max-w-xl mb-14">
            Skriv inn annonsebudsjettet ditt og se hvor mange
            annonsevarianter vi anbefaler per måned.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Input */}
          <FadeIn>
            <div className="bg-white rounded-2xl border border-black/[0.08] p-8 md:p-12 flex flex-col gap-8 shadow-sm">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-xs font-bold tracking-[0.18em] text-[#737373] uppercase">
                    Månedlig annonsebudsjett
                  </label>
                  <motion.span
                    key={spend}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-black text-[#101010] tabular-nums"
                  >
                    {formatNOK(spend)}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min={5_000}
                  max={1_000_000}
                  step={5_000}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #101010 ${pct}%, #E5E2DA ${pct}%)`,
                  }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-[#A3A3A3] font-mono">5 000 kr</span>
                  <span className="text-[10px] text-[#A3A3A3] font-mono">1 000 000 kr</span>
                </div>
              </div>

              {/* Budget tiers reference */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#A3A3A3] uppercase mb-3">
                  Veiledende anbefaling per budsjettsnivå
                </p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { range: "Under 10 000 kr", min: "10 creatives" },
                    { range: "10 000–50 000 kr", min: "20 creatives" },
                    { range: "50 000–100 000 kr", min: "30 creatives" },
                    { range: "100 000–250 000 kr", min: "50 creatives" },
                    { range: "250 000–500 000 kr", min: "75 creatives" },
                    { range: "500 000–1 000 000 kr", min: "120 creatives" },
                    { range: "Over 1 000 000 kr", min: "180 creatives" },
                  ].map((tier) => (
                    <div key={tier.range} className="flex justify-between text-[11px]">
                      <span className="text-[#A3A3A3]">{tier.range}</span>
                      <span className="text-[#737373] font-semibold">{tier.min}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Result */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-black/[0.08] p-8 md:p-12 flex flex-col gap-6 shadow-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase">
                Din anbefaling
              </p>

              {/* Primary result */}
              <div>
                <p className="text-xs text-[#A3A3A3] mb-1 uppercase tracking-wide font-semibold">Anbefalt minimum</p>
                <motion.div
                  key={minimum}
                  initial={{ opacity: 0.5, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-6xl font-black text-[#101010] tabular-nums leading-none">
                    {minimum}
                  </span>
                  <span className="text-lg text-[#737373] font-bold">creatives/mnd</span>
                </motion.div>
              </div>

              {/* Signal badge */}
              <motion.div
                key={signal.status}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 border text-sm font-bold self-start rounded-full ${style.border} ${style.bg}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                <span className={style.text}>{signal.label}</span>
              </motion.div>

              <p className="text-sm text-[#737373] leading-relaxed">{signal.desc}</p>

              {/* Prøvepakke note */}
              <div className="border border-black/[0.08] bg-[#F7F4EE] p-5 rounded-xl">
                <p className="text-xs font-bold text-[#101010] mb-1">Prøvepakken dekker:</p>
                <p className="text-sm text-[#737373]">
                  20 creatives · 10 stills · 10 video ads · 5 000 kr
                </p>
              </div>

              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Dette er ikke en fasit. Det er en praktisk anbefaling for å
                gi Meta nok nytt materiale å teste — slik at du lærer
                raskere hva som faktisk selger.
              </p>

              <a
                href="#kontakt"
                className="mt-2 inline-flex items-center bg-[#101010] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#2a2a2a] transition-colors duration-200 self-start"
              >
                Start med prøvepakke
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
