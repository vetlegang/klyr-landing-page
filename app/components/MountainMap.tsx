"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GREEN = "#BEFF00";
const INK   = "#101010";
const FONT  = "var(--font-geist-sans, system-ui, sans-serif)";

const SALG     = { cx: 450, cy: 162, r: 22 } as const;
const BR_H     = 26; // branch box height
const BRANCHES = [
  { id: "opt", label: "Optimalisering", x: 340, cy: 226 },
  { id: "ret", label: "Retargeting",    x: 450, cy: 214 },
  { id: "vin", label: "Vinklinger",     x: 560, cy: 226 },
] as const;

const WA_H = 20; // winning-ad box height
const WAS  = [
  { x: 262, cy: 330 },
  { x: 396, cy: 285 },
  { x: 526, cy: 293 },
  { x: 658, cy: 342 },
] as const;

const WIN_IDXS = [3, 8, 13, 17] as const;
const DOT_Y    = 466;
const DOTS     = Array.from({ length: 20 }, (_, i) => ({
  x:   +(78 + i * 39.2).toFixed(1),
  y:   DOT_Y,
  win: (WIN_IDXS as readonly number[]).includes(i),
}));

// Non-winner test lines
const TEST_LINES = DOTS.flatMap((d, i) => {
  if (d.win) return [];
  const md   = Math.min(...WIN_IDXS.map(w => Math.abs(i - w)));
  const base = md === 1 ? 392 : md === 2 ? 420 : 448;
  const sy   = base + (i % 3 === 1 ? 8 : i % 3 === 2 ? -6 : 0);
  const ex   = +(d.x + (450 - d.x) * 0.06).toFixed(1);
  return [{
    key:   `tl-${i}`,
    d:     `M ${d.x} ${DOT_Y} C ${d.x} ${DOT_Y - 18} ${ex} ${sy + 26} ${ex} ${sy}`,
    op:    md === 1 ? 0.38 : md === 2 ? 0.24 : 0.14,
    delay: 1.0 + i * 0.04,
  }];
});

// Winner lines (dot → WA top)
const WIN_LINES = WIN_IDXS.map((di, i) => {
  const paths = [
    `M 196 ${DOT_Y} C 200 442 245 370 262 320`,
    `M 392 ${DOT_Y} C 392 440 395 335 396 275`,
    `M 588 ${DOT_Y} C 580 440 548 342 526 283`,
    `M 744 ${DOT_Y} C 735 448 696 398 658 332`,
  ] as const;
  return { key: `wl-${i}`, d: paths[i], delay: 1.9 + i * 0.13 };
});

// WA → Branch connections
const salgB = SALG.cy + SALG.r; // 184
const WAB = [
  { key:"w0o", d:`M 262 320 C 276 296 312 258 340 239`, op:0.55, delay:3.08 },
  { key:"w1r", d:`M 396 275 C 408 258 434 236 450 227`, op:0.55, delay:3.18 },
  { key:"w1o", d:`M 396 275 C 378 258 358 248 340 239`, op:0.22, delay:3.22 },
  { key:"w2v", d:`M 526 283 C 534 268 550 250 560 239`, op:0.55, delay:3.28 },
  { key:"w2r", d:`M 526 283 C 510 264 478 238 450 227`, op:0.22, delay:3.32 },
  { key:"w3v", d:`M 658 332 C 640 300 602 260 560 239`, op:0.55, delay:3.40 },
] as const;

// Branch → Salg (green)
const BTS = [
  { key:"os", d:`M 340 213 C 370 200 424 185 450 ${salgB}`, delay:4.28 },
  { key:"rs", d:`M 450 201 L 450 ${salgB}`,                  delay:4.38 },
  { key:"vs", d:`M 560 213 C 528 200 474 185 450 ${salgB}`,  delay:4.48 },
] as const;

// Variant helpers
function draw(delay: number, dur = 0.65) {
  return {
    hidden:  { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1, opacity: 1,
      transition: {
        pathLength: { duration: dur, delay, ease: "easeInOut" as const },
        opacity:    { duration: 0.01, delay },
      },
    },
  };
}
function pop(delay: number) {
  return {
    hidden:  { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, delay, ease: "easeOut" as const } },
  };
}

export default function MountainMap() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const a      = inView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="bg-[#F7F4EE] py-20 md:py-28 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={pop(0)} initial="hidden" animate={a}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#101010]/20" />
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#737373] uppercase">
              Vår metode
            </p>
            <span className="w-6 h-px bg-[#101010]/20" />
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight text-[#101010] leading-[1.05]">
            Hvordan vi når toppen
          </h2>
          <p className="text-[14px] text-[#888] mt-3 max-w-xs mx-auto leading-relaxed">
            Vi finner rutene som faktisk når toppen — fra 20 creatives til salg.
          </p>
        </motion.div>

        {/* Map — aspect-ratio matches mountain image (1672:941 ≈ 900:640 with cover) */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "900 / 640" }}
        >
          {/* Stage 1: Fuji mountain (objectFit cover keeps peak centered at ≈ SVG y=177) */}
          <motion.img
            src="/fujii-bg.png"
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.24 } : { opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {/* SVG creative-route overlay */}
          <svg
            viewBox="0 0 900 640"
            className="absolute inset-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── 1. Gray test lines (fail early) ── */}
            {TEST_LINES.map(l => (
              <motion.path
                key={l.key} d={l.d}
                stroke={INK} strokeWidth={0.85} strokeOpacity={l.op} strokeLinecap="round"
                variants={draw(l.delay, 0.40)} initial="hidden" animate={a}
              />
            ))}

            {/* ── 2. Green winner lines (climb to WA) ── */}
            {WIN_LINES.map(l => (
              <motion.path
                key={l.key} d={l.d}
                stroke={GREEN} strokeWidth={2.0} strokeLinecap="round"
                variants={draw(l.delay, 0.85)} initial="hidden" animate={a}
              />
            ))}

            {/* ── 3. WA → Branch lines ── */}
            {WAB.map(l => (
              <motion.path
                key={l.key} d={l.d}
                stroke={INK} strokeWidth={l.op > 0.4 ? 1.1 : 0.65} strokeOpacity={l.op}
                strokeLinecap="round"
                variants={draw(l.delay, 0.52)} initial="hidden" animate={a}
              />
            ))}

            {/* ── 4. Branch → Salg lines (green, final push to peak) ── */}
            {BTS.map(l => (
              <motion.path
                key={l.key} d={l.d}
                stroke={GREEN} strokeWidth={1.7} strokeOpacity={0.80} strokeLinecap="round"
                variants={draw(l.delay, 0.52)} initial="hidden" animate={a}
              />
            ))}

            {/* ── 5. Creative dots at foot ── */}
            {DOTS.map((d, i) => (
              <motion.circle
                key={`dot-${i}`} cx={d.x} cy={d.y}
                r={d.win ? 5 : 3}
                fill={d.win ? GREEN : INK}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: d.win ? 1 : 0.48 } : {}}
                transition={{ duration: 0.22, delay: 0.6 + i * 0.04, ease: "easeOut" }}
              />
            ))}

            {/* "20 CREATIVES" label */}
            <motion.text
              x="450" y="494"
              textAnchor="middle" fill="#888"
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", fontFamily: FONT }}
              variants={pop(0.45)} initial="hidden" animate={a}
            >
              20 CREATIVES
            </motion.text>

            {/* ── 6. Winning ad boxes ── */}
            {WAS.map((wa, i) => (
              <motion.g key={`wa-${i}`} variants={pop(2.65 + i * 0.12)} initial="hidden" animate={a}>
                <rect
                  x={wa.x - 40} y={wa.cy - WA_H / 2}
                  width={80} height={WA_H} rx={5}
                  fill={INK}
                />
                <text
                  x={wa.x} y={wa.cy}
                  textAnchor="middle" dominantBaseline="central" fill="white"
                  style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: "0.04em", fontFamily: FONT }}
                >
                  Winning ad
                </text>
              </motion.g>
            ))}

            {/* ── 7. Branch labels ── */}
            {BRANCHES.map((b, i) => (
              <motion.g key={`bl-${b.id}`} variants={pop(3.88 + i * 0.10)} initial="hidden" animate={a}>
                <rect
                  x={b.x - 56} y={b.cy - BR_H / 2}
                  width={112} height={BR_H} rx={6}
                  fill="white" stroke={INK} strokeWidth={0.5} strokeOpacity={0.14}
                />
                <text
                  x={b.x} y={b.cy}
                  textAnchor="middle" dominantBaseline="central" fill={INK}
                  style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.02em", fontFamily: FONT }}
                >
                  {b.label}
                </text>
              </motion.g>
            ))}

            {/* ── 8. Salg — summit badge ── */}
            <motion.g variants={pop(4.82)} initial="hidden" animate={a}>
              <circle cx={SALG.cx} cy={SALG.cy} r={SALG.r + 10}
                stroke={GREEN} strokeWidth={1} strokeOpacity={0.28}
              />
              <circle cx={SALG.cx} cy={SALG.cy} r={SALG.r} fill={INK} />
              <text
                x={SALG.cx} y={SALG.cy}
                textAnchor="middle" dominantBaseline="central" fill="white"
                style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", fontFamily: FONT }}
              >
                Salg
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
}
