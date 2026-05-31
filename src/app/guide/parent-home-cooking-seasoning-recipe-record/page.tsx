import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { siteConfig } from "@/lib/tools";

const slug = "parent-home-cooking-seasoning-recipe-record";
const title = "高齢親の家庭料理・味つけ・作り方を家族内で控える方法";
const description =
  "親が話してくれた家庭料理の名前、材料、目分量、火加減、味つけの加減を、レシピ公開や健康判断に使わず家族内の思い出メモとして整理する方法を解説します。";
const url = siteConfig.url + "/guide/" + slug;
const boothUrl =
  "https://kaigo-okane.booth.pm/items/8383190?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-cooking-seasoning-recipe-record&utm_content=single_template";
const toolUrl =
  "https://net-toolbox.jp/tools/kaigo-parent-home-cooking-seasoning-recipe-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_home_cooking_seasoning_recipe";
const fullPackUrl =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-cooking-seasoning-recipe-record&utm_content=full_pack";
const noteUrl = "https://note.com/mild_quail6092/n/n1c252356b93e";

const faqItems = [
  {
    question: "家庭料理・味つけメモには何を書けばよいですか？",
    answer:
      "料理名、親が使う呼び方、材料、目分量、火加減、味つけの加減、親が話してくれた思い出、試してみたときの家族内メモ、次に聞きたいことを短く残します。分かる範囲だけで使えます。",
  },
  {
    question: "食事制限、アレルギー、栄養管理にも使えますか？",
    answer:
      "使えません。このメモは家庭料理を思い出として残すための家族内メモです。食事制限、アレルギー、栄養管理、介護食、衛生・保存期限、食中毒、体調や医療の判断には使わず、必要な確認は専門家や公的情報で別途行ってください。",
  },
  {
    question: "レシピ公開や商品化にも使えますか？",
    answer:
      "使えません。家族内で見返す控えとして使います。SNS、ブログ、出版、販売、商品化、第三者への共有、著作権や権利者の許諾が関わる用途はこのメモの対象外です。住所、電話番号、口座、カード、ログイン情報などの秘密情報も書かないでください。",
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

export default function ParentHomeCookingSeasoningRecipeRecordPage() {
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
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">家庭料理メモ</span>
          <span>公開: 2026-06-01</span>
          <span>確認: 2026-06-01</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="leading-7 text-muted">{description}</p>
      </header>

      <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="mb-3 text-lg font-bold">まず無料メモで、親の言葉をそのまま残す</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          家庭料理の作り方は、分量が「少し」「ひとつかみ」「いつもの色」などの言葉で残っていることがあります。
          無料ツールでは、料理名、材料、目分量、火加減、味つけの加減、親が話してくれた思い出を、正確なレシピではなく家族内で見返す控えとして整理できます。
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
            itemId="p68"
            className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
          >
            BOOTHテンプレートを見る
          </TrackedExternalLink>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">料理名、材料、味つけを分けて控える</h2>
        <p>
          料理の話を聞くときは、料理名、材料、だいたいの分量、火加減、味つけの順に分けておくと、あとで家族が見返しやすくなります。
          完成したレシピに整えるより、親が話してくれた言い方を残すことを優先します。
        </p>
        <p>
          「何をどれくらい入れるか」だけでなく、「いつもの鍋」「この色になったら」「最後に少し足す」などの言葉も、家族にとっては十分な手がかりになります。
          分からないところは空欄のまま、次に聞くこととして残します。
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">思い出メモと試作メモも残す</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>料理名: 親が使う呼び方、地域の呼び方、家族内での呼び方</li>
          <li>材料: 分かる範囲の材料、目分量、代わりに使っていたもの</li>
          <li>作り方: 下ごしらえ、火加減、煮る・焼く・混ぜるタイミング</li>
          <li>味つけ: 濃さ、甘さ、香り、最後に足すもの、親が目印にしていた状態</li>
          <li>家族内更新: 試して近かった点、違った点、次に親へ聞きたいこと</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">健康判断、公開用レシピ、秘密情報とは分ける</h2>
        <p>
          このメモは、家庭料理を家族内で思い出として見返すための控えです。食事制限、アレルギー、栄養管理、介護食、衛生・保存期限、
          食中毒、体調や医療の判断には使いません。健康や安全に関わることは、専門家や公的情報で別途確認してください。
        </p>
        <p>
          SNS、ブログ、出版、販売、商品化、第三者への共有、著作権や権利者の許諾が関わる用途も対象外です。
          住所、電話番号、口座、カード、ログイン情報、本人確認情報などの個人情報や秘密情報も書かない前提にします。
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-card-border bg-card-bg p-5">
        <h2 className="mb-3 text-lg font-bold">テンプレートもまとめて用意</h2>
        <p className="mb-4 text-sm leading-7 text-muted">
          BOOTH版では、料理名と思い出、材料と目分量、作り方と火加減、味つけの加減、試作メモ、家族内更新記録を
          PDFとExcelで同じ粒度にそろえられます。ほかの実家まわりの控えメモと一緒に整えたい場合はフルパックも確認できます。
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedExternalLink
            href={boothUrl}
            eventName="booth_click"
            page={slug}
            position="bottom_single_template"
            itemId="p68"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            P68単品を見る
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
