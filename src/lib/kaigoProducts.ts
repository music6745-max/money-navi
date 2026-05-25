export type KaigoProductType = "single" | "set" | "pack" | "free-note";

export interface KaigoProduct {
  id: string;
  type: KaigoProductType;
  title: string;
  description: string;
  priceLabel: string;
  boothUrl?: string;
  noteUrl?: string;
  tags: string[];
}

export interface KaigoSituation {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  productIds: string[];
  nextActions: string[];
  affiliateOfferIds: string[];
}

export const kaigoProducts: KaigoProduct[] = [
  {
    id: "p01",
    type: "single",
    title: "親の介護とお金 はじめに整える管理テンプレート集",
    description:
      "連絡先、医療情報、保険、口座、介護費用の月次記録をまとめて管理する初期整理用のExcel/PDFセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340072",
    noteUrl: "https://note.com/mild_quail6092/n/nc6a94bb40d0d",
    tags: ["初期整理", "お金", "家族共有"],
  },
  {
    id: "p02",
    type: "single",
    title: "介護連携シート集",
    description:
      "家族、ケアマネ、病院、施設との情報共有に使う連絡メモと確認シート。言った言わないを減らす用途に向く。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382202",
    noteUrl: "https://note.com/mild_quail6092/n/n3ba4ffd4cc31",
    tags: ["連携", "病院", "ケアマネ"],
  },
  {
    id: "p03",
    type: "single",
    title: "親のもしも準備ノート",
    description:
      "急な入院、救急搬送、連絡不能時に家族が困らないよう、基本情報と判断材料を事前に整理するノート。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382816",
    noteUrl: "https://note.com/mild_quail6092/n/n19075fd202a9",
    tags: ["もしも", "入院", "緊急時"],
  },
  {
    id: "p05",
    type: "single",
    title: "介護費用立替・分担記録テンプレート",
    description:
      "きょうだい間の立替、精算、月次負担を見える化する記録表。費用分担の話し合い前の材料作りに使える。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340354",
    noteUrl: "https://note.com/mild_quail6092/n/nf0ba4ab00020",
    tags: ["費用分担", "立替", "きょうだい"],
  },
  {
    id: "s3",
    type: "set",
    title: "介護の備えまとめキット",
    description:
      "お金、連携、もしも対応をまとめた入口向けセット。単品で迷う場合の初回購入候補。",
    priceLabel: "セット 4,980円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340582",
    tags: ["初期整理", "まとめ買い", "導入"],
  },
  {
    id: "facility-pack",
    type: "set",
    title: "施設選び・移行準備 重点パック",
    description:
      "見学、費用比較、入所前後の確認事項を整理する施設検討向けパック。",
    priceLabel: "セット 4,980円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340642",
    tags: ["施設選び", "費用比較", "見学"],
  },
  {
    id: "starter-set",
    type: "set",
    title: "親の介護 はじめの3点セット",
    description:
      "お金、連携、もしも準備の3領域だけを先に整える小さめのセット。",
    priceLabel: "セット 2,980円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340473",
    tags: ["初期整理", "3点セット", "低価格"],
  },
  {
    id: "all-87",
    type: "pack",
    title: "介護はじめの87商品まとめセット",
    description:
      "公開済みの単品87商品をまとめて確認したい方向け。家族内で広く備える場合の上位候補。",
    priceLabel: "まとめ 44,980円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383440",
    tags: ["全体整理", "高単価", "まとめ"],
  },
  {
    id: "full-pack",
    type: "pack",
    title: "介護まるごと総合パック v9.4",
    description:
      "87商品と追加パックを含む総合版。介護、お金、家族連携、実家整理、日々の見直しまで広く扱う。",
    priceLabel: "総合 16,800円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383441",
    tags: ["総合パック", "高単価", "迷ったら"],
  },
  {
    id: "note-compare",
    type: "free-note",
    title: "介護テンプレートはどれを選べばいい？",
    description:
      "単品、まとめセット、総合パックの違いを整理した無料note。購入前の比較ページとして使える。",
    priceLabel: "無料note",
    noteUrl: "https://note.com/mild_quail6092/n/n44b9de8bf4b7",
    tags: ["無料", "比較", "購入前"],
  },
  {
    id: "note-faq",
    type: "free-note",
    title: "介護とお金の整理帖 FAQ",
    description:
      "PDF/Excelテンプレートを使う前に確認したいことをまとめた無料note。",
    priceLabel: "無料note",
    noteUrl: "https://note.com/mild_quail6092/n/n268e0eca58c4",
    tags: ["無料", "FAQ", "使い方"],
  },
];

export const kaigoSituations: KaigoSituation[] = [
  {
    id: "start",
    label: "親の介護が気になり始めたが、何から整理すればよいか分からない",
    shortLabel: "まず全体を整理",
    description: "最初は連絡先、医療情報、お金、緊急時の4領域を薄く広くそろえるのが現実的です。",
    productIds: ["note-compare", "starter-set", "p01", "p03", "s3", "full-pack"],
    nextActions: [
      "親の基本情報、かかりつけ、服薬、緊急連絡先を1枚にまとめる",
      "口座、保険、年金、介護費用の見込みを家族で確認できる形にする",
      "迷う場合は単品ではなく、はじめの3点セットか備えまとめキットから始める",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "living-alone",
    label: "一人暮らしの親の見守り、連絡頻度、緊急時対応に不安がある",
    shortLabel: "見守り体制",
    description: "見守りはサービス契約の前に、連絡頻度、費用、緊急時の動き、家族の担当を分けて整理します。",
    productIds: ["p03", "p02", "p01", "starter-set", "s3", "note-compare"],
    nextActions: [
      "普段の連絡頻度、電話がつながらない時の順番、訪問できる人を決める",
      "通信費、訪問交通費、配食や見守りサービス費、緊急時の立替を分けて記録する",
      "保険証、お薬手帳、鍵、近所の連絡先など、もしもの時に必要な情報を1か所にまとめる",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "money",
    label: "介護費用、保険、年金、立替精算など、お金まわりが不安",
    shortLabel: "お金を整理",
    description: "支出と立替の記録を先に作ると、家族の話し合いと外部相談の両方が進めやすくなります。",
    productIds: ["p05", "p01", "s3", "facility-pack", "full-pack", "note-faq"],
    nextActions: [
      "誰が、いつ、何に、いくら払ったかを月次で残す",
      "親の収入、年金、保険、預金、毎月の介護関連支出を一覧化する",
      "保険や税務は結論を急がず、整理した資料をもとに専門窓口で確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth", "zeirishi-dotcom"],
  },
  {
    id: "siblings",
    label: "きょうだい・親族で分担や連絡の温度差がある",
    shortLabel: "家族で共有",
    description: "感情的な話し合いの前に、事実、役割、費用、連絡ルールを分けて見える化します。",
    productIds: ["p05", "p02", "p01", "s3", "all-87", "note-compare"],
    nextActions: [
      "費用分担と作業分担を別々の表で管理する",
      "病院、ケアマネ、施設との連絡窓口を決める",
      "決まったことだけでなく、未決事項も次回確認リストとして残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "hospital",
    label: "入院、退院、介護認定、ケアマネ連携が発生している",
    shortLabel: "入退院と連携",
    description: "短期間で確認事項が増える段階です。連絡メモともしも情報を先に整えます。",
    productIds: ["p02", "p03", "p01", "s3", "full-pack", "note-faq"],
    nextActions: [
      "入院先、退院予定、服薬、既往歴、相談窓口を1か所に集める",
      "ケアマネや病院に聞くことを事前にリスト化する",
      "退院後の生活費、通院費、介護サービス費の見込みを家族で共有する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "facility",
    label: "施設選び、実家整理、入所前後の準備を進めたい",
    shortLabel: "施設選び",
    description: "比較軸をそろえることで、見学後の判断と家族への説明がしやすくなります。",
    productIds: ["facility-pack", "p01", "p05", "all-87", "full-pack", "note-compare"],
    nextActions: [
      "月額費用、初期費用、医療対応、面会、立地を同じ表で比較する",
      "見学時に聞くことと、見学後に確認することを分けて残す",
      "実家の書類、保険、車、公共料金の整理も並行して洗い出す",
    ],
    affiliateOfferIds: ["hoken-mammoth", "sbi-insweb-auto"],
  },
  {
    id: "distance",
    label: "遠距離介護で、情報共有や緊急時対応に不安がある",
    shortLabel: "遠距離介護",
    description: "遠方では情報の散在が最大のリスクです。連絡先、役割、緊急時の判断材料を先に共有します。",
    productIds: ["p02", "p03", "p01", "s3", "full-pack", "note-faq"],
    nextActions: [
      "現地対応者、家族連絡係、費用管理係を分けて決める",
      "親の医療、服薬、介護サービス、鍵、近所の連絡先を共有する",
      "電話やLINEで決めたことを、あとで見返せるメモに残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
];
