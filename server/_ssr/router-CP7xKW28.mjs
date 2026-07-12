import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { S as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FaFacebookF, a as FaTiktok, b as FaInstagram, c as FaYoutube, d as FaXTwitter } from "../_libs/react-icons.mjs";
import { M as MODELS, g as getInstallmentModel, a as getModel, I as INSTALLMENT_MODELS } from "./models-B69ILCyc.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BdZ_lyIR.mjs";
import { X, M as Menu, a as MessageCircle, P as Phone } from "../_libs/lucide-react.mjs";
import { o as objectType, n as numberType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
const appCss = "/assets/styles-CFFFn9Lt.css";
const faviconPng = "/assets/logo_jinlong-B8Tv5iRB.png";
const fontUrl = "/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const SITE_URL = "https://bydratchaphruek.com";
const TEST_DRIVE_FORM_URL = "/test-drive-byd";
function buildCanonicalUrl(path) {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
const menuLogoBydWhite = "/assets/logo-byd-white-BnNf_KpA.png";
const menuLogoBydRed = "/assets/logo-byd-black-CUmeFk7q.png";
const NAV = [
  { to: "/", label: "หน้าแรก" },
  { to: "/models", label: "รถทุกรุ่น" },
  { to: "/byd-installment", label: "ตารางผ่อน" },
  { to: "/blog", label: "บทความ" },
  { to: "/contact", label: "ติดต่อ" }
];
const MODEL_DETAIL_ROUTES$1 = /* @__PURE__ */ new Set([
  "/byd-atto1",
  "/byd-atto2",
  "/byd-atto3",
  "/byd-dolphin",
  "/byd-m6",
  "/byd-seal",
  "/byd-seal5dmi",
  "/byd-seal6",
  "/byd-sealion5dmi",
  "/byd-sealion6dmi",
  "/byd-sealion7"
]);
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const { pathname } = useLocation();
  const isModelDetailPage = MODEL_DETAIL_ROUTES$1.has(pathname);
  const isOverlayHeaderPage = pathname === "/" || pathname === "/models" || isModelDetailPage;
  const isTransparentHeader = isOverlayHeaderPage && !isScrolled;
  const logoSrc = isTransparentHeader ? menuLogoBydWhite : menuLogoBydRed;
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isNavActive = (to) => {
    if (to === "/") return pathname === "/";
    if (to === "/models") {
      return pathname === "/models" || /^\/byd-/.test(pathname) && !pathname.startsWith("/byd-installment") && !pathname.startsWith("/byd-promotion");
    }
    if (to === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname === to || pathname.startsWith(`${to}/`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOverlayHeaderPage ? isScrolled ? "bg-background/92 backdrop-blur-sm border-b border-border" : "bg-transparent backdrop-blur-0 border-b-0" : "bg-background/92 backdrop-blur-md border-b border-border"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "JINLONG Motor logo", className: "h-6 w-auto object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-tight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => "href" in n ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: n.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-3 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:text-foreground",
              children: n.label
            },
            n.href
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: `px-3 py-2 text-sm transition-colors rounded-md ${isNavActive(n.to) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: TEST_DRIVE_FORM_URL,
              className: "light-header-test-drive-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b0000] via-[#b10814] to-[#d70c19] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110",
              children: "นัดทดลองขับ"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden pb-4 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          NAV.map((n) => "href" in n ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: n.href,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => setOpen(false),
              className: "px-3 py-2 text-sm rounded-md transition-colors text-muted-foreground hover:text-foreground",
              children: n.label
            },
            n.href
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: `px-3 py-2 text-sm rounded-md transition-colors ${isNavActive(n.to) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: TEST_DRIVE_FORM_URL,
              onClick: () => setOpen(false),
              className: "light-header-test-drive-btn mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b0000] via-[#b10814] to-[#d70c19] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(26,30,40,0.55)]",
              children: "นัดทดลองขับ"
            }
          )
        ] }) })
      ] })
    }
  );
}
const FOOTER_MODELS = [
  ...MODELS,
  ...INSTALLMENT_MODELS.filter(
    (installmentModel) => !MODELS.some((model2) => model2.href === installmentModel.href)
  )
];
function Footer() {
  const logoSrc = menuLogoBydRed;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-32 border-t border-border bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoSrc,
            alt: "JINLONG Motor logo",
            className: "h-5 w-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์" }),
          " ",
          "ตัวแทนจำหน่ายรถยนต์ไฟฟ้า BYD โชว์รูมและศูนย์บริการมาตรฐาน BYD",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "ฝ่ายขายและบริการเปิดทำการทุกวัน ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "เวลา 8:30 – 17:30 น."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: "รถยนต์ทุกรุ่น" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: FOOTER_MODELS.map((model2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: model2.href, className: "hover:text-foreground", children: model2.name }) }, model2.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: "บริการลูกค้า" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:021499008", className: "hover:text-foreground", children: "02-149-9008" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:0918893988", className: "hover:text-foreground", children: "091-889-3988 (ติดต่อเข้ารับบริการ SA)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:0952043998", className: "hover:text-foreground", children: "095-204-3998 (ฝ่ายทะเบียน)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:0993155853", className: "hover:text-foreground", children: "099-315-5853 (ฝ่ายอะไหล่)" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: "ติดต่อเรา" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground", children: "10/4 หมู่ 2 ต.บางรักน้อย อ.เมืองนนทบุรี จ.นนทบุรี 11000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFacebookF, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.facebook.com/BYDRatchaphruek",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "bydratchaphruek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://line.me/R/ti/p/@605jvoki",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "LINE @605jvoki"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTiktok, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.tiktok.com/@bydratchaphruek",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydratchaphruek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.instagram.com/bydratchaphruek",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydratchaphruek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaYoutube, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.youtube.com/@bydratchaphruek",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydratchaphruek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaXTwitter, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://twitter.com/bydrpu",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "bydrpu"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 JINLONG MOTOR. ตัวแทนจำหน่ายอย่างเป็นทางการ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "นโยบายความเป็นส่วนตัว • เงื่อนไขการใช้งาน" })
    ] })
  ] }) });
}
function FloatingCTAs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://line.me/R/ti/p/@605jvoki",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "ติดต่อทาง LINE",
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-elevated hover-lift animate-glow-pulse",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", className: "h-7 w-7", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "tel:021499008",
        "aria-label": "โทร 02-149-9008",
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-elevated hover-lift",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-7 w-7", "aria-hidden": "true" })
      }
    )
  ] }) });
}
const MODEL_DETAIL_ROUTES = /* @__PURE__ */ new Set([
  "/byd-atto1",
  "/byd-atto2",
  "/byd-atto3",
  "/byd-dolphin",
  "/byd-m6",
  "/byd-seal",
  "/byd-seal5dmi",
  "/byd-seal6",
  "/byd-sealion5dmi",
  "/byd-sealion6dmi",
  "/byd-sealion7"
]);
function PageShell({
  children,
  mainClassName,
  rootClassName
}) {
  const { pathname } = useLocation();
  const isModelDetailPage = MODEL_DETAIL_ROUTES.has(pathname);
  const isOverlayHeaderPage = pathname === "/" || pathname === "/models" || pathname === "/blog" || pathname === "/byd-installment" || isModelDetailPage;
  const defaultMainClassName = isOverlayHeaderPage ? "pt-0" : "pt-16";
  const mergedRootClassName = ["site-light-theme", rootClassName].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-screen flex flex-col ${mergedRootClassName}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `flex-1 ${mainClassName ?? defaultMainClassName}`, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTAs, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero opacity-80", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl opacity-30 gradient-accent", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up", children: subtitle })
    ] })
  ] });
}
const GA_MEASUREMENT_ID = "G-C64FKFPVX1";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center bg-background px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-red-500", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "ไม่พบหน้าที่คุณมองหา" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 pb-6 text-sm text-muted-foreground border-b border-muted-foreground/50", children: "ไม่พบหน้าที่คุณมองหา หรือหน้าดังกล่าวถูกลบไปแล้ว" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm font-medium text-primary hover:underline", children: "หน้าแรก" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/models", className: "text-sm font-medium text-primary hover:underline", children: "รุ่นรถทั้งหมด" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/byd-installment", className: "text-sm font-medium text-primary hover:underline", children: "ตารางผ่อน" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: TEST_DRIVE_FORM_URL,
          className: "text-sm font-medium text-primary hover:underline",
          children: "นัดหมายทดลองขับ"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-sm font-medium text-primary hover:underline", children: "ข่าวสาร" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-sm font-medium text-primary hover:underline", children: "ติดต่อเรา" })
    ] })
  ] }) }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-normal text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$n = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "C7NcKvP3u5JmOcXT55zQFAlnE3fpKz5R2JRmusRkyGA"
      },
      { title: "บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์ | โชว์รูมและศูนย์บริการมาตรฐาน BYD บีวายดี จินหลง" },
      { name: "description", content: "ตัวแทนจำหน่ายรถยนต์ BYD อย่างเป็นทางการในกรุงเทพ ครอบคลุมทั้ง EV และ Plug-in Hybrid พร้อมโปรโมชั่น ตารางผ่อน และทดลองขับฟรี" },
      { property: "og:site_name", content: "BYD จินหลง ราชพฤกษ์" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "th_TH" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FFFFFF" }
    ],
    links: [
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: fontUrl,
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        href: faviconPng
      }
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        async: true
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          name: "BYD จินหลง ราชพฤกษ์",
          description: "ตัวแทนจำหน่ายรถยนต์ไฟฟ้า BYD อย่างเป็นทางการในกรุงเทพมหานคร",
          areaServed: "Bangkok, Thailand",
          telephone: "+66-2-XXX-XXXX",
          address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-background text-foreground", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$n.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$l = () => import("./test-drive-byd-B-DxZHIx.mjs");
const Route$m = createFileRoute("/test-drive-byd")({
  head: () => ({
    meta: [{
      title: "ทดลองขับ BYD ฟรี | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "นัดทดลองขับรถ BYD ทุกรุ่นฟรี ที่โชว์รูม BYD จินหลง ราชพฤกษ์ พร้อมทีมที่ปรึกษามืออาชีพ จองออนไลน์ทันที"
    }, {
      property: "og:title",
      content: "ทดลองขับ BYD ฟรี | BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:description",
      content: "นัดทดลองขับรถยนต์ไฟฟ้า BYD ฟรี"
    }, {
      property: "og:url",
      content: "/test-drive-byd"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/test-drive-byd")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const ARTICLES = [
  {
    slug: "byd-ev-worth-it",
    title: "รถไฟฟ้า BYD ดีไหม คุ้มค่าไหมในปี 2026",
    excerpt: "วิเคราะห์ข้อดี ข้อเสีย และความคุ้มค่าของรถยนต์ไฟฟ้า BYD ครบทุกประเด็นที่ควรรู้ก่อนตัดสินใจซื้อ",
    category: "BYD Reviews",
    readTime: "8 นาที",
    date: "2026-05-12",
    body: [
      "รถไฟฟ้า BYD ได้รับความนิยมอย่างรวดเร็วในประเทศไทย ด้วยจุดเด่นด้านเทคโนโลยี Blade Battery ที่ปลอดภัยกว่าแบตเตอรี่ลิเธียมทั่วไป ราคาที่จับต้องได้ และเครือข่ายศูนย์บริการที่ขยายตัวอย่างต่อเนื่อง",
      "ในแง่ของความคุ้มค่า ค่าใช้จ่ายในการชาร์จไฟฟ้าต่อเดือนเฉลี่ยอยู่ที่ 800-1,500 บาท ซึ่งประหยัดกว่าน้ำมันถึง 70-80% เมื่อเทียบกับรถยนต์เครื่องยนต์สันดาปทั่วไป",
      "นอกจากนี้ BYD ยังมีรับประกันแบตเตอรี่นานถึง 8 ปี หรือ 160,000 กิโลเมตร ทำให้ลูกค้าสามารถใช้งานได้อย่างอุ่นใจในระยะยาว"
    ]
  },
  {
    slug: "byd-dolphin-for-whom",
    title: "BYD Dolphin เหมาะกับใคร เทียบกับคู่แข่งในตลาด",
    excerpt: "เจาะลึกว่า BYD Dolphin เหมาะกับไลฟ์สไตล์ใคร พร้อมเปรียบเทียบจุดเด่นกับคู่แข่งระดับเดียวกัน",
    category: "Comparisons",
    readTime: "6 นาที",
    date: "2026-05-05",
    body: [
      "BYD Dolphin เป็นรถไฟฟ้าระดับ City EV ที่ออกแบบมาเพื่อชาวเมืองโดยเฉพาะ เหมาะอย่างยิ่งสำหรับคนทำงานในกรุงเทพและปริมณฑลที่ต้องการรถคันแรกประหยัดค่าใช้จ่าย",
      "ด้วยขนาดที่กะทัดรัดและรัศมีวงเลี้ยวที่แคบ ทำให้คล่องตัวในการขับขี่ในเมือง พร้อมแบตเตอรี่ที่ให้ระยะทาง 410 กิโลเมตรต่อการชาร์จหนึ่งครั้ง"
    ]
  },
  {
    slug: "byd-atto3-vs-competitors",
    title: "เปรียบเทียบ BYD Atto 3 กับคู่แข่งในกลุ่ม SUV ไฟฟ้า",
    excerpt: "เปรียบเทียบ BYD Atto 3 กับ SUV ไฟฟ้ารุ่นยอดนิยมในประเทศไทย ทั้งสเปก ราคา และความคุ้มค่า",
    category: "Comparisons",
    readTime: "10 นาที",
    date: "2026-04-28",
    body: [
      "BYD Atto 3 อยู่ในกลุ่ม Compact SUV EV ที่กำลังร้อนแรงในตลาดไทย ด้วยจุดเด่นด้านพื้นที่ใช้สอย เทคโนโลยี และราคาที่เข้าถึงได้",
      "เมื่อเทียบกับคู่แข่งหลักในระดับเดียวกัน Atto 3 มีจุดได้เปรียบในเรื่อง Blade Battery และระยะทางวิ่งจริง 480 กิโลเมตร"
    ]
  },
  {
    slug: "ev-monthly-cost",
    title: "ค่าใช้จ่ายรถ EV ต่อเดือน เทียบกับรถน้ำมัน",
    excerpt: "คำนวณค่าใช้จ่ายจริงในการใช้รถไฟฟ้าต่อเดือน ทั้งค่าชาร์จ ค่าบำรุงรักษา และค่าประกัน",
    category: "EV Knowledge",
    readTime: "7 นาที",
    date: "2026-04-20",
    body: [
      "การใช้รถ EV มีค่าใช้จ่ายต่อเดือนต่ำกว่ารถน้ำมันอย่างมีนัยสำคัญ โดยเฉลี่ยประหยัดได้ 5,000-8,000 บาทต่อเดือนสำหรับการใช้งานทั่วไป",
      "ค่าชาร์จที่บ้านโดยใช้ Home Charger ขนาด 7 kW จะอยู่ที่ประมาณ 1.20-2.50 บาทต่อหน่วย ขึ้นอยู่กับช่วงเวลา TOU"
    ]
  },
  {
    slug: "ev-charging-tips",
    title: "วิธีชาร์จรถไฟฟ้าให้ประหยัด ยืดอายุแบตเตอรี่",
    excerpt: "เทคนิคการชาร์จรถ EV อย่างถูกวิธี ช่วยประหยัดค่าไฟและยืดอายุการใช้งานแบตเตอรี่",
    category: "EV Technology",
    readTime: "5 นาที",
    date: "2026-04-15",
    body: [
      "การชาร์จรถไฟฟ้าอย่างถูกวิธีจะช่วยยืดอายุแบตเตอรี่ได้อย่างมาก ควรชาร์จในช่วง 20-80% เป็นหลัก และหลีกเลี่ยงการชาร์จ DC Fast Charge บ่อยเกินไป",
      "ใช้ Home Charger ในช่วงเวลา Off-Peak (22:00-09:00) จะช่วยประหยัดค่าไฟได้สูงสุดถึง 50%"
    ]
  },
  {
    slug: "10-things-before-buying-ev",
    title: "10 ข้อควรรู้ก่อนซื้อรถไฟฟ้า BYD",
    excerpt: "เช็คลิสต์สำคัญที่คนอยากซื้อรถไฟฟ้าต้องอ่าน ครอบคลุมทั้งสเปก การชาร์จ และการดูแลรักษา",
    category: "Buying Guides",
    readTime: "12 นาที",
    date: "2026-04-08",
    body: [
      "ก่อนตัดสินใจซื้อรถไฟฟ้าควรพิจารณาหลายปัจจัย เช่น พฤติกรรมการขับขี่ ระยะทางต่อวัน ความสามารถในการติดตั้ง Home Charger และเครือข่ายสถานีชาร์จในเส้นทางที่ใช้บ่อย",
      "นอกจากนี้ควรศึกษาเรื่องการรับประกัน บริการหลังการขาย และมูลค่ารถมือสองในอนาคต"
    ]
  }
];
const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
const BASE_URL = "";
const Route$l = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/models",
          "/byd-installment",
          "/byd-promotion",
          "/blog",
          "/contact",
          ...MODELS.map((m) => m.href),
          ...ARTICLES.map((a) => `/blog/${a.slug}`)
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      }
    }
  }
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const $$splitComponentImporter$k = () => import("./models-OfNQHQEz.mjs");
const Route$k = createFileRoute("/models")({
  pendingMs: 150,
  pendingComponent: ModelsPagePending,
  head: () => ({
    meta: [{
      title: "รถและราคา BYD ทุกรุ่น | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "รวมรถ และราคา BYD ทุกรุ่นในประเทศไทย ทั้ง EV และ Plug-in Hybrid พร้อมราคา สเปก และโปรโมชั่นล่าสุดในที่เดียว"
    }, {
      name: "keywords",
      content: "byd ราคา, ราคารถไฟฟ้า, รถ byd, byd atto1, byd atto2, byd atto3, byd dolphin, byd seal, byd seal 5 dm-i, byd seal6, byd sealion 5 dm-i, byd sealion 6 dm-i, byd sealion7, byd m6, ราคา byd ทุกรุ่น"
    }, {
      property: "og:title",
      content: "รถและราคา BYD ทุกรุ่น | JINLONG Motor"
    }, {
      property: "og:description",
      content: "เปรียบเทียบรถ BYD ทุกรุ่นทั้ง EV และ Plug-in Hybrid ในที่เดียว"
    }, {
      property: "og:url",
      content: "/models"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/models")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
function ModelsPagePending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[56vh] overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-28 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
      length: 6
    }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/70 bg-surface/45 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-4/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-4 w-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-border/60 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" })
        ] })
      ] })
    ] }, index)) }) }) })
  ] });
}
const $$splitComponentImporter$j = () => import("./contact-C_QN88Ov.mjs");
const Route$j = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "ติดต่อเรา | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "ติดต่อ BYD จินหลง ราชพฤกษ์ พร้อมข้อมูลโชว์รูม BYD กรุงเทพ พื้นที่บริการ เวลาทำการ แผนที่ และช่องทาง LINE/Facebook ครบในหน้าเดียว"
    }, {
      property: "og:title",
      content: "ติดต่อและข้อมูลโชว์รูม | BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:description",
      content: "รวมข้อมูลติดต่อและข้อมูล BYD กรุงเทพในหน้าเดียว"
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/contact")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const SLUG$9 = "byd-sealion7";
const $$splitComponentImporter$i = () => import("./byd-sealion7-N92NtUI6.mjs");
const model$8 = getModel(SLUG$9);
const Route$i = createFileRoute("/byd-sealion7")({
  head: () => ({
    meta: [{
      title: `${model$8.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$8.name} ${model$8.tagline} ราคาเริ่มต้น ${model$8.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$8.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd sealion7, สเปก byd sealion7, byd sealion 7, byd sealion7 ราคา, byd sealion7 สเปก, รถ byd sealion7"
    }, {
      property: "og:title",
      content: `${model$8.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$8.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$9}`
    }, {
      property: "og:image",
      content: model$8.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$9}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const fallbackModel = {
  slug: "byd-sealion6-dmi",
  name: "BYD SEALION 6 DM-i",
  priceFrom: 879900
};
const heroBanner$3 = "/assets/overview-banner-d-DbTqjYBW.jpeg";
const $$splitComponentImporter$h = () => import("./byd-sealion6dmi-C_brzQ-J.mjs");
const Route$h = createFileRoute("/byd-sealion6dmi")({
  head: () => {
    const model2 = getInstallmentModel("byd-sealion6-dmi") ?? fallbackModel;
    return {
      meta: [{
        title: `${model2.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
      }, {
        name: "description",
        content: `${model2.name} รุ่น Dynamic และ Premium พร้อมข้อมูลสมรรถนะ การชาร์จ อุปกรณ์ และข้อมูลเทคนิค`
      }, {
        name: "keywords",
        content: "ราคา byd sealion 6, สเปก byd sealion 6, byd sealion 6 dm-i, byd sealion6 ราคา, byd sealion6 สเปก, รถ byd sealion6"
      }, {
        property: "og:title",
        content: `${model2.name} | JINLONG Motor`
      }, {
        property: "og:description",
        content: `รวมราคา สเปก ข้อมูลเทคนิค และจุดเด่นของ ${model2.name}`
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: "/byd-sealion6dmi"
      }, {
        property: "og:image",
        content: heroBanner$3
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl("/byd-sealion6dmi")
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const SLUG$8 = "byd-sealion5dmi";
const $$splitComponentImporter$g = () => import("./byd-sealion5dmi-fCTY4F1I.mjs");
const model$7 = getModel(SLUG$8);
const Route$g = createFileRoute("/byd-sealion5dmi")({
  head: () => ({
    meta: [{
      title: `${model$7.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$7.name} ${model$7.tagline} ราคาเริ่มต้น ${model$7.priceFrom.toLocaleString()} บาท วิ่งไฟฟ้าล้วน ${model$7.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd sealion 5, สเปก byd sealion 5, byd sealion 5 dm-i, byd sealion5 ราคา, byd sealion5 สเปก, รถ byd sealion5"
    }, {
      property: "og:title",
      content: `${model$7.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$7.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$8}`
    }, {
      property: "og:image",
      content: model$7.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$8}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const SLUG$7 = "byd-seal6";
const $$splitComponentImporter$f = () => import("./byd-seal6-C1uYoc5o.mjs");
const model$6 = getModel(SLUG$7);
const Route$f = createFileRoute("/byd-seal6")({
  head: () => ({
    meta: [{
      title: `${model$6.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$6.name} ${model$6.tagline} ราคาเริ่มต้น ${model$6.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$6.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd seal6, สเปก byd seal6, byd seal 6, byd seal6 ราคา, byd seal6 สเปก, รถ byd seal6"
    }, {
      property: "og:title",
      content: `${model$6.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$6.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$7}`
    }, {
      property: "og:image",
      content: model$6.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$7}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const SLUG$6 = "byd-seal-5-dmi";
const $$splitComponentImporter$e = () => import("./byd-seal5dmi-CZCIOA-H.mjs");
const model$5 = getInstallmentModel(SLUG$6);
const Route$e = createFileRoute("/byd-seal5dmi")({
  head: () => ({
    meta: [{
      title: `${model$5?.name ?? "BYD SEAL 5 DM-i"} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$5?.name ?? "BYD SEAL 5 DM-i"} ราคาเริ่มต้น ${(model$5?.priceFrom ?? 599900).toLocaleString()} บาท พร้อมข้อมูลสเปก การชาร์จ ตารางผ่อน และทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd seal 5, สเปก byd seal 5, byd seal 5 dm-i, byd seal5 ราคา, byd seal5 สเปก, รถ byd seal5"
    }, {
      property: "og:title",
      content: `${model$5?.name ?? "BYD SEAL 5 DM-i"} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: "BYD SEAL 5 DM-i ราคา สเปก และข้อมูลเทคนิค"
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: "/byd-seal5dmi"
    }, {
      property: "og:image",
      content: model$5?.image ?? "/assets/byd-seal-5.png"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-seal5dmi")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const SLUG$5 = "byd-seal";
const $$splitComponentImporter$d = () => import("./byd-seal-CobGcp_C.mjs");
const model$4 = getModel(SLUG$5);
const Route$d = createFileRoute("/byd-seal")({
  head: () => ({
    meta: [{
      title: `${model$4.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$4.name} ${model$4.tagline} ราคาเริ่มต้น ${model$4.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$4.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd seal, สเปก byd seal, byd seal, byd seal ราคา, byd seal สเปก, รถ byd seal"
    }, {
      property: "og:title",
      content: `${model$4.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$4.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$5}`
    }, {
      property: "og:image",
      content: model$4.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$5}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./byd-promotion-9fmf8N2c.mjs");
const Route$c = createFileRoute("/byd-promotion")({
  head: () => ({
    meta: [{
      title: "โปรโมชั่น BYD ล่าสุดเดือนนี้ 2026 | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "รวมโปรโมชั่น BYD ล่าสุด ดอกเบี้ย 0% ฟรีประกันชั้น 1 ฟรีฟิล์ม ของแถมพิเศษ พร้อมข้อเสนอเฉพาะลูกค้า BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:title",
      content: "โปรโมชั่น BYD | BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:description",
      content: "ข้อเสนอพิเศษเดือนนี้สำหรับรถยนต์ไฟฟ้า BYD"
    }, {
      property: "og:url",
      content: "/byd-promotion"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-promotion")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const SLUG$4 = "byd-m6";
const $$splitComponentImporter$b = () => import("./byd-m6-CaH3Bojn.mjs");
const Route$b = createFileRoute("/byd-m6")({
  head: () => {
    const model2 = getModel(SLUG$4);
    if (!model2) {
      return {
        meta: [{
          title: "BYD M6 | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
        }, {
          name: "description",
          content: "BYD M6 ราคา สเปก และตารางผ่อน พร้อมโปรโมชั่นและนัดทดลองขับฟรีในกรุงเทพ"
        }, {
          name: "keywords",
          content: "ราคา byd m6, สเปก byd m6, byd m6, byd m6 ราคา, byd m6 สเปก, รถ byd m6"
        }, {
          property: "og:title",
          content: "BYD M6 | BYD จินหลง ราชพฤกษ์"
        }, {
          property: "og:description",
          content: "BYD M6 ราคา สเปก และข้อมูลโปรโมชั่น"
        }, {
          property: "og:type",
          content: "product"
        }, {
          property: "og:url",
          content: `/${SLUG$4}`
        }],
        links: [{
          rel: "canonical",
          href: buildCanonicalUrl(`/${SLUG$4}`)
        }]
      };
    }
    return {
      meta: [{
        title: `${model2.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
      }, {
        name: "description",
        content: `${model2.name} ${model2.tagline} ราคาเริ่มต้น ${model2.priceFrom.toLocaleString()} บาท วิ่งไกล ${model2.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
      }, {
        name: "keywords",
        content: "ราคา byd m6, สเปก byd m6, byd m6, byd m6 ราคา, byd m6 สเปก, รถ byd m6"
      }, {
        property: "og:title",
        content: `${model2.name} | BYD จินหลง ราชพฤกษ์`
      }, {
        property: "og:description",
        content: model2.tagline
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: `/${SLUG$4}`
      }, {
        property: "og:image",
        content: model2.image
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/${SLUG$4}`)
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getHomeWpPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("e124dd0647cb0a4a7fb8437819b19ffd575c7cb636e9a909a1d62876ec8765e9"));
const getHomeWpInstallmentPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("143032dbd33c3cc14833000d3c1dffb802490bd6babd9c8f4c4e34da9a7133fc"));
const getHomeWpInstallmentPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("ad8de6597b94aa111ef122563d3cea6c1a56601a4a9c24f1a6ebf601edc73c29"));
const getHomeWpPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("e18264ef70fc3e3fba92c9a9ec07ed978c80717e202d821725653d3bdb80e882"));
const searchWpPosts = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  query: stringType().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("32272a7df9813618d4837e8892702eddb0cd0d56903bd26f422d8fd873dac00e"));
const getWpPostBySlug = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType().min(1)
})).handler(createSsrRpc("ba8692a4505e9669ca8c394ed763368bd0a967597d786cff262860006d1bd73f"));
const heroBanner$2 = "/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg";
const heroBanner$1 = "/assets/overview-banner-desktop-6elnSXqY.jpeg";
const heroBanner = "/assets/overview-banner-desktop-DViUGHbu.png";
const $$splitComponentImporter$a = () => import("./byd-installment-NBR-f_P5.mjs");
const INSTALLMENT_HERO_IMAGES = [heroBanner$2, heroBanner$1, heroBanner];
function getMonthKey(dateText) {
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}
const Route$a = createFileRoute("/byd-installment")({
  pendingMs: 150,
  pendingComponent: InstallmentPagePending,
  loader: async () => {
    const heroImage = INSTALLMENT_HERO_IMAGES[Math.floor(Math.random() * INSTALLMENT_HERO_IMAGES.length)];
    try {
      const initialInstallmentPage = await getHomeWpInstallmentPostsPage({
        data: {
          page: 1,
          perPage: 20
        }
      });
      const firstMonthKey = getMonthKey(initialInstallmentPage.posts[0]?.date ?? "");
      const latestMonthPosts = firstMonthKey.length > 0 ? initialInstallmentPage.posts.filter((post) => getMonthKey(post.date) === firstMonthKey) : initialInstallmentPage.posts;
      const renderedPosts = latestMonthPosts.length > 0 ? latestMonthPosts : initialInstallmentPage.posts;
      return {
        renderedPosts,
        heroImage
      };
    } catch {
      return {
        renderedPosts: [],
        heroImage
      };
    }
  },
  head: () => ({
    meta: [{
      title: "ตารางผ่อนรถ BYD ทุกรุ่น 2026 | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "ตารางผ่อนรถ BYD ทุกรุ่น ทั้ง EV และ Plug-in Hybrid พร้อมเครื่องคำนวณค่างวด ตัวอย่างเงินดาวน์ และดอกเบี้ยพิเศษ"
    }, {
      property: "og:title",
      content: "ตารางผ่อนรถ BYD | BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:description",
      content: "คำนวณค่างวดรถ BYD ได้ทันที"
    }, {
      property: "og:url",
      content: "/byd-installment"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-installment")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
function InstallmentPagePending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-6 w-28 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-10 w-[min(100%,24rem)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-3 h-5 w-[min(100%,30rem)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
        length: 6
      }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-surface/45 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-6 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-4/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-11/12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" })
          ] })
        ] })
      ] }, index)) })
    ] }) })
  ] });
}
const SLUG$3 = "byd-dolphin";
const $$splitComponentImporter$9 = () => import("./byd-dolphin-ZXfA70S7.mjs");
const model$3 = getModel(SLUG$3);
const Route$9 = createFileRoute("/byd-dolphin")({
  head: () => ({
    meta: [{
      title: `${model$3.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$3.name} ${model$3.tagline} ราคาเริ่มต้น ${model$3.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$3.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd dolphin, สเปก byd dolphin, byd dolphin, byd dolphin ราคา, byd dolphin สเปก, รถ byd dolphin"
    }, {
      property: "og:title",
      content: `${model$3.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$3.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$3}`
    }, {
      property: "og:image",
      content: model$3.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$3}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const SLUG$2 = "byd-atto3";
const $$splitComponentImporter$8 = () => import("./byd-atto3-kQW05kjn.mjs");
const model$2 = getModel(SLUG$2);
const Route$8 = createFileRoute("/byd-atto3")({
  head: () => ({
    meta: [{
      title: `${model$2.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$2.name} ${model$2.tagline} ราคาเริ่มต้น ${model$2.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$2.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd atto3, สเปก byd atto3, byd atto3, byd atto 3 ราคา, byd atto3 สเปก, รถ byd atto3"
    }, {
      property: "og:title",
      content: `${model$2.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$2.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$2}`
    }, {
      property: "og:image",
      content: model$2.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$2}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const SLUG$1 = "byd-atto2";
const $$splitComponentImporter$7 = () => import("./byd-atto2-CMU0_toN.mjs");
const model$1 = getModel(SLUG$1);
const Route$7 = createFileRoute("/byd-atto2")({
  head: () => ({
    meta: [{
      title: `${model$1.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model$1.name} ${model$1.tagline} ราคาเริ่มต้น ${model$1.priceFrom.toLocaleString()} บาท วิ่งไกล ${model$1.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd atto2, สเปก byd atto2, byd atto2, byd atto 2 ราคา, byd atto2 สเปก, รถ byd atto2"
    }, {
      property: "og:title",
      content: `${model$1.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model$1.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$1}`
    }, {
      property: "og:image",
      content: model$1.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$1}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const SLUG = "byd-atto1";
const $$splitComponentImporter$6 = () => import("./byd-atto1-BJf9hhZg.mjs");
const model = getModel(SLUG);
const Route$6 = createFileRoute("/byd-atto1")({
  head: () => ({
    meta: [{
      title: `${model.name} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
    }, {
      name: "description",
      content: `${model.name} ${model.tagline} ราคาเริ่มต้น ${model.priceFrom.toLocaleString()} บาท วิ่งไกล ${model.range} กม. พร้อมโปรโมชั่นและทดลองขับฟรีในกรุงเทพ`
    }, {
      name: "keywords",
      content: "ราคา byd atto1, สเปก byd atto1, byd atto1, byd atto 1 ราคา, byd atto1 สเปก, รถ byd atto1"
    }, {
      property: "og:title",
      content: `${model.name} | BYD จินหลง ราชพฤกษ์`
    }, {
      property: "og:description",
      content: model.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG}`
    }, {
      property: "og:image",
      content: model.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_slug-xa6UIK3G.mjs");
const Route$5 = createFileRoute("/$slug")({
  pendingMs: 120,
  pendingComponent: ArticleDetailPending,
  loader: async ({
    params
  }) => {
    const post = await getWpPostBySlug({
      data: {
        slug: params.slug
      }
    });
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{
          title: "Article not found | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
        }]
      };
    }
    return {
      meta: [{
        title: `${post.title} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
      }, {
        name: "description",
        content: post.excerpt || post.title
      }, {
        property: "og:title",
        content: post.title
      }, {
        property: "og:description",
        content: post.excerpt || post.title
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/${post.slug}`
      }, ...post.image ? [{
        property: "og:image",
        content: post.image
      }] : []],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/${post.slug}`)
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt || post.title,
          datePublished: post.date,
          image: post.image || void 0,
          author: {
            "@type": "Organization",
            name: "BYD Chaeng Watthana"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
function ArticleDetailPending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[54vh] overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-background/65 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/88 via-background/52 to-background/24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-48 rounded-full bg-white/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-6 h-5 w-32 rounded-full bg-white/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-12 w-[min(100%,48rem)] rounded-xl bg-white/85 sm:h-16" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-3 h-12 w-[min(100%,38rem)] rounded-xl bg-white/75 sm:h-16" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-6 h-5 w-56 rounded-full bg-white/70" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-14 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-10/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-9/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-8/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" })
    ] }) })
  ] });
}
const HOME_SLIDES_ENDPOINT = "https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?slug=slide-nakorn-in";
function normalizeImageUrl(url) {
  if (!url) {
    return null;
  }
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
}
function extractLargestSrcsetUrl(imgTag) {
  const srcsetMatch = imgTag.match(/srcset=["']([^"']+)["']/i);
  if (!srcsetMatch) {
    return null;
  }
  let bestUrl = "";
  let bestWidth = 0;
  for (const entry of srcsetMatch[1].split(",")) {
    const parts = entry.trim().split(/\s+/);
    if (parts.length < 2) {
      continue;
    }
    const w = parseInt(parts[1] ?? "0", 10);
    if (w > bestWidth && parts[0]) {
      bestWidth = w;
      bestUrl = parts[0];
    }
  }
  return bestUrl ? normalizeImageUrl(bestUrl) : null;
}
function extractSlideImageUrls(payload) {
  if (!Array.isArray(payload) || payload.length === 0) {
    return [];
  }
  const imageUrls = [];
  const seenUrls = /* @__PURE__ */ new Set();
  for (const item of payload) {
    const renderedContent = item.content?.rendered;
    if (typeof renderedContent !== "string") {
      continue;
    }
    const imgTagMatches = renderedContent.matchAll(/<img[^>]+>/gi);
    for (const imgTagMatch of imgTagMatches) {
      const imgTag = imgTagMatch[0];
      const imageUrl = extractLargestSrcsetUrl(imgTag) ?? normalizeImageUrl(imgTag.match(/src=["']([^"']+)["']/i)?.[1]?.trim() ?? "");
      if (!imageUrl || seenUrls.has(imageUrl)) {
        continue;
      }
      seenUrls.add(imageUrl);
      imageUrls.push(imageUrl);
    }
  }
  return imageUrls;
}
const heroImg = "/assets/byd-bg-hero-3vFXOVUH.webp";
const $$splitComponentImporter$4 = () => import("./index-QQD2UAkA.mjs");
reactExports.lazy(() => import("./InstallmentCalculator-D7K5uIhk.mjs").then((module) => ({
  default: module.InstallmentCalculator
})));
const HOME_LOADER_TIMEOUT_MS = 2200;
function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    promise.then((value) => {
      clearTimeout(timeoutId);
      resolve(value);
    }).catch((error) => {
      clearTimeout(timeoutId);
      reject(error);
    });
  });
}
async function fetchSlideImageUrlsWithTimeout(timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(HOME_SLIDES_ENDPOINT, {
      signal: controller.signal
    });
    if (!response.ok) {
      return [];
    }
    const payload = await response.json();
    return extractSlideImageUrls(payload);
  } catch {
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}
const Route$4 = createFileRoute("/")({
  loader: async () => {
    const [wpPostsResult, installmentWpPostsResult, slideImageUrlsResult] = await Promise.allSettled([withTimeout(getHomeWpPosts(), HOME_LOADER_TIMEOUT_MS), withTimeout(getHomeWpInstallmentPosts(), HOME_LOADER_TIMEOUT_MS), fetchSlideImageUrlsWithTimeout(HOME_LOADER_TIMEOUT_MS)]);
    return {
      wpPosts: wpPostsResult.status === "fulfilled" ? wpPostsResult.value : [],
      installmentWpPosts: installmentWpPostsResult.status === "fulfilled" ? installmentWpPostsResult.value : [],
      slideImageUrls: slideImageUrlsResult.status === "fulfilled" ? slideImageUrlsResult.value : []
    };
  },
  head: () => ({
    meta: [{
      title: "บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์ | โชว์รูมและศูนย์บริการมาตรฐาน BYD บีวายดี จินหลง มอเตอร์"
    }, {
      name: "description",
      content: "ตัวแทนจำหน่ายรถยนต์ BYD ในกรุงเทพ ครอบคลุมทั้ง EV และ Plug-in Hybrid พร้อมโปรโมชั่นล่าสุด ตารางผ่อนคุ้มค่า และทดลองขับฟรี"
    }, {
      name: "keywords",
      content: "byd, byd thailand, รถ byd, ศูนย์ byd, รถยนต์ไฟฟ้า byd, byd กรุงเทพ, byd jinlong, โชว์รูม byd, ตัวแทน byd"
    }, {
      property: "og:title",
      content: "BYD จินหลง มอเตอร์ ราชพฤกษ์ — รถไฟฟ้า BYD กรุงเทพ"
    }, {
      property: "og:description",
      content: "รวมรถ BYD ทุกรุ่นทั้ง EV และ Plug-in Hybrid พร้อมโปรโมชั่นและทดลองขับฟรี"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/")
    }, {
      rel: "preload",
      as: "image",
      href: heroImg,
      type: "image/webp",
      fetchPriority: "high"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-B-9017J5.mjs");
const BLOG_HERO_IMAGES = [heroBanner$2, heroBanner$1, heroBanner];
const Route$3 = createFileRoute("/blog/")({
  pendingMs: 150,
  pendingComponent: BlogIndexPending,
  loader: async () => {
    const heroImage = BLOG_HERO_IMAGES[Math.floor(Math.random() * BLOG_HERO_IMAGES.length)];
    try {
      const initialBlogPage = await getHomeWpPostsPage({
        data: {
          page: 1,
          perPage: 12
        }
      });
      return {
        initialBlogPage,
        heroImage
      };
    } catch {
      return {
        initialBlogPage: {
          posts: [],
          page: 1,
          totalPages: 1
        },
        heroImage
      };
    }
  },
  head: () => ({
    meta: [{
      title: "บทความรถไฟฟ้า BYD & ความรู้ EV | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
    }, {
      name: "description",
      content: "บทความ รีวิว เปรียบเทียบ และคำแนะนำเกี่ยวกับรถยนต์ไฟฟ้า BYD และเทคโนโลยี EV ในประเทศไทย"
    }, {
      property: "og:title",
      content: "บทความ BYD | BYD จินหลง ราชพฤกษ์"
    }, {
      property: "og:description",
      content: "ความรู้และบทความเกี่ยวกับรถ EV"
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/blog")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
function BlogIndexPending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/72 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-6 w-32 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
      length: 6
    }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-3 h-6 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-11/12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-4/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" })
        ] })
      ] })
    ] }, index)) }) })
  ] });
}
const $$splitComponentImporter$2 = () => import("../_slug-C6MRA1N2.mjs");
const Route$2 = createFileRoute("/blog/$slug")({
  head: ({
    params
  }) => {
    const a = getArticle(params.slug);
    if (!a) return {
      meta: [{
        title: "Article not found | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์"
      }]
    };
    return {
      meta: [{
        title: `${a.title} | บีวายดี จินหลง มอเตอร์ สาขาราชพฤกษ์`
      }, {
        name: "description",
        content: a.excerpt
      }, {
        property: "og:title",
        content: a.title
      }, {
        property: "og:description",
        content: a.excerpt
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/blog/${a.slug}`
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/blog/${a.slug}`)
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          author: {
            "@type": "Organization",
            name: "BYD จินหลง ราชพฤกษ์"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BTU5dmpx.mjs");
const Route$1 = createFileRoute("/category/news/")({
  beforeLoad: () => {
    throw redirect({
      to: "/blog",
      statusCode: 301
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dwsdb6Kz.mjs");
const Route = createFileRoute("/category/byd-price/")({
  beforeLoad: () => {
    throw redirect({
      to: "/byd-installment",
      statusCode: 301
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestDriveBydRoute = Route$m.update({
  id: "/test-drive-byd",
  path: "/test-drive-byd",
  getParentRoute: () => Route$n
});
const SitemapDotxmlRoute = Route$l.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$n
});
const ModelsRoute = Route$k.update({
  id: "/models",
  path: "/models",
  getParentRoute: () => Route$n
});
const ContactRoute = Route$j.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$n
});
const BydSealion7Route = Route$i.update({
  id: "/byd-sealion7",
  path: "/byd-sealion7",
  getParentRoute: () => Route$n
});
const BydSealion6dmiRoute = Route$h.update({
  id: "/byd-sealion6dmi",
  path: "/byd-sealion6dmi",
  getParentRoute: () => Route$n
});
const BydSealion5dmiRoute = Route$g.update({
  id: "/byd-sealion5dmi",
  path: "/byd-sealion5dmi",
  getParentRoute: () => Route$n
});
const BydSeal6Route = Route$f.update({
  id: "/byd-seal6",
  path: "/byd-seal6",
  getParentRoute: () => Route$n
});
const BydSeal5dmiRoute = Route$e.update({
  id: "/byd-seal5dmi",
  path: "/byd-seal5dmi",
  getParentRoute: () => Route$n
});
const BydSealRoute = Route$d.update({
  id: "/byd-seal",
  path: "/byd-seal",
  getParentRoute: () => Route$n
});
const BydPromotionRoute = Route$c.update({
  id: "/byd-promotion",
  path: "/byd-promotion",
  getParentRoute: () => Route$n
});
const BydM6Route = Route$b.update({
  id: "/byd-m6",
  path: "/byd-m6",
  getParentRoute: () => Route$n
});
const BydInstallmentRoute = Route$a.update({
  id: "/byd-installment",
  path: "/byd-installment",
  getParentRoute: () => Route$n
});
const BydDolphinRoute = Route$9.update({
  id: "/byd-dolphin",
  path: "/byd-dolphin",
  getParentRoute: () => Route$n
});
const BydAtto3Route = Route$8.update({
  id: "/byd-atto3",
  path: "/byd-atto3",
  getParentRoute: () => Route$n
});
const BydAtto2Route = Route$7.update({
  id: "/byd-atto2",
  path: "/byd-atto2",
  getParentRoute: () => Route$n
});
const BydAtto1Route = Route$6.update({
  id: "/byd-atto1",
  path: "/byd-atto1",
  getParentRoute: () => Route$n
});
const SlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => Route$n
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$n
});
const BlogIndexRoute = Route$3.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$n
});
const BlogSlugRoute = Route$2.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$n
});
const CategoryNewsIndexRoute = Route$1.update({
  id: "/category/news/",
  path: "/category/news/",
  getParentRoute: () => Route$n
});
const CategoryBydPriceIndexRoute = Route.update({
  id: "/category/byd-price/",
  path: "/category/byd-price/",
  getParentRoute: () => Route$n
});
const rootRouteChildren = {
  IndexRoute,
  SlugRoute,
  BydAtto1Route,
  BydAtto2Route,
  BydAtto3Route,
  BydDolphinRoute,
  BydInstallmentRoute,
  BydM6Route,
  BydPromotionRoute,
  BydSealRoute,
  BydSeal5dmiRoute,
  BydSeal6Route,
  BydSealion5dmiRoute,
  BydSealion6dmiRoute,
  BydSealion7Route,
  ContactRoute,
  ModelsRoute,
  SitemapDotxmlRoute,
  TestDriveBydRoute,
  BlogSlugRoute,
  BlogIndexRoute,
  CategoryBydPriceIndexRoute,
  CategoryNewsIndexRoute
};
const routeTree = Route$n._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ARTICLES as A,
  Route$2 as B,
  getArticle as C,
  router as D,
  HOME_SLIDES_ENDPOINT as H,
  PageShell as P,
  Route$a as R,
  SLUG$9 as S,
  TEST_DRIVE_FORM_URL as T,
  SLUG$8 as a,
  SLUG$7 as b,
  createSsrRpc as c,
  SLUG$6 as d,
  heroBanner as e,
  fallbackModel as f,
  SLUG$5 as g,
  heroBanner$3 as h,
  PageHero as i,
  SLUG$4 as j,
  heroBanner$1 as k,
  SLUG$3 as l,
  heroBanner$2 as m,
  SLUG$2 as n,
  SLUG$1 as o,
  SLUG as p,
  cn as q,
  Route$5 as r,
  Route$4 as s,
  heroImg as t,
  extractSlideImageUrls as u,
  extractLargestSrcsetUrl as v,
  normalizeImageUrl as w,
  Route$3 as x,
  searchWpPosts as y,
  getHomeWpPostsPage as z
};
