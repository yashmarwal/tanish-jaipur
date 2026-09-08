import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { waLink } from "@/lib/whatsapp";
import { EASE_UI } from "./motion";
import WhatsApp from "./icons/WhatsApp";

const MESSAGES = [
  "Request Catalogue",
  "Get Free Samples",
  "Talk to Our Team",
] as const;

export default function StickyCta() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const nearFooter =
        y + vh > document.documentElement.scrollHeight - vh * 0.6;
      // On mobile the bar is a persistent action strip after a nudge of scroll;
      // on desktop the side rail only appears once the hero is well behind you.
      const threshold = window.matchMedia("(max-width: 767px)").matches ? 240 : vh * 0.9;
      setVisible(y > threshold && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 3200);
    return () => window.clearInterval(id);
  }, [visible]);

  const ctaHref = waLink(`Hi Tanish Creation — ${MESSAGES[index]}. Please share details.`);
  const waHref = waLink("Hi Tanish Creation! I'd like to know more about your fabrics.");

  const rotatingLabel = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={MESSAGES[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: EASE_UI }}
        className="block text-xs font-medium tracking-[0.18em] uppercase"
      >
        {MESSAGES[index]}
      </motion.span>
    </AnimatePresence>
  );

  return (
    <AnimatePresence>
      {visible &&
        (isMobile ? (
          <motion.div
            key="bar"
            className="safe-bottom fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-border bg-card/95 px-3 pt-2 backdrop-blur-md"
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 96, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_UI }}
          >
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-4 text-accent-foreground shadow-soft"
            >
              {rotatingLabel}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex min-h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
          </motion.div>
        ) : (
          <motion.a
            key="rail"
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 right-0 z-30 origin-right -translate-y-1/2 rotate-[-90deg] rounded-b-lg bg-accent px-6 py-3 text-accent-foreground shadow-warm"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_UI }}
          >
            {rotatingLabel}
          </motion.a>
        ))}
    </AnimatePresence>
  );
}
