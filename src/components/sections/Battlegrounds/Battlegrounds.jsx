import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { battlegrounds } from "../../../data/battlegrounds";
import BattlegroundCard from "./BattlegroundCard";
import BattlegroundModal from "./BattlegroundModal";

const Battlegrounds = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="battlegrounds"
      className="relative w-full overflow-hidden bg-[#050914] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-400/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/80"
          >
            Parallel Competitions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
          >
            The Battlegrounds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/80 font-light"
          >
            Three tracks. Three tests of skill. Each with its own separate
            prize pool waiting to be claimed.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {battlegrounds.map((battleground, index) => (
            <BattlegroundCard
              key={battleground.id}
              battleground={battleground}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <BattlegroundModal
            battleground={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Battlegrounds;