import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Bezier = [number, number, number, number];

export const EASE_REVEAL: Bezier = [0.22, 1, 0.36, 1];
export const EASE_UI: Bezier = [0.16, 1, 0.3, 1];

/** Fade/slide in on scroll, staggered by index. */
export function Reveal({
  children,
  index = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  index?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE_REVEAL, delay: (index % 6) * 0.05 }}
    >
      {children}
    </motion.div>
  );
}

/** Line-by-line clipped "stamp up" reveal. */
export function StampHeading({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h1",
  inView = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
  /** Reveal when scrolled into view (once) instead of on mount. */
  inView?: boolean;
}) {
  const reduced = useReducedMotion();
  // Observe the (unclipped) heading, not the masked line: a translated-out line has no visible area.
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const go = inView ? seen : true;
  const T = Tag as "h1";
  return (
    <T ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {lines.map((line, i) => (
        // Mask with breathing room: descenders (g, y, j) and italic overhangs must not clip.
        <span
          key={i}
          className="-mx-[0.06em] -mt-[0.04em] -mb-[0.16em] block overflow-hidden px-[0.06em] pt-[0.04em] pb-[0.16em]"
        >
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduced ? { opacity: 0 } : { y: "115%" }}
            animate={reduced ? { opacity: go ? 1 : 0 } : { y: go ? "0%" : "115%" }}
            transition={{ duration: 0.9, ease: EASE_REVEAL, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </T>
  );
}

/** IntersectionObserver-gated count-up, fires once at ~40% visibility. */
export function CountUp({
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
  separator = true,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  const display = separator ? new Intl.NumberFormat("en-US").format(value) : String(value);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/**
 * Wraps any interactive child (a router Link, an anchor, a button) and gives it
 * a magnetic pull toward the cursor. No-ops on touch / coarse pointers and when
 * reduced motion is requested. Keep the visible element as the direct child so
 * its own styles and routing behaviour are untouched.
 */
export function Magnetic({
  children,
  className,
  strength = 0.2,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const fine = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      onMouseMove={(e) => {
        if (reduced || !fine() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * strength,
          y: (e.clientY - (r.top + r.height / 2)) * strength * 1.4,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ duration: 0.4, ease: EASE_UI }}
    >
      {children}
    </motion.div>
  );
}

/** Hairline that draws in from the left once. */
export function DrawRule({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`draw-rule hairline ${className}`}
      initial={{ scaleX: reduced ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.1, ease: EASE_REVEAL }}
    />
  );
}

/** Eyebrow + masked display title + optional intro, the standard section opener. */
export function SectionHead({
  eyebrow,
  lines,
  children,
  align = "left",
  chip,
  className = "",
}: {
  eyebrow: string;
  lines: ReactNode[];
  children?: ReactNode;
  align?: "left" | "center";
  chip?: string;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      <Reveal y={12}>
        <p
          className={`label-caps text-accent mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          {eyebrow}
          {chip && (
            <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[10px] tracking-[0.18em] tabular">
              {chip}
            </span>
          )}
        </p>
      </Reveal>
      <StampHeading
        as="h2"
        inView
        lines={lines}
        className={`font-display text-4xl lg:text-6xl text-primary leading-[1.05] text-balance ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      />
      {children && (
        <Reveal y={14} index={2}>
          <div
            className={`mt-5 text-foreground/70 text-lg ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}
          >
            {children}
          </div>
        </Reveal>
      )}
    </div>
  );
}
