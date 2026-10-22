import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Send, X } from "lucide-react";
import { SUGGESTIONS, answer, sentences, type Reply } from "@/lib/chat";
import { EASE_UI } from "./motion";

type Msg = { id: number; role: "bot" | "user"; lines: string[]; links?: Reply["links"] };

const GREETING: Msg = {
  id: 0,
  role: "bot",
  lines: [
    "Hello, I'm the Tanish Creation assistant.",
    "Ask me about minimum orders, lead time, samples or visiting the factory.",
  ],
};

const TYPING_MS = 3000;
const SENTENCE_MS = 850;

export default function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = useReducedMotion();
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState("");
  const timers = useRef<number[]>([]);
  const scroller = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    // Any press outside the panel closes it. The buttons that toggle the chat are exempt, otherwise
    // pressing them would close the panel on pointerdown and immediately reopen it on click.
    const onOutside = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (panel.current?.contains(t) || t?.closest("[data-chat-toggle]")) return;
      onClose();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open, onClose]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const ask = (q: string) => {
    const question = q.trim().slice(0, 200);
    if (!question || typing) return;
    const reply = answer(question);
    const lines = sentences(reply.text);
    const id = nextId.current++;
    setMsgs((m) => [...m, { id, role: "user", lines: [question] }]);
    setText("");
    setTyping(true);
    // A short "writing…" pause, then the answer lands one sentence at a time.
    later(
      () => {
        setTyping(false);
        const botId = nextId.current++;
        setMsgs((m) => [...m, { id: botId, role: "bot", lines: [lines[0]] }]);
        lines
          .slice(1)
          .forEach((line, i) =>
            later(
              () =>
                setMsgs((m) =>
                  m.map((x) => (x.id === botId ? { ...x, lines: [...x.lines, line] } : x)),
                ),
              (reduced ? 150 : SENTENCE_MS) * (i + 1),
            ),
          );
        if (reply.links)
          later(
            () => setMsgs((m) => m.map((x) => (x.id === botId ? { ...x, links: reply.links } : x))),
            (reduced ? 150 : SENTENCE_MS) * lines.length,
          );
      },
      reduced ? 500 : TYPING_MS,
    );
  };

  const showChips = msgs.length === 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          ref={panel}
          key="chat"
          role="dialog"
          aria-label="Ask Tanish Creation"
          className="vt-chat fixed inset-x-3 bottom-[var(--dock-space)] z-[65] flex h-[min(34rem,calc(100svh-var(--dock-space)-5.5rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-warm md:inset-x-auto md:right-6 md:bottom-[9.25rem] md:h-[min(32rem,calc(100svh-12rem))] md:w-[22rem]"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.28, ease: EASE_UI }}
        >
          <header className="flex shrink-0 items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
            <img src="/logo-cream.png" alt="" width={28} height={28} className="h-7 w-7" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg leading-tight">Ask Tanish Creation</p>
              <p className="truncate text-[11px] text-primary-foreground/70">
                Answers from our own terms
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="press flex h-9 w-9 items-center justify-center rounded-full hover:bg-primary-foreground/10"
            >
              <X size={18} />
            </button>
          </header>

          <div
            ref={scroller}
            data-lenis-prevent
            className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
            aria-live="polite"
          >
            {msgs.map((m) => (
              <div
                key={m.id}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={`max-w-[85%] space-y-1.5 rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-accent text-accent-foreground"
                      : "rounded-bl-md bg-muted text-foreground"
                  }`}
                >
                  {m.lines.map((l, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {l}
                    </motion.p>
                  ))}
                  {m.links && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {m.links.map((l) =>
                        l.href.startsWith("/") ? (
                          <Link
                            key={l.label}
                            to={l.href}
                            onClick={onClose}
                            className="rounded-full border border-accent/50 px-3 py-1 text-xs font-medium text-accent"
                          >
                            {l.label}
                          </Link>
                        ) : (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-accent/50 px-3 py-1 text-xs font-medium text-accent"
                          >
                            {l.label}
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start" role="status" aria-label="Writing a reply">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-muted px-3.5 py-3 text-xs text-foreground/60">
                  <span>writing</span>
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1 w-1 rounded-full bg-foreground/50"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                    />
                  ))}
                </div>
              </div>
            )}
            {showChips && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="press rounded-full border border-border bg-background px-3 py-1.5 text-xs text-primary hover:border-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(text);
            }}
            className="flex shrink-0 items-center gap-2 border-t border-border bg-card px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={200}
              placeholder="Type your question"
              aria-label="Type your question"
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-base outline-none focus:border-accent sm:text-sm"
            />
            <button
              type="submit"
              disabled={typing || !text.trim()}
              aria-label="Send"
              className="press flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
