"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  id: string;
  background?: "default" | "secondary" | "subtle";
  animate?: boolean;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  background = "default",
  animate = true,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const bgStyles = {
    default: "bg-[#030712]",
    secondary: "bg-[#070b14] border-y border-white/[0.04]",
    subtle: "bg-gradient-to-b from-[#030712] via-[#090e1a] to-[#030712]",
  };

  const motionProps =
    animate && !shouldReduceMotion
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
        }
      : {};

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-28 overflow-hidden",
        bgStyles[background],
        className
      )}
      {...props}
    >
      <motion.div {...motionProps} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  );
}

export default SectionWrapper;
