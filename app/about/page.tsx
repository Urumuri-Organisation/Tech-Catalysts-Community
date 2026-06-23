"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LEADERSHIP = [
  {
    role: "Technical Lead",
    name: "Alex Chen",
    term: "2026 Executive Board",
    bio: "Manages platform architectural proposals, infrastructure deployment nodes, and structural codebase vetting.",
  },
  {
    role: "Community Director",
    name: "Sophia Martinez",
    term: "2026 Executive Board",
    bio: "Oversees sprint timelines, corporate industry mentorship interfaces, and bootcamp track mapping.",
  },
  {
    role: "Operations Lead",
    name: "Marcus Vance",
    term: "2026 Executive Board",
    bio: "Coordinates annual student body elections, internal resources staging, and hackathon execution channels.",
  },
];

const GOVERNANCE_RULES = [
  {
    title: "Annual Leadership Rotation",
    desc: "To guarantee continuous equity and collaborative adaptation, all executive roles are rotated annually via monitored student body elections.",
  },
  {
    title: "Faculty Architectural Vetting",
    desc: "Major structural upgrades, codebase baseline modifications, and server network provisioning are reviewed alongside our Faculty Supervisor.",
  },
  {
    title: "Open Source Contributor Mapping",
    desc: "Every component, track asset, and incubation system is logged openly to foster real-world open-source portfolio cultivation.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 pb-24 overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-6">
            Our Blueprint & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl mx-auto leading-[1.1]">
            Fostering Innovation Through{" "}
            <span className="text-green-600">Structured Governance</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The Tech Catalyst Community (TCC) operates as an institutional
            launchpad bridging the gap between computational theory and
            production-grade engineering.
          </p>
        </motion.div>
      </section>

      {/* 2. INSTITUTIONAL GOVERNANCE SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="border border-slate-200 rounded-3xl p-8 sm:p-12 bg-slate-50/50 backdrop-blur-sm">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Master Blueprint Rules
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              How our community maintains professional and academic integrity
              across development lifecycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {GOVERNANCE_RULES.map((rule, idx) => (
              <div key={idx} className="space-y-3">
                <div className="h-2 w-12 bg-green-600 rounded-full" />
                <h3 className="text-base font-bold text-slate-900">
                  {rule.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ELECTED STUDENT LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Elected Student Committee
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Democratically elected builders leading technical sprints and
            mentoring incubator tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP.map((member, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200 rounded-2xl premium-card-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-md inline-block mb-4">
                  {member.role}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 mb-4">
                  {member.term}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3 text-xs font-semibold text-slate-500">
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FACULTY ADVISORY & OVERSIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden relative shadow-lg">
          <div className="absolute top-[-40%] left-[-10%] h-[300px] w-[300px] rounded-full bg-green-600/10 blur-[90px] pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <span className="text-[10px] tracking-wider uppercase font-bold text-green-400 px-2 py-0.5 rounded bg-green-950 border border-green-800">
              Academic Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3">
              Faculty of Software Engineering Oversight
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              TCC operates in close lockstep with university leadership. Our
              dedicated Faculty Supervisor verifies that incubated platform
              solutions, cloud node architectural strategies, and deep coding
              hackathons line up perfectly with formal computing accreditation
              benchmarks.
            </p>
          </div>
          <div className="flex-shrink-0 bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-6 rounded-2xl max-w-xs text-center md:text-left">
            <h4 className="font-bold text-base text-white">
              Dr. Elizabeth Vance
            </h4>
            <p className="text-xs text-green-400 font-medium mt-0.5">
              Faculty Supervisor & Advisor
            </p>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              "TCC provides an essential, highly rigorous workspace where
              abstract computer science theory manifests safely into sound
              operational systems."
            </p>
          </div>
        </div>
      </section>

      {/* 5. BENTO STYLE EXPERIENCE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            The Community Vector
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A look at campus workshops, collaborative bootcamps, and real-time
            engineering sprints.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
          <div className="md:col-span-2 md:row-span-2 border border-slate-200 bg-slate-50 rounded-2xl p-6 flex flex-col justify-end premium-card-glow">
            <h3 className="font-bold text-lg text-slate-900">
              Advanced Sprints & Hackathons
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-md">
              Multi-day team programming challenges mapping localized data
              structures and microservices architecture.
            </p>
          </div>
          <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 flex flex-col justify-end premium-card-glow">
            <h3 className="font-bold text-base text-slate-900">
              Technical Bootcamps
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Deep dives into type safety, memory layout, and systems
              compilation strategies.
            </p>
          </div>
          <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 flex flex-col justify-end premium-card-glow">
            <h3 className="font-bold text-base text-slate-900">
              Industry Networking
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Direct deployment portfolio reviews alongside engineering leads
              from top enterprise hubs.
            </p>
          </div>
          <div className="md:col-span-3 border border-slate-200 bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 premium-card-glow">
            <div>
              <h3 className="font-bold text-base text-slate-900">
                Ready to contribute an architectural proposal?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Explore active repository issues or sync with the Technical Lead
                during office hours.
              </p>
            </div>
            <Link href="/incubator">
              <button className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm whitespace-nowrap">
                Open Incubator Portal
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
