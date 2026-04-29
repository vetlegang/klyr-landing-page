"use client";

import { FadeIn } from "./FadeIn";

const angles = [
  "Pris",
  "Problem",
  "Resultat",
  "Trygghet",
  "Sosialt bevis",
  "Hastverk",
  "Før / etter",
  "Sammenligning",
  "Ekspertforklaring",
  "Kundeopplevelse",
];

const benefits = [
  {
    title: "Flere vinkler",
    body: "Ulike kunder kjøper av ulike grunner. Noen kjøper på pris, andre på problem, andre på resultat. Med flere annonser treffer du flere.",
  },
  {
    title: "Flere signaler",
    body: "Meta lærer av hva folk klikker på, stopper ved og kjøper etter. Flere annonsevarianter gir algoritmen mer å lære av.",
  },
  {
    title: "Raskere læring",
    body: "Jo flere varianter du tester, jo raskere finner du ut hva som faktisk virker – og hva du bør slutte å bruke penger på.",
  },
  {
    title: "Lavere sløsing",
    body: "Når du vet hvilke vinkler som konverterer, kan du kutte de som ikke gjør det og flytte budsjettet dit det virker.",
  },
];

export default function WhyCreatives() {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
            Hvorfor det fungerer
          </p>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5 max-w-2xl">
            Hvorfor trenger du så mange{" "}
            <span className="text-[#BEFF00]">annonsevarianter?</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-10">
          {/* Left: explanation */}
          <div>
            <FadeIn delay={0.05}>
              <p className="text-base md:text-lg text-white/55 leading-relaxed mb-6">
                En annonse er ikke bare et bilde. Det er et argument. Og
                ulike kunder reagerer på ulike argumenter.
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                Noen kjøper på pris. Noen kjøper fordi de kjenner seg igjen i
                problemet. Noen kjøper fordi de ser et resultat de ønsker
                seg. Det betyr at samme produkt kan selges med mange ulike
                vinkler – og du vet ikke hvilken som virker best uten å
                faktisk teste dem.
              </p>
            </FadeIn>

            {/* Example angles */}
            <FadeIn delay={0.1}>
              <p className="text-xs font-bold tracking-[0.18em] text-white/30 uppercase mb-4">
                Eksempel: 10 vinkler for samme produkt
              </p>
              <div className="flex flex-wrap gap-2">
                {angles.map((angle) => (
                  <span
                    key={angle}
                    className="text-xs font-semibold px-3 py-1.5 border border-white/[0.1] text-white/50 tracking-wide"
                  >
                    {angle}
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/25 mt-4 leading-relaxed">
                Hver vinkel er en ny sjanse til å treffe riktig kunde med
                riktig budskap til riktig tid.
              </p>
            </FadeIn>
          </div>

          {/* Right: benefits */}
          <div className="flex flex-col gap-px bg-white/[0.06]">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="bg-black p-6 md:p-7 hover:bg-[#070707] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] mt-2 shrink-0" />
                    <div>
                      <h3 className="text-sm font-black text-white mb-2">
                        {b.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
