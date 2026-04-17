import Link from "next/link";
import { tools } from "@/lib/tools";

export function RelatedTools({ currentSlug, category }: { currentSlug: string; category?: string }) {
  const related = tools
    .filter((t) => t.slug !== currentSlug && (category ? t.category === category : true))
    .slice(0, 4);
  if (related.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-card-border">
      <h3 className="text-lg font-bold mb-4">🔧 関連ツール</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {related.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="block p-4 rounded-lg border border-card-border bg-card-bg hover:border-primary/40 text-center transition-all"
          >
            <div className="text-2xl mb-1">{t.icon}</div>
            <p className="text-sm font-medium leading-tight">{t.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
