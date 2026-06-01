import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-written-note-sticky-message-record";
const title = "高齢親の家族向け書き置き・付箋・伝言を家族内で控える方法";
const description =
  "高齢親が家のなかで家族向けに書いていた書き置き・付箋・伝言を、家族外への公開や判断に使わず、家族内で見返す軽いメモとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383369?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-written-note-sticky-message-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-written-note-sticky-message-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_written_note_sticky_message";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-written-note-sticky-message-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/ned1d18d67850";

const faqItems = [
  {
    question: "書き置き・付箋・伝言メモには何を書けばよいですか？",
    answer:
      "見た日、見た場所、書かれていた内容の要約、親らしい言い方、家族内で思い出すための短いメモを書きます。逐語で正確に写す必要はなく、家族向けに書かれていた範囲だけを控えます。",
  },
  {
    question: "字の癖や書き間違いから健康状態や本心を判断できますか？",
    answer:
      "できません。このメモは家族内で書き置きを見返すための控えです。字の癖、書き間違い、本心、健康状態、記憶力、家族間の正しさを判断する用途には使いません。",
  },
  {
    question: "連絡先や暗証番号などが書かれている場合も写してよいですか？",
    answer:
      "書き写さないでください。住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵の所在、防犯コード、第三者の連絡先は、このメモにまとめない前提です。",
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

export default function ParentHomeWrittenNoteStickyMessageRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">書き置き・付箋メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、見た範囲だけ控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          冷蔵庫の付箋、食卓のメモ用紙、玄関の伝言ノート、カレンダーの余白など、親が家族向けに書いていた範囲だけを
          家族内で見返す控えにします。分かる範囲でよく、要約でも空欄が残っても使えます。
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
            itemId="p70"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">場所、場面、言い方を分けて残す</h2>
        <p>
          書き置きは、場所や場面と一緒に残すと見返しやすくなります。たとえば「冷蔵庫の扉」「食卓のメモ用紙」
          「買い物の頼みごと」「季節のひとこと」のように、家族内で通じる呼び方で十分です。
        </p>
        <p>
          「ご飯炊いておいたよ」「お風呂沸いてるよ」「お醤油買っておいて」のような短い文でも、
          家族内であとから思い出す手がかりになります。正しさを決めるより、見た範囲を軽く残すことを優先します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">分析、公開、秘密情報の集約には使わない</h2>
        <p>
          このメモは、家族内で見返すための控えです。親の本心、字の癖、書き間違い、健康状態、記憶力、所有や処分、
          著作権、家族外への公開や投稿、出版・取材の判断には使いません。
        </p>
        <p>
          住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵の所在、防犯コード、
          第三者の連絡先は書き写さず、必要な場合は別の安全な保管場所で家族内管理に分けます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、書き置き・付箋一覧、伝言・お知らせ、書き方の癖、季節のひとこと、家族内更新記録を
          PDFとExcelで同じ粒度にそろえられます。ほかの実家まわりの控えメモと一緒に整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p70"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P70単品を見る
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
