import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead } from "@/lib/seo";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Craft from "@/components/Craft";
import CataloguePreview from "@/components/CataloguePreview";
import Process from "@/components/Process";
import BulkOrder from "@/components/BulkOrder";
import Testimonials from "@/components/Testimonials";
import FactoryVisitForm from "@/components/FactoryVisitForm";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Tanish Creation | Screen Printing Manufacturer Jaipur",
      description:
        "Jaipur-based premium screen printing fabric manufacturer. 20000+ designs, bulk orders from 500 metres. 65+ years of Sanganer heritage.",
      path: "/",
      keywords:
        "screen printing Jaipur, fabric printing manufacturer India, bulk fabric printing, Sanganer prints, screen print fabric supplier",
      jsonLd: breadcrumbSchema([{ name: "Home", path: "/" }]),
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Craft />
      <CataloguePreview />
      <Process />
      <BulkOrder />
      <Testimonials />

      <section className="grain relative py-24 lg:py-32 bg-background">
        <div className="hairline mx-auto max-w-xs -mt-12 mb-16" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Factory Visit</p>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance">
              Come see how your fabric is made.
            </h2>
            <p className="mt-6 text-foreground/70 text-lg max-w-md">
              Walk our Sanganer floor, meet the printers behind your order, and pick your base
              fabric on the spot. Visits are free and scheduled around you.
            </p>
          </div>
          <FactoryVisitForm />
        </div>
      </section>
    </>
  );
}
