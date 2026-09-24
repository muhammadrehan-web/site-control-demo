"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/types";

export function LiveLanding({ initial }: { initial: SiteContent }) {
  const [content, setContent] = useState(initial);

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      try {
        const res = await fetch("/api/content", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as SiteContent;
        if (!cancelled) setContent(data);
      } catch {
        /* ignore transient poll errors */
      }
    };
    const id = setInterval(tick, 2000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const { hero, theme } = content;

  return (
    <main
      className="page"
      style={
        {
          "--bg": theme.bg,
          "--fg": theme.fg,
          "--accent": theme.accent,
          "--muted": theme.muted,
        } as React.CSSProperties
      }
    >
      <div className="glow" aria-hidden />
      <section className="hero">
        <p className="eyebrow">site-control demo</p>
        <h1>{hero.title}</h1>
        <p className="subtitle">{hero.subtitle}</p>
        <a className="cta" href={hero.ctaHref || "#start"} id="start">
          {hero.cta}
        </a>
      </section>
    </main>
  );
}
