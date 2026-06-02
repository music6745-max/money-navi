import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-umbrella-rain-gear-record";
const title = "高齢親の家の傘・雨具まわりメモ";
const description =
  "玄関や傘立て、物置に長年置かれていた傘、折りたたみ傘、雨合羽、長靴、雨具袋などを、防災・外出可否・処分判断とは切り分け、家族内で見返す控えとして整理するメモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383439?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-umbrella-rain-gear-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n6723c733ccee";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-umbrella-rain-gear-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_umbrella_rain_gear";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383440?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-umbrella-rain-gear-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-umbrella-rain-gear-record&utm_content=full_pack";

const faqItems = [
  {
    question: "傘・雨具まわりメモには何を書きますか？",
    answer:
      "傘、折りたたみ傘、雨合羽、長靴、雨具袋、傘立ての中に長くあったものの呼び方、置かれていた場所、見た目、親が話してくれた範囲の由来を控えます。外出可否、防災判断、修理、処分、譲渡の判断には使いません。",
  },
  {
    question: "雨の日の外出判断や防災準備にも使えますか？",
    answer:
      "使いません。このメモは傘や雨具を家族内の思い出として見返す控えです。雨の日の外出判断、防災用品の確認、避難や安全に関わる判断は、別の確認手順や担当窓口の案内に分けてください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールはその場で短い控えを作るための簡易メモです。BOOTH版はPDFとExcelで、複数の傘や雨具を印刷・一覧化しやすい形にしています。",
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

export default function ParentHomeFamilyUmbrellaRainGearRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の傘・雨具メモ</span>
          <span>公開 2026-06-02</span>
          <span>確認 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、傘や雨具の呼び方と置き場所をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          傘や雨合羽、長靴は、玄関や物置に長く置かれていても、家族ごとの呼び方や覚えている場面が違いやすいものです。
          無料メモでは、呼び方、置かれていた場所、見た目、親が話してくれたことだけを控えます。
          雨の日の外出判断、防災用品の判断、処分判断とは切り分けて残せます。
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
            itemId="p87"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">傘や雨具は、使う判断ではなく物の記憶として控える</h2>
        <p>
          P87で扱うのは、玄関、傘立て、物置、勝手口まわりなどに長年置かれていた傘、折りたたみ傘、
          雨合羽、長靴、雨具袋、古い傘カバーなどです。どれを使うべきか、いつ外出できるかを決めるページではありません。
        </p>
        <p>
          「玄関の黒い傘」「お客さん用に置いていた傘」「昔の雨合羽」「物置の長靴」のような家族内の呼び方を、
          置かれていた場所や見た目と一緒に残しておくと、帰省後の写真整理や家族内の会話で見返しやすくなります。
          親が話してくれた由来があれば、短い一言として残すだけで十分です。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">安全・防災・処分の判断とは分けて書く</h2>
        <p>
          傘や雨具まわりには、雨の日の外出、防災用品、避難時の持ち出し、足元の安全、劣化、処分の話が混ざりやすくなります。
          このテンプレートでは、外出可否、防災判断、避難判断、修理、補修、処分、譲渡、売却、相続、形見分けの判断は扱いません。
        </p>
        <p>
          個人情報、住所、連絡先、決済情報、契約情報も記録しない前提です。
          判断が必要な内容は、家族内の思い出メモから切り離し、別の確認手順に分けてください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、傘、雨具、長靴、傘立てまわりをPDFとExcelで控えられます。
          noteには、玄関まわりの小物を安全判断と混ぜずに記録するための案内を置いています。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p87"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P87単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="all_87"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            87商品まとめセットを見る
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
