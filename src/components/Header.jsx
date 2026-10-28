import { SafMark } from './Icons.jsx'

export default function Header() {
  return (
    <header className="border-b border-line pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-5xl px-5 py-3.5">
        <a
          href="#inicio"
          aria-label="Servicios Médicos SaF, inicio"
          className="inline-flex items-center gap-2.5 rounded-full text-[0.95rem] text-navy focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan"
        >
          <SafMark className="size-8" />
          <span>
            Servicios Médicos <strong>SaF</strong>
          </span>
        </a>
      </div>
    </header>
  )
}
