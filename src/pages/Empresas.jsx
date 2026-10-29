import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLang } from '../i18n.jsx'
import { links, ui } from '../data.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { SafMark, WhatsAppIcon } from '../components/Icons.jsx'

// Página para empresas: por ahora solo "Próximamente" y un contacto por WhatsApp.
export default function Empresas() {
  const { t } = useLang()
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-anim="mark"] rect', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%', duration: 0.5, stagger: 0.06 })
          .from('[data-anim="hero"]', { opacity: 0, y: 16, duration: 0.6, stagger: 0.07 }, 0.15)
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="flex min-h-svh flex-col">
      <Header page="business" />
      <main className="hero-wash flex flex-1 items-center">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <SafMark className="mx-auto mb-8 size-20" />
          <p data-anim="hero" className="mb-3 text-sm font-semibold tracking-[0.08em] text-teal-dark uppercase">
            {t(ui.business.eyebrow)}
          </p>
          <h1 data-anim="hero" className="text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            {t(ui.business.title)}
          </h1>
          <p data-anim="hero" className="mx-auto mt-4 inline-block rounded-full bg-magenta px-4 py-1.5 text-sm font-bold tracking-wide text-white uppercase">
            {t(ui.business.soon)}
          </p>
          <p data-anim="hero" className="mx-auto mt-6 max-w-[52ch] text-lg text-muted">
            {t(ui.business.text)}
          </p>
          <div data-anim="hero" className="mt-8 flex flex-col items-center gap-4">
            <a
              href={links.whatsappWith(t(ui.business.ctaText))}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-teal-dark px-6 font-bold text-white shadow-lg shadow-teal-dark/20 transition-[transform,background-color] duration-150 select-none hover:bg-teal-darker focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan active:scale-[0.97]"
            >
              <WhatsAppIcon className="size-5.5 shrink-0" />
              {t(ui.business.cta)}
            </a>
            <a href={links.home} className="rounded font-bold text-teal-dark hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan">
              {t(ui.business.back)}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
