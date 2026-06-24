import { useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { contactLinks } from "../data/portfolio";
import { useGsapReveal } from "../hooks/useGsapReveal";
import SectionDivider from "./SectionDivider";

function Contact() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, ".contact-reveal");

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#050505] pt-16 pb-18 sm:pt-20 sm:pb-22"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.13),transparent_26rem),radial-gradient(circle_at_82%_38%,rgba(177,18,38,0.16),transparent_24rem)]" />
      <div className="section-shell relative">
        <div className="contact-reveal grid gap-10 rounded-lg border border-white/10 bg-black/55 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
          <div>
            <p className="section-kicker mb-4">Contact</p>
            <h2 className="section-title">
              Ready to turn your moment into a visual story?
            </h2>
            <p className="section-copy mt-6">
              Share the project, the date, the audience, and the feeling you
              want people to remember. Tobjoe Africa will help shape the next
              step with clarity.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button" href="https://wa.me/2349130460914">
                Book on WhatsApp <ArrowRight size={18} />
              </a>
              <a
                className="secondary-button"
                href="mailto:tobjoeafrica@gmail.com"
              >
                Send Email <CalendarDays size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:bg-[#D4AF37]">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white/50">
                      {link.label}
                    </span>
                    <span className="mt-1 block font-semibold text-white">
                      {link.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <SectionDivider variant="gold" />
    </section>
  );
}

export default Contact;
