"use client";

import { useEffect, useRef } from "react";

export default function ScrollBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const scrollY = window.scrollY;
        const maxScroll = 500;
        const opacity = 0.15 - (scrollY / maxScroll) * 0.12;
        wrapperRef.current.style.opacity = String(Math.max(0.03, opacity));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.15,
        mixBlendMode: "multiply",
        // Fade out the left third where hero headline/body text sits
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 55%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 55%, black 100%)",
        backgroundImage: "url('/fujii-bg.png')",
        backgroundSize: "115%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 72%",
      }}
    />
  );
}
