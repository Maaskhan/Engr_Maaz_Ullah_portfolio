"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-blue">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  const isCenter = align === "center";

  const motionVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: readonly [number, number, number, number] };
    };
  } = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={motionVariants}
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {tag && (
        <div className={cn("mb-3 flex", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant="cyan" dot size="md">
            {tag}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-sm sm:text-base text-slate-400 leading-relaxed",
            isCenter ? "max-w-2xl mx-auto" : "max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
