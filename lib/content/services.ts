/**
 * What Catherine offers. Written as plain, specific capabilities — the kind of
 * thing a client can read and immediately know whether she fits their need.
 * No jargon, no filler, no emoji.
 */

export type Service = {
  /** Two-digit index shown in the corner of the card. */
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Visual & Graphic Design",
    description:
      "Social media graphics, thumbnails, banners, and brand assets, built on a consistent grid so a whole feed or campaign feels like one voice.",
  },
  {
    index: "02",
    title: "App & Web UI Design",
    description:
      "Clean, easy-to-use interface designs for apps and websites. I care about the small details: spacing, hierarchy, and making sure people know what to tap next.",
  },
  {
    index: "03",
    title: "Presentations & Learning Materials",
    description:
      "Slide decks, worksheets, and educational layouts that are clear and pleasant to read. A space I genuinely enjoy, especially design for learning and edtech.",
  },
  {
    index: "04",
    title: "Design Support & VA",
    description:
      "Reliable day-to-day design help: resizing assets, light edits, organizing files, and keeping things on-brand so you can focus on the bigger picture.",
  },
];
