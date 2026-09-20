globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"364-+LQB1CmAkWNXbMo2R7lZjQTcC18"',
    "mtime": "2026-09-17T12:42:55.565Z",
    "size": 868,
    "path": "../public/llms.txt"
  },
  "/google239fe4228e210e22.html": {
    "type": "text/html; charset=utf-8",
    "etag": '"35-Qunq71oJVuTn8WmYznbdFLX9qdk"',
    "mtime": "2026-06-27T08:17:25.784Z",
    "size": 53,
    "path": "../public/google239fe4228e210e22.html"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"4b-t/0gRFDOlmIrCPnATtX71P04EXY"',
    "mtime": "2026-09-17T12:42:55.566Z",
    "size": 75,
    "path": "../public/robots.txt"
  },
  "/assets/alloy-wheel-BXosDHW6.webp": {
    "type": "image/webp",
    "etag": '"1dd26-DM3j8ihrubydYzx7ghl5aG/uCYQ"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 122150,
    "path": "../public/assets/alloy-wheel-BXosDHW6.webp"
  },
  "/assets/arrow-left-C-L-vtz-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-H+NZQUwpYt2inyzth4/pGQasmx4"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 166,
    "path": "../public/assets/arrow-left-C-L-vtz-.js"
  },
  "/assets/arrow-right-bGvJy4Ej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-q590lzQsbYTlhMH6oUP/RiUpgYU"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 166,
    "path": "../public/assets/arrow-right-bGvJy4Ej.js"
  },
  "/assets/armrest-CGKF5xPK.jpeg": {
    "type": "image/jpeg",
    "etag": '"b40c-cReP2D8XOJS7Z0/5xqccWVL3u6Y"',
    "mtime": "2026-09-20T03:06:22.147Z",
    "size": 46092,
    "path": "../public/assets/armrest-CGKF5xPK.jpeg"
  },
  "/assets/aluminum-side-sill-CY8G3b71.webp": {
    "type": "image/webp",
    "etag": '"2895a-KNzIiMGv7grWrtiGPFlXrsHY7dM"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 166234,
    "path": "../public/assets/aluminum-side-sill-CY8G3b71.webp"
  },
  "/assets/atto1-description-2-wgNAOfCR.webp": {
    "type": "image/webp",
    "etag": '"38d70-i2E68ji2KQfS0hM9J5RRS1eyvqM"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 232816,
    "path": "../public/assets/atto1-description-2-wgNAOfCR.webp"
  },
  "/assets/atto1-description-1-w4KfBWs3.jpeg": {
    "type": "image/jpeg",
    "etag": '"3b029-4lJtFX4DCKJ/Uzlw2LLkSCc2Zfk"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 241705,
    "path": "../public/assets/atto1-description-1-w4KfBWs3.jpeg"
  },
  "/assets/alloy-wheels-D0DnSfX-.webp": {
    "type": "image/webp",
    "etag": '"53c30-GCT/FTKLFEoZ2NPq4TCkZCmbw0c"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 343088,
    "path": "../public/assets/alloy-wheels-D0DnSfX-.webp"
  },
  "/assets/atto1-pop-green-model-2GJyyGtp.png": {
    "type": "image/png",
    "etag": '"3f812-NhC8NELjCNSzsyjGOBUECwXj6ic"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 260114,
    "path": "../public/assets/atto1-pop-green-model-2GJyyGtp.png"
  },
  "/assets/atto1-quantum-black-model-kH_4bcl8.png": {
    "type": "image/png",
    "etag": '"3334c-il3NQRjPlSm1nwaQUrnSidph3b4"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 209740,
    "path": "../public/assets/atto1-quantum-black-model-kH_4bcl8.png"
  },
  "/assets/atto2-description-1-BAAPfgXx.webp": {
    "type": "image/webp",
    "etag": '"a56a-/sHKe9Y8yAe/3Z3fc6AjnWxPo70"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 42346,
    "path": "../public/assets/atto2-description-1-BAAPfgXx.webp"
  },
  "/assets/atto1-shell-white-model-RjKdg_T1.png": {
    "type": "image/png",
    "etag": '"3ec8d-V7vn/fprXKViiZXdAETJxVAf7Ws"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 257165,
    "path": "../public/assets/atto1-shell-white-model-RjKdg_T1.png"
  },
  "/assets/atto1-velocity-blue-model-DODycsY7.png": {
    "type": "image/png",
    "etag": '"450b9-Ya7I4avKW8WRmlSlG2tIMnt1odc"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 282809,
    "path": "../public/assets/atto1-velocity-blue-model-DODycsY7.png"
  },
  "/assets/atto2-description-2-CF3cjXDj.jpeg": {
    "type": "image/jpeg",
    "etag": '"13e1d-Ey1lhSr0gjlbud67w5arESK7h6o"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 81437,
    "path": "../public/assets/atto2-description-2-CF3cjXDj.jpeg"
  },
  "/assets/atto2-description-compact-suv-Czi8QWBs.jpeg": {
    "type": "image/jpeg",
    "etag": '"79680-MkWiNPHWw/WMiJ3w+/0ITNtT7/A"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 497280,
    "path": "../public/assets/atto2-description-compact-suv-Czi8QWBs.jpeg"
  },
  "/assets/atto1-banner-desktop-DaakPOb4.jpeg": {
    "type": "image/jpeg",
    "etag": '"8191e-RIDhRazBL46MobOI/gmEky7jAr0"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 530718,
    "path": "../public/assets/atto1-banner-desktop-DaakPOb4.jpeg"
  },
  "/assets/atto2-harbour-grey-model-B_LSKQNv.png": {
    "type": "image/png",
    "etag": '"d7075-xwPdCj1t9OqJHjVcD3gX+R5M7HI"',
    "mtime": "2026-09-20T03:06:22.188Z",
    "size": 880757,
    "path": "../public/assets/atto2-harbour-grey-model-B_LSKQNv.png"
  },
  "/assets/atto2-quantum-black-D0qNkSFn.png": {
    "type": "image/png",
    "etag": '"dd6dd-lovb5N4jEk/kbeHwWG9Zh5+mtwQ"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 906973,
    "path": "../public/assets/atto2-quantum-black-D0qNkSFn.png"
  },
  "/assets/awd-ultimate-interior-01-DXsKk5MB.webp": {
    "type": "image/webp",
    "etag": '"a4a52-k84PC12SEIs80qEgesmfmYvlra8"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 674386,
    "path": "../public/assets/awd-ultimate-interior-01-DXsKk5MB.webp"
  },
  "/assets/atto2-surge-white-model-DjF2MMF8.png": {
    "type": "image/png",
    "etag": '"e702f-w1nZsaVkvmYK7ACIoKFxG0XcbtI"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 946223,
    "path": "../public/assets/atto2-surge-white-model-DjF2MMF8.png"
  },
  "/assets/atto2-minimal-green-model-Cw1seS3h.png": {
    "type": "image/png",
    "etag": '"104b1e-jVvY7G/PFRNN5XLfwoE+EsWgMCY"',
    "mtime": "2026-09-20T03:06:22.406Z",
    "size": 1067806,
    "path": "../public/assets/atto2-minimal-green-model-Cw1seS3h.png"
  },
  "/assets/atto2-banner-desktop-BjuWDwJy.png": {
    "type": "image/png",
    "etag": '"1a5ad2-lSSDDNZVS/1Nc4+e/Zzjh2X7kwg"',
    "mtime": "2026-09-20T03:06:22.419Z",
    "size": 1727186,
    "path": "../public/assets/atto2-banner-desktop-BjuWDwJy.png"
  },
  "/assets/battery-blade-Ad1EQDWe.jpeg": {
    "type": "image/jpeg",
    "etag": '"16adf-fIPqbCuVKUsitHj4Yx/jO5St6g4"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 92895,
    "path": "../public/assets/battery-blade-Ad1EQDWe.jpeg"
  },
  "/assets/battery-blade-DnoVyE-_.webp": {
    "type": "image/webp",
    "etag": '"7a2b8-NVo+pHc8yFaszG/F0XxCMfyH8pw"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 500408,
    "path": "../public/assets/battery-blade-DnoVyE-_.webp"
  },
  "/assets/byd-atto2-B6KYmxVY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59-y3Czr6V096mVSacx6mmNEX2KeBM"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 27737,
    "path": "../public/assets/byd-atto2-B6KYmxVY.js"
  },
  "/assets/byd-atto3-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 41,
    "path": "../public/assets/byd-atto3-DtqBFgK5.js"
  },
  "/assets/byd-atto3-CV1cv1WG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8375-LR374Fs3pidP8al7jILZylp25Rc"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 33653,
    "path": "../public/assets/byd-atto3-CV1cv1WG.js"
  },
  "/assets/byd-atto1-D8oLPKSq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8af6-n3gFraEB436Yfed/lowlVZ839ag"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 35574,
    "path": "../public/assets/byd-atto1-D8oLPKSq.js"
  },
  "/assets/byd-dolphin-DlgFrMos.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8709-ey/sB0PRSMIlwuuz+o24kpt99sM"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 34569,
    "path": "../public/assets/byd-dolphin-DlgFrMos.js"
  },
  "/assets/byd-installment-C5yQfkZG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f10-C95vCtmrfR7IJh9Db4v7xlf50BI"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 7952,
    "path": "../public/assets/byd-installment-C5yQfkZG.js"
  },
  "/assets/byd-bg-hero-3vFXOVUH.webp": {
    "type": "image/webp",
    "etag": '"1ad52-I2dS4A2Gc8PyKVZjkPIzXiM8gPg"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 109906,
    "path": "../public/assets/byd-bg-hero-3vFXOVUH.webp"
  },
  "/assets/blade-battery-KXfMMaFT.jpeg": {
    "type": "image/jpeg",
    "etag": '"90c93-6/l1QSWP7CgqmRG4lGJanpt8HwY"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 593043,
    "path": "../public/assets/blade-battery-KXfMMaFT.jpeg"
  },
  "/assets/byd-m6-Ee-tf_oT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8ac7-4KKAP25YhiNWlEWlkazk8oM9ZcI"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 35527,
    "path": "../public/assets/byd-m6-Ee-tf_oT.js"
  },
  "/assets/byd-promotion-CK7FPUAh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103b-yVrI2bv4l2Fz+1dqu297mJRu8uM"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 4155,
    "path": "../public/assets/byd-promotion-CK7FPUAh.js"
  },
  "/assets/byd-seal-1KNybaT9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8edc-j9Aut7PojoKsWrTqB2h7MpxODqQ"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 36572,
    "path": "../public/assets/byd-seal-1KNybaT9.js"
  },
  "/assets/BYD-ATTO3-VtoL-Vehicle-to-Load-CLq1uBAe.jpg": {
    "type": "image/jpeg",
    "etag": '"a8d4d-ojl9CdeZJTadf783NOcCiMgsozc"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 691533,
    "path": "../public/assets/BYD-ATTO3-VtoL-Vehicle-to-Load-CLq1uBAe.jpg"
  },
  "/assets/byd-seal-5-dm-i-banner-overview-desktop2-DPBl97ky.jpeg": {
    "type": "image/jpeg",
    "etag": '"4918f-zWAtteHmXsKuV93FwNvUA7Z+usA"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 299407,
    "path": "../public/assets/byd-seal-5-dm-i-banner-overview-desktop2-DPBl97ky.jpeg"
  },
  "/assets/byd-seal-5-dm-i-content-desktop-BTQB4_n3.jpeg": {
    "type": "image/jpeg",
    "etag": '"5a717-jkYQCbaoeDxcGPpnsD0EWNUmqJc"',
    "mtime": "2026-09-20T03:06:22.147Z",
    "size": 370455,
    "path": "../public/assets/byd-seal-5-dm-i-content-desktop-BTQB4_n3.jpeg"
  },
  "/assets/awd-ultimate-interior-03-CExdBGX-.webp": {
    "type": "image/webp",
    "etag": '"13d7a6-L98e8PVSsvuttb67fvqDyvXLWcQ"',
    "mtime": "2026-09-20T03:06:22.413Z",
    "size": 1300390,
    "path": "../public/assets/awd-ultimate-interior-03-CExdBGX-.webp"
  },
  "/assets/awd-ultimate-interior-04-D7fyKcWg.webp": {
    "type": "image/webp",
    "etag": '"1561cc-bjq8B2yq9HUkGOVloLFUgNacRcg"',
    "mtime": "2026-09-20T03:06:22.413Z",
    "size": 1401292,
    "path": "../public/assets/awd-ultimate-interior-04-D7fyKcWg.webp"
  },
  "/assets/byd-seal-5-dm-i-content-desktop-B_m05HJ7.webp": {
    "type": "image/webp",
    "etag": '"5bc16-9zQnZS9I2LcAzD/4hhJ1efI5ZSo"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 375830,
    "path": "../public/assets/byd-seal-5-dm-i-content-desktop-B_m05HJ7.webp"
  },
  "/assets/awd-ultimate-interior-05-CPrlXae0.webp": {
    "type": "image/webp",
    "etag": '"1858be-qXgkCfRFysJ3UxIrem+6oQByPXQ"',
    "mtime": "2026-09-20T03:06:22.423Z",
    "size": 1595582,
    "path": "../public/assets/awd-ultimate-interior-05-CPrlXae0.webp"
  },
  "/assets/byd-seal5dmi-DEznwtBf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5dbe-/QixSlRVq1goJ4Ce5J2ADoY8fNA"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 23998,
    "path": "../public/assets/byd-seal5dmi-DEznwtBf.js"
  },
  "/assets/byd-sealion-6-dm-i-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 41,
    "path": "../public/assets/byd-sealion-6-dm-i-DtqBFgK5.js"
  },
  "/assets/byd-sealion6dmi-Dkmeew2t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a89a-8mZOBqmHg3iQrS0R05NkXVGBXC8"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 43162,
    "path": "../public/assets/byd-sealion6dmi-Dkmeew2t.js"
  },
  "/assets/byd-seal6-DOELNLIm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"622a-puoNes4VC1t9i3xbYHsG39JCGe0"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 25130,
    "path": "../public/assets/byd-seal6-DOELNLIm.js"
  },
  "/assets/byd-sealion5dmi-BU7_ENpL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e1f-NC2O+C3cz2z4UJB3WBj/y3mS+yM"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 28191,
    "path": "../public/assets/byd-sealion5dmi-BU7_ENpL.js"
  },
  "/assets/byd-sealion7-Yo2HMFPP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bcfb-Q6UBS5c1Z3qBfekZ1BGAZS9dKeg"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 48379,
    "path": "../public/assets/byd-sealion7-Yo2HMFPP.js"
  },
  "/assets/calendar-days-DyqIuKSn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-SoXYUNB1FHwGxOvZzpxfBZ3DgDw"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 495,
    "path": "../public/assets/calendar-days-DyqIuKSn.js"
  },
  "/assets/BYD-แจ้งวัฒนะ-1536x556-Cj-LAAmg.jpg": {
    "type": "image/jpeg",
    "etag": '"24f7c-Za/ibR7f+MET0xSWOZ7njaFBS40"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 151420,
    "path": "../public/assets/BYD-แจ้งวัฒนะ-1536x556-Cj-LAAmg.jpg"
  },
  "/assets/charging-port-B26LyUSI.webp": {
    "type": "image/webp",
    "etag": '"27704-E5VJogXz2rcp9PwW1iwRimP0Gb8"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 161540,
    "path": "../public/assets/charging-port-B26LyUSI.webp"
  },
  "/assets/charging-Y86UxWfd.jpg": {
    "type": "image/jpeg",
    "etag": '"f315-2I1crms+rwKg0KqS+FYfzEkvxbc"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 62229,
    "path": "../public/assets/charging-Y86UxWfd.jpg"
  },
  "/assets/awd-ultimate-interior-08-BOyFLwNp.webp": {
    "type": "image/webp",
    "etag": '"273284-Sxn3vWMSAeaWYzSUytgM9BRSpvc"',
    "mtime": "2026-09-20T03:06:22.427Z",
    "size": 2568836,
    "path": "../public/assets/awd-ultimate-interior-08-BOyFLwNp.webp"
  },
  "/assets/awd-ultimate-interior-06-DWrHKvFg.webp": {
    "type": "image/webp",
    "etag": '"2395c4-+n9d2y7k+RJKpgye8F+AFzY21Ro"',
    "mtime": "2026-09-20T03:06:22.426Z",
    "size": 2332100,
    "path": "../public/assets/awd-ultimate-interior-06-DWrHKvFg.webp"
  },
  "/assets/chargingPort-BIS2GRZv.jpeg": {
    "type": "image/jpeg",
    "etag": '"e57e-pRC2TSdUcTeS8kce09zVLlepClY"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 58750,
    "path": "../public/assets/chargingPort-BIS2GRZv.jpeg"
  },
  "/assets/circuit-board-BzRNL5fJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d-CjVQBKoogkrN2CSsaH0dv8MxHg8"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 349,
    "path": "../public/assets/circuit-board-BzRNL5fJ.js"
  },
  "/assets/chevron-right-KCkkqpha.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-pOsHJbxyenfKN+V1JdlEwEe4EqM"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 131,
    "path": "../public/assets/chevron-right-KCkkqpha.js"
  },
  "/assets/chargingTool-DEjj5fvC.jpeg": {
    "type": "image/jpeg",
    "etag": '"ed64-iLaycIRGkOXLJFOIc6ryRFvL1Bw"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 60772,
    "path": "../public/assets/chargingTool-DEjj5fvC.jpeg"
  },
  "/assets/contact-CeEhimbM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"44ae-or686oasyhVtF7yzvW2ePpPElFA"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 17582,
    "path": "../public/assets/contact-CeEhimbM.js"
  },
  "/assets/console-DXHDtFt3.jpeg": {
    "type": "image/jpeg",
    "etag": '"ef1e-teDl2enihBh5sV3gzDvIeaNxdkw"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 61214,
    "path": "../public/assets/console-DXHDtFt3.jpeg"
  },
  "/assets/awd-ultimate-interior-07-DL_OCv6l.webp": {
    "type": "image/webp",
    "etag": '"29c014-+jq9OVs72UEHQG6rwhO6K13jUFM"',
    "mtime": "2026-09-20T03:06:22.430Z",
    "size": 2736148,
    "path": "../public/assets/awd-ultimate-interior-07-DL_OCv6l.webp"
  },
  "/assets/awd-ultimate-interior-02-rkCGoR0y.webp": {
    "type": "image/webp",
    "etag": '"2a6b3a-0i+7z27nv0YLwzF4oUz1VqN39Ts"',
    "mtime": "2026-09-20T03:06:22.430Z",
    "size": 2779962,
    "path": "../public/assets/awd-ultimate-interior-02-rkCGoR0y.webp"
  },
  "/assets/ContactBranchMap-CGoz3Q9q.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"3af4-DwNuVYap9sNCFe2ywhL3F4eGYuU"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 15092,
    "path": "../public/assets/ContactBranchMap-CGoz3Q9q.css"
  },
  "/assets/ContactBranchMap-BKcBDVEK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"25e29-iQ9q5htU//nR19cJpDBD6Cuhy6w"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 155177,
    "path": "../public/assets/ContactBranchMap-BKcBDVEK.js"
  },
  "/assets/crystalLed-CR650-_4.webp": {
    "type": "image/webp",
    "etag": '"e7b6-yJyBNqQS8LghiSpsi6omliYRld0"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 59318,
    "path": "../public/assets/crystalLed-CR650-_4.webp"
  },
  "/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2": {
    "type": "font/woff2",
    "etag": '"72a8-l+jyh+1AMt+ftV3y63GUPdDnjEc"',
    "mtime": "2026-09-20T03:06:22.139Z",
    "size": 29352,
    "path": "../public/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2"
  },
  "/assets/dialog-DEQUfovx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89fc-dtiNJWakSfOA0iLEhbkBkycmkDA"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 35324,
    "path": "../public/assets/dialog-DEQUfovx.js"
  },
  "/assets/drive-mode-AeMnS6vQ.webp": {
    "type": "image/webp",
    "etag": '"23fee-C1L+Z/zsCiqzSMzaqTZ/PeObVs4"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 147438,
    "path": "../public/assets/drive-mode-AeMnS6vQ.webp"
  },
  "/assets/dolphin-design-DQ-4FdFR.webp": {
    "type": "image/webp",
    "etag": '"4c224-6oeXVD1MOeQ1AGA3mSa49NCAmXU"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 311844,
    "path": "../public/assets/dolphin-design-DQ-4FdFR.webp"
  },
  "/assets/dolphinDesign-BKa0DB6D.webp": {
    "type": "image/webp",
    "etag": '"2de36-ss+xrumHctJ56+gJKzGBIRQdFQU"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 187958,
    "path": "../public/assets/dolphinDesign-BKa0DB6D.webp"
  },
  "/assets/driveMode-Dv4Ph9Oq.webp": {
    "type": "image/webp",
    "etag": '"29064-obP7GmxedTx4x7V01B5Srp2oii8"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 168036,
    "path": "../public/assets/driveMode-Dv4Ph9Oq.webp"
  },
  "/assets/e-platform-C6BzzTq4.webp": {
    "type": "image/webp",
    "etag": '"3882c-9emSx83weQH+dZ2WGTUJEKziY1s"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 231468,
    "path": "../public/assets/e-platform-C6BzzTq4.webp"
  },
  "/assets/e-platform3-CptEevNM.webp": {
    "type": "image/webp",
    "etag": '"24450-rhwN6uPdlcp5lRzMJpuD/vTPn7M"',
    "mtime": "2026-09-20T03:06:22.150Z",
    "size": 148560,
    "path": "../public/assets/e-platform3-CptEevNM.webp"
  },
  "/assets/extended-exterior-01-J2NeLEei.jpg": {
    "type": "image/jpeg",
    "etag": '"1d6fd-dR/ryoOqzysU1+OT9vGPHDbdCH4"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 120573,
    "path": "../public/assets/extended-exterior-01-J2NeLEei.jpg"
  },
  "/assets/e-platform-Ddtz-RBu.webp": {
    "type": "image/webp",
    "etag": '"5c82a-P1dLaK0gScFImpfo2I37b/EAhFM"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 378922,
    "path": "../public/assets/e-platform-Ddtz-RBu.webp"
  },
  "/assets/extended-exterior-02-BOoqhRdN.jpg": {
    "type": "image/jpeg",
    "etag": '"28599-QxTc4BtkYnTPxFiZismWX1k0ztA"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 165273,
    "path": "../public/assets/extended-exterior-02-BOoqhRdN.jpg"
  },
  "/assets/extended-exterior-03-BWQUBFIH.jpg": {
    "type": "image/jpeg",
    "etag": '"231d7-Og1WcvYos6kQ6sOr9x3eyf1fr7s"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 143831,
    "path": "../public/assets/extended-exterior-03-BWQUBFIH.jpg"
  },
  "/assets/contact-showroom-B0DPllVU.png": {
    "type": "image/png",
    "etag": '"1b8a0e-ToK/3w7T+wlVAqYrLSK+zSc7FIM"',
    "mtime": "2026-09-20T03:06:22.417Z",
    "size": 1804814,
    "path": "../public/assets/contact-showroom-B0DPllVU.png"
  },
  "/assets/extended-exterior-05-P53smQzq.jpg": {
    "type": "image/jpeg",
    "etag": '"25766-SEDM/kuuqfVKdkBmTjhoNQT3voA"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 153446,
    "path": "../public/assets/extended-exterior-05-P53smQzq.jpg"
  },
  "/assets/extended-exterior-04-BLMDM0Z5.jpg": {
    "type": "image/jpeg",
    "etag": '"20748-thVHKGQzIZJAi5M/YpM2svyEkvg"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 132936,
    "path": "../public/assets/extended-exterior-04-BLMDM0Z5.jpg"
  },
  "/assets/extended-exterior-06-Cp0ShzUV.jpg": {
    "type": "image/jpeg",
    "etag": '"1f10a-oAugp1NQIoz98evwNjngMNQC41U"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 127242,
    "path": "../public/assets/extended-exterior-06-Cp0ShzUV.jpg"
  },
  "/assets/exterior-2-rPZOZex9.webp": {
    "type": "image/webp",
    "etag": '"9b92-V1xKyhquyGrTncpHpocd5e6NFsc"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 39826,
    "path": "../public/assets/exterior-2-rPZOZex9.webp"
  },
  "/assets/ePlatform-VvKMSec1.jpeg": {
    "type": "image/jpeg",
    "etag": '"935c0-EKWZyDfQLeMAYPEc1a+3FBc0TLg"',
    "mtime": "2026-09-20T03:06:22.199Z",
    "size": 603584,
    "path": "../public/assets/ePlatform-VvKMSec1.jpeg"
  },
  "/assets/exterior-5-CoBoYqEx.webp": {
    "type": "image/webp",
    "etag": '"9512-2842un6VOWqhIfFHn6s8WacFtjI"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 38162,
    "path": "../public/assets/exterior-5-CoBoYqEx.webp"
  },
  "/assets/exterior-allowWheel-D2RRuIqb.webp": {
    "type": "image/webp",
    "etag": '"54a34-K0pz0HG01YuLu4iSu6A++gjEzAU"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 346676,
    "path": "../public/assets/exterior-allowWheel-D2RRuIqb.webp"
  },
  "/assets/exterior-1-Cz4eQmQx.png": {
    "type": "image/png",
    "etag": '"f2c48-5B/Vaufbh2r8mWVVAFoGjykYOjM"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 994376,
    "path": "../public/assets/exterior-1-Cz4eQmQx.png"
  },
  "/assets/exterior-3-nugb7qIU.png": {
    "type": "image/png",
    "etag": '"d6513-qm6B+NphGhR1Akji00t3IVbo5xc"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 877843,
    "path": "../public/assets/exterior-3-nugb7qIU.png"
  },
  "/assets/exterior-4-CNiot3CL.png": {
    "type": "image/png",
    "etag": '"fe9e9-cmFH1EFUFSutSYNrAcGr7b8KkuU"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 1042921,
    "path": "../public/assets/exterior-4-CNiot3CL.png"
  },
  "/assets/exterior-alloyWheels-CVvJnGwL.webp": {
    "type": "image/webp",
    "etag": '"1383a-8yS9FEVOZqddaaHdgOIMA83X4hg"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 79930,
    "path": "../public/assets/exterior-alloyWheels-CVvJnGwL.webp"
  },
  "/assets/exterior-6-3PMFLVwp.png": {
    "type": "image/png",
    "etag": '"dd616-nT4BOwM2/T/axz3Syrq36sxY84U"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 906774,
    "path": "../public/assets/exterior-6-3PMFLVwp.png"
  },
  "/assets/exterior-bodyDesign-BlHQumVj.webp": {
    "type": "image/webp",
    "etag": '"cc04-IKRJN0qJ70t2fImYt6ZYOS7IBGE"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 52228,
    "path": "../public/assets/exterior-bodyDesign-BlHQumVj.webp"
  },
  "/assets/exterior-charging-D4F-FxtD.webp": {
    "type": "image/webp",
    "etag": '"44498-EnkGoa9ZstpEFMExEB3jY7a1eLU"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 279704,
    "path": "../public/assets/exterior-charging-D4F-FxtD.webp"
  },
  "/assets/exterior-digitalKey-Ijdje1-D.webp": {
    "type": "image/webp",
    "etag": '"17aa0-EiJFv/8o9z1Laml4ooVMNCvWVoE"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 96928,
    "path": "../public/assets/exterior-digitalKey-Ijdje1-D.webp"
  },
  "/assets/exterior-digitalKey-CRklPh8m.webp": {
    "type": "image/webp",
    "etag": '"1a3fa-GhRy/+nV6li7Aeu8TimJj8us94U"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 107514,
    "path": "../public/assets/exterior-digitalKey-CRklPh8m.webp"
  },
  "/assets/exterior-headLight-G16PRvG4.webp": {
    "type": "image/webp",
    "etag": '"e6e4-R5hs+XgUsE0UiTE1A7XGZbkdfMQ"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 59108,
    "path": "../public/assets/exterior-headLight-G16PRvG4.webp"
  },
  "/assets/exterior-dragonFace-YSeU5Lch.webp": {
    "type": "image/webp",
    "etag": '"28e94-pKgHV/w5GgIuhiTYiQl8LBhL8CU"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 167572,
    "path": "../public/assets/exterior-dragonFace-YSeU5Lch.webp"
  },
  "/assets/exterior-headLight-vuYZeq10.webp": {
    "type": "image/webp",
    "etag": '"9bc6-uxmt6CB2pj+JusOgYviYbkKaG0E"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 39878,
    "path": "../public/assets/exterior-headLight-vuYZeq10.webp"
  },
  "/assets/exterior-img-01-C8NubC8n.webp": {
    "type": "image/webp",
    "etag": '"c724-4Db7zm0ta3HSiUN9eHblBWzGie8"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 50980,
    "path": "../public/assets/exterior-img-01-C8NubC8n.webp"
  },
  "/assets/exterior-img-01-Bqjm76VK.webp": {
    "type": "image/webp",
    "etag": '"2c42e-j7NW4Gap3cOcNenrdKLt2CYkYP8"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 181294,
    "path": "../public/assets/exterior-img-01-Bqjm76VK.webp"
  },
  "/assets/exterior-img-01-CJkZoyZ0.webp": {
    "type": "image/webp",
    "etag": '"e268-HLZqaUlhgqNUQipn8sXqx1hOG+Q"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 57960,
    "path": "../public/assets/exterior-img-01-CJkZoyZ0.webp"
  },
  "/assets/exterior-img-02-Bgwv0cJl.webp": {
    "type": "image/webp",
    "etag": '"1191e-huzSxmQm90PGKRsV02npZatYukQ"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 71966,
    "path": "../public/assets/exterior-img-02-Bgwv0cJl.webp"
  },
  "/assets/exterior-img-02-BT_wMaS4.webp": {
    "type": "image/webp",
    "etag": '"46142-pBupG3sMjvN00utO7YEJ8F4yNC4"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 287042,
    "path": "../public/assets/exterior-img-02-BT_wMaS4.webp"
  },
  "/assets/exterior-img-02-D9IOdWBa.webp": {
    "type": "image/webp",
    "etag": '"b964-E0b+ia2sZw0EJoHUu/jALo/woRc"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 47460,
    "path": "../public/assets/exterior-img-02-D9IOdWBa.webp"
  },
  "/assets/exterior-img-03-2VFwPOxx.webp": {
    "type": "image/webp",
    "etag": '"16ec0-GsJPvM1qYZAD4vzp4dmBX6JDbtI"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 93888,
    "path": "../public/assets/exterior-img-03-2VFwPOxx.webp"
  },
  "/assets/exterior-img-03-C4Lsk0lZ.webp": {
    "type": "image/webp",
    "etag": '"c468-qeF9eiQqpWh9QaZfLElTqCFKpg8"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 50280,
    "path": "../public/assets/exterior-img-03-C4Lsk0lZ.webp"
  },
  "/assets/exterior-img-03-DW7jeZqd.webp": {
    "type": "image/webp",
    "etag": '"cdfa-UTdmtQxhjkAAeh7PyZuB3taX+zw"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 52730,
    "path": "../public/assets/exterior-img-03-DW7jeZqd.webp"
  },
  "/assets/exterior-img-04-Ceopa2-W.webp": {
    "type": "image/webp",
    "etag": '"1a1c0-WZ3PwXyTs/3rhkM17VMO+QRh8dU"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 106944,
    "path": "../public/assets/exterior-img-04-Ceopa2-W.webp"
  },
  "/assets/exterior-img-04-DklYkgsa.webp": {
    "type": "image/webp",
    "etag": '"1185e-E8ura71z0svF4O+YACwvCsMIs7g"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 71774,
    "path": "../public/assets/exterior-img-04-DklYkgsa.webp"
  },
  "/assets/exterior-img-04-VxPN48nx.webp": {
    "type": "image/webp",
    "etag": '"29e2a-7dp8lwcnDAlipMrhmTSxkFcwj8c"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 171562,
    "path": "../public/assets/exterior-img-04-VxPN48nx.webp"
  },
  "/assets/exterior-img-05-BaSLIQVc.webp": {
    "type": "image/webp",
    "etag": '"20b8e-tS1luGb1hSbp3GYPE74zDIXLrOs"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 134030,
    "path": "../public/assets/exterior-img-05-BaSLIQVc.webp"
  },
  "/assets/exterior-img-05-BRxMQI1K.webp": {
    "type": "image/webp",
    "etag": '"193c6-OdzlJksP1rn3TEVh8m+ZEP4Brd8"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 103366,
    "path": "../public/assets/exterior-img-05-BRxMQI1K.webp"
  },
  "/assets/exterior-img-05-DlMlRXol.webp": {
    "type": "image/webp",
    "etag": '"1375a-nPWUV7Z58FSkhVvWpTL8aXhxgVI"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 79706,
    "path": "../public/assets/exterior-img-05-DlMlRXol.webp"
  },
  "/assets/exterior-img-06-C6_LZjQe.webp": {
    "type": "image/webp",
    "etag": '"53370-4Zzaw/GlhgRnhJTnW+W1CB74jY8"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 340848,
    "path": "../public/assets/exterior-img-06-C6_LZjQe.webp"
  },
  "/assets/exterior-img-06-C7pNYXBk.webp": {
    "type": "image/webp",
    "etag": '"1dd3a-zffDOeYVaFCtM8S4TbzAK9z9DcE"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 122170,
    "path": "../public/assets/exterior-img-06-C7pNYXBk.webp"
  },
  "/assets/exterior-tailLight-C830XdEZ.webp": {
    "type": "image/webp",
    "etag": '"f608-y1pMA3No7e6cltOYIpqtKvqJ2Fo"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 62984,
    "path": "../public/assets/exterior-tailLight-C830XdEZ.webp"
  },
  "/assets/exterior-spoiler-CcIhQAC4.webp": {
    "type": "image/webp",
    "etag": '"2be64-BDGF5XbN5vizag9tQECjjxIFqdc"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 179812,
    "path": "../public/assets/exterior-spoiler-CcIhQAC4.webp"
  },
  "/assets/exterior-VtoL-8S-QZPFe.webp": {
    "type": "image/webp",
    "etag": '"29acc-+pozwOzDCECn0qudH3H4jNr+4to"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 170700,
    "path": "../public/assets/exterior-VtoL-8S-QZPFe.webp"
  },
  "/assets/FAQ-Bmf-ERee.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"668-RWrhFVxb2EB5IMLmL42hmgStw+4"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 1640,
    "path": "../public/assets/FAQ-Bmf-ERee.js"
  },
  "/assets/frontGrille-BoezNJTo.jpeg": {
    "type": "image/jpeg",
    "etag": '"d228-vBdUcq7LFqrI0bdufdY5ZmpBUig"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 53800,
    "path": "../public/assets/frontGrille-BoezNJTo.jpeg"
  },
  "/assets/gift-BIPmdnpR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-XMJlUMqADlkXRL3sFyqU2WXWCec"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 350,
    "path": "../public/assets/gift-BIPmdnpR.js"
  },
  "/assets/front-grille-CNZrCNHC.webp": {
    "type": "image/webp",
    "etag": '"20b7c-rG8E4CiOw0yNw3vKayqRy6jKtVk"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 134012,
    "path": "../public/assets/front-grille-CNZrCNHC.webp"
  },
  "/assets/glass-roof-DWkCiaI5.webp": {
    "type": "image/webp",
    "etag": '"19ca4-oCr3LGn/dZdrEi+77s/4F3EmMBo"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 105636,
    "path": "../public/assets/glass-roof-DWkCiaI5.webp"
  },
  "/assets/finger-touched-electronic-shifter-CMh0Hsen.webp": {
    "type": "image/webp",
    "etag": '"5d788-ZHvM3wkemhGxlMAFKJha+I1/QNI"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 382856,
    "path": "../public/assets/finger-touched-electronic-shifter-CMh0Hsen.webp"
  },
  "/assets/glassRoof-B_xvyvm_.webp": {
    "type": "image/webp",
    "etag": '"1a9fe-2NbYyjrklnwuzn3n6W+wiTcseQA"',
    "mtime": "2026-09-20T03:06:22.150Z",
    "size": 109054,
    "path": "../public/assets/glassRoof-B_xvyvm_.webp"
  },
  "/assets/index-Cvd0DQqV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"155c-YTsq3hTwoPYe+zShs1yySo1rt7g"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 5468,
    "path": "../public/assets/index-Cvd0DQqV.js"
  },
  "/assets/index-DsBXYesK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71339-CNfifZlhJOhBGVD7HPRnWAXbVxg"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 463673,
    "path": "../public/assets/index-DsBXYesK.js"
  },
  "/assets/index-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 41,
    "path": "../public/assets/index-DtqBFgK5.js"
  },
  "/assets/index-hfkQcAHT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c6c-o5OTbYJYl8JnMH6cZO0DsWnmWHk"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 35948,
    "path": "../public/assets/index-hfkQcAHT.js"
  },
  "/assets/index-rrnUF981.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 41,
    "path": "../public/assets/index-rrnUF981.js"
  },
  "/assets/InstallmentCalculator-CAErLNM0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d4c-0EX2JJSRWJSzOeEprhFe2Fm7SvA"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 3404,
    "path": "../public/assets/InstallmentCalculator-CAErLNM0.js"
  },
  "/assets/infotainment-HZ6eJSVS.webp": {
    "type": "image/webp",
    "etag": '"2f328-H1wu9AKR1uYJskOcKKNZxgwmZFI"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 193320,
    "path": "../public/assets/infotainment-HZ6eJSVS.webp"
  },
  "/assets/interior-1-CcZtEE7-.webp": {
    "type": "image/webp",
    "etag": '"158ce-FYvJrsEIvoIyk283MKjApn+xZZA"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 88270,
    "path": "../public/assets/interior-1-CcZtEE7-.webp"
  },
  "/assets/instrumentDisplay-gM1ZC40e.jpeg": {
    "type": "image/jpeg",
    "etag": '"c3768-1Ah92C+YDmYpt6+btyPi9nRzwHs"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 800616,
    "path": "../public/assets/instrumentDisplay-gM1ZC40e.jpeg"
  },
  "/assets/interior-consoleDesign-Dm77uHSW.webp": {
    "type": "image/webp",
    "etag": '"61ec8-hJEBoZYJJdwkp3p3R3316vASij8"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 401096,
    "path": "../public/assets/interior-consoleDesign-Dm77uHSW.webp"
  },
  "/assets/interior-2-0WO0HXKo.png": {
    "type": "image/png",
    "etag": '"d5c58-vzAe6UlpGMDT2LZhEswfWhQ61vg"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 875608,
    "path": "../public/assets/interior-2-0WO0HXKo.png"
  },
  "/assets/interior-3-BPFVLoWy.png": {
    "type": "image/png",
    "etag": '"84112-4JTzA408qSmXXL5ae322NqecNMU"',
    "mtime": "2026-09-20T03:06:22.186Z",
    "size": 540946,
    "path": "../public/assets/interior-3-BPFVLoWy.png"
  },
  "/assets/interior-driverSeat-BT9iIiQV.webp": {
    "type": "image/webp",
    "etag": '"573ae-RrI6x0kHMNiIgMmPMbd20d9gNBI"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 357294,
    "path": "../public/assets/interior-driverSeat-BT9iIiQV.webp"
  },
  "/assets/interior-easyControl-CF354hYQ.webp": {
    "type": "image/webp",
    "etag": '"6f134-HBL+f4vZag1yGkHjGVl2mv2hkww"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 454964,
    "path": "../public/assets/interior-easyControl-CF354hYQ.webp"
  },
  "/assets/interior-4-DcWcB92w.png": {
    "type": "image/png",
    "etag": '"8df6d-rgo42kovADFt8B33bbQGAmKuJDQ"',
    "mtime": "2026-09-20T03:06:22.186Z",
    "size": 581485,
    "path": "../public/assets/interior-4-DcWcB92w.png"
  },
  "/assets/interior-6-CHKEjfde.png": {
    "type": "image/png",
    "etag": '"828d2-BsetxdPWDo+6rmB643p/FbleWC0"',
    "mtime": "2026-09-20T03:06:22.186Z",
    "size": 534738,
    "path": "../public/assets/interior-6-CHKEjfde.png"
  },
  "/assets/interior-5-BS9xIxNI.png": {
    "type": "image/png",
    "etag": '"ed827-u95FjYktqpioR4QjnNcIKabQErg"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 972839,
    "path": "../public/assets/interior-5-BS9xIxNI.png"
  },
  "/assets/interior-frontSeats-DP96CfkU.webp": {
    "type": "image/webp",
    "etag": '"25fbc-q7H/jZ4wJbopyxE3aFgLqBjM8Yg"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 155580,
    "path": "../public/assets/interior-frontSeats-DP96CfkU.webp"
  },
  "/assets/interior-img-01-DFQWVfjV.webp": {
    "type": "image/webp",
    "etag": '"1f072-T0ToCgiwTsAeYIvwirLLQmM3m5Y"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 127090,
    "path": "../public/assets/interior-img-01-DFQWVfjV.webp"
  },
  "/assets/interior-img-01-DTJFakyc.webp": {
    "type": "image/webp",
    "etag": '"42b4e-RfMkVZz0Th7IU3NEXyfdfB+clic"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 273230,
    "path": "../public/assets/interior-img-01-DTJFakyc.webp"
  },
  "/assets/interior-img-01-wTgEHgeS.webp": {
    "type": "image/webp",
    "etag": '"59564-JbcUGd7GC1/B4GXJpudCnh1D2PE"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 365924,
    "path": "../public/assets/interior-img-01-wTgEHgeS.webp"
  },
  "/assets/interior-img-02-BPuTpQC2.webp": {
    "type": "image/webp",
    "etag": '"3cc2a-ntxES44QRP8WC31UrR2cV2nenQk"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 248874,
    "path": "../public/assets/interior-img-02-BPuTpQC2.webp"
  },
  "/assets/interior-img-02-DCKUmtcO.webp": {
    "type": "image/webp",
    "etag": '"25d06-h1iJcfEmxb8mhFA6w46GTd/zlqE"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 154886,
    "path": "../public/assets/interior-img-02-DCKUmtcO.webp"
  },
  "/assets/interior-img-03-BKN3FU67.webp": {
    "type": "image/webp",
    "etag": '"1d848-wY0oj29olVHA/PH+j7CE/fOiGRM"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 120904,
    "path": "../public/assets/interior-img-03-BKN3FU67.webp"
  },
  "/assets/interior-img-02-DYhshgDe.webp": {
    "type": "image/webp",
    "etag": '"69eba-nB05iUY2t8oqHuqMErYeHHN2Y0o"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 433850,
    "path": "../public/assets/interior-img-02-DYhshgDe.webp"
  },
  "/assets/interior-img-03-DF1KJexN.webp": {
    "type": "image/webp",
    "etag": '"478f4-a7CvbvAEFm/jRevxmtd2XYBOjaw"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 293108,
    "path": "../public/assets/interior-img-03-DF1KJexN.webp"
  },
  "/assets/interior-img-04-BwDjxOOg.webp": {
    "type": "image/webp",
    "etag": '"3d950-n8rt431O5q3N4q4bI3rWGD1z/HQ"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 252240,
    "path": "../public/assets/interior-img-04-BwDjxOOg.webp"
  },
  "/assets/interior-img-04-COdQyiE1.webp": {
    "type": "image/webp",
    "etag": '"544ce-BBIEHYNTLaRYDZ5Sm5nFndBIKoA"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 345294,
    "path": "../public/assets/interior-img-04-COdQyiE1.webp"
  },
  "/assets/interior-img-05-CPvuYJOQ.webp": {
    "type": "image/webp",
    "etag": '"2c882-oOT9nZgkfCMaUlCJm7TUmM++bYc"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 182402,
    "path": "../public/assets/interior-img-05-CPvuYJOQ.webp"
  },
  "/assets/interior-img-05-G0HkBGlX.webp": {
    "type": "image/webp",
    "etag": '"55cdc-lmAxVxY581VertLbuGB5CKQUuhk"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 351452,
    "path": "../public/assets/interior-img-05-G0HkBGlX.webp"
  },
  "/assets/interior-img-04-DCW2xZfY.webp": {
    "type": "image/webp",
    "etag": '"1cebc-Xtwm93RZKAfU79qG4mCQhZxC8aw"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 118460,
    "path": "../public/assets/interior-img-04-DCW2xZfY.webp"
  },
  "/assets/interior-img-03-C2HC5h-E.webp": {
    "type": "image/webp",
    "etag": '"80ee2-FNX0yz6e20Tq+g0ttv9DQV8OdEo"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 528098,
    "path": "../public/assets/interior-img-03-C2HC5h-E.webp"
  },
  "/assets/interior-img-06-CMtwmc9C.webp": {
    "type": "image/webp",
    "etag": '"4b364-fPKVFvc4S3vV+7cAcDq5CSmm/9s"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 308068,
    "path": "../public/assets/interior-img-06-CMtwmc9C.webp"
  },
  "/assets/interior-lcdDigital-CHdEzFxS.webp": {
    "type": "image/webp",
    "etag": '"2147e-ovBrewH9JHQfXHo4fECqywZc258"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 136318,
    "path": "../public/assets/interior-lcdDigital-CHdEzFxS.webp"
  },
  "/assets/interior-luggageCapacity-BSteJutr.webp": {
    "type": "image/webp",
    "etag": '"563a8-8QSbxiPoc90GJ/mtbhdVpBhUMy8"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 353192,
    "path": "../public/assets/interior-luggageCapacity-BSteJutr.webp"
  },
  "/assets/interior-multimediaScreen-JMFEPMSA.webp": {
    "type": "image/webp",
    "etag": '"164ca-NprDqSLsQuu/rso8/hyk/JoSa/A"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 91338,
    "path": "../public/assets/interior-multimediaScreen-JMFEPMSA.webp"
  },
  "/assets/interior-multimediaScreen-C7F_QdbU.webp": {
    "type": "image/webp",
    "etag": '"4a1fa-S4NO7rbX/DHCXUcRyKAAC7eilhg"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 303610,
    "path": "../public/assets/interior-multimediaScreen-C7F_QdbU.webp"
  },
  "/assets/interior-rearAirComfort-Dm16hhPl.webp": {
    "type": "image/webp",
    "etag": '"a2cc-1tXK7PR09F/MXfJEOld9yxIdtKM"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 41676,
    "path": "../public/assets/interior-rearAirComfort-Dm16hhPl.webp"
  },
  "/assets/interior-passengerSeats-Bp0sEuiY.webp": {
    "type": "image/webp",
    "etag": '"1c23a-osywOUoIcXwR9jSXY4aPpJryAP0"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 115258,
    "path": "../public/assets/interior-passengerSeats-Bp0sEuiY.webp"
  },
  "/assets/interior-rearPassengerSpace-CXlgJwO2.webp": {
    "type": "image/webp",
    "etag": '"5d4e0-QI+21kHOMPzLYuieKUMcJxUghig"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 382176,
    "path": "../public/assets/interior-rearPassengerSpace-CXlgJwO2.webp"
  },
  "/assets/interior-rearSeats-DtkMxPoO.webp": {
    "type": "image/webp",
    "etag": '"27c32-oxXO/hefm0f/C8jI8D4EW92r4dY"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 162866,
    "path": "../public/assets/interior-rearSeats-DtkMxPoO.webp"
  },
  "/assets/interior-steeringAdjustment-Q-pDmF2A.webp": {
    "type": "image/webp",
    "etag": '"44400-Th9yZLmxJ6J9oWcQDo3AA+WA/3Y"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 279552,
    "path": "../public/assets/interior-steeringAdjustment-Q-pDmF2A.webp"
  },
  "/assets/interior-wirelessCharger-uzT4_A7b.webp": {
    "type": "image/webp",
    "etag": '"58910-Uv7HQAthlXnSfqyo3HnuvNES0Zo"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 362768,
    "path": "../public/assets/interior-wirelessCharger-uzT4_A7b.webp"
  },
  "/assets/led-tail-light-D7Xvm_sf.webp": {
    "type": "image/webp",
    "etag": '"12744-CTcb3v6Ad2robKH9TCiM6K01prA"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 75588,
    "path": "../public/assets/led-tail-light-D7Xvm_sf.webp"
  },
  "/assets/ledFront-Bz-uPIC0.jpeg": {
    "type": "image/jpeg",
    "etag": '"dec2-N9Q3jT6h/bP1WLjHYVUE8Gdsz70"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 57026,
    "path": "../public/assets/ledFront-Bz-uPIC0.jpeg"
  },
  "/assets/led-headlights-PW11pwDa.webp": {
    "type": "image/webp",
    "etag": '"38782-K/STPeXRLqGtJ4tVu5MiK/4+xYA"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 231298,
    "path": "../public/assets/led-headlights-PW11pwDa.webp"
  },
  "/assets/logo-byd-black-CUmeFk7q.png": {
    "type": "image/png",
    "etag": '"1ebd-Mgn9PRx5WUj+EzQ8pB5iSIdx9OA"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 7869,
    "path": "../public/assets/logo-byd-black-CUmeFk7q.png"
  },
  "/assets/ledTailLight-D9ZMGgAS.webp": {
    "type": "image/webp",
    "etag": '"ab4c-4nxj8qCjNOSL7XkpbLx6H7cVUas"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 43852,
    "path": "../public/assets/ledTailLight-D9ZMGgAS.webp"
  },
  "/assets/ledBack-BqXkCPWS.jpeg": {
    "type": "image/jpeg",
    "etag": '"b797-qEgjJrM3/8T4NSo+XrqPQTLbtII"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 46999,
    "path": "../public/assets/ledBack-BqXkCPWS.jpeg"
  },
  "/assets/logo-byd-white-BnNf_KpA.png": {
    "type": "image/png",
    "etag": '"1641-F3LimYp2ouul1Rr7X8eNYcZfH3k"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 5697,
    "path": "../public/assets/logo-byd-white-BnNf_KpA.png"
  },
  "/assets/logo_jinlong-B8Tv5iRB.png": {
    "type": "image/png",
    "etag": '"4127-FcT4EpoPfkPkiVz55abU28jZ8S4"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 16679,
    "path": "../public/assets/logo_jinlong-B8Tv5iRB.png"
  },
  "/assets/map-pin-B_tABQPM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-270nTjaq1o5z6MbS0QGkuWCjHWw"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 255,
    "path": "../public/assets/map-pin-B_tABQPM.js"
  },
  "/assets/marker-google-map-eF0W7zp5.png": {
    "type": "image/png",
    "etag": '"7789-8kZMOkr4jvK0UnYTUFWahJHeYJc"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 30601,
    "path": "../public/assets/marker-google-map-eF0W7zp5.png"
  },
  "/assets/minus-BuzZDpH9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d2-+f2pnvn6CPp0zwz/FzQO9VJZgKs"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 466,
    "path": "../public/assets/minus-BuzZDpH9.js"
  },
  "/assets/m6-crystal-white-C50DqGgO.png": {
    "type": "image/png",
    "etag": '"d0a13-LhNtYAPmkvzl/5OKpDHdJXw8y9U"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 854547,
    "path": "../public/assets/m6-crystal-white-C50DqGgO.png"
  },
  "/assets/m6-harbour-grey-BNQEPWiM.png": {
    "type": "image/png",
    "etag": '"cac08-TVW62XoQ633R3v2vjWRzaFnQ2Rw"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 830472,
    "path": "../public/assets/m6-harbour-grey-BNQEPWiM.png"
  },
  "/assets/m6-quartz-blue-DLb-nQ18.png": {
    "type": "image/png",
    "etag": '"dc35e-MQRlkpBOUHmF1VPg5tajr+Jvvs4"',
    "mtime": "2026-09-20T03:06:22.201Z",
    "size": 901982,
    "path": "../public/assets/m6-quartz-blue-DLb-nQ18.png"
  },
  "/assets/m6-quantum-black-bLZC1Vsz.png": {
    "type": "image/png",
    "etag": '"d21e4-HpidIJxj0kpgJdaZhvU0JdztPPo"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 860644,
    "path": "../public/assets/m6-quantum-black-bLZC1Vsz.png"
  },
  "/assets/model-2RbGPzJz.webp": {
    "type": "image/webp",
    "etag": '"13c0a-pCdpKijpo/t7eYfIUttCSv/zSS8"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 80906,
    "path": "../public/assets/model-2RbGPzJz.webp"
  },
  "/assets/model-BkPZronI.webp": {
    "type": "image/webp",
    "etag": '"def2-E2yObNug2+smfesj0Zbhb5D6yTU"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 57074,
    "path": "../public/assets/model-BkPZronI.webp"
  },
  "/assets/model-DPxt2v-5.webp": {
    "type": "image/webp",
    "etag": '"ce94-IejurDz06MjPl33tNt/MzCtNLpo"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 52884,
    "path": "../public/assets/model-DPxt2v-5.webp"
  },
  "/assets/model-DmqurozH.webp": {
    "type": "image/webp",
    "etag": '"1237a-Qsg9XMPJprD582sLdTGSIMZPLjQ"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 74618,
    "path": "../public/assets/model-DmqurozH.webp"
  },
  "/assets/model-Do6RdNLA.webp": {
    "type": "image/webp",
    "etag": '"10438-QEE++DeMUVDuH07zneOekxLfZRQ"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 66616,
    "path": "../public/assets/model-Do6RdNLA.webp"
  },
  "/assets/model-DRwQ7dEf.webp": {
    "type": "image/webp",
    "etag": '"25210-T3C2Mfo3595cIe3RdvqvPwPXcIU"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 152080,
    "path": "../public/assets/model-DRwQ7dEf.webp"
  },
  "/assets/model-DVVeWV9a.webp": {
    "type": "image/webp",
    "etag": '"1b5f0-jK7LZNh7YV76ihBuvzudlRbcqp4"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 112112,
    "path": "../public/assets/model-DVVeWV9a.webp"
  },
  "/assets/model-DzLZmS7T.webp": {
    "type": "image/webp",
    "etag": '"5928c-RrlePD2SJru6rYGlIPn3uiHpt9I"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 365196,
    "path": "../public/assets/model-DzLZmS7T.webp"
  },
  "/assets/model-D_1gWX9C.webp": {
    "type": "image/webp",
    "etag": '"2f6ba-eDWN6+8RuQsDaPmjHqcsgxpd9/4"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 194234,
    "path": "../public/assets/model-D_1gWX9C.webp"
  },
  "/assets/model-m08bbN43.webp": {
    "type": "image/webp",
    "etag": '"1ffac-jD5AKv7Ua9MKzD6lAGJ/iYSt2Fw"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 130988,
    "path": "../public/assets/model-m08bbN43.webp"
  },
  "/assets/model-mobile-DqNXWSyQ.webp": {
    "type": "image/webp",
    "etag": '"ba7c-27rJfrpRi8UGqi9R/2xHjHZrVJ8"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 47740,
    "path": "../public/assets/model-mobile-DqNXWSyQ.webp"
  },
  "/assets/model-mobile-CqVawhIB.webp": {
    "type": "image/webp",
    "etag": '"109b8-clcEEGm5peoQutqLBbJhumOSuec"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 68024,
    "path": "../public/assets/model-mobile-CqVawhIB.webp"
  },
  "/assets/model-mobile-DvYNKJKf.webp": {
    "type": "image/webp",
    "etag": '"de4a-bHRzm+uC65BBpyreuvxJsfsFTW0"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 56906,
    "path": "../public/assets/model-mobile-DvYNKJKf.webp"
  },
  "/assets/model-mobile-Db4O9-du.webp": {
    "type": "image/webp",
    "etag": '"3d03a-+Ut4hz4ndKGidbBdkuQFyJJIFnk"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 249914,
    "path": "../public/assets/model-mobile-Db4O9-du.webp"
  },
  "/assets/model-mobile-DyuEQHjt.webp": {
    "type": "image/webp",
    "etag": '"1a8e6-iUQ9fgn0zpKRgKpAgqC8ZirZUqo"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 108774,
    "path": "../public/assets/model-mobile-DyuEQHjt.webp"
  },
  "/assets/model-mobile-DyVhe1RH.webp": {
    "type": "image/webp",
    "etag": '"24380-cmi/3k8inEg41JiUdOOHfRw1zH4"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 148352,
    "path": "../public/assets/model-mobile-DyVhe1RH.webp"
  },
  "/assets/model-mobile-DZr7by6S.webp": {
    "type": "image/webp",
    "etag": '"e72c-/Q+xvGC4kmJoYeEM7NIA9vAHWZ8"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 59180,
    "path": "../public/assets/model-mobile-DZr7by6S.webp"
  },
  "/assets/model-mobile-o3Hdymir.webp": {
    "type": "image/webp",
    "etag": '"9310-34ePpE5vJp1IyjjzxjcebnUeC4w"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 37648,
    "path": "../public/assets/model-mobile-o3Hdymir.webp"
  },
  "/assets/model-mobile-rCR27Bxx.webp": {
    "type": "image/webp",
    "etag": '"1c3a4-GCXVkLlT2f8HOQo3+4n7x+OmnUc"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 115620,
    "path": "../public/assets/model-mobile-rCR27Bxx.webp"
  },
  "/assets/model-mobile-UQcU9iiq.webp": {
    "type": "image/webp",
    "etag": '"51626-hfpz9IlGfH83bGzIjm450qBrl94"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 333350,
    "path": "../public/assets/model-mobile-UQcU9iiq.webp"
  },
  "/assets/model-OnDecc3W.webp": {
    "type": "image/webp",
    "etag": '"26152-h/jW87Hmlic8b0V+Zzk/kdE2nCI"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 155986,
    "path": "../public/assets/model-OnDecc3W.webp"
  },
  "/assets/model-mobile-z-DnI3Xb.webp": {
    "type": "image/webp",
    "etag": '"386f4-IYRcL3OOwgHR+To8gpEdpQLc9Bw"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 231156,
    "path": "../public/assets/model-mobile-z-DnI3Xb.webp"
  },
  "/assets/models-carEf2tG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15c3-cOln4aAA0k2CXwGqXXKMFNA4Jvo"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 5571,
    "path": "../public/assets/models-carEf2tG.js"
  },
  "/assets/ModelsScroller-D5FITHoa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c2e-NBrtn2fb4O5tdoPDSfrM/aC8B3c"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 7214,
    "path": "../public/assets/ModelsScroller-D5FITHoa.js"
  },
  "/assets/monitor-dt1aYYqw.jpeg": {
    "type": "image/jpeg",
    "etag": '"e5bb-gezssdmuF9443+Bor+RQfPmMcmc"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 58811,
    "path": "../public/assets/monitor-dt1aYYqw.jpeg"
  },
  "/assets/multifunction-steering-wheel--CsZKIFF.webp": {
    "type": "image/webp",
    "etag": '"421b6-6WHPm0/5cgocpfftlSLxQ/e9/Ig"',
    "mtime": "2026-09-20T03:06:22.153Z",
    "size": 270774,
    "path": "../public/assets/multifunction-steering-wheel--CsZKIFF.webp"
  },
  "/assets/multimediaTouchScreen-C6FX2zZe.webp": {
    "type": "image/webp",
    "etag": '"66658-W6O/p2ryY9vAJsikENSCrTs+sGg"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 419416,
    "path": "../public/assets/multimediaTouchScreen-C6FX2zZe.webp"
  },
  "/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg": {
    "type": "image/jpeg",
    "etag": '"633b3-0uJijf8Qv5bbxS/8G5HtIeVQf9U"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 406451,
    "path": "../public/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg"
  },
  "/assets/New-BYD-ATTO-3-Black-hND6Lj9l.webp": {
    "type": "image/webp",
    "etag": '"24370-UycAsyaLwPwfPbW32Xgo2LReKs8"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 148336,
    "path": "../public/assets/New-BYD-ATTO-3-Black-hND6Lj9l.webp"
  },
  "/assets/new-byd-atto3-frost-white-BcF9jf1u.webp": {
    "type": "image/webp",
    "etag": '"22e8e-u0PRkIVMYDvjDh+6gVAgiLY+pv4"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 142990,
    "path": "../public/assets/new-byd-atto3-frost-white-BcF9jf1u.webp"
  },
  "/assets/new-byd-atto3-grey-CqdX1a3C.webp": {
    "type": "image/webp",
    "etag": '"27f88-q5/63027UXHt/Uti4IpRxFpdrXc"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 163720,
    "path": "../public/assets/new-byd-atto3-grey-CqdX1a3C.webp"
  },
  "/assets/newcar-DhURfDfX.webp": {
    "type": "image/webp",
    "etag": '"1c128-KaExTawkBlVPKUUad+o8bwiObwo"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 114984,
    "path": "../public/assets/newcar-DhURfDfX.webp"
  },
  "/assets/overview-banner-d-CWBK_RJW.jpeg": {
    "type": "image/jpeg",
    "etag": '"60c0e-hx4uN85Kvd0lS/R0DLBDwEWiYUs"',
    "mtime": "2026-09-20T03:06:22.156Z",
    "size": 396302,
    "path": "../public/assets/overview-banner-d-CWBK_RJW.jpeg"
  },
  "/assets/nfc-7R0iKItD.webp": {
    "type": "image/webp",
    "etag": '"17bc4-771j2G+1p8WtSDWLr5m+yrFZtW8"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 97220,
    "path": "../public/assets/nfc-7R0iKItD.webp"
  },
  "/assets/new-atto3-description-3-Dpiba0tl.png": {
    "type": "image/png",
    "etag": '"95fbf-9DpwkLphGDEe4jIqnXTTSD7FiDE"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 614335,
    "path": "../public/assets/new-atto3-description-3-Dpiba0tl.png"
  },
  "/assets/overview-banner-desktop-6elnSXqY.jpeg": {
    "type": "image/jpeg",
    "etag": '"79a83-CQmPEdSKVCqYdcu+as1m/46oPms"',
    "mtime": "2026-09-20T03:06:22.096Z",
    "size": 498307,
    "path": "../public/assets/overview-banner-desktop-6elnSXqY.jpeg"
  },
  "/assets/new-dolphin-frost-white-hJzZkvcX.png": {
    "type": "image/png",
    "etag": '"87807-Msztfs+rg2igYC94+GE9TLeqwMM"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 555015,
    "path": "../public/assets/new-dolphin-frost-white-hJzZkvcX.png"
  },
  "/assets/new-dolphin-graphite-grey-SqRpyQvc.png": {
    "type": "image/png",
    "etag": '"9d990-CrlSRd8F7wI18ijHAyJV4GrIQ74"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 645520,
    "path": "../public/assets/new-dolphin-graphite-grey-SqRpyQvc.png"
  },
  "/assets/newmotor-DDkMhaO4.webp": {
    "type": "image/webp",
    "etag": '"b54f8-QfVXy81aAB8dDYkZh+U6beEiw9c"',
    "mtime": "2026-09-20T03:06:22.190Z",
    "size": 742648,
    "path": "../public/assets/newmotor-DDkMhaO4.webp"
  },
  "/assets/overview-banner-d-DbTqjYBW.jpeg": {
    "type": "image/jpeg",
    "etag": '"bfab7-I5IVSr9mP6X+C9lGYjxAZLXgCk0"',
    "mtime": "2026-09-20T03:06:22.161Z",
    "size": 785079,
    "path": "../public/assets/overview-banner-d-DbTqjYBW.jpeg"
  },
  "/assets/overview-img-01-DukI9NRZ.webp": {
    "type": "image/webp",
    "etag": '"495bc-00VQSMk74DiCBumzpqwskkrhjGU"',
    "mtime": "2026-09-20T03:06:22.145Z",
    "size": 300476,
    "path": "../public/assets/overview-img-01-DukI9NRZ.webp"
  },
  "/assets/overview-img-02-CJoO-7lo.png": {
    "type": "image/png",
    "etag": '"5e2ce-+CradOIfIFvECNBpzvXitVKAOS0"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 385742,
    "path": "../public/assets/overview-img-02-CJoO-7lo.png"
  },
  "/assets/overview-img-03-BD0m-5yl.webp": {
    "type": "image/webp",
    "etag": '"c48a-DuhFnfrRQ5skzuTWTABT+LwGsXQ"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 50314,
    "path": "../public/assets/overview-img-03-BD0m-5yl.webp"
  },
  "/assets/overview-img-04-83byOKaC.webp": {
    "type": "image/webp",
    "etag": '"12650-gN7Hx82NKXaQ39xELgKR5vx5xrc"',
    "mtime": "2026-09-20T03:06:22.154Z",
    "size": 75344,
    "path": "../public/assets/overview-img-04-83byOKaC.webp"
  },
  "/assets/overview-img-04-C53a9f28.jpeg": {
    "type": "image/jpeg",
    "etag": '"23ddd-FeSceTO+TODBVONmrF93EkNrUkQ"',
    "mtime": "2026-09-20T03:06:22.144Z",
    "size": 146909,
    "path": "../public/assets/overview-img-04-C53a9f28.jpeg"
  },
  "/assets/play-DW7QY_5L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bf-ym1B5eQVyHcR9ZF6qFzCklLtabo"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 191,
    "path": "../public/assets/play-DW7QY_5L.js"
  },
  "/assets/premiumDesign-BbKiyX__.jpeg": {
    "type": "image/jpeg",
    "etag": '"accb-aL+LuzOPO3V66dq5efUftwbRz9U"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 44235,
    "path": "../public/assets/premiumDesign-BbKiyX__.jpeg"
  },
  "/assets/new-atto3-space-grey-B8s-77PI.png": {
    "type": "image/png",
    "etag": '"1fecbc-LagaJzE3X8oWVYA4lcU5QP9kPyg"',
    "mtime": "2026-09-20T03:06:22.419Z",
    "size": 2092220,
    "path": "../public/assets/new-atto3-space-grey-B8s-77PI.png"
  },
  "/assets/pulse-purple-CCiPrs1-.png": {
    "type": "image/png",
    "etag": '"4980a-8uEPl5Ql0tN0WNT7fYmmRAjjVaA"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 301066,
    "path": "../public/assets/pulse-purple-CCiPrs1-.png"
  },
  "/assets/overview-banner-desktop-QklIY6bF.jpeg": {
    "type": "image/jpeg",
    "etag": '"13a45f-chlovAzOQZHytHBN48SFRPYWha8"',
    "mtime": "2026-09-20T03:06:22.413Z",
    "size": 1287263,
    "path": "../public/assets/overview-banner-desktop-QklIY6bF.jpeg"
  },
  "/assets/ruler-DfW3jRFf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18f-7vR4FhpBvWyDW+3+Fd5GiKzn9MA"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 399,
    "path": "../public/assets/ruler-DfW3jRFf.js"
  },
  "/assets/seal-horizon-white-Dkzsnqe1.png": {
    "type": "image/png",
    "etag": '"321f7-ZHt5ccrzUPKNmRjBsIKf4oDYlto"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 205303,
    "path": "../public/assets/seal-horizon-white-Dkzsnqe1.png"
  },
  "/assets/seal-quantum-black-BK6raq7D.png": {
    "type": "image/png",
    "etag": '"31c5e-kV1abOPCOhehACSgnRApvOv8U+s"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 203870,
    "path": "../public/assets/seal-quantum-black-BK6raq7D.png"
  },
  "/assets/seal-velocity-blue-BQiZBzM9.png": {
    "type": "image/png",
    "etag": '"34284-qE7/GVbGk4w/VwUcS9BFO/I8P9E"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 213636,
    "path": "../public/assets/seal-velocity-blue-BQiZBzM9.png"
  },
  "/assets/quantum-black-G8cGZ2A0.png": {
    "type": "image/png",
    "etag": '"a5671-N1SbcAumzBt5+84rx/dT2qINmZ8"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 677489,
    "path": "../public/assets/quantum-black-G8cGZ2A0.png"
  },
  "/assets/seal6-ash-green-model-DIFXweTc.png": {
    "type": "image/png",
    "etag": '"3e242-iF4SOp1oLzD3uOYyJtX3FzEDsWY"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 254530,
    "path": "../public/assets/seal6-ash-green-model-DIFXweTc.png"
  },
  "/assets/overview-banner-desktop-DViUGHbu.png": {
    "type": "image/png",
    "etag": '"229e98-LcEwLuyPE8k1W+b8/m9CR2e1lHc"',
    "mtime": "2026-09-20T03:06:22.424Z",
    "size": 2268824,
    "path": "../public/assets/overview-banner-desktop-DViUGHbu.png"
  },
  "/assets/seal6-exterior-alloyWheel-BglN0hWZ.webp": {
    "type": "image/webp",
    "etag": '"221e4-e8FxyvM7vL6aOdCDy2+OMOq2VAU"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 139748,
    "path": "../public/assets/seal6-exterior-alloyWheel-BglN0hWZ.webp"
  },
  "/assets/seal5-dm-i-horizon-white-cXJ8YKkz.png": {
    "type": "image/png",
    "etag": '"8a887-b4569roqGzK+7mls2OK/lyuusCk"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 567431,
    "path": "../public/assets/seal5-dm-i-horizon-white-cXJ8YKkz.png"
  },
  "/assets/seal5-dm-i-graphite-grey-D9ta7olx.png": {
    "type": "image/png",
    "etag": '"9a3ca-Tbl2g9peuEkyk1X21UhAyT9eB/A"',
    "mtime": "2026-09-20T03:06:22.196Z",
    "size": 631754,
    "path": "../public/assets/seal5-dm-i-graphite-grey-D9ta7olx.png"
  },
  "/assets/seal5-dm-i-quantum-black-DM2OVear.png": {
    "type": "image/png",
    "etag": '"a827e-ChjJuca6yzXmG+RBoe6xyXjrk8k"',
    "mtime": "2026-09-20T03:06:22.198Z",
    "size": 688766,
    "path": "../public/assets/seal5-dm-i-quantum-black-DM2OVear.png"
  },
  "/assets/seal6-exterior-led-CiTVfhMW.webp": {
    "type": "image/webp",
    "etag": '"163a0-iEJ31A8N+RhLohMiBvqHM5f42uw"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 91040,
    "path": "../public/assets/seal6-exterior-led-CiTVfhMW.webp"
  },
  "/assets/seal6-banner-CEWY6Mfq.jpeg": {
    "type": "image/jpeg",
    "etag": '"ea35d-ybRyguotqKJtX4z5ComlHZInp5U"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 959325,
    "path": "../public/assets/seal6-banner-CEWY6Mfq.jpeg"
  },
  "/assets/seal6-habour-grey-model-Cg1_kOEm.png": {
    "type": "image/png",
    "etag": '"52566-XddiTmIVx0ru/gDF6LnJYcpjJQ8"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 337254,
    "path": "../public/assets/seal6-habour-grey-model-Cg1_kOEm.png"
  },
  "/assets/seal6-quantum-black-model-DdByK7fv.png": {
    "type": "image/png",
    "etag": '"4fdbd-NrHpDFxQs6CBu9X/SRydmYynlQ4"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 327101,
    "path": "../public/assets/seal6-quantum-black-model-DdByK7fv.png"
  },
  "/assets/seal6-white-model-CJZ1Jpy8.png": {
    "type": "image/png",
    "etag": '"50205-+8KHIuJAnq/o0GlJH6DDAL3ow8E"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 328197,
    "path": "../public/assets/seal6-white-model-CJZ1Jpy8.png"
  },
  "/assets/seal6-exterior-digitalKey-oQlsbRJy.png": {
    "type": "image/png",
    "etag": '"e8c90-R4r2Kc5s4Zv2d8OQ6+iq5ltQII4"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 953488,
    "path": "../public/assets/seal6-exterior-digitalKey-oQlsbRJy.png"
  },
  "/assets/seal6-exterior-frontTrunk-CS3y5-9e.png": {
    "type": "image/png",
    "etag": '"b0405-SUvBtfyFn4xH9tUWm2jWZjJIHcI"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 721925,
    "path": "../public/assets/seal6-exterior-frontTrunk-CS3y5-9e.png"
  },
  "/assets/seal6-exterior-vtol-Cz36Dm8d.png": {
    "type": "image/png",
    "etag": '"d228a-wMqbyqijs538vsNhO505zEGfSJg"',
    "mtime": "2026-09-20T03:06:22.199Z",
    "size": 860810,
    "path": "../public/assets/seal6-exterior-vtol-Cz36Dm8d.png"
  },
  "/assets/sealion5dmi-horizon-white-model-C_tWN7AL.png": {
    "type": "image/png",
    "etag": '"3c9d4-OfaS5qqoNXX/YHpTiH0i78gaOPI"',
    "mtime": "2026-09-20T03:06:22.141Z",
    "size": 248276,
    "path": "../public/assets/sealion5dmi-horizon-white-model-C_tWN7AL.png"
  },
  "/assets/sealion-black-mp-hbJUF.png": {
    "type": "image/png",
    "etag": '"ca1f1-fa2/HjF+asMErJBMYukw8M8XNAc"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 827889,
    "path": "../public/assets/sealion-black-mp-hbJUF.png"
  },
  "/assets/sealion5dmi-quantum-black-model-BI2Ptn6V.png": {
    "type": "image/png",
    "etag": '"4dbaa-/hX3qpoDwlbye+Th81FrDVpePy8"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 318378,
    "path": "../public/assets/sealion5dmi-quantum-black-model-BI2Ptn6V.png"
  },
  "/assets/sealion5-description-2-CpIlN3UT.png": {
    "type": "image/png",
    "etag": '"ac552-TUt0CyNM9ewu0Pr3xjPb2g7T1XM"',
    "mtime": "2026-09-20T03:06:22.186Z",
    "size": 705874,
    "path": "../public/assets/sealion5-description-2-CpIlN3UT.png"
  },
  "/assets/sealion-grey-CMo9lIhj.png": {
    "type": "image/png",
    "etag": '"c3cec-rFifdN3T6NOdsjBQV1LmmHPQ/xk"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 802028,
    "path": "../public/assets/sealion-grey-CMo9lIhj.png"
  },
  "/assets/sealion-white-BrS8bGTC.png": {
    "type": "image/png",
    "etag": '"c4902-lvKLId9IAhZMJjukjd1u4MWZtUQ"',
    "mtime": "2026-09-20T03:06:22.188Z",
    "size": 805122,
    "path": "../public/assets/sealion-white-BrS8bGTC.png"
  },
  "/assets/sealion7-black-DIKjA0Lf.webp": {
    "type": "image/webp",
    "etag": '"1fda4-qyOJRbAeBxNa+PmywIPzchwUVsE"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 130468,
    "path": "../public/assets/sealion7-black-DIKjA0Lf.webp"
  },
  "/assets/sealion7-shark-grey-BuxMDNiJ.png": {
    "type": "image/png",
    "etag": '"74790-taPj5Qdzlt58FIpB/kKYxHDGsw4"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 477072,
    "path": "../public/assets/sealion7-shark-grey-BuxMDNiJ.png"
  },
  "/assets/sealion5dmi-space-grey-model-BMON6_4z.png": {
    "type": "image/png",
    "etag": '"f47e1-WVE6AD6Cwmxkvt/IF2nt4k663aQ"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 1001441,
    "path": "../public/assets/sealion5dmi-space-grey-model-BMON6_4z.png"
  },
  "/assets/sealion6-dm-i-white-DhL_c18F.png": {
    "type": "image/png",
    "etag": '"9ae04-3r4gozP6j3TBE8Na9p87OJFKJeI"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 634372,
    "path": "../public/assets/sealion6-dm-i-white-DhL_c18F.png"
  },
  "/assets/seat-DfXeBdfu.jpeg": {
    "type": "image/jpeg",
    "etag": '"10456-4a4fJxbr8fSZ3ZXrsAZqDMkGnYQ"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 66646,
    "path": "../public/assets/seat-DfXeBdfu.jpeg"
  },
  "/assets/sealion5dmi-overview-banner-desktop-CPIB1ewo.jpeg": {
    "type": "image/jpeg",
    "etag": '"101a88-50we+O8CSTtRJ1Xi4ufBLY71Yj4"',
    "mtime": "2026-09-20T03:06:22.405Z",
    "size": 1055368,
    "path": "../public/assets/sealion5dmi-overview-banner-desktop-CPIB1ewo.jpeg"
  },
  "/assets/shield-check-BZaCCokB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-v+E/ltGlYE2Wy21Rrbc7kk7GeDg"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 316,
    "path": "../public/assets/shield-check-BZaCCokB.js"
  },
  "/assets/silver-platform-C-x1Epon.webp": {
    "type": "image/webp",
    "etag": '"dc14-vRidTty5cjpCWEKGzMUzEU/kziA"',
    "mtime": "2026-09-20T03:06:22.150Z",
    "size": 56340,
    "path": "../public/assets/silver-platform-C-x1Epon.webp"
  },
  "/assets/sparkles-Cndaahe3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-/smkmzk47JiVmgeDMIA77vL2W1I"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 495,
    "path": "../public/assets/sparkles-Cndaahe3.js"
  },
  "/assets/solar-red-D1qBAlsf.png": {
    "type": "image/png",
    "etag": '"4dbed-okECw6CpxFV1xVlhRBaoiS91AfU"',
    "mtime": "2026-09-20T03:06:22.155Z",
    "size": 318445,
    "path": "../public/assets/solar-red-D1qBAlsf.png"
  },
  "/assets/sealion7-space-grey-CTKY6lQA.png": {
    "type": "image/png",
    "etag": '"a40b9-LT+pNNdhytTExRVxgOwoQzSaB+8"',
    "mtime": "2026-09-20T03:06:22.201Z",
    "size": 671929,
    "path": "../public/assets/sealion7-space-grey-CTKY6lQA.png"
  },
  "/assets/sealion7-white-bXleeqDO.png": {
    "type": "image/png",
    "etag": '"9e02b-y1GWasb2SzsQeZ5lJQiMiSkeYkM"',
    "mtime": "2026-09-20T03:06:22.169Z",
    "size": 647211,
    "path": "../public/assets/sealion7-white-bXleeqDO.png"
  },
  "/assets/storage-DV0wPeIN.jpeg": {
    "type": "image/jpeg",
    "etag": '"a743-XKrMR+mWic8GjewyFGKYHSp4vUc"',
    "mtime": "2026-09-20T03:06:22.147Z",
    "size": 42819,
    "path": "../public/assets/storage-DV0wPeIN.jpeg"
  },
  "/assets/sun-BtgKlTa2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d9-8Xic/9Ehoy/iTR3xacNfaXeHKQg"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 473,
    "path": "../public/assets/sun-BtgKlTa2.js"
  },
  "/assets/styles-DaArUMiS.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"206af-s02MhPmSVOn3m2LCcf85m/VE6x4"',
    "mtime": "2026-09-20T03:06:22.158Z",
    "size": 132783,
    "path": "../public/assets/styles-DaArUMiS.css"
  },
  "/assets/surge-BE6iafWF.webp": {
    "type": "image/webp",
    "etag": '"f6ae-Bp+7KRyn7CiAezBbKseY2A7Xm+Q"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 63150,
    "path": "../public/assets/surge-BE6iafWF.webp"
  },
  "/assets/surge-BOo3dMJS.webp": {
    "type": "image/webp",
    "etag": '"c018-srNqfuOH9+uWF42vIQz7jmEP3Lo"',
    "mtime": "2026-09-20T03:06:22.150Z",
    "size": 49176,
    "path": "../public/assets/surge-BOo3dMJS.webp"
  },
  "/assets/test-drive-byd-B32rjm-j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1971-JvFxK5vakf2MKTO3PHJb3X3coXA"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 6513,
    "path": "../public/assets/test-drive-byd-B32rjm-j.js"
  },
  "/assets/SpaceGrey-CRoj_Hfu.png": {
    "type": "image/png",
    "etag": '"9ac23-6Qca70MMLelFxOxM91iy1PJkFQY"',
    "mtime": "2026-09-20T03:06:22.187Z",
    "size": 633891,
    "path": "../public/assets/SpaceGrey-CRoj_Hfu.png"
  },
  "/assets/test-drive-hero-Bg57GLht.jpg": {
    "type": "image/jpeg",
    "etag": '"233a5-/M4RgYliTvgrXFG8wNK2l4qm00g"',
    "mtime": "2026-09-20T03:06:22.140Z",
    "size": 144293,
    "path": "../public/assets/test-drive-hero-Bg57GLht.jpg"
  },
  "/assets/two-tone-interior-cabin-BBpVg4sw.webp": {
    "type": "image/webp",
    "etag": '"79018-DjpmbBzRA0C2pGej/NWQys+TbK4"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 495640,
    "path": "../public/assets/two-tone-interior-cabin-BBpVg4sw.webp"
  },
  "/assets/TestDriveForm-CjI7m2vQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ebe9-EyRBYPtwFDnL+bf/1t2B6SOwGMA"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 125929,
    "path": "../public/assets/TestDriveForm-CjI7m2vQ.js"
  },
  "/assets/users-BO7u-eBO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-KHYQunKm0oWuGu6R3+3/4n8qxk0"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 307,
    "path": "../public/assets/users-BO7u-eBO.js"
  },
  "/assets/use-mobile-B15_zZCk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145-la8zSKwvrkGqocFrNOLN9pzzDRQ"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 325,
    "path": "../public/assets/use-mobile-B15_zZCk.js"
  },
  "/assets/v2l-1HNDWJOm.webp": {
    "type": "image/webp",
    "etag": '"4e64a-UOadmByv79/t03uhguSRArTClWc"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 321098,
    "path": "../public/assets/v2l-1HNDWJOm.webp"
  },
  "/assets/v2l-PzmbGVg_.webp": {
    "type": "image/webp",
    "etag": '"34f48-DQ/CdIHAooZ17iM6+Xm+tHuZb+A"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 216904,
    "path": "../public/assets/v2l-PzmbGVg_.webp"
  },
  "/assets/ventilatedFrontSeats-ChJziLku.webp": {
    "type": "image/webp",
    "etag": '"41dc8-wimMwmPLLm7tPpOlEV7bmDLrkls"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 269768,
    "path": "../public/assets/ventilatedFrontSeats-ChJziLku.webp"
  },
  "/assets/weight-BcI_GLJx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"100-vFuJ4KGAUtHqXlh6ZXhBO/xeo38"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 256,
    "path": "../public/assets/weight-BcI_GLJx.js"
  },
  "/assets/wheels-AM5ZSQTH.jpeg": {
    "type": "image/jpeg",
    "etag": '"e031-5y+1wC8T73UpVg9BbSAfu6ZCJrs"',
    "mtime": "2026-09-20T03:06:22.146Z",
    "size": 57393,
    "path": "../public/assets/wheels-AM5ZSQTH.jpeg"
  },
  "/assets/wheels-hAojzZRL.webp": {
    "type": "image/webp",
    "etag": '"1d7ba-xtHM7TU10A6q5xa1igJHlAvr8xQ"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 120762,
    "path": "../public/assets/wheels-hAojzZRL.webp"
  },
  "/assets/wrench-DExCVCS5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12b-krRrYxHvY0sjeRRfOzVDYDCVAUU"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 299,
    "path": "../public/assets/wrench-DExCVCS5.js"
  },
  "/assets/zap-DstLchkT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-PfcoFqPw2qio6IAeDkWt0sZFUE0"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 263,
    "path": "../public/assets/zap-DstLchkT.js"
  },
  "/assets/wirelessCharging-055Noeyw.webp": {
    "type": "image/webp",
    "etag": '"1a530-ZdP47TQ3wfVoN4jTBZueQDLNyss"',
    "mtime": "2026-09-20T03:06:22.151Z",
    "size": 107824,
    "path": "../public/assets/wirelessCharging-055Noeyw.webp"
  },
  "/assets/wireless-charging-BDVUcfNv.webp": {
    "type": "image/webp",
    "etag": '"31d60-2ksQCUae3t7cS9V7HphhJ/JxW3I"',
    "mtime": "2026-09-20T03:06:22.143Z",
    "size": 204128,
    "path": "../public/assets/wireless-charging-BDVUcfNv.webp"
  },
  "/assets/_slug-C2SLphUm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"886-6aS89t8sWO6BKeOQiTuKz12Zwb0"',
    "mtime": "2026-09-20T03:06:22.159Z",
    "size": 2182,
    "path": "../public/assets/_slug-C2SLphUm.js"
  },
  "/assets/_slug-e2FXRpok.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"536-u/Zo/db0sUQFY0FAWSR2Gvxsx+A"',
    "mtime": "2026-09-20T03:06:22.160Z",
    "size": 1334,
    "path": "../public/assets/_slug-e2FXRpok.js"
  },
  "/assets/wireless-charger-CDJtk-VH.webp": {
    "type": "image/webp",
    "etag": '"88726-DKWHiPg5wxcDOH0EFxlsyg+dlqc"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 558886,
    "path": "../public/assets/wireless-charger-CDJtk-VH.webp"
  },
  "/assets/wirelessCharger-Qqch_P6L.jpeg": {
    "type": "image/jpeg",
    "etag": '"d2602-Q2mZhjWJgc/mIbUrnRFTRVjMJCc"',
    "mtime": "2026-09-20T03:06:22.200Z",
    "size": 861698,
    "path": "../public/assets/wirelessCharger-Qqch_P6L.jpeg"
  },
  "/videos/home-teaser-desktop.mp4": {
    "type": "video/mp4",
    "etag": '"476d5e-KQeJSByeTHx7UEQW3P+/Lak/7wI"',
    "mtime": "2026-06-07T01:17:27.610Z",
    "size": 4681054,
    "path": "../public/videos/home-teaser-desktop.mp4"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _FQbLmH = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_lrhfzU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_lrhfzU };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_FQbLmH)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
