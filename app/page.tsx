"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Image from "next/image"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
import { WaitlistSection } from "@/components/waitlist-section"
import { useLanguage } from "@/lib/language-context"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Bot,
  Workflow,
  Brain,
  MessageSquare,
  Cog,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Database,
  Binary,
} from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation Component */}
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-10 lg:pt-0 lg:pb-0">
          <div className="container mx-auto px-4 h-full flex items-center">
            {/* Make Card background transparent so the global radial gradient shows through.
        Keep a subtle backdrop blur for readability. */}
            <Card className="w-full min-h-[80vh] lg:h-screen bg-transparent backdrop-blur-sm relative overflow-hidden border-none flex items-center">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

              <div className="flex flex-col lg:flex-row h-full w-full items-center justify-center pt-20 lg:pt-0">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                    {t.hero.title}
                  </h1>
                  <p className="mt-4 text-neutral-300 max-w-lg mx-auto lg:mx-0">{t.hero.description}</p>


                  <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      {t.hero.joinWaitlist}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                    >
                      {t.hero.contactTeam}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-neutral-400 mt-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span> {t.hero.comingSoon} </span>
                    </div>
                  </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative flex items-center justify-center p-8 lg:p-0">
                  <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[650px]">
                    <Image
                      src="/image.png"
                      alt="Mozhii.AI Interface"
                      width={800}
                      height={800}
                      className="relative z-10 w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.features.title}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.features.subtitle}</p>
            </div>

            <BentoGrid>
              {/* Render 9 equal-size, responsive feature cards (translations supported) */}
              {[
                { data: t.features.cards.content, Icon: Bot },
                { data: t.features.cards.multilingual, Icon: Workflow },
                { data: t.features.cards.voice, Icon: Cog },
                { data: t.features.cards.ethical, Icon: Brain },
                { data: t.features.cards.code, Icon: MessageSquare },
                { data: t.features.cards.collaboration, Icon: TrendingUp },
                { data: t.features.cards.analytics, Icon: BarChart3 },
                { data: t.features.cards.privacy, Icon: Database },
                { data: t.features.cards.offline, Icon: Clock },
              ].map((card) => (
                <BentoCard
                  key={card.data.title}
                  name={card.data.title}
                  className=""
                  background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
                  Icon={card.Icon}
                  description={card.data.desc}
                  href="#"
                  cta={card.data.cta}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.testimonials.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/80 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">"{t.testimonials.t1}"</p>
                    <div>
                      <p className="font-semibold text-white">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">CEO, TechStart Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">"{t.testimonials.t2}"</p>
                    <div>
                      <p className="font-semibold text-white">Michael Chen</p>
                      <p className="text-sm text-gray-400">Operations Director, GrowthCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    <p className="text-gray-300">"{t.testimonials.t3}"</p>
                    <div>
                      <p className="font-semibold text-white">Emily Rodriguez</p>
                      <p className="text-sm text-gray-400">Founder, RetailMax</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-transparent">
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
          </div>
        </section>

        {/* Pricing Section (centered) */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-5xl">
              <Pricing
                title={t.pricing.title}
                description={t.pricing.description}
                annualBillingText={t.pricing.annualBilling}
                saveText={t.pricing.save20}
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
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t.team.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">{t.team.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { name: "Dinojan", image: "/assets/3d/logo.png", role: t.team.role },
                { name: "Vipooshan", image: "/assets/3d/vipi.png", role: t.team.role },
                { name: "Vishalini", image: "/assets/3d/logo.png", role: t.team.role },
                { name: "Yashwin", image: "/assets/3d/yashwin.jpg", role: t.team.role },
                { name: "Ridursha", image: "/assets/3d/logo.png", role: t.team.role },
                { name: "Vishaal", image: "/assets/3d/logo.png", role: t.team.role },
              ].map((member) => (
                <div
                  key={member.name}
                  className="group relative bg-black/30 border border-blue-500/20 rounded-lg p-4 sm:p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                >
                  {/* Outline glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                    boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)"
                  }} />

                  <div className="relative z-10 mx-auto w-24 sm:w-28 h-24 sm:h-28 rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 border-2 border-blue-500/30 group-hover:border-blue-400/80">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="relative z-10 mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">{member.name}</h3>
                  <p className="relative z-10 text-xs sm:text-sm text-gray-300 transition-colors duration-300 group-hover:text-blue-200">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Footer */}
      <footer id="contact" className="relative py-20 bg-transparent border-t border-white/10 overflow-hidden">
        {/* Slight footer overlay so footer content remains readable while letting the global gradient show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/40" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white"> Mozhii.Ai </h3>
                <p className="text-gray-300 leading-relaxed">{t.footer.desc}</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/mozhii-ai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bkzajbj5dSYeZfNQu6TUArw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/mozhii.ai?igsh=NW55ajVoc3gwOHdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1ACfpDiSFA/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-400">{t.hero.comingSoon}</p>
                <div className="flex space-x-2">
                  <img src="/app-store.png" alt="Download on the App Store" className="h-10 w-auto object-contain" />
                  <img src="/google-play.png" alt="Get it on Google Play" className="h-10 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{t.footer.team}</h4>
              <ul className="space-y-3">
                {[
                  { name: "Dinojan", linkedin: "https://www.linkedin.com/in/thiyakarajah-dinojan-39664a354?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFhfUaIBKgW4psb-RmXbqm1uO3zJvZEuq4A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BZ1xnPFc8TZ66YB%2Bdm%2Fj9Fg%3D%3D" },
                  { name: "Vipooshan", linkedin: "https://www.linkedin.com/in/balachandran-vipooshan?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFVrVqcB5lgLNLQvLqWLlWdOx979WMMnaxY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B3LZM%2FEi5QvGx2kVjqGJCkA%3D%3D" },
                  { name: "Vishalini", linkedin: "https://www.linkedin.com/in/vishalini-karunatharan-03b36a354?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFhUja8BygzDsuQgcf4tLmS_lgfmakDjH5w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BzljgTj57R3am4WTk6tFV9Q%3D%3D" },
                  { name: "Yashwin", linkedin: "https://www.linkedin.com/in/yashwin01?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEeX34wBTEaw9jhiX-fs7ktUgTMwrCORcKY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BMSU0ISN7QKijACBRb%2FXRZQ%3D%3D" },
                  { name: "Ridursha", linkedin: "https://www.linkedin.com/in/ridursha-thiyagaraja/" },
                  { name: "Vishaal", linkedin: "https://www.linkedin.com/in/vishaal-thanapalan-733276333/" },
                ].map((member) => (
                  <li key={member.name}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {member.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{t.footer.company}</h4>
              <ul className="space-y-3">
                {[
                  { name: t.footer.links.about, href: "#" },
                  { name: t.footer.links.caseStudies, href: "#testimonials" },
                  { name: t.footer.links.blog, href: "#" },
                  { name: t.footer.links.careers, href: "#" },
                  { name: t.footer.links.contact, href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{t.footer.getInTouch}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:mozhii2025@gmail.com" className="hover:text-white transition-colors duration-300">
                    mozhii2025@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">{t.footer.rights}</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {t.footer.privacy}
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {t.footer.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
