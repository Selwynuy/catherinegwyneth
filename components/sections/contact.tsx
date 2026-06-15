import { profile, socialLinks, mailtoHref } from "@/lib/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-on-ink">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="label text-on-ink-muted">Contact</p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-[1.05] tracking-poster sm:text-6xl lg:text-7xl">
            Let&apos;s work{" "}
            <br className="hidden sm:block" />
            <span className="italic">together.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-on-ink-muted">
            Have a project in mind, or looking for a dependable creative hand on
            your team? I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={mailtoHref}
              className="rounded-full bg-on-ink px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-accent hover:text-on-ink"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline-on-ink pt-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col"
              >
                <span className="label text-subtle">{link.label}</span>
                <span className="mt-1 text-on-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-on-ink-muted">
                  {link.handle}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
