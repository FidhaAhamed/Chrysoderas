import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Lore = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 7 + 7,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section
      id="lore"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050914] py-28 sm:py-36"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[160px]"
      />

      <motion.div
        style={{ rotate: ringRotate }}
        className="pointer-events-none absolute right-[-10rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-amber-400/10"
      />
      <motion.div
        style={{ rotate: ringRotate }}
        className="pointer-events-none absolute right-[-6rem] top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full border border-amber-400/10"
      />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-amber-300/60"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -14, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/80"
        >
          The Legend
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
        >
          The Golden Fleece
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300/80 font-light"
        >
          In Greek myth, the Golden Fleece was no ordinary prize — it was
          guarded by a serpent that never slept, sought across raging seas by
          Jason and his Argonauts. It stood for courage tested against the
          impossible, and for the glory that only the boldest crews could
          claim.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300/80 font-light"
        >
          ChrysoDeras carries that same spirit forward. Every hackathon build,
          every pitch, every clue you decode across campus is a leg of your
          own voyage — and the fleece belongs to those who dare to sail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Lore;