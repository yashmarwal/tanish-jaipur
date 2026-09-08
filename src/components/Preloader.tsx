import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { EASE_REVEAL } from "./motion";

const IntroContext = createContext({ ready: false });

/** Above-the-fold components can time themselves off this if needed. */
export function useIntro() {
  return useContext(IntroContext);
}

/**
 * The overlay is rendered during SSR (so it paints on the very first frame,
 * before the page shows through) and the `intro-playing` class is added by an
 * inline script in the document head. This effect just tears it down again.
 */
export function IntroProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const clear = () => {
      document.documentElement.classList.remove("intro-playing");
      setShow(false);
      setReady(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clear();
      return;
    }

    const t = window.setTimeout(clear, 1500);
    return () => {
      window.clearTimeout(t);
      document.documentElement.classList.remove("intro-playing");
    };
  }, []);

  return (
    <IntroContext.Provider value={{ ready }}>
      <AnimatePresence>
        {show && (
          <motion.div
            key="preloader"
            className="intro-overlay grain bg-background fixed inset-0 z-200 flex items-center justify-center"
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.85, ease: EASE_REVEAL }}
          >
            <div className="relative flex flex-col items-center gap-5">
              <motion.img
                src="/favicon.jpg"
                alt="Tanish Creation"
                width={96}
                height={96}
                className="h-24 w-24 mix-blend-multiply"
                initial={{ opacity: 0, y: 14, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: EASE_REVEAL, delay: 0.1 }}
              />
              <motion.div
                className="bg-accent h-px"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, ease: EASE_REVEAL }}
              />
              <motion.span
                className="text-xs font-medium tracking-[0.28em] text-foreground/60 uppercase"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_REVEAL, delay: 0.3 }}
              >
                Tanish Creation
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
