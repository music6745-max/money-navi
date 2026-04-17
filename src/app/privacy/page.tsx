import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${siteConfig.name}`,
  description: `${siteConfig.name}のプライバシーポリシー。個人情報の取扱い、Cookie、アクセス解析についてご案内します。`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>プライバシーポリシー</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">1. 基本方針</h2>
          <p>
            {siteConfig.name}（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サイトがどのような情報を収集し、どのように使用するかを説明するものです。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">2. 収集する情報</h2>
          <p>
            当サイトでは、以下の情報を自動的に収集する場合があります。
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>アクセスログ（IPアドレス、ブラウザ情報、参照元URL等）</li>
            <li>Cookieによる閲覧情報</li>
            <li>お問い合わせフォームから送信された情報</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">3. Cookieおよびアクセス解析</h2>
          <p>
            当サイトは、Googleアナリティクス等のアクセス解析ツールを利用しています。これらのツールは、Cookieを使用してトラフィックデータを収集します。収集された情報は匿名であり、個人を特定するものではありません。
          </p>
          <p className="mt-2">
            ブラウザの設定からCookieを無効にすることで、データ収集を拒否することができます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">4. 広告配信（Google AdSense等）</h2>
          <p>
            当サイトは、第三者配信の広告サービス（Google AdSense等）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>
          <p className="mt-2">
            Google AdSenseのパーソナライズド広告は、<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">広告設定</a>から無効化できます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">5. アフィリエイトプログラム</h2>
          <p>
            当サイトは、A8.net・もしもアフィリエイト・バリューコマース等のアフィリエイトプログラムに参加しています。これらのリンクから商品やサービスが購入された場合、当サイトに紹介料が支払われる仕組みです。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">6. 個人情報の第三者提供</h2>
          <p>
            当サイトは、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">7. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
          </p>
        </section>
        <section>
          <p className="text-muted text-xs">制定日: 2026年4月</p>
        </section>
      </div>
    </div>
  );
}
