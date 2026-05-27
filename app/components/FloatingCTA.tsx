"use client";

import { useEffect, useRef, useState } from "react";

const G = "#2A5C18";

export default function FloatingCTA() {
  // Start anchored to bottom-right — computed on mount
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const btnRef   = useRef<HTMLButtonElement>(null);
  const dragging = useRef(false);
  const moved    = useRef(false);
  const origin   = useRef({ mx: 0, my: 0, bx: 0, by: 0 });

  // Set initial position once window size is known
  useEffect(() => {
    const place = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const isMobile = W < 640;
      // On mobile the button is narrower (~120px), on desktop ~140px
      const btnW = isMobile ? 120 : 144;
      setPos({ x: W - btnW - 16, y: H - (isMobile ? 64 : 72) });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  // ── Drag logic ────────────────────────────────────────────────────────────
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!pos) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = true;
    moved.current    = false;
    origin.current   = { mx: e.clientX, my: e.clientY, bx: pos.x, by: pos.y };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging.current || !pos) return;
    const dx = e.clientX - origin.current.mx;
    const dy = e.clientY - origin.current.my;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved.current = true;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const w = btnRef.current?.offsetWidth  ?? 128;
    const h = btnRef.current?.offsetHeight ?? 48;
    setPos({
      x: clamp(origin.current.bx + dx, 8, W - w - 8),
      y: clamp(origin.current.by + dy, 8, H - h - 8),
    });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    const wasClick = !moved.current;
    dragging.current = false;
    moved.current    = false;
    if (wasClick) {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!pos) return null;

  return (
    <button
      ref={btnRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      aria-label="Kom i gang"
      style={{
        position:    "fixed",
        left:        pos.x,
        top:         pos.y,
        zIndex:      9999,
        background:  G,
        color:       "#fff",
        border:      "none",
        borderRadius: "999px",
        padding:     "clamp(10px, 1.5vw, 14px) clamp(16px, 2.5vw, 26px)",
        fontFamily:  "var(--font-nunito), sans-serif",
        fontWeight:  900,
        fontSize:    "clamp(0.78rem, 2.4vw, 0.95rem)",
        letterSpacing: "0.01em",
        cursor:      dragging.current ? "grabbing" : "grab",
        userSelect:  "none",
        touchAction: "none",
        boxShadow:   "0 4px 24px rgba(42,92,24,0.35), 0 1px 4px rgba(0,0,0,0.12)",
        transition:  "box-shadow 0.15s ease, transform 0.15s ease",
        whiteSpace:  "nowrap",
      }}
      onMouseEnter={e => {
        if (!dragging.current) {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 8px 32px rgba(42,92,24,0.45), 0 2px 8px rgba(0,0,0,0.15)";
          (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(42,92,24,0.35), 0 1px 4px rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
    >
      Kom i gang →
    </button>
  );
}
