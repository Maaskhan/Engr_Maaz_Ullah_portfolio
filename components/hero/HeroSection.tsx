"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { profile, contactInfo, socialLinks } from "@/content/portfolioData";
import { Container, Button, Badge } from "@/components/ui";
import { HeroVisual } from "./HeroVisual";

const ROLES = [
  "AI & Machine Learning Engineer",
  "Computer Vision Specialist",
  "Python & Deep Learning Developer",
  "Intelligent Systems Builder",
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Subtle role rotation interval
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-16 lg:py-24 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Online / Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{profile.relocationStatus}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="text-gradient-blue">Maaz Ullah</span>
            </h1>

            {/* Professional Title & Rotating Dynamic Tagline */}
            <div className="mb-6 space-y-1">
              <p className="text-lg sm:text-2xl font-bold text-slate-200 tracking-tight">
                {profile.title}
              </p>
              <div className="h-7 sm:h-8 flex items-center text-sm sm:text-base font-semibold text-cyan-400 font-mono">
                <span className="text-slate-500 mr-2">Focus:</span>
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
              PEC-recognized Software Engineer specializing in Python development, Computer Vision architectures (ResNet-50, OpenCV, Grad-CAM), and automated AI-agent workflows. Dedicated to engineering robust machine learning pipelines and high-performance backend platforms that solve mission-critical challenges.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                className="w-full sm:w-auto shadow-[0_4px_25px_rgba(37,99,235,0.4)]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={profile.resumePath}
                external
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-1.5 text-cyan-400" />
                <span>Download CV</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href="#contact"
                className="w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-1.5 text-blue-400" />
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Verified Social Profile Chips */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={contactInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                  aria-label="Direct Email"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: IMAGE 1 Inside Circular Luxury Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
