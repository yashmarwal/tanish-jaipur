import { FAQ } from "./faq";
import { EMAIL, PHONE_DISPLAY, waLink } from "./whatsapp";
import { TERMS, fmtNum } from "./terms";

export type Reply = { text: string; links?: { label: string; href: string }[] };

type Entry = { keys: string[]; reply: Reply };

const faq = (i: number) => FAQ[i].a;
const wa = (label: string, msg: string) => ({ label, href: waLink(msg) });

/**
 * Curated knowledge base. Every answer is built from the same terms and FAQ the site shows, so the
 * assistant cannot drift from the rest of the site. Anything not covered hands off to the team.
 */
const KB: Entry[] = [
  {
    keys: ["minimum", "moq", "min order", "how many", "least", "smallest", "quantity"],
    reply: {
      text: faq(0),
      links: [wa("Start a bulk quote", "Hi Tanish Creation! I'd like a bulk quote.")],
    },
  },
  {
    keys: ["lead", "how long", "delivery time", "turnaround", "ready", "days", "time take"],
    reply: { text: faq(1) },
  },
  {
    keys: ["sample", "swatch", "quality check", "test"],
    reply: {
      text: faq(2),
      links: [
        wa(
          "Ask for a sample",
          "Hi Tanish Creation! I would like to ask for a sample fabric for a quality check.",
        ),
      ],
    },
  },
  {
    keys: [
      "custom",
      "own design",
      "my design",
      "artwork",
      "sketch",
      "logo",
      "colourway",
      "colorway",
    ],
    reply: {
      text: faq(3),
      links: [
        wa("Discuss a custom design", "Hi Tanish Creation! I'd like to discuss a custom design."),
      ],
    },
  },
  {
    keys: ["fabric", "cotton", "linen", "rayon", "silk", "material", "base cloth"],
    reply: { text: faq(4) },
  },
  {
    keys: ["capacity", "volume", "per day", "scale", "how much can"],
    reply: { text: faq(5) },
  },
  {
    keys: [
      "process",
      "steps",
      "how is it made",
      "how do you",
      "screen",
      "strike-off",
      "strike off",
      "manufactur",
    ],
    reply: {
      text: "Every order runs in five steps. First we approve the design with a strike-off. Then each colour gets its own hand-coated screen. Pigments are hand-mixed against your reference and logged for repeat orders. Tables of up to 60 metres are printed by hand, and every roll is checked against the approved strike-off before it ships.",
    },
  },
  {
    keys: ["visit", "factory", "tour", "hours", "timing", "open", "see the"],
    reply: {
      text: faq(6),
      links: [{ label: "Book a visit", href: "/factory-visit" }],
    },
  },
  {
    keys: [
      "ship",
      "shipping",
      "export",
      "courier",
      "freight",
      "payment",
      "pay ",
      "advance",
      "invoice",
      "gst",
      "terms",
    ],
    reply: {
      text: faq(7),
      links: [
        wa(
          "Ask about shipping or payment",
          "Hi Tanish Creation! I have a question about shipping and payment.",
        ),
      ],
    },
  },
  {
    keys: ["price", "cost", "rate", "quote", "quotation", "how much", "pricing"],
    reply: {
      text: `Pricing depends on the design, fabric, number of colours and quantity, so we quote per order. Share the details and we will come back with a price. The minimum order is ${TERMS.minMetres} metres.`,
      links: [
        wa("Ask for a quote", "Hi Tanish Creation! Please share a quote."),
        { label: "Bulk quote form", href: "/wholesale" },
      ],
    },
  },
  {
    keys: [
      "catalogue",
      "catalog",
      "design",
      "designs",
      "pattern",
      "print",
      "floral",
      "paisley",
      "geometric",
    ],
    reply: {
      text: `We have ${fmtNum(TERMS.designs)}+ designs in our archive. The catalogue shows a selection by category: floral, geometric, paisley, traditional, abstract and contemporary.`,
      links: [{ label: "Open the catalogue", href: "/catalogue" }],
    },
  },
  {
    keys: [
      "contact",
      "phone",
      "call",
      "email",
      "mail",
      "address",
      "where",
      "location",
      "reach",
      "whatsapp",
      "number",
    ],
    reply: {
      text: `You can reach us on ${PHONE_DISPLAY} (call or WhatsApp) or at ${EMAIL}. We are in Sanganer, Jaipur, Rajasthan.`,
      links: [
        wa("Chat on WhatsApp", "Hi Tanish Creation!"),
        { label: "Contact page", href: "/contact" },
      ],
    },
  },
  {
    keys: ["who", "about", "since", "history", "heritage", "story", "founded", "years"],
    reply: {
      text: `Tanish Creation has been printing in the lanes of Sanganer, Jaipur since ${TERMS.since}. Today we are a screen printing manufacturer for boutiques, D2C brands and wholesalers.`,
      links: [{ label: "Read our story", href: "/about" }],
    },
  },
  {
    keys: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    reply: {
      text: "Hello! Ask me about minimum orders, lead time, samples, custom designs, fabrics or visiting the factory.",
    },
  },
  {
    keys: ["thanks", "thank you", "thx"],
    reply: {
      text: "You're welcome. If you need anything else, I'm here, or you can message the team on WhatsApp.",
    },
  },
];

export const SUGGESTIONS = [
  "Minimum order",
  "Lead time",
  "Samples",
  "Custom designs",
  "Visit the factory",
  "Contact",
];

const FALLBACK: Reply = {
  text: "I don't have a confirmed answer to that one. Our team can help you directly on WhatsApp or email.",
  links: [
    wa("Message us on WhatsApp", "Hi Tanish Creation! I have a question."),
    { label: "Email us", href: `mailto:${EMAIL}` },
  ],
};

// Keywords match at a word start ("manufactur" hits "manufacturing"); 3-letter ones must be whole words.
const hit = (t: string, k: string) =>
  new RegExp(`\\b${k.trim()}${k.trim().length <= 3 ? "\\b" : ""}`).test(t);

export function answer(input: string): Reply {
  const t = input.toLowerCase();
  let best: Entry | null = null;
  let bestScore = 0;
  for (const e of KB) {
    const score = e.keys.reduce((n, k) => n + (hit(t, k) ? k.length : 0), 0);
    if (score > bestScore) {
      best = e;
      bestScore = score;
    }
  }
  return best ? best.reply : FALLBACK;
}

export const sentences = (text: string) => text.split(/(?<=[.!?])\s+/).filter(Boolean);
