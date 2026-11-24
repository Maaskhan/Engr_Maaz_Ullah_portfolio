"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Cpu,
  Layers,
} from "lucide-react";
import { profile, contactInfo } from "@/content/portfolioData";
import { Container, SectionHeading, Button, Badge } from "@/components/ui";
import { AboutImageCard } from "./AboutImageCard";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const infoItems = [
    {
      label: "Location",
      value: "Pakistan",
      icon: MapPin,
      color: "text-blue-400",
    },
    {
      label: "Degree",
      value: "BS Software Engineering",
      sub: "MUST (2026) • PEC Accredited",
      icon: GraduationCap,
      color: "text-cyan-400",
    },
    {
      label: "Focus",
      value: "AI & Software Engineering",
      sub: "Deep Learning, Python & Vision",
      icon: Cpu,
      color: "text-emerald-400",
    },
    {
      label: "Availability",
      value: "Open to Opportunities",
      sub: "Remote Roles & Relocation",
      icon: Sparkles,
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me & Background"
      className="relative py-20 lg:py-28 bg-[#050811] border-y border-white/[0.06] overflow-hidden"
    >
      <Container size="wide">
        <SectionHeading
          tag="Biography"
          title="About Me"
          highlight="Me"
          subtitle="Engineering robust machine learning models, computer vision systems, and modern software architectures."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Secondary Profile Photograph (Editorial Layout) - 5 cols */}
          <div className="lg:col-span-5 flex justify-center">
            <AboutImageCard />
          </div>

          {/* Right Column: Narrative, Key Experience & Information Matrix - 7 cols */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Lead Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              I am <strong className="text-white font-bold">{profile.fullName}</strong>, a Software Engineer and AI developer with a degree in <span className="text-cyan-300 font-semibold">BS Software Engineering (2026)</span> from the <span className="text-white font-medium">Mirpur University of Science and Technology (MUST)</span>, accredited by the Pakistan Engineering Council (PEC).
            </p>

            {/* Experience & Practical Focus Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My engineering journey is driven by practical problem solving across machine learning and full-stack software development. During my internship as an <strong className="text-slate-100">Artificial Intelligence Intern</strong> at <em>Digital Premier Solutions (Pvt.) Ltd.</em>, I engineered automated Python ML pipelines, AI-agent reporting workflows, and REST inference services. Prior to that, as a <strong className="text-slate-100">Web Developer Intern</strong> at <em>Nerithonx Technologies</em>, I built responsive frontend interfaces connected to relational database architectures.
            </p>

            {/* Core Interests Highlight */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
                Primary Interests & Technical Breadth
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {profile.professionalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-3 py-1 rounded-full bg-slate-800/80 text-slate-200 border border-white/5 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Small Information Area Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {infoItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-white/5 ${item.color} shrink-0 mt-0.5`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-white block">
                        {item.value}
                      </span>
                      {item.sub && (
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {item.sub}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Linking to Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href="#contact">
                <span>Discuss Opportunities</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button
                variant="outline"
                size="md"
                href={profile.resumePath}
                external
              >
                <span>View Full Curriculum Vitae</span>
              </Button>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
