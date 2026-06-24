"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Strict type-safe variants for clean entry animations matching Framer/Apple standards
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 25 },
  },
};

// Data structures reflecting a genuine, high-caliber student community
const coreJourney = [
  {
    stage: "LEARN",
    title: "Student-Led Workshops & Tracks",
    desc: "From peer-led intensive bootcamps to dedicated study groups, we master tech fundamentals, data science architectures, clean design paradigms, and modern security protocols from the ground up.",
    details: [
      "Weekly Study Tracks",
      "Peer Mentorship Circles",
      "Foundational Bootcamps",
    ],
  },
  {
    stage: "COMPETE",
    title: "Hackathons & Coding Challenges",
    desc: "We push our boundaries under pressure. Members represent our university at regional hackathons, host competitive coding sprints, and run live Capture The Flag (CTF) security events.",
    details: ["Algorithmic Sprints", "Internal Hackathons", "CTF Competitions"],
  },
  {
    stage: "IMPACT",
    title: "Real Projects & Open Source Contributions",
    desc: "We don't build useless proofs-of-concept. Our teams build real open-source systems, design useful utility software, and develop custom technology solutions that serve local campus and community needs.",
    details: [
      "Open Source Software",
      "Campus Utility Tooling",
      "Local Non-Profit Systems",
    ],
  },
];

const studentProjects = [
  {
    title: "Campus RideShare Protocol",
    category: "Peer Logistics / Open Source",
    desc: "An open, encrypted peer-to-peer carpooling network tailored for university commuter routes to reduce transit costs.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    team: ["Alex M. (Eng)", "Sarah T. (Design)"],
  },
  {
    title: "Aura Component Engine",
    category: "Design Systems & Web Tooling",
    desc: "A highly accessible, headless spatial component translation library engineered specifically for student web projects.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    team: ["David K. (Frontend)", "Chloe L. (UI/UX)"],
  },
  {
    title: "SecurTrack CTF Framework",
    category: "Cybersecurity Platform",
    desc: "An lightweight, easy-to-deploy, localized cybersecurity training hub hosting challenge modules for security beginners.",
    tags: ["Go", "Docker", "Svelte"],
    team: ["Ryan W. (Infra)", "Elena R. (Security)"],
  },
];

const executiveTeam = [
  {
    name: "Marcus Chen",
    role: "President",
    focus: "Community Strategy & Partnerships",
    track: "Computer Science '27",
  },
  {
    name: "Sophia Martinez",
    role: "Vice President",
    focus: "Operations & Mentorship Tracks",
    track: "Data Science & UI '27",
  },
  {
    name: "Liam O'Connor",
    role: "Technical Lead",
    focus: "Architecture & Open Source Infrastructure",
    track: "Software Engineering '26",
  },
  {
    name: "Amina Yusuf",
    role: "Marketing & Design Lead",
    focus: "Visual Identity & Event Operations",
    track: "Digital Product Design '28",
  },
];

const galleryMoments = [
  {
    title: "Midnight Deployment",
    category: "Annual Campus Hackathon",
    size: "md:col-span-2 row-span-1",
  },
  {
    title: "UI/UX Workshop",
    category: "Design Sprint Nights",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Open Source Demo Day",
    category: "Community Review Showcase",
    size: "col-span-1 row-span-2",
  },
  {
    title: "CTF Live Arena",
    category: "Cybersecurity Challenge",
    size: "md:col-span-2 row-span-1",
  },
];

const faqs = [
  {
    q: "Do I need prior coding or design experience to join?",
    a: "Not at all. Our community is built purposefully to welcome absolute beginners. Our 'Learn' tracks provide the direct foundation, peer mentorship, and support structures to move you smoothly from hello world to collaborative building.",
  },
  {
    q: "What is the commitment level expected from community members?",
    a: "We run on a highly fluid, contribution-driven model. You can attend casual weekly tech talks, participate in dedicated multi-week design/dev tracks, or dive into full incubator projects depending entirely on your academic availability.",
  },
  {
    q: "How are student project teams formed?",
    a: "Teams form organically during our community mixers, ideation nights, and hackathons. We actively pair developers, designers, and project managers together to duplicate real-world interdisciplinary environment conditions.",
  },
];

export default function RedesignedLandingPage() {
  useEffect(() => {
    // Dynamic GSAP scroll engine initialization for flawless, light scroll-driven timeline accents
    const initScrollEffects = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".progress-axis-line",
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: ".progress-axis-container",
              start: "top 25%",
              end: "bottom 75%",
              scrub: true,
            },
          },
        );
      } catch (err) {
        console.error("GSAP Initialization error:", err);
      }
    };
    initScrollEffects();
  }, []);

  return (
    <div className="bg-white text-zinc-900 selection:bg-green-100 selection:text-green-800 min-h-screen antialiased overflow-x-hidden font-sans">
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Apple Human Interface Style Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl"
            >
              Learn Technology. <br />
              Build Projects.{" "}
              <span className="text-green-600">Create Impact.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-zinc-500 font-normal leading-relaxed max-w-2xl"
            >
              Welcome to the Technology Catalysts Community (TCC). We are a
              focused, university-driven collective bridging the space between
              textbook computer science theory and production-grade software
              execution.
            </motion.p>

            {/* Action Group */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link href="#join" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md shadow-green-600/10 transition-colors duration-150"
                >
                  Apply to Join
                </motion.button>
              </Link>
              <Link href="#journey" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ backgroundColor: "#f4f4f5" }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-zinc-600 bg-white border border-zinc-200 shadow-sm transition-colors duration-150"
                >
                  Explore Our Blueprint
                </motion.button>
              </Link>
            </motion.div>

            {/* Micro Social Proof & Organic Metrics Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 sm:gap-0 sm:flex sm:items-center sm:gap-12 border-t border-zinc-100 pt-8 w-full justify-center"
            >
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                  250+
                </p>
                <p className="text-xs text-zinc-400 font-medium mt-0.5 tracking-wide uppercase">
                  Active Members
                </p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200" />
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                  18
                </p>
                <p className="text-xs text-zinc-400 font-medium mt-0.5 tracking-wide uppercase">
                  Projects Shipped
                </p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200" />
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                  12
                </p>
                <p className="text-xs text-zinc-400 font-medium mt-0.5 tracking-wide uppercase">
                  Hackathons Entered
                </p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200" />
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                  40+
                </p>
                <p className="text-xs text-zinc-400 font-medium mt-0.5 tracking-wide uppercase">
                  Workshops Held
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL & COMMUNITY ECOSYSTEM */}
      <section className="py-10 border-y border-zinc-100 bg-zinc-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Rooted in Academic Excellence & Professional Standards
          </p>
          <div className="mt-6 flex flex-wrap gap-x-12 gap-y-4 items-center justify-center font-medium tracking-tight text-xs sm:text-sm text-zinc-400">
            <span className="hover:text-zinc-600 transition-colors">
              UNIVERSITY DEPARTMENT AFFILIATED
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 hidden sm:block" />
            <span className="hover:text-zinc-600 transition-colors">
              STUDENT-MANAGED INNOVATION HUB
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 hidden sm:block" />
            <span className="hover:text-zinc-600 transition-colors">
              LOCAL ENTERPRISE TECH PARTNERS
            </span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT TCC */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              An Authentic Ecosystem for Growing Innovators.
            </h2>
            <p className="mt-4 text-zinc-500 text-sm sm:text-base leading-relaxed">
              The Technology Catalysts Community exists because true operational
              readiness isn&apos;t taught solely in classrooms. We are an
              independent, collaborative environment built specifically to
              support aspiring engineers, designers, entrepreneurs, and
              researchers.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
              <h3 className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">
                Our Slogan
              </h3>
              <p className="text-xl font-medium tracking-tight text-green-600 mt-2">
                &ldquo;Learn, Compete, and Impact.&rdquo;
              </p>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                Three actionable directives guiding every single presentation,
                project team workspace sprint, and technical track line item we
                construct.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
              <h3 className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="mt-2 text-zinc-600 text-xs sm:text-sm leading-relaxed">
                To empower university students through technology education,
                rapid hands-on innovation, cross-functional collaboration,
                internal coding competitions, systematic mentorship, and
                building real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE LEARN → COMPETE → IMPACT JOURNEY */}
      <section
        id="journey"
        className="py-20 sm:py-28 bg-zinc-50/50 border-y border-zinc-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              The Lifecycle
            </span>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Your Evolution inside the Community
            </p>
            <p className="mt-3 text-zinc-500 text-sm">
              We structure your progression from basic concepts straight into
              real community deployment.
            </p>
          </div>

          <div className="relative progress-axis-container max-w-4xl mx-auto">
            {/* Minimalist Axis Rail Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 transform -translate-x-1/2" />
            <div className="absolute left-4 sm:left-1/2 top-0 w-px bg-green-500 transform -translate-x-1/2 progress-axis-line origin-top" />

            {coreJourney.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col sm:flex-row items-start mb-16 last:mb-0",
                  index % 2 === 0 ? "sm:flex-row-reverse" : "",
                )}
              >
                {/* Structural Anchor Point */}
                <div className="absolute left-4 sm:left-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-green-600 transform -translate-x-1/2 top-1.5 z-10" />

                <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-10">
                  <div className="p-6 bg-white border border-zinc-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                    <span className="text-xs font-bold tracking-widest text-green-600 block">
                      STAGE 0{index + 1} // {item.stage}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                      {item.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY ACTIVITIES */}
      <section
        id="activities"
        className="py-20 sm:py-28 max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
            Core Operations
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            What Happens Weekly Inside the Labs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-semibold text-xs">
              01
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mt-4">
              Hands-on Bootcamps
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Structured weekend paths covering full-stack mechanics, data model
              optimization, UI token composition, and server configuration
              environments.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-semibold text-xs">
              02
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mt-4">
              Internal Hackathons
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Rapid 24-to-48 hour builds challenging collaborative teams to
              design, code, test, and pitch fully operational tooling concepts
              from raw ideas.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-semibold text-xs">
              03
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mt-4">
              Guest Speakers
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Interactive fire-side chat reviews with community alumni, active
              tech builders, startup designers, and senior engineering
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED STUDENT PROJECTS */}
      <section
        id="projects"
        className="py-20 sm:py-28 bg-zinc-50/50 border-y border-zinc-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
                Our Output
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Featured Student Projects
              </h2>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-sm mt-2 sm:mt-0">
              Genuine source code systems mapped, built, and launched by current
              active community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-150"
              >
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase block">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 mt-1">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm mt-3 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] text-zinc-500 font-mono bg-zinc-50 border border-zinc-200/60 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Builders:</span>
                    <span className="font-medium text-zinc-600">
                      {proj.team.join(" • ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXECUTIVE TEAM SECTION */}
      <section
        id="team"
        className="py-20 sm:py-28 max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
            Governance
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Led by a Student Organizing Committee
          </h2>
          <p className="mt-2 text-zinc-500 text-xs sm:text-sm">
            Elected annually to manage workshops, secure partnerships,
            coordinate lab spaces, and protect team execution velocities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveTeam.map((member, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-600 font-bold flex items-center justify-center text-sm tracking-tighter">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mt-4 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-green-600">
                  {member.role}
                </p>
                <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                  {member.focus}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-400 font-medium">
                {member.track}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. STUDENT TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-zinc-900 text-white border-y border-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
              Real Perspectives
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Student Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-800">
              <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed">
                &ldquo;TCC completely fundamentally reshaped my engineering
                path. I arrived knowing basic syntax, but collaborating on a
                live campus tooling utility team taught me strict git code
                workflows, continuous deployment setups, and true design system
                scaling parameters.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-xs">
                  EH
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Emily Huang
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Computer Science Sophomore
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-800">
              <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed">
                &ldquo;As a self-taught product designer, it was always hard to
                find developers who actually valued precise spacing tokens and
                state transition animations. TCC connected me with elite
                frontend builders to create robust toolkits.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-xs">
                  JM
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Jordan Miller
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Interaction Design Junior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EVENT GALLERY (MODERN GRID WITH HOVER EFFECTS) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
            Life in TCC
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Community Event Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
          {galleryMoments.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl border border-zinc-200 p-6 flex flex-col justify-end bg-gradient-to-br from-white to-zinc-50/50 shadow-sm relative overflow-hidden group transition-all duration-200 hover:border-zinc-300",
                item.size,
              )}
            >
              <div className="absolute inset-0 bg-green-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-widest text-green-600 uppercase block">
                  {item.category}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 mt-1 tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section
        id="faq"
        className="py-20 sm:py-28 bg-zinc-50 border-t border-zinc-100"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              Clarifications
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm"
              >
                <h3 className="text-sm font-semibold text-zinc-900">{faq.q}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL EMOTIONAL CLOSING CTA */}
      <section
        id="join"
        className="py-24 bg-zinc-950 text-white relative isolate overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-green-400 uppercase">
            Apply to TCC
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-3">
            Join the Next Generation of <br />
            Technology Leaders.
          </h2>
          <p className="mt-4 text-xs sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Stop spectating from the side margins of code tutorials. Step
            forward to join an organic, high-performance community of builders,
            designers, and innovators.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 rounded-xl text-sm font-semibold bg-green-500 hover:bg-green-600 text-zinc-950 shadow-lg shadow-green-500/10 transition-colors duration-150">
              Submit Community Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
