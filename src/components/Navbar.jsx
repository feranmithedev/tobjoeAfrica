import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(navRef.current, {
        backgroundColor: scrolled ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.18)",
        borderColor: scrolled
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0.06)",
        backdropFilter: scrolled ? "blur(22px)" : "blur(12px)",
        duration: 0.28,
        ease: "power2.out",
      });
    }, navRef);

    return () => context.revert();
  }, [scrolled]);

  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (menuOpen) {
        gsap.fromTo(
          menu,
          { autoAlpha: 0, y: -14, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.28, ease: "power3.out" },
        );
        gsap.fromTo(
          ".mobile-link",
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.055,
            duration: 0.28,
            ease: "power2.out",
          },
        );
      } else {
        gsap.to(menu, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }, menu);

    return () => context.revert();
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      ref={navRef}
      className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-24px))] -translate-x-1/2 rounded-full border border-white/10 px-4 py-3 text-white shadow-2xl shadow-black/20"
    >
      <nav className="flex items-center justify-between gap-5">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Tobjoe Africa home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-sm font-black text-[#D4AF37]">
            <img src="/tobjoeAfrica.png" className="h-full w-full rounded-full object-contain p-1" alt="Tobjoe Africa Logo" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Tobjoe Africa
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/72 lg:flex">
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

        <a
          className="primary-button hidden min-h-10 px-4 py-2 text-sm lg:inline-flex"
          href="#contact"
        >
          Book Now
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobile-menu"
        className="invisible absolute inset-x-0 top-[calc(100%+10px)] rounded-[28px] border border-white/10 bg-black/95 p-4 opacity-0 shadow-2xl shadow-black/50 lg:hidden"
      >
        <div className="grid gap-2">
          {navLinks.map((link) => (
            <a
              className="mobile-link rounded-full px-4 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/8 hover:text-[#D4AF37]"
              href={link.href}
              key={link.href}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

