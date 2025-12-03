import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mozhii.AI',
  description: 'Mozhii',
  generator: '',
  icons: {
    // Primary icon (SVG) plus fallbacks for browsers that don't use SVG favicons.
    icon: '/icon.svg',
    shortcut: '/assets/3d/logo.png',
    apple: '/assets/3d/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links: SVG primary, PNG fallback and apple-touch icon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/assets/3d/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/3d/logo.png" />
        <link rel="apple-touch-icon" href="/assets/3d/logo.png" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
