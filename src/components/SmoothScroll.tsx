import { useEffect } from "react";

/** Lenis-driven inertia scroll, lazy-loaded and skipped when reduced motion is requested. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroyed = false;
    let instance: { raf: (t: number) => void; destroy: () => void } | null = null;

    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      instance = { raf: (time) => lenis.raf(time), destroy: () => lenis.destroy() };
      const loop = (time: number) => {
        instance?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, []);

  return null;
}
