import type { ReactNode } from "react";
import Link from "next/link";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

type SupplementalTemplate = {
  id: string;
  title: string;
  description: string;
  boothUrl: string;
  guidePath: string;
  toolUrl: string;
};

const supplementalTemplates: SupplementalTemplate[] = [
  {
    id: "p112",
    title: "高齢親の好きな音楽・歌メモ",
    description:
      "親が好きな曲、歌手、思い出の歌、会話に出る歌を、歌詞転載や契約判断ではなく、家族内で会話前に見返す手がかりとして控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383153?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p112",
    guidePath: "/guide/parent-favorite-music-songs-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-favorite-music-songs-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p112_tool",
  },
  {
    id: "p111",
    title: "高齢親の読書・新聞・雑誌メモ",
    description:
      "親がよく読む本、新聞、雑誌、好きな作家やテーマを、本選びや契約判断ではなく、家族内で会話前に見返す手がかりとして控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383152?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p111",
    guidePath: "/guide/parent-reading-newspaper-magazine-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-reading-newspaper-magazine-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p111_tool",
  },
  {
    id: "p110",
    title: "高齢親のテレビ・ラジオ好きな番組メモ",
    description:
      "親がよく見るテレビ番組やよく聴くラジオ番組を、契約や健康判断ではなく、家族内で会話前に見返す手がかりとして控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383151?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p110",
    guidePath: "/guide/parent-tv-radio-favorite-programs-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-tv-radio-favorite-programs-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p110_tool",
  },
  {
    id: "p92",
    title: "高齢親の家の老眼鏡・眼鏡ケースまわりメモ",
    description:
      "老眼鏡、眼鏡ケース、眼鏡置き、眼鏡ふきの布などを、視力判断・検眼・処方・度数管理・買い替え判断とは分けて、家族内の呼び方・置き場所・親が話してくれた由来として控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383449?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p92",
    guidePath: "/guide/parent-home-family-eyeglasses-cases-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-eyeglasses-cases-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p92_tool",
  },
  {
    id: "p91",
    title: "高齢親の家の旅行記念品・お土産物まわりメモ",
    description:
      "旅行先の置物、帰省のお土産、観光地の記念品、家族で出かけた時の小物などを、査定・売却・処分・税務・相続判断とは分けて、家族内の呼び方・置き場所・親が話してくれた由来として控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383448?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p91",
    guidePath: "/guide/parent-home-family-travel-souvenirs-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-travel-souvenirs-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p91_tool",
  },
  {
    id: "p90",
    title: "高齢親の家のつり下げ飾りまわりメモ",
    description:
      "風鈴、つるし飾り、提灯、暖簾飾り、つるし雛など、天井や鴨居から吊り下げられていた飾りを、火気・取り付け・落下対策や処分判断とは分けて、家族内の呼び方・場所・見た目として控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383446?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p90",
    guidePath: "/guide/parent-home-family-hanging-ornaments-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-hanging-ornaments-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p90_tool",
  },
  {
    id: "p89",
    title: "高齢親の家の古いおもちゃ・人形まわりメモ",
    description:
      "ぬいぐるみ、人形、木のおもちゃ、ブリキ玩具、積み木、ボードゲームなど、長年置かれていた古いおもちゃを、価値判断や処分判断とは分けて家族内の呼び方・置き場所として控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383445?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p89",
    guidePath: "/guide/parent-home-family-old-toys-dolls-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-old-toys-dolls-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p89_tool",
  },
  {
    id: "p88",
    title: "高齢親の家の壁飾り・紙ものまわりメモ",
    description:
      "額縁、賞状、写真立て、カレンダー、ポスターなど、壁や柱に掛けられていた紙ものを、個人情報や評価判断とは分けて家族内の呼び方・置き場所として控えます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383442?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p88",
    guidePath: "/guide/parent-home-family-wall-decoration-paper-items-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-wall-decoration-paper-items-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p88_tool",
  },
  {
    id: "p87",
    title: "高齢親の家の傘・雨具まわりメモ",
    description:
      "玄関や傘立て、物置に長年置かれていた傘、折りたたみ傘、雨合羽、長靴、雨具袋などを、雨の日の外出判断、防災判断、修理や処分の判断とは切り分け、家族内で見返す控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383439?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p87",
    guidePath: "/guide/parent-home-family-umbrella-rain-gear-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-umbrella-rain-gear-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p87_tool",
  },
  {
    id: "p86",
    title: "高齢親の家の裁縫箱・糸・ボタン・針山まわりメモ",
    description:
      "茶の間や机、棚に長年置かれていた裁縫箱、糸箱、ボタン缶、針山、裁ちばさみ入れなどを、針の使い方、安全管理、裁縫手順、処分判断とは切り分け、家族内で見返す控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383434?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p86",
    guidePath: "/guide/parent-home-family-sewing-box-thread-buttons-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-sewing-box-thread-buttons-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p86_tool",
  },
  {
    id: "p85",
    title: "高齢親の家の文房具・ペン立て・鉛筆削りまわりメモ",
    description:
      "電話台や茶の間、机まわりに長年置かれていたペン立て、鉛筆削り、鉛筆入れ、消しゴム入れなどを、書類や手紙の内容、住所録、契約、価値判断とは切り分け、家族内で見返す控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383432?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p85",
    guidePath: "/guide/parent-home-family-stationery-writing-items-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-stationery-writing-items-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p85_tool",
  },
  {
    id: "p84",
    title: "高齢親の家のあかり・照明器具まわりメモ",
    description:
      "茶の間のあかり、台所や玄関の照明、枕元の電気スタンド、ランプシェードなど、親の家で家族が長年見てきたあかりまわりの呼び方、置かれていた部屋、親が話してくれたことを、電気作業や安全判断ではなく家族内の記録として整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383429?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p84",
    guidePath: "/guide/parent-home-family-lighting-lamp-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-lighting-lamp-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p84_tool",
  },
  {
    id: "p83",
    title: "高齢親の家の小箱・入れ物まわりメモ",
    description:
      "茶筒、菓子缶、小箱、小さな入れ物など、親の家で家族が長年見てきた小物入れの呼び方、置かれていた場所、親が話してくれたことを、処分や価値判断ではなく家族内の記録として整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383425?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p83",
    guidePath: "/guide/parent-home-family-small-box-container-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-small-box-container-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p83_tool",
  },
  {
    id: "p82",
    title: "高齢親の家の玄関まわりメモ",
    description:
      "傘立て、靴べら、スリッパ立て、来客用履物入れなど、親の家で家族が長年見てきた玄関まわりの物を、修理や処分、防犯、防災、医療・介護シューズ選定に使わず、家族内の呼び方・置かれていた場所・親が話してくれたこととして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383422?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p82",
    guidePath: "/guide/parent-home-family-entrance-footwear-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-entrance-footwear-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p82_tool",
  },
  {
    id: "p81",
    title: "高齢親の家の鏡まわりメモ",
    description:
      "姿見、洗面鏡、鏡台の鏡、小さな壁掛け鏡など、親の家で家族が長年見てきた鏡の呼び方、場所、見てきた場面、親が話してくれた由来を、美容や健康観察、修理や処分の判断に使わず家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383419?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p81",
    guidePath: "/guide/parent-home-family-mirror-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-mirror-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p81_tool",
  },
  {
    id: "p80",
    title: "高齢親の家の時計まわりメモ",
    description:
      "掛け時計、柱時計、置き時計、目覚まし時計など、親の家で家族が長年見てきた時計の呼び方、場所、見てきた場面、親が話してくれた由来を、修理や処分の判断に使わず家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383414?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p80",
    guidePath: "/guide/parent-home-family-clock-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-clock-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p80_tool",
  },
  {
    id: "p79",
    title: "高齢親の家の障子・襖・引き戸・畳まわりメモ",
    description:
      "障子、襖、板戸、引き戸、縁側、床の間、押し入れ、畳、板の間など、親の家で家族が長年触れてきた場所の呼び方・場面・由来を、修理や改修の判断に使わず家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383411?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p79",
    guidePath: "/guide/parent-home-family-doors-sliding-screens-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-doors-sliding-screens-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p79_tool",
  },
  {
    id: "p78",
    title: "高齢親の家の大型家具メモ",
    description:
      "箪笥、茶箪笥、水屋、座卓、本棚、古い机や椅子など、親の家で長年使ってきた大型家具の呼び方・置き場所・由来を、処分や査定の判断に使わず家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383403?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p78",
    guidePath: "/guide/parent-home-family-furniture-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-furniture-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p78_tool",
  },
  {
    id: "p77",
    title: "高齢親の家の鉢植え・庭の花・盆栽メモ",
    description:
      "家の中、縁側、庭先で家族が長年見てきた鉢植え、植木、庭の花、盆栽、観葉植物を、手入れや処分の判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383400?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p77",
    guidePath: "/guide/parent-home-family-plants-garden-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-plants-garden-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p77_tool",
  },
  {
    id: "p76",
    title: "高齢親の家の手ぬぐい・タオル・前掛け・布巾メモ",
    description:
      "手ぬぐい、タオル、前掛け、かっぽう着、布巾など、親の家で日々使ってきた洗える布ものを、処分や価値判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383392?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p76",
    guidePath: "/guide/parent-home-daily-cloth-items-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-daily-cloth-items-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p76_tool",
  },
  {
    id: "p75",
    title: "高齢親の家の台所道具・台所小物メモ",
    description:
      "鍋、フライパン、包丁、まな板、ざる、ボウルなど、親の家で長く使ってきた台所道具を、査定や処分判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383389?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p75",
    guidePath: "/guide/parent-home-kitchen-tools-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-kitchen-tools-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p75_tool",
  },
  {
    id: "p74",
    title: "高齢親の家族の食器・取り合わせメモ",
    description:
      "茶碗、湯のみ、お椀、取り皿、小皿など、家族が長年見てきた食器の取り合わせを、査定や処分判断に使わず家族内の軽い覚え書きとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383386?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p74",
    guidePath: "/guide/parent-home-family-tableware-combination-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-tableware-combination-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p74_tool",
  },
  {
    id: "p73",
    title: "高齢親の家の場所・部屋・家具の呼び名メモ",
    description:
      "中の間、茶箪笥のところなど、家族だけに通じてきた場所、部屋、家具、コーナーの呼び名を、正式名称や処分判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383382?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p73",
    guidePath: "/guide/parent-home-place-furniture-local-name-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-place-furniture-local-name-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p73_tool",
  },
  {
    id: "p72",
    title: "高齢親の家の家族のいつもの座る場所メモ",
    description:
      "食卓、茶の間、縁側、窓際など、家族がいつも座っていた場所や過ごしていた場所を、席次や健康状態の判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383377?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p72",
    guidePath: "/guide/parent-home-family-sitting-place-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-family-sitting-place-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p72_tool",
  },
  {
    id: "p71",
    title: "高齢親の家の飾りもの・置きもの・季節飾りメモ",
    description:
      "親が家の中で日常や季節の節目に飾ってきた飾りもの、置きもの、季節飾りを、査定や処分判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383373?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p71",
    guidePath: "/guide/parent-home-decoration-seasonal-ornament-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-decoration-seasonal-ornament-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p71_tool",
  },
  {
    id: "p70",
    title: "高齢親の家族向け書き置き・付箋・伝言メモ",
    description:
      "親が家の中で家族向けに書いていた書き置き、付箋、伝言を、家族外への公開や判断に使わず家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383369?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p70",
    guidePath: "/guide/parent-home-written-note-sticky-message-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-written-note-sticky-message-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p70_tool",
  },
  {
    id: "p69",
    title: "高齢親に聞いた家の暮らしの小さなコツ・段取りメモ",
    description:
      "親が話してくれた家の中の場所、道具、小物、季節の変わり目、いつもの置き方や戻し方を、家族内の軽い控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383365?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p69",
    guidePath: "/guide/parent-home-living-tips-routine-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-living-tips-routine-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p69_tool",
  },
  {
    id: "p68",
    title: "高齢親の家庭料理・味つけの作り方メモ",
    description:
      "親が話してくれた家庭料理の名前、材料、目分量、火加減、味つけの加減を、健康判断や公開用レシピにせず家族内の思い出メモとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383190?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p68",
    guidePath: "/guide/parent-home-cooking-seasoning-recipe-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-cooking-seasoning-recipe-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p68_tool",
  },
  {
    id: "p67",
    title: "高齢親宅への帰省 持参・持ち帰りメモ",
    description:
      "帰省で家族が手で運ぶ持って行くもの、持ち帰るものを、次に行く家族が見返せる家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383187?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p67",
    guidePath: "/guide/parent-home-visit-bring-carryback-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-home-visit-bring-carryback-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p67_tool",
  },
  {
    id: "p66",
    title: "高齢親に次回聞きたいこと・話したいことメモ",
    description:
      "次に親と電話、帰省、対面で話すとき、家族内で聞きたいことや話したいことをあらかじめ控え、話しそびれを減らすためのメモです。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383185?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p66",
    guidePath: "/guide/parent-next-conversation-topics-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-next-conversation-topics-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p66_tool",
  },
  {
    id: "p65",
    title: "高齢親が大切にしている品の背景メモ",
    description:
      "親の家に長くある品や大切にしている品について、親が話してくれた背景、きっかけ、短い思い出を、処分や相続の判断に踏み込まず家族内の控えとして整理します。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383181?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p65",
    guidePath: "/guide/parent-cherished-item-background-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-cherished-item-background-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p65_tool",
  },
  {
    id: "p64",
    title: "高齢親が話す口癖・言い回しメモ",
    description:
      "親がよく使う言葉、地域の言い回し、物や行動の呼び方を、辞書や判断材料ではなく家族内で見返す控えとして残せます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383178?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p64",
    guidePath: "/guide/parent-speech-habit-phrases-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-speech-habit-phrases-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p64_tool",
  },
  {
    id: "p63",
    title: "高齢親のよく行く店・生活圏メモ",
    description:
      "スーパー、薬局、理美容室、散歩先など、親がふだん立ち寄る場所と次に確認することを、判断材料ではなく引き継ぎ用の控えとして整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383096?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p63",
    guidePath: "/guide/parent-frequent-shops-living-area-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-frequent-shops-living-area-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p63_tool",
  },
  {
    id: "p62",
    title: "実家の季節用品・年中行事用品 収納場所メモ",
    description:
      "正月用品、季節飾り、防災用品など、年に数回だけ使うものの収納場所を家族内の控えとして整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383090?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p62",
    guidePath: "/guide/parent-seasonal-event-supplies-storage-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-seasonal-event-supplies-storage-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p62_tool",
  },
  {
    id: "p61",
    title: "実家の部屋寸法・家具配置 控えメモ",
    description:
      "帰省時に測った部屋寸法、家具の位置、通路、搬入経路を、購入や工事の判断に使わない家族内の控えとして整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383086?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p61",
    guidePath: "/guide/parent-room-dimensions-furniture-layout-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-room-dimensions-furniture-layout-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p61_tool",
  },
  {
    id: "p60",
    title: "高齢親と暮らすペットのお世話控えメモ",
    description:
      "ごはん、水、散歩、トイレ、用品の置き場所を、家族内の引き継ぎメモとして整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383160?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p60",
    guidePath: "/guide/parent-pet-care-routine-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-pet-care-routine-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p60_tool",
  },
  {
    id: "p59",
    title: "実家の窓・カーテン・網戸サイズ控えメモ",
    description:
      "帰省時に測った窓まわりのサイズ、測定日、次に確認することを家族で見返しやすく整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383082?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59",
    guidePath: "/guide/parent-window-curtain-screen-size-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-window-curtain-screen-size-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59_tool",
  },
];

export default function KaigoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <section className="mx-auto mb-10 max-w-6xl px-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="mb-2 text-xs font-bold text-primary">新着テンプレート</p>
          <h2 className="mb-2 text-lg font-bold">家族で見返す小さな控えメモ</h2>
          <p className="mb-4 text-sm leading-7 text-muted">
            介護や実家の整理で後回しになりやすい生活まわりの情報を、判断ではなく家族内の引き継ぎメモとして残せるテンプレートです。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {supplementalTemplates.map((item) => (
              <article key={item.id} className="rounded-lg border border-primary/15 bg-white p-4">
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <TrackedExternalLink
                    href={item.boothUrl}
                    eventName="booth_click"
                    page="kaigo"
                    position="supplemental_new_template"
                    itemId={item.id}
                    className="rounded-md bg-primary px-3 py-2 text-sm font-bold text-white hover:opacity-90"
                  >
                    BOOTHで見る
                  </TrackedExternalLink>
                  <Link
                    href={item.guidePath}
                    className="rounded-md border border-primary/30 px-3 py-2 text-sm font-bold text-primary hover:border-primary"
                  >
                    作り方を読む
                  </Link>
                  <a
                    href={item.toolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-primary/30 px-3 py-2 text-sm font-bold text-primary hover:border-primary"
                  >
                    無料メモを使う
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
