import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-eyeglasses-cases-record";
const title = "高齢親の家の老眼鏡・眼鏡ケースまわりメモ";
const description =
  "老眼鏡、眼鏡ケース、眼鏡置き、眼鏡ふきの布などを家族内で見返すためのメモです。視力判断、検眼、処方、度数管理、眼科医療、買い替え、修理、鑑定、買取、相続評価とは分けて、置き場所、見た目、家族内の呼び方、親が話してくれた由来を残します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383449?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-eyeglasses-cases-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-eyeglasses-cases-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_eyeglasses_cases";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-eyeglasses-cases-record&utm_content=full_pack";

const faqItems = [
  {
    question: "老眼鏡・眼鏡ケースまわりメモには何を書きますか？",
    answer:
      "老眼鏡、眼鏡、眼鏡ケース、眼鏡置き、眼鏡ふきの布について、置かれていた場所、見た目、家族内の呼び方、親が話してくれた由来、次に見返すことを短く残します。視力判断、検眼、処方、度数管理、眼科医療、買い替え、修理、鑑定、買取、相続評価は扱いません。",
  },
  {
    question: "度数や処方、買い替えの判断にも使えますか？",
    answer:
      "使いません。このメモは、家族で見てきた眼鏡まわりの物を思い出として控えるためのものです。視力、度数、処方、検眼、眼科医療、買い替え、修理などの確認は別の手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールは、その場で短い家族内メモを作るための簡易版です。BOOTH版はPDFとExcelで、複数の眼鏡やケースを印刷、一覧化しやすい形にしています。",
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

export default function ParentHomeFamilyEyeglassesCasesRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の眼鏡まわりメモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、家に残っていた眼鏡まわりを見返しやすくする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          実家の茶の間、寝室、洗面所、玄関、引き出しには、老眼鏡、眼鏡ケース、眼鏡置き、眼鏡ふきの布が長く置かれていることがあります。
          ただし、度数や買い替えの話と一緒にすると、家族で見返したい呼び方や由来が埋もれやすくなります。
          まずは、置かれていた場所、見た目、親が話してくれたことだけを控えます。
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
            itemId="p92"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">思い出の記録と、判断が必要なことを分ける</h2>
        <p>
          P92で扱うのは、老眼鏡、眼鏡、眼鏡ケース、眼鏡置き、眼鏡ふきの布などです。
          「茶の間の眼鏡」「枕元の老眼鏡」「黒いケースの眼鏡」のように、家族だけに通じる呼び方をそのまま残します。
          正式な型番や度数を調べるページではありません。
        </p>
        <p>
          視力判断、検眼、処方、度数管理、眼科医療、買い替え、修理、鑑定、買取、相続評価、個人情報、決済情報は、このメモでは扱いません。
          必要な確認は別の手順に分け、このページでは家族で見返すための記録として残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「どこにあったか」だけでも記憶をたどりやすい</h2>
        <p>
          眼鏡やケースは、場所と一緒に覚えていることがあります。
          茶の間、寝室、洗面所、玄関、引き出し、タンス、棚の上、枕元など、ざっくりした場所だけでも、次に帰省した家族が同じ物を見返しやすくなります。
        </p>
        <p>
          由来が分からない場合は、無理に埋める必要はありません。「昔から電話台にあった」「新聞を読む時に使っていた」「親がいつもの眼鏡と呼んでいた」など、分かる範囲の言葉を残すだけで十分です。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、置かれていた場所、家族内の呼び方、見た目、親が話してくれたこと、次に見返すことをPDFとExcelで控えられます。
          まとめて整理する場合は、全テンプレートのフルパックも利用できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p92"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P92単品を見る
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
