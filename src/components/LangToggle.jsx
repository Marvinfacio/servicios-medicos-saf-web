import { useLang } from '../i18n.jsx'
import { ui } from '../data.js'

export default function LangToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div role="group" aria-label={t(ui.nav.language)} className="flex rounded-full border border-line p-0.5 text-sm font-bold">
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className="min-h-9 min-w-10 cursor-pointer rounded-full px-2.5 uppercase transition-colors duration-150 select-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cyan aria-pressed:bg-navy aria-pressed:text-white not-aria-pressed:text-muted hover:not-aria-pressed:text-navy"
        >
          {code}
        </button>
      ))}
    </div>
  )
}
