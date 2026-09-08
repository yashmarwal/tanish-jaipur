import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { waLink } from "@/lib/whatsapp";
import { EASE_UI } from "./motion";

const MESSAGES = [
  "Request Catalogue",
  "WhatsApp Us",
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
      const nearFooter =
        y + window.innerHeight > document.documentElement.scrollHeight - window.innerHeight * 0.6;
      setVisible(y > window.innerHeight * 0.9 && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 3000);
    return () => window.clearInterval(id);
  }, [visible]);

  const href = waLink(`Hi Tanish Creation — ${MESSAGES[index]}. Please share details.`);

  const label = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={MESSAGES[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: EASE_UI }}
        className="block text-xs font-medium tracking-[0.2em] uppercase"
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
            key="pill"
            className="safe-bottom fixed inset-x-4 bottom-0 z-30 flex justify-center"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_UI }}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] w-full max-w-[280px] items-center justify-center rounded-full bg-accent px-6 text-accent-foreground shadow-warm"
            >
              {label}
            </a>
          </motion.div>
        ) : (
          <motion.a
            key="rail"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 right-0 z-30 origin-right -translate-y-1/2 rotate-[-90deg] rounded-b-lg bg-accent px-6 py-3 text-accent-foreground shadow-warm"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_UI }}
          >
            {label}
          </motion.a>
        ))}
    </AnimatePresence>
  );
}
