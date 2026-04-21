# SvasthaX — Next.js 14 Production Codebase

> **Clinical-Grade Preventive Healthcare AI Platform**  
> Built with Next.js 14 App Router · TypeScript Strict · Tailwind CSS · Framer Motion

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
svasthax/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # ✅ Root layout — JSON-LD + global SEO metadata
│   │   ├── globals.css               # ✅ Design system CSS tokens + utility classes
│   │   ├── page.tsx                  # ✅ Home page (/) — metadata + section assembly
│   │   ├── not-found.tsx             # ✅ Custom 404
│   │   ├── whitepaper/
│   │   │   └── page.tsx              # ✅ Whitepaper page (/whitepaper)
│   │   └── waitlist/
│   │       └── page.tsx              # ✅ Waitlist page (/waitlist)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # ✅ Glass nav — sticky, active link, animated
│   │   │   └── Footer.tsx            # ✅ Server Component footer
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx       # ✅ H1 + hero image + ambient blobs
│   │   │   ├── DigitalTwinSection.tsx         # ✅ Meet Your Digital Twin
│   │   │   ├── PrecisionDetectionSection.tsx  # ✅ 3-card stagger grid
│   │   │   ├── CycleOfIntelligenceSection.tsx # ✅ 4-card cycle grid
│   │   │   ├── IntelligenceLayerSection.tsx   # ✅ CCE/PSEM/CSE/BCSA algorithms
│   │   │   ├── DigitalTwinArchitectureSection.tsx # ✅ Split layout + brain image
│   │   │   └── FinalCTASection.tsx   # ✅ "Ready to evolve your care?"
│   │   │
│   │   ├── whitepaper/
│   │   │   ├── WhitepaperHeroSection.tsx   # ✅ Hero with neural image
│   │   │   ├── WhitepaperCardSection.tsx   # ✅ PDF download card
│   │   │   ├── VideoMockupSection.tsx      # ✅ Play button overlay video
│   │   │   ├── AppShowcaseSection.tsx      # ✅ 3 staggered phone screens
│   │   │   └── AppStoreCTASection.tsx      # ✅ App Store + Google Play
│   │   │
│   │   ├── waitlist/
│   │   │   ├── WaitlistHeroSection.tsx     # ✅ H1 "Secure Your Early Access"
│   │   │   ├── PhoneMockup.tsx             # ✅ Animated CSS phone mockup
│   │   │   └── WaitlistForm.tsx            # ✅ Full form + validation + success state
│   │   │
│   │   ├── shared/
│   │   │   ├── ScrollReveal.tsx      # ✅ Reusable scroll-triggered wrapper
│   │   │   └── GlowButton.tsx        # ✅ Reusable animated CTA button/link
│   │   │
│   │   └── ui/                       # (Reserved for future shadcn/radix components)
│   │
│   ├── lib/
│   │   ├── animations.ts             # ✅ All Framer Motion variants (centralised)
│   │   └── utils.ts                  # ✅ cn() helper (clsx + tailwind-merge)
│   │
│   └── types/
│       └── index.ts                  # ✅ All shared TypeScript interfaces
│
├── public/
│   └── images/                       # Static assets (add your own)
│
├── package.json
├── tsconfig.json                     # Strict TypeScript + path aliases
├── tailwind.config.ts                # Full design system (40+ colors, custom radii)
├── postcss.config.mjs
└── next.config.ts                    # Remote image patterns
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#83efe1` | Teal — CTAs, health data, positive states |
| `secondary` | `#af88ff` | Purple — AI insights, glow accents |
| `surface` | `#070d1f` | Deep background |
| `surface-container-low` | `#0c1326` | Section backgrounds |
| `surface-container` | `#11192e` | Card backgrounds |
| `on-surface` | `#dfe4fe` | Primary text |
| `on-surface-variant` | `#a5aac2` | Secondary text |

### CSS Utility Classes (globals.css)
```css
.glass-panel          /* Glassmorphism — rgba + backdrop-blur */
.gradient-text-primary /* Teal gradient text */
.gradient-text-oracle  /* Teal→Purple gradient text */
.btn-primary          /* Teal gradient pill button */
.btn-ghost            /* Transparent outline pill button */
.oracle-bg            /* Radial ambient background */
.input-oracle         /* Input with teal focus glow */
.vitality-gradient    /* Teal gradient fill */
.ghost-border         /* 15% opacity border */
.card-hover-purple    /* Purple glow on card hover */
.card-hover-teal      /* Teal glow on card hover */
```

### Animation Library (src/lib/animations.ts)
All Framer Motion variants are centralised — import and use directly:
```ts
import {
  pageVariants,        // Full page fade+slide entry
  fadeUpVariants,      // Scroll reveal — fade + slide up
  staggerContainer,    // Wraps staggered children
  staggerItem,         // Individual stagger child
  cardGridContainer,   // Grid stagger wrapper
  cardGridItem,        // Grid card reveal
  slideInLeft,         // Horizontal slide from left
  slideInRight,        // Horizontal slide from right
  scaleUpVariants,     // Scale-up reveal
  hoverScale,          // Hover micro-interaction
  hoverScaleButton,    // Button hover (slightly larger scale)
  tapScale,            // Button tap (press down)
  viewportOnce,        // { once: true, margin: "-80px" }
} from "@/lib/animations";
```

---

## ✅ Compliance Checklist

### SEO
- [x] `metadata` export on every page (title, description, OG, Twitter)
- [x] JSON-LD `Organization` schema in root layout
- [x] JSON-LD `SoftwareApplication` schema in root layout
- [x] Strict H1 → H2 → H3 heading hierarchy across all pages
- [x] All `<Image />` components have descriptive `alt` tags
- [x] `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` semantic HTML
- [x] `aria-label`, `aria-current`, `aria-labelledby`, `role` attributes
- [x] Skip-to-content link for keyboard accessibility
- [x] Canonical URLs set on every page
- [x] Waitlist page `robots: noindex` (invite-only)

### Animations (Framer Motion)
- [x] Page load fade-in + slide-up on all hero sections
- [x] Scroll reveals with `whileInView + viewport.once: true`
- [x] `staggerChildren` on all card grids (Precision, Cycle, Algorithms, App Showcase)
- [x] `whileHover={{ scale: 1.02 }}` on all cards
- [x] `whileHover + whileTap` on all buttons and CTAs
- [x] Animated vitality progress bar in PhoneMockup
- [x] Animated bar chart in PhoneMockup
- [x] `AnimatePresence` for form → success state transition
- [x] Hero image `animate-float` keyframe
- [x] Ambient blob `animate-pulse-glow` keyframe

### Architecture
- [x] Default Server Components for all layout + page shells
- [x] `"use client"` only where Framer Motion or `useState` is required
- [x] Path alias `@/*` for all imports
- [x] Centralised animation variants in `src/lib/animations.ts`
- [x] Shared `GlowButton` + `ScrollReveal` reusable components
- [x] Full TypeScript strict mode with shared `types/index.ts`
- [x] `cn()` utility for conditional class merging

---

## 🔧 Environment & Deployment

### Prerequisites
- Node.js 18.17+
- npm 9+

### Scripts
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript check (no emit)
```

### Deployment (Vercel — recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
No environment variables required for the base build.  
When connecting a real waitlist API, add to `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.svasthax.com
WAITLIST_API_KEY=your_secret_key
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.5 | App Router framework |
| `react` | ^18.3 | UI library |
| `framer-motion` | ^11.3 | Animations |
| `lucide-react` | ^0.414 | Icon system |
| `clsx` | ^2.1 | Conditional classes |
| `tailwind-merge` | ^2.4 | Tailwind class deduplication |
| `tailwindcss` | ^3.4 | Utility CSS |
| `typescript` | ^5 | Type safety |

---

## 🩺 Next Steps

1. **Connect a real waitlist API** — Update `WaitlistForm.tsx` `handleSubmit` to POST to your backend
2. **Add real images** — Replace Google CDN URLs with your own assets in `/public/images/`
3. **Analytics** — Add `next/third-parties` Google Analytics or Plausible
4. **i18n** — Next.js App Router supports `next-intl` for internationalization
5. **Testing** — Add Playwright E2E + Vitest unit tests
6. **CMS** — Integrate Sanity or Contentlayer for whitepaper content management
