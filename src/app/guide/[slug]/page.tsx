import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { guides, getGuideBySlug } from "@/lib/guides";
import { siteConfig } from "@/lib/tools";
import { getCategoryBySlug } from "@/lib/categories";
import { BreadcrumbJsonLd, ArticleJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { GuideContent } from "./GuideContent";
import { getFaqsForGuide } from "@/lib/guideFaqs";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title}｜${siteConfig.name}`,
    description: guide.description,
    alternates: { canonical: `${siteConfig.url}/guide/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteConfig.url}/guide/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedAt,
    },
  };
}

export default async function GuidePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const cat = getCategoryBySlug(guide.category);
  const faqs = getFaqsForGuide(guide.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd
        headline={guide.title}
        description={guide.description}
        url={`${siteConfig.url}/guide/${guide.slug}`}
        datePublished={guide.publishedAt}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: guide.title, url: `${siteConfig.url}/guide/${guide.slug}` },
        ]}
      />
      {faqs.length > 0 && <FAQJsonLd items={faqs} />}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span className="line-clamp-1">{guide.title}</span>
      </nav>
      <header className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
            {cat?.name || guide.category}
          </span>
          <span className="text-xs text-muted">{guide.readTime}</span>
          <span className="text-xs text-muted">公開: {guide.publishedAt}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          <span className="mr-2">{guide.icon}</span>
          {guide.title}
        </h1>
        <p className="text-muted">{guide.description}</p>
      </header>

      <GuideContent slug={guide.slug} />

      {faqs.length > 0 && (
        <section className="mt-12 bg-card-bg border border-card-border rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-card-border pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold mb-2 text-base">Q. {faq.question}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <AdSenseUnit format="horizontal" className="my-8" />

      <GuideRelatedLinks currentSlug={guide.slug} category={guide.category} />
    </article>
  );
}
