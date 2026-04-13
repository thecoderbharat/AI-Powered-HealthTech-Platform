"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverScaleButton, tapScale } from "@/lib/animations";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "teal-border";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-4 text-lg",
  xl: "px-14 py-5 text-xl",
};

const variantClasses = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  "teal-border":
    "inline-flex items-center gap-3 px-8 py-4 rounded-[1rem] bg-gradient-to-r from-[#002824] to-[#1c253e] border border-primary/30 text-primary font-bold font-headline hover:border-primary transition-all duration-300",
};

/**
 * GlowButton — Reusable animated CTA button/link.
 * Renders as <Link> when `href` is provided, otherwise a <button>.
 */
export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  type = "button",
  disabled = false,
}: GlowButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-headline font-bold rounded-full",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <motion.div whileHover={hoverScaleButton} whileTap={tapScale}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      whileHover={!disabled ? hoverScaleButton : {}}
      whileTap={!disabled ? tapScale : {}}
    >
      {children}
    </motion.button>
  );
}
