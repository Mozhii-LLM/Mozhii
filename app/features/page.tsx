"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

type FeatureCard = {
  title: string
  description: string
  imageSrc: string
  gridClassName: string
  imageClassName?: string
}

const featureCards: FeatureCard[] = [
  {
    title: "Tamil - Only AI Response",
    description:
      "Mozhii AI is built to respond primarily in high Tamil, ensuring natural language flow, cultural relevance, and clarity.",
    imageSrc: "/assets/features/tamil-only.svg",
    gridClassName: "lg:col-span-1 lg:row-span-2",
    imageClassName: "object-contain object-bottom",
  },
  {
    title: "Multilingual Prompt Support (Tamil • Sinhala • English)",
    description:
      "Ask question in Tamil Sinhala or English. Mozhii understands all three seamlessly",
    imageSrc: "/assets/features/multilingual.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-center scale-95",
  },
  {
    title: "Instant Language Switching",
    description:
      "Switch responses instantly between Tamil, Sinhala or English without restarting the conversation",
    imageSrc: "/assets/features/language-switch.svg",
    gridClassName: "lg:col-span-1 lg:row-span-2",
    imageClassName: "object-contain object-bottom",
  },
  {
    title: "Group Chat & Collaboration",
    description:
      "Collaborate with multiple users in a shared conversation - ideal for teams, students, and discussions.",
    imageSrc: "/assets/features/group-chat.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-center scale-90",
  },
  {
    title: "Project Folder creation & Management",
    description:
      "Create dedicated AI - powered projects to organize conversations, ideas, and tasks in one workspace.",
    imageSrc: "/assets/features/project-folder.svg",
    gridClassName: "lg:col-span-2 lg:row-span-1",
    imageClassName: "object-contain object-center scale-90",
  },
  {
    title: "Share via secure Link",
    description:
      "Share conversations easily using a link-only sharing option, with full control over access",
    imageSrc: "/assets/features/secure-link.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-center scale-90",
  },
  {
    title: "Download Conversations",
    description:
      "Export your chats in PDF or Doc format for reports, documentation or offline use.",
    imageSrc: "/assets/features/download.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-bottom scale-95",
  },
  {
    title: "Voice Assistant (Coming Soon)",
    description:
      "Talk to Mozhii AI using voice for hands-free, real-time Tamil AI interactions",
    imageSrc: "/assets/features/voice.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-center scale-90",
  },
  {
    title: "Data Privacy & Security",
    description:
      "Your conversations remain private. Mozhii.AI is designed with strong privacy protection and responsible AI practices",
    imageSrc: "/assets/features/privacy.svg",
    gridClassName: "lg:col-span-1 lg:row-span-1",
    imageClassName: "object-contain object-bottom scale-95",
  },
]

function FeatureBentoCard({ card }: { card: FeatureCard }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md " +
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] " +
        card.gridClassName
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#0B0377]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#0B0377]/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
            {card.title}
          </h3>
          <p className="mt-2 text-sm md:text-[15px] text-white/65 leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="mt-6 flex-1 relative">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-0">
            <Image
              src={card.imageSrc}
              alt={card.title}
              fill
              className={
                "select-none opacity-90 transition-transform duration-300 group-hover:scale-[1.02] " +
                (card.imageClassName ?? "object-contain object-center")
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="mt-5 h-[2px] w-10 rounded-full bg-[#0B0377]/70 transition-all duration-300 group-hover:w-24" />
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-col items-center gap-2">
                <span className="text-white">Discover Our</span>
                <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">Mozhii AI Features</span>
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/65 max-w-3xl mx-auto leading-relaxed">
                From Tamil-first AI responses to multilingual prompts and collaborative tools,
                Mozhi.AI makes intelligent conversations simple, accessible, and culturally
                accurate.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
              {featureCards.map((card) => (
                <FeatureBentoCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
