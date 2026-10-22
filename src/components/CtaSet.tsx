import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic } from "./motion";

type Variant = "primary" | "secondary" | "tertiary";

const STYLES: Record<Variant, { pill: string; chip: string }> = {
  primary: {
    pill: "bg-primary text-primary-foreground shadow-warm hover:bg-primary/90",
    chip: "bg-accent text-accent-foreground",
  },
  secondary: {
    pill: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    chip: "bg-primary/10 text-current",
  },
  tertiary: {
    pill: "bg-[#25D366] text-white shadow-soft",
    chip: "bg-white/20 text-white",
  },
};

export type Cta = {
  label: string;
  variant: Variant;
  /** Internal route, or an external href when `external` is set. */
  to: string;
  external?: boolean;
  icon?: ReactNode;
};

/** Primary / secondary / tertiary pills: label plus a round icon chip. Stacked on phones, one row from md. */
export default function CtaSet({ items, className = "" }: { items: Cta[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 md:flex-row md:flex-nowrap ${className}`}>
      {items.map((c) => {
        const s = STYLES[c.variant];
        const cls = `sweep press flex w-full items-center justify-between gap-3 rounded-full py-2 pr-2 pl-6 text-sm font-medium whitespace-nowrap transition-colors md:w-auto ${s.pill}`;
        const inner = (
          <>
            {c.label}
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${s.chip}`}
            >
              {c.icon ?? <ArrowRight size={16} />}
            </span>
          </>
        );
        return (
          <Magnetic key={c.label} className="w-full md:w-auto">
            {c.external ? (
              <a href={c.to} target="_blank" rel="noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link to={c.to} className={cls}>
                {inner}
              </Link>
            )}
          </Magnetic>
        );
      })}
    </div>
  );
}
