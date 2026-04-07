# Polite Singularity

A personal blog about the quiet merger of biology and technology.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS
- [Markdown](https://www.markdownguide.org/) — content authoring

## Development

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and connect to Netlify. The `netlify.toml` is already configured.

## Adding a new post

Create a new `.md` file in `src/content/posts/` with this frontmatter:

```yaml
---
title: "Your Post Title"
subtitle: "Optional subtitle shown below the title"
description: "A short description for the archive listing and SEO"
date: 2026-04-08
category: "Infrastructure"
readingTime: "10 min read"
draft: false
featured: false
---

Your post content here in Markdown...
```
