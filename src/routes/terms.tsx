import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, buildPageHead } from "@/lib/seo";
import { EMAIL } from "@/lib/whatsapp";
import Legal from "@/components/Legal";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildPageHead({
      title: "Terms of Use | Tanish Creation",
      description:
        "Terms for using the Tanish Creation website and how quotes and orders are confirmed.",
      path: "/terms",
      jsonLd: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Terms", path: "/terms" },
      ]),
    }),
  component: Terms,
});

function Terms() {
  return (
    <Legal
      title="Terms of Use"
      intro="Plain terms for using this website and for how an enquiry becomes an order."
      updated="22 October 2026"
    >
      <div>
        <h2>About this site</h2>
        <p>
          This website is operated by Tanish Creation, Sanganer, Jaipur, Rajasthan, India. It
          presents our designs and terms and lets you start an enquiry. It is not an online shop:
          nothing is bought or paid for here.
        </p>
      </div>
      <div>
        <h2>Quotes and orders</h2>
        <p>
          Prices, lead times and the minimum order shown or quoted in chat are guides. An order is
          confirmed only when we agree the design, quantity, price and dates with you in writing
          (WhatsApp or email) and you approve the strike-off. Shipping and payment terms are agreed
          per order. See the <Link to="/faq">FAQ</Link> for the usual terms.
        </p>
      </div>
      <div>
        <h2>Designs and images</h2>
        <p>
          Designs, photographs, text and the Tanish Creation mark on this site belong to us. Please
          do not copy or reuse them without our written permission. Artwork you send us stays yours.
        </p>
      </div>
      <div>
        <h2>Accuracy</h2>
        <p>
          We take care to keep the site accurate, but screens show colour differently from printed
          fabric. Ask for a sample before a bulk order. We may update the site and these terms at
          any time; the date below shows the latest version.
        </p>
      </div>
      <div>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    </Legal>
  );
}
