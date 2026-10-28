import { doctor, links } from '../data.js'
import { InstagramIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

const btnBase =
  'inline-flex min-h-13 w-full select-none items-center justify-center gap-2.5 rounded-full px-6 font-bold ' +
  'transition-[transform,background-color,border-color] duration-150 ease-out-strong active:scale-[0.97] ' +
  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan sm:w-auto ' +
  'motion-reduce:active:scale-100'

const btnPrimary = `${btnBase} bg-teal-dark text-white hover:bg-teal-darker`
const btnOutline = `${btnBase} border-[1.5px] border-line text-navy hover:border-navy`

export default function Hero() {
  return (
    <section className="py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-5">
        {/* Foto pendiente: <img src={`${import.meta.env.BASE_URL}dr-marvin-facio.jpg`} alt="Dr. Marvin Facio en su consultorio" /> */}
        <p data-anim="hero" className="mb-3 text-sm font-semibold tracking-[0.08em] text-teal-dark uppercase">
          Consultorio médico · Chihuahua
        </p>
        <h1 data-anim="hero" className="text-[clamp(2.4rem,7vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          {doctor.name}
        </h1>
        <p data-anim="hero" className="mt-2.5 mb-1.5 text-[clamp(1.15rem,3vw,1.4rem)] font-medium">
          {doctor.specialty}
        </p>
        <p data-anim="hero" className="mb-8 text-sm text-muted">
          Céd. Prof. {doctor.cedula} · Registro CONAMEGE {doctor.conamege}
        </p>

        <div data-anim="hero" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className={btnPrimary} href={links.whatsapp} target="_blank" rel="noopener">
            <WhatsAppIcon className="size-5.5 shrink-0" />
            Agenda por WhatsApp
          </a>
          <a className={btnOutline} href={links.instagram} target="_blank" rel="noopener">
            <InstagramIcon className="size-5.5 shrink-0" />
            Instagram
          </a>
          <a className={btnOutline} href={links.maps} target="_blank" rel="noopener">
            <PinIcon className="size-5.5 shrink-0" />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
