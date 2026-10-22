import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead, serviceSchema } from "@/lib/seo";
import { TERMS, fmtNum } from "@/lib/terms";
import Craft from "@/components/Craft";
import Process from "@/components/Process";
import PageHero from "@/components/PageHero";
import CtaSet from "@/components/CtaSet";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/manufacturing")({
  head: () =>
    buildPageHead({
      title: "Manufacturing — How We Screen Print Fabric | Tanish Creation",
      description: `From strike-off to quality check: how Tanish Creation screen prints fabric in Sanganer, Jaipur. ${fmtNum(TERMS.capacityPerDay)} metres a day, bulk from ${TERMS.minMetres} metres.`,
      path: "/manufacturing",
      jsonLd: [
        serviceSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Manufacturing", path: "/manufacturing" },
        ]),
      ],
    }),
  component: ManufacturingPage,
});

const FACTS = [
  ["Minimum order", `${TERMS.minMetres} metres`],
  ["Lead time", TERMS.leadTime],
  ["Daily capacity", `${fmtNum(TERMS.capacityPerDay)} metres`],
  ["Base fabrics", "Cotton, linen, rayon, silk"],
] as const;

function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        lines={[
          "Made by hand,",
          <em key="e" className="text-accent">
            at scale.
          </em>,
        ]}
      >
        <p>
          Every order follows the same five steps, whether it is {TERMS.minMetres} metres or a full
          production run.
        </p>
      </PageHero>
      <Craft />
      <Process />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {FACTS.map(([k, v], i) => (
              <Reveal key={k} index={i} y={12} className="bg-card p-6 lg:p-8">
                <dt className="text-xs tracking-wider text-foreground/50 uppercase">{k}</dt>
                <dd className="font-display tabular mt-1 text-2xl text-primary lg:text-3xl">{v}</dd>
              </Reveal>
            ))}
          </dl>
          <CtaSet
            className="mt-10"
            items={[
              { label: "Get a bulk quote", variant: "primary", to: "/wholesale" },
              { label: "Visit the factory", variant: "secondary", to: "/factory-visit" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
