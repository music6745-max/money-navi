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
    id: "p31",
    type: "single",
    title: "高齢親の災害時持ち出し・連絡先整理テンプレート集",
    description:
      "高齢の親の災害時に備えて、持ち出し品、緊急連絡先、避難先、医療情報、家族の役割を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382972",
    tags: ["災害時", "持ち出し品", "緊急連絡先"],
  },
  {
    id: "p32",
    type: "single",
    title: "介護者自身の休息・予定・負担見える化テンプレート集",
    description:
      "介護する家族自身の週間予定、休息時間、負担が重い時間帯、月次振り返り、家族へ頼みたいことを整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382978",
    tags: ["介護者", "休息", "負担見える化"],
  },
  {
    id: "p33",
    type: "single",
    title: "福祉用具レンタル・購入前に家族でまとめておく確認メモ集",
    description:
      "ケアマネジャーや福祉用具事業者への相談前に、生活場面ごとの困りごと、候補、質問、家族の意見を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382980",
    tags: ["福祉用具", "レンタル", "購入前確認"],
  },
  {
    id: "p36",
    type: "single",
    title: "在宅介護の消耗品 在庫・補充メモ テンプレート集",
    description:
      "大人用紙おむつ、尿とりパッド、ウェットティッシュ、使い捨て手袋など、介護消耗品の残量と補充予定を家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382994",
    tags: ["消耗品", "在庫管理", "買い物メモ"],
  },
  {
    id: "p37",
    type: "single",
    title: "高齢親の家電・リモコン・取扱説明書メモ テンプレート集",
    description:
      "実家の日常家電について、よく使うリモコン操作、取扱説明書・保証書の保管場所、型番、メーカー窓口を家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382997",
    tags: ["家電", "リモコン", "取扱説明書"],
  },
  {
    id: "p38",
    type: "single",
    title: "実家の収納場所・置き場所マップ テンプレート集",
    description:
      "台所、リビング、寝室、洗面所、押し入れなど、実家の日用品の置き場所を部屋別・棚段別に書き留めて家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383002",
    tags: ["実家整理", "収納", "置き場所", "家族共有"],
  },
  {
    id: "p39",
    type: "single",
    title: "高齢親の衣類・寝具・季節替え・サイズ管理メモ テンプレート集",
    description:
      "高齢の親の衣類と寝具について、サイズ、季節替え、保管場所、予備を家族で共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383004",
    noteUrl: "https://note.com/mild_quail6092/n/ncc89275f229f",
    tags: ["衣類", "寝具", "季節替え", "サイズ管理", "家族共有"],
  },
  {
    id: "p40",
    type: "single",
    title: "高齢親の掃除・洗濯・家事ルーティン共有メモ テンプレート集",
    description:
      "掃除、洗濯、ゴミ出しなどの日常家事について、頻度、担当、家族内メモを整理して共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383008",
    noteUrl: "https://note.com/mild_quail6092/n/n58a3d851852b",
    tags: ["家事", "掃除", "洗濯", "ルーティン", "家族共有"],
  },
  {
    id: "p42",
    type: "single",
    title: "介護家族の申し送り・引き継ぎメモ テンプレート集",
    description:
      "日次の申し送り、帰省後のまとめ、家族への定期共有を、家族内で見返しやすく残すPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383018",
    noteUrl: "https://note.com/mild_quail6092/n/nf63effda53fb",
    tags: ["申し送り", "引き継ぎ", "家族共有"],
  },
  {
    id: "p44",
    type: "single",
    title: "介護家族の当番・役割分担 記録メモ テンプレート集",
    description:
      "家族メンバーごとの担当エリア、月次の当番スケジュール、活動実績、役割変更を、家族内で見返しやすく記録するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383027",
    tags: ["当番", "役割分担", "家族共有", "記録"],
  },
  {
    id: "p45",
    type: "single",
    title: "高齢親の安否確認・定期連絡 記録メモ テンプレート集",
    description:
      "離れて暮らす親への定期連絡を、日時、担当者、連絡方法、対応可否、短い様子メモとして時系列で記録し、家族で見返せるPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8434675",
    tags: ["安否確認", "定期連絡", "連絡記録", "家族共有"],
  },
  {
    id: "p46",
    type: "single",
    title: "高齢親の近所付き合い・地域連絡先 整理メモ テンプレート集",
    description:
      "近所の人、町内会・自治会、管理会社などの連絡先と関係性を、家族内メモとして整理して共有するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383033",
    noteUrl: "https://note.com/mild_quail6092/n/n353bf9cb1320",
    tags: ["近所付き合い", "地域連絡先", "連絡メモ", "家族共有"],
  },
  {
    id: "p47",
    type: "single",
    title: "高齢親の買い物・日用品補充メモ テンプレート集",
    description:
      "よく買う定番品、買わなくてよいもの、季節行事の準備メモを、家族内で見返しやすい形にそろえるPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8434977",
    tags: ["買い物メモ", "日用品", "補充", "家族共有"],
  },
  {
    id: "p48",
    type: "single",
    title: "高齢親の郵便物・通知まとめ管理テンプレート集",
    description:
      "役所やサービスから届く郵便物・通知を、受け取り日、保管場所、期限、次に確認することの形で家族内に残しやすくするPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383038",
    noteUrl: "https://note.com/mild_quail6092/n/n7bae67b631a1",
    tags: ["郵便物管理", "通知", "期限", "家族共有"],
  },
  {
    id: "p35",
    type: "single",
    title: "親のかかりつけ医・薬局・処方薬情報まとめテンプレート集",
    description:
      "医療機関・薬局の連絡先、処方薬・市販薬・サプリ、更新履歴を、お薬手帳と併用する家族用メモとして整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382989",
    tags: ["かかりつけ医", "薬局", "処方薬"],
  },
  {
    id: "p34",
    type: "single",
    title: "高齢親の食事・水分・体重の毎日記録テンプレート集",
    description:
      "在宅介護中の食事の様子、水分のとり方、体重、週まとめ、受診前に伝えたいことを整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382987",
    tags: ["食事記録", "水分記録", "体重記録"],
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
    id: "p30",
    type: "single",
    title: "施設入所後の面会・差し入れ・連絡整理メモテンプレート集",
    description:
      "施設入所後の面会記録、差し入れ・持ち物確認、施設からの連絡、家族共有を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382968",
    noteUrl: "https://note.com/mild_quail6092/n/nbb856cb5100d",
    tags: ["施設入所後", "面会記録", "差し入れ"],
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
    id: "p28",
    type: "single",
    title: "ケアマネ面談後の家族ToDoまとめテンプレート集",
    description:
      "ケアマネ面談後に、決まったこと、家族がやること、担当者、次回までの確認事項を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382960",
    noteUrl: "https://note.com/mild_quail6092/n/n01164901b36a",
    tags: ["ケアマネ", "面談後ToDo", "家族共有"],
  },
  {
    id: "p29",
    type: "single",
    title: "訪問介護利用時の家族共有メモテンプレート集",
    description:
      "訪問介護の訪問前後に、家族が伝えたいこと、訪問後の気づき、次回確認事項を整理するPDF/Excelセット。",
    priceLabel: "単品 1,480円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8382965",
    noteUrl: "https://note.com/mild_quail6092/n/n81ea59444520",
    tags: ["訪問介護", "家族共有", "確認メモ"],
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
    id: "care-start-37",
    type: "pack",
    title: "親の介護はじめの37商品まとめセット",
    description:
      "在宅介護、家族共有、実家まわりの整理をまとめて進めたい方向けの高単価セット。単品を複数買う前の比較候補として案内します。",
    priceLabel: "まとめ 19,800円",
    boothUrl: "https://kaigo-okane.booth.pm/items/8383305",
    tags: ["37商品", "高単価", "まとめ"],
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
    productIds: ["note-compare", "starter-set", "p01", "p104", "p48", "p03", "p31", "s3", "full-pack"],
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
    productIds: ["p103", "p45", "p48", "p46", "p40", "p37", "p36", "p32", "p31", "p22", "p03", "p02", "starter-set", "care-start-37", "s3", "note-compare"],
    nextActions: [
      "普段の連絡頻度、電話がつながらない時の順番、訪問できる人を決める",
      "通信費、訪問交通費、配食や見守りサービス費、緊急時の立替を分けて記録する",
      "保険証、お薬手帳、鍵、近所の連絡先など、もしもの時に必要な情報を1か所にまとめる",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "disaster-prep",
    label: "高齢親の災害時持ち出し品・避難先・連絡先を家族で整理したい",
    shortLabel: "災害時の備え",
    description:
      "避難判断や防災計画の代替ではなく、持ち出し品、薬、緊急連絡先、避難先候補、家族の役割を手元で見返せるようにします。",
    productIds: ["p31", "p46", "p03", "p103", "p02", "p01", "starter-set", "s3", "full-pack", "note-faq"],
    nextActions: [
      "薬、お薬手帳、保険証、充電器、眼鏡、補聴器など、親に必要な持ち出し品を確認する",
      "家族、近所、かかりつけ医、薬局、ケアマネ、介護事業所の連絡先を1か所にまとめる",
      "避難先や福祉避難所の利用可否、災害時の行動は自治体や公式情報で確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "money",
    label: "介護費用、保険、年金、立替精算など、お金まわりが不安",
    shortLabel: "お金を整理",
    description: "支出と立替の記録を先に作ると、家族の話し合いと外部相談の両方が進めやすくなります。",
    productIds: ["p104", "p48", "p05", "p01", "s3", "facility-pack", "full-pack", "note-faq"],
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
    productIds: ["p105", "p44", "p42", "p40", "p48", "p38", "p37", "p36", "p32", "p31", "p30", "p29", "p28", "p27", "p26", "p13", "p05", "p104", "p02", "p01", "care-start-37", "s3", "all-87", "note-compare"],
    nextActions: [
      "費用分担と作業分担を別々の表で管理する",
      "病院、ケアマネ、施設との連絡窓口を決める",
      "決まったことだけでなく、未決事項も次回確認リストとして残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "family-handover",
    label: "介護の申し送り・引き継ぎメモを家族でそろえたい",
    shortLabel: "申し送り",
    description:
      "医療やサービスの判断ではなく、日々の様子、決まったこと、次に確認したいことを、家族内で同じ形式で残します。",
    productIds: ["p42", "p44", "p40", "p37", "p36", "p105", "p02", "p03", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "申し送りは「事実」「次に確認すること」「連絡が必要なこと」に分けて短く残す",
      "帰省や当番交代の後に、決まったこと・未決のこと・次の担当をまとめる",
      "医療や介護サービスの判断は家族内で決め切らず、担当窓口や専門職へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "family-duty-role-share",
    label: "介護の当番・役割分担を家族で決めて記録したい",
    shortLabel: "当番・役割",
    description:
      "意見調整や判断ではなく、担当エリア、当番スケジュール、活動実績、役割変更を、家族内で見返しやすい形にそろえます。",
    productIds: ["p44", "p42", "p105", "p40", "p38", "p37", "p36", "p32", "p02", "care-start-37", "all-87", "note-compare"],
    nextActions: [
      "連絡窓口、訪問、買い物、費用記録、実家整理など、役割を項目に分けて書き出す",
      "月ごとの当番（誰がいつ担当するか）と、訪問・連絡の予定だけ先に決める",
      "実績と変更を短く残し、半年ごとなどの見直しタイミングで更新する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "caregiver-rest",
    label: "介護する家族自身の休息予定と負担を見える化したい",
    shortLabel: "介護者の休息",
    description:
      "体調や制度の判断ではなく、介護予定、負担が重い時間帯、休息予定、家族へ頼みたいことを見える化します。",
    productIds: ["p32", "p105", "p27", "p26", "p29", "p28", "p13", "p02", "full-pack", "note-faq"],
    nextActions: [
      "今週の介護予定と、休息として確保したい時間を同じ表に書く",
      "負担が重い曜日・時間帯・作業を分け、家族へ頼みたいことを具体化する",
      "強い疲労、不眠、つらさ、安全面の不安がある場合は、医療機関、自治体、地域包括支援センター、勤務先窓口へ相談する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "home-appliance-manuals",
    label: "実家の家電リモコン・取扱説明書・保証書の場所を家族で共有したい",
    shortLabel: "家電リモコン",
    description:
      "修理や設備操作の判断ではなく、日常家電のよく使う操作、取扱説明書や保証書の保管場所、型番、メーカー窓口の控えを家族内で見える化します。",
    productIds: ["p37", "p36", "p31", "p32", "p105", "p103", "p02", "p03", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "エアコン、テレビ、録画機、電話、洗濯機、電子レンジ、照明など、家族が迷いやすい家電を一覧にする",
      "よく使うリモコン操作、取扱説明書や保証書の保管場所、型番、購入店を短く書き留める",
      "設備操作、修理、配線、工事、点検、秘密情報の記録は避け、必要時はメーカー窓口や専門業者の案内を確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "home-storage-map",
    label: "実家の日用品の収納場所・置き場所を家族で共有したい",
    shortLabel: "置き場所マップ",
    description:
      "片付けや廃棄判断の代替ではなく、実家の部屋別・棚段別の置き場所を家族内メモとしてそろえ、帰省時の探し物を減らします。",
    productIds: ["p40", "p38", "p39", "p37", "p105", "p02", "p03", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "台所、リビング、寝室、洗面所、押し入れなど部屋ごとに、よく探す日用品の置き場所を短く書く",
      "棚・引き出しの段など「探す手がかり」だけを残し、秘密情報や設備操作のメモは作らない",
      "変更があったら更新するルールと、次の帰省日など見直しタイミングを決める",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "clothes-bedding-season-size",
    label: "親の衣類・寝具・季節替え・サイズ情報を家族で共有したい",
    shortLabel: "衣類・寝具",
    description:
      "処分や買い足しの判断ではなく、衣類・寝具のサイズ、季節、保管場所、予備の有無を家族内メモとしてそろえ、急な準備でも探しやすくします。",
    productIds: ["p39", "p38", "p37", "p22", "p21", "p02", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "普段着、外出着、下着・靴下、寝具などに分けて、よく使うものと保管場所を短く書く",
      "サイズ、季節替えのタイミング、予備の有無をメモし、次の確認日を決める",
      "施設やサービスの持ち物ルール、洗濯・管理の判断は、利用先の案内や担当窓口へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "housework-routine",
    label: "実家の掃除・洗濯・家事ルーティンを家族で共有したい",
    shortLabel: "家事ルーティン",
    description:
      "家事のやり方の判断ではなく、掃除・洗濯・ゴミ出し・片付けなどの日常タスクを、頻度・担当・申し送りメモとしてそろえます。",
    productIds: ["p40", "p47", "p38", "p39", "p37", "p105", "p02", "p03", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "掃除、洗濯、ゴミ出し、片付けなどを「毎日/週1/不定期」に分けて書き出す",
      "家族が入れ替わっても困らないよう、担当者、場所、気をつける点を短くメモする",
      "設備操作、安全判断、秘密情報の記録は避け、必要な場合は公式案内や専門業者へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "consumables-stock",
    label: "在宅介護の消耗品の在庫と補充タイミングを家族で共有したい",
    shortLabel: "消耗品在庫",
    description:
      "専門的な用品選定ではなく、家庭で使う介護消耗品の種類、残量の目安、補充したい数量、購入先、家族への申し送りを整理します。",
    productIds: ["p36", "p37", "p22", "p21", "p25", "p27", "p29", "p02", "p03", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "排泄ケア、清潔衛生、口腔ケア、皮膚保湿、介護者用品に分けて今使っているものを書く",
      "残り少ないもの、次回買うもの、購入先、担当する家族をメモする",
      "医薬品、治療用品、専門用品の判断は医師、薬剤師、訪問看護師、ケアマネなどへ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "medical-contact-medicine-info",
    label: "親のかかりつけ医・薬局・処方薬情報を家族で共有したい",
    shortLabel: "医療薬局情報",
    description:
      "服薬や医療判断ではなく、医療機関、薬局、処方薬・市販薬・サプリの名前、確認日、家族への共有事項をお薬手帳と併用する控えとして整理します。",
    productIds: ["p35", "p24", "p23", "p10", "p20", "p107", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "病院名、診療科、担当医、薬局名、連絡先を一か所にまとめる",
      "薬袋やお薬手帳を見ながら、薬の名前、用法メモ、確認日を転記する",
      "飲み合わせ、副作用、用法、服薬変更、受診要否は医師や薬剤師へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "meal-water-weight",
    label: "親の食事・水分・体重を日々記録し、受診前に説明しやすくしたい",
    shortLabel: "食事水分記録",
    description:
      "食事量や水分量の評価ではなく、家族が見た食事、水分、体重、気になった変化、相談時に伝えることを事実ベースで整理します。",
    productIds: ["p34", "p25", "p24", "p23", "p20", "p107", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "朝昼夕の食事の様子、水分のとり方、測れた日の体重を短く残す",
      "週ごとに気になった変化と、受診時やケアマネへ伝えたいことをまとめる",
      "食事量、水分量、体重変化、栄養状態、病気の判断は医療職や専門窓口へ相談する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "welfare-equipment",
    label: "福祉用具のレンタル・購入を相談する前に、家族で困りごとを整理したい",
    shortLabel: "福祉用具相談",
    description:
      "貸与・購入の判断ではなく、生活場面ごとの困りごと、気になる候補、確認したい質問、家族の意見を相談前に整理します。",
    productIds: ["p33", "p28", "p107", "p20", "p23", "p24", "p22", "p21", "p02", "full-pack", "note-faq"],
    nextActions: [
      "移動、立ち上がり、入浴、排泄、寝具まわりなど、困っている生活場面を分ける",
      "気になる道具名、パンフレットや見積で見た情報、家族の心配ごとをメモする",
      "給付可否、対象品目、自己負担額、本人への適合は、ケアマネ、福祉用具事業者、市区町村窓口へ確認する",
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
    productIds: ["p20", "p35", "p34", "p28", "p24", "p23", "p107", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p21", "p37", "p36", "p35", "p34", "p30", "p107", "p20", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p22", "p37", "p36", "p35", "p34", "p26", "p29", "p27", "p28", "p21", "p107", "p20", "p10", "p103", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p26", "p36", "p34", "p33", "p32", "p29", "p27", "p28", "p22", "p25", "p24", "p107", "p105", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p27", "p37", "p36", "p32", "p30", "p29", "p26", "p25", "p24", "p22", "p105", "p13", "p02", "care-start-37", "full-pack", "note-faq"],
    nextActions: [
      "月内の通院、訪問サービス、デイサービス、家族対応日をカレンダーに置く",
      "誰が連絡、付き添い、買い物、見守りを担うかを決定済みと未定で分ける",
      "変更や負担の偏りは家族内で共有し、サービス調整はケアマネや各事業所へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "care-manager-meeting-after",
    label: "ケアマネ面談後に、決まったことと家族のToDoを整理したい",
    shortLabel: "面談後ToDo",
    description:
      "ケアプランや契約判断の代替ではなく、面談で聞いたこと、家族がやること、次回までに確認することを整理します。",
    productIds: ["p28", "p35", "p33", "p32", "p29", "p107", "hospital-consult-pack", "p105", "p27", "p26", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "面談で決まったこと、確認中のこと、家族ToDoを分けて書き出す",
      "誰がいつまでに連絡、書類確認、本人確認をするか担当を決める",
      "サービス変更や契約、介護保険上の扱いは担当ケアマネや各事業所へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "home-visit-care",
    label: "訪問介護の利用後に、家族で気づきや確認事項を共有したい",
    shortLabel: "訪問介護メモ",
    description:
      "訪問介護の業務記録や指示書の代替ではなく、訪問前後の気づき、家族が伝えたいこと、次回確認事項を整理します。",
    productIds: ["p29", "p32", "p26", "p28", "p27", "p107", "p105", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "訪問前に伝えたいこと、訪問後に家族が気づいたこと、次回確認事項を分ける",
      "ヘルパーへの指示ではなく、ケアマネや事業所へ確認する事項として残す",
      "同じ気づきが続く場合は週まとめにして、次回面談や事業所連絡で確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "fall-near-miss",
    label: "親が転んだ・転びそうになった場面を、相談前に記録したい",
    shortLabel: "転倒記録",
    description: "転倒原因や受診要否を判断するのではなく、日時、場所、状況、本人の様子、家族の対応、相談先への確認事項を事実ベースで整理します。",
    productIds: ["p23", "p33", "p24", "p20", "p10", "p22", "p21", "p107", "p103", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p24", "p35", "p34", "p23", "p10", "p20", "p107", "p103", "p02", "p03", "full-pack", "note-faq"],
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
    productIds: ["p25", "p36", "p35", "p34", "p33", "p32", "p29", "p28", "p27", "p26", "p09", "p24", "p23", "p22", "p21", "p107", "p02", "p03", "p01", "hospital-consult-pack", "full-pack", "note-faq"],
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
    productIds: ["p13", "p32", "p28", "p27", "hospital-consult-pack", "p107", "p105", "p02", "note-faq"],
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
    productIds: ["hospital-consult-pack", "p36", "p35", "p34", "p33", "p31", "p28", "p29", "p25", "p27", "p26", "p24", "p09", "p22", "p21", "p20", "p13", "p107", "p30", "p02", "p03", "p01", "s3", "full-pack", "note-faq"],
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
    productIds: ["p30", "p21", "p106", "facility-pack", "p38", "p01", "p05", "all-87", "full-pack", "note-compare"],
    nextActions: [
      "月額費用、初期費用、医療対応、面会、立地を同じ表で比較する",
      "見学時に聞くことと、見学後に確認することを分けて残す",
      "実家の書類、保険、車、公共料金の整理も並行して洗い出す",
    ],
    affiliateOfferIds: ["hoken-mammoth", "sbi-insweb-auto"],
  },
  {
    id: "facility-after-admission",
    label: "施設入所後に、面会・差し入れ・施設連絡を家族で共有したい",
    shortLabel: "入所後の連絡",
    description:
      "施設の公式記録や評価ではなく、面会時の様子、差し入れ・持ち物確認、施設からの連絡、家族共有事項を整理します。",
    productIds: ["p30", "facility-pack", "p106", "p21", "p105", "p02", "p03", "full-pack", "note-faq"],
    nextActions: [
      "面会日、本人の様子、施設から聞いたこと、次回確認したいことを分けて残す",
      "差し入れや持ち物は、施設へ確認した可否や条件も一緒に書く",
      "契約、費用、入退所、医療判断に関わることは施設や担当窓口へ確認する",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
  {
    id: "distance",
    label: "遠距離介護で、情報共有や緊急時対応に不安がある",
    shortLabel: "遠距離介護",
    description: "遠方では情報の散在が最大のリスクです。連絡先、役割、緊急時の判断材料を先に共有します。",
    productIds: ["p105", "p32", "p31", "p30", "p29", "p28", "p27", "p26", "p02", "p03", "p01", "s3", "full-pack", "note-faq"],
    nextActions: [
      "現地対応者、家族連絡係、費用管理係を分けて決める",
      "親の医療、服薬、介護サービス、鍵、近所の連絡先を共有する",
      "電話やLINEで決めたことを、あとで見返せるメモに残す",
    ],
    affiliateOfferIds: ["hoken-mammoth"],
  },
];
