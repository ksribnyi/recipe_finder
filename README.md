# Recipe Finder App

An application to search for recipes with filters for query, cuisine, and maximum preparation time. Built with Next.js, Tailwind CSS, and the Spoonacular API.

---

## Key Features

- **Search recipes** by name, cuisine, and max preparation time.
- **Display recipe list** with images and titles.
- **Recipe details page:** ingredients and additional info.
- Server-side rendering (SSR) for fast load and SEO.
- API response caching for 1 minute to optimize performance.
- React Suspense for managing loading states.

---

## Application Architecture

- **src/app/page.tsx** — Home page with search form (query, cuisine, time).
- **src/app/recipes/page.tsx** — Recipes results page, SSR fetching data from Spoonacular API.
- **src/app/recipes/[id]/page.tsx** — Recipe details page, SSR fetching detailed info.
- **src/app/recipes/[id]/loading.tsx** — Loading component for recipe page, used with React Suspense.
- **src/app/layout.tsx** — Global layout with styles and structure.
- **src/app/not-found.tsx** — 404 Not Found page.
- **src/components/BackButton.tsx** — Reusable Back button component.
- **src/constants/constants.ts** — Constants (e.g., total recipes).
- **src/services/spoonacular.ts** — API service module (fetching, caching).
- **src/app/globals.css** — Global CSS and Tailwind config.
- **.env.local** — Environment variables including the Spoonacular API key.

---
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
