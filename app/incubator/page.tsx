"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data matching portfolio-grade student projects, open source, and startups
const PROJECTS = [
  {
    id: "p1",
    title: "Apex Ledger",
    category: "Startups",
    description:
      "A decentralized fiscal clearing layer optimized for student enterprise micro-transactions.",
    status: "Incubating",
    tags: ["Next.js", "Go", "Web3"],
    metrics: "12k+ Txs Processed",
    team: "3 Builders",
  },
  {
    id: "p2",
    title: "EcoSense Core",
    category: "Research Initiatives",
    description:
      "Mesh-networked IoT sensors providing ultra-localized microclimate analytics for campus facilities.",
    status: "Vetted",
    tags: ["Rust", "Embedded Systems", "Python"],
    metrics: "99.4% Uptime",
    team: "2 Researchers",
  },
  {
    id: "p3",
    title: "GitFlow Canvas",
    category: "Open-Source Contributions",
    description:
      "An interactive, browser-based visual layout generator mapping workspace SSH alias routing directly.",
    status: "Shipped",
    tags: ["TypeScript", "Framer Motion", "Tailwind"],
    metrics: "450+ Stars on GitHub",
    team: "5 Contributors",
  },
  {
    id: "p4",
    title: "Synthetix Class",
    category: "Student Projects",
    description:
      "AI-driven automated lecture semantic indexer turning multi-hour lectures into markdown sprints.",
    status: "Incubating",
    tags: ["Python", "FastAPI", "React"],
    metrics: "1.2k Active Students",
    team: "4 Builders",
  },
];

const CATEGORIES = [
  "All Pages",
  "Student Projects",
  "Startup Ideas",
  "Research Initiatives",
  "Open-Source Contributions",
];

const STAGES = [
  {
    number: "01",
    title: "Ideation & Vetting",
    desc: "Submit project architectural frameworks to the Tech Lead and Faculty Supervisor.",
  },
  {
    number: "02",
    title: "Sprinted Development",
    desc: "Gain dedicated workspace access, code reviews, and target milestones.",
  },
  {
    number: "03",
    title: "Launch & Incubation",
    desc: "Ship to production, optimize SEO schema, and gather active data metrics.",
  },
];

export default function IncubatorPage() {
  const [activeTab, setActiveTab] = useState("All Pages");

  const filteredProjects =
    activeTab === "All Pages"
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category.toLowerCase() === activeTab.toLowerCase() ||
            (activeTab === "Startup Ideas" && p.category === "Startups"),
        );

  return (
    <div className="relative min-h-screen bg-white text-slate-900 pb-24 overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200/60 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" />
            TCC Innovation Core
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
            Bridging Academic Theory with{" "}
            <span className="text-green-600">Real-World Construction</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join a movement of builders, innovators, and problem-solvers. We
            convert raw computational concepts into portfolio-grade
            infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm">
              Apply for Incubation
            </button>
            <button className="px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
              Explore Active Boards
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. METRICS BANNER */}
      <section className="border-y border-slate-200 bg-slate-50/70 backdrop-blur-sm relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "14+", label: "Startups Incubated" },
            { value: "40+", label: "Projects Shipped" },
            { value: "$25k+", label: "Equity-Free Grants" },
            { value: "120+", label: "Industry Mentors" },
          ].map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl font-bold text-slate-900 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INCUBATION PIPELINE ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            The Structural Pipeline
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From initial structural outline through intensive sprints under
            Technical Lead review.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAGES.map((s, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200 rounded-2xl premium-card-glow transition-all duration-300"
            >
              <div className="text-sm font-bold text-green-600 mb-4 tracking-wider">
                {s.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FILTERABLE PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6 mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Active Ventures & Builds
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Vetted by the TCC Student Organizing Committee and Faculty
              Advisors.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100/80 p-1 rounded-xl self-start sm:self-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === cat
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between premium-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {project.category}
                    </span>
                    <span
                      className={`text-[11px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                        project.status === "Shipped"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div>
                      Metrics:{" "}
                      <span className="text-slate-900 font-semibold">
                        {project.metrics}
                      </span>
                    </div>
                    <div>{project.team}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. PORTAL RESOURCES HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-green-600/10 blur-[100px] pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Access Internal Architectural Blueprints
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Every active project receives dedicated hardware compute nodes,
              multi-vector SEO optimization logs, and priority deployment
              streams to our university network architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors">
                Download Master Blueprint
              </button>
              <button className="px-5 py-2.5 rounded-full text-xs font-semibold border border-slate-700 bg-transparent text-white hover:bg-slate-900 transition-colors">
                View Infrastructure Logs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
