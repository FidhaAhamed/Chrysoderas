import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Embers = ({ count = 35 }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particle data once on mount
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // vw
            size: Math.random() * 3 + 1, // 1px to 4px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 15,
            opacity: Math.random() * 0.5 + 0.2,
        }));
        setParticles(newParticles);
    }, [count]);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-[#f8bf24] shadow-[0_0_8px_2px_rgba(200,134,10,0.8)]"
                    style={{
                        left: `${p.x}vw`,
                        width: p.size,
                        height: p.size,
                    }}
                    initial={{ y: "110vh", opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, p.opacity, p.opacity, 0],
                        x: ["0px", "20px", "-20px", "10px", "0px"],
                    }}
                    transition={{
                        y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                        opacity: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay },
                        x: { duration: p.duration / 2, repeat: Infinity, ease: "easeInOut", delay: p.delay, repeatType: "mirror" },
                    }}
                />
            ))}
        </div>
    );
};

export default Embers;
