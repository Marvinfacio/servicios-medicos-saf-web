import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio en /servicios-medicos-saf-web/
export default defineConfig({
  base: '/servicios-medicos-saf-web/',
  plugins: [react(), tailwindcss()],
})
