import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, CalendarDays, Play } from 'lucide-react'
import { studioHighlights } from '../data/portfolio'
import SectionDivider from './SectionDivider'

function Hero({ introComplete }) {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!introComplete) {
      return undefined
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('.hero-reveal', { y: 34, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from('.floating-frame', { opacity: 0, y: 24, rotate: -2, duration: 0.9, stagger: 0.1 }, '-=0.5')
        .to('.float-slow', {
          y: -16,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.4,
        })
    }, heroRef)

    return () => context.revert()
  }, [introComplete])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-14 pt-28"
    >
      <div className="absolute inset-0 -z-20 bg-black" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(0,0,0,0.95),rgba(0,0,0,0.62)_42%,rgba(177,18,38,0.28)),radial-gradient(circle_at_74%_36%,rgba(212,175,55,0.22),transparent_24rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-t from-black to-transparent" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1fr_0.88fr]">
        <div className="max-w-4xl">
          <p className="hero-reveal section-kicker mb-6">Capturing Stories. Creating Impact.</p>
          <h1 className="hero-reveal text-[clamp(3.5rem,9vw,8.8rem)] font-semibold leading-[0.84] text-white">
            Visual Stories That Inspire
          </h1>
          <p className="hero-reveal mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            We help brands, ministries, businesses, and individuals tell powerful stories through filmmaking,
            photography, videography, and creative editing.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button" href="#projects">
              View Projects <Play size={18} fill="currentColor" />
            </a>
            <a className="secondary-button" href="#contact">
              Book a Session <CalendarDays size={18} />
            </a>
          </div>

          <div className="hero-reveal mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            {studioHighlights.map((item) => (
              <div className="border-l border-[#D4AF37]/45 pl-4" key={item.value}>
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-5 text-white/52">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-120 lg:min-h-120">
          <div className="floating-frame float-slow absolute right-0 top-4 h-90 w-[72%] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#181818,#050505)] shadow-2xl shadow-black/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.26),transparent_16rem)]" />
            <div className="absolute left-6 top-6 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#B11226]" />
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Director Monitor</p>
              <p className="mt-3 text-3xl font-semibold leading-tight">Faith. Brand. Culture. Memory.</p>
            </div>
          </div>

          <div className="floating-frame float-slow absolute bottom-10 left-0 h-75 w-[64%] overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-2xl shadow-black/55">
            <div className="grid h-full grid-cols-5 gap-1 p-2 opacity-80">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  className="rounded-sm bg-linear-to-br from-white/18 via-[#D4AF37]/20 to-[#B11226]/25"
                  key={index}
                />
              ))}
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-full border border-white/15 bg-black/70 px-4 py-3 text-sm text-white/72 backdrop-blur">
              24fps cinema grade delivery
            </div>
          </div>

          <div className="floating-frame absolute right-8 top-[52%] grid h-20 w-20 place-items-center rounded-full border border-[#D4AF37]/55 bg-[#D4AF37]/12 text-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.22)]">
            <ArrowRight size={30} />
          </div>
        </div>
      </div>
      <SectionDivider variant="gold" />
    </section>
  )
}

export default Hero
