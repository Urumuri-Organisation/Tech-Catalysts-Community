"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Layers,
  Code,
  Cpu,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Award,
  Search,
} from "lucide-react";

// Track data following the TCC educational pillars
const TRACKS = [
  {
    id: "all",
    label: "All Programs",
  },
  {
    id: "bootcamps",
    label: "Bootcamps",
    description:
      "Intensive, multi-week cohort tracks transforming raw computational concepts into portfolio-grade skills.",
  },
  {
    id: "workshops",
    label: "Workshops",
    description:
      "Deep-dive technical sessions focusing on modern frameworks, architecture pattern analysis, and real-world tools.",
  },
  {
    id: "hackathons",
    label: "Hackathons & Sprints",
    description:
      "Accelerated builder challenges designed to bridge academic theory with real-world construction.",
  },
];

const CURRICULUM_ITEMS = [
  {
    title: "Full-Stack System Architecture",
    category: "Bootcamps",
    duration: "8 Weeks",
    level: "Advanced",
    description:
      "Master modern production environments. Learn SSR/SSG with Next.js & Astro, database optimization, and scalable cloud deployments architecture.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    title: "Creative Interactivity & Animation Frameworks",
    category: "Workshops",
    duration: "2 Days",
    level: "Intermediate",
    description:
      "Deep dive into web performance optimization, hardware-accelerated layouts, and premium user experiences using Framer Motion and GSAP.",
    skills: ["Framer Motion", "Tailwind v4", "Web Performance"],
    featured: false,
  },
  {
    title: "TCC Innovation Core: Incubation Sprint",
    category: "Hackathons",
    duration: "48 Hours",
    level: "All Levels",
    description:
      "Bring a startup concept or open-source infrastructure proposal to life with dedicated industry mentors and peer evaluation frameworks.",
    skills: ["Product Validation", "Rapid Prototyping", "Pitching"],
    featured: true,
  },
  {
    title: "Compilers & Computational Engineering",
    category: "Workshops",
    duration: "1 Week",
    level: "Advanced",
    description:
      "Deconstruct low-level systems. Build a foundational lexer and parser while studying parsing efficiency algorithms under faculty guidance.",
    skills: ["Rust", "Parsing Algorithms", "Memory Management"],
    featured: false,
  },
  {
    title: "UI/UX Architecture for Software Engineers",
    category: "Bootcamps",
    duration: "4 Weeks",
    level: "Beginner-Friendly",
    description:
      "Bridge the gap between design and implementation. Learn premium visual layout principles, grid frameworks, typography hierarchy, and glassmorphism styling.",
    skills: ["Framer", "Figma", "Design Systems"],
    featured: false,
  },
  {
    title: "Open-Source Infrastructure Hackathon",
    category: "Hackathons",
    duration: "3 Days",
    level: "Intermediate",
    description:
      "Collaborate on core library patches and developer tool ecosystem extensions supporting thousands of builders worldwide.",
    skills: ["Git Workflows", "API Design", "CI/CD Sprints"],
    featured: false,
  },
];

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on selected category tab and search query
  const filteredItems = CURRICULUM_ITEMS.filter((item) => {
    const matchesTab =
      activeTab === "all" ||
      item.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-green-100 selection:text-green-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-200 pt-24 pb-20">

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 max-w-3xl mx-auto leading-[1.15]">
              Bridging Academic Theory with{" "}
              <span className="text-green-650 text-[#16A34A]">
                Real-World Construction
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Accelerate your engineering trajectory. Participate in
              student-led, faculty-vetted bootcamps, tactical workshops, and
              high-stakes production hackathons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & UTILITIES CONSOLE */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Track Segmented Tabs */}
          <div className="flex flex-wrap gap-1 w-full md:w-auto">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === track.id
                    ? "text-white"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {activeTab === track.id && (
                  <motion.div
                    layoutId="activeLearningTab"
                    className="absolute inset-0 bg-[#16A34A] rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{track.label}</span>
              </button>
            ))}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search curriculum, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[#16A34A] transition-all"
            />
          </div>
        </div>

        {/* Dynamic Track Active Context Panel */}
        {activeTab !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 bg-white rounded-xl border border-neutral-200/80 shadow-xs"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              Active Track Filter
            </p>
            <p className="text-neutral-700 mt-1 text-sm sm:text-base">
              {TRACKS.find((t) => t.id === activeTab)?.description}
            </p>
          </motion.div>
        )}
      </section>

      {/* 3. EXPERIENCES & PROGRAM GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={item.title}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-md ${
                  item.featured
                    ? "border-green-200 shadow-xs ring-4 ring-green-500/5"
                    : "border-neutral-200"
                }`}
              >
                <div>
                  {/* Category Pill Tag & Level */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                        item.category === "Bootcamps"
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : item.category === "Workshops"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {item.duration} • {item.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-[#16A34A] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm mt-3 line-clamp-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Skills Stack & CTA Action Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-neutral-100 text-neutral-600 font-medium px-2 py-0.5 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all group-hover:translate-y-0 duration-200">
                    Apply for Cohort <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Case Handling */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-2xl border border-neutral-200"
          >
            <Terminal className="w-10 h-10 mx-auto text-neutral-300 mb-3" />
            <h4 className="text-base font-bold text-neutral-800">
              No Program Matches Found
            </h4>
            <p className="text-neutral-500 text-sm mt-1 max-w-sm mx-auto">
              We couldn't track down any learning paths adjusting to your search
              term inside this directory block.
            </p>
          </motion.div>
        )}
      </section>

      {/* 4. PREMIUM BENTO GRID: OUTCOMES & STANDARDS */}
      <section className="bg-white border-t border-neutral-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
              The TCC Educational Matrix
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3">
              Every initiative, curriculum framework, and peer incubation sprint
              is managed by the student body under strict governance.
            </p>
          </div>

          {/* Premium Bento Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Faculty Alignment */}
            <div className="md:col-span-2 p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950">
                  Academic Governance & Faculty Oversight
                </h4>
                <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                  All foundational syllabus pathways, major structural stack
                  changes, and educational incubator upgrades are directly
                  overseen by our Technical Lead and carefully vetted for
                  precision layout alignment by designated Faculty Supervisors.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
                <span>Faculty of Software Engineering Verified Blueprint</span>
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>

            {/* Bento Card 2: Peer Mentorship */}
            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950">
                  Rotational Executive Support
                </h4>
                <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                  Executive management roles are rotated annually via student
                  elections, guaranteeing fresh community alignment and
                  continuous infrastructure progression.
                </p>
              </div>
            </div>

            {/* Bento Card 3: Portfolio Outcomes */}
            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950">
                  Portfolio-Grade Infrastructure
                </h4>
                <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                  We avoid generic toy applications. Students build functional
                  compiler components, highly optimized enterprise layouts, and
                  live microservices.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Open Sprints */}
            <div className="md:col-span-2 p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] mb-4">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950">
                  Immediate Project Incubation
                </h4>
                <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                  Ready to test your limits? Active layout tracking models and
                  features are regularly pushed straight into active community
                  boards. Propose architectural changes directly inside the
                  portal system sprint.
                </p>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 text-sm font-bold text-[#16A34A] hover:text-green-700 transition-colors">
                  Explore Active Portals <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="bg-neutral-50 py-20 border-t border-neutral-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-neutral-950">
            Ready to Begin Your Sprint?
          </h3>
          <p className="mt-4 text-neutral-600 max-w-lg mx-auto text-sm sm:text-base">
            Join a continuous movement of builders, developers, and designers
            turning raw compute concepts into clean infrastructure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16A34A] text-white font-semibold text-sm hover:bg-green-700 transition-all shadow-xs hover:shadow-md">
              Apply for Incubation
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-800 font-semibold text-sm hover:bg-neutral-50 transition-all shadow-xs">
              Review Master Blueprint
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
