import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import ExitIntent from "@/components/ExitIntent";
import Dock from "@/components/Dock";
import ChatWidget from "@/components/ChatWidget";
import { IntroProvider } from "@/components/Preloader";
import { SITE, organizationSchema } from "@/lib/seo";
import { SECURITY_HEADERS } from "@/lib/security";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-primary">Design not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

// Page-level title, description, canonical and OG come from each route's buildPageHead();
// only site-wide tags live here, so no route inherits another route's canonical.
export const Route = createRootRoute({
  headers: () => SECURITY_HEADERS,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE.name },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#FAF6F1" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/cormorant-normal.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/inter.woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Lock scroll for the intro overlay before first paint; the Preloader clears it.
            The setTimeout is a failsafe: if the app bundle never hydrates, the lock
            still releases and the overlay is hidden so the page stays usable. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro-playing');setTimeout(function(){d.classList.remove('intro-playing');d.classList.add('intro-done')},4000)}}catch(e){}",
          }}
        />
        <noscript>
          <style>
            {".intro-overlay{display:none!important}html.intro-playing{overflow:auto!important}"}
          </style>
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <IntroProvider>
      <SmoothScroll />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
      <Dock />
      <ExitIntent />
    </IntroProvider>
  );
}
