import type { SiteContent } from "./types";

export async function fetchContent(): Promise<SiteContent> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    return {
      hero: {
        title: "Ship your landing page",
        subtitle: "Set DATABASE_URL to load live content from Neon.",
        cta: "Get started",
        ctaHref: "#start",
      },
      theme: {
        bg: "#0f1419",
        fg: "#f4f1ea",
        accent: "#e8a54b",
        muted: "#9aa3ad",
      },
    };
  }

  const { neon } = await import("@neondatabase/serverless");
  const sql = neon(url);
  const rows = await sql`
    SELECT data FROM site_content WHERE id = 'demo-home' LIMIT 1
  `;
  if (!rows.length) {
    throw new Error("Missing site_content row demo-home");
  }
  return rows[0].data as SiteContent;
}
