import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Animaciones de las páginas del blog: entrada del encabezado y aparición al bajar (como en App.jsx)
export function usePageMotion(root) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('[data-anim]', { opacity: 0, duration: 0.3, ease: 'none' })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-anim="hero"]', { opacity: 0, y: 16, duration: 0.6, stagger: 0.07, ease: 'power3.out' })

        gsap.utils.toArray('[data-anim="reveal"]').forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })
      })
    },
    { scope: root },
  )
}
