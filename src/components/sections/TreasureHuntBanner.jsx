import { motion } from "framer-motion";

/* =========================================================
   PUBLIC ASSET
========================================================= */

const PirateImage = ({
  src,
  alt = "",
  size = 18,
  opacity = 1,
  className = "",
}) => (
  <img
    src={src}
    alt={alt}
    aria-hidden={!alt}
    className={`object-contain ${className}`}
    style={{
      width: size,
      height: size,
      opacity,
    }}
  />
);

/* =========================================================
   ROPE DIVIDER
========================================================= */

const RopeDivider = () => (
  <div className="flex w-full items-center gap-3">

    {/* Left line */}
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(91,55,18,0.72))",
      }}
    />

    {/* Anchor */}
    <motion.div
      className="flex-shrink-0"
      animate={{
        rotate: [0, -3, 3, 0],
        y: [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <PirateImage
        src="/anchor3.png"
        size={22}
        opacity={0.72}
      />
    </motion.div>

    {/* Right line */}
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, rgba(91,55,18,0.72), transparent)",
      }}
    />

  </div>
);

/* =========================================================
   SECTION SEPARATOR
   Same visual language as Battlegrounds
========================================================= */

const SectionSeparator = () => (
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-1/2
      z-30
      w-[88%]
      -translate-x-1/2
      sm:w-[82%]
      lg:w-[75%]
    "
  >
    <div className="flex w-full items-center gap-4">

      {/* Left gold line */}
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,134,10,0.75))",
        }}
      />

      {/* Center anchor */}
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
        <img
          src="/anchor2.png"
          alt=""
          aria-hidden="true"
          className="h-7 w-7 object-contain"
          style={{
            opacity: 0.78,
            filter:
              "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
          }}
        />
      </motion.div>

      {/* Right gold line */}
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(200,134,10,0.75), transparent)",
        }}
      />

    </div>
  </div>
);

/* =========================================================
   COMPASS
========================================================= */

const CompassCorner = ({
  size = 120,
  opacity = 0.1,
}) => (
  <img
    src="/compass5.png"
    alt=""
    aria-hidden="true"
    className="pointer-events-none object-contain"
    style={{
      width: size,
      height: size,
      opacity,
    }}
  />
);

/* =========================================================
   TREASURE HUNT
========================================================= */

const TreasureHuntBanner = () => {
  return (
    <section
      id="treasure-hunt"
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        py-10
        sm:py-20
        lg:py-28
      "
      style={{
        background:
          "radial-gradient(ellipse 75% 60% at 50% 45%, rgba(26,74,107,0.3), transparent 70%)",
      }}
    >

      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 map-grid opacity-25" />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(26,74,107,0.14), transparent 72%)",
        }}
        animate={{
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          DESKTOP COMPASS LEFT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[2%]
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <CompassCorner
          size={145}
          opacity={0.1}
        />
      </motion.div>

      {/* =====================================================
          DESKTOP COMPASS RIGHT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <CompassCorner
          size={125}
          opacity={0.08}
        />
      </motion.div>

      {/* =====================================================
          MAIN SCROLL
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[920px]
          px-0
          sm:px-4
          lg:px-6
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full"
        >

          {/* =================================================
              SCROLL IMAGE
          ================================================= */}

          <img
            src="/scroll.png"
            alt="Treasure map scroll"
            className="
              block
              h-auto
              w-full
              select-none
              object-contain
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              absolute
              z-10
              flex
              flex-col
              items-center
              text-center

              left-[7%]
              right-[7%]
              top-[27%]
              bottom-[20%]

              sm:left-[12%]
              sm:right-[12%]
              sm:top-[27%]
              sm:bottom-[22%]

              lg:left-[14%]
              lg:right-[14%]
              lg:top-[25%]
              lg:bottom-[21%]
            "
          >

            {/* =================================================
                LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                uppercase
                text-[7px]
                tracking-[0.12em]

                min-[380px]:text-[8px]
                min-[380px]:tracking-[0.15em]

                sm:text-[10px]
                sm:tracking-[0.22em]

                lg:text-[11px]
                lg:tracking-[0.25em]
              "
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#70471f",
                fontWeight: 600,
              }}
            >
              The Afternoon Unifier
            </motion.div>

            {/* =================================================
                TITLE
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.18,
                duration: 0.65,
              }}
              className="
                mt-2
                w-full
                text-center

                text-[1.38rem]
                leading-[1.08]

                min-[380px]:text-[1.48rem]

                sm:mt-3
                sm:text-[2.2rem]

                md:text-[2.8rem]

                lg:text-[3.6rem]
                xl:text-[4rem]
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 500,
                color: "#3d210d",
                letterSpacing: "0.005em",
                textShadow:
                  "0 1px 0 rgba(255,235,190,0.45)",
              }}
            >
              The Mega
              <br />
              Treasure Hunt
            </motion.h2>

            {/* =================================================
                INTERNAL SCROLL DIVIDER
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
                delay: 0.28,
                duration: 0.55,
              }}
              className="
                mt-3
                w-[58%]

                sm:mt-4
                sm:w-[58%]

                lg:mt-5
                lg:w-[55%]
              "
            >
              <RopeDivider />
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.65,
              }}
              className="
                mt-4
                w-full
                max-w-[95%]

                text-[0.68rem]
                leading-[1.5]

                min-[380px]:text-[0.71rem]

                sm:mt-5
                sm:max-w-[90%]
                sm:text-[1.02rem]
                sm:leading-[1.55]

                md:max-w-[88%]
                md:text-[1.2rem]
                md:leading-[1.6]

                lg:mt-8
                lg:max-w-[88%]
                lg:text-[1.4rem]
                lg:leading-[1.65]

                xl:text-[1.5rem]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: "#4b2a12",
                textShadow:
                  "0 1px 0 rgba(255,235,190,0.5)",
              }}
            >

              {/* MOBILE */}
              <span className="block sm:hidden">
                When the Battlegrounds fall silent, every crew from
                <br />
                Tech Shark Tank (Agora), Tiny ML Workshop (Aether),
                <br />
                and Bridge Building (Pillars of Olympus) converges
                <br />
                on one final chase — decoding clues scattered
                <br />
                across the entire campus.
              </span>

              {/* DESKTOP */}
              <span className="hidden sm:block">
                When the Battlegrounds fall silent, every crew from Tech Shark
                Tank (Agora), Tiny ML Workshop (Aether), and Bridge Building
                (Pillars of Olympus) converges on one final chase — decoding
                clues scattered across the entire campus.
              </span>

            </motion.p>

            {/* =================================================
                FINAL MESSAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.43,
                duration: 0.65,
              }}
              className="
                mt-5
                w-full

                text-[0.66rem]
                leading-[1.5]

                min-[380px]:text-[0.70rem]

                sm:mt-6
                sm:text-[0.88rem]

                md:text-[1rem]

                lg:mt-8
                lg:text-[1.15rem]

                xl:text-[1.25rem]
              "
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                color: "#49270f",
                letterSpacing: "0.008em",
                textShadow:
                  "0 1px 0 rgba(255,235,190,0.35)",
              }}
            >

              <div>
                FORM YOUR CREW OF 4.
              </div>

              <div>
                DECODE THE TECH CLUES.
              </div>

              <div
                className="mt-1"
                style={{
                  fontFamily:
                    "'Cinzel Decorative', serif",
                  color: "#79501f",
                  fontWeight: 600,
                  letterSpacing: "0",
                }}
              >
                CLAIM THE GOLDEN FLEECE.
              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          SECTION SEPARATOR
          Battlegrounds-style divider
      ====================================================== */}

      <SectionSeparator />

    </section>
  );
};

export default TreasureHuntBanner;