import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* =========================================================
   PUBLIC ASSET
========================================================= */

const PirateImage = ({
  src,
  size = 18,
  opacity = 0.8,
  className = "",
}) => (
  <motion.img
    src={src}
    alt=""
    aria-hidden="true"
    className={`object-contain ${className}`}
    style={{
      width: size,
      height: size,
      opacity,
      filter:
        "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
    }}
  />
);

/* =========================================================
   ROPE DIVIDER
========================================================= */

const RopeDivider = ({
  icon = "/anchor2.png",
}) => (
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
   LORE
========================================================= */

const Lore = () => {
  const sectionRef = useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );

  const ringRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["4%", "-4%"]
  );

  /* =======================================================
     PARTICLES
  ======================================================= */

  const particles = useMemo(
    () =>
      Array.from(
        { length: 20 },
        (_, i) => ({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size:
            Math.random() * 2 + 1,
          dur:
            Math.random() * 7 + 6,
          del:
            Math.random() * 5,
        })
      ),
    []
  );

  return (
    <section
      id="lore"
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        py-28
        sm:py-36
      "
      style={{
        background:
          "radial-gradient(ellipse 75% 55% at 50% 10%, rgba(26,74,107,0.35) 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(15,52,96,0.2) 0%, transparent 55%)",
      }}
    >

      {/* =================================================
          MAP GRID
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          map-grid
          opacity-40
        "
      />

      {/* =================================================
          PARALLAX GLOW
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -top-1/3
          left-1/2
          h-[46rem]
          w-[46rem]
          -translate-x-1/2
          rounded-full
          blur-[180px]
        "
        style={{
          background:
            "rgba(26,74,107,0.15)",
          y: bgY,
        }}
      />

      {/* =================================================
          ROTATING NAVIGATION RINGS
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-10rem]
          top-1/2
          h-[28rem]
          w-[28rem]
          -translate-y-1/2
          rounded-full
        "
        style={{
          border:
            "1px solid rgba(30,106,138,0.2)",

          rotate: ringRotate,
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-6rem]
          top-1/2
          h-[20rem]
          w-[20rem]
          -translate-y-1/2
          rounded-full
        "
        style={{
          border:
            "1px solid rgba(30,106,138,0.2)",

          rotate: ringRotate,
        }}
      />

      {/* =================================================
          STAR PARTICLES
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {particles.map((p) => (
          <motion.img
            key={p.id}
            src="/star.png"
            alt=""
            aria-hidden="true"
            className="absolute object-contain"
            style={{
              top: p.top,
              left: p.left,
              width: p.size * 4,
              height: p.size * 4,
              opacity: 0.5,
              filter:
                "drop-shadow(0 0 5px rgba(200,134,10,0.35))",
            }}
            animate={{
              opacity: [
                0.15,
                0.7,
                0.15,
              ],
              y: [
                0,
                -8,
                0,
              ],
              rotate: [
                0,
                8,
                0,
              ],
            }}
            transition={{
              duration: p.dur,
              delay: p.del,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <motion.div
        style={{
          y: textY,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-3xl
          flex-col
          items-center
          px-6
          text-center
        "
      >

        {/* =================================================
            SECTION LABEL
        ================================================= */}

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

          <PirateImage
            src="/star.png"
            size={11}
            opacity={0.7}
          />

          <span>
            The Legend
          </span>

          <PirateImage
            src="/star.png"
            size={11}
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

            lineHeight: 1.2,
          }}
        >
          The Golden Fleece
        </motion.h2>

        {/* =================================================
            TOP DIVIDER
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
            duration: 0.7,
            delay: 0.18,
          }}
          className="mt-6 w-64"
        >
          <RopeDivider
            icon="/map_scroll.png"
          />
        </motion.div>

        {/* =================================================
            LORE TEXT
        ================================================= */}

        {[
          "In Greek myth, the Golden Fleece was no ordinary prize — it was guarded by a serpent that never slept, sought across raging seas by Jason and his Argonauts. It stood for courage tested against the impossible, and for the glory that only the boldest crews could claim.",

          "ChrysoDeras carries that same spirit forward. Every hackathon build, every pitch, every clue you decode across campus is a leg of your own voyage — and the fleece belongs to those who dare to sail.",
        ].map((text, i) => (

          <motion.p
            key={i}
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
              delay:
                0.2 + i * 0.1,
            }}
            className={`
              ${i === 0
                ? "mt-6"
                : "mt-4"
              }
              italic
              leading-relaxed
            `}
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize:
                "1.18rem",

              color:
                "#a8c4d8",
            }}
          >
            {text}
          </motion.p>

        ))}

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
            duration: 0.8,
            delay: 0.42,
          }}
          className="mt-10 w-64"
        >
          <RopeDivider
            icon="/anchor2.png"
          />
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Lore;