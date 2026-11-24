"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientCanvasProps {
  className?: string;
}

export function AmbientCanvas({ className }: AmbientCanvasProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden pointer-events-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Precision Ambient Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 60% at 50% 25%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 25%, #000 60%, transparent 100%)",
        }}
      />

      {/* Primary Electric Blue Glowing Orb (Top Right) */}
      <motion.div
        className="absolute -top-[15%] -right-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-br from-blue-600/15 via-blue-700/10 to-transparent blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -35, 15, 0],
                y: [0, 45, -20, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Cyan Glowing Orb (Mid-Left) */}
      <motion.div
        className="absolute top-[40%] -left-[12%] w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-cyan-500/12 via-teal-600/08 to-transparent blur-[130px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 50, -25, 0],
                y: [0, -40, 30, 0],
                scale: [1, 0.96, 1.06, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary Deep Emerald / Slate Accent Orb (Bottom Center) */}
      <motion.div
        className="absolute -bottom-[15%] left-[25%] w-[520px] h-[520px] rounded-full bg-gradient-to-t from-blue-950/20 via-cyan-950/15 to-transparent blur-[140px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -25, 30, 0],
                y: [0, 25, -35, 0],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default AmbientCanvas;
