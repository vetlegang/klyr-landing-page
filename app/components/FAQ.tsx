"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Hva får jeg for 5 000 kr?",
    a: "Du får 20 unike creatives klare til bruk i Meta-annonser — 10 still ads og 10 video ads med ulike hooks og vinkler. Vi analyserer tilbudet ditt, finner de sterkeste argumentene og produserer alt tilpasset Facebook og Instagram. Vanlig pris er 10 000 kr, men første runde har 50% rabatt.",
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-4">
            Vanlige spørsmål
          </p>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.08] tracking-tight mb-10 text-[#101010]">
            Lurer du på noe?
          </h2>
        </FadeIn>

        <div className="flex flex-col divide-y divide-black/[0.07]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div>
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-[#737373] group-hover:text-[#101010] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 mt-0.5">
                      {isOpen ? (
                        <Minus size={15} className="text-[#101010]" />
                      ) : (
                        <Plus size={15} className="text-[#A3A3A3] group-hover:text-[#737373] transition-colors" />
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
                        <p className="text-sm text-[#737373] leading-relaxed pb-5 pr-8">
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
    </section>
  );
}
