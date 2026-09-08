import { waLink } from "@/lib/whatsapp";
import WhatsApp from "./icons/WhatsApp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Tanish Creation! I'd like to know more about your fabrics.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tanish Creation on WhatsApp"
      className="group safe-bottom fixed right-4 bottom-0 z-40 hidden items-center md:right-6 md:flex"
    >
      <span className="relative flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
        <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]/40" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 md:h-14 md:w-14">
          <WhatsApp className="h-6 w-6 md:h-7 md:w-7" />
        </span>
      </span>
      <span className="pointer-events-none -ml-7 hidden max-w-0 overflow-hidden rounded-r-full border-y border-r border-border bg-card py-4 text-xs font-medium tracking-[0.2em] whitespace-nowrap text-foreground uppercase opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[220px] group-hover:pr-6 group-hover:pl-9 group-hover:opacity-100 md:block">
        WhatsApp Us
      </span>
    </a>
  );
}
