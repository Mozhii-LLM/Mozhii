"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { Button } from "@/components/ui/button"
import { LogOut, Bot, Sparkles, Construction } from "lucide-react"

export default function Chat() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0B0377] via-black to-black opacity-80" />

      {/* Sparkles Effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Mozhii.AI</span>
        </div>
        <Button 
          onClick={logout}
          variant="ghost" 
          className="text-gray-300 hover:text-white hover:bg-white/10 gap-2 transition-all duration-300"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-blue-200">Development in Progress</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tight"
        >
          Mozhii AI Interface
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
        >
          We are crafting a revolutionary AI experience. The chat interface is currently under construction and will be available soon with powerful features.
        </motion.p>

        {/* Feature Cards Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {[
            { icon: Bot, title: "Advanced AI", desc: "Next-gen language models" },
            { icon: Sparkles, title: "Creative Studio", desc: "Image & content generation" },
            { icon: Construction, title: "Coming Soon", desc: "Full chat capabilities" }
          ].map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col items-center gap-4"
            >
              <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-sm text-gray-600 z-20">
        <p>© 2025 Mozhii AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
