import { getContent } from "@/lib/content";
import { Landing } from "@/components/Landing";

export default function Home() {
  const content = getContent();
  return <Landing content={content} />;
}
