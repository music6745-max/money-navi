export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export const guides: Guide[] = [
  {
    slug: "nisa-broker-ranking-2026",
    title: "【2026年】新NISAおすすめネット証券ランキングTOP5",
    description: "SBI証券・楽天証券・マネックス証券など主要ネット証券の新NISA対応状況・ポイント還元・取扱銘柄数を徹底比較。初心者におすすめの口座を紹介。",
    icon: "💰",
    category: "nisa",
    readTime: "12分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "roboadvisor-comparison",
    title: "【2026年】ロボアドバイザーおすすめ比較5社",
    description: "ウェルスナビ・THEO・楽ラップ・SUSTEN・ON COMPASSの手数料・運用実績・最低投資額を比較。初心者に最適なロボアドを解説。",
    icon: "🤖",
    category: "roboadvisor",
    readTime: "10分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "ideco-broker-comparison",
    title: "【2026年】iDeCoおすすめ金融機関比較",
    description: "SBI証券・楽天証券・マネックス証券・松井証券のiDeCo手数料・取扱商品数を比較。節税効果を最大化する選び方を解説。",
    icon: "🏦",
    category: "ideco",
    readTime: "10分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "fx-broker-ranking",
    title: "【2026年】FX口座開設キャンペーン比較TOP10",
    description: "GMOクリック・DMM FX・外為どっとコムなど主要FX会社のスプレッド・スワップ・キャンペーン特典を比較。",
    icon: "💹",
    category: "fx-crypto",
    readTime: "12分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "crypto-exchange-comparison",
    title: "【2026年】仮想通貨取引所おすすめ比較",
    description: "bitFlyer・コインチェック・GMOコイン・bitbankの手数料・取扱通貨・セキュリティを比較。初心者におすすめの取引所を紹介。",
    icon: "₿",
    category: "fx-crypto",
    readTime: "10分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "high-reward-credit-cards",
    title: "【2026年】高還元率クレジットカードおすすめ10選",
    description: "還元率1%以上の年会費無料カードから、投資積立で還元を受けられるカードまで。目的別の選び方を解説。",
    icon: "💳",
    category: "card",
    readTime: "10分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "side-business-ranking-2026",
    title: "【2026年】会社員におすすめの副業ランキングTOP10",
    description: "月5万円から狙える副業を厳選。初期費用・必要スキル・想定収入・確定申告の必要性まで徹底解説。",
    icon: "💼",
    category: "sidejob",
    readTime: "15分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "household-budget-apps",
    title: "【2026年】家計簿アプリおすすめ比較",
    description: "マネーフォワードME・Zaim・Money Tree・おかねのコンパスの機能・料金・連携数を比較。無料で使える定番を紹介。",
    icon: "📝",
    category: "household",
    readTime: "8分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "new-nisa-basics",
    title: "新NISA完全ガイド｜始め方・おすすめ銘柄・注意点",
    description: "2024年から始まった新NISAの制度を初心者向けに徹底解説。つみたて投資枠・成長投資枠の使い分けとおすすめ銘柄を紹介。",
    icon: "📖",
    category: "nisa",
    readTime: "15分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "fire-guide",
    title: "【FIRE完全ガイド】40代で経済的自立を達成する方法",
    description: "FIRE（経済的自立と早期退職）達成までの資産目標額、投資戦略、収入増加術を解説。日本人の実例付き。",
    icon: "🔥",
    category: "nisa",
    readTime: "18分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "tax-saving-techniques",
    title: "会社員ができる節税テクニック完全ガイド",
    description: "ふるさと納税・iDeCo・住宅ローン控除・医療費控除など、会社員でも使える節税制度を総まとめ。",
    icon: "💸",
    category: "household",
    readTime: "12分",
    publishedAt: "2026-04-18",
  },
  {
    slug: "online-bank-comparison",
    title: "【2026年】ネット銀行金利・手数料比較",
    description: "住信SBIネット銀行・楽天銀行・auじぶん銀行・PayPay銀行の金利・ATM手数料・振込特典を比較。",
    icon: "🏧",
    category: "household",
    readTime: "10分",
    publishedAt: "2026-04-18",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
