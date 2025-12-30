"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                Privacy & Policy
              </h1>
            </div>

            {/* About Mozhii AI */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">About Mozhii AI</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Mozhii AI is a Tamil-focused artificial intelligence platform designed to deliver language understanding,
                responses, and tools optimized for Tamil users. This Privacy Policy explains how Mozhii AI collects,
                processes, stores, and protects information when you access or use our websites, applications, APIs, and
                related services (collectively, the “Platform”).
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                By using Mozhii AI, you acknowledge and agree to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* Scope of This Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Scope of This Policy</h2>
              <p className="text-gray-300 leading-relaxed">This policy applies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Website visitors</li>
                <li>Registered users</li>
                <li>Contributors to data collection or feedback programs</li>
                <li>API and application users</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                It does not apply to third-party services linked from Mozhii AI, which operate under their own privacy
                policies.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed">
                We collect information only to operate and improve Mozhii AI responsibly.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white">a. User-Provided Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Name or display name (if provided)</li>
                  <li>Email address (for authentication or communication)</li>
                  <li>Account credentials</li>
                  <li>Feedback, prompts, or submissions entered into the platform</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white">b. Content Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Text prompts and AI responses</li>
                  <li>Contributions to Tamil data collection, training, or evaluation programs</li>
                </ul>
                <p className="text-gray-300 italic border-l-4 border-[#0B0377] pl-4 py-2 bg-white/5 rounded-r-lg">
                  <span className="font-semibold text-white">Important:</span> We do not intentionally collect sensitive
                  personal data such as national IDs, financial details, or health information.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white">c. Technical & Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>IP address</li>
                  <li>Device and browser type</li>
                  <li>Operating system</li>
                  <li>Usage logs, timestamps, and interaction patterns</li>
                </ul>
              </div>
            </section>

            {/* Purpose of Data Processing */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Purpose of Data Processing</h2>
              <p className="text-gray-300 leading-relaxed">
                Mozhii AI processes information for legitimate and limited purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Providing and maintaining AI services</li>
                <li>Improving Tamil language accuracy and performance</li>
                <li>Training and evaluating AI models using anonymized data</li>
                <li>Ensuring platform security and abuse prevention</li>
                <li>Communicating service updates and system notices</li>
                <li>Meeting legal and regulatory requirements</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We do not use personal data for advertising or sell user information to third parties.
              </p>
            </section>

            {/* User Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">User Rights</h2>
              <p className="text-gray-300 leading-relaxed">Depending on applicable laws, users may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Access their personal information</li>
                <li>Request corrections or updates</li>
                <li>Request deletion of personal data</li>
                <li>Withdraw consent for specific data processing activities</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Requests can be made by contacting us using the details below.
              </p>
            </section>

            {/* Policy Changes */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Policy Changes</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy may be updated periodically to reflect changes in technology, regulations, or platform
                features. Any updates will be published on this page with a revised date.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Continued use of Mozhii AI after changes indicates acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>For privacy-related questions or requests, contact:</p>
                <div className="mt-4 space-y-1">
                  <p className="font-semibold text-white text-lg">Mozhii AI</p>
                  <p>Sri Lanka</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:mozhii2025@gmail.com"
                      className="text-[#4d47b5] hover:text-[#0B0377] transition-colors font-medium"
                    >
                      mozhii2025@gmail.com
                    </a>
                  </p>
                  <p>
                    or{" "}
                    <Link href="/#team" className="text-[#4d47b5] hover:text-[#0B0377] transition-colors font-medium underline decoration-1 underline-offset-4">
                      contact our team
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm">Last Updated 15 November 2025</p>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
