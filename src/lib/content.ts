import type { SiteContent } from "./types";
import raw from "../../content.json";

export function getContent(): SiteContent {
  return raw as SiteContent;
}
