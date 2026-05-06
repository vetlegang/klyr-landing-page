import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KLYR | Creative Performance for Meta",
  description:
    "KLYR bygger creative-systemer som lærer av hvert signal – ikke random testing, men systematisk iterasjon fra hook til skalering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#F7F4EE] text-[#101010] min-h-screen">{children}</body>
    </html>
  );
}
