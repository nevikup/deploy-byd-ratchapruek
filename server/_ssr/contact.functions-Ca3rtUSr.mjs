import { c as createServerRpc } from "./createServerRpc-DsYY5TFS.mjs";
import { c as createServerFn } from "./server-BdZ_lyIR.mjs";
import { p as pushLineGroupMessage } from "./line.server-CMZPNnzg.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
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
const contactSchema = objectType({
  name: stringType().trim().min(1),
  phone: stringType().trim().min(1),
  email: stringType().trim().email().or(literalType("")),
  message: stringType().trim().optional()
});
function buildDetailRow(label, value) {
  return {
    type: "box",
    layout: "baseline",
    spacing: "sm",
    contents: [{
      type: "text",
      text: label,
      color: "#9CA3AF",
      size: "sm",
      flex: 3
    }, {
      type: "text",
      text: value,
      wrap: true,
      color: "#F9FAFB",
      size: "sm",
      flex: 7
    }]
  };
}
function buildContactFlexMessage(data) {
  return {
    type: "flex",
    altText: `มีข้อความติดต่อใหม่จาก ${data.name}`,
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#b91c1c",
        paddingAll: "20px",
        contents: [{
          type: "text",
          text: "Contact Form",
          color: "#FCA5A5",
          size: "xs",
          weight: "bold"
        }, {
          type: "text",
          text: "มีข้อความติดต่อใหม่",
          color: "#FFFFFF",
          size: "xl",
          weight: "bold",
          wrap: true,
          margin: "md"
        }]
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        backgroundColor: "#111827",
        contents: [buildDetailRow("ชื่อ", data.name), buildDetailRow("เบอร์โทร", data.phone), buildDetailRow("อีเมล", data.email || "-"), {
          type: "separator",
          color: "#374151",
          margin: "sm"
        }, {
          type: "box",
          layout: "vertical",
          spacing: "xs",
          margin: "sm",
          contents: [{
            type: "text",
            text: "ข้อความ",
            color: "#9CA3AF",
            size: "sm"
          }, {
            type: "text",
            text: data.message?.trim() || "-",
            wrap: true,
            color: "#F9FAFB",
            size: "sm"
          }]
        }],
        paddingAll: "20px"
      }
    }
  };
}
const submitContactMessage_createServerFn_handler = createServerRpc({
  id: "c7c64ffa115cbd3be824ac084ded6ecefcd0ea987999b51ecfca3bbe03696bea",
  name: "submitContactMessage",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => submitContactMessage.__executeServer(opts));
const submitContactMessage = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(submitContactMessage_createServerFn_handler, async ({
  data
}) => {
  await pushLineGroupMessage([buildContactFlexMessage(data)]);
  return {
    ok: true,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
});
export {
  submitContactMessage_createServerFn_handler
};
