import { useEffect, useRef } from "react";
import { TERMS } from "@/lib/terms";
import { waLink } from "@/lib/whatsapp";
import CtaSet from "./CtaSet";
import { CountUp } from "./motion";
import WhatsApp from "./icons/WhatsApp";

const WORD_DELAYS = ["0ms", "120ms", "260ms", "400ms"];

export default function Hero() {
  const bg = useRef<HTMLDivElement>(null);

  // Subtle parallax: the fabric drifts at a quarter of scroll speed. Transform only, one write per frame.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      if (bg.current) bg.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="grain relative min-h-svh overflow-hidden pt-16 lg:pt-20 bg-background">
      {/* Rajasthani fabric background: animated WebP (one variant per viewport), still for reduced motion */}
      <div ref={bg} aria-hidden className="parallax absolute inset-x-0 -top-[12%] -bottom-[4%] z-0">
        <picture>
          <source
            media="(prefers-reduced-motion: reduce)"
            srcSet="/header-bg-still.webp"
            type="image/webp"
          />
          <source media="(max-width: 767px)" srcSet="/header-bg-sm.webp" type="image/webp" />
          <img
            src="/header-bg.webp"
            alt=""
            width={400}
            height={424}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-[0.6] mix-blend-multiply"
          />
        </picture>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-32 pb-28 lg:pb-24">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up">
            <span className="w-8 h-px bg-accent" /> Jaipur • Since{" "}
            <span className="tabular">{TERMS.since}</span>
          </p>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl text-primary leading-[0.95] text-balance">
            <span className="reveal-line">
              <span className="reveal-word" style={{ animationDelay: WORD_DELAYS[0] }}>
                Where
              </span>{" "}
              <span
                className="reveal-word text-accent italic"
                style={{ animationDelay: WORD_DELAYS[1] }}
              >
                Fabric
              </span>
            </span>
            <br />
            <span className="reveal-line">
              <span className="reveal-word" style={{ animationDelay: WORD_DELAYS[2] }}>
                Meets
              </span>{" "}
              <span
                className="reveal-word italic text-accent"
                style={{ animationDelay: WORD_DELAYS[3] }}
              >
                Art
              </span>
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-xl fade-up">
            Jaipur-based premium screen printing manufacturer. Hand-crafted designs, delivered at
            scale to boutiques and brands.
          </p>

          <CtaSet
            className="mt-10 fade-up"
            items={[
              { label: "View Catalogue", variant: "primary", to: "/catalogue" },
              { label: "Visit Our Factory", variant: "secondary", to: "/factory-visit" },
              {
                label: "WhatsApp Us",
                variant: "tertiary",
                to: waLink("Hi Tanish Creation! I'd like to discuss a fabric printing order."),
                external: true,
                icon: <WhatsApp className="h-4 w-4" />,
              },
            ]}
          />

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl fade-up">
            {[
              { to: 65, suffix: "+", separator: false, l: "Years" },
              { to: TERMS.designs, suffix: "+", separator: true, l: "Designs" },
              { to: TERMS.minMetres, suffix: "m", separator: false, l: "Min Order" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-semibold tracking-tight text-2xl sm:text-3xl text-primary whitespace-nowrap">
                  <CountUp to={s.to} suffix={s.suffix} separator={s.separator} />
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden text-xs uppercase tracking-[0.3em] text-foreground/40 animate-bounce md:block">
        Scroll
      </div>
    </section>
  );
}
