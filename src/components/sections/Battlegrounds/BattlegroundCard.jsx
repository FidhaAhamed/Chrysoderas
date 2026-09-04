import React from "react";
import GlowCard from "../../common/GlowCard";
import { ParchmentButton } from "../../common/ParchmentButton";
import { motion } from "framer-motion";

/* =========================================================
   GROUP REGISTRATION LINK
========================================================= */

const GROUP_REGISTRATION_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe4FCx-vhuyIhgfnAcK_l4mnkeFNUOFwJF773SWnH-in2gx-w/viewform";

/* =========================================================
   PIRATE PUBLIC ASSET
========================================================= */

const PirateIcon = ({
  src,
  size = 28,
  opacity = 0.85,
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
    whileHover={{
      scale: 1.1,
      rotate: 3,
    }}
    transition={{
      duration: 0.25,
    }}
  />
);

/* =========================================================
   BATTLEGROUND ICONS
========================================================= */

const ICONS = {
  zap: "/anchor3.png",
  shark: "/wheel.png",
  bridge: "/compass3.png",
};

/* =========================================================
   BATTLEGROUND CARD
========================================================= */

const BattlegroundCard = ({
  battleground,
  onSelect,
  index,
}) => {
  const iconSrc =
    ICONS[battleground.icon] || "/anchor3.png";

  return (
    <GlowCard
      type="button"
      onClick={() => onSelect(battleground)}
      index={index}
      className="
        group
        relative
        flex
        flex-col
        items-start
        text-left
        hover-target
        min-w-0
        overflow-hidden
      "
      style={{
        padding: "28px",
        borderRadius: "4px",

        background:
          "linear-gradient(135deg, rgba(15,30,50,0.75), rgba(8,20,35,0.85))",

        backdropFilter: "blur(12px)",

        border:
          "1px solid rgba(200,134,10,0.35)",

        boxShadow:
          "inset 0 0 25px rgba(0,0,0,0.18), 0 8px 25px rgba(0,0,0,0.25)",
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
          h-3
          w-3
          border-l
          border-t
        "
        style={{
          borderColor:
            "rgba(200,134,10,0.45)",
        }}
      />

      <span
        className="
          absolute
          right-2
          top-2
          h-3
          w-3
          border-r
          border-t
        "
        style={{
          borderColor:
            "rgba(200,134,10,0.45)",
        }}
      />

      <span
        className="
          absolute
          bottom-2
          left-2
          h-3
          w-3
          border-b
          border-l
        "
        style={{
          borderColor:
            "rgba(200,134,10,0.45)",
        }}
      />

      {/* =================================================
          ICON
      ================================================= */}

      <motion.div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
        "
        style={{
          border:
            "1px solid rgba(200,134,10,0.35)",

          borderRadius: "3px",

          background:
            "linear-gradient(135deg, rgba(26,74,107,0.3), rgba(15,52,96,0.2))",
        }}
        whileHover={{
          borderColor:
            "rgba(200,134,10,0.65)",

          boxShadow:
            "0 0 18px rgba(200,134,10,0.15)",
        }}
      >
        <PirateIcon
          src={iconSrc}
          size={30}
        />
      </motion.div>

      {/* =================================================
          TITLE
      ================================================= */}

      <h3
        className="mt-5"
        style={{
          fontFamily:
            "'Cinzel', serif",

          fontSize: "0.92rem",

          color: "#c8d8e8",
        }}
      >
        {battleground.title}
      </h3>

      {/* =================================================
          SUBTITLE
      ================================================= */}

      {battleground.subtitle && (
        <span
          className="mt-1 block"
          style={{
            fontFamily:
              "'Cinzel Decorative', serif",

            fontSize: "0.85rem",

            color: "#c49c36",
          }}
        >
          {battleground.subtitle}
        </span>
      )}

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          mt-3
          line-clamp-2
          text-sm
          font-light
        "
        style={{
          fontFamily:
            "'Cormorant Garamond', serif",

          fontSize: "1.05rem",

          color:
            "rgba(168,196,216,0.75)",
        }}
      >
        {battleground.description}
      </p>

      {/* =================================================
          VENUE
      ================================================= */}

      <div
        className="
          mt-5
          flex
          items-center
          gap-2
          text-xs
        "
        style={{
          color:
            "rgba(168,196,216,0.72)",
        }}
      >
        <span>
          {battleground.venue}
        </span>
      </div>

      {/* =================================================
          TAG
      ================================================= */}

      <div
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          px-3
          py-1
        "
        style={{
          fontFamily:
            "'Cinzel', serif",

          color:
            "rgba(200,134,10,0.85)",

          border:
            "1px solid rgba(200,134,10,0.3)",

          background:
            "rgba(26,74,107,0.15)",

          borderRadius: "2px",
        }}
      >
        <PirateIcon
          src="/star.png"
          size={10}
          opacity={0.7}
        />

        <span
          className="
            text-[10px]
            uppercase
            tracking-wider
          "
        >
          {battleground.tag}
        </span>
      </div>

      {/* =================================================
          REGISTRATION BUTTONS
      ================================================= */}

      <div
        className="
          mt-6
          flex
          w-full
          min-w-0
          gap-2
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* =================================================
            INDIVIDUAL REGISTRATION
        ================================================= */}

        <ParchmentButton
          href={battleground.regLink || "#register"}
          size="sm"
          className="min-w-0 flex-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block sm:hidden text-center">
            INDIVIDUAL
            <br />
            REGISTRATION
          </span>

          <span className="hidden sm:block text-center">
            INDIVIDUAL REGISTRATION
          </span>
        </ParchmentButton>

        {/* =================================================
            GROUP REGISTRATION
        ================================================= */}

        <ParchmentButton
          href={GROUP_REGISTRATION_LINK}
          size="sm"
          className="min-w-0 flex-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block sm:hidden text-center">
            GROUP
            <br />
            REGISTRATION
          </span>

          <span className="hidden sm:block text-center">
            GROUP REGISTRATION
          </span>
        </ParchmentButton>

      </div>

    </GlowCard>
  );
};

export default BattlegroundCard;