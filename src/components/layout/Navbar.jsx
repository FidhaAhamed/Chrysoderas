import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ParchmentButton } from "../common/ParchmentButton";

/* Compass rose SVG — left of logo title */
const CompassRose = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" stroke="rgba(200,134,10,0.7)" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="36" stroke="rgba(200,134,10,0.35)" strokeWidth="1" />
    {/* Cardinal diamonds */}
    <path d="M50 4 L54 46 L50 50 L46 46 Z" fill="#e8c96a" />
    <path d="M50 96 L54 54 L50 50 L46 54 Z" fill="rgba(200,134,10,0.5)" />
    <path d="M4 50 L46 46 L50 50 L46 54 Z" fill="rgba(200,134,10,0.5)" />
    <path d="M96 50 L54 46 L50 50 L54 54 Z" fill="#e8c96a" />
    {/* Inter-cardinal */}
    <path d="M50 50 L26 26 L50 38 Z" fill="rgba(200,134,10,0.35)" />
    <path d="M50 50 L74 26 L50 38 Z" fill="rgba(200,134,10,0.55)" />
    <path d="M50 50 L74 74 L50 62 Z" fill="rgba(200,134,10,0.35)" />
    <path d="M50 50 L26 74 L50 62 Z" fill="rgba(200,134,10,0.55)" />
    {/* N label */}
    <text x="46.5" y="21" fontSize="11" fill="#e8c96a" fontFamily="Cinzel,serif" fontWeight="700">N</text>
    <circle cx="50" cy="50" r="5" fill="#c8860a" />
  </svg>
);

/* Anchor icon for the Register button */
const AnchorIcon = ({ size = 14, color = "#140a02" }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 48 60" fill="none">
    <circle cx="24" cy="12" r="7" stroke={color} strokeWidth="2.8" fill="none" />
    <line x1="24" y1="19" x2="24" y2="52" stroke={color} strokeWidth="2.8" />
    <path d="M10 28 Q5 28 5 36 Q5 50 24 52 Q43 50 43 36 Q43 28 38 28" stroke={color} strokeWidth="2.8" fill="none" />
    <line x1="8" y1="28" x2="40" y2="28" stroke={color} strokeWidth="2.8" />
    <circle cx="24" cy="12" r="3.5" fill={color} />
  </svg>
);

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Lore", href: "#lore" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Battlegrounds", href: "#battlegrounds" },
  { label: "Treasure Hunt", href: "#treasure-hunt" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? "rgba(3,9,20,0.92)"
          : "linear-gradient(180deg, rgba(2,8,16,0.72) 0%, transparent 100%)",
        backdropFilter: isScrolled ? "blur(16px)" : undefined,
        borderBottom: isScrolled ? "1px solid rgba(200,134,10,0.22)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center h-18 px-6 lg:px-10"
        style={{ height: 68 }}>

        {/* ── Logo: compass rose + title ── */}
        <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
          <CompassRose size={28} />
          <span
            className="bg-gradient-to-r from-[#d8af4b] via-[#af8b33] to-[#866822] bg-clip-text text-transparent pb-1"
            style={{ fontFamily: "'Uncial Antiqua', cursive", fontSize: "1.25rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            ChrysoDeras&nbsp;'26
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-7 ml-10 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                className="relative text-[11px] uppercase tracking-[0.13em] transition-all duration-300"
                style={{ fontFamily: "'Cinzel', serif", color: "rgba(210,220,235,0.82)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#e8c96a"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(210,220,235,0.82)"; }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Register — scroll/parchment style ── */}
        <div className="hidden lg:block">
          <ParchmentButton href="#register" size="sm" icon={<AnchorIcon />}>
            Register
          </ParchmentButton>
        </div>

        {/* Mobile hamburger */}
        <button type="button" onClick={() => setIsOpen(p => !p)}
          className="lg:hidden ml-auto text-2xl"
          style={{ color: "rgba(200,134,10,0.85)" }}
          aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Full-Screen Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#020810]/95 backdrop-blur-xl lg:hidden"
            style={{ borderLeft: "1px solid rgba(200,134,10,0.25)" }}
          >
            {/* Close Button top right (recreated since the header is technically under or we can keep it here) */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl z-50 text-[#c8860a]"
            >
              <FiX />
            </button>

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-col items-center gap-8 px-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                >
                  <a href={link.href} onClick={() => setIsOpen(false)}
                    className="hover-target transition-colors duration-300 hover:text-[#e8c96a]"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "1.45rem", letterSpacing: "0.2em", color: "rgba(210,220,235,0.9)" }}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", delay: 0.5 } }
                }}
                className="mt-6"
                onClick={() => setIsOpen(false)}>
                <ParchmentButton href="#register" size="lg" icon={<AnchorIcon size={18} />}>
                  Register Now
                </ParchmentButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;