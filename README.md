# Catherine Gwyneth O. Valencia — Portfolio

A one-page editorial portfolio for a creative designer & visual artist. Static,
fast, and self-contained (no database, no backend). Built with Next.js 16, React 19,
Tailwind CSS v4, and TypeScript.

## ✏️ Before you publish — fill in 3 things

Open **`lib/content/profile.ts`** and replace the values marked `FILL_ME`:

1. **`email`** — Catherine's real email address
2. **`social.instagram`** — her Instagram URL + handle
3. **`social.linkedin`** — her LinkedIn URL + handle

Everything on the page reads from this one file, so that's all you need to change.

## 🖼️ Adding real project artwork

The Work section shows tidy "Artwork coming soon" placeholders until you add images.
See **`public/work/README.md`** — drop an image in `public/work/` and point to it
from `lib/content/projects.ts`. You can also edit the project titles, tags, and notes
there to match her real pieces.

## ✍️ Editing the words

All copy lives in `lib/content/`:

- `profile.ts` — name, role, tagline, contact, links
- `services.ts` — the "How I can help" cards
- `projects.ts` — the work grid
- `process.ts` — the "How I work" steps and the About bio

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run lint`.

## Deploying

This is a static site — it deploys anywhere. The easiest path is
[Vercel](https://vercel.com/new): import the repo and deploy, no configuration needed.
After deploying, update `SITE_URL` in `app/layout.tsx` to the real domain so the
metadata and social-share previews point to the right place.

## Design notes

"Editorial Studio" direction — warm bone paper, ink near-black, and a single muted
terracotta accent. Serif display type (Fraunces) for headlines, a clean grotesque
(Geist) for body, mono (Geist Mono) for labels. Scroll reveals respect
`prefers-reduced-motion`; the layout is fully responsive and keyboard-accessible.
