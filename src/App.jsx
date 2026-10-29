import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/Profile.jsx'
import Services from './components/Services.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Con "reducir movimiento" activado, solo hay un fundido corto sin desplazamiento.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('[data-anim]:not([data-anim="shapes"])', { opacity: 0, duration: 0.3, ease: 'none' })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

        intro
          // Las piezas de la cruz se juntan detrás de la foto
          .from('[data-anim="shape"]', {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.07,
          })
          // La foto se descubre de abajo hacia arriba
          .from(
            '[data-anim="photo"]',
            { clipPath: 'inset(100% 0% 0% 0% round 2rem)', duration: 0.8, ease: 'power3.inOut' },
            0.1,
          )
          .from('[data-anim="hero"]', { opacity: 0, y: 16, duration: 0.6, stagger: 0.07 }, 0.25)
          .from(
            '[data-anim="badge"]',
            { opacity: 0, scale: 0.9, y: 8, duration: 0.45, stagger: 0.1, ease: 'back.out(1.6)' },
            0.75,
          )
          .from('[data-anim="mark"] rect', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%', duration: 0.5, stagger: 0.06 }, 0)

        // Paralaje muy sutil de las piezas al bajar
        gsap.to('[data-anim="shapes"]', {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true },
        })

        // Las tarjetas y secciones aparecen al entrar en pantalla
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

  return (
    <div ref={root}>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
