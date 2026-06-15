/**
 * How Catherine works + a short human bio. These are the things a VA/design
 * client actually cares about: communication, reliability, and turnaround.
 */

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "We start with a quick chat about your goal, audience, and any brand rules you already have.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "I draft options, share them early, and refine based on your notes. No surprises at the end.",
  },
  {
    index: "03",
    title: "Deliver",
    description:
      "You get organized, ready-to-use files in the formats you need, on the date we agreed.",
  },
];

/** A short, genuine bio. First-person, warm, no buzzwords. */
export const bio = [
  "I'm Catherine, a designer who likes order, clarity, and making things look effortless.",
  "I work both ways: building visuals from scratch and adapting existing assets quickly when a project needs speed. I'm detail-oriented, easy to communicate with, and I care a lot about hitting deadlines.",
  "I'm looking for my first remote role where I can be a dependable creative hand for a team, especially anything around design for learning and education, which is close to my heart.",
];
