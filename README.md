# AI Engineer Portfolio

A modern, production-ready personal portfolio built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. Designed for AI engineers and researchers with data-driven content, markdown-powered blog/research sections, and polished UX.

## Features

- **7 pages**: Home, About, Projects, Research, Blog, Playground, Contact
- **Dark / light mode** with system preference support
- **Command palette** (Ctrl+K) for navigation and quick actions
- **Framer Motion** scroll reveals and page transitions
- **Markdown blog & research** with syntax highlighting, TOC, tags, and search
- **SEO ready**: OpenGraph metadata, sitemap, robots.txt
- **Accessible** components with keyboard navigation and ARIA labels
- **Responsive** mobile-first design with slide-out navigation
- **Scroll progress** indicator and back-to-top button
- **Loading skeletons**, error boundaries, and custom 404 page

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| UI | shadcn/ui (Radix primitives) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Markdown | gray-matter + remark/rehype + Shiki |
| Forms | React Hook Form + Zod |

## Folder Structure

```
Portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home
│   ├── template.tsx        # Page transitions
│   ├── about/
│   ├── projects/
│   ├── research/[slug]/
│   ├── blog/[slug]/
│   ├── playground/
│   ├── contact/
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/             # Header, Footer, MobileNav, CommandPalette
│   ├── home/               # Hero, ParticleBackground
│   ├── about/              # Timeline, Skills, Philosophy
│   ├── projects/           # ProjectCard
│   ├── research/           # ResearchList
│   ├── blog/               # BlogList, TOC, PostHeader
│   ├── playground/         # DemoCard grid
│   ├── contact/            # ContactForm, SocialLinks
│   ├── shared/             # SectionReveal, ScrollProgress, etc.
│   ├── providers/          # ThemeProvider
│   └── ui/                 # shadcn/ui components
├── content/
│   ├── blog/               # Markdown blog posts
│   └── research/           # Markdown research articles
├── data/                   # Editable portfolio data
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── socials.ts
│   └── playground.ts
├── hooks/
├── lib/                    # Utilities, markdown, SEO, types
├── public/images/
├── styles/globals.css
└── README.md
```

## Prerequisites

- **Node.js** 20 or later
- **npm** (or yarn/pnpm)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Editing Content

All portfolio information lives in data files — **no need to touch components**.

### Profile & Personal Info

Edit [`data/profile.ts`](data/profile.ts):

```typescript
export const profile: Profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  bio: "Your bio",
  email: "you@example.com",
  // ...
};
```

### Projects

Edit [`data/projects.ts`](data/projects.ts) — add, remove, or modify project objects.

### Experience & Education

Edit [`data/experience.ts`](data/experience.ts).

### Skills & Technologies

Edit [`data/skills.ts`](data/skills.ts).

### Social Links

Edit [`data/socials.ts`](data/socials.ts).

### Site Config

Edit [`lib/constants.ts`](lib/constants.ts) for site URL, navigation links, and metadata defaults.

## Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-12-01"
description: "A brief description for SEO and previews."
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

Posts appear automatically on `/blog`. Set `draft: true` in frontmatter to hide a post.

## Adding Research Articles

Same format as blog posts — create files in `content/research/`:

```markdown
---
title: "Research Note Title"
date: "2025-12-01"
description: "Brief summary."
tags: ["interpretability", "research"]
---

Your research notes in markdown...
```

## Theme Customization

Accent color and design tokens are in [`styles/globals.css`](styles/globals.css):

```css
:root {
  --primary: 262 83% 58%;   /* violet accent */
  --accent: 262 83% 58%;
  --radius: 0.75rem;
}
```

Change the HSL values to switch accent colors (e.g., cyan: `190 90% 50%`, emerald: `160 84% 39%`).

## Deployment to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.

2. Go to [vercel.com](https://vercel.com) and import your repository.

3. Vercel auto-detects Next.js — no build configuration needed:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. Set environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL` — your production URL (update `lib/constants.ts` accordingly)

5. Click **Deploy**. Vercel handles SSL, CDN, and preview deployments for every push.

### Custom Domain

In your Vercel project settings → **Domains**, add your custom domain and update `siteConfig.url` in [`lib/constants.ts`](lib/constants.ts).

### Contact Form Backend (Optional)

The contact form currently simulates submission client-side. To connect a real backend:

- **Resend**: Create an API route at `app/api/contact/route.ts`
- **Formspree**: Update the form action URL in `components/contact/contact-form.tsx`

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `Esc` | Close command palette / mobile menu |

## License

MIT — use freely for your own portfolio.
