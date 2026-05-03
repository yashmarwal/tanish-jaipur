import { motion } from "framer-motion";
import { Palette, Brush, Package, Layers } from "lucide-react";

const ITEMS = [
  {
    icon: Brush,
    title: "Screen Printing",
    desc: "Hand-pulled prints on cotton, linen, rayon and silk — the way Sanganer has done it for centuries.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bring us a sketch, a mood, a Pinterest board. Our in-house studio turns it into a press-ready screen.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "From 500 metres for a boutique drop to 15,000 metres a day for D2C scale. Same craft, every order.",
  },
  {
    icon: Layers,
    title: "Fabric Sourcing",
    desc: "Cotton from Erode, linen from Coimbatore, rayon from Surat — we source the base, you choose the print.",
  },
];

export default function Craft() {
  return (
    <section className="py-24 lg:py-40 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-accent mb-4"
          >
            Our Craft
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance mx-auto max-w-2xl"
          >
            Four services, one obsession with quality.
          </motion.h2>
        </div>
        
        <div className="flex flex-col relative pb-32">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="sticky"
              style={{
                top: `calc(15vh + ${i * 24}px)`,
                marginBottom: i === ITEMS.length - 1 ? 0 : "4rem",
                zIndex: i + 1,
              }}
            >
              <div 
                className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10 transform origin-top transition-transform"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-4xl text-primary mb-3 lg:mb-4">{item.title}</h3>
                  <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
