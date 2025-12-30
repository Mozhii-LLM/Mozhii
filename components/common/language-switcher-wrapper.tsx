"use client"

import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "./language-switcher"

export function LanguageSwitcherWrapper() {
  const pathname = usePathname()
  
  // Don't show global floating language switcher on chat page
  if (pathname === "/chat") {
    return null
  }

  return <LanguageSwitcher />
}
