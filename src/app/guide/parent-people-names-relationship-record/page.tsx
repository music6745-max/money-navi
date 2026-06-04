import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-people-names-relationship-record";
const title = "高齢親が話す人の呼び方・関係性を家族で控える方法";
const description =
  "親が会話で話してくれる「○○おじさん」「△△ちゃん」などの呼び方を、連絡先管理や正式な続柄確認ではなく、家族内で誰の話か見返す控えとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383174?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-people-names-relationship-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n0d18a8165daf";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-people-names-relationship-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_people_names_relationship";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-people-names-relationship-record&utm_content=full_pack";

const faqItems = [
  {
    question: "人の呼び方・関係性メモには何を書けばよいですか？",
    answer:
      "親が会話で使う呼び方、家族内で分かる範囲の相手、親から見たざっくりした関係、話に出る場面、次に聞いてみたいことを控えます。正式な氏名や続柄を確定するための表ではありません。",
  },
  {
    question: "連絡先や住所録として使えますか？",
    answer:
      "使いません。このメモは家族で会話を見返すための控えです。住所、電話番号、メール、LINE、SNS、勤務先、会員番号、ログイン情報、認証情報、支払い情報は書かない前提です。",
  },
  {
    question: "家系図や相続、葬儀のお知らせ先に使えますか？",
    answer:
      "使いません。戸籍、本籍、正式な続柄、相続、遺言、葬儀連絡先、人物評価、家族内のもめごとの整理には使わず、親の話を家族内で思い出しやすくする目的に絞ります。",
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

export default function ParentPeopleNamesRelationshipRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の人物メモ</span>
          <span>公開: 2026-06-04</span>
          <span>確認: 2026-06-04</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親が使う呼び方をそのまま控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          「○○おじさん」「△△ちゃん」「昔の職場の人」のように、親が話す相手の呼び方は、家族でも後から誰のことか分からなくなることがあります。
          連絡先を集める表ではなく、会話を思い出すための家族内メモとして、呼び方と話に出る場面だけを控えます。
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
            itemId="p118"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">正しい続柄を決めるより、親の呼び方を残す</h2>
        <p>
          親の会話に出る人は、正式な名前や続柄がすぐ分からないことがあります。無理に決めつけず、親が使っている呼び方、
          家族内で思い当たる相手、どんな話題で出てきたかを分けておくと、後から家族で確認しやすくなります。
        </p>
        <p>
          たとえば「畑の近くの□□さん」「昔一緒に働いた△△ちゃん」のように、本人の言葉を残します。分からない部分は空欄にし、
          次に本人へ聞いてみたいこととして残しておくと、会話のきっかけにもなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は、人物の種類ごとに分ける</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>家族・親族として話に出る人</li>
          <li>昔の友人、同級生、職場仲間として話に出る人</li>
          <li>親が使っている呼び方やあだ名</li>
          <li>話に出る場面、場所、季節、出来事</li>
          <li>次に本人へ聞いてみたいこと</li>
        </ul>
        <p>
          住所、電話番号、SNS、勤務先、会員番号、ログイン情報、支払い情報は書きません。家族内で会話を見返すために必要な粒度にとどめます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">連絡先管理・家系図・判断用途とは分ける</h2>
        <p>
          このメモは、連絡先一覧、家系図、戸籍や正式続柄の確認、相続、遺言、葬儀のお知らせ先作成には使いません。
          また、人物への評価や家族内のもめごとを記録する場にもせず、親が話してくれた内容を家族で思い出すための控えとして扱います。
        </p>
        <p>
          外部公開や第三者共有にも向きません。家族で共有する場合も、必要な範囲に限定し、個人情報を書きすぎない運用にしておくと安心です。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートとnote記事も用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、親が使う呼び方、家族内で分かる相手、話に出る場面、次に聞きたいことをPDFとExcelで整理できます。
          note記事では、連絡先管理と切り分けてメモを作る考え方を確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p118"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P118単品を見る
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
          <TrackedExternalLink
            href={noteUrl}
            eventName="note_click"
            page={slug}
            position="bottom_note"
            itemId="p118_note"
            className="rounded-md border border-card-border px-4 py-2 text-sm font-bold text-foreground hover:border-primary"
          >
            note記事を見る
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
