import { motion } from "framer-motion";

/* =========================================================
   PIRATE ASSET
========================================================= */

const PirateIcon = ({
  src,
  size = 24,
  opacity = 0.85,
  className = "",
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
      filter:
        "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
    }}
  />
);

/* =========================================================
   TRACK MODAL
========================================================= */

const TrackModal = ({ track, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[60]
        flex
        items-center
        justify-center
        bg-[#020408]/85
        px-4
        backdrop-blur-sm
      "
    >

      {/* =================================================
          MODAL CARD
      ================================================= */}

      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 16,
          scale: 0.97,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-lg
          overflow-hidden
          border
          border-[#c8860a]/30
          bg-[#080c18]
          p-8
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
        "
        style={{
          borderRadius: "4px",
        }}
      >

        {/* =================================================
            ANTIQUE CORNERS
        ================================================= */}

        <span
          className="absolute left-2 top-2 h-4 w-4 border-l border-t"
          style={{ borderColor: "rgba(200,134,10,0.5)" }}
        />
        <span
          className="absolute right-2 top-2 h-4 w-4 border-r border-t"
          style={{ borderColor: "rgba(200,134,10,0.5)" }}
        />
        <span
          className="absolute bottom-2 left-2 h-4 w-4 border-b border-l"
          style={{ borderColor: "rgba(200,134,10,0.5)" }}
        />
        <span
          className="absolute bottom-2 right-2 h-4 w-4 border-b border-r"
          style={{ borderColor: "rgba(200,134,10,0.5)" }}
        />

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="
            absolute
            right-5
            top-5
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#c8860a]/25
            bg-[#c8860a]/5
            transition-all
            duration-300
            hover:border-[#c8860a]/60
            hover:bg-[#c8860a]/15
          "
        >
          <span
            className="
              text-lg
              font-light
              text-[#c8860a]/70
              hover:text-[#e8c96a]
            "
          >
            ×
          </span>
        </button>

        {/* =================================================
            TRACK ICON
        ================================================= */}

        <motion.div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            border
            border-[#c8860a]/30
            bg-[#c8860a]/5
          "
          style={{ borderRadius: "3px" }}
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PirateIcon src={track.icon} size={32} />
        </motion.div>

        {/* =================================================
            TAG
        ================================================= */}

        <span
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            border
            px-3
            py-1
            text-[10px]
            uppercase
            tracking-wider
          "
          style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(200,134,10,0.9)",
            borderColor: "rgba(200,134,10,0.3)",
            background: "rgba(200,134,10,0.05)",
            borderRadius: "2px",
          }}
        >
          <PirateIcon src="/star.png" size={10} opacity={0.75} />
          Hackathon Track
        </span>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="mt-4 text-2xl"
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#e8d5a8",
            lineHeight: 1.3,
          }}
        >
          {track.label}
        </h3>

        {/* =================================================
            SHORT DESCRIPTION
        ================================================= */}

        <p
          className="mt-2 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "#c49c36",
          }}
        >
          {track.desc}
        </p>

        {/* =================================================
            FULL DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-5
            text-sm
            leading-relaxed
            font-light
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            color: "rgba(210,222,235,0.78)",
          }}
        >
          {track.fullDesc}
        </p>

      </motion.div>
    </motion.div>
  );
};

export default TrackModal;