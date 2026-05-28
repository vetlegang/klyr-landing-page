import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import ScrollBackground from "./components/ScrollBackground";
import FloatingCTA from "./components/FloatingCTA";
import { LanguageProvider } from "./i18n/LanguageContext";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fujii.no"),
  title: {
    default: "Fujii — Annonser som faktisk selger",
    template: "%s | Fujii",
  },
  description:
    "20 unike Meta-creatives klare for testing — still ads og video ads med vinnende hooks og vinkler. Fra 5 000 kr, ingen binding. Levert av tre norske creatives med 1 000+ annonser produsert.",
  keywords: [
    "Meta annonser Norge",
    "Facebook annonser byrå",
    "Instagram annonser",
    "performance creatives",
    "UGC annonser",
    "annonseproduksjon",
    "Meta ads byrå",
    "Facebook ads produksjon",
    "kreative annonser Norge",
    "video ads Meta",
    "still ads Meta",
    "hooks annonser",
    "ROAS forbedring",
    "annonsebyrå Norge",
    "Fujii",
  ],
  authors: [{ name: "Fujii AS", url: "https://fujii.no" }],
  creator: "Fujii AS",
  publisher: "Fujii AS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_US",
    url: "https://fujii.no",
    siteName: "Fujii",
    title: "Fujii — Annonser som faktisk selger",
    description:
      "20 unike Meta-creatives klare for testing. Still ads + video ads med vinnende hooks. Fra 5 000 kr, ingen binding.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fujii — Annonser som faktisk selger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fujii — Annonser som faktisk selger",
    description:
      "20 unike Meta-creatives klare for testing. Fra 5 000 kr, ingen binding.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://fujii.no",
    languages: {
      "nb-NO": "https://fujii.no",
      "en-US": "https://fujii.no",
    },
  },
  verification: {
    // google: "legg-til-din-google-search-console-kode-her",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#F7F4EE] text-[#101010] min-h-screen">
        <LanguageProvider>
          <ScrollBackground />
          <div className="relative z-10">
            {children}
          </div>
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
