import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-living-tips-routine-record";
const title = "高齢親に聞いた家の暮らしの小さなコツ・段取りを家族内で控える方法";
const description =
  "親が話してくれた家のなかの場所、道具、小物、季節の変わり目、いつもの置き方や戻し方を、家事の正解や健康判断にせず家族内の軽いメモとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383365?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-living-tips-routine-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-living-tips-routine-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_living_tips_routine";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-living-tips-routine-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/n944b26c8d7b7";

const faqItems = [
  {
    question: "家の暮らしの小さなコツ・段取りメモには何を書けばよいですか？",
    answer:
      "聞いた日、場所、道具や小物、季節の節目、親が話してくれた言い方、家族内で見返すためのメモを書きます。親が話してくれた範囲だけでよく、空欄が残っても使えます。",
  },
  {
    question: "家事ルーティン表や家事の正解づくりにも使えますか？",
    answer:
      "使えません。このメモは親が話してくれた家の小段取りを家族内で見返す控えです。家事の正解、効率化、家事代行の手順、健康法、節約術、家族の役割分担を決める用途には使いません。",
  },
  {
    question: "鍵、連絡先、暗証番号、防犯情報もまとめてよいですか？",
    answer:
      "書かないでください。住所、電話番号、鍵の所在、暗証番号、パスワード、口座、カード、契約番号、本人確認情報などの個人情報や秘密情報は、このメモの対象外です。",
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

export default function ParentHomeLivingTipsRoutineRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">暮らしの段取りメモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親の言い方をそのまま残す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          家の小さな段取りは、帰省中や電話の中でふと出てきます。無料ツールでは、場所、道具、季節、いつもの戻し方、
          親が話してくれた言い方を、家族内で見返す軽い控えとして整理できます。
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
            itemId="p69"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">場所、道具、季節、戻し方を分けて控える</h2>
        <p>
          親の家の小段取りは、「玄関まわり」「押入れ」「物干し場」「ふきん」「洗濯ばさみ」「梅雨前」「冬支度前」など、
          家族内で通じる言葉で残すだけでも十分な手がかりになります。
        </p>
        <p>
          きれいな手順書に整えるより、「使ったあとはここに戻す」「ひと風通し」「この時期に少し出しておく」など、
          親が話してくれた言い方をそのまま残すことを優先します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家事の正解づくりや秘密情報の集約には使わない</h2>
        <p>
          このメモは、家族内で思い出すための控えです。家事の正解、効率化、健康法、節約術、家事代行の手順、
          家族の役割分担や責任分担を決めるためのものではありません。
        </p>
        <p>
          住所、電話番号、鍵の所在、暗証番号、パスワード、口座、カード、契約番号、本人確認情報、防犯情報は書きません。
          体調、症状、薬、食事制限、医療や介護の判断も別の用途として分けます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、場所別、道具・小物、季節の小段取り、いつもの置き方・戻し方、家族内更新記録を
          PDFとExcelで同じ粒度にそろえられます。ほかの実家まわりの控えメモと一緒に整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p69"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P69単品を見る
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
