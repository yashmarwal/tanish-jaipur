import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, NAV_MORE, isActivePath } from "@/lib/nav";
import { EMAIL, TEL, waLink } from "@/lib/whatsapp";
import WhatsApp from "./icons/WhatsApp";

const SAMPLE_MSG =
  "Hi Tanish Creation! I would like to ask for a sample fabric for a quality check.";

const SPRING = { type: "spring", stiffness: 520, damping: 40, mass: 0.7 } as const;

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5"
      onClick={onClick}
      aria-label="Tanish Creation, home"
    >
      {/* Real TC monogram, cut out on transparency; fixed box so the header never grows. */}
      <img src="/logo-ink.png" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-2xl font-semibold tracking-tight text-primary lg:text-[1.65rem]">
          Tanish
        </span>
        <span className="font-display text-lg text-accent italic">Creation</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  // resolvedLocation only advances once the new page has loaded and is the one rendered; `location`
  // moves as soon as navigation starts, while the old page is still on screen.
  const pathname = useRouterState({
    select: (s) => (s.resolvedLocation ?? s.location).pathname,
  });
  const [scrolled, setScrolled] = useState(false);
  // The menu is "open for a path": the moment the path changes it is closed in the same render,
  // so the page transition goes menu -> new page, never menu -> old page -> new page.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (v: boolean) => setOpenAt(v ? pathname : null);
  const [hover, setHover] = useState<string | null>(null);

  // Frame-throttled: at most one state check per animation frame.
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      setScrolled(window.scrollY > 30);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);


  return (
    <>
      <header
        className={`vt-nav fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled
            ? "border-b border-border bg-background/95 shadow-soft"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-20 lg:px-10">
          <Logo />

          <ul
            className="relative hidden items-center gap-0.5 rounded-full border border-border bg-card/80 p-1 lg:flex"
            onMouseLeave={() => setHover(null)}
          >
            {NAV_LINKS.map((l) => {
              const active = isActivePath(pathname, l.to);
              return (
                <li key={l.to} className="relative">
                  <Link
                    to={l.to}
                    onMouseEnter={() => setHover(l.to)}
                    onFocus={() => setHover(l.to)}
                    onBlur={() => setHover(null)}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-primary-foreground" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {hover === l.to && !active && (
                      <motion.span
                        layoutId="nav-hover"
                        transition={SPRING}
                        className="absolute inset-0 rounded-full bg-secondary"
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={SPRING}
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={waLink(SAMPLE_MSG)}
              target="_blank"
              rel="noreferrer"
              aria-label="Ask for a sample fabric on WhatsApp"
              className="sweep press inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 text-xs font-medium text-white shadow-soft lg:px-5 lg:text-sm"
            >
              <WhatsApp className="h-4 w-4 shrink-0" />
              <span className="hidden lg:inline">Ask for a sample fabric</span>
              <span className="lg:hidden">Sample</span>
            </a>
            <button
              className="press -mr-1 flex h-11 w-11 items-center justify-center text-primary lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <motion.div
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-70 flex flex-col overflow-y-auto bg-background lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
            <Logo onClick={() => pathname === "/" && setOpen(false)} />
            <button
              className="press -mr-1 flex h-11 w-11 items-center justify-center text-primary"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ol className="px-6 pt-2">
            {[...NAV_LINKS, ...NAV_MORE].map((l, i) => {
              const active = isActivePath(pathname, l.to);
              return (
                <li key={l.to} className="border-b border-border/60">
                  <Link
                    to={l.to}
                    onClick={() => l.to === pathname && setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`press flex items-baseline gap-4 py-4 ${active ? "text-accent" : "text-primary"}`}
                  >
                    <span className="label-caps tabular w-6 text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-3xl">{l.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />}
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-auto px-6 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <p className="label-caps mb-3 text-foreground/50">Reach us</p>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={TEL}
                className="press flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card text-sm font-medium text-primary"
              >
                <Phone size={16} /> Call
              </a>
              <a
                href={waLink("Hi Tanish Creation!")}
                target="_blank"
                rel="noreferrer"
                className="press flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-medium text-white"
              >
                <WhatsApp className="h-4 w-4" /> Chat
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="press flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card text-sm font-medium text-primary"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
