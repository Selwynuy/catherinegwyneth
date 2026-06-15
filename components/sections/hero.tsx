import Image from "next/image";
import { profile, mailtoHref } from "@/lib/content/profile";

/**
 * Editorial hero. A giant serif poster name sits behind a cutout portrait that
 * rests on a subtle disc + arc "platform"; the role, value prop, and CTAs sit
 * to the left on desktop. On mobile the portrait leads at the top and the copy
 * stacks beneath it, so the face is the first thing seen. The big name bleeds
 * slightly off-canvas (overflow clipped on <body>) for the magazine feel,
 * without any of the slop (no gradient blob, no fake logos).
 */
/** Reusable portrait block: cutout floating on a disc + arc platform.
 *  `caption` toggles the role/location strip (hidden on the compact mobile hero
 *  to keep things lean for recruiters skimming on a phone). */
function Portrait({
  className = "",
  caption = true,
}: {
  className?: string;
  caption?: boolean;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-square">
        {/* Anchor design behind the portrait: soft disc + thin terracotta arc
           + a faint ground shadow, so the cutout never feels pasted on. */}
        <div aria-hidden className="absolute inset-0">
          <div className="absolute left-1/2 top-[7%] h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-paper-2" />
          <svg
            className="absolute left-1/2 top-[5%] h-[86%] w-[86%] -translate-x-1/2 text-accent/45"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 234" strokeDashoffset="-150" strokeLinecap="round" />
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="60 240" strokeDashoffset="10" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-[9%] left-1/2 h-[5%] w-[56%] -translate-x-1/2 rounded-[50%] bg-ink/15 blur-md" />
        </div>
        <Image
          src="/catherine-cutout-v2.png"
          alt={`${profile.fullName}, ${profile.role}`}
          fill
          priority
          sizes="(max-width: 768px) 60vw, 42vw"
          className="relative object-contain object-bottom"
        />
      </div>
      {caption && (
        <figcaption className="label mt-3 flex items-center justify-between border-t border-hairline pt-3 text-subtle">
          <span>{profile.role}</span>
          <span>{profile.location.split(" · ")[0]}</span>
        </figcaption>
      )}
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Giant poster word behind everything. Hidden on small screens (it only
         reads as clutter there); appears from md up where there's room. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] z-0 hidden select-none text-center md:block"
      >
        <span className="font-display block whitespace-nowrap text-[22vw] font-semibold leading-none tracking-poster text-ink/[0.06]">
          {profile.posterWord}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-24">
        {/* Prominent portrait on MOBILE only: leads the hero so the face is the
           first thing seen, with the copy stacking underneath. Hidden md+ where
           the side-by-side grid takes over. */}
        <Portrait
          caption={false}
          className="mx-auto mb-8 w-full max-w-[18rem] sm:max-w-sm md:hidden"
        />

        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          {/* Text column. Comes first in the DOM so it leads on mobile. */}
          <div>
            <p className="label flex items-center gap-2.5 text-subtle">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.availability}
            </p>

            <h1 className="font-display mt-4 text-ink sm:mt-5">
              <span className="block text-[18vw] font-semibold leading-[0.9] tracking-poster sm:text-7xl lg:text-8xl">
                {profile.displayName.first}
              </span>
              <span className="block text-[18vw] font-light italic leading-[0.9] tracking-poster sm:text-7xl lg:text-8xl">
                {profile.displayName.second}
              </span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
              {profile.tagline}
            </p>

            {/* CTAs come right after the copy so the action stays near the fold. */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={mailtoHref}
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="rounded-full border border-ink/25 px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-ink"
              >
                See work
              </a>
            </div>
          </div>

          {/* Full portrait (with caption) on DESKTOP only, in the right column. */}
          <Portrait className="ml-auto hidden w-full md:block" />
        </div>
      </div>

      {/* Scroll cue (desktop only; on mobile it just adds height). */}
      <div className="relative z-10 mx-auto hidden max-w-6xl px-5 pb-10 sm:px-8 md:block">
        <a
          href="#mission"
          className="label inline-flex items-center gap-2 text-subtle transition-colors hover:text-ink"
        >
          Scroll
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            aria-hidden
            className="animate-[bob_1.8s_ease-in-out_infinite]"
          >
            <path
              d="M6 1v17M1 13l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
