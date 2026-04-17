import Link from "next/link";
import { guides } from "@/lib/guides";

export function GuideRelatedLinks({ currentSlug, category }: { currentSlug: string; category?: string }) {
  const related = guides
    .filter((g) => g.slug !== currentSlug && (category ? g.category === category : true))
    .slice(0, 4);
  if (related.length === 0) return null;
  return (
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
  );
}
