import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYouGet from "./components/WhatYouGet";
import WhoItsFor from "./components/WhoItsFor";
import ProofStrip from "./components/ProofStrip";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatYouGet />
        <WhoItsFor />
        <ProofStrip />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
