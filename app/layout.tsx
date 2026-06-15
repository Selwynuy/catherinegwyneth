import type { Metadata } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/content/profile";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LightboxProvider } from "@/components/ui/lightbox";
import "./globals.css";

/* Editorial serif for headlines + the giant poster name. Newsreader is a clean,
   conventional magazine serif with normal letterforms (no quirky j/f), so it
   reads as a real publication rather than a "designed" display face. */
const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Clean grotesque for UI + body. */
const geist = Geist({
  variable: "--font-grotesque",
  subsets: ["latin"],
  display: "swap",
});

/* Mono for kicker labels + the 01/02 index numbers. */
const geistMono = Geist_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://catherine-valencia.vercel.app"; // update to the real domain on deploy

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.fullName} · ${profile.role}`,
    template: `%s · ${profile.fullName}`,
  },
  description: profile.tagline,
  keywords: [
    "graphic designer",
    "visual artist",
    "UI UX designer",
    "social media graphics",
    "presentation design",
    "creative virtual assistant",
    profile.fullName,
  ],
  authors: [{ name: profile.fullName, url: SITE_URL }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.fullName} · ${profile.role}`,
    description: profile.tagline,
    siteName: profile.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} · ${profile.role}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${geist.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-paper text-foreground">
        <a
          href="#work"
          className="sr-only rounded-md bg-ink px-4 py-2 text-sm text-on-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <LightboxProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LightboxProvider>
      </body>
    </html>
  );
}
