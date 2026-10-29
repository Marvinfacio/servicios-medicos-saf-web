import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lang'
const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // almacenamiento bloqueado: se usa el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ title, children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX'
    if (title) document.title = title[lang]
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento: el idioma solo dura esta visita
    }
  }, [lang, title])

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
