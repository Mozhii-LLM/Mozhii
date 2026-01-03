"use client"

import { Navbar } from "@/components/layout/navbar"
import { FadeIn } from "@/components/ui/fade-in"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BenchmarksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <FadeIn>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Model</span> <span className="text-blue-500">Benchmarks</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Measuring Mozhii AI performance on Tamil language understanding and
                reasoning, compared with other Tamil-focused LLMs.
              </p>
            </div>

            {/* Competitive Snapshot Section */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-500">
                Competitive Snapshot
              </h2>
              <p className="text-gray-400">
                A comparison of Mozhii AI with other Tamil-centric LLMs, highlighting strengths in Tamil understanding, reasoning quality, and deployment efficiency. Mozhii AI results are based on internal testing and ongoing optimization.
              </p>
              
              <div className="group relative rounded-2xl overflow-hidden">
                {/* Base Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-1">
                  <div className="rounded-xl overflow-x-auto">
                    <Table className="min-w-[1000px]">
                      <TableHeader className="bg-white/5">
                        <TableRow className="border-white/10 hover:bg-white/5">
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Model</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Tamil Focus</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Language Understanding</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Reasoning</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Efficiency</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Release / Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-white/10 hover:bg-blue-500/10 transition-colors bg-blue-500/5">
                          <TableCell className="font-bold text-blue-400 whitespace-nowrap py-6">Mozhii AI</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              Primary focus
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              TBD (Target Tamil NLU)
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              TBD (Target Reasoning)
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              Optimized
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              Up coming
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Tamil‑LLaMA 13B Instruct</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Yes</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">High param cost</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Released</TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Tamil‑LLaMA 7B Instruct</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Yes</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Lower</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Lower</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Lightweight</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Released</TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Qwen3‑1.7B‑Tamil-16bit-Instruction</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Yes</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">~70.4% quality</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Good for instruction tasks</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Very lightweight</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Released</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Benchmarks Section */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-500">
                Performance Benchmarks
              </h2>
              <p className="text-gray-400">
                Comparison of Mozhii AI against other Tamil-focused models. Note: Mozhii AI metrics are internal targets; official benchmarks will be released soon.
              </p>
              
              <div className="group relative rounded-2xl overflow-hidden">
                {/* Base Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/60 to-[#0B0377]/20 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:border-blue-400/40" />
                
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0377]/30 via-black/50 to-[#0B0377]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-1">
                  <div className="rounded-xl overflow-x-auto">
                    <Table className="min-w-[800px]">
                      <TableHeader className="bg-white/5">
                        <TableRow className="border-white/10 hover:bg-white/5">
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Benchmark / Task</TableHead>
                          <TableHead className="font-semibold text-blue-400 whitespace-nowrap py-6">Mozhii AI (Expected)</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Tamil‑LLaMA 13B</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Tamil‑LLaMA 7B</TableHead>
                          <TableHead className="font-semibold text-white whitespace-nowrap py-6">Qwen3‑1.7B Tamil</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Tamil NLU Accuracy</TableCell>
                          <TableCell className="text-blue-400 font-semibold whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                                TBD
                              </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Lower</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">~70.4%</TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Tamil Reasoning</TableCell>
                          <TableCell className="text-blue-400 font-semibold whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                            TBD
                            </span>
                            </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Lower</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Instruction Following</TableCell>
                          <TableCell className="text-blue-400 font-semibold whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                            TBD
                            </span>
                            </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">High (~91.4%)</TableCell>
                        </TableRow>
                        <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white whitespace-nowrap py-6">Hallucination </TableCell>
                          <TableCell className="text-blue-400 font-semibold whitespace-nowrap py-6">
                            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
                              Low (Target)
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">Moderate</TableCell>
                          <TableCell className="text-gray-300 whitespace-nowrap py-6">High</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
