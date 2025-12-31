"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { usePathname, useSearchParams } from "next/navigation"

export function SmoothScroll() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      // If there's a hash in the URL, let the browser/Lenis handle it (or handle it manually if needed)
      // But for general page navigation, scroll to top
      if (!window.location.hash) {
        lenisRef.current.scrollTo(0, { immediate: true })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, searchParams])

  return null
}
