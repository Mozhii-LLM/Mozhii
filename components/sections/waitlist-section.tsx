"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useState, useTransition } from "react"
import { toast } from "sonner"
import { joinWaitlist } from "@/app/actions"
import { Loader2, Mail } from "lucide-react"

export function WaitlistSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(async () => {
      const formData = new FormData()
      formData.append("email", email)
      
      const result = await joinWaitlist(null, formData)
      
      if (result.success) {
        toast.success(result.message)
        setEmail("")
      } else {
        toast.error(result.message)
      }
    })
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Blue Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{t.waitlist.heading}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t.waitlist.description}
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto items-center justify-center" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <Input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.waitlist.placeholder}
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 h-12 rounded-full px-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                required
                disabled={isPending}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white h-12 rounded-full px-8 text-base font-medium shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  {t.waitlist.button}
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
