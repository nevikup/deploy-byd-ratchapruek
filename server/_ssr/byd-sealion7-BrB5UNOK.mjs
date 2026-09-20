import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SLUG$9, P as PageShell } from "./router-4Wq99WH9.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, b as colorWhite$2 } from "./models-0Rvkj58o.mjs";
import { T as TestDriveForm } from "./TestDriveForm-8kjlZl_P.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-Df2xMYAB.mjs";
import { FAQ } from "./FAQ-KPtl_5Vj.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, G as Gauge, Z as Zap, i as Battery, S as ShieldCheck, j as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-Bmgt2ZRL.mjs";
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
import "./dialog-DW1nkc-S.mjs";
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
const heroBanner = "/assets/overview-banner-d-CWBK_RJW.jpeg";
const storyLifeInMotionImage = "/assets/overview-img-02-CJoO-7lo.png";
const storyBladeBatteryImage = "/assets/overview-img-03-BD0m-5yl.webp";
const storyEPlatformImage = "/assets/overview-img-04-83byOKaC.webp";
const exterior1 = "/assets/exterior-img-01-C8NubC8n.webp";
const exterior2 = "/assets/exterior-img-02-D9IOdWBa.webp";
const exterior3 = "/assets/exterior-img-03-C4Lsk0lZ.webp";
const exterior4 = "/assets/exterior-img-04-Ceopa2-W.webp";
const exterior5 = "/assets/exterior-img-05-BRxMQI1K.webp";
const interior1 = "/assets/interior-img-01-wTgEHgeS.webp";
const interior2 = "/assets/interior-img-02-BPuTpQC2.webp";
const interior3 = "/assets/interior-img-03-C2HC5h-E.webp";
const interior4 = "/assets/interior-img-04-BwDjxOOg.webp";
const awdUltimateInterior1 = "/assets/awd-ultimate-interior-01-DXsKk5MB.webp";
const awdUltimateInterior2 = "/assets/awd-ultimate-interior-02-rkCGoR0y.webp";
const awdUltimateInterior3 = "/assets/awd-ultimate-interior-03-CExdBGX-.webp";
const awdUltimateInterior4 = "/assets/awd-ultimate-interior-04-D7fyKcWg.webp";
const awdUltimateInterior5 = "/assets/awd-ultimate-interior-05-CPrlXae0.webp";
const awdUltimateInterior6 = "/assets/awd-ultimate-interior-06-DWrHKvFg.webp";
const awdUltimateInterior7 = "/assets/awd-ultimate-interior-07-DL_OCv6l.webp";
const awdUltimateInterior8 = "/assets/awd-ultimate-interior-08-BOyFLwNp.webp";
const colorSharkGrey = "/assets/sealion7-shark-grey-BuxMDNiJ.png";
const colorSpaceGrey = "/assets/sealion7-space-grey-CTKY6lQA.png";
const colorBlack = "/assets/sealion7-black-DIKjA0Lf.webp";
const colorSolarRed = "/assets/solar-red-D1qBAlsf.png";
const colorPulsePurple = "/assets/pulse-purple-CCiPrs1-.png";
const TRIMS = [
  {
    key: "premium",
    name: "Premium",
    price: 1264900,
    accel: "6.7",
    range: "567",
    power: "230 kW",
    battery: "82.5 kWh",
    charge: "DC 150 kW"
  },
  {
    key: "awd",
    name: "AWD Performance",
    price: 1364900,
    accel: "4.5",
    range: "542",
    power: "390 kW",
    battery: "82.5 kWh",
    charge: "DC 150 kW"
  },
  {
    key: "awdUltimate",
    name: "AWD Ultimate",
    price: 1349900,
    accel: "4.5",
    range: "600",
    power: "390 kW",
    battery: "91.3 kWh",
    charge: "DC 230 kW"
  }
];
const COLORS = [
  {
    name: "Space Grey",
    hex: "#4a6b8a",
    border: "#4a6b8a",
    img: colorSpaceGrey,
    note: "Premium and AWD Performance"
  },
  {
    name: "Horizon White",
    hex: "#ececec",
    border: "#d0d0d0",
    img: colorWhite$2,
    note: "Premium and AWD Performance"
  },
  {
    name: "Quantum Black",
    hex: "#1a1a1a",
    border: "#1a1a1a",
    img: colorBlack,
    note: "Premium and AWD Performance"
  },
  {
    name: "Shark Grey",
    hex: "#696e75",
    border: "#696e75",
    img: colorSharkGrey,
    note: "AWD Performance only"
  },
  {
    name: "Solar Red",
    hex: "#a3272a",
    border: "#a3272a",
    img: colorSolarRed,
    note: "AWD Ultimate only"
  },
  {
    name: "Pulse Purple",
    hex: "#5b3a72",
    border: "#5b3a72",
    img: colorPulsePurple,
    note: "AWD Ultimate only"
  }
];
const EXTERIOR_GALLERY = [
  {
    img: exterior1,
    label: "Ocean-X Face",
    desc: "ด้านหน้าออกแบบด้วยแนวคิด Ocean-X Face เพื่อเสริมความสปอร์ตให้ตัวรถ"
  },
  {
    img: exterior2,
    label: "ทรงตัวถังด้านข้างแบบแอโรไดนามิก",
    desc: "เส้นสายตัวถังช่วยจัดการการไหลของอากาศและลดแรงต้าน ด้วยค่าสัมประสิทธิ์แรงต้านอากาศเพียง 0.28 Cd"
  },
  {
    img: exterior3,
    label: "ไฟหน้าทรง Double-U ลอยตัว",
    desc: "ไฟหน้าทรง Double-U กลมกลืนไปกับดีไซน์ตัวรถอย่างลงตัว"
  },
  {
    img: exterior4,
    label: "ช่องชาร์จ Boost Charging",
    desc: "ช่องชาร์จพร้อมไฟแสดงสถานะ ทำให้การชาร์จง่ายในทุกสถานการณ์"
  },
  {
    img: exterior5,
    label: "ล้ออัลลอยขนาด 20 นิ้ว",
    desc: "ล้ออัลลอยขนาดใหญ่พร้อมคาลิปเปอร์เบรกสีแดงในรุ่น AWD Performance"
  }
];
const INTERIOR_GALLERY = [
  {
    img: awdUltimateInterior1,
    label: "จอแสดงผล Head-Up Display",
    desc: "แสดงความเร็วและข้อมูลการขับขี่สำคัญบนกระจกหน้า ไม่ต้องละสายตาจากถนน (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior2,
    label: "พื้นที่เก็บสัมภาระด้านหลัง",
    desc: "ห้องเก็บสัมภาระด้านหลังกว้างขวาง พร้อมมุมมองผ่านหลังคากระจกพาโนรามา (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior3,
    label: "หลังคากระจกพาโนรามา",
    desc: "หลังคากระจกพาโนรามาช่วยเปิดรับแสงธรรมชาติและเพิ่มความโปร่งสบายภายในห้องโดยสาร (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior4,
    label: "เบาะหลังหนัง Diamond Stitch",
    desc: "ลวดลายเดินตะเข็บ Diamond Stitch พร้อมไฟแอมเบียนต์ที่แผงประตู เพิ่มความหรูหราให้ห้องโดยสาร (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior5,
    label: "คอนโซลกลางและหน้าจอมัลติมีเดีย",
    desc: "คอนโซลกลางดีไซน์หรูหรา พร้อมคันเกียร์ Crystal Shifter และแท่นชาร์จไร้สาย (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior6,
    label: "ระบบเสียง Dynaudio",
    desc: "ลำโพงคุณภาพสูงมอบประสบการณ์เสียงระดับพรีเมียมภายในห้องโดยสาร (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior7,
    label: "เบาะหนังคู่หน้าดีไซน์สปอร์ต",
    desc: "เบาะหนังคู่หน้าทรงสปอร์ต พร้อมลวดลายเดินตะเข็บที่โดดเด่น (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior8,
    label: "คอนโซลกลางพร้อม Crystal Shifter",
    desc: "คอนโซลกลางพร้อมคันเกียร์ Crystal Shifter และแท่นชาร์จไร้สาย 50 วัตต์ (AWD Ultimate)"
  },
  {
    img: interior1,
    label: "หลังคากระจกพาโนรามา",
    desc: "หลังคากระจกพาโนรามาขนาด 2.1 ตร.ม. ช่วยลดความร้อนและกรองรังสี UV"
  },
  {
    img: interior2,
    label: "พวงมาลัยหุ้มหนังพร้อมปุ่มควบคุมมัลติฟังก์ชัน",
    desc: "พวงมาลัยออกแบบสปอร์ต พร้อมปุ่มควบคุมฟังก์ชันต่าง ๆ ได้อย่างสะดวก"
  },
  {
    img: interior3,
    label: "ระบบเสียง Dynaudio",
    desc: "ลำโพง Dynaudio คุณภาพสูง มอบประสบการณ์เสียงระดับพรีเมียมภายในห้องโดยสาร"
  },
  {
    img: interior4,
    label: "หน้าจอสัมผัสหมุนได้ขนาด 15.6 นิ้ว",
    desc: "หน้าจอกลางหมุนได้ด้วยระบบไฟฟ้า สำหรับมัลติมีเดียและควบคุมรถ"
  }
];
const dimensionsRows = [
  { label: "ความยาว (มม.)", premium: "4,830", awd: "4,830", ultimate: "4,830" },
  { label: "ความกว้าง (มม.)", premium: "1,925", awd: "1,925", ultimate: "1,925" },
  { label: "ความสูง (มม.)", premium: "1,620", awd: "1,620", ultimate: "1,620" },
  { label: "ระยะห่างของล้อ คู่หน้า / คู่หลัง (มม.)", premium: "1,660 / 1,660", awd: "1,660 / 1,660", ultimate: "1,660 / 1,660" },
  { label: "ระยะฐานล้อ (มม.)", premium: "2,930", awd: "2,930", ultimate: "2,930" },
  { label: "ความสูงใต้ท้องรถไม่รวมน้ำหนักบรรทุกสูงสุด (มม.)", premium: "160", awd: "160", ultimate: "160" },
  { label: "รัศมีวงเลี้ยวแคบสุด (เมตร)", premium: "5.85", awd: "5.85", ultimate: "5.85" },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านหน้า (ลิตร)", premium: "58", awd: "58", ultimate: "58" },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", premium: "520", awd: "520", ultimate: "520" },
  { label: "น้ำหนักรถเปล่า (กก.)", premium: "2,225", awd: "2,340", ultimate: "2,435" },
  { label: "น้ำหนักรถรวมน้ำหนักบรรทุกสูงสุด (กก.)", premium: "2,635", awd: "2,750", ultimate: "2,845" }
];
const powertrainRows = [
  { label: "ระบบขับเคลื่อน", premium: "ขับเคลื่อนล้อหลัง", awd: "ขับเคลื่อนสี่ล้อ", ultimate: "ขับเคลื่อนสี่ล้อ" },
  { label: "ประเภทชุดมอเตอร์ไฟฟ้าหน้า", premium: "-", awd: "มอเตอร์อะซิงโครนัส", ultimate: "มอเตอร์อะซิงโครนัส" },
  { label: "กำลังสูงสุดชุดมอเตอร์ไฟฟ้าหน้า (กิโลวัตต์)", premium: "-", awd: "160", ultimate: "160" },
  { label: "แรงบิดสูงสุดชุดมอเตอร์ไฟฟ้าหน้า (นิวตัน-เมตร)", premium: "-", awd: "310", ultimate: "310" },
  { label: "ประเภทชุดมอเตอร์ไฟฟ้าหลัง", premium: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", awd: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", ultimate: "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)" },
  { label: "กำลังสูงสุดชุดมอเตอร์ไฟฟ้าหลัง (กิโลวัตต์)", premium: "230", awd: "230", ultimate: "230" },
  { label: "แรงบิดสูงสุดชุดมอเตอร์ไฟฟ้าหลัง (นิวตัน-เมตร)", premium: "380", awd: "380", ultimate: "380" },
  { label: "กำลังสูงสุด (กิโลวัตต์)", premium: "230", awd: "390", ultimate: "390" },
  { label: "แรงบิดสูงสุด (นิวตัน-เมตร)", premium: "380", awd: "690", ultimate: "690" },
  { label: "อัตราเร่ง 0-100 กิโลเมตร/ชั่วโมง (วินาที)", premium: "6.7", awd: "4.5", ultimate: "4.5" }
];
const suspensionRows = [
  { label: "ระบบกันสะเทือนด้านหน้า", premium: "ปีกนกคู่", awd: "ปีกนกคู่", ultimate: "ปีกนกคู่" },
  { label: "ระบบกันสะเทือนด้านหลัง", premium: "มัลติลิงก์", awd: "มัลติลิงก์", ultimate: "มัลติลิงก์" },
  { label: "ระบบกันสะเทือนปรับอัตโนมัติตามความเร็วแบบ FSD", premium: "ด้านหน้าและด้านหลัง", awd: "ด้านหน้าและด้านหลัง", ultimate: "ด้านหน้าและด้านหลัง" },
  { label: "ระบบเบรกด้านหน้า", premium: "ดิสก์เบรกแบบมีช่องและรูระบายอากาศ", awd: "ดิสก์เบรกแบบมีช่องและรูระบายอากาศ", ultimate: "ดิสก์เบรกแบบมีช่องและรูระบายอากาศ" },
  { label: "ระบบเบรกด้านหลัง", premium: "ดิสก์เบรกแบบมีช่องระบายอากาศ", awd: "ดิสก์เบรกแบบมีช่องระบายอากาศ", ultimate: "ดิสก์เบรกแบบมีช่องระบายอากาศ" },
  { label: "คาลิปเปอร์เบรก (สีพิเศษ)", premium: "-", awd: "สีแดง", ultimate: "สีแดง" },
  { label: "ล้ออัลลอย (นิ้ว)", premium: "19", awd: "20", ultimate: "20" },
  { label: "ขนาดยาง", premium: "ด้านหน้า: 235/50 R19, ด้านหลัง: 255/45 R19", awd: "245/45 R20", ultimate: "245/45 R20" },
  { label: "ชุดซ่อมยางฉุกเฉิน", premium: "●", awd: "●", ultimate: "●" }
];
const chargingRows = [
  { label: "ประเภทแบตเตอรี่", premium: "BYD Blade Battery", awd: "BYD Blade Battery", ultimate: "BYD Blade Battery" },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์-ชั่วโมง)", premium: "82.5", awd: "82.5", ultimate: "91.3" },
  { label: "ระยะทางวิ่งด้วยไฟฟ้าสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", premium: "567", awd: "542", ultimate: "600" },
  { label: "สายชาร์จแบบพกพา (Mode 2)", premium: "●", awd: "●", ultimate: "●" },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 (กำลังสูงสุด 11 kW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 (กำลังสูงสุด 150 kW)", premium: "●", awd: "●", ultimate: "-" },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 (กำลังสูงสุด 230 kW)", premium: "-", awd: "-", ultimate: "●" },
  { label: "ระบบ V to L (Vehicle to Load)", premium: "●", awd: "●", ultimate: "●" },
  { label: "อุปกรณ์เสริมสำหรับระบบ V to L", premium: "●", awd: "●", ultimate: "●" }
];
const exteriorRows = [
  { label: "ไฟหน้าแบบ LED", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบเปิด-ปิดไฟหน้าอัตโนมัติ", premium: "●", awd: "●", ultimate: "●" },
  { label: "ฟังก์ชันหน่วงเวลาการปิดไฟหน้า Follow-Me-Home", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟท้ายแบบ LED", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟตัดหมอกหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบไฟเลี้ยวแบบ Sequential", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟเบรกดวงที่ 3 แบบ LED", premium: "●", awd: "●", ultimate: "●" },
  { label: "หลังคากระจกแบบพาโนรามิก พร้อมม่านบังแดดไฟฟ้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "มือจับประตูไฟฟ้าแบบเก็บได้", premium: "●", awd: "●", ultimate: "●" },
  { label: "ประตูท้ายไฟฟ้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ประตูท้ายไฟฟ้าแบบแฮนด์ฟรี", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกมองข้างพับเก็บอัตโนมัติและปรับองศาไฟฟ้า พร้อมระบบทำความร้อนไล่ฝ้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกมองข้างปรับองศาอัตโนมัติเมื่อถอยหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบบันทึกตำแหน่งกระจกมองข้าง", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกเปิดปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกด้านหน้าเก็บเสียงแบบสองชั้น", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกหลังพร้อมระบบทำความร้อนไล่ฝ้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบปัดน้ำฝนด้านหน้าอัตโนมัติ แบบไร้โครงเหล็ก", premium: "●", awd: "●", ultimate: "●" }
];
const interiorRows = [
  { label: "พวงมาลัยมัลติฟังก์ชัน", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบพวงมาลัยไฟฟ้า (DP-EPS)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบแสดงผลบนกระจกหน้า (W-HUD)", premium: "●", awd: "●", ultimate: "●" },
  { label: "หน้าจอเรือนไมล์ผู้ขับขี่แบบ LCD (นิ้ว)", premium: "10.25", awd: "10.25", ultimate: "10.25" },
  { label: "ช่องเก็บของบริเวณคอนโซลกลาง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เบาะนั่งแบบหุ้มหนังแท้", premium: "●", awd: "●", ultimate: "●" },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 10 ทิศทาง", premium: "●", awd: "●", ultimate: "●" },
  { label: "พนักพิงผู้ขับขี่ดันหลังไฟฟ้า 4 ทิศทาง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เบาะนั่งผู้โดยสารด้านหน้าปรับไฟฟ้า 6 ทิศทาง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เบาะนั่งคู่หน้าแบบระบายอากาศ", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบจดจำตำแหน่งที่นั่งเบาะคนขับ", premium: "●", awd: "●", ultimate: "●" },
  { label: "Welcome seat เบาะที่นั่งผู้ขับขี่", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบปรับองศาพนักพิงเบาะโดยสารตอนหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "พนักพิงเบาะโดยสารด้านหลังพับแบบ 60/40", premium: "●", awd: "●", ultimate: "●" },
  { label: "ที่วางแก้วด้านหน้าแบบปรับระดับได้", premium: "●", awd: "●", ultimate: "●" },
  { label: "ที่พักแขนด้านหลัง พร้อมที่วางแก้ว 2 ช่อง", premium: "●", awd: "●", ultimate: "●" },
  { label: "กระจกมองหลังตัดแสงอัตโนมัติ", premium: "●", awd: "●", ultimate: "●" },
  { label: "ชายบันไดเหล็กกันรอยขีดข่วน", premium: "●", awd: "●", ultimate: "●" },
  { label: "ที่บังแดดด้านหน้าพร้อมกระจกและไฟส่องสว่าง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบแสงไฟในห้องโดยสารปรับตามจังหวะ (RGB Dynamic Mood Light)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟส่องแผนที่แบบ LED", premium: "●", awd: "●", ultimate: "●" },
  { label: "ไฟส่องสว่างในพื้นที่เก็บสัมภาระ", premium: "●", awd: "●", ultimate: "●" },
  { label: "จุดยึดเบาะนั่งเด็กแบบ ISOFIX", premium: "●", awd: "●", ultimate: "●" }
];
const comfortRows = [
  { label: "วิทยุ FM", premium: "●", awd: "●", ultimate: "●" },
  { label: "รองรับการเชื่อมต่อโทรศัพท์มือถือผ่านบลูทูธ", premium: "●", awd: "●", ultimate: "●" },
  { label: "รองรับ Apple CarPlay และ Android Auto", premium: "●", awd: "●", ultimate: "●" },
  { label: "หน้าจอสัมผัสระบบมัลติมีเดีย 15.6 นิ้ว", premium: "●", awd: "●", ultimate: "●" },
  { label: "เครื่องเสียง DYNAUDIO พร้อมลำโพง 12 ตำแหน่ง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบสั่งงานด้วยเสียงภาษาไทย", premium: "●", awd: "●", ultimate: "●" },
  { label: "มิวสิคสตรีมมิ่ง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ช่อง USB-C และ USB-A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหน้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ช่อง USB-C และ USB-A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบ Keyless Entry และ Keyless Start", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC (NFC Card)", premium: "●", awd: "●", ultimate: "●" },
  { label: "BYD Digital Key", premium: "●", awd: "●", ultimate: "●" },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย (กำลังสูงสุด 50W)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ช่องจ่ายไฟ 12V", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบกรองฝุ่น PM2.5 แบบประสิทธิภาพสูง (CN95)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบกรองอากาศ IONIZER", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบปรับอากาศแบบ 2 โซน", premium: "●", awd: "●", ultimate: "●" },
  { label: "ช่องปรับอากาศตรงกลางด้านหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เชื่อมต่อสัญญาณอินเทอร์เน็ต สำหรับ BYD app และ OTA", premium: "●", awd: "●", ultimate: "●" },
  { label: "รองรับการอัปเดตซอฟต์แวร์ผ่านสัญญาณอินเทอร์เน็ต (OTA)", premium: "●", awd: "●", ultimate: "●" }
];
const safetyRows = [
  { label: "ถุงลมนิรภัยคู่หน้า - ฝั่งคนขับและผู้โดยสารด้านหน้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ถุงลมนิรภัยด้านข้าง - ฝั่งคนขับและผู้โดยสารด้านหน้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ม่านถุงลมนิรภัยด้านข้าง ด้านหน้าและด้านหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ถุงลมนิรภัยระหว่างคนขับ และผู้โดยสารด้านหน้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ถุงลมนิรภัยด้านข้าง - ผู้โดยสารด้านหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เข็มขัดนิรภัยคู่หน้าแบบดึงกลับอัตโนมัติ 2 จังหวะ", premium: "●", awd: "●", ultimate: "●" },
  { label: "เข็มขัดนิรภัยด้านหลัง ซ้าย-ขวา แบบผ่อนแรง และดึงกลับอัตโนมัติ", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย ด้านหน้าและด้านหลัง", premium: "●", awd: "●", ultimate: "●" },
  { label: "กล้องมองภาพรอบคัน 360 องศา", premium: "●", awd: "●", ultimate: "●" },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหน้า 2 ตำแหน่ง", premium: "●", awd: "●", ultimate: "●" },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหลัง 4 ตำแหน่ง", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบล็อกประตูป้องกันเด็กไฟฟ้า", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบตรวจสอบแรงดันลมยาง (TPMS)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมเสถียรภาพการทรงตัวของรถ (ESC)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเบรกอัจฉริยะ", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยป้องกันการลื่นไถลขณะขับขี่ (TCS)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบควบคุมการกระจายแรงเบรก (EBD)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบควบคุมการทรงตัวบนทางลาดชัน (HHC)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมการไหลของรถอัตโนมัติ (AVH)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผัน (ACC)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผันอัจฉริยะ (ICC)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเบรกฉุกเฉินอัตโนมัติ (AEB)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนเมื่อรถออกนอกเลน (LDW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมรถไม่ให้ออกนอกช่องทางเดินรถ (LDP)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยรักษาช่องทางเดินรถฉุกเฉิน (ELKA)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนการชนด้านหน้า (FCW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนการชนด้านหลัง (RCW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบจดจำป้ายสัญญาณจราจร (TSR)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบแจ้งเตือนจำกัดความเร็วอัจฉริยะ (ISLW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยควบคุมความเร็วอัจฉริยะ (ISLC)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนเมื่อมีรถเคลื่อนผ่านในจุดอับสายตาด้านหน้า (FCTA)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเบรกเมื่อมีรถเคลื่อนผ่านในจุดอับสายตาด้านหน้า (FCTB)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTA)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเบรกเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTB)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนจุดอับสายตา (BSD)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเตือนวัตถุเคลื่อนผ่านขณะเปิดประตู (DOW)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยเปิดไฟสูงอัตโนมัติ (HMA)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบช่วยแจ้งเตือนอันตรายจากพฤติกรรมของผู้ขับขี่ (DMS)", premium: "●", awd: "●", ultimate: "●" },
  { label: "ระบบควบคุมแรงบิดอัจฉริยะ (ITAC)", premium: "-", awd: "●", ultimate: "●" }
];
const colorRows = [
  { label: "สีขาว Horizon White", premium: "●", awd: "●", ultimate: "●" },
  { label: "สีดำ Quantum Black", premium: "●", awd: "●", ultimate: "●" },
  { label: "สีเทา Space Grey", premium: "●", awd: "●", ultimate: "●" },
  { label: "สีเทา Shark Grey", premium: "-", awd: "●", ultimate: "-" },
  { label: "สีแดง Solar Red", premium: "-", awd: "-", ultimate: "●" },
  { label: "สีม่วง Pulse Purple", premium: "-", awd: "-", ultimate: "●" },
  { label: "สีภายใน สีดำ", premium: "●", awd: "●", ultimate: "●" },
  { label: "สีภายใน สีฟ้า", premium: "-", awd: "-", ultimate: "●" }
];
const storySections = [
  {
    image: storyLifeInMotionImage,
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "เทคโนโลยีแบตเตอรี่ที่ออกแบบมาเพื่อยกระดับความปลอดภัย ความทนทาน และประสิทธิภาพในการใช้งานประจำวัน"
  },
  {
    image: storyBladeBatteryImage,
    title: "LIFE IN MOTION",
    subtitle: "BYD SEALION 7",
    body: "SUV ไฟฟ้าที่ออกแบบมาเพื่อการใช้งานในชีวิตประจำวัน ผสานสมรรถนะ การชาร์จ และความสะดวกสบายไว้ในคันเดียว"
  },
  {
    image: storyEPlatformImage,
    title: "INFOTAINMENT & LIFESTYLE",
    subtitle: "Smart Urban Living",
    body: "ปลุกทุกความตื่นเต้นเร้าใจ ด้วยสุนทรียภาพของการขับขี่ เหนือระดับตลอดการเดินทางด้วยฟังก์ชันการใช้งานที่ล้ำสมัย ตอบโจทย์ไลฟ์สไตล์คนเมืองอย่างแท้จริง"
  }
];
function toSpecRows(rows) {
  return rows.map((row) => ({
    label: row.label,
    values: row.ultimate !== void 0 ? [row.premium, row.awd, row.ultimate] : [row.premium, row.awd]
  }));
}
function useReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el)
      return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
  }, children });
}
function BydSealion7Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const installment = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((item) => item.key === trim) ?? TRIMS[1];
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  const currentStorySections = storySections;
  const currentDimensionsRows = dimensionsRows;
  const currentPowertrainRows = powertrainRows;
  const currentSuspensionRows = suspensionRows;
  const currentChargingRows = chargingRows;
  const currentExteriorRows = exteriorRows;
  const currentInteriorRows = interiorRows;
  const currentComfortRows = comfortRows;
  const currentSafetyRows = safetyRows;
  const currentColorRows = colorRows;
  reactExports.useCallback(() => {
    if (!videoRef.current)
      return;
    videoRef.current.play();
    setVideoPlaying(true);
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    {
      q: "BYD SEALION 7 ราคาเท่าไร?",
      a: "รุ่น Premium ราคา 1,264,900 บาท รุ่น AWD Performance ราคา 1,364,900 บาท และรุ่น AWD Ultimate ราคา 1,349,900 บาท มีโปรโมชันเป็นระยะ"
    },
    {
      q: "BYD SEALION 7 วิ่งได้ไกลแค่ไหน?",
      a: "รุ่น Premium วิ่งได้ไกลสูงสุด 567 กม. รุ่น AWD Performance 542 กม. และรุ่น AWD Ultimate 600 กม. ตามมาตรฐาน NEDC"
    },
    {
      q: "BYD SEALION 7 รองรับการชาร์จแบบใดบ้าง?",
      a: "รองรับ AC Type 2 สูงสุด 11 kW, DC CCS2 สูงสุด 150 kW ในรุ่น Premium และ AWD Performance, DC CCS2 สูงสุด 230 kW ในรุ่น AWD Ultimate พร้อมระบบ V2L"
    },
    {
      q: "ผ่อน BYD SEALION 7 เดือนละเท่าไร?",
      a: `ค่างวดเริ่มต้นประมาณ ${formatBaht(installment.monthly)}/เดือน (ดาวน 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)`
    }
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[88vh] w-full items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEALION 7", className: "absolute inset-0 h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 pb-16 pt-32 sm:px-12 lg:px-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-block rounded-full border border-primary/40 bg-background/20 px-3 py-1 text-xs text-primary backdrop-blur-sm", children: "Electric SUV · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-black leading-none tracking-normal sm:text-7xl lg:text-8xl", children: "BYD SEALION 7" }),
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
              "นัดทดลองขับ",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#installment", className: "glass inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm", children: "คำนวณค่างวด" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: "ระยะทางสูงสุด", val: `${currentTrim.range} km` },
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "กำลังสูงสุด", val: currentTrim.power },
          { label: "แบตเตอรี่", val: currentTrim.battery },
          { label: "ชาร์จเร็ว", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl border border-border/40 px-4 py-2 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: item.val })
        ] }, item.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "เลือกรุ่นที่ใช่" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex flex-wrap justify-center gap-3", children: TRIMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setTrim(item.key), className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === item.key ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`, children: item.name }, item.key)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: currentTrim.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-black text-gradient", children: typeof currentTrim.price === "number" ? formatBaht(currentTrim.price) : "สอบถามราคา" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "gradient-accent inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-sm font-semibold text-white sm:self-auto", children: [
            "นัดทดลองขับ",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "ระยะทาง NEDC", val: `${currentTrim.range} km` },
          { label: "กำลังสูงสุด", val: currentTrim.power },
          { label: "แบตเตอรี่", val: currentTrim.battery },
          { label: "ชาร์จเร็ว", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 bg-background/30 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: item.val })
        ] }, item.label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* สี Shark Grey มีเฉพาะรุ่น AWD Performance เท่านั้น" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-10 lg:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "absolute inset-0 h-full w-full object-contain transition-opacity duration-500", style: { opacity: activeColor === index ? 1 : 0 } }, item.name)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex min-w-[240px] flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-widest text-muted-foreground", children: "สีภายนอก" }),
          COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActiveColor(index), className: `flex items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${activeColor === index ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-9 w-9 flex-shrink-0 rounded-full transition-all ${activeColor === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`, style: { background: item.hex, border: `2px solid ${item.border}` }, "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.note })
            ] })
          ] }, item.name))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "โดดเด่นและตอบโจทย์ทุกความต้องการของคุณ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center gap-2", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setGalleryTab(tab), className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`, children: tab === "exterior" ? "ภายนอก" : "ภายใน" }, tab)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl bg-surface", style: { aspectRatio: "16/9" }, children: [
        galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-500", style: { opacity: activeGallery === index ? 1 : 0 } }, item.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-white", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/70", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-5 gap-3", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveGallery(index), className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === index ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`, style: { aspectRatio: "16/9" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "h-full w-full object-cover" }) }, item.label)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border", children: currentStorySections.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBlock, { img: item.image, imgAlt: item.title, reverse: index % 2 === 1, title: item.title, subtitle: item.subtitle, body: item.body }, item.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Premium · AWD Performance · AWD Ultimate" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ขนาดและน้ำหนัก", icon: Gauge, rows: toSpecRows(currentDimensionsRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบส่งกำลัง", icon: Zap, rows: toSpecRows(currentPowertrainRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบกันสะเทือน ระบบเบรก ล้อและยาง", icon: Gauge, rows: toSpecRows(currentSuspensionRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบการชาร์จ", icon: Battery, rows: toSpecRows(currentChargingRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "อุปกรณ์มาตรฐานภายนอก", icon: ShieldCheck, rows: toSpecRows(currentExteriorRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "อุปกรณ์มาตรฐานภายใน", icon: ShieldCheck, rows: toSpecRows(currentInteriorRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบมัลติมีเดียและความสะดวกสบาย", icon: Zap, rows: toSpecRows(currentComfortRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "ระบบความปลอดภัย", icon: ShieldCheck, rows: toSpecRows(currentSafetyRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "สีภายนอกและสีภายใน", icon: ShieldCheck, rows: toSpecRows(currentColorRows) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "ตารางผ่อน BYD SEALION 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "นัดทดลองขับ BYD SEALION 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "คำถามที่พบบ่อยเกี่ยวกับ BYD SEALION 7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(vehicleSchema) } })
  ] });
}
function FeatureBlock({ img, imgAlt, title, subtitle, body, reverse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-stretch ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex flex-1 items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl px-8 py-12 lg:px-14 lg:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-widest text-primary", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black leading-tight sm:text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: body })
    ] }) })
  ] });
}
function SpecTable({ title, icon: Icon, rows }) {
  const hasUltimate = rows[0]?.values.length === 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-background/40 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: hasUltimate ? "w-2/5 px-6 py-3 text-left font-medium" : "w-1/2 px-6 py-3 text-left font-medium", children: "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "AWD Performance" }),
        hasUltimate && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "AWD Ultimate" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: index % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((value, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value }) }, `${row.label}-${cellIndex}`))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value }) {
  if (value === true)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "มี" });
  if (value === false)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "ไม่มี" });
  if (value === "●")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "มี" });
  if (value === "-")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$9);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSealion7Brochure, { model: m });
};
export {
  SplitComponent as component
};
