import type { SiteContent } from "@/lib/types";

export function Landing({ content }: { content: SiteContent }) {
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
