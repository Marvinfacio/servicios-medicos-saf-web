import { useLang } from '../i18n.jsx'
import { links, ui } from '../data.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { SafMark, WhatsAppIcon } from '../components/Icons.jsx'

const btn =
  'inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full px-6 font-bold transition-[transform,background-color,border-color] duration-150 select-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan active:scale-[0.97]'

// Página 404: GitHub Pages la muestra para cualquier dirección que no exista.
export default function NotFound() {
  const { t } = useLang()

  return (
    <div className="flex min-h-svh flex-col">
      <Header page="notfound" />
      <main className="hero-wash flex flex-1 items-center">
        <div className="mx-auto max-w-2xl px-5 py-20 text-center">
          <SafMark className="mx-auto mb-8 size-20" />
          <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-teal-dark uppercase">{t(ui.notFound.code)}</p>
          <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            {t(ui.notFound.title)}
          </h1>
          <p className="mx-auto mt-5 max-w-[46ch] text-lg text-muted">{t(ui.notFound.text)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={links.home} className={`${btn} bg-navy text-white hover:bg-navy/85`}>
              {t(ui.notFound.home)}
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener"
              className={`${btn} border-[1.5px] border-line bg-white text-navy hover:border-navy`}
            >
              <WhatsAppIcon className="size-5.5 shrink-0" />
              WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
