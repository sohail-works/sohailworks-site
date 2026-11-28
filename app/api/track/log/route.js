// ─── ─── Tracker log viewer — key protected ─── ───
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const LOG_FILE = path.join(process.cwd(), "data", "track-log.jsonl");

export async function GET(request) {
  const key = process.env.TRACK_KEY;
  const given = request.nextUrl.searchParams.get("key") || "";
  if (!key || given !== key) {
    return Response.json({ error: "Not found." }, { status: 404 });
  }

  let entries = [];
  try {
    const text = await fs.readFile(LOG_FILE, "utf8");
    entries = text
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  } catch {
    entries = [];
  }

  return Response.json({ opens: entries.slice(-500).reverse() });
}
