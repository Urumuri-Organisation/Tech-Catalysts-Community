"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Stagger variants for smooth entry animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function LandingPage() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen py-20 sm:py-28">
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          {/* Faculty Badge */}
          <motion.span
            variants={itemVariants}
            className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
          >
            Faculty of Software Engineering
          </motion.span>

          {/* High-Impact Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-none pb-4"
          >
            Catalyzing the Future of Software Construction
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-zinc-400 font-medium"
          >
            Bridging the gap between academic theory and real-world execution.
            Join an active student-led ecosystem of advanced bootcamps,
            architectural trials, and live project incubation.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/incubator" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
              >
                Enter Incubator Portal
              </motion.button>
            </Link>

            <Link href="/learn" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(39, 39, 42, 0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-zinc-900/50 border border-zinc-800 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Tracks
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 sm:mt-44 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built Upon Three Core Operational Pillars
          </h2>
          <p className="mt-4 text-zinc-400">
            Engineered to accelerate technical maturity, collaboration, and
            systemic regional impact.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Pillar 1: Learn */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/20">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              1. Learn (Bootcamps)
            </h3>
            <p className="text-sm leading-6 text-zinc-400">
              Rigorous, peer-led engineering tracks covering concurrent systems,
              cloud architecture, and modern full-stack methodologies.
            </p>
            <div className="mt-6">
              <Link
                href="/learn"
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200"
              >
                View Tracks <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Pillar 2: Compete */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-6 border border-purple-500/20">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              2. Compete (Sprints)
            </h3>
            <p className="text-sm leading-6 text-zinc-400">
              High-intensity algorithmic challenges, sprint hackathons, and
              multi-campus invitationals engineered to push problem-solving
              thresholds.
            </p>
            <div className="mt-6">
              <Link
                href="/compete"
                className="text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200"
              >
                Join Challenges <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Pillar 3: Impact */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              3. Impact (Incubator)
            </h3>
            <p className="text-sm leading-6 text-zinc-400">
              Constructing real, production-ready systems for local clients.
              Design and engineering students synchronized to ship real software
              impact.
            </p>
            <div className="mt-6">
              <Link
                href="/incubator"
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200"
              >
                Explore Portal <span>→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. QUICK STATS PANEL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 relative z-10">
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/10 p-8 sm:p-12 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                100%
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Student Driven
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                3
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Core Pillars
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                Tier-1
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Academic Blueprint
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-400 sm:text-4xl">
                24/7
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Continuous Innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
