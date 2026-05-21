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

const shootOptions: { id: ShootOption; label: string; tag: string; price: number; desc: string }[] = [
  {
    id: "ingen",
    label: "Ingen shoot",
    tag: "+0 kr",
    price: 0,
    desc: "Vi bruker eksisterende materiell, produktbilder, stock/AI og grafisk produksjon.",
  },
  {
    id: "shoot",
    label: "Shoot hos dere",
    tag: "+3 000 kr",
    price: 3000,
    desc: "Vi kommer til dere og filmer enkelt materiale. UGC-person er ikke inkludert.",
  },
  {
    id: "ugc",
    label: "Shoot med UGC",
    tag: "+5 000 kr",
    price: 5000,
    desc: "Vi kommer til dere og filmer med UGC-person/creator. Eget tilvalg — ikke tillegg oppå vanlig shoot.",
  },
];

const BASE_PRICE = 5000;

const budsjettOptions = [
  "Under 5 000 kr",
  "5 000–20 000 kr",
  "20 000–50 000 kr",
  "50 000 kr+",
];

function inputClass(dark: boolean) {
  return `w-full border text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors duration-200 ${
    dark
      ? "bg-white/[0.07] border-white/[0.1] text-white placeholder:text-white/30 focus:border-white/30"
      : "bg-white border-black/[0.1] text-[#101010] placeholder:text-[#A3A3A3] focus:border-black/[0.3]"
  }`;
}

function labelClass(dark: boolean) {
  return `block text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5 ${
    dark ? "text-white/35" : "text-[#737373]"
  }`;
}

export default function LeadForm({ dark = false }: { dark?: boolean }) {
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
      <div className="flex flex-col items-start py-8">
        <div className="w-11 h-11 rounded-full bg-[#BEFF00] flex items-center justify-center mb-5">
          <svg width="20" height="20" fill="none" viewBox="0 0 22 22">
            <path
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 11l5 5 9-9"
            />
          </svg>
        </div>
        <h3 className={`text-xl font-black mb-2 ${dark ? "text-white" : "text-[#101010]"}`}>
          Takk — vi tar kontakt snart.
        </h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-[#737373]"}`}>
          Vi svarer innen 24–48 timer med en vurdering av om prøvepakken
          passer for deg.
          {form.shoot !== "ingen" && (
            <> Du valgte <strong>{selectedShoot.label}</strong>.</>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Shoot add-on selector */}
      <div>
        <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? "text-white/35" : "text-[#737373]"}`}>
          Trenger dere shoot?
        </p>
        <div className="flex flex-col gap-1.5">
          {shootOptions.map((opt) => {
            const isSelected = form.shoot === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleShoot(opt.id)}
                className={`w-full text-left rounded-xl border px-4 py-3 transition-all duration-150 ${
                  dark
                    ? isSelected
                      ? "bg-white/[0.12] border-white/30"
                      : "bg-white/[0.04] border-white/[0.08] hover:border-white/20"
                    : isSelected
                    ? "bg-[#101010] border-[#101010]"
                    : "bg-white border-black/[0.1] hover:border-black/[0.2]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-xs font-bold leading-snug ${
                    dark
                      ? isSelected ? "text-white" : "text-white/50"
                      : isSelected ? "text-white" : "text-[#101010]"
                  }`}>
                    {opt.label}
                  </span>
                  <span className={`text-[10px] font-black shrink-0 ${
                    dark
                      ? isSelected ? "text-[#BEFF00]" : "text-white/30"
                      : isSelected ? "text-[#BEFF00]" : "text-[#A3A3A3]"
                  }`}>
                    {opt.tag}
                  </span>
                </div>
                {isSelected && (
                  <p className={`text-[11px] mt-1 leading-relaxed ${dark ? "text-white/40" : "text-white/60"}`}>
                    {opt.desc}
                  </p>
                )}
              </button>
            );
          })}
        </div>
        <p className={`text-[10px] mt-2 ${dark ? "text-white/25" : "text-[#A3A3A3]"}`}>
          Shoot er valgfritt. Velg bare hvis dere trenger nytt materiale.
        </p>
      </div>

      {/* Dynamic total */}
      <div className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
        dark ? "bg-white/[0.05] border-white/[0.08]" : "bg-[#F7F4EE] border-black/[0.07]"
      }`}>
        <span className={`text-xs font-semibold ${dark ? "text-white/40" : "text-[#737373]"}`}>
          Totalt eks. mva
        </span>
        <span className={`text-base font-black ${dark ? "text-white" : "text-[#101010]"}`}>
          {totalFormatted} kr
        </span>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass(dark)}>Navn</label>
          <input
            type="text"
            name="navn"
            required
            placeholder="Ditt navn"
            value={form.navn}
            onChange={handleChange}
            className={inputClass(dark)}
          />
        </div>
        <div>
          <label className={labelClass(dark)}>E-post</label>
          <input
            type="email"
            name="epost"
            required
            placeholder="din@epost.no"
            value={form.epost}
            onChange={handleChange}
            className={inputClass(dark)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass(dark)}>Telefon</label>
        <input
          type="tel"
          name="telefon"
          required
          placeholder="400 00 000"
          value={form.telefon}
          onChange={handleChange}
          className={inputClass(dark)}
        />
      </div>

      <div>
        <label className={labelClass(dark)}>Nettside</label>
        <input
          type="url"
          name="nettside"
          required
          placeholder="https://dinside.no"
          value={form.nettside}
          onChange={handleChange}
          className={inputClass(dark)}
        />
      </div>

      <div>
        <label className={labelClass(dark)}>Hva selger du?</label>
        <input
          type="text"
          name="hvaSelger"
          required
          placeholder="Eks: treningsutstyr, klinikk, klær..."
          value={form.hvaSelger}
          onChange={handleChange}
          className={inputClass(dark)}
        />
      </div>

      <div>
        <label className={labelClass(dark)}>
          Annonsebudsjett{" "}
          <span className="normal-case font-normal tracking-normal">(valgfri)</span>
        </label>
        <select
          name="budsjett"
          value={form.budsjett}
          onChange={handleChange}
          className={`${inputClass(dark)} appearance-none cursor-pointer`}
        >
          <option value="">Velg budsjett</option>
          {budsjettOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {error && (
        <p className="text-xs text-red-400 text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 w-full bg-[#101010] text-white text-sm font-bold py-4 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sender…" : "Send inn for vurdering"}
      </button>
      <p className={`text-[11px] text-center ${dark ? "text-white/30" : "text-[#A3A3A3]"}`}>
        20 unike creatives. {totalFormatted} kr. 50% rabatt. Ingen binding.
      </p>
    </form>
  );
}
