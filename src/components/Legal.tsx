import type { ReactNode } from "react";
import PageHero from "./PageHero";

export default function Legal({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" lines={[title]}>
        <p>{intro}</p>
      </PageHero>
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-foreground/80 lg:px-10 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3">
          {children}
          <p className="text-sm text-foreground/50">Last updated {updated}.</p>
        </div>
      </section>
    </>
  );
}
