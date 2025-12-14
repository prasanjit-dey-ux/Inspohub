"use client";

import { motion } from "motion/react"


export default function AboutPage() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-44 pb-24"
      >
        {/* Small label */}
        <div className="flex justify-start mb-6">
          <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase border border-neutral-200 px-3 py-1 rounded-full hover:bg-neutral-100 transition duration-300">
            About Inspire
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight max-w-3xl">
          Built for developers <br />
          <span className="text-blue-700 font-serif font-medium">who think visually.</span>
        </h1>

        {/* Description */}
        <div className="mt-10 max-w-2xl text-neutral-600 leading-relaxed space-y-6 text-base">
          <p>
            <strong className="text-blue-700">INSPOSITE</strong> is a curated collection of design inspiration, portfolios, and tools built for developers and designers.
          </p>

          <p>
              I realized I was spending hours scrolling through generic design galleries looking for things I could actually build. InspoSite is the solution—a dedicated space for frontend inspiration, developer portfolios, and the tools that make them possible.
          </p>

          <p>
            We believe great design starts with great references. Whether you’re building your first portfolio
            or launching your next SaaS, INSPOSITE is here to spark ideas and guide your creative process.
          </p>

          <p>Every submission is reviewed to maintain quality. No spam, no fluff.
          </p>


        </div>

        {/* Divider */}
        <hr className="border-neutral-200 my-12 w-24" />

        {/* Footer note */}
        <p className="text-sm text-neutral-400">
          Built by <a href="https://x.com/Prasanjit_ui" className="text-blue-700 hover:underline">Prasanjit Dey</a> with Next.js, Tailwind, Motion and a love for good design.
        </p>
      </motion.section>
    </div>
  );
}
