"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"

export default function MozhiiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                Mozhii AI
              </h1>
            </div>

            {/* Content Placeholder */}
            <section className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg text-center">
                Coming Soon...
              </p>
            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
