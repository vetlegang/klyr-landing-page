"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const G = "#2A5C18";

const faqs = [
  {
    q: "Hva får jeg for 5 000 kr?",
    a: "Du får 20 unike creatives klare til bruk i Meta-annonser — 10 still ads og 10 video ads med ulike hooks og vinkler. Vi analyserer tilbudet ditt, finner de sterkeste argumentene og produserer alt tilpasset Facebook og Instagram. Vanlig pris er 10 000 kr, men første runde har 50% rabatt.",
  },
  {
    q: "Er shoot inkludert?",
    a: "Nei. Prøvepakken til 5 000 kr gjelder produksjon av 20 creatives basert på tilgjengelig materiell og enkel grafisk/AI/stock-produksjon. Hvis dere trenger nytt materiale, kan vi komme og filme hos dere for +3 000 kr, eller filme med UGC-person for +5 000 kr.",
  },
  {
    q: "Er det binding?",
    a: "Nei. Prøvepakken er laget for at du skal teste oss uten forpliktelse. Etter første runde bestemmer du selv om du vil fortsette med nye runder eller avslutte.",
  },
  {
    q: "Passer dette for små bedrifter?",
    a: "Ja, absolutt. Prøvepakken er laget nettopp for mindre, ambisiøse bedrifter som vil teste Meta-annonsering uten å binde seg til store byråretainere. Du trenger ikke ha kjørt annonser før.",
  },
  {
    q: "Må jeg ha annonsekonto fra før?",
    a: "Nei. Du trenger en Meta-konto for å kjøre annonsene selv, men vi hjelper deg med alt av creatives og anbefalinger. Har du ikke konto fra før, kan vi hjelpe deg i gang.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-12 py-24 md:py-36" style={{ background: "#F5F4F0" }}>
      <div className="max-w-[1440px] mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
            <p
              className="text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: G, opacity: 0.5 }}
            >
              Spørsmål
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-12 md:gap-20 items-start">

          <FadeIn>
            <h2
              className="leading-[1.05] tracking-tight sticky top-28"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: G,
              }}
            >
              Lurer du på noe?
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <FadeIn key={i} delay={i * 0.04}>
                  <div className="border-t" style={{ borderColor: `rgba(42,92,24,0.1)` }}>
                    <button
                      className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-[15px] font-bold leading-snug transition-colors"
                        style={{ color: G, opacity: isOpen ? 1 : 0.55 }}
                      >
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 mt-1 text-[18px] font-light leading-none transition-transform duration-200 select-none"
                        style={{
                          color: G,
                          opacity: isOpen ? 1 : 0.3,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          display: "inline-block",
                        }}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[14px] leading-relaxed pb-6 pr-10 max-w-2xl"
                            style={{ color: G, opacity: 0.55 }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
            <div className="border-t" style={{ borderColor: `rgba(42,92,24,0.1)` }} />
          </div>

        </div>
      </div>
    </section>
  );
}
