import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { j as SLUG$4, P as PageShell } from "./router-CcbwebiN.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, j as crystalWhite } from "./models-B69ILCyc.mjs";
import { T as TestDriveForm } from "./TestDriveForm-B96GtcO6.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-D7K5uIhk.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, R as Ruler, Z as Zap, i as Battery, o as Sun, p as Sparkles, S as ShieldCheck, n as CircuitBoard, G as Gauge, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
const heroBanner = "/assets/overview-banner-desktop-QklIY6bF.jpeg";
const bladeBattery = "/assets/blade-battery-KXfMMaFT.jpeg";
const cabin = "/assets/two-tone-interior-cabin-BKWPNiG8.jpeg";
const ePlatform = "/assets/e-platform-BOB1_FZQ.png";
const v2l = "/assets/v2l-O6v5ovEE.png";
const frontGrille = "/assets/front-grille-9N5CwTS1.jpeg";
const ledHeadlights = "/assets/led-headlights-C5XY9Z1_.jpeg";
const chargingPort = "/assets/charging-port-CrUkxwHm.jpeg";
const alloyWheels = "/assets/alloy-wheels-bMkJ1gx8.jpeg";
const aluminumSideSill = "/assets/aluminum-side-sill-oGM2UTH-.jpeg";
const steeringWheel = "/assets/multifunction-steering-wheel-BiuT7guD.png";
const wirelessCharger = "/assets/wireless-charger-D6Ip_v8i.jpeg";
const shifter = "/assets/finger-touched-electronic-shifter-DqCABEAz.jpeg";
const quantumBlack = "/assets/m6-quantum-black-bLZC1Vsz.png";
const quartzBlue = "/assets/m6-quartz-blue-DLb-nQ18.png";
const harbourGrey = "/assets/m6-harbour-grey-BNQEPWiM.png";
const TRIMS = [
  {
    key: "dynamic",
    name: "Dynamic",
    price: 769900,
    range: "420",
    power: "120 kW",
    torque: "310 Nm",
    battery: "55.4 kWh",
    drive: "FWD",
    dc: "85 kW"
  },
  {
    key: "extended",
    name: "Extended",
    price: 1009900,
    range: "530",
    power: "150 kW",
    torque: "310 Nm",
    battery: "71.8 kWh",
    drive: "FWD",
    dc: "115 kW"
  }
];
const COLORS = [
  { name: "Crystal White", hex: "#E9ECF1", border: "#CFD5DD", img: crystalWhite, note: "Dynamic · Extended" },
  { name: "Quantum Black", hex: "#0F1012", border: "#3D3F43", img: quantumBlack, note: "Dynamic · Extended" },
  { name: "Quartz Blue", hex: "#19457B", border: "#19457B", img: quartzBlue, note: "Dynamic · Extended" },
  { name: "Harbour Grey", hex: "#7A8087", border: "#7A8087", img: harbourGrey, note: "Dynamic · Extended" }
];
const EXTERIOR_GALLERY = [
  { img: frontGrille, label: "กระจังหน้า Dragon Face 3.0", desc: "แรงบันดาลใจจาก BYD Dynasty Series" },
  { img: ledHeadlights, label: "ไฟหน้า LED", desc: "พร้อมไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวัน" },
  { img: chargingPort, label: "ช่องชาร์จ AC/DC", desc: "รองรับการชาร์จ AC Type 2 และ DC CCS2" },
  { img: alloyWheels, label: "ล้ออัลลอยทูโทน 17 นิ้ว", desc: "สัดส่วนที่ช่วยให้ตัวรถดูมั่นคง" },
  { img: aluminumSideSill, label: "แถบอลูมิเนียมด้านข้าง", desc: "เพิ่มมิติของเส้นสายตัวรถ" }
];
const INTERIOR_GALLERY = [
  { img: steeringWheel, label: "หน้าจอสัมผัส 12.8 นิ้ว", desc: "หน้าจอหมุนไฟฟ้าตามการใช้งาน" },
  { img: shifter, label: "BYD Heart Shifter", desc: "คอนโซลกลางพร้อมปุ่มควบคุมครบ" },
  { img: wirelessCharger, label: "Wireless Charger", desc: "ชาร์จไร้สายสะดวกทุกการเดินทาง" },
  { img: cabin, label: "ห้องโดยสาร 3 แถว 2-2-2", desc: "ภายในทูโทน กว้างขวางและนั่งสบาย" },
  { img: ePlatform, label: "e-Platform 3.0", desc: "แพลตฟอร์มหลักของรถไฟฟ้ารุ่นใหม่" },
  { img: v2l, label: "V2L (Vehicle to Load)", desc: "รองรับการจ่ายไฟให้กับอุปกรณ์ภายนอก" }
];
const FEATURE_BLOCKS = [
  {
    img: bladeBattery,
    imgAlt: "BYD Blade Battery",
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "เทคโนโลยีแบตเตอรี่เอกสิทธิ์จาก BYD ให้ความปลอดภัยสูงและความมั่นใจในทุกการขับขี่"
  },
  {
    img: cabin,
    imgAlt: "Superior Cabin",
    title: "SUPERIOR CABIN",
    subtitle: "Comfort Experience",
    body: "ห้องโดยสาร 3 แถวแบบ 2-2-2 พร้อมเบาะคู่หน้าปรับไฟฟ้าและระบบระบายอากาศ รองรับทั้งการเดินทางในเมืองและทริประยะไกล"
  },
  {
    img: ePlatform,
    imgAlt: "e-Platform 3.0",
    title: "e-PLATFORM 3.0",
    subtitle: "EV Architecture",
    body: "แพลตฟอร์มสำหรับรถยนต์ไฟฟ้าโดยเฉพาะ ช่วยเพิ่มประสิทธิภาพการขับขี่และการจัดวางพื้นที่ภายในให้ใช้งานได้จริง"
  },
  {
    img: v2l,
    imgAlt: "Vehicle to Load",
    title: "V2L FUNCTION",
    subtitle: "Power On The Go",
    body: "รองรับการใช้งานไฟฟ้าภายนอกผ่านระบบ V2L เพิ่มความยืดหยุ่นในการเดินทางของครอบครัว"
  }
];
const DIMENSIONS = [
  { label: "จำนวนที่นั่ง", values: ["6", "6"] },
  { label: "ความยาว (มิลลิเมตร)", values: ["4,710", "4,710"] },
  { label: "ความกว้าง (มิลลิเมตร)", values: ["1,810", "1,810"] },
  { label: "ความสูง (มิลลิเมตร)", values: ["1,690", "1,690"] },
  { label: "ระยะห่างของล้อ คู่หน้า / คู่หลัง (มิลลิเมตร)", values: ["1,540/1,530", "1,540/1,530"] },
  { label: "ระยะฐานล้อ (มิลลิเมตร)", values: ["2,800", "2,800"] },
  { label: "น้ำหนักรถเปล่า (กิโลกรัม)", values: ["1,780", "1,895"] },
  { label: "น้ำหนักรถรวมน้ำหนักบรรทุกสูงสุด (กิโลกรัม)", values: ["2,279", "2,394"] },
  { label: "ความสูงใต้ท้องรถไม่รวมน้ำหนักบรรทุก (มิลลิเมตร)", values: ["170", "170"] },
  { label: "ความสูงใต้ท้องรถรวมน้ำหนักบรรทุกสูงสุด (มิลลิเมตร)", values: ["140", "140"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (เมตร)", values: ["5.8", "5.8"] },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", values: ["180", "180"] },
  { label: "ความจุพื้นที่เก็บสัมภาระท้ายรถเมื่อพับเบาะแถว 3 (ลิตร)", values: ["580", "580"] }
];
const POWERTRAIN = [
  { label: "ระบบขับเคลื่อน", values: ["ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า"] },
  { label: "ประเภทชุดมอเตอร์ไฟฟ้า", values: ["มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)"] },
  { label: "กำลังสูงสุด (กิโลวัตต์)", values: ["120", "150"] },
  { label: "แรงบิดสูงสุด (นิวตัน-เมตร)", values: ["310", "310"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์ - ชั่วโมง)", values: ["55.4", "71.8"] },
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แม็คเฟอร์สัน สตรัท", "แม็คเฟอร์สัน สตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["มัลติลิงก์", "มัลติลิงก์"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก"] },
  { label: "ล้ออัลลอย", values: ["17 นิ้ว", "17 นิ้ว"] },
  { label: "ขนาดยาง", values: ["225/55 R17", "225/55 R17"] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true] }
];
const CHARGING = [
  { label: "ระยะทางวิ่งด้วยไฟฟ้าสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", values: ["420", "530"] },
  { label: "สายชาร์จแบบพกพา (Mode 2)", values: [true, true] },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 - กำลังสูงสุด (kW)", values: ["7", "7"] },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 - กำลังสูงสุด (kW)", values: ["85", "115"] },
  { label: "ระบบ VtoL (Vehicle to Load)", values: [true, true] },
  { label: "อุปกรณ์เสริมสำหรับระบบ VtoL (Vehicle to Load)", values: [true, true] },
  { label: "ระบบเบรกพร้อมระบบชาร์จพลังงานกลับอัตโนมัติ (Regenerative Braking)", values: [true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true] },
  { label: "ถุงลมนิรภัยด้านข้าง - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true] },
  { label: "ม่านถุงลมนิรภัยด้านข้าง ด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "เข็มขัดนิรภัยคู่หน้าแบบผ่อนแรง และ ดึงกลับอัตโนมัติ", values: [true, true] },
  { label: "เข็มขัดนิรภัยด้านหลังแบบผ่อนแรง และ ดึงกลับอัตโนมัติ", values: [true, true] },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย ตอนหน้าและตอนหลัง", values: [true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [true, true] },
  { label: "ระบบตรวจสอบแรงดันลมยาง (TPMS)", values: [true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหลัง 4 ตำแหน่ง", values: [true, true] },
  { label: "ระบบเบรกมือไฟฟ้า (EPB)", values: [true, true] },
  { label: "ระบบเบรกช่วยป้องกันล้อล็อก (ABS)", values: [true, true] },
  { label: "ระบบช่วยควบคุมเสถียรภาพการทรงตัวของรถ (ESC)", values: [true, true] },
  { label: "ระบบช่วยป้องกันการลื่นไถลขณะขับขี่ (TCS)", values: [true, true] },
  { label: "ระบบควบคุมการกระจายแรงเบรก (EBD)", values: [true, true] },
  { label: "ระบบช่วยกระจายแรงเบรกอัจฉริยะ (HBA)", values: [true, true] },
  { label: "ระบบควบคุมการทรงตัวบนทางลาดชัน (HHC)", values: [true, true] },
  { label: "ระบบช่วยควบคุมการไหลของรถอัตโนมัติ (AVH)", values: [true, true] },
  { label: "ระบบช่วยทำความสะอาดดิสก์เบรก (BDW)", values: [true, true] },
  { label: "ระบบช่วยควบคุมและช่วยป้องกันการพลิกคว่ำ (RMI)", values: [true, true] },
  { label: "ระบบช่วยควบคุมกำลังมอเตอร์เมื่อเหยียบคันเร่งและเบรกพร้อมกัน (BOS)", values: [true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผัน (ACC)", values: [true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผันอัจฉริยะ (ICC)", values: [true, true] },
  { label: "ระบบช่วยเบรกฉุกเฉินอัตโนมัติ (AEB)", values: [true, true] },
  { label: "ระบบช่วยรักษารถให้อยู่ในช่องทางเดินรถ(LDA)", values: [true, true] },
  { label: "ระบบช่วยเตือนการชนด้านหน้า (FCW)", values: [true, true] },
  { label: "ระบบช่วยเตือนการชนด้านหลัง (RCW)", values: [false, true] },
  { label: "ระบบช่วยรักษาช่องทางเดินรถฉุกเฉิน (ELKA)", values: [false, true] },
  { label: "ระบบช่วยเตือนเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTA)", values: [false, true] },
  { label: "ระบบช่วยเบรกเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTB)", values: [false, true] },
  { label: "ระบบช่วยเตือนจุดอับสายตา (BSD)", values: [false, true] },
  { label: "ระบบช่วยเตือนวัตถุเคลื่อนผ่านขณะเปิดประตู (DOW)", values: [false, true] }
];
const EXTERIOR = [
  { label: "ไฟหน้าแบบ LED", values: [true, true] },
  { label: "ฟังก์ชันหน่วงเวลาการปิดไฟหน้า Follow-Me-Home", values: [true, true] },
  { label: "ไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED", values: [true, true] },
  { label: "ไฟท้ายแบบ LED", values: [true, true] },
  { label: "ระบบไฟเลี้ยวด้านหลังแบบ Sequential", values: [true, true] },
  { label: "ระบบช่วยควบคุมไฟสูงอัจฉริยะ (IHBC)", values: [false, true] },
  { label: "หลังคากระจกแบบพาโนรามิก", values: [false, true] },
  { label: "ราวหลังคา", values: [false, true] },
  { label: "ประตูท้ายไฟฟ้า", values: [false, true] },
  { label: "ระบบควบคุมการเปิด-ปิดประตูท้ายไฟฟ้าระยะไกล", values: [false, true] },
  { label: "ที่ปัดน้ำฝนด้านหน้าแบบไร้โครงเหล็ก", values: [true, true] },
  { label: "ที่ปัดน้ำฝนด้านหลัง", values: [true, true] },
  { label: "กระจกมองข้างพับเก็บอัตโนมัติและปรับองศาไฟฟ้า", values: [true, true] }
];
const INTERIOR = [
  { label: "พวงมาลัยแบบมัลติฟังก์ชัน", values: [true, true] },
  { label: "ระบบพวงมาลัยไฟฟ้า (EPS)", values: [true, true] },
  { label: "หน้าจอเรือนไมล์ผู้ขับขี่แบบ LCD TFT ขนาด 5 นิ้ว", values: [true, true] },
  { label: "กระจกมองหลังตัดแสงปรับด้วยตนเอง", values: [true, true] },
  { label: "กระจกเปิด-ปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", values: [true, true] },
  { label: "เบาะที่นั่ง 3 แถว (จัดเรียงแบบ 2 - 2 - 2)", values: [true, true] },
  { label: "เบาะนั่งแถวที่ 2 แบบอิสระ", values: [true, true] },
  { label: "พนักพิงเบาะหลังพับได้", values: [true, true] },
  { label: "เบาะนั่งแบบหุ้มหนังสังเคราะห์", values: [true, true] },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 6 ทิศทาง", values: [true, true] },
  { label: "เบาะนั่งผู้โดยสารด้านหน้าปรับไฟฟ้า 4 ทิศทาง", values: [false, true] },
  { label: "เบาะนั่งคู่หน้าแบบระบายอากาศ", values: [false, true] },
  { label: "พนักพิงศรีษะ ปรับระดับสูง-ต่ำได้", values: [true, true] },
  { label: "ชายบันไดเหล็กกันรอยขีดข่วน", values: [false, true] },
  { label: "ที่บังแดดด้านหน้าพร้อมกระจกและไฟส่องสว่าง", values: [true, true] },
  { label: "ไฟส่องแผนที่แบบ LED", values: [true, true] },
  { label: "ไฟส่องสว่างในพื้นที่เก็บสัมภาระ", values: [true, true] },
  { label: "จุดยึดเบาะนั่งเด็กแบบ ISOFIX", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัสระบบมัลติมีเดียขนาดใหญ่ ปรับหมุนด้วยไฟฟ้า", values: ["12.8 นิ้ว", "12.8 นิ้ว"] },
  { label: "*รองรับการเชื่อมต่อโทรศัพท์มือถือผ่านบลูทูธ", values: [true, true] },
  { label: "*รองรับ Apple CarPlay® และ Android Auto™", values: [true, true] },
  { label: "วิทยุ FM", values: [true, true] },
  { label: "ลำโพง 6 ตำแหน่ง", values: [true, true] },
  { label: "ระบบสั่งการด้วยเสียง", values: [true, true] },
  { label: "*แผนที่พร้อมระบบนำทาง", values: [true, true] },
  { label: "*มิวสิคสตรีมมิ่ง", values: [true, true] },
  { label: "ช่อง USB - C และ USB - A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารตอนหน้า", values: [true, true] },
  { label: "ช่อง USB - C และ USB - A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารแถวที่ 2", values: [true, true] },
  { label: "ช่องจ่ายไฟ 12V", values: [true, true] },
  { label: "ระบบ Keyless Entry และ Keyless Start", values: [true, true] },
  { label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC (NFC Card)", values: [true, true] },
  { label: "*BYD Digital Key", values: [true, true] },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย", values: [false, true] },
  { label: "ระบบปรับอากาศอัตโนมัติ", values: [true, true] },
  { label: "ระบบกรองฝุ่น PM 2.5", values: [true, true] },
  { label: "ระบบกรองฝุ่นพร้อมแสดงค่า PM 2.5", values: [false, true] }
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
function BydM6Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("extended");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const r = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((item) => item.key === trim) ?? TRIMS[0];
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    { q: "BYD M6 ราคาเท่าไร?", a: "Dynamic ราคา 769,900 บาท และ Extended ราคา 1,009,900 บาท" },
    { q: "BYD M6 วิ่งได้ไกลกี่กิโลเมตร?", a: "Dynamic วิ่งได้ 420 กม. และ Extended วิ่งได้ 530 กม. (NEDC)" },
    { q: "BYD M6 รองรับการชาร์จแบบไหน?", a: "รองรับ AC Type 2 7 kW และ DC CCS2 สูงสุด 85/115 kW ตามรุ่น" },
    { q: "BYD M6 นั่งได้กี่คน?", a: "รองรับผู้โดยสาร 6 ที่นั่ง แบบ 3 แถวจัดเรียง 2-2-2" },
    {
      q: "ผ่อน BYD M6 เดือนละเท่าไร?",
      a: `ค่างวดเริ่มต้นประมาณ ${formatBaht(r.monthly)}/เดือน (ดาวน์ 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)`
    }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "MPV",
    fuelType: "Electric",
    seatingCapacity: 6,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: currentTrim.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: "BYD จินหลง ราชพฤกษ์" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full min-h-[88vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD M6", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Electric MPV · 6 Seats · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD M6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "WHERE LIFE COMES TOGETHER" })
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
          { label: "Max Range", val: "530 km" },
          { label: "Drive", val: "FWD" },
          { label: "Max Power", val: "150 kW" },
          { label: "Max Torque", val: "310 Nm" },
          { label: "Battery", val: "71.8 kWh" }
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: TRIMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setTrim(item.key),
          className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === item.key ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
          children: item.name
        },
        item.key
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
          { label: "NEDC Range", val: `${currentTrim.range} km` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Max Torque", val: currentTrim.torque },
          { label: "Battery", val: currentTrim.battery },
          { label: "DC Fast Charge", val: currentTrim.dc }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/30 rounded-xl p-4 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: val })
        ] }, label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "เลือกสีที่ใช่สำหรับคุณ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative w-full overflow-hidden rounded-2xl",
            style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" },
            children: COLORS.map((color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: color.img,
                alt: color.name,
                className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                style: { opacity: activeColor === index ? 1 : 0 }
              },
              color.name
            ))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex flex-col gap-3 min-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Exterior Colour" }),
          COLORS.map((color, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveColor(index),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 text-left ${activeColor === index ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-9 w-9 rounded-full flex-shrink-0 transition-all ${activeColor === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`,
                    style: { background: color.hex, border: `2px solid ${color.border}` },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: color.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: color.note })
                ] })
              ]
            },
            color.name
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตอบโจทย์ครอบครัวยุคใหม่" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-8", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
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
            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            style: { opacity: activeGallery === index ? 1 : 0 }
          },
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-4", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveGallery(index),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === index ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" })
        },
        `${item.label}-thumb`
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border overflow-hidden", children: FEATURE_BLOCKS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureBlock,
      {
        img: item.img,
        imgAlt: item.imgAlt,
        title: item.title,
        subtitle: item.subtitle,
        body: item.body,
        reverse: index % 2 === 1
      },
      item.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ข้อมูลเทคนิค BYD M6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Extended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ขนาดและน้ำหนัก", icon: Ruler, rows: DIMENSIONS }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบส่งกำลังและสมรรถนะ", icon: Zap, rows: POWERTRAIN }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "พลังงานใหม่", icon: Battery, rows: CHARGING }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "อุปกรณ์มาตรฐานภายนอก", icon: Sun, rows: EXTERIOR }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "อุปกรณ์มาตรฐานภายใน", icon: Sparkles, rows: INTERIOR }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: SAFETY }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบมัลติมีเดียและความสะดวกสบาย", icon: CircuitBoard, rows: MULTIMEDIA }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 font-semibold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-4 w-4 text-primary" }),
            "หมายเหตุข้อมูลทางเทคนิค"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "ข้อมูลอ้างอิงจากหน้า Tech Spec ของ BYD M6 (Rêver Automotive) สำหรับรุ่น Dynamic และ Extended" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "ตารางผ่อน BYD M6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "นัดทดลองขับ BYD M6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD M6" }),
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
function SpecTable({ title, icon: Icon, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Dynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Extended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value }) }, index))
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
  const m = getModel(SLUG$4);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydM6Brochure, { model: m });
};
export {
  SplitComponent as component
};
