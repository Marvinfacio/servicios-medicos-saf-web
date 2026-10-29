import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { LanguageProvider } from './i18n.jsx'
import { ui } from './data.js'
import Empresas from './pages/Empresas.jsx'
import './index.css'

gsap.registerPlugin(useGSAP)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider title={ui.businessTitle}>
      <Empresas />
    </LanguageProvider>
  </StrictMode>,
)
