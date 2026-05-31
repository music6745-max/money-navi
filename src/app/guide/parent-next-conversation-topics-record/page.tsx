import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-next-conversation-topics-record";
const title = "高齢親に次回聞きたいこと・話したいことを家族内で控える方法";
const description =
  "次に親と電話・帰省・対面で話すとき、家族内で聞きたいこと・話したいことをあらかじめざっくり書き留め、話しそびれを減らすための整理方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383185?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-next-conversation-topics-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-next-conversation-topics-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_next_conversation_topics";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-next-conversation-topics-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/n5654a6061286";

const faqItems = [
  {
    question: "次回聞きたいこと・話したいことメモには何を書けばよいですか？",
    answer:
      "次に親と話すときに聞きたいこと、伝えたいこと、家族が持ち寄った話題、話す前に見返すメモ、話したあとに次回へ回すことを短く残します。すべて埋める必要はなく、思いついたものだけで使えます。",
  },
  {
    question: "介護の申し送りや体調確認メモとして使えますか？",
    answer:
      "使えません。このメモは家族内で次回の会話の話題を見返すための控えです。体調、医療、介護サービス、契約、手続き、法律やお金の判断は、このメモだけで扱わず、必要な記録や公式窓口と分けてください。",
  },
  {
    question: "個人情報や秘密情報も書いてよいですか？",
    answer:
      "住所、電話番号、口座、カード、ログイン情報、本人確認書類、合鍵や保管場所などの秘密情報は書かない前提で使います。家族内で話題を思い出すための短い手がかりに留めてください。",
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

export default function ParentNextConversationTopicsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の会話メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、次に話したいことを先に置いておく</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          親と電話を切ったあとや帰省から戻ったあとに、「あの話も聞きたかった」と思い出すことがあります。
          無料ツールでは、次に聞きたいこと、次に伝えたいこと、家族が持ち寄った話題を、判断や申し送りではなく会話前に見返す控えとして整理できます。
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
            itemId="p66"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">「聞きたい」と「話したい」を分ける</h2>
        <p>
          次回の話題は、親に聞きたいことと、家族から伝えたいことが混ざりやすいものです。
          先に分けておくと、電話や帰省の短い時間でも見返しやすくなります。
        </p>
        <p>
          たとえば「昔よく行っていた店のことを聞きたい」「孫の近況を伝えたい」「前に話していた写真を一緒に見たい」など、
          ふだんの言葉で短く残します。完璧な質問リストではなく、話題を思い出すための控えにします。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家族で持ち寄るときは、軽いメモに留める</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>思いついた日: いつ頃の話題か分かる程度に残す</li>
          <li>書いた人: 家族内で分かる呼び名に留める</li>
          <li>話す場面: 電話、帰省、食事中、写真を見ながらなどを短く書く</li>
          <li>次回に回すこと: 今回話せなかった話題を残しておく</li>
          <li>書かない情報: 住所、電話番号、口座、ログイン情報、本人確認情報、長い引用</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">判断や申し送りとは分けて扱う</h2>
        <p>
          このメモは、家族が親との会話を思い出しやすくするための控えです。
          体調確認、介護サービス、契約、手続き、法律やお金の判断をこのメモで決めるものではありません。
        </p>
        <p>
          判断が必要な内容は、事実の記録や公式書類、関係先の案内と分けて管理します。
          会話メモには、次に話したい軽い話題だけを置くと、家族内で続けやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、聞きたいこと、話したいこと、家族で持ち寄る話題、次回前に見返すメモを印刷・入力しやすい形で使えます。
          無料記事でも使い方の考え方を公開しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p66"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P66単品を見る
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
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            無料記事を読む
          </a>
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
