import { useEffect, useMemo, useState } from "react";
import { generateDesigns, Design } from "@/lib/catalogue";
import { designInquiry, waLink } from "@/lib/whatsapp";
import { X } from "lucide-react";

export default function CatalogueGrid() {
  const designs = useMemo(() => generateDesigns(90), []);
  const [selected, setSelected] = useState<Design | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <p className="text-sm text-foreground/60">
            Showing <span className="text-accent font-medium">{designs.length}</span> hand-picked designs from our archive
          </p>
          <a
            href={waLink("Hi Tanish Creation! I'd like to discuss a custom design.")}
            target="_blank"
            rel="noreferrer"
            className="text-sm bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
          >
            + Custom Design
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {designs.map((d, idx) => (
            <div key={d.id} className="contents">
              <button
                onClick={() => setSelected(d)}
                className="group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm hover:-translate-y-1 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={d.imageUrl}
                    alt={`${d.name} — screen printed fabric design by Tanish Creation`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg text-primary truncate">{d.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-foreground/60 font-mono">{d.id}</span>
                    <span className="text-accent font-semibold">Min {d.minMetres}m</span>
                  </div>
                </div>
              </button>
              {(idx + 1) % 15 === 0 && (
                <a
                  href={waLink("Hi Tanish Creation! I'd like to discuss a custom design.")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-warm text-accent-foreground rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform"
                >
                  <p className="font-display text-2xl leading-tight">Custom Design Available</p>
                  <span className="text-sm mt-4 underline underline-offset-4">Start on WhatsApp →</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-warm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] relative bg-muted overflow-hidden">
              <img
                src={selected.imageUrlLarge}
                alt={`${selected.name} — screen printed fabric design`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-card/90 rounded-full p-2 hover:bg-card"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Design</p>
              <h3 className="font-display text-4xl text-primary mt-2">{selected.name}</h3>
              <p className="mt-4 text-foreground/70">
                Hand-pulled screen print on premium base fabric. Custom colourways available.
                Lead time 7–10 days for orders above 100 metres.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-foreground/50 text-xs uppercase">Code</dt><dd className="font-mono text-primary">{selected.id}</dd></div>
                <div><dt className="text-foreground/50 text-xs uppercase">Min Order</dt><dd className="text-primary">{selected.minMetres} m</dd></div>
              </dl>
              <a
                href={designInquiry(selected.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full justify-center items-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-all"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
