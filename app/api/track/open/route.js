// ─── ─── Email open tracker — serves a 1x1 pixel and logs the open ─── ───
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// 1x1 transparent GIF.
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

const LOG_FILE = path.join(process.cwd(), "data", "track-log.jsonl");

function cleanId(value) {
  const id = (value || "").trim().slice(0, 64);
  return /^[a-zA-Z0-9-_]+$/.test(id) ? id : "unknown";
}

export async function GET(request) {
  const id = cleanId(request.nextUrl.searchParams.get("id"));
  const forwarded = request.headers.get("x-forwarded-for") || "";
  const entry = {
    id,
    time: new Date().toISOString(),
    ip: forwarded.split(",")[0].trim(),
    agent: request.headers.get("user-agent") || "",
  };

  // Log first, the pixel always returns even if logging fails.
  try {
    await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
    await fs.appendFile(LOG_FILE, JSON.stringify(entry) + "\n");
  } catch {
    // Logging must never break the pixel.
  }

  return new Response(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Content-Length": String(PIXEL.length),
    },
  });
}
