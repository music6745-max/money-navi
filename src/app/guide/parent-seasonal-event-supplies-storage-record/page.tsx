import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-seasonal-event-supplies-storage-record";
const title = "実家の季節用品・年中行事用品の収納場所を家族で控える方法";
const description =
  "正月用品、季節飾り、冬支度、夏支度など、年に数回だけ使うものの収納場所、容器、中身、確認日を、整理や処分の判断に使わない家族内メモとして残す方法をまとめます。";
const url = `${siteConfig.url}/guide/${slug}`;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383090?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-seasonal-event-supplies-storage-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-seasonal-event-supplies-storage-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_seasonal_event_supplies_storage";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-seasonal-event-supplies-storage-record&utm_content=full_pack";

const faqItems = [
  {
    question: "季節用品・年中行事用品の収納場所メモには何を書けばよいですか？",
    answer:
      "品名、使う季節や行事、収納場所、容器や箱の目印、中身の簡単な説明、確認日、確認した人、次に見返すタイミングを書きます。整理や処分を決める表ではなく、家族があとで探すための控えとして使います。",
  },
  {
    question: "整理、処分、買い足しの判断にも使えますか？",
    answer:
      "使えません。このメモは現在の収納状態を家族内で見返すためのものです。処分、買い足し、修理、保管方法の変更、外部サービス利用などの判断は、本人や家族で確認し、必要に応じて関係先の案内に従ってください。",
  },
  {
    question: "書かない方がよい情報はありますか？",
    answer:
      "住所、電話番号、鍵、暗証番号、通帳、カード、ログイン情報、重要書類や貴重品の詳しい保管場所は入れないでください。共有するメモには、季節用品や行事用品を探すための必要最小限の情報だけを残します。",
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
    publishedTime: "2026-06-01",
  },
};

export default function ParentSeasonalEventSuppliesStorageRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">実家の控えメモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで置き場所を書き出す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          年に数回だけ取り出すものは、しまった本人以外が場所を思い出しにくくなります。
          無料ツールでは、季節用品、年中行事用品、収納場所、箱やラベル、次に確認することを同じ順番で整理できます。
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
            itemId="p62"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">季節用品は「場所」と「箱の目印」が大切</h2>
        <p>
          正月用品、ひな人形や五月人形、クリスマス用品、扇風機カバー、加湿器の収納袋、来客用の座布団カバーなどは、
          使う時期が限られるため、収納場所の記憶があいまいになりやすいものです。
        </p>
        <p>
          このメモでは、処分するかどうかや買い足すかどうかは決めません。どこに、どんな箱で、何が入っているかを短く残し、
          次に探す家族が同じ場所を確認できる状態にします。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は、探すための手がかりに絞る</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>基本情報: 対象の家、確認日、確認した人、家族内での共有範囲</li>
          <li>季節用品: 冬支度、夏支度、暖房・冷房まわり、季節の布類やカバー</li>
          <li>年中行事用品: 正月、節句、彼岸、盆、クリスマスなど、行事名で分けた控え</li>
          <li>収納場所: 部屋、棚、押し入れ、箱や袋の目印、中身の呼び名</li>
          <li>次回確認: 見直す季節、帰省時に探すもの、家族へ聞くこと</li>
          <li>書かない情報: 鍵、暗証番号、貴重品、重要書類、支払い情報、ログイン情報</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">整理や処分の判断には使わない</h2>
        <p>
          季節用品や年中行事用品には、思い出、地域行事、親の好み、家族の予定が関わることがあります。
          収納場所のメモだけで、処分、譲渡、買い替え、買い足し、保管方法の変更を決めることは避けます。
        </p>
        <p>
          共有する範囲も家族内に限定し、詳しい住所、防犯に関わる情報、重要書類や貴重品の保管場所は書かない前提にします。
          外部サービスや作業依頼が必要な場合は、それぞれの正式な案内を確認してください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、季節用品、年中行事用品、収納場所別の中身、手伝った人や更新日の控えを印刷・入力しやすい形で使えます。
          実家まわりの控えメモをまとめてそろえたい場合は、関連テンプレートを含むフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p62"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P62単品を見る
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
