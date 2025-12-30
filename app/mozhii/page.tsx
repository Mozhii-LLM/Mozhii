"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Cpu, ShieldCheck, BrainCircuit, MessageSquareWarning, WifiOff, Languages, HeartHandshake, Accessibility } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export default function MozhiiPage() {
  const { t } = useLanguage()
  const { mozhiiPage } = t

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-5xl mx-auto space-y-20">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                {mozhiiPage.hero.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {mozhiiPage.hero.subtitle}
              </p>
            </div>

            {/* Problem Statement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.problem.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl">{mozhiiPage.problem.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {mozhiiPage.problem.cards.map((card, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="p-3 bg-red-500/20 rounded-lg w-fit">
                        {index === 0 && <Globe className="h-6 w-6 text-red-400" />}
                        {index === 1 && <MessageSquareWarning className="h-6 w-6 text-red-400" />}
                        {index === 2 && <WifiOff className="h-6 w-6 text-red-400" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Our Solution */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.solution.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl">{mozhiiPage.solution.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {mozhiiPage.solution.cards.map((card, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="p-3 bg-green-500/20 rounded-lg w-fit">
                        {index === 0 && <Languages className="h-6 w-6 text-green-400" />}
                        {index === 1 && <HeartHandshake className="h-6 w-6 text-green-400" />}
                        {index === 2 && <Accessibility className="h-6 w-6 text-green-400" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technology */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.tech.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl">{mozhiiPage.tech.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {mozhiiPage.tech.cards.map((card, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg w-fit">
                        {index === 0 && <BrainCircuit className="h-6 w-6 text-blue-400" />}
                        {index === 1 && <Cpu className="h-6 w-6 text-blue-400" />}
                        {index === 2 && <ShieldCheck className="h-6 w-6 text-blue-400" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Platforms */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.platforms.title}</h2>
              <p className="text-gray-300 text-lg">{mozhiiPage.platforms.description}</p>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text */}
                <div className="space-y-8">
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="p-4 bg-blue-500/20 rounded-xl">
                      <Smartphone className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{mozhiiPage.platforms.mobile}</h3>
                      <p className="text-gray-400">Android and iOS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="p-4 bg-purple-500/20 rounded-xl">
                      <Globe className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{mozhiiPage.platforms.web}</h3>
                      <p className="text-gray-400">Browser-based access</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-[400px] w-full flex items-center justify-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
                  
                  {/* Image Container */}
                  <div className="relative z-10 w-full h-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/assets/3d/mobile-ui.png"
                      alt="Mozhii AI Mobile Interface"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
