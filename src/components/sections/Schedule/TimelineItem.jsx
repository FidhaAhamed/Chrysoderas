import { motion } from "framer-motion";

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className="flex h-3 w-3 flex-shrink-0 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
        {!isLast && (
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
            className="mt-1 w-px flex-1 origin-top bg-gradient-to-b from-amber-400/50 to-transparent"
          />
        )}
      </div>

      <div className="-mt-1 flex-1">
        <span className="text-xs uppercase tracking-widest text-amber-300/80">
          {item.time}
        </span>
        <h4 className="mt-1 font-serif text-lg text-amber-100">
          {item.title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-400 font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;