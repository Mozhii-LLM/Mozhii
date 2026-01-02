"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="relative py-20 bg-black">
        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
        <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_-4px_25px_rgba(96,165,250,0.6)]" />

        {/* Slight footer overlay so footer content remains readable while letting the global gradient show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/40 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="space-y-4 flex flex-col items-center lg:items-start w-full">
                <div className="relative w-20 h-20 md:w-16 md:h-16">
                  <Image
                    src="/icon.png"
                    alt="Mozhii AI Logo"
                    fill
                    sizes="(max-width: 768px) 80px, 64px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed">{t.footer.desc}</p>
              </div>

              <div className="flex space-x-4 justify-center lg:justify-start w-full">
                <a
                  href="https://www.linkedin.com/company/mozhii-ai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bkzajbj5dSYeZfNQu6TUArw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/mozhii.ai?igsh=NW55ajVoc3gwOHdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-pink-500 hover:bg-pink-500/20 hover:border-pink-500/60 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@Mozhiiai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/20 hover:border-red-500/60 transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.google.com/search?sca_esv=90ecd7b778e2c380&sxsrf=AE3TifPZJXfnFERBX9OpTj_3hGuY0IkVJw%3A1767096845929&q=Mozhii&stick=H4sIAAAAAAAAAONgU1I1qLAwNTUwTrQwS0o1NzA0S02xMqgwM0g1sDQ1Nk0yMjczN0w1WsTK5ptflZGZCQAM9qpHMgAAAA&mat=CRm6Me8_iIMk&ved=2ahUKEwip_aPepOWRAxXiRmwGHRpLF0gQrMcEegQIHRAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                  className="p-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/60 transition-all duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-400">{t.hero.comingSoon}</p>
                <div className="flex space-x-2">
                  <Image src="/app-store.png" alt="Download on the App Store" width={120} height={40} className="h-10 w-auto object-contain" />
                  <Image src="/google-play.png" alt="Get it on Google Play" width={135} height={40} className="h-10 w-auto object-contain" />
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
                  { name: t.footer.links.about, href: "/about" },
                  { name: t.footer.links.caseStudies, href: "/#testimonials" },
                  { name: t.footer.links.blog, href: "#" },
                  { name: t.footer.links.careers, href: "#" },
                  { name: t.footer.links.contact, href: "/#contact" },
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
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {t.footer.privacy}
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
