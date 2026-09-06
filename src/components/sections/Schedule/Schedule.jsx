import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { schedule } from "../../../data/schedule";
import TimelineItem from "./TimelineItem";

/* =========================================================
   PUBLIC ASSET
========================================================= */

const PirateImage = ({
  src,
  size = 20,
  opacity = 0.8,
}) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      opacity,
      objectFit: "contain",
      filter:
        "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
    }}
  />
);

/* =========================================================
   ROPE DIVIDER
========================================================= */

const RopeDivider = ({ icon = "/anchor2.png" }) => (
  <div className="flex w-full items-center gap-4">

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,134,10,0.75))",
      }}
    />

    <motion.div
      className="flex-shrink-0"
      animate={{
        rotate: [0, -4, 4, 0],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <PirateImage
        src={icon}
        size={28}
        opacity={0.78}
      />
    </motion.div>

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,134,10,0.75), transparent)",
      }}
    />

  </div>
);

/* =========================================================
   SCHEDULE
========================================================= */

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const items = schedule[activeDay];

  return (
    <section
      id="schedule"
      className="
        relative
        w-full
        overflow-hidden
        py-28
        sm:py-36
      "
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 5%, rgba(26,74,107,0.3) 0%, transparent 60%)," +
          "radial-gradient(ellipse 55% 40% at 20% 85%, rgba(15,52,96,0.2) 0%, transparent 55%)",
      }}
    >

      {/* =================================================
          ATMOSPHERIC GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-80
          w-80
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "rgba(26,74,107,0.2)",
        }}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-2xl
          px-6
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col items-center text-center">

          {/* Section label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >

            <PirateImage
              src="/star.png"
              size={12}
              opacity={0.7}
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.28em]
              "
              style={{
                fontFamily:
                  "'Cinzel', serif",

                color:
                  "rgba(30,106,138,0.9)",
              }}
            >
              Map Your Voyage
            </span>

            <PirateImage
              src="/star.png"
              size={12}
              opacity={0.7}
            />

          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-[#c49c36]"
            style={{
              fontFamily:
                "'Cinzel Decorative', serif",

              fontSize:
                "clamp(1.8rem,5vw,3.2rem)",

              lineHeight: 1.3,
            }}
          >
            The Schedule
          </motion.h2>

          {/* =================================================
              MAP DIVIDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="mt-6 w-56"
          >
            <RopeDivider
              icon="/map_scroll.png"
            />
          </motion.div>

          {/* =================================================
              DAY SWITCHER
          ================================================= */}

          <div
            className="
              mt-8
              inline-flex
              gap-1
              p-1
            "
            style={{
              border:
                "1px solid rgba(200,134,10,0.22)",

              borderRadius: "3px",

              background:
                "linear-gradient(135deg, rgba(26,74,107,0.15), rgba(15,52,96,0.1))",
            }}
          >

            {[
              {
                key: "day1",
                label: "Day I",
              },
              {
                key: "day2",
                label: "Day II",
              },
            ].map((day) => (

              <button
                key={day.key}
                type="button"
                onClick={() =>
                  setActiveDay(day.key)
                }
                className="
                  relative
                  overflow-hidden
                  px-6
                  py-2
                  transition-colors
                  duration-300
                "
                style={{
                  fontFamily:
                    "'Cinzel', serif",

                  fontSize: "0.8rem",

                  letterSpacing:
                    "0.1em",

                  color:
                    activeDay === day.key
                      ? "#140a02"
                      : "rgba(168,196,216,0.75)",

                  textShadow:
                    activeDay === day.key
                      ? "0 1px 0 rgba(255,255,255,0.3)"
                      : "none",

                  fontWeight:
                    activeDay === day.key
                      ? 700
                      : 400,

                  borderRadius: "2px",
                }}
              >

                {/* Parchment background */}

                {activeDay === day.key && (
                  <motion.div
                    layoutId="day-pill"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                    }}
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      background:
                        "url('/parchment-tex3.png') center/cover no-repeat",

                      boxShadow:
                        "inset 0 0 10px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)",

                      border:
                        "1px solid rgba(150,100,20,0.6)",

                      borderRadius: "2px",
                    }}
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        mix-blend-multiply
                        bg-black/10
                      "
                    />

                  </motion.div>
                )}

                <span className="relative z-10">
                  {day.label}
                </span>

              </button>
            ))}
          </div>
        </div>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="mt-14">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeDay}
              initial={{
                opacity: 0,
                x: 16,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -16,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >

              {items.map(
                (item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    index={index}
                    isLast={
                      index ===
                      items.length - 1
                    }
                  />
                )
              )}

            </motion.div>

          </AnimatePresence>

        </div>

        {/* =================================================
            BOTTOM DIVIDER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8"
        >
          <RopeDivider
            icon="/anchor2.png"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Schedule;