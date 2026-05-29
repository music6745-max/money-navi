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
    id: "p103",
    type: "single",
    title: "一人暮らし親の見守り連絡表テンプレート集",
    description:
      "電話がつながらない時の連絡順、定期連絡ログ、見守り費用、連絡不能時の対応を家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8409959",
    tags: ["見守り", "連絡表", "一人暮らし"],
  },
  {
    id: "p104",
    type: "single",
    title: "親の通帳・保険・支払い確認メモテンプレート集",
    description:
      "通帳、保険証券、年金、公共料金、毎月支払いの確認範囲と家族共有ルールを整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8410669",
    tags: ["通帳", "保険", "支払い確認"],
  },
  {
    id: "p105",
    type: "single",
    title: "遠距離介護の役割分担・交通費・家族会議テンプレート集",
    description:
      "遠距離介護の家族会議、役割分担、連絡順、交通費・宿泊費、次回確認事項を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8411252",
    noteUrl: "https://note.com/mild_quail6092/n/nc529caabc54b",
    tags: ["遠距離介護", "家族会議", "交通費"],
  },
  {
    id: "p106",
    type: "single",
    title: "施設入居前の月額費用・初期費用見積もりテンプレート集",
    description:
      "施設入居前の月額費用、初期費用、家族負担、候補施設比較を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8424477",
    noteUrl: "https://note.com/mild_quail6092/n/n6abb4d488839",
    tags: ["介護施設", "月額費用", "初期費用"],
  },
  {
    id: "p107",
    type: "single",
    title: "ケアマネ初回相談前の生活状況・困りごと整理テンプレート集",
    description:
      "ケアマネや地域包括支援センターへの初回相談前に、生活状況、困りごと、家族の役割、質問メモを整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8424688",
    noteUrl: "https://note.com/mild_quail6092/n/n76d7cb54138e",
    tags: ["ケアマネ", "初回相談", "困りごと"],
  },
  {
    id: "p09",
    type: "single",
    title: "親の入院・退院・在宅復帰 準備テンプレート集",
    description:
      "入院準備、退院前確認、入退院費用と手続き、在宅復帰後の通院・服薬・サービス予定を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8340434",
    noteUrl: "https://note.com/mild_quail6092/n/nba6ba32d2aa1",
    tags: ["入院", "退院", "在宅復帰"],
  },
  {
    id: "p10",
    type: "single",
    title: "親のもの忘れ 相談前整理テンプレート集",
    description:
      "親のもの忘れが気になり始めたとき、出来事、困りごと、生活の変化、家族共有メモを相談前に整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382918",
    noteUrl: "https://note.com/mild_quail6092/n/n2cc8c572ad41",
    tags: ["もの忘れ", "相談前整理", "家族共有"],
  },
  {
    id: "p20",
    type: "single",
    title: "要介護認定 更新前整理テンプレート集",
    description:
      "要介護認定の更新前に、前回からの生活変化、困りごと、調査前メモ、通院・医療情報を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8426543",
    noteUrl: "https://note.com/mild_quail6092/n/n9bdd6fb99477",
    tags: ["要介護認定", "認定更新", "生活状況記録"],
  },
  {
    id: "p21",
    type: "single",
    title: "ショートステイ利用前整理テンプレート集",
    description:
      "ショートステイ利用前に、持ち物、施設への申し送り、本人の様子、緊急連絡先、施設情報を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8426647",
    noteUrl: "https://note.com/mild_quail6092/n/n81e66989b43f",
    tags: ["ショートステイ", "持ち物", "申し送り"],
  },
  {
    id: "p22",
    type: "single",
    title: "デイサービス利用前整理テンプレート集",
    description:
      "デイサービス利用前に、持ち物、事業所への申し送り、本人の様子、緊急連絡先、利用記録を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8426705",
    noteUrl: "https://note.com/mild_quail6092/n/n9dcdd731eebd",
    tags: ["デイサービス", "通所介護", "申し送り"],
  },
  {
    id: "p25",
    type: "single",
    title: "退院後1か月の生活見守り記録テンプレート集",
    description:
      "退院後の在宅生活で、食事、水分、睡眠、活動、担当者へ伝えることを1か月分整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8427230",
    noteUrl: "https://note.com/mild_quail6092/n/n8f24340e724e",
    tags: ["退院後", "在宅介護", "見守り記録"],
  },
  {
    id: "p26",
    type: "single",
    title: "在宅介護の週間予定・訪問サービス予定表テンプレート集",
    description:
      "訪問介護、デイサービス、訪問看護などの週間予定、変更・休止、事業所連絡先を家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382953",
    noteUrl: "https://note.com/mild_quail6092/n/nb625cd72f519",
    tags: ["在宅介護", "週間予定", "訪問サービス"],
  },
  {
    id: "p27",
    type: "single",
    title: "在宅介護の月間予定・家族分担カレンダーテンプレート集",
    description:
      "通院、介護サービス、買い物、見守り連絡、家族対応を月単位で見渡し、担当者と未定事項を共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382957",
    noteUrl: "https://note.com/mild_quail6092/n/nea0911a3c08a",
    tags: ["在宅介護", "月間予定", "家族分担"],
  },
  {
    id: "p24",
    type: "single",
    title: "通院付き添い・受診前後記録テンプレート集",
    description:
      "親の通院付き添い前後に、医師へ伝えたいこと、受診後の説明、薬局メモ、次回予定を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8427038",
    noteUrl: "https://note.com/mild_quail6092/n/naf357b052f55",
    tags: ["通院記録", "受診メモ", "家族共有"],
  },
  {
    id: "p23",
    type: "single",
    title: "親の転倒・ヒヤリハット記録テンプレート集",
    description:
      "親の転倒やヒヤリとした場面を、日時、場所、状況、本人の様子、相談前メモとして整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8426965",
    noteUrl: "https://note.com/mild_quail6092/n/n4f73fe1d00c0",
    tags: ["転倒記録", "ヒヤリハット", "在宅介護"],
  },
  {
    id: "p13",
    type: "single",
    title: "会社員のための介護と仕事 両立整理メモ",
    description:
      "親の介護が始まった会社員が、職場への相談前に現状、休み方の希望、家族分担、相談先を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8425543",
    noteUrl: "https://note.com/mild_quail6092/n/n96d6f7647667",
    tags: ["仕事と介護", "会社員", "両立"],
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
    id: "hospital-consult-pack",
    type: "set",
    title: "親のこと整理ナビ 入院・退院・ケアマネ相談パック",
    description:
      "入院直後、退院前、家族共有、ケアマネ初回相談までを一式で整理する買い切りパック。P02、P03、P107にパック案内PDF/Excelを同梱。",
    priceLabel: "パック 2,980円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8424970",
    noteUrl: "https://note.com/mild_quail6092/n/n9d37a02a7c2d",
    tags: ["入院", "退院", "ケアマネ"],
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
    productIds: ["note-compare", "starter-set", "p01", "p104", "p03", "s3", "full-pack"],
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
    productIds: ["p103", "p22", "p03", "p02", "starter-set", "s3", "note-compare"],
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
    productIds: ["p104", "p05", "p01", "s3", "facility-pack", "full-pack", "note-faq"],
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
    productIds: ["p105", "p27", "p26", "p13", "p05", "p104", "p02", "p01", "s3", "all-87", "note-compare"],
    nextActions: [
      "費用分担と作業分担を別々の表で管理する",
      "病院、ケアマネ、施設との連絡窓口を決める",
      "決まったことだけでなく、未決事項も次回確認リストとして残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "memory",
    label: "親のもの忘れや生活の変化が気になり、相談前に記録を残したい",
    shortLabel: "もの忘れ相談",
    description: "診断や受診判断ではなく、気になった出来事、生活の変化、家族が困っていることを事実ベースで整理します。",
    productIds: ["p10", "p24", "p23", "p103", "p107", "p03", "p02", "s3", "full-pack", "note-faq"],
    nextActions: [
      "いつ、どこで、何が起きたかを判断抜きで1行ずつ残す",
      "本人の様子と、家族が実際に困っていることを分ける",
      "地域包括支援センター、かかりつけ医、もの忘れ外来へ相談したい内容を整理する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "certification-renewal",
    label: "要介護認定の更新が近く、前回からの生活変化を整理したい",
    shortLabel: "認定更新前",
    description: "認定区分の予測ではなく、前回から変わった生活動作、困りごと、家族対応、相談先への確認事項を事実ベースで整理します。",
    productIds: ["p20", "p24", "p23", "p107", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "前回認定のころと最近の状態を、移動・食事・入浴・排泄・睡眠・認知面に分けて書く",
      "本人ができる日と難しい日、家族が実際に対応していることを分ける",
      "更新手続きの時期、必要書類、相談先は市区町村窓口または担当ケアマネへ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "short-stay",
    label: "ショートステイ利用前に、持ち物や施設への申し送りを整理したい",
    shortLabel: "ショートステイ",
    description: "利用可否や医療判断ではなく、持ち物、生活ルーティン、緊急連絡先、施設へ確認したいことを家族内で整理します。",
    productIds: ["p21", "p107", "p20", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "施設の持ち込みルール、送迎時間、薬の扱い、緊急連絡先を事前確認する",
      "日常ルーティン、食事、排泄、睡眠、コミュニケーションの特徴を短くまとめる",
      "利用後の振り返りを残し、次回の準備漏れを減らす",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "day-service",
    label: "デイサービス利用前に、持ち物や事業所への申し送りを整理したい",
    shortLabel: "デイサービス",
    description: "利用可否や医療判断ではなく、持ち物、送迎、入浴・食事の注意点、緊急連絡先、事業所へ確認したいことを家族内で整理します。",
    productIds: ["p22", "p26", "p27", "p21", "p107", "p20", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "事業所の持ち込みルール、送迎時間、薬の扱い、欠席連絡の方法を事前確認する",
      "食事、水分、入浴、排泄、疲れやすい時間、声かけの仕方を短くまとめる",
      "利用後の様子を残し、定期利用で毎回迷う確認事項を減らす",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "weekly-service-schedule",
    label: "訪問介護・デイサービス・訪問看護など、週の予定を家族で共有したい",
    shortLabel: "週間予定",
    description:
      "ケアプランの代替ではなく、今週入っている訪問サービス、変更・休止、担当事業所への確認事項を家族内で見える化します。",
    productIds: ["p26", "p27", "p22", "p25", "p24", "p107", "p105", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "サービス名、曜日、時間帯、担当事業所、連絡先を週単位で一覧にする",
      "変更・休止があった日は、対象日、連絡元、確認したことを残す",
      "サービスの追加や調整は家族内で決め切らず、担当ケアマネや各事業所へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "monthly-family-calendar",
    label: "通院・介護サービス・家族対応を月単位で分担したい",
    shortLabel: "月間予定",
    description:
      "ケアプランや勤務表の代替ではなく、通院、訪問サービス、買い物、見守り連絡、帰省などを家族内で共有し、未定の担当を見える化します。",
    productIds: ["p27", "p26", "p25", "p24", "p22", "p105", "p13", "p02", "full-pack", "note-faq"],
    nextActions: [
      "月内の通院、訪問サービス、デイサービス、家族対応日をカレンダーに置く",
      "誰が連絡、付き添い、買い物、見守りを担うかを決定済みと未定で分ける",
      "変更や負担の偏りは家族内で共有し、サービス調整はケアマネや各事業所へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "fall-near-miss",
    label: "親が転んだ・転びそうになった場面を、相談前に記録したい",
    shortLabel: "転倒記録",
    description: "転倒原因や受診要否を判断するのではなく、日時、場所、状況、本人の様子、家族の対応、相談先への確認事項を事実ベースで整理します。",
    productIds: ["p23", "p24", "p20", "p10", "p22", "p21", "p107", "p103", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "いつ、どこで、何をしようとしていたか、転倒かヒヤリハットかを短く記録する",
      "痛み、けが、急な変化が気になる場合は、家族内で判断せず医療機関や救急相談窓口へ確認する",
      "段差、照明、手すり、トイレまでの動線などを事実として書き出し、ケアマネや専門職へ相談する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "clinic-visit",
    label: "親の通院付き添い前後に、聞くことと説明内容を整理したい",
    shortLabel: "通院付き添い",
    description: "受診要否や薬の判断ではなく、受診前に伝えること、受診後に聞いたこと、薬局で説明されたこと、次回までの確認事項を家族内で整理します。",
    productIds: ["p24", "p23", "p10", "p20", "p107", "p103", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "前回受診からの変化、本人の困りごと、家族が気づいたことを短く書き出す",
      "医師や薬剤師へ確認したいことを、受診前に質問メモとしてまとめる",
      "受診後は説明内容、次回予定、家族に共有することをその日のうちに残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "post-discharge-month",
    label: "退院後1か月の在宅生活で、毎日の様子を記録したい",
    shortLabel: "退院後1か月",
    description: "在宅療養の可否や緊急性を判断するのではなく、食事、水分、睡眠、活動、担当者へ伝えることを家族内で記録します。",
    productIds: ["p25", "p27", "p26", "p09", "p24", "p23", "p22", "p21", "p107", "p02", "p03", "p01", "hospital-consult-pack", "full-pack", "note-faq"],
    nextActions: [
      "退院後の食事、水分、睡眠、活動の様子を、毎日同じ形式で短く残す",
      "ケアマネ、訪問看護師、ヘルパーから伝えられたことを家族内で共有する",
      "急な変化や受診の迷いは家族内で判断せず、医療職や救急相談窓口へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "work",
    label: "親の介護と仕事の両立で、職場への相談や休み方に迷っている",
    shortLabel: "仕事と介護",
    description: "勤務先へ相談する前に、介護の現状、仕事への影響、休み方の希望、家族分担を分けて整理します。",
    productIds: ["p13", "p27", "hospital-consult-pack", "p107", "p105", "p02", "note-faq"],
    nextActions: [
      "職場へ伝える前に、介護の予定変更と仕事への影響を日付や頻度で書き出す",
      "介護休業や休暇の結論を急がず、希望する働き方と確認したい制度を分ける",
      "家族内で自分が担えること、担えないこと、職場相談後に再確認することを残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "hospital",
    label: "入院、退院、介護認定、ケアマネ連携が発生している",
    shortLabel: "入退院と連携",
    description: "短期間で確認事項が増える段階です。連絡メモともしも情報を先に整えます。",
    productIds: ["hospital-consult-pack", "p25", "p27", "p26", "p24", "p09", "p22", "p21", "p20", "p13", "p107", "p02", "p03", "p01", "s3", "full-pack", "note-faq"],
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
    productIds: ["p21", "p106", "facility-pack", "p01", "p05", "all-87", "full-pack", "note-compare"],
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
    productIds: ["p105", "p27", "p26", "p02", "p03", "p01", "s3", "full-pack", "note-faq"],
    nextActions: [
      "現地対応者、家族連絡係、費用管理係を分けて決める",
      "親の医療、服薬、介護サービス、鍵、近所の連絡先を共有する",
      "電話やLINEで決めたことを、あとで見返せるメモに残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
];
