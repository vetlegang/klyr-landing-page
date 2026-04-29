"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

type FormState = {
  navn: string;
  epost: string;
  nettside: string;
  hvaSelger: string;
  budsjett: string;
  pakke: string;
  melding: string;
};

const budsjettOptions = [
  "Under 5 000 kr",
  "5 000–20 000 kr",
  "20 000–50 000 kr",
  "50 000–100 000 kr",
  "100 000 kr+",
];

const pakkeOptions = [
  "Prøvepakke 20 creatives (5 000 kr)",
  "Prøvepakke + filming hos oss (+3 000 kr)",
  "Prøvepakke + UGC creator shoot (+5 000 kr)",
  "Egen pakke – vil diskutere",
];

const inputClass =
  "w-full bg-transparent border border-white/12 text-white text-sm px-4 py-3.5 placeholder-white/20 focus:outline-none focus:border-[#BEFF00]/45 transition-colors duration-200";

const labelClass = "block text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase mb-2";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    navn: "",
    epost: "",
    nettside: "",
    hvaSelger: "",
    budsjett: "",
    pakke: "",
    melding: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-white/35 uppercase mb-5">
              Kontakt
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5">
              Vil du teste 20 creatives{" "}
              <span className="text-[#BEFF00]">for 5 000 kr?</span>
            </h2>
            <p className="text-sm text-white/45 leading-relaxed mb-10 max-w-sm">
              Send oss nettsiden din og hva du selger. Vi tar kontakt innen
              én arbeidsdag med en vurdering av hva som bør testes.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "Vi svarer innen 1 arbeidsdag",
                "Gratis første vurdering – ingen forpliktelse",
                "Ingen binding etter første runde",
                "Du trenger ikke forstå Meta Ads fra før",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] mt-1.5 shrink-0" />
                  <p className="text-sm text-white/40 leading-snug">{t}</p>
                </div>
              ))}
            </div>

            {/* Price reminder */}
            <div className="border border-white/[0.07] p-5 bg-white/[0.02]">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-[#BEFF00]">5 000 kr</span>
                <span className="text-xs text-white/35">eks. mva · første runde</span>
              </div>
              <p className="text-xs text-white/25 line-through mb-1">Vanlig pris: 10 000 kr</p>
              <p className="text-xs text-[#BEFF00]/60 font-semibold">50% rabatt på første runde</p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[500px]">
                <div className="w-12 h-12 rounded-full bg-[#BEFF00] flex items-center justify-center mb-6">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <path stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 11l5 5 9-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Takk – vi tar kontakt snart.
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  Vi har mottatt meldingen din og kommer tilbake til deg
                  innen 1 arbeidsdag med en vurdering.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Navn</label>
                    <input type="text" name="navn" required placeholder="Ditt navn"
                      value={form.navn} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>E-post</label>
                    <input type="email" name="epost" required placeholder="din@epost.no"
                      value={form.epost} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Nettside</label>
                  <input type="url" name="nettside" placeholder="https://dinside.no"
                    value={form.nettside} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Hva selger du?</label>
                  <input type="text" name="hvaSelger" required
                    placeholder="Eks: treningsutstyr, klinikk, klær, rørleggertjenester..."
                    value={form.hvaSelger} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Månedlig annonsebudsjett</label>
                  <select name="budsjett" required value={form.budsjett} onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer bg-black`}>
                    <option value="" disabled>Velg budsjett</option>
                    {budsjettOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#111]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Ønsket pakke</label>
                  <select name="pakke" required value={form.pakke} onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer bg-black`}>
                    <option value="" disabled>Velg pakke</option>
                    {pakkeOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#111]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Melding (valgfri)</label>
                  <textarea name="melding" rows={3}
                    placeholder="Noe vi bør vite om bedriften eller annonsene dine?"
                    value={form.melding} onChange={handleChange}
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit"
                  className="mt-1 w-full bg-[#BEFF00] text-black text-sm font-bold py-4 tracking-tight hover:bg-white transition-colors duration-200">
                  Start med prøvepakke
                </button>
                <p className="text-[11px] text-white/20 text-center">
                  Ingen forpliktelse. Vi svarer innen 1 arbeidsdag.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
