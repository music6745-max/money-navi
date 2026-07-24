import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { TrackedOfferLink } from "@/components/TrackedOfferLink";
import { siteConfig } from "@/lib/tools";
import { KaigoDiagnosis } from "./KaigoDiagnosis";

const pageTitle = "親のこと整理ナビ";
const pageDescription =
  "親の介護、お金、入院、施設選び、きょうだい分担で迷ったときに、無料チェックリストで状況を整理し、必要な相談先を選べる案内ページです。";

const faqItems = [
  {
    question: "親のこと整理ナビは何をするページですか？",
    answer:
      "親の介護やお金まわりで起きやすい状況を選ぶと、最初に確認すること、無料ツール、必要に応じた外部相談先を整理して表示します。",
  },
  {
    question: "個人情報を入力する必要はありますか？",
    answer:
      "ありません。診断は選択式で、氏名、住所、口座情報、病歴などの個人情報は入力しない設計です。",
  },
  {
    question: "医療、税務、相続の判断もできますか？",
    answer:
      "このページは家族内の整理と相談前準備を目的としています。医療、税務、相続、契約の最終判断は専門家や公的窓口に確認してください。",
  },
];

const referralCards = [
  {
    offerId: "kaigo-senior-monitoring",
    title: "一人暮らしの見守り",
    description:
      "家族の連絡順と頻度を決めたうえで、見守りサービスの費用や契約条件を確認します。",
    buttonText: "アイシルの公式情報を確認",
  },
  {
    offerId: "kaigo-home-care-support",
    title: "通院付き添い・自費介護",
    description:
      "介護保険で足りない付き添い、夜間の見守り、家族の休息時間を整理してから確認します。",
    buttonText: "イチロウの公式情報を確認",
  },
  {
    offerId: "kaigo-estate-cleanout",
    title: "実家片付け・生前整理",
    description:
      "重要書類や写真を先に分け、片付けや見積依頼の前に対応範囲を確認します。",
    buttonText: "遺品整理110番の情報を確認",
  },
];

const priorityTools = [
  {
    slug: "kaigo-cost-share",
    title: "介護費用分担",
    description: "毎月の介護費用を家族でどう分けるか試算",
  },
  {
    slug: "kaigo-hospital-checklist",
    title: "入退院準備",
    description: "入院・退院・介護認定の確認リストを生成",
  },
  {
    slug: "kaigo-facility-compare",
    title: "施設費用比較",
    description: "候補施設の月額と総額を同じ条件で比較",
  },
  {
    slug: "kaigo-parent-monitoring-cost-check",
    title: "見守り費用",
    description: "一人暮らしの親の見守り費用と連絡順を整理",
  },
  {
    slug: "kaigo-facility-visit-question-list",
    title: "施設見学質問",
    description: "費用・医療対応・面会・退去条件の質問を整理",
  },
  {
    slug: "kaigo-parent-money-document-memo",
    title: "通帳・保険確認",
    description: "親への聞き方と書類・支払いの確認順を整理",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteConfig.url}/kaigo` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/kaigo`,
    type: "website",
  },
};

export default function KaigoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: pageTitle, url: `${siteConfig.url}/kaigo` },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="mb-5 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>{pageTitle}</span>
      </nav>

      <header className="mb-7">
        <p className="text-xs font-bold text-primary">介護・お金・家族共有のセルフ整理</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{pageTitle}</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{pageDescription}</p>
      </header>

      <section
        id="kaigo-services"
        className="mb-7 rounded-xl border border-primary/25 bg-primary/5 p-5"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">PR | 困りごと別の確認先</p>
            <h2 className="text-xl font-bold">急いでいる課題だけ、対応条件を確認する</h2>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-muted">
            料金、対応地域、契約条件は各公式情報で確認してください。不要なサービスへ一律に申し込むページではありません。
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {referralCards.map((card) => (
            <article key={card.offerId} className="rounded-lg border border-card-border bg-background p-4">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{card.description}</p>
              <TrackedOfferLink
                offerId={card.offerId}
                page="kaigo"
                position="hub_priority_referral"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary-hover"
              >
                {card.buttonText}
              </TrackedOfferLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-7 rounded-xl border border-card-border bg-card-bg p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">無料ツール</p>
            <h2 className="text-xl font-bold">相談前に数字と確認項目を整理する</h2>
          </div>
          <TrackedExternalLink
            href="https://net-toolbox.jp/tools?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools"
            eventName="toolbox_click"
            page="kaigo"
            position="free_tool_header"
            itemId="all-tools"
            className="text-sm font-bold text-primary hover:underline"
          >
            無料ツール一覧を見る
          </TrackedExternalLink>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {priorityTools.map((tool) => (
            <TrackedExternalLink
              key={tool.slug}
              href={`https://net-toolbox.jp/tools/${tool.slug}?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools`}
              eventName="toolbox_click"
              page="kaigo"
              position="free_tool_grid"
              itemId={tool.slug}
              className="block rounded-lg border border-card-border bg-background p-4 hover:border-primary/40"
            >
              <h3 className="text-sm font-bold">{tool.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{tool.description}</p>
            </TrackedExternalLink>
          ))}
        </div>
      </section>

      <section className="mb-7">
        <div className="mb-4">
          <p className="text-xs font-bold text-primary">状況別ナビ</p>
          <h2 className="text-xl font-bold">今の困りごとから、最初の行動を絞る</h2>
        </div>
        <KaigoDiagnosis />
      </section>

      <section className="rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="text-xl font-bold">このページの使い方</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          {[
            ["1", "今の状況を選ぶ"],
            ["2", "最初にやることを確認"],
            ["3", "無料ツールで整理"],
            ["4", "必要な場合だけ公式サービスを確認"],
          ].map(([step, label]) => (
            <div key={step} className="rounded-md border border-card-border bg-background p-3">
              <span className="text-xs font-bold text-primary">STEP {step}</span>
              <p className="mt-1 text-sm font-bold">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          個別の医療判断、税務判断、相続判断、契約判断は扱いません。家族で状況を整理し、必要に応じて専門窓口へ相談する前の準備に使うページです。
        </p>
      </section>
    </main>
  );
}
