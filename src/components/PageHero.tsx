import type { ReactNode } from "react";
import { Reveal, StampHeading } from "./motion";

/** Standard page opener: eyebrow, masked h1, intro line. */
export default function PageHero({
  eyebrow,
  lines,
  children,
  align = "left",
}: {
  eyebrow: string;
  lines: ReactNode[];
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="bg-gradient-cream pt-32 pb-14 lg:pt-44 lg:pb-20">
      <div className={`mx-auto max-w-5xl px-6 lg:px-10 ${center ? "text-center" : ""}`}>
        <p className="mb-4 text-xs tracking-[0.3em] text-accent uppercase">{eyebrow}</p>
        <StampHeading
          lines={lines}
          delay={0.1}
          className={`font-display text-4xl leading-[1.02] text-balance text-primary sm:text-5xl lg:text-7xl ${center ? "mx-auto" : ""}`}
        />
        {children && (
          <Reveal y={14} index={3}>
            <div className={`mt-6 max-w-2xl text-lg text-foreground/70 ${center ? "mx-auto" : ""}`}>
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
