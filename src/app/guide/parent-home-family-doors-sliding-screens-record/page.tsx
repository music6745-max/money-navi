import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-doors-sliding-screens-record";
const title = "高齢親の家の障子・襖・引き戸・畳まわりメモ";
const description =
  "障子、襖、板戸、引き戸、縁側、床の間、押し入れ、畳、板の間など、親の家で家族が長年触れてきた建具や室内の場所について、修理や改修の判断ではなく、家族内で呼び方、場所、使っていた場面、親が話していたことを残すための整理メモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383411?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-doors-sliding-screens-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/nd8756eecad97";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-doors-sliding-screens-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_doors_sliding_screens";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-doors-sliding-screens-record&utm_content=full_pack";

const faqItems = [
  {
    question: "障子や襖まわりのメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、部屋や場所、親がよく開け閉めしていた場面、家族で見返したい由来、次に写真で残したいことを書きます。修理、改修、処分の判断を決める欄ではありません。",
  },
  {
    question: "修理やリフォームの相談メモとして使えますか？",
    answer:
      "使えません。このメモは家族で記憶や呼び方を見返すための控えです。修理、改修、施工、安全確認、契約、費用、所有や相続に関する判断は、それぞれ別に確認してください。",
  },
  {
    question: "住所や業者名を書きますか？",
    answer:
      "書かない前提です。住所、電話番号、業者名、管理会社、本人確認情報などの個人情報や連絡先は入れず、家族内で共有しやすい呼び方と記憶だけに絞ります。",
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

export default function ParentHomeFamilyDoorsSlidingScreensRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の建具メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族だけに通じる呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省したときに「中の間の襖はどれのことだっけ」「縁側の引き戸の話を聞いたけれど写真だけでは思い出せない」となる前に、
          呼び方と場所を短く残しておくと、次に家族で見返すときに迷いにくくなります。
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
            itemId="p79"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">建具や室内の場所の記憶に絞る</h2>
        <p>
          P79で扱うのは、障子、襖、板戸、引き戸、縁側、床の間、押し入れ、畳、板の間など、
          家の中で家族が長年開け閉めしたり、通ったり、触れてきたりした場所です。
          破れ、ゆがみ、修理の要否ではなく、家族内で通じる呼び方、部屋、使っていた場面、親が話していた由来に絞ります。
        </p>
        <p>
          たとえば「祖父がよく腰かけていた縁側」「茶の間と座敷のあいだの襖」「子どもが背比べをした柱の近く」のように、
          写真と一緒に見返したい短い言葉を残します。工事や費用の判断表にしないことで、家族内で気軽に共有できます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">修理、改修、契約のメモと混ぜない</h2>
        <p>
          建具や床まわりの話は、修理、リフォーム、解体、契約、所有や相続の話題につながりやすいものです。
          このページのメモは、その判断をするためのものではありません。
          家族内で記憶を見返す控えとして、呼び方、場所、由来、聞き書き、次に確認したいことだけを分けて残します。
        </p>
        <p>
          業者名、連絡先、住所、契約内容、本人確認情報は書かない設計にしています。
          外部に渡す書類ではなく、帰省時の短い会話から続けられる家族内メモとして使います。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、障子・襖・板戸・引き戸、縁側・床の間・押し入れ、畳・板の間まわりの呼び方や、
          親が話してくれた由来をPDFとExcelで同じ考え方でそろえられます。
          noteには、帰省時に家の中を歩きながら短く書き出す使い方の案内を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p79"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P79単品を見る
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

