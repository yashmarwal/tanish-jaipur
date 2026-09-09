import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
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

        <div className="flex items-center gap-3">
          <a
            href={waLink(SAMPLE_MSG)}
            target="_blank"
            rel="noreferrer"
            aria-label="Ask for a sample fabric on WhatsApp"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:scale-105 shadow-soft transition-transform"
          >
            <WhatsApp className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">Ask for a sample fabric</span>
            <span className="lg:hidden">Sample</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
