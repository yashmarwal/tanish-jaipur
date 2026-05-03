import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { g as generateDesigns } from "./catalogue-CColLUFO.mjs";
import { w as waLink, d as designInquiry } from "./router-L25_gtVd.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lenis.mjs";
function CatalogueGrid() {
  const designs = reactExports.useMemo(() => generateDesigns(90), []);
  const [selected, setSelected] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/60", children: [
          "Showing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-medium", children: designs.length }),
          " hand-picked designs from our archive"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: waLink("Hi Tanish Creation! I'd like to discuss a custom design."),
            target: "_blank",
            rel: "noreferrer",
            className: "text-sm bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:scale-105 transition-transform",
            children: "+ Custom Design"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", children: designs.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSelected(d),
            className: "group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm hover:-translate-y-1 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: d.imageUrl,
                  alt: `${d.name} — screen printed fabric design by Tanish Creation`,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-primary truncate", children: d.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60 font-mono", children: d.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-semibold", children: [
                    "Min ",
                    d.minMetres,
                    "m"
                  ] })
                ] })
              ] })
            ]
          }
        ),
        (idx + 1) % 15 === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink("Hi Tanish Creation! I'd like to discuss a custom design."),
            target: "_blank",
            rel: "noreferrer",
            className: "bg-gradient-warm text-accent-foreground rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl leading-tight", children: "Custom Design Available" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm mt-4 underline underline-offset-4", children: "Start on WhatsApp →" })
            ]
          }
        )
      ] }, d.id)) })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up",
        onClick: () => setSelected(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-warm",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] relative bg-muted overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selected.imageUrlLarge,
                    alt: `${selected.name} — screen printed fabric design`,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelected(null),
                    className: "absolute top-4 right-4 bg-card/90 rounded-full p-2 hover:bg-card",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Design" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl text-primary mt-2", children: selected.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/70", children: "Screen print on premium base fabric. Custom colourways available. Lead time 7–10 days for orders above 100 metres." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 grid grid-cols-2 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-foreground/50 text-xs uppercase", children: "Code" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-primary", children: selected.id })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-foreground/50 text-xs uppercase", children: "Min Order" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "text-primary", children: [
                      selected.minMetres,
                      " m"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: designInquiry(selected.name),
                    target: "_blank",
                    rel: "noreferrer",
                    className: "mt-8 inline-flex w-full justify-center items-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-all",
                    children: "Inquire on WhatsApp →"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function CataloguePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 lg:pt-40 pb-12 bg-gradient-cream relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.12] mix-blend-multiply", style: {
        backgroundImage: "url('/fabric-bg.jpeg')",
        backgroundSize: "360px",
        backgroundRepeat: "repeat"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "The Archive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
          "Screen-printed designs. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent", children: "Built for bulk." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-2xl", children: "Click any design for details and order on WhatsApp. Custom designs are always welcome — every fifteenth tile is a fresh canvas waiting for you." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CatalogueGrid, {})
  ] });
}
export {
  CataloguePage as component
};
