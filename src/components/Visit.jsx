import { addressLines, hours, links } from '../data.js'

export default function Visit() {
  return (
    <section aria-labelledby="horario-titulo" className="border-t border-line bg-surface-alt py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
        <div data-anim="reveal">
          <h2 id="horario-titulo" className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">
            Horario
          </h2>
          <dl>
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-line py-3">
                <dt className="font-semibold">{h.days}</dt>
                <dd className="text-muted tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-anim="reveal">
          <h2 className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">Ubicación</h2>
          <address className="mb-4 text-muted not-italic">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={links.maps}
            target="_blank"
            rel="noopener"
            className="rounded font-bold text-teal-dark hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan"
          >
            Abrir en Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
