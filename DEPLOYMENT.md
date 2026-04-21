# 🚀 SvasthaX — Complete Deployment Guide
## GitHub + Vercel + Resend Email — From Zero to Live

---

## 📋 Overview of What We're Building

```
Your Computer  →  GitHub Repo  →  Vercel (auto-deploy)
                      ↑
              Push any change
              → Vercel rebuilds
              → Live in ~60 seconds
```

**Services used (all FREE):**
- **GitHub** — stores your code
- **Vercel** — hosts your website (free tier: unlimited personal projects)
- **Resend** — sends emails (free tier: 3,000 emails/month)

---

## PART 1 — Set Up Email with Resend (5 minutes)

### Step 1.1 — Create a Resend account
1. Go to **https://resend.com**
2. Click **"Sign Up"** — use your email address
3. Verify your email (check inbox for confirmation link)

### Step 1.2 — Get your API Key
1. After login, click **"API Keys"** in the left sidebar
2. Click **"Create API Key"**
3. Name it: `svasthax-production`
4. Permission: **"Sending access"**
5. Click **"Add"**
6. **⚠️ COPY THE KEY NOW** — it starts with `re_` and is only shown once
   - It looks like: `re_AbCdEfGh_1234567890abcdefghij`
   - Save it in a notepad — you'll need it in Part 3

### Step 1.3 — Verify your sender domain (optional but recommended)
> **Skip this step if you just want to test.** Without it, emails send from `onboarding@resend.dev` which works fine for testing.

For production with your own domain (e.g., `noreply@svasthax.com`):
1. Click **"Domains"** in sidebar → **"Add Domain"**
2. Enter your domain → follow the DNS instructions shown
3. Once verified, update the `from` field in `src/app/api/waitlist/route.ts`:
   ```ts
   // Change this line in route.ts:
   from: "SvasthaX <noreply@yourdomain.com>",
   ```

---

## PART 2 — Upload to GitHub (10 minutes)

### Step 2.1 — Install Git (if not already installed)
- **Windows:** Download from https://git-scm.com/download/win → install with defaults
- **Mac:** Run `git --version` in Terminal — if not installed, it prompts you automatically
- **Linux:** `sudo apt install git`

Verify: Open Terminal/Command Prompt and run:
```bash
git --version
# Should show: git version 2.x.x
```

### Step 2.2 — Configure Git with your identity
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Step 2.3 — Create a GitHub account
1. Go to **https://github.com**
2. Click **"Sign up"** → follow the steps
3. Verify your email address

### Step 2.4 — Create a new GitHub repository
1. Click the **"+"** icon (top right) → **"New repository"**
2. Fill in:
   - **Repository name:** `svasthax`
   - **Description:** `Clinical-grade preventive healthcare AI platform`
   - **Visibility:** ✅ **Private** (recommended — keeps your code private)
   - **DO NOT** check "Add README" or any other options
3. Click **"Create repository"**
4. **Keep this page open** — you'll need the URL in the next step

### Step 2.5 — Initialize your local project and push to GitHub

Open Terminal/Command Prompt and navigate to your project folder:

```bash
# Navigate to the svasthax folder (adjust path to where you extracted the zip)
cd path/to/svasthax

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "feat: initial SvasthaX Next.js 14 codebase"

# Set branch name to 'main'
git branch -M main

# Connect to your GitHub repository
# (Replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/svasthax.git

# Push your code to GitHub
git push -u origin main
```

After running these commands:
- Refresh your GitHub repository page
- You should see all your files listed there ✅

### Step 2.6 — Verify .env.local is NOT uploaded
Run this to confirm your secrets are ignored:
```bash
git status
# .env.local should NOT appear in the list
```
The `.gitignore` file already excludes it. Good — your API keys stay private.

---

## PART 3 — Deploy on Vercel (10 minutes)

### Step 3.1 — Create a Vercel account
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** — this is important for auto-deployment
4. Authorize Vercel to access your GitHub account

### Step 3.2 — Import your GitHub repository
1. After login, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **`svasthax`** and click **"Import"**

### Step 3.3 — Configure the project
Vercel auto-detects Next.js. You should see:

```
Framework Preset:   Next.js        ← auto-detected ✅
Root Directory:     ./             ← leave as is ✅
Build Command:      next build     ← auto-filled ✅
Output Directory:   .next          ← auto-filled ✅
```

**⚠️ Add Environment Variables (CRITICAL — emails won't work without this)**

Scroll down to **"Environment Variables"** section:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_your_key_from_part_1` |
| `OWNER_EMAIL` | `your@email.com` |

To add each one:
1. Click the **"Name"** field → type the variable name
2. Click the **"Value"** field → paste your value
3. Click **"Add"**
4. Repeat for the second variable

### Step 3.4 — Deploy!
1. Click **"Deploy"**
2. Watch the build logs — takes about 60-90 seconds
3. When you see **"Congratulations!"** → click **"Continue to Dashboard"**
4. Your site is now live at: `https://svasthax-XXXX.vercel.app`

### Step 3.5 — Test the live site
1. Open your Vercel URL
2. Navigate to `/waitlist`
3. Fill out the form with your own email
4. Click **"Join the Waitlist"**
5. Check your email — you should receive:
   - A **notification email** at your `OWNER_EMAIL` address
   - A **confirmation email** at the address you typed in the form

---

## PART 4 — Auto-Deploy on Every Git Push ✨

This is already set up! Here's how it works:

```
You edit code  →  git push  →  Vercel detects push  →  Auto rebuild  →  Live in ~60s
```

### Your everyday workflow:

```bash
# 1. Make changes to any file in your project

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "feat: update hero section copy"

# 4. Push to GitHub
git push

# That's it! Vercel auto-deploys within 60 seconds.
```

### Check deployment status:
- Go to **https://vercel.com/dashboard**
- Click your project → **"Deployments"** tab
- Every push creates a new deployment entry with build logs

### Preview Deployments (bonus feature):
Vercel also creates **preview URLs** for branches:
```bash
# Create a new branch for testing changes
git checkout -b feature/new-hero

# Make changes, then push
git add .
git commit -m "test: new hero variant"
git push origin feature/new-hero
```
Vercel creates a unique preview URL like `svasthax-git-feature-new-hero.vercel.app`  
This lets you preview changes **before** they go live on main.

---

## PART 5 — Add a Custom Domain (Optional)

If you have a domain like `svasthax.com`:

1. Go to Vercel Dashboard → your project → **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `svasthax.com`
4. Vercel shows you DNS records to add:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

5. Add these records in your domain registrar (GoDaddy / Namecheap / etc.)
6. Wait 5-30 minutes for DNS to propagate
7. Vercel auto-provisions an SSL certificate (HTTPS) for free ✅

---

## PART 6 — Update Environment Variables Later

If you need to change your `OWNER_EMAIL` or rotate your `RESEND_API_KEY`:

1. Go to Vercel Dashboard → your project
2. **"Settings"** → **"Environment Variables"**
3. Click the **"..."** next to the variable → **"Edit"**
4. Update the value → **"Save"**
5. **Redeploy** to apply changes:
   - Go to **"Deployments"** tab
   - Click the three dots on the latest deployment → **"Redeploy"**

---

## PART 7 — Useful Git Commands Reference

```bash
# Check current status (what's changed)
git status

# See all commits
git log --oneline

# Undo changes to a file (before committing)
git checkout -- src/components/waitlist/WaitlistForm.tsx

# See what changed in a file
git diff src/app/page.tsx

# Create and switch to a new branch
git checkout -b feature/my-new-feature

# Switch back to main
git checkout main

# Merge a branch into main
git merge feature/my-new-feature

# Pull latest changes from GitHub (if editing on multiple machines)
git pull origin main
```

---

## 🩺 Architecture Summary

```
Browser
  │
  │  POST /api/waitlist  (JSON body)
  ▼
Vercel Edge Function (src/app/api/waitlist/route.ts)
  │
  ├── Validates all fields
  ├── Calls Resend API ──► Sends notification to OWNER_EMAIL
  └── Calls Resend API ──► Sends confirmation to user's email
```

---

## ❓ Troubleshooting

### "Emails not arriving"
- Check your spam/junk folder
- In Vercel → Settings → Environment Variables, confirm `RESEND_API_KEY` and `OWNER_EMAIL` are set correctly
- Resend free tier only sends to **verified emails** until you verify a domain. Go to Resend → Domains to verify.

### "Build failing on Vercel"
- Click the failed deployment → read the build log
- Most common: TypeScript errors. Run `npm run type-check` locally first
- Check that all imports are correct

### "Push rejected by GitHub"
```bash
# Pull latest changes first
git pull origin main --rebase
# Then push again
git push
```

### "API returns 500 error"
- Check Vercel → your project → **"Functions"** tab → click the `/api/waitlist` function → view logs
- Most likely missing env vars

---

## ✅ Final Checklist

- [ ] Resend account created & API key copied
- [ ] Code pushed to GitHub private repo
- [ ] Vercel project created & connected to GitHub
- [ ] `RESEND_API_KEY` added in Vercel env vars
- [ ] `OWNER_EMAIL` added in Vercel env vars
- [ ] Site deployed successfully
- [ ] Waitlist form tested — emails received
- [ ] Auto-deploy tested — pushed a small change, Vercel rebuilt automatically
