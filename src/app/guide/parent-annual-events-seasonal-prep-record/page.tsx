import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-annual-events-seasonal-prep-record";
const title = "高齢親の年中行事・季節の段取りを家族で控える方法";
const description =
  "お正月、節分、節句、お盆前後、お月見、年越しなど、親の家で毎年していた流れを、正式な作法や宗派・地域差の判断ではなく家族内の思い出しメモとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383170?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-annual-events-seasonal-prep-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-annual-events-seasonal-prep-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_annual_events_seasonal_prep";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-annual-events-seasonal-prep-record&utm_content=full_pack";

const faqItems = [
  {
    question: "年中行事・季節の段取りメモには何を書けばよいですか？",
    answer:
      "親の家で毎年していた行事名、時期の目安、用意していたもののジャンル、家族内の流れ、親が大事にしていたポイント、次に見返すタイミングを書きます。正式な作法や正誤の判定を書くものではありません。",
  },
  {
    question: "宗派、地域差、正式な作法の確認に使えますか？",
    answer:
      "使えません。このメモは家族内で親の家のやり方を思い出すための控えです。仏事・神事の作法、宗派や地域差、旧暦・新暦、寺社や専門店の選定などは、それぞれの関係先や詳しい人に確認してください。",
  },
  {
    question: "食事制限や行事を続けるかどうかの判断に使えますか？",
    answer:
      "使えません。行事食の栄養、塩分、糖分、アレルギー、嚥下、療養、食事制限、親が行事を続けるかやめるか、支払い、契約、寄付、退会などの判断は、このメモでは扱いません。",
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
    publishedTime: "2026-06-04",
  },
};

export default function ParentAnnualEventsSeasonalPrepRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-04"
        dateModified="2026-06-04"
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の段取りメモ</span>
          <span>公開: 2026-06-04</span>
          <span>確認: 2026-06-04</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで親の家の流れを書き出す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省や家族で集まる前に、「お正月はいつごろ準備していたか」「お盆前後はどんな順番だったか」を思い出せるよう、
          親の家で毎年していた流れだけを家族内の控えとして残します。正式な作法や行事を続けるかどうかの判断とは分けて使います。
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
            itemId="p116"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「親の家ではどうしていたか」だけに絞る</h2>
        <p>
          年中行事は、地域、宗派、家庭の考え方によって流れが大きく違います。このメモでは、正しいやり方を決めるのではなく、
          親の家で毎年していたこと、親が大事にしていた順番、家族で集まる前に思い出したいことだけを控えます。
        </p>
        <p>
          たとえば「年末の最後の週ごろから準備していた」「節分は家族で豆をまいていた」「お盆前後はこの順番で集まっていた」
          のように、細かすぎない粒度で残すと、次に家族で見返しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">季節ごとに分けると聞き直しやすい</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>年末年始: 準備を始める時期、お正月飾り、お雑煮などのジャンル、三が日の家族内の流れ</li>
          <li>春の行事: 節分、ひな祭り、端午の節句、春のお彼岸で親が話していた流れ</li>
          <li>夏の行事: 七夕、お盆前後、帰省時に家族で確認したこと</li>
          <li>秋冬の行事: お月見、秋のお彼岸、冬至、年越しで思い出したいこと</li>
          <li>家族内メモ: 手伝う人、前日までの目安、当日の流れ、次回見返すタイミング</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">判断欄にしないことで安全に共有する</h2>
        <p>
          行事食の栄養、塩分、糖分、アレルギー、嚥下、食事制限、療養、改善、予防、効果は、このメモでは扱いません。
          親が行事を続けるかやめるか、寄付、退会、契約、支払い、外部サービスへの依頼も、メモだけで決めない前提にします。
        </p>
        <p>
          親戚や近所の連絡先、贈答先の住所、金額、口座、登録番号、ログイン情報、認証情報なども書かず、
          家族内で見返すための「親の家の段取り」の範囲に留めます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、お正月・春・夏・秋冬の行事段取り、家族内引き継ぎ、Excelの一覧管理シートをまとめて使えます。
          介護まわりの控えメモを広くそろえたい場合は、フルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p116"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P116単品を見る
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
