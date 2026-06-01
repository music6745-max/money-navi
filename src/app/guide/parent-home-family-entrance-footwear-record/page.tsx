import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-entrance-footwear-record";
const title = "高齢親の家の玄関まわりメモ";
const description =
  "傘立て、靴べら、スリッパ立て、来客用履物入れなど、親の家で家族が長年見てきた玄関まわりの物を、修理や処分、価値判断、防犯、防災、医療・介護シューズ選定に使わず、家族内の呼び方・置かれていた場所・親が話してくれたこととして残すための整理メモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383422?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-entrance-footwear-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/nc57199555445";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-entrance-footwear-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_entrance_footwear";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383424?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-entrance-footwear-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-entrance-footwear-record&utm_content=full_pack";

const faqItems = [
  {
    question: "玄関まわりメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、置かれていた場所、親がよく使っていた場面、親が話してくれた由来、次に写真で残したいことを短く書きます。住所、鍵、暗証番号、来客の氏名などは書かない前提です。",
  },
  {
    question: "靴や介護用品の選定にも使えますか？",
    answer:
      "使いません。このメモは家族内で思い出や呼び方を見返すための控えです。歩行、転倒予防、介護シューズ、避難用品、防犯、防災、修理、処分などの判断は別の確認に分けてください。",
  },
  {
    question: "写真を撮る前に使えますか？",
    answer:
      "使えます。帰省時にどの場所を撮るか、誰に呼び方を聞くか、何を別メモに分けるかを先にそろえておくと、家族間で見返しやすくなります。",
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

export default function ParentHomeFamilyEntranceFootwearRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の玄関メモ</span>
          <span>公開: 2026-06-02</span>
          <span>確認: 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、玄関まわりの呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          玄関は、帰省した家族が最初に目にする場所です。傘立て、靴べら、スリッパ立て、来客用履物入れの呼び方や置き場所が家族ごとに少し違うと、
          写真を残す前に話がずれやすくなります。無料メモでは、呼び方、置かれていた場所、親が使っていた場面、次に確認したいことだけを整理できます。
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
            itemId="p82"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">靴や傘そのものではなく、家族で通じる記憶を残す</h2>
        <p>
          P82で扱うのは、親の家の玄関に長くあった傘立て、靴べら、スリッパ立て、来客用履物入れなどです。
          いつ買ったか、いくらの物か、修理するか、処分するかを決めるページではありません。
          「青い傘立て」「お客さん用のスリッパ箱」「父が出勤前に使っていた靴べら」のように、家族内で伝わる呼び方に絞ります。
        </p>
        <p>
          玄関まわりは、帰省、来客、外出の前後の記憶と結びつきやすい場所です。先にメモをそろえておくと、
          写真整理や親族との会話で「どれのことか」を確認しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">防犯、防災、医療、処分の判断とは分けて書く</h2>
        <p>
          玄関まわりには、鍵、住所、来客、避難用品、履物、歩行の話が近くにあります。このメモでは、防犯、防災、医療、介護用品、修理、査定、処分、相続の判断は扱いません。
          必要な確認は別メモに分け、このページでは家族内で見返す呼び方と記憶だけに絞ります。
        </p>
        <p>
          住所、表札、電話番号、鍵の保管場所、暗証番号、来客の氏名、業者名、本人確認情報などは記録しない設計です。
          家族内で安全に共有できる範囲に留めることで、後から見返したときにも扱いやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、玄関まわりの物、置かれていた場所、親のひとこと、家族内で分けておく確認事項、次に写真で残したい場所をPDFとExcelで整理できます。
          noteには、帰省時に玄関を見ながら短く書き出す使い方の案を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p82"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P82単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s82"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S82まとめセットを見る
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
