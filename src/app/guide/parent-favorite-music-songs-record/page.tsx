import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-favorite-music-songs-record";
const title = "高齢親の好きな音楽・歌メモを家族で控える方法";
const description =
  "親が好きな曲、歌手、思い出の歌、会話に出る歌を、歌詞の転載や契約判断ではなく家族内の会話の手がかりとして整理する方法をまとめます。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383153?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-favorite-music-songs-record&utm_content=single_template";
const noteUrl =
  "https://note.com/mild_quail6092/n/n991ac93f9331?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-favorite-music-songs-record";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-favorite-music-songs-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_favorite_music_songs";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-favorite-music-songs-record&utm_content=full_pack";

const faqItems = [
  {
    question: "好きな音楽・歌メモには何を書けばよいですか？",
    answer:
      "親がよく口にする曲名、歌手名、思い出の歌、歌が出た場面、次に聞いてみたいことを、家族内で分かる短い言葉で控えます。",
  },
  {
    question: "歌詞を書き写してもよいですか？",
    answer:
      "書き写さないでください。このメモは曲名や歌手名、家族内の会話メモを残すためのものです。歌詞の転載、長い引用、音源の共有には使いません。",
  },
  {
    question: "音楽配信やCD購入、健康状態の判断に使えますか？",
    answer:
      "使えません。音楽配信、CD購入、契約、解約、権利確認、健康状態や認知機能の判断とは分け、家族内で話題を思い出すための控えとして使います。",
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
    publishedTime: "2026-06-03",
  },
};

export default function ParentFavoriteMusicSongsRecordPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={url}
        datePublished="2026-06-03"
        dateModified="2026-06-03"
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
          <span>公開: 2026-06-03</span>
          <span>確認: 2026-06-03</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、曲名と会話の手がかりを控える</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          帰省や電話で、昔よく聞いた歌、好きな歌手、テレビで流れていた曲の話が出ても、あとから思い出せないことがあります。
          曲名や歌手名、思い出の場面を短く控えると、次に話す家族が見返しやすくなります。
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
            itemId="p112"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">曲、歌手、思い出の場面を分ける</h2>
        <p>
          「若いころに聴いていた歌」「テレビで流れると口ずさむ曲」「家族旅行でよく歌っていた歌」
          のように、家族が思い出しやすい粒度で控えます。正確な発売年や音源情報を集めるより、家族内で会話の入口に
          できることを優先します。
        </p>
        <p>
          曲名があいまいな場合は、親が話していた呼び方や覚えている範囲だけで十分です。歌手名、番組名、季節や場所の
          メモを添えると、兄弟姉妹で見返すときにも使いやすくなります。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">歌詞転載、契約、健康判断とは分ける</h2>
        <p>
          このメモには歌詞を書き写しません。短い曲名、歌手名、家族内の思い出や会話メモだけを残します。
          音楽配信、CD購入、定期契約、解約、権利確認、音源共有の判断にも使いません。
        </p>
        <p>
          また、歌の好みや覚えている内容から、健康状態や認知機能を判断する用途にも使いません。
          家族が次に自然に話題を出すための小さな控えとして扱います。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、よく聴く曲、好きな歌手やグループ、思い出の歌、会話に出る歌、更新記録をPDFとExcelで
          同じ粒度にそろえられます。作成背景を読みたい場合はnote記事、ほかの実家まわりの控えとまとめたい場合は
          フルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p112"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P112単品を見る
          </TrackedExternalLink>
          <TrackedExternalLink
            href={noteUrl}
            eventName="note_click"
            page={slug}
            position="bottom_note"
            itemId="p112_note"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            note記事を読む
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
