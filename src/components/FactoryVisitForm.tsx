import { useState } from "react";
import { TERMS } from "@/lib/terms";
import WhatsApp from "./icons/WhatsApp";
import { FormStatus, Honeypot, useEnquiry } from "./enquiry";

const field =
  "w-full min-w-0 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none";

export default function FactoryVisitForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    date: "",
    visitors: "1",
    message: "",
  });
  const [hp, setHp] = useState("");
  const { status, href, send, mail } = useEnquiry("Factory visit request");

  const body = `FACTORY VISIT REQUEST\n\nName: ${form.name}\nPhone: ${form.phone}\nCompany: ${form.company}\nDate: ${form.date}\nVisitors: ${form.visitors}\nMessage: ${form.message}`;
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send(body, hp);
      }}
      className="relative bg-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-warm space-y-4"
    >
      <h3 className="font-display text-2xl text-primary">Plan your visit</h3>
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
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          maxLength={20}
          inputMode="tel"
          placeholder="Phone"
          aria-label="Phone"
          value={form.phone}
          onChange={set("phone")}
          className={field}
        />
        <input
          maxLength={120}
          placeholder="Company"
          aria-label="Company"
          value={form.company}
          onChange={set("company")}
          className={field}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          type="date"
          aria-label="Visit date"
          value={form.date}
          onChange={set("date")}
          className={field}
        />
        <input
          required
          type="number"
          min={1}
          max={TERMS.maxVisitors}
          value={form.visitors}
          onChange={set("visitors")}
          placeholder="Visitors"
          aria-label="Number of visitors"
          className={field}
        />
      </div>
      <textarea
        maxLength={500}
        rows={3}
        placeholder="Anything specific you'd like to see?"
        aria-label="Message"
        value={form.message}
        onChange={set("message")}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="press w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
      >
        <WhatsApp className="h-4 w-4" /> Confirm via WhatsApp
      </button>
      <FormStatus status={status} href={href} mailHref={mail(body)} />
    </form>
  );
}
