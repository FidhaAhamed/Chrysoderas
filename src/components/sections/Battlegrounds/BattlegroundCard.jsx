import { motion } from "framer-motion";
import { FiZap, FiMapPin } from "react-icons/fi";
import { GiSharkFin, GiSuspensionBridge } from "react-icons/gi";

const ICONS = {
  zap: FiZap,
  shark: GiSharkFin,
  bridge: GiSuspensionBridge,
};

const BattlegroundCard = ({ battleground, onSelect, index }) => {
  const Icon = ICONS[battleground.icon] ?? FiZap;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(battleground)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col items-start rounded-2xl border border-amber-400/15 bg-white/[0.02] p-7 text-left transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(251,191,36,0.12)] hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/25 bg-amber-400/[0.06] text-2xl text-amber-300">
        <Icon />
      </div>

      <h3 className="mt-5 font-serif text-xl text-amber-100">
        {battleground.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light line-clamp-2">
        {battleground.description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-xs text-slate-500">
        <FiMapPin className="text-amber-300/70" />
        {battleground.venue}
      </div>

      <span className="mt-5 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/[0.05] px-3 py-1 text-[11px] uppercase tracking-wider text-amber-300">
        {battleground.tag}
      </span>

      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(251,191,36,0.25)]" />
    </motion.button>
  );
};

export default BattlegroundCard;