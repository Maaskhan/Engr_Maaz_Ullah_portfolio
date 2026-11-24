"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Code, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { profile } from "@/content/portfolioData";

export function AboutImageCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Decorative Asymmetric Glass Backdrop */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent border border-blue-500/30 transform -rotate-2 scale-98 pointer-events-none transition-transform duration-500 group-hover:-rotate-3"
        aria-hidden="true"
      />

      {/* Main Card Frame */}
      <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-900/90 via-[#070b14]/95 to-slate-950 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-xl overflow-hidden group">
        
        {/* Secondary Profile Image (Workstation Photo) */}
        <div className="relative rounded-2xl overflow-hidden aspect-[5/4] bg-[#030712]">
          <Image
            src={profile.aboutImage}
            alt="Eng. Maaz Ullah at his engineering workstation"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 460px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
          />

          {/* Vignette Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Desk Motto Badge */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-white text-xs font-bold tracking-wide shadow-md">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>Build • Innovate • Grow</span>
          </div>
        </div>

        {/* Small Highlight Footer Bar */}
        <div className="pt-3 px-2 pb-1 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-300 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>MUST Graduate • 2026</span>
          </span>
          <span className="font-mono text-[11px] text-cyan-400">PEC Accredited</span>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutImageCard;
