"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Database, Globe, MessageSquareWarning, Search, ShieldCheck, Smartphone, WifiOff, Languages, HeartHandshake, Accessibility } from "lucide-react"
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
            </div>

            {/* Problem Statement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.problem.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl">{mozhiiPage.problem.description}</p>
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
                          <p className="text-sm text-gray-400">{card.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Solution */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{mozhiiPage.solution.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl">{mozhiiPage.solution.description}</p>
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
                          <p className="text-sm text-gray-400">{card.description}</p>
                        </div>
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
                <h2 className="text-3xl font-bold text-white">Core Platform</h2>
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

              {/* Intelligence Layer */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Intelligence Layer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <BrainCircuit className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Retrieval-Augmented Generation (RAG)</h3>
                            <p className="text-gray-400">Grounded answers from trusted sources</p>
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
                            <Search className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Real-Time Tamil Web Index</h3>
                            <p className="text-gray-400">Fresh signals for factual relevance</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
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
                            <h3 className="text-lg font-semibold text-white">Tamil Knowledge Graph (upcoming)</h3>
                            <p className="text-gray-400">Structured facts & relationships</p>
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
                            <BrainCircuit className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Core AI Components</h3>
                            <p className="text-gray-400">Designed for reliable Tamil intelligence</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Layer */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Data Layer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <Database className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Tamil Data Collection Platform</h3>
                            <p className="text-gray-400">Community + curated pipelines</p>
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
                            <ShieldCheck className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Data Cleaning & Validation Agents</h3>
                            <p className="text-gray-400">Quality checks for trustworthy training data</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden h-full">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none h-full">
                        <CardContent className="p-5 flex items-start gap-4 h-full items-center">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <Database className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">High-signal Tamil data</h3>
                            <p className="text-gray-400">Clean, validated, and scalable</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              {/* Model Layer */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Model Layer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <BrainCircuit className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Base LLM (Tamil-focused)</h3>
                            <p className="text-gray-400">Foundation for generation and reasoning</p>
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
                            <Languages className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Fine-Tuning (SFT, CPT)</h3>
                            <p className="text-gray-400">Domain alignment and instruction quality</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="group relative rounded-2xl overflow-hidden">
                      {/* Base Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="relative bg-transparent border-none shadow-none">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="p-3 bg-blue-500/15 rounded-xl">
                            <ShieldCheck className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Hallucination & Safety Agents</h3>
                            <p className="text-gray-400">Guardrails for trusted outputs</p>
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
                            <ShieldCheck className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Safety-first design</h3>
                            <p className="text-gray-400">Accuracy, trust, and scale</p>
                          </div>
                        </CardContent>
                      </Card>
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
