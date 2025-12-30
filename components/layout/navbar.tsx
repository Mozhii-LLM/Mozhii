"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const AnimatedNavLink = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const defaultTextColor = "text-gray-300"
  const hoverTextColor = "text-white"
  const textSizeClass = "text-sm"

  const content = (
    <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
      <span className={defaultTextColor}>{children}</span>
      <span className={hoverTextColor}>{children}</span>
    </div>
  )

  if (!href) {
    return (
      <div className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass} cursor-default`}>
        {content}
      </div>
    )
  }

  return (
    <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      {content}
    </Link>
  )
}

export function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full")
  // Use a browser-compatible timeout type. `ReturnType<typeof setTimeout>` works both in
  // Node and browser environments and avoids NodeJS types leaking into client code.
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl")
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full")
      }, 300)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [isOpen])

  // Replace the decorative placeholder with your logo image.
  // Assumes you place your logo at `public/assets/logo.png` (or another supported path under `public`).
  const logoElement = (
    // Increase the logo container and image size. Responsive classes keep it slightly larger on small+ screens.
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
      <Image
        // Point to the public/ folder root. Public assets should be referenced with a leading '/'.
        src="/assets/3d/logo.png"
        alt="Logo"
        width={48}
        height={48}
        className="rounded-sm object-contain"
      />
    </div>
  )

  const navLinksData = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.features, href: "/#features" },
    { label: t.nav.team, href: "/#team" },
    { label: t.nav.plans, href: "/#plans" },
    { label: t.nav.waitlist, href: "/#waitlist" },
  ]

  const loginButtonElement = (
    <Link href="/chat" className="w-full sm:w-auto">
      <button className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">
        {t.nav.signin}
      </button>
    </Link>
  )

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-blue-400
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
      ></div>
      <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-br from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 w-full sm:w-auto">
        {t.nav.signup}
      </button>
    </div>
  )

  return (
    <header
      className={`fixed top-6 left-0 right-0 mx-auto z-50
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-[95%] lg:w-[90%] max-w-[1200px]
                       transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          {logoElement}
          <span className="text-sm sm:text-base font-semibold text-white select-none">Mozhii.AI</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.label} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <span key={link.label} className="text-gray-300 cursor-default w-full text-center">
                {link.label}
              </span>
            ),
          )}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  )
}
