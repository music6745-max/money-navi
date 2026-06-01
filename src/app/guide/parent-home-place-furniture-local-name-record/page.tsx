import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-place-furniture-local-name-record";
const title = "高齢親の家の場所・部屋・家具の家族内呼び名を控える方法";
const description =
  "高齢親の家のなかで家族だけに通じてきた場所・部屋・家具・コーナーの呼び名を、正式名称や所有・処分の判断に使わず、家族内で見返す軽いメモとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383382?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-place-furniture-local-name-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-place-furniture-local-name-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_place_furniture_local_name";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-place-furniture-local-name-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/n408bed292180";

const faqItems = [
  {
    question: "場所・部屋・家具の家族内呼び名メモには何を書けばよいですか？",
    answer:
      "家族内で使ってきた呼び名、実際に指している場所や家具、呼んでいた人、聞いた日、由来や思い出の短いメモを書きます。正式名称を決めるより、家族内であとから意味が通じる控えを優先します。",
  },
  {
    question: "正式な部屋名、所有、処分、相続の判断に使えますか？",
    answer:
      "使えません。このメモは家族内で呼び名や思い出を見返すための控えです。建築上の正式名称、所有、処分、形見分け、相続、費用負担、家具の価値を判断する用途には使いません。",
  },
  {
    question: "住所や鍵の場所なども一緒に書いてよいですか？",
    answer:
      "書かないでください。住所、電話番号、口座、カード、契約番号、暗証番号、パスワード、鍵の所在、防犯コード、認証情報、第三者の連絡先は、このメモにまとめない前提です。",
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

export default function ParentHomePlaceFurnitureLocalNameRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内呼び名メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族だけに通じる呼び名を控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          「中の間」「茶箪笥のとこ」「お父さんの机の横」「縁側のとこ」など、家族内では通じるのに外から見ると分かりにくい呼び名があります。
          正式名称に直すより、誰がそう呼んでいたか、何を指していたかを短く残しておくと、あとで家族が見返しやすくなります。
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
            itemId="p73"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">正式名称ではなく、家族内での通じ方を残す</h2>
        <p>
          親の家では、部屋や家具に家族だけの呼び名が付いていることがあります。図面や片づけ記録には残らなくても、
          「あの棚」「裏の部屋」「おばあちゃんの鏡台の横」といった言い方が、家族の会話では大切な手がかりになります。
        </p>
        <p>
          呼び名が複数ある場合は、どれかを正解にせず並べて書きます。誰が使っていた呼び方か、どの場面で聞いたかを分けると、
          兄弟姉妹や親族であとから確認しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">所有・処分・相続・秘密情報の判断には使わない</h2>
        <p>
          このメモは、家のなかの場所や家具の呼び名を家族内で見返すための控えです。家具や部屋の所有、処分、形見分け、
          相続、費用負担、建物や家具の価値、正式な建築用語を判断する資料にはしません。必要な判断は本人や家族で話し合い、
          必要に応じて公的窓口や専門家に確認してください。
        </p>
        <p>
          住所、電話番号、口座、カード、契約番号、暗証番号、パスワード、鍵の所在、防犯コード、認証情報、第三者の連絡先は書かず、
          必要な場合は別の安全な保管場所で管理します。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、家族内の呼び名、指している場所・部屋・家具、呼んでいた人、聞いた日、由来、家族内メモ、次に見返すことを
          PDFとExcelで同じ粒度にそろえられます。ほかの実家まわりの控えメモと一緒に整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p73"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P73単品を見る
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
