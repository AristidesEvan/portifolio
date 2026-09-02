import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.nameFull,
    alternateName: site.name,
    jobTitle: site.role,
    email: site.email,
    telephone: "+5562986002002",
    url: getSiteUrl(),
    sameAs: [site.linkedin, site.github, site.whatsapp],
    birthPlace: {
      "@type": "Place",
      name: site.bornIn,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "UNIP-GO" },
      { "@type": "CollegeOrUniversity", name: "PUC Goiás" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
