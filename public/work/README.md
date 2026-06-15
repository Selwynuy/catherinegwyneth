# Project artwork

This folder holds the images used in the **Selected work** section. Four real
pieces are already wired in:

- `ford-model-t.jpg` — the **Featured** piece
- `batman-returns.jpg`, `black-empowerment.jpg`, `red-cows.jpg` — the grid

## Adding or swapping a piece

1. Save the image here, e.g. `public/work/new-piece.jpg`
2. In `lib/content/projects.ts`:
   - to change the featured piece, edit the `featured` object's `image`/`title`/`note`
   - to add a grid piece, add an entry to the `projects` array with its `image`

## Recommended sizes

- Aspect ratio: **portrait poster (~5:7)** — e.g. **1400 × 2000 px** (matches the set)
- Format: `.jpg` for artwork, `.png` if it needs transparency
- Keep the grid pieces the same ratio so the gallery stays even.
