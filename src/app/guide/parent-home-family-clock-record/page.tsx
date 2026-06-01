import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-clock-record";
const title = "高齢親の家の時計まわりメモ";
const description =
  "掛け時計、柱時計、置き時計、目覚まし時計など、親の家で家族が長年見てきた時計について、正式な価値や修理判断ではなく、家族内の呼び方、置いてあった場所、親が話してくれたことを残すための整理メモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383414?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-clock-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/nc10ac2875e3f";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-clock-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_clock";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383417?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-clock-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-clock-record&utm_content=full_pack";

const faqItems = [
  {
    question: "時計まわりのメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、置いてあった場所、家族が見てきた場面、親が話してくれた由来、次に写真で残したいことを短く書きます。修理、査定、処分、相続の判断欄ではありません。",
  },
  {
    question: "腕時計やキッチンタイマーも対象ですか？",
    answer:
      "このページでは、家の中で家族みんなが長年見てきた掛け時計、柱時計、置き時計、目覚まし時計を中心にします。腕時計や携帯品、調理用タイマーは別の持ち物や台所道具のメモに分けると混ざりにくくなります。",
  },
  {
    question: "メーカー名や修理店の連絡先を書きますか？",
    answer:
      "書かない前提です。メーカー名、型番、修理店、電話番号、住所、見積もり、所有や相続に関わる情報は別管理にし、このメモでは家族内で共有しやすい呼び方と記憶だけに絞ります。",
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

export default function ParentHomeFamilyClockRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の時計メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族内の呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省したときに「茶の間の丸い時計」「台所から見える白い時計」のような言い方が家族ごとに少し違うと、
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
            itemId="p80"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">時計そのものではなく、家族で通じる記憶を残す</h2>
        <p>
          P80で扱うのは、掛け時計、柱時計、置き時計、目覚まし時計など、家の中で長く目にしてきた時計です。
          正しい品名、年代、価値、修理方法を調べるためのページではありません。
          「台所からも見えた時計」「祖父がよくねじを巻いていた時計」のように、家族内で思い出しやすい言葉に絞ります。
        </p>
        <p>
          時計は場所や時間の記憶と結びつきやすいため、片付けや写真整理の段階で急に話題になります。
          そのときに判断を急がず、まず家族内で同じものを指せる状態にしておくと、次回の帰省や親族の集まりで確認しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">修理、処分、価値判断とは分けて書く</h2>
        <p>
          時計まわりの話は、電池交換、修理、処分、譲渡、相続、費用の話につながることがあります。
          このメモはそれらを決めるためのものではなく、家族内で見返す控えです。
          迷う内容は「次に確認すること」に分け、判断や手続きは必要に応じて別の場で確認します。
        </p>
        <p>
          メーカー名、型番、修理店、住所、電話番号、見積もり、所有や相続に関わる情報は入れない設計にしています。
          外部に渡す資料ではなく、帰省時の短い会話から続けられる家族内メモとして使います。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、茶の間・居間・台所の時計、玄関・廊下・寝室の時計、置き時計や目覚まし時計、
          親が話してくれた由来、家族内更新記録をPDFとExcelでそろえられます。
          noteには、帰省時に家の中を歩きながら短く書き出す使い方の案を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p80"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P80単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s80"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S80まとめセットを見る
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
