import { Link } from "@tanstack/react-router";
import { Home, Info, LayoutGrid, Newspaper, Factory, Phone } from "lucide-react";

const dockLinks = [
  { to: "/", label: "Home", icon: Home, core: true },
  { to: "/about", label: "About", icon: Info, core: false },
  { to: "/catalogue", label: "Catalogue", icon: LayoutGrid, core: true },
  { to: "/blog", label: "Blog", icon: Newspaper, core: true },
  { to: "/factory-visit", label: "Factory Visit", icon: Factory, core: false },
  { to: "/contact", label: "Contact", icon: Phone, core: true },
] as const;

export default function Dock() {
  return (
    <nav aria-label="Quick navigation" className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:bottom-6">
      {/* Mobile: icon-only, core links */}
      <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-background/85 p-1.5 shadow-warm backdrop-blur-lg lg:hidden">
        {dockLinks
          .filter((l) => l.core)
          .map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                activeOptions={{ exact: to === "/" }}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-foreground/60 transition-colors hover:text-accent"
                activeProps={{ className: "!bg-accent !text-accent-foreground shadow-soft" }}
              >
                <Icon size={20} />
              </Link>
            </li>
          ))}
      </ul>

      {/* Desktop: icon + label, full link set, hover-scale */}
      <ul className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/85 p-2 shadow-warm backdrop-blur-lg lg:flex">
        {dockLinks.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-all duration-200 hover:scale-105 hover:bg-accent/10 hover:text-accent"
              activeProps={{ className: "!bg-accent !text-accent-foreground shadow-soft hover:!scale-100" }}
            >
              <Icon size={16} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
