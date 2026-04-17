import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `利用規約｜${siteConfig.name}`,
  description: `${siteConfig.name}の利用規約。本サイトをご利用いただく前にお読みください。`,
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>利用規約</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">利用規約</h1>
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">1. 規約への同意</h2>
          <p>
            本利用規約（以下「本規約」）は、{siteConfig.name}（以下「当サイト」）の利用条件を定めるものです。ユーザーは当サイトを利用することにより、本規約に同意したものとみなします。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">2. 情報の正確性について</h2>
          <p>
            当サイトに掲載する情報は、信頼できる情報源に基づき作成していますが、その正確性・完全性・最新性を保証するものではありません。金融機関のサービス内容や金利・手数料等は予告なく変更される場合があります。最新の情報は必ず公式サイトでご確認ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">3. 投資に関する免責事項</h2>
          <p>
            当サイトは投資判断の参考となる情報を提供するものであり、特定の金融商品・サービスの購入や取引を勧誘するものではありません。投資には元本割れのリスクがあり、投資判断はユーザーご自身の責任においてお願いいたします。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">4. 著作権</h2>
          <p>
            当サイトに掲載されているコンテンツ（文章・画像・デザイン等）の著作権は、当サイト運営者または正当な権利者に帰属します。無断での複製・転載・二次利用を禁じます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">5. 禁止事項</h2>
          <p>ユーザーは、当サイトの利用にあたり、以下の行為を行ってはなりません。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>法令または公序良俗に違反する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>他のユーザーまたは第三者に不利益を与える行為</li>
            <li>当サイトのコンテンツを無断で商用利用する行為</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">6. 免責事項</h2>
          <p>
            当サイトの利用または利用不能から生じたいかなる損害についても、運営者は一切の責任を負いません。当サイトからリンクされている外部サイトの内容について、運営者は責任を負いません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">7. 規約の変更</h2>
          <p>
            当サイトは、必要と判断した場合、本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点で効力を生じるものとします。
          </p>
        </section>
        <section>
          <p className="text-muted text-xs">制定日: 2026年4月</p>
        </section>
      </div>
    </div>
  );
}
