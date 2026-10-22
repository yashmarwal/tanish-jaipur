import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead, serviceSchema } from "@/lib/seo";
import { TERMS } from "@/lib/terms";
import BulkOrder from "@/components/BulkOrder";
import PageHero from "@/components/PageHero";

export const Route = createFileRoute("/wholesale")({
  head: () =>
    buildPageHead({
      title: "Wholesale & Bulk Quote — Fabric Printing from 500 m | Tanish Creation",
      description: `Request a bulk fabric printing quote. Minimum order ${TERMS.minMetres} metres, lead time ${TERMS.leadTime}. Send your design and quantity.`,
      path: "/wholesale",
      jsonLd: [
        serviceSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Wholesale", path: "/wholesale" },
        ]),
      ],
    }),
  component: WholesalePage,
});

function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        lines={[
          "Tell us what you",
          <em key="e" className="text-accent">
            need printed.
          </em>,
        ]}
      >
        <p>
          Share the design, quantity and colours. The minimum order is {TERMS.minMetres} metres; we
          confirm price and dates against your strike-off.
        </p>
      </PageHero>
      <BulkOrder />
    </>
  );
}
