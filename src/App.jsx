import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Lore from "./components/sections/Lore";
import HackathonHub from "./components/sections/HackathonHub";
import Battlegrounds from "./components/sections/Battlegrounds/Battlegrounds";
import TreasureHuntBanner from "./components/sections/TreasureHuntBanner";
import Schedule from "./components/sections/Schedule/Schedule";
import FAQ from "./components/sections/faq";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import CustomCursor from "./components/common/CustomCursor";
import Preloader from "./components/common/Preloader";
import Embers from "./components/common/Embers";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHoverable, setIsHoverable] = useState(false);

  const { scrollYProgress } = useScroll();

  /* =====================================================
     PARALLAX
  ====================================================== */

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -280]
  );

  const waveY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  /* =====================================================
     SETUP
  ====================================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    setIsHoverable(mediaQuery.matches);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020810]">

      {/* =====================================================
          MOBILE STORM BACKGROUND
      ====================================================== */}

      <motion.div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          block
          md:hidden
        "
        style={{
          y: backgroundY,
          backgroundImage: `
            linear-gradient(
              rgba(2, 8, 16, 0.35),
              rgba(2, 8, 16, 0.82)
            ),
            url('/hero_bg_mobile.jpeg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120dvh",
        }}
      />

      {/* =====================================================
          DESKTOP STORM BACKGROUND
      ====================================================== */}

      <motion.div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          hidden
          md:block
        "
        style={{
          y: backgroundY,
          backgroundImage: `
            linear-gradient(
              rgba(2, 8, 16, 0.58),
              rgba(2, 8, 16, 0.82)
            ),
            url('/hero-bg.jpeg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120dvh",
        }}
      />

      {/* =====================================================
          DARK VIGNETTE
      ====================================================== */}

      <div
        className="
          fixed
          inset-0
          z-[1]
          pointer-events-none
          bg-[radial-gradient(
            circle_at_center,
            transparent_15%,
            rgba(0,5,12,0.28)_60%,
            rgba(0,3,8,0.72)_100%
          )]
        "
      />

      {/* =====================================================
          DECORATIVE WAVE
      ====================================================== */}

      <motion.img
        src="/wave.png"
        alt=""
        className="
          fixed
          bottom-[-20px]
          left-[-100px]
          z-[2]
          pointer-events-none
          w-[360px]
          opacity-[0.12]
          md:w-[500px]
          md:opacity-[0.16]
        "
        style={{
          y: waveY,
        }}
        animate={{
          x: [-10, 20, -10],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SECOND WAVE */}

      <motion.img
        src="/wave.png"
        alt=""
        className="
          fixed
          top-[18%]
          right-[-120px]
          z-[2]
          pointer-events-none
          w-[320px]
          rotate-180
          opacity-[0.06]
          md:w-[430px]
        "
        animate={{
          x: [20, -15, 20],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          GOLD STAR DETAILS
      ====================================================== */}

      <motion.img
        src="/star.png"
        alt=""
        className="
          fixed
          left-[8%]
          top-[28%]
          z-[3]
          pointer-events-none
          h-4
          w-4
        "
        animate={{
          opacity: [0.15, 0.5, 0.15],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/star.png"
        alt=""
        className="
          fixed
          right-[12%]
          top-[42%]
          z-[3]
          pointer-events-none
          h-3
          w-3
        "
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/star.png"
        alt=""
        className="
          fixed
          right-[25%]
          bottom-[20%]
          z-[3]
          pointer-events-none
          h-3
          w-3
        "
        animate={{
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE GOLDEN LIGHT
      ====================================================== */}

      <motion.div
        className="
          fixed
          left-[-100px]
          bottom-[5%]
          z-[2]
          h-[300px]
          w-[300px]
          pointer-events-none
          rounded-full
          bg-[#d4a017]/10
          blur-[100px]
        "
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          COMPASS DECORATION
      ====================================================== */}

      <motion.img
        src="/compass5.png"
        alt=""
        className="
          fixed
          right-[3%]
          top-[25%]
          z-[3]
          pointer-events-none
          hidden
          lg:block
          h-16
          w-16
          opacity-[0.08]
        "
        animate={{
          rotate: [0, 8, 0, -8, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          FILM GRAIN
      ====================================================== */}

      <div
        className="
          hidden
          md:block
          fixed
          inset-0
          pointer-events-none
          z-[9999]
          opacity-[0.035]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <Embers />

      {/* =====================================================
          CUSTOM CURSOR
      ====================================================== */}

      {isHoverable && <CustomCursor />}

      {/* =====================================================
          PRELOADER
      ====================================================== */}

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" />
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN WEBSITE
      ====================================================== */}

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