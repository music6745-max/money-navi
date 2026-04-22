import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/tools";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /go/* はアフィリエイトリダイレクタなのでクロール対象外にする
      // （ランディングではないので検索結果に出す必要がない）
      { userAgent: "*", allow: "/", disallow: "/go/" },
      { userAgent: "GPTBot", allow: "/", disallow: "/go/" },
      { userAgent: "ClaudeBot", allow: "/", disallow: "/go/" },
      { userAgent: "PerplexityBot", allow: "/", disallow: "/go/" },
      { userAgent: "Google-Extended", allow: "/", disallow: "/go/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
