"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const G  = "#2A5C18";
const BG = "#F5F4F0";

const T = {
  no: {
    label:        "Om oss",
    heroLine1:    "Vi har produsert",
    heroLine2:    "1 000+ annonser.",
    heroSub:      "Vi vet hva som selger — og hva som ikke gjør det.",

    storyLabel:   "Historien",
    storyHeading: "Vi lærte det den harde veien.",
    storyBody: [
      "I 2024 brukte vi hundrevis av timer inne i Meta Ads Manager. Ikke for å lage fine annonser — men for å forstå hva som faktisk selger. Vi A/B-testet hooks mot hooks, analyserte sekund for sekund hvorfor noen videoer ble stoppet og ikke andre, og kjørte kampanje etter kampanje til mønstrene ble tydelige.",
      "Bakgrunnen vår er i film, foto og design. Det ga oss øyet. Men det var annonsekontoen som ga oss innsikten: de sterkeste annonsene er sjelden de peneste. De er de som treffer riktig argument, for rett person, på rett tidspunkt.",
      "Over 1 000 creatives produsert. Mange feilet. Noen vant stort. Vi bygger på vinnerne.",
    ],

    craftLabel:   "Filosofi",
    craftHeading: "Vi er håndverkere.",
    craftBody: [
      "Tømreren med 20 år på nakken pitcher ikke med fancy presentasjoner — han viser deg hva han har bygget. Slik er det for oss også. Vi er ikke byråfolk med fine kontorer og seks lag med godkjenninger. Vi er tre folk som sitter tett på annonsekontoer og vet hva tallene betyr.",
      "De fleste kreative byråer måler seg på estetikk. Vi måler oss på konverteringer. Det er en viktig forskjell — og den merkes i hvert eneste creative vi leverer.",
    ],
    craftPull: "Vi er ikke de fineste. Vi er de som faktisk leverer salg.",

    diffLabel:    "Forskjellen",
    diffHeading:  "Creatives som kan markedsføring.",
    diffBody: [
      "Vi er ikke markedsførere som prøver å lage innhold. Vi er creatives som har lært seg performance-markedsføring fra innsiden — og den forskjellen merkes fra første sekund.",
      "Vi skriver hooks som stopper scrollingen. Vi velger vinkler basert på hva data sier konverterer i din bransje. Og vi vet når man skal skalere og når man skal bytte retning. Det er den typen kunnskap du ikke kjøper i en kurs — den kommer fra å ha kjørt hundrevis av tester selv.",
    ],

    pillars: [
      { num: "01", title: "Hook first",         desc: "De første 2 sekundene avgjør om annonsen lever eller dør. Vi skriver hooks som stopper scrollingen — ikke hooks som ser kule ut." },
      { num: "02", title: "Bredde med mening",  desc: "Vi produserer 20 creatives med ulike vinkler og argumenter. Ikke random variasjon — strategisk bredde som gir datagrunnlag." },
      { num: "03", title: "Bygg på vinnerne",   desc: "Etter testing vet vi hva som virker. Vi itererer på vinnerne og skalerer det som selger. Det er slik ROAS faktisk forbedres over tid." },
    ],

    ctaHeading: "Klar til å teste oss?",
    ctaSub:     "Ingen binding. Første runde til halv pris.",
    ctaBtn:     "Se tilbudet",
  },
  en: {
    label:        "About",
    heroLine1:    "We've produced",
    heroLine2:    "1,000+ ads.",
    heroSub:      "We know what sells — and what doesn't.",

    storyLabel:   "The story",
    storyHeading: "We learned it the hard way.",
    storyBody: [
      "In 2024 we spent hundreds of hours inside Meta Ads Manager. Not to make beautiful ads — but to understand what actually sells. We A/B tested hooks against hooks, analysed second by second why some videos got stopped and others didn't, and ran campaign after campaign until the patterns became clear.",
      "Our background is in film, photography and design. That gave us the eye. But it was the ad account that gave us the insight: the strongest ads are rarely the most beautiful ones. They're the ones that hit the right argument, for the right person, at the right moment.",
      "Over 1,000 creatives produced. Many failed. Some won big. We build on the winners.",
    ],

    craftLabel:   "Philosophy",
    craftHeading: "We are craftsmen.",
    craftBody: [
      "The carpenter with 20 years of experience doesn't pitch with fancy presentations — he shows you what he's built. That's how it works for us too. We're not agency people with nice offices and six layers of approval. We're three people sitting close to ad accounts who know what the numbers mean.",
      "Most creative agencies measure themselves on aesthetics. We measure ourselves on conversions. That's an important difference — and it shows in every single creative we deliver.",
    ],
    craftPull: "We're not the fanciest. We're the ones who actually deliver sales.",

    diffLabel:    "The difference",
    diffHeading:  "Creatives who know marketing.",
    diffBody: [
      "We are not marketers trying to make content. We are creatives who have learned performance marketing from the inside — and that difference shows from the very first second.",
      "We write hooks that stop the scroll. We choose angles based on what data says converts in your industry. And we know when to scale and when to change direction. That's the kind of knowledge you can't buy in a course — it comes from having run hundreds of tests yourself.",
    ],

    pillars: [
      { num: "01", title: "Hook first",        desc: "The first 2 seconds decide whether an ad lives or dies. We write hooks that stop the scroll — not hooks that just look cool." },
      { num: "02", title: "Breadth with intent", desc: "We produce 20 creatives with different angles and arguments. Not random variation — strategic breadth that provides a data foundation." },
      { num: "03", title: "Build on winners",  desc: "After testing we know what works. We iterate on winners and scale what sells. That's how ROAS actually improves over time." },
    ],

    ctaHeading: "Ready to test us?",
    ctaSub:     "No commitment. First round at half price.",
    ctaBtn:     "See the offer",
  },
};

const fade = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.55, delay, ease: [0.2, 0, 0.2, 1] as [number,number,number,number] },
});

export default function AboutContent() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div style={{ background: BG, color: G }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-10"
            {...fade(0.1)}
          >
            <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: G, opacity: 0.5 }}>
              {t.label}
            </p>
          </motion.div>

          <motion.h1
            className="leading-[0.9] tracking-tight"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(4rem, 16vw, 14rem)",
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 1] }}
          >
            <span style={{ opacity: 0.3 }}>{t.heroLine1}</span>
            <br />
            {t.heroLine2}
          </motion.h1>

          <motion.p
            className="mt-8 text-[16px] md:text-[18px] max-w-md leading-relaxed"
            style={{ opacity: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 md:py-28 border-t" style={{ borderColor: "rgba(42,92,24,0.1)" }}>
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] gap-12 md:gap-20">

          <motion.div {...fade(0)}>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ opacity: 0.4 }}>
              {t.storyLabel}
            </p>
            <h2
              className="leading-tight tracking-tight sticky top-28"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize:   "clamp(1.6rem, 2.5vw, 2.2rem)",
              }}
            >
              {t.storyHeading}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {t.storyBody.map((para, i) => (
              <motion.p
                key={i}
                className="text-[15px] md:text-[16px] leading-relaxed"
                style={{ opacity: i === 0 ? 0.85 : 0.55 }}
                {...fade(i * 0.1)}
              >
                {para}
              </motion.p>
            ))}

            {/* Year marker */}
            <motion.div
              className="mt-6 flex items-center gap-5"
              {...fade(0.3)}
            >
              <span
                className="font-black leading-none"
                style={{
                  fontFamily:    "var(--font-nunito), sans-serif",
                  fontSize:      "clamp(3.5rem, 8vw, 7rem)",
                  letterSpacing: "-0.04em",
                  opacity:       0.08,
                }}
              >
                1 000+
              </span>
              <span className="w-px self-stretch" style={{ background: G, opacity: 0.15 }} />
              <p className="text-[12px] leading-relaxed max-w-[180px]" style={{ opacity: 0.4 }}>
                {lang === "no"
                  ? "Creatives produsert siden 2024. Mange feilet. Noen vant stort."
                  : "Creatives produced since 2024. Many failed. Some won big."}
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Pull quote / Philosophy ────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 md:py-28 border-t" style={{ borderColor: "rgba(42,92,24,0.1)", background: G }}>
        <div className="max-w-[1440px] mx-auto">

          <motion.p
            className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(255,255,255,0.35)" }}
            {...fade(0)}
          >
            {t.craftLabel}
          </motion.p>

          <motion.h2
            className="leading-[0.92] tracking-tight mb-12"
            style={{
              fontFamily:    "var(--font-nunito), sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2.8rem, 8vw, 8rem)",
              letterSpacing: "-0.03em",
              color:         "#fff",
            }}
            {...fade(0.1)}
          >
            {t.craftHeading}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-14">
            {t.craftBody.map((para, i) => (
              <motion.p
                key={i}
                className="text-[15px] md:text-[16px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
                {...fade(0.1 + i * 0.1)}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="text-[clamp(1.4rem,3vw,2.4rem)] font-black leading-tight tracking-tight border-t pt-10"
            style={{
              fontFamily:  "var(--font-nunito), sans-serif",
              color:       "#BEFF00",
              borderColor: "rgba(255,255,255,0.1)",
            }}
            {...fade(0.3)}
          >
            {t.craftPull}
          </motion.p>

        </div>
      </section>

      {/* ── How we think ──────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 md:py-28 border-t" style={{ borderColor: "rgba(42,92,24,0.1)" }}>
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] gap-12 md:gap-20">

          <motion.div {...fade(0)}>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ opacity: 0.4 }}>
              {t.diffLabel}
            </p>
            <h2
              className="leading-tight tracking-tight sticky top-28"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize:   "clamp(1.6rem, 2.5vw, 2.2rem)",
              }}
            >
              {t.diffHeading}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {t.diffBody.map((para, i) => (
              <motion.p
                key={i}
                className="text-[15px] md:text-[16px] leading-relaxed"
                style={{ opacity: i === 0 ? 0.85 : 0.55 }}
                {...fade(i * 0.1)}
              >
                {para}
              </motion.p>
            ))}
          </div>

        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="rounded-2xl p-7 md:p-8 flex flex-col gap-4 relative overflow-hidden"
              style={{
                background: "rgba(42,92,24,0.07)",
                border:     "1.5px solid rgba(42,92,24,0.1)",
              }}
              {...fade(i * 0.1)}
            >
              <span
                className="absolute right-4 top-2 font-black pointer-events-none select-none"
                style={{
                  fontFamily:    "var(--font-nunito), sans-serif",
                  fontSize:      "clamp(4rem, 7vw, 6rem)",
                  letterSpacing: "-0.04em",
                  color:         G,
                  opacity:       0.05,
                  lineHeight:    1,
                }}
              >
                {p.num}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ opacity: 0.35 }}>
                {p.num}
              </span>
              <h3
                className="leading-tight tracking-tight"
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontWeight: 900,
                  fontSize:   "clamp(1.1rem, 1.8vw, 1.4rem)",
                }}
              >
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ opacity: 0.55 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-20 md:py-28 border-t"
        style={{ borderColor: "rgba(42,92,24,0.1)" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div {...fade(0)}>
            <h2
              className="leading-tight tracking-tight mb-3"
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 900,
                fontSize:   "clamp(2rem, 5vw, 4rem)",
              }}
            >
              {t.ctaHeading}
            </h2>
            <p className="text-[14px]" style={{ opacity: 0.5 }}>{t.ctaSub}</p>
          </motion.div>

          <motion.a
            href="/#tilbud"
            className="inline-flex items-center gap-2 text-[13px] font-black px-8 py-4 rounded-full tracking-tight shrink-0 transition-all duration-150"
            style={{ background: G, color: "#F5F4F0" }}
            whileHover={{ scale: 1.04 }}
            {...fade(0.1)}
          >
            {t.ctaBtn} →
          </motion.a>
        </div>
      </section>

    </div>
  );
}
