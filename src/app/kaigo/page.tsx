import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { KaigoDiagnosis } from "./KaigoDiagnosis";
import { siteConfig } from "@/lib/tools";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

const pageTitle = "親のこと整理ナビ";
const pageDescription =
  "親の介護、お金、入院、施設選び、きょうだい分担で迷ったときに、状況別のチェックリストと介護テンプレートを選べる無料診断ページです。";

const faqItems = [
  {
    question: "親のこと整理ナビは何をするページですか？",
    answer:
      "親の介護やお金まわりで起きやすい状況を選ぶと、最初にやること、無料note、BOOTHのテンプレート、必要に応じた外部相談先を整理して表示します。",
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

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteConfig.name}`,
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

      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div>
          <p className="text-xs font-bold text-primary">介護・お金・家族共有のセルフ整理</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{pageTitle}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{pageDescription}</p>
        </div>
        <div className="rounded-lg border border-card-border bg-card-bg p-4">
          <h2 className="text-sm font-bold">先に確認する無料記事</h2>
          <div className="mt-3 space-y-2">
            <TrackedExternalLink
              href="https://note.com/mild_quail6092/n/n44b9de8bf4b7"
              eventName="note_click"
              page="kaigo"
              position="intro"
              itemId="note-compare"
              className="block rounded-md border border-card-border bg-background px-3 py-2 text-sm font-bold hover:border-primary/40"
            >
              単品・セット・総合パックの選び方
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://note.com/mild_quail6092/n/n268e0eca58c4"
              eventName="note_click"
              page="kaigo"
              position="intro"
              itemId="note-faq"
              className="block rounded-md border border-card-border bg-background px-3 py-2 text-sm font-bold hover:border-primary/40"
            >
              PDF・ExcelテンプレートFAQ
            </TrackedExternalLink>
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-lg border border-card-border bg-card-bg p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">無料ツール</p>
            <h2 className="text-xl font-bold">家族で話し合う前に数字と確認項目を整理する</h2>
          </div>
          <a
            href="https://net-toolbox.jp/tools?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-primary hover:underline"
          >
            ネットツールボックスを見る
          </a>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {[
            ["kaigo-cost-share", "介護費用分担", "毎月の介護費用を家族でどう分けるか試算"],
            ["kaigo-hospital-checklist", "入退院準備", "入院・退院・介護認定の確認リストを生成"],
            ["kaigo-facility-compare", "施設費用比較", "候補施設の月額と総額を比較"],
            ["kaigo-family-role-share", "役割分担", "きょうだい間の担当案を整理"],
            ["kaigo-emergency-info", "緊急メモ", "連絡先・服薬・支払い確認項目を作成"],
            ["kaigo-care-certification-memo", "介護認定申請", "相談前の生活状況と調査前メモを整理"],
            ["kaigo-distance-care-travel-memo", "遠距離介護", "交通費と遠方でも担える役割を整理"],
          ].map(([slug, title, desc]) => (
            <TrackedExternalLink
              key={slug}
              href={`https://net-toolbox.jp/tools/${slug}?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools`}
              eventName="toolbox_click"
              page="kaigo"
              position="free_tool_grid"
              itemId={slug}
              className="block rounded-md border border-card-border bg-background p-3 hover:border-primary/40"
            >
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
            </TrackedExternalLink>
          ))}
        </div>
      </section>

      <KaigoDiagnosis />

      <section className="mt-8 rounded-lg border border-card-border bg-card-bg p-5">
        <h2 className="text-xl font-bold">このページの使い方</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          {[
            ["1", "今の状況を選ぶ"],
            ["2", "最初にやることを確認"],
            ["3", "無料noteで判断材料を見る"],
            ["4", "必要なテンプレートだけ購入"],
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
