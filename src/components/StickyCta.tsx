import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { WHATSAPP_NUMBER, waLink } from "@/lib/whatsapp";
import { EASE_UI } from "./motion";
import WhatsApp from "./icons/WhatsApp";

const TEL = `tel:+91${WHATSAPP_NUMBER.slice(2)}`;
const WA_MSG = "Hi Tanish Creation! I'd like to discuss a fabric printing order.";

export default function StickyCta() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const nearFooter = y + vh > document.documentElement.scrollHeight - vh * 0.55;
      const threshold = window.matchMedia("(max-width: 767px)").matches ? 200 : vh * 0.9;
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

  return (
    <AnimatePresence>
      {visible &&
        (isMobile ? (
          <motion.nav
            key="dock"
            aria-label="Quick actions"
            className="fixed inset-x-0 bottom-[max(0.9rem,env(safe-area-inset-bottom))] z-45 flex justify-center px-4"
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 96, opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE_UI }}
          >
            <div className="sticky-dock flex items-center gap-2 rounded-full border border-border bg-card/90 p-2 shadow-warm backdrop-blur-xl transition-opacity duration-200">
              <Link
                to="/catalogue"
                className="flex h-11 items-center rounded-full bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase"
              >
                Catalogue
              </Link>
              <a
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <a
                href={TEL}
                aria-label="Call Tanish Creation"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-primary"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
            </div>
          </motion.nav>
        ) : (
          <motion.a
            key="rail"
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 right-0 z-30 flex origin-right -translate-y-1/2 -rotate-90 items-center gap-2 rounded-b-lg bg-accent px-5 py-3 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase shadow-warm"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_UI }}
          >
            <WhatsApp className="h-4 w-4 rotate-90" /> WhatsApp Us
          </motion.a>
        ))}
    </AnimatePresence>
  );
}
