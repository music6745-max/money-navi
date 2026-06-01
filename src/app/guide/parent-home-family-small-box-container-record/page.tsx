import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-small-box-container-record";
const title = "高齢親の家の小箱・入れ物まわりメモ";
const description =
  "茶筒、菓子缶、小箱、小さな入れ物など、親の家で家族が長年見てきた小物入れの呼び方、置かれていた場所、親が話してくれたことを、処分や価値判断ではなく家族内の記録として整理するためのメモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383425?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-small-box-container-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n48ea43b4290b";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-small-box-container-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_small_box_container";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383427?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-small-box-container-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-small-box-container-record&utm_content=full_pack";

const faqItems = [
  {
    question: "小箱・入れ物まわりメモには何を書きますか？",
    answer:
      "家族内で通じる呼び方、置かれていた場所、見た目の特徴、親が話してくれた由来、次に写真で残したいことを書きます。中身、金額、暗証番号、鍵、個人情報は書かない前提です。",
  },
  {
    question: "中身の確認や処分判断にも使えますか？",
    answer:
      "使いません。このメモは思い出や呼び方を残す控えです。中身の確認、処分、売却、相続、貴重品管理などの判断は別の安全な手順に分けてください。",
  },
  {
    question: "写真整理の前に使えますか？",
    answer:
      "使えます。帰省時にどの小箱を撮るか、誰に呼び方を聞くか、写真とは別に残したい親の言葉をそろえるための下書きとして使えます。",
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

export default function ParentHomeFamilySmallBoxContainerRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の小物入れメモ</span>
          <span>公開 2026-06-02</span>
          <span>確認 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、小箱の呼び方と由来をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          小箱や菓子缶は、家族には当たり前でも、あとから見返すと「どれのことか」が分かりにくくなりやすいものです。
          無料メモでは、呼び方、置かれていた場所、親が話してくれたこと、次に写真で残したいことだけを整理できます。
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
            itemId="p83"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">中身の管理ではなく、家族内で通じる記録に絞る</h2>
        <p>
          P83で扱うのは、茶筒、菓子缶、小箱、小さな入れ物など、親の家で家族が長年見てきた入れ物まわりです。
          何が入っているか、価値があるか、処分するかを決めるページではありません。
          「青い茶筒」「お正月の缶」「父が切手を入れていた箱」のように、家族内で通じる呼び方に絞ります。
        </p>
        <p>
          呼び方と場所が残っていると、写真整理や親族との会話で確認しやすくなります。
          親が話してくれた由来や、次に聞きたいことを短く残すだけでも、あとから見返す時の手がかりになります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">貴重品、個人情報、処分判断は別管理にする</h2>
        <p>
          小さな入れ物には、現金、鍵、書類、連絡先、思い出の品などが近くにあることもあります。
          このメモでは、金額、暗証番号、鍵の場所、住所、電話番号、本人確認情報、貴重品の詳細は書かない設計にしています。
        </p>
        <p>
          防犯、防災、医療、介護用品、修理、査定、処分、相続などの判断にも使いません。
          必要な確認は別の安全な手順に分け、このページでは家族内で見返せる呼び方と記録だけを扱います。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、小箱や入れ物の呼び方、場所、見た目、親のひとこと、次に写真で残したいことをPDFとExcelで整理できます。
          noteには、帰省時に小さな入れ物を見ながら短く書き始めるための案内を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p83"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P83単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s83"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S83まとめセットを見る
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
