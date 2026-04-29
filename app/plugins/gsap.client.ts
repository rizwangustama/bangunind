import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.defaults({ ease: 'power3.out', duration: 0.9 })

    // ── ScrollTrigger refresh AFTER page fully mounts & transitions end ──
    // 'page:finish' fires after the incoming page component has mounted
    // and Nuxt's page transition has completed — the safest timing.
    nuxtApp.hook('page:finish', () => {
      // Small tick so Vue has flushed DOM updates
      nextTick(() => {
        ScrollTrigger.refresh(true)   // force = recalculate all positions
      })
    })
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})
