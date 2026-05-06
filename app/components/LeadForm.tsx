"use client";

import { useState } from "react";

type FormState = {
  navn: string;
  epost: string;
  nettside: string;
  hvaSelger: string;
  budsjett: string;
};

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
    nettside: "",
    hvaSelger: "",
    budsjett: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <h3
          className={`text-xl font-black mb-2 ${
            dark ? "text-white" : "text-[#101010]"
          }`}
        >
          Takk — vi tar kontakt snart.
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            dark ? "text-white/50" : "text-[#737373]"
          }`}
        >
          Vi svarer innen 24–48 timer med en konkret vurdering av om
          prøvepakken passer for deg.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          <span className="normal-case font-normal tracking-normal">
            (valgfri)
          </span>
        </label>
        <select
          name="budsjett"
          value={form.budsjett}
          onChange={handleChange}
          className={`${inputClass(dark)} appearance-none cursor-pointer`}
        >
          <option value="">Velg budsjett</option>
          {budsjettOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-1 w-full bg-[#101010] text-white text-sm font-bold py-4 rounded-full tracking-tight hover:bg-[#2a2a2a] transition-colors duration-200"
      >
        Send inn for vurdering
      </button>
      <p
        className={`text-[11px] text-center ${
          dark ? "text-white/30" : "text-[#A3A3A3]"
        }`}
      >
        20 unike creatives. 5 000 kr. 50% rabatt. Ingen binding.
      </p>
    </form>
  );
}
