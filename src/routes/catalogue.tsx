import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead, itemListSchema } from "@/lib/seo";
import { designs, isCategory, type RealCategory } from "@/lib/catalogue";
import CatalogueGrid from "@/components/CatalogueGrid";
import { StampHeading } from "@/components/motion";

type Search = { category?: RealCategory; design?: string };

export const Route = createFileRoute("/catalogue")({
  // ?category=Floral filters the list; ?design=12 opens that design (so back closes it, and it can be shared).
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: isCategory(s.category) ? s.category : undefined,
    design:
      typeof s.design === "string" && designs.some((d) => d.id === s.design) ? s.design : undefined,
  }),
  head: () =>
    buildPageHead({
      title: "Catalogue — Screen Print Fabric Designs | Tanish Creation",
      description:
        "Browse our curated archive of screen printed fabric designs by category. Bulk orders from 500 metres. Custom designs available.",
      path: "/catalogue",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Catalogue", path: "/catalogue" },
        ]),
        itemListSchema(designs.slice(0, 24)),
      ],
    }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-gradient-cream relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage: "url('/fabric-bg.jpeg')",
            backgroundSize: "360px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Archive</p>
          <StampHeading
            lines={[
              "Screen-printed designs.",
              <em key="e" className="text-accent">
                Built for bulk.
              </em>,
            ]}
            delay={0.1}
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-primary leading-[1] sm:leading-[0.95] text-balance"
          />
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl">
            Open any design for details and enquire on WhatsApp. Custom designs are always welcome —
            every fifteenth tile is a fresh canvas waiting for you.
          </p>
        </div>
      </section>
      <CatalogueGrid />
    </>
  );
}
