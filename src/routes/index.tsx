import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead, serviceSchema, websiteSchema } from "@/lib/seo";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Craft from "@/components/Craft";
import Collections from "@/components/Collections";
import CataloguePreview from "@/components/CataloguePreview";
import Process from "@/components/Process";
import BulkOrder from "@/components/BulkOrder";
import Faq from "@/components/Faq";
import FactoryVisitForm from "@/components/FactoryVisitForm";
import { DrawRule, SectionHead } from "@/components/motion";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Tanish Creation | Screen Printing Manufacturer Jaipur",
      description:
        "Jaipur-based premium screen printing fabric manufacturer. 20,000+ designs, bulk orders from 500 metres. 65+ years of Sanganer heritage.",
      path: "/",
      keywords:
        "screen printing Jaipur, fabric printing manufacturer India, bulk fabric printing, Sanganer prints, screen print fabric supplier",
      jsonLd: [websiteSchema, serviceSchema, breadcrumbSchema([{ name: "Home", path: "/" }])],
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
      <Collections />
      <CataloguePreview />
      <Process />
      <BulkOrder />
      <Faq />

      <section className="grain relative py-24 lg:py-32 bg-background">
        <DrawRule className="mx-auto max-w-xs -mt-12 mb-16" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <SectionHead eyebrow="Factory Visit" lines={["Come see how your", "fabric is made."]}>
            <p>
              Walk our Sanganer floor, meet the printers behind your order, and pick your base
              fabric on the spot. Visits are free and scheduled around you.
            </p>
          </SectionHead>
          <FactoryVisitForm />
        </div>
      </section>
    </>
  );
}
