import { useLang } from '../i18n.jsx'
import { ui } from '../data.js'
import { postUrl } from '../blog/posts.js'

const focus = 'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan'

// Las fechas se guardan como 'AAAA-MM-DD'; se leen al mediodía para no cambiar de día por la zona horaria
export function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-MX', { dateStyle: 'long' }).format(new Date(`${date}T12:00:00`))
}

// Portada con las piezas de la cruz de la marca (sin fotos de archivo)
export function PostCover({ post, className = '' }) {
  const { t } = useLang()
  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute -right-[6%] -bottom-[18%] h-[130%] opacity-90">
        <rect x="38" y="4" width="22" height="36" rx="9" className="fill-teal" />
        <rect x="54" y="35" width="36" height="22" rx="9" className="fill-cyan" />
        <rect x="40" y="56" width="22" height="36" rx="9" className="fill-magenta" />
        <rect x="10" y="38" width="36" height="22" rx="9" className="fill-white/15" />
      </svg>
      <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-navy">{t(post.category)}</span>
    </div>
  )
}

export default function PostCard({ post, headingLevel: Heading = 'h3' }) {
  const { lang, t } = useLang()
  return (
    <article data-anim="reveal" className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <PostCover post={post} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {post.readingMinutes} {t(ui.blog.minutes)}
        </p>
        <Heading className="mb-2 text-lg leading-snug font-bold">
          {/* El enlace cubre toda la tarjeta */}
          <a href={postUrl(post)} className={`rounded after:absolute after:inset-0 after:content-[''] ${focus}`}>
            {t(post.title)}
          </a>
        </Heading>
        <p className="flex-1 text-[0.95rem] text-muted">{t(post.description)}</p>
        <span aria-hidden="true" className="mt-4 font-bold text-teal-dark group-hover:underline">
          {t(ui.blog.read)} →
        </span>
      </div>
    </article>
  )
}
