import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-cherished-item-background-record";
const title = "高齢親が大切にしている品の背景メモを家族で残す方法";
const description =
  "親の家に長くある品や大切にしている品について、親が話してくれた背景、きっかけ、短い思い出を、処分・相続・金銭価値の判断に踏み込まず家族内の控えとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383181?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-cherished-item-background-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-cherished-item-background-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_cherished_item_background";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-cherished-item-background-record&utm_content=full_pack";

const faqItems = [
  {
    question: "大切な品の背景メモには何を書けばよいですか？",
    answer:
      "品名、置き場所、親が話してくれた背景、手に入れたきっかけ、家族があとで思い出せる短いエピソード、次に本人へ聞きたいことを残します。正確な年表を作るより、親の言葉に近い形で家族内の控えにすることを優先します。",
  },
  {
    question: "処分、相続、金銭価値の判断にも使えますか？",
    answer:
      "使えません。このメモは家族内で背景を見返すための控えです。処分、相続、鑑定、売却、権利関係の判断は、本人・家族で確認し、必要に応じて公的窓口や専門家へ相談してください。",
  },
  {
    question: "写真や個人情報も一緒に書いてよいですか？",
    answer:
      "写真の保管場所やファイル名を短く控える程度にとどめます。住所、電話番号、口座、カード、ログイン情報、本人確認書類、合鍵や保管場所などの秘密情報は、このメモにまとめない前提で使います。",
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

export default function ParentCherishedItemBackgroundRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の控えメモ</span>
          <span>公開 2026-06-01</span>
          <span>確認 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、品名と聞いた話を分けて残す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          古い道具、飾り物、手紙、器、写真立てなどは、見た目だけでは家族に背景が伝わりにくいことがあります。
          無料ツールでは、品名、置き場所、親が話してくれたこと、家族が次に聞きたいことを、判断材料ではなく家族内の控えとして整理できます。
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
            itemId="p65"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">大切な理由は、あとから聞こうとしても残りにくい</h2>
        <p>
          実家に長くある品は、家族から見ると「古いもの」「よく置いてあるもの」に見えても、本人にとっては誰かから受け取った記念品だったり、仕事や地域活動の思い出と結びついていたりします。
        </p>
        <p>
          このメモで残すのは、処分可否や価値判断ではありません。親が話してくれた範囲で、誰から、いつごろ、どんな場面で使ったか、なぜ今も残しているのかを短く控えます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は「事実」と「聞いた話」を分ける</h2>
        <p>あとで見返しやすくするには、確認できる内容と、本人から聞いた話を混ぜすぎないことが大切です。</p>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>品名: 家族が呼びやすい名前で短く残す</li>
          <li>置き場所: 部屋、棚、箱、引き出しなど、探す手がかりになる範囲で書く</li>
          <li>聞いた日: 帰省時、電話、片付け中など、話を聞いた場面も添える</li>
          <li>本人の言葉: なるべく言い換えすぎず、短い引用メモとして残す</li>
          <li>次に聞くこと: 由来が曖昧な部分や、本人に確認したいことを分けておく</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">処分、相続、鑑定の判断には使わない</h2>
        <p>
          品の扱いは、本人の意思、家族の合意、保管場所、費用、法的な手続きなどによって変わります。このページとテンプレートは、背景を忘れないための控えであり、処分・譲渡・売却・相続・鑑定の判断を代わりに行うものではありません。
        </p>
        <p>
          判断が必要になった場合は、本人や家族で確認し、必要に応じて公的窓口、専門家、関係するサービスの正式案内を確認してください。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">秘密情報は品の背景メモにまとめない</h2>
        <p>
          古い箱や書類と一緒に、鍵、通帳、カード、証明書、連絡先が見つかることもあります。ただし、このメモには住所、電話番号、口座番号、カード番号、ログイン情報、本人確認書類、合鍵の保管場所などを書き込まない前提で使います。
        </p>
        <p>
          写真を添える場合も、保管場所やファイル名を短く控える程度にして、共有範囲は家族内に限定します。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版は、品名、場所、親から聞いた背景、家族の思い出、次に聞くことを同じ形式で残せるPDF/Excelセットです。
          実家整理や家族共有の控えを、ほかの介護・生活メモと同じ粒度でそろえたい場合はフルパックも使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p65"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P65単品を見る
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
