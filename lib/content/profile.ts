/**
 * Single source of truth for Catherine's identity, contact details, and links.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  TO FINISH THE SITE, fill in the three values marked `FILL_ME` below with
 *  Catherine's real email, Instagram handle, and LinkedIn URL. Everything else
 *  on the page reads from this file, so you only edit it in one place.
 * ──────────────────────────────────────────────────────────────────────────
 */

export type SocialLink = {
  label: string;
  /** Full https:// URL (or mailto: for email). */
  href: string;
  /** Short handle shown in the UI, e.g. "@catherine". */
  handle: string;
};

export const profile = {
  // Full legal name (used in the footer + structured data).
  fullName: "Catherine Gwyneth O. Valencia",
  // The display name in the hero. Two lines of poster type.
  displayName: { first: "Catherine", second: "Gwyneth" },
  // The word set BIG behind the hero. Kept short so it reads as a poster.
  posterWord: "GWYNETH",

  // Kept general on purpose: she is still applying broadly and does not want
  // to be boxed into a single niche yet.
  role: "Creative Designer & Visual Artist",
  // One-line value proposition, plain-spoken and honest.
  tagline:
    "I turn ideas into clean, considered visuals, from app screens to social graphics and presentation decks.",

  // Where she is based / how she works (remote-friendly is a selling point for VA roles).
  location: "Philippines · Working remotely worldwide",
  availability: "Available for new projects",

  // ── FILL THESE IN ─────────────────────────────────────────────────────────
  email: "hello@example.com", // FILL_ME: her real email
  social: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/your_handle", // FILL_ME
      handle: "@your_handle", // FILL_ME
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile", // FILL_ME
      handle: "in/your-profile", // FILL_ME
    },
  } satisfies Record<string, SocialLink>,
  // ──────────────────────────────────────────────────────────────────────────
} as const;

/** Pre-built mailto: link with a friendly default subject. */
export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Project inquiry from your portfolio",
)}`;

export const socialLinks: SocialLink[] = [
  profile.social.instagram,
  profile.social.linkedin,
];
