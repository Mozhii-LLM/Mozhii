"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useState, useTransition } from "react"
import { toast } from "sonner"
import { joinWaitlist } from "@/app/actions"
import { Loader2 } from "lucide-react"

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
    <section className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            {t.waitlist.heading}
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            {t.waitlist.description}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <Input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.waitlist.placeholder}
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-neutral-500"
              required
              disabled={isPending}
            />
            <Button 
              type="submit" 
              className="bg-white text-black hover:bg-neutral-200 whitespace-nowrap font-medium"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                t.waitlist.button
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
