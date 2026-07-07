import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as INSTALLMENT_MODELS, c as calcInstallment, f as formatBaht } from "./models-CGoesGQ4.mjs";
const RATE_MIN = 1.5;
const RATE_MAX = 5;
function normalizeRate(value) {
  if (!Number.isFinite(value)) return RATE_MIN;
  const clamped = Math.min(RATE_MAX, Math.max(RATE_MIN, value));
  return Number(clamped.toFixed(2));
}
function InstallmentCalculator({ defaultSlug }) {
  const initialSlug = INSTALLMENT_MODELS.some((model2) => model2.slug === defaultSlug) ? defaultSlug : INSTALLMENT_MODELS[0].slug;
  const [slug, setSlug] = reactExports.useState(initialSlug);
  const [down, setDown] = reactExports.useState(20);
  const [years, setYears] = reactExports.useState(5);
  const [rate, setRate] = reactExports.useState(2.49);
  const model = INSTALLMENT_MODELS.find((m) => m.slug === slug);
  const res = reactExports.useMemo(() => calcInstallment(model.priceFrom, down, years, rate), [model, down, years, rate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-1", children: "คำนวณค่างวดผ่อนรถ BYD" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "ประมาณการแบบลดต้นลดดอก อัตราดอกเบี้ยจริงขึ้นอยู่กับสถาบันการเงินและเงื่อนไขอนุมัติ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "เลือกรุ่น", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: slug, onChange: (e) => setSlug(e.target.value), className: inputCls, children: INSTALLMENT_MODELS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m.slug, children: [
          m.name,
          " — ",
          formatBaht(m.priceFrom)
        ] }, m.slug)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `ดาวน์ ${down}% (${formatBaht(res.down)})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 10, max: 50, step: 5, value: down, onChange: (e) => setDown(+e.target.value), className: "w-full accent-[#2f3231]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `ระยะเวลาผ่อน ${years} ปี`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 7, step: 1, value: years, onChange: (e) => setYears(+e.target.value), className: "w-full accent-[#2f3231]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `ดอกเบี้ย ${rate.toFixed(2)}% ต่อปี`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: RATE_MIN,
              max: RATE_MAX,
              step: 0.01,
              value: rate,
              onChange: (e) => setRate(normalizeRate(Number(e.target.value))),
              className: "w-full accent-[#2f3231]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: RATE_MIN,
              max: RATE_MAX,
              step: 0.01,
              inputMode: "decimal",
              value: rate,
              onChange: (e) => setRate(normalizeRate(Number(e.target.value))),
              className: inputCls
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "ค่างวดต่อเดือนโดยประมาณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-bold text-foreground sm:text-5xl", children: formatBaht(res.monthly) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "ราคารถ", value: formatBaht(model.priceFrom) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "เงินดาวน์", value: formatBaht(res.down) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "ยอดจัด", value: formatBaht(res.principal) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "จำนวนงวด", value: `${res.months} งวด` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "ดอกเบี้ยรวม", value: formatBaht(Math.round(res.totalInterest)) })
        ] })
      ] })
    ] })
  ] });
}
const inputCls = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40";
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    children
  ] });
}
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/50 pb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: value })
  ] });
}
export {
  InstallmentCalculator
};
