import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/faq";
import { Reveal, SectionHead } from "./motion";

/** Native <details> accordion: no JS, keyboard and screen-reader friendly, one open at a time. */
export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? FAQ.slice(0, limit) : FAQ;
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f, i) => (
        <Reveal key={f.q} index={i} y={12}>
          <details name="faq" className="group">
            <summary className="press flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-xl text-primary marker:hidden [&::-webkit-details-marker]:hidden lg:text-2xl">
              {f.q}
              <Plus
                size={20}
                className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="max-w-2xl pb-6 text-foreground/70">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export default function Faq({ limit = 5 }: { limit?: number }) {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10">
        <SectionHead
          eyebrow="Questions"
          lines={[
            "Before you",
            <em key="e" className="text-accent">
              order.
            </em>,
          ]}
        >
          <p>The things buyers ask us first. Anything else, message the team.</p>
          <Link
            to="/faq"
            className="mt-5 inline-block text-sm text-accent underline underline-offset-4"
          >
            See all questions
          </Link>
        </SectionHead>
        <FaqList limit={limit} />
      </div>
    </section>
  );
}
