"use client"

import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import confetti from "canvas-confetti"

interface PricingPlan {
  name: string
  price: string
  yearlyPrice: string
  period: string
  features: string[]
  description: string
  buttonText: string
  href: string
  isPopular: boolean
}

interface PricingProps {
  plans: PricingPlan[]
  title?: string
  description?: string
  annualBillingText?: string
  saveText?: string
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
  annualBillingText = "Annual billing",
  saveText = "(Save 20%)",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const switchRef = useRef<HTMLButtonElement>(null)

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))", "hsl(var(--muted))"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      })
    }
  }

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">{title}</h2>
        
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch ref={switchRef as any} checked={!isMonthly} onCheckedChange={handleToggle} className="relative" />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-white">
          {annualBillingText} <span className="text-blue-400">{saveText}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl p-6 bg-white/8 backdrop-blur-md text-center lg:flex lg:flex-col lg:justify-center relative",
              "flex flex-col",
              "border border-white/10",
              "transition-all duration-300",
              "w-full",
              !isDesktop && "mt-2",
              // Hover effects: lift, scale, stronger shadow, ring outline and subtle bg change
              "hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400 hover:bg-white/6 hover:border-transparent",
            )}
          >
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-gray-300">{plan.name}</p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                {(() => {
                  const price = isMonthly ? plan.price : plan.yearlyPrice
                  const isNumeric = /^\d/.test(price)
                  return (
                    <span
                      className={cn(
                        "font-bold tracking-tight text-white transition-all duration-500 ease-out",
                        isNumeric ? "text-5xl" : "text-2xl",
                      )}
                    >
                      {isNumeric && "$"}
                      {price}
                    </span>
                  )
                })()}
                {plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">/ {plan.period}</span>
                )}
              </div>

              <p className="text-xs leading-5 text-gray-400">{isMonthly ? "billed monthly" : "billed annually"}</p>

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-left text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4 border-white/20" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-400 hover:ring-offset-1 hover:bg-blue-500 hover:text-white",
                  "bg-white/10 text-white border-white/20",
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-xs leading-5 text-gray-400">{plan.description}</p>
            </div>
              </div>
        ))}
      </div>
    </div>
  )
}
