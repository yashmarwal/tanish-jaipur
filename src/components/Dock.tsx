import { Link, useRouterState } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import { Home, Info, LayoutGrid, Newspaper, Factory, Phone } from "lucide-react";

const dockLinks = [
  { to: "/", label: "Home", icon: Home, core: true },
  { to: "/about", label: "About", icon: Info, core: false },
  { to: "/catalogue", label: "Catalogue", icon: LayoutGrid, core: true },
  { to: "/blog", label: "Blog", icon: Newspaper, core: true },
  { to: "/factory-visit", label: "Factory Visit", icon: Factory, core: false },
  { to: "/contact", label: "Contact", icon: Phone, core: true },
] as const;

function WhatsAppIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white transition-transform active:scale-95"
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
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
