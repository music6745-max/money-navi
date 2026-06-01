import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-stationery-writing-items-record";
const title = "高齢親の家の文房具・ペン立て・鉛筆削りまわりメモ";
const description =
  "電話台や茶の間、机まわりに長年置かれていたペン立て、鉛筆削り、鉛筆入れ、消しゴム入れなどを、書類や手紙の内容、住所録、契約、価値判断とは切り分け、家族内で見返す控えとして整理するメモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383432?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-stationery-writing-items-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/ne5b009b4f0d9";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-stationery-writing-items-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_stationery_writing_items";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383433?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-stationery-writing-items-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-stationery-writing-items-record&utm_content=full_pack";

const faqItems = [
  {
    question: "文房具まわりメモには何を書きますか？",
    answer:
      "ペン立てや鉛筆削り、鉛筆入れ、消しゴム入れなどの呼び方、置かれていた場所、見た目の特徴、親が話してくれた由来、次に写真で残したいことを書きます。書類や手紙の内容、住所、電話番号、契約情報などは書かない前提です。",
  },
  {
    question: "書類整理や契約確認にも使えますか？",
    answer:
      "使いません。このメモは文房具や書き物小物を家族内の思い出として見返すための控えです。契約、相続、税務、金融、個人情報の確認や判断には使わず、必要な確認は別の手順に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールはその場で控えを作るための簡易メモです。BOOTH版はPDFとExcelで、帰省前後の写真整理、家族内共有、複数の小物の記録に使いやすい形に整えています。",
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

export default function ParentHomeFamilyStationeryWritingItemsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の文房具メモ</span>
          <span>公開 2026-06-02</span>
          <span>確認 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、文房具まわりの呼び方と置き場所をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          古いペン立てや鉛筆削りは、いつもの場所にあるため写真整理から抜けやすい小物です。
          無料メモでは、呼び方、置かれていた部屋、見た目の特徴、親が話してくれたことだけを控え、
          書類内容や連絡先などの個人情報とは分けて残せます。
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
            itemId="p85"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">文房具は、ものの記録として軽く残す</h2>
        <p>
          P85で扱うのは、電話台、茶の間、机、台所の引き出しなどに長年置かれていたペン立て、
          鉛筆削り、鉛筆入れ、消しゴム入れ、メモ帳、小さな書き物道具です。
          どれが高いか、処分すべきか、誰のものかを判断するためのページではありません。
        </p>
        <p>
          「赤いペン立て」「玄関の鉛筆削り」「電話台の横にあったメモ帳」のように、
          家族内で通じる呼び方と置き場所をそろえておくと、帰省後の写真整理や会話で見返しやすくなります。
          親が話してくれた由来があれば、短い一言として残すだけで十分です。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">個人情報や判断材料とは分けて書く</h2>
        <p>
          文房具の近くには、住所録、手紙、請求書、契約書、メモ書きなどが一緒に置かれていることがあります。
          このテンプレートでは、それらの中身や連絡先、金額、契約番号、本人確認につながる情報は扱いません。
        </p>
        <p>
          健康状態、認知機能、財産価値、相続、税金、契約の判断にも使わない前提です。
          迷う情報が出てきた場合は、文房具まわりの思い出メモから切り離し、家族内で別途確認する項目として扱ってください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、文房具、筆記具、机まわり小物をPDFとExcelで控えられます。
          noteには、家の中で見つかる小さな書き物道具を、個人情報と混ぜずに記録するための案内を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p85"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P85単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s85"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S85まとめセットを見る
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
