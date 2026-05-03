import { Link } from "@tanstack/react-router";

const WORD_DELAYS = ["0ms", "120ms", "260ms", "400ms"];

export default function Hero() {

  return (
    <section
      ref={rootRef}
      className="relative min-h-[92vh] overflow-hidden pt-20 bg-background"
    >
      {/* Rajasthani fabric background — subtle, behind everything */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage: "url('/fabric-bg.jpeg')",
          backgroundSize: "420px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-24">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up">
            <span className="w-8 h-px bg-accent" /> Jaipur • Since 1959
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-primary leading-[0.95] text-balance">
            <span className="reveal-line">
              <span data-reveal-word className="reveal-word">Where</span>{" "}
              <span data-reveal-word className="reveal-word text-accent italic">Fabric</span>
            </span>
            <br />
            <span className="reveal-line">
              <span data-reveal-word className="reveal-word">Meets</span>{" "}
              <span data-reveal-word className="reveal-word italic shimmer-text">Art</span>
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-xl fade-up">
            Jaipur-based premium screen printing manufacturer. Hand-crafted designs,
            delivered at scale to boutiques and brands worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 fade-up">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105"
            >
              View Catalogue →
            </Link>
            <Link
              to="/factory-visit"
              className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Visit Our Factory
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl fade-up">
            {[
              { n: "65+", l: "Years" },
              { n: "2000+", l: "Designs" },
              { n: "100m", l: "Min Order" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl lg:text-4xl text-primary">{s.n}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-foreground/40 animate-bounce">
        Scroll
      </div>
    </section>
  );
}
