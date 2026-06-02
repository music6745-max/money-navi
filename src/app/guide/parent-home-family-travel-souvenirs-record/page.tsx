import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-travel-souvenirs-record";
const title = "高齢親の家の旅行記念品・お土産物まわりメモ";
const description =
  "旅行先の置物、帰省のお土産、観光地の記念品、家族で出かけた時の小物などを家族内で見返すためのメモです。査定、売却、真贋、処分、税務、相続、旅行日程、同行者、宿泊先の判断とは分けて、呼び方、置き場所、見た目、親が話してくれた由来を残します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383448?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-travel-souvenirs-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-travel-souvenirs-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_travel_souvenirs";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-travel-souvenirs-record&utm_content=full_pack";

const faqItems = [
  {
    question: "旅行記念品・お土産物まわりメモには何を書きますか？",
    answer:
      "旅行先の置物、土産物、観光地の記念品、家族で出かけた時の小物について、家族内の呼び方、置かれていた場所、見た目、親が話してくれた由来、次に見返すことを短く残します。査定、売却、真贋、処分、税務、相続、旅行日程、同行者、宿泊先の判断は扱いません。",
  },
  {
    question: "価値や処分を決めるためにも使えますか？",
    answer:
      "使いません。このメモは、家族で見てきた物を思い出として控えるためのものです。価値、真贋、売却、譲渡、処分、税務、相続などの確認は別の手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールは、その場で短い家族内メモを作るための簡易版です。BOOTH版はPDFとExcelで、複数の記念品やお土産物を印刷、一覧化しやすい形にしています。",
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

export default function ParentHomeFamilyTravelSouvenirsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の旅行記念品メモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、家に残っていた旅行の記念品を見返しやすくする</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          実家の棚、床の間、引き出し、押し入れには、旅行先の置物、帰省のお土産、観光地の記念品、家族で出かけた時の小物が残っていることがあります。
          ただし、価値や処分の話と一緒にすると、家族で見返したい呼び方や由来が埋もれやすくなります。
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
            itemId="p91"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">思い出の記録と、判断が必要なことを分ける</h2>
        <p>
          P91で扱うのは、旅行先の置物、観光地のキーホルダー、土産物の小物、帰省やお出かけで持ち帰った記念品などです。
          「北海道の置物」「温泉のお土産」「棚の小さな人形」のように、家族だけに通じる呼び方をそのまま残します。
          正式名称や由来を調べるページではありません。
        </p>
        <p>
          査定、売却、真贋、処分、譲渡、税務、相続、輸入や通関、旅行日程、同行者、宿泊先は、このメモでは扱いません。
          必要な確認は別の手順に分け、このページでは家族で見返すための記録として残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「どこにあったか」だけでも記憶をたどりやすい</h2>
        <p>
          旅行記念品やお土産物は、場所と一緒に覚えていることがあります。
          床の間、茶の間の棚、玄関、引き出し、タンス、押し入れなど、ざっくりした場所だけでも、次に帰省した家族が同じ物を見返しやすくなります。
        </p>
        <p>
          由来が分からない場合は、無理に埋める必要はありません。「昔から棚にあった」「親が旅行の話をしていた」「帰省のたびに見ていた」など、分かる範囲の言葉を残すだけで十分です。
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
            itemId="p91"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P91単品を見る
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
