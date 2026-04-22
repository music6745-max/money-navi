import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { WebSiteJsonLd } from "@/components/JsonLd";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - 新NISA・iDeCo・投資・副業の総合マネー情報サイト`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "新NISA",
    "iDeCo",
    "投資信託",
    "ネット証券",
    "ロボアドバイザー",
    "FX",
    "仮想通貨",
    "クレジットカード",
    "副業",
    "節税",
    "家計簿",
    "住宅ローン",
    "資産運用",
    "FIRE",
    "配当金",
    "株主優待",
  ],
  openGraph: {
    title: `${siteConfig.name} - 新NISA・iDeCo・投資・副業の総合マネー情報サイト`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - 投資・資産運用・副業の情報サイト`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6483317297217533"
          crossOrigin="anonymous"
        />
        {/* 🎯 UTM capture: GA4有効/無効に関わらず必ず動かす。
              流入元（net-toolbox・ai-tools-navi・organic 等）を sessionStorage に保存し、
              tracking.ts の trackEvent() が自動で全イベントに付与する。
              GA4測定ID未設定の期間中も、dataLayer にイベントは蓄積されるため、
              GA4有効化後すぐに過去カーソル分が確認できるわけではないが、
              少なくともUTMのセッション紐付けは遡及的に機能する。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var u=new URL(location.href);var keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];var c={};keys.forEach(function(k){var v=u.searchParams.get(k);if(v)c[k]=v;});if(Object.keys(c).length>0)sessionStorage.setItem('tn_utm',JSON.stringify(c));}catch(e){}`,
          }}
        />
        {/* GA4: Vercel の環境変数 NEXT_PUBLIC_GA_ID で測定IDを設定する。
              設定手順は docs/ga4_runbook.md を参照。 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{'send_page_view':true});`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <WebSiteJsonLd
          url={siteConfig.url}
          name={siteConfig.name}
          description={siteConfig.description}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/favicon.ico`,
            }),
          }}
        />
        <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-primary">
              💰 {siteConfig.name}
            </Link>
            <nav className="flex items-center gap-4 text-sm text-muted">
              <div className="hidden sm:flex items-center gap-4">
                <Link href="/guide" className="hover:text-primary transition-colors font-medium">
                  ガイド
                </Link>
                <Link href="/tools" className="hover:text-primary transition-colors font-medium">
                  ツール
                </Link>
                {categories.slice(0, 3).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-card-bg border-t border-card-border mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-muted">
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3 text-center">カテゴリ</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-primary">利用規約</Link>
              <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
              <Link href="/about" className="hover:text-primary">運営者情報</Link>
            </div>
            <div className="text-center mb-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span className="text-xs">姉妹サイト:</span>
              <a href="https://net-toolbox.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary">
                🧰 ネットツールボックス
              </a>
              <a href="https://ai-tools-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary">
                🤖 AIツールナビ
              </a>
            </div>
            <p className="text-center text-xs">
              当サイトは情報提供を目的としており、特定の金融商品の勧誘を目的としたものではありません。投資判断は自己責任でお願いします。
            </p>
            <p className="text-center mt-2">&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
