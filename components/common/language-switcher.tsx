"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: "tam", label: "த" },
    { code: "en", label: "EN" },
    { code: "sin", label: "සිං" },
  ] as const

  return (
    <div className={cn(
      "fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row gap-2 rounded-full bg-white/10 p-1 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300",
      className
    )}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all duration-300",
            language === lang.code
              ? "bg-blue-600 text-white shadow-sm"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
