import { useLang } from '../i18n.jsx'
import { doctor, links, ui } from '../data.js'
import { ChatIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

const btnBase =
  'inline-flex min-h-13 select-none items-center justify-center gap-2.5 rounded-full font-bold ' +
  'transition-[transform,background-color,border-color] duration-150 ease-out-strong active:scale-[0.97] ' +
  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan motion-reduce:active:scale-100'

const btnPrimary = `${btnBase} w-full px-6 bg-teal-dark text-white shadow-lg shadow-teal-dark/20 hover:bg-teal-darker sm:w-auto`
const btnOutline = `${btnBase} w-full px-6 border-[1.5px] border-line bg-white text-navy hover:border-navy sm:w-auto`
const btnIcon = `${btnBase} size-13 shrink-0 border-[1.5px] border-line bg-white text-navy hover:border-navy`

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="inicio"
      className="hero-wash relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pt-8 pb-14 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-20">
        {/* Foto con las piezas de la cruz detrás */}
        <div className="relative mx-auto mt-6 mb-10 w-[min(72vw,320px)] md:order-last md:my-0 md:w-full md:max-w-[380px]">
          <div data-anim="shapes" aria-hidden="true" className="absolute -inset-[12%]">
            <span data-anim="shape" className="absolute top-0 left-[38%] h-[44%] w-[26%] rounded-[2rem] bg-teal/85" />
            <span data-anim="shape" className="absolute top-[34%] right-0 h-[26%] w-[44%] rounded-[2rem] bg-cyan/85" />
            <span data-anim="shape" className="absolute bottom-0 left-[40%] h-[44%] w-[26%] rounded-[2rem] bg-magenta/85" />
            <span data-anim="shape" className="absolute top-[38%] left-0 h-[26%] w-[44%] rounded-[2rem] bg-navy/90" />
          </div>

          <div
            data-anim="photo"
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface-alt shadow-2xl shadow-navy/25 ring-4 ring-white"
          >
            <img
              src={doctor.photo.src}
              srcSet={doctor.photo.srcSet}
              sizes="(min-width: 768px) 380px, min(72vw, 320px)"
              alt={t(ui.hero.photoAlt)}
              width="896"
              height="1280"
              fetchPriority="high"
              className="size-full object-cover object-[50%_20%]"
            />
          </div>

          <div
            data-anim="badge"
            className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-navy/15 sm:-left-8"
          >
            <span className="text-3xl leading-none font-extrabold text-teal-dark">6</span>
            <span className="max-w-[7.5rem] text-sm leading-tight font-semibold">{t(ui.hero.experience)}</span>
          </div>
          <div
            data-anim="badge"
            lang="en"
            className="absolute -top-3 -right-3 flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white shadow-lg shadow-navy/25 sm:-right-6"
          >
            <ChatIcon className="size-4" />
            {t(ui.hero.english)}
          </div>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <p data-anim="hero" className="mb-3 text-sm font-semibold tracking-[0.08em] text-teal-dark uppercase">
            {t(ui.hero.eyebrow)}
          </p>
          <h1 data-anim="hero" className="text-[clamp(2.6rem,8vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
            {doctor.name}
          </h1>
          <p data-anim="hero" className="mx-auto mt-4 max-w-[34ch] text-[clamp(1.1rem,2.6vw,1.3rem)] text-muted md:mx-0">
            {t(ui.hero.pitch)}
          </p>

          <div data-anim="hero" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a className={btnPrimary} href={links.whatsapp} target="_blank" rel="noopener">
              <WhatsAppIcon className="size-5.5 shrink-0" />
              {t(ui.hero.whatsapp)}
            </a>
            <a className={btnOutline} href={links.reception}>
              <PhoneIcon className="size-5 shrink-0" />
              {t(ui.hero.call)}
            </a>
          </div>
          <div data-anim="hero" className="mt-3 flex justify-center gap-3 md:justify-start">
            <a className={`${btnOutline} flex-1 sm:flex-none`} href={links.maps} target="_blank" rel="noopener">
              <PinIcon className="size-5.5 shrink-0" />
              {t(ui.hero.directions)}
            </a>
            <a className={btnIcon} href={links.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon className="size-5.5" />
            </a>
          </div>

          <p data-anim="hero" className="mt-6 text-sm text-muted">
            {t(doctor.specialty)} · Céd. Prof. {doctor.cedula} · <span className="whitespace-nowrap">CONAMEGE {doctor.conamege}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
