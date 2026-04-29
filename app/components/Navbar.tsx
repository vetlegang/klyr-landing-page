"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Prøvepakke", href: "#provepakke" },
  { label: "Kalkulator", href: "#kalkulator" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Slik fungerer det", href: "#prosess" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-black/96 backdrop-blur-sm border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-2xl font-black tracking-[0.18em] text-white"
          >
            KLYR
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/55">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center bg-[#BEFF00] text-black text-sm font-bold px-5 py-2.5 tracking-tight hover:bg-white transition-colors duration-200"
          >
            Start med prøvepakke
          </a>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Meny"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col pt-20 px-6 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-7 text-2xl font-bold mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/75 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#kontakt"
              className="mt-auto inline-flex items-center justify-center bg-[#BEFF00] text-black text-base font-bold px-6 py-4 tracking-tight"
              onClick={() => setOpen(false)}
            >
              Start med prøvepakke
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
