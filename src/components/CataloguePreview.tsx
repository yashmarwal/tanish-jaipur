import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { designs, thumbUrl } from "@/lib/catalogue";
import { TERMS } from "@/lib/terms";
import { Magnetic, SectionHead } from "./motion";

const FEATURED = designs.slice(0, 8);

/**
 * Featured designs. Phones get a native scroll-snap rail with counter, progress bar and arrows
 * (scroll-padding equals the gutter so the first card does not sit flush to the screen edge);
 * larger screens get a plain grid.
 */
export default function CataloguePreview() {
  const rail = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let raf = 0;
    const read = () => {
      raf = 0;
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step =
        first.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || "12");
      const max = el.scrollWidth - el.clientWidth;
      setIndex(el.scrollLeft >= max - 4 ? FEATURED.length - 1 : Math.round(el.scrollLeft / step));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const go = (dir: -1 | 1) => {
    const el = rail.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    el.scrollBy({ left: dir * (first.getBoundingClientRect().width + 12), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="From the archive"
            chip={`${FEATURED.length} of ${TERMS.designs.toLocaleString("en-US")}+`}
            lines={[
              "A glimpse of",
              <em key="e" className="text-accent">
                our archive.
              </em>,
            ]}
          >
            <p>Eight prints to start with. The full catalogue is one tap away.</p>
          </SectionHead>
          <div className="hidden md:block">
            <Magnetic>
              <Link
                to="/catalogue"
                className="sweep press inline-flex items-center gap-3 rounded-full bg-primary py-2 pr-2 pl-6 text-sm font-medium text-primary-foreground shadow-warm"
              >
                Open Full Catalogue
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl lg:px-10">
        {/* pb/-mb gives card shadows room inside the scroller so they are not clipped to a hard edge */}
        <ul
          ref={rail}
          className="snap-rail no-scrollbar -mb-6 flex scroll-px-6 gap-3 overflow-x-auto px-6 pb-8 md:mb-0 md:grid md:scroll-px-0 md:grid-cols-4 md:gap-4 md:overflow-visible md:px-6 md:pb-0 lg:px-0"
        >
          {FEATURED.map((d) => (
            <li key={d.id} className="w-[68%] shrink-0 sm:w-[42%] md:w-auto">
              <Link
                to="/catalogue"
                search={{ design: d.id }}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-soft"
              >
                <img
                  src={thumbUrl(d)}
                  alt={`${d.name} screen printed fabric design`}
                  width={480}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-primary/75 p-3 text-xs font-medium text-primary-foreground">
                  {d.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl items-center gap-4 px-6 md:hidden">
        <span className="tabular text-xs tracking-widest text-foreground/60" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(FEATURED.length).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-border" aria-hidden>
          <div
            className="h-px origin-left bg-accent transition-transform duration-300"
            style={{ transform: `scaleX(${(index + 1) / FEATURED.length})` }}
          />
        </div>
        <button
          onClick={() => go(-1)}
          aria-label="Previous designs"
          className="press flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next designs"
          className="press flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="mx-auto mt-6 max-w-7xl px-6 md:hidden">
        <Link
          to="/catalogue"
          className="sweep press flex items-center justify-between rounded-full bg-primary py-2 pr-2 pl-6 text-sm font-medium text-primary-foreground"
        >
          Open Full Catalogue
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
