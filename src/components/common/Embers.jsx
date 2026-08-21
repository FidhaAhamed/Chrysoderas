import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Embers = ({ count = 35 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 8 + 5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.35 + 0.15,
    }));

    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src="/star.png"
          alt=""
          aria-hidden="true"
          className="absolute object-contain"
          style={{
            left: `${p.x}vw`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter:
              "drop-shadow(0 0 5px rgba(200,134,10,0.45))",
          }}
          initial={{
            y: "110vh",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, p.opacity, p.opacity, 0],
            x: [
              "0px",
              "20px",
              "-20px",
              "10px",
              "0px",
            ],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            y: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            },
            opacity: {
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            },
            x: {
              duration: p.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
              repeatType: "mirror",
            },
            rotate: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            },
          }}
        />
      ))}
    </div>
  );
};

export default Embers;