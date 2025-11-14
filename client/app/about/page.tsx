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
            <strong className="text-blue-700">INSPIRE</strong> was built for developers who think visually. Our goal is to make finding
            inspiration simple, minimal, and meaningful.
          </p>

          <p>
            In a world overflowing with design inspiration, we curate what matters — clean portfolios,
            thoughtful interfaces, and tools that enhance your workflow.
          </p>

          <p>
            We believe great design starts with great references. Whether you’re building your first portfolio
            or launching your next SaaS, INSPIRE is here to spark ideas and guide your creative process.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-neutral-200 my-12 w-24" />

        {/* Footer note */}
        <p className="text-sm text-neutral-400">
          Curated by developers, for developers — built with Next.js, Tailwind, and curiosity.
        </p>
      </motion.section>
    </div>
  );
}
