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

const ADSENSE_REVIEWED_AT = "2026-05-22";

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
      modifiedTime: guide.updatedAt || ADSENSE_REVIEWED_AT,
    },
  };
}

function getReviewPolicy(category: string) {
  const common = {
    sourceLabel: "金融庁・国税庁・各社公式情報",
    points: [
      "公式情報、手数料表、制度説明を優先して確認",
      "広告リンクの有無よりも比較基準、注意点、リスク説明を優先",
      "最終判断は読者自身で公式情報を確認する前提で記載",
    ],
  };

  const policies: Record<string, typeof common> = {
    nisa: {
      sourceLabel: "金融庁・証券会社・運用会社の公式情報",
      points: [
        "新NISAの制度枠、対象商品、手数料、税制上の注意点を確認",
        "利回りや将来リターンを保証せず、価格変動と元本割れリスクを明記",
        "初心者が公式ページで再確認すべき項目を本文中に整理",
      ],
    },
    broker: {
      sourceLabel: "証券会社公式ページ・手数料表・取引ルール",
      points: [
        "売買手数料、取扱商品、アプリ、サポート、キャンペーン条件を分けて確認",
        "短期売買や信用取引は損切り、余力管理、税金の注意点を併記",
        "ランキングは一律の正解ではなく、利用目的別の使い分けとして説明",
      ],
    },
    household: {
      sourceLabel: "金融機関・保険会社・公的機関の公式情報",
      points: [
        "保険料、金利、手数料、補償範囲、年齢制限を分けて確認",
        "家計への影響を総額、月額、更新条件の観点で整理",
        "申込前に約款、重要事項説明、公式シミュレーションを確認する前提で記載",
      ],
    },
    "fx-crypto": {
      sourceLabel: "取引所・金融庁・税務関連の公式情報",
      points: [
        "レバレッジ、価格変動、スプレッド、税金、セキュリティの注意点を確認",
        "短期的な利益を保証せず、損失や追加入金リスクを明記",
        "暗号資産やFXは初心者向けのリスク確認を優先して説明",
      ],
    },
    roboadvisor: {
      sourceLabel: "運用会社・サービス公式ページ・手数料表",
      points: [
        "手数料、最低投資額、運用方針、NISA対応、解約条件を確認",
        "おまかせ運用でも元本保証ではないことを明記",
        "自分でETFを買う場合との費用差も比較材料として扱う",
      ],
    },
  };

  return policies[category] || common;
}

export default async function GuidePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const cat = getCategoryBySlug(guide.category);
  const faqs = getFaqsForGuide(guide.slug);
  const reviewedAt = guide.updatedAt || ADSENSE_REVIEWED_AT;
  const reviewPolicy = getReviewPolicy(guide.category);
  // このガイドのカテゴリに属するツールから最大3件を関連ツールとして出す
  const relatedTools = tools.filter((t) => t.category === guide.category).slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd
        headline={guide.title}
        description={guide.description}
        url={`${siteConfig.url}/guide/${guide.slug}`}
        datePublished={guide.publishedAt}
        dateModified={reviewedAt}
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
          <span className="text-xs text-muted">確認: {reviewedAt}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          <span className="mr-2">{guide.icon}</span>
          {guide.title}
        </h1>
        <p className="text-muted">{guide.description}</p>
      </header>

      <section className="mb-6 rounded-xl border border-card-border bg-card-bg p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h2 className="text-sm font-bold">この記事の確認方針</h2>
          <span className="text-xs text-muted">最終確認: {reviewedAt}</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          {reviewPolicy.sourceLabel}を優先し、読者が申込前に再確認すべき費用・条件・リスクを整理しています。
          詳細は<Link href="/editorial-policy" className="text-primary hover:underline">編集方針</Link>をご確認ください。
        </p>
        <ul className="list-disc list-inside text-xs text-muted leading-relaxed space-y-1">
          {reviewPolicy.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

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

      {guide.slug === "auto-loan-comparison-2026" && (
        <AffiliateCTA
          page={guide.slug}
          title="車購入後の保険見直しはインズウェブ｜複数社一括見積もり"
          description="自動車ローンを低金利で組めたら、次は自動車保険のコスト見直しを。インズウェブなら複数の保険会社の見積もりを一度に比較でき、ネット型保険への切り替えで年間3〜5万円の保険料節約事例も。車の総コストを最適化したい方に。"
          buttonText="自動車保険一括見積を見る"
          href="/go/sbi-insweb-auto"
          icon="🚗"
          highlight="保険料節約"
        />
      )}

      {guide.slug === "fx-broker-ranking" && (
        <AffiliateCTA
          page={guide.slug}
          title="取引コストを重視するFX口座｜JFX"
          description="JFXはドル円スプレッド0.2銭（原則固定・例外あり）など、短期売買で気になる取引コストを確認しやすいFX口座です。取引ツールや注文機能も比較しながら、自分の投資スタイルに合うかを無料口座開設前に確認できます。"
          buttonText="JFX口座開設を確認する"
          href="/go/jfx-fx"
          icon="💱"
          highlight="スプレッド重視"
        />
      )}

      {guide.slug === "real-estate-crowdfunding" && (
        <AffiliateCTA
          page={guide.slug}
          title="少額から不動産クラファンを比較｜利回りくん"
          description="不動産クラウドファンディングを検討するなら、1万円から参加できる利回りくんも比較候補です。案件ごとの予定利回り、運用期間、リスク情報を確認しながら、CREAL・COZUCHIなど他サービスとあわせて分散先を検討できます。"
          buttonText="利回りくんの詳細を見る"
          href="/go/shiira-riririkun"
          icon="🏢"
          highlight="1万円から"
        />
      )}

      {guide.slug === "new-nisa-basics" && (
        <AffiliateCTA
          page={guide.slug}
          title="NISAの始め方を無料セミナーで学ぶ｜アットセミナー"
          description="資産運用をゼロから学びたい方に、女性向けマネーセミナーのアットセミナー。NISAの基礎や証券口座の選び方を、FPに相談しながら無料で学べます。独学だけでは不安な方の情報整理に役立ちます。"
          buttonText="アットセミナーの無料セミナーを探す"
          href="/go/power-planning-attseminar"
          icon="🎓"
          highlight="無料・全国開催"
        />
      )}

      {guide.slug === "real-estate-loan-advanced-guide" && (
        <AffiliateCTA
          page={guide.slug}
          title="住宅ローン候補をまとめて比較｜モゲチェック"
          description="住宅ローンの新規借り入れ・借り換えを検討中なら、モゲチェックで複数銀行の候補をまとめて比較できます。金利タイプや返済額の違いを確認しながら、必要に応じてアドバイザーへの無料相談も利用できます。"
          buttonText="モゲチェックで無料比較する"
          href="/go/mogecheck-new-loan"
          icon="🏠"
          highlight="無料・30秒比較"
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
