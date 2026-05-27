"use client";

import { motion } from "framer-motion";
import VideoCard, { VideoCardData } from "./VideoCard";

const G = "#2A5C18";

// ─── Edit client/label here if needed ───────────────────────────────────────
const videos: VideoCardData[] = [
  {
    src: "/videos/camilo-12lover-1.mp4",
    client: "Camillo 12 Lover",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/camilo-12lover-2.mp4",
    client: "Camillo 12 Lover",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/mars-bilpleie-1.mp4",
    client: "Mars Bilpleie",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/mars-bilpleie-2.mp4",
    client: "Mars Bilpleie",
    label: "Kampanje fortsatt live",
  },
  {
    src: "/videos/boyer-bil-1.mp4",
    client: "Boyer Bil",
    label: "ROAS 5.6",
  },
  {
    src: "/videos/boyer-bil-2.mp4",
    client: "Boyer Bil",
    label: "ROAS 5.6",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function ArbeidSection() {
  return (
    <section
      id="arbeid"
      className="px-8 md:px-16 py-16 md:py-24"
      style={{ background: "#F5F4F0" }}
    >
      <div className="max-w-[1440px] mx-auto w-full">

        {/* Section heading */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.2, 0, 0.2, 1] }}
        >
          <h2
            className="leading-none"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color:         G,
            }}
          >
            Arbeid
          </h2>
          <p
            className="mt-2"
            style={{
              fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
              color:    G,
              opacity:  0.45,
            }}
          >
            Hover for å se kampanjen
          </p>
        </motion.div>

        {/*
          Responsive grid:
          mobile  → 1 col
          tablet  → 2 col
          desktop → 3 col
          wide    → 3 col (max 1440px container keeps cards big enough)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            >
              <VideoCard {...v} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
