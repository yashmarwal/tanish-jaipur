// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel-targeted build: disables the Cloudflare plugin and switches the
// TanStack Start server build to the Vercel adapter so `vercel build` /
// `vercel deploy` work out of the box. Locally, dev still works as before.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
  vite: {
    plugins: [nitro()]
  }
});
