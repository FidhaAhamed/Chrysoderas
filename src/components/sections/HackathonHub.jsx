import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ParchmentButton } from "../common/ParchmentButton";
import GlowCard from "../common/GlowCard";
import { FiDownload } from "react-icons/fi";

const DOMAINS = [
  { label: "AI / ML", desc: "Intelligent systems & automation", icon: "⚙️" },
  { label: "Web3 & Blockchain", desc: "Decentralized, trustless builds", icon: "⛓️" },
  { label: "IoT & Hardware", desc: "Bridging the physical & digital", icon: "🔩" },
  { label: "Sustainability Tech", desc: "Solutions for a greener future", icon: "🌿" },
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
            className="text-[#c49c36]"
            style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3.2rem)", lineHeight: 1.25 }}
          >
            The Overnight Hackathon
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
              className="group p-6 hover-target"
              style={{
                background: "linear-gradient(135deg, rgba(26,74,107,0.15), rgba(15,52,96,0.1))",
                border: "1px solid rgba(200,134,10,0.2)",
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

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <div className="flex justify-center mt-12 mb-8">
            <ParchmentButton href="/assets/hackathon-rulebook.pdf" size="sm" icon={<span>⚓</span>}>
              Download Rulebook
            </ParchmentButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonHub;