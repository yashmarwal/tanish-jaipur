import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route, a as POSTS } from "./router-DdVPwiZD.mjs";
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
function BlogPost() {
  const {
    post
  } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative pt-32 lg:pt-44 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.coverImage, alt: "", className: "absolute inset-0 w-full h-full object-cover z-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/75 backdrop-blur-lg z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-7xl text-primary leading-[1] text-balance", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/75", children: post.excerpt })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 lg:px-10 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-lg space-y-6 text-lg text-foreground/85 leading-relaxed", children: post.body.map((block, i) => {
        if (typeof block === "string") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:leading-none" : "", dangerouslySetInnerHTML: {
            __html: block
          } }, i);
        }
        if (block.type === "h2") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-primary mt-12 mb-4", children: block.content }, i);
        }
        if (block.type === "h3") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary mt-8 mb-3", children: block.content }, i);
        }
        if (block.type === "ul") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-6 space-y-2 my-6", children: block.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dangerouslySetInnerHTML: {
            __html: item
          } }, j)) }, i);
        }
        if (block.type === "image") {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "my-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: block.src, alt: block.alt, className: "w-full rounded-2xl object-cover shadow-soft" }),
            block.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "text-center text-sm text-foreground/60 mt-3", children: block.caption })
          ] }, i);
        }
        return null;
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-16 border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-6", children: "Keep reading" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: others.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.coverImage, alt: p.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-primary group-hover:text-accent transition-colors", children: p.title }) })
        ] }, p.slug)) })
      ] })
    ] })
  ] });
}
export {
  BlogPost as component
};
