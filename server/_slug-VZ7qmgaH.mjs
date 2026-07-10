import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { T as notFound } from "./_libs/tanstack__router-core.mjs";
import { r as Route$5, P as PageShell } from "./_ssr/router-DoZbT7Lo.mjs";
import "./_libs/seroval.mjs";
import { x as ArrowLeft, t as CalendarDays } from "./_libs/lucide-react.mjs";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/react-icons.mjs";
import "./_ssr/models-B69ILCyc.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_ssr/server-CnDuuMea.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/zod.mjs";
function ArticleDetailPage() {
  const {
    post
  } = Route$5.useLoaderData();
  if (!post) throw notFound();
  const isInstallmentArticle = post.categoryId === 115;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[54vh] overflow-hidden border-b border-border", children: [
      post.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "absolute inset-0 h-full w-full object-cover", loading: "eager" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-background/65 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/88 via-background/52 to-background/24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: isInstallmentArticle ? "/byd-installment" : "/blog", className: "inline-flex items-center gap-2 rounded-full glass bg-white/85 px-4 py-2 text-xs text-black hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          " ",
          isInstallmentArticle ? "กลับไปหน้าตารางผ่อน" : "กลับไปหน้าบทความ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-black/80", children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-4xl text-3xl sm:text-5xl font-semibold leading-[1.08] text-black", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-sm text-black/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
          post.date ? new Date(post.date).toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) : "อัปเดตล่าสุด"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-14 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-0 sm:p-0 lg:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "article-content prose prose-invert max-w-none prose-headings:text-white prose-p:text-muted-foreground prose-strong:text-white prose-a:text-primary", dangerouslySetInnerHTML: {
      __html: post.contentHtml
    } }) }) }) })
  ] });
}
export {
  ArticleDetailPage as component
};
