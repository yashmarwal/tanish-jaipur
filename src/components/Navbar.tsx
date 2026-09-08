import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { EASE_REVEAL, EASE_UI } from "./motion";
import WhatsApp from "./icons/WhatsApp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/blog", label: "Blog" },
  { to: "/factory-visit", label: "Factory Visit" },
  { to: "/contact", label: "Contact" },
] as const;

const SAMPLE_MSG =
  "Hi Tanish Creation! I would like to ask for a sample fabric for a quality check.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          open
            ? "bg-background border-b border-border"
            : scrolled
              ? "bg-background/90 backdrop-blur-md border-b border-border shadow-soft"
              : "bg-transparent"
        }`}
      >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-baseline gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl lg:text-3xl font-semibold text-primary tracking-tight">
            Tanish
          </span>
          <span className="font-display text-lg text-accent italic">Creation</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={waLink(SAMPLE_MSG)}
            target="_blank"
            rel="noreferrer"
            aria-label="Ask for a sample fabric on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-xs font-medium text-white shadow-soft transition-transform hover:scale-105 lg:px-4 lg:text-sm"
          >
            <WhatsApp className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">Ask for a sample fabric</span>
            <span className="lg:hidden">Sample</span>
          </a>
          <button
            className="lg:hidden -mr-1 flex h-11 w-11 items-center justify-center text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-16 bottom-0 z-45 flex flex-col overflow-y-auto bg-background px-6 pb-10 pt-4 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_UI }}
          >
            <div className="flex flex-1 flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: EASE_REVEAL, delay: 0.04 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-5 font-display text-4xl text-primary"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href={waLink(SAMPLE_MSG)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: EASE_REVEAL, delay: 0.04 * links.length }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-medium text-white shadow-warm"
              >
                <WhatsApp className="h-5 w-5" />
                Ask for a sample fabric
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
