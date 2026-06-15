import { services } from "@/lib/content/services";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="label text-subtle">Services</p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-poster text-ink sm:text-5xl">
            How I can help
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.index}
              delay={i * 80}
              as="article"
              className="group bg-paper p-7 transition-colors hover:bg-paper-2 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <span className="label text-subtle transition-colors group-hover:text-ink">
                  {service.index}
                </span>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
