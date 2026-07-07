import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell, i as PageHero, T as TEST_DRIVE_FORM_URL } from "./router-Bna36lkW.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { q as Percent, S as ShieldCheck, p as Sparkles, r as BatteryCharging, s as Gift, W as Wrench } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/react-icons.mjs";
import "./models-CGoesGQ4.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-DkP7HoS9.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/zod.mjs";
const PROMOS = [{
  icon: Percent,
  title: "ดอกเบี้ย 0%",
  desc: "ดอกเบี้ยพิเศษ 0% สูงสุด 48 งวด",
  value: "0%"
}, {
  icon: ShieldCheck,
  title: "ฟรีประกันชั้น 1",
  desc: "ปีแรก มูลค่าสูงสุด 30,000 บาท",
  value: "ปีแรก"
}, {
  icon: Sparkles,
  title: "ฟรีฟิล์มกรองแสง",
  desc: "ฟิล์มเซรามิคพรีเมียมรอบคัน",
  value: "รอบคัน"
}, {
  icon: BatteryCharging,
  title: "ฟรี Home Charger",
  desc: "Wall Box 7 kW พร้อมติดตั้ง",
  value: "7 kW"
}, {
  icon: Gift,
  title: "ของแถมพิเศษ",
  desc: "กล้องหน้า-หลัง และพรมปูพื้น",
  value: "ฟรี"
}, {
  icon: Wrench,
  title: "ฟรีค่าบริการ 3 ปี",
  desc: "ฟรีค่าแรงเช็คระยะ 3 ปี / 60,000 กม.",
  value: "3 ปี"
}];
const FAQS = [{
  q: "โปรโมชั่นนี้ใช้ได้ถึงเมื่อไร?",
  a: "โปรโมชั่นมีระยะเวลาจำกัด แนะนำให้ติดต่อทีมงานเพื่อรับเงื่อนไขล่าสุด"
}, {
  q: "ใช้โปรหลายอย่างรวมกันได้ไหม?",
  a: "โปรโมชั่นส่วนใหญ่สามารถใช้ร่วมกันได้ ทีมงานจะคำนวณข้อเสนอที่คุ้มที่สุดให้ท่าน"
}];
function PromoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "โปรโมชั่นเดือนนี้", title: "โปรโมชั่น BYD ล่าสุด", subtitle: "ข้อเสนอพิเศษสำหรับลูกค้า BYD จินหลง ราชพฤกษ์ เท่านั้น" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PROMOS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-7 hover-lift relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold gradient-accent text-primary-foreground", children: p.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-10 w-10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "รับข้อเสนอเฉพาะคุณ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "ทีมงาน BYD จินหลง ราชพฤกษ์ พร้อมจัดข้อเสนอที่คุ้มค่าที่สุด" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TEST_DRIVE_FORM_URL, className: "rounded-full gradient-accent px-6 py-3 font-semibold text-primary-foreground glow", children: "นัดทดลองขับ + รับโปร" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full glass border border-primary/40 px-6 py-3 font-semibold", children: "ปรึกษาทีมขาย" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: FAQS })
  ] });
}
export {
  PromoPage as component
};
