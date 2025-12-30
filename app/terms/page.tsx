"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                Terms of Service
              </h1>
            </div>

            {/* Acceptance of Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                By accessing or using Mozhii AI’s websites, applications, APIs, or related services (the “Services”), you
                agree to be bound by these Terms of Service. If you do not agree, you must not use the Services.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                These Terms apply to all users, including visitors, registered users, and contributors.
              </p>
            </section>

            {/* Eligibility */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Eligibility</h2>
              <p className="text-gray-300 leading-relaxed">
                You must be at least 18 years old to use Mozhii AI. If you are using the Services on behalf of an
                organization, you confirm that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            {/* User Accounts */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">User Accounts</h2>
              <p className="text-gray-300 leading-relaxed">
                Some features may require account registration. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Providing accurate information</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity conducted through your account</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Mozhii AI is not responsible for unauthorized access caused by user negligence.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed">You agree not to use Mozhii AI to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Violate any applicable law or regulation</li>
                <li>Generate harmful, abusive, or misleading content</li>
                <li>Attempt to reverse-engineer, disrupt, or exploit the platform</li>
                <li>Upload malicious code or conduct automated abuse</li>
                <li>Misrepresent AI-generated content as human-generated without disclosure where required</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Mozhii AI reserves the right to restrict or suspend access for violations.
              </p>
            </section>

            {/* AI Services Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">AI Services Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                Mozhii AI provides automated AI-generated responses. You understand and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>AI outputs may be inaccurate, incomplete, or outdated</li>
                <li>Responses are provided for informational purposes only</li>
                <li>Mozhii AI does not provide legal, medical, financial, or professional advice</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You are solely responsible for how you use AI-generated content.
              </p>
            </section>

            {/* Termination */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Mozhii AI may suspend or terminate access at any time if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>These Terms are violated</li>
                <li>The Services are misused</li>
                <li>Required by law or security concerns</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">Users may stop using the Services at any time.</p>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Mozhii AI shall not be liable for indirect, incidental, or consequential damages</li>
                <li>Use of the Services is at your own risk</li>
                <li>
                  The total liability of Mozhii AI shall not exceed the amount paid (if any) for use of the Services.
                </li>
              </ul>
            </section>

            {/* Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of Mozhii AI is also governed by our{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
                , which explains how data is collected and processed.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of Sri Lanka, without regard
                to conflict of law principles.
              </p>
            </section>

            {/* Changes to These Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Changes to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. Continued use of Mozhii AI after changes means you accept the
                updated Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>For questions regarding these Terms, contact:</p>
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
