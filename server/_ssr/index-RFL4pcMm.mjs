import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { x as Route$3, y as searchWpPosts, A as ARTICLES, P as PageShell, z as getHomeWpPostsPage } from "./router-CcbwebiN.mjs";
import "../_libs/seroval.mjs";
import { D as Search, X } from "../_libs/lucide-react.mjs";
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
import "./models-B69ILCyc.mjs";
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
import "../_libs/zod.mjs";
function BlogIndex() {
  const {
    initialBlogPage,
    heroImage
  } = Route$3.useLoaderData();
  const [posts, setPosts] = reactExports.useState(initialBlogPage.posts);
  const [currentPage, setCurrentPage] = reactExports.useState(initialBlogPage.page);
  const [totalPages, setTotalPages] = reactExports.useState(initialBlogPage.totalPages);
  const [isLoadingMore, setIsLoadingMore] = reactExports.useState(false);
  const [scrollTargetIndex, setScrollTargetIndex] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [searchResults, setSearchResults] = reactExports.useState(null);
  const [isSearching, setIsSearching] = reactExports.useState(false);
  const cardsGridRef = reactExports.useRef(null);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setPosts(initialBlogPage.posts);
    setCurrentPage(initialBlogPage.page);
    setTotalPages(initialBlogPage.totalPages);
  }, [initialBlogPage]);
  reactExports.useEffect(() => {
    if (scrollTargetIndex === null) return;
    const targetCard = cardsGridRef.current?.querySelector(`[data-blog-index="${scrollTargetIndex}"]`);
    if (targetCard) targetCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setScrollTargetIndex(null);
  }, [posts.length, scrollTargetIndex]);
  reactExports.useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = searchQuery.trim();
    if (trimmed.length < 3) {
      setSearchResults(null);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const results = await searchWpPosts({
          data: {
            query: trimmed,
            perPage: 12
          }
        });
        setSearchResults(results);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery]);
  const isSearchMode = searchQuery.trim().length > 0;
  const hasWpPosts = posts.length > 0;
  const hasMore = currentPage < totalPages;
  const fallbackPosts = ARTICLES.map((article) => ({
    id: article.slug,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    date: article.date,
    image: null
  }));
  const renderedPosts = isSearchMode ? searchResults ?? [] : hasWpPosts ? posts : fallbackPosts;
  const handleLoadMore = async () => {
    if (!hasWpPosts || !hasMore || isLoadingMore) return;
    setIsLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const previousCount = posts.length;
      const nextPageResult = await getHomeWpPostsPage({
        data: {
          page: nextPage,
          perPage: 12
        }
      });
      setPosts((prev) => {
        const merged = [...prev, ...nextPageResult.posts];
        const unique = /* @__PURE__ */ new Map();
        for (const item of merged) unique.set(item.id, item);
        return Array.from(unique.values());
      });
      setCurrentPage(nextPageResult.page);
      setTotalPages(nextPageResult.totalPages);
      setScrollTargetIndex(previousCount);
    } finally {
      setIsLoadingMore(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "BYD blog hero banner", className: "absolute inset-0 h-full w-full object-cover", loading: "eager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/72 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: "ข่าวสาร & บทความ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up", children: "ข่าวสาร บทความรถไฟฟ้า BYD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up", children: "ความรู้ ข่าวสาร และเทคนิคการใช้งานรถ EV" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-lg mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "ค้นหาบทความ...", className: "w-full rounded-full border border-border bg-background/60 py-3 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" }),
          searchQuery ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSearchQuery(""), className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "aria-label": "ล้างการค้นหา", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }) : null
        ] }),
        isSearchMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-sm text-muted-foreground", children: isSearching ? "กำลังค้นหา..." : searchResults === null ? "" : searchResults.length > 0 ? `พบ ${searchResults.length} บทความ สำหรับ "${searchQuery.trim()}"` : `ไม่พบบทความสำหรับ "${searchQuery.trim()}"` }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: cardsGridRef, className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: renderedPosts.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$slug", params: {
        slug: post.slug
      }, "data-blog-index": index, className: "glass rounded-2xl overflow-hidden hover-lift block h-full flex flex-col animate-fade-in-up", children: [
        post.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-44 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-bold leading-snug line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground line-clamp-3", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date ? new Date(post.date).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "short",
              day: "numeric"
            }) : "อัปเดตล่าสุด" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "อ่านต่อ →" })
          ] })
        ] })
      ] }, post.id)) }),
      hasWpPosts && hasMore && !searchQuery ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleLoadMore, disabled: isLoadingMore, className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/85 px-6 py-3 text-sm font-semibold text-black transition hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-60", children: isLoadingMore ? "กำลังโหลด..." : "ดูข้อมูลเพิ่มเติม" }) }) : null
    ] })
  ] });
}
export {
  BlogIndex as component
};
