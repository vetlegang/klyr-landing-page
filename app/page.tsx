import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import ProblemSection from "./components/ProblemSection";
import OfferSection from "./components/OfferSection";
import WhyCreatives from "./components/WhyCreatives";
import CreativeCalculator from "./components/CreativeCalculator";
import WhatYouGet from "./components/WhatYouGet";
import WhoItsFor from "./components/WhoItsFor";
import GrowthEngine from "./components/GrowthEngine";
import Work from "./components/Work";
import Approach from "./components/Approach";
import PricingSection from "./components/PricingSection";
import FAQ from "./components/FAQ";
import FounderNote from "./components/FounderNote";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <OfferSection />
        <WhyCreatives />
        <CreativeCalculator />
        <WhatYouGet />
        <WhoItsFor />
        <GrowthEngine />
        <Work />
        <Approach />
        <PricingSection />
        <FAQ />
        <FounderNote />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
