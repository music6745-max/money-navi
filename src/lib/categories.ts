export const categories = [
  {
    slug: "nisa",
    name: "新NISA・投資信託",
    description: "新NISAの始め方、おすすめ投資信託、つみたて投資のシミュレーター。初心者向け解説も充実。",
    icon: "💰",
  },
  {
    slug: "broker",
    name: "ネット証券",
    description: "SBI証券・楽天証券・マネックス証券など主要ネット証券の手数料・ポイント・機能を徹底比較。",
    icon: "📊",
  },
  {
    slug: "ideco",
    name: "iDeCo・年金",
    description: "iDeCoの節税効果シミュレーター、金融機関比較、年金受け取りプランを解説。",
    icon: "🏦",
  },
  {
    slug: "fx-crypto",
    name: "FX・仮想通貨",
    description: "FX会社・仮想通貨取引所の口座開設特典、スプレッド、レバレッジを比較。",
    icon: "💹",
  },
  {
    slug: "roboadvisor",
    name: "ロボアド・AI投資",
    description: "ウェルスナビ・THEOなどロボアドバイザーの手数料・運用成績を比較。AI投資の始め方を解説。",
    icon: "🤖",
  },
  {
    slug: "card",
    name: "クレカ・キャッシュレス",
    description: "年会費無料・高還元率クレジットカード、ポイント投資対応カードの比較。",
    icon: "💳",
  },
  {
    slug: "sidejob",
    name: "副業・稼ぎ方",
    description: "会社員向け副業の始め方、確定申告、高単価副業ランキング、在宅ワーク情報。",
    icon: "💼",
  },
  {
    slug: "household",
    name: "家計・節約",
    description: "家計簿アプリ比較、固定費削減、節税テクニック、ポイ活情報を網羅。",
    icon: "🏠",
  },
] as const;

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
