import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lang'
const LangContext = createContext(null)

function initialLang() {
  // ?lang=en o ?lang=es en la URL tiene prioridad (lo usan los anuncios de Google)
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl === 'es' || fromUrl === 'en') return fromUrl
  } catch {
    // URL sin parámetros válidos
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // almacenamiento bloqueado: se usa el español
  }
  // Español por defecto, también para buscadores con navegador en inglés
  return 'es'
}

// El canónico apunta a la versión del idioma que se muestra (?lang=es o ?lang=en)
function updateCanonical(lang) {
  const link = document.querySelector('link[rel="canonical"]')
  if (!link) return
  const url = new URL(link.href)
  url.searchParams.set('lang', lang)
  link.href = url.toString()
}

// Si la dirección trae ?lang, se actualiza al cambiar de idioma para que recargar,
// volver atrás o compartir el enlace conserve el idioma elegido
function updateUrl(lang) {
  const url = new URL(window.location.href)
  const current = url.searchParams.get('lang')
  if (current === null || current === lang) return
  url.searchParams.set('lang', lang)
  history.replaceState(history.state, '', url)
}

export function LanguageProvider({ title, description, children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX'
    if (title) document.title = title[lang]
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description[lang])
    updateCanonical(lang)
    updateUrl(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento: el idioma solo dura esta visita
    }
  }, [lang, title, description])

  // t() acepta { es, en } o un valor simple y devuelve el texto del idioma actual
  const t = useCallback(
    (value) => (value && typeof value === 'object' && 'es' in value ? value[lang] : value),
    [lang],
  )

  const ctx = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
