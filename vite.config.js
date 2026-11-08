import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cada carpeta blog/<slug>/index.html es un artículo; se agregan solos a la compilación
const blogDir = resolve(import.meta.dirname, 'blog')
const articles = Object.fromEntries(
  readdirSync(blogDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(resolve(blogDir, d.name, 'index.html')))
    .map((d) => [`blog-${d.name}`, resolve(blogDir, d.name, 'index.html')]),
)

// GitHub Pages sirve el sitio en la raíz del dominio propio (serviciosmedicossaf.com)
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        empresas: resolve(import.meta.dirname, 'empresas/index.html'),
        notfound: resolve(import.meta.dirname, '404.html'),
        blog: resolve(blogDir, 'index.html'),
        ...articles,
      },
    },
  },
})
