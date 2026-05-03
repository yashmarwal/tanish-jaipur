import { createFileRoute } from "@tanstack/react-router";
import CatalogueGrid from "@/components/CatalogueGrid";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Screen Print Fabric Designs | Tanish Creation" },
      {
        name: "description",
        content:
          "Browse our curated archive of screen printed fabric designs. Bulk orders from 100 metres. Custom designs available.",
      },
      {
        property: "og:title",
        content: "Catalogue — Screen Print Fabric Designs | Tanish Creation",
      },
      {
        property: "og:description",
        content:
          "Browse our curated archive of screen printed fabric designs. Bulk orders from 100 metres.",
      },
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
          <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance">
            Screen-printed designs. <em className="text-accent">Built for bulk.</em>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl">
            Click any design for details and order on WhatsApp. Custom designs are always welcome —
            every fifteenth tile is a fresh canvas waiting for you.
          </p>
        </div>
      </section>
      <CatalogueGrid />
    </>
  );
}
