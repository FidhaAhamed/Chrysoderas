import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiShipWheel } from "react-icons/gi";

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide the preloader after content nominally loads + brief artificial thematic delay
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040d1a]"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="mb-8"
            >
                <GiShipWheel className="text-7xl text-[#c8860a] opacity-80" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <h1
                    style={{ fontFamily: "'Cinzel Decorative', serif", color: "#e8c96a", letterSpacing: "0.15em" }}
                    className="text-2xl"
                >
                    Charting the Course...
                </h1>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
