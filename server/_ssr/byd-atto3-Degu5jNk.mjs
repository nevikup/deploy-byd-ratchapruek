import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { n as SLUG$2, P as PageShell, m as heroBanner$2 } from "./router-CTR15R5u.mjs";
import { T as TestDriveForm } from "./TestDriveForm-DzEJFxsH.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, l as colorWhite$4 } from "./models-B69ILCyc.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, R as Ruler, G as Gauge, i as Battery, S as ShieldCheck, o as Sun, p as Sparkles, Z as Zap, n as CircuitBoard, U as Users, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-DeJaANHj.mjs";
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
import "./dialog-adVIVGDd.mjs";
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
const colorGrey = "/assets/new-byd-atto3-grey-CqdX1a3C.webp";
const colorBlack = "/assets/New-BYD-ATTO-3-Black-hND6Lj9l.webp";
const colorSpaceGrey = "/assets/new-atto3-space-grey-B8s-77PI.png";
const imgBladeBattery = "/assets/overview-img-01-CyJdfDVp.webp";
const imgEPlatform = "/assets/overview-img-02-CJoO-7lo.png";
const imgLifestyle = "/assets/new-atto3-description-3-Dpiba0tl.png";
const extImg01 = "/assets/exterior-img-01-B535LPoG.png";
const extImg02 = "/assets/exterior-img-02-BogPWmGe.png";
const extImg03 = "/assets/exterior-img-03-COT4XEIy.png";
const extImg04 = "/assets/exterior-img-04-H7PhNR23.jpeg";
const intImg01 = "/assets/interior-img-01-CbKWI9zA.png";
const intImg02 = "/assets/interior-img-02-DdJhUP3V.png";
const intImg03 = "/assets/interior-img-03-DcW7RmWq.png";
const intImg04 = "/assets/interior-img-04-ChEx7n8Z.png";
const TRIMS = [
  { key: "premium", name: "Premium", price: 669900, accel: "7.9", range: "410", battery: "50.25 kWh", power: "150 kW", torque: "310 Nm" },
  { key: "extended", name: "Extended", price: 849900, accel: "7.3", range: "480", battery: "60.48 kWh", power: "150 kW", torque: "310 Nm" }
];
const COLORS = [
  { name: "Surge White", hex: "#F5F5F2", border: "#d0d0d0", img: colorWhite$4, note: "Premium · Extended" },
  { name: "Harbour Grey", hex: "#7A7E85", border: "#7A7E85", img: colorGrey, note: "Premium · Extended" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorBlack, note: "Premium · Extended" },
  { name: "Space Grey", hex: "#4E5157", border: "#4E5157", img: colorSpaceGrey, note: "Extended only" }
];
const EXTERIOR_GALLERY = [
  { img: extImg01, label: "Crystal LED Headlights", desc: "Chrome brow LED headlights echoed by wide LED tail lights" },
  { img: extImg02, label: "Wave-Formed C-Pillar", desc: "Unique wave-pattern C-pillar adds sporty character" },
  { img: extImg03, label: '18" Aerodynamic Alloy Wheels', desc: '18" alloy wheels designed for aerodynamic efficiency' },
  { img: extImg04, label: "Dynamic Exterior Lines", desc: "Bold sculpted lines create a powerful, dynamic profile" }
];
const INTERIOR_GALLERY = [
  { img: intImg01, label: "Panoramic Sunroof", desc: "One-touch electric panoramic sunroof with anti-pinch protection" },
  { img: intImg02, label: "Red String Door Panels", desc: "Music string-inspired red accent strings on door panels" },
  { img: intImg03, label: "3-Spoke Multifunction Wheel", desc: "Sport-style multifunction steering wheel for intuitive control" },
  { img: intImg04, label: "Finger-touch Electronic Shift", desc: "Dumbbell-shaped air vents with finger-touch electronic gear shift" }
];
const DIMENSIONS = [
  { label: "จำนวนที่นั่ง", values: ["5", "5"] },
  { label: "ความยาว (มม.)", values: ["4,455", "4,455"] },
  { label: "ความกว้าง (มม.)", values: ["1,875", "1,875"] },
  { label: "ความสูง (มม.)", values: ["1,615", "1,615"] },
  { label: "ระยะห่างล้อ หน้า / หลัง (มม.)", values: ["1,575 / 1,580", "1,575 / 1,580"] },
  { label: "ระยะฐานล้อ (มม.)", values: ["2,720", "2,720"] },
  { label: "ความสูงใต้ท้องรถ (ไม่บรรทุก) (มม.)", values: ["175", "175"] },
  { label: "ความสูงใต้ท้องรถ (บรรทุก) (มม.)", values: ["150", "150"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (ม.)", values: ["5.35", "5.35"] },
  { label: "ความจุห้องเก็บสัมภาระ (ลิตร)", values: ["440", "440"] },
  { label: "ความจุห้องเก็บสัมภาระเมื่อพับเบาะหลัง (ลิตร)", values: ["1,340", "1,340"] },
  { label: "น้ำหนักรถเปล่า (กก.)", values: ["1,680", "1,750"] },
  { label: "น้ำหนักรถรวมสูงสุด (กก.)", values: ["2,090", "2,160"] }
];
const PERFORMANCE = [
  { label: "ประเภทมอเตอร์", values: ["มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร"] },
  { label: "กำลังสูงสุด (กิโลวัตต์)", values: ["150", "150"] },
  { label: "แรงบิดสูงสุด (นิวตันเมตร)", values: ["310", "310"] },
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", values: ["7.9", "7.3"] },
  { label: "ระยะทางวิ่ง NEDC (กม.)", values: ["410", "480"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่ (กิโลวัตต์ชั่วโมง)", values: ["50.25", "60.48"] },
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แมคเฟอร์สันสตรัท", "แมคเฟอร์สันสตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["มัลติลิงก์", "มัลติลิงก์"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก"] },
  { label: "ขนาดล้อ", values: ['18"', '18"'] },
  { label: "ขนาดยาง", values: ["235/50 R18", "235/50 R18"] }
];
const CHARGING = [
  { label: "สายชาร์จพกพา (Mode 2)", values: [true, true] },
  { label: "รองรับ AC Type 2 (7 kW)", values: [true, true] },
  { label: "รองรับ DC CCS2 (70 kW)", values: [true, false] },
  { label: "รองรับ DC CCS2 (88 kW)", values: [false, true] },
  { label: "ระบบจ่ายไฟภายนอก V2L", values: [true, true] },
  { label: "อุปกรณ์ V2L", values: [true, true] },
  { label: "ระบบหน่วงพลังงานขณะเบรก", values: [true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า", values: [true, true] },
  { label: "ถุงลมนิรภัยด้านข้างคู่หน้า", values: [true, true] },
  { label: "ถุงลมนิรภัยกลางระหว่างผู้ขับและผู้โดยสาร", values: [true, true] },
  { label: "ถุงลมนิรภัยม่านด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย (หน้าและหลัง)", values: [true, true] },
  { label: "TPMS ระบบตรวจวัดแรงดันลมยาง", values: [true, true] },
  { label: "จุดยึดเบาะนั่งเด็ก ISOFIX", values: [true, true] },
  { label: "ABS ระบบป้องกันล้อล็อก", values: [true, true] },
  { label: "EPB เบรกมือไฟฟ้า", values: [true, true] },
  { label: "ESP ระบบควบคุมเสถียรภาพการทรงตัว", values: [true, true] },
  { label: "TCS ระบบควบคุมการลื่นไถล", values: [true, true] },
  { label: "EBD ระบบกระจายแรงเบรก", values: [true, true] },
  { label: "HDC ระบบช่วยลงทางลาดชัน", values: [true, true] },
  { label: "AVH ระบบหน่วงเบรกอัตโนมัติ", values: [true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [true, true] },
  { label: "เซ็นเซอร์ช่วยจอด หน้า 2 / หลัง 4 จุด", values: [true, true] },
  { label: "ACC-S&G ระบบควบคุมความเร็วอัตโนมัติแบบหยุดและไปต่อ", values: [true, true] },
  { label: "AEB ระบบเบรกฉุกเฉินอัตโนมัติ", values: [true, true] },
  { label: "FCW ระบบเตือนการชนด้านหน้า", values: [true, true] },
  { label: "RCW ระบบเตือนการชนด้านหลัง", values: [true, true] },
  { label: "BSD ระบบเตือนจุดอับสายตา", values: [true, true] },
  { label: "DOW ระบบเตือนก่อนเปิดประตู", values: [true, true] },
  { label: "LDW ระบบเตือนเมื่อออกนอกเลน", values: [true, true] },
  { label: "LKA ระบบช่วยควบคุมรถให้อยู่ในเลน", values: [true, true] },
  { label: "RCTA ระบบเตือนรถตัดผ่านขณะถอยหลัง", values: [true, true] },
  { label: "RCTB ระบบเบรกเมื่อมีรถตัดผ่านขณะถอยหลัง", values: [true, true] }
];
const EXTERIOR_SPEC = [
  { label: "หลังคาซันรูฟพาโนรามา (ไฟฟ้า One-touch พร้อมระบบกันหนีบ)", values: [true, true] },
  { label: "ประตูท้ายไฟฟ้า (One-touch)", values: [true, true] },
  { label: "ราวหลังคา", values: [true, true] },
  { label: "กระจกมองข้างปรับและพับไฟฟ้า", values: [true, true] }
];
const INTERIOR_SPEC = [
  { label: "พวงมาลัยมัลติฟังก์ชัน", values: [true, true] },
  { label: "หน้าจอผู้ขับขี่ดิจิทัล 5 นิ้ว", values: [true, true] },
  { label: "เบาะหุ้มหนังสังเคราะห์", values: [true, true] },
  { label: "พนักพิงเบาะหลังพับแยก 60:40", values: [true, true] },
  { label: "เบาะคนขับปรับไฟฟ้า 6 ทิศทาง", values: [true, true] },
  { label: "เบาะผู้โดยสารหน้าปรับไฟฟ้า 4 ทิศทาง", values: [true, true] },
  { label: "EPS พวงมาลัยเพาเวอร์ไฟฟ้า", values: [true, true] }
];
const LIGHTING = [
  { label: "ไฟหน้า LED", values: [true, true] },
  { label: "ระบบไฟหน้า Follow-Me-Home", values: [true, true] },
  { label: "AFL ระบบไฟหน้าปรับตามการเลี้ยว", values: [true, true] },
  { label: "ไฟท้าย LED", values: [true, true] },
  { label: "ไฟสร้างบรรยากาศภายในห้องโดยสารแบบ RGB", values: [true, true] },
  { label: "ไฟสร้างบรรยากาศตามจังหวะเสียงเพลง", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัสอินโฟเทนเมนต์ 15.6 นิ้ว", values: [true, true] },
  { label: "ระบบเสียง Dirac HD (8 ลำโพง)", values: [true, true] },
  { label: "วิทยุ FM", values: [true, true] },
  { label: "การเชื่อมต่อโทรศัพท์ผ่าน Bluetooth", values: [true, true] },
  { label: "Apple CarPlay และ Android Auto", values: [true, true] },
  { label: "สั่งงานด้วยเสียงภาษาไทย", values: [true, true] },
  { label: "ระบบนำทาง", values: [true, true] },
  { label: "สตรีมมิงเพลง", values: [true, true] },
  { label: "พอร์ต USB-C และ USB-A ด้านหน้า (อย่างละ 1)", values: [true, true] },
  { label: "พอร์ต USB-C และ USB-A ด้านหลัง (อย่างละ 1)", values: [true, true] }
];
const COMFORT = [
  { label: "แท่นชาร์จไร้สาย", values: [true, true] },
  { label: "ช่องจ่ายไฟ 12V (คอนโซลกลาง)", values: [true, true] },
  { label: "ระบบกุญแจอัจฉริยะและปุ่มสตาร์ท", values: [true, true] },
  { label: "NFC Card Key", values: [true, true] },
  { label: "ระบบปรับอากาศอัตโนมัติ", values: [true, true] },
  { label: "ไส้กรองอากาศประสิทธิภาพสูง CN95", values: [true, true] },
  { label: "ระบบกรองอากาศ PM2.5 (พร้อมแสดงผล)", values: [true, true] },
  { label: "ฮีตเตอร์", values: [true, true] },
  { label: "กระจกไฟฟ้า One-Touch พร้อมระบบกันหนีบ", values: [true, true] },
  { label: "พื้นที่เก็บของคอนโซลกลาง", values: [true, true] },
  { label: "ชุดซ่อมยางฉุกเฉินพร้อมปั๊มลม", values: [true, true] }
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
function BydAtto3Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("extended");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 20, 5, 2.49);
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
    { q: "BYD ATTO 3 ราคาเท่าไร?", a: "Premium ฿669,900 · Extended ฿849,900 ทีมงานพร้อมแจ้งโปรโมชั่นล่าสุดทุกรุ่น" },
    { q: "BYD ATTO 3 วิ่งได้ไกลกี่กิโลเมตร?", a: "Premium 410 กม. · Extended 480 กม. (NEDC Range)" },
    { q: "BYD ATTO 3 เร่ง 0-100 ได้กี่วินาที?", a: "Premium 7.9 วิ · Extended 7.3 วิ พร้อมกำลัง 150 kW แรงบิด 310 Nm" },
    { q: "ระบบชาร์จเป็นอย่างไร?", a: "รองรับ AC Type 2 (7 kW) · DC CCS2 70 kW (Premium) / 88 kW (Extended) พร้อม V2L" },
    { q: `ผ่อน BYD ATTO 3 เดือนละเท่าไร?`, a: `ค่างวดเริ่มต้น ${formatBaht(r.monthly)}/เดือน (ดาวน์ 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)` }
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner$2, alt: "BYD ATTO 3", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Electric SUV · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD ATTO 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "ENERGY AWAKEN" })
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
          { label: "Max Range", val: "480 km" },
          { label: "0-100 km/h", val: "7.3 sec" },
          { label: "Max Power", val: "150 kW" },
          { label: "Max Torque", val: "310 Nm" },
          { label: "Battery", val: "60.48 kWh" }
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
          src: "https://storage.googleapis.com/ram_asset_prd/models/new-atto3/new-atto3-video.mp4",
          poster: heroBanner$2,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: "BYD ATTO 3 — Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* Space Grey มีเฉพาะรุ่น Extended เท่านั้น" })
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
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveGallery(i),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" })
        },
        i
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgBladeBattery,
          imgAlt: "BYD Blade Battery",
          reverse: false,
          title: "BLADE BATTERY",
          subtitle: "Safety Technology",
          body: "นวัตกรรมใหม่ของเทคโนโลยีแบตเตอรี่ เอกสิทธิ์เฉพาะของ BYD ให้ความปลอดภัยสูงสุด มั่นใจได้ทุกการขับขี่"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgEPlatform,
          imgAlt: "e-Platform 3.0",
          reverse: true,
          title: "e-Platform 3.0",
          subtitle: "Next-Gen EV Architecture",
          body: "แพลตฟอร์มแห่งอนาคตที่ยกระดับการขับขี่รถยนต์พลังงานไฟฟ้าไปอีกขั้น ทั้งอัตราเร่ง ระยะทางการขับขี่ ความเร็วในการชาร์จ เกาะถนนเป็นเยี่ยม ตลอดจนความนุ่มนวลในทุกการขับขี่"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgLifestyle,
          imgAlt: "INFOTAINMENT & LIFESTYLE",
          reverse: false,
          title: "INFOTAINMENT & LIFESTYLE",
          subtitle: "Smart Living",
          body: "ปลุกทุกความตื่นเต้นเร้าใจ ด้วยสุนทรียภาพของการขับขี่เหนือระดับตลอดการเดินทาง ด้วยฟังก์ชันการใช้งานที่ล้ำสมัย ตอบโจทย์ไลฟ์สไตล์คนเมืองอย่างแท้จริง"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Premium · Extended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ขนาดและมิติ", icon: Ruler, rows: DIMENSIONS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "สมรรถนะและช่วงล่าง", icon: Gauge, rows: PERFORMANCE }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบการชาร์จ", icon: Battery, rows: CHARGING }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: SAFETY }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "อุปกรณ์ภายนอก", icon: Sun, rows: EXTERIOR_SPEC }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "อุปกรณ์ภายใน", icon: Sparkles, rows: INTERIOR_SPEC }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบไฟส่องสว่าง", icon: Zap, rows: LIGHTING }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "มัลติมีเดียและอินโฟเทนเมนต์", icon: CircuitBoard, rows: MULTIMEDIA }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ความสะดวกสบาย", icon: Users, rows: COMFORT }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD ATTO 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD ATTO 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD ATTO 3" }),
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
function SpecTable2({ title, icon: Icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2 normal-case", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Extended" })
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
  const m = getModel(SLUG$2);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydAtto3Brochure, { model: m });
};
export {
  SplitComponent as component
};
