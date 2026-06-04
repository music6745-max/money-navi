import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-favorite-food-snacks-drinks-record";
const title = "高齢親の好きな食べ物・お菓子・飲み物を家族で控える方法";
const description =
  "親が会話で話していた食べ物、お菓子、飲み物の好みを、食事判断や購入判断ではなく家族内の会話メモとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383158?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-favorite-food-snacks-drinks-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n3d9e371ab5ff";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-favorite-food-snacks-drinks-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_favorite_food_snacks_drinks";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-favorite-food-snacks-drinks-record&utm_content=full_pack";

const faqItems = [
  {
    question: "好きな食べ物・お菓子・飲み物メモには何を書けばよいですか？",
    answer:
      "親が会話で話していた好きな食べ物、お菓子、飲み物、季節や場面、家族内で思い出しやすい一言を控えます。食事量や健康状態の管理には使いません。",
  },
  {
    question: "食事管理や健康判断に使えますか？",
    answer:
      "使えません。このメモは、家族内で会話や差し入れ前の話題を思い出すための控えです。食事制限、アレルギー、服薬、栄養、体調などの判断は専門職や施設の確認と分けてください。",
  },
  {
    question: "施設への持ち込みや購入判断に使えますか？",
    answer:
      "使えません。施設への持ち込み可否、購入内容、量、頻度、保存方法は、それぞれのルールや家族の確認が必要です。このメモには確定判断を書かず、好みの傾向だけを残します。",
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

export default function ParentFavoriteFoodSnacksDrinksRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の会話メモ</span>
          <span>公開: 2026-06-04</span>
          <span>確認: 2026-06-04</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親の好みを短く控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省前や電話の前に「この話題なら喜んで話していた」と思い出せるように、好きな食べ物、お菓子、
          飲み物を家族内の会話メモとして残します。食事管理、購入判断、施設への持ち込み判断とは分けて使います。
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
            itemId="p114"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">食べ物、お菓子、飲み物を分けて残す</h2>
        <p>
          「昔から好きな煮物」「季節になると話す果物」「お茶の時間に出てきたお菓子」「よく飲んでいた飲み物」
          のように、家族が会話のきっかけとして思い出せる粒度で控えます。
        </p>
        <p>
          銘柄や購入先を細かく指定する必要はありません。本人が話していた範囲、家族が見た範囲だけを短く残し、
          迷った内容は「次に聞いてみること」として分けておきます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">食事制限や購入判断とは切り分ける</h2>
        <p>
          好きなもののメモは、食べてよいもの、避けるもの、量、頻度、栄養、服薬、アレルギー、体調を判断する表ではありません。
          そうした確認が必要な場合は、家族内の記憶だけで決めず、本人、施設、医療・介護の担当者の確認と分けて扱います。
        </p>
        <p>
          差し入れや購入を前提にしないことで、メモの目的がぶれにくくなります。まずは会話の手がかりとして、
          好みの傾向、季節、場面、親が話した一言を残します。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートとnote記事も用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、食べ物、お菓子、飲み物、季節・場面メモ、家族内の確認欄をPDFとExcelでそろえられます。
          note記事では、メモを作る前に目的を絞る考え方も確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p114"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P114単品を見る
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
          <TrackedExternalLink
            href={noteUrl}
            eventName="note_click"
            page={slug}
            position="bottom_note"
            itemId="p114_note"
            className="rounded-md border border-card-border px-4 py-2 text-sm font-bold text-foreground hover:border-primary"
          >
            note記事を見る
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
