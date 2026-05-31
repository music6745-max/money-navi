import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-frequent-shops-living-area-record";
const title = "高齢親のよく行く店・生活圏メモを家族で共有する方法";
const description =
  "スーパー、薬局、理美容室、散歩先など、親がふだん立ち寄る場所と次に確認したいことを、判断材料ではなく家族の引き継ぎ用メモとして整理する方法をまとめます。";
const url = `${siteConfig.url}/guide/${slug}`;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383096?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-frequent-shops-living-area-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-frequent-shops-living-area-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_frequent_shops_living_area";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-frequent-shops-living-area-record&utm_content=full_pack";

const faqItems = [
  {
    question: "よく行く店・生活圏メモには何を書けばよいですか？",
    answer:
      "店名や場所の目印、何を買うことが多いか、いつ頃行くことが多いか、同行や送迎の控え、家族が次に確認したいことを短く残します。住所、電話番号、決済情報、会員番号などの細かい個人情報は書きすぎない前提で使います。",
  },
  {
    question: "親の外出判断や安全判断に使えますか？",
    answer:
      "使えません。このメモは家族が会話や引き継ぎをしやすくするための控えです。外出可否、移動方法、防犯、見守り、契約や支払いに関する判断は、本人と家族で確認し、必要に応じて関係先の正式な案内に従ってください。",
  },
  {
    question: "詳しい住所や支払い情報もまとめてよいですか？",
    answer:
      "共有メモには最小限の目印だけを残すのが安全です。住所、電話番号、会員番号、決済情報、ログイン情報、暗証番号、本人確認情報はこのメモにまとめず、必要な場合は別の正式な保管場所で管理してください。",
  },
];

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    publishedTime: "2026-06-01",
  },
};

export default function ParentFrequentShopsLivingAreaRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-01"
        dateModified="2026-06-01"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: title, url },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>{title}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">実家の控えメモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで生活圏を見える形にする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          親がよく行く店や場所は、本人には当たり前でも、離れて暮らす家族には思い出しにくい情報です。
          無料ツールでは、店・場所の種類、目印、よく買うもの、同行時の控え、次に確認することを同じ形式で整理できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={toolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            無料メモを作る
          </a>
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="hero_single_template"
            itemId="p63"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">店名よりも「家族が次に見返せる情報」に絞る</h2>
        <p>
          よく行く店の情報は、細かく集めすぎると更新が止まりやすくなります。店名、場所の目印、よく買うもの、
          いつ頃行くことが多いか、同行や送迎で気づいたこと、次に確認することに絞ると、あとで見返しやすくなります。
        </p>
        <p>
          このメモは、外出可否や移動方法を決めるためのものではありません。親本人との会話を始めやすくし、
          家族の間で同じ控えを見ながら確認できる状態を作るためのものです。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は生活の場面ごとに分ける</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>買い物: スーパー、ドラッグストア、商店街、よく買う定番品</li>
          <li>用事: 銀行や郵便局の利用有無ではなく、家族が次に確認する予定だけを記録</li>
          <li>身だしなみ: 理美容室、予約の控え、前回聞いた希望</li>
          <li>散歩・立ち寄り先: 公園、駅前、近所の目印など、家族が会話で確認しやすい範囲</li>
          <li>同行・送迎の控え: 誰が一緒に行ったか、次回確認すること</li>
          <li>書かない情報: 住所、電話番号、会員番号、決済情報、ログイン情報、暗証番号、本人確認情報</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">個人情報と判断が混ざらないようにする</h2>
        <p>
          生活圏のメモは、便利な一方で細かい個人情報を集めすぎると管理が難しくなります。
          共有する範囲は家族内に限定し、住所や支払い情報などは別の正式な保管場所で扱う前提にします。
        </p>
        <p>
          また、外出の可否、防犯、移動手段、契約や支払いの判断はこのメモで決めません。
          必要な内容は「次に本人へ確認すること」「家族で確認すること」として分けて残すと安全です。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、よく行く店、生活圏、同行時の控え、次に確認することを印刷・入力しやすい形で使えます。
          実家まわりの控えメモをまとめて整えたい場合は、関連テンプレートを含むフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p63"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P63単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={fullPackUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_full_pack"
            itemId="full_pack"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            フルパックを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-4 text-lg font-bold">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-bold">Q. {faq.question}</h3>
              <p className="mt-1 text-sm leading-7 text-muted">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
