import { NextResponse } from "next/server";
import { fetchContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const content = await fetchContent();
    return NextResponse.json(content, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to load content";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
