import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-daily-cloth-items-record";
const title = "高齢親の家の手ぬぐい・タオル・前掛け・布巾を家族で控えるメモ";
const description =
  "手ぬぐい、タオル、前掛け、かっぽう着、布巾、風呂敷など、親の家で日々使ってきた洗える布ものを、処分や価値判断に使わず家族内の軽い控えとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383392?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-daily-cloth-items-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n8da1c3336e00";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-daily-cloth-items-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_daily_cloth_items";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-daily-cloth-items-record&utm_content=full_pack";

const faqItems = [
  {
    question: "布ものメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、いつもの置き場所、よく使っていた場面、親が話していた由来、次に確認したいことを短く書きます。価格、鑑定、処分、衛生状態の判断には使わない前提で整理します。",
  },
  {
    question: "衣類や寝具のサイズ管理にも使えますか？",
    answer:
      "主な対象は、家のなかで日々使ってきた小ぶりの洗える布ものです。外出着、かさばる衣類、寝具、季節替えやサイズ管理は別の控えとして分けると混ざりにくくなります。",
  },
  {
    question: "個人情報を書く欄はありますか？",
    answer:
      "ありません。住所、電話番号、口座、暗証番号、契約情報、本人確認情報、贈り主の住所などは書かない運用を前提にしています。",
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

export default function ParentHomeDailyClothItemsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の布ものメモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、布ものの呼び方と使っていた場面をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省した時に「お母さんの紺色の前掛け」「お父さんの古い手ぬぐい」「玄関のお手ふき」が話題になっても、
          家に帰ると細かい呼び方や置き場所が薄れやすくなります。家族内で通じる言葉にしておくと、次の帰省や親族の集まりの前に見返しやすくなります。
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
            itemId="p76"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家のなかで日々手にしてきた布ものに絞る</h2>
        <p>
          このメモは、手ぬぐい、フェイスタオル、前掛け、かっぽう着、布巾、台ふき、お手ふき、風呂敷のように、
          家のなかで家族みんなが日々手にしてきた洗える布ものを控えるためのものです。
        </p>
        <p>
          「誰がよく使っていたか」「どこに置いていたか」「どんな場面で出ていたか」「親がどんな由来を話していたか」を分けておくと、
          写真だけでは残りにくい家族内の呼び方や使い方を短く残せます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">衣類・寝具・台所道具の控えと混ぜない</h2>
        <p>
          外出着、かさばる衣類、寝具の季節替えやサイズ管理は別の控えに分けます。台所で使う道具そのものは台所道具メモに分け、
          ふきん、前掛け、かっぽう着のような布ものだけをここにまとめると、あとから見返す時に迷いにくくなります。
        </p>
        <p>
          査定、処分、修理、衛生状態、しみ抜き、除菌、繕い方、正式な結び方を決めるメモではありません。家族で見てきた範囲を、軽い覚え書きとして残します。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、布ものの種類、置き場所、使っていた場面、親の言葉、確認待ちをPDFとExcelで同じ考え方でそろえられます。
          noteには使い方の短い案内も置いています。無料メモで試してから、印刷や保存しやすい形に移したい場合に使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p76"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P76単品を見る
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
