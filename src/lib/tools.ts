export const siteConfig = {
  name: "投資ナビJP",
  description:
    "新NISA・iDeCo・ネット証券・ロボアド・FX・仮想通貨・クレカ・副業まで、投資と資産運用の比較とシミュレーターを無料で提供。日本の投資家のための総合マネー情報サイト。",
  url: "https://toshi-navi.jp",
};

export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  {
    slug: "nisa-simulator",
    name: "新NISA積立シミュレーター",
    description: "毎月の積立額・利回り・期間から将来の資産額を計算。新NISA（つみたて投資枠・成長投資枠）に対応。",
    icon: "💰",
    category: "nisa",
  },
  {
    slug: "compound-interest",
    name: "複利計算ツール",
    description: "元本・利回り・期間から複利運用の資産推移を計算。年利・月利の切り替え、追加投資にも対応。",
    icon: "📈",
    category: "nisa",
  },
  {
    slug: "ideco-tax-saving",
    name: "iDeCo節税シミュレーター",
    description: "年収・掛金から所得税・住民税の節税額を計算。iDeCoの加入効果が一目でわかります。",
    icon: "🏦",
    category: "ideco",
  },
  {
    slug: "retirement-fund",
    name: "老後資金シミュレーター",
    description: "現在年齢・目標額・年金予定額から、今から毎月いくら積み立てるべきかを逆算。",
    icon: "👴",
    category: "nisa",
  },
  {
    slug: "fire-calculator",
    name: "FIRE達成年数計算",
    description: "現在資産・年間支出・年間貯蓄額から経済的自立（FIRE）達成までの年数を計算。",
    icon: "🔥",
    category: "nisa",
  },
  {
    slug: "mortgage-simulator",
    name: "住宅ローン返済シミュレーター",
    description: "借入額・金利・返済期間から毎月の返済額と総支払利息を計算。元利均等/元金均等に対応。",
    icon: "🏠",
    category: "household",
  },
  {
    slug: "take-home-calculator",
    name: "年収手取り計算",
    description: "額面年収から所得税・住民税・社会保険料を差し引いた手取り額を計算。副業収入にも対応。",
    icon: "💴",
    category: "sidejob",
  },
  {
    slug: "side-income-tax",
    name: "副業所得税計算",
    description: "本業の年収と副業収入から追加で発生する税金を計算。確定申告の目安に。",
    icon: "💼",
    category: "sidejob",
  },
  {
    slug: "dollar-cost-averaging",
    name: "ドルコスト平均法シミュレーター",
    description: "価格変動する商品への定額積立の効果を計算。一括投資との比較も可能。",
    icon: "📊",
    category: "nisa",
  },
  {
    slug: "dividend-reinvest",
    name: "配当再投資シミュレーター",
    description: "配当利回り・株価から配当再投資による資産成長を計算。高配当株投資の効果を可視化。",
    icon: "💵",
    category: "broker",
  },
  {
    slug: "target-monthly-investment",
    name: "目標達成逆算投資",
    description: "目標金額・利回り・期間から、毎月必要な積立額を逆算。老後/教育/住宅資金の計画に。",
    icon: "🎯",
    category: "nisa",
  },
  {
    slug: "robo-fee-comparison",
    name: "ロボアド手数料比較",
    description: "ウェルスナビ・THEO・楽ラップなど主要ロボアドの手数料を投資額別に試算。",
    icon: "🤖",
    category: "roboadvisor",
  },
  {
    slug: "fx-leverage-calculator",
    name: "FX必要証拠金計算",
    description: "通貨ペア・レバレッジ・取引数量から必要証拠金とロスカット水準を計算。",
    icon: "💹",
    category: "fx-crypto",
  },
  {
    slug: "crypto-profit-tax",
    name: "仮想通貨利益税金計算",
    description: "仮想通貨取引の利益から雑所得として発生する税金額を計算。確定申告の準備に。",
    icon: "₿",
    category: "fx-crypto",
  },
  {
    slug: "point-investment",
    name: "ポイント投資効果シミュレーター",
    description: "楽天ポイント・Vポイント・dポイントなどのポイント投資を長期運用した場合の資産額を計算。",
    icon: "⭐",
    category: "card",
  },
  {
    slug: "household-budget",
    name: "家計シミュレーター",
    description: "月収・支出項目から毎月の貯蓄可能額を算出。理想的な家計比率と比較表示。",
    icon: "📝",
    category: "household",
  },
  {
    slug: "savings-vs-investment",
    name: "貯金 vs 投資比較",
    description: "同額を貯金した場合と投資した場合の20年後の資産差をシミュレーション。",
    icon: "⚖️",
    category: "nisa",
  },
  {
    slug: "credit-card-points",
    name: "クレカ還元額シミュレーター",
    description: "月の支出額と還元率から年間獲得ポイントを計算。主要カードの比較表示付き。",
    icon: "💳",
    category: "card",
  },
  {
    slug: "education-fund",
    name: "教育資金シミュレーター",
    description: "子どもの年齢・進学プランから必要な教育資金を算出。学資保険 vs NISA比較も。",
    icon: "🎓",
    category: "household",
  },
  {
    slug: "emergency-fund",
    name: "生活防衛資金計算",
    description: "月間支出から適切な生活防衛資金額を計算。家族構成・職業タイプ別の目安も表示。",
    icon: "🛟",
    category: "household",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((t) => t.slug === slug);
}
