import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RopeDivider = ({ children = "⚓" }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 rope-line" />
    <span className="text-base text-amber-500 flex-shrink-0">{children}</span>
    <div className="flex-1 rope-line" />
  </div>
);

const Sparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 L17.5 14.5 L30 16 L17.5 17.5 L16 30 L14.5 17.5 L2 16 L14.5 14.5 Z"
      fill="rgba(200,134,10,0.85)" />
  </svg>
);

const Lore = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      dur: Math.random() * 7 + 6,
      del: Math.random() * 5,
    })), []);

  return (
    <section id="lore" ref={sectionRef}
      className="relative w-full overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "radial-gradient(ellipse 75% 55% at 50% 10%, rgba(26,74,107,0.35) 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(15,52,96,0.2) 0%, transparent 55%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 map-grid opacity-40" />

      {/* Parallax glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-[180px]"
        style={{ background: "rgba(26,74,107,0.15)", y: bgY }}
      />

      {/* Rotating rings */}
      {[28, 20].map((r, i) => (
        <motion.div key={i}
          className={`pointer-events-none absolute right-[-${r === 28 ? 10 : 6}rem] top-1/2 h-[${r}rem] w-[${r}rem] -translate-y-1/2 rounded-full`}
          style={{ border: "1px solid rgba(30,106,138,0.2)", rotate: ringRotate }}
        />
      ))}

      {/* Star particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute star"
            style={{ top: p.top, left: p.left, "--dur": `${p.dur}s`, animationDelay: `${p.del}s` }}>
            <Sparkle size={p.size * 4} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: textY }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em]"
          style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}
        >
          <Sparkle size={10} /> The Legend <Sparkle size={10} />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#c49c36]"
          style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3.2rem)", lineHeight: 1.2 }}
        >
          The Golden Fleece
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 w-64"
        >
          <RopeDivider>📜</RopeDivider>
        </motion.div>

        {[
          "In Greek myth, the Golden Fleece was no ordinary prize — it was guarded by a serpent that never slept, sought across raging seas by Jason and his Argonauts. It stood for courage tested against the impossible, and for the glory that only the boldest crews could claim.",
          "ChrysoDeras carries that same spirit forward. Every hackathon build, every pitch, every clue you decode across campus is a leg of your own voyage — and the fleece belongs to those who dare to sail.",
        ].map((text, i) => (
          <motion.p key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            className={`${i === 0 ? "mt-6" : "mt-4"} italic leading-relaxed`}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.18rem", color: "#a8c4d8" }}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 w-64"
        >
          <RopeDivider>⚓</RopeDivider>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Lore;