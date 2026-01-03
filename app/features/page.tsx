"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import { 
  MessageSquare, 
  Globe, 
  RefreshCw, 
  Users, 
  Folder, 
  Link as LinkIcon, 
  Download, 
  Mic, 
  Shield,
  Sparkles,
  Database,
  CheckCircle,
  UploadCloud,
  Building2,
  Sliders,
  Code
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Tamil-First AI",
    description: "Mozhii AI is built to respond primarily in high-quality Tamil, ensuring natural language flow, cultural relevance, and clarity.",
    icon: MessageSquare,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-600/5",
    delay: 0.1
  },
  {
    title: "Multilingual Support",
    description: "Ask questions in Tamil, Sinhala, or English. Mozhii understands all three languages seamlessly and provides accurate responses.",
    icon: Globe,
    color: "text-green-400",
    gradient: "from-green-500/20 to-green-600/5",
    delay: 0.2
  },
  {
    title: "Instant Switching",
    description: "Switch responses instantly between Tamil, Sinhala, or English without restarting the conversation context.",
    icon: RefreshCw,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-600/5",
    delay: 0.3
  },
  {
    title: "Group Collaboration",
    description: "Collaborate with multiple users in a shared conversation - ideal for teams, students, and group discussions.",
    icon: Users,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-orange-600/5",
    delay: 0.4
  },
  {
    title: "Project Management",
    description: "Create dedicated AI-powered projects to organize conversations, ideas, and tasks in one unified workspace.",
    icon: Folder,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-yellow-600/5",
    delay: 0.5
  },
  {
    title: "Secure Sharing",
    description: "Share conversations easily using a link-only sharing option, with full control over access and permissions.",
    icon: LinkIcon,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-pink-600/5",
    delay: 0.6
  },
  {
    title: "Export Chats",
    description: "Export your conversations in PDF or Doc format for reports, documentation, or offline reference.",
    icon: Download,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    delay: 0.7
  },
  {
    title: "Voice Assistant",
    description: "Talk to Mozhii AI using voice for hands-free, real-time Tamil AI interactions (Coming Soon).",
    icon: Mic,
    color: "text-red-400",
    gradient: "from-red-500/20 to-red-600/5",
    delay: 0.8
  },
  {
    title: "Privacy & Security",
    description: "Your conversations remain private. Mozhii.AI is designed with strong privacy protection and responsible AI practices.",
    icon: Shield,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    delay: 0.9
  },
]

const additionalFeatures = [
  {
    title: "Knowledge-Augmented Responses (RAG)",
    description: "Mozhii AI retrieves answers from trusted knowledge sources to provide accurate, grounded, and up-to-date Tamil responses.",
    icon: Database,
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-indigo-600/5",
    delay: 0.1
  },
  {
    title: "Low Hallucination Design",
    description: "Optimized to reduce incorrect or made-up answers, ensuring reliable and trustworthy information for Tamil users.",
    icon: CheckCircle,
    color: "text-teal-400",
    gradient: "from-teal-500/20 to-teal-600/5",
    delay: 0.2
  },
  {
    title: "Custom Knowledge Upload",
    description: "Upload documents, PDFs, or notes in Tamil or English and ask Mozhii AI questions based on your own data.",
    icon: UploadCloud,
    color: "text-sky-400",
    gradient: "from-sky-500/20 to-sky-600/5",
    delay: 0.3
  },
  {
    


    title: "AI Image Generation",
    description: "Generate high-quality images from text prompts for design, education, marketing, and creative use cases.",
    icon: Building2,
    color: "text-slate-400",
    gradient: "from-slate-500/20 to-slate-600/5",
    delay: 0.4
  },
  {
    title: "Personalized Response Tone",
    description: "Choose how Mozhii AI responds — formal, friendly, educational, or professional — in Tamil.",
    icon: Sliders,
    color: "text-rose-400",
    gradient: "from-rose-500/20 to-rose-600/5",
    delay: 0.5
  },
  {
    title: "Developer-Friendly APIs",
    description: "Integrate Mozhii AI into websites, mobile apps, and internal systems using secure and scalable APIs.",
    icon: Code,
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-violet-600/5",
    delay: 0.6
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="text-center space-y-6 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Features
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Everything you need to</span> <br className="hidden md:block" />
              <span className="text-blue-500">master languages</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover the tools that make Mozhii the most advanced Tamil LLM platform, designed for seamless communication and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-blue-500/30 bg-white/5 p-8 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-32 text-center space-y-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Additional</span> <span className="text-blue-500">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-blue-500/30 bg-white/5 p-8 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
