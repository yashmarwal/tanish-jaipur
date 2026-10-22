import { waLink } from "@/lib/whatsapp";
import WhatsApp from "./icons/WhatsApp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Tanish Creation! I'd like to know more about your fabrics.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tanish Creation on WhatsApp"
      className="vt-wa group safe-bottom fixed right-4 bottom-0 z-40 hidden md:right-6 md:block"
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]/40" />
        <span className="press relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          <WhatsApp className="h-7 w-7" />
        </span>
      </span>
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-medium tracking-[0.18em] text-foreground uppercase opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 xl:block">
        WhatsApp Us
      </span>
    </a>
  );
}
