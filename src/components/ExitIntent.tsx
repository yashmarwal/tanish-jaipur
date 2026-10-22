import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const SEEN = "tc_exit";

/**
 * Factory-visit nudge, shown once per visit: on desktop when the cursor leaves through the top of
 * the window; on touch devices (no cursor to track) after 10 seconds.
 */
export default function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const open = () => {
      try {
        if (sessionStorage.getItem(SEEN)) return;
        sessionStorage.setItem(SEEN, "1");
      } catch {
        /* storage blocked: show it, it just may repeat */
      }
      setShow(true);
    };
    const onLeave = (e: MouseEvent) => e.clientY <= 0 && open();
    document.addEventListener("mouseleave", onLeave);
    const touch = window.matchMedia("(hover: none)").matches;
    const timer = touch ? window.setTimeout(open, 10000) : 0;
    return () => {
      document.removeEventListener("mouseleave", onLeave);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  if (!show) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a factory visit"
      className="fixed inset-0 z-[60] bg-primary/70 flex items-center justify-center p-4 fade-up"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-card rounded-3xl max-w-md w-full p-6 sm:p-8 lg:p-10 shadow-warm relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-2"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Wait — visit us first</p>
        <h3 className="font-display text-2xl sm:text-3xl text-primary mt-3 leading-tight pr-6">
          See your fabric being printed in person.
        </h3>
        <p className="mt-4 text-foreground/70 text-sm">
          Walk our Sanganer floor, meet our printers, pick your base fabric on the spot. Free
          factory visits, scheduled around you.
        </p>
        <Link
          to="/factory-visit"
          onClick={() => setShow(false)}
          className="mt-6 inline-flex w-full justify-center bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90"
        >
          Book a Factory Visit
        </Link>
      </div>
    </div>
  );
}
