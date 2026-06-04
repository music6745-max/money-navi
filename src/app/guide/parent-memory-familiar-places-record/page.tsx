import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-memory-familiar-places-record";
const title = "高齢親が話す思い出の場所・なじみの場所を家族で控える方法";
const description =
  "親が会話で話してくれた昔住んでいた地域、よく通った店、家族で出かけた場所などを、旅行計画や住所特定ではなく家族内の思い出メモとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383171?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-memory-familiar-places-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/nad760f55c4ec";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-memory-familiar-places-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_memory_familiar_places";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-memory-familiar-places-record&utm_content=full_pack";

const faqItems = [
  {
    question: "思い出の場所・なじみの場所メモには何を書けばよいですか？",
    answer:
      "親が話してくれた場所の呼び方、だいたいの地域、そこに行っていた時期、誰と行ったか、本人が大事にしている一言を控えます。正確な住所や連絡先を特定するための表ではありません。",
  },
  {
    question: "旅行計画や外出先の選定に使えますか？",
    answer:
      "使いません。このメモは家族で会話を見返すための控えです。移動可否、宿泊、予約、交通手段、付き添い、費用などは、それぞれの状況に合わせて家族や関係者に確認してください。",
  },
  {
    question: "住所や電話番号などを書いてもよいですか？",
    answer:
      "個人情報や連絡先、ログイン情報、会員番号などは書かない前提です。家族内で思い出を共有しやすい粒度にとどめ、外部公開や第三者共有には使わないでください。",
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

export default function ParentMemoryFamiliarPlacesRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の思い出メモ</span>
          <span>公開: 2026-06-04</span>
          <span>確認: 2026-06-04</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親の言葉のまま控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          「昔よく行った商店街」「家族で写真を撮った海」「帰省すると寄っていた店」のように、親が話してくれた場所を細かく決めすぎずに残します。
          住所探しや旅行手配ではなく、次の会話で思い出しやすくするための家族内メモとして使います。
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
            itemId="p117"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">場所を「正確さ」ではなく「思い出しやすさ」で分ける</h2>
        <p>
          思い出の場所は、正式名称や正確な住所が分からないまま話に出ることがあります。その場合でも、親が使っている呼び方、だいたいの地域、近くにあった目印、
          一緒にいた人を分けて控えると、家族で同じ話を見返しやすくなります。
        </p>
        <p>
          「昔住んでいた町」「よく行った喫茶店」「子どもの頃に遊んだ川」のように、本人の言葉を優先します。分からない内容は空欄や「次に聞くこと」に回し、
          メモ上で断定しない形にしておきます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">外出・移動の判断とは切り分ける</h2>
        <p>
          このメモは、外出計画、旅行計画、施設見学、宿泊予約、交通手段、付き添いの可否を決めるものではありません。移動や同行が必要な話になった場合は、
          家族で状況を確認し、必要に応じて関係者に相談する前提にします。
        </p>
        <p>
          費用、支払い、予約、本人確認、連絡先の共有なども、このメモだけで進めません。家族内で思い出を振り返る控えとして、個人情報を書き込まない形にとどめます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートとnote記事も用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、思い出の場所、なじみの場所、親の呼び方、家族内で次に聞くことをPDFとExcelで整理できます。
          note記事では、メモを作る前に目的を絞る考え方を確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p117"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P117単品を見る
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
            itemId="p117_note"
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
