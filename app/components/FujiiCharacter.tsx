"use client";

// Fujii creative operator — original hand-drawn character.
// Drawn entirely in Fujii green.
// Two independent animation loops:
//   • Head/body: gentle up-down sway (breathing feel)
//   • Ad frame: slow wave, like paper in a breeze

export default function FujiiCharacter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fujii creative operator"
    >
      <style>{`
        @keyframes fj-sway {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-4px) rotate(0.5deg); }
          66%      { transform: translateY(-2px) rotate(-0.4deg); }
        }
        @keyframes fj-wave {
          0%,100% { transform: rotate(-3deg); }
          50%      { transform: rotate(4deg); }
        }
        .fj-body  { animation: fj-sway 4s ease-in-out infinite; }
        .fj-frame {
          transform-origin: 142px 138px;
          animation: fj-wave 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* Stroke + fill palette */}
      {/* Main stroke: #2A5C18 (deep green) — readable, clearly green */}
      {/* Accent fill:  #BEFF00 (Fujii lime) */}

      <g className="fj-body">

        {/* ── Head ── */}
        <ellipse
          cx="82" cy="60" rx="32" ry="34"
          stroke="#2A5C18" strokeWidth="2.8"
        />

        {/* Hair tufts — slightly irregular */}
        <path d="M65 32 Q69 22 75 29" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M80 26 Q84 16 90 23" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M96 29 Q101 20 106 28" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>

        {/* Eyes */}
        <circle cx="71" cy="57" r="4" fill="#2A5C18"/>
        <circle cx="93" cy="57" r="4" fill="#2A5C18"/>

        {/* Smile */}
        <path
          d="M69 72 Q82 82 95 72"
          stroke="#2A5C18" strokeWidth="2.2" strokeLinecap="round"
        />

        {/* ── Body / jacket ── */}
        <path
          d="M52 96 Q53 91 82 91 Q111 91 112 96 L110 172 Q109 178 82 178 Q55 178 54 172 Z"
          stroke="#2A5C18" strokeWidth="2.8"
        />

        {/* Collar V */}
        <path
          d="M74 91 L82 106 L90 91"
          stroke="#2A5C18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Centre button line */}
        <line x1="82" y1="114" x2="82" y2="162" stroke="#2A5C18" strokeWidth="1" opacity="0.35"/>
        <circle cx="82" cy="133" r="2.5" stroke="#2A5C18" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="82" cy="150" r="2.5" stroke="#2A5C18" strokeWidth="1.5" opacity="0.5"/>

        {/* Left arm — relaxed */}
        <path
          d="M54 112 Q36 122 30 150"
          stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"
        />
        <ellipse cx="29" cy="154" rx="6" ry="5" stroke="#2A5C18" strokeWidth="2.2"/>

        {/* Right arm — extended toward frame */}
        <path
          d="M110 110 Q134 112 143 134"
          stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"
        />

        {/* Legs */}
        <path d="M68 177 Q66 220 64 264" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M64 264 Q60 271 49 270"  stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>

        <path d="M96 177 Q98 220 100 264" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M100 264 Q104 271 115 270" stroke="#2A5C18" strokeWidth="2.8" strokeLinecap="round"/>

      </g>

      {/* ── Ad frame (waves like paper in breeze) ── */}
      <g className="fj-frame">

        {/* Outer frame */}
        <rect x="133" y="118" width="62" height="46" rx="5" stroke="#2A5C18" strokeWidth="2.8"/>

        {/* Lime fill */}
        <rect x="133" y="118" width="62" height="46" rx="5" fill="#BEFF00" fillOpacity="0.22"/>

        {/* Divider — storyboard columns */}
        <line x1="163" y1="118" x2="163" y2="164" stroke="#2A5C18" strokeWidth="1" opacity="0.3"/>
        <line x1="133" y1="141" x2="195" y2="141" stroke="#2A5C18" strokeWidth="1" opacity="0.3"/>

        {/* Top-left: play circle */}
        <circle cx="148" cy="129" r="7" stroke="#2A5C18" strokeWidth="1.5" opacity="0.55"/>
        <polygon points="145,125 145,133 153,129" fill="#2A5C18" opacity="0.5"/>

        {/* Top-right: text hint lines */}
        <line x1="170" y1="125" x2="188" y2="125" stroke="#2A5C18" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="170" y1="132" x2="185" y2="132" stroke="#2A5C18" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>

        {/* Bottom cells */}
        <rect x="138" y="147" width="14" height="10" rx="2" stroke="#2A5C18" strokeWidth="1" opacity="0.3"/>
        <rect x="156" y="147" width="14" height="10" rx="2" stroke="#2A5C18" strokeWidth="1" opacity="0.3"/>
        <rect x="174" y="147" width="14" height="10" rx="2" stroke="#2A5C18" strokeWidth="1" opacity="0.3"/>

        {/* Lime accent dot */}
        <circle cx="188" cy="123" r="4.5" fill="#BEFF00"/>

      </g>
    </svg>
  );
}
