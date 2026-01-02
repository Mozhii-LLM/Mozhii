"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Our</span> <span className="text-blue-500">Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">{t.team.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                name: "Dinojan", 
                image: "/assets/3d/logo.png", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/thiyakarajah-dinojan-39664a354?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFhfUaIBKgW4psb-RmXbqm1uO3zJvZEuq4A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BZ1xnPFc8TZ66YB%2Bdm%2Fj9Fg%3D%3D",
                github: "https://github.com/Dinojan-13"
              },
              { 
                name: "Vipooshan", 
                image: "/assets/3d/vipi.png", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/balachandran-vipooshan?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFVrVqcB5lgLNLQvLqWLlWdOx979WMMnaxY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B3LZM%2FEi5QvGx2kVjqGJCkA%3D%3D",
                github: "https://github.com/vipooshanb"
              },
              { 
                name: "Vishalini", 
                image: "/assets/3d/logo.png", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/vishalini-karunatharan-03b36a354?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFhUja8BygzDsuQgcf4tLmS_lgfmakDjH5w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BzljgTj57R3am4WTk6tFV9Q%3D%3D",
                github: "https://github.com/Vishalini200310"
              },
              { 
                name: "Yashwin", 
                image: "/assets/3d/yashwin.jpg", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/yashwin01?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEeX34wBTEaw9jhiX-fs7ktUgTMwrCORcKY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BMSU0ISN7QKijACBRb%2FXRZQ%3D%3D",
                github: "https://github.com/yashwinsivakumar"
              },
              { 
                name: "Ridursha", 
                image: "/assets/3d/logo.png", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/ridursha-thiyagaraja/",
                github: "https://github.com/Ridursha"
              },
              { 
                name: "Vishaal", 
                image: "/assets/3d/logo.png", 
                role: t.team.role,
                linkedin: "https://www.linkedin.com/in/vishaal-thanapalan-733276333/",
                github: "https://github.com/thanapalanvishaal-byte"
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl overflow-hidden p-4 sm:p-6 text-center cursor-pointer"
              >
                {/* Base Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-md border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="relative mx-auto w-24 sm:w-28 h-24 sm:h-28 rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 border-2 border-blue-500/30 group-hover:border-blue-400/80">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover" 
                    />
                  </div>

                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 transition-colors duration-300 group-hover:text-blue-200">{member.role}</p>
                  
                  <div className="mt-3 flex justify-center gap-3">
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg className="w-4 h-4 text-gray-400 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
