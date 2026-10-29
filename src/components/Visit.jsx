import { useLang } from '../i18n.jsx'
import { addressLines, links, schedule, ui } from '../data.js'

export default function Visit() {
  const { t } = useLang()

  return (
    <section id="horario" aria-labelledby="horario-titulo" className="border-t border-line bg-surface-alt py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
        <div data-anim="reveal">
          <h2 id="horario-titulo" className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">
            {t(ui.visit.hoursTitle)}
          </h2>
          <dl>
            {schedule.map((day) => (
              <div key={day.days.es} className="flex justify-between gap-4 border-b border-line py-3">
                <dt className="font-semibold">{t(day.days)}</dt>
                <dd className="text-right text-muted tabular-nums">
                  {day.closed
                    ? t(ui.visit.closed)
                    : `${day.shifts[0].time.split(' – ')[0]} – ${day.shifts.at(-1).time.split(' – ')[1]} h`}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-anim="reveal">
          <h2 className="mb-6 text-[1.6rem] font-bold tracking-[-0.02em]">{t(ui.visit.locationTitle)}</h2>
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
            {t(ui.visit.openMaps)}
          </a>
        </div>
      </div>
    </section>
  )
}
