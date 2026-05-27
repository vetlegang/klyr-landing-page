// Original SVG line illustrations for Fujii — editorial / film-studio aesthetic

export function FujiMountain({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Background ridge */}
      <polyline
        points="0,72 28,38 48,52 72,18 100,72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.25"
      />
      {/* Main peak */}
      <polyline
        points="18,72 60,8 102,72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Snow cap */}
      <polyline
        points="52,22 60,8 68,22"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
        strokeDasharray="1.5 1.5"
      />
      {/* Horizon line */}
      <line x1="0" y1="72" x2="120" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      {/* Small detail cross */}
      <line x1="60" y1="4" x2="60" y2="2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

export function FilmFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer frame */}
      <rect x="1" y="1" width="78" height="58" stroke="currentColor" strokeWidth="1" />
      {/* Film sprocket holes — left */}
      <rect x="5" y="8" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      <rect x="5" y="26" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      <rect x="5" y="44" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      {/* Film sprocket holes — right */}
      <rect x="70" y="8" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      <rect x="70" y="26" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      <rect x="70" y="44" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" />
      {/* Inner frame */}
      <rect x="14" y="8" width="52" height="44" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      {/* Play triangle */}
      <polygon points="33,22 33,38 50,30" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

export function CreativeGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Large cell top-left */}
      <rect x="2" y="2" width="46" height="34" stroke="currentColor" strokeWidth="0.9" />
      {/* Small cell top-right */}
      <rect x="52" y="2" width="26" height="15" stroke="currentColor" strokeWidth="0.9" />
      <rect x="52" y="21" width="26" height="15" stroke="currentColor" strokeWidth="0.9" />
      {/* Bottom row */}
      <rect x="2" y="40" width="22" height="18" stroke="currentColor" strokeWidth="0.9" />
      <rect x="28" y="40" width="22" height="18" stroke="currentColor" strokeWidth="0.9" />
      <rect x="54" y="40" width="24" height="18" stroke="currentColor" strokeWidth="0.9" />
      {/* Small cross mark in large cell */}
      <line x1="22" y1="13" x2="28" y2="13" stroke="currentColor" strokeWidth="0.7" />
      <line x1="25" y1="10" x2="25" y2="16" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

export function TestArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Main arc */}
      <path
        d="M8 32 C8 16, 72 16, 72 32"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polyline
        points="64,24 72,32 64,36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Start dot */}
      <circle cx="8" cy="32" r="2" stroke="currentColor" strokeWidth="0.8" />
      {/* Labels */}
      <line x1="8" y1="36" x2="8" y2="38" stroke="currentColor" strokeWidth="0.7" />
      <line x1="40" y1="14" x2="40" y2="12" stroke="currentColor" strokeWidth="0.7" />
      <line x1="72" y1="34" x2="72" y2="38" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

export function HookMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Circle */}
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="0.9" />
      {/* Hook letter mark */}
      <text
        x="30"
        y="35"
        textAnchor="middle"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="700"
        fill="currentColor"
        opacity="0.7"
      >
        h
      </text>
      {/* Small crosshair dots */}
      <circle cx="30" cy="8" r="1" fill="currentColor" opacity="0.35" />
      <circle cx="30" cy="52" r="1" fill="currentColor" opacity="0.35" />
      <circle cx="8" cy="30" r="1" fill="currentColor" opacity="0.35" />
      <circle cx="52" cy="30" r="1" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
