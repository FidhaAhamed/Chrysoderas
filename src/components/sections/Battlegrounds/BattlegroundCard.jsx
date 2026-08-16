import React from "react";
import GlowCard from "../../common/GlowCard";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { GiSharkFin, GiSuspensionBridge } from "react-icons/gi";

/* Anchor SVG (animated live quill drawing effect) */
const AnchorSVG = ({ size = 24 }) => (
  <motion.svg width={size} height={size} viewBox="0 0 48 60" fill="none"
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
  >
    <motion.circle cx="24" cy="12" r="7" stroke="rgba(200,134,10,0.85)" strokeWidth="2.5" fill="none"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 1, delay: 0.1 }} />
    <motion.line x1="24" y1="19" x2="24" y2="52" stroke="rgba(200,134,10,0.85)" strokeWidth="2.5"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 1.2, delay: 0.2 }} />
    <motion.path d="M10 28 Q5 28 5 36 Q5 50 24 52 Q43 50 43 36 Q43 28 38 28" stroke="rgba(200,134,10,0.85)" strokeWidth="2.5" fill="none"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 1.5, delay: 0.4 }} />
    <motion.line x1="8" y1="28" x2="40" y2="28" stroke="rgba(200,134,10,0.85)" strokeWidth="2.5"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.8, delay: 0.6 }} />
    <motion.circle cx="24" cy="12" r="3" fill="rgba(200,134,10,0.9)"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.5, delay: 1.2 }} />
  </motion.svg>
);

const ICONS = {
  zap: AnchorSVG,
  shark: GiSharkFin,
  bridge: GiSuspensionBridge,
};

const BattlegroundCard = ({ battleground, onSelect, index }) => {
  const IconComponent = ICONS[battleground.icon];

  return (
    <GlowCard
      type="button"
      onClick={() => onSelect(battleground)}
      index={index}
      className="group flex flex-col items-start text-left hover-target"
      style={{
        padding: "28px",
        borderRadius: "4px",
        background: "linear-gradient(135deg, rgba(15, 30, 50, 0.75), rgba(8, 20, 35, 0.85))",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(200,134,10,0.35)",
      }}
    >
      {/* Map corner decorations */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
      <span className="absolute top-2 right-2 w-3 h-3 border-t border-r" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r" style={{ borderColor: "rgba(200,134,10,0.45)" }} />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center"
        style={{
          border: "1px solid rgba(200,134,10,0.35)",
          borderRadius: "3px",
          background: "linear-gradient(135deg, rgba(26,74,107,0.3), rgba(15,52,96,0.2))",
          color: "#c8860a",
          fontSize: "1.4rem",
        }}>
        {battleground.icon === "zap"
          ? <AnchorSVG size={24} />
          : <IconComponent style={{ color: "#c8860a" }} />
        }
      </div>

      <h3 className="mt-5" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.92rem", color: "#c8d8e8" }}>
        {battleground.title}
      </h3>

      <p className="mt-3 text-sm font-light line-clamp-2"
        style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "rgba(168,196,216,0.75)" }}>
        {battleground.description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-xs" style={{ color: "rgba(30,106,138,0.8)" }}>
        <FiMapPin style={{ color: "rgba(200,134,10,0.7)" }} />
        {battleground.venue}
      </div>

      <span className="mt-5 inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-wider"
        style={{
          fontFamily: "'Cinzel',serif",
          color: "rgba(200,134,10,0.85)",
          border: "1px solid rgba(200,134,10,0.3)",
          background: "rgba(26,74,107,0.15)",
          borderRadius: "2px",
        }}>
        {battleground.tag}
      </span>
    </GlowCard>
  );
};

export default BattlegroundCard;