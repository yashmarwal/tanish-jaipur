import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import ExitIntent from "@/components/ExitIntent";
import StickyCta from "@/components/StickyCta";
import { IntroProvider } from "@/components/Preloader";
import { SITE, organizationSchema } from "@/lib/seo";

const SITE_URL = SITE.url;
const JSON_LD = organizationSchema;

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        name: "description",
        content:
          "Jaipur-based premium screen printing fabric manufacturer. 20000+ designs, bulk orders from 500 metres. 65+ years of heritage.",
      },
      {
        name: "keywords",
        content:
          "screen printing Jaipur, fabric printing manufacturer India, bulk fabric printing, Sanganer prints, screen print fabric supplier",
      },
      { name: "author", content: "Tanish Creation" },
      { property: "og:title", content: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        property: "og:description",
        content: "Premium screen printed fabrics from Jaipur. 20000+ designs, bulk from 500 metres.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Tanish Creation" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
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
          <style>{".intro-overlay{display:none!important}html.intro-playing{overflow:auto!important}"}</style>
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
      <StickyCta />
      <ExitIntent />
    </IntroProvider>
  );
}
