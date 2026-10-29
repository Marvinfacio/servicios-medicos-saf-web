import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { LanguageProvider } from './i18n.jsx'
import { ui } from './data.js'
import App from './App.jsx'
import './index.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider title={ui.title}>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
