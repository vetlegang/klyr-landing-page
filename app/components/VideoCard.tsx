"use client";

import { useRef, useState } from "react";

export interface VideoCardData {
  src: string;
  client: string;
  label: string;
}

export default function VideoCard({ src, client, label }: VideoCardData) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {/* autoplay blocked — ignore */});
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
      className="relative overflow-hidden rounded-xl cursor-pointer select-none"
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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Poster / idle state — dark gradient at bottom */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Hover overlay — darkens the whole card */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.42)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Text overlay — visible on hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <p
          className="text-white font-black leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
          }}
        >
          {client}
        </p>
        <p
          className="text-white/85 mt-2 font-bold"
          style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)" }}
        >
          {label}
        </p>
      </div>

      {/* Always-visible client label at bottom (idle) */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <p
          className="text-white font-bold leading-tight drop-shadow"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
          }}
        >
          {client}
        </p>
      </div>
    </div>
  );
}
