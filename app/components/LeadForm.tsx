"use client";

import { useState } from "react";

type ShootOption = "ingen" | "shoot" | "ugc";

type FormState = {
  navn: string;
  epost: string;
  telefon: string;
  nettside: string;
  hvaSelger: string;
  budsjett: string;
  shoot: ShootOption;
};

const shootOptionsNo = [
  { id: "ingen" as ShootOption, label: "Ingen shoot",   tag: "+0 kr",       price: 0,    desc: "Vi bruker eksisterende materiell, produktbilder, stock/AI og grafisk produksjon." },
  { id: "shoot" as ShootOption, label: "Shoot hos dere", tag: "+3 000 kr",   price: 3000, desc: "Vi kommer til dere og filmer enkelt materiale. UGC-person er ikke inkludert." },
  { id: "ugc"   as ShootOption, label: "Shoot med UGC", tag: "+5 000 kr",   price: 5000, desc: "Vi filmer med UGC-person/creator. Eget tilvalg — ikke tillegg oppå vanlig shoot." },
];

const shootOptionsEn = [
  { id: "ingen" as ShootOption, label: "No shoot",        tag: "+0 kr",       price: 0,    desc: "We use existing material, product images, stock/AI and graphic production." },
  { id: "shoot" as ShootOption, label: "On-site shoot",   tag: "+3 000 kr",   price: 3000, desc: "We come to you and film simple material. UGC creator is not included." },
  { id: "ugc"   as ShootOption, label: "Shoot with UGC",  tag: "+5 000 kr",   price: 5000, desc: "We film with a UGC creator. Separate add-on — not in addition to the regular shoot." },
];

const BASE_PRICE = 5000;

const budsjettOptionsNo = ["Under 5 000 kr", "5 000–20 000 kr", "20 000–50 000 kr", "50 000 kr+"];
const budsjettOptionsEn = ["Under 5 000 kr", "5 000–20 000 kr", "20 000–50 000 kr", "50 000 kr+"];

const labelsNo = {
  shootQ:  "Trenger dere shoot?",
  total:   "Totalt eks. mva",
  name:    "Navn",
  email:   "E-post",
  phone:   "Telefon",
  website: "Nettside",
  sells:   "Hva selger du?",
  sellsPh: "Eks: treningsutstyr, klinikk, klær...",
  budget:  "Annonsebudsjett",
  budgetOpt: "Valgfri",
  budgetPh: "Velg budsjett",
  submit:  "Send inn for vurdering",
  sending: "Sender…",
  footerNote: (total: string) => `20 creatives · ${total} kr · 50% rabatt · ingen binding`,
  successTitle: "Takk — vi tar kontakt snart.",
  successSub:   "Vi svarer innen 1 arbeidsdag med en vurdering.",
  successShoot: (label: string) => ` Du valgte ${label}.`,
  error:   "Noe gikk galt. Prøv igjen eller kontakt oss direkte.",
};

const labelsEn = {
  shootQ:  "Do you need a shoot?",
  total:   "Total excl. VAT",
  name:    "Name",
  email:   "Email",
  phone:   "Phone",
  website: "Website",
  sells:   "What do you sell?",
  sellsPh: "E.g.: gym equipment, clinic, clothing...",
  budget:  "Ad budget",
  budgetOpt: "Optional",
  budgetPh: "Select budget",
  submit:  "Submit for assessment",
  sending: "Sending…",
  footerNote: (total: string) => `20 creatives · ${total} kr · 50% off · no commitment`,
  successTitle: "Thanks — we'll be in touch soon.",
  successSub:   "We respond within 1 business day with an assessment.",
  successShoot: (label: string) => ` You chose ${label}.`,
  error:   "Something went wrong. Try again or contact us directly.",
};

function inputCls(dark: boolean) {
  return [
    "w-full text-[13px] px-3.5 py-3 rounded-xl border transition-colors duration-150 outline-none",
    dark
      ? "bg-white/[0.07] border-white/[0.1] text-white placeholder:text-white/25 focus:border-white/30"
      : "bg-[#F7F4EE] border-transparent text-[#101010] placeholder:text-[#B0B0B0] focus:border-black/20 focus:bg-white",
  ].join(" ");
}

function labelCls(dark: boolean) {
  return `block text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5 ${
    dark ? "text-white/30" : "text-[#888]"
  }`;
}

export default function LeadForm({ dark = false, lang = "no" }: { dark?: boolean; lang?: "no" | "en" }) {
  const shootOptions  = lang === "no" ? shootOptionsNo  : shootOptionsEn;
  const budsjettOptions = lang === "no" ? budsjettOptionsNo : budsjettOptionsEn;
  const L = lang === "no" ? labelsNo : labelsEn;
  const [form, setForm] = useState<FormState>({
    navn: "",
    epost: "",
    telefon: "",
    nettside: "",
    hvaSelger: "",
    budsjett: "",
    shoot: "ingen",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShoot = (id: ShootOption) => {
    setForm((prev) => ({ ...prev, shoot: id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          shoot: `${selectedShoot.label} (${selectedShoot.tag})`,
        }),
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

  const selectedShoot = shootOptions.find((o) => o.id === form.shoot)!;
  const totalPrice = BASE_PRICE + selectedShoot.price;
  const totalFormatted = totalPrice.toLocaleString("nb-NO");

  if (submitted) {
    return (
      <div className="flex flex-col items-start py-6">
        <div className="w-10 h-10 rounded-full bg-[#BEFF00] flex items-center justify-center mb-5">
          <svg width="18" height="18" fill="none" viewBox="0 0 22 22">
            <path stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 11l5 5 9-9" />
          </svg>
        </div>
        <h3 className={`text-lg font-black mb-2 ${dark ? "text-white" : "text-[#101010]"}`}>
          {L.successTitle}
        </h3>
        <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-[#737373]"}`}>
          {L.successSub}
          {form.shoot !== "ingen" && (
            <strong>{L.successShoot(selectedShoot.label)}</strong>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      {/* Shoot selector */}
      <div>
        <p className={labelCls(dark)}>{L.shootQ}</p>
        <div className="flex flex-col gap-1.5">
          {shootOptions.map((opt) => {
            const sel = form.shoot === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleShoot(opt.id)}
                className={`w-full text-left rounded-xl border px-4 py-3 transition-all duration-150 ${
                  dark
                    ? sel
                      ? "bg-white/10 border-white/25"
                      : "bg-white/[0.04] border-white/[0.08] hover:border-white/15"
                    : sel
                    ? "bg-[#101010] border-[#101010]"
                    : "bg-[#F7F4EE] border-transparent hover:border-black/10"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[12px] font-bold ${
                    dark
                      ? sel ? "text-white" : "text-white/45"
                      : sel ? "text-white" : "text-[#101010]"
                  }`}>
                    {opt.label}
                  </span>
                  <span className={`text-[11px] font-black shrink-0 ${
                    dark
                      ? sel ? "text-[#BEFF00]" : "text-white/25"
                      : sel ? "text-[#BEFF00]" : "text-[#B0B0B0]"
                  }`}>
                    {opt.tag}
                  </span>
                </div>
                {sel && (
                  <p className={`text-[11px] mt-1 leading-relaxed ${dark ? "text-white/35" : "text-white/55"}`}>
                    {opt.desc}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price total */}
      <div className={`flex items-center justify-between rounded-xl px-4 py-3 ${
        dark ? "bg-white/[0.05] border border-white/[0.07]" : "bg-[#F7F4EE]"
      }`}>
        <span className={`text-[12px] font-semibold ${dark ? "text-white/35" : "text-[#888]"}`}>
          {L.total}
        </span>
        <span className={`text-[17px] font-black ${dark ? "text-white" : "text-[#101010]"}`}>
          {totalFormatted} kr
        </span>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div>
          <label className={labelCls(dark)}>{L.name}</label>
          <input type="text" name="navn" required placeholder={lang === "no" ? "Ditt navn" : "Your name"}
            value={form.navn} onChange={handleChange} className={inputCls(dark)} />
        </div>
        <div>
          <label className={labelCls(dark)}>{L.email}</label>
          <input type="email" name="epost" required placeholder={lang === "no" ? "din@epost.no" : "your@email.com"}
            value={form.epost} onChange={handleChange} className={inputCls(dark)} />
        </div>
      </div>

      <div>
        <label className={labelCls(dark)}>{L.phone}</label>
        <input type="tel" name="telefon" required placeholder="400 00 000"
          value={form.telefon} onChange={handleChange} className={inputCls(dark)} />
      </div>

      <div>
        <label className={labelCls(dark)}>{L.website}</label>
        <input type="url" name="nettside" required placeholder="https://yoursite.com"
          value={form.nettside} onChange={handleChange} className={inputCls(dark)} />
      </div>

      <div>
        <label className={labelCls(dark)}>{L.sells}</label>
        <input type="text" name="hvaSelger" required
          placeholder={L.sellsPh}
          value={form.hvaSelger} onChange={handleChange} className={inputCls(dark)} />
      </div>

      <div>
        <label className={labelCls(dark)}>
          {L.budget}{" "}
          <span className="normal-case font-normal tracking-normal">({L.budgetOpt})</span>
        </label>
        <select name="budsjett" value={form.budsjett} onChange={handleChange}
          className={`${inputCls(dark)} appearance-none cursor-pointer`}>
          <option value="">{L.budgetPh}</option>
          {budsjettOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {error && (
        <p className="text-[12px] text-red-400 text-center">{error}</p>
      )}

      <button type="submit" disabled={loading}
        className="mt-1 w-full bg-[#101010] text-white text-[13px] font-black py-3.5 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? L.sending : L.submit}
      </button>

      <p className={`text-[11px] text-center ${dark ? "text-white/20" : "text-[#B0B0B0]"}`}>
        {L.footerNote(totalFormatted)}
      </p>
    </form>
  );
}
