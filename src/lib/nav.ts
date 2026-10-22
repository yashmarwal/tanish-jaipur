/** Primary navigation, shared by the header pill, the mobile menu and the footer. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

/** Secondary destinations: in the mobile menu and footer, not the desktop pill. */
export const NAV_MORE = [
  { to: "/wholesale", label: "Wholesale" },
  { to: "/factory-visit", label: "Factory Visit" },
  { to: "/faq", label: "FAQ" },
] as const;

export const LEGAL_LINKS = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export const isActivePath = (pathname: string, to: string) =>
  to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
