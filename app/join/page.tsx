"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  Users,
  Layers,
} from "lucide-react";

// Strictly typed variants preventing literal string inference issues
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 22 },
  },
};

export default function JoinCommunityPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    academicYear: "",
    primaryTrack: "",
    experienceLevel: "beginner",
    motivation: "",
    honorCode: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API registration lag matching high-performance hooks
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] relative overflow-hidden selection:bg-[#f0fdf4] selection:text-[#16a34a]">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Context, Mission, and Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] font-sans leading-none">
                Join the <span className="text-[#16a34a]">Movement</span> of{" "}
                Builders.
              </h1>
              <p className="text-[#64748b] text-lg leading-relaxed">
                Become part of the Technology Catalysts Community (TCC). Step
                into a real university environment structured around peer-led
                delivery, rigorous engineering, and real-world execution.
              </p>
            </motion.div>

            {/* Core Values Journey Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider text-[#64748b] uppercase">
                The TCC Development Ecosystem
              </h3>

              <div className="space-y-3">
                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex gap-4 transition-all duration-300 hover:border-[#16a34a]/30">
                  <div className="p-2 bg-white rounded-lg border border-[#e2e8f0] text-[#16a34a] h-fit">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0f172a]">
                      Learn & Mentor
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      Accelerate through dedicated peer study tracks, hands-on
                      workshops, and deep ecosystem mentorship chains.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex gap-4 transition-all duration-300 hover:border-[#16a34a]/30">
                  <div className="p-2 bg-white rounded-lg border border-[#e2e8f0] text-[#16a34a] h-fit">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0f172a]">
                      Compete Internationally
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      Test your engineering logic and security posture in
                      monitored local hackathons and rigorous coding sprints.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex gap-4 transition-all duration-300 hover:border-[#16a34a]/30">
                  <div className="p-2 bg-white rounded-lg border border-[#e2e8f0] text-[#16a34a] h-fit">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0f172a]">
                      Venture Incubator Impact
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      Ship pro-bono, portfolio-grade architecture blueprints to
                      active regional clients and real-world hubs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Governance note Footer */}
            <motion.div
              variants={itemVariants}
              className="text-xs text-[#64748b] flex items-center gap-2 border-t border-[#e2e8f0] pt-6"
            >
              <ShieldCheck className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
              <span>
                Governed by TCC Student Organizing Committee. Roles rotated via
                audited annual elections.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Registration Card Interface */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="register-form"
                  variants={itemVariants}
                  className="bg-white border border-[#e2e8f0] shadow-sm rounded-2xl p-6 md:p-8 relative"
                >
                  <h2 className="text-xl font-bold text-[#0f172a] mb-6 tracking-tight">
                    Application Blueprint
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Alex Chen"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#f0fdf4] transition-all bg-white text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                        University Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex.chen@university.edu"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#f0fdf4] transition-all bg-white text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Academic Year */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                          Academic Standing
                        </label>
                        <select
                          name="academicYear"
                          required
                          value={formData.academicYear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#f0fdf4] transition-all bg-white text-sm cursor-pointer"
                        >
                          <option value="" disabled>
                            Select your year
                          </option>
                          <option value="freshman">
                            First Year (Freshman)
                          </option>
                          <option value="sophomore">
                            Second Year (Sophomore)
                          </option>
                          <option value="junior">Third Year (Junior)</option>
                          <option value="senior">Fourth Year+ (Senior)</option>
                        </select>
                      </div>

                      {/* Primary Focus Track */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                          Primary Tech Track
                        </label>
                        <select
                          name="primaryTrack"
                          required
                          value={formData.primaryTrack}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#f0fdf4] transition-all bg-white text-sm cursor-pointer"
                        >
                          <option value="" disabled>
                            Select your core path
                          </option>
                          <option value="software">
                            Software Engineering & Frontend Architects
                          </option>
                          <option value="cybersecurity">
                            Cybersecurity Enthusiasts
                          </option>
                          <option value="datascience">
                            Data Science & AI Systems
                          </option>
                          <option value="design">UI/UX Product Design</option>
                          <option value="entrepreneurship">
                            Technical Product Founders
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Skill Horizon Level */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                        Current Experience Horizon
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["beginner", "intermediate", "advanced"].map(
                          (level) => (
                            <label
                              key={level}
                              className={`border rounded-xl p-3 text-center capitalize cursor-pointer transition-all duration-200 block text-xs ${
                                formData.experienceLevel === level
                                  ? "border-[#16a34a] bg-[#f0fdf4] font-medium text-[#16a34a]"
                                  : "border-[#e2e8f0] bg-white text-[#64748b] hover:bg-[#f8fafc]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="experienceLevel"
                                value={level}
                                checked={formData.experienceLevel === level}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              {level}
                            </label>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Motivation / Vision Statement */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                        What do you want to build or impact?
                      </label>
                      <textarea
                        name="motivation"
                        required
                        rows={3}
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Tell us about a project concept, stack interest, or why you want to commit to TCC sprints..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#f0fdf4] transition-all bg-white text-sm resize-none"
                      />
                    </div>

                    {/* Honor Code & Dedication Check */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="honorCode"
                        name="honorCode"
                        required
                        checked={formData.honorCode}
                        onChange={handleInputChange}
                        className="mt-1 accent-[#16a34a] h-4 w-4 rounded border-[#e2e8f0] cursor-pointer"
                      />
                      <label
                        htmlFor="honorCode"
                        className="text-xs text-[#64748b] leading-relaxed cursor-pointer select-none"
                      >
                        I commit to actively participating in TCC tracks,
                        working on real-world collaborative builds, and
                        upholding strict principles of technical integrity.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full mt-2 bg-[#16a34a] hover:bg-[#15803d] disabled:bg-slate-300 text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Application <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                /* Success Slate View State */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-[#e2e8f0] shadow-sm rounded-2xl p-8 text-center space-y-6 max-w-lg mx-auto my-12"
                >
                  <div className="w-16 h-16 bg-[#f0fdf4] text-[#16a34a] border border-[#e2e8f0] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                      Application Transmitted
                    </h2>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0f172a]">
                        {formData.fullName}
                      </span>
                      . Your details have been routed safely to the Student
                      Organizing Committee.
                    </p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-xs text-left text-[#64748b] space-y-2">
                    <p className="font-semibold text-[#0f172a]">
                      🚀 What happens next?
                    </p>
                    <p>
                      1. <strong>Verification:</strong> Your university email
                      registration will be scanned by our validation scripts.
                    </p>
                    <p>
                      2. <strong>Onboarding Track:</strong> You will receive a
                      secure welcome repository link via{" "}
                      <span className="text-[#0f172a]">{formData.email}</span>{" "}
                      within 48 hours containing code environment configs and
                      sprint calendars.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
