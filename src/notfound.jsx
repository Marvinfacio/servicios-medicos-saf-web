import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n.jsx'
import { ui } from './data.js'
import NotFound from './pages/NotFound.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider title={ui.notFound.pageTitle}>
      <NotFound />
    </LanguageProvider>
  </StrictMode>,
)
