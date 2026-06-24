import { useRef } from "react";
import { bookingSteps, processIcons } from "../data/portfolio";
import { useGsapReveal } from "../hooks/useGsapReveal";
import SectionDivider from "./SectionDivider";

function BookingProcess() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, ".booking-card", {
    start: "top 72%",
    stagger: 0.08,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black pt-16 pb-18 sm:pt-20 sm:pb-22"
    >
      <div className="section-shell">
        <div className="booking-card max-w-3xl">
          <p className="section-kicker mb-4">Booking Process</p>
          <h2 className="section-title">
            Clear steps from inquiry to confirmed production.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {bookingSteps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <article
                className="booking-card cinema-card rounded-lg p-5"
                key={step.title}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D4AF37]">
                    0{index + 1}
                  </span>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/8 text-white">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
      <SectionDivider variant="red" />
    </section>
  );
}

export default BookingProcess;
