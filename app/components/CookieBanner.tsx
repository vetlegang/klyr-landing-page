"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const STORAGE_KEY = "fujii-cookie-consent";

const T = {
  no: {
    text: "Vi bruker informasjonskapsler for å forbedre brukeropplevelsen. Ved å fortsette godtar du vår",
    policy: "personvernserklæring",
    accept: "Godta alle",
    reject: "Kun nødvendige",
  },
  en: {
    text: "We use cookies to improve your experience. By continuing you agree to our",
    policy: "privacy policy",
    accept: "Accept all",
    reject: "Necessary only",
  },
};

export default function CookieBanner() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-samtykke"
      style={{
        position:        "fixed",
        bottom:          24,
        left:            "50%",
        transform:       "translateX(-50%)",
        zIndex:          9999,
        width:           "min(640px, calc(100vw - 32px))",
        background:      "#fff",
        borderRadius:    16,
        boxShadow:       "0 8px 40px rgba(0,0,0,0.13)",
        border:          "1px solid rgba(42,92,24,0.12)",
        padding:         "20px 24px",
        display:         "flex",
        flexDirection:   "column",
        gap:             16,
      }}
    >
      {/* Text */}
      <p style={{ fontSize: "0.875rem", color: "#333", lineHeight: 1.55, margin: 0 }}>
        {t.text}{" "}
        <a
          href="/personvern"
          style={{
            color:               "#2A5C18",
            fontWeight:          700,
            textDecoration:      "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {t.policy}
        </a>
        .
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={handleAccept}
          style={{
            background:    "#2A5C18",
            color:         "#fff",
            border:        "none",
            borderRadius:  10,
            padding:       "10px 22px",
            fontFamily:    "var(--font-nunito), sans-serif",
            fontWeight:    800,
            fontSize:      "0.875rem",
            cursor:        "pointer",
            flex:          "1 1 auto",
            whiteSpace:    "nowrap",
          }}
        >
          {t.accept}
        </button>
        <button
          onClick={handleReject}
          style={{
            background:    "transparent",
            color:         "#2A5C18",
            border:        "1.5px solid rgba(42,92,24,0.3)",
            borderRadius:  10,
            padding:       "10px 22px",
            fontFamily:    "var(--font-nunito), sans-serif",
            fontWeight:    800,
            fontSize:      "0.875rem",
            cursor:        "pointer",
            flex:          "1 1 auto",
            whiteSpace:    "nowrap",
          }}
        >
          {t.reject}
        </button>
      </div>
    </div>
  );
}
