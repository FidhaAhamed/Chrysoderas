import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const outerSpringConfig = {
    damping: 28,
    stiffness: 450,
    mass: 0.3,
  };

  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    }

    const manageMouseMove = (e) => {
      setIsHidden(false);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const isHoverable = e.target.closest(
        "a, button, input, textarea, .hover-target"
      );

      setIsHovering(!!isHoverable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (typeof window === "undefined" || isTouchDevice) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer cursor */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          flex
          items-center
          justify-center
          rounded-full
          mix-blend-screen
        "
        style={{
          width: 48,
          height: 48,
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? "rgba(220,160,40,0.2)"
            : "rgba(200,134,10,0.4)",
          borderWidth: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Compass asset */}
        <motion.img
          src="/compass5.png"
          alt=""
          aria-hidden="true"
          className="absolute h-7 w-7 object-contain"
          style={{
            opacity: isHovering ? 0.6 : 0,
            filter:
              "drop-shadow(0 0 5px rgba(200,134,10,0.55))",
          }}
          animate={{
            rotate: isHovering ? 90 : 0,
            scale: isHovering ? 1 : 0.7,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />

        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#c8860a]"
          style={{ opacity: 0.3 }}
          animate={{
            rotate: isHovering ? 90 : 0,
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Center cursor */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          rounded-full
          bg-[#ebd6ae]
          shadow-[0_0_10px_#c8860a]
        "
        style={{
          width: 8,
          height: 8,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;