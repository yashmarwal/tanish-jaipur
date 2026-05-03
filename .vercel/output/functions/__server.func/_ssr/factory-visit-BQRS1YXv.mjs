import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FactoryVisitForm } from "./FactoryVisitForm-Btxpomtn.mjs";
import { b as MapPin, C as Clock, U as Users } from "../_libs/lucide-react.mjs";
import "./router-L25_gtVd.mjs";
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
function VisitPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Factory Visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
        "See your fabric, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent", children: "before" }),
        " it's yours."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-md", children: "A factory visit is the fastest way to understand how Sanganer screen printing actually works — and to see whether we're the right partner for you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-5", children: [{
        I: MapPin,
        k: "Location",
        v: "Sanganer, Jaipur, Rajasthan"
      }, {
        I: Clock,
        k: "Visit hours",
        v: "Mon–Sat, 10am – 5pm"
      }, {
        I: Users,
        k: "Group size",
        v: "Up to 20 visitors per slot"
      }].map(({
        I,
        k,
        v
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-foreground/50", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-lg", children: v })
        ] })
      ] }, k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryVisitForm, {})
  ] }) });
}
export {
  VisitPage as component
};
