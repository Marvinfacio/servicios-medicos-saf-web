import { useLang } from '../i18n.jsx'
import { contact, doctor, links, ui } from '../data.js'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))] text-[0.95rem] text-muted">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p>
            {t(ui.footer.by)} <strong className="text-navy">Servicios Médicos SaF</strong>
          </p>
          <p className="text-sm">
            {doctor.name} · Céd. Prof. {doctor.cedula} · CONAMEGE {doctor.conamege}
          </p>
          <p className="text-sm">
            {t(ui.footer.cofepris)}: {contact.cofepris}
          </p>
        </div>
        <p className="text-sm">
          WhatsApp{' '}
          <a href={links.whatsapp} target="_blank" rel="noopener" className="font-semibold text-teal-dark hover:underline">
            {contact.whatsappDisplay}
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
