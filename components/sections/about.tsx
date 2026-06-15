import { processSteps, bio } from "@/lib/content/process";
import { profile } from "@/lib/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Bio */}
          <Reveal>
            <p className="label text-subtle">About</p>
            <h2 className="font-display mt-4 text-4xl leading-tight tracking-poster text-ink sm:text-5xl">
              A little about me
            </h2>
            <div className="mt-6 space-y-4">
              {bio.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-ink"
                      : "leading-relaxed text-muted"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
            <p className="label mt-8 text-subtle">{profile.location}</p>
          </Reveal>

          {/* Process */}
          <Reveal delay={120}>
            <p className="label text-subtle">How I work</p>
            <ol className="mt-6 divide-y divide-hairline border-y border-hairline">
              {processSteps.map((step) => (
                <li
                  key={step.index}
                  className="grid grid-cols-[auto_1fr] gap-x-6 py-6"
                >
                  <span className="font-display text-2xl text-subtle">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
