import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell } from "./router-Bna36lkW.mjs";
import { I as INSTALLMENT_MODELS } from "./models-CGoesGQ4.mjs";
import { u as useIsMobile } from "./use-mobile-BsFue-bT.mjs";
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
import "./server-DkP7HoS9.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/zod.mjs";
const MODEL_HERO_VIDEOS = ["https://storage.googleapis.com/ram_asset_prd/models/atto1/atto1-video.webm", "https://storage.googleapis.com/ram_asset_prd/models/new-atto3/new-atto3-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/seal5Dmi/seal5-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/seal6/overview/seal6-video.webm", "https://www.reverautomotive.com/videos/model/seal/seal-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/sealion5dmi/overview/sealion5dmi-video.webm", "https://storage.googleapis.com/ram_asset_prd/models/sealion7/overview/sealion7-video.webm"];
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);
  return prefersReducedMotion;
}
function pickDifferentRandomIndex(current, length) {
  if (length <= 1) return current;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}
function getVideoMimeType(url) {
  return url.endsWith(".webm") ? "video/webm" : "video/mp4";
}
function ModelsPage() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [videoIndex, setVideoIndex] = reactExports.useState(() => Math.floor(Math.random() * MODEL_HERO_VIDEOS.length));
  const [isHeroVideoReady, setIsHeroVideoReady] = reactExports.useState(false);
  const shouldPlayHeroVideo = !isMobile && !prefersReducedMotion;
  reactExports.useEffect(() => {
    if (!shouldPlayHeroVideo) {
      setIsHeroVideoReady(false);
      return;
    }
    const intervalId = window.setInterval(() => {
      setVideoIndex((current) => pickDifferentRandomIndex(current, MODEL_HERO_VIDEOS.length));
      setIsHeroVideoReady(false);
    }, 9e3);
    return () => window.clearInterval(intervalId);
  }, [shouldPlayHeroVideo]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[56vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,oklch(0.75_0.12_40_/_0.22),transparent_42%),radial-gradient(circle_at_84%_82%,oklch(0.62_0.17_230_/_0.2),transparent_38%)]" }),
      shouldPlayHeroVideo && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isHeroVideoReady ? "opacity-100" : "opacity-0"}`, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", "aria-hidden": "true", onCanPlay: () => setIsHeroVideoReady(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: MODEL_HERO_VIDEOS[videoIndex], type: getVideoMimeType(MODEL_HERO_VIDEOS[videoIndex]) }) }, MODEL_HERO_VIDEOS[videoIndex]),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/25 via-background/68 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/88 via-background/55 to-background/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex rounded-full bg-background/80 px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-primary backdrop-blur animate-fade-in", children: "รถยนต์ทุกรุ่น" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl sm:text-6xl font-semibold tracking-normal leading-[1.05] animate-fade-in-up", children: "รถ BYD ทุกรุ่น" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-xl text-muted-foreground max-w-2xl animate-fade-in-up", children: "Bring Innovation to life เป็นมากกว่าแค่รถยนต์ไฟฟ้า รวมรถ BYD ทุกรุ่นทั้ง EV และ Plug-in Hybrid พร้อมราคา สเปก และตารางผ่อนอัพเดตล่าสุดในที่เดียว" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: INSTALLMENT_MODELS.map((m) => {
      const isHybrid = m.name.includes("DM-i");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: m.href, className: "group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl glass border border-border/60 hover-lift focus:outline-none focus:ring-2 focus:ring-primary/60 animate-fade-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-surface-elevated via-surface to-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.image, alt: m.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur", children: isHybrid ? "DM-i" : "EV" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold leading-tight tracking-normal text-foreground line-clamp-1", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "เริ่มต้น" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-foreground", children: new Intl.NumberFormat("th-TH").format(m.priceFrom) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "บาท" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between border-t border-border/60 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "ดูรายละเอียด" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-[#d70c19] group-hover:text-white group-hover:translate-x-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }, m.slug);
    }) }) }) })
  ] });
}
export {
  ModelsPage as component
};
