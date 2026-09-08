const ITEMS = [
  "Floral Jaals",
  "Paisley Fields",
  "Geometric Repeats",
  "Traditional Motifs",
  "Abstract Prints",
  "Contemporary Designs",
  "Hand-Pulled in Sanganer",
  "Bulk from 500 metres",
] as const;

export default function Marquee() {
  return (
    <section
      aria-label="What we print"
      className="grain overflow-hidden border-y border-primary-foreground/15 bg-primary py-5"
    >
      <div className="marquee relative z-1 flex w-max">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex shrink-0" aria-hidden={pass === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${pass}-${item}`}
                className="font-display flex items-center gap-6 whitespace-nowrap px-8 text-xl text-primary-foreground/85 lg:text-2xl"
              >
                {item}
                <span className="text-accent text-xs">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
