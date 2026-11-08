import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { ui } from '../data.js'
import { latestPosts } from '../blog/posts.js'
import { usePageMotion } from '../blog/motion.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import PostCard from '../components/PostCard.jsx'

const stepAccents = ['bg-teal', 'bg-cyan', 'bg-magenta']

// Portada del blog: presentación, cómo se hace cada artículo y la lista de artículos
export default function BlogIndex() {
  const { t } = useLang()
  const root = useRef(null)
  usePageMotion(root)

  return (
    <div ref={root} className="flex min-h-svh flex-col">
      <Header page="blog" />
      <main className="flex-1">
        <section aria-labelledby="blog-titulo" className="hero-wash">
          <div className="mx-auto max-w-5xl px-5 pt-16 pb-12 md:pt-20">
            <p data-anim="hero" className="mb-3 text-sm font-semibold tracking-[0.08em] text-teal-dark uppercase">
              {t(ui.blog.eyebrow)}
            </p>
            <h1
              id="blog-titulo"
              data-anim="hero"
              className="max-w-[22ch] text-[clamp(2.1rem,5.5vw,3.3rem)] leading-[1.08] font-extrabold tracking-[-0.03em]"
            >
              {t(ui.blog.title)}
            </h1>
            <p data-anim="hero" className="mt-5 max-w-[60ch] text-lg text-muted">
              {t(ui.blog.intro)}
            </p>

            <div data-anim="hero" className="mt-10">
              <h2 className="mb-4 text-sm font-bold tracking-[0.08em] text-navy uppercase">{t(ui.blog.processTitle)}</h2>
              <ol className="grid gap-4 sm:grid-cols-3">
                {ui.blog.process.map((step, i) => (
                  <li key={step.es} className="relative overflow-hidden rounded-2xl border border-line bg-white p-5">
                    <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${stepAccents[i]}`} />
                    <span className="mb-2 block text-3xl leading-none font-extrabold text-navy">{i + 1}</span>
                    <span className="text-[0.95rem] text-muted">{t(step)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="articulos-titulo" className="border-t border-line py-14 md:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <h2 id="articulos-titulo" className="mb-8 text-[clamp(1.6rem,4vw,2.1rem)] font-bold tracking-[-0.02em]">
              {t(ui.blog.articles)}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
