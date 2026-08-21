import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParchmentButton } from "../common/ParchmentButton";

const LAUNCH_DATE = new Date("2026-09-11T09:00:00+05:30");

const getTimeLeft = () => {
  const diff = Math.max(LAUNCH_DATE.getTime() - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: d,
      ease: "easeOut",
    },
  }),
};

/* =========================================================
   PUBLIC ASSET ICONS
========================================================= */

const CompassIcon = ({ size = 22 }) => (
  <img
    src="/compass5.png"
    alt=""
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      objectFit: "contain",
    }}
  />
);

const Star = ({ size = 14, className = "" }) => (
  <img
    src="/star.png"
    alt=""
    aria-hidden="true"
    className={className}
    style={{
      width: size,
      height: size,
      objectFit: "contain",
    }}
  />
);

/* =========================================================
   GOLD DECORATIVE RULE
========================================================= */

const GoldRule = ({ children }) => (
  <div className="flex items-center justify-center gap-3 select-none">

    <div
      className="h-px w-16 sm:w-24"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,134,10,0.85))",
      }}
    />

    <Star size={12} />

    <span
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "0.95rem",
        letterSpacing: "0.25em",
        color: "rgba(200,134,10,0.9)",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {children}
    </span>

    <Star size={14} />

    <div
      className="h-px w-16 sm:w-24"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,134,10,0.85), transparent)",
      }}
    />
  </div>
);

/* =========================================================
   DATE ROW
========================================================= */

const DateRow = ({ children }) => (
  <div className="flex items-center justify-center gap-3 select-none">

    <div
      className="h-px w-10 sm:w-16"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,134,10,0.7))",
      }}
    />

    <Star size={10} />

    <span
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "0.95rem",
        letterSpacing: "0.2em",
        color: "rgba(200,134,10,0.9)",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {children}
    </span>

    <Star size={12} />

    <div
      className="h-px w-10 sm:w-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,134,10,0.7), transparent)",
      }}
    />
  </div>
);

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const UNITS = [
    {
      label: "Days",
      v: timeLeft.days,
    },
    {
      label: "Hours",
      v: timeLeft.hours,
    },
    {
      label: "Minutes",
      v: timeLeft.minutes,
    },
    {
      label: "Seconds",
      v: timeLeft.seconds,
    },
  ];

  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
      "
    >

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* =================================================
            TOP BADGE
        ================================================= */}

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <GoldRule>
            The Golden Fleece Awaits
          </GoldRule>
        </motion.div>

        {/* =================================================
            TITLE
        ================================================= */}

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.12}
          variants={fadeUp}
          className="mt-5 max-w-full break-words"
          style={{
            fontFamily: "'Uncial Antiqua', cursive",
            fontSize: "clamp(1.5rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#af8b33",

            textShadow:
              "0 0 80px rgba(200,134,10,0.25)," +
              "0 2px 40px rgba(0,0,0,0.9)," +
              "0 1px 0 rgba(255,240,180,0.1)",
          }}
        >
          ChrysoDeras '26
        </motion.h1>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.22}
          variants={fadeUp}
          className="mt-5 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            color: "rgba(210,222,235,0.9)",
            lineHeight: 1.6,
            letterSpacing: "0.01em",
          }}
        >
          Every voyage begins with a spark.
          <br className="hidden sm:block" />
          Chart yours through the storm.
        </motion.p>

        {/* =================================================
            DATE
        ================================================= */}

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-4"
        >
          <DateRow>
            September 11 &amp; 12, 2026
          </DateRow>
        </motion.div>

        {/* =================================================
            COUNTDOWN
        ================================================= */}

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="
            mt-8
            flex
            w-full
            max-w-xl
            justify-center
            gap-2
            sm:gap-5
            mx-auto
          "
        >
          {UNITS.map((u) => (
            <motion.div
              key={u.label}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                flex
                flex-1
                max-w-[80px]
                flex-col
                items-center
                justify-center
                px-2
                py-3
                sm:min-w-[72px]
                sm:flex-none
                sm:px-5
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,35,55,0.88), rgba(10,20,30,0.96))",

                border:
                  "1px solid rgba(200,134,10,0.45)",

                backdropFilter: "blur(12px)",

                boxShadow:
                  "inset 0 0 20px rgba(26,74,107,0.08), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >

              {/* Decorative corners */}

              <span
                className="absolute left-0 top-0 h-2 w-2"
                style={{
                  borderLeft: "1px solid #d4a017",
                  borderTop: "1px solid #d4a017",
                }}
              />

              <span
                className="absolute right-0 top-0 h-2 w-2"
                style={{
                  borderRight: "1px solid #d4a017",
                  borderTop: "1px solid #d4a017",
                }}
              />

              <span
                className="absolute bottom-0 left-0 h-2 w-2"
                style={{
                  borderLeft: "1px solid #d4a017",
                  borderBottom: "1px solid #d4a017",
                }}
              />

              <span
                className="absolute bottom-0 right-0 h-2 w-2"
                style={{
                  borderRight: "1px solid #d4a017",
                  borderBottom: "1px solid #d4a017",
                }}
              />

              {/* Number */}

              <span
                className="text-2xl sm:text-[2.2rem]"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#e8c96a",
                  lineHeight: 1,
                }}
              >
                {String(u.v).padStart(2, "0")}
              </span>

              {/* Label */}

              <span
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-widest
                  sm:text-[9px]
                "
                style={{
                  color: "rgba(168,196,216,0.7)",
                }}
              >
                {u.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* =================================================
            CTA
        ================================================= */}

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.54}
          variants={fadeUp}
          className="mt-10"
        >
          <ParchmentButton
            href="#register"
            icon={<CompassIcon size={24} />}
          >
            Claim Your Fleece
          </ParchmentButton>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#lore"
        className="
          absolute
          bottom-7
          z-10
          flex
          cursor-pointer
          flex-col
          items-center
          gap-2
          p-4
          hover-target
        "
        animate={{
          y: [0, 8, 0],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "rgba(200,134,10,0.7)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>

        {/* REAL PNG ANCHOR */}

        <motion.img
          src="/anchor1.png"
          alt=""
          aria-hidden="true"
          className="h-7 w-7 object-contain"
          animate={{
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </motion.a>
    </section>
  );
};

export default Hero;