import { profile, socialLinks } from "@/lib/content/profile";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

// JSON-LD Person schema for richer search results.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  sameAs: socialLinks.map((s) => s.href),
  knowsAbout: [
    "Graphic Design",
    "Visual Design",
    "UI/UX Design",
    "Presentation Design",
    "Social Media Design",
    "Educational Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Mission />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
}
