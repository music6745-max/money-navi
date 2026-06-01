import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-family-plants-garden-record";
const title = "高齢親の家の鉢植え・庭の花・盆栽を家族で控えるメモ";
const description =
  "家のなか、縁側、庭先で家族が長年見てきた鉢植え、植木、庭の花、盆栽、観葉植物を、手入れや処分の判断に使わず家族内の軽い控えとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383400?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-plants-garden-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/naf8876e99ae8";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-family-plants-garden-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_family_plants_garden";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-family-plants-garden-record&utm_content=full_pack";

const faqItems = [
  {
    question: "鉢植えや庭の花のメモには何を書けばよいですか？",
    answer:
      "家族内で通じる呼び方、置いてあった場所、よく見ていた季節や場面、親が話していた由来、次に確認したいことを短く書きます。育て方、処分、価値判断を決める欄にはしません。",
  },
  {
    question: "水やりや庭仕事の引き継ぎ表として使えますか？",
    answer:
      "使えません。このメモは家族が見てきた植物の呼び方や思い出を控えるためのものです。水やり、剪定、植え替え、薬剤、外作業の安全確認は別途確認してください。",
  },
  {
    question: "住所や連絡先を書く欄はありますか？",
    answer:
      "ありません。住所、電話番号、管理会社、業者名、契約情報、本人確認情報などは書かない運用を前提にしています。",
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

export default function ParentHomeFamilyPlantsGardenRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の草木メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、家族だけに通じる草木の呼び方をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省した時に「縁側の赤い花」「父が毎年見ていた盆栽」「母が窓辺に置いていた鉢」と話せても、
          あとから写真だけを見ると場所や呼び方があいまいになりがちです。家族内で通じる言葉にしておくと、次の帰省や親族の集まりで見返しやすくなります。
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
            itemId="p77"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">家のなか・縁側・庭先を分けて残す</h2>
        <p>
          鉢植え、植木、庭の花、盆栽、観葉植物は、場所と季節の記憶が一緒になって残りやすいものです。
          「玄関の横」「縁側の端」「台所の窓辺」「庭先の奥」のように、家族内で分かる場所の言葉を先に書いておくと見返しやすくなります。
        </p>
        <p>
          植物の名前が正確に分からなくても、親が呼んでいた名前や、家族がいつも使っていた呼び方を残せます。
          花が咲く時期、家族で見ていた場面、親が話していたひと言を分けることで、写真だけでは残りにくい背景を短く控えられます。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">手入れ・処分・価値判断のメモと混ぜない</h2>
        <p>
          このメモは、水やり、剪定、植え替え、薬剤、外作業の安全、鉢の移動、処分、売買、鑑定を決めるためのものではありません。
          家族が長年見てきた草木について、呼び方や思い出を見返す控えとして使います。
        </p>
        <p>
          住所、電話番号、契約情報、業者名、本人確認情報なども記録しません。家族で共有しても差し支えない軽い情報だけに絞ると、
          帰省時の短い会話からでも続けやすくなります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、草木の呼び方、置いてあった場所、季節、親の言葉、確認待ちをPDFとExcelで同じ考え方でそろえられます。
          noteには使い方の短い案内も置いています。無料メモで試してから、印刷や保存しやすい形に移したい場合に使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p77"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P77単品を見る
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
