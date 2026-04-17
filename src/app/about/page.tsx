import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `運営者情報｜${siteConfig.name}`,
  description: `${siteConfig.name}の運営方針・編集ポリシー・運営者情報。中立的で実用的なマネー情報の提供を目指しています。`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>運営者情報</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">運営者情報</h1>
      <div className="prose prose-sm max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">サイト概要</h2>
          <p className="text-sm leading-relaxed">
            {siteConfig.name}は、新NISA・iDeCo・投資・副業・節税など、お金に関する実用的な情報を提供するメディアです。
            初心者にもわかりやすい解説記事と、意思決定に役立つシミュレーターを無料で提供しています。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">編集ポリシー</h2>
          <ul className="text-sm space-y-2 list-disc list-inside">
            <li>公的機関（金融庁、国税庁等）の情報を一次ソースとして優先参照します。</li>
            <li>金融機関の公式サイト・最新のサービス情報に基づいて比較を行います。</li>
            <li>広告リンクには適切に「PR」「アフィリエイト」等の表記を行います。</li>
            <li>投資判断は必ずユーザーご自身の責任でお願いしており、特定商品の勧誘は行いません。</li>
            <li>情報の正確性には最大限注意していますが、最新の公式情報のご確認をお願いします。</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">運営情報</h2>
          <dl className="text-sm space-y-1">
            <div className="flex gap-3"><dt className="w-28 text-muted">サイト名</dt><dd>{siteConfig.name}</dd></div>
            <div className="flex gap-3"><dt className="w-28 text-muted">URL</dt><dd>{siteConfig.url}</dd></div>
            <div className="flex gap-3"><dt className="w-28 text-muted">運営開始</dt><dd>2026年4月</dd></div>
            <div className="flex gap-3"><dt className="w-28 text-muted">お問い合わせ</dt><dd><Link href="/contact" className="text-primary hover:underline">/contact</Link></dd></div>
          </dl>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">姉妹サイト</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="https://net-toolbox.jp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                🧰 ネットツールボックス
              </a>
              <span className="text-muted ml-2">- 無料Web便利ツール400+</span>
            </li>
            <li>
              <a href="https://ai-tools-navi.jp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                🤖 AIツールナビ
              </a>
              <span className="text-muted ml-2">- AIツール比較・解説150+</span>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">免責事項</h2>
          <p className="text-sm leading-relaxed text-muted">
            当サイトの情報は、特定の金融商品の購入や取引を勧誘するものではありません。投資は元本保証されておらず、損失が発生する可能性があります。投資判断はご自身の責任において行ってください。当サイトの情報によって生じたいかなる損害についても、運営者は一切の責任を負いません。
          </p>
        </section>
      </div>
    </div>
  );
}
