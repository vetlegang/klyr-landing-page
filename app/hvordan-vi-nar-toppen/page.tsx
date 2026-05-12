import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MountainMap from "../components/MountainMap";

export const metadata: Metadata = {
  title: "Hvordan vi når toppen | Fujii",
  description: "Fra 20 creatives til salg — systematisk, ikke tilfeldig.",
};

export default function HvordanViNaarToppen() {
  return (
    <>
      <Navbar />
      <main>
        <MountainMap />
      </main>
      <Footer />
    </>
  );
}
