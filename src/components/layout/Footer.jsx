import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { coordinators, socialLinks } from "../../data/coordinators";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Lore", href: "#lore" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Battlegrounds", href: "#battlegrounds" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050914] border-t border-amber-400/10 pt-20 pb-10">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <a
              href="#hero"
              className="font-serif text-xl tracking-wide bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
            >
              ChrysoDeras&nbsp;'26
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400 font-light">
              Every voyage begins with a spark. Join the crew and chase the
              fleece.
            </p>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-2.5 text-sm font-medium text-[#0a0e1a] transition-transform duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              Join the Community
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-300/80">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 font-light transition-colors duration-300 hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-300/80">
              Contact the Crew
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              {coordinators.map((person) => (
                <li key={person.id} className="text-sm">
                  <p className="text-slate-200/90">{person.name}</p>
                  <p className="text-xs text-slate-500">{person.role}</p>
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-amber-300/90 transition-colors duration-300 hover:text-amber-200"
                  >
                    <FiPhone className="text-xs" />
                    {person.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-amber-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; 2026 ChrysoDeras. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-lg text-slate-400">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-300 hover:text-amber-300"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-300 hover:text-amber-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;