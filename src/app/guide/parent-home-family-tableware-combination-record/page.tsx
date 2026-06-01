import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-tableware-combination-record";
const title = "高齢親の家の食器・食卓の取り合わせを家族で控えるメモ";
const description =
  "高齢親の家で長年使ってきた茶碗、湯のみ、お椀、取り皿、お盆などの取り合わせを、鑑定や処分判断に使わず、家族内で見返す小さな覚え書きとして整える方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383386?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-tableware-combination-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-tableware-combination-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_tableware_combination";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-tableware-combination-record&utm_content=full_pack";

const faqItems = [
  {
    question: "家族別の食器・食卓の取り合わせメモには何を書けばよいですか？",
    answer:
      "家族メンバーごとの茶碗、湯のみ、お椀、マグカップ、取り皿、お盆、敷物などを、家族内で通じる呼び方で控えます。購入価格や銘柄を確定するより、誰がどの場面で使ってきたかを軽く見返せる粒度にします。",
  },
  {
    question: "食器の価値や処分、相続の判断に使えますか？",
    answer:
      "使いません。このメモは家族内の食卓の覚え書きです。鑑定、査定、市場価値、処分、形見分け、所有権、相続の判断には使わず、必要な判断は家族や専門窓口で別に確認してください。",
  },
  {
    question: "食事制限や食物アレルギーの管理も一緒に書きますか？",
    answer:
      "書きません。このメモは食器や食卓の取り合わせを家族内で見返すためのものです。食事制限、療養食、アレルギー、衛生、賞味期限、食器の劣化判断は別の管理対象として扱ってください。",
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

export default function ParentHomeFamilyTablewareCombinationRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の食卓メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族内の食卓の覚えをそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省したときは分かっていたはずの「お父さんの黒い茶碗」「お母さんの花柄の湯のみ」「お正月だけ出していたお盆」も、
          数か月たつと兄弟姉妹で少しずつ記憶がずれることがあります。正解を決めるためではなく、家族の中で見返しやすい形にしておくと、次の帰省や親族の集まりの前に話を合わせやすくなります。
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
            itemId="p74"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家族の記憶に残る「取り合わせ」を軽く残す</h2>
        <p>
          食器そのものを細かく調べ始めると、窯元、銘、購入時期、金額などに話が広がりすぎます。このメモではそこまで追いかけず、
          「誰が、どの茶碗や湯のみを、どの場面で長く使ってきたか」だけを家族内で見返せる粒度にします。
        </p>
        <p>
          ふだんの朝ごはん、夕飯、日中のお茶、週末の和菓子、お正月、お盆、親族の集まり、来客時のお茶など、場面ごとに思い出すと書きやすくなります。
          親が話してくれた由来も、聞いた範囲のまま「らしい」「と聞いた」と残しておくと、強い断定を避けられます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">このメモで扱わないことを先に決める</h2>
        <p>
          家族で見返すための覚え書きなので、鑑定、査定、市場価値、処分、廃棄、形見分け、所有権、相続、保険評価額などの判断には使いません。
          食器のブランド名や作家名を確定する欄も持たせず、家族内で通じる呼び方を優先します。
        </p>
        <p>
          食事制限、療養食、介護食、食物アレルギー、食品衛生、賞味期限、食器の劣化判断も対象外です。料理の作り方や味つけの記録とも分けて、
          「食卓に出すときの取り合わせ」だけに範囲を絞ると、家族で続けやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、家族別の茶碗・湯のみ・お椀、ふだんの食卓、節目・来客時、親が話してくれた由来、家族内更新記録を、
          PDFとExcelで同じ考え方でそろえています。無料メモで範囲を試してから、印刷や保存しやすい形に移したい場合に使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p74"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P74単品を見る
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
