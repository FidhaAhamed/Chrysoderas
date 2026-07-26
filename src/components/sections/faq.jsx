import { motion } from "framer-motion";
import { faqs } from "../../data/faq";
import Accordion from "../common/Accordion";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[#050914] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/80"
          >
            Before You Sail
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;