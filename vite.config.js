import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
      },
    },
  },
})
