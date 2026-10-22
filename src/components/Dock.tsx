import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ClipboardList, LayoutGrid, MessageCircle, Phone } from "lucide-react";
import { TEL, waLink } from "@/lib/whatsapp";
import { openChat } from "./ChatWidget";
import WhatsApp from "./icons/WhatsApp";

const WA_MSG = "Hi Tanish Creation! I'd like to discuss a fabric printing order.";
const item =
  "press flex h-14 w-[3.9rem] flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-medium tracking-wide text-primary";

/**
 * Mobile quick-actions dock. It tucks away while the page is scrolling and slides back when idle
 * (class on <html>, so no React re-render per scroll event). The footer reserves --dock-space.
 */
export default function Dock() {
  useEffect(() => {
    const root = document.documentElement;
    let t = 0;
    const onScroll = () => {
      root.classList.add("is-scrolling");
      clearTimeout(t);
      t = window.setTimeout(() => root.classList.remove("is-scrolling"), 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return (
    <nav
      aria-label="Quick actions"
      className="pointer-events-none fixed inset-x-0 bottom-[var(--dock-gap)] z-40 flex justify-center px-3 md:hidden"
    >
      <div className="dock vt-dock pointer-events-auto flex h-[var(--dock-h)] items-center gap-0.5 rounded-[1.75rem] border border-border bg-card/95 px-1.5 shadow-warm">
        <Link to="/catalogue" className={item}>
          <LayoutGrid size={20} />
          Browse
        </Link>
        <Link to="/wholesale" className={item}>
          <ClipboardList size={20} />
          Enquire
        </Link>
        <button type="button" data-chat-toggle onClick={openChat} className={item}>
          <MessageCircle size={20} />
          Ask
        </button>
        <a
          href={waLink(WA_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="press flex h-14 w-[3.9rem] flex-col items-center justify-center gap-1 rounded-2xl bg-[#25D366] text-[10px] font-medium tracking-wide text-white"
        >
          <WhatsApp className="h-5 w-5" />
          WhatsApp
        </a>
        <a href={TEL} className={item} aria-label="Call Tanish Creation">
          <Phone size={20} />
          Call
        </a>
      </div>
    </nav>
  );
}
