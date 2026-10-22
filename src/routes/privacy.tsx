import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead } from "@/lib/seo";
import { EMAIL, PHONE_DISPLAY } from "@/lib/whatsapp";
import Legal from "@/components/Legal";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildPageHead({
      title: "Privacy Policy | Tanish Creation",
      description: "What Tanish Creation collects through this website, and what it does not.",
      path: "/privacy",
      jsonLd: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/privacy" },
      ]),
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      intro="This site is a catalogue and enquiry tool. It keeps very little about you."
      updated="22 October 2026"
    >
      <div>
        <h2>What we collect</h2>
        <p>
          The enquiry forms on this site (bulk quote, factory visit) do not send your details to a
          server of ours. When you press the button, the site builds a message from what you typed
          and opens WhatsApp, or you can use the email link beside it. We only receive the details
          once you send that message.
        </p>
      </div>
      <div>
        <h2>What the site stores</h2>
        <ul>
          <li>
            One flag in your browser&apos;s session storage so the factory-visit pop-up shows once
            per visit. It is cleared when you close the tab.
          </li>
          <li>Nothing else. We do not run analytics, advertising or tracking scripts.</li>
        </ul>
      </div>
      <div>
        <h2>Third parties</h2>
        <p>
          Links to WhatsApp and Instagram take you to those services, which have their own privacy
          policies. Fonts and images on this site are served from our own domain.
        </p>
      </div>
      <div>
        <h2>Messages you send us</h2>
        <p>
          Details you send by WhatsApp, phone or email are used to answer your enquiry, prepare a
          quote and arrange a visit. We do not sell them. To ask us to delete a conversation, write
          to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE_DISPLAY}.
        </p>
      </div>
    </Legal>
  );
}
