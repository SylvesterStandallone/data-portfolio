"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Lang } from "@/lib/content"

/*
  Estado del idioma. Los textos viven en lib/content.ts: los componentes leen
  content[language].<seccion>, no hay diccionario acá.
*/

interface LanguageContextType {
  language: Lang
  setLanguage: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("es")

  // La preferencia se lee recién en el cliente para no romper la hidratación:
  // el HTML del servidor siempre sale en español.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "es" || saved === "en") setLanguage(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
