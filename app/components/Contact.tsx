"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

type FormState = {
  navn: string;
  epost: string;
  telefon: string;
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
  "w-full bg-[#F7F4EE] border border-black/[0.1] text-[#101010] text-sm px-4 py-3.5 rounded-xl placeholder-[#A3A3A3] focus:outline-none focus:border-black/[0.3] transition-colors duration-200";

const labelClass = "block text-[10px] font-bold tracking-[0.2em] text-[#737373] uppercase mb-2";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    navn: "",
    epost: "",
    telefon: "",
    nettside: "",
    hvaSelger: "",
    budsjett: "",
    pakke: "",
    melding: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.details ?? json.error ?? "Feil ved sending");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen eller kontakt oss direkte.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-[#737373] uppercase mb-5">
              Kontakt
            </p>
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black leading-[1.06] tracking-tight mb-5 text-[#101010]">
              Vil du se hvilke vinkler vi{" "}
              <span className="underline underline-offset-4 decoration-[#BEFF00] decoration-[3px]">
                ville testet
              </span>{" "}
              for deg?
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed mb-10 max-w-sm">
              Send oss nettsiden din og hva du selger. Vi tar kontakt innen
              én arbeidsdag med en konkret vurdering av hva som bør testes
              — og hvorfor.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "Vi svarer innen 1 arbeidsdag",
                "Gratis første vurdering — ingen forpliktelse",
                "Ingen binding etter første runde",
                "Du trenger ikke forstå Meta Ads fra før",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BEFF00] mt-1.5 shrink-0 border border-black/[0.2]" />
                  <p className="text-sm text-[#737373] leading-snug">{t}</p>
                </div>
              ))}
            </div>

            {/* Price reminder */}
            <div className="border border-black/[0.08] p-5 rounded-2xl bg-[#F7F4EE]">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-[#101010]">5 000 kr</span>
                <span className="text-xs text-[#737373]">eks. mva · første runde</span>
              </div>
              <p className="text-xs text-[#A3A3A3] line-through mb-1">Vanlig pris: 10 000 kr</p>
              <p className="text-xs text-[#737373] font-semibold">50% rabatt på første runde</p>
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
                <h3 className="text-2xl font-black text-[#101010] mb-3">
                  Takk – vi tar kontakt snart.
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed max-w-xs">
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
                  <label className={labelClass}>Telefon</label>
                  <input type="tel" name="telefon" required placeholder="400 00 000"
                    value={form.telefon} onChange={handleChange} className={inputClass} />
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
                    className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Velg budsjett</option>
                    {budsjettOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Ønsket pakke</label>
                  <select name="pakke" required value={form.pakke} onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Velg pakke</option>
                    {pakkeOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
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

                {error && (
                  <p className="text-xs text-red-600 text-center">{error}</p>
                )}
                <button type="submit" disabled={loading}
                  className="mt-1 w-full bg-[#101010] text-white text-sm font-bold py-4 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sender…" : "Start med prøvepakke"}
                </button>
                <p className="text-[11px] text-[#A3A3A3] text-center">
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
