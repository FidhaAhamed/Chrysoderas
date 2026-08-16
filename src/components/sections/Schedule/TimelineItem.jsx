import { motion } from "framer-motion";

/* Anchor dot for timeline */
const AnchorDot = () => (
  <svg width="18" height="22" viewBox="0 0 48 60" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(200,134,10,0.7))" }}>
    <circle cx="24" cy="10" r="6" stroke="rgba(200,134,10,0.9)" strokeWidth="2.5" fill="rgba(26,74,107,0.4)" />
    <line x1="24" y1="16" x2="24" y2="46" stroke="rgba(200,134,10,0.85)" strokeWidth="2" />
    <path d="M12 26 Q8 26 8 33 Q8 44 24 46 Q40 44 40 33 Q40 26 36 26" stroke="rgba(200,134,10,0.75)" strokeWidth="2" fill="none" />
    <line x1="10" y1="26" x2="38" y2="26" stroke="rgba(200,134,10,0.75)" strokeWidth="2" />
    <circle cx="24" cy="10" r="3" fill="rgba(200,134,10,0.9)" />
  </svg>
);

const TimelineItem = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative flex gap-6 pb-10 last:pb-0"
  >
    {/* Spine */}
    <div className="flex flex-col items-center">
      <AnchorDot />
      {!isLast && (
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
          className="mt-1 w-px flex-1 origin-top"
          style={{
            background: "repeating-linear-gradient(180deg, rgba(200,134,10,0.55) 0px, rgba(30,106,138,0.5) 6px, transparent 6px, transparent 10px)",
          }}
        />
      )}
    </div>

    {/* Content */}
    <div className="-mt-0.5 flex-1">
      <span className="text-[10px] uppercase tracking-widest"
        style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}>
        {item.time}
      </span>
      <h4 className="mt-1" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.88rem", color: "#c8d8e8" }}>
        {item.title}
      </h4>
      <p className="mt-1 text-sm font-light leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "rgba(168,196,216,0.75)" }}>
        {item.description}
      </p>
    </div>
  </motion.div>
);

export default TimelineItem;