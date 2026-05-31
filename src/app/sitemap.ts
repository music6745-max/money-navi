import type { MetadataRoute } from "next";
import { tools, siteConfig } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { categories } from "@/lib/categories";

const TIER_A_SLUGS = new Set<string>([
  "nisa-broker-ranking-2026",
  "ideco-broker-comparison",
  "roboadvisor-comparison",
  "fx-broker-ranking",
  "crypto-exchange-comparison",
  "high-reward-credit-cards",
  "business-card-comparison-2026",
  "invoice-system-complete-guide",
  "denshi-chobo-preservation-guide",
  "company-expense-rules-guide",
  "medical-expense-practical-guide",
  "fp-consultation-guide",
  "high-income-tax-strategy",
  "real-estate-crowdfunding-comparison-2026",
  "dual-income-household-guide",
  "freelance-retirement-guide",
  "japanese-stock-ranking-2026",
  "japan-stock-dividend-kings",
  "foreign-tax-credit-guide",
  "semiconductor-etf-detailed-guide",
  "swing-trading-strategy-guide",
  "auto-loan-comparison-2026",
  "pet-insurance-detailed-comparison",
  "internet-banking-rate-compare",
  "bitcoin-etf-japan-guide",
]);

const TIER_A_TOOL_SLUGS = new Set<string>([
  "ideco-tax-saving",
  "nisa-simulator",
  "side-income-tax",
  "take-home-calculator",
  "furusato-limit",
  "medical-deduction",
  "nisa-vs-ideco",
]);

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
  return 0.5;
}

function toolPriority(slug: string): number {
  if (TIER_A_TOOL_SLUGS.has(slug)) return 0.9;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/kaigo`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    {
      url: `${base}/guide/parent-home-cooking-seasoning-recipe-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-home-visit-bring-carryback-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-next-conversation-topics-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-cherished-item-background-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-speech-habit-phrases-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-frequent-shops-living-area-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-seasonal-event-supplies-storage-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-room-dimensions-furniture-layout-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-pet-care-routine-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/guide/parent-window-curtain-screen-size-record`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    { url: `${base}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${base}/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${base}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: toolPriority(tool.slug),
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${base}/guide/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: guidePriority(guide.slug),
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...guideRoutes];
}
