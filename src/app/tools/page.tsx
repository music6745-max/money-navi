import Link from "next/link";
import type { Metadata } from "next";
import { tools, siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: `全ツール一覧（${tools.length}種類）｜${siteConfig.name}`,
  description: `${siteConfig.name}で提供している全${tools.length}種類の無料シミュレーター・計算ツール一覧。NISA・iDeCo・住宅ローン・副業など幅広くカバー。`,
  alternates: { canonical: `${siteConfig.url}/tools` },
};

export default function ToolsIndex() {
  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: tools.filter((t) => t.category === cat.slug),
  }));
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "全ツール", url: `${siteConfig.url}/tools` },
        ]}
      />
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>全ツール一覧</span>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3">全ツール一覧（{tools.length}種類）</h1>
        <p className="text-muted">登録不要・完全無料。ブラウザ上で動作し、入力データはサーバーに送信されません。</p>
      </header>
      {toolsByCategory
        .filter((c) => c.tools.length > 0)
        .map((cat) => (
          <section key={cat.slug} className="mb-10">
            <h2 className="text-xl font-bold mb-4">
              {cat.icon} {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="text-base font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
