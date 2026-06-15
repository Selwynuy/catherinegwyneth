/**
 * Selected work.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD / SWAP ARTWORK:
 *  1. Drop the image into `public/work/` (e.g. public/work/my-piece.jpg).
 *  2. Set `image` (and `href` to the same path) below.
 *  Recommended size: portrait, ~1400x2000 (poster ratio) to match the set.
 *  Edit the titles, tags, and notes to match the actual pieces.
 * ──────────────────────────────────────────────────────────────────────────
 */

export type Project = {
  title: string;
  /** Short category tag, e.g. "Poster Design". */
  tag: string;
  /** One honest line about the piece. */
  note: string;
  /** Path under /public, or null to show a placeholder slot. */
  image: string | null;
  /** Link opened when the card is clicked (defaults to the full image). */
  href?: string;
};

/**
 * The single hero piece, shown large at the top of the section.
 * Ford Model T best shows her layout and typography range, so it leads.
 */
export const featured: Project = {
  title: "Ford Model T “Classic”",
  tag: "Poster / Editorial Layout",
  note: "A typographic poster for an automotive classic. Kinetic display type, layered composition, and a confident editorial grid.",
  image: "/work/ford-model-t.jpg",
  href: "/work/ford-model-t.jpg",
};

/** The supporting grid of selected pieces. */
export const projects: Project[] = [
  {
    title: "Life Is Sexier In Red",
    tag: "Editorial / Newsprint",
    note: "A vintage newspaper-style layout with blackletter masthead and bold fashion imagery.",
    image: "/work/sexier-in-red.jpg",
    href: "/work/sexier-in-red.jpg",
  },
  {
    title: "Business Conference",
    tag: "Event Poster",
    note: "A punchy event poster with oversized type and a duotone speaker lineup.",
    image: "/work/business-conference.jpg",
    href: "/work/business-conference.jpg",
  },
  {
    title: "Batman Returns",
    tag: "Poster Design",
    note: "A cinematic key-art poster with a comic-collage backdrop and film grain.",
    image: "/work/batman-returns.jpg",
    href: "/work/batman-returns.jpg",
  },
  {
    title: "Black “Empowerment”",
    tag: "Editorial Cover",
    note: "A bold black-and-white magazine cover built around a single striking portrait.",
    image: "/work/black-empowerment.jpg",
    href: "/work/black-empowerment.jpg",
  },
  {
    title: "Red Cows “MOO”",
    tag: "Typographic Poster",
    note: "An informational poster where oversized type and duotone imagery carry the message.",
    image: "/work/red-cows.jpg",
    href: "/work/red-cows.jpg",
  },
  {
    title: "British Formula 4",
    tag: "Sports Poster",
    note: "A high-energy motorsport poster layering driver, car, and trophy into one composition.",
    image: "/work/formula-4.jpg",
    href: "/work/formula-4.jpg",
  },
];

/** Honest framing line shown under the heading. */
export const workNote =
  "A few selected pieces. More work is being added as new projects ship.";
