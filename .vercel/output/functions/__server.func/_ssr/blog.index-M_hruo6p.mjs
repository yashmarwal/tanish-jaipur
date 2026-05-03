import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as POSTS } from "./router-L25_gtVd.mjs";
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
import "../_libs/lucide-react.mjs";
function BlogIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Journal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance max-w-3xl", children: "Notes from the print floor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-6", children: POSTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-warm transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.coverImage, alt: p.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-accent", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-primary mt-2 group-hover:text-accent transition-colors", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/70 text-sm", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-5 inline-block text-sm text-accent", children: "Read article →" })
      ] })
    ] }, p.slug)) })
  ] }) });
}
export {
  BlogIndex as component
};
