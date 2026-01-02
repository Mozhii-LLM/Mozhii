import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { LanguageSwitcherWrapper } from '@/components/common/language-switcher-wrapper'
import { Toaster } from "@/components/ui/sonner"
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { FooterWrapper } from '@/components/layout/footer-wrapper'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mozhii.online'),
  title: {
    default: 'Mozhii.AI - Sri Lanka\'s Tamil Large Language Model',
    template: '%s | Mozhii.AI',
  },
  description: 'Mozhii is a state-of-the-art Tamil Large Language Model developed in Sri Lanka, designed to bridge the language gap in AI technology.',
  keywords: ['Tamil LLM', 'AI Sri Lanka', 'Mozhii', 'Artificial Intelligence', 'Tamil Language Model', 'NLP'],
  authors: [{ name: 'Mozhii Team' }],
  creator: 'Mozhii Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mozhii.online',
    title: 'Mozhii.AI - Sri Lanka\'s Tamil Large Language Model',
    description: 'Mozhii is a Tamil Large Language Model developed in Sri Lanka.',
    siteName: 'Mozhii.AI',
    images: [
      {
        url: '/assets/3d/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mozhii.AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mozhii.AI - Sri Lanka\'s Tamil Large Language Model',
    description: 'Mozhii is a state-of-the-art Tamil Large Language Model developed in Sri Lanka.',
    images: ['/assets/3d/logo.png'],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mozhii.AI',
              url: 'https://mozhii.online',
              logo: 'https://mozhii.online/assets/3d/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/mozhii',
                'https://twitter.com/mozhii_ai',
                'https://www.instagram.com/mozhii.ai'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'contact@mozhii.ai'
              },
              description: 'Sri Lanka\'s First Tamil Large Language Model'
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <SmoothScroll />
        </Suspense>
        <LanguageProvider>
          <LanguageSwitcherWrapper />
          {children}
          <FooterWrapper />
          <Toaster />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
