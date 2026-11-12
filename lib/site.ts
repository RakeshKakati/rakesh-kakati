export const site = {
  name: "Rakesh Kakati",
  title: "Rakesh Kakati — D2C performance and B2B pipeline",
  description:
    "Growth partnerships for early-stage teams. D2C performance that protects margin, and B2B pipeline a founder can hand off. Book a 30-minute call.",
  bookingUrl: "https://cal.com/rakesh-kakati-h3yw3v/30min",
  email: "rakeshkakati89@gmail.com",
  linkedin: "https://www.linkedin.com/in/rakesh-kakati-70992a115",
} as const;

export type Track = "dtc" | "b2b";

export function bookingHref(track?: Track) {
  const url = new URL(site.bookingUrl);
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", "cta");
  if (track) url.searchParams.set("utm_content", track);
  return url.toString();
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Growth operator and Chief of Staff",
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  address: {
    "@type": "PostalAddress",
    addressRegion: "San Francisco Bay Area",
  },
  description: site.description,
  knowsAbout: [
    "D2C performance marketing",
    "B2B lead generation",
    "Go-to-market",
    "Shopify",
  ],
};
