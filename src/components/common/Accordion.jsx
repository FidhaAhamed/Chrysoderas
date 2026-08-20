import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Ship wheel toggle — public asset */
const WheelToggle = ({ isOpen }) => (
  <motion.img
    src="/wheel.png"
    alt=""
    aria-hidden="true"
    animate={{ rotate: isOpen ? 90 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="h-5 w-5 flex-shrink-0 object-contain"
    style={{
      opacity: 0.85,
      filter: "drop-shadow(0 0 5px rgba(200,134,10,0.35))",
    }}
  />
);

const Accordion = ({ items }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((p) => (p === id ? null : id));
  };

  return (
    <div
      style={{
        border: "1px solid rgba(200,134,10,0.35)",
        borderRadius: "3px",
        background:
          "linear-gradient(135deg, rgba(15,30,50,0.75), rgba(8,20,35,0.85))",
        backdropFilter: "blur(12px)",
      }}
    >
      {items.map((item, idx) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="px-6"
            style={{
              borderBottom:
                idx < items.length - 1
                  ? "1px solid rgba(30,106,138,0.15)"
                  : "none",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.85rem",
                  color: "#c8d8e8",
                }}
              >
                {item.question}
              </span>

              <WheelToggle isOpen={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="pb-5 text-sm font-light leading-relaxed italic"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.08rem",
                      color: "rgba(168,196,216,0.8)",
                    }}
                  >
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