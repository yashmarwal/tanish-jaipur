import { TERMS, fmtNum } from "./terms";

export const FAQ = [
  {
    q: "What is the minimum order?",
    a: `Our minimum order is ${TERMS.minMetres} metres per design. We treat a ${TERMS.minMetres}-metre boutique run with the same care as a larger bulk order.`,
  },
  {
    q: "How long does an order take?",
    a: `Lead time is ${TERMS.leadTime} for orders above ${TERMS.minMetres} metres. We confirm the exact date when you approve the strike-off.`,
  },
  {
    q: "Can I get a sample before ordering?",
    a: "Yes. Message us on WhatsApp and ask for a sample fabric for a quality check.",
  },
  {
    q: "Can you print my own design?",
    a: "Yes. Send a sketch, a mood or finished artwork. Our in-house studio turns it into a press-ready screen and a strike-off for your sign-off before we print.",
  },
  {
    q: "Which fabrics do you print on?",
    a: `We print on ${TERMS.fabrics}. We can also source the base fabric for you, so you only choose the print.`,
  },
  {
    q: "How large can you go?",
    a: `Our capacity is ${fmtNum(TERMS.capacityPerDay)} metres a day, from boutique drops to D2C scale.`,
  },
  {
    q: "Can I visit the factory?",
    a: `Yes. Visits are free, ${TERMS.visitHours}, for up to ${TERMS.maxVisitors} visitors per slot, at our Sanganer facility in Jaipur. Book on the Factory Visit page.`,
  },
  {
    q: "What about shipping and payment?",
    a: "Shipping and payment terms depend on your order and location. Message us on WhatsApp and we will confirm both before you commit.",
  },
] as const;
