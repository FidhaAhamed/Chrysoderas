import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { schedule } from "../../../data/schedule";
import TimelineItem from "./TimelineItem";

const RopeDivider = ({ children = "⚓" }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 rope-line" />
    <span className="text-base text-amber-500 flex-shrink-0">{children}</span>
    <div className="flex-1 rope-line" />
  </div>
);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const items = schedule[activeDay];

  return (
    <section id="schedule"
      className="relative w-full overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "radial-gradient(ellipse 60% 45% at 80% 10%, rgba(26,74,107,0.25) 0%, transparent 55%)," +
          "radial-gradient(ellipse 50% 40% at 20% 90%, rgba(15,52,96,0.18) 0%, transparent 55%)",
      }}
    >
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full blur-[140px]"
        style={{ background: "rgba(26,74,107,0.2)" }} />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}
          >
            ✦ Map Your Voyage ✦
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#c49c36]"
            style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3.2rem)", lineHeight: 1.3 }}
          >
            The Schedule
          </motion.h2>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 w-56">
            <RopeDivider>📜</RopeDivider>
          </motion.div>

          {/* Day toggle — navy style */}
          <div className="mt-8 inline-flex p-1 gap-1"
            style={{
              border: "1px solid rgba(200,134,10,0.22)",
              borderRadius: "3px",
              background: "linear-gradient(135deg, rgba(26,74,107,0.15), rgba(15,52,96,0.1))",
            }}>
            {[{ key: "day1", label: "Day I" }, { key: "day2", label: "Day II" }].map((day) => (
              <button key={day.key} type="button" onClick={() => setActiveDay(day.key)}
                className="relative px-6 py-2 transition-colors duration-300 overflow-hidden"
                style={{
                  fontFamily: "'Cinzel',serif", fontSize: "0.73rem", letterSpacing: "0.1em",
                  color: activeDay === day.key ? "#ebd6ae" : "rgba(168,196,216,0.75)",
                  textShadow: activeDay === day.key ? "0 2px 4px rgba(0,0,0,0.6)" : "none",
                  borderRadius: "2px"
                }}>
                {activeDay === day.key && (
                  <motion.div
                    layoutId="day-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="absolute inset-0"
                    style={{
                      background: "url('/parchment-tex3.png') center/cover no-repeat",
                      boxShadow: "inset 0 0 10px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)",
                      border: "1px solid rgba(150,100,20,0.6)",
                      borderRadius: "2px"
                    }}
                  >
                    <div className="absolute inset-0 mix-blend-multiply bg-black/10" />
                  </motion.div>
                )}
                <span className="relative z-10">{day.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div key={activeDay}
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35, ease: "easeInOut" }}>
              {items.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} isLast={index === items.length - 1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8">
          <RopeDivider>⚓</RopeDivider>
        </motion.div>
      </div>
    </section >
  );
};

export default Schedule;