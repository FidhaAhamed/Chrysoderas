import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050914]/80 backdrop-blur-md border-b border-amber-400/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <a
          href="#hero"
          className="font-serif text-xl md:text-2xl tracking-wide bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
        >
          ChrysoDeras&nbsp;'26
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm tracking-wide text-slate-200/80 hover:text-amber-300 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber-300 to-yellow-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#register"
          className="hidden lg:inline-flex items-center rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-2 text-sm font-medium text-[#0a0e1a] shadow-[0_0_20px_rgba(251,191,36,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
        >
          Register
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden text-2xl text-amber-300"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#050914]/95 backdrop-blur-md border-b border-amber-400/10"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-base tracking-wide text-slate-200/85 hover:text-amber-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#register"
                  onClick={closeMenu}
                  className="inline-flex items-center rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 to-yellow-500 px-7 py-2.5 text-sm font-medium text-[#0a0e1a]"
                >
                  Register
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;