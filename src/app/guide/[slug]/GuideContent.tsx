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
      <AffiliateCTA
        title="【ゴールデンウェイ・ジャパン FXTF】でFXを始める"
        description="MT4対応、スプレッド業界最狭水準。上級者も納得の本格派FX。"
        buttonText="FXTFの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G4HOD6+48D0+626XT"
        icon="📊"
      />
      <AffiliateCTA
        title="【フジトミ証券】で商品先物・FX取引を始める"
        description="老舗商品先物会社の信頼性。商品CFD・FX両方対応。"
        buttonText="フジトミ証券の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G7GUE2+34QW+BX3J6"
        icon="💹"
      />
      <AffiliateCTA
        title="【DMM 株】で米国株・日本株・NISAを始める"
        description="スマホアプリで簡単、NISA口座にも対応。手数料業界最安水準。"
        buttonText="DMM 株の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="🎯"
        highlight="NISA対応"
      />
      <AffiliateCTA
        title="【DMM CFD】世界の株価指数・金・原油を取引"
        description="DMM.com証券のCFD。日経225、NYダウ、金、原油などレバレッジ取引が可能。"
        buttonText="DMM CFDの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FZ4RX6+1WP2+NZ4J7"
        icon="📉"
      />
      <AffiliateCTA
        title="【お名前.com FX専用VPS】24時間安定稼働のMT4/MT5環境"
        description="FX自動売買（EA）を24時間稼働させるならVPSが必須。お名前.comデスクトップクラウドは業界最安級。"
        buttonText="FX専用VPSの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G829ZU+50+3NONKX"
        icon="🖥️"
      />
      <AffiliateCTA
        title="【MT4自動売買】お名前.com監修のEA運用"
        description="MT4対応の自動売買で資産運用を手軽に。EAを利用した資産運用が簡単に始められます。"
        buttonText="MT4自動売買の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FVK6AI+50+89Q8HD"
        icon="🤖"
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
      <AffiliateCTA
        title="【エポスカード】年会費永久無料で即日発行対応"
        description="海外旅行保険自動付帯、マルイで10%OFFセール、即時提携対応。年会費はずっと無料。"
        buttonText="エポスカードを申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+MMIJE+38L8+BY641"
        icon="💳"
        highlight="年会費永久無料"
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
  "sbi-vs-rakuten-nisa": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券と楽天証券、新NISAで選ぶならどっち？</h2>
        <p>
          ネット証券の2強であるSBI証券と楽天証券。どちらも新NISAの取扱銘柄が豊富で、クレカ積立にも対応していますが、細かい還元率や利用可能なポイントに違いがあります。あなたの利用経済圏によって最適解が変わるのがポイントです。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>楽天経済圏メインなら → 楽天証券</li>
          <li>Vポイント・三井住友カード利用者 → SBI証券</li>
          <li>取扱銘柄の多さ重視 → SBI証券</li>
          <li>アプリの使いやすさ → 楽天証券（iSPEED）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">比較ポイント①：クレカ積立の還元率</h2>
        <p className="text-sm">
          2024年のクレカ積立上限引き上げで、月10万円まで積立可能になりました。各社の還元率は以下の通りです。
        </p>
        <div className="rounded-xl border border-card-border bg-card-bg p-5 mt-3">
          <ul className="text-sm space-y-2">
            <li><strong>SBI証券</strong>: 三井住友カード（NL）0.5%、ゴールドNL 1.0%、プラチナプリファード 最大3%</li>
            <li><strong>楽天証券</strong>: 楽天カード通常1%（一部銘柄0.5%）、楽天キャッシュ併用で月10万円分が還元対象</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="SBI証券 vs 楽天証券 項目別比較"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "取扱銘柄数・クレカ積立還元率ともに業界最高水準",
            features: [
              "投資信託 2,500本以上（業界最多水準）",
              "三井住友ゴールドカードNLで1%還元",
              "プラチナプリファードで最大3%還元",
              "Vポイント・Pontaポイント・Tポイントで投信購入可",
              "米国株の取扱銘柄数も豊富",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合力No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天経済圏ユーザーならダントツでお得",
            features: [
              "楽天カード積立で最大1%ポイント還元",
              "楽天キャッシュ積立でさらに0.5%",
              "楽天ポイントで投資信託購入可能",
              "楽天銀行マネーブリッジで金利0.1%",
              "アプリ「iSPEED」が使いやすい",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "楽天経済圏No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">結論：両方口座開設がベスト</h2>
        <p>
          ネット証券は口座開設・維持が無料なので、実は「両方開設」が最適解です。メイン口座をNISA用、サブ口座を特定口座・米国株用など、用途で使い分けることで両社のメリットを享受できます。
        </p>
      </section>
      <AffiliateCTA
        title="まずは人気No.1のSBI証券で口座開設"
        description="投資信託ラインナップ業界最多水準。三井住友カードNLで積立ポイント還元も受けられます。新NISA対応・口座開設無料。"
        buttonText="SBI証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="口座開設数No.1"
      />
    </>
  ),
  "furusato-tax-guide-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ふるさと納税とは？実質2,000円で返礼品を受け取れる制度</h2>
        <p>
          ふるさと納税は、応援したい自治体に「寄付」する代わりに、寄付額のうち2,000円を超えた分が所得税・住民税から控除される制度です。しかも多くの自治体で、寄付額の約30%相当の返礼品が受け取れるため、実質2,000円負担で数万円分の特産品を手に入れられます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">限度額の目安（年収別・独身/共働き）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>年収400万円</strong>: 独身・共働き 約42,000円、夫婦（片働き） 約33,000円</li>
            <li><strong>年収500万円</strong>: 独身・共働き 約61,000円、夫婦（片働き） 約49,000円</li>
            <li><strong>年収600万円</strong>: 独身・共働き 約77,000円、夫婦（片働き） 約69,000円</li>
            <li><strong>年収700万円</strong>: 独身・共働き 約108,000円、夫婦（片働き） 約86,000円</li>
            <li><strong>年収1,000万円</strong>: 独身・共働き 約176,000円、夫婦（片働き） 約166,000円</li>
          </ul>
          <p className="text-xs text-muted mt-3">※医療費控除・住宅ローン控除などと併用する場合は限度額が下がります。シミュレーターで個別に試算してください。</p>
        </div>
      </section>
      <ComparisonTableCTA
        title="ふるさと納税おすすめポータルサイト"
        services={[
          {
            name: "楽天ふるさと納税",
            rank: 1,
            highlight: "楽天ポイント還元｜SPU対象で最大15%還元",
            features: [
              "楽天市場と同様にポイント還元",
              "お買い物マラソン・スーパーセール時が狙い目",
              "楽天カード決済でさらに+1%",
              "返礼品の種類が豊富",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
            badge: "ポイント還元No.1",
          },
          {
            name: "さとふる",
            rank: 2,
            highlight: "使いやすさNo.1｜PayPay連携キャンペーン豊富",
            features: [
              "サイトの使い勝手が抜群",
              "PayPayポイントで還元",
              "レビュー・ランキングが充実",
              "返礼品の発送が比較的早い",
            ],
            href: "https://www.satofull.jp/",
            badge: "初心者向け",
          },
          {
            name: "ふるなび",
            rank: 3,
            highlight: "Amazonギフトカード還元｜家電の返礼品が充実",
            features: [
              "ふるなびコインでAmazonギフト交換可",
              "家電・ガジェット系返礼品が他サイトより豊富",
              "定期便の返礼品も充実",
            ],
            href: "https://furunavi.jp/",
          },
          {
            name: "ふるさとチョコイス",
            rank: 4,
            highlight: "返礼品掲載数最多｜マイナーな自治体も",
            features: [
              "掲載数業界最多クラス",
              "独自の返礼品レビュー豊富",
              "初めての人でも見つけやすい",
            ],
            href: "https://www.furusato-tax.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ワンストップ特例 vs 確定申告</h2>
        <p className="text-sm">
          年間5自治体以内への寄付ならワンストップ特例で確定申告不要。6自治体以上、または医療費控除等と併用する場合は確定申告が必要です。
        </p>
      </section>
      <AffiliateCTA
        title="【ふるさと本舗】高還元率のふるさと納税ポータル"
        description="全国の特産品を厳選。独自ポイント還元とキャンペーンが充実。初めての方にも安心のサポート。"
        buttonText="ふるさと本舗で寄付する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F75EHM+5IMU+60WN5"
        icon="🎁"
        highlight="独自キャンペーン豊富"
      />
      <AffiliateCTA
        title="【au PAY ふるさと納税】Pontaポイントで還元"
        description="au PAY 残高やPontaポイントで支払い可能。au経済圏の方ならお得に寄付できます。"
        buttonText="au PAY ふるさと納税へ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F2ZD96+54OC+5YJRM"
        icon="📱"
      />
      <AffiliateCTA
        title="【あるやうむ】NFT型ふるさと納税の新しい形"
        description="返礼品としてデジタル資産（NFT）やユニークな体験が選べる。新世代のふるさと納税。"
        buttonText="あるやうむを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F6JYVU+5U6O+5YJRM"
        icon="✨"
      />
    </>
  ),
  "side-business-tax-declaration": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員の副業、確定申告は必要？</h2>
        <p>
          結論から言うと、<strong>年間20万円超の副業所得</strong>がある場合は確定申告が必要です。重要なのは「収入」ではなく「所得（収入-経費）」で判断する点。副業収入30万円でも経費が15万円あれば所得15万円となり、確定申告不要になる可能性があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">副業所得の種類と計算方法</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "雑所得", desc: "アフィリエイト・ウーバー・せどり等、多くの副業が該当。収入-経費で計算", target: "ブログ・アフィリエイト・クラウドソーシング" },
            { name: "事業所得", desc: "継続・反復して本格的に行う事業。青色申告で最大65万円控除", target: "フリーランス的に稼働している人" },
            { name: "不動産所得", desc: "アパート・マンション経営の家賃収入", target: "投資用不動産オーナー" },
            { name: "給与所得", desc: "ダブルワーク先で雇用されている場合", target: "パート・アルバイトの副業" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <h3 className="font-bold text-base">{item.name}</h3>
              <p className="text-sm mt-1">{item.desc}</p>
              <p className="text-xs text-muted mt-1"><strong>該当例:</strong> {item.target}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">経費として計上できるもの</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>PC・スマホ・カメラなど仕事に使う機材（10万円未満は全額、以上は減価償却）</li>
          <li>通信費（インターネット・携帯代）の副業利用分</li>
          <li>書籍・セミナー参加費など学習費用</li>
          <li>交通費・打ち合わせの飲食代</li>
          <li>ドメイン・サーバー代、サブスクツール料金</li>
          <li>家賃・光熱費の一部（家事按分。仕事部屋の面積比が目安）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">住民税「普通徴収」で会社バレを防ぐ</h2>
        <p>
          副業所得の住民税を確定申告で<strong>「自分で納付（普通徴収）」</strong>に設定すれば、本業の会社の給与天引きに反映されず、会社に副業収入が知られにくくなります。ただし、給与所得の副業（ダブルワーク）は対象外で特別徴収となる点に注意。
        </p>
      </section>
      <AffiliateCTA
        title="副業の確定申告をカンタンに。会計ソフトを活用"
        description="freee・マネーフォワードクラウドなどの会計ソフトを使えば、確定申告の手間を大幅に削減。スマホから数分で申告書作成が可能です。"
        buttonText="副業ランキングで稼ぐ副業を見つける"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💼"
      />
    </>
  ),
  "wealthnavi-vs-theo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアド2大サービス、どちらを選ぶ？</h2>
        <p>
          ロボアドバイザー市場で長年トップを争ってきたウェルスナビとTHEO。どちらも「全自動で国際分散投資」という点は共通ですが、手数料・運用アルゴリズム・提携サービスに違いがあります。結論は、<strong>ウェルスナビ＝シンプル派、THEO＝カスタマイズ派</strong>です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ウェルスナビ vs THEO 項目別比較"
        services={[
          {
            name: "ウェルスナビ",
            rank: 1,
            highlight: "預かり資産No.1｜シンプルで続けやすい",
            features: [
              "手数料 年1.1%（3,000万円超部分は0.55%）",
              "DeTAX（税金最適化機能）で納税額を抑制",
              "6-7銘柄のETFで全世界分散",
              "新NISA対応で非課税運用も可能",
              "最低投資額 1万円から",
            ],
            href: "https://www.wealthnavi.com/",
            badge: "初心者おすすめ",
          },
          {
            name: "THEO",
            rank: 2,
            highlight: "カスタマイズ性◎｜docomoユーザー向け特典",
            features: [
              "手数料 年1.1%（段階的ディスカウントあり）",
              "231種類のETFから機能別ポートフォリオ",
              "THEO+ docomoならdポイント還元",
              "最低投資額 1万円から",
              "グロース/インカム/インフレヘッジの3機能",
            ],
            href: "https://theo.blue/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">運用実績の比較（過去5年）</h2>
        <p className="text-sm">
          過去5年（2020-2025）のリターンはウェルスナビ・THEOともに<strong>年平均7-9%程度</strong>。全世界株式インデックス（eMAXIS Slim 全世界株式）の同期間リターンが年12%前後であることを考えると、<strong>自分でインデックス投信を積立てた方が手数料1%分有利</strong>ではあります。ただし、メンテナンスフリーの利便性とリバランス機能を重視するならロボアドが選択肢です。
        </p>
      </section>
      <AffiliateCTA
        title="まずはロボアド全社比較から"
        description="ウェルスナビ・THEO以外にも楽ラップ・ON COMPASS・SUSTENなど個性的なサービスがあります。自分に合うロボアドを比較検討してください。"
        buttonText="ロボアド比較ガイドを見る"
        href="/guide/roboadvisor-comparison"
        external={false}
        icon="🤖"
      />
    </>
  ),
  "crypto-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">仮想通貨の利益は「雑所得」扱い</h2>
        <p>
          ビットコインやイーサリアムなどの仮想通貨で得た利益は、税法上<strong>「雑所得」</strong>に分類されます。これは給与所得と合算して課税される「総合課税」の対象で、<strong>累進課税（最大55%）</strong>が適用されます。株式投資の譲渡所得（一律20.315%）とは税制が大きく異なる点に注意が必要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税率早見表（年収+仮想通貨利益の合計）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-1">
            <li>〜195万円: 所得税5% + 住民税10% = <strong>15%</strong></li>
            <li>195〜330万円: 所得税10% + 住民税10% = <strong>20%</strong></li>
            <li>330〜695万円: 所得税20% + 住民税10% = <strong>30%</strong></li>
            <li>695〜900万円: 所得税23% + 住民税10% = <strong>33%</strong></li>
            <li>900〜1,800万円: 所得税33% + 住民税10% = <strong>43%</strong></li>
            <li>1,800〜4,000万円: 所得税40% + 住民税10% = <strong>50%</strong></li>
            <li>4,000万円超: 所得税45% + 住民税10% = <strong>55%</strong></li>
          </ul>
          <p className="text-xs text-muted mt-3">※上記は課税所得ベース。各種控除後の金額に適用されます。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税金が発生するタイミング</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>仮想通貨を売却して円に戻したとき</li>
          <li>仮想通貨で商品・サービスを購入したとき</li>
          <li>仮想通貨同士を交換したとき（例：BTC→ETH）</li>
          <li>マイニング・ステーキング報酬を受け取ったとき</li>
        </ul>
        <p className="text-sm mt-3">※保有しているだけでは課税されません（含み益は非課税）。</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税のコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>利益確定を年をまたいで分散する（1年間で20万円以内なら申告不要）</li>
          <li>損失が出ている銘柄を売却して損益通算（仮想通貨同士のみ、他所得との通算不可）</li>
          <li>取引手数料・書籍代等を経費計上</li>
          <li>個人事業主として青色申告する（継続・反復取引の場合）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="仮想通貨取引所の比較はこちら"
        description="国内大手の仮想通貨取引所を手数料・セキュリティ・取扱通貨で比較。税金計算のしやすさも解説。"
        buttonText="仮想通貨取引所比較を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
      />
    </>
  ),
  "sbi-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券の基本情報</h2>
        <p>
          SBI証券は口座開設数1,200万超、国内ネット証券No.1の老舗総合証券会社です。新NISAの取扱銘柄数は業界トップクラス、三井住友カードとの連携でクレカ積立ポイント還元も受けられる、まさに総合力で選ぶなら第一候補の証券会社です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">メリット（実際に使って感じた強み）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>投資信託の取扱数が2,500本超で業界最多水準</li>
          <li>国内株式売買手数料が新NISA・特定口座ともに0円</li>
          <li>三井住友カードゴールドNLで積立ポイント1%還元（年間100万円利用で年会費無料）</li>
          <li>Vポイント・Tポイント・Pontaポイントと連携して投信購入可能</li>
          <li>IPO取扱社数が業界トップ、抽選権が得られやすい</li>
          <li>米国株・海外ETFの取扱銘柄も豊富</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">デメリット（正直な評価）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>画面・アプリのUIがやや古く、初心者は迷いやすい</li>
          <li>楽天ポイントは使えない（Vポイントに統合）</li>
          <li>NISA口座設定後の変更は年1回まで</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>投資信託・ETFを幅広く選びたい人</li>
          <li>三井住友カード・Vポイントを日常で使っている人</li>
          <li>IPO投資にチャレンジしたい人</li>
          <li>米国株・海外ETFも取引したい人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="SBI証券で新NISAを始めてみる"
        description="口座開設は無料・スマホで最短5分。三井住友カードNLと組み合わせることで、積立投資しながらポイントも貯まります。"
        buttonText="SBI証券の公式サイトを見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "high-yield-stock-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資で不労所得を作る</h2>
        <p>
          高配当株投資とは、<strong>配当利回り3-5%以上の株式やETFを長期保有し、配当収入を得る投資戦略</strong>です。値上がり益（キャピタルゲイン）を狙う成長株投資と違い、安定したキャッシュフローを得られるのが最大の魅力。新NISAの成長投資枠（年間240万円）を使えば、配当金も非課税で受け取れます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">日本の高配当株おすすめ銘柄</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "日本たばこ産業（JT）", yield: "約5.5%", feature: "連続減配なし、鉄板の高配当銘柄" },
            { name: "三菱UFJフィナンシャル・グループ", yield: "約3.3%", feature: "メガバンク最大手、金利上昇で業績改善" },
            { name: "三菱商事", yield: "約3.8%", feature: "バフェット銘柄、総合商社のリーダー" },
            { name: "三井住友フィナンシャルグループ", yield: "約3.5%", feature: "増配姿勢が明確" },
            { name: "KDDI", yield: "約3.3%", feature: "23年連続増配の優良銘柄" },
            { name: "NTT", yield: "約3.4%", feature: "通信の安定感、株式分割で買いやすさ◎" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base">{item.name}</h3>
                <span className="text-sm text-primary font-bold">利回り {item.yield}</span>
              </div>
              <p className="text-sm mt-1 text-muted">{item.feature}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※配当利回りは2026年4月時点の参考値。投資判断はご自身でお願いします。</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当ETFのおすすめ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>VYM（バンガード・米国高配当株式ETF）</strong>: 利回り約3%、S&P500上位400銘柄から選定、経費率0.06%と超低コスト</li>
          <li><strong>HDV（iシェアーズ・コア米国高配当株ETF）</strong>: 利回り約3.5%、財務健全性を重視、経費率0.08%</li>
          <li><strong>SPYD（SPDRポートフォリオS&P500高配当株式ETF）</strong>: 利回り約4.5%、S&P500の上位80銘柄均等配分、経費率0.07%</li>
          <li><strong>QYLD（グローバルX・NASDAQ100カバード・コールETF）</strong>: 利回り約11%、カバード・コール戦略、毎月分配</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>利回りだけで選ぶと「減配・無配転落」リスクあり（配当性向チェック必須）</li>
          <li>米国株の配当は米国で10%源泉徴収→日本で20.315%課税（二重課税）。NISA口座でも米国課税は免除されない</li>
          <li>セクターが偏ると業績悪化時のダメージ大（分散投資を徹底）</li>
          <li>株価下落時でも配当が入るが、資産価値自体は目減りする</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高配当株投資に最適なネット証券は？"
        description="国内株の売買手数料0円・米国株の為替手数料優遇など、配当再投資に最適なネット証券を比較解説。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "rakuten-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天証券の基本情報</h2>
        <p>
          楽天証券は口座開設数1,100万超の大手ネット証券。楽天経済圏（楽天市場・楽天カード・楽天銀行・楽天モバイル）と連携することで、ポイント二重取りができる点が最大の魅力です。新NISAのクレカ積立では楽天カードで1%還元（一部銘柄0.5%）、楽天キャッシュ併用で月10万円までが還元対象。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">メリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>楽天カード積立で1%のポイント還元</li>
          <li>楽天ポイントで投信・国内株・米国株の買付が可能</li>
          <li>楽天銀行マネーブリッジで普通預金金利が0.1%にアップ</li>
          <li>アプリ「iSPEED」が初心者にも使いやすい</li>
          <li>日経テレコンが無料で閲覧できる</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">デメリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>IPO取扱件数がSBI証券より少ない</li>
          <li>楽天ポイントの改悪が定期的に発生している</li>
          <li>単元未満株（S株）の取扱がない（かぶミニが代替）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天証券で新NISAを始めてみる"
        description="楽天ポイントユーザーなら圧倒的にお得。口座開設無料・スマホで最短翌営業日から取引開始。"
        buttonText="楽天証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
        highlight="楽天経済圏No.1"
      />
    </>
  ),
  "monex-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">マネックス証券の強み：クレカ積立1.1%還元</h2>
        <p>
          マネックス証券は米国株に強いネット証券として有名ですが、2024年以降はマネックスカード積立で<strong>業界最高水準の1.1%還元</strong>を実現し注目を集めています。年会費1,100円（年1回以上の利用で無料）でこの還元率は他社を圧倒します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株投資に最適</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>米国株取扱銘柄 6,000超（業界トップクラス）</li>
          <li>買付時の為替手数料が無料</li>
          <li>時間外取引（プレマーケット）に対応</li>
          <li>銘柄スカウターという独自の分析ツールが強力</li>
          <li>米国株の配当再投資サービスあり</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>クレカ積立の還元率を最大化したい人</li>
          <li>米国株・ETFを本格的に取引したい人</li>
          <li>財務分析ツールを活用して銘柄選定したい人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="マネックス証券で最高還元率の積立を"
        description="マネックスカード積立1.1%還元で、新NISAの実質リターンを底上げ。口座開設・カード発行どちらも無料。"
        buttonText="マネックス証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
        highlight="還元率No.1"
      />
    </>
  ),
  "gmo-click-fx-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">GMOクリック証券FXの実力</h2>
        <p>
          GMOクリック証券のFX（FXネオ）は、口座開設数国内No.1。低スプレッド・高スワップポイント・使いやすい取引ツールの3拍子が揃っており、初心者から上級者まで幅広く支持されています。キャンペーンも常時開催。
        </p>
      </section>
      <ComparisonTableCTA
        title="GMOクリック証券FXの主要スペック"
        services={[
          {
            name: "GMOクリック証券 FXネオ",
            rank: 1,
            highlight: "業界最狭水準スプレッド｜口座開設数No.1",
            features: [
              "米ドル/円スプレッド 0.2銭（原則固定・例外あり）",
              "約定力99.9%の安定性",
              "PCツール「はっちゅう君FX+」が高機能",
              "スマホアプリも直感的で使いやすい",
              "新規口座開設で最大55万円キャッシュバック",
            ],
            href: "https://www.click-sec.com/corp/guide/fx/",
            badge: "総合力No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュバック条件</h2>
        <p className="text-sm">
          新規口座開設+取引数量に応じて最大55万円のキャッシュバックが受けられます。達成のハードルは高めですが、段階的に少額から受け取れる仕組みなので初心者でも報酬を得やすいのが特徴です。
        </p>
      </section>
      <AffiliateCTA
        title="GMOクリック証券でFXを始めてみる"
        description="口座開設は無料・最短当日で取引開始。キャッシュバックキャンペーン常時開催中。"
        buttonText="GMOクリック証券の詳細を見る"
        href="/guide/fx-broker-ranking"
        external={false}
        icon="💹"
      />
    </>
  ),
  "dmm-fx-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">DMM FX の最大の魅力：高額キャッシュバック</h2>
        <p>
          DMM FXは、新規口座開設キャンペーンで<strong>最大30万円（2026年時点）</strong>のキャッシュバックが受けられることで有名。取引量に応じて段階的に受け取れるため、少しの取引でも数万円の報酬を手にできます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">DMM FXのメリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>米ドル/円スプレッド 0.2銭（原則固定）</li>
          <li>全20通貨ペア取扱</li>
          <li>LINEサポート対応（業界初）</li>
          <li>取引ツールがシンプルで初心者向き</li>
          <li>最短1時間で取引開始可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュバック獲得のコツ</h2>
        <p className="text-sm">
          キャッシュバックは取引数量のレベルに応じて増加。最小レベル（2,000円）は1万通貨の取引1回で達成可能。スワップ狙いのポジションを建てて保有するだけでも目標達成しやすい設計です。
        </p>
      </section>
      <AffiliateCTA
        title="【DMM 株】で日本株・米国株・NISAを始める"
        description="アプリで簡単取引、NISA対応。口座開設+取引で特典受け取り可能。"
        buttonText="DMM 株の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="💹"
        highlight="新規口座開設+取引で特典"
      />
      <AffiliateCTA
        title="ゴールデンウェイ・ジャパン【FXTF】でFXを始める"
        description="スプレッド業界最狭水準、MT4対応の本格派FX。口座開設は無料。"
        buttonText="ゴールデンウェイの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G4HOD6+48D0+626XT"
        icon="📈"
      />
      <AffiliateCTA
        title="【DMM CFD】株価指数・金・原油を取引"
        description="日経225・NYダウ・金・原油などCFDで多様な資産にレバレッジ投資。DMM.com証券の信頼性。"
        buttonText="DMM CFDの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FZ4RX6+1WP2+NZ4J7"
        icon="🛢️"
      />
      <AffiliateCTA
        title="【TOSSY】あらゆる取引をアプリひとつで完結"
        description="DMMの次世代取引アプリ。FX・CFD・株式をワンストップで。お得な特典付き。"
        buttonText="TOSSYの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FT6FVE+1WP2+1HL85U"
        icon="📱"
      />
    </>
  ),
  "bitflyer-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">bitFlyer の実力</h2>
        <p>
          bitFlyerはビットコイン取引量国内No.1の老舗仮想通貨取引所。2014年創業以来、ハッキング被害ゼロという高いセキュリティ水準を維持しています。機関投資家も利用する信頼性の高い取引所です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">bitFlyerの強み</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ビットコイン取引量 6年連続国内No.1</li>
          <li>ビットコインは1円から買える（最小発注単位が業界最小）</li>
          <li>bitFlyerクレカで決済するだけでビットコインが貯まる</li>
          <li>取扱銘柄 34種類（国内最多クラス）</li>
          <li>Tポイントをビットコインに交換可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">手数料と注意点</h2>
        <p className="text-sm">
          販売所のスプレッドは他社と同程度。取引所形式ならスプレッドはほぼゼロ、別途取引手数料0.01〜0.15%が発生。初心者は販売所、慣れたら取引所を使い分けるのが基本戦略です。
        </p>
      </section>
      <AffiliateCTA
        title="bitFlyerで仮想通貨投資を始める"
        description="国内取引量No.1、セキュリティ国内最高水準。口座開設・維持費は無料。"
        buttonText="bitFlyerの詳細を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
        highlight="取引量No.1"
      />
    </>
  ),
  "coincheck-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">コインチェック：初心者に圧倒的人気</h2>
        <p>
          コインチェックはアプリDL数6年連続No.1の仮想通貨取引所。マネックスグループ傘下で経営の安定性も高く、取扱銘柄も国内トップクラス。初心者向けの使いやすさが最大の強みです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">コインチェックの特徴</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>取扱通貨 29種類（国内トップクラス）</li>
          <li>取引所での取扱通貨も豊富（BTC, ETH, XRP等）</li>
          <li>500円から購入可能</li>
          <li>NFTマーケットプレイス「Coincheck NFT」を運営</li>
          <li>電気・ガス料金支払いでビットコインが貯まる</li>
          <li>IEO（新規暗号資産公開）を国内で独占開催</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>初めて仮想通貨を買う人</li>
          <li>アプリの使いやすさ重視の人</li>
          <li>NFTにも興味がある人</li>
          <li>取扱通貨の種類を重視する人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="コインチェックでビットコインを始めてみる"
        description="アプリDL数No.1の使いやすさ。500円から始められます。口座開設・維持費無料。"
        buttonText="コインチェックの詳細を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
        highlight="初心者人気No.1"
      />
    </>
  ),
  "investing-30s-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">30代からの投資戦略：時間を味方につける</h2>
        <p>
          30代は「時間」という最大の武器を持つ投資適齢期。長期・積立・分散の王道戦略を愚直に続けることで、65歳時点で4,000万円超の資産形成が現実的に可能です。具体的なプランを見ていきましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月3万円×35年×利回り5%のシミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li>元本合計: 月3万円 × 12ヶ月 × 35年 = <strong>1,260万円</strong></li>
            <li>運用後資産: 年利5%で複利運用 = <strong>約3,400万円</strong></li>
            <li>運用益: 約<strong>2,140万円</strong>（新NISAなら全額非課税）</li>
            <li>月5万円に増額した場合: <strong>約5,700万円</strong></li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">30代におすすめのポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA（つみたて投資枠）: eMAXIS Slim 全世界株式 or S&P500を毎月10万円積立</li>
          <li>新NISA（成長投資枠）: 米国ETF（VTI, VOO）・高配当ETF（VYM, HDV）</li>
          <li>iDeCo: 月2.3万円（企業年金なし会社員）を全世界株式で運用</li>
          <li>現金: 生活費6ヶ月分を普通預金で確保（それ以上は投資へ）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新NISAで30代の資産形成を始めよう"
        description="SBI証券・楽天証券なら無料で口座開設可能。クレカ積立でポイントも貯まります。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📈"
      />
    </>
  ),
  "investing-40s-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">40代からでも遅くない投資戦略</h2>
        <p>
          40代からの投資は「時間が短い」ことが最大の課題ですが、貯蓄余力があるため<strong>積立額を増やす</strong>ことで十分にリカバリー可能。また、教育費のピーク（50代）までに資産を作り、その後老後資金に切り替える2段階戦略が有効です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">40代におすすめのポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA（つみたて投資枠）: 月10万円で全世界株式インデックスに積立</li>
          <li>新NISA（成長投資枠）: 米国ETF+日本高配当株で利回りを重視</li>
          <li>iDeCo: 拠出上限いっぱい（企業年金なしなら月2.3万円）</li>
          <li>生命保険の見直し: 不要な保障を削減して投資資金を捻出</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月10万円×20年×5%のシミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li>元本合計: <strong>2,400万円</strong></li>
            <li>運用後資産: <strong>約4,100万円</strong></li>
            <li>運用益: <strong>約1,700万円</strong>（NISAなら非課税）</li>
            <li>60代からも継続すれば老後不安を大幅軽減可能</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="40代から効率的に資産形成を"
        description="時間を取り戻すには「積立額の増額」と「非課税制度の最大活用」。おすすめネット証券を比較。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📈"
      />
    </>
  ),
  "real-estate-crowdfunding": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産クラウドファンディングとは</h2>
        <p>
          不動産クラウドファンディングは、<strong>1万円から不動産投資ができるサービス</strong>。運営会社が特定の不動産を仕入れ、複数の投資家が小口で出資することで、家賃収入や売却益を分配金として受け取ります。現物不動産より流動性・手軽さで勝り、株式より安定したミドルリスク・ミドルリターンの商品です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要な不動産クラウドファンディング"
        services={[
          {
            name: "COZUCHI（コヅチ）",
            rank: 1,
            highlight: "想定利回り最大10%超｜中途解約可能",
            features: [
              "年利4-10%の高利回り案件が豊富",
              "中途解約が可能（業界では珍しい）",
              "案件ごとの情報開示が詳細",
              "優先劣後出資方式でリスク軽減",
            ],
            href: "https://cozuchi.com/",
            badge: "高利回りNo.1",
          },
          {
            name: "CREAL（クリアル）",
            rank: 2,
            highlight: "上場企業運営｜信頼性の高いプラットフォーム",
            features: [
              "東証グロース上場のクリアル株式会社が運営",
              "1万円から投資可能",
              "年利3-6%の安定案件が中心",
              "保育園・学校等の社会性の高い案件も",
            ],
            href: "https://creal.jp/",
            badge: "信頼性No.1",
          },
          {
            name: "Funds（ファンズ）",
            rank: 3,
            highlight: "上場企業グループファンド中心｜安定運用",
            features: [
              "上場企業関連のファンドが中心",
              "年利1-3%の低リスク案件",
              "1円単位で投資可能",
              "税引き後利回りが表示されわかりやすい",
            ],
            href: "https://funds.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リスクと注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>元本保証はない（運用失敗時は元本毀損の可能性）</li>
          <li>原則として運用期間中の解約不可（一部サービスは可）</li>
          <li>人気案件は抽選・先着で当選困難</li>
          <li>利益は雑所得扱いで総合課税</li>
        </ul>
      </section>
    </>
  ),
  "insurance-life-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生命保険は「掛け捨て」＋「貯蓄は投資」が正解</h2>
        <p>
          生命保険は「必要な保障を最小限の保険料で確保する」のが鉄則。貯蓄型保険は保険としては割高、投資としてはリターンが低いため、掛け捨てと投資を分離するのが賢い選択です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ライフステージ別の必要保障額</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>独身（扶養家族なし）</strong>: 葬儀代200万円程度の死亡保障で十分</li>
          <li><strong>結婚・子なし共働き</strong>: 互いに葬儀代＋αの死亡保障</li>
          <li><strong>子育て世帯</strong>: 末子大学卒業までの生活費・教育費（3,000-5,000万円）</li>
          <li><strong>子独立後</strong>: 葬儀代＋配偶者の生活費数年分</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめの保険タイプ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>収入保障保険: 死亡時に月額で受け取れる掛け捨て。子育て世帯に最適</li>
          <li>定期保険: 一定期間の死亡保障。更新型・全期型を選択</li>
          <li>就業不能保険: 長期の働けない期間をカバー。社会保険との兼ね合いを確認</li>
          <li>医療保険: 公的保険で大半カバーされるため、必要性は低め</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険見直しで家計改善"
        description="不要な保険を整理して投資資金に回すと、資産形成スピードが加速します。無料相談で見直しを。"
        buttonText="家計改善ガイドを見る"
        href="/guide/household-budget-apps"
        external={false}
        icon="🛡️"
      />
    </>
  ),
  "kids-education-fund": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">教育資金の準備方法：学資保険 vs 新NISA</h2>
        <p>
          子ども1人の教育費は幼稚園〜大学まで約1,000-2,500万円。効率よく貯めるなら、低リターンの学資保険よりも<strong>新NISAつみたて投資枠での長期運用</strong>が現実的です。必要時期が決まっている資金は、時期が近づいたら現金化していく戦略が基本。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">学資保険のメリット・デメリット</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>メリット:</strong> 返戻率105-110%程度の確実性、契約者死亡時の払込免除特約</p>
          <p className="text-sm mt-2"><strong>デメリット:</strong> インフレに弱い、中途解約で元本割れ、利回りが低い（年0.5%前後）</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAでの教育資金準備</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>0歳から月3万円を18年積立、年利5%</strong></p>
          <ul className="text-sm mt-2 space-y-1">
            <li>元本: 648万円</li>
            <li>運用後資産: 約1,070万円</li>
            <li>運用益: 約420万円（NISAなら非課税）</li>
          </ul>
          <p className="text-xs text-muted mt-2">※相場下落リスクあり。大学進学の3-5年前から徐々に現金化を推奨。</p>
        </div>
      </section>
      <AffiliateCTA
        title="新NISAで教育資金準備を始める"
        description="SBI証券・楽天証券ならクレカ積立でポイントも貯まりお得。長期積立の第一歩に。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="🎓"
      />
    </>
  ),
  "crowdworks-vs-lancers": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">国内2大クラウドソーシングを徹底比較</h2>
        <p>
          副業で在宅ワークを始めるなら、<strong>クラウドワークスとランサーズ</strong>の2強が鉄板。両方登録して案件を見比べるのが鉄則ですが、それぞれに強みがあるので用途に合わせて使い分けが重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="クラウドワークス vs ランサーズ"
        services={[
          {
            name: "クラウドワークス",
            rank: 1,
            highlight: "会員数500万超｜案件数国内最大",
            features: [
              "案件カテゴリー 200種類以上",
              "初心者向けの簡単タスクが豊富",
              "サイト設計が使いやすい",
              "システム手数料5-20%（報酬額による）",
            ],
            href: "https://crowdworks.jp/",
            badge: "初心者向けNo.1",
          },
          {
            name: "ランサーズ",
            rank: 2,
            highlight: "プロ向け案件が豊富｜認定制度で高単価獲得",
            features: [
              "エンジニア・デザイナー向け案件が多い",
              "認定ランサー制度で信頼性アピール可能",
              "直接契約（Lancers Pro）もあり",
              "システム手数料5-20%（報酬額による）",
            ],
            href: "https://www.lancers.jp/",
            badge: "プロ向け",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">稼ぎ方のコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>プロフィールを充実させて信頼性を演出</li>
          <li>最初は低単価でも実績を積む（評価★5を貯める）</li>
          <li>継続案件をゲットして時給換算を上げる</li>
          <li>得意分野を絞って専門家としてブランディング</li>
        </ul>
      </section>
      <AffiliateCTA
        title="会社員の副業ランキングもチェック"
        description="クラウドソーシング以外にも、月5万円以上狙える副業を一覧比較しています。"
        buttonText="副業ランキングを見る"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💼"
      />
    </>
  ),
  "blog-side-business": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ブログ副業で月5万円を稼ぐロードマップ</h2>
        <p>
          ブログ副業の魅力は、一度仕組みを作れば<strong>ストック収入として継続的に稼げる</strong>こと。月5万円を目指すなら、WordPress+独自ドメインで専門性の高いジャンルを選び、SEO対策とアフィリエイトを組み合わせるのが王道。10ヶ月〜1年で目標到達が現実的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">セットアップ手順（所要時間2時間）</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>独自ドメインを取得（ムームードメイン・お名前.com、年1,500円程度）</li>
          <li>レンタルサーバーを契約（エックスサーバー・ConoHa WINGが定番、月1,000円程度）</li>
          <li>WordPressをインストール（サーバー管理画面から1クリック）</li>
          <li>テーマを選定（Cocoon無料・SWELL有料の使い勝手が良い）</li>
          <li>ASP登録（A8.net、もしもアフィリエイト、バリューコマース）</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">稼げるジャンル・キーワード選定</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>金融系</strong>: クレカ・FX・仮想通貨・証券口座（1件10,000円超）</li>
          <li><strong>転職・スキルアップ</strong>: 転職エージェント・プログラミングスクール（1件10,000-30,000円）</li>
          <li><strong>美容・健康</strong>: 脱毛・サプリ・化粧品（1件3,000-10,000円）</li>
          <li><strong>通信・WiFi</strong>: 光回線・モバイルWiFi（1件10,000円超）</li>
          <li><strong>サブスク系</strong>: VOD・電子書籍・食材宅配（1件1,000-3,000円）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">収益化までの期間目安</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>3ヶ月: 記事数30-50本、月数百円〜数千円</li>
          <li>6ヶ月: 記事数80-100本、月1-3万円</li>
          <li>10-12ヶ月: 記事数150本、SEO上位獲得、月5-10万円</li>
          <li>1.5年以降: 月20万円〜の人も登場</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ブログ副業を本格的に始めよう"
        description="WordPress・サーバー契約、ASP登録までの流れを詳しく解説。副業ランキングも参考に。"
        buttonText="副業ランキングを見る"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💻"
      />
    </>
  ),
  "stock-beginner-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">株式投資の基礎知識</h2>
        <p>
          株式投資は、企業の株主になることで<strong>値上がり益（キャピタルゲイン）・配当（インカムゲイン）・株主優待</strong>の3つのリターンを得られる投資方法。新NISAの成長投資枠を使えば年240万円まで非課税で運用できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者が失敗しない7つのルール</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>信用取引（借金取引）は絶対にしない</strong> - 現物取引のみで始める</li>
          <li><strong>1銘柄に集中投資しない</strong> - 最低5-10銘柄に分散</li>
          <li><strong>資金の全額を投資しない</strong> - 余裕資金のみ</li>
          <li><strong>チャートで売買しない</strong> - 業績・財務の良い企業を選ぶ</li>
          <li><strong>SNSの投資情報を鵜呑みにしない</strong> - 自分の頭で判断</li>
          <li><strong>長期保有を基本</strong> - 短期売買は税金・手数料で不利</li>
          <li><strong>損切りルールを事前に決める</strong> - 感情で売買しない</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者向け銘柄選びのコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>自分が知っている企業・使っているサービスの会社を選ぶ</li>
          <li>配当利回り3%以上の安定企業から始める</li>
          <li>時価総額1,000億円以上の大型株を中心に（倒産リスク低）</li>
          <li>10年以上連続増配している企業は信頼できる</li>
          <li>PER15倍以下、PBR1倍前後の割安株を狙う</li>
        </ul>
      </section>
      <AffiliateCTA
        title="手数料0円のネット証券で株式投資を始める"
        description="SBI証券・楽天証券・マネックス証券なら国内株式の売買手数料が0円。新NISA対応で非課税運用も。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "etf-vs-mutual-fund": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ETFと投資信託、何が違う？</h2>
        <p>
          ETFは「上場投資信託」の略で、<strong>株式と同じように証券取引所で売買できる投資信託</strong>。一方、一般的な投資信託は1日1回の基準価額で取引します。両者にはコスト・使い勝手・流動性に明確な違いがあります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ETFと投資信託の比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>売買単位</strong>: ETFは1口から（価格は数千円〜）／投信は100円から</li>
            <li><strong>信託報酬</strong>: ETFは低い（年0.03-0.5%）／投信も低コスト化進行（0.1%-1.5%）</li>
            <li><strong>売買タイミング</strong>: ETFはリアルタイム／投信は1日1回</li>
            <li><strong>分配金</strong>: ETFは自動再投資不可／投信は自動再投資可</li>
            <li><strong>ポイント還元</strong>: ETFはクレカ積立対象外（一部例外）／投信はクレカ積立可</li>
            <li><strong>為替手数料</strong>: 米国ETFは発生／国内投信は不要</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">どちらを選ぶべきか</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>少額からコツコツ積立</strong>→ 投資信託（新NISAつみたて投資枠で）</li>
          <li><strong>配当を定期的に受け取りたい</strong>→ 高配当ETF（VYM・HDV等）</li>
          <li><strong>コストを極限まで抑えたい</strong>→ 米国ETF（VTI・VOO・VT）</li>
          <li><strong>迷ったら</strong>→ 新NISA成長枠で米国ETF、つみたて枠で全世界投信</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ETF・投信どちらも買える万能証券は？"
        description="SBI証券・楽天証券なら国内投信・米国ETFどちらも充実ラインナップ。新NISA対応。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "investment-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資の全体像を理解しよう</h2>
        <p>
          「投資」と一口に言っても、新NISA・iDeCo・株式・投資信託・ETF・FX・仮想通貨・不動産・金・債券など様々な種類があります。それぞれにリスク・リターン・流動性・税制が異なり、自分の目的・期間・リスク許容度に合わせて選択する必要があります。この記事では、投資初心者が<strong>最初に知っておくべき知識をすべて網羅</strong>します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">投資の3大原則</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>長期</strong>: 10年以上の保有で複利効果を最大化、短期の値動きリスクを吸収</li>
          <li><strong>積立</strong>: 毎月同額を買い続けることで、購入価格を平準化（ドルコスト平均法）</li>
          <li><strong>分散</strong>: 複数の資産・地域・通貨に分散することでリスクを軽減</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">資産クラスごとの特徴</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>株式（個別株）</strong>: 高リスク・高リターン。長期平均リターン年6-8%</li>
            <li><strong>投資信託・ETF</strong>: 分散投資を手軽に実現。インデックス投信なら平均年5-7%</li>
            <li><strong>債券</strong>: 低リスク・低リターン。年1-3%程度。株式下落時の分散効果</li>
            <li><strong>不動産（REIT）</strong>: 中リスク・中リターン。年4-6%の分配金</li>
            <li><strong>FX</strong>: 高リスク・レバレッジ活用。短期トレード向き</li>
            <li><strong>仮想通貨</strong>: 超高リスク・超高リターン。余剰資金の5%以内推奨</li>
            <li><strong>金（ゴールド）</strong>: インフレヘッジ・安全資産。資産の5-10%目安</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ステップ別の始め方</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>生活防衛資金として月収の6ヶ月分を普通預金で確保</li>
          <li>ネット証券の口座を開設（SBI証券・楽天証券・マネックス証券のいずれか）</li>
          <li>新NISAつみたて投資枠で「eMAXIS Slim 全世界株式」または「eMAXIS Slim 米国株式（S&P500）」を月1-10万円積立</li>
          <li>iDeCoで掛金全額所得控除の節税効果を享受（月5千円〜2.3万円）</li>
          <li>余裕があれば新NISA成長投資枠で高配当ETF・個別株に挑戦</li>
        </ol>
      </section>
      <AffiliateCTA
        title="まずはSBI証券で新NISAをスタート"
        description="投資信託2,500本以上、三井住友カードNLでクレカ積立1%還元。口座開設無料・スマホで5分。"
        buttonText="新NISA証券会社TOP5を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="初心者向けNo.1"
      />
      <AffiliateCTA
        title="【ファイナンシャルアカデミー】で投資を本格的に学ぶ"
        description="株式投資・FX・NISA等を体系的に学べる投資スクール。初心者向け無料体験セミナーあり。"
        buttonText="無料体験セミナーに申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="投資スクール老舗"
      />
    </>
  ),
  "money-basics-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">お金の三大要素：貯める・増やす・守る</h2>
        <p>
          お金の基礎は「貯金（貯める）」「投資（増やす）」「保険（守る）」の3つ。それぞれに役割があり、<strong>バランスよく組合せる</strong>ことが資産形成の王道です。年代・家族構成・収入によって最適配分が変わります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別の最適配分</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>20代</strong>: 貯金20% / 投資75% / 保険5%（時間を最大活用、保険最小限）</p>
          <p className="text-sm mt-1"><strong>30代</strong>: 貯金25% / 投資65% / 保険10%（家族形成期、収入保障保険追加）</p>
          <p className="text-sm mt-1"><strong>40代</strong>: 貯金30% / 投資55% / 保険15%（教育費ピーク、投資を継続）</p>
          <p className="text-sm mt-1"><strong>50代</strong>: 貯金35% / 投資55% / 保険10%（老後資金確保フェーズ）</p>
          <p className="text-sm mt-1"><strong>60代以降</strong>: 貯金50% / 投資45% / 保険5%（取崩し期、リスク低減）</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">貯蓄率の目標</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>独身・実家暮らし: 手取りの30-40%</li>
          <li>独身・一人暮らし: 手取りの20-30%</li>
          <li>共働き・子なし: 手取りの25-35%</li>
          <li>子育て世帯: 手取りの10-20%（最低ラインでも継続することが大事）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="家計管理アプリで貯蓄率をアップ"
        description="マネーフォワードME・Zaim等の家計簿アプリで、自動的に支出を見える化。年間数万円の節約に。"
        buttonText="家計簿アプリ比較を見る"
        href="/guide/household-budget-apps"
        external={false}
        icon="📝"
      />
    </>
  ),
  "retirement-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">老後資金2,000万円問題の真実</h2>
        <p>
          2019年に話題となった「老後2,000万円問題」。実は<strong>金融庁の報告書で示された「ゆとりある老後」</strong>のケースで、一般的な生活水準ならもう少し少額で済むことも。ただし平均寿命延長・インフレを考慮すると、<strong>実際には3,000-5,000万円</strong>の準備が理想とされています。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">老後の収支シミュレーション（夫婦）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>月収入</strong>（夫婦の年金）: 平均22万円（厚生年金含む）</p>
          <p className="text-sm mt-1"><strong>月支出</strong>: 平均27-35万円（医療・介護・生活費）</p>
          <p className="text-sm mt-1"><strong>月不足額</strong>: 約5-13万円</p>
          <p className="text-sm mt-1"><strong>20年（65-85歳）の不足合計</strong>: 1,200-3,100万円</p>
          <p className="text-sm mt-1 text-muted">※退職金・自宅資産・配偶者の働き方で大きく変動</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">現役時代にやるべき3つのこと</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>新NISAを最大限活用</strong>: つみたて投資枠で月10万円×20-30年積立</li>
          <li><strong>iDeCoで節税＋老後資金</strong>: 会社員なら月2.3万円、自営業なら月6.8万円まで</li>
          <li><strong>収入を増やす副業</strong>: 月5万円の副業で投資余力を確保</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">取崩しフェーズの戦略（4%ルール）</h2>
        <p className="text-sm">
          FIRE達成者の間で有名な「4%ルール」: 年間支出の25倍の資産があれば、毎年4%ずつ取崩しても資産は減らないという研究結果。例えば年間支出400万円の場合、<strong>1億円の資産</strong>があれば理論上は永久に生活可能。実際には3%程度の安全マージンを確保するのが推奨です。
        </p>
      </section>
      <AffiliateCTA
        title="老後資金シミュレーターで試算"
        description="現在の年齢・貯蓄・予定年金から、今月いくら積立が必要かを計算。"
        buttonText="老後資金シミュレーターを使う"
        href="/tools/retirement-fund"
        external={false}
        icon="👴"
      />
    </>
  ),
  "nisa-growth-vs-tsumitate": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAの2つの枠、何が違う？</h2>
        <p>
          新NISAは「<strong>つみたて投資枠</strong>（年120万円）」と「<strong>成長投資枠</strong>（年240万円）」の2つがあり、合計で年間360万円まで非課税で投資可能。生涯投資枠は1,800万円（うち成長枠は1,200万円まで）です。両枠は併用可能で、使い分けがポイント。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">枠ごとの特徴比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>つみたて投資枠</strong>: 金融庁認可の長期投資向け投信約280本が対象。低コスト・分散投資・長期積立に特化。</p>
          <p className="text-sm mt-2"><strong>成長投資枠</strong>: 個別株・ETF・大半の投資信託が対象。自由度が高く、高配当ETF・グロース株・海外株式も購入可能。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年収別のおすすめ配分</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>年収300-500万円</strong>: つみたて枠のみ（月5-10万円）で全世界株式に集中</li>
          <li><strong>年収500-800万円</strong>: つみたて枠10万円＋成長枠10万円で米国ETF追加</li>
          <li><strong>年収800万円以上</strong>: 両枠フル活用（月30万円）で早期の1,800万円到達を狙う</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">失敗しない使い分けルール</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>つみたて枠は必ず先に埋める（低コスト投信で王道運用）</li>
          <li>成長枠は余剰資金で、個別株やテーマ型に挑戦</li>
          <li>成長枠でも基本は「eMAXIS Slim S&P500」等の優良投信を積み立てるのが無難</li>
          <li>毎月の積立額が決まっていれば、つみたて・成長の区別はあまり気にしなくてOK</li>
        </ol>
      </section>
      <AffiliateCTA
        title="新NISA両枠が使える証券会社は？"
        description="SBI証券・楽天証券・マネックス証券なら両枠の投資信託・個別株・ETFがすべて揃います。"
        buttonText="新NISA証券会社比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
      />
    </>
  ),
  "year-end-tax-saving": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">12月までにやるべき節税アクション</h2>
        <p>
          年末調整・確定申告の準備は、<strong>12月31日で区切り</strong>があります。それまでに実行しておけば、翌年の税金が大きく変わる施策をまとめました。1つでも取り組めば数万円〜数十万円の節税効果があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">6つの年末節税アクション</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>ふるさと納税（限度額まで寄付）</strong>: 年収500万円なら約6万円、返礼品30%で実質-2,000円で18,000円相当の特産品</li>
          <li><strong>iDeCo掛金を拠出上限まで増額</strong>: 残り月で追加拠出して所得控除を最大化</li>
          <li><strong>新NISA枠を使い切る</strong>: つみたて枠120万円・成長枠240万円の残額を12月までに投資</li>
          <li><strong>損益通算（損出し）</strong>: 含み損銘柄を年内に売却→翌日買戻で利益と相殺</li>
          <li><strong>医療費控除の準備</strong>: 年間10万円超の医療費レシートを集計、家族合算で申告準備</li>
          <li><strong>生命保険料控除の確認</strong>: 年末調整で4万円×3種＝最大12万円の所得控除</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税効果の目安（年収500万円の場合）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-1">
            <li>ふるさと納税: 実質負担-2,000円で寄付額相当の返礼品</li>
            <li>iDeCo満額（年27.6万円）: 所得税+住民税で年5.5万円節税</li>
            <li>医療費控除（年20万円）: 約2万円還付</li>
            <li>生命保険料控除: 年1.2-2.4万円節税</li>
            <li><strong>合計で年8-12万円の節税可能</strong></li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="ふるさと納税で年末節税を完結"
        description="楽天ふるさと納税なら最大15%ポイント還元。12月31日までの駆け込み需要に間に合います。"
        buttonText="ふるさと納税ガイドを見る"
        href="/guide/furusato-tax-guide-2026"
        external={false}
        icon="🎁"
      />
    </>
  ),
  "credit-card-stacking": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ積立3社併用で月30万円対応</h2>
        <p>
          新NISAの積立可能額は月10万円（年120万円）まで。しかし複数のネット証券で<strong>それぞれ月10万円のクレカ積立</strong>を行えば、非課税枠を超えた分は特定口座になるものの、<strong>クレカ積立ポイントを最大化</strong>できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3社併用の具体例</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>SBI証券（新NISA）</strong>: 月10万円 × 三井住友ゴールドNL 1%還元 = 月1,000P</p>
          <p className="text-sm mt-1"><strong>楽天証券（特定口座）</strong>: 月10万円 × 楽天カード 1%還元 = 月1,000P</p>
          <p className="text-sm mt-1"><strong>マネックス証券（特定口座）</strong>: 月10万円 × マネックスカード 1.1%還元 = 月1,100P</p>
          <p className="text-sm mt-2"><strong>合計月3,100ポイント（年37,200ポイント）</strong></p>
          <p className="text-xs text-muted mt-2">※新NISAはSBIのみ、残り2社は特定口座となる点に注意</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3社併用のメリット・デメリット</h2>
        <p className="text-sm"><strong>メリット</strong>: ポイント還元の最大化、複数経済圏の恩恵</p>
        <p className="text-sm"><strong>デメリット</strong>: 管理が煩雑、特定口座分の利益に20.315%課税、資金拘束増</p>
        <p className="text-sm mt-2">一般的には<strong>「SBI×三井住友ゴールドNL」1社集中</strong>が最も効率的。3社併用は年収・投資余力が大きい人向けの上級テクニック。</p>
      </section>
      <AffiliateCTA
        title="まずは1社集中で始めてみる"
        description="SBI証券×三井住友カードNL / ゴールドNLなら年100万円利用で年会費無料。初心者に最もおすすめの組合せ。"
        buttonText="新NISA証券会社TOP5を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💳"
      />
    </>
  ),
  "sbi-securities-for-beginners": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券で新NISAを始める手順（所要時間10分）</h2>
        <p>
          SBI証券の新NISA口座開設は<strong>スマホで最短10分</strong>で完了します。本人確認書類（マイナンバーカード or 運転免許証+通知カード）を準備して始めましょう。開設費用・維持費は完全無料です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">口座開設の5ステップ</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>SBI証券の公式サイトにアクセス→「口座開設」ボタンをタップ</li>
          <li>メールアドレスを登録→認証コードを入力</li>
          <li>個人情報入力（氏名・住所・電話番号・勤務先等）</li>
          <li>「NISA口座も同時に開設」にチェック（忘れずに！）</li>
          <li>本人確認書類をスマホで撮影→アップロード</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ積立の設定（ポイント還元最大化）</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>三井住友カードNL（年会費無料）またはゴールドNL（年100万円利用で年会費無料）を同時申込</li>
          <li>マイページ→「投信積立」→「クレジットカード積立」を選択</li>
          <li>積立金額（月1万円〜10万円）を設定</li>
          <li>銘柄選択: 初心者は「eMAXIS Slim 全世界株式（オールカントリー）」または「S&P500」推奨</li>
          <li>毎月の積立日を選択して設定完了</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">審査完了までの期間</h2>
        <p className="text-sm">
          申込後、通常<strong>翌営業日〜1週間</strong>で審査完了の通知メールが届きます。NISA口座は税務署確認があるため、取引開始まで2-3週間かかる場合も。ただし「NISA口座仮開設」で先行して取引開始できる場合もあります。
        </p>
      </section>
      <AffiliateCTA
        title="SBI証券の公式サイトで口座開設を始める"
        description="業界No.1のSBI証券で新NISAをスタート。三井住友カードNLと組み合わせてポイント還元を受けましょう。"
        buttonText="SBI証券比較ガイドを見る"
        href="/guide/sbi-securities-review"
        external={false}
        icon="📊"
      />
    </>
  ),
  "rakuten-securities-for-beginners": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天証券で新NISAを始める手順</h2>
        <p>
          楽天経済圏のユーザーなら、楽天証券×楽天カードの組合せが最強。口座開設は<strong>最短10分</strong>で申込完了、翌営業日から取引開始可能です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">口座開設の手順</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>楽天証券公式サイト→「口座開設」をタップ</li>
          <li>楽天会員なら楽天IDで連携ログイン（情報が自動入力）</li>
          <li>NISA口座を同時申込にチェック</li>
          <li>楽天銀行の口座開設も同時に（マネーブリッジで金利0.1%アップ）</li>
          <li>本人確認書類アップロード→完了</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天カード積立の設定</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>楽天カードを先に保有していること（未保有なら同時申込可）</li>
          <li>マイページ→「積立設定」→「楽天カードクレジット決済」選択</li>
          <li>月1,000円〜10万円の範囲で積立額設定（1%ポイント還元）</li>
          <li>楽天キャッシュ積立も併用可能（さらに0.5%還元）</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏での連携設定</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>マネーブリッジ: 楽天銀行×楽天証券の連携で普通預金金利0.1%</li>
          <li>ハッピープログラム: 楽天銀行の手数料優遇・ATM無料回数増加</li>
          <li>SPU対象: 楽天市場のお買い物ポイントが+0.5〜1倍</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏ユーザーなら楽天証券一択"
        description="楽天カード積立1%還元＋楽天銀行連携で総合力No.1。新NISA・iDeCoの取扱商品も豊富。"
        buttonText="楽天証券レビューを見る"
        href="/guide/rakuten-securities-review"
        external={false}
        icon="📊"
      />
    </>
  ),
  "foreign-dividend-stocks": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当株投資の魅力</h2>
        <p>
          米国株は<strong>50年以上連続増配の優良企業</strong>が多く、配当金による安定した不労所得を作るのに最適です。代表的な高配当ETFは利回り3-4%、個別株なら5-10%以上も可能。為替リスクはあるものの、長期的にドル建て資産を保有することで円安時にも安心感があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">代表的な米国高配当ETF</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "VYM（バンガード米国高配当株式ETF）", yield: "約3%", feature: "S&P500上位400銘柄から選定、経費率0.06%超低コスト" },
            { name: "HDV（iシェアーズ・コア米国高配当株ETF）", yield: "約3.5%", feature: "財務健全性を重視、75銘柄に絞り込み" },
            { name: "SPYD（SPDR S&P500高配当ETF）", yield: "約4.5%", feature: "S&P500の上位80銘柄均等配分、利回り重視派向け" },
            { name: "QYLD（NASDAQ100カバード・コール）", yield: "約11%", feature: "超高配当、ただし元本成長は期待しづらい" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base">{item.name}</h3>
                <span className="text-sm text-primary font-bold">{item.yield}</span>
              </div>
              <p className="text-sm mt-1 text-muted">{item.feature}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">配当金生活への道筋（月20万円を目指す）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm">月20万円（年240万円）の配当を得るには:</p>
          <ul className="text-sm space-y-1 mt-2">
            <li>利回り3%の場合: <strong>8,000万円の投資元本</strong>必要</li>
            <li>利回り4%の場合: <strong>6,000万円の投資元本</strong>必要</li>
            <li>利回り5%の場合: <strong>4,800万円の投資元本</strong>必要</li>
          </ul>
          <p className="text-xs text-muted mt-3">※税金（米国10%+日本20.315%の二重課税）を考慮するとやや多めに必要</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株投資におすすめのネット証券</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>マネックス証券</strong>: 取扱銘柄6,000超、為替手数料無料が強み</li>
          <li><strong>SBI証券</strong>: 総合力No.1、米国株定期買付サービスあり</li>
          <li><strong>楽天証券</strong>: 楽天ポイントで米国株買付可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国株取引に強いネット証券を比較"
        description="マネックス・SBI・楽天など、米国株取扱数・手数料・使いやすさを総合比較。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💵"
      />
    </>
  ),
  "ideco-vs-corporate-pension": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo vs 企業型DC、会社員はどっちが有利？</h2>
        <p>
          企業型確定拠出年金（企業型DC）がある会社員の場合、iDeCoと併用できるケースと、どちらか一方しか選べないケースがあります。<strong>マッチング拠出の有無</strong>がまず確認ポイント。企業型DC単独よりも、個人の意思で選べるiDeCoの自由度が魅力です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">それぞれの特徴比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>iDeCo（個人型確定拠出年金）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>金融機関・商品を自分で選択可能</li>
            <li>低コストのインデックス投信が選べる</li>
            <li>月2.3万円まで（企業年金なし会社員）</li>
            <li>掛金全額所得控除</li>
          </ul>
          <p className="text-sm mt-3"><strong>企業型DC（企業型確定拠出年金）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>会社が掛金を拠出（給与には含まれない）</li>
            <li>商品ラインナップは会社指定（選択肢限定的）</li>
            <li>マッチング拠出で追加拠出可能（会社による）</li>
            <li>所得控除効果あり（マッチング拠出分）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">転職時の注意点</h2>
        <p className="text-sm">
          企業型DC加入者が転職する場合、資産を<strong>6ヶ月以内にiDeCoや転職先の企業型DCに移換</strong>する必要があります。放置すると国民年金基金連合会に自動移換され、運用されず手数料だけ引かれ続けるので必ず手続きを。
        </p>
      </section>
      <AffiliateCTA
        title="iDeCo口座開設ならネット証券が有利"
        description="SBI証券・楽天証券・マネックス証券は運営管理手数料0円、取扱商品も豊富で節税効果を最大化。"
        buttonText="iDeCo金融機関比較を見る"
        href="/guide/ideco-broker-comparison"
        external={false}
        icon="🏦"
      />
    </>
  ),
  "taxable-vs-nisa": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">特定口座と新NISA口座の違い</h2>
        <p>
          投資信託や株式を購入する際、<strong>特定口座</strong>（課税される通常口座）と<strong>新NISA口座</strong>（非課税口座）の2種類があります。新NISAの年間投資枠（360万円）を使い切ったら、残りは特定口座で運用するのが基本パターン。税金で大きな差が出るため、優先順位を理解することが重要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税金の違い（100万円の利益が出た場合）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>特定口座</strong>: 利益 × 20.315% = 20.3万円が税金 → 手取り79.7万円</p>
          <p className="text-sm mt-2"><strong>新NISA口座</strong>: 利益 × 0% = <strong>0円</strong>（非課税） → 手取り100万円</p>
          <p className="text-sm mt-2 text-primary font-bold">差額: 20.3万円</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">使い分けの優先順位</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>新NISAつみたて枠（年120万円）</strong>を最優先で埋める</li>
          <li><strong>新NISA成長枠（年240万円）</strong>で追加投資</li>
          <li>iDeCoで節税しながら追加運用</li>
          <li>さらに余裕があれば特定口座で高配当株・ETF</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">特定口座（源泉徴収あり vs なし）</h2>
        <p className="text-sm">
          特定口座には「源泉徴収あり」「源泉徴収なし」があります。<strong>源泉徴収あり</strong>なら確定申告不要で手間が省けますが、他の口座と損益通算したい場合は確定申告必要。サラリーマンは基本「源泉徴収あり」が便利です。
        </p>
      </section>
      <AffiliateCTA
        title="新NISA対応のネット証券で非課税運用"
        description="新NISAを使わないと年20万円以上の税金を損する可能性も。口座開設・維持費は完全無料。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "fx-vs-stock-vs-crypto": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">代表的な投資先3つの比較</h2>
        <p>
          株式・FX・仮想通貨はそれぞれ<strong>リスク・リターン・税制・流動性</strong>が大きく異なります。投資戦略を決める前に、それぞれの特性を理解しましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">項目別比較表</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>期待リターン（年平均）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式（インデックス）: 年5-8%（長期）</li>
            <li>FX: プラスマイナスゼロが基本（ゼロサムゲーム）</li>
            <li>仮想通貨: 年±50%超（極端な変動）</li>
          </ul>
          <p className="text-sm mt-3"><strong>税制（利益への課税）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式: 一律20.315%（分離課税）</li>
            <li>FX: 一律20.315%（分離課税）</li>
            <li>仮想通貨: 最大55%（総合課税・累進課税）</li>
          </ul>
          <p className="text-sm mt-3"><strong>流動性</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式: 平日9-15時のみ（国内）、米国株は深夜</li>
            <li>FX: 平日24時間（土日除く）</li>
            <li>仮想通貨: 24時間365日</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者へのおすすめ配分</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>株式（新NISAインデックス投信）: 資産の<strong>70-80%</strong>（メイン）</li>
          <li>FX: 資産の<strong>5%以下</strong>（スキル次第、少額推奨）</li>
          <li>仮想通貨: 資産の<strong>5-10%以下</strong>（ハイリスク、余剰資金で）</li>
          <li>現金・預金: 生活防衛資金6ヶ月分</li>
        </ul>
      </section>
      <AffiliateCTA
        title="まずは新NISAで株式投資から始めよう"
        description="新NISAインデックス投信なら税金ゼロで年利5-7%の長期リターンを狙えます。初心者の第一歩として最適。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="⚖️"
      />
    </>
  ),
  "emergency-fund-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生活防衛資金とは？</h2>
        <p>
          生活防衛資金は、<strong>失業・病気・災害など不測の事態に備える現金</strong>です。投資資産とは別に、すぐに引き出せる形で確保しておく必要があります。これがないと、相場下落時に泣く泣く損切りして生活費に充てることに。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">職業タイプ別の必要月数</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>公務員・大企業正社員</strong>: 月収の3ヶ月分（失業リスク低）</li>
          <li><strong>中小企業正社員</strong>: 月収の6ヶ月分（標準的）</li>
          <li><strong>契約社員・派遣</strong>: 月収の9ヶ月分（雇用不安定）</li>
          <li><strong>フリーランス・自営業</strong>: 月収の12ヶ月分（収入変動あり）</li>
          <li><strong>子育て世帯・住宅ローンあり</strong>: +3ヶ月追加で余裕を</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">保管場所のおすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>ネット銀行の普通預金</strong>（住信SBI・楽天・auじぶん等）: 金利0.1-0.3%で最適</li>
          <li><strong>定期預金</strong>: 半年〜1年物で若干金利アップ（解約時はペナルティあり）</li>
          <li><strong>MMF・短期国債</strong>: より高利回りだが流動性がやや落ちる</li>
          <li><strong>避けるべき</strong>: 株式・投信（変動リスク）、外貨預金（為替リスク）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">生活防衛資金と投資の優先順位</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>まず生活防衛資金3ヶ月分を普通預金で確保</li>
          <li>NISAつみたて枠で少額（月1-3万円）積立開始</li>
          <li>生活防衛資金を6ヶ月分まで増やす</li>
          <li>その後は積極的にNISA・iDeCoへ投入</li>
        </ol>
      </section>
      <AffiliateCTA
        title="生活防衛資金に最適なネット銀行を比較"
        description="住信SBIネット銀行・楽天銀行・auじぶん銀行など、金利・手数料優遇を比較。"
        buttonText="ネット銀行比較を見る"
        href="/guide/online-bank-comparison"
        external={false}
        icon="🛟"
      />
    </>
  ),
  "junior-nisa-successor": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ジュニアNISA廃止後の教育資金戦略</h2>
        <p>
          ジュニアNISA制度は2023年末で新規投資終了、2024年以降は<strong>新NISA</strong>が唯一の非課税投資枠となりました。子どもの教育資金準備は、<strong>親名義の新NISA</strong>を活用するのが現実的な選択肢です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3つの教育資金準備方法</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "親の新NISAで積立", pro: "非課税・流動性高・インフレに強い", con: "相場下落時は元本割れリスク" },
            { name: "学資保険", pro: "返戻率105-110%で確実、契約者死亡時の払込免除", con: "インフレに弱い、中途解約で元本割れ" },
            { name: "贈与+子ども名義口座", pro: "暦年贈与110万円まで非課税、子の金融教育に", con: "親が管理責任、18歳まで引き出さない工夫必要" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <h3 className="font-bold text-base">{item.name}</h3>
              <p className="text-sm mt-1"><strong className="text-primary">◎</strong> {item.pro}</p>
              <p className="text-sm"><strong className="text-accent">△</strong> {item.con}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめは「新NISA＋学資保険」併用</h2>
        <p className="text-sm">
          大学進学（約500-800万円）が必要な時期が確定しているため、<strong>安全資産（学資保険・定期預金）50% + リスク資産（新NISA）50%</strong> の併用戦略が推奨。相場下落時に備えて、進学の3-5年前から徐々にNISA分を現金化していくとベスト。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">0歳から18年積立シミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>月3万円 × 18年 × 年利5%</strong></p>
          <ul className="text-sm space-y-1 mt-2">
            <li>元本合計: 648万円</li>
            <li>運用後資産: <strong>約1,070万円</strong></li>
            <li>運用益: 約420万円（新NISAなら非課税）</li>
          </ul>
          <p className="text-xs text-muted mt-2">※大学進学時期に暴落がある可能性も。3年前から徐々に現金化推奨。</p>
        </div>
      </section>
      <AffiliateCTA
        title="子の教育資金は親の新NISAで準備"
        description="新NISAつみたて投資枠で長期積立すれば、ジュニアNISA以上の非課税メリットが得られます。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="👶"
      />
    </>
  ),
};
