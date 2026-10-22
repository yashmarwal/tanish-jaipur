import { useRef, useState } from "react";
import { EMAIL, mailLink, waLink } from "@/lib/whatsapp";

type Status = "idle" | "opened" | "blocked";

/**
 * Enquiry forms hand off to WhatsApp (there is no form backend). This keeps what the visitor
 * typed whatever happens, ignores double-submits for a few seconds, drops honeypot hits, and
 * falls back to a tappable link if the browser blocks the pop-up.
 */
export function useEnquiry(subject: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [href, setHref] = useState("");
  const last = useRef(0);

  const send = (message: string, honeypot: string) => {
    if (honeypot) return; // a bot filled the hidden field: pretend nothing happened
    if (Date.now() - last.current < 3000) return; // double-tap guard
    last.current = Date.now();
    const url = waLink(message);
    setHref(url);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    setStatus(win ? "opened" : "blocked");
  };

  const mail = (body: string) => mailLink(subject, body);
  return { status, href, send, mail };
}

/** Hidden field real people never see; bots tend to fill it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export function FormStatus({
  status,
  href,
  mailHref,
}: {
  status: Status;
  href: string;
  mailHref: string;
}) {
  const link = "text-accent underline underline-offset-2";
  return (
    <div aria-live="polite" className="min-h-5 text-center text-xs text-foreground/70">
      {status === "opened" && (
        <p>
          WhatsApp opened with your details. Press send there to finish.{" "}
          <a className={link} href={href} target="_blank" rel="noreferrer">
            Open again
          </a>
        </p>
      )}
      {status === "blocked" && (
        <p role="alert">
          Your browser blocked the pop-up.{" "}
          <a className={link} href={href} target="_blank" rel="noreferrer">
            Tap to open WhatsApp
          </a>
        </p>
      )}
      {status === "idle" && (
        <p>
          Prefer email?{" "}
          <a className={link} href={mailHref}>
            {EMAIL}
          </a>
        </p>
      )}
    </div>
  );
}
