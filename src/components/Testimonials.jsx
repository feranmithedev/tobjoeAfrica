import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/portfolio'
import { useGsapReveal } from '../hooks/useGsapReveal'
import SectionDivider from './SectionDivider'

function Testimonials() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef, '.testimonial-card')

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#050505] pt-16 pb-18 sm:pt-20 sm:pb-22">
      <div className="section-shell">
        <div className="testimonial-card max-w-3xl">
          <p className="section-kicker mb-4">Testimonials</p>
          <h2 className="section-title">Trusted by clients who care about the story.</h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card cinema-card rounded-lg p-6" key={testimonial.name}>
              <Quote className="text-[#D4AF37]" size={34} />
              <div className="mt-7 flex gap-1 text-[#D4AF37]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star fill="currentColor" key={index} size={16} />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-white/78">"{testimonial.quote}"</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-white/48">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SectionDivider variant="soft" />
    </section>
  )
}

export default Testimonials
