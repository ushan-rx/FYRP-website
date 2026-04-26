# Synapse-CI — Research Project Website

**Smart DevOps Automation Platform with Agentic AI, Human-in-the-Loop CI/CD Orchestration, IaC Generation, Adaptive Test Prioritization, and Automated Chaos/Resilience Validation**

A Next.js 14 single-page website built for the Synapse-CI final-year research project at SLIIT.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (recommended)
```bash
npm install -g vercel
vercel
# Follow the prompts — select Next.js, use default settings
```

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done — your site is live in ~2 minutes

---

## 📁 Project Structure

```
synapse-ci/
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme variables, base styles
│   │   ├── layout.tsx         # Root layout + metadata
│   │   └── page.tsx           # Main page (assembles all sections)
│   └── components/
│       ├── ThemeProvider.tsx  # Dark/light theme context
│       ├── Navbar.tsx         # Sticky nav with scroll spy
│       ├── Hero.tsx           # Landing section with terminal animation
│       ├── Domain.tsx         # Research domain with tabbed content
│       ├── Milestones.tsx     # Timeline with expandable milestones
│       ├── Documents.tsx      # Document cards with links
│       ├── Presentations.tsx  # Slide decks with preview cards
│       ├── AboutUs.tsx        # Supervisors + team member cards
│       ├── Contact.tsx        # Contact form + details
│       ├── Footer.tsx         # Footer
│       └── SectionHeader.tsx  # Reusable section heading component
├── public/
│   └── assets/                # Static assets (see ASSETS.md)
├── ASSETS.md                  # Asset checklist and linking guide
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

---

## 🎨 Customization Guide

### Theme & Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  /* Light mode */
  --accent-cyan: #0891b2;
  --accent-amber: #d97706;
  /* ... */
}
.dark {
  /* Dark mode */
  --accent-cyan: #22d3ee;
  --accent-amber: #fbbf24;
  /* ... */
}
```

### Section Content
Each section is a standalone component. Edit data arrays at the top of each file:
- **Hero terminal lines** → `Hero.tsx` → `TERMINAL_LINES`
- **Tech stack** → `Domain.tsx` → `TECH_STACK`
- **Milestones** → `Milestones.tsx` → `MILESTONES`
- **Documents** → `Documents.tsx` → `DOCUMENTS`
- **Presentations** → `Presentations.tsx` → `PRESENTATIONS`
- **Team** → `AboutUs.tsx` → `SUPERVISORS` and `MEMBERS`

### Adding Assets
See `ASSETS.md` for the full asset checklist and file naming conventions.

### Contact Email
Replace `synapseci@example.com` across all components with the real team email.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS custom properties |
| Icons | Lucide React |
| Fonts | Syne (display) + Space Mono (monospace) + Inter (body) |
| Theme | Custom CSS variable–based dark/light system |
| Deployment | Vercel (static export) |

---

## 📋 Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 01 | Home | `Hero.tsx` | Landing with animated terminal and stats |
| 02 | Domain | `Domain.tsx` | Tabbed: Literature Survey, Gap, Problem, Objectives, Methodology, Tech |
| 03 | Milestones | `Milestones.tsx` | Filterable timeline with expandable cards |
| 04 | Documents | `Documents.tsx` | Document cards with View/Download links |
| 05 | Presentations | `Presentations.tsx` | Slide deck cards with status and links |
| 06 | About | `AboutUs.tsx` | Supervisor and team member profiles |
| 07 | Contact | `Contact.tsx` | Contact form + details |

---

## 📄 License

Research project — SLIIT, Faculty of Computing, 2024/2025.
