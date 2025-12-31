"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-6 font-medium transition-all hover:text-blue-400 [&[data-state=open]>svg]:rotate-45 text-left text-lg",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-6 w-6 text-blue-500 transition-transform duration-200 shrink-0 ml-4" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
CustomAccordionTrigger.displayName = "CustomAccordionTrigger"

export default function AboutPage() {
  const { t } = useLanguage()
  const { aboutPage } = t

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                {aboutPage.title}
              </h1>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {aboutPage.faqs.map((faq: { question: string; answer: string }, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-2">
                    <CustomAccordionTrigger className="text-white hover:no-underline">
                      {faq.question}
                    </CustomAccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                      {faq.answer}
                      {faq.list && (
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-blue-500 mt-4">
                          {faq.list.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
