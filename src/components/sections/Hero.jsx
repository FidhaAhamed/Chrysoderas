import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParchmentButton } from "../common/ParchmentButton";

const LAUNCH_DATE = new Date("2026-09-11T09:00:00+05:30");
const getTimeLeft = () => {
  const diff = Math.max(LAUNCH_DATE.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: "easeOut" } }),
};

/* ── Compass rose icon (used as ship wheel icon in button) ── */
const CompassIcon = ({ size = 22, color = "#1a0a00" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="3" />
    <circle cx="50" cy="50" r="16" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M50 6 L54 46 L50 50 L46 46 Z" fill={color} />
    <path d="M50 94 L54 54 L50 50 L46 54 Z" fill={color} opacity="0.5" />
    <path d="M6 50 L46 46 L50 50 L46 54 Z" fill={color} opacity="0.5" />
    <path d="M94 50 L54 46 L50 50 L54 54 Z" fill={color} />
    <text x="47" y="22" fontSize="12" fill={color} fontFamily="Cinzel,serif" fontWeight="bold">N</text>
    <circle cx="50" cy="50" r="5" fill={color} />
  </svg>
);

/* ── Star sparkle (4-pointed) ── */
const Star = ({ size = 14, color = "#c8860a" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 0 L17.8 14.2 L32 16 L17.8 17.8 L16 32 L14.2 17.8 L0 16 L14.2 14.2 Z" fill={color} />
  </svg>
);

/* ── Decorative badge rule: ————✦ TEXT ✦———— ── */
const GoldRule = ({ children }) => (
  <div className="flex items-center justify-center gap-3 select-none">
    <div className="h-px w-16 sm:w-24" style={{ background: "linear-gradient(90deg, transparent, rgba(200,134,10,0.85))" }} />
    <Star size={12} />
    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", letterSpacing: "0.25em", color: "rgba(200,134,10,0.9)", textTransform: "uppercase", fontWeight: 600 }}>
      {children}
    </span>
    <Star size={14} />
    <div className="h-px w-16 sm:w-24" style={{ background: "linear-gradient(90deg, rgba(200,134,10,0.85), transparent)" }} />
  </div>
);

/* ── Date row with sparkle icons ── */
const DateRow = ({ children }) => (
  <div className="flex items-center justify-center gap-3 select-none">
    <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(200,134,10,0.7))" }} />
    <Star size={10} />
    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", letterSpacing: "0.2em", color: "rgba(200,134,10,0.9)", textTransform: "uppercase", fontWeight: 600 }}>
      {children}
    </span>
    <Star size={12} />
    <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(90deg, rgba(200,134,10,0.7), transparent)" }} />
  </div>
);

/* ── Anchor SVG ── */
const AnchorSVG = ({ size = 20, color = "rgba(200,134,10,0.75)" }) => (
  <svg width={size} height={size} viewBox="0 0 48 60" fill="none">
    <circle cx="24" cy="12" r="7" stroke={color} strokeWidth="2.5" fill="none" />
    <line x1="24" y1="19" x2="24" y2="52" stroke={color} strokeWidth="2.5" />
    <path d="M10 28 Q5 28 5 36 Q5 50 24 52 Q43 50 43 36 Q43 28 38 28" stroke={color} strokeWidth="2.5" fill="none" />
    <line x1="8" y1="28" x2="40" y2="28" stroke={color} strokeWidth="2.5" />
    <circle cx="24" cy="12" r="3.5" fill={color} />
  </svg>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const UNITS = [
    { label: "Days", v: timeLeft.days },
    { label: "Hours", v: timeLeft.hours },
    { label: "Minutes", v: timeLeft.minutes },
    { label: "Seconds", v: timeLeft.seconds },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24">



      {/* ── CONTENT — centered ── */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
          <GoldRule>The Golden Fleece Awaits</GoldRule>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial="hidden" animate="visible" custom={0.12} variants={fadeUp}
          className="mt-5"
          style={{
            fontFamily: "'Uncial Antiqua', cursive",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#af8b33",
            textShadow:
              "0 0 80px rgba(200,134,10,0.25)," +
              "0 2px 40px rgba(0,0,0,0.9)," +
              "0 1px 0 rgba(255,240,180,0.1)",
          }}
        >
          ChrysoDeras&nbsp;'26
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial="hidden" animate="visible" custom={0.22} variants={fadeUp}
          className="mt-5 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            color: "rgba(210,222,235,0.9)",
            lineHeight: 1.6,
            letterSpacing: "0.01em",
          }}
        >
          Every voyage begins with a spark. Chart yours through the storm.
        </motion.p>

        {/* Date */}
        <motion.div initial="hidden" animate="visible" custom={0.3} variants={fadeUp} className="mt-4">
          <DateRow>September 11 &amp; 12, 2026</DateRow>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial="hidden" animate="visible" custom={0.4} variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5"
        >
          {UNITS.map((u) => (
            <div key={u.label}
              className="flex flex-col items-center px-5 py-3"
              style={{
                minWidth: 72,
                background: "linear-gradient(135deg, rgba(20, 35, 55, 0.85), rgba(10, 20, 30, 0.95))",
                border: "1px solid rgba(200,134,10,0.45)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 0 20px rgba(26,74,107,0.08), 0 4px 20px rgba(0,0,0,0.4)",
              }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "2.2rem", color: "#e8c96a", lineHeight: 1 }}>
                {String(u.v).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-widest"
                style={{ color: "rgba(168,196,216,0.7)" }}>
                {u.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA — parchment pill button */}
        <motion.div initial="hidden" animate="visible" custom={0.54} variants={fadeUp} className="mt-10">
          <ParchmentButton href="#register" icon={<CompassIcon size={22} color="#1a0a00" />}>
            Claim Your Fleece
          </ParchmentButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#lore"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 cursor-pointer hover-target p-4"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(200,134,10,0.7)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <AnchorSVG size={18} color="rgba(200,134,10,0.65)" />
      </motion.a>
    </section>
  );
};

export default Hero;