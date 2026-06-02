import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-old-toys-dolls-record";
const title = "高齢親の家の古いおもちゃ・人形まわりメモ";
const description =
  "ぬいぐるみ、人形、木のおもちゃ、ブリキ玩具、積み木、ボードゲームなど、長年置かれていた古いおもちゃを家族内で見返すためのメモです。価値判断、修理、処分、譲渡、衛生面の最終判断とは分けて、呼び方や置かれていた場所だけを残します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383445?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-old-toys-dolls-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-old-toys-dolls-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_old_toys_dolls";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-old-toys-dolls-record&utm_content=full_pack";

const faqItems = [
  {
    question: "古いおもちゃ・人形まわりメモには何を書きますか？",
    answer:
      "ぬいぐるみ、人形、木のおもちゃ、ブリキ玩具、積み木、ボードゲームなどについて、家族内の呼び方、置かれていた部屋、見た目、親が話してくれた由来を短く残します。価値判断、修理、処分、譲渡、相続、衛生面の最終判断は扱いません。",
  },
  {
    question: "人形の供養や処分の判断にも使えますか？",
    answer:
      "使いません。このメモは、家族で見てきた物を思い出として控えるためのものです。供養、処分、譲渡、売却、形見分け、相続、保管方法の判断は別の確認手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールは、その場で短い家族内メモを作るための簡易版です。BOOTH版はPDFとExcelで、複数の部屋やおもちゃ・人形を印刷・一覧化しやすい形にしています。",
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
    publishedTime: "2026-06-02",
  },
};

export default function ParentHomeFamilyOldToysDollsRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-02"
        dateModified="2026-06-02"
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内のおもちゃ・人形メモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、家に残っていたおもちゃや人形を見返しやすくする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          実家には、子どもの頃から見てきたぬいぐるみや人形、棚や押し入れに残っていた古いおもちゃがあることがあります。
          ただし、価値や扱いを決めようとすると話が重くなりやすいものです。
          まずは家族内の呼び方、置かれていた場所、見た目だけを短く残し、次に見返す人が同じ物を思い出しやすい形にします。
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
            itemId="p89"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">物としての記録と、扱いを決める情報を分ける</h2>
        <p>
          P89で扱うのは、茶の間、座敷、寝室、押し入れ、天袋、戸棚などに長年置かれていた古いおもちゃや人形です。
          「茶の間の熊」「押し入れの人形」「古い積み木」のように、家族だけに通じる呼び方をそのまま残します。
          正式な商品名やメーカー名を調べるためのページではありません。
        </p>
        <p>
          価値、鑑定、修理、買い替え、寄付、廃棄、譲渡、形見分け、相続、供養、子どもに渡すかどうか、衛生面の最終判断は入力しない前提です。
          必要な判断は別の確認手順に分け、このページでは家族内で見返すための思い出メモとして残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">親が話してくれた呼び方だけでも、家族内で共有しやすくなる</h2>
        <p>
          古いおもちゃや人形は、誰の物だったか、どこから来た物だったかを家族で覚えている範囲が違うことがあります。
          「昔から座敷にあった」「この人形は箱の中にしまっていた」といった親の言葉を、分かる範囲だけ短く控えます。
        </p>
        <p>
          詳細を無理に埋める必要はありません。空欄のままでも、呼び方と場所が残っていれば、帰省時や実家整理の前後に同じ物を見返しやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、茶の間・座敷・寝室、押し入れ・戸棚、家族内の呼び方、親が話してくれた由来、更新記録をPDFとExcelで控えられます。
          まとめて整える場合は、全テンプレートのフルパックも利用できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p89"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P89単品を見る
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
            href={toolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            無料ツールを開く
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
