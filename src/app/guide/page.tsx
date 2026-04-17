import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: `ガイド記事一覧（${guides.length}本）｜${siteConfig.name}`,
  description: `新NISA・iDeCo・ロボアド・FX・仮想通貨・クレカ・副業など、お金に関するガイド記事${guides.length}本。初心者向け解説からプロ向け戦略まで幅広く提供。`,
  alternates: { canonical: `${siteConfig.url}/guide` },
};

export default function GuideIndex() {
  const guidesByCategory = categories.map((cat) => ({
    ...cat,
    guides: guides.filter((g) => g.category === cat.slug),
  }));
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
        ]}
      />
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ガイド記事</span>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3">ガイド記事一覧（{guides.length}本）</h1>
        <p className="text-muted">
          新NISA・iDeCo・投資・副業に関する実践的なガイド記事。初心者から中級者まで役立つ情報を網羅しています。
        </p>
      </header>
      {guidesByCategory
        .filter((c) => c.guides.length > 0)
        .map((cat) => (
          <section key={cat.slug} className="mb-10">
            <h2 className="text-xl font-bold mb-4">
              {cat.icon} {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guide/${g.slug}`}
                  className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{g.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {cat.name}
                        </span>
                        <span className="text-xs text-muted">{g.readTime}</span>
                      </div>
                      <h3 className="text-base font-semibold mb-1">{g.title}</h3>
                      <p className="text-sm text-muted leading-relaxed line-clamp-2">{g.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
