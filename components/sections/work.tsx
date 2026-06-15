"use client";

import Image from "next/image";
import {
  featured,
  projects,
  workNote,
  type Project,
} from "@/lib/content/projects";
import { Reveal } from "@/components/ui/reveal";
import { useLightbox } from "@/components/ui/lightbox";

function CardMedia({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[5/7] overflow-hidden rounded-sm bg-paper-2">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title}, ${project.tag}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div
            aria-hidden
            className="absolute inset-3 rounded-sm border border-dashed border-hairline-strong"
          />
          <span className="label text-subtle">Artwork coming soon</span>
        </div>
      )}
    </div>
  );
}

function GridCard({ project }: { project: Project }) {
  const { open } = useLightbox();
  const clickable = Boolean(project.image);

  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={() =>
        project.image &&
        open({ src: project.image, alt: `${project.title}, ${project.tag}` })
      }
      aria-label={clickable ? `View ${project.title}` : project.title}
      className="group block w-full text-left focus-visible:outline-offset-4 disabled:cursor-default"
    >
      <div className="relative">
        <CardMedia project={project} />
        {clickable && (
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-on-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            View
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.note}</p>
        </div>
        <span className="label shrink-0 text-subtle">{project.tag}</span>
      </div>
    </button>
  );
}

function Featured() {
  const { open } = useLightbox();

  return (
    <article className="group grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <button
        type="button"
        onClick={() =>
          featured.image &&
          open({
            src: featured.image,
            alt: `${featured.title}, ${featured.tag}`,
          })
        }
        aria-label={`View ${featured.title}`}
        className="relative block aspect-[5/7] w-full overflow-hidden rounded-sm bg-paper-2 shadow-[0_30px_60px_-30px_rgba(22,20,15,0.4)] focus-visible:outline-offset-4 sm:aspect-[16/11]"
      >
        {featured.image && (
          <Image
            src={featured.image}
            alt={`${featured.title}, ${featured.tag}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-on-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          View
        </span>
      </button>
      <div>
        <span className="label inline-flex items-center gap-2 text-subtle">
          <span className="inline-block h-px w-6 bg-hairline-strong" />
          Featured
        </span>
        <h3 className="font-display mt-4 text-3xl leading-tight tracking-poster text-ink sm:text-4xl">
          {featured.title}
        </h3>
        <p className="label mt-3 text-subtle">{featured.tag}</p>
        <p className="mt-5 max-w-md leading-relaxed text-muted">
          {featured.note}
        </p>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {/* Section heading */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="label text-subtle">Selected work</p>
            <h2 className="font-display mt-4 text-4xl leading-tight tracking-poster text-ink sm:text-5xl">
              A look at what I make
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {workNote}
          </p>
        </Reveal>

        {/* Featured piece */}
        <Reveal className="mt-14">
          <Featured />
        </Reveal>

        {/* Divider */}
        <div className="rule mt-16 sm:mt-20" />

        {/* Supporting grid */}
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <GridCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
