import { motion } from "framer-motion";
import { faqs } from "../../data/faq";
import Accordion from "../common/Accordion";

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
   FAQ
========================================================= */

const FAQ = () => (
  <section
    id="faq"
    className="
      relative
      w-full
      overflow-hidden
      py-28
      sm:py-36
    "
    style={{
      background:
        "radial-gradient(ellipse 65% 50% at 50% 100%, rgba(26,74,107,0.25) 0%, transparent 60%)",
    }}
  >

    {/* =====================================================
        ATMOSPHERIC GLOW
    ====================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        h-80
        w-80
        -translate-x-1/2
        rounded-full
        blur-[140px]
      "
      style={{
        background:
          "rgba(26,74,107,0.2)",
      }}
    />

    {/* =====================================================
        SUBTLE COMPASS
    ====================================================== */}

    <motion.img
      src="/compass5.png"
      alt=""
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-[4%]
        top-[18%]
        hidden
        h-24
        w-24
        object-contain
        lg:block
      "
      animate={{
        rotate: [0, 6, 0, -6, 0],
        opacity: [0.03, 0.07, 0.03],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* =====================================================
        CONTENT
    ====================================================== */}

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
            opacity={0.75}
          />

          <span>
            Before You Sail
          </span>

          <PirateImage
            src="/star.png"
            size={11}
            opacity={0.75}
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
              "clamp(1.8rem,5vw,3rem)",

            lineHeight: 1.3,
          }}
        >
          FAQs
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
            duration: 0.6,
            delay: 0.18,
          }}
          className="mt-6 w-56"
        >
          <RopeDivider
            icon="/map_scroll.png"
          />
        </motion.div>

      </div>

      {/* =================================================
          ACCORDION
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
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
          delay: 0.15,
        }}
        className="mt-10"
      >
        <Accordion items={faqs} />
      </motion.div>

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
          delay: 0.3,
        }}
        className="mt-10"
      >
        <RopeDivider
          icon="/anchor2.png"
        />
      </motion.div>

    </div>
  </section>
);

export default FAQ;