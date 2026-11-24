"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Code2, Sparkles } from "lucide-react";
import { profile } from "@/content/portfolioData";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto aspect-square"
    >
      {/* 1. Diffuse Ambient Glowing Aura */}
      <div
        className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-blue-400/20 blur-[45px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Rotating Subtle Conic Gradient Accent Ring */}
      <div
        className="absolute inset-[-4px] rounded-full p-[2px] opacity-75 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, #3B82F6, #06B6D4, #10B981, #2563EB, #3B82F6)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: shouldReduceMotion ? "none" : "spin 22s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* 3. Luxurious Circular Portrait Frame Container */}
      <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/15 via-blue-500/10 to-white/5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-md overflow-hidden group">
        <div className="w-full h-full rounded-full overflow-hidden relative bg-[#070b14]">
          <Image
            src={profile.heroImage}
            alt={`${profile.fullName} - Primary Profile Photograph`}
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* 4. Floating Badge: Top-Right (AI & Deep Learning) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-2 -right-3 sm:-right-5 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0a101f]/90 border border-blue-500/30 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_15px_rgba(59,130,246,0.25)] select-none"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Brain className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-tight">AI & Deep Learning</span>
          <span className="text-[10px] text-cyan-300 font-mono">Vision & Models</span>
        </div>
      </motion.div>

      {/* 5. Floating Badge: Bottom-Left (Python & Engineering) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 8, 0],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-2 -left-3 sm:-left-5 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0a101f]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_15px_rgba(6,182,212,0.25)] select-none"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-tight">Python Specialist</span>
          <span className="text-[10px] text-emerald-300 font-mono">FastAPI & OpenCV</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroVisual;
