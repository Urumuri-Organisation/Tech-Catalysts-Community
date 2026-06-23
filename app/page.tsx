"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Strict type-safe variants preventing compilation errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 24 },
  },
};

// Data models for structural validation
const journeyStages = [
  {
    stage: "LEARN",
    title: "Advanced Engineering Tracks",
    desc: "Peer-led bootcamps tackling concurrent systems, distributed networks, and modern UI architectures.",
    outcome: "Systems Mastery",
  },
  {
    stage: "COMPETE",
    title: "High-Intensity Sprints",
    desc: "Algorithmic invitationals and rapid hackathons built to push technical limits under production duress.",
    outcome: "Velocity & Resilience",
  },
  {
    stage: "BUILD",
    title: "Collaborative Labs",
    desc: "Cross-disciplinary teams converging to turn conceptual blueprints into optimized software architectures.",
    outcome: "Product Ownership",
  },
  {
    stage: "LEAD",
    title: "Ecosystem Mentorship",
    desc: "Stepping into operational roles, managing sprints, and governing community infrastructure initiatives.",
    outcome: "Organizational Scale",
  },
  {
    stage: "IMPACT",
    title: "The Venture Incubator",
    desc: "Shipping production-ready, pro-bono systems to real-world clients and local enterprise hubs.",
    outcome: "Regional Transformation",
  },
];

const featuredProjects = [
  {
    title: "Nexus Analytics Protocol",
    category: "Open Source / Infrastructure",
    desc: "A zero-overhead telemetry client processing over 10M events/sec with edge localization.",
    tags: ["Next.js", "Rust", "WASM"],
  },
  {
    title: "Aura Design Engine",
    category: "Community Tooling",
    desc: "A headless, spatial token translator built for highly collaborative product teams.",
    tags: ["TypeScript", "GSAP", "Tailwind"],
  },
];

export default function RedesignedLandingPage() {
  const trustSectionRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger Integration Strategy hook
  useEffect(() => {
    // Dynamically import GSAP on client-side mount to preserve Next.js Server Side Rendering (SSR) compatibility
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Smooth parallax and revealing effects for the Journey Timeline
      gsap.fromTo(
        ".timeline-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    };
    initGSAP();
  }, []);

  return (
    <div className="bg-white text-zinc-900 selection:bg-green-100 selection:text-green-800 min-h-screen antialiased overflow-x-hidden">
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >

            {/* Apple-style Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl leading-none max-w-3xl"
            >
              Where Future Technology Leaders{" "}
              <span className="text-green-600">Are Built.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg sm:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl"
            >
              Join an elite student-driven ecosystem bridging the space between
              computer science theory and production-grade execution[cite: 139].
              We do not just code—we build systems that endure.
            </motion.p>

            {/* Strategic Linear-style Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/incubator" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.01, translateY: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/10 transition-colors duration-200"
                >
                  Join the Movement
                </motion.button>
              </Link>
              <Link href="/learn" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.01, backgroundColor: "#f4f4f5" }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-zinc-600 bg-white border border-zinc-200 shadow-sm transition-colors duration-200"
                >
                  Explore Core Tracks
                </motion.button>
              </Link>
            </motion.div>

            {/* Micro Social Proof Layer */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-6 border-t border-zinc-100 pt-8 w-full justify-center"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-zinc-900">450+</p>
                <p className="text-xs text-zinc-400 uppercase font-medium tracking-wider">
                  Active Builders
                </p>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-zinc-900">14</p>
                <p className="text-xs text-zinc-400 uppercase font-medium tracking-wider">
                  Shipped Systems
                </p>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-zinc-900">24/7</p>
                <p className="text-xs text-zinc-400 uppercase font-medium tracking-wider">
                  Lab Innovation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL TRUST SECTION */}
      <section
        ref={trustSectionRef}
        className="py-12 border-y border-zinc-100 bg-zinc-50/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Recognized and Supported By Leading Institutions
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-60 grayscale filter contrast-200">
            <span className="font-bold tracking-tight text-lg text-zinc-800">
              FACULTY AFFILIATED
            </span>{" "}
            <span className="font-semibold tracking-tight text-lg text-zinc-800">
              INNOVATION LABS
            </span>
            <span className="font-medium tracking-wider text-lg text-zinc-800">
              MIT REGIONAL NETWORKS
            </span>
            <span className="font-bold tracking-tight text-lg text-zinc-800">
              YC ALUMNI HUBS
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE JOURNEY TIMELINE (REPLACING THE 3 CARDS) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-xs font-bold tracking-widest text-green-600 uppercase">
            The Blueprint
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            A Visual Engine of Growth
          </p>
          <p className="mt-4 text-zinc-500 text-base">
            We have systematically broken down professional technical maturity
            into five progressive milestones.
          </p>
        </div>

        <div className="relative timeline-container max-w-4xl mx-auto">
          {/* Central Connecting Axis */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-100 transform -translate-x-1/2" />
          <div className="absolute left-4 sm:left-1/2 top-0 w-0.5 bg-green-500 transform -translate-x-1/2 timeline-line origin-top" />

          {journeyStages.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex flex-col sm:flex-row items-start mb-16 sm:mb-24",
                idx % 2 === 0 ? "sm:flex-row-reverse" : "",
              )}
            >
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-green-600 transform -translate-x-1/2 top-2 z-10" />
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12">
                <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="text-xs font-bold text-green-600 tracking-widest uppercase">
                    {item.stage}
                  </span>
                  <h3 className="text-xl font-medium text-zinc-900 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Core Outcome
                    </span>
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-1 rounded">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO-GRADE FEATURED PROJECTS */}
      <section className="py-24 sm:py-32 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-green-600 uppercase">
                Showcase
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Engineered in Our Incubator
              </p>
            </div>
            <Link
              href="/incubator"
              className="text-sm font-semibold text-green-600 hover:text-green-700 mt-4 sm:mt-0 group flex items-center gap-1"
            >
              View All Shipped Projects{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between group transition-all duration-200"
              >
                <div>
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-medium text-zinc-900 mt-2 group-hover:text-green-600 transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                <div className="mt-8 flex gap-2 flex-wrap">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-200/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY EXPERIENCE (BENTO GRID) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-green-600 uppercase">
            Ecosystem Culture
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Life Inside the Catalyst Lab
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Card 1: Large Statement Grid */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 to-transparent pointer-events-none" />
            <div className="max-w-md relative z-10">
              <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
                01 / COLLABORATION
              </span>
              <h3 className="text-3xl font-medium tracking-tight text-zinc-900 mt-4">
                Hackathons, Bootcamps, & Midnight Deployments.
              </h3>
              <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                We sync design and engineering students seamlessly. No
                theoretical essays—just continuous sprints, cross-stack
                architectural tests, and live deployment configurations.
              </p>
            </div>
            <div className="flex gap-4 mt-6 relative z-10">
              <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full">
                Weekly Hack Nights
              </span>
              <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full">
                Cross-Disciplinary Hubs
              </span>
            </div>
          </div>

          {/* Card 2: Interactive Metrics Grid */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-900 text-white p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
                02 / VELOCITY
              </span>
              <h3 className="text-xl font-normal tracking-tight text-zinc-300 mt-2">
                Continuous Pipeline Delivery
              </h3>
            </div>
            <div>
              <span className="text-5xl font-mono font-bold tracking-tight text-green-500">
                99.8%
              </span>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                Test Suite Coverage Standard
              </p>
            </div>
          </div>

          {/* Card 3: Portfolio Placement Grid */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col justify-between shadow-sm group hover:border-zinc-300 transition-colors duration-200">
            <div>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                03 / OUTCOMES
              </span>
              <h3 className="text-xl font-medium text-zinc-900 mt-2">
                Industry Preparedness
              </h3>
              <p className="text-zinc-500 text-xs mt-2">
                Our alumni launch venture-backed startups or transition natively
                into Tier-1 engineering roles.
              </p>
            </div>
            <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
              Our Placements Archive <span>→</span>
            </span>
          </div>
        </div>
      </section>

      {/* 6. EMOTIONAL CLOSING CTA */}
      <section className="py-24 bg-zinc-900 text-white relative isolate overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Your Future in Technology Starts Here.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Stop spectating from the sidelines of the academic tech stack. Join
            a focused movement of builders, creators, innovators, and systems
            engineers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/incubator" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-green-500 hover:bg-green-600 text-zinc-950 transition-colors duration-200">
                Submit Application
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
