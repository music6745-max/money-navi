import type { MetadataRoute } from "next";
import { tools, siteConfig } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { categories } from "@/lib/categories";

/**
 * 🎯 Tier-A（0.95）: 収益化の柱となるランキング／比較ガイド
 * これらをサイトマップで最上位に置くことで、Google のクロール予算を
 * 「金になるページ」に集中させる。
 *
 * new-domain の crawl budget は限定的なので、全ページ同priorityの
 * フラットな sitemap だとどれが重要か伝わらない → インデックス率が伸びない。
 */
const TIER_A_SLUGS = new Set<string>([
  // 投資・証券（高単価）
  "nisa-broker-ranking-2026",
  "ideco-broker-comparison",
  "roboadvisor-comparison",
  "fx-broker-ranking",
  "crypto-exchange-comparison",
  // クレカ・カード系
  "high-reward-credit-cards",
  "business-card-comparison-2026",
  // 税理・FP（高単価、toolbox からの導線あり）
  "invoice-system-complete-guide",
  "denshi-chobo-preservation-guide",
  "company-expense-rules-guide",
  "medical-expense-practical-guide",
  "fp-consultation-guide",
  "high-income-tax-strategy",
  // 不動産・副業
  "real-estate-crowdfunding-comparison-2026",
  "dual-income-household-guide",
  "freelance-retirement-guide",
]);

/**
 * Tier-B（0.7）: 収益サポート（ranking/comparison/guide を含むslug）
 * 比較・ランキング系キーワードは検索意図が強いのでミドル優先度。
 */
function isTierB(slug: string): boolean {
  return (
    slug.includes("ranking") ||
    slug.includes("comparison") ||
    slug.includes("broker") ||
    slug.includes("exchange")
  );
}

function guidePriority(slug: string): number {
  if (TIER_A_SLUGS.has(slug)) return 0.95;
  if (isTierB(slug)) return 0.7;
  return 0.5; // 残りは Tier-C（詳細解説・補助コンテンツ）
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const toolRoutes: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guide/${g.slug}`,
    lastModified: new Date(g.publishedAt),
    changeFrequency: "monthly",
    priority: guidePriority(g.slug),
  }));
  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...guideRoutes];
}
