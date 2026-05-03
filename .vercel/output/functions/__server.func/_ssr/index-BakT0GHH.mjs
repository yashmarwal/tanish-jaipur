import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as About, C as Craft, P as Process } from "./Process-DhVF8Tc9.mjs";
import { g as generateDesigns } from "./catalogue-CColLUFO.mjs";
import { w as waLink } from "./router-L25_gtVd.mjs";
import { F as FactoryVisitForm } from "./FactoryVisitForm-Btxpomtn.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/gsap.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lenis.mjs";
const WORD_DELAYS = ["0ms", "120ms", "260ms", "400ms"];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] overflow-hidden pt-20 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 z-0 opacity-[0.18] mix-blend-multiply",
        style: {
          backgroundImage: "url('/fabric-bg.jpeg')",
          backgroundSize: "420px",
          backgroundRepeat: "repeat"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-accent" }),
        " Jaipur • Since 1959"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-8xl text-primary leading-[0.95] text-balance", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "reveal-line", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reveal-word", style: { animationDelay: WORD_DELAYS[0] }, children: "Where" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "reveal-word text-accent italic",
              style: { animationDelay: WORD_DELAYS[1] },
              children: "Fabric"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "reveal-line", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reveal-word", style: { animationDelay: WORD_DELAYS[2] }, children: "Meets" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "reveal-word italic shimmer-text",
              style: { animationDelay: WORD_DELAYS[3] },
              children: "Art"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg lg:text-xl text-foreground/75 max-w-xl fade-up", children: "Jaipur-based premium screen printing manufacturer. Hand-crafted designs, delivered at scale to boutiques and brands worldwide." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4 fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/catalogue",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105",
            children: "View Catalogue →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/factory-visit",
            className: "inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all",
            children: "Visit Our Factory"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-6 max-w-xl fade-up", children: [
        { n: "65+", l: "Years" },
        { n: "2000+", l: "Designs" },
        { n: "100m", l: "Min Order" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl lg:text-4xl text-primary", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1", children: s.l })
      ] }, s.l)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-foreground/40 animate-bounce", children: "Scroll" })
  ] });
}
function CataloguePreview() {
  const previews = reactExports.useMemo(() => generateDesigns(90).slice(0, 8), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-background py-24 lg:py-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "The Catalogue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl text-primary leading-tight text-balance max-w-xl", children: [
          "A glimpse of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent", children: "our archive." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/catalogue",
          className: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105",
          children: [
            "Open Full Catalogue ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: previews.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/catalogue",
        className: "group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: d.imageUrl,
              alt: `${d.name} screen printed fabric design`,
              loading: "lazy",
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-primary/80 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground font-medium", children: d.name }) })
        ]
      },
      d.id
    )) })
  ] }) });
}
function BulkOrder() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    company: "",
    design: "",
    quantity: "",
    color: "",
    notes: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const msg = `📦 BULK ORDER REQUEST

Name: ${form.name}
Phone: ${form.phone}
Company: ${form.company}
Design: ${form.design}
Quantity: ${form.quantity} metres
Color: ${form.color}
Notes: ${form.notes}`;
    window.open(waLink(msg), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Bulk Manufacturing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
        "Built for bulk.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent", children: "Crafted for growth." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: [
        ["Minimum order", "100 metres"],
        ["Lead time", "7–10 days"],
        ["Capacity", "15,000 metres / day"],
        ["Designs", "2000+"]
      ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-baseline justify-between border-b border-border pb-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-wider text-foreground/60", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-primary", children: v })
          ]
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: submit,
        className: "bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-warm space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary mb-2", children: "Get a Bulk Quote" }),
          [
            { k: "name", p: "Your name", req: true },
            { k: "phone", p: "Phone number", req: true },
            { k: "company", p: "Company / brand" },
            { k: "design", p: "Design name or code" }
          ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: f.req,
              maxLength: 120,
              placeholder: f.p,
              value: form[f.k],
              onChange: (e) => setForm({ ...form, [f.k]: e.target.value }),
              className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            },
            f.k
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                maxLength: 20,
                placeholder: "Quantity (m)",
                value: form.quantity,
                onChange: (e) => setForm({ ...form, quantity: e.target.value }),
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                maxLength: 50,
                placeholder: "Preferred color",
                value: form.color,
                onChange: (e) => setForm({ ...form, color: e.target.value }),
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              placeholder: "Notes (optional)",
              maxLength: 500,
              value: form.notes,
              onChange: (e) => setForm({ ...form, notes: e.target.value }),
              rows: 3,
              className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none resize-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-[1.01]",
              children: "Get Quote on WhatsApp →"
            }
          )
        ]
      }
    )
  ] }) });
}
const REVIEWS = [
  {
    name: "Aanya Sharma",
    role: "Founder, Loom & Lily",
    text: "Tanish has been our printing partner for three drops now. The colour consistency across 800m runs is unreal."
  },
  {
    name: "Rohan Mehta",
    role: "Buyer, House of Khanak",
    text: "We get 100m sample runs treated with the same care as 5000m bulk. That's rare in Jaipur."
  },
  {
    name: "Priya Iyer",
    role: "D2C Brand Lead",
    text: "Their archive saved us months of design work. We picked 12 jaals and went straight to production."
  },
  {
    name: "Vikram Singh",
    role: "Wholesaler, Kolkata",
    text: "Lead times are honest. 8 days quoted, 8 days delivered. Every. Single. Time."
  },
  {
    name: "Meera Joshi",
    role: "Studio Director",
    text: "Custom colourways nailed on the first strike-off. Their colour mixer is a wizard."
  },
  {
    name: "Arjun Kapoor",
    role: "Boutique Owner, Mumbai",
    text: "The hand-feel of their cotton prints is in another league. My customers ask where it's printed."
  }
];
function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 lg:py-32 bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Trusted by brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-6xl text-primary text-balance", children: "What our partners say." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 marquee w-max", children: loop.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: "w-[340px] sm:w-[420px] shrink-0 bg-card border border-border rounded-3xl p-8 shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-xl text-primary leading-snug", children: [
            "“",
            r.text,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display text-lg", children: r.name[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-primary", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/60", children: r.role })
            ] })
          ] })
        ]
      },
      i
    )) }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Craft, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CataloguePreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BulkOrder, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Factory Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-6xl text-primary leading-tight text-balance", children: "Come see how your fabric is made." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 text-lg max-w-md", children: "Walk our Sanganer floor, meet the printers behind your order, and pick your base fabric on the spot. Visits are free and scheduled around you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryVisitForm, {})
    ] }) })
  ] });
}
export {
  Index as component
};
