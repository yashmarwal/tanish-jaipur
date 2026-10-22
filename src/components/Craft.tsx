import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Palette, Brush, Package, Layers } from "lucide-react";
import { TERMS, fmtNum } from "@/lib/terms";
import { SectionHead } from "./motion";

const ITEMS = [
  {
    icon: Brush,
    title: "Screen Printing",
    desc: "Hand-pulled prints on cotton, linen, rayon and silk — the way Sanganer has done it for centuries.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bring us a sketch, a mood, a Pinterest board. Our in-house studio turns it into a press-ready screen.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: `From ${TERMS.minMetres} metres for a boutique drop to ${fmtNum(TERMS.capacityPerDay)} metres a day for D2C scale. Same craft, every order.`,
  },
  {
    icon: Layers,
    title: "Fabric Sourcing",
    desc: "Cotton from Erode, linen from Coimbatore, rayon from Surat — we source the base, you choose the print.",
  },
];

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const TOP = (i: number) => `calc(15vh + ${i * 24}px)`;

/**
 * Stacking cards: each card pins near the top and the next slides over it; earlier cards ease back
 * (scale only). The last card pins like the rest for `hold` (its own measured height, not a magic
 * number), then releases and scrolls away with a clear gap before the next section.
 */
export default function Craft() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [hold, setHold] = useState(280);

  useIsoLayoutEffect(() => {
    const last = cards.current[ITEMS.length - 1];
    if (!last) return;
    const measure = () => setHold(Math.round(last.getBoundingClientRect().height));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(last);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      cards.current.forEach((el, i) => {
        const next = cards.current[i + 1];
        if (!el || !next) return;
        const pinTop = vh * 0.15 + (i + 1) * 24; // where card i+1 will pin
        const h = el.getBoundingClientRect().height;
        const q = 1 - Math.min(1, Math.max(0, (next.getBoundingClientRect().top - pinTop) / h));
        el.style.transform = `scale(${1 - 0.05 * q})`;
        el.style.opacity = String(1 - 0.35 * q);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="craft-wrap">
      {/* Bottom padding (inside the section, so it keeps the section's colour) is the clear space
          between the released last card and the next section. */}
      <section className="bg-secondary/40 pt-24 lg:pt-40" style={{ paddingBottom: "var(--craft-gap)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <SectionHead
            align="center"
            className="mb-20"
            eyebrow="Our Craft"
            lines={["Four services, one", "obsession with quality."]}
          />

          <div className="relative flex flex-col">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="sticky"
                style={{
                  top: TOP(i),
                  marginBottom: i === ITEMS.length - 1 ? 0 : "4rem",
                  zIndex: i + 1,
                }}
              >
                <div
                  ref={(el) => {
                    cards.current[i] = el;
                  }}
                  className="flex origin-top flex-col items-start gap-6 rounded-3xl border border-border bg-card p-8 shadow-2xl will-change-transform md:flex-row md:items-center lg:gap-10 lg:p-12"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-4xl text-primary mb-3 lg:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Sticky travel is limited to the parent content box, so the hold must be a real element, not padding. */}
            <div aria-hidden style={{ height: hold }} />
          </div>
        </div>
      </section>
    </div>
  );
}
