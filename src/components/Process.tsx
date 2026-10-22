import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Design Approval",
    desc: "You share the artwork or pick from our archive. Our studio prepares a digital strike-off for sign-off.",
  },
  {
    n: "02",
    title: "Screen Preparation",
    desc: "Each colour gets its own hand-coated screen, exposed and washed to micron precision.",
  },
  {
    n: "03",
    title: "Color Mixing",
    desc: "Pigments are hand-mixed against your reference. We log every formula for repeat orders.",
  },
  {
    n: "04",
    title: "Printing",
    desc: "Tables of up to 60 metres get pulled by hand, layer by layer, colour by colour.",
  },
  {
    n: "05",
    title: "Quality Check",
    desc: "Every roll is inspected against the approved strike-off before it ships.",
  },
];

/**
 * Horizontal "pinned" walk through the five steps, built on position: sticky (no JS pinning, so
 * no layout shift). The outer block is 100svh + the distance the track has to travel; scroll
 * progress through that distance maps to translateX. The initial height comes from CSS
 * (.process-outer) so it already matches before hydration.
 */
export default function Process() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const t = track.current;
    if (!o || !t) return;
    let dist = 0;
    let raf = 0;
    const measure = () => {
      dist = Math.max(0, t.scrollWidth - window.innerWidth + 80);
      o.style.setProperty("--dist", `${dist}px`);
      draw();
    };
    const draw = () => {
      raf = 0;
      const p = dist ? Math.min(1, Math.max(0, -o.getBoundingClientRect().top / dist)) : 0;
      t.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(t);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={outer} className="process-outer relative bg-primary text-primary-foreground">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-accent uppercase">The Process</p>
          <h2 className="font-display text-4xl text-balance lg:text-6xl">
            Five steps from your <em className="text-accent">brief</em> to your{" "}
            <em className="italic">box</em>.
          </h2>
        </div>
        <div ref={track} className="process-track flex w-max gap-6 will-change-transform">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="process-card shrink-0 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 lg:p-10"
            >
              <div className="font-display tabular text-6xl text-accent lg:text-7xl">{s.n}</div>
              <h3 className="font-display mt-4 text-3xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
