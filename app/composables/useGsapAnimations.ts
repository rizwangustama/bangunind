// composables/useGsapAnimations.ts
// Central composable for all GSAP animations – import.meta.client safe

import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Animate a hero timeline: badge → title → desc → btns → image */
export function useHeroAnimation() {
  onMounted(() => {
    if (!import.meta.client) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      tl.fromTo(
        '.hero-badge',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-title',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-desc',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-btns',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-image',
          { x: 60, opacity: 0, scale: 1.05 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
          '-=0.9'
        )
    })

    onUnmounted(() => ctx.revert())
  })
}

/** ScrollTrigger reveal for any selector – call multiple times as needed */
export function useScrollReveal(
  selector: string,
  opts: {
    stagger?: number
    y?: number
    x?: number
    delay?: number
    trigger?: string
    start?: string
  } = {}
) {
  onMounted(() => {
    if (!import.meta.client) return

    const {
      stagger = 0,
      y = 50,
      x = 0,
      delay = 0,
      start = 'top 88%',
    } = opts

    const ctx = gsap.context(() => {
      const els = document.querySelectorAll(selector)
      if (!els.length) return

      gsap.fromTo(
        els,
        { y, x, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger,
          delay,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: opts.trigger || (els[0] as HTMLElement),
            start,
            toggleActions: 'play none none none',
          },
        }
      )
    })

    onUnmounted(() => ctx.revert())
  })
}

/** Simple fade-in counter for stat numbers */
export function useCountUp(selector: string) {
  onMounted(() => {
    if (!import.meta.client) return

    const els = document.querySelectorAll<HTMLElement>(selector)
    els.forEach((el) => {
      const raw = el.textContent?.trim() || ''
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''))
      const suffix = raw.replace(/[0-9.]/g, '')
      if (isNaN(num)) return

      gsap.fromTo(
        { val: 0 },
        { val: num },
        {
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate() {
            el.textContent = Math.floor((this as any)._targets[0].val) + suffix
          },
        }
      )
    })
  })
}
