"use client"

import { usePathname } from "next/navigation"
import { Footer } from "./footer"

export function FooterWrapper() {
  const pathname = usePathname()
  
  // Don't show footer on chat, login, or signup pages
  if (pathname === "/chat" || pathname === "/login" || pathname === "/signup") {
    return null
  }

  return <Footer />
}
