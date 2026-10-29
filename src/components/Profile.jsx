import { useLang } from '../i18n.jsx'
import { links, profile, ui } from '../data.js'
import { WhatsAppIcon } from './Icons.jsx'

const accents = ['text-cyan', 'text-teal', 'text-magenta']

export default function Profile() {
  const { t } = useLang()

  return (
    <section id="perfil" aria-labelledby="perfil-titulo" className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
      {/* Pieza de la cruz decorativa */}
      <span aria-hidden="true" className="absolute -top-16 -right-10 h-56 w-32 rotate-12 rounded-[2.5rem] bg-teal/20" />
      <span aria-hidden="true" className="absolute -bottom-12 -left-14 h-32 w-56 -rotate-6 rounded-[2.5rem] bg-magenta/20" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div data-anim="reveal">
          <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-cyan uppercase">{t(ui.profile.eyebrow)}</p>
          <h2 id="perfil-titulo" className="text-[clamp(1.8rem,4.5vw,2.6rem)] leading-tight font-extrabold tracking-[-0.02em]">
            {t(ui.profile.title)}
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-white/80">
            {t(profile.paragraphs).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-cyan pl-4 text-[1.05rem] font-semibold text-white">{t(ui.profile.cta)}</p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex min-h-13 items-center gap-2.5 rounded-full bg-white px-6 font-bold text-navy transition-[transform,background-color] duration-150 select-none hover:bg-cyan focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan active:scale-[0.97]"
          >
            <WhatsAppIcon className="size-5.5 shrink-0" />
            {t(ui.hero.whatsapp)}
          </a>
        </div>

        <ul className="grid gap-4">
          {profile.highlights.map((h, i) => (
            <li
              key={h.label.es}
              data-anim="reveal"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <span className={`w-10 shrink-0 text-center text-4xl leading-none font-extrabold ${accents[i]}`}>{h.value}</span>
              <span className="font-semibold text-white/90">{t(h.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
