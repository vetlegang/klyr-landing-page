import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYouGet from "./components/WhatYouGet";
import WhoItsFor from "./components/WhoItsFor";
import ProofStrip from "./components/ProofStrip";
import MountainMap from "./components/MountainMap";
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
        <section id="hvordan-vi-nar-toppen">
          <MountainMap />
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
