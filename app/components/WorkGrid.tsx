"use client";

import { motion } from "framer-motion";
import { FilmFrame, CreativeGrid, HookMark, TestArrow, FujiMountain } from "./Illustrations";

/**
 * WorkGrid — editorial film/commercial portfolio layout.
 *
 * TO ADD REAL VIDEOS:
 * 1. Drop .mp4 files into /public/videos/
 * 2. Add `video: "/videos/your-file.mp4"` to the entry below
 * 3. Replace the placeholder <div> with:
 *    <video src={c.video} autoPlay muted loop playsInline
 *           className="absolute inset-0 w-full h-full object-cover" />
 */

type IllustrationKey = "film" | "grid" | "hook" | "arrow" | "mountain";

const IllustrationMap: Record<IllustrationKey, React.ComponentType<{ className?: string }>> = {
  film: FilmFrame,
  grid: CreativeGrid,
  hook: HookMark,
  arrow: TestArrow,
  mountain: FujiMountain,
};

const cases: {
  id: number;
  label: string;
  format: string;
  category: string;
  colClass: string;
  aspectClass: string;
  illustration: IllustrationKey;
  video?: string;
}[] = [
  {
    id: 1,
    label: "UGC Hook",
    format: "Video · 30s",
    category: "Nettbutikk",
    colClass: "col-span-1 md:col-span-3",
    aspectClass: "aspect-[21/9]",
    illustration: "hook",
  },
  {
    id: 2,
    label: "Founder Ad",
    format: "Video · 60s",
    category: "Brand",
    colClass: "col-span-1 md:col-span-2",
    aspectClass: "aspect-video",
    illustration: "film",
  },
  {
    id: 3,
    label: "Produktdemo",
    format: "Video · 45s",
    category: "E-handel",
    colClass: "col-span-1 md:col-span-1",
    aspectClass: "aspect-video",
    illustration: "grid",
  },
  {
    id: 4,
    label: "Problem / Løsning",
    format: "Video · 30s",
    category: "SaaS",
    colClass: "col-span-1 md:col-span-1",
    aspectClass: "aspect-video",
    illustration: "arrow",
  },
  {
    id: 5,
    label: "Before / After",
    format: "Video · 15s",
    category: "Klinikk",
    colClass: "col-span-1 md:col-span-2",
    aspectClass: "aspect-video",
    illustration: "mountain",
  },
  {
    id: 6,
    label: "Offer Ad",
    format: "Still + Video · 15s",
    category: "E-handel",
    colClass: "col-span-1 md:col-span-3",
    aspectClass: "aspect-[21/9]",
    illustration: "film",
  },
];

function ProjectItem({
  label,
  format,
  category,
  colClass,
  aspectClass,
  illustration,
  video,
  index,
}: {
  label: string;
  format: string;
  category: string;
  colClass: string;
  aspectClass: string;
  illustration: IllustrationKey;
  video?: string;
  index: number;
}) {
  const Illus = IllustrationMap[illustration];

  return (
    <motion.div
      className={`group ${colClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Placeholder / video container */}
      <div className={`relative ${aspectClass} rounded-2xl overflow-hidden bg-[#E6E5E1]`}>
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Illustration mark */}
            <div className="absolute inset-0 flex items-center justify-center text-[#0A0A0A]/18 group-hover:text-[#0A0A0A]/30 transition-colors duration-400">
              <Illus className="w-[18%] max-w-[100px]" />
            </div>
          </>
        )}

        {/* Hover: thin green top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BEFF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />
      </div>

      {/* Labels below */}
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-[15px] font-bold text-[#0A0A0A] leading-snug tracking-tight">
            {label}
          </p>
          <p className="text-[11px] text-[#AAA] mt-0.5 font-mono tracking-wide">
            {format}
          </p>
        </div>
        <span className="text-[10px] font-bold text-[#C8C8C8] tracking-[0.15em] uppercase mt-0.5 shrink-0">
          {category}
        </span>
      </div>
    </motion.div>
  );
}

export default function WorkGrid() {
  return (
    <section id="arbeid" className="px-6 md:px-14 pb-28 md:pb-40">
      <div className="max-w-[1440px] mx-auto">

        {/* Section label */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#0A0A0A]/15" />
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#BBB] uppercase">
              Arbeid
            </p>
          </div>
          <p className="text-[11px] text-[#C8C8C8] tracking-wide">
            Cases og reel kommer snart
          </p>
        </div>

        {/* Asymmetric 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {cases.map((c, i) => (
            <ProjectItem key={c.id} {...c} index={i} />
          ))}
        </div>

        <p className="text-[11px] text-[#C8C8C8] text-center mt-12 tracking-wide">
          Ta kontakt for å se fullstendig demoreel og klienteksempler
        </p>
      </div>
    </section>
  );
}
