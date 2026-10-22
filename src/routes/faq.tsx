import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/lib/faq";
import { breadcrumbSchema, buildPageHead, faqSchema } from "@/lib/seo";
import { FaqList } from "@/components/Faq";
import PageHero from "@/components/PageHero";
import CtaSet from "@/components/CtaSet";
import WhatsApp from "@/components/icons/WhatsApp";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/faq")({
  head: () =>
    buildPageHead({
      title: "FAQ — Minimum Order, Lead Time, Samples | Tanish Creation",
      description:
        "Answers on minimum order, lead time, samples, custom designs, fabrics, capacity and factory visits at Tanish Creation, Jaipur.",
      path: "/faq",
      jsonLd: [
        faqSchema(FAQ),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        lines={[
          "Questions buyers",
          <em key="e" className="text-accent">
            ask first.
          </em>,
        ]}
      >
        <p>Minimum orders, lead times, samples and visits, answered plainly.</p>
      </PageHero>
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FaqList />
          <p className="mt-12 text-foreground/70">Still unsure? Talk to the team directly.</p>
          <CtaSet
            className="mt-4"
            items={[
              {
                label: "Ask on WhatsApp",
                variant: "tertiary",
                to: waLink("Hi Tanish Creation! I have a question."),
                external: true,
                icon: <WhatsApp className="h-4 w-4" />,
              },
              { label: "Get a bulk quote", variant: "secondary", to: "/wholesale" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
