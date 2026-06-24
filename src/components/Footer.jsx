import { Camera, Mail, Send } from "lucide-react";
import { navLinks } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a className="flex items-center gap-3" href="#home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/55 text-sm font-black text-[#D4AF37]">
              <img
                src="/tobjoeAfrica.png" className="h-full w-full rounded-full object-contain p-1"
                alt="Tobjoe Africa Logo"
              />
            </span>
            <span>
              <span className="block font-semibold uppercase tracking-[0.18em]">
                Tobjoe Africa
              </span>
              <span className="mt-1 block text-sm text-white/48">
                Capturing Stories. Creating Impact.
              </span>
            </span>
          </a>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/58">
          {navLinks.map((link) => (
            <a
              className="transition hover:text-[#D4AF37]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
            href="https://www.instagram.com/tobilobaogunkolaa"
            rel="noreferrer"
            target="_blank"
          >
            <Camera size={18} />
          </a>
          <a
            aria-label="TikTok"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
            href="https://tiktok.com/@tobjoeafrica1"
            rel="noreferrer"
            target="_blank"
          >
            <Send size={18} />
          </a>
          <a
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
            href="mailto:tobjoeafrica@gmail.com"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="section-shell mt-8 text-sm text-white/38">
        © {new Date().getFullYear()} Tobjoe Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

