import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { guides } from "@/lib/guides";
import { FAQJsonLd } from "@/components/JsonLd";
import { ToolSearch } from "@/components/ToolSearch";
import { AdSenseUnit } from "@/components/AdSenseUnit";

const faqItems = [
  {
    question: "投資ナビJPはどんなサイトですか？",
    answer: "新NISA・iDeCo・ネット証券・ロボアド・FX・仮想通貨・クレカ・副業など、お金に関するサービスの比較とシミュレーターを無料で提供する情報サイトです。",
  },
  {
    question: "紹介されているサービスは自分で使えますか？",
    answer: "はい、すべて公式サイトへのリンクから申し込めます。当サイトは中立的な情報提供を心がけており、最終的な投資判断はご自身でお願いします。",
  },
  {
    question: "シミュレーターは無料で使えますか？",
    answer: "はい、すべてのシミュレーター・計算ツールは登録不要・完全無料でご利用いただけます。入力データはブラウザ内で処理され、サーバーに送信されません。",
  },
  {
    question: "初心者でも使えますか？",
    answer: "はい、投資初心者向けの解説ガイドを多数用意しています。新NISAの始め方、iDeCoの仕組み、FIRE達成への道筋など、基礎から応用まで網羅しています。",
  },
];

export default function Home() {
  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: tools.filter((t) => t.category === cat.slug),
  }));

  // 人気ガイドは単なる guides.slice(0, 6) ではなく、
  // 「コンテンツが厚く・インデックスされやすい」rich guide を意図的に表示する。
  // ↓これで homepage から rich guide への発リンクが手動で保証される（crawl 優先度UP）
  const popularGuideSlugs = [
    "business-card-comparison-2026",
    "dual-income-household-guide",
    "high-income-tax-strategy",
    "freelance-retirement-guide",
    "real-estate-crowdfunding-comparison-2026",
    "fp-consultation-guide",
  ];
  const popularGuides = popularGuideSlugs
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const featuredOffers = [
    {
      href: "/go/rheos-hifumi-nisa",
      icon: "📈",
      label: "新NISAで成長企業に投資",
      title: "ひふみ NISA",
      desc: "日本株を中心に成長企業を探すアクティブ運用枠。インデックス投資に加えて選択肢を広げたい方向け。",
      badge: "資産形成",
    },
    {
      href: "/go/zeirishi-dotcom",
      icon: "🧾",
      label: "税務・確定申告の相談",
      title: "税理士ドットコム",
      desc: "副業、投資、個人事業の税務で迷ったときに相談先を探せるサービス。節税や申告前の確認に。",
      badge: "税務相談",
    },
    {
      href: "/go/hoken-mammoth",
      icon: "🛡️",
      label: "家計と保険の見直し",
      title: "保険マンモス",
      desc: "ライフプランや保険料の見直しをFPに相談。投資に回せる家計余力を作りたい方向け。",
      badge: "FP相談",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <FAQJsonLd items={faqItems} />

      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          💰 {siteConfig.name}
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          新NISA・iDeCo・投資・副業の総合マネー情報サイト
        </p>
        <p className="text-sm text-muted mt-2">
          {tools.length}ツール ・ {guides.length}ガイド記事 ・ 登録不要 ・ 完全無料
        </p>
      </section>

      <ToolSearch />

      <section className="mb-10 mt-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">今週の注目サービス</p>
            <h2 className="text-xl font-bold">資産形成・税務・保険をまとめて見直す</h2>
          </div>
          <span className="text-xs text-muted">無料相談・口座開設の比較先</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {featuredOffers.map((offer) => (
            <a
              key={offer.href}
              href={offer.href}
              className="block rounded-lg border border-card-border bg-background p-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-2xl">{offer.icon}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                  {offer.badge}
                </span>
              </div>
              <p className="text-xs font-semibold text-muted">{offer.label}</p>
              <h3 className="mt-1 text-base font-bold">{offer.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{offer.desc}</p>
              <span className="mt-3 inline-block text-xs font-bold text-primary">詳細を見る →</span>
            </a>
          ))}
        </div>
      </section>

      {/* 🆕 新着高単価ガイド */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🆕 新着ガイド（2026年4月）</h2>
          <Link href="/guide" className="text-sm text-primary hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { slug: "business-card-comparison-2026", label: "法人・個人事業主ビジネスカード", icon: "🏢", desc: "freee/三井住友/楽天他10選" },
            { slug: "fp-consultation-guide", label: "FP無料相談比較", icon: "🧑‍💼", desc: "保険見直しラボ他5選" },
            { slug: "dual-income-household-guide", label: "共働き夫婦の資産運用", icon: "👫", desc: "世帯年収別最適プラン" },
            { slug: "real-estate-crowdfunding-comparison-2026", label: "不動産クラファン10社", icon: "🏢", desc: "COZUCHI/CREAL他" },
            { slug: "high-income-tax-strategy", label: "年収1000万円超節税戦略", icon: "💰", desc: "年50-80万円節税" },
            { slug: "freelance-retirement-guide", label: "フリーランス年金完全ガイド", icon: "👴", desc: "iDeCo/付加年金/基金" },
          ].map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="block bg-gradient-to-br from-accent/10 to-accent/0 border-2 border-accent/30 rounded-lg p-4 hover:border-accent/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl">{g.icon}</span>
                <div>
                  <div className="text-sm font-bold">{g.label}</div>
                  <div className="text-xs text-muted mt-0.5">{g.desc}</div>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-accent text-white text-[10px] rounded-full font-bold">NEW</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2026年おすすめランキング */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🏆 2026年おすすめランキング</h2>
          <Link href="/guide" className="text-sm text-primary hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { slug: "nisa-broker-ranking-2026", label: "新NISA証券会社TOP5", icon: "💰", desc: "ポイント還元で選ぶ" },
            { slug: "roboadvisor-comparison", label: "ロボアドバイザー比較", icon: "🤖", desc: "手数料・運用成績" },
            { slug: "ideco-broker-comparison", label: "iDeCo金融機関比較", icon: "🏦", desc: "節税効果を最大化" },
            { slug: "fx-broker-ranking", label: "FX口座TOP10", icon: "💹", desc: "キャンペーン比較" },
            { slug: "crypto-exchange-comparison", label: "仮想通貨取引所比較", icon: "₿", desc: "手数料・セキュリティ" },
            { slug: "high-reward-credit-cards", label: "高還元率クレカ10選", icon: "💳", desc: "還元率1%以上" },
          ].map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="block bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/20 rounded-lg p-4 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl">{g.icon}</span>
                <div>
                  <div className="text-sm font-bold">{g.label}</div>
                  <div className="text-xs text-muted mt-0.5">{g.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* カテゴリナビ */}
      <nav className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="inline-flex items-center gap-1.5 bg-card-bg border border-card-border rounded-full px-4 py-2 text-sm hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
            <span className="text-xs text-muted">
              ({tools.filter((t) => t.category === cat.slug).length})
            </span>
          </Link>
        ))}
      </nav>

      {/* カテゴリ別ツール */}
      {toolsByCategory
        .filter((c) => c.tools.length > 0)
        .map((cat) => (
          <section key={cat.slug} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                {cat.icon} {cat.name}
              </h2>
              <Link
                href={`/category/${cat.slug}`}
                className="text-sm text-primary hover:underline"
              >
                すべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.tools.slice(0, 6).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="text-base font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

      <AdSenseUnit format="horizontal" className="my-8" />

      {/* ガイド記事 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">📚 人気のガイド記事</h2>
          <Link href="/guide" className="text-sm text-primary hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {popularGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{guide.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {categories.find((c) => c.slug === guide.category)?.name || guide.category}
                    </span>
                    <span className="text-xs text-muted">{guide.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sister Sites */}
      <section className="mt-8 rounded-xl p-8" style={{ background: "linear-gradient(135deg, #059669 0%, #2563eb 100%)", color: "#ffffff" }}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">🔗</span>
          <div>
            <h2 className="text-xl font-bold" style={{ color: "#ffffff" }}>姉妹サイトもチェック</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>ツール・AI情報もまとめてご覧ください</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
          <a href="https://net-toolbox.jp" target="_blank" rel="noopener noreferrer" className="rounded-lg p-4 hover:opacity-90 transition" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div className="text-sm font-bold" style={{ color: "#ffffff" }}>🧰 ネットツールボックス</div>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>無料Web便利ツール400+</div>
          </a>
          <a href="https://ai-tools-navi.jp" target="_blank" rel="noopener noreferrer" className="rounded-lg p-4 hover:opacity-90 transition" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div className="text-sm font-bold" style={{ color: "#ffffff" }}>🤖 AIツールナビ</div>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>AIツール比較・解説150+</div>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-6">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-card-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4">
          {siteConfig.name}について
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            {siteConfig.name}は、資産形成・投資・副業・節約といった「お金」に関する情報を中立的に提供するサイトです。
            新NISA・iDeCo・ネット証券・ロボアドバイザー・FX・仮想通貨・クレジットカード・副業など、
            幅広いジャンルを網羅し、複雑な制度やサービスをわかりやすく解説します。
          </p>
          <p>
            {tools.length}種類の無料シミュレーター・計算ツールで具体的な数字をシミュレーションでき、
            {guides.length}本のガイド記事で実践的な知識を身につけられます。
          </p>
          <p className="text-xs">
            ※当サイトに掲載されている情報は、投資の勧誘を目的としたものではありません。投資判断はご自身の責任でお願いいたします。
          </p>
        </div>
      </section>
    </div>
  );
}
