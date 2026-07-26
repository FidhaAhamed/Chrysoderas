import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiClock, FiDownload } from "react-icons/fi";

const DOMAINS = [
  { label: "AI / ML", desc: "Intelligent systems & automation" },
  { label: "Web3 & Blockchain", desc: "Decentralized, trustless builds" },
  { label: "IoT & Hardware", desc: "Bridging the physical & digital" },
  { label: "Sustainability Tech", desc: "Solutions for a greener future" },
];

const useCountUp = (target, isInView, duration = 1.4) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return value;
};

const HackathonHub = () => {
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true, margin: "-100px" });
  const hours = useCountUp(16, isInView);

  return (
    <section
      id="hackathon"
      className="relative w-full overflow-hidden bg-[#050914] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-amber-400/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/80"
          >
            The Flagship Voyage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
          >
            The Overnight Hackathon
          </motion.h2>

          <div
            ref={statRef}
            className="mt-10 flex items-center gap-4 rounded-2xl border border-amber-400/20 bg-white/[0.03] px-8 py-5 backdrop-blur-sm"
          >
            <FiClock className="text-3xl text-amber-300" />
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl text-amber-200 tabular-nums">
                {hours}
              </span>
              <span className="text-sm uppercase tracking-widest text-slate-400">
                Continuous Hours
              </span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300/80 font-light"
          >
            No sleep. No shortcuts. Sixteen relentless hours to design, build,
            and defend an idea worth chasing. Pick your domain, gather your
            crew, and sail through the night.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-xl border border-amber-400/15 bg-white/[0.02] p-6 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]"
            >
              <h3 className="font-serif text-lg text-amber-200">
                {domain.label}
              </h3>
              <p className="mt-2 text-sm text-slate-400 font-light">
                {domain.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/assets/hackathon-rulebook.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 to-yellow-500 px-8 py-3 text-sm font-medium text-[#0a0e1a] shadow-[0_0_25px_rgba(251,191,36,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]"
          >
            <FiDownload />
            Download Rulebook
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonHub;