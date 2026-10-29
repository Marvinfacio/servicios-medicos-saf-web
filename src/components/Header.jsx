import { SafMark } from './Icons.jsx'
import LangToggle from './LangToggle.jsx'

export default function Header() {
  return (
    <header className="border-b border-line pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
        <a
          href="#inicio"
          aria-label="Servicios Médicos SaF"
          className="inline-flex items-center gap-2.5 rounded-full text-[0.95rem] text-navy focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan"
        >
          <SafMark className="size-8" />
          <span>
            Servicios Médicos <strong>SaF</strong>
          </span>
        </a>
        <LangToggle />
      </div>
    </header>
  )
}
