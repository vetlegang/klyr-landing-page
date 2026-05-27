import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import ScrollBackground from "./components/ScrollBackground";
import FloatingCTA from "./components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Rounded playful font for wordmark + studio menu
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fujii | Creative Performance for Meta",
  description:
    "Fujii bygger creative-systemer som lærer av hvert signal – ikke random testing, men systematisk iterasjon fra hook til skalering.",
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
      <body className="bg-[#F7F4EE] text-[#101010] min-h-screen">
          <ScrollBackground />
          <div className="relative z-10">
            {children}
          </div>
          <FloatingCTA />
        </body>
    </html>
  );
}
