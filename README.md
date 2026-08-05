# Scott Mason Website

Personal website for Scott Mason — speaker, author, and advocate for second chances. Built with Next.js and deployed on Vercel.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 4**
- **TypeScript**
- **Vercel** (hosting — free tier)
- **GitHub** (source control)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later), **or** use the portable method below if you don't have admin rights.

### No admin access? Use portable Node.js

You do **not** need an installer or admin rights. Node publishes a ZIP that runs from your user folder.

**Already set up on this machine:** portable Node is at `%USERPROFILE%\nodejs-portable` and was added to your user PATH.

**To run the site without touching PATH**, double-click or run from the project folder:

```bat
dev.cmd dev
```

Other commands: `dev.cmd install`, `dev.cmd build`, `dev.cmd start`

**Manual setup (any Windows PC without admin):**

1. Go to [nodejs.org/en/download](https://nodejs.org/en/download/) → **Windows Binary (.zip)** (not the `.msi` installer).
2. Extract to e.g. `C:\Users\YourName\nodejs-portable`.
3. Add that folder to your **user** PATH (no admin needed):
   - Press Win+R → run `rundll32 sysdm.cpl,EditEnvironmentVariables`
   - Under **User variables**, edit **Path** → **New** → paste the folder path.
4. Close and reopen your terminal, then `node -v` should work.

**Deploy without local Node:** push the repo to GitHub and connect Vercel — Vercel builds on their servers, so you never need Node on your laptop to go live.

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

GitHub + Vercel is the lowest-cost option for this site:

| Service | Cost |
|---------|------|
| Vercel (Hobby) | Free |
| GitHub | Free |
| Squarespace Domains | ~$20/year (domain only) |

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial Scott Mason website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scott-mason-website.git
git push -u origin main
```

### Step 2: Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import your repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Your site will be live at a `vercel.app` URL within minutes.

### Step 3: Connect scottmason.org (Squarespace Domains)

Keep your domain at Squarespace Domains and point it to Vercel:

1. In Vercel: **Project → Settings → Domains** → add `scottmason.org` and `www.scottmason.org`.
2. Vercel shows the DNS records you need.
3. In Squarespace Domains: open DNS settings for `scottmason.org`.
4. Add/update records as Vercel instructs (typically):
   - **A record** for `@` → `76.76.21.21`
   - **CNAME** for `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (up to 48 hours, often much faster).

You only pay Squarespace for the domain renewal — no Squarespace website plan needed.

## Customization

### Replace placeholder images

Swap Unsplash placeholders in `src/components/` with real assets in `public/images/`:

- Hero background (prison corridor)
- Video thumbnail
- Scott Mason portrait
- Logo (`src/components/Logo.tsx` or `public/logo.svg`)

### Add video

Update `src/components/Hero.tsx` to embed YouTube/Vimeo or use a hosted video file.

### Content

Edit text directly in the component files under `src/components/`.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & theme
│   ├── layout.tsx       # Root layout & fonts
│   └── page.tsx         # Home page
└── components/
    ├── Header.tsx       # Navigation bar
    ├── Hero.tsx         # Hero section
    ├── Mission.tsx      # My Mission section
    ├── SpeakingImpact.tsx
    ├── Logo.tsx
    └── icons.tsx
```

## License

Private — all rights reserved.
