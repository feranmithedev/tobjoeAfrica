import { services } from "../data/portfolio";
import SectionDivider from "./SectionDivider";

function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#050505] pt-14 pb-14 sm:pt-16 sm:pb-16"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker mb-4">Services</p>
          <h2 className="section-title">
            Production support from first idea to final frame.
          </h2>
          <p className="section-copy mt-6">
            Choose a focused service or bring Tobjoe Africa into the complete
            creative process.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="group cinema-card min-h-72 rounded-lg p-6 opacity-100 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50"
                key={service.title}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition group-hover:bg-[#D4AF37]">
                    <Icon size={23} />
                  </div>
                  <span className="h-px w-16 bg-linear-to-r from-[#D4AF37] to-transparent" />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/62">
                  {service.description}
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

export default Services;
