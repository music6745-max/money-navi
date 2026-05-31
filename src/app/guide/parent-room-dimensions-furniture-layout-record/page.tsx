import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-room-dimensions-furniture-layout-record";
const title = "実家の部屋寸法・家具配置控えメモの作り方";
const description =
  "帰省時に測った実家の部屋寸法、家具の位置、搬入経路、確認日を、購入や施工の判断に使わない家族内の控えとして整理する方法をまとめます。";
const url = `${siteConfig.url}/guide/${slug}`;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383086?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-room-dimensions-furniture-layout-record&utm_content=single_template";
const noteUrl =
  "https://note.com/mild_quail6092/n/n96615f6604c5?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-room-dimensions-furniture-layout-record&utm_content=note_article";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-room-dimensions-furniture-layout-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_room_dimensions_furniture_layout";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-room-dimensions-furniture-layout-record&utm_content=full_pack";

const faqItems = [
  {
    question: "部屋寸法メモには何を書けばよいですか？",
    answer:
      "部屋名、測った日、測った人、幅・奥行き・高さ、窓や扉の位置、家具の置き場所、搬入経路の気づき、次に確認することを分けて書きます。正確な図面ではなく、家族があとで見返す控えとして使います。",
  },
  {
    question: "家具の購入やリフォーム判断に使えますか？",
    answer:
      "使えません。家具購入、施工、修理、介護用品の設置、バリアフリー改修などの判断は、販売店、施工会社、メーカー、管理会社、専門家の正式な確認で進めてください。このメモは事前確認の抜け漏れを減らすための整理用です。",
  },
  {
    question: "書かない方がよい情報はありますか？",
    answer:
      "住所、電話番号、鍵の場所、防犯コード、金庫、通帳、カード、ログイン情報、詳細な防犯上の配置などは入れないでください。共有するメモには、部屋の呼び名や確認した内容だけを残すのが安全です。",
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

export default function ParentRoomDimensionsFurnitureLayoutRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">実家の控えメモ</span>
          <span>公開: 2026-05-31</span>
          <span>確認: 2026-05-31</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで部屋ごとの控えを作る</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          カーテン、収納、介護用品、家具の買い替えを考える前に、部屋ごとの寸法と家具配置をひとつの控えにまとめておくと、
          家族間の確認が早くなります。無料ツールでは、測定日、部屋名、家具、搬入経路、次に確認することを同じ順番で整理できます。
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
            itemId="p61"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">部屋寸法は「いつ測ったか」が抜けやすい</h2>
        <p>
          実家の寸法メモは、数字そのものよりも「いつ、誰が、どこを、どう測ったか」を残すことが大切です。
          以前の寸法が残っていても、家具の移動、模様替え、床材やカーテンの変更で前提が変わることがあります。
        </p>
        <p>
          このメモでは、部屋名、測定日、家具配置、窓や扉、通路、搬入経路を分けて残します。
          正式な図面や施工資料ではなく、次回の帰省や家族会議で確認するための控えとして扱います。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">書く項目は、判断ではなく確認に寄せる</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>基本情報: 部屋の呼び名、確認日、測った人、家族内での共有範囲</li>
          <li>寸法控え: 幅、奥行き、高さ、窓、扉、収納、コンセントの位置</li>
          <li>家具配置: タンス、ベッド、机、椅子、テレビ台などの位置と動かしにくさ</li>
          <li>通路と搬入: 玄関、廊下、階段、扉幅、曲がり角など、次に確認したい場所</li>
          <li>写真の控え: 写真を撮った場所や保存先の名前だけを残し、個人情報は入れない</li>
          <li>次回確認: 買う前、依頼する前、家族に聞く前に見直す項目</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">購入や施工の判断には使わない</h2>
        <p>
          部屋寸法の控えは、販売店や施工会社に相談する前の準備には役立ちますが、家具が入る、設置できる、安全に使える、といった判断には使いません。
          商品の購入、修理、設置、リフォーム、介護用品の導入は、必ず販売店、メーカー、施工会社、管理会社、専門家の確認を取ってください。
        </p>
        <p>
          家族内で共有するメモには、住所、電話番号、鍵、防犯コード、金庫、口座、カード、ログイン情報、詳細な防犯上の配置を入れないことも重要です。
          共有しやすいメモほど、外に出してよい情報だけに絞ります。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、部屋寸法と家具配置の控えを印刷・共有しやすい形で使えます。
          実家まわりの整理をまとめて進めたい場合は、関連テンプレートを含むフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p61"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P61単品を見る
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
            itemId="p61_note"
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
