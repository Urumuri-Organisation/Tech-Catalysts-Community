"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  Award,
  Code,
  RefreshCw,
  Calendar,
  Terminal,
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

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const chapters = [
    { id: "acceptance", label: "1. Acceptance of Blueprint" },
    { id: "eligibility", label: "2. Track Eligibility" },
    { id: "conduct", label: "3. Technical Code of Conduct" },
    { id: "intellectual-property", label: "4. Open-Source IP Rights" },
    { id: "liability", label: "5. Disclaimer of Liability" },
    { id: "governance", label: "6. Democratic Governance" },
  ];

  const scrollToChapter = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#f0fdf4] selection:text-[#16a34a] font-sans antialiased relative overflow-hidden">
      {/* Subtle Premium Light Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.02),transparent_40%)] pointer-events-none" />

      {/* Header Sticky Wrapper */}
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
                Terms of Service
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748b] bg-white border border-[#e2e8f0] px-3 py-2 rounded-xl w-fit shadow-sm">
              <Calendar className="w-4 h-4 text-[#16a34a]" />
              <span>Last Updated: June 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Framework Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Anchor Index Directory (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36 bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase text-[#64748b] tracking-wider px-3 mb-3 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#16a34a]" /> Protocol Index
            </h3>
            <nav className="space-y-1">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollToChapter(chapter.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                    activeSection === chapter.id
                      ? "bg-[#f0fdf4] text-[#16a34a] border border-[#e2e8f0]"
                      : "text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] border border-transparent"
                  }`}
                >
                  <span>{chapter.label}</span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-[#16a34a] transition-transform ${
                      activeSection === chapter.id
                        ? "scale-100"
                        : "scale-0 group-hover:scale-50"
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#e2e8f0] px-3">
              <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex gap-3 items-start">
                <ShieldAlert className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" />
                <p className="text-[11px] leading-relaxed text-[#64748b]">
                  Violation of these parameters may trigger immediate suspension
                  of code cluster access tokens and community standing status.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Transcript Legal Text */}
          <div className="lg:col-span-8 space-y-12">
            {/* Chapter 1 */}
            <motion.section
              id="acceptance"
              variants={itemVariants}
              className="space-y-4 pt-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Terminal className="w-4 h-4" /> Clause 1.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Acceptance of the Structural Blueprint
              </h2>
              <div className="text-sm text-[#64748b] leading-relaxed space-y-3">
                <p>
                  By accessing, browsing, or entering data structures managed by
                  the <strong>Technology Catalysts Community (TCC)</strong>, you
                  agree to comply with and be bound by this operational
                  framework.
                </p>
                <p>
                  These Terms govern your engagement across all student-led
                  development study tracks, local competitive sprints, and
                  pro-bono venture incubator environments. If you disagree with
                  any segment of these clauses, you must cease repository
                  engagement immediately.
                </p>
              </div>
            </motion.section>

            {/* Chapter 2 */}
            <motion.section
              id="eligibility"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Award className="w-4 h-4" /> Clause 2.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Ecosystem Standing &amp; Track Eligibility
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Active membership and role allocation inside TCC technical
                tracks are subject to strict academic criteria:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
                  <h4 className="text-xs font-semibold uppercase text-[#0f172a] tracking-wide mb-1.5">
                    Academic Status
                  </h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Applicants must be currently enrolled university students in
                    good standing. Verification is monitored dynamically through
                    provided institutional emails.
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
                  <h4 className="text-xs font-semibold uppercase text-[#0f172a] tracking-wide mb-1.5">
                    Commitment Delivery
                  </h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Participation in multi-week development loops demands
                    consistent attendance. Inactive project blocks without prior
                    notice will result in code branch authorization revocations.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Chapter 3 */}
            <motion.section
              id="conduct"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Code className="w-4 h-4" /> Clause 3.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Technical Integrity &amp; Conduct Rules
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                As a peer-led community driven by rigorous engineering
                principles, members agree to prioritize collaboration over
                personal gain:
              </p>
              <ul className="list-none space-y-2 text-sm text-[#64748b]">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Zero Plagiarism:</strong> All software
                    configurations and design blueprints submitted into team
                    frameworks must accurately represent your own work or legal
                    open-source usage.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Ethical Hacking:</strong> Cybersecurity track
                    actions are strictly sandboxed. Unauthorized probing of
                    university networks or external systems is fully banned.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Inclusive Mentorship:</strong> Members are expected
                    to foster welcoming, ego-free collaboration environments
                    across all skill horizons.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Chapter 4 */}
            <motion.section
              id="intellectual-property"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <Code className="w-4 h-4" /> Clause 4.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Intellectual Property &amp; Open-Source Licensing
              </h2>
              <div className="text-sm text-[#64748b] leading-relaxed space-y-3">
                <p>
                  Unless specified otherwise for distinct corporate client
                  incubator initiatives, all logic layers, platform
                  architectures, and documentation frameworks built inside TCC
                  public tracks are distributed under open-source parameters
                  (such as the MIT License).
                </p>
                <p>
                  By contributing code or layouts to TCC owned repositories, you
                  grant the community a permanent, worldwide, royalty-free
                  license to use, modify, and distribute the software to achieve
                  our academic mission.
                </p>
              </div>
            </motion.section>

            {/* Chapter 5 */}
            <motion.section
              id="liability"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <ShieldAlert className="w-4 h-4" /> Clause 5.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Disclaimer of Technical Liability
              </h2>
              <div className="text-sm text-[#64748b] leading-relaxed space-y-3">
                <p>
                  All applications, environment configurations, and security
                  scripts created by TCC are provided <strong>"as is"</strong>{" "}
                  without warranties of any kind. As an educational research
                  environment, we do not guarantee total runtime uptime or
                  protection against zero-day edge exploits.
                </p>
                <p>
                  The Tech Catalysts Community Student Organizing Committee and
                  its Faculty Supervisor shall not be held liable for any data
                  drop, environment corruption, or deployment infrastructure
                  failures resulting from active sprint participations.
                </p>
              </div>
            </motion.section>

            {/* Chapter 6 */}
            <motion.section
              id="governance"
              variants={itemVariants}
              className="space-y-4 pt-4 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] tracking-wider uppercase">
                <RefreshCw className="w-4 h-4" /> Clause 6.0
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                Democratic Governance &amp; Modifications
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                TCC rules are governed under strict student self-regulation
                frameworks overseen by our Faculty of Software Engineering
                advisors:
              </p>
              <div className="bg-[#f0fdf4]/40 border border-[#e2e8f0] rounded-xl p-4 text-xs text-[#0f172a] leading-relaxed space-y-2">
                <p>
                  Executive operational roles are rotated on an annual basis via
                  audited community elections.
                </p>
                <p>
                  The committee reserves the right to modify these structural
                  terms at any point. Major updates will be broadcasted directly
                  into core sprint communication loops or pushed as a repository
                  documentation update.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
