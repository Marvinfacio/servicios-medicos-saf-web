import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { services, ui } from '../data.js'
import Lightbox from './Lightbox.jsx'

export default function Services() {
  const { t } = useLang()
  const [open, setOpen] = useState(null)

  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="border-t border-line py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <h2 id="servicios-titulo" className="text-[clamp(1.6rem,4vw,2.1rem)] font-bold tracking-[-0.02em]">
          {t(ui.services.title)}
        </h2>
        <p className="mt-2 mb-8 text-muted">{t(ui.services.subtitle)}</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              data-anim="reveal"
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(s)}
                aria-label={`${t(ui.services.viewAd)}: ${t(s.title)}`}
                className="relative block cursor-zoom-in overflow-hidden bg-surface-alt focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-cyan"
              >
                <img
                  src={t(s.ad).src}
                  srcSet={t(s.ad).srcSet}
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 92vw"
                  alt=""
                  width="1080"
                  height="1350"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 bottom-3 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-bold text-white">
                  {t(ui.services.viewAd)}
                </span>
              </button>

              <div className="relative flex-1 p-5">
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${s.accent}`} />
                <h3 className="mb-2 text-lg leading-snug font-bold">{t(s.title)}</h3>
                <p className="text-[0.95rem] text-muted">{t(s.text)}</p>
                {s.tags && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {t(s.tags).map((tag) => (
                      <li key={tag} className="rounded-full bg-surface-alt px-2.5 py-1 text-[0.8rem] text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <p data-anim="reveal" className="mt-6 text-muted">
          {t(ui.services.more)}
        </p>
      </div>

      <Lightbox service={open} onClose={() => setOpen(null)} />
    </section>
  )
}
