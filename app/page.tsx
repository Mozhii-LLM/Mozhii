"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/layout/navbar"
import { Pricing } from "@/components/ui/pricing"
import { WaitlistSection } from "@/components/sections/waitlist-section"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Clock,
  BarChart3,
  Workflow,
  Linkedin,
  Instagram,
  Youtube,
  Database,
  Binary,
  Languages,
  Mic,
  ShieldCheck,
  Code2,
  Users,
  Lock,
  WifiOff,
} from "lucide-react"

const TamilIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none">TAM</text>
    <rect x="2" y="4" width="20" height="16" rx="2" />
  </svg>
)

export default function HomePage() {
  const { t, language } = useLanguage()
  const isTamil = language === 'tam'

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation Component */}
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 pb-4 lg:pt-0 lg:pb-0">
          <div className="container mx-auto px-4 h-full flex items-center">
            {/* Make Card background transparent so the global radial gradient shows through.
        Keep a subtle backdrop blur for readability. */}
            <Card className="w-full h-auto lg:h-screen bg-transparent backdrop-blur-sm relative overflow-hidden border-none flex items-center">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

              <div className="flex flex-col lg:flex-row h-full w-full items-center justify-center pt-10 lg:pt-0">
                {/* Left content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center text-center lg:text-left"
                >
                  <div className="flex flex-col">
                    <h1 className={cn(
                      "text-white font-serif",
                      isTamil ? "text-4xl md:text-5xl lg:text-6xl tracking-normal leading-tight" : "text-5xl md:text-6xl lg:text-7xl tracking-wide"
                    )}>
                      Sri Lanka&apos;s
                    </h1>
                    <span className={cn(
                      "mt-2 text-neutral-300 font-serif",
                      isTamil ? "text-lg md:text-2xl lg:text-3xl tracking-normal leading-snug" : "text-xl md:text-3xl lg:text-4xl tracking-widest"
                    )}>
                      Tamil Large Language Model
                    </span>
                  </div>
                  <p className={cn(
                    "mt-6 text-neutral-300 max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed text-justify",
                    isTamil && "leading-loose"
                  )}>
                    {t.hero.description}
                  </p>


                  <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                      aria-label={t.hero.joinWaitlist}
                    >
                      {t.hero.joinWaitlist}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href="/chat">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-neutral-600 text-neutral-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent cursor-pointer transition-colors duration-300"
                        aria-label="Try Mozhii AI now"
                      >
                        Try It now
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Right content */}
                <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 lg:p-0 mt-8 lg:mt-0">
                  <div className="relative w-full max-w-[500px] grid grid-cols-2 gap-3 sm:gap-4">
                    {t.hero.cards.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        className="group relative bg-black/30 border border-blue-500/20 rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm hover:bg-black/50 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 aspect-square flex flex-col items-center justify-center"
                      >
                        {/* Outline glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                          boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)"
                        }} />
                        
                        <h3 className={cn(
                          "relative z-10 text-sm sm:text-base text-gray-400 mb-1 sm:mb-2 font-medium",
                          isTamil ? "tracking-normal" : "uppercase tracking-wider"
                        )}>
                          {item.title}
                        </h3>
                        
                        {item.active ? (
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                              <span className={cn(
                                "text-lg sm:text-xl md:text-2xl font-bold text-green-400",
                                isTamil && "text-base sm:text-lg"
                              )}>
                                {item.active}
                              </span>
                            </div>
                            <p className={cn(
                              "text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight",
                              isTamil && "text-sm sm:text-base"
                            )}>
                              {item.value}
                            </p>
                          </div>
                        ) : (
                          <p className={cn(
                            "relative z-10 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight",
                            isTamil && "text-base sm:text-lg"
                          )}>
                            {item.value}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Gradient Transition */}
        <div className="w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none -mt-32 relative z-10" />

        <div className="bg-black w-full relative z-20">
          {/* Overview Section */}
          <section id="overview" className="py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-white">
                    Overview of <span className="text-blue-500">Mozhii</span> Model
                  </h2>
                  <div className="space-y-6 text-neutral-300 font-sans text-lg leading-8 tracking-wide text-justify">
                    <p>{t.overview.p1}</p>
                    <p>{t.overview.p2}</p>
                    <p>{t.overview.p3}</p>
                  </div>
                </div>

                {/* Right Content - Quick Facts Card */}
                <div className="lg:pt-8">
                  <div className="group relative rounded-2xl overflow-hidden">
                    {/* Base Background - Darker with more black */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-md border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                    
                    {/* Hover Gradient Effect - Smooth blue/black */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Card className="relative bg-transparent border-none shadow-none">
                      <CardContent className="p-8 space-y-8">
                        <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">{t.overview.quickFacts.title}</h3>
                        
                        <div className="space-y-6">
                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <span className="text-gray-400">{t.overview.quickFacts.f1.label}</span>
                            <span className="text-white font-mono">{t.overview.quickFacts.f1.value}</span>
                          </div>
                          
                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <span className="text-gray-400">{t.overview.quickFacts.f2.label}</span>
                            <span className="text-white font-mono text-right">{t.overview.quickFacts.f2.value}</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <span className="text-gray-400">{t.overview.quickFacts.f3.label}</span>
                            <span className="text-white font-mono">{t.overview.quickFacts.f3.value}</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-gray-400">{t.overview.quickFacts.f4.label}</span>
                            <div className="flex items-center gap-2 font-mono">
                              <span className="text-white">{t.overview.quickFacts.f4.value}</span>
                            </div>
                          </div>
                        </div>

                        {/* Social Icons */}
                        <div className="pt-4 flex justify-center gap-4">
                          <a
                            href="https://www.linkedin.com/company/mozhii-ai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bkzajbj5dSYeZfNQu6TUArw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a
                            href="https://www.instagram.com/mozhii.ai?igsh=NW55ajVoc3gwOHdt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300"
                          >
                            <Instagram className="h-5 w-5" />
                          </a>
                          <a
                            href="https://www.youtube.com/@Mozhiiai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300"
                          >
                            <Youtube className="h-5 w-5" />
                          </a>
                          <a
                            href="https://www.google.com/search?sca_esv=90ecd7b778e2c380&sxsrf=AE3TifPZJXfnFERBX9OpTj_3hGuY0IkVJw%3A1767096845929&q=Mozhii&stick=H4sIAAAAAAAAAONgU1I1qLAwNTUwTrQwS0o1NzA0S02xMqgwM0g1sDQ1Nk0yMjczN0w1WsTK5ptflZGZCQAM9qpHMgAAAA&mat=CRm6Me8_iIMk&ved=2ahUKEwip_aPepOWRAxXiRmwGHRpLF0gQrMcEegQIHRAC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                          >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                            </svg>
                          </a>
                        </div>
                        <p className="text-center text-sm text-gray-400 italic">
                          Mozhii is building the foundational AI infrastructure for Tamil language
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section id="features" className="py-12 bg-transparent">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-serif drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Our AI</span> <span className="text-blue-500">Features</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.features.subtitle}</p>
              </div>

              <BentoGrid>
                {/* Render 9 equal-size, responsive feature cards (translations supported) */}
                {[
                  { data: t.features.cards.content, Icon: TamilIcon },
                  { data: t.features.cards.multilingual, Icon: Languages },
                  { data: t.features.cards.voice, Icon: Mic },
                  { data: t.features.cards.ethical, Icon: ShieldCheck },
                  { data: t.features.cards.code, Icon: Code2 },
                  { data: t.features.cards.collaboration, Icon: Users },
                  { data: t.features.cards.analytics, Icon: BarChart3 },
                  { data: t.features.cards.privacy, Icon: Lock },
                  { data: t.features.cards.offline, Icon: WifiOff },
                ].map((card) => (
                  <BentoCard
                    key={card.data.title}
                    name={card.data.title}
                    className="bg-transparent border-none shadow-none rounded-2xl backdrop-blur-none"
                    background={
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-md border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Animated Bottom Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-center" />
                      </>
                    }
                    Icon={card.Icon}
                    description={card.data.desc}
                    href="/features"
                    cta={card.data.cta}
                  />
                ))}
              </BentoGrid>

              <div className="mt-16 flex flex-col items-center space-y-4">
                <Link href="/features">
                  <Button 
                    size="lg"
                    className="bg-[#0B0377] hover:bg-[#0B0377]/80 text-white rounded-xl px-12 py-8 text-xl font-medium shadow-[0_0_20px_rgba(11,3,119,0.3)] hover:shadow-[0_0_30px_rgba(11,3,119,0.6)] transition-all duration-300 transform hover:scale-105"
                    aria-label="Explore all features"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>



        {/* Benefits Section */}
        <section className="py-24 bg-transparent hidden">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.stats.title}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.stats.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                  <Database className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">25+</h3>
                <p className="text-gray-300">{t.stats.s1}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                  <Binary className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">15+ Billion </h3>
                <p className="text-gray-300">{t.stats.s2}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                  <Workflow className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">95%</h3>
                <p className="text-gray-300">{t.stats.s3}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-gray-300">{t.stats.s4}</p>
              </div>
            </div>

            <div className="pt-16 text-center">
              <Link href="/mozhii">
                <Button 
                  size="lg"
                  className="bg-[#0B0377] hover:bg-[#0B0377]/80 text-white rounded-xl px-12 py-8 text-xl font-medium shadow-[0_0_20px_rgba(11,3,119,0.3)] hover:shadow-[0_0_30px_rgba(11,3,119,0.6)] transition-all duration-300 transform hover:scale-105"
                  aria-label={t.stats.moreAbout}
                >
                  {t.stats.moreAbout}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section (centered) */}
        <section id="plans" className="py-24 bg-transparent">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-5xl">
              <FadeIn>
                <Pricing
                  title={t.pricing.title}
                  description={t.pricing.description}
                  plans={[
                    {
                      name: t.pricing.p1.name,
                      price: t.pricing.p1.price,
                      yearlyPrice: t.pricing.p1.price,
                      period: "month",
                      features: t.pricing.p1.features,
                      description: t.pricing.p1.desc,
                      buttonText: t.pricing.p1.btn,
                      href: "#contact",
                      isPopular: false,
                    },
                    {
                      name: t.pricing.p2.name,
                      price: t.pricing.p2.price,
                      yearlyPrice: t.pricing.p2.price,
                      period: "month",
                      features: t.pricing.p2.features,
                      description: t.pricing.p2.desc,
                      buttonText: t.pricing.p2.btn,
                      href: "#contact",
                      isPopular: true,
                    },
                    {
                      name: t.pricing.p3.name,
                      price: t.pricing.p3.price,
                      yearlyPrice: t.pricing.p3.price,
                      period: "month",
                      features: t.pricing.p3.features,
                      description: t.pricing.p3.desc,
                      buttonText: t.pricing.p3.btn,
                      href: "#contact",
                      isPopular: false,
                    },
                  ]}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Team Section Removed */}
        </div>
      </main>

      {/* Waitlist Section */}
      <div id="waitlist" className="bg-black">
        <FadeIn>
          <WaitlistSection />
        </FadeIn>
      </div>

    </div>
  )
}
