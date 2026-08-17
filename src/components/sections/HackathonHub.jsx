import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ParchmentButton } from "../common/ParchmentButton";
import GlowCard from "../common/GlowCard";
import { FiDownload } from "react-icons/fi";

/* Anchor icon */
const AnchorIcon = ({ size = 16, color = "#140a02" }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 48 60" fill="none" style={{ marginLeft: "2px" }}>
    <circle cx="24" cy="12" r="7" stroke={color} strokeWidth="2.8" fill="none" />
    <line x1="24" y1="19" x2="24" y2="52" stroke={color} strokeWidth="2.8" />
    <path d="M10 28 Q5 28 5 36 Q5 50 24 52 Q43 50 43 36 Q43 28 38 28" stroke={color} strokeWidth="2.8" fill="none" />
    <line x1="8" y1="28" x2="40" y2="28" stroke={color} strokeWidth="2.8" />
    <circle cx="24" cy="12" r="3.5" fill={color} />
  </svg>
);

const DOMAINS = [
  { label: "AI for Health & Well-Being", desc: "Intelligent solutions for a healthier world", icon: "🌿" },
  { label: "Future Learning & Career Empowerment", desc: "Chart your course to the next frontier", icon: "📜" },
  { label: "GreenTech & Sustainable Innovation", desc: "Eco-friendly tech for a thriving world", icon: "🍃" },
  { label: "Cyber Defense & Digital Trust", desc: "Secure your fleet against digital threats", icon: "🛡️" },
  { label: "Smart Living & Connected Communities", desc: "Bridging the gap to a unified society", icon: "🌐" },
];

const RopeDivider = ({ children = "⚓" }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 rope-line" />
    <span className="text-base text-amber-500 flex-shrink-0">{children}</span>
    <div className="flex-1 rope-line" />
  </div>
);

/* Ship's hourglass timer counter */
const useCountUp = (target, isInView, duration = 1.4) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [isInView, target, duration]);
  return value;
};

const HackathonHub = () => {
  const statRef = useRef(null);
  const inView = useInView(statRef, { once: true, margin: "-100px" });
  const hours = useCountUp(16, inView);

  return (
    <section id="hackathon"
      className="relative w-full overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 5%, rgba(26,74,107,0.3) 0%, transparent 60%)," +
          "radial-gradient(ellipse 55% 40% at 20% 85%, rgba(15,52,96,0.2) 0%, transparent 55%)",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-[170px]"
        style={{ background: "rgba(26,74,107,0.18)" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">

          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}
          >
            ✦ The Flagship Voyage ✦
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[#c49c36]" style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2.2rem,6vw,4rem)", lineHeight: 1.1 }}>
              Odessa
            </span>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(1.2rem,3vw,1.8rem)", color: "#c8d8e8", letterSpacing: "0.05em" }}>
              The Overnight Hackathon
            </span>
          </motion.h2>

          {/* Animated hours counter */}
          <div ref={statRef}
            className="mt-10 flex items-center gap-5 px-8 py-5"
            style={{
              background: "linear-gradient(135deg, rgba(26,74,107,0.22), rgba(15,52,96,0.15))",
              border: "1px solid rgba(200,134,10,0.28)",
              borderRadius: "3px",
              boxShadow: "0 0 30px rgba(26,74,107,0.25)",
            }}>
            {/* Lantern icon SVG */}
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
              <rect x="8" y="8" width="16" height="24" rx="3" fill="rgba(200,134,10,0.15)" stroke="rgba(200,134,10,0.6)" strokeWidth="1.2" />
              <line x1="16" y1="0" x2="16" y2="8" stroke="rgba(200,134,10,0.6)" strokeWidth="1.5" />
              <ellipse cx="16" cy="32" rx="6" ry="3" fill="rgba(200,134,10,0.15)" stroke="rgba(200,134,10,0.5)" strokeWidth="1" />
              <ellipse cx="16" cy="20" rx="5" ry="6" fill="rgba(200,134,10,0.25)" />
            </svg>
            <div className="flex items-baseline gap-2">
              <span className="tabular-nums" style={{ fontFamily: "'Cinzel',serif", fontSize: "3rem", color: "#e8c96a" }}>
                {hours}
              </span>
              <span className="text-sm uppercase tracking-widest" style={{ color: "rgba(30,106,138,0.85)" }}>
                Continuous Hours
              </span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-xl italic leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.18rem", color: "#a8c4d8" }}
          >
            No sleep. No shortcuts. Sixteen relentless hours to design, build,
            and defend an idea worth chasing. Pick your domain, gather your
            crew, and sail through the night.
          </motion.p>
        </div>

        {/* Rope divider */}
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12">
          <RopeDivider>〰</RopeDivider>
        </motion.div>

        {/* Domain cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DOMAINS.map((domain, i) => (
            <GlowCard key={domain.label} index={i}
              className={`group p-6 hover-target ${i === DOMAINS.length - 1 && DOMAINS.length % 2 !== 0 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}`}
              style={{
                background: "linear-gradient(135deg, rgba(15, 30, 50, 0.75), rgba(8, 20, 35, 0.85))",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(200,134,10,0.35)",
                borderRadius: "3px",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{domain.icon}</span>
                <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: "0.9rem", color: "#c8d8e8" }}>
                  {domain.label}
                </h3>
              </div>
              <p className="mt-2 text-sm font-light"
                style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "rgba(168,196,216,0.7)" }}>
                {domain.desc}
              </p>
            </GlowCard>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HackathonHub;