import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "cyan" | "success" | "outline" | "glow";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-slate-900/80 border-slate-700/60 text-slate-300",
    primary:
      "bg-blue-500/10 border-blue-500/30 text-blue-400",
    cyan:
      "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    success:
      "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    outline:
      "bg-transparent border-white/15 text-slate-300",
    glow:
      "bg-blue-950/40 border-blue-400/40 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.25)]",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1.5",
    md: "text-xs sm:text-sm px-3.5 py-1 gap-2",
  };

  const dotColors = {
    default: "bg-slate-400",
    primary: "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    success: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    outline: "bg-slate-300",
    glow: "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            dotColors[variant]
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
