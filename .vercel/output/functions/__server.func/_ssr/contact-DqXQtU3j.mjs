import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PHONE_DISPLAY, E as EMAIL, I as INSTAGRAM, w as waLink } from "./router-L25_gtVd.mjs";
import { P as Phone, c as MessageCircle, a as Mail, I as Instagram, b as MapPin } from "../_libs/lucide-react.mjs";
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
function Contact() {
  const items = [{
    I: Phone,
    k: "Call",
    v: PHONE_DISPLAY,
    href: `tel:+918302430391`
  }, {
    I: MessageCircle,
    k: "WhatsApp",
    v: PHONE_DISPLAY,
    href: waLink("Hi Tanish Creation!")
  }, {
    I: Mail,
    k: "Email",
    v: EMAIL,
    href: `mailto:${EMAIL}`
  }, {
    I: Instagram,
    k: "Instagram",
    v: "@tanishcreation.co",
    href: INSTAGRAM
  }, {
    I: MapPin,
    k: "Location",
    v: "Ward no 36 saipura sanganer jaipur behind the homeopathic university"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-gradient-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 lg:px-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
      "Let's print something ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent", children: "beautiful" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-xl mx-auto", children: "We reply fastest on WhatsApp. Quotes typically within 2 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left", children: items.map((it) => {
      const Inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all hover:-translate-y-1 shadow-soft h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.I, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-foreground/50", children: it.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary mt-1 break-all", children: it.v })
      ] });
      return it.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: it.href, target: it.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", children: Inner }, it.k) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Inner }, it.k);
    }) })
  ] }) });
}
export {
  Contact as component
};
