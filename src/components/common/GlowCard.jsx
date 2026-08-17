import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GlowCard = ({ children, className = "", onClick, index = 0, style, type, viewport }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    const Component = onClick ? motion.button : motion.div;

    return (
        <Component
            ref={cardRef}
            type={type}
            onClick={onClick}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport || { once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePosition({ x: -1000, y: -1000 });
            }}
            onMouseMove={handleMouseMove}
            className={`relative overflow-hidden ${className}`}
            whileHover={{ scale: 1.02 }}
            style={style}
        >
            {/* Background radial gradient overlay that follows the mouse */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 134, 10, 0.12), transparent 40%)`,
                }}
            />
            {/* Spotlight border glow */}
            <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 200, 50, 0.25), transparent 40%)`,
                    maskImage: "linear-gradient(white, white)",
                    WebkitMaskImage: "linear-gradient(white, white)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "source-out",
                    padding: "1px",
                }}
            />
            {children}
        </Component>
    );
};

export default GlowCard;
