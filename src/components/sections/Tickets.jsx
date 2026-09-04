import React from "react";
import { motion } from "framer-motion";
import GlowCard from "../common/GlowCard";

/* =========================================================
   PIRATE PUBLIC ASSET
========================================================= */

const PirateIcon = ({
    src,
    size = 28,
    opacity = 0.85,
    className = "",
}) => (
    <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        className={`object-contain ${className}`}
        style={{
            width: size,
            height: size,
            opacity,
            filter: "drop-shadow(0 0 6px rgba(200,134,10,0.25))",
        }}
    />
);

/* =========================================================
   GENERIC TICKET BOX CONTAINER
========================================================= */

const TicketBox = ({ title, children, glowIndex }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl mx-auto mb-16"
    >
        <GlowCard index={glowIndex}>
            <div
                className="relative p-6 sm:p-10 md:p-14 overflow-hidden w-full h-full"
                style={{
                    borderRadius: "4px",
                    background: "linear-gradient(135deg, rgba(15,30,50,0.75), rgba(8,20,35,0.85))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(200,134,10,0.35)",
                    boxShadow: "inset 0 0 25px rgba(0,0,0,0.18), 0 8px 25px rgba(0,0,0,0.25)",
                }}
            >
                {/* =================================================
            ANTIQUE CORNERS
        ================================================= */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
                <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
                <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2" style={{ borderColor: "rgba(200,134,10,0.45)" }} />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2" style={{ borderColor: "rgba(200,134,10,0.45)" }} />

                <h3
                    className="text-center font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider mb-2"
                    style={{ fontFamily: "'Cinzel Decorative', serif", color: "#c49c36" }}
                >
                    {title}
                </h3>
                <div className="flex justify-center mb-10 opacity-70">
                    <span className="text-[#a5c2da]" style={{ fontFamily: "'Cinzel', serif" }}>
                        —<PirateIcon src="/star.png" size={10} className="inline mx-2" />—
                    </span>
                </div>

                {children}
            </div>
        </GlowCard>
    </motion.div>
);

/* =========================================================
   INDIVIDUAL TICKET ROW COMPONENT
========================================================= */

const PriceRow = ({ label, price }) => (
    <div className="flex justify-between md:grid md:grid-cols-[100px_1fr] md:gap-4 items-center w-full px-1 max-w-[280px] mx-auto">
        <span className="text-sm md:text-base font-light tracking-wide uppercase whitespace-nowrap text-left" style={{ fontFamily: "'Cinzel', serif", color: "rgba(168,196,216,0.75)" }}>
            {label}
        </span>
        <span className="text-xl md:text-2xl tracking-wide font-bold whitespace-nowrap md:text-left flex items-baseline justify-end md:justify-start gap-2" style={{ fontFamily: "'Cinzel', serif", color: "#c49c36" }}>
            {price}
        </span>
    </div>
);

/* =========================================================
   STANDALONE PRICE CARD
========================================================= */

const PriceCard = ({ title, subtitle, prices, isSingle }) => (
    <div className="flex flex-col w-full h-full">
        <h4
            className="text-center font-bold text-xs md:text-sm tracking-widest uppercase mb-4 h-12 flex flex-col justify-end"
            style={{ fontFamily: "'Cinzel', serif", color: "#e8c96a" }}
        >
            {title}
            {subtitle && <span className="block text-[0.6rem] md:text-[0.65rem] mt-2 leading-tight" style={{ color: "rgba(168,196,216,0.7)" }}>{subtitle}</span>}
        </h4>

        <div
            className={`border px-3 py-4 md:px-5 md:py-6 w-full flex-grow flex flex-col justify-center transition-all duration-300 ${isSingle ? "items-center" : "gap-4"
                }`}
            style={{
                border: "1px solid rgba(200,134,10,0.25)",
                borderRadius: "3px",
                background: "rgba(0,0,0,0.25)"
            }}
        >
            {prices.map((p, idx) => (
                <React.Fragment key={p.label}>
                    {isSingle ? (
                        <span className="text-2xl md:text-3xl lg:text-4xl tracking-widest font-bold whitespace-nowrap flex items-baseline justify-center gap-2" style={{ fontFamily: "'Cinzel', serif", color: "#c49c36", textShadow: "0 0 15px rgba(200,134,10,0.3)" }}>
                            {p.amount}
                        </span>
                    ) : (
                        <>
                            <PriceRow label={p.label} price={p.amount} />
                            {idx < prices.length - 1 && (
                                <div className="h-px w-full my-1 opacity-20" style={{ background: "linear-gradient(90deg, transparent, #c49c36, transparent)" }} />
                            )}
                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Tickets = () => {
    return (
        <section
            id="tickets"
            className="relative w-full py-24 sm:py-32"
            style={{
                background:
                    "radial-gradient(ellipse 70% 50% at 50% 5%, rgba(26,74,107,0.3) 0%, transparent 60%)," +
                    "radial-gradient(ellipse 55% 40% at 20% 85%, rgba(15,52,96,0.2) 0%, transparent 55%)",
            }}
        >
            <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6">

                {/* =================================================
            LIMITED TIME OFFER HEADER
        ================================================= */}
                <div className="flex flex-col items-center mb-16 relative">
                    <div
                        className="border-2 px-10 py-4 rounded-sm bg-[#05101a]/80 shadow-[0_0_20px_rgba(200,134,10,0.15)] text-center relative overflow-hidden"
                        style={{ borderColor: "rgba(200,134,10,0.5)" }}
                    >
                        {/* Outline box corner accents */}
                        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#c49c36]"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#c49c36]"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#c49c36]"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#c49c36]"></div>

                        <h2
                            className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase mb-1"
                            style={{ fontFamily: "'Cinzel', serif", color: "#c6d6e3" }}
                        >
                            Limited
                        </h2>
                        <h2
                            className="text-[#c49c36] text-[1.4rem] md:text-[1.8rem] font-bold tracking-widest uppercase leading-none"
                            style={{ fontFamily: "'Cinzel Decorative', serif" }}
                        >
                            Time Offer
                        </h2>
                    </div>
                    <div className="mt-5 px-6 py-2">
                        <span
                            className="text-[#e8d5a8] font-medium tracking-widest uppercase text-sm md:text-base border-b border-[#c49c36]/40 pb-1"
                            style={{ fontFamily: "'Cinzel', serif", textShadow: "0 0 10px rgba(200,134,10,0.4)" }}
                        >
                            Last Date To Register : Sept 6
                        </span>
                    </div>
                </div>

                <TicketBox title="PILLAR OF OLYMPUS / AGORA / ODESSA" glowIndex={0}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 w-full px-1 lg:px-2">

                        <PriceCard
                            title="Individual"
                            subtitle=""
                            isSingle={false}
                            prices={[
                                { label: "ISTE", amount: <><del className="text-[#4FA3D1] mr-2 text-sm md:text-base font-medium" style={{ textDecorationColor: "#e63946", textDecorationThickness: "3px", textShadow: "none" }}>₹399</del>₹350</> },
                                { label: "Non ISTE", amount: <><del className="text-[#4FA3D1] mr-2 text-sm md:text-base font-medium" style={{ textDecorationColor: "#e63946", textDecorationThickness: "3px", textShadow: "none" }}>₹499</del>₹450</> }
                            ]}
                        />

                        {/* Divider for mobile */}
                        <div className="block md:hidden border-b w-full" style={{ borderColor: "rgba(200,134,10,0.2)" }} />

                        <PriceCard
                            title="Group Ticket"
                            subtitle="4 MEMBERS"
                            isSingle={true}
                            prices={[
                                { label: "", amount: <><del className="text-[#4FA3D1] mr-2 text-lg md:text-xl lg:text-2xl font-medium" style={{ textDecorationColor: "#e63946", textDecorationThickness: "3px", textShadow: "none" }}>₹1800</del>₹1600</> }
                            ]}
                        />

                        {/* Divider for mobile */}
                        <div className="block md:hidden border-b w-full" style={{ borderColor: "rgba(200,134,10,0.2)" }} />

                        <PriceCard
                            title="Group Ticket"
                            subtitle="4 MEMBERS (MIN 1 ISTE MEMBER)"
                            isSingle={true}
                            prices={[
                                { label: "", amount: "₹1400" }
                            ]}
                        />

                    </div>
                </TicketBox>

                <TicketBox title="AETHER" glowIndex={1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-3xl mx-auto px-1 lg:px-2 relative">

                        {/* Center vertical line on desktop */}
                        <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2" style={{ background: "linear-gradient(180deg, transparent, rgba(200,134,10,0.3), transparent)" }} />

                        <PriceCard
                            title="Individual"
                            subtitle=""
                            isSingle={false}
                            prices={[
                                { label: "ISTE", amount: <><del className="text-[#4FA3D1] mr-2 text-sm md:text-base font-medium" style={{ textDecorationColor: "#e63946", textDecorationThickness: "3px", textShadow: "none" }}>₹399</del>₹300</> },
                                { label: "Non ISTE", amount: <><del className="text-[#4FA3D1] mr-2 text-sm md:text-base font-medium" style={{ textDecorationColor: "#e63946", textDecorationThickness: "3px", textShadow: "none" }}>₹499</del>₹350</> }
                            ]}
                        />

                        {/* Divider for mobile */}
                        <div className="block md:hidden border-b w-full" style={{ borderColor: "rgba(200,134,10,0.2)" }} />

                        <PriceCard
                            title="Group Ticket"
                            subtitle="4 MEMBERS (MIN 1 ISTE MEMBER)"
                            isSingle={true}
                            prices={[
                                { label: "", amount: "₹1200" }
                            ]}
                        />

                    </div>
                </TicketBox>

            </div>
        </section>
    );
};

export default Tickets;
