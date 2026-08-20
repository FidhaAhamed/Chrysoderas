import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Shared image component
───────────────────────────────────────────── */

const PirateImage = ({
  src,
  alt = "",
  size,
  className = "",
  opacity = 1,
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

/* ─────────────────────────────────────────────
   Gold divider
───────────────────────────────────────────── */

const RopeDivider = () => (
  <div className="flex w-full items-center gap-4">
    <div
      className="h-[1px] flex-1"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(91,54,12,0.9))",
      }}
    />

    <motion.div
      animate={{
        rotate: [0, -4, 4, 0],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex-shrink-0"
    >
      <PirateImage
        src="/anchor3.png"
        alt=""
        size={25}
        opacity={0.95}
      />
    </motion.div>

    <div
      className="h-[1px] flex-1"
      style={{
        background:
          "linear-gradient(90deg, rgba(91,54,12,0.9), transparent)",
      }}
    />
  </div>
);

/* ─────────────────────────────────────────────
   Compass decoration
───────────────────────────────────────────── */

const CompassCorner = ({ size = 120, opacity = 0.14 }) => (
  <img
    src="/compass.png"
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

/* ─────────────────────────────────────────────
   Gold sparkle
───────────────────────────────────────────── */

const Sparkle = ({ size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M16 2 L17.5 14.5 L30 16 L17.5 17.5 L16 30 L14.5 17.5 L2 16 L14.5 14.5 Z"
      fill="rgba(200,134,10,0.85)"
    />
  </svg>
);

/* ─────────────────────────────────────────────
   Treasure Hunt Banner
───────────────────────────────────────────── */

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
        overflow-hidden
        py-24
        sm:py-32
        lg:py-40
      "
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(26,74,107,0.38) 0%, transparent 65%)," +
          "radial-gradient(ellipse 55% 45% at 80% 75%, rgba(15,52,96,0.25) 0%, transparent 55%)",
      }}
    >

      {/* ═════════════════════════════════════
          BACKGROUND MAP GRID
      ═════════════════════════════════════ */}

      <div className="pointer-events-none absolute inset-0 map-grid opacity-50" />

      {/* ═════════════════════════════════════
          ATMOSPHERIC GLOW
      ═════════════════════════════════════ */}

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 65% at 50% 45%, rgba(26,74,107,0.22), transparent 70%)",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ═════════════════════════════════════
          GOLD PARTICLES
      ═════════════════════════════════════ */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 2.5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        >
          <Sparkle
            size={Math.random() > 0.7 ? 14 : 8}
          />
        </motion.div>
      ))}

      {/* ═════════════════════════════════════
          LEFT COMPASS
      ═════════════════════════════════════ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <CompassCorner
          size={150}
          opacity={0.16}
        />
      </motion.div>

      {/* ═════════════════════════════════════
          RIGHT COMPASS
      ═════════════════════════════════════ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <CompassCorner
          size={120}
          opacity={0.12}
        />
      </motion.div>

      {/* ═════════════════════════════════════
          TOP SECTION SEPARATOR
          Kept above scroll
      ═════════════════════════════════════ */}

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
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          absolute
          top-8
          left-1/2
          z-20
          w-[78%]
          max-w-[900px]
          -translate-x-1/2
        "
      >
        <RopeDivider />
      </motion.div>

      {/* ═════════════════════════════════════
          MAIN SCROLL
      ═════════════════════════════════════ */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[900px]
          px-3
          sm:px-6
        "
      >

        {/* Scroll wrapper */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full"
        >

          {/* ═════════════════════════════════
              ACTUAL SCROLL IMAGE
          ═════════════════════════════════ */}

          <img
            src="/scroll.png"
            alt="Treasure map scroll"
            className="
              pointer-events-none
              relative
              z-0
              block
              h-auto
              w-full
              select-none
            "
          />

          {/* ═════════════════════════════════
              TEXT CONTENT INSIDE SCROLL
          ═════════════════════════════════ */}

          <div
            className="
              absolute
              left-[14%]
              right-[14%]
              top-[22%]
              bottom-[24%]
              z-10
              flex
              flex-col
              items-center
              justify-start
              text-center
            "
          >

            {/* ═════════════════════════════
                MAP ICON
            ═════════════════════════════ */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                mb-2
                flex
                h-10
                w-10
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                sm:mb-4
                sm:h-14
                sm:w-14
              "
              style={{
                border:
                  "1px solid rgba(90,55,15,0.35)",
                background:
                  "rgba(70,40,8,0.07)",
                boxShadow:
                  "0 0 20px rgba(80,45,5,0.08)",
              }}
            >
              <PirateImage
                src="/map_scroll.png"
                alt=""
                size={28}
                opacity={0.82}
              />
            </motion.div>

            {/* ═════════════════════════════
                SMALL HEADING
            ═════════════════════════════ */}

            <motion.span
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
                delay: 0.2,
                duration: 0.55,
              }}
              className="
                block
                text-[8px]
                uppercase
                tracking-[0.2em]
                sm:text-xs
                sm:tracking-[0.3em]
              "
              style={{
                fontFamily:
                  "'Cinzel', serif",
                color:
                  "rgba(45,22,4,0.9)",
                textShadow:
                  "0 1px 0 rgba(255,230,180,0.35)",
              }}
            >
              The Afternoon Unifier
            </motion.span>

            {/* ═════════════════════════════
                MAIN TITLE
            ═════════════════════════════ */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="mt-2 sm:mt-3"
              style={{
                fontFamily:
                  "'Cinzel Decorative', serif",
                fontSize:
                  "clamp(1.35rem, 6vw, 3.5rem)",
                lineHeight: 1.08,
                fontWeight: 500,
                color: "#1c0d03",
                textShadow:
                  "0 1px 0 rgba(255,235,190,0.45), 0 1px 2px rgba(0,0,0,0.25)",
              }}
            >
              The Mega
              <br />
              Treasure Hunt
            </motion.h2>

            {/* ═════════════════════════════
                DIVIDER INSIDE SCROLL
            ═════════════════════════════ */}

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
                delay: 0.32,
                duration: 0.6,
              }}
              className="
                mt-3
                w-full
                max-w-[300px]
                sm:mt-6
                sm:max-w-[360px]
              "
            >
              <RopeDivider />
            </motion.div>

            {/* ═════════════════════════════
                DESCRIPTION
            ═════════════════════════════ */}

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.38,
                duration: 0.7,
              }}
              className="
                mt-3
                max-w-[680px]
                text-[0.78rem]
                leading-[1.55]
                sm:mt-6
                sm:text-[1.1rem]
                md:text-[1.22rem]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: "#2b1607",
                textShadow:
                  "0 1px 0 rgba(255,225,175,0.4)",
              }}
            >
              When the Battlegrounds fall silent,
              every crew from Tech Shark Tank
              (Agora), Tiny ML Workshop (Aether),
              and Bridge Building (Pillars of Olympus)
              converges on one final chase — decoding
              clues scattered across the entire campus.
            </motion.p>

            {/* ═════════════════════════════
                CLOSING TEXT
            ═════════════════════════════ */}

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.46,
                duration: 0.7,
              }}
              className="
                mt-3
                text-[0.7rem]
                leading-[1.5]
                tracking-wide
                sm:mt-6
                sm:text-[0.95rem]
                md:text-[1.05rem]
              "
              style={{
                fontFamily:
                  "'Cinzel', serif",
                fontWeight: 600,
                color: "#251204",
                textShadow:
                  "0 1px 0 rgba(255,225,170,0.35)",
              }}
            >
              Form your crew of 4.
              <br />
              Decode the tech clues.
              <br />

              <span
                style={{
                  fontFamily:
                    "'Cinzel Decorative', serif",
                  fontWeight: 600,
                  color: "#63390d",
                  textShadow:
                    "0 1px 0 rgba(255,225,160,0.45)",
                }}
              >
                Claim the Golden Fleece.
              </span>
            </motion.p>

          </div>
        </motion.div>
      </div>

      {/* ═════════════════════════════════════
          BOTTOM SECTION SEPARATOR
          Kept visible above scroll
      ═════════════════════════════════════ */}

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
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          w-[78%]
          max-w-[900px]
          -translate-x-1/2
        "
      >
        <RopeDivider />
      </motion.div>

    </section>
  );
};

export default TreasureHuntBanner;