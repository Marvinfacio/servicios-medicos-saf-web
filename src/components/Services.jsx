import { useLang } from '../i18n.jsx'
import { services, ui } from '../data.js'

export default function Services() {
  const { t } = useLang()

  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="border-t border-line py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 id="servicios-titulo" className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">
          {t(ui.services.title)}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              data-anim="reveal"
              className="relative overflow-hidden rounded-2xl border border-line bg-white p-6"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${s.accent}`} />
              <h3 className="mb-2 text-lg font-bold">{t(s.title)}</h3>
              <p className="text-[0.95rem] text-muted">{t(s.text)}</p>
              {s.tags && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {t(s.tags).map((tag) => (
                    <li key={tag} className="rounded-full bg-surface-alt px-2.5 py-1 text-sm text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <p data-anim="reveal" className="mt-5 text-muted">
          {t(ui.services.more)}
        </p>
      </div>
    </section>
  )
}
