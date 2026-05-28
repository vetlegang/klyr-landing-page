"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const G  = "#2A5C18";
const BG = "#F5F4F0";

const T = {
  no: {
    legal:    "Juridisk",
    title:    "Personvernerklæring",
    updated:  "Sist oppdatert: mai 2025 · Fujii AS · Org. 937 775 792",
    sections: [
      {
        heading: "Behandlingsansvarlig",
        content: [
          "Fujii AS, org.nr. 937 775 792, er behandlingsansvarlig for personopplysningene som samles inn via fujii.no.",
          "Henvendelser om personvern kan sendes til: hei@fujii.no",
        ],
        email: true,
      },
      {
        heading: "Hvilke data vi samler",
        content: [
          "Via kontaktskjemaet på nettsiden samler vi inn følgende opplysninger når du tar kontakt med oss:",
        ],
        list: ["Navn", "E-postadresse", "Telefonnummer", "Nettside-URL", "Hva virksomheten selger", "Annonsebudsjett (valgfritt)", "Ønsket shoot-alternativ"],
        content2: ["Vi samler ikke inn sensitive personopplysninger og bruker ikke automatisert beslutningstaking eller profilering."],
      },
      {
        heading: "Formål og rettslig grunnlag",
        content: [
          "Opplysningene brukes utelukkende for å vurdere din forespørsel og ta kontakt med deg i forbindelse med en eventuell leveranse av reklameproduksjon.",
          "Rettslig grunnlag er berettiget interesse (GDPR art. 6 nr. 1 f) — vi har en legitim interesse i å besvare henvendelser fra potensielle kunder. Der det inngås avtale, er grunnlaget oppfyllelse av avtale (art. 6 nr. 1 b).",
        ],
      },
      {
        heading: "Lagringstid",
        content: [
          "Opplysninger fra kontaktskjemaet lagres så lenge det er nødvendig for å håndtere forespørselen, og slettes senest 12 måneder etter siste kontakt dersom det ikke er inngått en avtale.",
          "Ved inngåelse av avtale lagres relevante opplysninger i henhold til norsk bokføringslov (5 år).",
        ],
      },
      {
        heading: "Databehandlere",
        content: ["Vi benytter følgende tredjepartstjenester som behandler personopplysninger på vegne av oss:"],
        processors: [
          { name: "Resend", desc: "E-postutsendelse ved innsending av kontaktskjema. Servere i EU/USA med EU Standard Contractual Clauses." },
          { name: "Vercel", desc: "Hosting av nettsiden. Data kan prosesseres i USA under Vercels DPA." },
        ],
        content2: ["Vi selger ikke, leier ut eller deler personopplysninger med andre tredjeparter for markedsføringsformål."],
      },
      {
        heading: "Dine rettigheter",
        content: ["Under GDPR har du følgende rettigheter knyttet til dine personopplysninger:"],
        rights: [
          { r: "Innsyn",          d: "Du kan be om innsyn i hvilke opplysninger vi har om deg." },
          { r: "Retting",         d: "Du kan be om at feilaktige opplysninger korrigeres." },
          { r: "Sletting",        d: "Du kan be om at opplysninger om deg slettes («retten til å bli glemt»)." },
          { r: "Begrensning",     d: "Du kan be om at behandlingen av dine opplysninger begrenses." },
          { r: "Dataportabilitet",d: "Du kan be om å få dine opplysninger utlevert i et maskinlesbart format." },
          { r: "Innsigelse",      d: "Du kan protestere mot behandling basert på berettiget interesse." },
        ],
        content2: ["Send forespørsler til hei@fujii.no. Vi svarer innen 30 dager."],
        email2: true,
      },
      {
        heading: "Informasjonskapsler",
        content: [
          "Nettsiden bruker kun teknisk nødvendige informasjonskapsler for at siden skal fungere. Vi bruker ikke tredjeparts sporings- eller analysecookies.",
          "Dersom vi i fremtiden tar i bruk analyse- eller markedsføringsverktøy som setter cookies, vil vi innhente ditt samtykke via et cookie-banner i tråd med ePrivacy-direktivet.",
        ],
      },
      {
        heading: "Klage",
        content: [
          "Dersom du mener vi behandler dine personopplysninger i strid med personvernregelverket, har du rett til å klage til Datatilsynet.",
          "Datatilsynet · Postboks 458 Sentrum, 0105 Oslo · datatilsynet.no",
        ],
        datatilsynet: true,
      },
      {
        heading: "Endringer",
        content: ["Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer vil varsles på nettsiden. Gjeldende versjon er alltid tilgjengelig på denne siden."],
      },
    ],
  },
  en: {
    legal:    "Legal",
    title:    "Privacy Policy",
    updated:  "Last updated: May 2025 · Fujii AS · Org. 937 775 792",
    sections: [
      {
        heading: "Data controller",
        content: [
          "Fujii AS, org.nr. 937 775 792, is the data controller for personal data collected via fujii.no.",
          "Privacy inquiries can be sent to: hei@fujii.no",
        ],
        email: true,
      },
      {
        heading: "What data we collect",
        content: ["Via the contact form on the website, we collect the following information when you contact us:"],
        list: ["Name", "Email address", "Phone number", "Website URL", "What the business sells", "Ad budget (optional)", "Preferred shoot option"],
        content2: ["We do not collect sensitive personal data and do not use automated decision-making or profiling."],
      },
      {
        heading: "Purpose and legal basis",
        content: [
          "The information is used solely to assess your enquiry and contact you in connection with a potential delivery of advertising production.",
          "The legal basis is legitimate interest (GDPR art. 6(1)(f)) — we have a legitimate interest in responding to enquiries from potential clients. Where a contract is entered into, the basis is performance of contract (art. 6(1)(b)).",
        ],
      },
      {
        heading: "Retention period",
        content: [
          "Information from the contact form is stored for as long as necessary to handle the enquiry, and deleted no later than 12 months after last contact if no agreement has been entered into.",
          "Where an agreement is entered into, relevant information is stored in accordance with Norwegian accounting legislation (5 years).",
        ],
      },
      {
        heading: "Data processors",
        content: ["We use the following third-party services that process personal data on our behalf:"],
        processors: [
          { name: "Resend", desc: "Email delivery upon submission of the contact form. Servers in EU/USA with EU Standard Contractual Clauses." },
          { name: "Vercel", desc: "Hosting of the website. Data may be processed in the USA under Vercel's DPA." },
        ],
        content2: ["We do not sell, rent or share personal data with other third parties for marketing purposes."],
      },
      {
        heading: "Your rights",
        content: ["Under GDPR you have the following rights regarding your personal data:"],
        rights: [
          { r: "Access",       d: "You can request access to what information we hold about you." },
          { r: "Rectification",d: "You can request that inaccurate information is corrected." },
          { r: "Erasure",      d: "You can request that information about you is deleted ('the right to be forgotten')." },
          { r: "Restriction",  d: "You can request that the processing of your data is restricted." },
          { r: "Portability",  d: "You can request your data in a machine-readable format." },
          { r: "Objection",    d: "You can object to processing based on legitimate interest." },
        ],
        content2: ["Send requests to hei@fujii.no. We respond within 30 days."],
        email2: true,
      },
      {
        heading: "Cookies",
        content: [
          "The website uses only technically necessary cookies for the site to function. We do not use third-party tracking or analytics cookies.",
          "If we in the future adopt analytics or marketing tools that set cookies, we will obtain your consent via a cookie banner in accordance with the ePrivacy Directive.",
        ],
      },
      {
        heading: "Complaints",
        content: [
          "If you believe we are processing your personal data in breach of data protection legislation, you have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).",
          "Datatilsynet · P.O. Box 458 Sentrum, 0105 Oslo, Norway · datatilsynet.no",
        ],
        datatilsynet: true,
      },
      {
        heading: "Changes",
        content: ["We may update this policy as needed. Material changes will be notified on the website. The current version is always available on this page."],
      },
    ],
  },
};

type SectionData = typeof T.no.sections[number];

function Section({ data }: { data: SectionData }) {
  return (
    <div className="border-t py-10 md:py-12" style={{ borderColor: "rgba(42,92,24,0.1)" }}>
      <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-16">
        <h2
          className="text-[13px] font-bold tracking-[0.1em] uppercase pt-0.5"
          style={{ color: G, opacity: 0.45 }}
        >
          {data.heading}
        </h2>
        <div className="flex flex-col gap-4 text-[14px] leading-relaxed" style={{ color: G, opacity: 0.7 }}>

          {data.content.map((p, i) => {
            const isEmail = data.email && i === data.content.length - 1;
            if (isEmail) {
              return (
                <p key={i}>
                  {p.split("hei@fujii.no")[0]}
                  <a href="mailto:hei@fujii.no" className="underline underline-offset-2" style={{ color: G }}>
                    hei@fujii.no
                  </a>
                </p>
              );
            }
            return <p key={i}>{p}</p>;
          })}

          {"list" in data && data.list && (
            <ul className="flex flex-col gap-2 ml-4">
              {data.list.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: G, opacity: 0.4 }} />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {"processors" in data && data.processors && (
            <div className="flex flex-col gap-3">
              {data.processors.map((d: { name: string; desc: string }) => (
                <div key={d.name} className="rounded-xl p-4" style={{ background: "rgba(42,92,24,0.05)", border: "1px solid rgba(42,92,24,0.08)" }}>
                  <p className="font-bold text-[13px] mb-1" style={{ color: G }}>{d.name}</p>
                  <p style={{ opacity: 0.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          )}

          {"rights" in data && data.rights && (
            <div className="flex flex-col gap-2">
              {data.rights.map((r: { r: string; d: string }) => (
                <div key={r.r} className="flex gap-3">
                  <span className="font-bold shrink-0 text-[13px]" style={{ color: G }}>{r.r}:</span>
                  <span>{r.d}</span>
                </div>
              ))}
            </div>
          )}

          {"content2" in data && data.content2 && data.content2.map((p: string, i: number) => {
            const isEmail2 = "email2" in data && data.email2;
            if (isEmail2) {
              return (
                <p key={i}>
                  {p.split("hei@fujii.no")[0]}
                  <a href="mailto:hei@fujii.no" className="underline underline-offset-2" style={{ color: G }}>
                    hei@fujii.no
                  </a>
                  {p.split("hei@fujii.no")[1]}
                </p>
              );
            }
            return <p key={i}>{p}</p>;
          })}

          {"datatilsynet" in data && data.datatilsynet && (
            <p>
              {data.content[1].split("datatilsynet.no")[0]}
              <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: G }}>
                datatilsynet.no
              </a>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default function PersonvernPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
      <Navbar />
      <main style={{ background: BG }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-14 pt-36 pb-24 md:pt-44 md:pb-32">

          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px" style={{ background: G, opacity: 0.3 }} />
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: G, opacity: 0.5 }}>
                {t.legal}
              </p>
            </div>
            <h1
              className="leading-tight tracking-tight mb-4"
              style={{
                fontFamily:    "var(--font-nunito), sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color:         G,
              }}
            >
              {t.title}
            </h1>
            <p className="text-[14px]" style={{ color: G, opacity: 0.45 }}>
              {t.updated}
            </p>
          </div>

          {t.sections.map((section) => (
            <Section key={section.heading} data={section} />
          ))}

        </div>
      </main>
      <Footer />
    </>
  );
}
