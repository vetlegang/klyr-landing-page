/**
 * JSON-LD Structured Data — read by Google, Bing, ChatGPT, Claude, Perplexity and other AI crawlers.
 * Describes Fujii AS as a business, its services, and its offers.
 * Not visible to users, but machine-readable in the HTML <head>.
 */
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fujii.no/#organization",
    name: "Fujii AS",
    legalName: "Fujii AS",
    url: "https://fujii.no",
    logo: "https://fujii.no/og-image.png",
    description:
      "Fujii er et norsk performance creative-studio som produserer Meta-annonser (Facebook og Instagram) som konverterer. Vi produserer 20 unike creatives — still ads og video ads — med vinnende hooks og vinkler, basert på over 1 000 annonser produsert siden 2024.",
    foundingDate: "2024",
    founders: [{ "@type": "Person", name: "Fujii-teamet" }],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 3 },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hei@fujii.no",
      availableLanguage: ["Norwegian", "English"],
    },
    sameAs: [],
    vatID: "937775792",
    areaServed: {
      "@type": "Country",
      name: "Norway",
    },
    knowsAbout: [
      "Meta Ads",
      "Facebook Advertising",
      "Instagram Advertising",
      "Performance Marketing",
      "Creative Production",
      "Video Ads",
      "UGC Content",
      "Ad Hooks",
      "ROAS Optimization",
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fujii.no/#website",
    url: "https://fujii.no",
    name: "Fujii",
    description: "Performance creative-studio for Meta-annonser",
    publisher: { "@id": "https://fujii.no/#organization" },
    inLanguage: ["nb", "en"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://fujii.no/#service",
    name: "Meta Ads Creative Produksjon",
    provider: { "@id": "https://fujii.no/#organization" },
    description:
      "Fujii produserer 20 unike Meta-creatives — still ads og video ads — med vinnende hooks, vinkler og copy tilpasset Facebook og Instagram. Levert innen avtalt frist, uten binding.",
    serviceType: "Advertising Creative Production",
    areaServed: { "@type": "Country", name: "Norway" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Testpakker",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Testpakken",
          description:
            "20 unike Meta-creatives basert på eksisterende materiell. Still ads og video ads med hooks, vinkler og copy.",
          price: "5000",
          priceCurrency: "NOK",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "5000",
            priceCurrency: "NOK",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: "https://fujii.no/#tilbud",
        },
        {
          "@type": "Offer",
          name: "Testpakken + Shoot",
          description:
            "Alt i Testpakken pluss filming hos kunden. 20 unike Meta-creatives med nytt materiell.",
          price: "8000",
          priceCurrency: "NOK",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "8000",
            priceCurrency: "NOK",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: "https://fujii.no/#tilbud",
        },
        {
          "@type": "Offer",
          name: "Testpakken + UGC",
          description:
            "Alt i Testpakken pluss filming med UGC-person eller creator.",
          price: "10000",
          priceCurrency: "NOK",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "10000",
            priceCurrency: "NOK",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: "https://fujii.no/#tilbud",
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        reviewBody:
          "Kampanje med ROAS på 5.6× for Boyer Bil via Fujii-produserte Meta-creatives.",
        itemReviewed: { "@id": "https://fujii.no/#service" },
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hva får jeg for 5 000 kr?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du får 20 unike creatives klare til bruk i Meta-annonser — 10 still ads og 10 video ads med ulike hooks og vinkler. Vanlig pris er 10 000 kr, men første runde har 50% rabatt.",
        },
      },
      {
        "@type": "Question",
        name: "Er det binding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nei. Prøvepakken er laget for at du skal teste oss uten forpliktelse. Etter første runde bestemmer du selv om du vil fortsette.",
        },
      },
      {
        "@type": "Question",
        name: "Er shoot inkludert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nei. Prøvepakken til 5 000 kr gjelder produksjon basert på tilgjengelig materiell. Shoot koster +3 000 kr, UGC-person +5 000 kr.",
        },
      },
      {
        "@type": "Question",
        name: "Passer Fujii for små bedrifter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Testpakken er laget for mindre, ambisiøse bedrifter som vil teste Meta-annonsering uten store byråretainere.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: "https://fujii.no",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Om oss",
        item: "https://fujii.no/om-oss",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Personvern",
        item: "https://fujii.no/personvern",
      },
    ],
  };

  const schemas = [organization, webSite, service, faqPage, breadcrumb];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
