import { profile, socialLinks, mailtoHref } from "@/lib/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base text-ink">{profile.fullName}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={mailtoHref}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            Email
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <p className="label text-subtle">© {year} · Designed & built with care</p>
      </div>
    </footer>
  );
}
