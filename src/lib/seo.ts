import { EMAIL, INSTAGRAM, PHONE_DISPLAY, WHATSAPP_NUMBER } from "./whatsapp";

export const SITE = {
  name: "Tanish Creation",
  tagline: "Where Fabric Meets Art",
  city: "Jaipur, Rajasthan",
  phoneDisplay: PHONE_DISPLAY,
  email: EMAIL,
  instagram: INSTAGRAM,
  url: "https://tanishcreation.com",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type HeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/** One-call head builder: title, description, canonical, OG, Twitter, JSON-LD. */
export function buildPageHead({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  jsonLd,
}: HeadInput) {
  const canonical = `${SITE.url}${path}`;
  const raw = image ?? "/og-image.jpg";
  const ogImage = raw.startsWith("http") ? raw : `${SITE.url}${raw}`;

  const meta = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: SITE.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { property: "og:image", content: ogImage },
    { name: "twitter:image", content: ogImage },
  ];

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
    ...(jsonLd
      ? { scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }
      : {}),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  foundingDate: "1959",
  description:
    "Jaipur-based premium screen printing fabric manufacturer. 20000+ designs, bulk orders from 500 metres, 65+ years of Sanganer heritage.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: [SITE.instagram],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
