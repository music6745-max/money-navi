import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-pet-care-routine-record";
const title = "高齢親と暮らすペットのお世話控えメモの作り方";
const description =
  "離れて暮らす家族が、実家のペットのごはん・水・散歩・トイレ・通院先・用品の置き場所を、判断ではなく引き継ぎメモとして整理する方法を解説します。";
const url = `${siteConfig.url}/guide/${slug}`;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383160?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-pet-care-routine-record&utm_content=single_template";
const noteUrl =
  "https://note.com/mild_quail6092/n/nb122348a43a2?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-pet-care-routine-record&utm_content=note_article";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-pet-care-routine-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_pet_care_routine";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-pet-care-routine-record&utm_content=full_pack";

const faqItems = [
  {
    question: "ペットのお世話控えメモには何を書けばよいですか？",
    answer:
      "ペットの名前、種類、普段のごはんと水、散歩や遊び、トイレや掃除、用品の置き場所、かかりつけ先の確認先、家族内の引き継ぎ事項を分けて書きます。判断ではなく、家族があとで確認できる事実メモとして使います。",
  },
  {
    question: "フードや薬、病院の選び方も決められますか？",
    answer:
      "このメモでは決めません。フード、薬、サプリ、治療、トリミング、病院、しつけなどの判断は、飼い主本人、動物病院、専門家、公式案内で確認してください。メモは確認先と現在の習慣を整理するためのものです。",
  },
  {
    question: "個人情報や動物病院の詳しい情報を書いてもよいですか？",
    answer:
      "必要最小限にしてください。住所、電話番号、口座、決済情報、ログイン情報、保険番号、診察券番号、詳しい病歴などはこのメモにまとめず、正式な保管場所を家族内で分けて管理します。",
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

export default function ParentPetCareRoutineRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族の引き継ぎ</span>
          <span>公開 2026-05-31</span>
          <span>確認 2026-05-31</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで家族内の共有形を作る</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          実家のペットの世話は、親本人の習慣、家の置き場所、近所との関係が混ざりやすい領域です。
          無料ツールでは、ごはん・水・散歩・トイレ・用品・確認先を同じ順番で整理し、次に帰省した家族が見返せるメモにできます。
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
            itemId="p60"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">ペットの世話は「いつものやり方」が抜けやすい</h2>
        <p>
          高齢の親がペットと暮らしている場合、家族が気にするのは大きな手続きだけではありません。
          ごはんの量、水の替え方、散歩の時間、トイレ掃除、用品の買い足し場所など、小さな習慣が途切れると家族の確認負担が増えます。
        </p>
        <p>
          ただし、家族メモで決めるべきことと、専門家に確認すべきことは分けます。このメモは、現在の習慣と確認先をそろえるための控えです。
          体調や行動の変化、食事や薬、治療、しつけ、病院選びの判断には使いません。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は「日々の世話」と「確認先」に分ける</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>基本情報: ペットの呼び名、種類、年齢の目安、家族内での担当者</li>
          <li>ごはんと水: いつ、どこで、何をどのくらい出しているか</li>
          <li>散歩・遊び: 時間帯、いつものコース、無理に変えないための注意</li>
          <li>トイレ・掃除: シートや砂、ゴミの出し方、掃除用品の場所</li>
          <li>用品の置き場所: フード、リード、ブラシ、消耗品、買い足し候補</li>
          <li>確認先: 動物病院、トリマー、家族の連絡順など、正式情報の保管場所</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">個人情報と詳しい診療情報は別管理にする</h2>
        <p>
          共有しやすいメモほど、外部に広がって困る情報は載せない設計にします。
          住所、電話番号、口座、決済情報、ログイン情報、保険番号、診察券番号、詳しい病歴は、このメモにまとめません。
        </p>
        <p>
          必要な場合は「診察券は玄関横の青いファイル」「保険書類は家族内の保管場所を確認」のように、正式な保管場所を示す程度に留めます。
          ペットが複数いる家庭では、1匹ごとにメモを分けると混同しにくくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、ペットのお世話控えメモを印刷・共有しやすい形で使えます。
          親のこと整理テンプレートをまとめて整えたい場合は、関連テンプレートを含むフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p60"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P60単品を見る
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
            itemId="p60_note"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            note記事を読む
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
