import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-kitchen-tools-record";
const title = "高齢親の家の台所道具・台所小物を家族で控えるメモ";
const description =
  "鍋、フライパン、包丁、まな板、ザル、ボウル、計量道具など、親の家で長く使ってきた台所道具を、処分や価値判断に使わず家族内の軽い控えとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383389?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-kitchen-tools-record&utm_content=single_template";
const noteUrl = "https://note.com/mild_quail6092/n/n5fe6b65984c4";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-kitchen-tools-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_kitchen_tools";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-kitchen-tools-record&utm_content=full_pack";

const faqItems = [
  {
    question: "台所道具メモには何を書けばよいですか？",
    answer:
      "家族内で通じる名前、置き場所、よく使っていた場面、親が話していた呼び方、次に確認したいことを短く書きます。価格、査定、処分、衛生状態の判断には使わない前提で整理します。",
  },
  {
    question: "包丁や調理器具の安全確認に使えますか？",
    answer:
      "使えません。このメモは思い出や家族内の控えを残すためのものです。刃物、火気、電気製品、衛生、修理、廃棄などの判断は別途確認してください。",
  },
  {
    question: "個人情報を書く欄はありますか？",
    answer:
      "ありません。住所、電話番号、口座、暗証番号、契約情報、本人確認情報などは書かない運用を前提にしています。",
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

export default function ParentHomeKitchenToolsRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家族内の台所道具メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、台所道具の呼び方と置き場所をそろえる</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省した時に「この小さい鍋は誰がよく使っていたか」「まな板はどこに戻していたか」が分からなくなることがあります。
          正解を決めるためではなく、家族の中であとから見返せる言葉にしておくと、片づけや親族の集まりの前に話を合わせやすくなります。
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
            itemId="p75"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">道具そのものより、家族内で通じる言葉を残す</h2>
        <p>
          台所道具は数が多く、細かく調べ始めると購入時期やメーカー名に話が広がりやすくなります。このメモではそこまで追いかけず、
          「母が煮物に使っていた深い鍋」「父が魚を切る時だけ出していたまな板」のように、家族内で通じる呼び方を残します。
        </p>
        <p>
          使っていた場面、普段の置き場所、親が話していた言い方、次に確認したいことを分けておくと、帰省時の短い会話でも追記しやすくなります。
          思い出を残す欄と確認待ちの欄を分けることで、片づけの判断と混ざりにくくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">このメモで扱わないことを先に決める</h2>
        <p>
          このメモは、査定、処分、修理、衛生、刃物や火気の安全確認、家電の使用可否を判断するものではありません。状態が気になる道具、
          刃物、ガス器具、電気製品、食品に触れるものは、家族内メモとは別に確認してください。
        </p>
        <p>
          住所、電話番号、口座、暗証番号、契約情報、本人確認情報なども記録しません。外に出してよい情報だけに絞ることで、家族で共有しやすい控えにできます。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートと関連導線</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、台所道具の種類、置き場所、使っていた場面、親の言葉、確認待ちをPDFとExcelで同じ考え方でそろえられます。
          noteには使い方の短い案内も置いています。無料メモで試してから、印刷や保存しやすい形に移したい場合に使えます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p75"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P75単品を見る
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
