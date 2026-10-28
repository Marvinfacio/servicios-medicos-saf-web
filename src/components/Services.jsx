import { services } from '../data.js'

export default function Services() {
  return (
    <section aria-labelledby="servicios-titulo" className="border-t border-line py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 id="servicios-titulo" className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">
          Servicios
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              data-anim="reveal"
              className="relative overflow-hidden rounded-2xl border border-line bg-white p-6"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${s.accent}`} />
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              {s.text && <p className="text-[0.95rem] text-muted">{s.text}</p>}
              {s.tags && (
                <ul className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-surface-alt px-2.5 py-1 text-sm text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <p data-anim="reveal" className="mt-5 text-muted">
          …y más procedimientos. Pregunta por WhatsApp.
        </p>
      </div>
    </section>
  )
}
