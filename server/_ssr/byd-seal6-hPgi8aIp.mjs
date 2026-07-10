import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as SLUG$7, P as PageShell } from "./router-CcbwebiN.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, e as colorHorizonWhite } from "./models-B69ILCyc.mjs";
import { T as TestDriveForm } from "./TestDriveForm-B96GtcO6.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, G as Gauge, Z as Zap, i as Battery, S as ShieldCheck, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-cjM90p06.mjs";
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
import "./dialog-XhGZLj8j.mjs";
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
const heroBanner = "/assets/seal6-banner-CEWY6Mfq.jpeg";
const storyBladeBatteryImage = "/assets/battery-blade-Ad1EQDWe.jpeg";
const storyEPlatformImage = "/assets/ePlatform-VvKMSec1.jpeg";
const storyInfotainmentImage = "/assets/infotainment-C2_Swx6c.jpeg";
const exteriorLed = "/assets/seal6-exterior-led-Br86Cmiq.jpeg";
const exteriorDigitalKey = "/assets/seal6-exterior-digitalKey-oQlsbRJy.png";
const exteriorFrontTrunk = "/assets/seal6-exterior-frontTrunk-CS3y5-9e.png";
const exteriorVtoL = "/assets/seal6-exterior-vtol-Cz36Dm8d.png";
const exteriorAlloyWheel = "/assets/seal6-exterior-alloyWheel-p664gzZD.png";
const interiorInstrumentDisplay = "/assets/instrumentDisplay-gM1ZC40e.jpeg";
const interiorMultimediaTouchScreen = "/assets/multimediaTouchScreen-D-gDbtIM.png";
const interiorWirelessCharger = "/assets/wirelessCharger-Qqch_P6L.jpeg";
const interiorVentilatedFrontSeats = "/assets/ventilatedFrontSeats-ChJziLku.webp";
const colorHarbourGrey = "/assets/seal6-habour-grey-model-Cg1_kOEm.png";
const colorQuantumBlack = "/assets/seal6-quantum-black-model-DdByK7fv.png";
const colorAshGreen = "/assets/seal6-ash-green-model-DIFXweTc.png";
const VIDEO_URL = "https://storage.googleapis.com/ram_asset_prd/models/seal6/overview/seal6-video.webm";
const TRIMS = [
  {
    key: "dynamic",
    name: "Dynamic",
    price: 799900,
    accel: "10.9",
    range: "485",
    power: "95 kW",
    battery: "56.64 kWh",
    charge: "DC 100 kW"
  },
  {
    key: "premium",
    name: "Premium",
    price: 949900,
    accel: "7.5",
    range: "485",
    power: "160 kW",
    battery: "56.64 kWh",
    charge: "DC 100 kW"
  }
];
const COLORS = [
  {
    name: "Horizon White",
    hex: "#ECECEC",
    border: "#d0d0d0",
    img: colorHorizonWhite,
    note: "Dynamic and Premium"
  },
  {
    name: "Harbour Grey",
    hex: "#71767D",
    border: "#71767D",
    img: colorHarbourGrey,
    note: "Dynamic and Premium"
  },
  {
    name: "Quantum Black",
    hex: "#101114",
    border: "#3c3e44",
    img: colorQuantumBlack,
    note: "Dynamic and Premium"
  },
  {
    name: "Ash Green",
    hex: "#708979",
    border: "#708979",
    img: colorAshGreen,
    note: "Premium only"
  }
];
const EXTERIOR_GALLERY = [
  {
    img: exteriorLed,
    label: "Full-Width LED Headlight",
    desc: "ไฟหน้า LED ดีไซน์เต็มความกว้างตัวรถพร้อมลายเซ็นแสงที่โดดเด่น"
  },
  {
    img: exteriorDigitalKey,
    label: "BYD Digital Key",
    desc: "รองรับกุญแจดิจิทัลและ NFC Card เพิ่มความสะดวกในการใช้งาน"
  },
  {
    img: exteriorFrontTrunk,
    label: "Front Trunk (Frunk)",
    desc: "พื้นที่เก็บสัมภาระด้านหน้าขนาด 65 ลิตร ตอบโจทย์การใช้งานจริง"
  },
  {
    img: exteriorVtoL,
    label: "V2L Function",
    desc: "จ่ายไฟจากรถไปยังอุปกรณ์ภายนอกได้อย่างยืดหยุ่น"
  },
  {
    img: exteriorAlloyWheel,
    label: "18-inch Alloy Wheel",
    desc: "ล้ออัลลอยดีไซน์สปอร์ตพร้อมสมดุลด้านความสวยงามและสมรรถนะ"
  }
];
const INTERIOR_GALLERY = [
  {
    img: interiorInstrumentDisplay,
    label: "8.8-inch Instrument Display",
    desc: "หน้าจอเรือนไมล์ดิจิทัลแสดงข้อมูลการขับขี่ชัดเจน"
  },
  {
    img: interiorMultimediaTouchScreen,
    label: "12.8-inch Multimedia Touchscreen",
    desc: "หน้าจอสัมผัสระบบมัลติมีเดียขนาดใหญ่ รองรับการใช้งานครบครัน"
  },
  {
    img: interiorWirelessCharger,
    label: "Wireless Charger",
    desc: "ชาร์จสมาร์ทโฟนแบบไร้สายเพื่อความสะดวกในทุกการเดินทาง"
  },
  {
    img: interiorVentilatedFrontSeats,
    label: "Ventilated Front Seats",
    desc: "เบาะคู่หน้าระบายอากาศ เพิ่มความสบายระหว่างขับขี่"
  },
  {
    img: storyInfotainmentImage,
    label: "Connected Infotainment",
    desc: "ประสบการณ์ห้องโดยสารแบบดิจิทัล พร้อมฟังก์ชันเชื่อมต่ออัจฉริยะ"
  }
];
const dimensionsRows = [
  { label: "ความยาว (มิลลิเมตร)", dynamic: "4,720", premium: "4,720" },
  { label: "ความกว้าง (มิลลิเมตร)", dynamic: "1,860", premium: "1,860" },
  { label: "ความสูง (มิลลิเมตร)", dynamic: "1,495", premium: "1,495" },
  { label: "ระยะฐานล้อ (มิลลิเมตร)", dynamic: "2,820", premium: "2,820" },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านหน้า (ลิตร)", dynamic: "65", premium: "65" },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", dynamic: "460", premium: "460" },
  { label: "น้ำหนักรถเปล่า (กิโลกรัม)", dynamic: "1,780", premium: "1,800" }
];
const powertrainRows = [
  { label: "ระบบขับเคลื่อน", dynamic: "ขับเคลื่อนล้อหลัง", premium: "ขับเคลื่อนล้อหลัง" },
  {
    label: "ประเภทชุดมอเตอร์ไฟฟ้า",
    dynamic: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร",
    premium: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร"
  },
  { label: "กำลังสูงสุดชุดมอเตอร์ไฟฟ้า (กิโลวัตต์)", dynamic: "95", premium: "160" },
  { label: "แรงบิดสูงสุดชุดมอเตอร์ไฟฟ้า (นิวตัน-เมตร)", dynamic: "220", premium: "330" },
  { label: "อัตราเร่ง 0 - 100 กิโลเมตร / ชั่วโมง (วินาที)", dynamic: "10.9", premium: "7.5" }
];
const chargingRows = [
  { label: "ประเภทแบตเตอรี่", dynamic: "BYD Blade Battery", premium: "BYD Blade Battery" },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์-ชั่วโมง)", dynamic: "56.64", premium: "56.64" },
  { label: "ระยะทางวิ่งสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", dynamic: "485", premium: "485" },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 - กำลังสูงสุด (กิโลวัตต์)", dynamic: "7", premium: "7" },
  { label: "รองรับหัวชาร์จแบบ DC CCS 2 - กำลังสูงสุด (กิโลวัตต์)", dynamic: "100", premium: "100" },
  { label: "ระบบ V2L (Vehicle to Load)", dynamic: "●", premium: "●" },
  { label: "ระบบ Regenerative Braking", dynamic: "●", premium: "●" }
];
const safetyRows = [
  { label: "ถุงลมนิรภัยคู่หน้า", dynamic: "●", premium: "●" },
  { label: "ถุงลมนิรภัยด้านข้าง", dynamic: "●", premium: "●" },
  { label: "ม่านถุงลมนิรภัยด้านข้าง", dynamic: "●", premium: "●" },
  { label: "กล้องมองภาพรอบคัน 360 องศา", dynamic: "●", premium: "●" },
  { label: "ACC", dynamic: "●", premium: "●" },
  { label: "AEB", dynamic: "●", premium: "●" },
  { label: "LDW / LDP", dynamic: "●", premium: "●" },
  { label: "IHBC", dynamic: "●", premium: "●" }
];
const storySections = [
  {
    image: storyBladeBatteryImage,
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "เทคโนโลยีแบตเตอรี่ที่ออกแบบมาเพื่อยกระดับความปลอดภัย ความทนทาน และประสิทธิภาพสำหรับการใช้งานทุกวัน"
  },
  {
    image: storyEPlatformImage,
    title: "e-Platform 3.0 + CTB",
    subtitle: "EV Architecture",
    body: "แพลตฟอร์มรถยนต์ไฟฟ้าที่ผสานโครงสร้าง Cell-to-Body เพื่อความแข็งแรง สมดุลการขับขี่ และความมั่นใจทุกระยะทาง"
  },
  {
    image: storyInfotainmentImage,
    title: "Connected Lifestyle",
    subtitle: "Infotainment",
    body: "ระบบมัลติมีเดียและฟีเจอร์อัจฉริยะที่ช่วยให้ทุกการเดินทางเชื่อมต่อได้ต่อเนื่องและใช้งานง่าย"
  }
];
function toSpecRows(rows) {
  return rows.map((row) => ({
    label: row.label,
    values: [row.dynamic, row.premium]
  }));
}
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
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
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
function BydSeal6Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const installment = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((item) => item.key === trim) ?? TRIMS[1];
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  const handlePlayVideo = reactExports.useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setVideoPlaying(true);
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    {
      q: "BYD SEAL 6 ราคาเท่าไร?",
      a: "Dynamic ราคา 799,900 บาท และ Premium ราคา 949,900 บาท พร้อมโปรโมชันตามช่วงเวลา"
    },
    {
      q: "BYD SEAL 6 วิ่งได้ไกลกี่กิโลเมตร?",
      a: "ระยะทางวิ่งสูงสุด 485 กิโลเมตร ตามมาตรฐาน NEDC"
    },
    {
      q: "BYD SEAL 6 รองรับการชาร์จแบบใด?",
      a: "รองรับ AC Type 2 สูงสุด 7 kW และ DC CCS2 สูงสุด 100 kW พร้อมระบบ V2L"
    },
    {
      q: "ผ่อน BYD SEAL 6 เดือนละเท่าไร?",
      a: `ค่างวดเริ่มต้น ${formatBaht(installment.monthly)}/เดือน (ดาวน์ 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)`
    }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "Sedan",
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[88vh] w-full items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEAL 6", className: "absolute inset-0 h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 pb-16 pt-32 sm:px-12 lg:px-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-block rounded-full border border-primary/40 bg-background/20 px-3 py-1 text-xs text-primary backdrop-blur-sm", children: "Electric Sedan · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-black leading-none tracking-normal sm:text-7xl lg:text-8xl", children: "BYD SEAL 6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl font-light tracking-widest text-muted-foreground sm:text-2xl", children: "UPGRADE YOUR EVERY DRIVE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-end gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ราคาเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient sm:text-4xl", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ผ่อนเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(installment.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/เดือน" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "gradient-accent glow inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white", children: [
              "นัดทดลองขับ ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#installment",
                className: "glass inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm",
                children: "คำนวณค่างวด"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: "Max Range", val: `${currentTrim.range} km` },
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Battery", val: currentTrim.battery },
          { label: "Fast Charge", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl border border-border/40 px-4 py-2 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: item.val })
        ] }, item.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Choose Your Trim" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex flex-wrap justify-center gap-3", children: TRIMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setTrim(item.key),
          className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === item.key ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`,
          children: item.name
        },
        item.key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: currentTrim.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-black text-gradient", children: formatBaht(currentTrim.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#test-drive",
              className: "gradient-accent inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-sm font-semibold text-white sm:self-auto",
              children: [
                "นัดทดลองขับ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "NEDC Range", val: `${currentTrim.range} km` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Battery", val: currentTrim.battery },
          { label: "Fast Charge", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 bg-background/30 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: item.val })
        ] }, item.label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative w-full overflow-hidden bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full", style: { maxHeight: "80vh", aspectRatio: "16/9" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          src: VIDEO_URL,
          poster: heroBanner,
          controls: videoPlaying,
          playsInline: true,
          preload: "metadata",
          className: "h-full w-full object-cover",
          onPlay: () => setVideoPlaying(true)
        }
      ),
      !videoPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-0 flex cursor-pointer flex-col items-center justify-center",
          style: { background: "rgba(0,0,0,0.38)" },
          onClick: handlePlayVideo,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex h-20 w-20 items-center justify-center rounded-full transition-all hover:scale-105",
                style: {
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(6px)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-1 h-8 w-8 fill-white text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg font-semibold uppercase tracking-widest text-white", children: "BYD SEAL 6 - Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* สี Ash Green มีเฉพาะรุ่น Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-10 lg:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.name,
            className: "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
            style: { opacity: activeColor === index ? 1 : 0 }
          },
          item.name
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex min-w-[240px] flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-widest text-muted-foreground", children: "Exterior Colour" }),
          COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveColor(index),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${activeColor === index ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-9 w-9 flex-shrink-0 rounded-full transition-all ${activeColor === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`,
                    style: { background: item.hex, border: `2px solid ${item.border}` },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.note })
                ] })
              ]
            },
            item.name
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "ตอบโจทย์โดดเด่นไม่เหมือนใคร" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center gap-2", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`,
            children: tab === "exterior" ? "ภายนอก" : "ภายใน"
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl bg-surface", style: { aspectRatio: "16/9" }, children: [
        galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.label,
            className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            style: { opacity: activeGallery === index ? 1 : 0 }
          },
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-white", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/70", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-5 gap-3", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveGallery(index),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === index ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "h-full w-full object-cover" })
        },
        item.label
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border", children: storySections.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureBlock,
      {
        img: item.image,
        imgAlt: item.title,
        reverse: index % 2 === 1,
        title: item.title,
        subtitle: item.subtitle,
        body: item.body
      },
      item.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Dimensions & Weight", icon: Gauge, rows: toSpecRows(dimensionsRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Powertrain", icon: Zap, rows: toSpecRows(powertrainRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Charging", icon: Battery, rows: toSpecRows(chargingRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Safety", icon: ShieldCheck, rows: toSpecRows(safetyRows) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "ตารางผ่อน BYD SEAL 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "นัดทดลองขับ BYD SEAL 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD SEAL 6" }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-stretch ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex flex-1 items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl px-8 py-12 lg:px-14 lg:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-widest text-primary", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black leading-tight sm:text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: body })
    ] }) })
  ] });
}
function SpecTable({
  title,
  icon: Icon,
  rows
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-background/40 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-1/2 px-6 py-3 text-left font-medium", children: "Specification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "Dynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: index % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((value, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value }) }, `${row.label}-${cellIndex}`))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "ไม่มี" });
  if (value === "●") return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "มี" });
  if (value === "-") return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$7);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSeal6Brochure, { model: m });
};
export {
  SplitComponent as component
};
