import { useLang } from '../i18n.jsx'
import { addressLines, contact, doctor, links, schedule, ui } from '../data.js'
import { PhoneIcon, PinIcon } from './Icons.jsx'

const focus = 'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan'

export default function Visit() {
  const { t } = useLang()

  return (
    <section id="horario" aria-labelledby="horario-titulo" className="border-t border-line bg-surface-alt py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[1.3fr_1fr]">
        <div data-anim="reveal">
          <h2 id="horario-titulo" className="mb-6 text-[clamp(1.6rem,4vw,2.1rem)] font-bold tracking-[-0.02em]">
            {t(ui.visit.hoursTitle)}
          </h2>

          <div className="space-y-4">
            {schedule.map((day) => (
              <div key={day.days.es} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="mb-3 flex items-center justify-between font-bold">
                  {t(day.days)}
                  {day.closed && <span className="font-medium text-muted">{t(ui.visit.closed)}</span>}
                </h3>
                {day.shifts && (
                  <ul className="divide-y divide-line">
                    {day.shifts.map((s) => (
                      <li key={s.time} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="w-32 shrink-0 font-semibold text-teal-dark tabular-nums">{s.time} h</span>
                        <span>
                          <span className={s.doctor.name === doctor.name ? 'font-bold' : 'font-medium'}>{s.doctor.name}</span>
                          <span className="block text-sm text-muted">
                            {s.doctor.cedula} · {doctor.university}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div data-anim="reveal">
          <h2 className="mb-6 text-[clamp(1.6rem,4vw,2.1rem)] font-bold tracking-[-0.02em]">{t(ui.visit.locationTitle)}</h2>
          <address className="mb-5 text-muted not-italic">
            {addressLines.map((line, i) => (
              <span key={line} className={`block ${i === 0 ? 'font-bold text-navy' : ''}`}>
                {line}
              </span>
            ))}
          </address>

          <div className="flex flex-col gap-3">
            <a
              href={links.maps}
              target="_blank"
              rel="noopener"
              className={`inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-line bg-white px-5 font-bold text-navy transition-[transform,border-color] duration-150 select-none hover:border-navy active:scale-[0.97] ${focus}`}
            >
              <PinIcon className="size-5 shrink-0" />
              {t(ui.visit.openMaps)}
            </a>
            <a
              href={links.reception}
              className={`inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-line bg-white px-5 text-navy transition-[transform,border-color] duration-150 select-none hover:border-navy active:scale-[0.97] ${focus}`}
            >
              <PhoneIcon className="size-5 shrink-0" />
              <span>
                <span className="font-bold">{contact.receptionDisplay}</span>
                <span className="ml-2 text-sm text-muted">{t(ui.visit.reception)}</span>
              </span>
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold text-muted">{t(ui.visit.payments)}</p>
        </div>
      </div>
    </section>
  )
}
