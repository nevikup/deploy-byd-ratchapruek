import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { o as SLUG$1, P as PageShell } from "./router-CP7xKW28.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, n as colorSurgeWhite } from "./models-B69ILCyc.mjs";
import { T as TestDriveForm } from "./TestDriveForm-BP3YGhpv.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, U as Users, G as Gauge, i as Battery, S as ShieldCheck, n as CircuitBoard, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-BdZ_lyIR.mjs";
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
import "./dialog-O_8uMEii.mjs";
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
const heroBanner = "/assets/atto2-banner-desktop-BjuWDwJy.png";
const storyCompactSuvImage = "/assets/atto2-description-compact-suv-Czi8QWBs.jpeg";
const storyDesignConceptImage = "/assets/atto2-description-1-BAAPfgXx.webp";
const storyEPlatformImage = "/assets/atto2-description-2-CF3cjXDj.jpeg";
const exteriorDragonFace = "/assets/exterior-dragonFace-Ch95_KDc.png";
const exteriorHeadLight = "/assets/exterior-headLight-Dz5_tZt_.png";
const exteriorTailLight = "/assets/exterior-tailLight-C_KdX3fz.png";
const exteriorAlloyWheels = "/assets/exterior-alloyWheels-FSO7R1Yy.png";
const interiorLcdDigital = "/assets/interior-lcdDigital-GsUlscte.png";
const interiorMultimediaScreen = "/assets/interior-multimediaScreen-vshdQRU_.png";
const interiorFrontSeats = "/assets/interior-frontSeats-CLIjETUW.png";
const interiorRearSeats = "/assets/interior-rearSeats-sIm-4Ju6.png";
const colorMinimalGreen = "/assets/atto2-minimal-green-model-Cw1seS3h.png";
const colorHarbourGrey = "/assets/atto2-harbour-grey-model-B_LSKQNv.png";
const colorQuantumBlack = "/assets/atto2-quantum-black-D0qNkSFn.png";
const VIDEO_URL = "https://storage.googleapis.com/ram_asset_prd/models/atto2/overview/designs/atto2-video-thumbnail.mov";
const TRIMS = [
  { key: "dynamic", name: "Dynamic", price: 629900, accel: "7.9", range: "410", battery: "51.13 kWh", power: "130 kW", torque: "290 Nm" },
  { key: "premium", name: "Premium", price: 659900, accel: "7.9", range: "410", battery: "51.13 kWh", power: "130 kW", torque: "290 Nm" }
];
const COLORS = [
  { name: "Minimal Green", hex: "#8AA48E", border: "#8AA48E", img: colorMinimalGreen, note: "Dynamic · Premium" },
  { name: "Harbour Grey", hex: "#6A6D73", border: "#6A6D73", img: colorHarbourGrey, note: "Dynamic · Premium" },
  { name: "Surge White", hex: "#F3F3F0", border: "#DADADA", img: colorSurgeWhite, note: "Dynamic · Premium" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorQuantumBlack, note: "Dynamic · Premium" }
];
const EXTERIOR_GALLERY = [
  { img: exteriorDragonFace, label: "Dragon Face", desc: "กระจังหน้าดีไซน์ Dragon Face เอกลักษณ์ของ ATTO 2" },
  { img: exteriorHeadLight, label: "Full LED Headlights", desc: "ไฟหน้า Full LED พร้อมไฟส่องสว่างกลางวัน" },
  { img: exteriorTailLight, label: "Möbius Ring Tail Light", desc: "ไฟท้าย LED ดีไซน์ต่อเนื่องโดดเด่นยามค่ำคืน" },
  { img: exteriorAlloyWheels, label: "17-inch Alloy Wheels", desc: "ล้ออัลลอย 17 นิ้วบาลานซ์ทั้งลุคและสมรรถนะ" }
];
const INTERIOR_GALLERY = [
  { img: interiorLcdDigital, label: "8.8-inch Driver Display", desc: "หน้าจอผู้ขับขี่ขนาด 8.8 นิ้ว มองชัดทุกข้อมูลสำคัญ" },
  { img: interiorMultimediaScreen, label: "12.8-inch Touchscreen", desc: "หน้าจอกลางขนาดใหญ่พร้อมระบบเชื่อมต่อครบ" },
  { img: interiorFrontSeats, label: "Ventilated Front Seats", desc: "เบาะคู่หน้าปรับไฟฟ้าพร้อมระบบระบายอากาศในรุ่น Premium" },
  { img: interiorRearSeats, label: "Flexible Rear Cabin", desc: "เบาะหลังพับ 60:40 รองรับสัมภาระได้สูงสุด 1,320 ลิตร" }
];
const DIMENSIONS = [
  { label: "ความยาว (มม.)", values: ["4,310", "4,310"] },
  { label: "ความกว้าง (มม.)", values: ["1,830", "1,830"] },
  { label: "ความสูง (มม.)", values: ["1,675", "1,675"] },
  { label: "ระยะฐานล้อ (มม.)", values: ["2,620", "2,620"] },
  { label: "ระยะต่ำสุดจากพื้น (มม.)", values: ["170", "170"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (ม.)", values: ["5.25", "5.25"] },
  { label: "น้ำหนักรถเปล่า (กก.)", values: ["1,555", "1,555"] },
  { label: "น้ำหนักรถรวมสูงสุด (กก.)", values: ["1,965", "1,965"] },
  { label: "ความจุห้องเก็บสัมภาระ (ลิตร)", values: ["380 / 1,320", "380 / 1,320"] }
];
const PERFORMANCE = [
  { label: "ระบบขับเคลื่อน", values: ["ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า"] },
  { label: "ประเภทมอเตอร์", values: ["แม่เหล็กถาวรแบบซิงโครนัส", "แม่เหล็กถาวรแบบซิงโครนัส"] },
  { label: "กำลังสูงสุด (กิโลวัตต์)", values: ["130", "130"] },
  { label: "แรงบิดสูงสุด (นิวตันเมตร)", values: ["290", "290"] },
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", values: ["7.9", "7.9"] },
  { label: "ระยะทางวิ่ง NEDC (กม.)", values: ["410", "410"] },
  { label: "ช่วงล่างหน้า / หลัง", values: ["แมคเฟอร์สันสตรัท / ทอร์ชันบีม", "แมคเฟอร์สันสตรัท / ทอร์ชันบีม"] }
];
const CHARGING = [
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่ (กิโลวัตต์ชั่วโมง)", values: ["51.13", "51.13"] },
  { label: "สายชาร์จพกพา (Mode 2)", values: [true, true] },
  { label: "กำลังชาร์จ AC Type 2 สูงสุด (กิโลวัตต์)", values: ["7", "7"] },
  { label: "กำลังชาร์จ DC CCS2 สูงสุด (กิโลวัตต์)", values: ["82", "82"] },
  { label: "ระบบจ่ายไฟภายนอก V2L", values: [true, true] },
  { label: "ระบบหน่วงพลังงานขณะเบรก", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอมัลติมีเดีย", values: ["10.1 นิ้ว", "12.8 นิ้ว"] },
  { label: "ระบบลำโพง", values: ["4 ลำโพง", "8 ลำโพง"] },
  { label: "Wireless Apple CarPlay / Android Auto", values: [true, true] },
  { label: "สั่งงานด้วยเสียง ภาษาไทย / อังกฤษ", values: [true, true] },
  { label: "แท่นชาร์จไร้สาย", values: [false, true] },
  { label: "NFC Card / Digital Key", values: [true, true] },
  { label: "อัปเดตซอฟต์แวร์ OTA", values: [true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า", values: [true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [false, true] },
  { label: "เซ็นเซอร์ช่วยจอดด้านหน้า", values: [false, true] },
  { label: "เซ็นเซอร์ช่วยจอดด้านหลัง", values: [true, true] },
  { label: "LDW / AEB", values: [true, true] },
  { label: "BSD / RCTA / RCTB / DOW", values: [false, true] },
  { label: "ACC / ICC", values: [false, true] },
  { label: "TSR / ISLC", values: [false, true] },
  { label: "จุดยึดเบาะนั่งเด็ก ISOFIX", values: [true, true] }
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
function BydAtto2Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 20, 6, 2.79);
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
    { q: "BYD ATTO 2 ราคาเท่าไร?", a: "Dynamic 629,900 บาท · Premium 659,900 บาท พร้อมโปรโมชันล่าสุดจากทีมที่ปรึกษา" },
    { q: "วิ่งได้ไกลเท่าไร?", a: "วิ่งได้สูงสุด 410 กม. ตามมาตรฐาน NEDC" },
    { q: "รองรับการชาร์จแบบไหน?", a: "รองรับ AC Type 2 สูงสุด 7 kW, DC CCS2 สูงสุด 82 kW และรองรับ V2L" },
    { q: "ผ่อนเริ่มต้นเดือนละเท่าไร?", a: `ค่างวดเริ่มต้นประมาณ ${formatBaht(r.monthly)}/เดือน (ดาวน์ 20% ผ่อน 72 งวด ดอกเบี้ย 2.79%)` }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "SUV",
    fuelType: "Electric",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD ATTO 2", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Compact SUV EV · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD ATTO 2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "FOR THE WAY YOU MOVE" })
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
          { label: "Range", val: "410 km" },
          { label: "0-100 km/h", val: "7.9 sec" },
          { label: "Max Power", val: "130 kW" },
          { label: "Max Torque", val: "290 Nm" },
          { label: "Battery", val: "51.13 kWh" }
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "NEDC Range", val: `${currentTrim.range} km` },
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
      !videoPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center cursor-pointer", style: { background: "rgba(0,0,0,0.38)" }, onClick: handlePlayVideo, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full flex items-center justify-center transition-all hover:scale-105", style: { background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", backdropFilter: "blur(6px)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-8 w-8 text-white fill-white ml-1" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: "BYD ATTO 2 — Official Film" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "เลือกสีที่ใช่สำหรับคุณ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.name, className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500", style: { opacity: activeColor === i ? 1 : 0 } }, c.name)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex flex-col gap-3 min-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Exterior Colour" }),
          COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveColor(i),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 text-left ${activeColor === i ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-9 w-9 rounded-full flex-shrink-0 transition-all ${activeColor === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`, style: { background: c.hex, border: `2px solid ${c.border}` }, "aria-hidden": true }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ดีไซน์รอบคันที่พร้อมสำหรับทุกไลฟ์สไตล์" })
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
        galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500", style: { opacity: activeGallery === i ? 1 : 0 } }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveGallery(i), className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`, style: { aspectRatio: "16/9" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" }) }, i)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyCompactSuvImage, imgAlt: "Compact SUV", reverse: false, title: "FOR THE WAY YOU MOVE", subtitle: "Compact SUV EV", body: "รถยนต์ไฟฟ้า Compact SUV ที่ผสานดีไซน์โดดเด่น ความคล่องตัว และการใช้งานทุกวัน" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyDesignConceptImage, imgAlt: "Design Concept", reverse: true, title: "DRAGON FACE DESIGN", subtitle: "Signature Styling", body: "เส้นสายภายนอกที่พลิ้วไหวแต่ดุดัน พร้อมเอกลักษณ์เฉพาะตัวในทุกมุมมอง" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyEPlatformImage, imgAlt: "e-Platform and Blade Battery", reverse: false, title: "e-PLATFORM 3.0 + BLADE BATTERY", subtitle: "Core Technology", body: "ยกระดับสมรรถนะ ความปลอดภัย และประสิทธิภาพการใช้งานในรถยนต์ไฟฟ้ารุ่นใหม่" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "มิติและน้ำหนัก", icon: Users, rows: DIMENSIONS, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "สมรรถนะ", icon: Gauge, rows: PERFORMANCE, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "แบตเตอรี่และการชาร์จ", icon: Battery, rows: CHARGING, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ความปลอดภัย", icon: ShieldCheck, rows: SAFETY, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "มัลติมีเดียและความสะดวกสบาย", icon: CircuitBoard, rows: MULTIMEDIA, leftHeader: "Dynamic", rightHeader: "Premium" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD ATTO 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD ATTO 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD ATTO 2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(vehicleSchema) } })
  ] });
}
function FeatureBlock({ img, imgAlt, title, subtitle, body, reverse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex-1 flex items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-12 lg:px-14 lg:py-16 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-semibold uppercase tracking-widest mb-3", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: body })
    ] }) })
  ] });
}
function SpecTable2({
  title,
  icon: Icon,
  rows,
  leftHeader,
  rightHeader
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2 normal-case", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: leftHeader }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: rightHeader })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell2, { value: v }) }, idx))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell2({ value }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mx-auto", "aria-label": "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-muted-foreground mx-auto", "aria-label": "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$1);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydAtto2Brochure, { model: m });
};
export {
  SplitComponent as component
};
