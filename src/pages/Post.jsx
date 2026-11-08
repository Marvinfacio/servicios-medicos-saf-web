import { useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { doctor, links, services, ui } from '../data.js'
import { latestPosts, postUrl } from '../blog/posts.js'
import { usePageMotion } from '../blog/motion.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Lightbox from '../components/Lightbox.jsx'
import PostCard, { PostCover, formatDate } from '../components/PostCard.jsx'
import { WhatsAppIcon } from '../components/Icons.jsx'

const focus = 'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan'

const calloutTones = {
  warning: { box: 'border-magenta/30 bg-magenta/5', title: 'text-magenta' },
  info: { box: 'border-teal/30 bg-teal/5', title: 'text-teal-dark' },
}

// Dibuja un bloque del cuerpo del artículo (ver el formato en src/blog/posts.js)
function Block({ block }) {
  if (block.h2) return <h2 className="mt-10 mb-3 text-[clamp(1.35rem,3vw,1.6rem)] leading-snug font-bold tracking-[-0.01em]">{block.h2}</h2>
  if (block.p) return <p className="my-4">{block.p}</p>
  if (block.list)
    return (
      <ul className="my-4 list-disc space-y-2 pl-6 marker:text-teal">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  if (block.compare) {
    const [corner, ...cols] = block.compare.head
    return (
      <div className="my-6 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[30rem] border-collapse text-left text-[0.95rem]">
          <thead className="bg-surface-alt">
            <tr>
              <th scope="col" className="p-3 font-bold">
                {corner}
              </th>
              {cols.map((c) => (
                <th key={c} scope="col" className="p-3 font-bold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.compare.rows.map(([label, ...cells]) => (
              <tr key={label} className="border-t border-line">
                <th scope="row" className="p-3 font-semibold">
                  {label}
                </th>
                {cells.map((c, i) => (
                  <td key={i} className="p-3 text-muted">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (block.callout) {
    const tone = calloutTones[block.callout.tone] ?? calloutTones.info
    return (
      <aside className={`my-6 rounded-2xl border p-5 ${tone.box}`}>
        <p className={`mb-2 font-bold ${tone.title}`}>{block.callout.title}:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          {block.callout.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    )
  }
  return null
}

export default function Post({ post }) {
  const { lang, t } = useLang()
  const root = useRef(null)
  const [flyer, setFlyer] = useState(null)
  usePageMotion(root)

  const title = t(post.title)
  const service = services.find((s) => s.id === post.relatedService)
  const others = latestPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const shareText = `${title} ${window.location.origin}${postUrl(post)}`

  return (
    <div ref={root} className="flex min-h-svh flex-col">
      <Header page="blog" />
      <main className="flex-1">
        <article aria-labelledby="articulo-titulo">
          <header className="hero-wash">
            <div className="mx-auto max-w-3xl px-5 pt-12 pb-8 md:pt-16">
              <nav aria-label="Breadcrumb" data-anim="hero" className="mb-5 text-sm font-semibold text-muted">
                <a href={links.blog} className={`rounded text-teal-dark hover:underline ${focus}`}>
                  Blog
                </a>
                <span aria-hidden="true" className="mx-2">
                  ›
                </span>
                <span>{t(post.category)}</span>
              </nav>
              <h1
                id="articulo-titulo"
                data-anim="hero"
                className="text-[clamp(2rem,5.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
              >
                {title}
              </h1>
              <p data-anim="hero" className="mt-4 text-lg text-muted">
                {t(post.description)}
              </p>
              <p data-anim="hero" className="mt-5 text-sm text-muted">
                {t(ui.blog.by)} <strong className="text-navy">{doctor.name}</strong> · Céd. Prof. {doctor.cedula}
                <br />
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {post.readingMinutes} {t(ui.blog.minutes)}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-5">
            <PostCover post={post} className="aspect-[21/9] rounded-2xl" />

            <div className="text-[1.075rem] leading-relaxed">
              {t(post.body).map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <p className="mt-8 rounded-2xl bg-surface-alt p-4 text-sm text-muted">{t(ui.blog.disclaimer)}</p>

            {/* Publicidad discreta: el volante del servicio relacionado y el contacto */}
            {service && (
              <aside
                data-anim="reveal"
                aria-label={t(service.title)}
                className="mt-10 grid gap-5 rounded-2xl bg-navy p-5 text-white sm:grid-cols-[9rem_1fr] sm:items-center sm:p-6"
              >
                <button
                  type="button"
                  onClick={() => setFlyer(service)}
                  aria-label={`${t(ui.services.viewAd)}: ${t(service.title)}`}
                  className="w-32 cursor-zoom-in overflow-hidden rounded-xl bg-white/10 sm:w-full focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan"
                >
                  <img
                    src={t(service.ad).src}
                    srcSet={t(service.ad).srcSet}
                    sizes="144px"
                    alt=""
                    width="1080"
                    height="1350"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </button>
                <div>
                  <p className="text-sm font-semibold tracking-[0.08em] text-cyan uppercase">{t(ui.blog.ctaEyebrow)}</p>
                  <p className="mt-1 text-xl font-bold">{t(service.title)}</p>
                  <p className="mt-2 text-white/80">{t(ui.blog.ctaText)}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={links.whatsappWith(t(ui.blog.ctaAskText).replace('{title}', title))}
                      target="_blank"
                      rel="noopener"
                      className={`inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-5 font-bold text-navy transition-[transform,background-color] duration-150 select-none hover:bg-cyan active:scale-[0.97] ${focus}`}
                    >
                      <WhatsAppIcon className="size-5 shrink-0" />
                      {t(ui.blog.ctaAsk)}
                    </a>
                    <button
                      type="button"
                      onClick={() => setFlyer(service)}
                      className={`inline-flex min-h-12 cursor-pointer items-center rounded-full border-[1.5px] border-white/40 px-5 font-bold text-white transition-[transform,border-color] duration-150 select-none hover:border-white active:scale-[0.97] ${focus}`}
                    >
                      {t(ui.services.viewAd)}
                    </button>
                  </div>
                </div>
              </aside>
            )}

            <section data-anim="reveal" aria-labelledby="referencias-titulo" className="mt-10">
              <h2 id="referencias-titulo" className="mb-3 text-lg font-bold">
                {t(ui.blog.references)}
              </h2>
              <ol className="list-decimal space-y-2 pl-6 text-sm text-muted">
                {post.references.map((ref) => (
                  <li key={ref.url}>
                    {ref.label}{' '}
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className={`rounded break-all text-teal-dark hover:underline ${focus}`}>
                      {ref.url.replace(/^https?:\/\//, '')}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div data-anim="reveal" className="mt-10 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
              <img
                src={doctor.photo.src}
                srcSet={doctor.photo.srcSet}
                sizes="72px"
                alt=""
                width="72"
                height="72"
                loading="lazy"
                decoding="async"
                className="size-18 shrink-0 rounded-full bg-surface-alt object-cover object-top"
              />
              <div className="flex-1">
                <p className="font-bold">
                  {doctor.name} <span className="font-medium text-muted">· Céd. Prof. {doctor.cedula}</span>
                </p>
                <p className="mt-1 text-[0.95rem] text-muted">{t(ui.blog.authorBio)}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-16">
              <a href={links.blog} className={`rounded font-bold text-teal-dark hover:underline ${focus}`}>
                {t(ui.blog.back)}
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener"
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] border-line px-4 text-sm font-bold text-navy transition-[transform,border-color] duration-150 select-none hover:border-navy active:scale-[0.97] ${focus}`}
              >
                <WhatsAppIcon className="size-4.5 shrink-0" />
                {t(ui.blog.share)}
              </a>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section aria-labelledby="mas-titulo" className="border-t border-line bg-surface-alt py-14">
            <div className="mx-auto max-w-5xl px-5">
              <h2 id="mas-titulo" className="mb-8 text-[clamp(1.5rem,3.5vw,1.9rem)] font-bold tracking-[-0.02em]">
                {t(ui.blog.more)}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Lightbox service={flyer} onClose={() => setFlyer(null)} />
    </div>
  )
}
