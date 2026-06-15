import { Reveal } from "@/components/ui/reveal";

/* Honest replacement for the inspo's fake client-logo strip: the areas she
   actually works in. No invented brands. */
const FOCUS_AREAS = [
  "Visual & graphic design",
  "App & web UI",
  "Slides & learning materials",
  "Design support",
];

export function Mission() {
  return (
    <section id="mission" className="bg-ink-2 text-on-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="label text-on-ink-muted">What I do</p>
          <p className="font-display mt-6 max-w-4xl text-3xl font-light leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            My job is to make things{" "}
            <span className="italic">clear and easy to look at</span>, turning
            rough ideas and busy briefs into visuals people actually want to
            spend time with.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-3 border-t border-hairline-on-ink pt-8">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-hairline-on-ink px-4 py-1.5 text-sm text-on-ink-muted"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-on-ink-muted">
            I have a soft spot for design that helps people learn: educational
            apps, courses, and study materials. I&apos;m always glad to take on
            work in that space.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
