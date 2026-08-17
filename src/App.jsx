import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Lore from "./components/sections/Lore";
import HackathonHub from "./components/sections/HackathonHub";
import Battlegrounds from "./components/sections/Battlegrounds/Battlegrounds";
import TreasureHuntBanner from "./components/sections/TreasureHuntBanner";
import Schedule from "./components/sections/Schedule/Schedule";
import FAQ from "./components/sections/faq";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "./components/common/CustomCursor";
import Preloader from "./components/common/Preloader";
import Embers from "./components/common/Embers";

function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 4000], [0, -300]);

  return (
    <div className="relative">

      {/* Deep Parallax Sea Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none -z-50"
        style={{
          y,
          backgroundImage: "linear-gradient(rgba(2, 8, 16, 0.72), rgba(2, 8, 16, 0.72)), url('/hero-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "140vh",
          top: 0,
        }}
      />

      {/* Cinematic Film Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />

      <Embers />
      <CustomCursor />
      <AnimatePresence>
        <Preloader key="preloader" />
      </AnimatePresence>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Lore />
          <HackathonHub />
          <Battlegrounds />
          <TreasureHuntBanner />
          <Schedule />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;