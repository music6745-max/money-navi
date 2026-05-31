import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-speech-habit-phrases-record";
const title = "高齢親が話す口癖・言い回しを家族で控える方法";
const description =
  "親がよく使う言葉、地域の言い回し、物や行動の呼び方を、辞書や判断ではなく家族内で見返す控えとして残す方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383178?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-speech-habit-phrases-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-speech-habit-phrases-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_speech_habit_phrases";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-speech-habit-phrases-record&utm_content=full_pack";

const faqItems = [
  {
    question: "口癖・言い回しメモには何を書けばよいですか？",
    answer:
      "親がよく使う言葉、地域の言い回し、物や行動の呼び方、あいさつ代わりの決まり文句、どんな場面で出たかを家族内の控えとして残します。",
  },
  {
    question: "方言辞典や翻訳メモとして使えますか？",
    answer:
      "使えません。このメモは家族内で見返す控えです。標準語への変換、語源調査、方言分類、正誤判定、翻訳、公開用の文章化は扱いません。",
  },
  {
    question: "もの忘れや認知機能の判断に使えますか？",
    answer:
      "使えません。言葉の変化、記憶力、認知機能、病気や症状の判断には使わないでください。気になる変化は事実を分けて控え、必要に応じてかかりつけ医や地域包括支援センターなどに確認してください。",
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

export default function ParentSpeechHabitPhrasesRecordPage() {
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
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで言葉をそのまま控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          親が何気なく使う口癖や言い回しは、時間が経つと家族の記憶の中で少しずつ曖昧になります。
          無料ツールでは、親が話した言葉、家族内で分かる範囲の意味、出てきた場面、次に見返すタイミングを同じ形で整理できます。
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
            itemId="p64"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">正しい意味を決めるより、家族内の控えにする</h2>
        <p>
          親の言葉には、地域、時代、家庭内の習慣、長年の呼び方が混ざることがあります。
          その場で標準語に直したり、正しい意味を決めたりしようとすると、メモが重くなり続きません。
        </p>
        <p>
          まずは「親が話してくれたままの形」「家族内で分かる範囲の意味」「どんな場面で出たか」だけを分けて残します。
          分からない言葉は、分からないまま控えておく方が、あとで家族で見返しやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は、言葉の種類ごとに分ける</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>口癖: 会話の途中によく出る短い言葉、決まって出るフレーズ</li>
          <li>地域の言葉: 親が話した地域の言い回し、家族内で意味が分かりにくかった言葉</li>
          <li>物や行動の呼び方: 家庭内だけで通じる物の呼び名、動作の言い方</li>
          <li>決まり文句: 電話、帰省、あいさつ代わりに出る言葉</li>
          <li>書かない情報: 住所、電話番号、連絡先、アカウント情報、公開用の長い引用</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">辞書化・公開・判断には使わない</h2>
        <p>
          このメモは、方言辞典、翻訳、語源調査、言語学的な分類、正誤判定をするためのものではありません。
          家族の中で「あの言葉、前にも話していたね」と見返せるようにするための控えです。
        </p>
        <p>
          また、言葉の変化を医療や介護の判断材料として決めつけることも避けます。
          気になる変化がある場合は、出来事や困りごとを別に整理し、必要に応じて正式な相談先へ確認してください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、口癖、地域の言葉、物や行動の呼び方、決まり文句、家族内メモを印刷・入力しやすい形で使えます。
          親の暮らしや家族共有メモをまとめて整えたい場合は、関連テンプレートを含むフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p64"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P64単品を見る
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
