import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Brush, Package, Layers } from "lucide-react";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create subtle parallax effects for each card
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const ys = [y1, y2, y3, y4];

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-secondary/40 overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-xs uppercase tracking-[0.3em] text-accent mb-4"
          >
            Our Craft
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance"
          >
            Four services, one obsession with quality.
          </motion.h2>
        </div>
        
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              style={{ y: ys[i] }}
              initial={{ opacity: 0, rotateX: 45, scale: 0.8, y: 150 }}
              whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15, 
                delay: i * 0.1 
              }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent transition-all hover:-translate-y-2 hover:shadow-2xl shadow-soft flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                <item.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
