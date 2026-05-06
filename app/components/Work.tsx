"use client";

import { FadeIn } from "./FadeIn";

/* ── Visual mockups for each scenario ── */

function NettbutikkMockup() {
  return (
    <div className="h-40 bg-gradient-to-br from-[#F7F4EE] to-[#EDEAE3] rounded-xl mb-6 flex items-center justify-center gap-4 p-4">
      {/* Product card */}
      <div className="bg-white rounded-xl border border-black/[0.08] p-3 shadow-sm w-32 shrink-0">
        <div className="h-16 bg-[#E5E2DA] rounded-lg mb-2.5 flex items-center justify-center">
          <div className="w-8 h-8 bg-[#D5D2CA] rounded-md" />
        </div>
        <p className="text-[10px] font-bold text-[#101010] mb-1 truncate">Produkt XL</p>
        <div className="flex items-center justify-between gap-1">
          <span className="text-[10px] font-black text-[#101010]">499 kr</span>
          <div className="h-4 flex-1 max-w-12 bg-[#101010] rounded-full" />
        </div>
      </div>
      {/* Metrics */}
      <div className="flex flex-col gap-2">
        <div className="bg-white rounded-xl border border-black/[0.08] px-3 py-2 shadow-sm">
          <p className="text-[9px] text-[#A3A3A3] font-semibold">CPA</p>
          <p className="text-xs font-black text-[#101010]">↓ Under mål</p>
        </div>
        <div className="bg-[#BEFF00] rounded-xl px-3 py-2 shadow-sm">
          <p className="text-[9px] text-black/50 font-semibold">Status</p>
          <p className="text-[10px] font-black text-black">Skalering →</p>
        </div>
        <div className="bg-white rounded-xl border border-black/[0.08] px-3 py-2 shadow-sm">
          <p className="text-[9px] text-[#A3A3A3] font-semibold">Hook Rate</p>
          <p className="text-xs font-black text-[#101010]">↑ 68%</p>
        </div>
      </div>
    </div>
  );
}

function KalenderMockup() {
  const days = ["M", "T", "O", "T", "F", "L", "S"];
  const dates = [13, 14, 15, 16, 17, 18, 19];
  const booked = [1, 3]; // indices of booked days
  const highlight = 4; // Friday — best performing

  return (
    <div className="h-40 bg-gradient-to-br from-[#F7F4EE] to-[#EDEAE3] rounded-xl mb-6 flex items-center gap-4 p-4">
      <div className="bg-white rounded-xl border border-black/[0.08] p-3 shadow-sm flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-[#101010]">Oktober 2025</p>
          <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold px-1.5 py-0.5 rounded-full">3 ledige</span>
        </div>
        <div className="grid grid-cols-7 gap-0.5 mb-2">
          {days.map((d, i) => (
            <div key={`${d}-${i}`} className="text-center text-[8px] text-[#A3A3A3] font-bold py-0.5">{d}</div>
          ))}
          {dates.map((date, i) => (
            <div
              key={date}
              className={`text-center text-[9px] rounded py-1 font-semibold ${
                booked.includes(i)
                  ? "bg-[#101010] text-white"
                  : i === highlight
                  ? "bg-[#BEFF00] text-black"
                  : "text-[#737373]"
              }`}
            >
              {date}
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[#A3A3A3]">Booking via Meta Lead Ads</p>
      </div>
      <div className="flex flex-col gap-2 shrink-0">
        <div className="bg-white rounded-xl border border-black/[0.08] px-3 py-2 shadow-sm">
          <p className="text-[9px] text-[#A3A3A3]">Cost / lead</p>
          <p className="text-xs font-black text-[#101010]">↓ 42 kr</p>
        </div>
        <div className="bg-[#101010] rounded-xl px-3 py-2 shadow-sm">
          <p className="text-[9px] text-white/50">Status</p>
          <p className="text-[10px] font-black text-[#BEFF00]">Lønns. →</p>
        </div>
      </div>
    </div>
  );
}

function AdGridMockup() {
  const cards = [
    { label: "Hook 01", status: "Vinner", lime: true },
    { label: "Hook 02", status: "Testing", lime: false },
    { label: "Hook 03", status: "Ny", lime: false },
    { label: "Hook 04", status: "Testing", lime: false },
    { label: "Hook 05", status: "Ny", lime: false },
    { label: "Hook 06", status: "Ny", lime: false },
  ];

  return (
    <div className="h-40 bg-gradient-to-br from-[#F7F4EE] to-[#EDEAE3] rounded-xl mb-6 flex items-center gap-4 p-4">
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`rounded-lg border p-1.5 ${
              card.lime
                ? "bg-[#BEFF00] border-[#BEFF00]/50"
                : "bg-white border-black/[0.08]"
            }`}
          >
            <div className={`h-5 rounded mb-1 ${card.lime ? "bg-black/10" : "bg-[#F0EDE6]"}`} />
            <p className={`text-[8px] font-bold truncate leading-tight ${card.lime ? "text-black" : "text-[#A3A3A3]"}`}>
              {card.status}
            </p>
          </div>
        ))}
      </div>
      <div className="text-right shrink-0">
        <p className="text-xl font-black text-[#101010]">20</p>
        <p className="text-[9px] text-[#A3A3A3] leading-tight">creatives</p>
        <p className="text-[9px] text-[#A3A3A3] leading-tight">per sprint</p>
        <div className="mt-2 text-[9px] bg-[#101010] text-white font-bold px-2 py-1 rounded-full">
          Meta →
        </div>
      </div>
    </div>
  );
}

/* ── Scenario data ── */

const scenarios = [
  {
    label: "Scenario 01",
    title: "Nettbutikk som får klikk, men ikke nok kjøp",
    desc: "Trafikken er der, men CPA er for høy og konverteringsraten for lav til å skalere lønnsomt.",
    problem: "Svake hooks + creative fatigue gir Meta dårlige signaler fra start",
    tester: "10+ nye hooks, produktfordeler som USP og problemvinkler fra kundeperspektiv",
    signaler: "CTR, add-to-cart, CPA og hvilke hooks som faktisk holder oppmerksomheten",
    neste: "Skalerer vinnervinkelen, kutter det som ikke gir data, bygger neste runde",
    visual: <NettbutikkMockup />,
  },
  {
    label: "Scenario 02",
    title: "Lokal tjeneste som vil fylle kalenderen",
    desc: "Kapasiteten er der og tilbudet er godt — men annonsene gir for få leads til en akseptabel kostnad.",
    problem: "Generiske annonser og uklar CTA gir lave konverteringer",
    tester: "Lokale problemvinkler, sosiale bevis og konkrete resultater som hook",
    signaler: "Cost per lead, lead-volum og kvaliteten på henvendelsene",
    neste: "Dobler ned på beste lead-format og skalerer gradvis med trygg CPA",
    visual: <KalenderMockup />,
  },
  {
    label: "Scenario 03",
    title: "DTC-brand med én vinnerannonse som begynner å dø",
    desc: "Du vet hva som har fungert — men ROAS faller og du trenger å finne neste vinner.",
    problem: "Creative fatigue og manglende testbank av nye vinkler",
    tester: "10+ nye vinkler inspirert av det som fungerte, men med ulike hooks og formater",
    signaler: "Hook rate, thumbstop-prosent og CTR vs konverteringsrate",
    neste: "Ny vinnerannonse klar og refresh-plan for å unngå neste fatigue-syklus",
    visual: <AdGridMockup />,
  },
];

export default function Work() {
  return (
    <section className="bg-[#F7F4EE] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-[#737373] uppercase mb-5">
              Typiske vekstscenarioer
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.03] tracking-tight text-[#101010]">
              Problemstillinger vi{" "}
              <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
                kjenner godt
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white border border-black/[0.08] rounded-xl px-4 py-3 max-w-xs shadow-sm">
              <p className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-1">Viktig</p>
              <p className="text-xs text-[#737373] leading-relaxed">
                Illustrative scenarioer. Vi deler reelle cases når vi har
                tillatelse fra kundene.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-black/[0.07] p-7 h-full flex flex-col shadow-sm hover:shadow-md hover:border-black/[0.12] transition-all duration-300">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#A3A3A3] uppercase mb-4 block">
                  {s.label}
                </span>

                {/* Visual mockup */}
                {s.visual}

                <h3 className="text-base font-black text-[#101010] mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* 2x2 detail grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {[
                    { label: "Problem", value: s.problem },
                    { label: "Vi tester", value: s.tester },
                    { label: "Signaler", value: s.signaler },
                    { label: "Neste trekk", value: s.neste },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#F7F4EE] rounded-xl p-3 border border-black/[0.05]">
                      <p className="text-[9px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-[#737373] leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
