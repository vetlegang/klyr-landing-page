"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Arbeid", href: "#arbeid" },
  { label: "Tilbud", href: "#tilbud" },
  { label: "Prosess", href: "#prosess" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {/* Brand name — only visible after scroll (wordmark is the hero identifier) */}
          <motion.div
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
          >
            <Link
              href="/"
              className="text-[13px] font-black tracking-[0.3em] text-[#0A0A0A] uppercase select-none"
            >
              Fujii
            </Link>
          </motion.div>

          {/* Desktop nav — text links only, fade in after scroll */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
          >
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

          {/* Mobile menu toggle — fades in after scroll */}
          <motion.button
            className="md:hidden text-[#0A0A0A] p-1 flex flex-col gap-[5px] items-end"
            onClick={() => setOpen(!open)}
            aria-label="Meny"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
          >
            <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-200 ${open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-200 ${open ? "w-5 opacity-0" : "w-3.5"}`} />
            <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-200 ${open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[2rem] font-black text-[#0A0A0A]/20 hover:text-[#0A0A0A] transition-colors py-5 tracking-tight"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
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
