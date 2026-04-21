# ⚡ Upgrade to Next.js 15 — Step-by-Step Guide
## Complete instructions to uninstall old version and install Next.js 15

---

## What's Changing

| | Before | After |
|---|---|---|
| **Next.js** | 14.2.5 | 15.3.1 |
| **React** | 18.3.1 | 19.1.0 |
| **Framer Motion** | 11.x | 12.x |
| **Lucide React** | 0.414 | 0.511 |
| **Dev mode** | `next dev` | `next dev --turbopack` (faster) |
| **Config** | `next.config.ts` ❌ | `next.config.mjs` ✅ |
| **`experimental.appDir`** | Required on some installs | Removed (built-in) |

---

## STEP 1 — Delete your old project folder contents

Open Terminal and navigate to your project:

```bash
cd /Users/bharat/Downloads/SvasthaXProject/Web/svasthax
```

**Delete node_modules and lock file** (keeps your source code):

```bash
# Mac / Linux
rm -rf node_modules
rm -f package-lock.json

# Windows (Command Prompt)
rmdir /s /q node_modules
del package-lock.json
```

---

## STEP 2 — Replace all updated files

Extract the new zip file. Copy and **replace** these files into your project folder:

```
svasthax/
├── package.json                          ← REPLACE
├── next.config.mjs                       ← REPLACE
├── tsconfig.json                         ← REPLACE
├── .eslintrc.json                        ← REPLACE
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← REPLACE
│   │   └── api/waitlist/route.ts         ← REPLACE
│   ├── lib/
│   │   └── animations.ts                ← REPLACE
│   └── components/
│       ├── home/
│       │   ├── IntelligenceLayerSection.tsx  ← REPLACE
│       │   ├── PrecisionDetectionSection.tsx ← REPLACE
│       │   └── CycleOfIntelligenceSection.tsx← REPLACE
│       ├── whitepaper/
│       │   └── AppStoreCTASection.tsx    ← REPLACE
│       └── waitlist/
│           └── PhoneMockup.tsx           ← REPLACE
```

> All other files (page.tsx, HeroSection.tsx, etc.) are unchanged — no need to replace them.

---

## STEP 3 — Check your Node.js version

Next.js 15 requires **Node.js 18.17 or higher**.

```bash
node --version
```

**If you see v16.x or lower**, upgrade Node.js:

1. Go to **https://nodejs.org**
2. Download the **LTS** version (green button)
3. Install it — it replaces your old version automatically
4. Close and reopen Terminal
5. Run `node --version` again — should show v20.x or v22.x

---

## STEP 4 — Install all new dependencies

```bash
# Make sure you're in the project folder
cd /Users/bharat/Downloads/SvasthaXProject/Web/svasthax

# Install everything fresh
npm install
```

This will install:
- `next@15.3.1`
- `react@19.1.0` + `react-dom@19.1.0`
- `framer-motion@12.x`
- `lucide-react@0.511.0`
- All updated dev dependencies

The install takes about 1–2 minutes. You'll see a progress bar.

---

## STEP 5 — Delete the old .next cache

```bash
# Mac / Linux
rm -rf .next

# Windows
rmdir /s /q .next
```

This forces Next.js to rebuild from scratch with the new version.

---

## STEP 6 — Start the development server

```bash
npm run dev
```

You should see:

```
  ▲ Next.js 15.3.1 (Turbopack)
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 847ms
```

Open **http://localhost:3000** in your browser. ✅

---

## STEP 7 — Verify all 3 pages work

| URL | Expected |
|-----|----------|
| `http://localhost:3000` | Home page — Hero, cards, sections |
| `http://localhost:3000/whitepaper` | Whitepaper page |
| `http://localhost:3000/waitlist` | Waitlist form with phone mockup |

---

## What Was Updated in the Code

### `package.json`
- All versions bumped to latest
- Dev script now uses `--turbopack` flag (Rust-based bundler, 10x faster hot reload)

### `next.config.mjs`
- Removed `experimental: { appDir: true }` — this flag was for Next.js 13 only and throws a warning in Next.js 15 since App Router is now the default

### `tsconfig.json`
- Added `"target": "ES2017"` for better browser compatibility

### `src/lib/animations.ts`
- `hoverScale`, `hoverScaleButton`, `tapScale` typed as `TargetAndTransition` (framer-motion v12 requirement)
- Added `Transition` import for proper type inference

### `src/app/layout.tsx`
- Removed `Readonly<{}>` wrapper on children prop (React 19 simplification)

### `src/app/api/waitlist/route.ts`
- Changed `runtime = "edge"` to `runtime = "nodejs"` (better compatibility)

### Icon fixes (all components)
- `ShieldHeart` → `Shield`
- `BrainCircuit` → `Cpu`
- `Network` → `Share2`
- `Brain` → `Zap`
- `Baby` → `Heart`
- `Sliders` → `SlidersHorizontal`
- `Bot` → `Terminal`
- `Lightbulb` → `BarChart2`

---

## Troubleshooting

### "npm install" fails with peer dependency errors

```bash
npm install --legacy-peer-deps
```

### "Cannot find module 'next'" after install

```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
# Kill whatever is using port 3000
npx kill-port 3000

# Then start again
npm run dev
```

### TypeScript errors on startup

```bash
# Run type check to see all errors clearly
npm run type-check
```

### Windows: 'rm' is not recognized

Use these Windows equivalents:
```bat
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json
npm install
```

---

## Push to GitHub After Upgrading

```bash
git add .
git commit -m "chore: upgrade to Next.js 15, React 19, framer-motion 12"
git push
```

Vercel will auto-detect Next.js 15 and deploy correctly — no Vercel config changes needed.
