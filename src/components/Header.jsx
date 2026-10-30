import { useLang } from '../i18n.jsx'
import { links, ui } from '../data.js'
import { SafMark } from './Icons.jsx'
import LangToggle from './LangToggle.jsx'

const focus = 'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan'

// page: 'home' muestra los enlaces a secciones; 'business' muestra el regreso al consultorio
export default function Header({ page = 'home' }) {
  const { t } = useLang()
  const isHome = page === 'home'

  const sections = [
    { href: '#servicios', label: ui.nav.services },
    { href: '#perfil', label: ui.nav.profile },
    { href: '#horario', label: ui.nav.hours },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div aria-hidden="true" className="grid h-1 grid-cols-4">
        <span className="bg-teal" />
        <span className="bg-cyan" />
        <span className="bg-magenta" />
        <span className="bg-navy" />
      </div>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3">
        <a
          href={links.home}
          aria-label="Servicios Médicos SaF"
          className={`inline-flex shrink-0 items-center gap-2.5 rounded-full text-[0.95rem] text-navy ${focus}`}
        >
          <SafMark className="size-8" />
          <span className="hidden sm:inline">
            Servicios Médicos <strong>SaF</strong>
          </span>
        </a>

        {isHome && (
          <nav aria-label={t(ui.nav.sections)} className="hidden items-center gap-6 text-[0.95rem] font-semibold text-muted lg:flex">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className={`rounded transition-colors hover:text-navy ${focus}`}>
                {t(s.label)}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <LangToggle />
          <a
            href={isHome ? links.business : links.home}
            className={`inline-flex min-h-10 items-center rounded-full bg-navy px-4 text-sm font-bold whitespace-nowrap text-white transition-[transform,background-color] duration-150 select-none hover:bg-navy/85 active:scale-[0.97] ${focus}`}
          >
            {t(isHome ? ui.nav.business : ui.nav.home)}
          </a>
        </div>
      </div>
    </header>
  )
}
