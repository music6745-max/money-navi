import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-window-curtain-screen-size-record";
const title = "実家の窓・カーテン・網戸サイズを家族で書き留める方法";
const description =
  "帰省時に測った窓・カーテン・網戸のサイズ、部屋名、測定日、次に確認したいことを、購入や施工判断に踏み込まず家族内メモとして整理するコツを解説します。";
const url = `${siteConfig.url}/guide/${slug}`;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383082?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-window-curtain-screen-size-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-window-curtain-screen-size-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_window_curtain_screen_size";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-window-curtain-screen-size-record&utm_content=full_pack";

const faqItems = [
  {
    question: "窓・カーテン・網戸サイズ控えメモには何を書けばよいですか？",
    answer:
      "部屋名、窓やカーテンの場所、測ったサイズ、測定日、確認した人、現在使っているものの簡単なメモ、次に確認したいことを短く残します。購入や施工の判断材料ではなく、家族が後で見返すための控えとして使います。",
  },
  {
    question: "カーテンや網戸の購入・施工判断にも使えますか？",
    answer:
      "判断には使いません。このメモは家族内で確認済みの寸法や未確認事項を整理するものです。購入、設置、修理、施工、採寸方法、商品仕様は、販売店、メーカー、施工業者などの公式案内で確認してください。",
  },
  {
    question: "写真や細かい家の情報も残してよいですか？",
    answer:
      "必要最小限にしてください。住所、鍵、暗証番号、ログイン情報、支払い情報、防犯に関わる詳しい情報はこのメモにまとめず、共有先も家族内に限定します。",
  },
];

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    publishedTime: "2026-05-31",
  },
};

export default function ParentWindowCurtainScreenSizeRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-05-31"
        dateModified="2026-05-31"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家庭整理</span>
          <span>公開: 2026-05-31</span>
          <span>確認: 2026-05-31</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで書き出す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          部屋ごとの窓、カーテン、網戸の情報は、あとから家族が見返せる形にそろえるだけで確認の手戻りを減らせます。
          無料ツールでは、部屋名、測ったサイズ、測定日、次に確認することを短く整えられます。
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={toolUrl}
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            無料メモを作る
          </a>
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="hero_single_template"
            itemId="p59"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">窓まわりのサイズは、帰省時に測っても後から忘れやすい</h2>
        <p>
          実家のカーテンを替えたい、網戸の張り替えを相談したい、窓まわりの確認を家族に頼みたいとき、
          部屋名やサイズが口頭だけだと引き継ぎにくくなります。
        </p>
        <p>
          ここで作るのは、購入や施工を決めるための採寸表ではなく、家族内で確認済みのサイズと
          次に確認することを見返すためのメモです。部屋名、窓の場所、測ったサイズ、測定日、確認した人を同じ形で残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">まず「測った事実」と「未確認」を分ける</h2>
        <p>正確そうな情報を作ろうとするより、家族が後で見返せる手がかりをそろえると続けやすくなります。</p>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>部屋名: リビング、寝室、台所、和室など家族が分かる呼び名</li>
          <li>場所: 南側の掃き出し窓、出窓、小窓など同じ部屋の中で区別できるメモ</li>
          <li>サイズ: 窓、カーテン、レール、網戸など測った対象と数値</li>
          <li>測定日と確認者: いつ、誰が測ったか</li>
          <li>今使っているもの: カーテンの枚数、網戸の有無、気づいたこと</li>
          <li>次に確認すること: 店舗や業者へ確認したい内容、測り直したい箇所</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">購入、施工、修理の判断はメモだけで決めない</h2>
        <p>
          カーテン、網戸、窓まわりの部品は、測り方、取り付け方、規格、施工可否によって必要な確認が変わります。
          このページやテンプレートは、家族内で確認した内容を整理するためのもので、購入・設置・修理・施工の判断を代行するものではありません。
        </p>
        <p>
          実際に購入や修理を進める前には、販売店、メーカー、施工業者などの公式案内に沿って、
          必要な測定箇所や条件を確認してください。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家の詳しい情報は必要最小限にする</h2>
        <p>
          窓まわりのメモは、家の間取りや防犯に関わる情報と近くなりやすいので、外部へ広げない前提で扱います。
          住所、鍵、暗証番号、ログイン情報、支払い情報などはこのメモにまとめません。
        </p>
        <p>
          写真を残す場合も、必要な範囲に絞り、共有先を家族内に限定します。詳しい見積書や契約書は正式な保管場所に分けて管理します。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版は、窓・カーテン・網戸サイズ控えに加えて、置き場所、衣類・寝具、家電、郵便物、連絡先など、
          家族で共有しやすいテンプレートを同じ形式でそろえたいときに使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p59"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P59単品を見る
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
