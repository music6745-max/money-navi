import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-sewing-box-thread-buttons-record";
const title = "高齢親の家の裁縫箱・糸・ボタン・針山まわりメモ";
const description =
  "茶の間や机、棚に長年置かれていた裁縫箱、糸箱、ボタン缶、針山、裁ちばさみ入れなどを、裁縫手順や安全判断、処分判断とは切り分け、家族内で見返す控えとして整理するメモです。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383434?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-sewing-box-thread-buttons-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-sewing-box-thread-buttons-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_sewing_box_thread_buttons";
const setUrl =
  "https://kaigo-okane.booth.pm/items/8383437?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-sewing-box-thread-buttons-record&utm_content=starter_pack";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-sewing-box-thread-buttons-record&utm_content=full_pack";

const faqItems = [
  {
    question: "裁縫箱まわりメモには何を書きますか？",
    answer:
      "裁縫箱、糸箱、ボタン缶、針山、裁ちばさみ入れなどの呼び方、置かれていた場所、見た目、親が話してくれた範囲の由来、家族内で覚えが違うことを控えます。針の使い方、けが予防、裁縫手順、衣類修理、処分や査定の判断は書かない前提です。",
  },
  {
    question: "衣類の修理や安全管理にも使えますか？",
    answer:
      "使いません。このメモは裁縫道具まわりの物を家族内の思い出として見返すための控えです。針の扱い、安全管理、衛生管理、服の修理、裾上げ、ボタン付けの方法は別の手順で確認してください。",
  },
  {
    question: "無料ツールとBOOTH版の違いは何ですか？",
    answer:
      "無料ツールはその場で短い控えを作るための簡易メモです。BOOTH版はPDFとExcelで、複数の裁縫道具まわりを印刷・一覧化しやすい形にしています。",
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

export default function ParentHomeFamilySewingBoxThreadButtonsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の裁縫道具メモ</span>
          <span>公開 2026-06-02</span>
          <span>確認 2026-06-02</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">無料メモで、裁縫箱まわりの呼び方と置き場所をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          裁縫箱や糸箱、ボタン缶は、家族の間だけで通じる呼び方が残りやすい小物です。
          無料メモでは、呼び方、置かれていた場所、見た目、親が話してくれたことだけを控えます。
          個人情報や書類内容、けが予防、裁縫手順、処分判断とは切り分けて残せます。
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
            itemId="p86"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">裁縫箱は、手順ではなく物の記憶として控える</h2>
        <p>
          P86で扱うのは、茶の間の机や棚、押し入れの近くなどに長年置かれていた裁縫箱、糸箱、
          ボタン缶、針山、裁ちばさみ入れ、糸通し、指ぬきなどです。どれを使うべきか、どう直すべきかを決めるページではありません。
        </p>
        <p>
          「あの木の裁縫箱」「ボタンが入っていた缶」「古い針山」のような家族内の呼び方を、
          置かれていた場所や見た目と一緒に残しておくと、帰省後の写真整理や家族内の会話で見返しやすくなります。
          親が話してくれた由来があれば、短い一言として残すだけで十分です。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">安全判断・修理・処分判断とは分けて書く</h2>
        <p>
          裁縫箱まわりには、針やはさみ、衣類修理、ボタン付け、布もの管理の話が混ざりやすくなります。
          このテンプレートでは、針の使い方、安全管理、けが予防、衛生管理、裁縫手順、服の修理、裾上げ、ボタン付けの方法は扱いません。
        </p>
        <p>
          売却、査定、鑑定、処分、相続、形見分けの判断にも使わない前提です。
          判断が必要な内容は、家族内の思い出メモから切り離し、別の確認手順に分けてください。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連セット</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、裁縫箱、糸箱、ボタン缶、針山、裁ちばさみ入れなどをPDFとExcelで控えられます。
          まとめて整理したい場合は、P86を含むセットや総合パックも使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p86"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P86単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={setUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_starter_pack"
            itemId="s86"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            S86まとめセットを見る
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
