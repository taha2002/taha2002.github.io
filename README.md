# 🚀 Taha Bouras | Full-Stack & Integration Engineer

*Bridging Industrial Maintenance with Advanced Software Engineering & AI Diagnostics*

[LinkedIn](https://www.linkedin.com/in/taha-bouras/) • [GitHub](https://github.com/taha2002) • [Upwork](https://www.upwork.com/freelancers/~01207c7496867bfeaf?mp_source=share) • [Fiverr](https://www.fiverr.com/tahabouras) • [Email](mailto:tahadevbou@gmail.com)

---

## 📱 Dev Portal - Next.js Portfolio & Blog

A modern, terminal-inspired portfolio and blog website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Features a responsive design, dark theme, dynamic blog system, and optimized static export.

> **UI Design:** Generated with Google AI Studio for rapid prototyping and seamless integration

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

✨ **Modern Portfolio Design**
- Hero section with animated text effects
- Experience timeline
- Projects showcase
- Skills visualization with charts
- Social proof section
- Smooth animations and transitions

📝 **Dynamic Blog System**
- Markdown-based blog posts with frontmatter
- Syntax-highlighted code blocks
- Reading time estimates
- Category and date filtering
- Static generation for optimal performance

🎨 **Design & UX**
- Terminal-inspired color scheme
- Dark theme with theme toggle
- Fully responsive (mobile, tablet, desktop)
- SEO optimized with metadata
- Loading animations
- Smooth navigation with "Back to Top" button

⚡ **Performance**
- Static site generation (SSG)
- Optimized for fast loading
- Turbopack for rapid build times
- Image optimization
- Minimal dependencies

## Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm**, **yarn**, **pnpm**, or **bun** (any package manager)

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   pnpm install
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (static export)
- `npm start` - Run production build locally
- `npm run lint` - Run TypeScript and ESLint checks

### Project Structure

```
├── app/                      # Next.js App Router
│   ├── blog/                 # Blog pages
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/          # Dynamic blog post
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── SkillsChart.tsx
│   ├── CodeBlock.tsx
│   └── ...
├── content/posts/           # Markdown blog posts
│   └── *.md
├── lib/                     # Utilities
│   └── blog.ts             # Blog data fetching
├── public/                  # Static assets
├── types.ts                 # TypeScript types
└── constants.ts             # App constants
```

## Creating Blog Posts

Blog posts are written in **Markdown** and stored in the `content/posts/` directory.

### Post Structure

Create a new file like `my-post.md` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-02-09"
excerpt: "A brief summary of your post"
category: "Technology"
readTime: "5 min read"
---

# Your Content Here

Your markdown content goes here. It supports:
- Lists
- **Bold** and *italic* text
- [Links](https://example.com)
- `Code snippets`

\`\`\`typescript
// Code blocks with syntax highlighting
const greeting = "Hello, World!";
\`\`\`
```

### Post Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | ✅ | Post title |
| date | string | ✅ | Publication date (YYYY-MM-DD) |
| excerpt | string | ✅ | Short summary |
| category | string | ✅ | Post category |
| readTime | string | ✅ | Estimated read time |

Posts are automatically sorted by date (newest first) and static pages are generated during build.

## Customization

### Colors & Theme

Edit `globals.css` and `types.ts` to customize:
- Terminal color scheme
- Font families
- Spacing and sizing
- Dark mode colors

### Content

- **Home page:** Edit `app/page.tsx`
- **Navigation:** Edit `components/Navbar.tsx`
- **Footer:** Edit `components/Footer.tsx`
- **Portfolio sections:** Edit respective component files
- **Blog listing:** Edit `app/blog/page.tsx`

### Configuration

Edit `constants.ts` for:
- Site metadata
- Navigation links
- Social media profiles
- Portfolio data

## Building for Production

The project uses **Static Export** (`output: export`), meaning it generates a fully static site suitable for GitHub Pages, Vercel, Netlify, or any static host.

```bash
npm run build
```

This generates an `out/` directory with all static HTML files.

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
npm run build
# Push the 'out' directory to your gh-pages branch
```

### Deploy to Netlify

Connect your Git repository to Netlify. Add build command:
```
npm run build
```
Publish directory: `out`

## Technologies

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Markdown:** React Markdown + Gray Matter
- **UI Icons:** Lucide React
- **Chart:** Recharts
- **Code Highlight:** Highlight.js via CodeBlock component

## Performance Metrics

- ⚡ Sub-second page loads
- 📊 100+ Lighthouse score potential
- 🔍 SEO optimized
- ♿ WCAG accessible
- 📱 Mobile responsive

## License

This project is **MIT Licensed** - feel free to use, modify, and distribute as you wish. See [LICENSE](./LICENSE) for details.

## Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Share your modifications

## Support

Having issues? 
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
- Open an issue on the repository

## Credits

Built with ❤️ using modern web technologies.

---

**Made with Next.js, TypeScript & Tailwind CSS** ✨
