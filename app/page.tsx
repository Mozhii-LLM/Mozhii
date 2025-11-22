import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Image from "next/image"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
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
  Twitter,
  Facebook,
  Database,
  Binary,
} from "lucide-react"

export default function HomePage() {
  return (
  <div className="min-h-screen bg-transparent">
      {/* Navigation Component */}
      <Navbar />

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
                 Sri Lanka's Tamil Large Language Model
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg mx-auto lg:mx-0">
                  We are 2nd-year Computer Science students at Informatics Institute of Technology  (IIT), developing Mozhii.AI, an AI system that can understand and respond in natural Tamil.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                  >
                    Contact Our Team
                  </Button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-neutral-400 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span> Coming Soon... </span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our AI Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI services designed to transform your business operations
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              name="Generate High-Quality Tamil Content"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Bot}
              description="Create articles, essays, stories, captions, marketing posts, scripts, and professional documents fully in Tamil with high fluency and cultural accuracy."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Multilingual Support (Tamil • Sinhala • English)"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Workflow}
              description="Seamlessly switch between languages or mix them in the same conversation. Mozhii handles code-switching and multilingual queries with smooth transitions and high consistency."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Tamil Voice Assistant (Coming Soon)"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Cog}
              description="Speak to Mozhii using your voice. Real-time Tamil speech recognition + AI response for hands-free interactions."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Ethical AI & Safe Output Controls"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Brain}
              description="Mozhii.ai includes filtering, guardrails, and safety layers designed for responsible use—reducing harmful content, maintaining respectful tone, and ensuring safe public deployment."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Code Writing & Debugging"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={MessageSquare}
              description="Write or explain programming concepts in Tamil. Ideal for students learning to code in their native language."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
  <section id="testimonials" className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Growing Businesses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "The AI chatbot increased our lead conversion by 200% and handles 90% of customer inquiries
                    automatically. ROI was evident within the first month."
                  </p>
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
                  <p className="text-gray-300">
                    "Workflow automation saved us 25 hours per week. Our team can now focus on strategic growth instead
                    of repetitive tasks."
                  </p>
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
                  <p className="text-gray-300">
                    "The AI integration transformed our e-commerce platform. Sales increased by 180% with personalized
                    customer experiences."
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Mozhii.AI</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mozhii.ai delivers exceptional performance across all tamil linguistic needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">25+</h3>
              <p className="text-gray-300">Tamil Datasets Integrated</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                <Binary className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">15+ Billion </h3>
              <p className="text-gray-300">Tamil Token in Traning Corpus</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                <Workflow className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">95%</h3>
              <p className="text-gray-300">Dialect & Domain Accuracy Coverage </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-gray-300">Real - Time Tamil Language AI Support </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (centered) */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-5xl">
            <Pricing
              title="Choose Your AI Transformation Plan"
              description="Flexible pricing designed to scale with your business growth\nAll plans include setup, training, and 30-day money-back guarantee"
              plans={[
                {
                  name: "Mozhi lite",
                  price: "Free",
                  yearlyPrice: "Free",
                  period: "month",
                  features: [
                    "Tamil & Sinhala AI Chatbot",
                    "Basic NLP tasks (summaries, rewrite, translate)",
                    "3,000 message credits / month",
                    "Email support",
                    "API access (limited)",
                    "30-day money-back guarantee",
                  ],
                  description: "Perfect for small businesses starting their AI journey",
                  buttonText: "Start Free Trial",
                  href: "#contact",
                  isPopular: false,
                },
                {
                  name: "Mozhi plus",
                  price: "Coming Soon...",
                  yearlyPrice: "Coming Soon...",
                  period: "month",
                  features: [
                    "Advanced Tamil–Sinhala bilingual chatbot",
                    "Complete AI automation workflows (10+ flows)",
                    "20,000 message credits / month",
                    "Custom AI fine-tuning (upload your data)",
                    "Priority email + chat support",
                    "Advanced analytics & intent detection",
                    "Voice-to-Tamil/Sinhala transcription",
                    "AI content generation for businesses",
                    "API with high rate limits",
                  ],
                  description: "Ideal for growing businesses ready to scale with AI",
                  buttonText: "Get Started",
                  href: "#contact",
                  isPopular: true,
                },
                {
                  name: "Mozhi pro",
                  price: "Coming Soon...",
                  yearlyPrice: "Coming Soon...",
                  period: "month",
                  features: [
                    "Full-scale custom Tamil/Sinhala LLM development",
                    "Unlimited AI workflow automation",
                    "Dedicated GPU hosting for your model",
                    "Custom dataset training (docs, PDFs, websites)",
                    "24/7 priority support",
                    "On-premise deployment available",
                    "Compliance, security & encryption",
                    "White-label branding",
                    "Quarterly AI strategy reviews",
                  ],
                  description: "Complete AI transformation for large organizations",
                  buttonText: "Contact Sales",
                  href: "#contact",
                  isPopular: false,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet our Team — passionate builders working on Mozhii.AI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { name: "Dinojan", image: "/assets/3d/logo.png", role: "AI & ML Development" },
              { name: "Vipooshan", image: "/assets/3d/vipi.png", role: "AI & ML Development" },
              { name: "Vishalini", image: "/assets/3d/logo.png", role: "AI & ML Development" },
              { name: "Yashwin", image: "/assets/3d/logo.png", role: "AI & ML Development" },
              { name: "Ridursha", image: "/assets/3d/logo.png", role: "AI & ML Development" },
              { name: "Vishaal", image: "/assets/3d/logo.png", role: "AI & ML Development" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-black/30 border border-white/10 rounded-lg p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



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
                <p className="text-gray-300 leading-relaxed">
                  Sri Lanka's Tamil Large Language Model
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-400">Coming Soon...</p>
                <div className="flex space-x-2">
                  <img src="/app-store.png" alt="Download on the App Store" className="h-10 w-auto object-contain" />
                  <img src="/google-play.png" alt="Get it on Google Play" className="h-10 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Team</h4>
              <ul className="space-y-3">
                {[
                  "Dinojan",
                  "Vipooshan",
                  "Vishalini",
                  "Yashwin",
                  "Ridursha",
                  "Vishaal",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Case Studies", href: "#testimonials" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#contact" },
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
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
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
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+94772620357" className="hover:text-white transition-colors duration-300">
                    +94 772620357
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
              <p className="text-gray-400 text-center lg:text-left">© 2025 Mozhii.ai All rights reserved.</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
