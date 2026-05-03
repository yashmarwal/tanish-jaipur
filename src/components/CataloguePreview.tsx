import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { generateDesigns } from "@/lib/catalogue";
import { useMemo } from "react";

export default function CataloguePreview() {
  const previews = useMemo(() => generateDesigns(90).slice(0, 8), []);

  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Catalogue</p>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance max-w-xl">
              A glimpse of <em className="text-accent">our archive.</em>
            </h2>
          </div>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105"
          >
            Open Full Catalogue <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previews.map((d) => (
            <Link
              key={d.id}
              to="/catalogue"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-soft"
            >
              <img
                src={d.imageUrl}
                alt={`${d.name} screen printed fabric design`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-primary/80 to-transparent">
                <p className="text-xs text-primary-foreground font-medium">{d.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
