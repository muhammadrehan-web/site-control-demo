export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaHref?: string;
  };
  theme: {
    bg: string;
    fg: string;
    accent: string;
    muted: string;
  };
};
