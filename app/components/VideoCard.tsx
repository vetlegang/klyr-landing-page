"use client";

import { useRef, useState } from "react";

export interface VideoCardData {
  src: string;
  client: string;
  label: string;
  stat?: string;       // e.g. "5.6x" — big number shown on glass
  statLabel?: string;  // e.g. "ROAS"
}

function LiveBadge() {
  return (
    <span className="flex items-center gap-2">
      <span
        className="relative flex h-2.5 w-2.5"
      >
        {/* Pulsing ring */}
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const isLive  = label.toLowerCase().includes("live");
  const isRoas  = !!stat; // treat any explicit stat as ROAS-style display

  const handleEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer select-none group"
      style={{ aspectRatio: "9 / 16" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
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
          filter: hovered ? "blur(2px) brightness(0.75)" : "blur(0px) brightness(1)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* ── Idle: subtle bottom gradient + client name ── */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
          opacity: hovered ? 0 : 1,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <p
          className="text-white font-bold leading-tight drop-shadow"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
          }}
        >
          {client}
        </p>
      </div>

      {/* ── Hover: frosted glass panel ── */}
      <div
        className="absolute inset-x-3 bottom-3 rounded-xl overflow-hidden transition-all duration-400"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(14px)",
          backdropFilter: "blur(18px) saturate(1.4)",
          WebkitBackdropFilter: "blur(18px) saturate(1.4)",
          background: "rgba(10, 30, 10, 0.52)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "18px 20px",
        }}
      >
        {isRoas ? (
          /* Big stat display */
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
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat}
              </p>
            </div>
            <p
              className="text-white/60 text-right pb-1"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                maxWidth: "100px",
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
              className="text-white/55 uppercase tracking-widest mb-2"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              {client}
            </p>
            <p
              className="text-white font-black leading-none"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
              }}
            >
              {isLive ? <LiveBadge /> : label}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
