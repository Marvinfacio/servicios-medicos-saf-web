import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'
import { links, ui } from '../data.js'
import { WhatsAppIcon } from './Icons.jsx'

// Muestra la publicidad de un servicio a tamaño completo en un <dialog> nativo.
export default function Lightbox({ service, onClose }) {
  const { t } = useLang()
  const dialog = useRef(null)
  const panel = useRef(null)

  useEffect(() => {
    if (!service) return
    dialog.current.showModal()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.fromTo(
      panel.current,
      { opacity: 0, scale: reduce ? 1 : 0.96 },
      { opacity: 1, scale: 1, duration: 0.25, ease: 'power3.out' },
    )
  }, [service])

  if (!service) return null
  const title = t(service.title)

  return (
    <dialog
      ref={dialog}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
      className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-4 backdrop:bg-navy/75 backdrop:backdrop-blur-sm"
    >
      <div ref={panel} className="flex flex-col items-center gap-4">
        <img
          src={service.ad}
          alt={`${title}${t(ui.services.adNote) ? ` (${t(ui.services.adNote)})` : ''}`}
          width="1080"
          height="1350"
          className="h-auto max-h-[calc(100svh-9rem)] w-auto max-w-[min(92vw,540px)] rounded-2xl shadow-2xl"
        />
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={links.whatsappWith(t(ui.services.askText) + title)}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-teal-dark px-5 font-bold text-white transition-[transform,background-color] duration-150 select-none hover:bg-teal-darker focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan active:scale-[0.97]"
          >
            <WhatsAppIcon className="size-5 shrink-0" />
            {t(ui.services.ask)}
          </a>
          <button
            type="button"
            autoFocus
            onClick={() => dialog.current.close()}
            className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-white px-5 font-bold text-navy transition-transform duration-150 select-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan active:scale-[0.97]"
          >
            {t(ui.services.close)}
          </button>
        </div>
      </div>
    </dialog>
  )
}
