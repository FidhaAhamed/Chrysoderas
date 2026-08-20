import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ParchmentButton } from "../common/ParchmentButton";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Battlegrounds", href: "#battlegrounds" },
  { label: "Treasure Hunt", href: "#treasure-hunt" },
  { label: "Schedule", href: "#schedule" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
  background: isScrolled
    ? "rgba(3,9,20,0.92)"
    : "linear-gradient(180deg, rgba(2,8,16,0.72) 0%, transparent 100%)",

  backdropFilter: isScrolled ? "blur(16px)" : undefined,

  borderBottom: "none",
}}
      >
        <nav
          className="flex w-full items-center px-4 sm:px-6 lg:px-8"
          style={{ height: 78 }}
        >
          {/* =================================================
              ISTE LOGO
          ================================================= */}

          <a
            href="#hero"
            className="flex flex-shrink-0 items-center"
          >
            <img
              src="/Iste%20logo.png"
              alt="ISTE Logo"
              className="h-[4.2rem] sm:h-[4.2rem] w-auto object-contain"
            />
          </a>

          {/* =================================================
              MOBILE CHRYSODERAS LOGO
          ================================================= */}

          <div className="flex flex-1 justify-center lg:hidden">
            <a href="#hero">
              <img
                src="/chrysoderas%20logo.png"
                alt="ChrysoDeras Logo"
                className="
                  h-[2.5rem]
                  w-auto
                  object-contain
                  drop-shadow-[0_0_10px_rgba(200,134,10,0.15)]
                "
              />
            </a>
          </div>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">

            {/* ChrysoDeras Logo */}

            <a
              href="#hero"
              className="mr-6 flex-shrink-0"
            >
              <img
                src="/chrysoderas%20logo.png"
                alt="ChrysoDeras Logo"
                className="
                  h-[3.25rem]
                  w-auto
                  object-contain
                  drop-shadow-[0_0_10px_rgba(200,134,10,0.15)]
                "
              />
            </a>

            {/* Navigation */}

            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      relative
                      flex-shrink-0
                      text-[11px]
                      uppercase
                      tracking-[0.13em]
                      transition-all
                      duration-300
                    "
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "rgba(210,220,235,0.82)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e8c96a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(210,220,235,0.82)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Register */}

            <div className="ml-8">
              <ParchmentButton
                href="#register"
                size="sm"
                icon={
                  <img
                    src="/anchor3.png"
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                }
              >
                Register
              </ParchmentButton>
            </div>
          </div>

          {/* =================================================
              BALANCE SPACER
          ================================================= */}

          <div className="hidden lg:block w-[100px]" />

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              lg:hidden
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              text-2xl
              transition-all
              duration-300
            "
            style={{
              color: "rgba(200,134,10,0.85)",
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              flex-col
              justify-center
              bg-[rgba(2,8,16,0.65)]
              backdrop-blur-md
              lg:hidden
            "
            style={{
              borderLeft:
                "1px solid rgba(200,134,10,0.25)",
            }}
          >

            {/* =================================================
                MOBILE MENU HEADER
            ================================================= */}

            <div className="absolute top-0 left-0 right-0 flex h-[78px] items-center justify-between px-5">

              <img
                src="/chrysoderas%20logo.png"
                alt="ChrysoDeras Logo"
                className="
                  h-[2.5rem]
                  w-auto
                  object-contain
                  opacity-90
                "
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  text-3xl
                  transition-colors
                  duration-300
                "
                style={{
                  color: "#c8860a",
                }}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },

                hidden: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="
                flex
                flex-col
                items-center
                gap-8
                px-6
              "
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      hover-target
                      transition-colors
                      duration-300
                      hover:text-[#e8c96a]
                    "
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.35rem",
                      letterSpacing: "0.16em",
                      color: "rgba(210,220,235,0.9)",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              {/* =================================================
                  MOBILE REGISTER
              ================================================= */}

              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.8,
                  },

                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      delay: 0.5,
                    },
                  },
                }}
                className="mt-6"
                onClick={() => setIsOpen(false)}
              >
                <ParchmentButton
                  href="#register"
                  size="lg"
                  icon={
                    <img
                      src="/anchor3.png"
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  }
                >
                  Register Now
                </ParchmentButton>
              </motion.li>
            </motion.ul>

            {/* =================================================
                SUBTLE COMPASS DECORATION
            ================================================= */}

            <img
              src="/compass5.png"
              alt=""
              className="
                pointer-events-none
                absolute
                bottom-8
                left-1/2
                h-20
                w-20
                -translate-x-1/2
                object-contain
                opacity-[0.08]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;