import { useState } from "react";
import { TERMS, fmtNum } from "@/lib/terms";
import WhatsApp from "./icons/WhatsApp";
import { FormStatus, Honeypot, useEnquiry } from "./enquiry";
import { Reveal, SectionHead } from "./motion";

const field =
  "w-full min-w-0 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none";

export default function BulkOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    design: "",
    quantity: "",
    color: "",
    notes: "",
  });
  const [hp, setHp] = useState("");
  const { status, href, send, mail } = useEnquiry("Bulk quote request");

  const body = `BULK ORDER REQUEST\n\nName: ${form.name}\nPhone: ${form.phone}\nCompany: ${form.company}\nDesign: ${form.design}\nQuantity: ${form.quantity} metres\nColor: ${form.color}\nNotes: ${form.notes}`;
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <SectionHead
            eyebrow="Bulk Manufacturing"
            lines={[
              "Built for bulk.",
              <em key="e" className="text-accent">
                Crafted for growth.
              </em>,
            ]}
          />
          <div className="mt-10 space-y-5">
            {[
              ["Minimum order", `${TERMS.minMetres} metres`],
              ["Lead time", TERMS.leadTime],
              ["Capacity", `${fmtNum(TERMS.capacityPerDay)} metres / day`],
              ["Designs", `${fmtNum(TERMS.designs)}+`],
            ].map(([k, v], i) => (
              <Reveal key={k} index={i} y={14}>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <span className="text-sm uppercase tracking-wider text-foreground/60">{k}</span>
                  <span className="font-display text-2xl text-primary tabular text-right">{v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(body, hp);
          }}
          className="relative bg-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-warm space-y-4"
        >
          <h3 className="font-display text-2xl text-primary mb-2">Get a Bulk Quote</h3>
          <Honeypot value={hp} onChange={setHp} />
          <input
            required
            maxLength={120}
            placeholder="Your name"
            aria-label="Your name"
            value={form.name}
            onChange={set("name")}
            className={field}
          />
          <input
            required
            maxLength={20}
            inputMode="tel"
            placeholder="Phone number"
            aria-label="Phone number"
            value={form.phone}
            onChange={set("phone")}
            className={field}
          />
          <input
            maxLength={120}
            placeholder="Company / brand"
            aria-label="Company or brand"
            value={form.company}
            onChange={set("company")}
            className={field}
          />
          <input
            maxLength={120}
            placeholder="Design name or code"
            aria-label="Design name or code"
            value={form.design}
            onChange={set("design")}
            className={field}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              maxLength={20}
              inputMode="numeric"
              placeholder={`Metres (min ${TERMS.minMetres})`}
              aria-label="Quantity in metres"
              value={form.quantity}
              onChange={set("quantity")}
              className={field}
            />
            <input
              maxLength={50}
              placeholder="Preferred color"
              aria-label="Preferred color"
              value={form.color}
              onChange={set("color")}
              className={field}
            />
          </div>
          <textarea
            placeholder="Notes (optional)"
            aria-label="Notes"
            maxLength={500}
            value={form.notes}
            onChange={set("notes")}
            rows={3}
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            className="press w-full bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <WhatsApp className="h-4 w-4" /> Get Quote on WhatsApp
          </button>
          <FormStatus status={status} href={href} mailHref={mail(body)} />
        </form>
      </div>
    </section>
  );
}
