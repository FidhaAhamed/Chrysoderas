import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { ParchmentButton } from "../common/ParchmentButton";
import { coordinators, socialLinks, venue } from "../../data/coordinators";

/* =========================================================
   FOOTER
========================================================= */

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Battlegrounds", href: "#battlegrounds" },
  { label: "Treasure Hunt", href: "#treasure-hunt" },
  { label: "Schedule", href: "#schedule" },
];

const Footer = () => (
  <footer
    className="relative w-full overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10"
    style={{
      background:
        "linear-gradient(180deg, rgba(4,13,26,0.3) 0%, rgba(3,11,24,0.5) 60%, rgba(2,8,16,0.7) 100%)",
      borderTop: "1px solid rgba(200,134,10,0.18)",
    }}
  >
    {/* =====================================================
        TOP WAVE
    ====================================================== */}

    <div
      className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden"
      style={{ height: 24 }}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,12 C200,0 400,22 600,12 C800,0 1000,22 1200,12 L1200,24 L0,24 Z"
          fill="rgba(26,74,107,0.2)"
        />

        <path
          d="M0,16 C200,4 400,24 600,16 C800,4 1000,24 1200,16"
          fill="none"
          stroke="rgba(200,134,10,0.3)"
          strokeWidth="1"
          strokeDasharray="8 5"
        />
      </svg>
    </div>

    {/* =====================================================
        ATMOSPHERIC GLOW
    ====================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        -bottom-40
        left-1/2
        h-96
        w-96
        -translate-x-1/2
        rounded-full
        blur-[150px]
      "
      style={{
        background: "rgba(26,74,107,0.18)",
      }}
    />

    {/* =====================================================
        CONTENT
    ====================================================== */}

    <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

      <div
        className="
          grid
          grid-cols-1
          gap-10
          sm:grid-cols-3
          sm:gap-12
        "
      >

        {/* =================================================
            BRAND
        ================================================= */}

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">

          <a
            href="#hero"
            className="inline-block"
          >
            <img
              src="/chrysoderas%20logo.png"
              alt="ChrysoDeras Logo"
              className="
                h-14
                w-auto
                object-contain
                drop-shadow-[0_0_10px_rgba(200,134,10,0.15)]
                sm:h-16
              "
            />
          </a>

          <p
            className="
              mt-3
              max-w-xs
              text-center
              text-sm
              font-light
              leading-relaxed
              italic
              sm:text-left
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.02rem",
              color: "rgba(168,196,216,0.75)",
            }}
          >
            Every voyage begins with a spark. Join the crew and chase the fleece.
          </p>

          <div className="mt-5">
            <ParchmentButton
              href={socialLinks.whatsapp}
              size="sm"
              icon={<FiChevronRight />}
            >
              Join the Community
            </ParchmentButton>
          </div>
        </div>

        {/* =================================================
            MOBILE: QUICK LINKS + CONTACT
            DESKTOP: NORMAL COLUMNS
        ================================================== */}

        <div className="col-span-1 grid grid-cols-2 gap-6 sm:contents">

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <h4
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "rgba(100,166,198,0.95)",
              }}
            >
              <img
                src="/anchor3.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain opacity-80"
              />

              <span>Quick Links</span>
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.07em]
                      transition-colors
                      duration-300
                      sm:text-xs
                    "
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "rgba(168,196,216,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e8c96a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(168,196,216,0.7)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <h4
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "rgba(100,166,198,0.95)",
              }}
            >
              <img
                src="/compass5.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain opacity-75"
              />

              <span>Contact</span>
            </h4>

            <ul className="mt-4 flex flex-col gap-3">
              {coordinators.map((person) => (
                <li key={person.id}>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.7rem",
                      lineHeight: 1.35,
                      color: "#c8d8e8",
                    }}
                  >
                    {person.name}
                  </p>

                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="
                      mt-1
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      transition-colors
                      duration-300
                      sm:text-xs
                    "
                    style={{
                      color: "rgba(200,134,10,0.85)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e8c96a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(200,134,10,0.85)";
                    }}
                  >
                    <FiPhone className="text-[10px]" />
                    {person.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* =====================================================
          VENUE MAP
      ====================================================== */}

      <div
        className="mt-12 sm:mt-16"
        style={{
          borderTop: "1px solid rgba(30,106,138,0.2)",
          paddingTop: "2.5rem",
        }}
      >

        <h4
          className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] sm:justify-start"
          style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(100,166,198,0.95)",
          }}
        >
          <FiMapPin
            className="text-sm"
            style={{ color: "rgba(200,134,10,0.85)" }}
          />
          <span>Venue</span>
        </h4>

        <p
          className="mt-3 text-center sm:text-left"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "#c8d8e8",
          }}
        >
          {venue.name}, {venue.locality}
        </p>

        <a
          href={venue.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block overflow-hidden"
          style={{
            border: "1px solid rgba(200,134,10,0.28)",
            borderRadius: "3px",
            boxShadow: "0 0 30px rgba(26,74,107,0.2)",
          }}
        >
          <iframe
            title="ChrysoDeras Venue Map"
            src={venue.mapEmbedUrl}
            width="100%"
            height="280"
            style={{
              border: 0,
              display: "block",
              filter: "grayscale(0.3) invert(0.92) contrast(0.9)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className="
          mt-10
          flex
          flex-col
          items-center
          gap-5
          pt-6
          sm:mt-16
          sm:flex-row
          sm:justify-between
          sm:pt-8
        "
        style={{
          borderTop: "1px solid rgba(30,106,138,0.2)",
        }}
      >

        {/* Copyright */}

        <div className="flex items-center gap-2.5 text-center">
          <img
            src="/wheel.png"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain opacity-55"
          />

          <span
            className="text-[9px] sm:text-xs"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.08em",
              color: "rgba(168,196,216,0.5)",
            }}
          >
            © 2026 ChrysoDeras. All rights reserved.
          </span>

          <img
            src="/wheel.png"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain opacity-55"
          />
        </div>

        {/* Socials */}

        <div
          className="flex items-center gap-6 text-lg"
          style={{
            color: "rgba(168,196,216,0.5)",
          }}
        >
          {[
            {
              href: socialLinks.instagram,
              Icon: FaInstagram,
              label: "Instagram",
            },
            {
              href: socialLinks.linkedin,
              Icon: FaLinkedin,
              label: "LinkedIn",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e8c96a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  "rgba(168,196,216,0.5)";
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;