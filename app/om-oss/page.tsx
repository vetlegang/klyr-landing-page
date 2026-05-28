import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "Om oss — Fujii",
  description: "Tre creatives fra Norge med én obsesjon: annonser som faktisk selger.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
