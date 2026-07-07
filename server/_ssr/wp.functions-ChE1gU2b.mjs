import { c as createServerRpc } from "./createServerRpc-DTXFVred.mjs";
import { c as createServerFn } from "./server-DkP7HoS9.mjs";
import { r as resolveInstallmentCoverImageFromTitle } from "./models-CGoesGQ4.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const WP_HOME_POSTS_URL = "https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&categories=17&per_page=6&orderby=date&order=desc";
const WP_HOME_INSTALLMENT_POSTS_URL = "https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&categories=115&per_page=6&orderby=date&order=desc";
const WP_FETCH_TIMEOUT_MS = 2200;
async function fetchWithTimeout(url, init, timeoutMs = WP_FETCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeoutId);
  }
}
function decodeHtmlEntities(value) {
  return value.replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec))).replace(/&#x([\da-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/g, "'").replace(/&nbsp;/gi, " ");
}
function stripHtml(value) {
  if (!value) return "";
  return decodeHtmlEntities(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}
function normalizeWpSlug(slug) {
  const raw = (slug || "").trim();
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}
function resolveInstallmentCoverImage(post, title) {
  return resolveInstallmentCoverImageFromTitle(title) || resolveInstallmentCoverImageFromTitle(normalizeWpSlug(post.slug)) || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}
function stripInlineStylesFromHtml(html) {
  if (!html) return "";
  return html.replace(/\sstyle=("[^"]*"|'[^']*')/gi, "").replace(/\sstyle=([^\s>]+)/gi, "");
}
const getHomeWpPosts_createServerFn_handler = createServerRpc({
  id: "e124dd0647cb0a4a7fb8437819b19ffd575c7cb636e9a909a1d62876ec8765e9",
  name: "getHomeWpPosts",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => getHomeWpPosts.__executeServer(opts));
const getHomeWpPosts = createServerFn({
  method: "GET"
}).handler(getHomeWpPosts_createServerFn_handler, async () => {
  const response = await fetchWithTimeout(WP_HOME_POSTS_URL, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch wordpress posts: ${response.status}`);
  }
  const posts = await response.json();
  return posts.map((post) => {
    const terms = post._embedded?.["wp:term"]?.flat() ?? [];
    const category = terms.find((term) => term.taxonomy === "category" && term.id === 17)?.name || terms.find((term) => term.taxonomy === "category")?.name || "บทความ";
    return {
      id: post.id,
      slug: normalizeWpSlug(post.slug),
      title: stripHtml(post.title?.rendered),
      excerpt: stripHtml(post.excerpt?.rendered),
      link: post.link || "https://bydratchaphruek.com/blog/",
      date: post.date || "",
      category,
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    };
  });
});
const getHomeWpInstallmentPosts_createServerFn_handler = createServerRpc({
  id: "143032dbd33c3cc14833000d3c1dffb802490bd6babd9c8f4c4e34da9a7133fc",
  name: "getHomeWpInstallmentPosts",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => getHomeWpInstallmentPosts.__executeServer(opts));
const getHomeWpInstallmentPosts = createServerFn({
  method: "GET"
}).handler(getHomeWpInstallmentPosts_createServerFn_handler, async () => {
  const response = await fetchWithTimeout(WP_HOME_INSTALLMENT_POSTS_URL, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch wordpress installment posts: ${response.status}`);
  }
  const posts = await response.json();
  return posts.map((post) => {
    const terms = post._embedded?.["wp:term"]?.flat() ?? [];
    const category = terms.find((term) => term.taxonomy === "category" && term.id === 115)?.name || terms.find((term) => term.taxonomy === "category")?.name || "ตารางผ่อน";
    const title = stripHtml(post.title?.rendered);
    return {
      id: post.id,
      slug: normalizeWpSlug(post.slug),
      title,
      excerpt: stripHtml(post.excerpt?.rendered),
      link: post.link || "https://bydratchaphruek.com/blog/",
      date: post.date || "",
      category,
      image: resolveInstallmentCoverImage(post, title)
    };
  });
});
const getHomeWpInstallmentPostsPage_createServerFn_handler = createServerRpc({
  id: "ad8de6597b94aa111ef122563d3cea6c1a56601a4a9c24f1a6ebf601edc73c29",
  name: "getHomeWpInstallmentPostsPage",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => getHomeWpInstallmentPostsPage.__executeServer(opts));
const getHomeWpInstallmentPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(getHomeWpInstallmentPostsPage_createServerFn_handler, async ({
  data
}) => {
  const page = data.page;
  const perPage = data.perPage ?? 6;
  const response = await fetch(`https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&categories=115&per_page=${perPage}&orderby=date&order=desc&page=${page}`, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch wordpress installment posts by page: ${response.status}`);
  }
  const totalPagesHeader = response.headers.get("X-WP-TotalPages");
  const totalPages = Number(totalPagesHeader || "1") || 1;
  const posts = await response.json();
  return {
    posts: posts.map((post) => {
      const terms = post._embedded?.["wp:term"]?.flat() ?? [];
      const category = terms.find((term) => term.taxonomy === "category" && term.id === 115)?.name || terms.find((term) => term.taxonomy === "category")?.name || "ตารางผ่อน";
      const title = stripHtml(post.title?.rendered);
      return {
        id: post.id,
        slug: normalizeWpSlug(post.slug),
        title,
        excerpt: stripHtml(post.excerpt?.rendered),
        link: post.link || "https://cms.jinlongmotors.co.th/blog/",
        date: post.date || "",
        category,
        image: resolveInstallmentCoverImage(post, title)
      };
    }),
    page,
    totalPages
  };
});
const getHomeWpPostsPage_createServerFn_handler = createServerRpc({
  id: "e18264ef70fc3e3fba92c9a9ec07ed978c80717e202d821725653d3bdb80e882",
  name: "getHomeWpPostsPage",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => getHomeWpPostsPage.__executeServer(opts));
const getHomeWpPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(getHomeWpPostsPage_createServerFn_handler, async ({
  data
}) => {
  const page = data.page;
  const perPage = data.perPage ?? 6;
  const response = await fetch(`https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&categories=17&per_page=${perPage}&orderby=date&order=desc&page=${page}`, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch wordpress posts by page: ${response.status}`);
  }
  const totalPagesHeader = response.headers.get("X-WP-TotalPages");
  const totalPages = Number(totalPagesHeader || "1") || 1;
  const posts = await response.json();
  return {
    posts: posts.map((post) => {
      const terms = post._embedded?.["wp:term"]?.flat() ?? [];
      const category = terms.find((term) => term.taxonomy === "category" && term.id === 17)?.name || terms.find((term) => term.taxonomy === "category")?.name || "บทความ";
      return {
        id: post.id,
        slug: normalizeWpSlug(post.slug),
        title: stripHtml(post.title?.rendered),
        excerpt: stripHtml(post.excerpt?.rendered),
        link: post.link || "https://cms.jinlongmotors.co.th/blog/",
        date: post.date || "",
        category,
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
      };
    }),
    page,
    totalPages
  };
});
const searchWpPosts_createServerFn_handler = createServerRpc({
  id: "32272a7df9813618d4837e8892702eddb0cd0d56903bd26f422d8fd873dac00e",
  name: "searchWpPosts",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => searchWpPosts.__executeServer(opts));
const searchWpPosts = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  query: stringType().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(searchWpPosts_createServerFn_handler, async ({
  data
}) => {
  const perPage = data.perPage ?? 12;
  const response = await fetch(`https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&categories=17&per_page=${perPage}&orderby=relevance&search=${encodeURIComponent(data.query)}`, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to search wordpress posts: ${response.status}`);
  }
  const posts = await response.json();
  return posts.map((post) => {
    const terms = post._embedded?.["wp:term"]?.flat() ?? [];
    const category = terms.find((term) => term.taxonomy === "category" && term.id === 17)?.name || terms.find((term) => term.taxonomy === "category")?.name || "บทความ";
    return {
      id: post.id,
      slug: normalizeWpSlug(post.slug),
      title: stripHtml(post.title?.rendered),
      excerpt: stripHtml(post.excerpt?.rendered),
      link: post.link || "https://cms.jinlongmotors.co.th/blog/",
      date: post.date || "",
      category,
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    };
  });
});
const getWpPostBySlug_createServerFn_handler = createServerRpc({
  id: "ba8692a4505e9669ca8c394ed763368bd0a967597d786cff262860006d1bd73f",
  name: "getWpPostBySlug",
  filename: "src/lib/api/wp.functions.ts"
}, (opts) => getWpPostBySlug.__executeServer(opts));
const getWpPostBySlug = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType().min(1)
})).handler(getWpPostBySlug_createServerFn_handler, async ({
  data
}) => {
  const slug = data?.slug?.trim();
  if (!slug) return null;
  const slugCandidates = Array.from(/* @__PURE__ */ new Set([slug, normalizeWpSlug(slug)]));
  let post;
  for (const slugCandidate of slugCandidates) {
    const response = await fetch(`https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slugCandidate)}&per_page=1`, {
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch wordpress post by slug: ${response.status}`);
    }
    const posts = await response.json();
    post = posts[0];
    if (post) break;
  }
  if (!post) return null;
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  const preferredCategoryTerm = terms.find((term) => term.taxonomy === "category" && term.id === 115) || terms.find((term) => term.taxonomy === "category" && term.id === 17) || terms.find((term) => term.taxonomy === "category");
  const category = preferredCategoryTerm?.name || "บทความ";
  const categoryId = preferredCategoryTerm?.id ?? null;
  return {
    id: post.id,
    slug: normalizeWpSlug(post.slug || slug),
    title: stripHtml(post.title?.rendered),
    excerpt: stripHtml(post.excerpt?.rendered),
    contentHtml: stripInlineStylesFromHtml(post.content?.rendered),
    link: post.link || "https://cms.jinlongmotors.co.th/blog/",
    date: post.date || "",
    category,
    categoryId,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
  };
});
export {
  getHomeWpInstallmentPostsPage_createServerFn_handler,
  getHomeWpInstallmentPosts_createServerFn_handler,
  getHomeWpPostsPage_createServerFn_handler,
  getHomeWpPosts_createServerFn_handler,
  getWpPostBySlug_createServerFn_handler,
  searchWpPosts_createServerFn_handler
};
