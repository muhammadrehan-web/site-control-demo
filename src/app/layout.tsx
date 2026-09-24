import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Control Demo",
  description: "Landing page controlled by the site-control MCP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
