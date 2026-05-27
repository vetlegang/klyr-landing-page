import StudioIndexHero from "./components/StudioIndexHero";
import Navbar from "./components/Navbar";
import ArbeidSection from "./components/ArbeidSection";
import OfferSection from "./components/OfferSection";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Minimal navbar — transparent until scrolled, overlays the hero */}
      <Navbar />
      <main>
        <StudioIndexHero />
        <ArbeidSection />
        <OfferSection />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
