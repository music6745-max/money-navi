import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-wall-decoration-paper-items-record";
const title = "高齢親の家の壁飾り・紙ものまわりメモ";
const description =
  "額縁、賞状、写真立て、カレンダー、ポスターなど、壁や柱に掛けられていた紙ものを家族内で見返すためのメモです。氏名・受賞歴・写真の中身・鑑定・相続評価などの判断とは分けて、呼び方や置かれていた場所だけを残します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383442?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-wall-decoration-paper-items-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-wall-decoration-paper-items-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_wall_decoration_paper_items";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-wall-decoration-paper-items-record&utm_content=full_pack";

const faqItems = [
  {
    question: "壁飾り・紙ものまわりメモには何を書きますか？",
    answer:
      "額縁、賞状、写真立て、カレンダー、ポスターなどについて、家族内の呼び方、置かれていた場所、見た目、親が話してくれた由来を短く残します。氏名、受賞歴、写真の中身、鑑定、相続評価、処分判断は扱いません。",
  },
  {
    question: "賞状や写真の内容確認にも使えますか？",
    answer:
      "使いません。このメモは、壁や柱に掛けられていた紙ものを家族の思い出として見返すための控えです。個人情報、写真の中身、受賞歴、学校名、団体名、評価額などは、別の確認手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールは、その場で短いメモを作るための簡易版です。BOOTH版はPDFとExcelで、複数の部屋や紙ものを印刷・一覧化しやすい形にしています。",
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

export default function ParentHomeFamilyWallDecorationPaperItemsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の紙ものメモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、壁や柱に残っていた紙ものを見返しやすくする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          額縁や写真立て、賞状、カレンダーは、親の家では同じ場所に長く掛けられていることがあります。
          ただし、そこに書かれた個人名や写真の中身まで書き出すと、保管や共有の負担が増えます。
          まずは呼び方、置かれていた場所、家族で見たときの印象だけを短く残して、次に見返す人が迷わないようにします。
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
            itemId="p88"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">見たものの記録と、扱いを決める情報を分ける</h2>
        <p>
          P88で扱うのは、玄関、廊下、茶の間、座敷、寝室などの壁や柱に掛けられていた紙ものです。
          額縁の色、写真立ての形、賞状や紙のざっくりした種類、カレンダーやポスターの置き場所を、家族で通じる言葉に直しておきます。
          どの紙が重要か、どのように保管するかを決める前に、まず「何がどこにあったか」を軽くそろえるためのページです。
        </p>
        <p>
          氏名、受賞歴、学校名、団体名、写真の人物、連絡先、評価額、売却、譲渡、廃棄などの内容は入力しない前提です。
          必要な確認や判断は別の手順に分け、このページでは家族内で見返すための思い出メモとして残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">親が話してくれた呼び方だけでも、次の会話につながる</h2>
        <p>
          壁に掛かった紙ものは、毎日見ていたのに名前が分からないことがあります。
          「玄関の黒い額」「茶の間の古い写真立て」「柱の横の賞状」のような呼び方を残しておくと、次に帰省したときや家族で写真を見返すときに話しやすくなります。
        </p>
        <p>
          親が「これは昔からあった」「この部屋に置いていた」と話してくれた言葉があれば、そのまま短く書きます。
          詳細を無理に埋める必要はありません。分かる範囲だけを残すことで、家族内の共有メモとして使いやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、玄関・廊下、茶の間・座敷・寝室、家族内の呼び方、親が話してくれた由来、更新記録をPDFとExcelで控えられます。
          まとめて整える場合は、全テンプレートのフルパックも利用できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p88"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P88単品を見る
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
