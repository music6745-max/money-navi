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
    description: "配当金を再投資した場合の複利効果を計算。高配当株投資の資産推移を可視化。",
    icon: "💵",
    category: "nisa",
  },
  {
    slug: "target-monthly-investment",
    name: "目標金額達成の月額積立計算",
    description: "目標金額・利回り・期間から、毎月いくら積み立てる必要があるかを逆算。",
    icon: "🎯",
    category: "nisa",
  },
  {
    slug: "robo-fee-comparison",
    name: "ロボアド手数料比較シミュレーター",
    description: "ロボアドバイザーの手数料（1%）が長期運用に与える影響を試算。ETFとの比較も可能。",
    icon: "🤖",
    category: "roboadvisor",
  },
  {
    slug: "fx-leverage-calculator",
    name: "FXレバレッジ計算機",
    description: "通貨ペア・証拠金・レバレッジから必要証拠金と想定損益を計算。リスク管理に。",
    icon: "💹",
    category: "fx-crypto",
  },
  {
    slug: "crypto-profit-tax",
    name: "仮想通貨利益の税金計算",
    description: "仮想通貨の売買益・マイニング・ステーキング報酬にかかる税金を計算。雑所得の累進課税対応。",
    icon: "₿",
    category: "fx-crypto",
  },
  {
    slug: "point-investment",
    name: "ポイント投資シミュレーター",
    description: "楽天・Tポイント・Pontaなどを投資信託で運用した場合の将来価値を試算。",
    icon: "🎁",
    category: "nisa",
  },
  {
    slug: "household-budget",
    name: "家計簿バランス診断",
    description: "年収と支出内訳から理想的な家計バランスを診断。黒字化のための改善ポイントも表示。",
    icon: "💰",
    category: "household",
  },
  {
    slug: "savings-vs-investment",
    name: "貯金vs投資 機会損失計算",
    description: "預金と投資で運用した場合の資産差を比較。インフレ考慮の実質リターンも計算。",
    icon: "⚖️",
    category: "nisa",
  },
  {
    slug: "credit-card-points",
    name: "クレカ還元率比較シミュレーター",
    description: "月間利用額と還元率から年間獲得ポイントを計算。複数カードの比較も可能。",
    icon: "💳",
    category: "card",
  },
  {
    slug: "education-fund",
    name: "教育費シミュレーター",
    description: "子どもの進学ルート別に必要な教育費を計算。大学までの積立プランも試算。",
    icon: "🎓",
    category: "household",
  },
  {
    slug: "emergency-fund",
    name: "生活防衛資金計算",
    description: "職業・家族構成から推奨される生活防衛資金額を計算。毎月の積立プランも提案。",
    icon: "🛡️",
    category: "household",
  },
  {
    slug: "nisa-vs-ideco",
    name: "NISAvsiDeCo 比較診断",
    description: "年収・年齢・投資可能額からNISAとiDeCoのどちらを優先すべきか診断。",
    icon: "⚖️",
    category: "nisa",
  },
  {
    slug: "inflation-impact",
    name: "インフレ影響シミュレーター",
    description: "将来のインフレ率を想定し、現在の金額の実質的な価値がどう変化するかを計算。",
    icon: "📈",
    category: "household",
  },
  {
    slug: "furusato-limit",
    name: "ふるさと納税限度額シミュレーター",
    description: "年収・家族構成・控除からふるさと納税の自己負担2,000円で済む限度額を計算。",
    icon: "🎁",
    category: "household",
  },
  {
    slug: "bonus-investment",
    name: "ボーナス投資シミュレーター",
    description: "ボーナスを一括投資した場合の資産推移を計算。積立投資との比較も可能。",
    icon: "💰",
    category: "nisa",
  },
  {
    slug: "pension-calculator",
    name: "年金受給額シミュレーター",
    description: "年収・加入年数から将来の厚生年金・国民年金の受給額を試算。",
    icon: "👴",
    category: "ideco",
  },
  {
    slug: "mortgage-refinance",
    name: "住宅ローン借り換えメリット計算",
    description: "借り換え後の金利・諸費用から総返済額の差を計算。何年でペイできるかも試算。",
    icon: "🏠",
    category: "household",
  },
  {
    slug: "medical-deduction",
    name: "医療費控除シミュレーター",
    description: "年間医療費と年収から医療費控除による還付額を計算。セルフメディケーション税制対応。",
    icon: "🏥",
    category: "household",
  },
  {
    slug: "gift-tax",
    name: "贈与税計算機",
    description: "贈与額・続柄から贈与税額を計算。暦年贈与・相続時精算課税制度に対応。",
    icon: "🎁",
    category: "household",
  },
  {
    slug: "inheritance-tax",
    name: "相続税シミュレーター",
    description: "遺産総額・法定相続人数から相続税を計算。基礎控除・税率早見表も表示。",
    icon: "📜",
    category: "household",
  },
  {
    slug: "retirement-payment-tax",
    name: "退職金税金計算機",
    description: "退職金額・勤続年数から退職所得税と手取り額を計算。分離課税の優遇も反映。",
    icon: "💴",
    category: "household",
  },
  {
    slug: "rent-vs-buy",
    name: "賃貸vs持ち家 生涯コスト比較",
    description: "家賃と住宅購入費を長期で比較。維持費・税金・機会損失まで加味して診断。",
    icon: "🏘️",
    category: "household",
  },
  {
    slug: "car-maintenance-cost",
    name: "自動車の生涯コスト計算",
    description: "購入費・燃料・保険・税金・車検から車の生涯コストを計算。カーシェアとの比較も。",
    icon: "🚗",
    category: "household",
  },
  {
    slug: "debt-repayment",
    name: "借金返済シミュレーター",
    description: "借入額・金利から返済計画を計算。繰上返済の効果も試算できます。",
    icon: "💳",
    category: "household",
  },
  {
    slug: "factoring-fee-calculator",
    name: "ファクタリング手数料計算",
    description: "売掛金額・手数料率からファクタリング利用時の手取り額を計算。2社間・3社間対応。",
    icon: "📊",
    category: "sidejob",
  },
  {
    slug: "dividend-income-simulator",
    name: "配当収入シミュレーター",
    description: "保有株数・配当利回り・増配率から年間配当金収入を試算。FIRE達成の目安に。",
    icon: "💵",
    category: "nisa",
  },
  {
    slug: "ipo-profit-calculator",
    name: "IPO初値利益計算機",
    description: "公開価格・初値から1単元の売却益を計算。複数当選シナリオにも対応。",
    icon: "📈",
    category: "broker",
  },
  {
    slug: "gold-investment-simulator",
    name: "金投資シミュレーター",
    description: "金価格の変動・積立額から将来の資産価値を計算。純金積立・金ETFの比較も。",
    icon: "🥇",
    category: "broker",
  },
  {
    slug: "reit-distribution-calculator",
    name: "REIT分配金シミュレーター",
    description: "REIT投資額・利回りから年間分配金収入を計算。個別REITと投資信託の比較も。",
    icon: "🏢",
    category: "nisa",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((t) => t.slug === slug);
}

/**
 * 🎯 Tool thin-content 対策: ツールごとに「使い方/背景知識/関連ガイド」を定義。
 *    これを tool page template で rich content として展開し、
 *    Google の "crawled - not indexed" から脱出させる。
 */
export interface ToolMeta {
  /** このツールは何を解くか（80-120字のユニーク説明） */
  purpose: string;
  /** 入力する数字の前提・根拠（60-120字） */
  inputNote: string;
  /** 結果の読み方・次にとるべきアクション（80-150字） */
  resultGuide: string;
  /** 関連する guide slug（内部リンク密度UP用。最大3本） */
  relatedGuides: string[];
}

export const toolMeta: Record<string, ToolMeta> = {
  "nisa-simulator": {
    purpose:
      "新NISAの「つみたて投資枠（年120万）」「成長投資枠（年240万）」を使って毎月いくら積み立てたら、何年後にどれだけ資産が育つかを試算します。複利×時間の威力を数字で可視化できるため、最適な積立額を決める初期検討に最適です。",
    inputNote:
      "想定利回りは「全世界株式（オルカン）年平均4〜6%」「S&P500 年平均6〜8%」「バランス型 年3〜4%」あたりが現実的。未来は誰にも読めないので保守的に4%を置き、5%・6%と横並びで見ると意思決定しやすいです。",
    resultGuide:
      "最終資産額 − 元本 = 運用益（新NISAなら非課税）。目標額に届かない場合は「積立額UP」「期間を延ばす」「利回りを上げる（＝リスクを取る）」の3択。まず期間を延ばして達成可能かを見るのが鉄則です。",
    relatedGuides: ["nisa-broker-ranking-2026", "ideco-broker-comparison", "roboadvisor-comparison"],
  },
  "compound-interest": {
    purpose:
      "元本と年利を指定し、何年後にいくらになるかを計算する「複利計算機」です。投資信託・高金利預金・学資保険・住宅ローンの繰上返済効果など、「金利がかかる金額の将来値」を知りたい全てのシーンで使えます。",
    inputNote:
      "複利は「年利」で入力してください。月利入力だと年換算で12倍になり現実離れします。追加投資額を入れると毎月の積立を含めた計算に切り替わります。",
    resultGuide:
      "「元本 × (1+r)^年数」で計算される複利の威力は、10年を超えた頃から体感できます。30年で元本の3〜4倍になるラインを基準に、自分の目標が現実的か確認しましょう。",
    relatedGuides: ["nisa-broker-ranking-2026", "roboadvisor-comparison"],
  },
  "ideco-tax-saving": {
    purpose:
      "iDeCo（個人型確定拠出年金）の掛金が全額所得控除になることで発生する「所得税＋住民税の節税額」を試算します。年収と毎月の掛金から、実際に手元に戻ってくる金額を即時計算できます。",
    inputNote:
      "会社員の上限は月23,000円（企業年金なし）、月20,000円（企業型DCあり）、月12,000円（確定給付ありの大企業）、自営業は月68,000円。扶養家族の多さや住宅ローン控除で実効税率は変動します。",
    resultGuide:
      "節税額は「掛金 × (所得税率＋住民税率10%)」で決まります。年収500万円の会社員なら年間約5.5万円、年収1,000万円なら年間約10万円以上が手元に戻る計算です。20〜30年積めば節税額だけで200〜400万円になります。",
    relatedGuides: ["ideco-broker-comparison", "nisa-broker-ranking-2026"],
  },
  "furusato-limit": {
    purpose:
      "ふるさと納税は「実質2,000円の自己負担で寄付した地域の返礼品を受け取れる」制度ですが、控除の上限額は年収・家族構成・他の控除で変わります。このツールで自分専用の上限額を計算できます。",
    inputNote:
      "住宅ローン控除・医療費控除・iDeCoなど他の所得控除が多い人は上限が下がります。年末に慌てて寄付する前に、11月頃にもう一度このツールで再計算するのが実務的です。",
    resultGuide:
      "上限を超えて寄付しても控除されず純粋な自己負担になるため、シミュレーション結果の-5,000円〜-10,000円くらいを目安に抑えるのが安全です。楽天ふるさと納税・さとふる・ふるなびで実際に寄付できます。",
    relatedGuides: ["high-income-tax-strategy", "dual-income-household-guide"],
  },
  "medical-deduction": {
    purpose:
      "年間の医療費から「医療費控除による還付額」を試算します。年間10万円（または総所得の5%）を超えた医療費は、確定申告すれば所得税・住民税が戻ってきます。セルフメディケーション税制（OTC医薬品控除）にも対応。",
    inputNote:
      "世帯合算で計算するのがコツ。家族の医療費・通院交通費・薬局でのOTC購入・治療目的の歯科矯正も対象になります。美容整形・健康診断・人間ドックは対象外（ただし異常発見後の治療費は対象）。",
    resultGuide:
      "所得税率20%の人が年間医療費30万円なら、(30万-10万)×(20%+10%) = 6万円の還付が目安。領収書は捨てず、マイナポータル連携で電子化するのが年末調整の実務。",
    relatedGuides: ["high-income-tax-strategy"],
  },
  "side-income-tax": {
    purpose:
      "本業の年収と副業収入から、追加で発生する所得税・住民税を計算します。副業所得が年20万円を超えると確定申告義務が発生し、青色申告なら最大65万円の控除が使えます。",
    inputNote:
      "副業「所得」＝副業収入−必要経費。経費にできる代表例は、副業で使う PC・ネット回線・書籍・セミナー費・家事按分した家賃。経費の証拠はレシート・請求書を保管してください。",
    resultGuide:
      "結果の「手取り」が現実の残金。住民税は「普通徴収」を選べば会社の給与に副業分が上乗せされず、バレ防止になります。インボイス制度下では取引先が課税事業者を求める場面もあり、年収1,000万円前後の判断が分水嶺。",
    relatedGuides: ["freelance-retirement-guide", "business-card-comparison-2026"],
  },
  "take-home-calculator": {
    purpose:
      "額面年収から「所得税＋住民税＋社会保険料（健康保険・厚生年金・雇用保険）」を差し引いた手取り額を計算します。副業収入を加算した場合の総手取りも出ます。",
    inputNote:
      "独身か既婚（配偶者控除）・扶養家族数で実効税率が変わります。住宅ローン控除やiDeCoを使っている人は、それらを差し引いた後の手取りを見る必要があります。",
    resultGuide:
      "年収 → 手取り比率は「額面600万 → 手取り450万（75%）」「額面1,000万 → 手取り720万（72%）」「額面1,500万 → 手取り1,050万（70%）」くらいが目安。所得が増えるほど手取り率は下がります。",
    relatedGuides: ["high-income-tax-strategy", "dual-income-household-guide"],
  },
  // 他のツールは default meta にフォールバック（未定義でもクラッシュしない）
};

/** meta 未定義のツールでも最低限の context を出すためのデフォルト生成関数 */
export function getToolMeta(slug: string, tool: Tool): ToolMeta {
  return (
    toolMeta[slug] ?? {
      purpose: `${tool.name}は、${tool.description}`,
      inputNote: "各項目は現在わかる範囲の想定で入力し、数値を少しずつ変えてシナリオ比較するのが実務的な使い方です。",
      resultGuide: "計算結果は目安です。税制・金利・相場は将来変動するため、毎年見直すことをおすすめします。",
      relatedGuides: ["nisa-broker-ranking-2026"],
    }
  );
}
