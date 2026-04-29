"use client";

import { FadeIn } from "./FadeIn";

const principles = [
  {
    number: "01",
    title: "Kutt det som ikke skalerer",
    body: "Ikke alt som ser bra ut i dashboardet driver faktisk vekst. Vi fjerner støyen.",
  },
  {
    number: "02",
    title: "Finn signalene raskere",
    body: "Kortere testløp. Klarere læring. Raskere beslutninger basert på det som faktisk fungerer.",
  },
  {
    number: "03",
    title: "Bygg systemer, ikke tilfeldige kampanjer",
    body: "Lønnsom vekst krever en operativ struktur – ikke enkeltannonser som tilfeldigvis treffer.",
  },
];

export default function Intro() {
  return (
    <section className="bg-black py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
                Vår overbevisning
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight">
                Kompleks markedsføring.{" "}
                <span className="text-[#BEFF00]">Brutalt enkel prioritering.</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right column */}
          <FadeIn delay={0.12}>
            <p className="text-white/55 text-base md:text-lg leading-relaxed">
              Moderne performance-markedsføring er støyete: plattformer,
              attribusjon, creatives, tracking, AI, målgrupper, budsjetter.
              KLYR hjelper merkevarer å skille det som skaper vekst fra det
              som brenner budsjett – uke etter uke, med disiplin og system.
            </p>
          </FadeIn>
        </div>

        {/* Principles */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/[0.07]">
          {principles.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.1}>
              <div className="bg-black p-8 md:p-10 h-full">
                <span className="text-xs font-mono text-[#BEFF00]/70 mb-5 block">
                  {p.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
