import { motion } from "framer-motion";

export const ParchmentButton = ({ children, href, onClick, icon, size = "md", className = "" }) => {
    const padding = size === "sm" ? "10px 24px" : "14px 40px";
    const fontSize = size === "sm" ? "0.75rem" : "0.88rem";

    const buttonProps = { href, onClick, className };

    return (
        <a {...buttonProps}>
            <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(200,134,10,0.45), 0 8px 25px rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="relative flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
                style={{
                    padding,
                    borderRadius: "6px",
                    background: "url('/parchment-tex3.png') center/cover no-repeat",
                    boxShadow:
                        "inset 0 0 20px rgba(0,0,0,0.5)," +
                        "0 6px 20px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(150,100,20,0.8)",
                }}
            >
                {/* Subtle dark vignette overlay to make text pop */}
                <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-black/10" />

                {/* Worn edge highlight */}
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,245,180,0.4), transparent)" }} />

                {/* Text icon container */}
                <div className="relative z-10 flex items-center justify-center gap-3 w-full">
                    {icon && (
                        <span className="flex-shrink-0" style={{ color: "#1a0f05" }}>
                            {icon}
                        </span>
                    )}
                    <span style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize,
                        letterSpacing: "0.08em",
                        color: "#140a02",
                        fontWeight: 700,
                        textShadow: "0 1px 0 rgba(255,255,255,0.3)",
                        lineHeight: 1,
                        textTransform: "uppercase",
                    }}>
                        {children}
                    </span>
                </div>
            </motion.div>
        </a>
    );
};
