# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (Next.js 14, http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
npx tsc --noEmit # typecheck — the ONLY thing that surfaces type errors (see below)
```

There is no test suite.

## Critical: the build hides errors

`next.config.mjs` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`. A green
`npm run build` therefore proves nothing about type or lint correctness. Always run `npx tsc --noEmit` after
changing TypeScript — it currently passes clean, so any error it reports is something you introduced.

## Architecture

Single-page Next.js App Router site (Spanish-first portfolio for a Data Engineer). `app/page.tsx` renders seven
sections in fixed order from `components/sections/`; `app/layout.tsx` wraps them in `LanguageProvider`, `Navbar`
and `Footer`. There are no other routes and no API routes, and there is no backend of any kind: the contact form
builds a `wa.me` link from its fields and opens WhatsApp in a new tab (`Contact.tsx`), so nothing is ever posted
anywhere. Message templates for that link live in `content.ts` as `waTemplate` / `waEmptyChallenge`.

### i18n: all copy lives in `lib/content.ts`

One `as const` object shaped `content[lang].<section>`, with `es` and `en` as mirrored subtrees. Components read
it as `const c = content[language].hero`. **Any edit to the `es` subtree must be mirrored in `en`** — the two are
maintained by hand and drift silently, since nothing enforces that they have the same shape.

`contexts/LanguageContext.tsx` owns only the `language` state, its `localStorage` persistence and the
`<html lang>` attribute. It used to also carry a flat `t("some.key")` dictionary from an earlier version of the
portfolio; that was removed. Do not reintroduce a second source of copy — put strings in `content.ts`.

Language is client state defaulting to `"es"` and hydrated from `localStorage` in an effect, and every consumer is
a client component. **The SSR HTML therefore always renders Spanish**: when verifying a change by fetching the
served HTML, grep for the Spanish strings, not the English ones.

### Styling

Tailwind v4, configured entirely in `app/globals.css` via `@theme inline` — there is no `tailwind.config`.
Design tokens are CSS variables on `:root`; the site is **dark-only** and `.dark` is deliberately kept identical
to `:root`, with `dark` hardcoded on `<html>`. Palette: `#0b0d11` background, `#14171d` card, `#050505` terminal,
`#2d3139` border, `#22d3ee` primary (cyan), `#98a2b3` muted, `#f5f7fa` foreground. Fonts are next/font CSS
variables: `--font-inter` (sans), `--font-hanken` (display), `--font-jetbrains` (mono).

Custom utilities live in the `@layer utilities` block of `globals.css`: `.blueprint-bg` (grid backdrop applied to
`<body>`), `.glow-cyan`, and the `.case-flow` / `.case-pulse` keyframes used by the case-study SVGs. Any new
animation belongs there and needs a `prefers-reduced-motion` opt-out alongside the existing ones.

`components/ui/` holds six leftover shadcn/ui primitives from v0 (`badge`, `button`, `card`, `input`, `label`,
`textarea`). **None of them are imported anywhere** — every section is hand-written with raw elements and
Tailwind classes. `lib/utils.ts` (`cn`) is likewise only used by those orphans. Match the surrounding hand-rolled
style rather than reaching for shadcn, and note that `package.json` lists ~30 Radix packages the site never uses.

### Case-study illustrations

`components/sections/CaseVisuals.tsx` holds hand-authored inline SVGs (viewBox `0 0 400 225`, matching the
`aspect-video` slot) instead of raster images. `Cases.tsx` picks one via the `caseVisuals` map keyed by the
`icon` field of each entry in `content.ts` — adding a case study means adding both a `content.ts` entry and a
matching key here. Colors are hardcoded hex (SVG cannot use Tailwind classes for fills) and must be kept in sync
with the palette above by hand. Each visual takes a `lang` prop and pulls its text from a local `labels` map.

Numbers shown in these SVGs are load-bearing: bar heights are proportional to the values they label, and the
percentage badge must match both the bars and the prose in `content.ts`. Change all three together.

Coordinates are absolute and unmanaged, so overlapping text is the usual failure: when adding an element, check
the `y` values of its neighbours rather than assuming layout will reflow — nothing here does.

### Case galleries

A case study may carry an optional `gallery` array (`{ src, caption }`) in `content.ts`; `CaseGallery.tsx` renders
the trigger button and a full-screen viewer with keyboard nav (←/→/Escape) and a body-scroll lock. Because
`items` is `as const`, the entries form a union where only some members have `gallery`, so `Cases.tsx` must guard
with `{"gallery" in item && ...}` — a bare `item.gallery` will not typecheck.

The viewer caps the image with `max-h-[65vh]`, not `max-h-full`: the flex wrapper uses `items-center` and so is
sized by the image itself, which makes a percentage max-height resolve to no constraint and lets tall images
overlap the caption on short viewports.

### Metadata and social previews

The favicon and share images use Next's file conventions in `app/`: `icon.png`, `apple-icon.png`,
`opengraph-image.png`, `twitter-image.png`. Next emits the `<link>`/`<meta>` tags from the filenames — do not
hand-write those tags.

`layout.tsx` sets `metadataBase` from `process.env.NEXT_PUBLIC_SITE_URL`, falling back to the current production
domain. **`og:image` only becomes an absolute production URL in a real build**: `npm run dev` resolves it against
the request origin, so verifying social previews requires `npm run build && npm run start`, not the dev server.

## Assets and deployment

Vercel, with the repo auto-synced from v0.app (see `README.md`) — changes made in the v0 UI get pushed here.
`images.unoptimized: true`, so `next/image` emits plain `<img>` and files in `public/` are served verbatim; there
is no automatic resizing or format conversion, which makes oversized source images a real payload cost.

`public/` is deliberately minimal — `logo.png`, `ivan-portrait.jpg`, `cv.pdf`, and `focos/` (the seven dashboard
pages behind the fire-hotspots gallery). Unreferenced assets were moved to `public/dead/`, which is gitignored:
it exists on disk but is neither committed nor deployed. Put anything you retire there rather than deleting it.

Screenshots are stored as JPEG, not PNG — the `focos/` set went from 690 KB to 261 KB at quality 88 with no
visible loss at the size they are displayed. Since nothing resizes images at build time, converting by hand is
the only compression this project gets.

### Filename case is a production-only trap

The host is case-sensitive; Windows and macOS are not. Two compounding failure modes have already bitten this
repo:

1. A file named `foo.JPG` referenced as `/foo.jpg` works locally and 404s in production.
2. Worse, `core.ignorecase=true` (git's default here) means **git silently ignores case-only renames**. Renaming
   `foo.JPG` to `foo.jpg` leaves `git status` empty and the old name still in the index, so the fix never ships.
   Force it with `git rm --cached public/foo.JPG && git add public/foo.jpg`, then confirm the new casing with
   `git ls-files public`.

Keep everything in `public/` lowercase, and verify with `git ls-files` — not `ls` — that the repo agrees.
