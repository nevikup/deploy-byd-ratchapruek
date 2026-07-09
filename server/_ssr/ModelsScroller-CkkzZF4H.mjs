import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as INSTALLMENT_MODELS } from "./models-B69ILCyc.mjs";
import { x as ArrowLeft, A as ArrowRight, v as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function ModelsScroller({
  variant = "default",
  lightBadgeStyle = "light"
}) {
  const scrollerRef = reactExports.useRef(null);
  const cardWidthRef = reactExports.useRef(0);
  const [canPrev, setCanPrev] = reactExports.useState(false);
  const [canNext, setCanNext] = reactExports.useState(true);
  const [progress, setProgress] = reactExports.useState(0);
  const updateState = reactExports.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-model-card]");
    if (card) cardWidthRef.current = card.offsetWidth;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
  }, []);
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    const ro = new ResizeObserver(updateState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateState);
      ro.disconnect();
    };
  }, [updateState]);
  const scrollByDir = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = cardWidthRef.current > 0 ? cardWidthRef.current + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };
  const isLight = variant === "light";
  const useDefaultBadgeInLight = isLight && lightBadgeStyle === "default";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative mt-12 ${isLight ? "mx-0" : "-mx-4 sm:mx-0"}`, children: [
    !isLight ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: `pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 ${canPrev ? "opacity-100" : "opacity-0"}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: `pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 ${canNext ? "opacity-100" : "opacity-0"}`
        }
      )
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => scrollByDir(-1),
        "aria-label": "เลื่อนซ้าย",
        disabled: !canPrev,
        className: `hidden lg:flex absolute -left-5 top-[38%] z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-strong border border-border/70 text-foreground shadow-[0_12px_30px_-16px_rgba(0,0,0,0.6)] backdrop-blur transition-all duration-300 hover:scale-110 ${isLight ? "bg-white/90 hover:bg-white hover:border-[#d70c19] hover:text-[#d70c19]" : "hover:bg-primary hover:text-primary-foreground"} ${canPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => scrollByDir(1),
        "aria-label": "เลื่อนขวา",
        disabled: !canNext,
        className: `hidden lg:flex absolute -right-5 top-[38%] z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-strong border border-border/70 text-foreground shadow-[0_12px_30px_-16px_rgba(0,0,0,0.6)] backdrop-blur transition-all duration-300 hover:scale-110 ${isLight ? "bg-white/90 hover:bg-white hover:border-[#d70c19] hover:text-[#d70c19]" : "hover:bg-primary hover:text-primary-foreground"} ${canNext ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollerRef,
        className: `flex snap-x snap-mandatory overflow-x-auto pb-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth ${isLight ? "gap-3 px-6 pr-8" : "-mx-4 px-4 gap-6"}`,
        children: INSTALLMENT_MODELS.map((m) => {
          const isHybrid = m.name.includes("DM-i");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: m.href,
              "data-model-card": true,
              className: `group relative flex flex-none snap-start flex-col overflow-hidden rounded-3xl border border-border/60 hover-lift focus:outline-none focus:ring-2 focus:ring-primary/60 ${isLight ? "h-[569px] w-[88vw] max-w-none bg-white sm:h-auto sm:w-[calc(75%-0.75rem)]" : "h-[96svh] w-[76vw] max-w-none bg-transparent glass sm:h-auto sm:w-[260px] lg:w-[calc((100%-3rem)/3.5)]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `relative overflow-hidden ${isLight ? "flex-[1] min-h-[430px] bg-white sm:flex-none sm:h-auto sm:aspect-[17/10]" : "flex-[1.2] min-h-[74svh] bg-gradient-to-br from-surface-elevated via-surface to-background sm:flex-none sm:h-auto sm:aspect-[4/3]"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: m.image,
                          alt: m.name,
                          loading: "lazy",
                          className: `absolute inset-0 h-full w-full transition-transform duration-700 ${isLight ? "object-contain object-center sm:object-cover group-hover:scale-[1.02]" : "object-cover group-hover:scale-[1.06]"}`
                        }
                      ),
                      !isLight ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" }) : null,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur ${useDefaultBadgeInLight || !isLight ? "bg-[#2f3231]/70 text-white" : "bg-[#ffffffd9] text-foreground"}`,
                          children: isHybrid ? "DM-i" : "EV"
                        }
                      ),
                      isLight ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "light-model-card-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent px-4 pb-4 pt-10 text-white", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold leading-tight tracking-normal line-clamp-1 text-white", children: m.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80", children: "เริ่มต้น" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white", children: new Intl.NumberFormat("th-TH").format(m.priceFrom) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/85", children: "บาท" })
                        ] })
                      ] }) : null
                    ]
                  }
                ),
                !isLight ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
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
                ] }) : null
              ]
            },
            m.slug
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1 flex-1 overflow-hidden rounded-full bg-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-[width] duration-200",
          style: { width: `${Math.max(15, progress * 100)}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-opacity ${canNext ? "opacity-100" : "opacity-0"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "เลื่อนเพื่อดูเพิ่มเติม" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "ปัดเพื่อดูเพิ่ม" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 animate-pulse" })
      ] })
    ] })
  ] });
}
export {
  ModelsScroller
};
