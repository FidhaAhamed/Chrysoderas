import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { ParchmentButton } from "../common/ParchmentButton";
import { coordinators, socialLinks } from "../../data/coordinators";

/* Ship wheel SVG */
const WheelIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="42" stroke="rgba(200,134,10,0.8)" strokeWidth="2" />
    <circle cx="50" cy="50" r="13" stroke="rgba(200,134,10,0.8)" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="50" r="5" fill="rgba(200,134,10,0.9)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const r = Math.PI * a / 180;
      return <line key={a} x1={50 + 13 * Math.cos(r)} y1={50 + 13 * Math.sin(r)} x2={50 + 42 * Math.cos(r)} y2={50 + 42 * Math.sin(r)} stroke="rgba(200,134,10,0.75)" strokeWidth="1.8" />;
    })}
  </svg>
);

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Lore", href: "#lore" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Battlegrounds", href: "#battlegrounds" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => (
  <footer
    className="relative w-full overflow-hidden pt-20 pb-10"
    style={{
      background: "linear-gradient(180deg, rgba(4,13,26,0.3) 0%, rgba(3,11,24,0.5) 60%, rgba(2,8,16,0.7) 100%)",
      borderTop: "1px solid rgba(200,134,10,0.18)",
    }}
  >
    {/* Wave top */}
    <div className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden" style={{ height: 24 }}>
      <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,12 C200,0 400,22 600,12 C800,0 1000,22 1200,12 L1200,24 L0,24 Z"
          fill="rgba(26,74,107,0.2)" />
        <path d="M0,16 C200,4 400,24 600,16 C800,4 1000,24 1200,16"
          fill="none" stroke="rgba(200,134,10,0.3)" strokeWidth="1" strokeDasharray="8 5" />
      </svg>
    </div>

    <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[150px]"
      style={{ background: "rgba(26,74,107,0.18)" }} />

    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="#hero"
            className="flex items-center gap-2.5 bg-gradient-to-r from-[#f5e6b8] via-[#e8c96a] to-[#c8860a] bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "1rem" }}>
            <WheelIcon size={20} />
            ChrysoDeras&nbsp;'26
          </a>
          <p className="mt-4 max-w-xs text-sm font-light leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "rgba(168,196,216,0.75)" }}>
            Every voyage begins with a spark. Join the crew and chase the fleece.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <ParchmentButton href={socialLinks.whatsapp} size="sm" icon={<FiChevronRight />}>
              Join the Community
            </ParchmentButton>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}>
            ⚓ Quick Links
          </h4>
          <ul className="mt-5 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="text-xs uppercase tracking-[0.08em] transition-colors duration-300"
                  style={{ fontFamily: "'Cinzel',serif", color: "rgba(168,196,216,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c96a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(168,196,216,0.7)")}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Cinzel',serif", color: "rgba(30,106,138,0.9)" }}>
            ⚔ Contact the Crew
          </h4>
          <ul className="mt-5 flex flex-col gap-4">
            {coordinators.map((person) => (
              <li key={person.id}>
                <p className="text-sm" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.78rem", color: "#c8d8e8" }}>
                  {person.name}
                </p>
                <p className="text-xs" style={{ color: "rgba(30,106,138,0.8)" }}>{person.role}</p>
                <a href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-flex items-center gap-1.5 transition-colors duration-300"
                  style={{ color: "rgba(200,134,10,0.85)", fontSize: "0.82rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c96a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,134,10,0.85)")}>
                  <FiPhone className="text-xs" />
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row"
        style={{ borderTop: "1px solid rgba(30,106,138,0.2)" }}>
        <div className="flex items-center gap-3">
          <WheelIcon size={14} />
          <span className="text-xs" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(168,196,216,0.5)" }}>
            © 2026 ChrysoDeras. All rights reserved.
          </span>
          <WheelIcon size={14} />
        </div>
        <div className="flex items-center gap-5 text-lg" style={{ color: "rgba(168,196,216,0.5)" }}>
          {[
            { href: socialLinks.instagram, Icon: FaInstagram, label: "Instagram" },
            { href: socialLinks.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-colors duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c96a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(168,196,216,0.5)")}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;