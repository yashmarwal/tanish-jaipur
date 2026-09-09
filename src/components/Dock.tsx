import { Link, useRouterState } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import { Home, Info, LayoutGrid, Newspaper, Factory, Phone } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsApp";

const dockLinks = [
  { to: "/", label: "Home", icon: Home, core: true },
  { to: "/about", label: "About", icon: Info, core: false },
  { to: "/catalogue", label: "Catalogue", icon: LayoutGrid, core: true },
  { to: "/blog", label: "Blog", icon: Newspaper, core: true },
  { to: "/factory-visit", label: "Factory Visit", icon: Factory, core: false },
  { to: "/contact", label: "Contact", icon: Phone, core: true },
] as const;

const whatsAppHref = waLink("Hi Tanish Creation! I'd like to know more about your fabrics.");

export default function Dock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string, exact: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav aria-label="Quick navigation" className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:bottom-6">
      {/* Mobile: compact icon-only pills that expand into a label when active */}
      <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-background/90 p-1.5 shadow-warm backdrop-blur-lg lg:hidden">
        {dockLinks
          .filter((l) => l.core)
          .map(({ to, label, icon: Icon }) => {
            const active = isActive(to, to === "/");
            return (
              <li key={to}>
                <Link
                  to={to}
                  aria-label={label}
                  className={`flex h-11 items-center justify-center gap-1.5 rounded-full text-foreground/55 transition-all duration-300 ${
                    active
                      ? "bg-accent px-3.5 text-accent-foreground shadow-soft"
                      : "w-11 hover:text-accent"
                  }`}
                >
                  <Icon size={19} className="shrink-0" />
                  {active && <span className="text-xs font-medium whitespace-nowrap">{label}</span>}
                </Link>
              </li>
            );
          })}
        <li>
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform active:scale-95"
          >
            <WhatsAppIcon size={19} />
          </a>
        </li>
      </ul>

      {/* Desktop: icon + label, full link set, hover-scale, plus a direct WhatsApp action */}
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
        <li>
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
