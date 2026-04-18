export function CrossPromotion() {
  const toolCategories = [
    { name: "文字数カウント", icon: "📝" },
    { name: "QRコード作成", icon: "📱" },
    { name: "複利計算", icon: "📈" },
    { name: "確定申告ツール", icon: "📑" },
  ];

  const aiCategories = [
    { name: "AIチャット", icon: "💬" },
    { name: "AI画像生成", icon: "🎨" },
    { name: "AI文章作成", icon: "✍️" },
    { name: "AIコード生成", icon: "💻" },
  ];

  return (
    <section className="mt-10 mb-6 max-w-4xl mx-auto px-4 space-y-3">
      <a
        href="https://net-toolbox.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🛠️</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            無料Webツール250本もチェック！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          複利計算・文字数カウント・QRコード作成・パスワード生成など250以上の無料ツール。登録不要・ブラウザ完結で安心。
        </p>
        <div className="flex flex-wrap gap-2">
          {toolCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
      <a
        href="https://ai-tools-navi.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🤖</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            AIツールの比較もチェック！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          ChatGPT・Claude・Gemini・Copilotなど106以上のAIツールを料金・機能で徹底比較。業務効率化・副業にも。
        </p>
        <div className="flex flex-wrap gap-2">
          {aiCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
