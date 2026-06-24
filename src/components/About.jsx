import { useRef } from 'react'
import { Aperture, BadgeCheck, Focus } from 'lucide-react'
import { useGsapReveal } from '../hooks/useGsapReveal'
import SectionDivider from './SectionDivider'

const values = [
  {
    title: 'Story First',
    copy: 'Every frame is built around message, emotion, and the audience you want to move.',
    icon: Focus,
  },
  {
    title: 'Cinematic Discipline',
    copy: 'Lighting, movement, pacing, color, and sound are treated as one complete experience.',
    icon: Aperture,
  },
  {
    title: 'Premium Delivery',
    copy: 'Clean communication, reliable production planning, and polished files ready for every platform.',
    icon: BadgeCheck,
  },
]

function About() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-black pt-16 pb-18 sm:pt-20 sm:pb-22">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <p className="reveal-item section-kicker mb-4">About the Brand</p>
          <h2 className="reveal-item section-title">A visual studio for stories with weight.</h2>
        </div>
        <div className="reveal-item">
          <p className="section-copy">
            Tobjoe Africa creates cinematic films, sharp photography, and emotionally intelligent edits for people
            and organizations that care about excellence. From ministry events to business campaigns and personal
            milestones, the work is shaped to feel honest, premium, and memorable.
          </p>
        </div>
      </div>

      <div className="section-shell mt-10 grid gap-4 md:grid-cols-3">
        {values.map((item) => {
          const Icon = item.icon

          return (
            <article className="reveal-item cinema-card rounded-lg p-6" key={item.title}>
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 text-[#D4AF37]">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{item.copy}</p>
            </article>
          )
        })}
      </div>
      <SectionDivider variant="soft" />
    </section>
  )
}

export default About
