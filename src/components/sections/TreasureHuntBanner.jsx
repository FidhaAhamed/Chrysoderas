import { motion } from "framer-motion";
import { GiTreasureMap } from "react-icons/gi";

const TreasureHuntBanner = () => {
  return (
    <section
      id="treasure-hunt"
      className="relative flex w-full items-center justify-center overflow-hidden bg-[#050914] py-28 sm:py-40"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(251,191,36,0.10), transparent 70%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(251,191,36,0.06) 50%, transparent 70%)",
          backgroundSize: "220% 220%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/[0.06] text-3xl text-amber-300"
        >
          <GiTreasureMap />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-xs uppercase tracking-[0.3em] text-amber-300/80"
        >
          The Afternoon Unifier
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
        >
          The Mega Treasure Hunt
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300/80 font-light"
        >
          When the Battlegrounds fall silent, every crew from Shark Tank,
          Junkyard, and Bridge Building converges on one final chase —
          decoding clues scattered across the entire campus.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 font-serif text-xl sm:text-2xl tracking-wide text-amber-200"
        >
          Form your crew of 4. Decode the tech clues.
          <br />
          Claim the Golden Fleece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
        />
      </div>
    </section>
  );
};

export default TreasureHuntBanner;