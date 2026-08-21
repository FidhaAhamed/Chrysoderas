import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import GlowCard from "../common/GlowCard";

/* =========================================================
   PIRATE ASSETS
========================================================= */

const PirateImage = ({
  src,
  size = 24,
  className = "",
  opacity = 1,
}) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    className={`object-contain ${className}`}
    style={{
      width: size,
      height: size,
      opacity,
    }}
  />
);

/* =========================================================
   DOMAIN DATA
========================================================= */

const DOMAINS = [
  {
    label: "AI for Health & Well-Being",
    desc: "Intelligent solutions for a healthier world",
    icon: "/light.png",
  },
  {
    label: "Future Learning & Career Empowerment",
    desc: "Chart your course to the next frontier",
    icon: "/star.png",
  },
  {
    label: "GreenTech & Sustainable Innovation",
    desc: "Eco-friendly tech for a thriving world",
    icon: "/wheel.png",
  },
  {
    label: "Cyber Defense & Digital Trust",
    desc: "Secure your fleet against digital threats",
    icon: "/anchor3.png",
  },
  {
    label: "Smart Living & Connected Communities",
    desc: "Bridging the gap to a unified society",
    icon: "/map_scroll.png",
  },
];

/* =========================================================
   DECORATIVE RULE
========================================================= */

const GoldRule = ({ children }) => (
  <div className="flex w-full items-center justify-center gap-3 select-none">

    <div
      className="h-px flex-1 max-w-28"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,134,10,0.75))",
      }}
    />

    <PirateImage
      src="/star.png"
      size={12}
      opacity={0.8}
    />

    <span
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "0.72rem",
        letterSpacing: "0.25em",
        color: "rgba(200,134,10,0.85)",
        textTransform: "uppercase",
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>

    <PirateImage
      src="/star.png"
      size={12}
      opacity={0.8}
    />

    <div
      className="h-px flex-1 max-w-28"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,134,10,0.75), transparent)",
      }}
    />

  </div>
);

/* =========================================================
   ROPE DIVIDER
========================================================= */

const RopeDivider = () => (
  <div className="flex w-full items-center gap-4">

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(170,125,55,0.7))",
      }}
    />

    <motion.div
      animate={{
        rotate: [0, -4, 4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex-shrink-0"
    >
      <PirateImage
        src="/anchor2.png"
        size={28}
        opacity={0.75}
      />
    </motion.div>

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(90deg, rgba(170,125,55,0.7), transparent)",
      }}
    />

  </div>
);

/* =========================================================
   COUNT UP
========================================================= */

const useCountUp = (
  target,
  isInView,
  duration = 1.4
) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;

    const step = (ts) => {
      if (!start) start = ts;

      const progress = Math.min(
        (ts - start) / (duration * 1000),
        1
      );

      setValue(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const id = requestAnimationFrame(step);

    return () => cancelAnimationFrame(id);
  }, [isInView, target, duration]);

  return value;
};

/* =========================================================
   HACKATHON HUB
========================================================= */

const HackathonHub = () => {
  const statRef = useRef(null);

  const inView = useInView(statRef, {
    once: true,
    margin: "-100px",
  });

  const hours = useCountUp(16, inView);

  return (
    <section
      id="hackathon"
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
          left-1/2
          top-0
          h-[34rem]
          w-[34rem]
          -translate-x-1/2
          rounded-full
          blur-[170px]
        "
        style={{
          background: "rgba(26,74,107,0.18)",
        }}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div className="flex flex-col items-center text-center">

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
            className="mb-5 w-full"
          >
            <GoldRule>
              The Flagship Voyage
            </GoldRule>
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
            className="
              flex
              flex-col
              items-center
              gap-1
            "
          >

            <span
              className="text-[#c49c36]"
              style={{
                fontFamily:
                  "'Cinzel Decorative', serif",
                fontSize:
                  "clamp(2.2rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              Odessa
            </span>

            <span
              style={{
                fontFamily:
                  "'Cinzel', serif",
                fontSize:
                  "clamp(1.2rem, 3vw, 1.8rem)",
                color: "#c8d8e8",
                letterSpacing: "0.05em",
              }}
            >
              The Overnight Hackathon
            </span>

          </motion.h2>

          {/* =================================================
              HOURS COUNTER
          ================================================= */}

          <motion.div
            ref={statRef}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mt-10
              flex
              items-center
              gap-5
              px-7
              py-5
              sm:px-8
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(26,74,107,0.22), rgba(15,52,96,0.15))",

              border:
                "1px solid rgba(200,134,10,0.28)",

              borderRadius: "3px",

              boxShadow:
                "0 0 30px rgba(26,74,107,0.25)",
            }}
          >

            {/* REAL LIGHT ASSET */}

            <motion.img
              src="/light.png"
              alt=""
              aria-hidden="true"
              className="
                h-10
                w-8
                object-contain
              "
              animate={{
                opacity: [0.65, 1, 0.65],
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="flex items-baseline gap-2">

              <span
                className="tabular-nums"
                style={{
                  fontFamily:
                    "'Cinzel', serif",
                  fontSize: "3rem",
                  color: "#e8c96a",
                  lineHeight: 1,
                }}
              >
                {hours}
              </span>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-widest
                  sm:text-sm
                "
                style={{
                  color:
                    "rgba(30,106,138,0.85)",
                }}
              >
                Continuous Hours
              </span>

            </div>

          </motion.div>

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
              mt-8
              max-w-xl
              italic
              leading-relaxed
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontSize: "1.18rem",
              color: "#a8c4d8",
            }}
          >
            No sleep. No shortcuts. Sixteen relentless
            hours to design, build, and defend an idea
            worth chasing. Pick your domain, gather your
            crew, and sail through the night.
          </motion.p>

        </div>

        {/* =================================================
            ROPE DIVIDER
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
            delay: 0.2,
          }}
          className="mt-12"
        >
          <RopeDivider />
        </motion.div>

        {/* =================================================
            DOMAIN CARDS
        ================================================= */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          {DOMAINS.map((domain, i) => (
            <GlowCard
              key={domain.label}
              index={i}
              className={`
                group
                p-6
                hover-target
                ${
                  i === DOMAINS.length - 1 &&
                  DOMAINS.length % 2 !== 0
                    ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                    : ""
                }
              `}
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,30,50,0.75), rgba(8,20,35,0.85))",

                backdropFilter:
                  "blur(12px)",

                border:
                  "1px solid rgba(200,134,10,0.35)",

                borderRadius: "3px",
              }}
            >

              <div className="flex gap-4">

                {/* DOMAIN IMAGE */}

                <motion.div
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                  "
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <img
                    src={domain.icon}
                    alt=""
                    aria-hidden="true"
                    className="
                      h-10
                      w-10
                      object-contain
                      opacity-90
                    "
                    style={{
                      filter:
                        "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
                    }}
                  />
                </motion.div>

                {/* TEXT */}

                <div>

                  <h3
                    style={{
                      fontFamily:
                        "'Cinzel', serif",
                      fontSize: "0.9rem",
                      color: "#c8d8e8",
                    }}
                  >
                    {domain.label}
                  </h3>

                  <p
                    className="mt-1.5 text-sm font-light"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontSize: "1.05rem",
                      color:
                        "rgba(168,196,216,0.7)",
                    }}
                  >
                    {domain.desc}
                  </p>

                </div>

              </div>

            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HackathonHub;