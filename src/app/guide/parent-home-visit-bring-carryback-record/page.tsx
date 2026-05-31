import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-visit-bring-carryback-record";
const title = "高齢親宅への帰省で持って行くもの・持ち帰るものを家族内で控える方法";
const description =
  "帰省で家族が手で運ぶ持って行くもの・持ち帰るものを、次に行く家族が見返せるように家族内で軽く整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383187?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-visit-bring-carryback-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-visit-bring-carryback-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_visit_bring_carryback";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-visit-bring-carryback-record&utm_content=full_pack";

const faqItems = [
  {
    question: "帰省の持参・持ち帰りメモには何を書けばよいですか？",
    answer:
      "次に親宅へ持って行きたいもの、親宅から家族側へ持ち帰りたいもの、家族間の軽いリクエスト、季節行事ごとに毎回運ぶもの、帰省後に次回へ回すものを短く残します。分かる範囲だけで使えます。",
  },
  {
    question: "帰省日程や処分判断にも使えますか？",
    answer:
      "使えません。このメモは家族が手で運ぶものの控えです。帰省日程、交通、宿泊予約、処分、形見分け、相続、支払い、責任分担の判断はこのメモで扱わず、本人や家族で別途確認してください。",
  },
  {
    question: "連絡先や鍵、支払い情報も書いてよいですか？",
    answer:
      "書かない前提で使います。住所、電話番号、ログイン情報、暗証番号、カード、口座、本人確認情報、鍵の所在、合鍵の置き場所、防犯コードなどの秘密情報はこのメモにまとめないでください。",
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

export default function ParentHomeVisitBringCarrybackRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">帰省の持ち物メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、運ぶものだけを1か所に置く</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省前になると、親宅へ持って行くものと、親宅から持ち帰るものが家族内の会話に散らばりやすくなります。
          無料ツールでは、次に運びたいもの、家族からの軽いリクエスト、次回へ回すものを、判断ではなく見返すための控えとして整理できます。
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
            itemId="p67"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「持って行く」と「持ち帰る」を分ける</h2>
        <p>
          帰省の持ち物は、親宅へ渡すものと、親宅から家族側へ持ち帰るものが混ざると見返しにくくなります。
          まず方向を分けるだけで、次に行く家族が出発前に確認しやすくなります。
        </p>
        <p>
          書く内容は、物の名前、分かる範囲の置き場所、次回どの帰省で運ぶか、運べたかどうかの軽いメモで十分です。
          全部を埋めようとせず、思いついたものから残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">季節や行事の定番も、短く控える</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>持って行くもの: 写真のコピー、紙袋、親宅で使う消耗品、渡したい小物</li>
          <li>持ち帰るもの: 家族が置き忘れたもの、空き容器、前回使った袋、次に確認する資料</li>
          <li>家族間リクエスト: 次に行く家族へ頼みたい軽い持参・持ち帰り</li>
          <li>季節行事: お盆、年末年始、母の日・父の日などで毎回運びやすいもの</li>
          <li>帰省後の更新: 運べたもの、次回へ回したもの、次に見返すタイミング</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">日程、処分、秘密情報とは分ける</h2>
        <p>
          このメモは、家族が手で運ぶものを見返すための控えです。帰省日程、交通、宿泊予約、親宅の片付け、残す・処分する判断、
          形見分けや相続、支払い、誰が責任を持つかの決定には使いません。
        </p>
        <p>
          住所、電話番号、ログイン情報、暗証番号、カード、口座、本人確認情報、鍵の所在や防犯コードなども書かない前提にします。
          家族内で共有する場合も、メモは「次に何を運ぶか」を思い出す範囲に留めると続けやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、持って行くもの、持ち帰るもの、家族間リクエスト、季節行事ごとの控え、帰省後の更新記録を
          PDFとExcelで同じ粒度にそろえられます。実家まわりの控えメモをまとめて整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p67"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P67単品を見る
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
