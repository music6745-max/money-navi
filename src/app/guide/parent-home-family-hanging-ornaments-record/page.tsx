import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-hanging-ornaments-record";
const title = "高齢親の家のつり下げ飾りまわりメモ";
const description =
  "風鈴、つるし飾り、提灯、暖簾飾り、つるし雛など、天井や鴨居から吊り下げられていた飾りを家族内で見返すためのメモです。火気、取り付け、落下対策、修理、処分、宗教や行事の判断とは分けて、呼び方、場所、見た目、親が話してくれた由来を残します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383446?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-hanging-ornaments-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-hanging-ornaments-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_hanging_ornaments";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-hanging-ornaments-record&utm_content=full_pack";

const faqItems = [
  {
    question: "つり下げ飾りまわりメモには何を書きますか？",
    answer:
      "風鈴、つるし飾り、提灯、暖簾飾り、つるし雛などについて、家族内の呼び方、吊り下げられていた部屋や場所、見た目、親が話してくれた由来、次に見返すことを短く残します。火気、取り付け、落下対策、修理、処分、宗教や行事の判断は扱いません。",
  },
  {
    question: "安全確認や取り付け判断にも使えますか？",
    answer:
      "使いません。このメモは、家族で見てきた物を思い出として控えるためのものです。火気の扱い、取り付け強度、落下対策、修理、保管方法、処分、譲渡などの判断は別の確認手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールは、その場で短い家族内メモを作るための簡易版です。BOOTH版はPDFとExcelで、複数の部屋や飾りを印刷、一覧化しやすい形にしています。",
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

export default function ParentHomeFamilyHangingOrnamentsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内のつり下げ飾りメモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、家に残っていた吊り飾りを見返しやすくする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          実家の天井、鴨居、玄関、和室、窓まわりには、風鈴やつるし飾り、提灯、暖簾飾りなどが長く残っていることがあります。
          ただし、火気や取り付け、安全面、処分の話と一緒にすると、記録したい思い出が埋もれやすくなります。
          まずは家族内の呼び方、吊り下げられていた場所、見た目、親が話してくれたことだけを控えます。
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
            itemId="p90"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">飾りとしての記録と、判断が必要なことを分ける</h2>
        <p>
          P90で扱うのは、風鈴、つるし飾り、提灯、暖簾飾り、つるし雛など、天井や鴨居から吊り下げられていた飾りです。
          「玄関の風鈴」「和室の提灯」「鴨居のつるし飾り」のように、家族だけに通じる呼び方をそのまま残します。
          正式な名称や由来を調べるページではありません。
        </p>
        <p>
          火気、取り付け強度、落下対策、修理、保管方法、処分、譲渡、宗教や行事上の扱いは、このメモでは決めません。
          必要な判断は別の確認手順に分け、このページでは家族で見返すための記録として残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「どこにあったか」だけでも次の会話につながる</h2>
        <p>
          吊り下げられていた飾りは、置物よりも場所の記憶と結びついていることがあります。
          玄関、茶の間、仏間、窓際、鴨居、廊下など、ざっくりした場所だけでも、次に帰省した家族が同じ物を見返しやすくなります。
        </p>
        <p>
          由来が分からない場合は、無理に埋める必要はありません。「昔からあった」「夏に出していた」「親がこう呼んでいた」など、分かる範囲の言葉を残すだけで十分です。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、部屋ごとの吊り下げ飾り、家族内の呼び方、見た目、親が話してくれたこと、次に見返すことをPDFとExcelで控えられます。
          まとめて整理する場合は、全テンプレートのフルパックも利用できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p90"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P90単品を見る
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
