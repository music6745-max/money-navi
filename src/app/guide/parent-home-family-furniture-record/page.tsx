import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-furniture-record";
const title = "高齢親の家の大型家具を家族で見返すメモ";
const description =
  "箪笥、茶箪笥、水屋、座卓、本棚、古い机や椅子など、親の家で長年使ってきた大型家具について、処分や査定の判断ではなく、家族内で呼び方、置き場所、由来、親が話していたことを残すための整理メモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383403?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-furniture-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n4323fa2c5a25";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-furniture-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_furniture";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-furniture-record&utm_content=full_pack";

const faqItems = [
  {
    question: "大型家具メモには何を書けばよいですか？",
    answer:
      "家族内で通じる家具の呼び方、置いてある部屋、親が話していた由来、よく使っていた場面、次に家族で確認したいことを書きます。価値判断、処分判断、売買判断を決める欄ではありません。",
  },
  {
    question: "処分や買取の判断表として使えますか？",
    answer:
      "使えません。このメモは家族で家具の背景を見返すための控えです。処分、買取、査定、搬出、作業安全、相続、契約に関する判断は、それぞれ別に確認してください。",
  },
  {
    question: "住所や業者名を書きますか？",
    answer:
      "書かない前提です。住所、電話番号、管理会社、業者名、本人確認情報などの個人情報や連絡先は入れず、家族内で共有しやすい呼び方と記憶だけに絞ります。",
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

export default function ParentHomeFamilyFurnitureRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の家具メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族だけに通じる家具の呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省したときに「この茶箪笥は誰が使っていたっけ」「水屋の中身ではなく、水屋そのものの話を残したい」と思っても、
          写真だけでは呼び方や背景が抜けやすくなります。家族で同じ言葉を使えるようにしておくと、次の帰省や親族の集まりで見返しやすくなります。
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
            itemId="p78"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">大型家具そのものの記憶に絞る</h2>
        <p>
          P78で扱うのは、箪笥、茶箪笥、水屋、座卓、本棚、古い机、古い椅子、棚など、家の中で長年使ってきた据え置きの家具です。
          食器や道具など中にしまってある物ではなく、家具そのものの呼び方、場所、親が使っていた場面、家族内で残したい由来に絞ります。
        </p>
        <p>
          たとえば「祖母から受け継いだ茶箪笥」「父が座って新聞を読んでいた座卓」「子どもの本が長く並んでいた本棚」のように、
          写真と一緒に見返したい短い言葉を残します。骨董価値や処分可否を決める表にしないことで、家族内で気軽に共有できます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">査定、搬出、相続のメモと混ぜない</h2>
        <p>
          大型家具は処分、搬出、買取、査定、相続の話題につながりやすいものです。このページのメモは、その判断をするためのものではありません。
          家族内で家具の背景を見返す控えとして、呼び方、部屋、由来、聞き書き、次に確認したいことだけを分けて残します。
        </p>
        <p>
          業者名、連絡先、住所、契約、本人確認情報は書かない設計にしています。外部に渡す書類ではなく、帰省時の短い会話から続けられる家族内メモとして使います。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、箪笥・茶箪笥・水屋、座卓・机・椅子・本棚、玄関・廊下・台所まわりの家具、親が話してくれた由来を、
          PDFとExcelで同じ考え方でそろえられます。noteには、帰省時に家具を見ながら短く書き出す使い方の案内を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p78"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P78単品を見る
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
