import { motion } from "framer-motion";

/* =========================================================
   PIRATE PUBLIC ASSETS
========================================================= */

const ICONS = {
  zap: "/anchor3.png",
  shark: "/wheel.png",
  bridge: "/compass3.png",
};

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
   MODAL
========================================================= */

const BattlegroundModal = ({
  battleground,
  onClose,
}) => {
  const iconSrc =
    ICONS[battleground.icon] ||
    "/anchor3.png";

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
        onClick={(e) =>
          e.stopPropagation()
        }
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
          className="
            absolute
            left-2
            top-2
            h-4
            w-4
            border-l
            border-t
          "
          style={{
            borderColor:
              "rgba(200,134,10,0.5)",
          }}
        />

        <span
          className="
            absolute
            right-2
            top-2
            h-4
            w-4
            border-r
            border-t
          "
          style={{
            borderColor:
              "rgba(200,134,10,0.5)",
          }}
        />

        <span
          className="
            absolute
            bottom-2
            left-2
            h-4
            w-4
            border-b
            border-l
          "
          style={{
            borderColor:
              "rgba(200,134,10,0.5)",
          }}
        />

        <span
          className="
            absolute
            bottom-2
            right-2
            h-4
            w-4
            border-b
            border-r
          "
          style={{
            borderColor:
              "rgba(200,134,10,0.5)",
          }}
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
            BATTLEGROUND ICON
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
          style={{
            borderRadius: "3px",
          }}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PirateIcon
            src={iconSrc}
            size={36}
          />
        </motion.div>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="mt-5 text-2xl"
          style={{
            fontFamily:
              "'Cinzel', serif",
            color: "#e8d5a8",
          }}
        >
          {battleground.title}
        </h3>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        {battleground.subtitle && (
          <h4
            className="mt-1 text-xl"
            style={{
              fontFamily:
                "'Cinzel Decorative', serif",
              color: "#c49c36",
            }}
          >
            {battleground.subtitle}
          </h4>
        )}

        {/* =================================================
            TAG
        ================================================= */}

        <span
          className="
            mt-3
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
            fontFamily:
              "'Cinzel', serif",

            color:
              "rgba(200,134,10,0.9)",

            borderColor:
              "rgba(200,134,10,0.3)",

            background:
              "rgba(200,134,10,0.05)",

            borderRadius: "2px",
          }}
        >
          <PirateIcon
            src="/star.png"
            size={10}
            opacity={0.75}
          />

          {battleground.tag}
        </span>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-5
            text-sm
            leading-relaxed
            font-light
          "
          style={{
            fontFamily:
              "'Cormorant Garamond', serif",

            fontSize: "1.05rem",

            color:
              "rgba(210,222,235,0.78)",
          }}
        >
          {battleground.description}
        </p>

        {/* =================================================
            VENUE
        ================================================= */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-3
            text-sm
          "
          style={{
            color:
              "rgba(210,222,235,0.85)",
          }}
        >
          <PirateIcon
            src="/map_scroll.png"
            size={24}
            opacity={0.75}
          />

          <span>
            {battleground.venue}
          </span>
        </div>

        {/* =================================================
            RULES
        ================================================= */}

        <div className="mt-7">

          <div className="flex items-center gap-3">

            <PirateIcon
              src="/compass5.png"
              size={18}
              opacity={0.7}
            />

            <h4
              className="
                text-xs
                uppercase
                tracking-widest
              "
              style={{
                fontFamily:
                  "'Cinzel', serif",

                color:
                  "rgba(200,134,10,0.8)",
              }}
            >
              Rules
            </h4>

          </div>

          <ul className="mt-3 space-y-3">

            {battleground.rules.map(
              (rule) => (
                <li
                  key={rule}
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-relaxed
                    font-light
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",

                    fontSize: "1rem",

                    color:
                      "rgba(168,196,216,0.75)",
                  }}
                >

                  <PirateIcon
                    src="/star.png"
                    size={10}
                    opacity={0.6}
                    className="mt-1.5 flex-shrink-0"
                  />

                  <span>
                    {rule}
                  </span>

                </li>
              )
            )}

          </ul>
        </div>

        {/* =================================================
            COORDINATOR
        ================================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            border
            px-4
            py-3
          "
          style={{
            borderColor:
              "rgba(200,134,10,0.18)",

            background:
              "rgba(255,255,255,0.02)",

            borderRadius: "3px",
          }}
        >

          <PirateIcon
            src="/anchor2.png"
            size={24}
            opacity={0.7}
          />

          <span
            className="text-sm"
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",

              color:
                "rgba(210,222,235,0.85)",
            }}
          >
            {battleground.coordinator.name}
          </span>

          <span
            className="
              ml-auto
              text-sm
            "
            style={{
              fontFamily:
                "'Cinzel', serif",

              color: "#e8c96a",
            }}
          >
            {battleground.coordinator.phone}
          </span>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default BattlegroundModal;