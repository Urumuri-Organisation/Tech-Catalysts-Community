"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  Scale,
  Calendar,
} from "lucide-react";

// Strictly typed Framer Motion variants for perfect compiler safety
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 24 },
  },
};

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "1. Scope & Framework" },
    { id: "data-collection", label: "2. Information We Collect" },
    { id: "data-usage", label: "3. How Data is Utilized" },
    { id: "data-protection", label: "4. Cryptographic Security" },
    { id: "third-party", label: "5. Integrations & Tooling" },
    { id: "student-rights", label: "6. Your Architectural Control" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#f0fdf4] selection:text-[#16a34a] font-sans antialiased relative overflow-hidden">
      {/* Premium Light Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.02),transparent_40%)] pointer-events-none" />

      {/* Header Section */}
      <div className="border-b border-[#e2e8f0] bg-[#fafafa]/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-2">

              <h1 className="text-3xl font-bold tracking-tight text-[#0f172a]">
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748b] bg-white border border-[#e2e8f0] px-3 py-2 rounded-xl w-fit shadow-sm">
              <Calendar className="w-4 h-4 text-[#16a34a]" />
              <span>Effective: June 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Master Content Layout Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Sticky Left Navigation (Desktop Indexing) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36 bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase text-[#64748b] tracking-wider px-3 mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#16a34a]" /> Blueprint
              Chapters
            </h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                    activeSection === section.id
                      ? "bg-[#f0fdf4] text-[#16a34a] border border-[#e2e8f0]"
                      : "text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] border border-transparent"
                  }`}
                >
                  <span>{section.label}</span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-[#16a34a] transition-transform ${
                      activeSection === section.id
                        ? "scale-100"
                        : "scale-0 group-hover:scale-50"
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#e2e8f0] px-3">
              <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex gap-3 items-start">
                <Lock className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" />
                <p className="text-[11px] leading-relaxed text-[#64748b]">
                  This standard governs all data architectures shipped through
                  the TCC core registry, incubator deployments, and peer
                  workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Transcript Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1 */}
            <motion.section
              id="introduction"
              variants={itemVariants}
              className="space-y-4 pt-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Scale className="w-4 h-4" /> Section 1.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Scope &amp; Regulatory Framework
              </h2>
              <div className="text-sm text-[#64748b] leading-relaxed space-y-3">
                <p>
                  Welcome to the technology matrix governed by the{" "}
                  <strong>Technology Catalysts Community (TCC)</strong>. This
                  Privacy Blueprint explicitly dictates how our student
                  engineering stack processes information belonging to platform
                  users, project partners, and applicants.
                </p>
                <p>
                  As an academic incubator built by students for students, we
                  operate on complete architectural transparency. By
                  initializing interactions with our repositories, landing
                  systems, or application blueprints, you fully validate the
                  data handling protocols outlined herein.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="data-collection"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Eye className="w-4 h-4" /> Section 2.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Information We Collect
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                To guarantee structured onboarding paths into our engineering
                tracks and maintain integrity across verified sprint lines, we
                process precisely scoped data telemetry:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
                  <h4 className="text-xs font-semibold uppercase text-[#0f172a] tracking-wide mb-1.5">
                    Explicit Profiles
                  </h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Legal full names, institutional email addresses, academic
                    standing tiers, specific technical focal paths, and project
                    vision declarations submitted through application
                    structures.
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
                  <h4 className="text-xs font-semibold uppercase text-[#0f172a] tracking-wide mb-1.5">
                    Technical Telemetry
                  </h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Cryptographic safe authorization signatures, webhook
                    tracking tokens, client browser agents, and secure execution
                    session parameters needed for optimized UI response speeds.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="data-usage"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <CheckCircle className="w-4 h-4" /> Section 3.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                How Data is Utilized
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                TCC completely rejects commercial monetization paradigms.
                Collected payloads are exclusively restricted to optimization
                pipelines serving the campus infrastructure:
              </p>
              <ul className="list-none space-y-2 text-sm text-[#64748b]">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    Assigning platform operators to distinct code development
                    cohorts and peer-led study tracks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    Routing real-time automated welcome bundles, secure
                    repository links, and internal hackathon calendar assets.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    Auditing executive role allocations during supervised
                    student organizational board cycles.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="data-protection"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Lock className="w-4 h-4" /> Section 4.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Cryptographic Security &amp; Isolation
              </h2>
              <div className="text-sm text-[#64748b] leading-relaxed space-y-3">
                <p>
                  Every transmission processed through TCC frontends targets
                  strict encryption-at-rest paradigms. Storage environments use
                  isolated database environments ensuring user credentials
                  cannot be monitored by malicious external scraping scripts.
                </p>
                <p>
                  Production build configurations and continuous integration
                  deployment channels are continuously monitored by the Student
                  Organizing Committee Technical Lead alongside the Faculty
                  Supervisor to guarantee data state security.
                </p>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="third-party"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <FileText className="w-4 h-4" /> Section 5.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Third-Party Integrations &amp; Tooling
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Our infrastructure relies strictly on premier ecosystem
                providers to deliver performance tracking and repository
                services:
              </p>
              <div className="p-4 bg-[#fafafa] border border-[#e2e8f0] rounded-xl text-xs space-y-2.5 text-[#64748b]">
                <p>
                  <strong>• GitHub Enterprise Architecture:</strong> Manages
                  secure cohort repository pipelines under protected student
                  identity umbrellas.
                </p>
                <p>
                  <strong>• Serverless Edge Nodes (Vercel):</strong> Tracks
                  interaction metrics to allocate content delivery resources
                  without using behavioral cookies.
                </p>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="student-rights"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Shield className="w-4 h-4" /> Section 6.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Your Architectural Control &amp; Rights
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                As the legal and engineering architect of your personal data
                record, you retain total command over your telemetry. You may
                trigger instant audit requests at any moment:
              </p>
              <div className="bg-[#f0fdf4]/40 border border-[#e2e8f0] rounded-xl p-4 text-xs text-[#0f172a] leading-relaxed">
                To execute full records purge routines, review stored log
                indices, or update active tracking profile scopes, submit a
                cryptographic pull request or issue communication to the core
                governance mailbox at:{" "}
                <span className="font-semibold text-[#16a34a] underline">
                  committee@tcc-university.edu
                </span>
                .
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
