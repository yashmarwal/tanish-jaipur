import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead } from "@/lib/seo";
import About from "@/components/About";
import Craft from "@/components/Craft";
import Process from "@/components/Process";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: "About Tanish Creation — 65 Years of Jaipur Screen Printing",
      description:
        "Three generations of Sanganer screen printing heritage. Meet the team, the craft, and the values behind Tanish Creation.",
      path: "/about",
      jsonLd: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 lg:pt-44 pb-16 bg-gradient-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
          <h1 className="font-display text-5xl lg:text-8xl text-primary leading-[0.95] text-balance">
            Heritage you can <em className="text-accent">feel</em>.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            From a single block-printing table in Sanganer to one of Jaipur's most trusted screen
            printing facilities — this is who we are.
          </p>
        </div>
      </section>
      <About />
      <Craft />
      <Process />
    </>
  );
}
