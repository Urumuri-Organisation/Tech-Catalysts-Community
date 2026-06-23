"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Award,
  Clock,
  UserCheck,
  Rocket,
  ArrowRight,
  Calendar,
  Layers,
  Code,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Mock Data matching the brief specifications ---
const impactMetrics = [
  { id: 1, label: "Students Trained", value: 1250, icon: Users },
  { id: 2, label: "Projects Completed", value: 85, icon: Code },
  { id: 3, label: "Hackathons Hosted", value: 12, icon: Award },
  { id: 4, label: "Community Hours", value: 4500, icon: Clock },
  { id: 5, label: "Industry Mentors", value: 40, icon: UserCheck },
  { id: 6, label: "Startups Incubated", value: 8, icon: Rocket },
];

const featuredProjects = [
  {
    id: 1,
    title: "EcoSphere AI",
    category: "Startup Idea",
    desc: "A machine learning platform tracking carbon footprints for regional supply chains.",
    tags: ["Next.js", "Python", "AWS"],
    img: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "OpenAuth Link",
    category: "Open-Source Contribution",
    desc: "A lightweight, secure, and decentralized biometric authentication module for educational portals.",
    tags: ["Rust", "WebAssembly"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "NeuroVibe Health",
    category: "Research Initiative",
    desc: "Investigating the intersection of real-time EEG data streaming and immersive canvas layouts.",
    tags: ["TypeScript", "GraphQL"],
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    quote:
      "TCC provided me with the structured technical runway and team validation required to scale our campus project into a venture-backed infrastructure startup.",
    author: "Elena Rostova",
    role: "Alumna & Founder, SphereLink",
    type: "Student",
  },
  {
    quote:
      "The rigor of student governance here mirrors active enterprise sprint planning. TCC members systematically outpace standard industry performance baselines.",
    author: "Dr. Marcus Vance",
    role: "Faculty Supervisor & Professor of Software Engineering",
    type: "Faculty",
  },
  {
    quote:
      "By anchoring real-world venture blueprints within an academic framework, we've structured a pipeline of multi-disciplinary ecosystem builders.",
    author: "Julian Chen",
    role: "Technical Lead (2025–2026 Cycle)",
    type: "Leadership",
  },
];

const communityExperiences = [
  {
    title: "Immersive Bootcamps",
    size: "md",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    text: "Accelerated development sprints mapped against modern production tools.",
  },
  {
    title: "Annual Sprints & Hackathons",
    size: "lg",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    text: "48-hour collaborative builds turning validation theories into portfolio-grade products.",
  },
  {
    title: "Team Collaboration Labs",
    size: "md",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    text: "Cross-functional safe containers for product designers, engineers, and visionaries.",
  },
  {
    title: "Industry Masterclasses",
    size: "sm",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    text: "Direct domain vetting with executive mentors.",
  },
  {
    title: "Networking Mixers",
    size: "sm",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    text: "Connect with builders, innovators, and academic champions.",
  },
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80",
];

// --- Sub-component: Simple CountUp Animation for Impact Metrics ---
function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1.5; // seconds
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}+</span>;
}

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 59,
  });

  // Countdown timer lifecycle hook simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased selection:bg-green-100 selection:text-green-800">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-neutral-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >

            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              The Tech Catalyst <br />
              <span className="text-[#16A34A]">Community</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-gray-600 max-w-2xl leading-relaxed">
              "Join a movement of builders, innovators, designers, and
              problem-solvers."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md shadow-green-200 group"
              >
                Join Active Project Sprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold px-6 py-3 rounded-xl transition"
              >
                Explore Student Gallery
              </a>
            </div>

            <div className="pt-8 border-t border-neutral-100">
              <p className="text-xs uppercase font-semibold text-neutral-400 tracking-widest mb-3">
                Ecosystem Verification
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-semibold text-neutral-400 text-sm">
                <span>MIT Media Lab</span>
                <span>Harvard Innovation Labs</span>
                <span>YC Startup School</span>
                <span>GitHub Workspace</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square w-full max-w-[440px] mx-auto bg-gradient-to-tr from-green-50 to-emerald-100 rounded-2xl relative border border-green-200/40 p-4 shadow-xl">
              <div className="w-full h-full bg-white rounded-xl shadow-inner border border-neutral-100 relative overflow-hidden flex flex-col justify-between p-6">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    layout-canvas.tsx
                  </span>
                </div>
                <div className="my-auto space-y-4">
                  <div className="h-4 bg-neutral-100 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-[#16A34A]/10 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-neutral-100 rounded w-1/2 animate-pulse" />
                </div>
                <div className="bg-neutral-900 text-white rounded-lg p-4 font-mono text-xs shadow-lg">
                  <span className="text-green-400">~/tcc-platform $</span> npm
                  run build:production
                  <br />
                  <span className="text-neutral-400">
                    ✓ SEO Master Schema Optimized compiled successfully.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STORYTELLING STRUCTURE */}
      <section className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              The Structural Runway
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Replacing passive conceptual paths with a verified model for
              project execution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "1. Illustration",
                desc: "Visualize clear layout architectures before initializing terminal modules.",
                icon: Layers,
              },
              {
                title: "2. Description",
                desc: "Map deep software logic structures alongside core performance metrics.",
                icon: Code,
              },
              {
                title: "3. Outcomes",
                desc: "Translate your technical capabilities directly into working ecosystem ventures.",
                icon: Rocket,
              },
              {
                title: "4. Skills Gained",
                desc: "Absorb production-grade system design frameworks vetted annually.",
                icon: Lightbulb,
              },
            ].map((step, idx) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16A34A] mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS FEATURED SECTION */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Featured Initiatives
              </h2>
              <p className="mt-2 text-neutral-500">
                Portfolio-grade student engineering blueprints, startup tracks,
                and open-source contributions.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 inline-flex items-center gap-1 text-[#16A34A] font-semibold text-sm hover:underline"
            >
              View Repository Index <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-xs text-neutral-800 font-bold px-2.5 py-1 rounded-md shadow-sm border border-neutral-100">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-neutral-50 text-neutral-600 px-2 py-1 rounded border border-neutral-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY EXPERIENCE (BENTO GRID) */}
      <section className="py-20 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              The Community Architecture
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Step inside our monitored labs. High interactivity meet focused
              technical sprint cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
            {communityExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                className={`relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200 group ${
                  exp.size === "lg"
                    ? "md:col-span-2 md:row-span-2"
                    : exp.size === "md"
                      ? "md:col-span-1 md:row-span-2"
                      : "md:col-span-1 md:row-span-1"
                }`}
              >
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-[0.45] group-hover:brightness-[0.4] bg-neutral-900"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-neutral-300 text-xs leading-relaxed max-w-md opacity-90">
                    {exp.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT METRICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Ecosystem Metrics
            </h2>
            <p className="mt-2 text-neutral-500">
              Vetted statistics demonstrating transparent growth metrics over
              generic community logs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {impactMetrics.map((metric) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={metric.id}
                className="text-center space-y-2 border-l-2 border-neutral-100 pl-4 md:pl-6 text-left"
              >
                <div className="text-neutral-400 bg-neutral-50 w-10 h-10 rounded-lg flex items-center justify-center mb-1">
                  <metric.icon className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-neutral-900 font-mono tracking-tight">
                  <Counter value={metric.value} />
                </div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLASSMORPHISM TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.08rem,transparent_0.08rem)] [background-size:1.5rem_1.5rem] opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Evaluations & Vetting
            </h2>
          </div>

          <div className="relative min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white/70 backdrop-blur-md border border-white/80 p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between"
              >
                <p className="text-lg md:text-xl text-neutral-700 italic font-medium leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="mt-6 flex justify-between items-center pt-6 border-t border-neutral-200/40">
                  <div>
                    <h4 className="font-bold text-neutral-900">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#16A34A] bg-green-50 px-3 py-1 rounded-full border border-green-200/30">
                    {testimonials[activeTestimonial].type} Testimonial
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. MASONRY GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Community Gallery
            </h2>
            <p className="mt-2 text-neutral-500">
              A glance into active labs, hackathon boards, and collaborative
              milestones.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border w-full">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 rounded-xl overflow-hidden shadow-sm border border-neutral-200 cursor-pointer relative group"
                onClick={() => setLightboxImg(photo)}
              >
                <img
                  src={photo}
                  alt="Community activity snapshot"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-300 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-xs font-semibold bg-neutral-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Expand Image Layout
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Support */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <button className="absolute top-6 right-6 text-white text-sm font-mono">
                &times; CLOSE CANVAS
              </button>
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={lightboxImg}
                alt="Enlarged gallery view"
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 8. UPCOMING EVENTS & COUNTDOWN */}
      <section
        id="events"
        className="py-20 bg-neutral-50 border-t border-neutral-200/60"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-8 md:p-12 text-center space-y-8">
            <div className="max-w-xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" /> Next Organizational Cohort
                Sprint
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                TCC Alpha-Build Hackathon
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Our strict annual incubator onboarding sequence begins shortly.
                Lock down your registration module to establish core
                verification.
              </p>
            </div>

            {/* Countdown Timers */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto pt-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((timer, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3 shadow-inner"
                >
                  <div className="text-2xl md:text-3xl font-black text-neutral-900 font-mono tracking-tight">
                    {String(timer.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mt-1">
                    {timer.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-[#16A34A] hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-green-200/60 text-base">
                Secure Registration CTA Module
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL EMOTIONAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Stop spectator development. <br />
            <span className="text-[#16A34A]">Become a verified builder.</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            The Tech Catalyst Community is more than an organization—it is a
            functional environment engineered to launch software projects with
            structural permanence.
          </p>
          <div className="pt-4">
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-md">
              Initialize Workspace Access Alignment
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-neutral-200/60 py-12 text-center text-xs text-neutral-400 font-medium">
        <p>
          © 2026 The Tech Catalyst Community Student Organizing Committee •
          Faculty of Software Engineering.
        </p>
        <p className="mt-1 font-mono">
          Monitored Governance Protocol & Master Blueprint Engaged.
        </p>
      </footer>
    </div>
  );
}
