import { waLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Tanish Creation! I'd like to know more about your fabrics.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tanish Creation on WhatsApp"
      className="group safe-bottom fixed right-4 bottom-0 z-40 flex items-center md:right-6"
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="pulse-ring absolute inset-0 rounded-full bg-green-500/40" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-warm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12">
          <MessageCircle className="h-6 w-6" />
        </span>
      </span>
      <span className="pointer-events-none -ml-7 max-w-0 overflow-hidden rounded-r-full border-y border-r border-border bg-card py-4 text-xs font-medium tracking-[0.2em] whitespace-nowrap text-foreground uppercase opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[220px] group-hover:pr-6 group-hover:pl-9 group-hover:opacity-100">
        WhatsApp Us
      </span>
    </a>
  );
}
