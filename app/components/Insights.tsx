"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const insights = [
  {
    tag: "Paid Social",
    title: "Hvorfor de fleste Meta-kontoer ikke har et budsjettproblem",
    excerpt:
      "Problemet er sjelden budsjettet. Det er strukturen, kreativene og måten signaler tolkes på. Slik diagnostiserer vi det.",
    readTime: "7 min",
  },
  {
    tag: "Creative Strategy",
    title: "Kreativ testing: fra tilfeldige annonser til systematisk læring",
    excerpt:
      "De fleste tester annonser. Få bygger et faktisk testsystem. Her er forskjellen – og hvordan det ser ut i praksis.",
    readTime: "9 min",
  },
  {
    tag: "Measurement",
    title: "MER, CPA og ROAS: hvilke tall bør du faktisk styre etter?",
    excerpt:
      "ROAS er fristende å styre på. Men det kan lede deg rett inn i fellen. Vi forklarer hva som faktisk gir bedre beslutninger.",
    readTime: "6 min",
  },
];

export default function Insights() {
  return (
    <section id="innsikt" className="bg-black py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase mb-6">
              Innsikt
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight">
              For merkevarer{" "}
              <span className="text-[#BEFF00]">som vil vokse</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a
              href="#"
              className="text-sm font-semibold text-white/40 hover:text-white transition-colors flex items-center gap-2"
            >
              Se alt <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {insights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group bg-black p-8 md:p-10 h-full flex flex-col hover:bg-[#0a0a0a] transition-colors duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#BEFF00]/60 uppercase">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-white/25 font-mono">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-white mb-4 leading-snug flex-1">
                  {item.title}
                </h3>

                <p className="text-sm text-white/40 leading-relaxed mb-8">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-white/25 group-hover:text-[#BEFF00] transition-colors duration-300">
                  <span>Les innlegget</span>
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
