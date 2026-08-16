import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Ship's wheel SVG toggle */
const WheelToggle = ({ isOpen }) => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none"
    style={{ transition: "transform 0.3s", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
    <circle cx="50" cy="50" r="42" stroke="rgba(200,134,10,0.75)" strokeWidth="2" />
    <circle cx="50" cy="50" r="12" stroke="rgba(200,134,10,0.75)" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="50" r="4.5" fill="rgba(200,134,10,0.9)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const r = Math.PI * angle / 180;
      return <line key={angle}
        x1={50 + 12 * Math.cos(r)} y1={50 + 12 * Math.sin(r)}
        x2={50 + 42 * Math.cos(r)} y2={50 + 42 * Math.sin(r)}
        stroke="rgba(200,134,10,0.7)" strokeWidth="1.8" />;
    })}
  </svg>
);

const Accordion = ({ items }) => {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <div style={{
      border: "1px solid rgba(200,134,10,0.35)",
      borderRadius: "3px",
      background: "linear-gradient(135deg, rgba(15, 30, 50, 0.75), rgba(8, 20, 35, 0.85))",
      backdropFilter: "blur(12px)",
    }}>
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="px-6"
            style={{ borderBottom: idx < items.length - 1 ? "1px solid rgba(30,106,138,0.15)" : "none" }}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.85rem", color: "#c8d8e8" }}>
                {item.question}
              </span>
              <WheelToggle isOpen={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm font-light leading-relaxed italic"
                    style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.08rem", color: "rgba(168,196,216,0.8)" }}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;