import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { LanguageProvider } from './i18n.jsx'
import { ui } from './data.js'
import { posts } from './blog/posts.js'
import BlogIndex from './pages/BlogIndex.jsx'
import Post from './pages/Post.jsx'
import './index.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// blog/index.html no lleva data-post; cada artículo lo lleva con su slug
const post = posts.find((p) => p.slug === document.body.dataset.post)
const title = post
  ? { es: `${post.title.es} | Servicios Médicos SaF`, en: `${post.title.en} | Servicios Médicos SaF` }
  : ui.blog.pageTitle

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider title={title} description={post ? post.description : ui.blog.description}>
      {post ? <Post post={post} /> : <BlogIndex />}
    </LanguageProvider>
  </StrictMode>,
)
