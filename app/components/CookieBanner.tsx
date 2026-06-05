"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fujii-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }

    const handler = () => setVisible(true);
    window.addEventListener("showCookieBanner", handler);
    return () => window.removeEventListener("showCookieBanner", handler);
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  };

  const handleReject = () => {
    try { localStorage.setItem(STORAGE_KEY, "rejected"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position:      "fixed",
        bottom:        24,
        left:          "50%",
        transform:     "translateX(-50%)",
        zIndex:        99999,
        width:         "min(600px, calc(100vw - 32px))",
        background:    "#ffffff",
        borderRadius:  16,
        boxShadow:     "0 8px 40px rgba(0,0,0,0.18)",
        border:        "1px solid rgba(42,92,24,0.15)",
        padding:       "20px 24px",
        display:       "flex",
        flexDirection: "column",
        gap:           14,
      }}
    >
      <p style={{ fontSize: "0.875rem", color: "#333", lineHeight: 1.6, margin: 0 }}>
        Vi bruker informasjonskapsler for å forbedre brukeropplevelsen. Les mer i vår{" "}
        <a
          href="/personvern"
          style={{ color: "#2A5C18", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          personvernserklæring
        </a>
        .
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={handleAccept}
          style={{
            flex:        1,
            background:  "#2A5C18",
            color:       "#fff",
            border:      "none",
            borderRadius: 10,
            padding:     "11px 20px",
            fontFamily:  "var(--font-nunito), sans-serif",
            fontWeight:  800,
            fontSize:    "0.875rem",
            cursor:      "pointer",
          }}
        >
          Godta alle
        </button>
        <button
          onClick={handleReject}
          style={{
            flex:        1,
            background:  "transparent",
            color:       "#2A5C18",
            border:      "1.5px solid rgba(42,92,24,0.3)",
            borderRadius: 10,
            padding:     "11px 20px",
            fontFamily:  "var(--font-nunito), sans-serif",
            fontWeight:  800,
            fontSize:    "0.875rem",
            cursor:      "pointer",
          }}
        >
          Kun nødvendige
        </button>
      </div>
    </div>
  );
}
