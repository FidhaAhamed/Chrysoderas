import { motion } from "framer-motion";
import { GiScrollUnfurled, GiTreasureMap } from "react-icons/gi";

/* ── Shared mini-components (self-contained) ── */
const Sparkle = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 L17.5 14.5 L30 16 L17.5 17.5 L16 30 L14.5 17.5 L2 16 L14.5 14.5 Z"
      fill="rgba(200,134,10,0.9)" />
  </svg>
);

const RopeDivider = ({ children = "⚓" }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 rope-line" />
    <span className="text-base text-amber-500 flex-shrink-0">{children}</span>
    <div className="flex-1 rope-line" />
  </div>
);

/* Compass rose used as corner decoration */
const CompassCorner = ({ size = 100, opacity = 0.13 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <circle cx="50" cy="50" r="46" stroke="rgba(200,134,10,0.7)" strokeWidth="0.8" />
    <circle cx="50" cy="50" r="36" stroke="rgba(30,106,138,0.4)" strokeWidth="0.5" />
    <path d="M50 4 L53 46 L50 50 L47 46 Z" fill="rgba(200,134,10,0.9)" />
    <path d="M50 96 L53 54 L50 50 L47 54 Z" fill="rgba(200,134,10,0.55)" />
    <path d="M4 50 L46 47 L50 50 L46 53 Z" fill="rgba(200,134,10,0.55)" />
    <path d="M96 50 L54 47 L50 50 L54 53 Z" fill="rgba(200,134,10,0.9)" />
    <path d="M50 50 L24 24 L50 36 Z" fill="rgba(30,106,138,0.45)" />
    <path d="M50 50 L76 24 L50 36 Z" fill="rgba(200,134,10,0.35)" />
    <path d="M50 50 L76 76 L50 64 Z" fill="rgba(30,106,138,0.45)" />
    <path d="M50 50 L24 76 L50 64 Z" fill="rgba(200,134,10,0.35)" />
    <text x="47" y="18" fontSize="8" fill="rgba(200,134,10,0.85)" fontFamily="Cinzel,serif">N</text>
    <circle cx="50" cy="50" r="4" fill="rgba(200,134,10,0.8)" />
  </svg>
);

const TreasureHuntBanner = () => (
  <section
    id="treasure-hunt"
    className="relative flex w-full items-center justify-center overflow-hidden py-28 sm:py-40"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(26,74,107,0.38) 0%, transparent 65%)," +
        "radial-gradient(ellipse 55% 45% at 80% 75%, rgba(15,52,96,0.25) 0%, transparent 55%)",
    }}
  >
    {/* Background map grid */}
    <div className="pointer-events-none absolute inset-0 map-grid opacity-60" />

    {/* Atmospheric glow */}
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{ background: "radial-gradient(65% 65% at 50% 45%, rgba(26,74,107,0.22), transparent 70%)" }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Gold sparkle field */}
    {[...Array(12)].map((_, i) => (
      <div key={i} className="pointer-events-none absolute star"
        style={{
          top: `${10 + Math.random() * 80}%`,
          left: `${5 + Math.random() * 90}%`,
          "--dur": `${2.5 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 4}s`,
        }}>
        <Sparkle size={Math.random() > 0.7 ? 14 : 8} />
      </div>
    ))}

    {/* Compass — left */}
    <motion.div className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}>
      <CompassCorner size={150} opacity={0.18} />
    </motion.div>

    {/* Compass — right (counter-rotate) */}
    <motion.div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2"
      animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}>
      <CompassCorner size={110} opacity={0.12} />
    </motion.div>

    {/* ── SCROLL CARD ── */}
    <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">

      {/* Scroll top curl SVG */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }}
        className="w-full max-w-md"
      >
        <svg viewBox="0 0 380 32" className="w-full" style={{ height: 28 }}>
          {/* left roller */}
          <ellipse cx="20" cy="18" rx="18" ry="11" fill="rgba(15,40,80,0.7)" stroke="rgba(200,134,10,0.4)" strokeWidth="1" />
          {/* gold edge line */}
          <path d="M38,14 Q190,0 342,14" fill="none" stroke="rgba(200,134,10,0.6)" strokeWidth="1.5" strokeDasharray="8 5" />
          <path d="M38,18 Q190,4 342,18" fill="none" stroke="rgba(30,106,138,0.4)" strokeWidth="1" />
          {/* right roller */}
          <ellipse cx="360" cy="18" rx="18" ry="11" fill="rgba(15,40,80,0.7)" stroke="rgba(200,134,10,0.4)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Main scroll body */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.75 }}
        className="w-full max-w-md px-8 pt-8 pb-10 scroll-card relative"
      >
        {/* Ruled lines */}
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(30,106,138,0.06) 22px, rgba(30,106,138,0.06) 23px)" }} />

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
          className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center"
          style={{
            border: "1px solid rgba(200,134,10,0.45)",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(26,74,107,0.3), rgba(15,52,96,0.2))",
            boxShadow: "0 0 24px rgba(200,134,10,0.2)",
          }}
        >
          <GiScrollUnfurled className="text-2xl" style={{ color: "#c8860a" }} />
        </motion.div>

        {/* Sub-label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.55 }}
          className="block text-xs uppercase tracking-[0.28em]"
          style={{ fontFamily: "'Cinzel', serif", color: "rgba(30,106,138,0.85)" }}
        >
          The Afternoon Unifier
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.75 }}
          className="mt-3 text-[#c49c36]"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.5rem,5vw,2.4rem)",
            lineHeight: 1.25,
          }}
        >
          The Mega Treasure Hunt
        </motion.h2>

        {/* Inner rope divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.26, duration: 0.6 }}
          className="mt-5"
        >
          <RopeDivider><GiTreasureMap className="text-amber-500" /></RopeDivider>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.32, duration: 0.7 }}
          className="mt-4 italic leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "#a8c4d8" }}
        >
          When the Battlegrounds fall silent, every crew from Shark Tank,
          Junkyard, and Bridge Building converges on one final chase — decoding
          clues scattered across the entire campus.
        </motion.p>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-5 tracking-wide"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.88rem", color: "#c8d8e8" }}
        >
          Form your crew of 4. Decode the tech clues.
          <br />
          <span
            className="bg-gradient-to-r from-[#f5e6b8] via-[#e8c96a] to-[#c8860a] bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Claim the Golden Fleece.
          </span>
        </motion.p>
      </motion.div>

      {/* Scroll bottom curl */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
        className="w-full max-w-md"
      >
        <svg viewBox="0 0 380 32" className="w-full" style={{ height: 28 }}>
          <ellipse cx="20" cy="14" rx="18" ry="11" fill="rgba(15,40,80,0.7)" stroke="rgba(200,134,10,0.4)" strokeWidth="1" />
          <path d="M38,18 Q190,32 342,18" fill="none" stroke="rgba(200,134,10,0.6)" strokeWidth="1.5" strokeDasharray="8 5" />
          <path d="M38,14 Q190,28 342,14" fill="none" stroke="rgba(30,106,138,0.4)" strokeWidth="1" />
          <ellipse cx="360" cy="14" rx="18" ry="11" fill="rgba(15,40,80,0.7)" stroke="rgba(200,134,10,0.4)" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  </section >
);

export default TreasureHuntBanner;