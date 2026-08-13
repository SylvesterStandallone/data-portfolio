# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (Next.js 14 pages at http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
npx tsc --noEmit # typecheck — the ONLY thing that surfaces type errors (see below)
```

There is no test suite.

## Critical: the build hides errors

`next.config.mjs` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`. A green
`npm run build` therefore proves nothing about type or lint correctness. Always run `npx tsc --noEmit` after
changing TypeScript.

One pre-existing error is expected and unrelated to new work: `contexts/LanguageContext.tsx` indexes
`translations` with a bare `string` (TS7053).

## Architecture

Single-page Next.js App Router site (Spanish-first portfolio for a Data Engineer). `app/page.tsx` renders seven
sections in fixed order from `components/sections/`; `app/layout.tsx` wraps them in `LanguageProvider`, `Navbar`
and `Footer`. There are no other routes and no API routes — the contact form's `onSubmit` only flips local state,
it does not send anything.

### Two parallel i18n systems — know which one you are in

Both exist and are unrelated. Adding a string to the wrong one silently does nothing.

1. **`lib/content.ts`** — the one every section actually uses. A single `as const` object shaped
   `content[lang].<section>`, with `es` and `en` as mirrored subtrees. Components read it as
   `const c = content[language].hero`. **Any edit to the `es` subtree must be mirrored in `en`**; they are
   maintained by hand and drift silently since nothing enforces the shape.
2. **`contexts/LanguageContext.tsx`** — a flat `t("some.key")` map, largely legacy. It also owns the
   `language` state, `localStorage` persistence, and the `<html lang>` attribute, so it cannot be deleted.

Language is client state (defaults to `"es"`, hydrated from `localStorage`). Everything that reads it is a
client component, so the SSR HTML always renders Spanish — grep the served HTML for Spanish strings, not English,
when verifying a change.

### Styling

Tailwind v4, configured entirely in `app/globals.css` via `@theme inline` — there is no `tailwind.config`.
Design tokens are CSS variables on `:root`; the site is **dark-only** and `.dark` is deliberately kept identical
to `:root`, with `dark` hardcoded on `<html>`. Palette: `#0b0d11` background, `#14171d` card, `#050505` terminal,
`#2d3139` border, `#22d3ee` primary (cyan), `#98a2b3` muted. Fonts are next/font CSS variables:
`--font-inter` (sans), `--font-hanken` (display), `--font-jetbrains` (mono).

Custom utilities live in the `@layer utilities` block of `globals.css`: `.blueprint-bg` (grid backdrop applied to
`<body>`), `.glow-cyan`, and the `.case-flow` / `.case-pulse` keyframes used by the case-study SVGs. Any new
animation belongs there and needs a `prefers-reduced-motion` opt-out alongside the existing ones.

`components/ui/` holds six leftover shadcn/ui primitives from v0 (`badge`, `button`, `card`, `input`, `label`,
`textarea`). **None of them are imported anywhere** — every section is hand-written with raw elements and
Tailwind classes. `lib/utils.ts` (`cn`) is likewise only used by those orphans. Match the surrounding hand-rolled
style rather than reaching for shadcn, and note that `package.json` lists ~30 Radix packages that the site does
not use.

### Case-study illustrations

`components/sections/CaseVisuals.tsx` holds hand-authored inline SVGs (viewBox `0 0 400 225`, matching the
`aspect-video` slot) instead of raster images. `Cases.tsx` picks one via the `caseVisuals` map keyed by the
`icon` field of each entry in `content.ts` — adding a case study means adding both a `content.ts` entry and a
matching key here. Colors are hardcoded hex (SVG cannot use Tailwind classes for fills) and must be kept in sync
with the palette above by hand. Each visual takes a `lang` prop and pulls its text from a local `labels` map.

Numbers shown in these SVGs are load-bearing: bar heights are proportional to the values they label, and the
percentage badge must match both the bars and the prose in `content.ts`. Change all three together.

## Deployment

Vercel, with the repo auto-synced from v0.app (see `README.md`) — changes made in the v0 UI get pushed here.
`images.unoptimized: true`, so `next/image` emits plain `<img>` and files in `public/` are served verbatim.

**The host is case-sensitive.** Everything in `public/` is lowercase and referenced with exactly that case;
keep it that way — a `.JPG` on disk referenced as `.jpg` works on Windows locally and 404s in production.
Referenced assets: `/logo.png`, `/ivan-portrait.jpg`, `/cv.pdf`. The `screenshot_*.png` files are unused.
