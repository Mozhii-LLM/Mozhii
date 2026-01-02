"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MessageSquareWarning, Smartphone, WifiOff, Languages, HeartHandshake, Accessibility } from "lucide-react"
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Mozhii AI</span> <span className="text-blue-500">Ecosystem</span>
              </h1>
            </div>

            {/* Problem Statement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-500">{mozhiiPage.problem.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl text-justify">{mozhiiPage.problem.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {mozhiiPage.problem.cards.map((card, index) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden">
                    {/* Base Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                    
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Card className="relative bg-transparent border-none shadow-none">
                      <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-red-500/20 rounded-lg w-fit">
                          {index === 0 && <Globe className="h-6 w-6 text-red-400" />}
                          {index === 1 && <MessageSquareWarning className="h-6 w-6 text-red-400" />}
                          {index === 2 && <WifiOff className="h-6 w-6 text-red-400" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-400 text-justify">{card.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Solution */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-500">{mozhiiPage.solution.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl text-justify">{mozhiiPage.solution.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {mozhiiPage.solution.cards.map((card, index) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden">
                    {/* Base Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                    
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Card className="relative bg-transparent border-none shadow-none">
                      <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-green-500/20 rounded-lg w-fit">
                          {index === 0 && <Languages className="h-6 w-6 text-green-400" />}
                          {index === 1 && <HeartHandshake className="h-6 w-6 text-green-400" />}
                          {index === 2 && <Accessibility className="h-6 w-6 text-green-400" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-400 text-justify">{card.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Vision */}
            <section className="space-y-6 text-center">
              <h2 className="text-3xl font-bold text-blue-500">{mozhiiPage.vision.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto text-justify">{mozhiiPage.vision.description}</p>
            </section>

            {/* Our Mission */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-500 text-center">{mozhiiPage.mission.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {mozhiiPage.mission.list.map((item: string, index: number) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                    <Card className="relative bg-transparent border-none shadow-none h-full">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg mt-1 shrink-0">
                          <div className="h-2 w-2 bg-blue-400 rounded-full" />
                        </div>
                        <p className="text-gray-300 text-lg text-justify">{item}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Ecosystem Cards */}
            <section className="space-y-20 font-sans">
              {/* Core Platform */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-500">Core Platform</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <Smartphone className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Mobile Application</h3>
                            <p className="text-gray-400">Android, iOS</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <Globe className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Web Application</h3>
                            <p className="text-gray-400">Browser-based access</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="relative h-[320px] sm:h-[380px] w-full">
                      <Image
                        src="/assets/3d/mobile-ui.png"
                        alt="Mozhii AI Mobile Interface"
                        fill
                        className="object-contain p-6 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </section>


            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
