import { motion } from "framer-motion";
import { faqs } from "../../data/faq";
import Accordion from "../common/Accordion";

const RopeDivider = ({ children = "⚓" }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 rope-line" />
    <span className="text-base text-amber-500 flex-shrink-0">{children}</span>
    <div className="flex-1 rope-line" />
  </div>
);

const Sparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 L17.5 14.5 L30 16 L17.5 17.5 L16 30 L14.5 17.5 L2 16 L14.5 14.5 Z"
      fill="rgba(200,134,10,0.85)" />
  </svg>
);

const FAQ = () => (
  <section id="faq"
    className="relative w-full overflow-hidden py-28 sm:py-36"
    style={{
      background:
        "radial-gradient(ellipse 65% 50% at 50% 100%, rgba(26,74,107,0.25) 0%, transparent 60%)",
    }}
  >
    <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[140px]"
      style={{ background: "rgba(26,74,107,0.2)" }} />

    <div className="relative z-10 mx-auto max-w-2xl px-6">
      <div className="flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em]"
          style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}
        >
          <Sparkle size={10} /> Before You Sail <Sparkle size={10} />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#c49c36]"
          style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3rem)", lineHeight: 1.3 }}
        >
          FAQs
        </motion.h2>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 w-56">
          <RopeDivider>〰</RopeDivider>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10">
        <Accordion items={faqs} />
      </motion.div>

      <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10">
        <RopeDivider>⚓</RopeDivider>
      </motion.div>
    </div>
  </section>
);

export default FAQ;