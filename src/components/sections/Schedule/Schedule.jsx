import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { schedule } from "../../../data/schedule";
import TimelineItem from "./TimelineItem";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const items = schedule[activeDay];

  return (
    <section
      id="schedule"
      className="relative w-full overflow-hidden bg-[#050914] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-amber-400/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/80"
          >
            Map Your Voyage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
          >
            The Schedule
          </motion.h2>

          <div className="mt-9 inline-flex rounded-full border border-amber-400/20 bg-white/[0.03] p-1">
            {[
              { key: "day1", label: "Day 1" },
              { key: "day2", label: "Day 2" },
            ].map((day) => (
              <button
                key={day.key}
                type="button"
                onClick={() => setActiveDay(day.key)}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeDay === day.key
                    ? "text-[#0a0e1a]"
                    : "text-slate-300/70 hover:text-amber-300"
                }`}
              >
                {activeDay === day.key && (
                  <motion.span
                    layoutId="day-toggle-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500"
                  />
                )}
                <span className="relative z-10">{day.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {items.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === items.length - 1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;