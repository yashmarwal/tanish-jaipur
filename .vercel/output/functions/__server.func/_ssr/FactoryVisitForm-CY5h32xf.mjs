import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { w as waLink } from "./router-DdVPwiZD.mjs";
function FactoryVisitForm() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    company: "",
    date: "",
    visitors: "1",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const msg = `🏭 FACTORY VISIT REQUEST

Name: ${form.name}
Phone: ${form.phone}
Company: ${form.company}
Date: ${form.date}
Visitors: ${form.visitors}
Message: ${form.message}`;
    window.open(waLink(msg), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: submit,
      className: "bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-warm space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: "Plan your visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            maxLength: 120,
            placeholder: "Your name",
            value: form.name,
            onChange: (e) => setForm({ ...form, name: e.target.value }),
            className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              maxLength: 20,
              placeholder: "Phone",
              value: form.phone,
              onChange: (e) => setForm({ ...form, phone: e.target.value }),
              className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              maxLength: 120,
              placeholder: "Company",
              value: form.company,
              onChange: (e) => setForm({ ...form, company: e.target.value }),
              className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              type: "date",
              value: form.date,
              onChange: (e) => setForm({ ...form, date: e.target.value }),
              className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              type: "number",
              min: 1,
              max: 20,
              value: form.visitors,
              onChange: (e) => setForm({ ...form, visitors: e.target.value }),
              placeholder: "Visitors",
              className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            maxLength: 500,
            rows: 3,
            placeholder: "Anything specific you'd like to see?",
            value: form.message,
            onChange: (e) => setForm({ ...form, message: e.target.value }),
            className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none resize-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-all",
            children: "Confirm via WhatsApp →"
          }
        )
      ]
    }
  );
}
export {
  FactoryVisitForm as F
};
