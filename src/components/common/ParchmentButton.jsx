import { motion } from "framer-motion";

export const ParchmentButton = ({
  children,
  href,
  onClick,
  icon,
  size = "md",
  className = "",
  target,
  rel,
}) => {
  const padding =
    size === "sm"
      ? "10px 8px"
      : "14px 40px";

  const fontSize =
    size === "sm"
      ? "0.72rem"
      : "0.88rem";

  const content = (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow:
          "0 0 35px rgba(200,134,10,0.45), 0 8px 25px rgba(0,0,0,0.7)",
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        flex
        w-full
        min-w-0
        box-border
        items-center
        justify-center
        gap-2
        cursor-pointer
        overflow-hidden
      "
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        padding,
        borderRadius: "6px",

        background:
          "url('/parchment-tex3.png') center/cover no-repeat",

        boxShadow:
          "inset 0 0 20px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.5)",

        border:
          "1px solid rgba(150,100,20,0.8)",
      }}
    >
      {/* Dark parchment overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/10
          mix-blend-multiply
        "
      />

      {/* Top worn highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-4
          top-0
          h-px
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,245,180,0.4), transparent)",
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          min-w-0
          items-center
          justify-center
          gap-2
        "
      >
        {icon && (
          <span
            className="flex-shrink-0"
            style={{
              color: "#1a0f05",
            }}
          >
            {icon}
          </span>
        )}

        <span
          className="block w-full min-w-0"
          style={{
            fontFamily:
              "'Cinzel Decorative', serif",

            fontSize,

            letterSpacing:
              "0.06em",

            color:
              "#140a02",

            fontWeight: 700,

            textShadow:
              "0 1px 0 rgba(255,255,255,0.3)",

            lineHeight: 1.05,

            textTransform:
              "uppercase",

            textAlign:
              "center",

            overflowWrap:
              "break-word",
          }}
        >
          {children}
        </span>
      </div>
    </motion.div>
  );

  // If href exists → render as link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {content}
      </a>
    );
  }

  // If no href → render as clickable button
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  );
};