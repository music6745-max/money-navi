import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { tools, siteConfig } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name}｜${siteConfig.name}`,
    description: cat.description,
    alternates: { canonical: `${siteConfig.url}/category/${cat.slug}` },
    openGraph: {
      title: `${cat.name}｜${siteConfig.name}`,
      description: cat.description,
      url: `${siteConfig.url}/category/${cat.slug}`,
    },
  };
}

export default async function CategoryPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();
  const catTools = tools.filter((t) => t.category === cat.slug);
  const catGuides = guides.filter((g) => g.category === cat.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: cat.name, url: `${siteConfig.url}/category/${cat.slug}` },
        ]}
      />
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>{cat.name}</span>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3">
          <span className="mr-2">{cat.icon}</span>
          {cat.name}
        </h1>
        <p className="text-muted">{cat.description}</p>
      </header>

      {catGuides.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">📚 ガイド記事 ({catGuides.length}本)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {catGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{g.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{g.title}</h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">{g.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {catTools.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">🔧 ツール ({catTools.length}種類)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {catTools.map((tool) => (
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
      )}
    </div>
  );
}
