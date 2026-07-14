import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as SLUG$6, P as PageShell } from "./router-sfM3cCIZ.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { g as getInstallmentModel, c as calcInstallment, f as formatBaht, h as colorWhite } from "./models-B69ILCyc.mjs";
import { T as TestDriveForm } from "./TestDriveForm-CdtgE2_T.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, R as Ruler, G as Gauge, i as Battery, m as Weight, S as ShieldCheck, n as CircuitBoard, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-B5sCLhvk.mjs";
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
import "./dialog-DzN8g11l.mjs";
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
const heroBanner = "/assets/byd-seal-5-dm-i-banner-overview-desktop2-DPBl97ky.jpeg";
const contentImage = "/assets/byd-seal-5-dm-i-content-desktop-BTQB4_n3.jpeg";
const newCarImage = "/assets/newcar-DhURfDfX.webp";
const newMotorImage = "/assets/newmotor-DDkMhaO4.webp";
const frontGrille = "/assets/frontGrille-BoezNJTo.jpeg";
const ledFront = "/assets/ledFront-Bz-uPIC0.jpeg";
const ledBack = "/assets/ledBack-BqXkCPWS.jpeg";
const wheels = "/assets/wheels-AM5ZSQTH.jpeg";
const chargingPort = "/assets/chargingPort-BIS2GRZv.jpeg";
const chargingTool = "/assets/chargingTool-DEjj5fvC.jpeg";
const premiumDesign = "/assets/premiumDesign-BbKiyX__.jpeg";
const consoleImage = "/assets/console-DXHDtFt3.jpeg";
const monitorImage = "/assets/monitor-dt1aYYqw.jpeg";
const seatImage = "/assets/seat-DfXeBdfu.jpeg";
const armrestImage = "/assets/armrest-CGKF5xPK.jpeg";
const storageImage = "/assets/storage-DV0wPeIN.jpeg";
const colorGrey = "/assets/seal5-dm-i-graphite-grey-D9ta7olx.png";
const colorBlack = "/assets/seal5-dm-i-quantum-black-DM2OVear.png";
const VIDEO_URL = "https://storage.googleapis.com/ram_asset_prd/models/seal5Dmi/seal5-video.mp4";
const TRIMS = [
  {
    key: "standard",
    name: "Standard",
    price: 599900,
    accel: "7.6",
    evRange: "85",
    battery: "13.08 kWh",
    motor: "145 kW"
  },
  {
    key: "dynamic",
    name: "Dynamic",
    price: 659900,
    accel: "7.6",
    evRange: "85",
    battery: "13.08 kWh",
    motor: "145 kW"
  },
  {
    key: "premium",
    name: "Premium",
    price: 699900,
    accel: "7.5",
    evRange: "120",
    battery: "18.3 kWh",
    motor: "145 kW"
  }
];
const COLORS = [
  {
    name: "Horizon White",
    hex: "#f2f3f4",
    border: "#dadada",
    note: "Standard / Dynamic",
    image: colorWhite
  },
  {
    name: "Harbour Grey",
    hex: "#63666d",
    border: "#63666d",
    note: "Premium only",
    image: colorGrey
  },
  {
    name: "Quantum Black",
    hex: "#131416",
    border: "#353535",
    note: "Standard / Dynamic",
    image: colorBlack
  }
];
const EXTERIOR_GALLERY = [
  { title: "Dot Matrix Grille", image: frontGrille },
  { title: "Starlight Full LED Headlights", image: ledFront },
  { title: "Full LED Tail Light + Light Bar", image: ledBack },
  { title: "17-inch Two-tone Alloy Wheels", image: wheels },
  { title: "AC Type 2 Charging Port", image: chargingPort },
  { title: "VtoL Support", image: chargingTool }
];
const INTERIOR_GALLERY = [
  { title: "Double Layer Cabin Design", image: premiumDesign },
  { title: "Smart Control Center Console", image: consoleImage },
  { title: "12.8-inch Touchscreen", image: monitorImage },
  { title: "Electric Front Seats", image: seatImage },
  { title: "Rear Armrest + Cup Holders", image: armrestImage },
  { title: "450L Rear Cargo Space", image: storageImage }
];
const DIMENSIONS = [
  { label: "ความยาว (มม.)", value: "4,780" },
  { label: "ความกว้าง (มม.)", value: "1,837" },
  { label: "ความสูง (มม.)", value: "1,495" },
  { label: "ระยะห่างล้อ หน้า / หลัง (มม.)", value: "1,580 / 1,590" },
  { label: "ระยะฐานล้อ (มม.)", value: "2,718" },
  { label: "ความสูงใต้ท้องรถ (บรรทุกเต็ม) (มม.)", value: "120" },
  { label: "รัศมีวงเลี้ยวแคบสุด (ม.)", value: "5.5" },
  { label: "ความจุห้องเก็บสัมภาระท้าย (ลิตร)", value: "450" }
];
const POWERTRAIN = [
  { label: "ระบบขับเคลื่อน", standard: "ขับเคลื่อนล้อหน้า", dynamic: "ขับเคลื่อนล้อหน้า", premium: "ขับเคลื่อนล้อหน้า" },
  {
    label: "ประเภทมอเตอร์ไฟฟ้าด้านหน้า",
    standard: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร",
    dynamic: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร",
    premium: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร"
  },
  { label: "กำลังมอเตอร์ไฟฟ้าสูงสุด (กิโลวัตต์)", standard: "145", dynamic: "145", premium: "145" },
  { label: "แรงบิดมอเตอร์ไฟฟ้าสูงสุด (นิวตันเมตร)", standard: "300", dynamic: "300", premium: "300" },
  {
    label: "ประเภทเครื่องยนต์",
    standard: "Xiaoyun 1.5L PHEV",
    dynamic: "Xiaoyun 1.5L PHEV",
    premium: "Xiaoyun 1.5L PHEV"
  },
  { label: "กำลังเครื่องยนต์สูงสุด (กิโลวัตต์)", standard: "72", dynamic: "72", premium: "72" },
  { label: "แรงบิดเครื่องยนต์สูงสุด (นิวตันเมตร)", standard: "122", dynamic: "122", premium: "122" },
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", standard: "7.6", dynamic: "7.6", premium: "7.5" },
  { label: "โหมดการขับขี่", standard: "ECO / Normal / Sport", dynamic: "ECO / Normal / Sport", premium: "ECO / Normal / Sport" },
  { label: "ความจุถังน้ำมัน (ลิตร)", standard: "45", dynamic: "45", premium: "45" }
];
const ENERGY = [
  { label: "ระยะทางวิ่งไฟฟ้าล้วน (NEDC) (กม.)", standard: "85", dynamic: "85", premium: "120" },
  { label: "รองรับกำลังชาร์จ AC Type 2 สูงสุด (กิโลวัตต์)", standard: "6.6", dynamic: "6.6", premium: "6.6" },
  { label: "อุปกรณ์ระบบ VtoL", standard: false, dynamic: false, premium: true },
  {
    label: "ประเภทแบตเตอรี่",
    standard: "BYD Blade Battery (LFP)",
    dynamic: "BYD Blade Battery (LFP)",
    premium: "BYD Blade Battery (LFP)"
  },
  { label: "ความจุแบตเตอรี่ (กิโลวัตต์ชั่วโมง)", standard: "13.08", dynamic: "13.08", premium: "18.3" }
];
const CHASSIS = [
  { label: "ระบบกันสะเทือนด้านหน้า", value: "แมคเฟอร์สันสตรัท" },
  { label: "ระบบกันสะเทือนด้านหลัง", value: "ทอร์ชันบีม" },
  { label: "ระบบเบรกด้านหน้า", value: "ดิสก์เบรกแบบระบายอากาศ" },
  { label: "ระบบเบรกด้านหลัง", value: "ดิสก์เบรก" },
  { label: "ล้ออัลลอย", value: "17 นิ้ว" },
  { label: "ขนาดยาง", value: "215/55 R17" }
];
const SAFETY = [
  { label: "กล้องมองหลัง", standard: true, dynamic: false, premium: false },
  { label: "กล้องมองภาพรอบคัน 360 องศา", standard: false, dynamic: true, premium: true },
  { label: "เซ็นเซอร์ช่วยจอดด้านหน้า", standard: false, dynamic: false, premium: "2" },
  { label: "เซ็นเซอร์ช่วยจอดด้านหลัง", standard: "4", dynamic: "4", premium: "4" },
  { label: "BSD", standard: false, dynamic: false, premium: true },
  { label: "RCTA", standard: false, dynamic: false, premium: true }
];
const MULTIMEDIA = [
  { label: "ขนาดหน้าจอสัมผัส", standard: "10.1 นิ้ว", dynamic: "12.8 นิ้ว", premium: "12.8 นิ้ว" },
  { label: "จำนวนลำโพง", standard: "4", dynamic: "6", premium: "8" },
  { label: "แท่นชาร์จไร้สาย", standard: false, dynamic: false, premium: true },
  { label: "BYD Digital Key", standard: false, dynamic: true, premium: true },
  { label: "อินเทอร์เน็ต + BYD App + OTA", standard: false, dynamic: true, premium: true }
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
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      },
      children
    }
  );
}
function BydSeal5DmiBrochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((t) => t.key === trim);
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  reactExports.useEffect(() => setActiveGallery(0), [galleryTab]);
  const faqs = [
    { q: "BYD SEAL 5 DM-i ราคาเท่าไร?", a: "Standard ฿599,900 · Dynamic ฿659,900 · Premium ฿699,900" },
    { q: "วิ่งไฟฟ้าล้วนได้ไกลเท่าไร?", a: "Standard/Dynamic 85 กม. และ Premium 120 กม. (NEDC)" },
    { q: "รองรับการชาร์จแบบไหน?", a: "รองรับ AC Type 2 สูงสุด 6.6 kW และรุ่น Premium รองรับอุปกรณ์ VtoL" },
    { q: "ผ่อนเริ่มต้นเท่าไร?", a: `เริ่มต้นประมาณ ${formatBaht(r.monthly)}/เดือน ตามเงื่อนไขดาวน์ 20% ผ่อน 60 งวด` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full min-h-[88vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEAL 5 DM-i", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Plug-in Hybrid Sedan · DM-i Super PHEV" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD SEAL 5 DM-i" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "UNLEASH YOUR IMAGINATION" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: "System Power", val: "160 kW" },
          { label: "Motor Power", val: "145 kW" },
          { label: "Motor Torque", val: "300 Nm" },
          { label: "0-100 km/h", val: "7.5 sec" },
          { label: "Premium EV Range", val: "120 km" }
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Price", value: formatBaht(currentTrim.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "0-100 km/h", value: `${currentTrim.accel} sec` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "EV Range", value: `${currentTrim.evRange} km` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Battery", value: currentTrim.battery }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Motor", value: currentTrim.motor })
      ] }) }) })
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
          onClick: () => {
            if (videoRef.current) {
              void videoRef.current.play();
              setVideoPlaying(true);
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-20 w-20 rounded-full flex items-center justify-center transition-all hover:scale-105",
                style: {
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(6px)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-8 w-8 text-white fill-white ml-1" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: "BYD SEAL 5 DM-i — Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* Harbour Grey มีเฉพาะรุ่น Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500", style: { opacity: activeColor === i ? 1 : 0 } }, c.name)) }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "UNLEASH SUPER STYLE" })
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
        galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500", style: { opacity: activeGallery === i ? 1 : 0 } }, item.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].title }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveGallery(i),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-60 hover:opacity-90"}`,
          style: { aspectRatio: "16/10" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover" })
        },
        item.title
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: contentImage,
          title: "UNLEASH YOUR IMAGINATION",
          subtitle: "Ocean Aesthetic",
          body: "ดีไซน์สปอร์ตพรีเมียมที่ได้รับแรงบันดาลใจจากมหาสมุทร ถ่ายทอดความดุดันและความลื่นไหลในทุกเส้นสาย",
          reverse: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: newMotorImage,
          title: "UNLEASH SUPER POWER",
          subtitle: "Hybrid Innovation",
          body: "เทคโนโลยี DM-i Super PHEV ผสานมอเตอร์ไฟฟ้ากำลังสูงกับเครื่องยนต์ 1.5L เพื่อสมรรถนะและความประหยัดในชีวิตประจำวัน",
          reverse: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: newCarImage,
          title: "DM-i Super PHEV",
          subtitle: "Core Technology",
          body: "ขับเคลื่อนด้วย BYD Blade Battery ความปลอดภัยสูงและระบบปลั๊กอินไฮบริดอัจฉริยะที่ตอบสนองได้ทันใจ",
          reverse: false
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleSpec, { title: "ขนาดและมิติ", icon: Ruler, rows: DIMENSIONS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSpec, { title: "ระบบส่งกำลังและสมรรถนะ", icon: Gauge, rows: POWERTRAIN }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSpec, { title: "พลังงานและแบตเตอรี่", icon: Battery, rows: ENERGY }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleSpec, { title: "ช่วงล่าง เบรก และล้อ", icon: Weight, rows: CHASSIS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSpec, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: SAFETY }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSpec, { title: "มัลติมีเดียและความสะดวกสบาย", icon: CircuitBoard, rows: MULTIMEDIA }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD SEAL 5 DM-i" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD SEAL 5 DM-i" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD SEAL 5 DM-i" })
  ] });
}
function Tile({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/30 rounded-xl p-4 text-center border border-border/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: value })
  ] });
}
function FeatureBlock({ img, title, subtitle, body, reverse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: title, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex-1 flex items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-12 lg:px-14 lg:py-16 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-semibold uppercase tracking-widest mb-3", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: body })
    ] }) })
  ] });
}
function SimpleSpec({ title, icon: Icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 p-5 sm:grid-cols-2", children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-background/30 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: row.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-semibold", children: row.value })
    ] }, row.label)) })
  ] });
}
function CompareSpec({ title, icon: Icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 normal-case", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Standard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Dynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3", children: row.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.standard }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.dynamic }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.premium }) })
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
  const m = getInstallmentModel(SLUG$6);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSeal5DmiBrochure, { model: m });
};
export {
  SplitComponent as component
};
