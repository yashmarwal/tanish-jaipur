import { EMAIL, INSTAGRAM, PHONE_DISPLAY, WHATSAPP_NUMBER } from "./whatsapp";
import { TERMS, fmtNum } from "./terms";

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

const ID = {
  org: `${SITE.url}/#organization`,
  site: `${SITE.url}/#website`,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ID.org,
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  image: `${SITE.url}/og-image.jpg`,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  foundingDate: String(TERMS.since),
  description: `Jaipur-based premium screen printing fabric manufacturer. ${fmtNum(TERMS.designs)}+ designs, bulk orders from ${TERMS.minMetres} metres, 65+ years of Sanganer heritage.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ward No. 36, Saipura, behind Homeopathic University, Sanganer",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302029",
    addressCountry: "IN",
  },
  sameAs: [SITE.instagram],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": ID.site,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "en",
  publisher: { "@id": ID.org },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Screen printing and bulk fabric printing",
  provider: { "@id": ID.org },
  areaServed: "IN",
  description: `Hand-pulled screen printing on ${TERMS.fabrics}. Custom designs and bulk orders from ${TERMS.minMetres} metres.`,
};

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function itemListSchema(designs: { name: string; imageUrl: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Screen printed fabric designs",
    numberOfItems: designs.length,
    itemListElement: designs.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.name,
      image: `${SITE.url}${d.imageUrl}`,
    })),
  };
}

export function blogPostingSchema(p: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    image: `${SITE.url}${p.coverImage}`,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: `${SITE.url}/blog/${p.slug}`,
    author: { "@id": ID.org },
    publisher: { "@id": ID.org },
  };
}

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
