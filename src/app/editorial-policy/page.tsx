import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `編集方針・広告掲載方針｜${siteConfig.name}`,
  description:
    `${siteConfig.name}の編集方針、情報確認手順、広告・アフィリエイト掲載方針、金融記事の免責事項をまとめています。`,
  alternates: { canonical: `${siteConfig.url}/editorial-policy` },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>編集方針・広告掲載方針</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">編集方針・広告掲載方針</h1>
      <p className="text-sm text-muted leading-relaxed mb-8">
        {siteConfig.name}は、投資・保険・税金・家計に関する判断材料を整理する情報サイトです。
        特定の商品購入や投資行動を勧誘するのではなく、読者が公式情報を確認しながら比較・検討できる状態を目指します。
      </p>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3">編集で重視すること</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>初心者が最初に確認すべき制度、費用、リスク、手順を明確にする。</li>
            <li>ランキングや比較では、手数料、対象者、注意点、使い分けの基準を本文中に示す。</li>
            <li>投資・保険・税金では、断定的な収益表現や個別助言に見える表現を避ける。</li>
            <li>広告リンクの有無にかかわらず、読者にとって確認すべき不利な条件やリスクも記載する。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">情報確認の手順</h2>
          <p>
            記事作成・更新時は、できる限り公的機関、金融機関、保険会社、証券会社、サービス提供会社の公式ページを確認します。
            金利、手数料、キャンペーン、税制、加入条件は変更されるため、記事内では確認日時や公式確認の必要性を明記します。
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>制度・税制: 金融庁、国税庁、総務省、厚生労働省などの公開情報を優先する。</li>
            <li>金融商品・証券会社: 各社の公式ページ、手数料表、商品説明ページを確認する。</li>
            <li>保険: 補償範囲、免責、更新条件、年齢制限、保険料例を確認する。</li>
            <li>比較表: 料金、条件、リスクが変わりやすい項目は最新公式情報の再確認を促す。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">広告・アフィリエイトについて</h2>
          <p>
            当サイトにはPR・広告・アフィリエイトリンクが含まれます。リンク経由で商品やサービスの申込みがあった場合、
            当サイトに紹介料が支払われることがあります。ただし、広告収益の有無だけで記事の結論を決めず、読者の比較検討に必要な情報を優先します。
          </p>
          <p className="mt-3">
            広告リンクは、本文の情報を補足する導線として配置します。広告やCTAが本文より多く見える状態にならないよう、
            記事本文、比較基準、注意点、関連情報の充実を優先します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">金融・投資記事の免責事項</h2>
          <p>
            当サイトの情報は一般的な情報提供を目的としたもので、特定の金融商品、保険商品、暗号資産、投資手法の購入・売却・加入を推奨するものではありません。
            投資には元本割れ、価格変動、為替変動、流動性、税制変更などのリスクがあります。最終判断は、読者ご自身の責任で行ってください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">修正依頼・お問い合わせ</h2>
          <p>
            誤り、古い情報、補足すべき点を見つけた場合は、
            <Link href="/contact" className="text-primary hover:underline">お問い合わせフォーム</Link>
            からご連絡ください。確認後、必要に応じて記事を更新します。
          </p>
        </section>

        <p className="text-xs text-muted">制定日: 2026年5月22日</p>
      </div>
    </div>
  );
}
