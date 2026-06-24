import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { filters, projects } from "../data/portfolio";
import { useGsapReveal } from "../hooks/useGsapReveal";
import SectionDivider from "./SectionDivider";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  useGsapReveal(sectionRef, ".project-reveal");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
        },
      );
    }, grid);

    return () => context.revert();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-black pt-14 pb-16 sm:pt-16 sm:pb-20"
    >
      <div className="section-shell">
        <div className="project-reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">Portfolio</p>
            <h2 className="section-title">
              Selected work with a cinematic pulse.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-white/12 bg-white/5 text-white/68 hover:border-white/32 hover:text-white"
                }`}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <article
              className="project-card group relative min-h-90 overflow-hidden rounded-lg border border-white/10 bg-[#080808]"
              key={project.title}
            >
              <div
                className="absolute inset-0 transition duration-500 group-hover:scale-105"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(145deg, rgba(212,175,55,0.24), rgba(0,0,0,0.24) 42%, rgba(177,18,38,0.32)), radial-gradient(circle at 70% 18%, rgba(255,255,255,0.22), transparent 12rem)"
                      : "linear-gradient(145deg, rgba(177,18,38,0.34), rgba(0,0,0,0.35) 46%, rgba(212,175,55,0.18)), radial-gradient(circle at 28% 22%, rgba(255,255,255,0.2), transparent 12rem)",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/36 to-transparent" />
              <div className="relative flex h-full min-h-90 flex-col justify-end p-6">
                <div className="mb-auto flex items-center justify-between">
                  <span className="rounded-full border border-white/14 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] backdrop-blur">
                    {project.category}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                  {project.format}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-white/64">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SectionDivider variant="gold" />
    </section>
  );
}

export default Projects;
