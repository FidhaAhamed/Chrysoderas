import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GlowCard = ({
  children,
  className = "",
  onClick,
  index = 0,
  style,
  type,
  viewport,
}) => {
  const cardRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: -1000,
    y: -1000,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      ref={cardRef}
      type={type}
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={viewport || { once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({
          x: -1000,
          y: -1000,
        });
      }}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        scale: 1.015,
      }}
      style={style}
    >
      {/* Mouse-following gold atmosphere */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          background: `radial-gradient(
            500px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(200,134,10,0.13),
            rgba(30,106,138,0.04) 35%,
            transparent 65%
          )`,
        }}
      />

      {/* Subtle border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          background: `radial-gradient(
            280px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(232,201,106,0.3),
            transparent 65%
          )`,
          padding: "1px",
          maskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Soft blue ambient highlight */}
      <motion.div
        className="pointer-events-none absolute z-0 h-32 w-32 rounded-full blur-3xl"
        animate={{
          opacity: isHovered ? 0.16 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: "#1e6a8a",
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
};

export default GlowCard;