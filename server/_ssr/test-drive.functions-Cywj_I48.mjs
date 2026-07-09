import { c as createServerRpc } from "./createServerRpc-CEkRaiCK.mjs";
import { c as createServerFn } from "./server-DeJaANHj.mjs";
import { createSign } from "node:crypto";
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
const GOOGLE_TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_SPREADSHEET_ID = "1_HbMeTAkuksDm5sQPtZUr7A-1GKNqFZeqB5ua9VVPvQ";
const DEFAULT_RANGE = "Sheet1!A:H";
let cachedAccessToken = null;
function base64UrlEncode(value) {
  return Buffer.from(value).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function normalizePrivateKey(rawValue) {
  const trimmed = rawValue.trim();
  const unquoted = trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'") ? trimmed.slice(1, -1) : trimmed;
  return unquoted.replace(/\\r/g, "").replace(/\\n/g, "\n").replace(/\r\n/g, "\n");
}
function readSplitEnv(prefix) {
  const parts = Object.entries(process.env).map(([key, value]) => {
    if (!value || !key.startsWith(prefix)) {
      return null;
    }
    const indexText = key.slice(prefix.length);
    const index = Number(indexText);
    if (!Number.isInteger(index) || index < 1) {
      return null;
    }
    return { index, value: value.trim() };
  }).filter((part) => part !== null).sort((a, b) => a.index - b.index);
  if (parts.length === 0) {
    return void 0;
  }
  return parts.map((part) => part.value).join("");
}
function decodeBase64Utf8(encoded) {
  try {
    return Buffer.from(encoded, "base64").toString("utf8");
  } catch (error) {
    throw new Error(`Invalid base64 env value: ${error.message}`);
  }
}
function readServiceAccountFromJsonEnv() {
  const jsonRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim() || readSplitEnv("GOOGLE_SERVICE_ACCOUNT_JSON_PART_");
  const jsonBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim() || readSplitEnv("GOOGLE_SERVICE_ACCOUNT_JSON_BASE64_PART_");
  if (!jsonRaw && !jsonBase64) {
    return null;
  }
  const source = jsonRaw || decodeBase64Utf8(jsonBase64);
  try {
    const parsed = JSON.parse(source);
    return {
      serviceAccountEmail: parsed.client_email?.trim(),
      privateKeyRaw: parsed.private_key?.trim()
    };
  } catch (error) {
    throw new Error(
      `Invalid GOOGLE_SERVICE_ACCOUNT_JSON value. Ensure it is valid JSON (or base64 JSON). Root cause: ${error.message}`
    );
  }
}
function getRequiredGoogleConfig() {
  const jsonEnv = readServiceAccountFromJsonEnv();
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() || jsonEnv?.serviceAccountEmail;
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim() || readSplitEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_PART_") || jsonEnv?.privateKeyRaw;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE?.trim() || DEFAULT_RANGE;
  if (!serviceAccountEmail) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
  }
  if (!privateKeyRaw) {
    throw new Error(
      "Missing Google private key. Provide GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_PART_1..N, GOOGLE_SERVICE_ACCOUNT_JSON, or GOOGLE_SERVICE_ACCOUNT_JSON_BASE64."
    );
  }
  return {
    serviceAccountEmail,
    privateKey: normalizePrivateKey(privateKeyRaw),
    spreadsheetId,
    range
  };
}
async function getGoogleAccessToken() {
  if (cachedAccessToken && Date.now() < cachedAccessToken.expiresAt - 6e4) {
    return cachedAccessToken.token;
  }
  const { serviceAccountEmail, privateKey } = getRequiredGoogleConfig();
  const issuedAt = Math.floor(Date.now() / 1e3);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccountEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_ENDPOINT,
    iat: issuedAt,
    exp: issuedAt + 3600
  };
  const unsignedToken = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  let signature;
  try {
    signature = signer.sign(privateKey);
  } catch (error) {
    throw new Error(
      `Invalid GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY format. Ensure it uses the service account JSON private_key value with \\n line breaks. Root cause: ${error.message}`
    );
  }
  const assertion = `${unsignedToken}.${base64UrlEncode(signature)}`;
  const tokenResponse = await fetch(GOOGLE_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });
  if (!tokenResponse.ok) {
    const detail = await tokenResponse.text();
    throw new Error(`Google token request failed (${tokenResponse.status}): ${detail}`);
  }
  const tokenData = await tokenResponse.json();
  cachedAccessToken = {
    token: tokenData.access_token,
    expiresAt: Date.now() + tokenData.expires_in * 1e3
  };
  return tokenData.access_token;
}
async function appendTestDriveBookingToSheet(data) {
  const { serviceAccountEmail, spreadsheetId, range } = getRequiredGoogleConfig();
  const accessToken = await getGoogleAccessToken();
  const bookedDate = data.date?.trim() || "-";
  const note = data.message?.trim() || "-";
  const row = [
    (/* @__PURE__ */ new Date()).toISOString(),
    data.name,
    data.phone,
    data.email || "-",
    data.model,
    bookedDate,
    "BYD ราชพฤกษ์",
    note
  ];
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const appendResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      majorDimension: "ROWS",
      values: [row]
    })
  });
  if (!appendResponse.ok) {
    const detail = await appendResponse.text();
    if (appendResponse.status === 403 && /PERMISSION_DENIED|permission/i.test(detail)) {
      throw new Error(
        `Google Sheets append failed (403): service account ${serviceAccountEmail} does not have access to spreadsheet ${spreadsheetId}. Share the sheet with this service account as Editor and verify GOOGLE_SHEETS_SPREADSHEET_ID / GOOGLE_SHEETS_RANGE.`
      );
    }
    throw new Error(`Google Sheets append failed (${appendResponse.status}): ${detail}`);
  }
}
const THAI_MONTHS = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
const testDriveBookingSchema = objectType({
  name: stringType().trim().min(1),
  phone: stringType().trim().min(1),
  email: stringType().trim().email().or(literalType("")),
  model: stringType().trim().min(1),
  date: stringType().trim().optional(),
  message: stringType().trim().optional()
});
function formatThaiBookingDate(date) {
  if (!date) {
    return "-";
  }
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) {
    return date;
  }
  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) {
    return date;
  }
  return `${day} ${THAI_MONTHS[month - 1]} ${year + 543}`;
}
function buildDetailRow(label, value) {
  return {
    type: "box",
    layout: "baseline",
    spacing: "sm",
    contents: [{
      type: "text",
      text: label,
      color: "#374151",
      size: "sm",
      wrap: true,
      flex: 5
    }, {
      type: "text",
      text: value,
      wrap: true,
      color: "#111827",
      size: "sm",
      flex: 7
    }]
  };
}
function buildTestDriveFlexMessage(data) {
  const formattedDate = formatThaiBookingDate(data.date);
  const appointmentBranch = "BYD ราชพฤกษ์";
  const extraMessage = data.message?.trim() || "-";
  return {
    type: "flex",
    altText: `นัดทดลองขับใหม่ ${data.model} โดย ${data.name}`,
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#06C755",
        paddingAll: "20px",
        contents: [{
          type: "text",
          text: "Test Drive Booking",
          color: "#E8FFF0",
          size: "xs",
          weight: "bold"
        }, {
          type: "text",
          text: "มีคำขอนัดทดลองขับใหม่",
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
        backgroundColor: "#FFFFFF",
        borderColor: "#D1D5DB",
        borderWidth: "1px",
        contents: [buildDetailRow("รุ่นรถ", data.model), buildDetailRow("ชื่อ", data.name), buildDetailRow("เบอร์โทร", data.phone), buildDetailRow("อีเมล", data.email || "-"), buildDetailRow("วันที่นัดหมาย", formattedDate), buildDetailRow("สาขาที่นัดหมาย", appointmentBranch), {
          type: "separator",
          color: "#D1D5DB",
          margin: "sm"
        }, {
          type: "box",
          layout: "vertical",
          spacing: "xs",
          margin: "sm",
          contents: [{
            type: "text",
            text: "ข้อความเพิ่มเติม",
            color: "#374151",
            size: "sm"
          }, {
            type: "text",
            text: extraMessage,
            wrap: true,
            color: "#111827",
            size: "sm"
          }]
        }],
        paddingAll: "20px"
      }
    }
  };
}
const submitTestDriveBooking_createServerFn_handler = createServerRpc({
  id: "725859a2360a125a7951e9f4bb46f7d2c3edff320b51fac80d87b4cdcd493c2a",
  name: "submitTestDriveBooking",
  filename: "src/lib/api/test-drive.functions.ts"
}, (opts) => submitTestDriveBooking.__executeServer(opts));
const submitTestDriveBooking = createServerFn({
  method: "POST"
}).inputValidator(testDriveBookingSchema).handler(submitTestDriveBooking_createServerFn_handler, async ({
  data
}) => {
  try {
    await pushLineGroupMessage([buildTestDriveFlexMessage(data)]);
    await appendTestDriveBookingToSheet(data);
  } catch (error) {
    console.error("submitTestDriveBooking failed", error);
    throw new Error("ส่งข้อมูลไม่สำเร็จชั่วคราว กรุณาลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่โดยตรง");
  }
  return {
    ok: true,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
});
export {
  submitTestDriveBooking_createServerFn_handler
};
