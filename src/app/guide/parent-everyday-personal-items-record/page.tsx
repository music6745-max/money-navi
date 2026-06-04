import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-everyday-personal-items-record";
const title = "高齢親のいつもの身の回り品・お気に入り小物を家族で控える方法";
const description =
  "親がふだん使っている湯飲み、座布団、室内履き、帽子、ハンカチなどを、品の評価や整理判断ではなく家族内で見分ける手がかりとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383157?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-everyday-personal-items-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-everyday-personal-items-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_everyday_personal_items";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-everyday-personal-items-record&utm_content=full_pack";

const faqItems = [
  {
    question: "身の回り品・お気に入り小物メモには何を書けばよいですか？",
    answer:
      "親がいつも使っている湯飲み、茶碗、座布団、室内履き、帽子、ハンカチ、いつものバッグなどを、家族内で分かる呼び方と短い特徴で控えます。",
  },
  {
    question: "物の価値判断や処分判断に使えますか？",
    answer:
      "使えません。このメモは、家族が親のいつもの品を見分けやすくするための控えです。査定、売却、処分、整理、専門的な評価の判断には使いません。",
  },
  {
    question: "バッグや手帳の中身、個人情報を書いてもよいですか？",
    answer:
      "書かないでください。バッグや手帳そのものの外側の特徴だけに留め、中身、住所、電話番号、会員番号、支払い情報、暗証番号、アカウント情報は記録しません。",
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
    publishedTime: "2026-06-04",
  },
};

export default function ParentEverydayPersonalItemsRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-04"
        dateModified="2026-06-04"
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の生活メモ</span>
          <span>公開: 2026-06-04</span>
          <span>確認: 2026-06-04</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親のいつもの品を控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省後に「あの湯飲みはどれだったか」「いつもの座布団は何色だったか」を思い出せないことがあります。
          細かな管理表ではなく、家族が次に見返したときに親のいつもの一つを見分けやすくする短い控えにします。
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
            itemId="p113"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">食事まわり、くつろぎまわり、外出まわりに分ける</h2>
        <p>
          湯飲み、マグカップ、茶碗、箸、お盆などは食事まわり、座布団、クッション、ひざ掛け、室内履きなどは
          くつろぎまわり、帽子、ハンカチ、扇子、手帳、いつものバッグなどは外出まわりとして分けると見返しやすくなります。
        </p>
        <p>
          品名は正確でなくてもかまいません。「青い座布団」「縁が黒い湯飲み」「玄関横の帽子」のように、
          家族内で通じる呼び方と覚えている範囲の特徴を残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">評価、処分、専門判断とは分ける</h2>
        <p>
          このメモは、物の良し悪し、価値、売却、処分、将来の整理を決めるためのものではありません。
          親がふだん使っている品を、家族が次に見返すための現在進行の生活メモとして扱います。
        </p>
        <p>
          バッグや手帳は、外側の特徴だけを控えます。中身、住所、電話番号、会員番号、支払い情報、暗証番号、
          アカウント情報などの個人情報は書かないでください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、食事まわり、くつろぎまわり、外出まわり、特徴メモ、更新記録をPDFとExcelで
          同じ粒度にそろえられます。ほかの実家まわりの控えとまとめたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p113"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P113単品を見る
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
