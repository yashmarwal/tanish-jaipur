import { createFileRoute, Link } from "@tanstack/react-router";

import { POSTS } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Stories from a Jaipur Print House | Tanish Creation" },
      {
        name: "description",
        content:
          "Notes on screen printing, fabric, Sanganer heritage, and bulk manufacturing from Tanish Creation.",
      },
      { property: "og:title", content: "The Tanish Creation Journal" },
      {
        property: "og:description",
        content: "Notes on screen printing, fabric, and Sanganer heritage.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="pt-32 lg:pt-44 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Journal</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance max-w-3xl">
          Notes from the print floor.
        </h1>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {POSTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-warm transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={p.coverImage}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-wider text-accent">{p.category}</div>
                <h2 className="font-display text-3xl text-primary mt-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-foreground/70 text-sm">{p.excerpt}</p>
                <span className="mt-5 inline-block text-sm text-accent">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
