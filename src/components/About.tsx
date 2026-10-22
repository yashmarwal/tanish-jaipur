import { motion } from "framer-motion";
import { TERMS, fmtNum } from "@/lib/terms";
import { CountUp, Reveal, SectionHead } from "./motion";

const STATS = [
  { to: TERMS.designs, suffix: "+", separator: true, label: "Unique Designs" },
  { to: 1000, suffix: "+", separator: true, label: "Happy Clients" },
  { to: 65, suffix: "+", separator: false, label: "Years of Heritage" },
  { to: TERMS.capacityPerDay, suffix: "m", separator: true, label: "Daily Capacity" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHead
            eyebrow="Our Story"
            lines={[
              "Three generations of",
              <>
                <em className="text-accent">Jaipur</em> textile heritage
              </>,
            ]}
          />
          <Reveal className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              Tanish Creation began in the printing lanes of Sanganer in {TERMS.since} — a region
              where every household once carried a wooden block and a dye-stained dupatta hung from
              every roof.
            </p>
            <p>
              Today we run one of Jaipur's most trusted screen printing facilities: a{" "}
              {fmtNum(TERMS.designs)}+ design library, {fmtNum(TERMS.capacityPerDay)} metres of
              daily capacity, and a team that still hand-mixes every base colour the way our
              grandfather did.
            </p>
            <p>
              Boutiques, D2C brands, and wholesalers across India trust us because we treat{" "}
              <em>every</em> hundred-metre order like a heritage commission.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-10 shadow-soft hover:shadow-warm transition-all group"
            >
              <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary group-hover:text-accent transition-colors whitespace-nowrap">
                <CountUp to={s.to} suffix={s.suffix} separator={s.separator} />
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-wider text-foreground/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
