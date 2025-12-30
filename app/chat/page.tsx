"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Menu, 
  Plus, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  History, 
  Send, 
  Mic, 
  Image as ImageIcon,
  Sparkles,
  FolderPlus,
  Users
} from "lucide-react"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/common/language-switcher"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ChatPage() {
  // Default state is collapsed (false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect()
      setMouseY(e.clientY - rect.top)
    }
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans relative">
      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        onMouseMove={handleMouseMove}
        className={`
          fixed md:relative z-30 h-full
          bg-[#0a0a0a] md:bg-white/5 backdrop-blur-xl border-r border-white/10 
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
          flex flex-col shadow-2xl group
          ${isExpanded ? "w-72 translate-x-0" : "w-72 -translate-x-full md:w-20 md:translate-x-0"}
        `}
      >
        {/* Glowing Border Line */}
        <div 
          className="absolute right-0 top-0 w-[3px] h-full pointer-events-none z-50"
          style={{
            background: `radial-gradient(600px circle at center ${mouseY}px, rgba(59, 130, 246, 1), transparent 40%)`
          }}
        />

        <div className="p-4 flex flex-col gap-6 h-full relative z-10">
          {/* Toggle Button */}
          <div 
            className={`flex items-center ${isExpanded ? "justify-start px-2" : "justify-center"} cursor-pointer transition-all duration-300`} 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Menu className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-12 gap-0 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300`}
              title={t.chat.createProject}
            >
              <FolderPlus className="h-5 w-5 shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                {t.chat.createProject}
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-12 gap-0 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300`}
              title={t.chat.createGroupChat}
            >
              <Users className="h-5 w-5 shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                {t.chat.createGroupChat}
              </span>
            </Button>
          </div>

          {/* History Section */}
          <div className="pt-4 border-t border-white/10">
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "h-6 opacity-100 mb-2" : "h-0 opacity-0 mb-0"}`}>
              <p className="text-xs font-medium text-gray-500 px-4 uppercase tracking-wider whitespace-nowrap">
                {t.chat.history}
              </p>
            </div>
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-10 gap-0 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300`}
                title={t.chat.tamilGrammarHelp}
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                  {t.chat.tamilGrammarHelp}
                </span>
              </Button>
              <Button 
                variant="ghost" 
                className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-10 gap-0 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300`}
                title={t.chat.translateToSinhala}
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                  {t.chat.translateToSinhala}
                </span>
              </Button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto pt-4 border-t border-white/10 space-y-1">
            <Button 
              variant="ghost" 
              className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-10 gap-0 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300`}
              title={t.chat.help}
            >
              <HelpCircle className="h-5 w-5 shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                {t.chat.help}
              </span>
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-10 gap-0 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300`}
              title={t.chat.activity}
            >
              <History className="h-5 w-5 shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                {t.chat.activity}
              </span>
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full ${isExpanded ? "justify-start px-4" : "justify-center px-0"} h-10 gap-0 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300`}
              title={t.chat.settings}
            >
              <Settings className="h-5 w-5 shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "w-auto opacity-100 ml-3 translate-x-0" : "w-0 opacity-0 ml-0 -translate-x-4"}`}>
                {t.chat.settings}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative w-full">
        <LanguageSwitcher className="fixed top-1/2 right-4 -translate-y-1/2 left-auto bottom-auto translate-x-0 flex-col" />
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 border-b border-white/10 bg-[#1e1e1e]">
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
            <Menu className="h-6 w-6" />
          </Button>
          <span className="ml-4 font-semibold">Mozhii AI</span>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="text-center space-y-8 relative z-10 max-w-2xl w-full">
            {/* Logo */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 animate-pulse">
              <Image
                src="/icon.png"
                alt="Mozhii AI Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              />
            </div>

            {/* Welcome Text */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                {t.chat.helloHuman}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light">
                {t.chat.howCanIHelp}
              </h2>
            </div>

            {/* Status Message */}
            <div className="py-8">
              <div className="inline-block px-6 py-3 rounded-full bg-blue-900/20 border border-blue-500/30 backdrop-blur-sm">
                <p className="text-blue-300 font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t.chat.workingOnComingSoon}
                </p>
              </div>
              <p className="mt-4 text-gray-500 text-sm">{t.chat.thankYouForVisit}</p>
            </div>

            {/* Suggestion Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full opacity-50 pointer-events-none select-none">
              <div className="p-4 rounded-xl bg-[#1e1e1e] border border-white/5 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
                <p className="text-sm text-gray-300">{t.chat.suggestion1Title}</p>
                <p className="text-sm text-gray-500">{t.chat.suggestion1Desc}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1e1e1e] border border-white/5 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
                <p className="text-sm text-gray-300">{t.chat.suggestion2Title}</p>
                <p className="text-sm text-gray-500">{t.chat.suggestion2Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area (Dummy) */}
        <div className="p-4 md:p-6 max-w-4xl mx-auto w-full relative z-20">
          <div className="relative">
            <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 flex gap-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full h-8 w-8">
                <ImageIcon className="h-5 w-5" />
              </Button>
            </div>
            <Input 
              placeholder={t.chat.enterPrompt}
              className="w-full bg-[#1e1e1e] border-white/10 rounded-full py-6 pl-12 pr-20 md:pl-14 md:pr-24 text-gray-300 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 text-sm md:text-base"
              // Removed disabled prop to allow typing
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Prevent enter from doing anything
                }
              }}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full h-8 w-8">
                <Mic className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-8 w-8 ml-1 cursor-default"
                onClick={(e) => e.preventDefault()} // Prevent click
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-3">
            {t.chat.disclaimer}
          </p>
          
          <div className="mt-4 text-center">
             <Link href="/">
                <Button variant="link" className="text-gray-500 hover:text-white text-xs">
                    {t.chat.backToHome}
                </Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
