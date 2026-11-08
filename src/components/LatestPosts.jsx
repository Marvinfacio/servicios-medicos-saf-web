import { useLang } from '../i18n.jsx'
import { links, ui } from '../data.js'
import { latestPosts } from '../blog/posts.js'
import PostCard from './PostCard.jsx'

// Franja de la página principal con los artículos más recientes del blog
export default function LatestPosts() {
  const { t } = useLang()

  return (
    <section id="blog" aria-labelledby="blog-titulo" className="border-t border-line py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="blog-titulo" className="text-[clamp(1.6rem,4vw,2.1rem)] font-bold tracking-[-0.02em]">
              {t(ui.blog.latestTitle)}
            </h2>
            <p className="mt-2 text-muted">{t(ui.blog.latestSubtitle)}</p>
          </div>
          <a
            href={links.blog}
            className="shrink-0 rounded font-bold text-teal-dark hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan"
          >
            {t(ui.blog.viewAll)}
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
