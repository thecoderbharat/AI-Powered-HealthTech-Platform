// ─── WellAhead.ai — Shared TypeScript Types ───────────────────────────────

// Navigation
export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

// Footer
export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

// Intelligence Layer Algorithms
export interface AlgorithmCard {
  acronym: string;
  fullName: string;
  description: string;
  iconName: string;
  color: "primary" | "secondary";
}

// Cycle of Intelligence
export interface CycleCard {
  title: string;
  badge: string;
  description: string;
  iconName: string;
  color: "primary" | "secondary";
}

// App Showcase screens
export interface AppScreen {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  offsetClass?: string;
}

// Waitlist form shape
export interface WaitlistFormData {
  fullName: string;
  email: string;
  healthGoal: string;
  city: string;
  wearable: "yes" | "no" | null;
}

// Form field error map
export type FormErrors = Partial<Record<keyof WaitlistFormData, string>>;

// Generic animated card
export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
  badgeText?: string;
  colorVariant: "primary" | "secondary";
}

// SEO metadata helpers
export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}
