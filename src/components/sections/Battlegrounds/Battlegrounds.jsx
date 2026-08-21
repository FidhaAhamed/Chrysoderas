import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { battlegrounds } from "../../../data/battlegrounds";
import BattlegroundCard from "./BattlegroundCard";
import BattlegroundModal from "./BattlegroundModal";

/* =========================================================
   PUBLIC ASSET
========================================================= */

const PirateImage = ({
  src,
  size = 20,
  opacity = 0.8,
}) => (
  <motion.img
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
   ROPE / GOLD DIVIDER
========================================================= */

const RopeDivider = () => (
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
        src="/anchor2.png"
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
   BATTLEGROUNDS
========================================================= */

const Battlegrounds = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="battlegrounds"
      className="
        relative
        w-full
        overflow-hidden
        py-28
        sm:py-36
      "
      style={{
        background:
          "radial-gradient(ellipse 65% 50% at 20% 20%, rgba(26,74,107,0.28) 0%, transparent 55%)," +
          "radial-gradient(ellipse 55% 40% at 80% 85%, rgba(15,52,96,0.2) 0%, transparent 55%)",
      }}
    >

      {/* =================================================
          ATMOSPHERIC GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-96
          w-96
          rounded-full
          blur-[150px]
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
          max-w-6xl
          px-6
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col items-center text-center">

          {/* Label */}

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
              Parallel Competitions
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

              lineHeight: 1.25,
            }}
          >
            The Battlegrounds
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
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
              delay: 0.15,
            }}
            className="
              mt-5
              max-w-xl
              leading-relaxed
              italic
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: "1.15rem",

              color: "#a8c4d8",
            }}
          >
            Three tracks. Three tests of skill.
            Each with its own separate prize pool
            waiting to be claimed.
          </motion.p>

          {/* =================================================
              DIVIDER
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
            className="
              mt-8
              w-72
            "
          >
            <RopeDivider />
          </motion.div>

        </div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {battlegrounds.map(
            (bg, idx) => (
              <BattlegroundCard
                key={bg.id}
                battleground={bg}
                index={idx}
                onSelect={setSelected}
              />
            )
          )}
        </div>

      </div>

      {/* =================================================
          MODAL
      ================================================= */}

      <AnimatePresence>
        {selected && (
          <BattlegroundModal
            battleground={selected}
            onClose={() =>
              setSelected(null)
            }
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default Battlegrounds;