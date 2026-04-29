"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Må jeg kunne Meta Ads fra før?",
    a: "Nei. Du trenger bare å vite hva du selger og hvem du vil nå. Vi hjelper med creatives, vinkler og anbefalinger for hvordan de bør testes. Mange av kundene våre har aldri kjørt Meta Ads selv.",
  },
  {
    q: "Er annonsebudsjett inkludert?",
    a: "Nei. Annonsebudsjett betales direkte til Meta og er ikke inkludert i vår pakke. For prøvepakken anbefaler vi minimum 5 000 kr i Meta-spend for å få nok signaler til å lære. Vi hjelper deg med anbefaling basert på mål og budsjett.",
  },
  {
    q: "Hva betyr 20 creatives?",
    a: "Det betyr 20 unike annonsevarianter – 10 stillbilder og 10 video ads, med ulike hooks, vinkler og formater. Hver variant er en ny sjanse til å treffe kunden med riktig budskap.",
  },
  {
    q: "Kan dere filme for oss?",
    a: "Ja. Filming hos dere kan legges til for 3 000 kr ekstra. UGC creator shoot – der vi bruker en ekstern kreatør – kan legges til for 5 000 kr ekstra. Ta med dette i meldingen når du kontakter oss.",
  },
  {
    q: "Binder jeg meg til noe?",
    a: "Nei. Prøvepakken er laget for at du skal teste oss uten forpliktelse. Etter første runde bestemmer du selv om du vil fortsette med månedlige creative-runder eller bygge en større pakke.",
  },
  {
    q: "Passer dette for lokale bedrifter?",
    a: "Ja, absolutt. Hvis du trenger flere leads, bookinger eller kunder – enten du er rørlegger, frisør, tannlege, bilforhandler eller driver treningssenter – kan vi lage creatives som forklarer tilbudet ditt tydeligere og får folk til å ta kontakt.",
  },
  {
    q: "Hva skjer etter første runde?",
    a: "Vi ser på hvilke vinkler og formater som fikk best respons. Basert på det anbefaler vi neste runde – med nye varianter som bygger på det markedet faktisk responderte på. Slik blir testingen systematisk, ikke tilfeldig.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#080808] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
              Spørsmål og svar
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5">
              Vanlige{" "}
              <span className="text-[#BEFF00]">spørsmål</span>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-xs">
              Ikke funnet svar? Send oss en melding, så svarer vi innen én
              arbeidsdag.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center bg-[#BEFF00] text-black text-sm font-bold px-6 py-3 tracking-tight hover:bg-white transition-colors duration-200"
            >
              Start med prøvepakke
            </a>
          </FadeIn>

          {/* Right: accordion */}
          <div className="flex flex-col divide-y divide-white/[0.07]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <FadeIn key={i} delay={i * 0.04}>
                  <div>
                    <button
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors leading-snug">
                        {faq.q}
                      </span>
                      <span className="shrink-0 mt-0.5">
                        {isOpen ? (
                          <Minus size={15} className="text-[#BEFF00]" />
                        ) : (
                          <Plus size={15} className="text-white/30 group-hover:text-white/60 transition-colors" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-white/45 leading-relaxed pb-5 pr-8">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
