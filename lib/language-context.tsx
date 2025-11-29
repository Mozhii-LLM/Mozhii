"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "tam" | "sin"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  useEffect(() => {
    if (language === "tam") {
      document.documentElement.classList.add("lang-tam")
    } else {
      document.documentElement.classList.remove("lang-tam")
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
