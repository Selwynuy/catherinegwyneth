"use client";

import { useEffect, useState } from "react";
import { profile, mailtoHref } from "@/lib/content/profile";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

/**
 * Thin editorial nav. Transparent over the hero, then gains a paper backdrop +
 * hairline once the page scrolls. Desktop shows inline links; mobile uses a
 * hamburger that opens a full-screen overlay menu.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="font-display text-lg tracking-poster text-ink"
          aria-label={`${profile.fullName}, home`}
        >
          Catherine<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={mailtoHref}
            className="hidden rounded-full border border-ink bg-ink px-4 py-2 text-xs font-medium tracking-wide text-on-ink transition-colors hover:border-accent hover:bg-accent sm:inline-block"
          >
            Get in touch
          </a>

          {/* Hamburger / close toggle (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              {menuOpen ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 7h16M3 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu. Solid paper fill (token + grain-free) so hero
         content never bleeds through. */}
      <div
        id="mobile-menu"
        style={{ backgroundColor: "var(--paper)" }}
        className={`fixed inset-0 top-16 z-40 h-[calc(100dvh-4rem)] md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col px-5 pt-4"
          aria-label="Mobile"
        >
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display flex items-center justify-between border-b border-hairline py-5 text-3xl text-ink"
            >
              {item.label}
              <span className="label text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <a
            href={mailtoHref}
            onClick={() => setMenuOpen(false)}
            className="mt-8 rounded-full bg-accent px-6 py-4 text-center text-base font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
