import { motion } from "framer-motion";
import { FiX, FiMapPin, FiPhone } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { GiSharkFin, GiSuspensionBridge } from "react-icons/gi";

const ICONS = {
  zap: FiZap,
  shark: GiSharkFin,
  bridge: GiSuspensionBridge,
};

const BattlegroundModal = ({ battleground, onClose }) => {
  const Icon = ICONS[battleground.icon] ?? FiZap;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020408]/80 backdrop-blur-sm px-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-2xl border border-amber-400/20 bg-[#080c18] p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-5 top-5 text-lg text-slate-400 transition-colors hover:text-amber-300"
        >
          <FiX />
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/25 bg-amber-400/[0.06] text-2xl text-amber-300">
          <Icon />
        </div>

        <h3 className="mt-5 font-serif text-2xl text-amber-100">
          {battleground.title}
        </h3>

        <span className="mt-3 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/[0.05] px-3 py-1 text-[11px] uppercase tracking-wider text-amber-300">
          {battleground.tag}
        </span>

        <p className="mt-5 text-sm leading-relaxed text-slate-300/80 font-light">
          {battleground.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300/90">
          <FiMapPin className="text-amber-300" />
          {battleground.venue}
        </div>

        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-widest text-amber-300/80">
            Rules
          </h4>
          <ul className="mt-3 space-y-2">
            {battleground.rules.map((rule) => (
              <li
                key={rule}
                className="flex gap-2 text-sm leading-relaxed text-slate-400 font-light"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400/70" />
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex items-center gap-2 rounded-xl border border-amber-400/15 bg-white/[0.02] px-4 py-3 text-sm text-slate-300/90">
          <FiPhone className="text-amber-300" />
          <span>{battleground.coordinator.name}</span>
          <span className="ml-auto text-amber-200">
            {battleground.coordinator.phone}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BattlegroundModal;