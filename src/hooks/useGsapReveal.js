import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal(scopeRef, selector = '.reveal-item', options = {}) {
  useEffect(() => {
    const scope = scopeRef.current

    if (!scope) {
      return undefined
    }

    const context = gsap.context(() => {
      gsap.from(selector, {
        y: options.y ?? 42,
        opacity: 0,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? 'power3.out',
        stagger: options.stagger ?? 0.12,
        scrollTrigger: {
          trigger: scope,
          start: options.start ?? 'top 78%',
          once: true,
        },
      })
    }, scope)

    return () => context.revert()
  }, [scopeRef, selector, options.y, options.duration, options.ease, options.stagger, options.start])
}
