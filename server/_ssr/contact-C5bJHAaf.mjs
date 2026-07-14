import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, c as createSsrRpc } from "./router-sfM3cCIZ.mjs";
import { c as createServerFn } from "./server-B5sCLhvk.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-DzN8g11l.mjs";
import "../_libs/seroval.mjs";
import { B as Building2, a as MessageCircle, P as Phone, f as Mail, g as Send, h as CircleCheck, W as Wrench, S as ShieldCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/react-icons.mjs";
import "./models-B69ILCyc.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const bannerShowroom = "/assets/contact-showroom-B0DPllVU.png";
const contactSchema = objectType({
  name: stringType().trim().min(1),
  phone: stringType().trim().min(1),
  email: stringType().trim().email().or(literalType("")),
  message: stringType().trim().optional()
});
const submitContactMessage = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("c7c64ffa115cbd3be824ac084ded6ecefcd0ea987999b51ecfca3bbe03696bea"));
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BRANCHES = [{
  name: "BYD RATCHAPHRUEK",
  title: "บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์",
  phones: ["02-149-9008", "091-889-3988 (ติดต่อเข้ารับบริการ SA)", "095-204-3998 (ฝ่ายทะเบียน)", "099-315-5853 (ฝ่ายอะไหล่)"],
  hours: "เปิดทุกวัน 08:30-18:00 น.",
  address: "10/4 หมู่ 2 ต.บางรักน้อย อ.เมืองนนทบุรี จ.นนทบุรี 11000",
  mapUrl: "https://www.google.com/maps/place/BYD+Ratchaphruek+%E0%B8%9A%E0%B8%B5%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B5+%E0%B8%88%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%87+%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9E%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C/@13.8641972,100.452056,17z/data=!4m14!1m7!3m6!1s0x30e2850ed295ee3b:0x7aab1f314793b99d!2zQllEIFJhdGNoYXBocnVlayDguJrguLXguKfguLLguKLguJTguLUg4LiI4Li04LiZ4Lir4Lil4LiHIOC4o-C4suC4iuC4nuC4pOC4geC4qeC5jA!8m2!3d13.8641972!4d100.452056!16s%2Fg%2F11tg0nqvph!3m5!1s0x30e2850ed295ee3b:0x7aab1f314793b99d!8m2!3d13.8641972!4d100.452056!16s%2Fg%2F11tg0nqvph?hl=th&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
  position: {
    lat: 13.8641972,
    lng: 100.452056
  },
  facebook: "https://www.facebook.com/BYDRatchaphruek",
  line: "https://line.me/R/ti/p/@605jvoki",
  tiktok: "https://www.tiktok.com/@bydratchaphruek",
  instagram: "https://www.instagram.com/bydratchaphruek",
  threads: "https://www.threads.com/@bydratchaphruek",
  youtube: "https://www.youtube.com/@bydratchaphruek",
  x: "https://twitter.com/bydrpu"
}];
const ContactBranchMap = reactExports.lazy(() => import("./ContactBranchMap-C-2o90UE.mjs"));
function ContactPage() {
  const [isSuccessOpen, setIsSuccessOpen] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [isClient, setIsClient] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  reactExports.useEffect(() => {
    setIsClient(true);
  }, []);
  const inputCls = "w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bannerShowroom, alt: "โชว์รูม BYD จินหลง มอเตอร์", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl opacity-30 gradient-accent", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: "ติดต่อเรา" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up leading-[1.05]", children: [
          "ติดต่อ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "BYD จินหลง ราชพฤกษ์" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up", children: "รวมข้อมูลโชว์รูมและศูนย์บริการสาขาราชพฤกษ์ พร้อมแผนที่และเส้นทางนำทางในหน้าเดียว" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#branches", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
            " ดูข้อมูลสาขา"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact-form", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-background/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            " ส่งข้อความถึงเรา"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 max-w-xl rounded-2xl border border-border/70 bg-background/45 p-4 sm:p-5 backdrop-blur-sm animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "โชว์รูม" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "08.30 น. - 17.30 น." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "วันทำการ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "จันทร์ - อาทิตย์" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-border/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "ฝ่ายบริการ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "08.30 น. - 17.30 น." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "วันทำการ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "จันทร์ - เสาร์" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-border/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "เบอร์ติดต่อ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: BRANCHES[0].phones.map((phone) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${phone.replace(/[^\d]/g, "")}`, className: "group flex items-center gap-2 rounded-lg border-border/70 bg-background/35 px-3 py-2 text-sm text-foreground/90 transition hover:border-primary/40 hover:bg-background/55", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight group-hover:text-foreground", children: phone })
            ] }, phone)) })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16", id: "branches", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-3", children: "เครือข่ายโชว์รูม" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "แผนที่บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: "ดูตำแหน่งสาขาราชพฤกษ์และคลิกเพื่อนำทางได้ทันที" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border overflow-hidden glass shadow-2xl relative z-0", children: isClient ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[480px] md:h-[560px] w-full grid place-items-center text-sm text-muted-foreground", children: "กำลังโหลดแผนที่..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBranchMap, { branches: BRANCHES }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[480px] md:h-[560px] w-full grid place-items-center text-sm text-muted-foreground", children: "กำลังโหลดแผนที่..." }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/30 border-y border-border", id: "contact-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 grid lg:grid-cols-5 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-3", children: "ส่งข้อความ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "พร้อมตอบทุกคำถาม" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: "สอบถามรุ่นรถ ราคา โปรโมชั่น หรือนัดทดลองขับได้ทุกช่องทาง ทีมงานยินดีให้คำแนะนำ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${BRANCHES[0].phones[0].replace(/-/g, "")}`, className: "flex items-center gap-4 glass rounded-xl p-4 border border-border hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "โทรหาเรา" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: BRANCHES[0].phones[0] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:bydratchaphruek@gmail.com", className: "flex items-center gap-4 glass rounded-xl p-4 border border-border hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "อีเมล" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "bydratchaphruek@gmail.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: BRANCHES[0].line, target: "_blank", rel: "noreferrer", className: "flex items-center gap-4 glass rounded-xl p-4 border border-border hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "LINE OA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "@bydratchaphruek" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { noValidate: true, onSubmit: async (e) => {
          e.preventDefault();
          const trimmedName = form.name.trim();
          const trimmedPhone = form.phone.trim();
          const trimmedEmail = form.email.trim();
          const trimmedMessage = form.message.trim();
          const phoneDigits = trimmedPhone.replace(/\D/g, "");
          if (!trimmedName) {
            setSubmitError("กรุณากรอกชื่อ-นามสกุล");
            return;
          }
          if (!trimmedPhone) {
            setSubmitError("กรุณากรอกเบอร์โทรศัพท์");
            return;
          }
          if (phoneDigits.length < 10) {
            setSubmitError("เบอร์โทรต้องมีตัวเลขอย่างน้อย 10 ตัว");
            return;
          }
          if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) {
            setSubmitError("กรุณากรอกอีเมลให้ถูกต้องตามรูปแบบ");
            return;
          }
          setSubmitError(null);
          setIsSubmitting(true);
          try {
            await submitContactMessage({
              data: {
                name: trimmedName,
                phone: trimmedPhone,
                email: trimmedEmail,
                message: trimmedMessage
              }
            });
            setForm({
              name: "",
              phone: "",
              email: "",
              message: ""
            });
            setIsSuccessOpen(true);
          } catch (error) {
            setSubmitError(error instanceof Error ? error.message : "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
          } finally {
            setIsSubmitting(false);
          }
        }, className: "glass rounded-2xl p-6 sm:p-8 space-y-5 border border-border shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "กรอกแบบฟอร์ม" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "ระบุสาขาที่สะดวกในข้อความ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: "ชื่อ *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, maxLength: 80, value: form.name, onChange: (e) => setForm({
                ...form,
                name: e.target.value
              }), className: inputCls })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: "เบอร์โทร *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", inputMode: "numeric", minLength: 10, maxLength: 20, value: form.phone, onChange: (e) => setForm({
                ...form,
                phone: e.target.value
              }), className: inputCls })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: "อีเมล" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", maxLength: 120, value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: inputCls })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: "ข้อความ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, maxLength: 1e3, value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }), className: inputCls })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: isSubmitting, className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            " ",
            isSubmitting ? "กำลังส่งข้อมูล..." : "ส่งข้อความ"
          ] }),
          submitError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400 text-center", children: submitError }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "เราเก็บข้อมูลของท่านเพื่อการติดต่อกลับเท่านั้น" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isSuccessOpen, onOpenChange: setIsSuccessOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-md border-border bg-background/95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-9 w-9" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl", children: "ส่งข้อความเรียบร้อย" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-sm leading-relaxed text-muted-foreground", children: "ทีมงานจะติดต่อกลับโดยเร็วที่สุด" })
        ] }) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-4xl space-y-4 text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: "โชว์รูมและศูนย์บริการ BYD จินหลง มอเตอร์ สาขาราชพฤกษ์" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "เราพร้อมให้บริการที่สาขาราชพฤกษ์ เพื่อให้ลูกค้าเข้าถึงบริการได้สะดวกมากยิ่งขึ้น" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: "บริการครบวงจรในที่เดียว" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ตั้งแต่ให้คำปรึกษา ทดลองขับฟรี แนะนำสินเชื่อ ส่งมอบรถ ไปจนถึงงานบริการหลังการขายและงานซ่อมบำรุงด้วยมาตรฐานศูนย์บริการ BYD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: "แนะนำให้ตรวจสอบเวลาทำการก่อนเข้ารับบริการ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "เพื่อความสะดวกรวดเร็ว ทีมงานแนะนำให้โทรนัดหมายล่วงหน้าก่อนเข้ารับบริการ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mt-3 text-foreground", children: "ศูนย์บริการมาตรฐาน BYD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: "ช่างเทคนิคผ่านการรับรอง" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mt-3 text-foreground", children: "ดูแลหลังการขายอย่างมั่นใจ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: "ครบทั้งการนัดหมายและคำแนะนำการใช้งาน" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as component
};
