"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] disabled:opacity-50 disabled:pointer-events-none select-none";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.45)] border border-blue-400/30",
      secondary:
        "bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/40 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md",
      outline:
        "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-white/20 hover:border-blue-400/60",
      ghost:
        "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border-transparent",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const content = (
      <>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    const motionProps = shouldReduceMotion
      ? {}
      : {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
        };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (external || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
        return (
          <motion.a
            href={href}
            onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement>}
            target={external || href.startsWith("http") ? "_blank" : undefined}
            rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={classes}
            {...motionProps}
          >
            {content}
          </motion.a>
        );
      }

      return (
        <motion.div {...motionProps} className="inline-block">
          <Link
            href={href}
            onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement>}
            className={classes}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || "button"}
        disabled={disabled}
        className={classes}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        name={props.name}
        aria-label={props["aria-label"]}
        title={props.title}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
