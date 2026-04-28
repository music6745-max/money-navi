import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { guides, getGuideBySlug } from "@/lib/guides";
import { siteConfig, tools } from "@/lib/tools";
import { getCategoryBySlug } from "@/lib/categories";
import { BreadcrumbJsonLd, ArticleJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { GuideContent } from "./GuideContent";
import { getFaqsForGuide } from "@/lib/guideFaqs";

// Force static generation: guides are fully known at build time, no per-request fetching.
// これにより動的レンダリングに fallback する余地を消し、
// Googlebot から見て全ページが確実に pre-rendered HTML として届く。
export const dynamic = "force-static";
export const dynamicParams = false; // 未知の slug は 404（soft 404 回避）

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
  // このガイドのカテゴリに属するツールから最大3件を関連ツールとして出す
  const relatedTools = tools.filter((t) => t.category === guide.category).slice(0, 3);

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

      {/* 🎯 ランキング/比較ガイドに「選定基準」メタブロック差し込み（thin content 補強）。
            slug が ranking/comparison を含むガイドは内容が表中心になりがちなので、
            判定基準と更新ポリシーをユニーク prose で追加する。 */}
      {(guide.slug.includes("ranking") || guide.slug.includes("comparison")) && (
        <section className="mb-6 border-l-4 border-primary bg-primary/5 pl-4 py-3 rounded-r">
          <h2 className="text-sm font-bold mb-2">このランキングの選定基準</h2>
          <ul className="text-xs text-muted leading-relaxed space-y-1 list-disc list-inside">
            <li>
              <strong>手数料・運用コスト</strong>：長期運用で最も影響する項目を最優先で評価
            </li>
            <li>
              <strong>取扱商品・銘柄数</strong>：選択肢の豊富さが将来の運用方針変更に対応できるか
            </li>
            <li>
              <strong>アプリ・UIの使いやすさ</strong>：実際に長く使えるかはここで決まる
            </li>
            <li>
              <strong>ポイント還元・キャンペーン</strong>：クレカ積立など差がつく仕様を加点評価
            </li>
            <li>
              <strong>サポート体制・信頼性</strong>：金融庁登録、運営年数、問い合わせ対応の実績
            </li>
          </ul>
          <p className="text-xs text-muted mt-2">
            本記事は <time dateTime={guide.publishedAt}>{guide.publishedAt}</time> 時点の公開情報をもとに編集しています。各社の手数料・仕様は随時変更されるため、最新情報は必ず公式サイトでご確認ください。
          </p>
        </section>
      )}

      {/* 🎯 カテゴリ文脈ブロック — 全ガイドに category-specific な E-E-A-T 文を差し込む。
            同じ category の guide で同文になるが、category が8通りあるので global な
            near-duplicate にはならず、代わりに「薄いガイド」のコンテンツ量を底上げできる。 */}
      {cat && (
        <section className="mb-8 bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{cat.icon}</span>
            <h2 className="text-sm font-bold">この記事は「{cat.name}」カテゴリの一部です</h2>
          </div>
          <p className="text-xs text-muted leading-relaxed mb-3">{cat.intro}</p>
          <Link
            href={`/category/${cat.slug}`}
            className="inline-block text-xs text-primary hover:underline"
          >
            {cat.name}カテゴリのすべての記事を見る →
          </Link>
        </section>
      )}

      <GuideContent slug={guide.slug} />

      {guide.slug === "japanese-stock-ranking-2026" && (
        <AffiliateCTA
          page={guide.slug}
          title="アクティブ運用の代表格｜ひふみ NISAで成長企業に投資"
          description="独自リサーチで成長企業を発掘するアクティブファンド「ひふみ」。日本株を中心とした厳選ポートフォリオで、新NISA成長枠での口座開設＋買付完了で成果が発生します。指数連動のインデックス投資だけでなくアクティブ運用にも関心がある方に。"
          buttonText="ひふみ NISAの詳細"
          href="/go/rheos-hifumi-nisa"
          icon="📊"
          highlight="アクティブ運用"
        />
      )}

      {/* 🎯 このガイドと一緒に使えるツール（ガイド内部から tools/ への内部リンク） */}
      {relatedTools.length > 0 && (
        <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-5">
          <h2 className="text-base font-bold mb-3">🔧 あわせて使いたいシミュレーター</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="block p-3 rounded-lg bg-background border border-card-border hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="text-xl mb-1">{t.icon}</div>
                <div className="text-xs font-semibold line-clamp-1">{t.name}</div>
                <div className="text-[11px] text-muted line-clamp-2 mt-1">{t.description}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
