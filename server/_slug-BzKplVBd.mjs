import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { T as notFound } from "./_libs/tanstack__router-core.mjs";
import { B as Route$2, C as getArticle, A as ARTICLES, P as PageShell } from "./_ssr/router-sfM3cCIZ.mjs";
import "./_libs/seroval.mjs";
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
import "./_ssr/server-B5sCLhvk.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/lucide-react.mjs";
import "./_libs/zod.mjs";
function ArticlePage() {
  const {
    slug
  } = Route$2.useParams();
  const a = getArticle(slug);
  if (!a) throw notFound();
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { mainClassName: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-primary text-sm", children: "← กลับสู่บทความทั้งหมด" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-xs font-semibold text-primary", children: a.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl sm:text-5xl font-semibold tracking-normal leading-tight", children: a.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-sm text-muted-foreground", children: [
      a.date,
      " • ",
      a.readTime
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground", children: a.body.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 glass rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mb-3", children: "บทความที่เกี่ยวข้อง" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
        slug: r.slug
      }, className: "text-primary hover:underline", children: r.title }) }, r.slug)) })
    ] })
  ] }) }) });
}
export {
  ArticlePage as component
};
