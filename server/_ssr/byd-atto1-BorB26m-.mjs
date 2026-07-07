import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { p as SLUG, P as PageShell } from "./router-Bna36lkW.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, o as colorShellWhite } from "./models-CGoesGQ4.mjs";
import { T as TestDriveForm } from "./TestDriveForm-pWI7-x-h.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-Cb8POu9O.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, U as Users, G as Gauge, i as Battery, Z as Zap, p as Sparkles, n as CircuitBoard, S as ShieldCheck, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
const heroBanner = "/assets/atto1-banner-desktop-DaakPOb4.jpeg";
const storyBatteryImage = "/assets/atto2-description-2-CF3cjXDj.jpeg";
const storyImage1 = "/assets/atto1-description-1-w4KfBWs3.jpeg";
const storyImage2 = "/assets/atto1-description-2-Do-R3dXR.jpeg";
const exteriorBodyDesign = "/assets/exterior-bodyDesign-WR04DKbS.png";
const exteriorHeadLight = "/assets/exterior-headLight-BXodUyV8.png";
const exteriorAllowWheel = "/assets/exterior-allowWheel-B5MGZfSq.png";
const exteriorDigitalKey = "/assets/exterior-digitalKey-Cy_6V8Mr.png";
const interiorConsoleDesign = "/assets/interior-consoleDesign-BsE-ngJ4.png";
const interiorMultimediaScreen = "/assets/interior-multimediaScreen-DKYTJDgq.png";
const interiorWirelessCharger = "/assets/interior-wirelessCharger-DbUVRcjs.jpeg";
const interiorRearPassengerSpace = "/assets/interior-rearPassengerSpace-DJ2PeuM5.jpeg";
const colorPopGreen = "/assets/atto1-pop-green-model-2GJyyGtp.png";
const colorQuantumBlack = "/assets/atto1-quantum-black-model-kH_4bcl8.png";
const colorVelocityBlue = "/assets/atto1-velocity-blue-model-DODycsY7.png";
const VIDEO_URL = "https://storage.googleapis.com/ram_asset_prd/models/atto1/atto1-video.webm";
const TRIMS = [
  { key: "dynamic", name: "Dynamic", price: 429900, accel: "4.9", range: "300", battery: "30.08 kWh", power: "55 kW", torque: "135 Nm" },
  { key: "premium", name: "Premium", price: 459900, accel: "4.9", range: "380", battery: "38.88 kWh", power: "55 kW", torque: "135 Nm" }
];
const COLORS = [
  { name: "Pop Green", hex: "#4D8F69", border: "#4D8F69", img: colorPopGreen, note: "Dynamic · Premium" },
  { name: "Shell White", hex: "#F2F2EF", border: "#DADADA", img: colorShellWhite, note: "Dynamic · Premium" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorQuantumBlack, note: "Dynamic · Premium" },
  { name: "Velocity Blue", hex: "#1A4B8A", border: "#1A4B8A", img: colorVelocityBlue, note: "Dynamic · Premium" }
];
const EXTERIOR_GALLERY = [
  { img: exteriorBodyDesign, label: "Sport Body Design", desc: "เส้นสายตัวรถโฉบเฉี่ยวพร้อมมิติแบบรถเมืองยุคใหม่" },
  { img: exteriorHeadLight, label: "LED Headlights", desc: "ไฟหน้า LED ดีไซน์คมชัดพร้อมพื้นผิวคริสตัล 3 มิติ" },
  { img: exteriorAllowWheel, label: "16-inch Alloy Wheels", desc: "ล้ออัลลอย 16 นิ้ว เน้นความคล่องตัวและการควบคุม" },
  { img: exteriorDigitalKey, label: "BYD Digital Key", desc: "เปิด-ปิดและสตาร์ทรถผ่านสมาร์ตโฟนได้สะดวก" }
];
const INTERIOR_GALLERY = [
  { img: interiorConsoleDesign, label: "Wave Shape Console", desc: "คอนโซลหน้าดีไซน์ทันสมัย ใช้งานง่ายในทุกวัน" },
  { img: interiorMultimediaScreen, label: "10.1-inch Multimedia", desc: "จอสัมผัสขนาด 10.1 นิ้ว พร้อมระบบความบันเทิงครบ" },
  { img: interiorWirelessCharger, label: "Wireless Charging", desc: "ที่ชาร์จมือถือไร้สายสำหรับไลฟ์สไตล์ยุคดิจิทัล" },
  { img: interiorRearPassengerSpace, label: "Spacious Cabin", desc: "ห้องโดยสารตอนหลังกว้างขวาง นั่งสบายทุกการเดินทาง" }
];
const DIMENSIONS = [
  { label: "ความยาว (มิลลิเมตร)", values: ["3,925", "3,925"] },
  { label: "ความกว้าง (มิลลิเมตร)", values: ["1,720", "1,720"] },
  { label: "ความสูง (มิลลิเมตร)", values: ["1,590", "1,590"] },
  { label: "ระยะห่างของล้อ คู่หน้า / คู่หลัง (มิลลิเมตร)", values: ["1,500 /1,485", "1,500 /1,485"] },
  { label: "ระยะฐานล้อ (มิลลิเมตร)", values: ["2,500", "2,500"] },
  { label: "ความสูงใต้ท้องรถรวมน้ำหนักบรรทุกสูงสุด (มิลลิเมตร)", values: ["120", "120"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (เมตร)", values: ["4.95", "4.95"] },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", values: ["230", "230"] },
  { label: "น้ำหนักรถเปล่า (กิโลกรัม)", values: ["1,225", "1,280"] },
  { label: "น้ำหนักรถรวมน้ำหนักบรรทุกสูงสุด (กิโลกรัม)", values: ["1,635", "1,690"] }
];
const PERFORMANCE = [
  { label: "ระบบขับเคลื่อน", values: ["ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า"] },
  { label: "ประเภทชุดมอเตอร์ไฟฟ้าหน้า", values: ["มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)"] },
  { label: "กำลังสูงสุด (กิโลวัตต์)", values: ["55", "55"] },
  { label: "แรงบิดสูงสุด (นิวตัน-เมตร)", values: ["135", "135"] },
  { label: "อัตราเร่ง 0 - 50 กิโลเมตร / ชั่วโมง (วินาที)", values: ["4.9", "4.9"] },
  { label: "โหมดการขับขี่", values: ["ECO/ Normal/ Sport", "ECO/ Normal/ Sport"] }
];
const CHARGING = [
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์ - ชั่วโมง)", values: ["30.08", "38.88"] },
  { label: "ระยะทางวิ่งสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", values: ["300", "380"] },
  { label: "สายชาร์จแบบพกพา (Mode 2)", values: [true, true] },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 - กำลังสูงสุด (กิโลวัตต์)", values: ["6.6", "6.6"] },
  { label: "รองรับหัวชาร์จแบบ DC CCS 2 - กำลังสูงสุด (กิโลวัตต์)", values: ["30", "40"] },
  { label: "ระบบ VtoL (Vehicle to Load)", values: [true, true] },
  { label: "อุปกรณ์เสริมสำหรับระบบ VtoL", values: [true, true] },
  { label: "ระบบเบรกพร้อมระบบชาร์จพลังงานกลับอัตโนมัติ (Regenerative Braking)", values: [true, true] }
];
const SUSPENSION_BRAKE = [
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แม็คเฟอร์สันสตรัท", "แม็คเฟอร์สันสตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["ทอร์ชันบีม", "ทอร์ชันบีม"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก"] }
];
const WHEELS_TIRES = [
  { label: "ล้ออัลลอย (นิ้ว)", values: ["16", "16"] },
  { label: "ขนาดยาง", values: ["185/55 R16", "185/55 R16"] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true] },
  { label: "อุปกรณ์ซ่อมรถฉุกเฉิน", values: [true, true] }
];
const EXTERIOR_STD = [
  { label: "ไฟหน้าแบบ LED", values: [true, true] },
  { label: "ระบบเปิด-ปิดไฟหน้าอัตโนมัติ", values: [true, true] },
  { label: "ระบบปรับระดับความสูงไฟหน้าด้วยตนเอง", values: [true, true] },
  { label: "ฟังก์ชันหน่วงเวลาการปิดไฟหน้า Follow-Me-Home", values: [true, true] },
  { label: "ไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED", values: [true, true] },
  { label: "ไฟท้ายแบบ LED", values: [true, true] },
  { label: "ไฟเบรกดวงที่ 3 แบบ LED", values: [true, true] },
  { label: "ระบบปัดน้ำฝนแบบหน่วงเวลา", values: [true, true] },
  { label: "กระจกมองข้างปรับองศาไฟฟ้า", values: [true, true] },
  { label: "กระจกหลังพร้อมระบบทำความร้อนไล่ฝ้า", values: [true, true] },
  { label: "เสาอากาศแบบครีบฉลาม", values: [true, true] }
];
const INTERIOR_STD = [
  { label: "พวงมาลัยแบบมัลติฟังก์ชัน", values: [true, true] },
  { label: "พวงมาลัยปรับได้", values: ["2 ทิศทาง", "4 ทิศทาง"] },
  { label: "พวงมาลัยแบบหุ้มหนังสังเคราะห์", values: [true, true] },
  { label: "หน้าจอเรือนไมล์ (นิ้ว)", values: ["7", "7"] },
  { label: "วัสดุหุ้มเบาะ", values: ["หนังสังเคราะห์", "หนังสังเคราะห์"] },
  { label: "กระจกด้านผู้ขับขี่เปิด-ปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", values: [false, true] },
  { label: "ที่บังแดดด้านหน้าพร้อมกระจกและไฟส่องสว่าง", values: [true, true] },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 6 ทิศทาง", values: [false, true] },
  { label: "เบาะนั่งผู้ขับขี่ปรับ 4 ทิศทาง", values: [true, false] },
  { label: "เบาะนั่งผู้โดยสารด้านหน้าปรับ 4 ทิศทาง", values: [true, true] },
  { label: "พนักพิงเบาะโดยสารด้านหลังพับแบบได้", values: [true, true] },
  { label: "พนักพิงศีรษะที่เบาะนั่งผู้โดยสารด้านหลัง ปรับระดับสูง-ต่ำได้", values: [true, true] },
  { label: "จุดยึดเบาะนั่งเด็กแบบ ISOFIX", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัสระบบมัลติมีเดีย (นิ้ว)", values: ["10.1", "10.1"] },
  { label: "รองรับการเชื่อมต่อโทรศัพท์มือถือผ่านบลูทูธ", values: [true, true] },
  { label: "รองรับ Apple CarPlay® และ Android Auto™", values: [true, true] },
  { label: "ระบบสั่งงานด้วยเสียง - ภาษาไทย / ภาษาอังกฤษ", values: [true, true] },
  { label: "วิทยุ FM", values: [true, true] },
  { label: "ลำโพง (ตำแหน่ง)", values: ["4", "4"] },
  { label: "ช่อง USB-C และ USB-A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหน้า", values: [true, true] },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย", values: [false, true] },
  { label: "ระบบ Keyless Entry และ Keyless Start", values: [true, true] },
  { label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC (NFC Card)", values: [true, true] },
  { label: "BYD Digital Key", values: [true, true] },
  { label: "ช่องจ่ายไฟ 12V", values: [true, true] },
  { label: "ระบบปรับอากาศ", values: [true, true] },
  { label: "ระบบกรองฝุ่น PM2.5", values: [true, true] },
  { label: "เชื่อมต่อสัญญาณอินเทอร์เน็ต สำหรับใช้งาน BYD App และการอัปเดตซอฟต์แวร์ (OTA)", values: [true, true] },
  { label: "รองรับการอัปเดตซอฟต์แวร์ผ่านสัญญาณอินเทอร์เน็ต (OTA)", values: [true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า - ฝั่งคนขับและผู้โดยสารด้านหน้า", values: [true, true] },
  { label: "ถุงลมนิรภัยด้านข้าง - ฝั่งคนขับและผู้โดยสารด้านหน้า", values: [false, true] },
  { label: "ม่านถุงลมนิรภัยด้านข้าง ด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย ด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "กล้องมองภาพด้านหลัง", values: [true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหลัง (ตำแหน่ง)", values: ["3", "3"] },
  { label: "ระบบช่วยเบรกป้องกันล้อล็อก (ABS)", values: [true, true] },
  { label: "ระบบช่วยป้องกันการลื่นไถลขณะขับขี่ (TCS)", values: [true, true] },
  { label: "ระบบควบคุมการกระจายแรงเบรก (EBD)", values: [true, true] },
  { label: "ระบบควบคุมการทรงตัวบนทางลาดชัน (HHC)", values: [true, true] },
  { label: "ระบบช่วยควบคุมการไหลของรถอัตโนมัติ (AVH)", values: [true, true] },
  { label: "ระบบช่วยกระจายแรงเบรกอัจฉริยะ (HBA)", values: [true, true] },
  { label: "ระบบควบคุมการทรงตัวของตัวรถขณะเข้าโค้ง (VDC)", values: [true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผัน (ACC)", values: [false, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผันอัจฉริยะ (ICC)", values: [false, true] },
  { label: "ระบบจดจำป้ายสัญญาณจราจร (TSR)", values: [false, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัจฉริยะ (ISLC)", values: [false, true] },
  { label: "ระบบช่วยเบรกฉุกเฉินอัตโนมัติ (AEB)", values: [false, true] },
  { label: "ระบบช่วยเตือนการชนด้านหน้า (FCW)", values: [false, true] },
  { label: "ระบบช่วยเตือนเมื่อรถออกนอกเลน (LDW)", values: [false, true] },
  { label: "ระบบช่วยควบคุมรถไม่ให้ออกนอกช่องทางเดินรถ (LDP)", values: [false, true] },
  { label: "ระบบช่วยควบคุมไฟสูงอัจฉริยะ (IHBC)", values: [false, true] },
  { label: "ระบบตรวจสอบแรงดันลมยาง (TPMS)", values: [true, true] }
];
const EXTERIOR_COLOR = [
  { label: "สีขาว Shell White", values: [true, true] },
  { label: "สีดำ Quantum Black", values: [true, true] },
  { label: "สีเขียว Pop Green", values: [false, true] },
  { label: "สีฟ้า Velocity Blue", values: [false, true] }
];
const INTERIOR_COLOR = [
  { label: "สีดำ + เทา", values: [true, true] }
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
function BydAtto1Brochure({ model }) {
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
    { q: "BYD ATTO 1 ราคาเท่าไร?", a: "Dynamic 429,900 บาท · Premium 459,900 บาท พร้อมโปรโมชันล่าสุดจากทีมที่ปรึกษา" },
    { q: "วิ่งได้ไกลเท่าไร?", a: "Dynamic 300 กม. และ Premium 380 กม. ตามมาตรฐาน NEDC" },
    { q: "รองรับการชาร์จแบบไหน?", a: "รองรับ AC Type 2 สูงสุด 6.6 kW, DC CCS2 สูงสุด 40 kW และรองรับ V2L" },
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD ATTO 1", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Compact EV · Urban Mobility · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD ATTO 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "MY URBAN MY EV" })
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
          { label: "Range", val: "380 km" },
          { label: "0-50 km/h", val: "4.9 sec" },
          { label: "Max Power", val: "55 kW" },
          { label: "Max Torque", val: "135 Nm" },
          { label: "Battery", val: "38.88 kWh" }
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
          { label: "0-50 km/h", val: `${currentTrim.accel} sec` },
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: "BYD ATTO 1 — Official Film" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ดีไซน์ที่คล่องตัวพร้อมใช้งานทุกวัน" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyBatteryImage, imgAlt: "BYD Blade Battery", reverse: false, title: "BYD BLADE BATTERY", subtitle: "Safety Technology", body: "เทคโนโลยีแบตเตอรี่ความปลอดภัยสูง ชาร์จไว ขับได้ไกล และมั่นใจได้ทุกวัน" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyImage1, imgAlt: "e-Platform", reverse: true, title: "e-Platform 3.0", subtitle: "EV Architecture", body: "แพลตฟอร์มรถยนต์ไฟฟ้าที่ออกแบบเพื่อพื้นที่โดยสาร ความปลอดภัย และประสิทธิภาพการขับขี่" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: storyImage2, imgAlt: "High-strength body", reverse: false, title: "HIGH-STRENGTH BODY", subtitle: "Structural Safety", body: "โครงสร้างตัวถังแข็งแรงสูง ช่วยเพิ่มความมั่นใจในการเดินทางในทุกเส้นทาง" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Premium" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ขนาดและน้ำหนัก", icon: Users, rows: DIMENSIONS, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบส่งกำลังและสมรรถนะ", icon: Gauge, rows: PERFORMANCE, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "แบตเตอรี่และการชาร์จ", icon: Battery, rows: CHARGING, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบกันสะเทือนและระบบเบรก", icon: Zap, rows: SUSPENSION_BRAKE, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ล้อและยาง", icon: Users, rows: WHEELS_TIRES, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "อุปกรณ์มาตรฐานภายนอก", icon: Sparkles, rows: EXTERIOR_STD, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "อุปกรณ์มาตรฐานภายใน", icon: Users, rows: INTERIOR_STD, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบมัลติมีเดียและความสะดวกสบาย", icon: CircuitBoard, rows: MULTIMEDIA, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: SAFETY, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "สีภายนอก", icon: Sparkles, rows: EXTERIOR_COLOR, leftHeader: "Dynamic", rightHeader: "Premium" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: "สีภายใน", icon: Users, rows: INTERIOR_COLOR, leftHeader: "Dynamic", rightHeader: "Premium" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD ATTO 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD ATTO 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD ATTO 1" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2", children: "รายการ" }),
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
  const m = getModel(SLUG);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydAtto1Brochure, { model: m });
};
export {
  SplitComponent as component
};
