import { useLang } from '../i18n.jsx'
import { doctor, ui } from '../data.js'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))] text-[0.95rem] text-muted">
      <div className="mx-auto max-w-5xl space-y-1 px-5">
        <p>
          {t(ui.footer.by)} <strong>Servicios Médicos SaF</strong>
        </p>
        <p className="text-sm">
          {doctor.name} · Céd. Prof. {doctor.cedula} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
