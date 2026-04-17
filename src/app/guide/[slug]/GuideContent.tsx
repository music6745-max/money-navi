import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export function GuideContent({ slug }: { slug: string }) {
  const content = guideContents[slug];
  if (!content) {
    return (
      <div className="prose prose-sm max-w-none text-muted">
        <p>この記事は現在準備中です。近日公開予定です。</p>
      </div>
    );
  }
  return <div className="space-y-6 leading-relaxed">{content}</div>;
}

const guideContents: Record<string, React.ReactNode> = {
  "nisa-broker-ranking-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAの証券会社選びで重要な3つのポイント</h2>
        <p>
          2024年から大幅刷新された新NISA制度は、年間360万円・生涯1,800万円の非課税投資が可能になりました。しかし、どの証券会社で口座を開設するかによって、実際の運用成績やポイント還元の金額が大きく変わってきます。
        </p>
        <p>選ぶ際に重視すべきポイントは以下の3つです。</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>取扱銘柄数（特に投資信託の種類）</li>
          <li>クレカ積立のポイント還元率</li>
          <li>使いやすさ（アプリ・画面のわかりやすさ）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 新NISAおすすめネット証券ランキング"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "投資信託 2,500本以上｜三井住友カード積立で最大5%還元",
            features: [
              "国内株式売買手数料 0円（新NISA）",
              "投資信託ラインナップ業界最多水準",
              "三井住友カードゴールド積立で1%還元",
              "Vポイント・Tポイント・Pontaポイントで投資可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天カード積立で最大1%還元｜楽天ポイント投資対応",
            features: [
              "楽天カード積立で最大1%の楽天ポイント",
              "楽天キャッシュ積立と併用で月10万円分が還元対象",
              "楽天銀行との連携でマネーブリッジ特典",
              "アプリ「iSPEED」が初心者に人気",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "ポイント重視",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "マネックスカード積立で1.1%還元（業界最高水準）",
            features: [
              "クレカ積立の還元率が1.1%と業界トップクラス",
              "米国株の取扱銘柄数が豊富",
              "外国株の為替手数料が無料",
              "銘柄スカウター（分析ツール）が強力",
            ],
            href: "https://info.monex.co.jp/nisa/index.html",
            badge: "還元率No.1",
          },
          {
            name: "松井証券",
            rank: 4,
            highlight: "投信保有でポイントがもらえる独自サービス",
            features: [
              "信託報酬の一部がポイントとしてキャッシュバック",
              "NISA口座の取扱銘柄が豊富",
              "日本株サポートの問い合わせ対応が手厚い",
              "25歳以下は日本株の手数料無料",
            ],
            href: "https://www.matsui.co.jp/service/nisa/",
          },
          {
            name: "auカブコム証券",
            rank: 5,
            highlight: "auユーザーなら還元率UP｜Pontaポイント投資可能",
            features: [
              "au PAYカード積立で最大1%還元",
              "Pontaポイントで投資信託の購入が可能",
              "auじぶん銀行との連携で金利優遇",
              "auユーザーには使い勝手◎",
            ],
            href: "https://kabu.com/nisa/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAのよくある質問</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-bold">Q. 複数の証券会社で新NISA口座を開けますか？</p>
            <p className="text-muted">A. NISA口座は1人1口座のみです。ただし年単位で他社への変更は可能です。</p>
          </div>
          <div>
            <p className="font-bold">Q. つみたて投資枠と成長投資枠は併用できますか？</p>
            <p className="text-muted">A. 併用可能。年間合計360万円（つみたて120万円＋成長240万円）まで。</p>
          </div>
        </div>
      </section>
    </>
  ),
  "roboadvisor-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアドバイザーとは</h2>
        <p>
          ロボアドバイザーは、AIが投資家のリスク許容度に応じて自動的にポートフォリオを構築・運用するサービスです。自分で銘柄を選ぶ手間がなく、長期分散投資を実現できるため、投資初心者に人気です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 主要ロボアドバイザー比較"
        services={[
          {
            name: "ウェルスナビ",
            rank: 1,
            highlight: "預かり資産No.1｜新NISA対応",
            features: [
              "預かり資産1兆円超の最大手",
              "手数料 年1.1%（税込）",
              "最低投資額 1万円から",
              "おまかせNISA対応",
            ],
            href: "https://www.wealthnavi.com/",
            badge: "最大手",
          },
          {
            name: "THEO+ docomo",
            rank: 2,
            highlight: "dポイントユーザーにお得",
            features: [
              "手数料 年0.715〜1.1%",
              "dカード利用額に応じた特典",
              "ロボアド初心者向けサポート充実",
              "最低投資額 10万円",
            ],
            href: "https://theo.blue/docomo/",
          },
          {
            name: "SUSTEN",
            rank: 3,
            highlight: "成功報酬型｜利益が出ない時は手数料無料",
            features: [
              "成功報酬型（年0.484%〜1.089%）",
              "ESG投資の選択肢あり",
              "利益が出ない月は手数料0円",
              "最低投資額 10万円",
            ],
            href: "https://susten.jp/",
            badge: "成功報酬型",
          },
          {
            name: "楽ラップ",
            rank: 4,
            highlight: "楽天証券のロボアド｜固定報酬 or 成功報酬選択可",
            features: [
              "手数料プランが2種類選択可能",
              "最低投資額 1万円",
              "楽天ポイント連携",
              "下落ショック軽減機能",
            ],
            href: "https://wrap.rakuten-sec.co.jp/",
          },
          {
            name: "ON COMPASS",
            rank: 5,
            highlight: "マネックスグループの低コストロボアド",
            features: [
              "運用手数料 年0.9775%（最大）",
              "最低投資額 1,000円",
              "8つのポートフォリオから選択",
              "マネックス証券口座が必要",
            ],
            href: "https://www.on-compass.com/",
          },
        ]}
      />
    </>
  ),
  "ideco-broker-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCoの金融機関選びが重要な理由</h2>
        <p>
          iDeCo（個人型確定拠出年金）は掛金が全額所得控除の対象となる強力な節税制度ですが、金融機関ごとに取扱商品や手数料が異なります。一度口座を開くと変更が面倒なため、最初の選択が重要です。
        </p>
        <p className="text-sm">年収500万円の会社員が月23,000円を拠出した場合、年間約55,200円の節税効果（所得税10%+住民税10%）が得られます。</p>
      </section>
      <ComparisonTableCTA
        title="iDeCoおすすめ金融機関ランキング"
        services={[
          {
            name: "SBI証券 iDeCo",
            rank: 1,
            highlight: "運営管理手数料0円｜商品ラインナップ豊富",
            features: [
              "運営管理手数料 0円（加入者数No.1）",
              "取扱商品 38本（セレクトプラン）",
              "低コストインデックスファンド多数",
              "eMAXIS Slimシリーズ取扱あり",
            ],
            href: "https://go.sbisec.co.jp/prd/ideco/ideco_top.html",
            badge: "商品数トップ",
          },
          {
            name: "楽天証券 iDeCo",
            rank: 2,
            highlight: "運営管理手数料0円｜楽天ポイント運用と併用可",
            features: [
              "運営管理手数料 0円",
              "取扱商品 32本",
              "楽天ポイント投資との連携",
              "アプリが使いやすい",
            ],
            href: "https://dc.rakuten-sec.co.jp/",
          },
          {
            name: "マネックス証券 iDeCo",
            rank: 3,
            highlight: "ロボアドバイザー「iDeCo ロボ」無料提供",
            features: [
              "運営管理手数料 0円",
              "取扱商品 27本",
              "iDeCo ロボで商品選びをサポート",
              "eMAXIS Slim シリーズあり",
            ],
            href: "https://info.monex.co.jp/ideco/",
          },
          {
            name: "松井証券 iDeCo",
            rank: 4,
            highlight: "投信保有で0.4%還元のサポートサービス",
            features: [
              "運営管理手数料 0円",
              "取扱商品 40本（業界最多）",
              "信託報酬に応じたポイント還元",
              "老舗証券のサポート体制",
            ],
            href: "https://www.matsui.co.jp/ideco/",
          },
        ]}
      />
    </>
  ),
  "fx-broker-ranking": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FX会社選びの3つのポイント</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>スプレッド（取引コスト）の狭さ</li>
          <li>約定力（意図した価格で約定できるか）</li>
          <li>口座開設キャンペーンの充実度</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="FX口座開設おすすめ比較TOP5"
        services={[
          {
            name: "GMOクリック証券 FXネオ",
            rank: 1,
            highlight: "FX取引高 世界トップクラス｜業界最狭水準スプレッド",
            features: [
              "米ドル/円スプレッド 0.2銭原則固定",
              "FX取引高12年連続世界1位",
              "高機能アプリ「GMOクリック FXneo」",
              "口座開設キャンペーン最大30万円",
            ],
            href: "https://www.click-sec.com/corp/guide/fxneo/",
            badge: "取引高No.1",
          },
          {
            name: "DMM FX",
            rank: 2,
            highlight: "初心者に人気｜口座開設キャンペーン最大30万円",
            features: [
              "米ドル/円スプレッド 0.2銭原則固定",
              "LINE問い合わせ24時間対応",
              "最短1時間で口座開設完了",
              "5,000円キャッシュバック（条件あり）",
            ],
            href: "https://fx.dmm.com/",
          },
          {
            name: "外為どっとコム",
            rank: 3,
            highlight: "情報量No.1｜初心者教育コンテンツ充実",
            features: [
              "オンラインセミナー無料開催",
              "アナリストレポート豊富",
              "1,000通貨単位から取引可能",
              "主婦・学生にも人気",
            ],
            href: "https://www.gaitame.com/",
          },
          {
            name: "みんなのFX",
            rank: 4,
            highlight: "高スワップポイント｜スワップ狙いの長期投資家向け",
            features: [
              "高金利通貨のスワップが業界最高水準",
              "米ドル/円スプレッド 0.2銭",
              "1,000通貨単位から",
              "約定力に定評",
            ],
            href: "https://min-fx.jp/",
          },
          {
            name: "松井証券 FX",
            rank: 5,
            highlight: "1通貨から取引可能｜少額お試しに最適",
            features: [
              "1通貨から取引可能（業界唯一レベル）",
              "米ドル/円スプレッド 0.2銭",
              "初心者向けサポートあり",
              "大手証券の安心感",
            ],
            href: "https://www.matsui.co.jp/fx/",
          },
        ]}
      />
    </>
  ),
  "crypto-exchange-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">仮想通貨取引所の選び方</h2>
        <p>
          仮想通貨取引所を選ぶ際は、取扱通貨数、手数料、セキュリティ、使いやすさを重視しましょう。金融庁登録の国内取引所であれば一定のセキュリティ水準は担保されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 仮想通貨取引所比較TOP5"
        services={[
          {
            name: "bitFlyer",
            rank: 1,
            highlight: "国内最大手｜7年連続セキュリティ評価No.1",
            features: [
              "ビットコイン取引量 国内No.1",
              "1円から取引可能",
              "取扱通貨 35種類以上",
              "ハッキング被害0件の堅牢なセキュリティ",
            ],
            href: "https://bitflyer.com/",
            badge: "大手",
          },
          {
            name: "コインチェック",
            rank: 2,
            highlight: "アプリDL数No.1｜初心者に最もおすすめ",
            features: [
              "初心者でもわかりやすいアプリUI",
              "取扱通貨 30種類以上",
              "つみたて投資サービスあり",
              "電気代・ガス代を支払うとBTCが貯まる",
            ],
            href: "https://coincheck.com/",
            badge: "初心者向け",
          },
          {
            name: "GMOコイン",
            rank: 3,
            highlight: "各種手数料無料｜総合力No.1",
            features: [
              "入出金手数料 無料",
              "日本円出金手数料 無料",
              "レバレッジ取引対応",
              "取扱通貨 26種類",
            ],
            href: "https://coin.z.com/jp/",
          },
          {
            name: "bitbank",
            rank: 4,
            highlight: "アルトコイン取引量No.1｜板取引可能",
            features: [
              "全通貨でMaker -0.02%の手数料",
              "板取引でスプレッドの狭い取引が可能",
              "セキュリティ評価が高い",
              "取扱通貨 38種類",
            ],
            href: "https://bitbank.cc/",
          },
          {
            name: "SBI VCトレード",
            rank: 5,
            highlight: "SBIグループの安心感｜手数料無料が多い",
            features: [
              "各種手数料無料",
              "ステーキングサービスあり",
              "レンディング年利最大10%",
              "SBI証券連携",
            ],
            href: "https://www.sbivc.co.jp/",
          },
        ]}
      />
    </>
  ),
  "high-reward-credit-cards": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高還元率クレカの選び方</h2>
        <p>
          クレジットカードの還元率は通常0.5%前後ですが、1%以上なら「高還元率カード」と呼ばれます。年会費無料で1%以上還元される優秀なカードを厳選しました。
        </p>
      </section>
      <ComparisonTableCTA
        title="高還元率クレジットカードおすすめ5選"
        services={[
          {
            name: "楽天カード",
            rank: 1,
            highlight: "還元率1%｜楽天経済圏なら最大3%以上",
            features: [
              "基本還元率1%（楽天ポイント）",
              "楽天市場で3%以上",
              "年会費 永年無料",
              "楽天証券のクレカ積立で1%還元",
            ],
            href: "https://www.rakuten-card.co.jp/",
            badge: "楽天経済圏",
          },
          {
            name: "三井住友カード（NL）",
            rank: 2,
            highlight: "コンビニ・飲食店で最大7%還元",
            features: [
              "基本還元率0.5%",
              "セブン・ローソン・ファミマ等で7%",
              "年会費 永年無料",
              "SBI証券のクレカ積立で0.5%還元",
            ],
            href: "https://www.smbc-card.com/nyukai/card/nl.jsp",
            badge: "コンビニ最強",
          },
          {
            name: "JCBカードW",
            rank: 3,
            highlight: "39歳以下限定｜還元率1%の優良カード",
            features: [
              "基本還元率1%",
              "Amazonで2%還元",
              "年会費 永年無料",
              "39歳までに申込必要（以降は継続利用可）",
            ],
            href: "https://www.jcb.co.jp/ordercard/jcbw/",
          },
          {
            name: "PayPayカード",
            rank: 4,
            highlight: "PayPay利用者なら最大1.5%還元",
            features: [
              "基本還元率1%（PayPayポイント）",
              "PayPay残高チャージ可能",
              "年会費 永年無料",
              "Yahoo!ショッピングで最大3%還元",
            ],
            href: "https://card.yahoo.co.jp/",
          },
          {
            name: "リクルートカード",
            rank: 5,
            highlight: "還元率1.2%｜業界最高水準の年会費無料カード",
            features: [
              "基本還元率1.2%（常時）",
              "じゃらん・ホットペッパーで最大3.2%",
              "年会費 永年無料",
              "dポイントへの交換可能",
            ],
            href: "https://recruit-card.jp/",
            badge: "還元率No.1",
          },
        ]}
      />
    </>
  ),
  "side-business-ranking-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員におすすめの副業とは</h2>
        <p>
          働き方改革と副業解禁の流れで、サラリーマンの副業は当たり前の時代になりました。ここでは、会社員が無理なく月5万円を目指せる副業を厳選して紹介します。
        </p>
      </section>
      <div className="space-y-4">
        {[
          { rank: 1, name: "Webライティング", earn: "月3〜10万円", skill: "文章力", start: "クラウドワークス / ランサーズ" },
          { rank: 2, name: "ブログアフィリエイト", earn: "月0〜50万円", skill: "SEO・ライティング", start: "WordPress + レンタルサーバー" },
          { rank: 3, name: "動画編集", earn: "月5〜20万円", skill: "Premiere Pro等", start: "オンラインスクール受講→案件獲得" },
          { rank: 4, name: "プログラミング案件", earn: "月5〜30万円", skill: "Web制作・開発", start: "プログラミングスクール受講" },
          { rank: 5, name: "ハンドメイド販売", earn: "月1〜10万円", skill: "制作スキル", start: "minne / Creema" },
          { rank: 6, name: "せどり・転売", earn: "月3〜20万円", skill: "リサーチ力", start: "メルカリ / Amazon" },
          { rank: 7, name: "Youtube運営", earn: "月0〜100万円+", skill: "動画制作・企画", start: "チャンネル登録者1000人から収益化" },
          { rank: 8, name: "オンライン英会話講師", earn: "月5〜15万円", skill: "英語力", start: "DMM英会話等に登録" },
          { rank: 9, name: "投資（配当金）", earn: "月1〜10万円", skill: "投資知識", start: "証券口座開設→高配当株購入" },
          { rank: 10, name: "Webデザイン", earn: "月3〜20万円", skill: "Figma / Photoshop", start: "オンラインスクール or 独学" },
        ].map((item) => (
          <div key={item.rank} className="rounded-xl border border-card-border bg-card-bg p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                {item.rank}
              </span>
              <h3 className="text-lg font-bold">{item.name}</h3>
            </div>
            <div className="text-sm space-y-1 text-muted">
              <p>💰 想定月収: <span className="text-foreground font-medium">{item.earn}</span></p>
              <p>🎯 必要スキル: {item.skill}</p>
              <p>🚀 始め方: {item.start}</p>
            </div>
          </div>
        ))}
      </div>
      <AffiliateCTA
        title="副業の確定申告はクラウド会計ソフトで"
        description="副業所得が年20万円を超えたら確定申告が必要。freee・マネーフォワード・弥生なら、会計知識なしでも申告書を自動作成できます。"
        buttonText="おすすめ会計ソフトを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
      />
    </>
  ),
  "household-budget-apps": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">家計簿アプリで家計管理を簡単に</h2>
        <p>
          紙の家計簿はもう不要。銀行・クレカ・電子マネーと自動連携する家計簿アプリなら、手入力なしで支出を可視化できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="家計簿アプリおすすめ4選"
        services={[
          {
            name: "マネーフォワードME",
            rank: 1,
            highlight: "連携数No.1｜2,600以上の金融機関対応",
            features: [
              "銀行・クレカ・証券・電子マネー等2,600以上と連携",
              "資産推移グラフが見やすい",
              "無料プランは連携4件まで",
              "プレミアム 月500円で無制限連携",
            ],
            href: "https://moneyforward.com/",
            badge: "定番",
          },
          {
            name: "Zaim",
            rank: 2,
            highlight: "レシート撮影で自動入力",
            features: [
              "AI OCRでレシート読み取り",
              "家族との共有家計簿に対応",
              "無料プランでも高機能",
              "プレミアム 月480円",
            ],
            href: "https://zaim.net/",
          },
          {
            name: "Money Tree",
            rank: 3,
            highlight: "シンプルUI｜法人カード対応",
            features: [
              "広告なしの快適なUI",
              "法人カード・ビジネス口座にも対応",
              "プレミアム 月500円",
              "セキュリティに定評",
            ],
            href: "https://moneytree.jp/",
          },
          {
            name: "おかねのコンパス",
            rank: 4,
            highlight: "完全無料｜東京海上グループ運営",
            features: [
              "基本機能が完全無料",
              "金融機関連携1,500以上",
              "東京海上日動グループの安心感",
              "シンプルな操作性",
            ],
            href: "https://moneiro.jp/compass",
          },
        ]}
      />
    </>
  ),
  "new-nisa-basics": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAとは</h2>
        <p>
          新NISA（少額投資非課税制度）は、2024年1月から始まった個人投資家向けの税制優遇制度です。運用益に対して通常かかる約20%の税金が非課税になり、長期資産形成に最適です。
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm space-y-2 my-4">
          <p><strong>年間投資枠:</strong> 360万円（つみたて120万円＋成長240万円）</p>
          <p><strong>生涯投資枠:</strong> 1,800万円（うち成長投資枠 1,200万円）</p>
          <p><strong>非課税保有期間:</strong> 無期限</p>
          <p><strong>対象年齢:</strong> 18歳以上</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">つみたて投資枠と成長投資枠の違い</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>つみたて投資枠:</strong> 年120万円。金融庁が認定した長期・積立・分散に適した投資信託のみ</li>
          <li><strong>成長投資枠:</strong> 年240万円。上場株式・投資信託・ETF・REITなど幅広い商品に投資可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者におすすめの始め方</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>SBI証券 or 楽天証券でNISA口座を開設（最短5分）</li>
          <li>つみたて投資枠で eMAXIS Slim 全世界株式（オール・カントリー）などのインデックスファンドを月3〜5万円積立</li>
          <li>成長投資枠は慣れてから活用（個別株やETFで分散）</li>
          <li>15年以上の長期保有を前提に、短期の値動きは気にしない</li>
        </ol>
      </section>
    </>
  ),
  "fire-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FIREとは</h2>
        <p>
          FIRE（Financial Independence, Retire Early）は、経済的自立と早期退職を意味します。十分な資産を築き、働かなくても生活できる状態を目指すライフスタイルです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">FIRE達成の目安: 年間支出の25倍</h2>
        <p>
          「4%ルール」に基づき、資産を年4%で運用しながら取り崩せば、理論上は元本を減らさずに生活できます。つまり年間支出の25倍がFIRE達成の目安です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年間支出 300万円 → 必要資産 7,500万円</li>
          <li>年間支出 400万円 → 必要資産 1億円</li>
          <li>年間支出 500万円 → 必要資産 1億2,500万円</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">FIRE達成のための戦略</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>家計改善で貯蓄率を50%以上に引き上げる</li>
          <li>新NISA・iDeCoで税制優遇を最大活用</li>
          <li>全世界株式など低コストインデックスファンドで長期運用</li>
          <li>副業で収入源を複線化</li>
          <li>固定費（住居費・通信費・保険料）の見直し</li>
        </ol>
      </section>
      <AffiliateCTA
        title="FIRE達成の第一歩はネット証券の口座開設"
        description="SBI証券・楽天証券なら新NISA口座開設が無料。クレカ積立でポイントも貯まり、実質還元率1%以上でFIRE資産を育てられます。"
        buttonText="おすすめ証券会社を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
      />
    </>
  ),
  "tax-saving-techniques": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員でも使える節税テクニック</h2>
        <p>
          「会社員だから節税できない」は誤解です。以下の制度を上手く活用すれば、年間数十万円の節税も可能です。
        </p>
      </section>
      <div className="space-y-4">
        {[
          {
            name: "ふるさと納税",
            effect: "寄付額-2,000円分が翌年の税金から控除",
            target: "全会社員",
          },
          {
            name: "iDeCo（個人型確定拠出年金）",
            effect: "掛金全額が所得控除。年収500万円なら年約5-6万円節税",
            target: "全会社員（企業年金制度により上限額異なる）",
          },
          {
            name: "住宅ローン控除",
            effect: "住宅ローン残高の0.7%を13年間税額控除",
            target: "住宅購入予定者",
          },
          {
            name: "医療費控除",
            effect: "年間10万円超の医療費が所得控除",
            target: "通院・入院が多かった家庭",
          },
          {
            name: "セルフメディケーション税制",
            effect: "特定市販薬12,000円超で所得控除",
            target: "市販薬を頻繁に購入する人",
          },
          {
            name: "生命保険料控除",
            effect: "生命・介護医療・個人年金で最大12万円控除",
            target: "保険加入者",
          },
          {
            name: "特定支出控除",
            effect: "業務関連支出が一定額超で給与所得控除上乗せ",
            target: "通勤費・資格取得費が多い人",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl border border-card-border bg-card-bg p-5">
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <p className="text-sm mb-1"><strong>節税効果:</strong> {item.effect}</p>
            <p className="text-sm text-muted"><strong>対象者:</strong> {item.target}</p>
          </div>
        ))}
      </div>
    </>
  ),
  "online-bank-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行は金利・手数料で圧倒的有利</h2>
        <p>
          メガバンクの普通預金金利が0.001%の時代、ネット銀行なら0.1〜0.2%と100〜200倍。ATM手数料・振込手数料も優遇があり、日常使いでも断然お得です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ネット銀行おすすめ比較"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "SBI証券連携で金利0.2%｜スマホATM対応",
            features: [
              "ハイブリッド預金で金利0.01%→0.2%（SBI証券連携）",
              "スマートプログラムでATM無料最大15回/月",
              "他行振込最大20回/月無料",
              "外貨預金・外貨送金も強い",
            ],
            href: "https://www.netbk.co.jp/",
            badge: "総合力No.1",
          },
          {
            name: "楽天銀行",
            rank: 2,
            highlight: "楽天証券連携で金利0.1%｜ハッピープログラム",
            features: [
              "マネーブリッジで金利0.1%",
              "楽天ポイントが貯まる",
              "給与振込で他行振込3回無料",
              "口座数国内トップクラス",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
          {
            name: "auじぶん銀行",
            rank: 3,
            highlight: "au経済圏なら最強｜金利最大0.3%",
            features: [
              "auマネ活プランで金利最大0.3%",
              "Pontaポイントが貯まる",
              "auカブコム証券との連携",
              "auユーザー向け特典多数",
            ],
            href: "https://www.jibunbank.co.jp/",
            badge: "auユーザー向け",
          },
          {
            name: "PayPay銀行",
            rank: 4,
            highlight: "PayPayチャージ可能｜手数料優遇豊富",
            features: [
              "PayPay残高チャージ対応",
              "ATM手数料月1回無料",
              "他行振込月1回無料",
              "取引のスマートさ◎",
            ],
            href: "https://www.paypay-bank.co.jp/",
          },
        ]}
      />
    </>
  ),
};
