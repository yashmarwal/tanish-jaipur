import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Expand, Mail, X } from "lucide-react";
import {
  categories,
  countByCategory,
  designs,
  largeUrl,
  thumbUrl,
  type Design,
  type DesignCategory,
} from "@/lib/catalogue";
import { TERMS } from "@/lib/terms";
import { designInquiry, designMail, waLink } from "@/lib/whatsapp";
import WhatsApp from "./icons/WhatsApp";

const BATCH = 24;
const CUSTOM_EVERY = 15;
const LEAD_SHORT = TERMS.leadTime.replace(" days", " d");

// Very narrow cards stack the two tiles as label/value rows; wider ones show them side by side.
function Tile({
  short,
  long,
  value,
  valueShort,
}: {
  short: string;
  long: string;
  value: string;
  valueShort?: string;
}) {
  return (
    <div className="flex min-w-0 items-baseline justify-between gap-2 rounded-xl bg-muted/70 px-2.5 py-1.5 @[9.25rem]:block @[9.25rem]:px-2 @[12rem]:px-2.5">
      <p className="truncate text-[9px] tracking-[0.12em] text-foreground/50 uppercase">
        <span className="@[12rem]:hidden">{short}</span>
        <span className="hidden @[12rem]:inline">{long}</span>
      </p>
      <p className="tabular shrink-0 text-[clamp(0.7rem,6.6cqw,0.875rem)] font-semibold whitespace-nowrap text-primary">
        {valueShort ? (
          <>
            <span className="@[12rem]:hidden">{valueShort}</span>
            <span className="hidden @[12rem]:inline">{value}</span>
          </>
        ) : (
          value
        )}
      </p>
    </div>
  );
}

function DesignCard({ d, onOpen }: { d: Design; onOpen: (id: string) => void }) {
  return (
    <article className="group @container flex h-full flex-col rounded-3xl border border-border bg-card p-2 shadow-soft transition-shadow hover:shadow-warm">
      <button
        type="button"
        onClick={() => onOpen(d.id)}
        aria-label={`View ${d.name}`}
        className="press relative block aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
      >
        <img
          src={thumbUrl(d)}
          alt={`${d.name} — screen printed fabric design by Tanish Creation`}
          width={480}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 rounded-full bg-card/90 px-2 py-0.5 text-[9px] tracking-[0.14em] text-primary uppercase">
          {d.category}
        </span>
        <span className="absolute top-2 right-2 hidden rounded-full bg-primary/85 px-2 py-0.5 font-mono text-[9px] text-primary-foreground @[12rem]:block">
          {d.code}
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-2 px-1.5 pt-3 pb-1">
        <div className="grid grid-cols-1 gap-1.5 @[9.25rem]:grid-cols-2">
          <Tile short="Min" long="Min order" value={`${d.minMetres} m`} />
          <Tile short="Lead" long="Lead time" value={TERMS.leadTime} valueShort={LEAD_SHORT} />
        </div>
        <h3 className="font-display line-clamp-2 min-h-[2.5em] text-[clamp(0.95rem,7.5cqw,1.2rem)] leading-tight text-primary">
          {d.name}
        </h3>
        {/* Pinned to the card bottom so buttons line up across the grid row */}
        <div className="mt-auto flex items-center gap-1.5 pt-1">
          <a
            href={designInquiry(d.name, d.id, d.imageUrl)}
            target="_blank"
            rel="noreferrer"
            className="press flex h-10 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-3 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <WhatsApp className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Enquire</span>
          </a>
          <button
            type="button"
            onClick={() => onOpen(d.id)}
            aria-label={`Open details for ${d.name}`}
            className="press hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary hover:border-accent @[11rem]:flex"
          >
            <Expand size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}

function CustomCard() {
  return (
    <a
      href={waLink("Hi Tanish Creation! I'd like to discuss a custom design.")}
      target="_blank"
      rel="noreferrer"
      className="press flex h-full min-h-48 flex-col justify-between rounded-3xl bg-primary p-5 text-primary-foreground transition-transform hover:scale-[1.02]"
    >
      <p className="font-display text-2xl leading-tight">Custom Design Available</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm">
        <WhatsApp className="h-4 w-4" /> Start on WhatsApp
      </span>
    </a>
  );
}

function DesignDialog({
  design,
  index,
  total,
  onStep,
  onClose,
}: {
  design: Design;
  index: number;
  total: number;
  onStep: (dir: -1 | 1) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onStep(-1);
      if (e.key === "ArrowRight") onStep(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onStep]);

  const nav =
    "press absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow-soft hover:bg-card";

  return (
    <Dialog.Root open onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-primary/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-x-3 bottom-3 z-[81] max-h-[88svh] overflow-y-auto overscroll-contain rounded-3xl bg-card shadow-warm outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-6 md:inset-auto md:top-1/2 md:left-1/2 md:max-h-[90svh] md:w-[min(64rem,94vw)] md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-hidden md:data-[state=open]:slide-in-from-bottom-0"
          data-lenis-prevent
        >
          <div className="md:grid md:grid-cols-[1.1fr_1fr]">
            <div className="relative aspect-[4/3] bg-muted md:aspect-auto md:min-h-[34rem]">
              <img
                key={design.id}
                src={largeUrl(design)}
                alt={`${design.name} — screen printed fabric design`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Previous design"
                onClick={() => onStep(-1)}
                className={`${nav} left-3`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next design"
                onClick={() => onStep(1)}
                className={`${nav} right-3`}
              >
                <ChevronRight size={20} />
              </button>
              <span className="tabular absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs text-primary">
                {index + 1} / {total}
              </span>
              <Dialog.Close
                aria-label="Close"
                className="press absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-primary md:hidden"
              >
                <X size={18} />
              </Dialog.Close>
            </div>

            <div className="relative p-6 md:p-10">
              <Dialog.Close
                aria-label="Close"
                className="press absolute top-5 right-5 hidden h-10 w-10 items-center justify-center rounded-full border border-border text-primary md:flex"
              >
                <X size={18} />
              </Dialog.Close>
              <p className="text-xs tracking-[0.3em] text-accent uppercase">{design.category}</p>
              <Dialog.Title className="font-display mt-2 pr-10 text-3xl text-primary md:text-4xl">
                {design.name}
              </Dialog.Title>
              <p className="mt-3 text-sm text-foreground/70 md:text-base">
                Screen print on premium base fabric. Custom colourways available. Lead time{" "}
                {TERMS.leadTime} for orders above {TERMS.minMetres} metres.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Code", design.code],
                  ["Category", design.category],
                  ["Min order", `${design.minMetres} m`],
                  ["Lead time", TERMS.leadTime],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-muted/70 px-3 py-2">
                    <dt className="text-[10px] tracking-wider text-foreground/50 uppercase">{k}</dt>
                    <dd className="tabular text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={designInquiry(design.name, design.id, design.imageUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="sweep press flex h-12 items-center justify-center gap-2 rounded-full bg-accent font-medium text-accent-foreground"
                >
                  <WhatsApp className="h-4 w-4" /> Enquire on WhatsApp
                </a>
                <a
                  href={designMail(design.name, design.id, design.imageUrl)}
                  className="press flex h-12 items-center justify-center gap-2 rounded-full border border-border font-medium text-primary hover:border-accent"
                >
                  <Mail size={16} /> Email an enquiry
                </a>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function CatalogueGrid() {
  const { category = "All", design: openId } = useSearch({ from: "/catalogue" });
  const navigate = useNavigate({ from: "/catalogue" });
  const listTop = useRef<HTMLDivElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  const openedByUs = useRef(false);
  const prevCategory = useRef(category);
  const [visible, setVisible] = useState(BATCH);

  const list = useMemo(
    () => (category === "All" ? designs : designs.filter((d) => d.category === category)),
    [category],
  );
  const selected = openId ? designs.find((d) => d.id === openId) : undefined;
  const ring = list.some((d) => d.id === openId) ? list : designs;
  const index = selected ? ring.findIndex((d) => d.id === selected.id) : -1;

  // New category: start from the first batch and from the top of the list, not wherever we were.
  useEffect(() => {
    setVisible(BATCH);
    if (prevCategory.current !== category) {
      prevCategory.current = category;
      const el = listTop.current;
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" });
    }
  }, [category]);

  // Render long lists in batches as the sentinel nears the viewport.
  useEffect(() => {
    const el = sentinel.current;
    if (!el || visible >= list.length) return;
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && setVisible((v) => Math.min(v + BATCH, list.length)),
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, list.length]);

  useEffect(() => {
    if (!openId) openedByUs.current = false;
  }, [openId]);

  // Opening pushes a history entry so the back gesture closes the viewer; stepping replaces it.
  const open = useCallback(
    (id: string) => {
      openedByUs.current = true;
      navigate({ search: (p) => ({ ...p, design: id }), resetScroll: false });
    },
    [navigate],
  );
  const close = useCallback(() => {
    if (openedByUs.current) window.history.back();
    else
      navigate({ search: (p) => ({ ...p, design: undefined }), replace: true, resetScroll: false });
  }, [navigate]);
  const step = useCallback(
    (dir: -1 | 1) => {
      const n = ring[(index + dir + ring.length) % ring.length];
      navigate({ search: (p) => ({ ...p, design: n.id }), replace: true, resetScroll: false });
    },
    [navigate, ring, index],
  );

  // Warm the neighbours so prev/next feels instant.
  useEffect(() => {
    if (index < 0) return;
    [-1, 1].forEach((d) => {
      const n = ring[(index + d + ring.length) % ring.length];
      new Image().src = largeUrl(n);
    });
  }, [index, ring]);

  const shown = list.slice(0, visible);

  return (
    <div className="bg-background">
      <div className="sticky top-16 z-30 border-b border-border/60 bg-background/95 lg:top-20">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 lg:px-10">
          <div
            data-lenis-prevent
            className="no-scrollbar -mx-1 flex flex-1 gap-2 overflow-x-auto px-1"
            role="tablist"
            aria-label="Design categories"
          >
            {categories.map((c: DesignCategory) => {
              const active = c === category;
              return (
                <Link
                  key={c}
                  to="/catalogue"
                  search={{ category: c === "All" ? undefined : c }}
                  resetScroll={false}
                  role="tab"
                  aria-selected={active}
                  className={`press shrink-0 rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/80 hover:border-accent"
                  }`}
                >
                  {c} <span className="tabular opacity-60">{countByCategory(c)}</span>
                </Link>
              );
            })}
          </div>
          <a
            href={waLink("Hi Tanish Creation! I'd like to discuss a custom design.")}
            target="_blank"
            rel="noreferrer"
            className="press hidden shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground md:inline-flex"
          >
            <WhatsApp className="h-4 w-4" /> Custom Design
          </a>
        </div>
      </div>

      <div
        ref={listTop}
        className="mx-auto max-w-7xl scroll-mt-32 px-6 py-8 lg:px-10 lg:scroll-mt-40"
      >
        <p
          className="tabular mb-5 text-xs tracking-[0.2em] text-foreground/50 uppercase"
          aria-live="polite"
        >
          Showing {shown.length} of {list.length} designs
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {shown.map((d, i) => (
            <div key={d.id} className="contents">
              <DesignCard d={d} onOpen={open} />
              {(i + 1) % CUSTOM_EVERY === 0 && <CustomCard />}
            </div>
          ))}
        </div>
        {visible < list.length && (
          <div ref={sentinel} className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + BATCH, list.length))}
              className="press rounded-full border border-border px-6 py-3 text-sm text-primary hover:border-accent"
            >
              Show more designs
            </button>
          </div>
        )}
      </div>

      {selected && (
        <DesignDialog
          design={selected}
          index={index}
          total={ring.length}
          onStep={step}
          onClose={close}
        />
      )}
    </div>
  );
}
