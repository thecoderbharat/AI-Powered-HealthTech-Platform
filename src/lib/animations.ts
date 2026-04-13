// ─── Framer Motion Variants Library ───────────────────────────────────────
// Centralised animation definitions for the WellAhead.ai design system.
// Compatible with framer-motion v12 + React 19

import type { Variants, TargetAndTransition, Transition } from "framer-motion";

// ── Page-level entry ────────────────────────────────────────────────────────
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Fade + slide up (generic reveal) ───────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Fade in (no movement) ──────────────────────────────────────────────────
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Stagger container — wraps staggered children ───────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ── Stagger container (slow) — for hero text ──────────────────────────────
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// ── Stagger item ───────────────────────────────────────────────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Slide in from left ─────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Slide in from right ────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scale up ───────────────────────────────────────────────────────────────
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Card grid stagger ──────────────────────────────────────────────────────
export const cardGridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardGridItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Hero display text ──────────────────────────────────────────────────────
export const heroWordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Shared viewport options (once: true for scroll reveals) ───────────────
export const viewportOnce = { once: true, margin: "-80px" } as const;

// ── Hover micro-interactions ───────────────────────────────────────────────
// Typed as TargetAndTransition for framer-motion v12 compatibility
export const hoverScale: TargetAndTransition = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" } as Transition,
};

export const hoverScaleButton: TargetAndTransition = {
  scale: 1.04,
  transition: { duration: 0.15, ease: "easeOut" } as Transition,
};

export const tapScale: TargetAndTransition = {
  scale: 0.97,
};
