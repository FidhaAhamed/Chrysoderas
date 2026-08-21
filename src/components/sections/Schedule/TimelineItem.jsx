import { motion } from "framer-motion";

/* =========================================================
   REAL ANCHOR ASSET
========================================================= */

const AnchorDot = () => (
  <motion.img
    src="/anchor1.png"
    alt=""
    aria-hidden="true"
    className="
      h-[22px]
      w-[18px]
      flex-shrink-0
      object-contain
    "
    style={{
      filter:
        "drop-shadow(0 0 6px rgba(200,134,10,0.55))",
    }}
    initial={{
      opacity: 0,
      scale: 0.7,
    }}
    whileInView={{
      opacity: 0.9,
      scale: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
    }}
  />
);

/* =========================================================
   TIMELINE ITEM
========================================================= */

const TimelineItem = ({
  item,
  index,
  isLast,
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x: -20,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
    }}
    className="
      relative
      flex
      gap-6
      pb-10
      last:pb-0
    "
  >

    {/* =================================================
        TIMELINE SPINE
    ================================================= */}

    <div
      className="
        flex
        flex-col
        items-center
      "
    >

      <AnchorDot />

      {!isLast && (
        <motion.span
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08 + 0.15,
          }}
          className="
            mt-1
            w-px
            flex-1
            origin-top
          "
          style={{
            background:
              "repeating-linear-gradient(" +
              "180deg," +
              "rgba(200,134,10,0.55) 0px," +
              "rgba(30,106,138,0.5) 6px," +
              "transparent 6px," +
              "transparent 10px" +
              ")",
          }}
        />
      )}

    </div>

    {/* =================================================
        CONTENT
    ================================================= */}

    <div className="-mt-0.5 flex-1">

      {/* TIME */}

      <span
        className="
          text-[10px]
          uppercase
          tracking-widest
        "
        style={{
          fontFamily:
            "'Cinzel', serif",

          color:
            "rgba(30,106,138,0.9)",
        }}
      >
        {item.time}
      </span>

      {/* TITLE */}

      <h4
        className="mt-1"
        style={{
          fontFamily:
            "'Cinzel', serif",

          fontSize: "0.88rem",

          color: "#c8d8e8",
        }}
      >
        {item.title}
      </h4>

      {/* DESCRIPTION */}

      <p
        className="
          mt-1
          text-sm
          font-light
          leading-relaxed
        "
        style={{
          fontFamily:
            "'Cormorant Garamond', serif",

          fontSize: "1.05rem",

          color:
            "rgba(168,196,216,0.75)",
        }}
      >
        {item.description}
      </p>

    </div>

  </motion.div>
);

export default TimelineItem;