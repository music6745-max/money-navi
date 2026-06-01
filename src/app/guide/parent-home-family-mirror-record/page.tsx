import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-mirror-record";
const title = "高齢親の家の鏡まわりメモ";
const description =
  "姿見、洗面鏡、鏡台の鏡、小さな壁掛け鏡など、親の家で家族が長年見てきた鏡について、美容や健康観察、修理・査定・処分判断ではなく、家族内の呼び方、置いてあった場所、親が話してくれたことを残すための整理メモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383419?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-mirror-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/nfaffa2f2fcf7";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-mirror-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_mirror";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383420?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-mirror-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-mirror-record&utm_content=full_pack";

const faqItems = [
  {
    question: "鏡まわりのメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、置いてあった場所、家族が見てきた場面、親が話してくれた由来、次に写真で残したいことを短く書きます。美容、健康観察、修理、査定、処分の判断欄ではありません。",
  },
  {
    question: "手鏡やコンパクト鏡も対象ですか？",
    answer:
      "このページでは、家の中で家族みんなが長年見てきた姿見、洗面鏡、鏡台の鏡、小さな壁掛け鏡を中心にします。持ち歩く手鏡やコンパクト鏡は、個人の持ち物メモに分けると混ざりにくくなります。",
  },
  {
    question: "美容や健康確認にも使いますか？",
    answer:
      "使いません。顔色、肌、姿勢、身長体重、老化の変化、認知や健康の観察、化粧や見た目の評価は書かず、家族内の呼び方と記憶だけに絞ります。",
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

export default function ParentHomeFamilyMirrorRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の鏡メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族内の呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省したときに「玄関の姿見」「洗面所の白い鏡」のような言い方が家族ごとに少し違うと、
          写真や片付けの前に話がずれやすくなります。無料メモでは、呼び方、場所、見てきた場面だけを短く整理できます。
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
            itemId="p81"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">鏡そのものではなく、家族で通じる記憶を残す</h2>
        <p>
          P81で扱うのは、姿見、洗面鏡、鏡台の鏡、小さな壁掛け鏡など、家の中で長く目にしてきた鏡です。
          正しい品名、価値、修理方法、処分方法を調べるためのページではありません。
          「玄関を入って右の姿見」「母が鏡台の前でよく話していた鏡」のように、家族内で思い出しやすい言葉に絞ります。
        </p>
        <p>
          鏡は出かける前、洗面所、寝室、茶の間など、家族の生活場面と結びつきやすいものです。
          まず同じ鏡を指せる状態にしておくと、次回の帰省や親族の集まりで写真や思い出を確認しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">美容、健康観察、修理や価値判断とは分けて書く</h2>
        <p>
          鏡まわりの話は、美容、身だしなみ、健康観察、修理、処分、譲渡、相続、費用の話につながることがあります。
          このメモはそれらを決めるためのものではなく、家族内で見返す控えです。
          迷う内容は「次に確認すること」に分け、判断や手続きは必要に応じて別の場で確認します。
        </p>
        <p>
          顔色、肌、姿勢、身長体重、老化の変化、認知や健康の観察、化粧や見た目の評価、メーカー名、型番、修理店、
          住所、電話番号、見積もり、所有や相続に関わる情報は入れない設計にしています。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、玄関・洗面所・廊下の姿見や洗面鏡、茶の間・居間・台所の鏡、鏡台・寝室・洋間の鏡、
          親が話してくれた由来、家族内更新記録をPDFとExcelでそろえられます。
          noteには、帰省時に家の中を歩きながら短く書き出す使い方の案を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p81"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P81単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s81"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S81まとめセットを見る
          </TrackedExternalLink>
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            noteの案内を見る
          </a>
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
