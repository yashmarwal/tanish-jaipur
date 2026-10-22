import { lazy, Suspense, useCallback, useEffect, useState } from "react";

const ChatPanel = lazy(() => import("./ChatPanel"));

export const CHAT_EVENT = "tc:chat";
export const openChat = () => window.dispatchEvent(new Event(CHAT_EVENT));

/** Orb (desktop) + lazy chat panel. On phones the dock's "Ask" button opens the same panel. */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const show = () => {
      setLoaded(true);
      setOpen(true);
    };
    window.addEventListener(CHAT_EVENT, show);
    // Warm the chunk once the page is idle so the first open is instant.
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    const t = idle
      ? idle(() => import("./ChatPanel"))
      : window.setTimeout(() => import("./ChatPanel"), 3000);
    return () => {
      window.removeEventListener(CHAT_EVENT, show);
      if (!idle) clearTimeout(t);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        data-chat-toggle
        aria-label={open ? "Close chat" : "Ask Tanish Creation a question"}
        aria-expanded={open}
        onClick={() => {
          setLoaded(true);
          setOpen((v) => !v);
        }}
        className="vt-orb group press fixed right-4 bottom-[4.75rem] z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-warm ring-2 ring-card/90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 md:right-6 md:flex"
      >
        <img src="/logo-cream.png" alt="" width={30} height={30} className="h-[30px] w-[30px]" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-medium tracking-[0.18em] text-foreground uppercase opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 xl:block">
          Ask us
        </span>
      </button>
      {loaded && (
        <Suspense fallback={null}>
          <ChatPanel open={open} onClose={close} />
        </Suspense>
      )}
    </>
  );
}
