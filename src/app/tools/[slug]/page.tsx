import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, siteConfig, getToolBySlug } from "@/lib/tools";
import { getCategoryBySlug } from "@/lib/categories";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ToolSimulator } from "./ToolSimulator";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name}｜無料シミュレーター・${siteConfig.name}`,
    description: tool.description,
    alternates: { canonical: `${siteConfig.url}/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name}｜${siteConfig.name}`,
      description: tool.description,
      url: `${siteConfig.url}/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();
  const cat = getCategoryBySlug(tool.category);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: cat?.name || tool.category, url: `${siteConfig.url}/category/${tool.category}` },
          { name: tool.name, url: `${siteConfig.url}/tools/${tool.slug}` },
        ]}
      />
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${tool.category}`} className="hover:text-primary">
          {cat?.name || tool.category}
        </Link>
        <span className="mx-2">/</span>
        <span>{tool.name}</span>
      </nav>
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{tool.icon}</span>
          <h1 className="text-2xl sm:text-3xl font-bold">{tool.name}</h1>
        </div>
        <p className="text-muted">{tool.description}</p>
      </header>

      <ToolSimulator slug={tool.slug} />

      <AdSenseUnit format="horizontal" className="my-8" />

      {/* ツールタイプ別のアフィリエイトCTA */}
      {(tool.category === "nisa" || tool.category === "broker") && (
        <AffiliateCTA
          title="新NISAを始めるならSBI証券・楽天証券"
          description="ネット証券大手2社なら新NISAの取扱銘柄が豊富で、クレカ積立でポイントも貯まります。口座開設は無料・最短5分で申込完了。"
          buttonText="証券口座の詳細を見る"
          href="/guide/nisa-broker-ranking-2026"
          external={false}
          icon="💰"
          highlight="人気No.1"
        />
      )}
      {tool.category === "ideco" && (
        <AffiliateCTA
          title="iDeCoでさらに節税するなら"
          description="iDeCoは掛金が全額所得控除。年収500万円の会社員なら年間5〜6万円の節税効果。主要ネット証券なら運営管理手数料0円。"
          buttonText="iDeCo金融機関の比較を見る"
          href="/guide/ideco-broker-comparison"
          external={false}
          icon="🏦"
        />
      )}
      {tool.category === "fx-crypto" && (
        <AffiliateCTA
          title="FX・仮想通貨の口座開設キャンペーン"
          description="主要FX会社・仮想通貨取引所の口座開設キャンペーンを比較。今なら最大数万円のキャッシュバックも。"
          buttonText="キャンペーン比較を見る"
          href="/guide/fx-broker-ranking"
          external={false}
          icon="💹"
        />
      )}
      {tool.category === "sidejob" && (
        <AffiliateCTA
          title="副業で月5万円を目指すなら"
          description="会社員におすすめの副業ランキング。初期費用なしから始められる副業を徹底比較。確定申告の方法も解説。"
          buttonText="副業ランキングを見る"
          href="/guide/side-business-ranking-2026"
          external={false}
          icon="💼"
        />
      )}
      {tool.category === "card" && (
        <AffiliateCTA
          title="高還元率クレジットカードで家計を改善"
          description="還元率1%以上のクレカなら、年間数万円のポイントが貯まります。投資積立対応カードならさらにお得。"
          buttonText="おすすめクレカを見る"
          href="/guide/high-reward-credit-cards"
          external={false}
          icon="💳"
        />
      )}
      {tool.category === "household" && (
        <AffiliateCTA
          title="家計管理を楽にする方法"
          description="家計簿アプリ、ネット銀行、節税テクニックなど、家計改善に役立つ情報をまとめています。"
          buttonText="家計改善ガイドを見る"
          href="/guide/household-budget-apps"
          external={false}
          icon="🏠"
        />
      )}

      <RelatedTools currentSlug={tool.slug} category={tool.category} />
    </div>
  );
}
