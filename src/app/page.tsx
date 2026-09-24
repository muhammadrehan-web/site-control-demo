import { fetchContent } from "@/lib/content";
import { LiveLanding } from "@/components/LiveLanding";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await fetchContent();
  return <LiveLanding initial={content} />;
}
