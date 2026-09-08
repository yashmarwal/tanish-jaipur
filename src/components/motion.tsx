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
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}) {
  const reduced = useReducedMotion();
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduced ? { opacity: 0 } : { y: "110%" }}
            animate={reduced ? { opacity: 1 } : { y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_REVEAL, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
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
    <span ref={ref}>
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
