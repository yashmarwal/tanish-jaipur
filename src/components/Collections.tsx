import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories, countByCategory, designs, thumbUrl, type RealCategory } from "@/lib/catalogue";
import { Reveal, SectionHead } from "./motion";

const BLURB: Record<RealCategory, string> = {
  Floral: "Jaals, sprigs and garden prints",
  Geometric: "Clean repeats and stripes",
  Paisley: "Classic buta fields",
  Traditional: "Heritage Sanganer motifs",
  Abstract: "Free-form and painterly",
  Contemporary: "Modern, brand-led prints",
};

/** Each card opens the catalogue already filtered to that collection. */
export default function Collections() {
  const cols = categories.filter((c): c is RealCategory => c !== "All");
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Collections"
          chip={`${cols.length} categories`}
          lines={[
            "Start with a",
            <em key="e" className="text-accent">
              collection.
            </em>,
          ]}
          className="mb-12"
        >
          <p>Browse the archive by family of print, then open any design for details.</p>
        </SectionHead>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {cols.map((c, i) => {
            const cover = designs.find((d) => d.category === c)!;
            return (
              <Reveal key={c} index={i} y={18}>
                <Link
                  to="/catalogue"
                  search={{ category: c }}
                  className="group press relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl bg-muted shadow-soft lg:aspect-[16/10]"
                >
                  <img
                    src={thumbUrl(cover)}
                    alt=""
                    width={480}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-primary/35" aria-hidden />
                  <span
                    className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-primary/85 to-transparent"
                    aria-hidden
                  />
                  <span className="relative flex items-end justify-between gap-2 p-4 text-primary-foreground lg:p-6">
                    <span className="min-w-0">
                      <span className="font-display block text-2xl leading-tight lg:text-3xl">
                        {c}
                      </span>
                      <span className="tabular block truncate text-xs text-primary-foreground/80">
                        {countByCategory(c)} designs · {BLURB[c]}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
