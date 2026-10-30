import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio en /servicios-medicos-saf-web/
export default defineConfig({
  base: '/servicios-medicos-saf-web/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        empresas: resolve(import.meta.dirname, 'empresas/index.html'),
        notfound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
