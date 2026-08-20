import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#020810]
      "
    >

      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(26,74,107,0.22) 0%,
              rgba(2,8,16,0.45) 38%,
              rgba(2,8,16,0.96) 100%
            )
          `,
        }}
      />

      {/* Ocean/wave texture */}
      <motion.img
        src="/wave.png"
        alt=""
        className="
          absolute
          bottom-[-20px]
          left-1/2
          w-[650px]
          max-w-none
          -translate-x-1/2
          opacity-[0.08]
          pointer-events-none
        "
        animate={{
          x: ["-48%", "-52%", "-48%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE STARS
      ====================================================== */}

      <motion.img
        src="/star.png"
        alt=""
        className="absolute left-[18%] top-[25%] h-3 w-3 opacity-30"
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/star.png"
        alt=""
        className="absolute right-[20%] top-[30%] h-2.5 w-2.5 opacity-25"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/star.png"
        alt=""
        className="absolute bottom-[24%] left-[25%] h-2 w-2 opacity-20"
        animate={{
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Compass */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >

          {/* Outer glow */}
          <div
            className="
              absolute
              inset-[-25px]
              rounded-full
              bg-[#c8860a]/10
              blur-[30px]
            "
          />

          {/* Compass */}
          <motion.img
            src="/compass5.png"
            alt=""
            className="
              relative
              h-24
              w-24
              object-contain
              opacity-90
              drop-shadow-[0_0_18px_rgba(200,134,10,0.35)]
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* =================================================
            LOGO
        ================================================== */}

        <motion.img
          src="/chrysoderas%20logo.png"
          alt="ChrysoDeras"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mt-7
            h-14
            sm:h-16
            w-auto
            object-contain
            drop-shadow-[0_0_18px_rgba(200,134,10,0.18)]
          "
        />

        {/* =================================================
            LOADING TEXT
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            delay: 0.7,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-6
            text-[10px]
            uppercase
            tracking-[0.38em]
          "
          style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(200,134,10,0.8)",
          }}
        >
          Charting the Course
        </motion.p>

        {/* =================================================
            LOADING LINE
        ================================================== */}

        <div
          className="
            relative
            mt-5
            h-px
            w-48
            overflow-hidden
          "
          style={{
            background: "rgba(200,134,10,0.12)",
          }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c8860a, #e8c96a, transparent)",
            }}
            initial={{
              width: "0%",
              x: "-100%",
            }}
            animate={{
              width: "100%",
              x: "100%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>

        {/* Small status */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-3
            text-[8px]
            uppercase
            tracking-[0.25em]
          "
          style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(168,196,216,0.4)",
          }}
        >
          Preparing the voyage
        </motion.span>

      </div>

      {/* =====================================================
          CORNER DECORATIONS
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          top-6
          h-8
          w-8
          border-l
          border-t
          border-[#c8860a]/20
        "
      />

      <div
        className="
          absolute
          right-6
          top-6
          h-8
          w-8
          border-r
          border-t
          border-[#c8860a]/20
        "
      />

      <div
        className="
          absolute
          bottom-6
          left-6
          h-8
          w-8
          border-b
          border-l
          border-[#c8860a]/20
        "
      />

      <div
        className="
          absolute
          bottom-6
          right-6
          h-8
          w-8
          border-b
          border-r
          border-[#c8860a]/20
        "
      />

    </motion.div>
  );
};

export default Preloader;