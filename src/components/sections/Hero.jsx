import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const LAUNCH_DATE = new Date("2026-09-11T09:00:00+05:30");

const getTimeLeft = () => {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 5,
      })),
    []
  );

  const countdownUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050914] px-6"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-amber-300/70"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -16, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="mb-5 rounded-full border border-amber-400/30 px-4 py-1 text-xs tracking-[0.3em] text-amber-300/90 uppercase"
        >
          The Golden Fleece Awaits
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="font-serif text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-wide"
        >
          ChrysoDeras&nbsp;'26
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-5 max-w-xl text-base sm:text-lg text-slate-300/80 font-light tracking-wide"
        >
          Every voyage begins with a spark. Chart yours through the storm.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.42}
          variants={fadeUp}
          className="mt-3 text-sm tracking-[0.25em] text-amber-300/80 uppercase"
        >
          September 11 &amp; 12, 2026
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.55}
          variants={fadeUp}
          className="mt-10 flex gap-3 sm:gap-5"
        >
          {countdownUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex w-16 sm:w-20 flex-col items-center rounded-xl border border-amber-400/20 bg-white/[0.03] py-3 backdrop-blur-sm"
            >
              <span className="font-serif text-2xl sm:text-3xl text-amber-200 tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                {unit.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#register"
          initial="hidden"
          animate="visible"
          custom={0.7}
          variants={fadeUp}
          className="mt-12 inline-flex items-center rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 to-yellow-500 px-8 py-3 text-sm font-medium text-[#0a0e1a] shadow-[0_0_25px_rgba(251,191,36,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]"
        >
          Claim Your Fleece
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 text-amber-300/70 text-xl"
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;