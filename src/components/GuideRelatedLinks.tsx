import Link from "next/link";
import { guides } from "@/lib/guides";

export function GuideRelatedLinks({ currentSlug, category }: { currentSlug: string; category?: string }) {
  // Same category guides (up to 8)
  const sameCategory = guides
    .filter((g) => g.slug !== currentSlug && category && g.category === category)
    .slice(0, 8);

  // Other category guides for diversity (up to 4 from different categories)
  const otherCategories = guides
    .filter((g) => g.slug !== currentSlug && (!category || g.category !== category))
    .sort(() => {
      // Pseudo-random based on currentSlug for stable order
      const hash = currentSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
      return hash % 2 === 0 ? 1 : -1;
    })
    .slice(0, 4);

  const related = [...sameCategory, ...otherCategories];

  if (related.length === 0) return null;

  // Additional: all guides grouped by category for site-wide navigation
  const categoryGroups: Record<string, typeof guides> = {};
  guides.forEach((g) => {
    if (g.slug === currentSlug) return;
    if (!categoryGroups[g.category]) categoryGroups[g.category] = [];
    categoryGroups[g.category].push(g);
  });

  const categoryLabels: Record<string, string> = {
    nisa: "💰 新NISA・投資信託",
    broker: "📊 ネット証券",
    ideco: "🏦 iDeCo・年金",
    "fx-crypto": "💹 FX・仮想通貨",
    roboadvisor: "🤖 ロボアド・AI投資",
    card: "💳 クレカ・キャッシュレス",
    sidejob: "💼 副業・稼ぎ方",
    household: "🏠 家計・節約",
    tax: "📋 税金・節税",
    investment: "📈 投資戦略",
    business: "💼 ビジネス・保険",
  };

  return (
    <>
      <section className="mt-12 pt-8 border-t border-card-border">
        <h3 className="text-lg font-bold mb-4">📚 関連ガイド</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {related.map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="block p-4 rounded-lg border border-card-border bg-card-bg hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{g.icon}</span>
                <div>
                  <p className="font-medium text-sm leading-snug">{g.title}</p>
                  <p className="text-xs text-muted mt-1">{g.readTime}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-card-border">
        <h3 className="text-lg font-bold mb-4">🗂️ カテゴリから他のガイドを探す</h3>
        <div className="space-y-6">
          {Object.entries(categoryGroups).slice(0, 6).map(([catKey, catGuides]) => (
            <div key={catKey}>
              <h4 className="text-sm font-semibold mb-2">{categoryLabels[catKey] || catKey}</h4>
              <div className="flex flex-wrap gap-2">
                {catGuides.slice(0, 8).map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guide/${g.slug}`}
                    className="text-xs px-3 py-1.5 rounded-full border border-card-border bg-card-bg hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    {g.icon} {g.title.replace(/【\d+年】/, "").slice(0, 30)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
