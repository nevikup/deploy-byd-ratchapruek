import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { w as ChevronDown } from "../_libs/lucide-react.mjs";
function FAQ({ items, title = "คำถามที่พบบ่อย" }) {
  const [open, setOpen] = reactExports.useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a }
    }))
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "faq-section py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-center mb-3", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground mb-10", children: "รวมคำถามที่ลูกค้าสอบถามบ่อยที่สุดเกี่ยวกับรถยนต์ไฟฟ้า BYD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              suppressHydrationWarning: true,
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 text-foreground transition-transform ${isOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in", children: it.a })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } })
  ] });
}
export {
  FAQ
};
