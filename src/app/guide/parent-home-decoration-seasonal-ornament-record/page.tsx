import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-decoration-seasonal-ornament-record";
const title = "高齢親の家の飾りもの・置きもの・季節飾りを家族内で控える方法";
const description =
  "高齢親が家のなかで日常や季節の節目に飾ってきた飾りもの・置きもの・季節飾りを、鑑定・処分・作法の判断に使わず、家族内で見返す軽いメモとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383373?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-decoration-seasonal-ornament-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-decoration-seasonal-ornament-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_decoration_seasonal_ornament";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-decoration-seasonal-ornament-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/naafd1f35f4f6";

const faqItems = [
  {
    question: "飾りもの・置きもの・季節飾りメモには何を書けばよいですか？",
    answer:
      "見た日、場所、飾っていたもの、季節や場面、親が呼んでいた名前、家族内で思い出すための短いメモを書きます。網羅や正確な分類より、家族内であとから意味が通じる控えを優先します。",
  },
  {
    question: "鑑定・査定・処分・相続・宗教作法の判断に使えますか？",
    answer:
      "使えません。このメモは家族内で飾り方や思い出を見返すための控えです。価値、真贋、所有、処分、形見分け、宗教的な作法、インテリアの良し悪しを判断する用途には使いません。",
  },
  {
    question: "連絡先や鍵の所在なども一緒に書いてよいですか？",
    answer:
      "書かないでください。住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵の所在、防犯コード、第三者の連絡先は、このメモにまとめない前提です。",
  },
];

export const metadata: Metadata = {
  title: title + " | " + siteConfig.name,
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

export default function ParentHomeDecorationSeasonalOrnamentRecordPage() {
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
          { name: "ガイド", url: siteConfig.url + "/guide" },
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">飾りものメモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家のなかで見た範囲だけ控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          玄関の花、棚の置きもの、壁の額、正月用品、お雛さま、クリスマス飾りなどを、見た範囲で短く控えます。
          空欄があっても問題ありません。家族内で「あれはここにあった」と思い出せる手がかりに絞ります。
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
            itemId="p71"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">飾り方を決めるより、親の暮らしの手がかりを残す</h2>
        <p>
          飾りものは、家族にとっては「玄関にいつもこの花があった」「季節の節目にこの人形を出していた」といった
          小さな記憶の入口になります。品名や由来があいまいでも、置いていた場所、出していた季節、親が呼んでいた名前を残すだけで、
          次に見返す家族が思い出しやすくなります。
        </p>
        <p>
          正しい飾り方や整理方法を決めるためではなく、家族内で意味が通じる控えとして残します。
          兄弟姉妹で記憶が違う場合は、どちらかを正解にせず「そう覚えている人がいる」と分かる形で並べておくのが安全です。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">鑑定・処分・作法・秘密情報の集約には使わない</h2>
        <p>
          このメモは家族内で見返すための控えです。飾りものの市場価値、真贋、所有、処分、形見分け、宗教的な作法、
          インテリアの良し悪しを判断するための資料にはしません。必要な判断は、本人や家族で確認し、必要に応じて公的窓口や専門家に相談します。
        </p>
        <p>
          住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵の所在、防犯コード、
          第三者の連絡先は書かず、必要な場合は別の安全な保管場所で家族内管理に分けます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、飾っていたもの、場所、季節、親が呼んでいた名前、家族内メモ、次に見返すことを
          PDFとExcelで同じ粒度にそろえられます。ほかの実家まわりの控えメモと一緒に整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p71"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P71単品を見る
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
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            無料記事を読む
          </a>
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
