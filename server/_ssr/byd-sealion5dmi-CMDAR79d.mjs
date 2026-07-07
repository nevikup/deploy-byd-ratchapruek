import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as SLUG$8, P as PageShell } from "./router-Bna36lkW.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-Cb8POu9O.mjs";
import { T as TestDriveForm } from "./TestDriveForm-pWI7-x-h.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, d as colorWhite$1 } from "./models-CGoesGQ4.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, R as Ruler, Z as Zap, G as Gauge, i as Battery, m as Weight, S as ShieldCheck, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/react-icons.mjs";
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
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "./dialog-OfrvHJFV.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/react-day-picker.mjs";
import "../_libs/date-fns__tz.mjs";
const heroBanner = "/assets/sealion5dmi-overview-banner-desktop-CPIB1ewo.jpeg";
const brochureContentImage = "/assets/byd-seal-5-dm-i-content-desktop-CxPLvsBH.jpeg";
const overviewStoryImage = "/assets/sealion5-description-1-DTt8WE3B.jpeg";
const efficiencyStoryImage = "/assets/sealion5-description-2-CpIlN3UT.png";
const techBanner = "/assets/sealion5-techInfo-desktop-BLBqwsW6.png";
const exterior1 = "/assets/exterior-1-Cz4eQmQx.png";
const exterior2 = "/assets/exterior-2-Ba3tlgRi.png";
const exterior3 = "/assets/exterior-3-nugb7qIU.png";
const exterior4 = "/assets/exterior-4-CNiot3CL.png";
const exterior5 = "/assets/exterior-5-BeDCwqyD.png";
const exterior6 = "/assets/exterior-6-3PMFLVwp.png";
const interior1 = "/assets/interior-1-BOypjxYM.png";
const interior2 = "/assets/interior-2-0WO0HXKo.png";
const interior3 = "/assets/interior-3-BPFVLoWy.png";
const interior4 = "/assets/interior-4-DcWcB92w.png";
const interior5 = "/assets/interior-5-BS9xIxNI.png";
const interior6 = "/assets/interior-6-CHKEjfde.png";
const colorGrey = "/assets/sealion5dmi-space-grey-model-BMON6_4z.png";
const colorBlack = "/assets/sealion5dmi-quantum-black-model-BI2Ptn6V.png";
const VIDEO_URL = "https://storage.googleapis.com/ram_asset_prd/models/sealion5dmi/overview/sealion5dmi-video.webm";
const TRIMS = [
  {
    key: "dynamic",
    name: "Dynamic",
    price: 759900,
    accel: "8.5",
    evRange: "110",
    battery: "18.3 kWh",
    power: "155 kW",
    torque: "210 Nm",
    drive: "FWD"
  },
  {
    key: "premium",
    name: "Premium",
    price: 799900,
    accel: "8.5",
    evRange: "110",
    battery: "18.3 kWh",
    power: "155 kW",
    torque: "210 Nm",
    drive: "FWD"
  }
];
const COLORS = [
  { name: "Horizon White", hex: "#EDEEF0", border: "#d0d0d0", img: colorWhite$1, note: "Dynamic · Premium" },
  { name: "Space Grey", hex: "#5B6168", border: "#5B6168", img: colorGrey, note: "Dynamic · Premium" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorBlack, note: "Dynamic · Premium" }
];
const EXTERIOR_GALLERY = [
  { img: exterior1, label: "ไฟหน้า FULL LED", desc: "ดีไซน์เรียบคมพร้อมลายเซ็นแสงที่โดดเด่น" },
  { img: exterior2, label: "ไฟท้าย Sequential", desc: "ไฟท้าย LED เต็มรูปแบบพร้อมไฟเลี้ยวแบบไล่ระดับ" },
  { img: exterior3, label: "ล้ออัลลอย 18 นิ้ว", desc: "ล้อสไตล์สปอร์ตบาลานซ์ทั้งความสวยและการใช้งาน" },
  { img: exterior4, label: "ประตูท้ายไฟฟ้า", desc: "เปิด-ปิดสะดวกขึ้นในทุกการใช้งานประจำวัน" },
  { img: exterior5, label: "รองรับชาร์จและ V2L", desc: "DC CCS2 สูงสุด 18 kW, AC Type 2 และระบบ V2L" },
  { img: exterior6, label: "NFC & Digital Key", desc: "ปลดล็อกและสตาร์ทรถได้ด้วยบัตรหรือสมาร์ตโฟน" }
];
const INTERIOR_GALLERY = [
  { img: interior1, label: "จอผู้ขับขี่ 8.8 นิ้ว", desc: "แสดงข้อมูลสำคัญชัดเจนในระดับสายตา" },
  { img: interior2, label: "จอมัลติมีเดีย 12.8 นิ้ว", desc: "ระบบความบันเทิงครบ รองรับ Apple CarPlay/Android Auto" },
  { img: interior3, label: "เบาะไฟฟ้าพร้อมระบายอากาศ", desc: "เบาะคู่หน้าปรับไฟฟ้าเพื่อความสบายยิ่งขึ้น" },
  { img: interior4, label: "Wireless Charger", desc: "ชาร์จมือถือแบบไร้สายสะดวกในทุกเส้นทาง" },
  { img: interior5, label: "เบาะหลังพับ 60:40", desc: "พื้นที่เก็บสัมภาระยืดหยุ่นสูงสุด 1,482 ลิตร" },
  { img: interior6, label: "ห้องโดยสารกว้างขวาง", desc: "รองรับการเดินทางทั้งในเมืองและทริปยาว" }
];
const DIMENSIONS = [
  { label: "ความยาว (มม.)", values: ["4,735", "4,735"] },
  { label: "ความกว้าง (มม.)", values: ["1,860", "1,860"] },
  { label: "ความสูง (มม.)", values: ["1,710", "1,710"] },
  { label: "ระยะห่างล้อ หน้า / หลัง (มม.)", values: ["1,575 / 1,585", "1,575 / 1,585"] },
  { label: "ระยะฐานล้อ (มม.)", values: ["2,712", "2,712"] },
  { label: "ความสูงใต้ท้องรถ (มม.)", values: ["175", "175"] },
  { label: "ความจุห้องเก็บสัมภาระ (ลิตร)", values: ["530 / 1,482", "530 / 1,482"] },
  { label: "น้ำหนักรถเปล่า (กก.)", values: ["1,720", "1,720"] },
  { label: "น้ำหนักรถรวมสูงสุด (กก.)", values: ["2,130", "2,130"] }
];
const DRIVETRAIN = [
  { label: "ระบบขับเคลื่อน", values: ["ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า"] },
  { label: "ประเภทมอเตอร์ไฟฟ้าด้านหน้า", values: ["PMS", "PMS"] },
  { label: "กำลังมอเตอร์ไฟฟ้าสูงสุด (กิโลวัตต์)", values: ["120", "120"] },
  { label: "แรงบิดมอเตอร์ไฟฟ้าสูงสุด (นิวตันเมตร)", values: ["210", "210"] },
  { label: "ประเภทเครื่องยนต์", values: ["Xiao Yun Plug-in Hybrid 1.5L", "Xiao Yun Plug-in Hybrid 1.5L"] },
  { label: "กำลังเครื่องยนต์สูงสุด (กิโลวัตต์)", values: ["73", "73"] },
  { label: "แรงบิดเครื่องยนต์สูงสุด (นิวตันเมตร)", values: ["125", "125"] },
  { label: "กำลังรวมสูงสุด (กิโลวัตต์)", values: ["155", "155"] },
  { label: "แรงบิดรวมสูงสุด (นิวตันเมตร)", values: ["210", "210"] },
  { label: "ความจุถังน้ำมัน (ลิตร)", values: ["52", "52"] }
];
const PERFORMANCE = [
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", values: ["8.5", "8.5"] },
  { label: "ระยะทางวิ่งไฟฟ้าล้วน NEDC (กม.)", values: ["110", "110"] },
  { label: "ระยะทางวิ่งรวม", values: ["1,200+ km", "1,200+ km"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่ (กิโลวัตต์ชั่วโมง)", values: ["18.3", "18.3"] }
];
const CHARGING = [
  { label: "สายชาร์จพกพา (Mode 2)", values: [true, true] },
  { label: "รองรับ AC Type 2", values: ["สูงสุด 3.3 kW", "สูงสุด 3.3 kW"] },
  { label: "รองรับ DC CCS2", values: ["สูงสุด 18 kW", "สูงสุด 18 kW"] },
  { label: "ระบบจ่ายไฟภายนอก V2L", values: [true, true] },
  { label: "อุปกรณ์ V2L Adapter", values: [true, true] },
  { label: "ระบบหน่วงพลังงานขณะเบรก", values: [true, true] }
];
const CHASSIS = [
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แมคเฟอร์สันสตรัท", "แมคเฟอร์สันสตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["มัลติลิงก์", "มัลติลิงก์"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก"] },
  { label: "ประเภทล้อ", values: ["อัลลอย", "อัลลอย"] },
  { label: "ขนาดยาง", values: ["225/60 R18", "225/60 R18"] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัส", values: ["10.1 นิ้ว", "12.8 นิ้ว"] },
  { label: "ระบบลำโพง", values: ["6 ลำโพง", "8 ลำโพง"] },
  { label: "Apple CarPlay / Android Auto", values: [true, true] },
  { label: "NFC Card / Digital Key", values: [true, true] },
  { label: "แท่นชาร์จไร้สาย", values: [false, true] },
  { label: "ไส้กรองอากาศ PM2.5", values: [true, true] },
  { label: "อัปเดตซอฟต์แวร์ OTA", values: [true, true] }
];
const SAFETY = [
  { label: "กล้องมองหลัง", values: [true, false] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [false, true] },
  { label: "เซ็นเซอร์ช่วยจอดด้านหน้า", values: [false, true] },
  { label: "เซ็นเซอร์ช่วยจอดด้านหลัง", values: [true, true] },
  { label: "RCW / RCTA / RCTB / BSD / DOW", values: [false, true] },
  { label: "LDP / LDW", values: [true, true] },
  { label: "ELKA", values: [false, true] }
];
function useReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      },
      children
    }
  );
}
function BydSealion5DmiBrochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 25, 6, 2.69);
  const currentTrim = TRIMS.find((t) => t.key === trim);
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  const handlePlayVideo = reactExports.useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    { q: "BYD SEALION 5 DM-i ราคาเท่าไร?", a: "Dynamic 759,900 บาท · Premium 799,900 บาท พร้อมโปรโมชันล่าสุดจากทีมที่ปรึกษา" },
    { q: "วิ่งไฟฟ้าล้วนได้ไกลเท่าไร?", a: "วิ่งไฟฟ้าล้วนสูงสุด 110 กม. (NEDC) และระยะทางรวมมากกว่า 1,200 กม." },
    { q: "รองรับชาร์จแบบไหน?", a: "รองรับ AC Type 2 สูงสุด 3.3 kW, DC CCS2 สูงสุด 18 kW และรองรับ V2L" },
    { q: "SEALION 5 DM-i เร่ง 0-100 ได้กี่วินาที?", a: "ทำอัตราเร่ง 0-100 กม./ชม. ได้ใน 8.5 วินาที" },
    { q: "ผ่อนเริ่มต้นเดือนละเท่าไร?", a: `ค่างวดเริ่มต้นประมาณ ${formatBaht(r.monthly)}/เดือน (ดาวน์ 25% ผ่อน 72 งวด ดอกเบี้ย 2.69%)` }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "SUV",
    fuelType: "Plug-in Hybrid",
    seatingCapacity: 5,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: model.priceFrom,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: "BYD จินหลง ราชพฤกษ์" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full min-h-[88vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEALION 5 DM-i", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Super PHEV SUV · Blade Battery · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD SEALION 5 DM-i" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "SHINE IN EVERY MOMENT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6 items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ราคาเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl font-bold text-gradient", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ผ่อนเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(r.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/เดือน" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "inline-flex items-center gap-2 rounded-full gradient-accent px-7 py-3 text-sm font-semibold text-white glow", children: [
              "นัดทดลองขับ ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#installment", className: "inline-flex items-center gap-2 rounded-full glass border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm", children: "คำนวณค่างวด" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: "EV Range", val: "110 km" },
          { label: "0-100 km/h", val: "8.5 sec" },
          { label: "System Power", val: "155 kW" },
          { label: "Max Torque", val: "210 Nm" },
          { label: "Battery", val: "18.3 kWh" }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: val })
        ] }, label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-y border-border bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "Choose Your Trim" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: TRIMS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTrim(t.key),
          className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === t.key ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
          children: t.name
        },
        t.key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: currentTrim.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black text-gradient mt-1", children: formatBaht(currentTrim.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-semibold text-white self-start sm:self-auto", children: [
            "นัดทดลองขับ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: [
          { label: "Drive System", val: currentTrim.drive },
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "EV Range", val: `${currentTrim.evRange} km` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Max Torque", val: currentTrim.torque },
          { label: "Battery", val: currentTrim.battery }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/30 rounded-xl p-4 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: val })
        ] }, label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative w-full bg-black overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full", style: { maxHeight: "80vh", aspectRatio: "16/9" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          src: VIDEO_URL,
          poster: heroBanner,
          controls: videoPlaying,
          playsInline: true,
          className: "w-full h-full object-cover",
          onPlay: () => setVideoPlaying(true),
          style: { display: "block" }
        }
      ),
      !videoPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-0 flex flex-col items-center justify-center cursor-pointer",
          style: { background: "rgba(0,0,0,0.38)" },
          onClick: handlePlayVideo,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-20 w-20 rounded-full flex items-center justify-center transition-all hover:scale-105",
                style: { background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", backdropFilter: "blur(6px)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-8 w-8 text-white fill-white ml-1" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: "BYD SEALION 5 DM-i - Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "เลือกสีที่ใช่สำหรับคุณ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: c.img,
            alt: c.name,
            className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
            style: { opacity: activeColor === i ? 1 : 0 }
          },
          c.name
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex flex-col gap-3 min-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Exterior Colour" }),
          COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveColor(i),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 text-left ${activeColor === i ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-9 w-9 rounded-full flex-shrink-0 transition-all ${activeColor === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`,
                    style: { background: c.hex, border: `2px solid ${c.border}` },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: c.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.note })
                ] })
              ]
            },
            c.name
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตอบโจทย์โดดเด่นไม่เหมือนใคร" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-8", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
            children: tab === "exterior" ? "ภายนอก" : "ภายใน"
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl bg-surface", style: { aspectRatio: "16/9" }, children: [
        galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.label,
            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            style: { opacity: activeGallery === i ? 1 : 0 }
          },
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveGallery(i),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" })
        },
        item.label
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: overviewStoryImage,
          imgAlt: "Shine In Every Moment",
          reverse: false,
          title: "SHINE IN EVERY MOMENT",
          subtitle: "BYD SEALION 5 DM-i",
          body: "สัมผัสประสบการณ์การเดินทางที่บาลานซ์ทั้งสมรรถนะและความประหยัด ด้วยห้องโดยสารกว้างขวางพร้อมเทคโนโลยีที่ตอบโจทย์ชีวิตประจำวัน"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: efficiencyStoryImage,
          imgAlt: "Shine in Efficiency",
          reverse: true,
          title: "SHINE IN EFFICIENCY",
          subtitle: "Super PHEV",
          body: "เทคโนโลยีปลั๊กอินไฮบริดที่ให้ทั้งความคล่องตัวในเมืองและระยะเดินทางไกล ระยะวิ่ง EV ล้วนสูงสุด 110 กม. และระยะรวมมากกว่า 1,200 กม."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: brochureContentImage,
          imgAlt: "BYD Blade Battery",
          reverse: false,
          title: "BLADE BATTERY",
          subtitle: "Safety Technology",
          body: "แบตเตอรี่ Blade Battery ที่ขึ้นชื่อเรื่องความปลอดภัยและความทนทาน รองรับการใช้งานจริงในทุกวันอย่างมั่นใจ"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: techBanner,
          imgAlt: "Tech & Connected",
          reverse: true,
          title: "SMART TECH",
          subtitle: "Connected Experience",
          body: "ระบบมัลติมีเดียและฟีเจอร์ช่วยขับครบครัน ช่วยให้การเดินทางสะดวกสบายและปลอดภัยยิ่งขึ้น"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ขนาดและมิติ", icon: Ruler, rows: DIMENSIONS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบส่งกำลัง", icon: Zap, rows: DRIVETRAIN }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "สมรรถนะ", icon: Gauge, rows: PERFORMANCE }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบการชาร์จ", icon: Battery, rows: CHARGING }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ช่วงล่างและเบรก", icon: Weight, rows: CHASSIS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "มัลติมีเดียและความสะดวกสบาย", icon: Zap, rows: MULTIMEDIA }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: SAFETY }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD SEALION 5 DM-i" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD SEALION 5 DM-i" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD SEALION 5 DM-i" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(vehicleSchema) } })
  ] });
}
function FeatureBlock({
  img,
  imgAlt,
  title,
  subtitle,
  body,
  reverse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex-1 flex items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-12 lg:px-14 lg:py-16 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-semibold uppercase tracking-widest mb-3", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: body })
    ] }) })
  ] });
}
function SpecTable({ title, icon: Icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2 normal-case", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Dynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: v }) }, idx))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mx-auto", "aria-label": "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-muted-foreground mx-auto", "aria-label": "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$8);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSealion5DmiBrochure, { model: m });
};
export {
  SplitComponent as component
};
