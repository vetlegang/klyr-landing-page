"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const navLinksNo = [
  { label: "Arbeid",  href: "/#arbeid" },
  { label: "Tilbud",  href: "/#tilbud" },
  { label: "Prosess", href: "/#prosess" },
  { label: "Kontakt", href: "/#kontakt" },
];

const navLinksEn = [
  { label: "Work",    href: "/#arbeid" },
  { label: "Offer",   href: "/#tilbud" },
  { label: "Process", href: "/#prosess" },
  { label: "Contact", href: "/#kontakt" },
];

function NorwayFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="#EF2B2D"/>
      <rect x="5" width="3" height="14" fill="white"/>
      <rect y="5.5" width="20" height="3" fill="white"/>
      <rect x="6" width="1" height="14" fill="#003087"/>
      <rect y="6.5" width="20" height="1" fill="#003087"/>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="#012169"/>
      {/* White diagonals */}
      <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="3"/>
      {/* Red diagonals */}
      <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.8"/>
      {/* White cross */}
      <rect x="0" y="5.5" width="20" height="3" fill="white"/>
      <rect x="8.5" y="0" width="3" height="14" fill="white"/>
      {/* Red cross */}
      <rect x="0" y="6" width="20" height="2" fill="#C8102E"/>
      <rect x="9" y="0" width="2" height="14" fill="#C8102E"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const { lang, setLang }       = useLanguage();

  const navLinks = lang === "no" ? navLinksNo : navLinksEn;
  const aboutLabel = lang === "no" ? "Om oss" : "About";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "no" ? "en" : "no");

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#F5F4F0]/95 backdrop-blur-md border-b border-black/[0.05]"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-[60px] md:h-[68px]">

          {/* Brand + flag — brand only visible after scroll */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ pointerEvents: scrolled ? "auto" : "none" }}
            >
              <Link
                href="/"
                className="select-none leading-none"
                style={{
                  fontFamily:    "var(--font-nunito), sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(1.4rem, 2.5vw, 2rem)",
                  letterSpacing: "-0.02em",
                  color:         "#2A5C18",
                }}
              >
                Fujii
              </Link>
            </motion.div>

            {/* Language toggle — always visible */}
            <button
              onClick={toggleLang}
              aria-label={lang === "no" ? "Switch to English" : "Bytt til norsk"}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition-all duration-150"
              style={{
                background:  scrolled ? "rgba(42,92,24,0.07)" : "rgba(42,92,24,0.1)",
                border:      "1px solid rgba(42,92,24,0.12)",
              }}
            >
              {lang === "no" ? <UKFlag /> : <NorwayFlag />}
              <span
                className="text-[10px] font-bold tracking-wide uppercase"
                style={{ color: "#2A5C18", opacity: 0.7 }}
              >
                {lang === "no" ? "EN" : "NO"}
              </span>
            </button>
          </div>

          {/* Desktop nav */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
          >
            <Link
              href="/om-oss"
              className="text-[12px] font-medium text-[#999] hover:text-[#2A5C18] transition-colors duration-150 tracking-wide"
            >
              {aboutLabel}
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium text-[#999] hover:text-[#0A0A0A] transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden text-[#0A0A0A] p-1 flex flex-col gap-[5px] items-end"
            onClick={() => setOpen(!open)}
            aria-label="Meny"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
          >
            <span className={`block h-[1.5px] bg-[#2A5C18] transition-all duration-200 ${open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-[#2A5C18] transition-all duration-200 ${open ? "w-5 opacity-0" : "w-3.5"}`} />
            <span className={`block h-[1.5px] bg-[#2A5C18] transition-all duration-200 ${open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F5F4F0] flex flex-col px-6 pt-24 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex flex-col divide-y divide-black/[0.06]">
              <motion.a
                href="/om-oss"
                className="text-[2rem] font-black text-[#0A0A0A]/20 hover:text-[#2A5C18] transition-colors py-5 tracking-tight"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {aboutLabel}
              </motion.a>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[2rem] font-black text-[#0A0A0A]/20 hover:text-[#0A0A0A] transition-colors py-5 tracking-tight"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: (i + 1) * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
