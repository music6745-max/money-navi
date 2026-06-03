import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-reading-newspaper-magazine-record";
const title = "高齢親の読書・新聞・雑誌メモを家族で控える方法";
const description =
  "親がよく読む本、新聞、雑誌、好きな作家やテーマを、本選びや契約判断ではなく家族内の会話の手がかりとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383152?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-reading-newspaper-magazine-record&utm_content=single_template";
const noteUrl =
  "https://note.com/mild_quail6092/n/n0e07d3eb40cf?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-reading-newspaper-magazine-record";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-reading-newspaper-magazine-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_reading_newspaper_magazine";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-reading-newspaper-magazine-record&utm_content=full_pack";

const faqItems = [
  {
    question: "読書・新聞・雑誌メモには何を書けばよいですか？",
    answer:
      "親がよく読んでいる本の名前、新聞や雑誌の名前、好きな作家やテーマ、話題にしやすいこと、次に聞いてみたいことを短く書きます。",
  },
  {
    question: "本選びや新聞契約、購入判断に使えますか？",
    answer:
      "使えません。このメモは家族内で会話の手がかりを残すための控えです。購入、契約、解約、定期購読、出版状況の確認、本の評価判断には使いません。",
  },
  {
    question: "本文の引用や個人情報を書いてもよいですか？",
    answer:
      "書かないでください。本や記事の本文、長い引用、住所、電話番号、会員番号、支払い情報、アカウント情報、健康状態や認知機能の判断は扱いません。",
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
    publishedTime: "2026-06-03",
  },
};

export default function ParentReadingNewspaperMagazineRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-03"
        dateModified="2026-06-03"
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の会話メモ</span>
          <span>公開: 2026-06-03</span>
          <span>確認: 2026-06-03</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、最近読んでいるものを控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省や電話で、本、新聞、雑誌の話が出ても、あとる書名や紙名を思い出せないこがあります。
          細かい読書記録ではなく、家族が「あの話を聞いてみよう」と思い出せる短い控えにします。
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
            itemId="p111"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">本、新聞・雑誌、作家・テーマを分ける</h2>
        <p>
          「時代小説のシリーズを読んでいる」「毎朝、新聞をひととおり見ている」「日曜の書評欄の話が出る」
          といった控えは、家族が連絡するときの入口になります。本、新聞・雑誌、作家やテーマ、会話前に見返すことを
          分けると、次に見る人が使いやすくなります。
        </p>
        <p>
          書名や紙名は、親が話していた呼び方でかまいません。正確な出版情報を集めるより、家族内で思い出せる粒度に
          そろえておくことを優先します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">購入、契約、評価判断には使わない</h2>
        <p>
          このメモは、本を選ぶための断定材料、新聞や雑誌の契約確認、購入や解約の判断、書評や評価の記録には使いません。
          差し入れの控えを書く場合も、家族内で「以前何を渡したか」を見返す程度に留めます。
        </p>
        <p>
          本文や記事の長い引用、会員番号、支払い情報、アカウント情報、住所や電話番号も書かないでください。
          読んでいる内容から健康状態や認知機能を判断する用途にも使いません。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、よく読む本、新聞・雑誌、好きな作家やテーマ、差し入れ控え、更新記録をPDFとExcelで
          同じ粒度にそろえられます。作成背景を読みたい場合はnote記事、ほかの実家まわりの控えとまとめたい場合は
          フルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p111"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P111姘品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={noteUrl}
            eventName="note_click"
            page={slug}
            position="bottom_note"
            itemId="p111_note"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            note記事を読む
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
