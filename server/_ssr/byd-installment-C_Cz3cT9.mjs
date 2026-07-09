import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$a, P as PageShell } from "./router-CTR15R5u.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import { m as matchInstallmentModelFromTitle } from "./models-B69ILCyc.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-DeJaANHj.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/zod.mjs";
const FAQS = [{
  q: "ดาวน์รถ BYD ขั้นต่ำกี่เปอร์เซ็นต์?",
  a: "โดยทั่วไปสถาบันการเงินกำหนดดาวน์ขั้นต่ำ 10-20% ของราคารถ ขึ้นอยู่กับแคมเปญและประวัติเครดิตของผู้กู้"
}, {
  q: "ผ่อนรถ BYD ได้สูงสุดกี่ปี?",
  a: "สูงสุด 84 งวด หรือ 7 ปี สำหรับลูกค้าบุคคลธรรมดา ขึ้นอยู่กับเงื่อนไขสถาบันการเงิน"
}, {
  q: "ดอกเบี้ยรถ BYD เท่าไร?",
  a: "ดอกเบี้ยปัจจุบันเริ่มต้นประมาณ 1.99-2.99% ต่อปี โดยค่างวดในหน้านี้คำนวณแบบลดต้นลดดอกเพื่อใช้เป็นประมาณการเบื้องต้น"
}, {
  q: "ต้องเตรียมเอกสารอะไรบ้าง?",
  a: "บัตรประชาชน, ทะเบียนบ้าน, สลิปเงินเดือนย้อนหลัง 3 เดือน, Statement บัญชี 6 เดือน และเอกสารแสดงรายได้"
}];
function InstallmentPage() {
  const {
    renderedPosts,
    heroImage
  } = Route$a.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "BYD installment promotion banner", className: "absolute inset-0 h-full w-full object-cover", loading: "eager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: "ตารางผ่อน" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up", children: "ตารางผ่อนรถ BYD 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up", children: "คำนวณค่างวดและดูตัวอย่างตารางผ่อนของรถ BYD ทุกรุ่น พร้อมข้อมูลเงินดาวน์และดอกเบี้ยล่าสุด" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-3", children: "ตารางผ่อน BYD ทุกรุ่น" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "รวมอัปเดตโปรโมชันและข้อมูลตารางผ่อนครบจบในที่เดียว" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: renderedPosts.length > 0 ? renderedPosts.map((post) => {
        const matchedModel = matchInstallmentModelFromTitle(post.title) ?? matchInstallmentModelFromTitle(post.slug);
        const cardImage = matchedModel?.image ?? post.image;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$slug", params: {
          slug: post.slug
        }, className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/45 hover-lift flex flex-col focus:outline-none focus:ring-2 focus:ring-primary/60 animate-fade-in-up", children: [
          cardImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-44 overflow-hidden bg-gradient-to-br from-surface-elevated via-surface to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cardImage, alt: post.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 flex flex-1 flex-col min-h-[292px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-3 text-xl font-bold leading-snug text-foreground", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3", children: post.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 border-t border-border/50 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "รายละเอียด" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-[#d70c19] group-hover:text-white group-hover:translate-x-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }, `installment-${post.id}`);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 lg:col-span-3 rounded-2xl border border-border/70 bg-surface/45 p-8 text-center text-muted-foreground", children: "ยังไม่มีตารางผ่อนในขณะนี้" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 space-y-4 text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: "รู้จักตารางผ่อนรถ BYD ก่อนตัดสินใจซื้อ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "การวางแผนการผ่อนรถยนต์ไฟฟ้า BYD ให้เหมาะสมกับรายได้เป็นสิ่งสำคัญที่จะช่วยให้การเป็นเจ้าของรถ EV เป็นเรื่องง่าย ปัจจัยหลักประกอบด้วย ราคารถ จำนวนเงินดาวน์ ระยะเวลาผ่อน และอัตราดอกเบี้ย" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: "เงินดาวน์ที่เหมาะสม" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "การดาวน์ 20-30% ถือเป็นจุดสมดุล เพราะช่วยลดค่างวดและไม่เก็บเงินสดน้อยเกินไป ลูกค้าหลายท่านนิยมดาวน์ 25% เพื่อรับเงื่อนไขดอกเบี้ยที่ดีที่สุด" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: "ระยะเวลาผ่อนที่เหมาะกับ EV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "เนื่องจากรถ EV มีค่าบำรุงรักษาต่ำกว่ารถน้ำมัน การผ่อน 5-6 ปีเป็นช่วงเวลาเหมาะสม ช่วยให้ค่างวดต่อเดือนไม่สูงเกินไป" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: "โปรโมชั่นดอกเบี้ยพิเศษ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BYD จินหลง ราชพฤกษ์ ร่วมมือกับสถาบันการเงินชั้นนำเพื่อมอบโปรโมชั่นดอกเบี้ยพิเศษ เริ่มต้นที่ 0% สูงสุด 48 งวด สำหรับลูกค้าที่จองภายในระยะเวลาแคมเปญ" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: FAQS })
  ] });
}
export {
  InstallmentPage as component
};
