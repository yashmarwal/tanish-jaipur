import { Link } from "@tanstack/react-router";
import { CountUp, Magnetic } from "./motion";

const WORD_DELAYS = ["0ms", "120ms", "260ms", "400ms"];

export default function Hero() {
  return (
    <section className="grain relative min-h-svh overflow-hidden pt-16 lg:pt-20 bg-background">
      {/* Rajasthani fabric background — subtle, behind everything */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-[0.60] mix-blend-multiply"
        style={{
          backgroundImage: "url('/header-bg.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-32 pb-28 lg:pb-24">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up">
            <span className="w-8 h-px bg-accent" /> Jaipur • Since 1959
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
            scale to boutiques and brands worldwide.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 fade-up">
            <Magnetic className="w-full sm:w-auto">
              <Link
                to="/catalogue"
                className="flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-colors"
              >
                View Catalogue →
              </Link>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Link
                to="/factory-visit"
                className="flex w-full sm:w-auto items-center justify-center gap-2 border border-primary text-primary px-7 py-4 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Visit Our Factory
              </Link>
            </Magnetic>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl fade-up">
            {[
              { to: 65, suffix: "+", separator: false, l: "Years" },
              { to: 20000, suffix: "+", separator: true, l: "Designs" },
              { to: 500, suffix: "m", separator: false, l: "Min Order" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-semibold tracking-tight text-2xl sm:text-3xl text-primary whitespace-nowrap">
                  <CountUp to={s.to} suffix={s.suffix} separator={s.separator} />
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">{s.l}</p>
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
