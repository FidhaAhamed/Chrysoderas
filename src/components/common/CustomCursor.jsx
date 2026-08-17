import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiCompass } from "react-icons/fi";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorX = mouseX;
    const cursorY = mouseY;
    const outerSpringConfig = { damping: 28, stiffness: 450, mass: 0.3 };
    const outerX = useSpring(mouseX, outerSpringConfig);
    const outerY = useSpring(mouseY, outerSpringConfig);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
        }

        const manageMouseMove = (e) => {
            setIsHidden(false);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            const isHoverable = e.target.closest("a, button, input, textarea, .hover-target");
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
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[10000] flex items-center justify-center rounded-full mix-blend-screen"
                style={{ width: 48, height: 48, x: outerX, y: outerY, translateX: "-50%", translateY: "-50%", opacity: isHidden ? 0 : 1 }}
                animate={{ scale: isHovering ? 1.5 : 1, borderColor: isHovering ? "rgba(220, 160, 40, 0.2)" : "rgba(200, 134, 10, 0.4)", borderWidth: isHovering ? 1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <motion.div className="absolute inset-0 rounded-full border border-[#c8860a] opacity-30" animate={{ rotate: isHovering ? 90 : 0 }} transition={{ duration: 0.5 }} />
                {isHovering && <FiCompass className="text-[#c8860a] opacity-40 absolute" size={24} />}
            </motion.div>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full bg-[#ebd6ae] shadow-[0_0_10px_#c8860a]"
                style={{ width: 8, height: 8, x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%", opacity: isHidden ? 0 : 1 }}
                animate={{ scale: isHovering ? 0 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
