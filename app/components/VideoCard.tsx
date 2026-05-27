"use client";

import { useRef, useState, useEffect } from "react";

export interface VideoCardData {
  src: string;
  client: string;
  label: string;
  stat?: string;       // e.g. "5.6×"
  statLabel?: string;  // e.g. "ROAS"
}

function LiveBadge() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: "#BEFF00" }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ background: "#BEFF00" }}
        />
      </span>
      <span>Live</span>
    </span>
  );
}

export default function VideoCard({ src, client, label, stat, statLabel }: VideoCardData) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  const [hovered,  setHovered]  = useState(false);
  const [isTouch,  setIsTouch]  = useState(false);
  const [inView,   setInView]   = useState(false);

  const isLive = label.toLowerCase().includes("live");

  // ── Detect touch device once on mount ──────────────────────────────────────
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  // ── IntersectionObserver: autoplay on mobile, pause-when-offscreen on all ──
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        const v = videoRef.current;
        if (!v) return;

        if (entry.isIntersecting) {
          // Mobile: autoplay immediately. Desktop: only if already hovered.
          if (isTouch) {
            v.currentTime = 0;
            v.play().catch(() => {});
          }
        } else {
          v.pause();
          v.currentTime = 0;
          if (isTouch) setHovered(false);
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isTouch]);

  // ── Desktop hover handlers ─────────────────────────────────────────────────
  const handleEnter = () => {
    if (isTouch) return;
    setHovered(true);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const handleLeave = () => {
    if (isTouch) return;
    setHovered(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // ── Mobile tap: toggle glass overlay ──────────────────────────────────────
  const handleTap = () => {
    if (!isTouch) return;
    setHovered(h => !h);
  };

  // Overlay visible when: desktop hover OR mobile (always when in view)
  const overlayVisible = hovered || (isTouch && inView);
  const videoActive    = hovered || (isTouch && inView);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: "9 / 16", cursor: isTouch ? "pointer" : "pointer" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        loop
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        style={{
          filter:    videoActive ? "blur(2px) brightness(0.72)" : "blur(0px) brightness(1)",
          transform: videoActive ? "scale(1.04)"                : "scale(1)",
        }}
      />

      {/* ── Idle gradient + client name (desktop only when not hovered) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
          opacity: overlayVisible ? 0 : 1,
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-opacity duration-300"
        style={{ opacity: overlayVisible ? 0 : 1, pointerEvents: "none" }}
      >
        <p
          className="text-white font-bold leading-tight drop-shadow"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: "clamp(0.8rem, 1.1vw, 1rem)",
          }}
        >
          {client}
        </p>
      </div>

      {/* ── Frosted glass stat overlay ── */}
      <div
        className="absolute inset-x-3 bottom-3 rounded-xl overflow-hidden transition-all duration-400"
        style={{
          opacity:   overlayVisible ? 1 : 0,
          transform: overlayVisible ? "translateY(0)" : "translateY(14px)",
          backdropFilter:         "blur(18px) saturate(1.4)",
          WebkitBackdropFilter:   "blur(18px) saturate(1.4)",
          background:             "rgba(10, 30, 10, 0.52)",
          border:                 "1px solid rgba(255,255,255,0.10)",
          padding:                "16px 18px",
          pointerEvents:          "none",
        }}
      >
        {stat ? (
          /* Big ROAS / metric display */
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-white/55 uppercase tracking-widest mb-1"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                {statLabel ?? "Resultat"}
              </p>
              <p
                className="text-white leading-none font-black"
                style={{
                  fontFamily:    "var(--font-nunito), sans-serif",
                  fontSize:      "clamp(2rem, 6vw, 3rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat}
              </p>
            </div>
            <p
              className="text-white/55 text-right pb-1"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 700,
                fontSize:   "0.75rem",
                lineHeight: 1.3,
              }}
            >
              {client}
            </p>
          </div>
        ) : (
          /* Live / status display */
          <div>
            <p
              className="text-white/55 uppercase tracking-widest mb-1.5"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              {client}
            </p>
            <p
              className="text-white font-black leading-none"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize:   "clamp(1rem, 3vw, 1.3rem)",
              }}
            >
              {isLive ? <LiveBadge /> : label}
            </p>
          </div>
        )}
      </div>

      {/* Mobile tap hint — show briefly on first visible, then hide */}
      {isTouch && !hovered && inView && (
        <div
          className="absolute top-3 right-3 rounded-full px-2 py-1"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          TRYKK
        </div>
      )}
    </div>
  );
}
