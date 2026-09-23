import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";
import { KaigoDiagnosis } from "./KaigoDiagnosis";

const pageTitle = "親のこと整理ナビ";
const pageDescription =
  "親の介護、お金、入院、施設選び、きょうだい分担で迷ったときに、無料ツールで状況を整理し、公的・専門窓口へ相談する準備ができる案内ページです。";

const faqItems = [
  {
    question: "親のこと整理ナビは何をするページですか？",
    answer:
      "親の介護やお金まわりで起きやすい状況を選ぶと、最初に確認すること、無料ツール、公的・専門窓口へ相談する前にまとめたい情報を整理して表示します。",
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
  {
    question: "介護の相談先が分からない場合は、どこへ連絡すればよいですか？",
    answer:
      "介護サービスの利用前や担当者が決まっていない場合は、お住まいの地域を担当する地域包括支援センター、または市区町村の介護保険・高齢者支援窓口へ相談してください。すでにサービスを利用している場合は担当ケアマネ、体調や服薬に関することは医療機関や薬局へ確認してください。",
  },
];

const supportContacts = [
  {
    title: "地域包括支援センター",
    description:
      "高齢者の暮らし、介護予防、認知症、家族の負担など、相談先に迷う段階から地域の制度や支援先について相談できます。",
    action: "親が住む地域を担当するセンターを市区町村へ確認",
  },
  {
    title: "市区町村の介護窓口",
    description:
      "要介護認定の申請、介護保険料、利用できる制度、申請書類や手続き期限は、介護保険・高齢者支援の担当窓口で確認します。",
    action: "住民票のある市区町村の公式サイトや代表電話で担当課を確認",
  },
  {
    title: "担当ケアマネ・利用中の事業所",
    description:
      "ケアプラン、サービスの追加・変更、利用日の調整、福祉用具や家族負担の相談は、担当ケアマネや利用中の事業所へ確認します。",
    action: "困っている場面と希望をメモして担当者へ共有",
  },
  {
    title: "医療機関・薬局などの専門窓口",
    description:
      "体調の変化、受診、服薬、退院後の生活は、かかりつけ医、病院の相談窓口、薬局などへ確認します。緊急時は地域の救急案内に従ってください。",
    action: "症状、発生時期、服薬状況、家族が見た変化を整理して相談",
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
        id="kaigo-support-contacts"
        className="mb-7 rounded-xl border border-card-border bg-card-bg p-5"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">公的・専門窓口</p>
            <h2 className="text-xl font-bold">相談内容に合う確認先を選ぶ</h2>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-muted">
            迷う場合は、まず親が住む地域の地域包括支援センターか、市区町村の介護窓口へ相談してください。
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {supportContacts.map((card) => (
            <article key={card.title} className="rounded-lg border border-card-border bg-background p-4">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{card.description}</p>
              <p className="mt-3 text-xs font-bold leading-relaxed text-primary">
                まずすること: {card.action}
              </p>
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
            ["4", "公的・専門窓口へ相談"],
          ].map(([step, label]) => (
            <div key={step} className="rounded-md border border-card-border bg-background p-3">
              <span className="text-xs font-bold text-primary">STEP {step}</span>
              <p className="mt-1 text-sm font-bold">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          個別の医療判断、税務判断、相続判断、契約判断は扱いません。無料ツールで家族の状況と質問を整理し、地域包括支援センター、市区町村、担当ケアマネ、医療機関などへ相談する前の準備に使うページです。
        </p>
      </section>
    </main>
  );
}
