const footerLinks = {
  Tjenester: [
    "Paid Social",
    "Creative Strategy",
    "Search & Shopping",
    "CRO",
    "Measurement",
    "Growth Systems",
  ],
  Selskapet: ["Metode", "Arbeid", "Innsikt", "Kontakt"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.07] px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="text-2xl font-black tracking-[0.18em] text-white block mb-4"
            >
              KLYR
            </a>
            <p className="text-sm text-white/35 leading-relaxed max-w-[200px]">
              KLYR lager, tester og optimaliserer creatives som gjør det tydeligere hva som faktisk skaper salg.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
              Kom i gang
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center bg-[#BEFF00] text-black text-xs font-bold px-5 py-3 tracking-tight hover:bg-white transition-colors duration-200"
            >
              Book vekstanalyse
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/[0.07]">
          <p className="text-xs text-white/20">
            © {year} KLYR. Alle rettigheter forbeholdt.
          </p>
          <p className="text-xs text-white/15">
            Performance Marketing · Norge
          </p>
        </div>
      </div>
    </footer>
  );
}
