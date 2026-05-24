# Amit Patel — Personal Portfolio

A clean, mobile-optimized personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Includes a dark/light mode toggle with an animated transition, and a filterable project gallery.

![Built with Next.js 14](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0080)
![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-000)

## Features

- ⚡ **Next.js 14** App Router with React Server Components
- 🎨 **Tailwind CSS** + CSS variables for theming
- 🌗 **Dark / light mode** via `next-themes`, with a Framer Motion cross-fade transition on switch
- 🖼️ **Project gallery** with tag filtering, layout animations, and hover lift
- ✨ **Framer Motion** scroll-reveal sections, animated hero, and stagger lists
- 📱 **Mobile-first** responsive layout with an animated hamburger menu
- 🔍 **SEO-ready** — metadata API, Open Graph, sitemap, robots.txt
- ♿ **Accessible** — semantic HTML, keyboard-friendly, reduced-motion aware
- 🚀 **Vercel-ready** — `vercel.json` included, zero-config deploy

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

### Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the Next.js dev server      |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint the codebase                 |

## Customization

All content lives in **one file**: [`data/profile.ts`](./data/profile.ts). Edit it to customize:

- **`profile`** — name, role, tagline, summary, email, phone, location, resume URL
- **`socials`** — LinkedIn, GitHub, email links
- **`skills`** — grouped technical skills
- **`experience`** — work history (company, role, period, description, stack)
- **`projects`** — project gallery entries (title, description, tags, repo, demo)
- **`education`** — degrees and certifications

### Replace Placeholders

The following fields are pre-filled from your resume — replace them with your latest info:

- [ ] Drop your PDF resume at `public/resume.pdf`
- [ ] Update LinkedIn URL in `data/profile.ts` (current value is the placeholder LinkedIn share link)
- [ ] Add live demo URLs for each project (replace `'#'` in `projects[].demo`)
- [ ] Update `metadataBase` URL in `app/layout.tsx` to your domain
- [ ] Update `app/sitemap.ts` and `app/robots.ts` with your domain
- [ ] (Optional) Add an OG image at `public/og.png` and reference it in `app/layout.tsx`

### Theming

- Theme colors are CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).
- Adjust accent color via the `--accent` variable.
- Tailwind exposes them as `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `bg-accent`, etc.

### Fonts

- Body: **Inter**
- Display: **Space Grotesk**

Both are loaded with `next/font` for zero layout shift. Swap them in `app/layout.tsx`.

## Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind + theme CSS variables
│   ├── layout.tsx         # Root layout, fonts, ThemeProvider, metadata
│   ├── page.tsx           # Home page composition
│   ├── not-found.tsx
│   ├── robots.ts          # SEO
│   └── sitemap.ts         # SEO
├── components/
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx   # Animated dark/light switch
│   ├── theme-transition.tsx  # Full-screen Framer Motion cross-fade
│   ├── header.tsx         # Sticky nav with mobile menu
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── project-gallery.tsx  # Filterable project grid
│   ├── skills.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── section.tsx        # Reusable scroll-reveal section wrapper
│   ├── logo.tsx           # Inline SVG logo
│   └── icons.tsx          # Lucide icon map
├── data/
│   └── profile.ts         # ⭐ All site content lives here
├── lib/
│   └── utils.ts           # cn() className helper
├── public/                # Static assets (resume.pdf, og.png, etc.)
├── .github/workflows/ci.yml
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Deploy to Vercel

This repo is **Vercel-ready** — no extra configuration required.

### Option 1: One-Click

Push the repo to GitHub, then go to [vercel.com/new](https://vercel.com/new) and import it. Vercel auto-detects Next.js.

### Option 2: CLI

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### Custom Domain

1. In the Vercel dashboard, go to **Project → Settings → Domains**.
2. Add your domain (e.g. `amitpatel.dev`).
3. Update `metadataBase` in `app/layout.tsx`, plus `app/sitemap.ts` and `app/robots.ts`.

## Accessibility & Performance

- ✅ Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ `prefers-reduced-motion` honored on scroll-reveal animations
- ✅ Focus-visible rings on interactive elements
- ✅ All text meets WCAG AA contrast against `--bg` and `--surface`
- ✅ Fonts loaded via `next/font` (no CLS)
- ✅ Lighthouse target: 100/100/100/100

## License

MIT — feel free to fork and adapt for your own portfolio.

---

Made with care by [Amit Patel](https://github.com/Gatorapp).
