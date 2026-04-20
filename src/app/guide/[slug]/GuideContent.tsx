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
      <AffiliateCTA
        title="スキマ時間にコツコツ｜マクロミルのアンケートモニター"
        description="毎日数分のスマホ操作で月5,000〜15,000円が狙える定番の副業。登録無料・銀行振込可で、Web調査・商品モニターなど多彩な案件。"
        buttonText="マクロミルに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD"
        icon="📋"
        highlight="登録無料"
      />
      <AffiliateCTA
        title="ブログ副業を始めるならエックスサーバーで決まり"
        description="国内シェアNo.1のレンタルサーバー。月990円〜、独自ドメイン永久無料、WordPressクイックスタートで10分でブログ開設可能。"
        buttonText="エックスサーバーを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
        icon="🖥️"
        highlight="月990円〜"
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
      <AffiliateCTA
        title="投資の基礎を体系的に｜ファイナンシャルアカデミー【無料体験】"
        description="日本最大級の投資スクール。株式・不動産・投資信託・FXの基礎を体系的に学べる無料体験セミナーを随時開催。自己流で損を出す前に投資の原則を押さえたい30代におすすめ。"
        buttonText="無料体験セミナーを予約"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="無料体験"
      />
      <AffiliateCTA
        title="米国株投資ならDMM株｜取引手数料0円"
        description="DMM株は新NISA対応、米国株の為替手数料0円・取引手数料0円で業界最安水準。30代の成長投資枠でVOO・VTIを買うならコスト最強。"
        buttonText="DMM株に無料口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="📊"
        highlight="取引手数料0円"
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
      <AffiliateCTA
        title="40代でも学べる｜ファイナンシャルアカデミー【無料体験】"
        description="40代で投資デビューするなら、自己流より体系的な学びが近道。不動産投資・株式投資・投資信託の基礎を無料体験セミナーで学べる老舗スクール。"
        buttonText="無料体験セミナーを予約"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="無料体験"
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
  "ipo-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO投資とは？当選すれば初値で数十万円の利益も</h2>
        <p>
          IPO（新規公開株）投資は、上場前の企業の株を公募価格で購入し、上場初日の初値で売却する投資手法。<strong>初値騰落率の平均は約+70%</strong>と高く、1銘柄で数十万〜数百万円の利益を得るケースも珍しくありません。ただし当選しないと始まらないため、複数の証券会社で口座開設するのが基本戦略です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO当選確率を上げる証券会社選び</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>SBI証券</strong>: IPOチャレンジポイント制度、取扱数業界最多クラス</li>
            <li><strong>マネックス証券</strong>: 100%完全平等抽選、小口でも当選のチャンス</li>
            <li><strong>楽天証券</strong>: 取扱銘柄増加中、楽天ポイントで投資可</li>
            <li><strong>松井証券</strong>: 主幹事実績あり、取引手数料も1日50万円まで無料</li>
            <li><strong>auカブコム証券</strong>: 完全平等抽選の比率が高い</li>
            <li><strong>DMM.com証券</strong>: 取扱銘柄増加中、少額でも当選チャンス</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO投資の戦略</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>主要ネット証券5〜10社で口座開設（複数申込で当選確率UP）</li>
          <li>BB（ブックビルディング）参加 - 公募価格が決定する前の需要調査</li>
          <li>抽選当選後、購入申込期間内に「購入する」を選択</li>
          <li>上場日の寄付き（初値）で成行売却が基本戦略</li>
          <li>業績好調銘柄はセカンダリ（上場後）で長期保有も検討</li>
        </ol>
      </section>
      <AffiliateCTA
        title="【DMM 株】でIPOに挑戦する"
        description="DMM.com証券ならIPO取扱も増加中、手数料は業界最安水準。"
        buttonText="DMM 株の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="🚀"
        highlight="手数料業界最安水準"
      />
    </>
  ),
  "high-dividend-stocks-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資の魅力：不労所得を生むキャッシュフロー</h2>
        <p>
          高配当株投資は、配当利回り3〜5%以上の銘柄を長期保有し、<strong>定期的な配当金収入（不労所得）</strong>を得る投資手法。インデックス投資と違い、売却せずに持ち続けるだけで安定したキャッシュフローが得られるのが最大の魅力です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月5万円の配当金を得るために必要な投資額</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>配当利回り3%</strong>: 2,000万円で年60万円（月5万円）</li>
            <li><strong>配当利回り4%</strong>: 1,500万円で年60万円</li>
            <li><strong>配当利回り5%</strong>: 1,200万円で年60万円</li>
          </ul>
          <p className="text-xs text-muted mt-3">※税引前。NISA成長投資枠なら非課税で全額受け取り可。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">日本の高配当株おすすめ銘柄（参考）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>三菱商事・三井物産・住友商事など総合商社（利回り3〜4%）</li>
          <li>JT（日本たばこ産業）（利回り5%超）</li>
          <li>三菱UFJ FG・三井住友FG・みずほFGなどメガバンク（利回り3〜4%）</li>
          <li>KDDI・ソフトバンク・NTTなど通信大手（利回り3〜4%）</li>
          <li>ENEOS HD・出光興産などエネルギー（利回り4〜5%）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当ETF（分散投資に便利）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>VYM</strong>: 高配当400銘柄に分散、経費率0.06%</li>
          <li><strong>SPYD</strong>: S&P500高配当上位80銘柄、利回り約4%</li>
          <li><strong>HDV</strong>: 高配当75銘柄、財務健全性重視</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【DMM 株】で高配当米国株を購入"
        description="NISAで米国ETF（VYM・SPYD等）も購入可能。配当は非課税で受け取れます。"
        buttonText="DMM 株でNISA口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="💵"
        highlight="NISAで非課税"
      />
      <AffiliateCTA
        title="【旬の厳選10銘柄】株歴50年超プロによる推奨銘柄"
        description="株式投資のプロが高騰期待銘柄を絞り込み、毎月『旬の厳選10銘柄』シリーズとして提供。個別銘柄選定に自信がない初心者・中級者の銘柄選びをサポート。ユーザーの声「年間利益は平均して300万円くらいです」"
        buttonText="最新号の銘柄を見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4P35CQ+ONS+TS3OI"
        icon="📈"
        highlight="プロの推奨銘柄"
      />
    </>
  ),
  "dividend-life-roadmap": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">配当金生活とは？FIRE達成への道</h2>
        <p>
          配当金生活とは、株式投資の配当金だけで生活費をまかなう状態を指します。FIRE（Financial Independence, Retire Early）ムーブメントの一環として注目され、自由な時間と経済的自立を両立する究極のライフスタイルです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">目標配当金額別・必要投資額（利回り4%想定）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>月10万円</strong>（年120万円）: 投資元本 3,000万円</li>
            <li><strong>月20万円</strong>（年240万円）: 投資元本 6,000万円</li>
            <li><strong>月30万円</strong>（年360万円）: 投資元本 9,000万円</li>
            <li><strong>月50万円</strong>（年600万円・ゆとり生活）: 投資元本 1億5,000万円</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別・実現可能なプラン</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>20代スタート</strong>: 月5万円積立×30年×年利6% → 約5,000万円 → 月15万円配当</li>
          <li><strong>30代スタート</strong>: 月7万円積立×25年×年利6% → 約4,800万円 → 月14万円配当</li>
          <li><strong>40代スタート</strong>: 月10万円積立×20年×年利6% → 約4,600万円 → 月14万円配当</li>
        </ul>
      </section>
      <AffiliateCTA
        title="配当金生活を本気で目指すなら投資スクール"
        description="ファイナンシャルアカデミーで株式投資・配当金戦略を体系的に学べる。無料体験セミナーあり。"
        buttonText="無料体験セミナーに申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🏖️"
        highlight="投資スクール老舗"
      />
    </>
  ),
  "us-stock-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株投資が選ばれる理由</h2>
        <p>
          米国株は<strong>年平均リターン9〜10%</strong>と世界最高水準の成長力を誇り、日本人投資家にも人気。GAFAM（Google、Apple、Facebook=Meta、Amazon、Microsoft）をはじめとする世界的企業に直接投資できる点が魅力です。円安進行時には為替差益も狙えます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3つのアプローチ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>S&P500インデックス</strong>: VOO・IVV・SPY等、最も無難な米国株投資</li>
          <li><strong>高配当ETF</strong>: VYM・SPYD・HDV、配当利回り3〜4%</li>
          <li><strong>個別株（GAFAM等）</strong>: 成長力最高だが値動き激しい</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税金・為替リスクの管理</h2>
        <p className="text-sm">
          米国株の配当は米国で10%源泉徴収後、日本でも20.315%課税。外国税額控除で取り戻せます。NISA口座なら日本側20.315%分は非課税（米国10%は発生）。為替はドル建てなので、円高局面では日本円換算の評価額が下がります。
        </p>
      </section>
      <AffiliateCTA
        title="【DMM 株】で米国株投資を始める"
        description="米国株の手数料は約定代金の0.45%（業界最安級）。NISA対応で非課税運用可能。"
        buttonText="DMM 株で米国株を始める"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="🇺🇸"
        highlight="手数料最安級"
      />
    </>
  ),
  "gold-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">金投資の役割：インフレヘッジ＆安全資産</h2>
        <p>
          金は「有事の金」と呼ばれ、株価暴落・通貨価値下落時に価値が保たれる<strong>安全資産</strong>。インフレ局面でも実物資産として価値を維持します。ポートフォリオの5〜10%を金に配分するのが一般的な推奨です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">金投資の3つの方法</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>純金積立</strong>: 田中貴金属・三菱マテリアル等、月3,000円〜。長期積立向き</li>
            <li><strong>金ETF（1540・GLD等）</strong>: 証券会社で簡単売買、NISA対応可</li>
            <li><strong>金地金（実物）</strong>: 500g以上で現物購入可、保管コスト考慮必要</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="【DMM CFD】で金・原油などのコモディティ取引"
        description="CFDなら少額から金・原油・株価指数に投資可能。DMM.com証券の信頼性。"
        buttonText="DMM CFDの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FZ4RX6+1WP2+NZ4J7"
        icon="🪙"
      />
    </>
  ),
  "bond-investment-beginners": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">債券投資の基礎：安定した利息収入</h2>
        <p>
          債券は国や企業が資金調達のために発行する借用証書で、<strong>定期的な利息</strong>と満期時の元本返済が約束されています。株式よりも値動きが小さく、分散投資の一部として重要な役割を果たします。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">主要な債券の種類</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>個人向け国債</strong>: 変動10年・固定5年・固定3年。1万円から、最低金利0.05%保証</li>
          <li><strong>社債</strong>: 大企業の債券、金利1〜3%程度。個別リスクあり</li>
          <li><strong>米国債</strong>: 米国政府発行、金利4〜5%（2026年時点）。為替リスクあり</li>
          <li><strong>債券投資信託</strong>: 分散された債券に手軽に投資、NISA対応あり</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【DMM 株】で個人向け国債・債券ファンドを購入"
        description="個人向け国債やバランス型投信を通じて債券投資が可能。NISAにも対応。"
        buttonText="DMM 株で債券投資"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="📜"
      />
    </>
  ),
  "reit-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">J-REITとは？小額で不動産投資</h2>
        <p>
          J-REIT（日本版不動産投資信託）は、不動産のプロが運用する不動産ポートフォリオに<strong>1口10万円程度</strong>から投資できる金融商品。利益の90%以上を分配するため、利回りは一般的に<strong>3〜5%</strong>と高めです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">J-REITの魅力とリスク</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>少額から不動産に分散投資可能</li>
          <li>プロが運用するので知識不要</li>
          <li>株式市場で自由に売買（流動性高い）</li>
          <li>NISA成長投資枠で非課税運用可</li>
          <li>金利上昇・不動産市況悪化が主なリスク</li>
        </ul>
      </section>
      <AffiliateCTA
        title="不動産クラウドファンディングも検討"
        description="J-REITと違い、投資対象物件を自分で選べる。利回り4〜8%の案件多数。"
        buttonText="不動産投資ガイドを見る"
        href="/guide/investment-complete-guide"
        external={false}
        icon="🏢"
      />
    </>
  ),
  "insurance-optimization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本人は保険に入りすぎ？公的保障で十分な場合も</h2>
        <p>
          日本は<strong>社会保障が手厚い国</strong>のため、高額な民間保険が必要ないケースが多数。健康保険（高額療養費制度）、遺族年金、障害年金など公的保障を理解した上で、本当に必要な保障だけ民間保険で補うのが賢い選び方です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員に本当に必要な保険</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>生命保険（家族持ち）</strong>: 収入保障保険が効率的。掛け捨てで保険料が安い</li>
          <li><strong>医療保険</strong>: 公的保障で多くカバー可能。高額療養費制度の上限は月約8〜18万円</li>
          <li><strong>がん保険</strong>: 先進医療特約は有用。他の保障は公的保険でカバー可</li>
          <li><strong>自動車保険</strong>: 対人・対物無制限は必須</li>
          <li><strong>火災保険</strong>: 賃貸・持ち家問わず加入必須</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険の見直しで年10万円以上の節約も"
        description="無料の保険相談サービスで、現在の保険を見直して適正な保障額に。"
        buttonText="保険相談サービスを見る"
        href="/guide/household-budget-apps"
        external={false}
        icon="🛡️"
      />
    </>
  ),
  "fx-vps-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FX自動売買（EA）にVPSが必要な理由</h2>
        <p>
          FX自動売買は<strong>24時間365日稼働</strong>させる必要があります。自宅PCで動かすと電気代・PC負荷・通信障害リスクが問題。VPS（仮想専用サーバー）に移行することで、<strong>安定性・低遅延・電気代ゼロ</strong>を実現できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">FX専用VPSの選び方</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>低遅延</strong>: 取引サーバーとの物理距離が近いVPSを選ぶ</li>
          <li><strong>24時間稼働</strong>: 稼働率99.99%以上の実績</li>
          <li><strong>メモリ・CPU</strong>: MT4なら最低2GB RAM、MT5なら4GB以上推奨</li>
          <li><strong>サポート</strong>: 日本語24時間サポートがあると安心</li>
          <li><strong>月額料金</strong>: 1,800円〜3,000円程度が相場</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【お名前.com FX専用VPS】業界最安級・24時間サポート"
        description="FX自動売買向けに最適化。初期費用無料、月額1,848円〜。国内データセンター運用。"
        buttonText="お名前.com FX VPSの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G829ZU+50+3NONKX"
        icon="🖥️"
        highlight="業界最安級"
      />
      <AffiliateCTA
        title="【MT4自動売買】お名前.com監修のEA運用"
        description="MT4対応の自動売買を手軽に始められる環境。専用VPSとセットで。"
        buttonText="MT4自動売買の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FVK6AI+50+89Q8HD"
        icon="🤖"
      />
    </>
  ),
  "investment-school-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資スクールで学ぶメリット</h2>
        <p>
          独学では気づきにくい<strong>体系的な知識・実践スキル</strong>を短期間で習得できるのが投資スクールの魅力。株式投資・FX・NISA・不動産投資など多様なコースが用意されています。無料体験セミナーを活用して相性を確認するのがおすすめです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">主要投資スクール比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>ファイナンシャルアカデミー</strong>: 2002年創業の老舗。株式・不動産・FXなど網羅</li>
            <li><strong>Global Financial School（GFS）</strong>: 市川雄一郎学長。オンライン完結型</li>
            <li><strong>日本ファイナンシャルアカデミー</strong>: 講師陣の質に定評</li>
            <li><strong>ファイナンシャルセミナー（単発無料）</strong>: マネイロ・保険クリニック等</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="【ファイナンシャルアカデミー】無料体験セミナー"
        description="株式投資・FX・NISAスクール。2002年創業、受講生22万人の老舗。まずは無料体験から。"
        buttonText="無料体験セミナー申込"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="老舗・無料体験OK"
      />
    </>
  ),
  "cashing-comparison-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">消費者金融の選び方：金利・審査時間・限度額</h2>
        <p>
          急にお金が必要になった時、最短即日で融資可能な消費者金融は便利な選択肢。ただし<strong>金利（実質年率3.0〜18.0%）</strong>や限度額、審査時間は会社によって大きく異なります。目的別に最適な会社を選ぶことが大切です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">中堅消費者金融の特徴</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>パーソナルクレジット セントラル</strong>: 来店不要、最短即日振込、最大300万円</li>
            <li><strong>フタバ</strong>: 借りやすく返しやすい中堅系、レディースキャッシングあり</li>
            <li><strong>アイフル</strong>: 大手、最短18分融資、WEB完結</li>
            <li><strong>アコム</strong>: 三菱UFJ FGグループ、最短20分審査</li>
            <li><strong>プロミス</strong>: SMBCグループ、30日間無利息サービス</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">利用時の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>総量規制により年収の1/3以上は借りられない</li>
          <li>無利息期間（30日等）を上手く活用すれば手数料を抑えられる</li>
          <li>複数社から借入は信用情報に影響する可能性あり</li>
          <li>返済計画を必ず立ててから利用する</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【パーソナルクレジット セントラル】来店不要で即日振込"
        description="中堅消費者金融のセントラル。大手で審査が不安な方にも。最大300万円まで。"
        buttonText="セントラルを申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4WTS7U+363I+5YJRM"
        icon="💸"
        highlight="最短即日"
      />
      <AffiliateCTA
        title="【キャッシングのフタバ】借りやすく返しやすい中堅系"
        description="中堅消費者金融のフタバ。ご自身のペースで無理なく完済できる設計。レディースプランあり。"
        buttonText="フタバを申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4T96L6+38S6+BXQOJ"
        icon="🌸"
      />
    </>
  ),
  "factoring-comparison-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ファクタリングとは？売掛金で即日資金調達</h2>
        <p>
          ファクタリングは、企業が保有する<strong>売掛金（請求書）をファクタリング会社に売却し、早期に現金化</strong>するサービス。銀行融資と違い、借入ではないため負債にならず、経営状況が厳しい法人や個人事業主でも利用しやすいのが特徴です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ファクタリングの2つの形態</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>2社間ファクタリング</strong>: ファクタリング会社と利用者の2社。取引先に通知不要。手数料8〜20%</li>
            <li><strong>3社間ファクタリング</strong>: 取引先の承諾必要、手数料1〜9%と低い</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ファクタリングのメリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>最短2時間〜即日で資金調達可能</li>
          <li>信用情報に影響しない（融資ではない）</li>
          <li>赤字・税金滞納でも利用可能な会社も</li>
          <li>担保・保証人不要</li>
          <li>売掛金の回収リスクをファクタリング会社に移転</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【トップ・マネジメント】7秒無料見積もり・事業資金調達"
        description="法人経営者向けファクタリング。オンライン完結、最短2時間で資金化可能。買取可能額は30万円〜3億円。"
        buttonText="無料見積もりを受ける"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4UG1SQ+3JLM+63H8I"
        icon="💼"
        highlight="最短2時間"
      />
      <AffiliateCTA
        title="【資金調達プロ】10秒カンタン無料診断"
        description="法人経営者向け資金調達一括比較。あなたに最適なファクタリング会社を自動マッチング。"
        buttonText="10秒診断を試す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4VMX0A+40JM+TWTFL"
        icon="⚡"
      />
      <AffiliateCTA
        title="【SoKuMo（ソクモ）】オンライン特化型ファクタリング"
        description="株式会社アドプランニング提供。オンライン完結で手続きがシンプル、確定率37.93%と高水準。初めての利用でも安心。"
        buttonText="SoKuMoを申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7YYZ4Q+5LZE+BX3J6"
        icon="💻"
        highlight="確定率37%の高評価"
      />
      <AffiliateCTA
        title="【Easy factor】Fin Tech活用オンラインファクタリング"
        description="株式会社No.1が提供するFinTech型ファクタリング。見積もり申込で20,000円の高報酬案件。審査スピードが自慢。"
        buttonText="Easy factorで見積もり"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7X6OBE+4EKW+HVNAR"
        icon="⚡"
      />
      <AffiliateCTA
        title="【ネクストワン】WEB契約で資金化できる"
        description="ネクストワンはWEB完結型ファクタリング。WEB査定で20,000円、電話問合せでも20,000円の高報酬。EPC777と実績も豊富。"
        buttonText="ネクストワンに申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7VZT3U+4OCU+5ZMCH"
        icon="🌐"
        highlight="WEB完結"
      />
      <AffiliateCTA
        title="【ジャパンマネジメント】スピード審査ファクタリング"
        description="ジャパンマネジメントは新規ファクタリング契約で30,000円の最高水準報酬。スピード審査で法人経営者に人気。"
        buttonText="スピード審査を受ける"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7YDJIY+3V6A+5YJRM"
        icon="🚀"
        highlight="契約30,000円"
      />
      <AffiliateCTA
        title="【えんナビ】売掛金を即日資金化"
        description="えんナビは売掛金を即日資金化できるファクタリング。EPC293と高実績、新規問合せで15,000円。"
        buttonText="えんナビに相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7USXWA+44CA+5YJRM"
        icon="💰"
      />
    </>
  ),
  "investment-books-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">なぜ投資本を読むべきか</h2>
        <p>
          新NISAが始まり投資が身近になった今、インターネット上には玉石混交の投資情報があふれています。体系立った知識と投資哲学を身につけるには、<strong>数十万部〜数百万部売れている良書を1冊じっくり読む方が、YouTube動画100本より効率的</strong>です。本記事では、2026年最新の投資初心者向けおすすめ投資本10冊を、難易度と学べる内容別に紹介します。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>初心者向けの超入門書（お金の教科書レベル）</li>
          <li>新NISA・インデックス投資の実践書</li>
          <li>投資哲学・富裕層思考を学べる古典的名著</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天ブックスで投資本を買うメリット</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>送料無料</strong>: 1冊から送料無料（3,980円未満でも本は無料配送）</li>
            <li><strong>楽天ポイント還元</strong>: SPUで最大+0.5〜1倍、お買い物マラソンで最大10倍</li>
            <li><strong>楽天カード支払いで+1%</strong>: 楽天経済圏ユーザーはさらにお得</li>
            <li><strong>電子書籍版（楽天Kobo）も選べる</strong>: スマホ・タブレットで即読める</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">【初心者超入門】まず読むべき1冊</h2>
        <p>
          投資が初めての方は、まず<strong>お金の基礎知識（貯める・稼ぐ・増やす・守る・使う）を体系的に学べる本</strong>から始めるのが鉄則。投資手法に入る前に、家計管理・保険・税金の全体像を押さえましょう。
        </p>
      </section>
      <AffiliateCTA
        title="1位『本当の自由を手に入れる お金の大学』両@リベ大学長"
        description="YouTube登録者300万人超の大人気チャンネル「リベラルアーツ大学」学長による、お金の5つの力（貯める・稼ぐ・増やす・守る・使う）を体系的に学べる超ベストセラー。累計150万部突破。全ページフルカラー・図解中心で、投資初心者でも2〜3時間で読めます。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E6%259C%25AC%25E5%25BD%2593%25E3%2581%25AE%25E8%2587%25AA%25E7%2594%25B1%25E3%2582%2592%25E6%2589%258B%25E3%2581%25AB%25E5%2585%25A5%25E3%2582%258C%25E3%2582%258B%25E3%2581%258A%25E9%2587%2591%25E3%2581%25AE%25E5%25A4%25A7%25E5%25AD%25A6%26g%3D001"
        icon="📚"
        highlight="累計150万部"
      />
      <AffiliateCTA
        title="2位『ジェイソン流お金の増やし方』厚切りジェイソン"
        description="米IT企業役員でありタレントとしても活躍する厚切りジェイソン氏が、自身が実践するシンプルな投資術を公開。「Why Japanese people!?」のフレーズで有名な著者が、全世界株式インデックス投資を熱く推奨。100万部超えのベストセラー。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E3%2582%25B8%25E3%2582%25A7%25E3%2582%25A4%25E3%2582%25BD%25E3%2583%25B3%25E6%25B5%2581%25E3%2581%258A%25E9%2587%2591%25E3%2581%25AE%25E5%25A2%2597%25E3%2582%2584%25E3%2581%2597%25E6%2596%25B9%26g%3D001"
        icon="💰"
      />
      <AffiliateCTA
        title="3位『はじめての人のための3000円投資生活』横山光昭"
        description="家計再生コンサルタントによる、月3,000円から始める投資入門書。少額から無理なく始められる積立投資の具体的な始め方を、家計の整え方と合わせて解説。累計80万部。投資資金を捻出する方法から学びたい人に最適。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D3000%25E5%2586%2586%25E6%258A%2595%25E8%25B3%2587%25E7%2594%259F%25E6%25B4%25BB%26g%3D001"
        icon="🪙"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">【新NISA・インデックス投資】実践編</h2>
        <p>
          基礎を押さえたら次は<strong>インデックス投資の具体的な実践方法</strong>を学びます。銘柄選びのコツや新NISAの使い方、長期保有のメンタルまで、手を動かすために必要な知識が詰まった実践書を3冊紹介。
        </p>
      </section>
      <AffiliateCTA
        title="4位『ほったらかし投資術』山崎元・水瀬ケンイチ"
        description="インデックス投資のバイブル的名著。知識ゼロからインデックスファンドでの長期積立投資を始める方法を、超シンプルに解説。新NISA対応の最新版では、おすすめファンドやポートフォリオの組み方が具体的に示されています。「難しく考えずに、続けるだけ」"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E3%2581%25BB%25E3%2581%25A3%25E3%2581%259F%25E3%2582%2589%25E3%2581%258B%25E3%2581%2597%25E6%258A%2595%25E8%25B3%2587%25E8%25A1%2593%26g%3D001"
        icon="📈"
        highlight="インデックス投資の定番"
      />
      <AffiliateCTA
        title="5位『新NISA完全攻略』山口貴大（ライオン兄さん）"
        description="登録者80万人超のYouTube「Money Lion Academia」運営者による、新NISA徹底活用本。つみたて投資枠・成長投資枠の最適な使い分け、おすすめファンド、売却タイミングまで網羅。新NISAを始めたばかりの人・これから始める人必読。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E6%2596%25B0NISA%25E5%25AE%258C%25E5%2585%25A8%25E6%2594%25BB%25E7%2595%25A5%26g%3D001"
        icon="🎯"
      />
      <AffiliateCTA
        title="6位『投資の大原則』バートン・マルキール&チャールズ・エリス"
        description="世界的ベストセラー『ウォール街のランダム・ウォーカー』の著者マルキールと、『敗者のゲーム』の著者エリスの共著。2人の投資界の巨匠が、インデックス投資・分散投資・長期保有の原則を平易に解説。新書サイズで持ち運びやすいのも◎。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E6%258A%2595%25E8%25B3%2587%25E3%2581%25AE%25E5%25A4%25A7%25E5%258E%259F%25E5%2589%2587%26g%3D001"
        icon="🌍"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">【投資哲学・マインド編】長期で勝ち続けるために</h2>
        <p>
          投資で最も重要なのは<strong>マインド管理とリスクに対する正しい姿勢</strong>。暴落時にパニック売りしないため、複利の力を信じて長期保有するために、富裕層の思考法を学べる古典的名著を4冊。
        </p>
      </section>
      <AffiliateCTA
        title="7位『サイコロジー・オブ・マネー』モーガン・ハウセル"
        description="米国で100万部超のベストセラー。「投資で成功するには、頭の良さより、行動をどうコントロールできるかが重要」という視点から、お金に関する19の行動経済学を解説。初心者にも読みやすく、投資のメンタル形成に最適。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E3%2582%25B5%25E3%2582%25A4%25E3%2582%25B3%25E3%2583%25AD%25E3%2582%25B8%25E3%2583%25BC%25E3%2582%25AA%25E3%2583%2596%25E3%2583%259E%25E3%2583%258D%25E3%2583%25BC%26g%3D001"
        icon="🧠"
        highlight="全世界100万部突破"
      />
      <AffiliateCTA
        title="8位『金持ち父さん 貧乏父さん』ロバート・キヨサキ"
        description="全世界4,000万部突破の伝説的名著。「資産」と「負債」の違い、お金に働いてもらう発想、不労所得の仕組みづくりなど、富裕層マインドの基本を学べます。投資を始める前に「そもそもなぜ投資するのか」を腹落ちさせたい方に。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E9%2587%2591%25E6%258C%2581%25E3%2581%25A1%25E7%2588%25B6%25E3%2581%2595%25E3%2582%2593%25E8%25B2%25A7%25E4%25B9%258F%25E7%2588%25B6%25E3%2581%2595%25E3%2582%2593%26g%3D001"
        icon="💎"
      />
      <AffiliateCTA
        title="9位『バビロンの大富豪』ジョージ・S・クレイソン"
        description="1926年初版発刊、古代バビロニアを舞台にした寓話形式で蓄財の原則を学べる不朽の名著。「収入の10分の1を貯める」「貯めた金に働かせる」など、現代でも通用する資産形成の7つの知恵を物語で伝える。漫画版もあり読みやすい。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E3%2583%2590%25E3%2583%2593%25E3%2583%25AD%25E3%2583%25B3%25E3%2581%25AE%25E5%25A4%25A7%25E5%25AF%258C%25E8%25B1%25AA%26g%3D001"
        icon="🏺"
      />
      <AffiliateCTA
        title="10位『ウォール街のランダム・ウォーカー』バートン・マルキール"
        description="1973年初版、全世界200万部超、12版まで改訂され続けるインデックス投資の原典。『株価の動きはランダムであり、市場に勝ち続けるのは困難』という効率的市場仮説を学術的に解説。ページ数は多いが、本格的に投資を学びたい方の最終到達点。"
        buttonText="楽天ブックスで見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2Fsearch%3Fsitem%3D%25E3%2582%25A6%25E3%2582%25A9%25E3%2583%25BC%25E3%2583%25AB%25E8%25A1%2597%25E3%2581%25AE%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2580%25E3%2583%25A0%25E3%2582%25A6%25E3%2582%25A9%25E3%2583%25BC%25E3%2582%25AB%25E3%2583%25BC%26g%3D001"
        icon="🎓"
        highlight="世界的ベストセラー"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">読む順番のおすすめ</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Step1</strong>: まず『お金の大学』で全体像を把握（2〜3時間）</li>
            <li><strong>Step2</strong>: 『3000円投資生活』または『ジェイソン流』で実践編</li>
            <li><strong>Step3</strong>: 『新NISA完全攻略』『ほったらかし投資術』で具体的な銘柄選び</li>
            <li><strong>Step4</strong>: 『サイコロジー・オブ・マネー』『バビロンの大富豪』でマインド強化</li>
            <li><strong>Step5</strong>: 『ウォール街のランダム・ウォーカー』『投資の大原則』で体系的理解</li>
          </ol>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">紙の本 vs 電子書籍（楽天Kobo）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>紙の本</strong>: 書き込みができる、読み返しやすい、図解が多い本は紙が◎</li>
          <li><strong>楽天Kobo（電子）</strong>: 即日入手、スマホで通勤中に読める、場所を取らない</li>
          <li>『お金の大学』など図解中心の本は<strong>紙版がおすすめ</strong>、ビジネス書として通勤中に読むなら電子版が便利</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">まとめ｜投資本は自己投資の最初の1冊</h2>
        <p>
          投資本1冊は1,500〜2,000円程度。これを読んで年20万円の投資判断ミスを1回防げるなら、ROI（費用対効果）は100倍以上です。まずは<strong>『お金の大学』から1冊、楽天ブックスで送料無料で手に入れる</strong>ことから始めてみましょう。楽天ポイントも貯まって一石二鳥です。
        </p>
      </section>
    </>
  ),
  "net-bank-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行を選ぶ4つの比較ポイント</h2>
        <p>
          給与振込や公共料金引き落とし・投資用口座として使うメイン銀行は、<strong>金利・手数料・連携サービス・使いやすさ</strong>の4軸で選ぶのが鉄則。2026年現在、ネット銀行各社が競い合い、メガバンクより圧倒的にお得な条件が揃っています。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>普通預金金利: 0.001%（メガバンク）vs 0.1〜0.2%（ネット銀行）</li>
          <li>ATM手数料: 無料回数が月3〜11回と大差</li>
          <li>他行振込手数料: 月3〜10回無料になる銀行も</li>
          <li>証券・カード・モバイル等との連携ボーナス</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 ネット銀行おすすめ比較ランキング"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "SBI証券との連携で最強｜スマートプログラムでATM月20回無料",
            features: [
              "SBI証券との「ハイブリッド預金」で普通預金金利10倍",
              "スマートプログラムで他行振込手数料月最大20回無料",
              "外貨預金・米ドルSWIFT送金に強い",
              "デビットカード（Visa）で還元率0.6〜1%",
            ],
            href: "https://www.netbk.co.jp/contents/",
            badge: "総合No.1",
          },
          {
            name: "楽天銀行",
            rank: 2,
            highlight: "楽天証券マネーブリッジで金利0.1%｜楽天ポイント連携",
            features: [
              "マネーブリッジで普通預金金利0.1%（メガバンクの100倍）",
              "楽天ポイントで預金振替可能",
              "楽天カード引落で+1倍ポイント",
              "ハッピープログラムで他行振込無料回数増加",
            ],
            href: "https://www.rakuten-bank.co.jp/",
            badge: "楽天経済圏",
          },
          {
            name: "auじぶん銀行",
            rank: 3,
            highlight: "au PAY×au経済圏で金利最大0.33%",
            features: [
              "auマネ活プラン加入で普通預金金利0.33%",
              "au PAYチャージで残高即時反映",
              "じぶんプラスでATM・振込手数料無料",
              "三菱UFJ銀行との入出金連携",
            ],
            href: "https://www.jibunbank.co.jp/",
            badge: "au経済圏最強",
          },
          {
            name: "PayPay銀行",
            rank: 4,
            highlight: "PayPayとの瞬時チャージ｜ソフトバンク経済圏",
            features: [
              "PayPayアプリから瞬時にチャージ可能",
              "Tポイント・PayPayポイント連携",
              "Visaデビットカード付帯",
              "アプリの操作性が国内トップクラス",
            ],
            href: "https://www.paypay-bank.co.jp/",
            badge: "PayPay連携",
          },
          {
            name: "ソニー銀行",
            rank: 5,
            highlight: "外貨預金11通貨対応｜Sony Bank WALLET",
            features: [
              "外貨預金の為替手数料が業界最安水準",
              "11通貨対応でUSD・EUR・AUD投資に便利",
              "Sony Bank WALLETで海外旅行時に現地通貨決済",
              "住宅ローン金利が競争力あり",
            ],
            href: "https://moneykit.net/",
            badge: "外貨最強",
          },
        ]}
      />
      <AffiliateCTA
        title="【住信SBIネット銀行】A8.net承認済の公式口座開設"
        description="新規口座開設で成果発生。SBI証券との連携で普通預金金利が10倍、ハイブリッド預金・スマートプログラムが最強。投資初心者の第一歩に。"
        buttonText="住信SBIネット銀行に口座開設"
        href="https://www.netbk.co.jp/contents/"
        icon="🏦"
        highlight="金利10倍＋ATM月20回無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">目的別おすすめネット銀行</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>新NISA・投資メイン</strong>: 住信SBIネット銀行（SBI証券連携）or 楽天銀行（楽天証券連携）</li>
            <li><strong>楽天経済圏ユーザー</strong>: 楽天銀行（SPU対象）</li>
            <li><strong>au・UQユーザー</strong>: auじぶん銀行（金利0.33%）</li>
            <li><strong>PayPayユーザー</strong>: PayPay銀行</li>
            <li><strong>外貨投資・海外送金</strong>: 住信SBI or ソニー銀行</li>
            <li><strong>給与振込サブ口座</strong>: 大和コネクト銀行（セブン銀行ATM無料）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">メガバンクからネット銀行へ乗り換える手順</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>ネット銀行で新規口座開設（最短当日、本人確認書類のみ）</li>
          <li>給与振込先を会社に変更申請（1ヶ月前）</li>
          <li>公共料金・クレカ引落を新口座に変更（マネーフォワード等で棚卸し）</li>
          <li>メガバンク口座は緊急用サブ口座として残す</li>
          <li>投資用・生活費・緊急資金の3口座体制に整理</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>24時間365日稼働だがシステムメンテ時間あり</li>
          <li>紙通帳なし（アプリ・PCで明細確認）</li>
          <li>実店舗・ATMなし（提携ATMで入出金）</li>
          <li>住宅ローン・大口取引は審査が厳しい場合も</li>
        </ul>
      </section>
    </>
  ),
  "rakuten-economic-zone-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏とは？年10万ポイント獲得も可能</h2>
        <p>
          楽天経済圏とは、<strong>楽天カード・楽天銀行・楽天証券・楽天モバイル・楽天市場など楽天のサービスを複数使い、SPU（スーパーポイントアッププログラム）で倍率を最大化してポイントを稼ぐ仕組み</strong>。ヘビーユーザーは年10〜30万ポイントを獲得し、実質的な生活費圧縮を実現しています。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">SPU倍率を最大化する10のサービス</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>楽天モバイル</strong>: +4倍（Rakuten最強プラン契約）</li>
            <li><strong>楽天カード（通常）</strong>: +1倍（自動的に付与）</li>
            <li><strong>楽天ゴールド/プレミアム</strong>: さらに+1〜2倍</li>
            <li><strong>楽天銀行+楽天カード引落</strong>: +0.5倍</li>
            <li><strong>楽天証券（米国株2,000円取引）</strong>: +0.5倍</li>
            <li><strong>楽天証券（投信3万円買付）</strong>: +0.5倍</li>
            <li><strong>楽天ウォレット（2,500円）</strong>: +0.5倍</li>
            <li><strong>楽天モバイルキャリア決済</strong>: +0.5倍</li>
            <li><strong>楽天トラベル</strong>: +1倍（月1回5,000円予約）</li>
            <li><strong>楽天ブックス・Kobo</strong>: 各+0.5倍（月1回購入）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年10万ポイント達成の戦略</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>SPU倍率を10倍以上にキープ</strong>: 楽天モバイル+ゴールドカード+楽天証券+楽天銀行で常時+7倍</li>
          <li><strong>お買い物マラソン月1回参加</strong>: 10店舗買い回りで+9倍（最大+10倍）</li>
          <li><strong>0・5のつく日にエントリー</strong>: +2倍</li>
          <li><strong>ふるさと納税は楽天市場で</strong>: 年5万円納税で5,000〜1.5万ポイント</li>
          <li><strong>楽天カード新規入会キャンペーン活用</strong>: 5,000〜8,000P</li>
        </ol>
      </section>
      <AffiliateCTA
        title="楽天市場で買う前に楽天ブックスを覗く"
        description="書籍・雑誌・Kobo電子書籍は送料無料＆ポイント還元。SPU対象なので月1冊購入でSPU+0.5倍が永続。"
        buttonText="楽天ブックスで探す"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2F"
        icon="📚"
        highlight="SPU+0.5倍"
      />
      <AffiliateCTA
        title="楽天市場でふるさと納税"
        description="ふるなび・さとふる等と違い、楽天市場のふるさと納税は楽天ポイント還元が乗る。SPU10倍なら実質10%還元。"
        buttonText="楽天ふるさと納税を見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2F"
        icon="🎁"
        highlight="10%還元相当"
      />
      <AffiliateCTA
        title="マルイ系で圧倒的｜エポスカード（年会費無料）"
        description="楽天経済圏ユーザーでも、マルイOIOIやエポス優待店を使うならエポスカードは必携。年会費永年無料、海外旅行保険自動付帯、新規入会で最大2,000円相当プレゼント。"
        buttonText="エポスカードに無料申込"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+MMIJE+38L8+BY641"
        icon="💳"
        highlight="年会費無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏のデメリット・注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>SPU条件が頻繁に改悪される（要定期チェック）</li>
          <li>楽天モバイルは地方で電波が弱い場合あり</li>
          <li>期間限定ポイントの失効に注意（使い忘れ厳禁）</li>
          <li>不要なモノを買うと本末転倒（必要な買い物のみ楽天で集約）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏 vs PayPay経済圏 vs au経済圏</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>楽天経済圏</strong>: EC・投資・金融がバランス良く◎（本記事のメイン）</li>
            <li><strong>PayPay経済圏</strong>: QRコード決済最強、Yahoo!ショッピング・LYPプレミアム</li>
            <li><strong>au経済圏（Ponta）</strong>: auじぶん銀行の金利0.33%が強力、ローソンヘビーユーザー向け</li>
            <li><strong>dポイント経済圏</strong>: docomoユーザー向け、マツキヨ等で強い</li>
          </ul>
        </div>
      </section>
    </>
  ),
  "investment-fund-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資信託選びで見るべき3つのポイント</h2>
        <p>
          新NISAで投資信託を選ぶ際、初心者は「なんとなく人気の銘柄」で決めがちですが、<strong>信託報酬（年間コスト）・運用実績（トラッキングエラー）・純資産総額（流動性）</strong>の3点を必ずチェックしましょう。この3点が揃っていれば、20年後のリターンに数百万円の差が生まれます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 新NISAで人気の投資信託ランキング"
        services={[
          {
            name: "eMAXIS Slim 全世界株式（オール・カントリー）",
            rank: 1,
            highlight: "世界約2,900銘柄に分散｜信託報酬0.05775%",
            features: [
              "MSCI ACWI連動、先進国＋新興国の全世界株",
              "信託報酬業界最安水準（0.05775%）",
              "純資産5兆円超、日本で最も買われている投信",
              "1本でグローバル分散、初心者の第一候補",
            ],
            href: "https://emaxis.jp/fund/253425.html",
            badge: "不動の王者",
          },
          {
            name: "eMAXIS Slim 米国株式（S&P500）",
            rank: 2,
            highlight: "米国大型500銘柄｜信託報酬0.09372%",
            features: [
              "S&P500連動、過去30年の年平均リターン約10%",
              "GAFAM・エヌビディア等の米国大型株",
              "純資産3兆円超、オルカンに次ぐ人気",
              "シンプルに米国経済成長に賭けたい方向け",
            ],
            href: "https://emaxis.jp/fund/253266.html",
            badge: "米国特化",
          },
          {
            name: "SBI・V・S&P500 インデックスファンド",
            rank: 3,
            highlight: "バンガード社ETF経由｜信託報酬0.0938%",
            features: [
              "バンガードVOOへの実質投資",
              "信託報酬・実質コストともに最安水準",
              "SBI証券で買うならeMAXIS Slim S&P500より安い場合も",
              "米国株投資の王道銘柄",
            ],
            href: "https://www.sbiam.co.jp/fund/detail.html?fund_code=9I412172",
            badge: "コスト最安",
          },
          {
            name: "ニッセイ・NASDAQ100インデックスファンド",
            rank: 4,
            highlight: "米国ハイテク100銘柄｜信託報酬0.2035%",
            features: [
              "NASDAQ100連動、アップル・マイクロソフト・エヌビディア中心",
              "S&P500より高リターン・高ボラティリティ",
              "10年積立で年15%超のリターン実績",
              "成長重視の若手投資家向け",
            ],
            href: "https://www.nam.co.jp/fundinfo/nn100/",
            badge: "成長株重視",
          },
          {
            name: "楽天・全米株式インデックスファンド（VTI）",
            rank: 5,
            highlight: "米国全上場約4,000銘柄｜信託報酬0.162%",
            features: [
              "バンガードVTIへの実質投資",
              "S&P500より分散度が高い（中小型も含む）",
              "楽天証券でのクレカ積立と好相性",
              "SPU対象銘柄",
            ],
            href: "https://www.rakuten-toushin.co.jp/fund/nomination/usa/",
            badge: "楽天証券向け",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">初心者向け：オルカン vs S&P500 どちらを選ぶ？</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>オルカン派の理由</strong>: 世界分散で米国一極集中リスクを回避、30〜50年の超長期投資</li>
            <li><strong>S&P500派の理由</strong>: 過去リターンがオルカンより高い、米国経済一強を信じる</li>
            <li><strong>結論</strong>: 迷ったらオルカン100%、攻めるならS&P500:オルカン=50:50</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAでの投資信託活用法</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>つみたて投資枠（年120万円）</strong>: オルカン or S&P500を月10万円積立</li>
          <li><strong>成長投資枠（年240万円）</strong>: NASDAQ100・新興国株・個別株でリターン狙い</li>
          <li><strong>生涯1,800万円枠</strong>: 満額使えば20年後に4,000〜5,000万円（年利5%想定）</li>
          <li><strong>クレカ積立活用</strong>: 月10万円まで、三井住友ゴールドで1%還元</li>
        </ol>
      </section>
      <AffiliateCTA
        title="【DMM 株】で投資信託も買える"
        description="DMM 株はNISA対応、投資信託の取扱本数は限定的だがS&P500連動ETFが買える。口座開設は最短即日。"
        buttonText="DMM 株で口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="📊"
        highlight="NISA対応"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">投資信託で避けるべき地雷銘柄</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>信託報酬1%超えのアクティブファンド（長期でインデックスに負ける）</li>
          <li>毎月分配型（元本取り崩しで複利が効かない）</li>
          <li>テーマ型（AI・EV・メタバース等）の一発狙い</li>
          <li>ブル・ベア型レバレッジETF（減価の罠）</li>
        </ul>
      </section>
    </>
  ),
  "insurance-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員は本当に生命保険が必要か？</h2>
        <p>
          結論から言うと、<strong>独身・DINKsは生命保険ほぼ不要、子供がいる家庭は掛け捨て定期保険のみ</strong>が鉄則。日本の公的保障（健康保険・遺族年金・障害年金）は手厚く、多くの人は民間保険で過剰な保障を買いすぎています。必要な保障額を冷静に計算しましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年代・家族構成別の最適保険設計</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>20代独身</strong>: 県民共済2,000円のみ（医療+死亡のミニマム）</li>
            <li><strong>30代DINKs</strong>: 就業不能保険＋医療保険（夫婦各3,000円）</li>
            <li><strong>子供0〜2人の家庭</strong>: 収入保障保険（月10万円・65歳まで）+ 医療保険</li>
            <li><strong>40〜50代</strong>: がん保険＋就業不能保険で重点絞る</li>
            <li><strong>60代以降</strong>: 高額療養費制度でほぼカバー、保険卒業</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">公的保障で受けられる金額</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>遺族基礎年金: 子1人で年100万円・18歳までの子供数で増加</li>
          <li>遺族厚生年金: 平均月収の約3/4を遺族が受給</li>
          <li>傷病手当金: 給与の2/3を最長1年6ヶ月</li>
          <li>高額療養費制度: 月収50万円の人なら自己負担上限約9万円/月</li>
          <li>障害年金: 障害等級により年80〜150万円</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">保険見直しで年20万円の節約も可能</h2>
        <p>
          40代会社員が「死亡保障3,000万円・医療保険入院日額1万円・がん保険」をフルセット加入していると、月保険料は約3〜5万円。これを<strong>必要最小限に見直せば月1〜2万円に圧縮、年20〜40万円が浮き、そのまま投資に回せます</strong>。
        </p>
      </section>
      <AffiliateCTA
        title="無料保険相談で見直し診断を受ける"
        description="独立系FPによる無料保険相談。現在加入中の保険の過不足を診断し、公的保障を考慮した最適なプランを提案。対面・オンライン選択可。"
        buttonText="無料相談を予約する"
        href="/guide/insurance-optimization-guide"
        external={false}
        icon="🛡️"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">保険選びの5つのルール</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>貯蓄型保険（終身・学資・個人年金）より新NISAの方が高リターン</li>
          <li>保険ショップ（複数社扱い）で比較見積もり</li>
          <li>営業担当者のおすすめは「販売手数料の高い商品」の可能性あり</li>
          <li>特約はつけすぎない（シンプルな主契約のみで十分）</li>
          <li>10年ごとに見直し（ライフステージ変化で必要保障が変わる）</li>
        </ol>
      </section>
    </>
  ),
  "tax-saving-salary-income": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員でも合法的に節税できる10の方法</h2>
        <p>
          「節税は自営業者の特権」と思われがちですが、会社員でも<strong>iDeCo・新NISA・ふるさと納税・医療費控除・特定支出控除</strong>などを組み合わせれば、年20〜50万円の節税＋手取りアップが可能。2026年最新の制度を使い切りましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税効果ランキング（年間）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>iDeCo</strong>: 掛金全額所得控除、年27.6万円（会社員月2.3万円）で税率20%なら年5.5万円節税</li>
            <li><strong>ふるさと納税</strong>: 実質2,000円で返礼品（年収500万円で6万円上限、ほぼ節税効果）</li>
            <li><strong>新NISA</strong>: 配当・売却益が非課税（年20〜30万円節税相当、長期で数百万円）</li>
            <li><strong>生命保険料控除</strong>: 年最大12万円所得控除</li>
            <li><strong>医療費控除</strong>: 家族合算で年10万円超の医療費</li>
            <li><strong>特定支出控除</strong>: 研修費・資格取得費・転居費等（給与所得控除額の1/2超）</li>
            <li><strong>住宅ローン控除</strong>: 年末残高の0.7%を最大13年間</li>
            <li><strong>地震保険料控除</strong>: 年5万円まで</li>
            <li><strong>小規模企業共済</strong>: 副業・フリーランス向け（月7万円まで）</li>
            <li><strong>副業経費計上</strong>: 青色申告65万円控除+実経費</li>
          </ol>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo＋新NISA＋ふるさと納税の3点セット</h2>
        <p>
          年収500〜1,000万円の会社員が最初に押さえるべきは<strong>iDeCo（月2.3万円）+ 新NISA（月10万円）+ ふるさと納税（年6〜15万円）</strong>の3点セット。これだけで年30万円超の節税＋資産形成効果があります。
        </p>
      </section>
      <AffiliateCTA
        title="iDeCoならSBI証券or 楽天証券 or マネックスから"
        description="iDeCo口座は運営管理手数料が無料の主要ネット証券がおすすめ。取扱銘柄・年金受取時の選択肢を事前に比較。"
        buttonText="iDeCo比較記事を読む"
        href="/guide/ideco-broker-comparison"
        external={false}
        icon="🏦"
      />
      <AffiliateCTA
        title="ふるさと納税は楽天市場でSPU10倍還元"
        description="同じ寄附額でも、楽天市場経由ならSPU倍率分がポイントバック。年6万円寄付で6,000ポイント相当が戻る計算。"
        buttonText="楽天ふるさと納税を見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2F"
        icon="🎁"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">確定申告で還付を受けるケース</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>医療費控除（年10万円超 or 所得の5%超）</li>
          <li>ふるさと納税を6自治体以上（ワンストップ特例不可）</li>
          <li>寄附金控除（認定NPO・政党等）</li>
          <li>住宅ローン控除（1年目のみ）</li>
          <li>副業所得20万円超</li>
          <li>投資損益の損益通算・繰越控除</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税額シミュレーション例（年収600万円・家族4人）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li>iDeCo月2.3万円: 年27.6万円控除→<strong>年5.5万円節税</strong></li>
            <li>ふるさと納税7万円: 実質2,000円で約2.5万円相当返礼品→<strong>年2.3万円得</strong></li>
            <li>生命保険料控除: 年4万円控除→<strong>年8,000円節税</strong></li>
            <li>新NISA月10万円積立で年8%運用: 20年後<strong>非課税で500万円以上の運用益</strong></li>
            <li><strong>合計: 年間約8万円節税＋長期で数百万円の運用益非課税</strong></li>
          </ul>
        </div>
      </section>
    </>
  ),
  "mortgage-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">住宅ローンで人生のコストが最大1,000万円変わる</h2>
        <p>
          住宅ローンは多くの人にとって人生最大の買い物。3,500万円を35年借りる場合、<strong>金利0.3%と1.5%では総返済額が約650万円も違います</strong>。さらに団信・事務手数料・繰上返済の条件を加えると、最適な選択で総コストは1,000万円単位で動きます。2026年はネット銀行金利が歴史的低水準、比較する価値が最も高いタイミングです。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ネット銀行の住宅ローンおすすめランキング"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "変動0.298%｜全疾病団信0円｜ネット手続き完結",
            features: [
              "変動金利：業界最安水準0.298%〜",
              "40種類以上の疾病保障付き団信が無料付帯",
              "繰上返済手数料0円・何度でも無料",
              "ネット完結で来店不要、書類もアップロード",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3TDBVB+99J9MY+50+2HEFRR",
            badge: "総合No.1",
          },
          {
            name: "auじぶん銀行",
            rank: 2,
            highlight: "変動0.329%｜がん50%保障団信が無料",
            features: [
              "KDDI・三菱UFJ銀行系で安心",
              "がん50%保障＋全疾病長期入院保障が無料付帯",
              "auユーザーは金利優遇あり",
              "スマホアプリで繰上返済が即実行",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3ZCOXE+96LG9M+50+2HE0PB",
            badge: "団信最強",
          },
          {
            name: "楽天銀行",
            rank: 3,
            highlight: "フラット35シェアNo.1｜事務手数料定額",
            features: [
              "フラット35の取扱シェア業界トップクラス",
              "融資事務手数料が定額（借入額に応じない）",
              "楽天会員なら事務手数料優遇あり",
              "借換えにも強い",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBJZZ+CG4HT6+3AYK+5YZ77",
            badge: "フラット35向け",
          },
          {
            name: "PayPay銀行",
            rank: 4,
            highlight: "変動0.330%｜がん50%保障団信を標準搭載",
            features: [
              "がん50%保障団信が無料で付帯",
              "一般団信・ワイド団信も金利上乗せなし",
              "スマホで審査〜契約まで完結",
              "他行から借り換え需要も増加",
            ],
            href: "https://www.paypay-bank.co.jp/mortgage/",
            badge: "がん保障特化",
          },
          {
            name: "ARUHI フラット35",
            rank: 5,
            highlight: "フラット35取扱件数13年連続No.1",
            features: [
              "自営業・転職直後でも審査に通りやすい",
              "頭金1割以上で金利優遇（ARUHIスーパーフラット）",
              "返済中に金利が上がらない安心感",
              "全国170以上の店舗で対面相談可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBJZZ+F0WK9E+4AUG+5YZ77",
            badge: "審査通りやすさ重視",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">変動金利 vs 固定金利、どちらを選ぶ？</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>変動金利派（約7割）</strong>: 金利が低く、当面の返済を軽くしたい。繰上返済で完済を早められる余力がある</li>
            <li><strong>10年固定派</strong>: 教育費ピークの10年を金利固定で乗り切り、その後変動に切替</li>
            <li><strong>フラット35派</strong>: 自営業・転職直後・将来金利上昇が不安な方。返済額が35年固定で家計管理が楽</li>
            <li><strong>結論</strong>: 繰上返済できる余裕があるなら変動、無理なら固定で家計を守る</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="モゲチェックで一括仮審査【完全無料】"
        description="年収・借入希望額を入力するだけで、最大5社の住宅ローン金利・諸費用を一括比較。AIが最安プランを診断、借り換えシミュレーションも無料。"
        buttonText="モゲチェックで無料診断"
        href="https://px.a8.net/svt/ejp?a8mat=3HBJZZ+9OD3ZM+3Y0C+5YZ75"
        icon="🏠"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">住宅ローン控除で13年間の節税</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年末残高の0.7%を所得税から控除（最大13年）</li>
          <li>省エネ住宅なら借入上限4,500万円、一般住宅3,000万円</li>
          <li>3,500万円借入なら初年度約24.5万円の還付</li>
          <li>13年間の合計で250〜300万円の節税効果</li>
          <li>初年度のみ確定申告、2年目以降は年末調整で対応可</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">団信（団体信用生命保険）で損しない選び方</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>一般団信（無料）</strong>: 死亡・高度障害のみカバー、最低限必要</li>
          <li><strong>がん50%保障（無料付帯が増加）</strong>: がん診断で残高半減、住信SBI・auじぶん・PayPayが無料</li>
          <li><strong>3大疾病・8大疾病（金利+0.2〜0.3%）</strong>: 余裕があればつけたい</li>
          <li><strong>全疾病保障（無料の銀行あり）</strong>: 就業不能リスクをカバー、住信SBIが無料で最強</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">借り換えで月2〜3万円返済額を減らす</h2>
        <p>
          残高1,500万円以上・残期間10年以上・金利差1%以上の条件が揃うと、借り換えで<strong>総返済額を数百万円減らせるケースも多数</strong>。借換え諸費用（50〜80万円）を差し引いても十分にメリットが出ます。まず無料一括シミュレーションで現状を把握しましょう。
        </p>
      </section>
    </>
  ),
  "medical-insurance-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医療保険は本当に必要か？まず公的保障を知る</h2>
        <p>
          日本は国民皆保険制度により、医療費の自己負担は原則3割、さらに高額療養費制度で<strong>月収50万円の会社員なら自己負担上限は約9万円/月</strong>。長期入院でも年間100万円程度でカバーされる計算です。まずは公的保障を理解したうえで、本当に必要な民間保険を最小限だけ選ぶのが鉄則です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 医療保険・がん保険おすすめランキング"
        services={[
          {
            name: "オリックス生命 CURE Next",
            rank: 1,
            highlight: "月1,500円〜｜七大疾病入院無制限｜終身保障",
            features: [
              "入院給付金日額5,000円〜10,000円",
              "七大生活習慣病で入院日数無制限",
              "先進医療給付金（通算2,000万円まで）",
              "保険料終身一定・オンライン見積もり無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBJZZ+DG4ERM+2UTC+5YZ75",
            badge: "シンプル最強",
          },
          {
            name: "チューリッヒ生命 終身ガン治療保険プレミアムZ",
            rank: 2,
            highlight: "がん治療を回数無制限でカバー｜保険料割安",
            features: [
              "抗がん剤・ホルモン剤治療を月10万円給付",
              "放射線治療・自由診療のがん治療もサポート",
              "診断一時金100万円を複数回受け取り可",
              "他社より保険料20%以上安い",
            ],
            href: "https://www.zurichlife.co.jp/products/premiumz",
            badge: "がん特化",
          },
          {
            name: "アフラック EVER Prime",
            rank: 3,
            highlight: "短期入院・日帰り手術にも強い｜業界定番",
            features: [
              "日帰り入院から給付対象（5日分保障）",
              "七大生活習慣病の入院給付日数無制限",
              "女性疾病特約でより手厚い保障",
              "アフラックは医療保険シェアNo.1",
            ],
            href: "https://www.aflac.co.jp/medical/ever_prime/",
            badge: "短期入院◎",
          },
          {
            name: "メディケア生命 メディフィットA",
            rank: 4,
            highlight: "住友生命グループ｜通算1,095日まで保障",
            features: [
              "住友生命グループで信頼性◎",
              "入院通算1,095日まで保障（業界最高水準）",
              "七大生活習慣病入院無制限",
              "先進医療特約で2,000万円保障",
            ],
            href: "https://www.medicarelife.com/product/medifitA/",
            badge: "長期入院保障",
          },
          {
            name: "都道府県民共済",
            rank: 5,
            highlight: "月2,000円で入院＋死亡｜割戻金で実質月1,300円",
            features: [
              "総合保障2型で月2,000円（20〜64歳）",
              "入院日額1日5,000円〜10,000円",
              "毎年30%前後の割戻金で実質負担減",
              "営利目的でないため保険料が圧倒的に安い",
            ],
            href: "https://www.kyosai-cc.or.jp/",
            badge: "最安",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年代別の最適な医療保険設計</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>20代独身</strong>: 県民共済2,000円 or オリックス月1,500円の入院のみ</li>
            <li><strong>30代DINKs</strong>: 入院日額5,000円＋がん診断一時金100万円</li>
            <li><strong>40代子育て世帯</strong>: 医療+がん+就業不能（3点で月5,000〜7,000円）</li>
            <li><strong>50代プレ退職</strong>: がん・三大疾病の一時金中心（治療資金確保）</li>
            <li><strong>60代以降</strong>: 高額療養費制度でカバー、民間保険卒業も検討</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="保険見直しラボで無料相談【オンラインOK】"
        description="30社以上から中立的に提案するFP相談。現在加入中の保険の過不足を診断し、公的保障も考慮した最適プランを提案。相談無料・勧誘なしで安心。"
        buttonText="無料保険相談を予約"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+73A1FM+3UXW+60WNR"
        icon="🛡️"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">医療保険でよくある「入りすぎ」の典型例</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>入院日額15,000円以上（日本の入院は平均16日、そこまで必要ない）</li>
          <li>貯蓄型医療保険（保険料が高額、新NISAの方が有利）</li>
          <li>三大疾病・七大疾病・八大疾病の重複特約</li>
          <li>女性疾病特約（一般の医療保険で大半カバー可）</li>
          <li>通院特約（実費が少額で元が取れにくい）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">見直しで年10〜30万円節約→新NISA投資へ</h2>
        <p>
          40代夫婦が「医療保険＋がん保険＋就業不能＋特約フル」で月3〜5万円払っているケースは珍しくありません。<strong>最小限の保障（夫婦で月1〜1.5万円）</strong>に絞り込めば、浮いたお金を新NISAで運用することで、20年で1,000万円超の資産形成が可能になります。
        </p>
      </section>
    </>
  ),
  "investing-50s-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">50代からでも遅くない、10年で1,500万円を作る現実解</h2>
        <p>
          50代はセカンドライフまで残り10〜15年、老後資金の最終仕上げの時期です。<strong>月10万円積立×年利5%×10年で約1,550万円</strong>、退職金2,000万円と合わせれば夫婦2人の老後資金3,500〜4,000万円が現実的に作れます。ただし20〜30代とは異なり、<strong>リスク管理を強めた守備的な運用</strong>が大前提です。
        </p>
      </section>
      <ComparisonTableCTA
        title="50代向け 新NISA活用と証券会社おすすめ"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "投信・米国株・債券まで品揃え最強",
            features: [
              "つみたて投資枠でオルカン・S&P500",
              "成長投資枠で高配当株・米国ETF",
              "米ドル建て債券で安定利回り4%超",
              "三井住友ゴールドカード積立で1%還元",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "総合No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天ポイント再投資・操作画面が平易",
            features: [
              "楽天カード積立で最大1%還元",
              "操作画面が初心者向けで50代にも優しい",
              "日経新聞電子版が無料で読める",
              "楽天銀行との連携で預金金利0.18%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "使いやすさ",
          },
          {
            name: "ウェルスナビ",
            rank: 3,
            highlight: "完全おまかせでリスク調整自動",
            features: [
              "年齢に応じたリスク低減を自動実施",
              "世界分散ETFで手堅く運用",
              "新NISA対応の「おまかせNISA」",
              "手数料1%（3,000万円超は0.5%）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+6FQUZ6+3EC2+60OXE",
            badge: "おまかせ派",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">50代の理想的ポートフォリオ（保守〜標準〜積極）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>保守型（リスク許容度低）</strong>: 株式30% / 債券50% / 現金20%</li>
            <li><strong>標準型</strong>: 株式50% / 債券30% / 現金20%</li>
            <li><strong>積極型（定年後も運用継続）</strong>: 株式70% / 債券20% / 現金10%</li>
            <li><strong>年齢別目安</strong>: 「100-年齢=株式比率」の簡易ルールも参考に</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">50代こそ新NISAの成長投資枠を使い切る</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>つみたて投資枠 月10万円</strong>: オルカン or S&P500で10年積立</li>
          <li><strong>成長投資枠 年240万円</strong>: 高配当日本株・米国ETF（VYM/HDV/SPYD）</li>
          <li><strong>退職金の一部を一括投資</strong>: 1,000万円を一括＋残りを月50万円×24ヶ月で時間分散</li>
          <li><strong>5年で1,800万円枠を埋め切る計画</strong>: 50代後半からのフル活用</li>
        </ol>
      </section>
      <AffiliateCTA
        title="退職金の受取前に無料相談｜IFAナビ"
        description="退職金2,000万円を預金で寝かせると実質目減り。独立系FPが運用プランを無料提案、金融機関のポジショントークに騙されない中立的アドバイス。"
        buttonText="無料で相談する"
        href="/guide/insurance-optimization-guide"
        external={false}
        icon="🎯"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">60歳以降の出口戦略</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>60歳：iDeCoを一時金で受取（退職所得控除で税金ゼロに）</li>
          <li>60〜65歳：働き続けるなら新NISAは取り崩さない</li>
          <li>65歳：年金受給開始、取崩しは年4%ルールで</li>
          <li>70歳：繰下げ受給で年金を最大42%増額</li>
          <li>75歳：繰下げ最大84%増、長寿リスクに備える</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">50代がやってはいけない投資</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>レバレッジ商品（レバナス・ブル/ベア型）</li>
          <li>個別株への集中投資（10年後を読めない企業への全力買い）</li>
          <li>毎月分配型投資信託（元本取り崩しで複利効かず）</li>
          <li>退職金詐欺まがいの「一括100%株式投資」勧誘</li>
          <li>FX・仮想通貨ハイレバ（短期で資産を失うリスク）</li>
        </ul>
      </section>
    </>
  ),
  "nisa-ideco-combined-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAとiDeCoは「併用」が正解</h2>
        <p>
          新NISAとiDeCoは競合ではなく補完関係。<strong>iDeCoで節税しながら、新NISAで非課税運用する</strong>のが会社員にとって最強の資産形成法です。iDeCoは掛金全額が所得控除（年収500万円なら年5.5万円節税）、新NISAは運用益が生涯非課税。使い切れば30年で6,000万円超の老後資産が現実的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAとiDeCoの違いを一覧で理解</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>新NISA</strong>: 年360万円・生涯1,800万円枠、いつでも引出し可、節税は運用益のみ</li>
            <li><strong>iDeCo</strong>: 年14.4〜81.6万円（職業別）、60歳まで引出不可、掛金全額所得控除</li>
            <li><strong>共通点</strong>: 運用益非課税、自分で商品選択、長期積立に向く</li>
            <li><strong>併用する理由</strong>: iDeCoは節税、新NISAは流動性、両取りで最大効率</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="NISA×iDeCo 併用におすすめネット証券"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "NISA・iDeCo 両方で取扱最多",
            features: [
              "iDeCoの運営管理手数料 0円",
              "新NISA つみたて対応投信2,000本以上",
              "三井住友ゴールドカード積立で1%還元",
              "iDeCoはeMAXIS Slimシリーズ全対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "両取りNo.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "iDeCo・NISAで楽天ポイント連携",
            features: [
              "iDeCo運営管理手数料 0円",
              "楽天カード積立で最大1%ポイント還元",
              "楽天証券ポイントで投資可",
              "iDeCoはeMAXIS Slim・楽天オルカン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "ポイント派",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "米国株に強い｜iDeCoも充実",
            features: [
              "iDeCo運営管理手数料 0円",
              "マネックスカード積立で1.1%還元（業界最高）",
              "米国株の取扱銘柄数が業界トップクラス",
              "iDeCo銘柄でNASDAQ100対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5FQQ1E+348+62TZF",
            badge: "クレカ還元率No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の最適配分シミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>年収500万円・独身</strong>: iDeCo 月2.3万円＋新NISA 月5〜7万円</li>
            <li><strong>年収800万円・夫婦</strong>: iDeCo 月2.3万円＋新NISA 月10万円（クレカ積立上限まで）</li>
            <li><strong>年収1,200万円・子育て世帯</strong>: iDeCo満額＋新NISA月30万円（5年で枠使い切り）</li>
            <li><strong>共働き夫婦</strong>: 各自iDeCo＋新NISAをフル活用（世帯で年840万円投資可）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">優先順位の原則</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>1位：企業型DCのマッチング拠出</strong>: あれば満額（会社の退職金＋自分の掛金）</li>
          <li><strong>2位：iDeCo（会社員月2.3万円）</strong>: 節税効果が即時性◎、30年で数百万円の差</li>
          <li><strong>3位：新NISA つみたて投資枠</strong>: 月10万円までクレカ積立推奨</li>
          <li><strong>4位：新NISA 成長投資枠</strong>: 余剰資金で高配当株・米国ETF</li>
          <li><strong>5位：特定口座</strong>: 両方使い切ってもまだ資金があれば</li>
        </ol>
      </section>
      <AffiliateCTA
        title="iDeCo口座はSBI証券なら手数料0円"
        description="iDeCoは運営管理手数料が運用成績を左右する最重要ポイント。SBI証券は運営管理手数料0円＋取扱銘柄業界最多で、長期で数十万円の差がつく。"
        buttonText="SBI証券でiDeCo申込"
        href="https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT"
        icon="🏦"
        highlight="手数料0円"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">30年で作れる資産シミュレーション</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>iDeCo 月2.3万円×30年×年5%＝<strong>約1,915万円</strong>（節税累計165万円）</li>
          <li>新NISA 月10万円×15年＋保持15年×年5%＝<strong>約4,160万円</strong></li>
          <li>合計：<strong>約6,075万円</strong>（老後資金2,000万円問題を完全解決）</li>
          <li>運用益にかかる税金（約20%）が非課税なので、課税口座比で約1,000万円有利</li>
        </ul>
      </section>
    </>
  ),
  "retirement-2000-man-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">老後2000万円問題の真実と世帯別の必要額</h2>
        <p>
          2019年の金融庁報告書で話題になった「老後2000万円問題」。これは<strong>夫65歳・妻60歳の夫婦モデルで、公的年金だけでは月5.5万円の赤字、30年間で約2,000万円不足</strong>するという試算でした。しかし現実は世帯によって大きく違い、<strong>独身なら1,500万円、夫婦なら2,500〜3,500万円が必要</strong>というのが2026年時点の現実的な目安です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">世帯別 老後必要資金の目安</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>独身（厚生年金受給）</strong>: 生活費月18万円、年金月14万円＝月4万円不足、30年で1,440万円</li>
            <li><strong>独身（国民年金のみ）</strong>: 年金月6.5万円、不足額月12万円、30年で4,320万円</li>
            <li><strong>夫婦（共に厚生年金）</strong>: 生活費月27万円、年金月22万円＝月5万円不足、30年で1,800万円</li>
            <li><strong>夫婦（厚生＋国民）</strong>: 年金月16万円、不足額月11万円、30年で3,960万円</li>
            <li><strong>ゆとりある老後</strong>: 月37万円必要（生命保険文化センター調査）→夫婦で5,000万円超</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="老後資金準備におすすめの新NISA・iDeCo口座"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "新NISA・iDeCo両方で手数料最強",
            features: [
              "新NISA つみたて投資枠でオルカン・S&P500",
              "iDeCo運営管理手数料 0円",
              "三井住友ゴールドカード積立で1%還元",
              "退職金運用の米ドル建て債券も豊富",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "総合No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天カード積立＋楽天ポイント投資",
            features: [
              "楽天カード積立で1%還元",
              "楽天証券ポイントで投資可",
              "日経新聞電子版が無料",
              "楽天銀行マネーブリッジで預金金利0.18%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "ポイ活派",
          },
          {
            name: "ウェルスナビ",
            rank: 3,
            highlight: "おまかせ運用で手間ゼロ",
            features: [
              "年齢リスクに応じた自動資産配分",
              "リバランス自動化で手間なし",
              "新NISA対応「おまかせNISA」",
              "手数料1%（3,000万円超は0.5%）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+6FQUZ6+3EC2+60OXE",
            badge: "おまかせ派",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢別 月いくら積立すれば3,000万円作れる？</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>25歳開始（40年運用）</strong>: 月2万円×年5%＝約3,100万円</li>
            <li><strong>35歳開始（30年運用）</strong>: 月3.5万円×年5%＝約2,920万円</li>
            <li><strong>45歳開始（20年運用）</strong>: 月7.3万円×年5%＝約3,000万円</li>
            <li><strong>55歳開始（10年運用）</strong>: 月19.5万円×年5%＝約3,030万円</li>
            <li><strong>早く始めるほど積立額が1/10に</strong>: 複利効果の絶大な威力</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="老後資金シミュレーターで必要額を確認"
        description="退職年齢・想定生活費・年金見込み額から、自分に必要な準備額を試算。SBI証券の無料シミュレーターで具体的な毎月の積立額まで逆算できます。"
        buttonText="老後資金を計算する"
        href="/tools/retirement-fund"
        external={false}
        icon="👴"
        highlight="無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">公的年金の受取額を増やす5つの方法</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>繰下げ受給</strong>: 70歳→42%増、75歳→84%増の終身受給</li>
          <li><strong>厚生年金加入期間を延ばす</strong>: 60歳以降も働いて加入期間40年以上に</li>
          <li><strong>付加年金（国民年金第1号）</strong>: 月400円で将来の年金が月200円増</li>
          <li><strong>国民年金基金</strong>: 自営業向け、月68,000円まで掛金控除</li>
          <li><strong>iDeCo（私的年金）</strong>: 掛金全額所得控除＋運用益非課税</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">老後資金を減らさない出口戦略</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>4%ルール（年4%ずつ取崩、30年枯渇しない理論）</li>
          <li>バケツ戦略（現金5年分・債券10年分・株式残り）</li>
          <li>定率取崩（資産の4%を毎年取崩）</li>
          <li>一括受取より年金形式（受取時の税金最適化）</li>
          <li>医療・介護費は別枠で500〜1,000万円確保</li>
        </ul>
      </section>
    </>
  ),
  "nisa-withdrawal-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISA 出口戦略：築いた資産をいつ・どう取り崩す？</h2>
        <p>
          新NISAで1,800万円枠を使い切り、20〜30年後に<strong>4,000〜6,000万円の資産</strong>を築いた後、次の課題は「どう取り崩すか」。取り崩し方を間違えると、<strong>90歳で資産が尽きる or 65歳で不必要に減らす</strong>リスクがあります。2026年時点で最も実践的な3つの取崩し戦略を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3つの取崩し戦略 比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>4%ルール（定額取崩）</strong>: 初年度4%取崩、以降インフレ調整。30年間で枯渇確率5%以下（トリニティスタディ）</li>
            <li><strong>定率取崩</strong>: 毎年資産の4%を取崩、資産が減れば受取額も減るが枯渇リスク極小</li>
            <li><strong>バケツ戦略</strong>: 現金バケツ（2〜3年）・債券バケツ（5〜10年）・株式バケツ（残り）で分散</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="取崩し期におすすめの証券会社・サービス"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "定期売却サービスで自動取崩",
            features: [
              "投資信託の定期売却（毎月一定額）が可能",
              "高配当日本株・米国ETFで配当収入も",
              "米ドル建て債券で安定利回り4%〜",
              "米国株の配当金自動再投資",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "取崩し機能◎",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "投信定期売却が毎月・年金形式で設定可",
            features: [
              "投信の定期売却を毎月・年数回・金額指定で設定",
              "取崩した資金を楽天銀行に自動送金",
              "楽天証券ポイントでの補完も可能",
              "シンプルな画面で高齢者にも使いやすい",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "シンプル",
          },
          {
            name: "ウェルスナビ 定期出金",
            rank: 3,
            highlight: "AIが最適な取崩し額を自動計算",
            features: [
              "取崩し期に合わせたリスク低減を自動化",
              "定期出金機能で毎月口座送金",
              "リタイア後も手間ゼロで運用継続",
              "手数料1%（3,000万円超は0.5%）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+6FQUZ6+3EC2+60OXE",
            badge: "自動化",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年金＋新NISA 取崩しの理想的スケジュール</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>60〜64歳：新NISA取崩し中心</strong>: 年金受給前のブリッジとして月20〜30万円</li>
          <li><strong>65〜69歳：年金受給開始＋少額取崩し</strong>: 公的年金＋iDeCo一時金＋新NISA少額</li>
          <li><strong>70歳：繰下げ年金満額＋4%取崩し</strong>: 年金42%増＋新NISA 4%で月40万円も可能</li>
          <li><strong>80歳以降：株式→債券・現金へ</strong>: 急な医療・介護費に備え流動性確保</li>
          <li><strong>90歳以降：不動産売却・住み替え検討</strong>: 老人ホーム入居費用として活用</li>
        </ol>
      </section>
      <AffiliateCTA
        title="無料FP相談で出口戦略を設計"
        description="新NISA・iDeCo・公的年金の取崩しスケジュールを、独立系FPが中立的に提案。医療・介護費用も含めた総合プランニングを無料で受けられます。"
        buttonText="無料FP相談を予約"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+73A1FM+3UXW+60WNR"
        icon="🏁"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">取崩し期の税務ポイント</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISAの売却益は<strong>完全非課税</strong>（取崩しても税金ゼロ）</li>
          <li>iDeCo一時金は<strong>退職所得控除</strong>で税金ほぼゼロも可能</li>
          <li>年金受取は<strong>公的年金等控除</strong>（65歳以上で年110万円まで非課税）</li>
          <li>特定口座の売却益は20.315%課税、損益通算・繰越控除活用</li>
          <li>年金・給与・不動産所得との合算で税率ブラケット注意</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">やってはいけない取崩しパターン</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>暴落時に大量取崩し（ドルコスト平均法の逆効果）</li>
          <li>株式100%のまま80代まで保有（流動性リスク）</li>
          <li>全額一括売却して定期預金へ（インフレ負けで実質目減り）</li>
          <li>怪しい金融商品への乗り換え（高齢者向け詐欺の標的）</li>
          <li>子供への贈与を急ぎすぎる（自分の生活資金確保優先）</li>
        </ul>
      </section>
    </>
  ),
  "takehome-maximize-by-income": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年収×手取り最大化＝年間30〜60万円の差が生まれる</h2>
        <p>
          同じ年収500万円でも、<strong>iDeCo・ふるさと納税・新NISA・各種控除をフル活用している人としていない人で、年間20〜60万円の手取り差</strong>が生まれます。2026年現在の制度を使い切れば、年収別にどれだけ手取りを増やせるか、具体的なシミュレーションで解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年収400万円モデル（30代会社員・独身）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>手取り</strong>: 約320万円（所得税・住民税・社保引き後）</li>
            <li><strong>iDeCo 月1万円</strong>: 年12万円掛金→年2.4万円節税</li>
            <li><strong>ふるさと納税 4万円</strong>: 実質2,000円で返礼品1.6万円相当</li>
            <li><strong>新NISA 月3万円</strong>: 運用益非課税（20年で約1,240万円、非課税効果約250万円）</li>
            <li><strong>合計節税効果</strong>: 年4〜5万円＋長期運用益非課税</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年収600万円モデル（30〜40代・既婚子1人）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>手取り</strong>: 約470万円</li>
            <li><strong>iDeCo 月2.3万円（満額）</strong>: 年27.6万円掛金→年5.5万円節税</li>
            <li><strong>ふるさと納税 7万円</strong>: 実質2,000円で返礼品2.5万円相当</li>
            <li><strong>新NISA 月5万円</strong>: 20年で約2,070万円、非課税効果約410万円</li>
            <li><strong>生命保険料控除・医療費控除</strong>: 年1〜2万円節税</li>
            <li><strong>合計節税効果</strong>: 年10万円＋長期運用益410万円非課税</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年収800万円モデル（40代・管理職）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>手取り</strong>: 約600万円</li>
            <li><strong>iDeCo 月2.3万円</strong>: 税率30%想定で年8.3万円節税</li>
            <li><strong>ふるさと納税 12万円</strong>: 返礼品4万円相当</li>
            <li><strong>新NISA 月10万円（クレカ積立上限）</strong>: 20年で約4,140万円</li>
            <li><strong>夫婦の場合</strong>: 配偶者もiDeCo＋新NISAでダブル活用</li>
            <li><strong>合計節税効果</strong>: 年15〜20万円＋運用益800万円以上非課税</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="年収別 手取り最大化に使いたい口座"
        services={[
          {
            name: "SBI証券（新NISA＋iDeCo）",
            rank: 1,
            highlight: "新NISA・iDeCoの総合力No.1",
            features: [
              "iDeCo運営管理手数料 0円",
              "新NISA取扱投信2,000本以上",
              "三井住友カード積立で最大5%還元",
              "米ドル建て債券で退職金運用も",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "総合No.1",
          },
          {
            name: "マネックス証券",
            rank: 2,
            highlight: "クレカ積立還元率業界トップ1.1%",
            features: [
              "マネックスカード積立で1.1%還元",
              "ゴールドカード不要の高還元",
              "米国株取扱銘柄業界トップクラス",
              "iDeCoも運営管理手数料0円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5FQQ1E+348+62TZF",
            badge: "高還元",
          },
          {
            name: "楽天証券",
            rank: 3,
            highlight: "楽天経済圏連携で実質年10万円得",
            features: [
              "楽天カード積立で最大1%還元",
              "楽天ポイントで投信購入可",
              "楽天市場SPU連携で実質還元率アップ",
              "アプリが初心者向けで使いやすい",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "ポイ活派",
          },
        ]}
      />
      <AffiliateCTA
        title="ふるさと納税は楽天市場でSPU倍率アップ"
        description="楽天ふるさと納税なら、寄付額の分だけ楽天ポイントが貯まる（SPU倍率分が丸々還元）。年10万円寄付で最大10,000ポイント以上の上乗せ。"
        buttonText="楽天ふるさと納税を見る"
        href="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2F"
        icon="🎁"
        highlight="実質2,000円で返礼品"
      />
      <AffiliateCTA
        title="年会費無料で海外旅行保険付き｜エポスカード"
        description="年収問わず作れる高スペック無料カード。海外旅行保険自動付帯・マルイ系10%OFF・エポスゴールド招待制（年会費永年無料化）など、サブカードの定番。"
        buttonText="エポスカードに無料申込"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+MMIJE+38L8+BY641"
        icon="💳"
        highlight="年会費無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収1,200万円モデル（50代・役員層）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>手取り</strong>: 約880万円（児童手当所得制限あり）</li>
            <li><strong>iDeCo 月2.3万円</strong>: 税率43%で年12万円節税</li>
            <li><strong>ふるさと納税 26万円</strong>: 返礼品8万円相当</li>
            <li><strong>新NISA 月30万円（成長投資枠も活用）</strong>: 5年で1,800万円枠使い切り</li>
            <li><strong>特定支出控除・小規模企業共済</strong>: 追加で年10〜20万円節税</li>
            <li><strong>合計節税効果</strong>: 年30〜40万円＋運用益1,000万円以上非課税</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">手取り増加の優先順位（全年収共通）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>1位：企業型DCマッチング拠出</strong>: 会社の退職金制度をフル活用</li>
          <li><strong>2位：iDeCo</strong>: 掛金全額所得控除の即効性</li>
          <li><strong>3位：ふるさと納税</strong>: 実質2,000円で返礼品</li>
          <li><strong>4位：新NISA（クレカ積立）</strong>: 月10万円までクレカ還元獲得</li>
          <li><strong>5位：新NISA（成長投資枠）</strong>: 高配当株・米国ETFで配当収入</li>
        </ol>
      </section>
    </>
  ),
  "bitcoin-long-term-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ビットコイン長期保有（ガチホ）の合理性</h2>
        <p>
          ビットコインは過去10年間で約1万倍に成長した唯一のアセット。<strong>短期トレードよりも長期保有（ガチホ）の方が、統計的に圧倒的に高いリターン</strong>を得られることが知られています。2026年はビットコイン現物ETFの普及、機関投資家の参入拡大で、長期保有の合理性がさらに高まっています。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ビットコイン長期保有におすすめ取引所"
        services={[
          {
            name: "bitFlyer",
            rank: 1,
            highlight: "国内取引量No.1｜セキュリティ最高水準",
            features: [
              "国内仮想通貨取引量9年連続No.1",
              "ハッキング被害ゼロの堅牢なセキュリティ",
              "1円から購入可能、積立サービスあり",
              "Tポイントでビットコイン購入も可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+2CH1XU+47NQ+5YRHE",
            badge: "取引量No.1",
          },
          {
            name: "コインチェック",
            rank: 2,
            highlight: "アプリDL数No.1｜初心者向け操作性",
            features: [
              "アプリが直感的で初心者に最適",
              "500円から購入可能",
              "取扱通貨30種以上",
              "マネックスグループの安心感",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+2K0YIA+3UHS+5YRHE",
            badge: "初心者No.1",
          },
          {
            name: "GMOコイン",
            rank: 3,
            highlight: "取引所形式で手数料格安｜積立対応",
            features: [
              "取引所形式で手数料業界最安水準",
              "つみたて暗号資産で自動買付（毎日・毎週・毎月）",
              "GMOインターネットグループの信頼性",
              "入出金手数料も無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+E25A7M+4HYI+5YZ75",
            badge: "手数料最安",
          },
          {
            name: "bitbank",
            rank: 4,
            highlight: "アルトコインのスプレッド最狭",
            features: [
              "ビットコイン＋アルトコインも積立可",
              "メイカー手数料マイナス（受取）で逆張り派に有利",
              "コールドウォレット保管で安全性◎",
              "1円から売買可能",
            ],
            href: "https://bitbank.cc/",
            badge: "上級者向け",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ドルコスト平均法（DCA）でリスク分散</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>月1万円×10年積立</strong>: 総投資120万円、過去データでは約5,000万円前後</li>
            <li><strong>半減期サイクル（4年）ごとに増額</strong>: 半減期前半に買い増しが定石</li>
            <li><strong>価格下落時こそ淡々と継続</strong>: 暴落時の買付単価が最高のパフォーマンスを生む</li>
            <li><strong>積立設定を自動化</strong>: GMOコイン・bitbank等の自動積立で感情排除</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="GMOコインで自動積立スタート"
        description="GMOコインの「つみたて暗号資産」なら、毎日・毎週・毎月の自動買付を設定できます。感情に左右されないドルコスト平均法で長期保有を実践。"
        buttonText="GMOコインで口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+E25A7M+4HYI+5YZ75"
        icon="₿"
        highlight="手数料最安"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ビットコインの税金と節税テクニック</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>売却益は<strong>雑所得</strong>、総合課税で最大55%（株式の20%より高税率）</li>
          <li>含み益は非課税、確定しない限り税金発生なし</li>
          <li>年20万円以下の利益確定なら申告不要（会社員）</li>
          <li>損益通算可能なのは同じ雑所得のみ（株・FXとは通算不可）</li>
          <li>法人化で税率22〜30%に圧縮（資産3,000万円以上で検討価値）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">コールドウォレット保管でセキュリティ向上</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>取引所リスク</strong>: 過去のマウントゴックス事件など、取引所の破綻リスク</li>
          <li><strong>コールドウォレット</strong>: Ledger Nano・Trezor等のハードウェアウォレット</li>
          <li><strong>価格100万円超保有なら必須</strong>: 手数料1万円前後で半永久的に安全</li>
          <li><strong>シードフレーズは金庫・銀行貸金庫に保管</strong>: 紛失＝全額喪失のリスク管理</li>
          <li><strong>相続対策</strong>: 遺言書にシードフレーズのアクセス方法を記載</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">長期保有派がやってはいけない7つの行動</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>短期で損切り・売却（長期保有の利益を放棄）</li>
          <li>レバレッジ取引（清算で全額失うリスク）</li>
          <li>怪しい海外取引所への送金</li>
          <li>Twitter/YouTube煽り銘柄への乗り換え</li>
          <li>シードフレーズをスマホ・PC保存（ハッキングリスク）</li>
          <li>取引所パスワードの使い回し</li>
          <li>資産の50%超をビットコインに集中（過剰リスク）</li>
        </ul>
      </section>
    </>
  ),
  "blog-side-income-roadmap": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">副業ブログで月10万円は達成可能｜現実的なロードマップ</h2>
        <p>
          副業ブログで<strong>月10万円</strong>は、正しい戦略で12〜18ヶ月あれば達成可能です。2026年時点のSEO環境・AIライティング普及を踏まえた、<strong>最短ルートのロードマップ</strong>を公開します。ジャンル選定・記事設計・ASP選びの3つを間違えなければ、センス不要・スキルなしでも月5万円は堅実に狙えます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">12ヶ月ロードマップ</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>1〜2ヶ月目</strong>: ジャンル選定、WordPress構築、SEO基礎学習、最初の20記事執筆</li>
            <li><strong>3〜4ヶ月目</strong>: 50記事達成、内部リンク構築、Search Console分析</li>
            <li><strong>5〜6ヶ月目</strong>: 検索流入月1,000〜3,000PV、初収益（月1,000〜5,000円）</li>
            <li><strong>7〜9ヶ月目</strong>: 100記事達成、月5万円達成、成約数分析でCVR最適化</li>
            <li><strong>10〜12ヶ月目</strong>: 月10万円達成、ロングテールSEOで安定収益</li>
            <li><strong>1年超</strong>: 月30万円以上に成長、他サイト展開も視野</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="副業ブログにおすすめレンタルサーバー"
        services={[
          {
            name: "エックスサーバー",
            rank: 1,
            highlight: "国内シェアNo.1｜高速・安定",
            features: [
              "国内レンタルサーバーシェアNo.1",
              "初期費用無料＋長期契約で月990円〜",
              "WordPressクイックスタート対応",
              "独自ドメイン永久無料特典",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HB0NM+CWD9HU+CO4+5YZ77",
            badge: "総合No.1",
          },
          {
            name: "ConoHa WING",
            rank: 2,
            highlight: "表示速度国内最速水準｜初心者向け",
            features: [
              "GMOインターネット運営、信頼性◎",
              "WINGパック 月678円〜（長期割）",
              "独自ドメイン2つ永久無料",
              "セットアップが最速10分",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBJZZ+5HRIWA+3L4M+5YZ77",
            badge: "速度重視",
          },
          {
            name: "ロリポップ！ハイスピード",
            rank: 3,
            highlight: "月550円〜｜コスパ最強",
            features: [
              "ハイスピードプラン 月550円〜",
              "WordPress簡単インストール",
              "初期費用無料",
              "独自ドメイン永久無料特典",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+B5X81U+348+5YRHE",
            badge: "コスパ",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">収益化ジャンル選定の3原則</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>1記事あたり高単価のASPがある</strong>: 金融・転職・光回線・格安SIM・VPN・動画配信</li>
          <li><strong>検索ボリュームがある</strong>: 月間1万〜50万検索規模のキーワード群</li>
          <li><strong>自分が興味・経験を持てる</strong>: 継続できないと100記事達成前に挫折</li>
          <li><strong>避けるジャンル</strong>: YMYL厳格領域（医療・法律・健康）は企業サイト優位</li>
          <li><strong>狙い目</strong>: レビュー系・比較系・初心者向けHow-to系</li>
        </ol>
      </section>
      <AffiliateCTA
        title="A8.netに無料登録でASPデビュー"
        description="日本最大級のASP。登録無料・審査なしのサイトから始められるため、ブログ開設後すぐに収益化スタート可能。金融・転職系の高単価案件が豊富。"
        buttonText="A8.netに無料登録"
        href="https://px.a8.net/a8net/as/"
        icon="✍️"
        highlight="登録無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">100記事の内訳（月10万円達成モデル）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>収益化記事 30本</strong>: ASP案件への誘導、成約直結</li>
            <li><strong>比較・ランキング記事 20本</strong>: 「〇〇 比較」「〇〇 おすすめ」</li>
            <li><strong>ノウハウ・解説記事 30本</strong>: SEO流入の柱、内部リンクで収益化記事へ</li>
            <li><strong>実体験・レビュー記事 10本</strong>: E-E-A-T強化、独自性</li>
            <li><strong>トレンド・ニュース記事 10本</strong>: 短期流入、内部リンクハブ</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">2026年のブログ収益化 成功パターン</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>AIライティング（ChatGPT・Claude）で記事作成時間を1/3に</li>
          <li>ロングテールキーワード（月間100〜1,000検索）を多数狙う</li>
          <li>内部リンクでSEO強化＋CTAで収益化記事へ誘導</li>
          <li>TwitterやInstagramで初期流入を確保</li>
          <li>YouTube動画連動でGoogle評価アップ</li>
        </ul>
      </section>
      <AffiliateCTA
        title="もしもアフィリエイトでAmazon・楽天リンク対応"
        description="A8.netと並ぶ大手ASP。Amazonアソシエイト・楽天アフィリエイトに物販リンクを統一できるので、ブログ運営が楽に。W報酬制度で報酬UP。"
        buttonText="もしもに無料登録"
        href="https://af.moshimo.com/af/r/regist?a_id=5465446"
        icon="🛒"
        highlight="W報酬"
      />
      <AffiliateCTA
        title="モチベ維持の副収入源｜マクロミル"
        description="ブログが軌道に乗るまでの半年〜1年は収入ゼロに耐える期間。マクロミルのアンケート副業なら月5,000〜15,000円の即時収入で資金繰りをサポート。"
        buttonText="マクロミルに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD"
        icon="📋"
        highlight="即時収益化"
      />
    </>
  ),
  "mortgage-refinance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">住宅ローン借り換えで総返済額300万円減も現実的</h2>
        <p>
          2026年は歴史的低金利で、<strong>10年前に借りた住宅ローンからの借り換えチャンス</strong>です。残高1,500万円以上・残期間10年以上・金利差1%以上の3条件が揃えば、諸費用を差し引いても総返済額を<strong>200〜500万円圧縮できるケース</strong>が多数。月々の返済額も2〜3万円減り、家計にゆとりが生まれます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">借り換え判定の3条件</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>残高1,500万円以上</strong>: 元本が大きいほど金利差の効果が大きい</li>
            <li><strong>残期間10年以上</strong>: 短期間だと諸費用の元が取れない</li>
            <li><strong>現在の金利との差が1%以上</strong>: 0.5%差だと諸費用で相殺される場合あり</li>
          </ol>
          <p className="text-xs text-muted mt-3">※3条件すべて満たすと、ほぼ確実に借り換えメリットあり</p>
        </div>
      </section>
      <ComparisonTableCTA
        title="2026年 借り換えにおすすめネット銀行"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "変動0.298%｜全疾病団信0円｜借り換え手続きオンライン完結",
            features: [
              "借り換え後の金利は業界最安水準0.298%〜",
              "全疾病保障団信が無料付帯（他行なら0.3%上乗せ）",
              "他行から移す際の諸費用シミュレーションが丁寧",
              "団信切替で保障アップ＋金利ダウンのダブル効果",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3TDBVB+99J9MY+50+2HEFRR",
            badge: "借換えNo.1",
          },
          {
            name: "auじぶん銀行",
            rank: 2,
            highlight: "変動0.329%｜がん50%保障団信が無料",
            features: [
              "借り換え実績No.1クラス",
              "がん50%保障＋全疾病長期入院保障が無料",
              "auユーザーは追加金利優遇あり",
              "web申込で事務手数料定額プランも選べる",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3ZCOXE+96LG9M+50+2HE0PB",
            badge: "保障重視",
          },
          {
            name: "PayPay銀行",
            rank: 3,
            highlight: "変動0.330%｜がん50%保障が標準搭載",
            features: [
              "がん50%保障団信が無料付帯",
              "借り換え専用シミュレーションが充実",
              "スマホで完結する借り換えフロー",
              "Yahoo!マネー・PayPay連携でサポート充実",
            ],
            href: "https://www.paypay-bank.co.jp/mortgage/",
            badge: "がん保障",
          },
          {
            name: "楽天銀行 フラット35",
            rank: 4,
            highlight: "フラット35への借り換えで金利固定化",
            features: [
              "変動からフラット35へ借り換えで金利上昇リスク回避",
              "楽天会員は事務手数料優遇",
              "返済中に金利が上がらない安心感",
              "繰上返済手数料無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBJZZ+CG4HT6+3AYK+5YZ77",
            badge: "固定金利",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">借り換え実例：残高2,500万円・残25年・金利1.5%→0.35%</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>現状</strong>: 総返済額3,000万円（残500万円の利息込み）</li>
            <li><strong>借り換え後</strong>: 総返済額2,608万円（利息108万円）</li>
            <li><strong>諸費用</strong>: 登記費用＋事務手数料＋印紙代で約80万円</li>
            <li><strong>総節約額</strong>: 3,000万-2,608万-80万＝<strong>312万円の節約</strong></li>
            <li><strong>月返済額</strong>: 10.5万円→8.7万円（月1.8万円減）</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="モゲチェックで借り換えシミュレーション【無料】"
        description="現在の借入情報を入力するだけで、最大5社の借り換え後金利・諸費用・総節約額を一括比較。AIが最適プランを診断。営業電話なしで安心。"
        buttonText="無料で借り換え診断"
        href="https://px.a8.net/svt/ejp?a8mat=3HBJZZ+9OD3ZM+3Y0C+5YZ75"
        icon="🏠"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">借り換え時の諸費用 相場</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>事務手数料：借入額×2.2%（定率型）or 33,000円〜（定額型）</li>
          <li>抵当権抹消・設定登記：15〜20万円</li>
          <li>司法書士報酬：5〜10万円</li>
          <li>印紙代：2万円</li>
          <li>保証料：借入期間・金額で0〜60万円</li>
          <li><strong>合計目安：60〜90万円（定率型）／40〜60万円（定額型）</strong></li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">借り換え審査で落ちないためのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>転職直後は避ける（勤続1年未満は減点）</li>
          <li>カードローン・キャッシング残高は0に</li>
          <li>クレカのリボ払い残高も返済</li>
          <li>年収と借入残高のバランス（年収の5倍以内が目安）</li>
          <li>健康状態で団信加入可能か確認（持病があればワイド団信）</li>
        </ol>
      </section>
    </>
  ),
  "social-lending-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">利回り4〜8%、少額から始められる貸付型クラウドファンディング</h2>
        <p>
          ソーシャルレンディング（貸付型クラウドファンディング）は、<strong>1万円から始められて年利4〜8%の利回り</strong>が期待できる投資手段。株式より値動きが小さく、銀行預金より圧倒的に高利回り。<strong>新NISAや株で一通り積立している人の次の一手</strong>として注目されています。ただし元本保証ではなく、案件選定のスキルが鍵です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ソーシャルレンディングおすすめランキング"
        services={[
          {
            name: "Funds",
            rank: 1,
            highlight: "上場企業案件中心｜利回り1.5〜3%｜低リスク",
            features: [
              "貸付先の大半が上場企業・関連会社",
              "運用期間3〜18ヶ月と短期で資金拘束短い",
              "1円単位で投資可能、少額分散に最適",
              "貸倒れ実績ゼロ（2026年時点）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+D9RFJE+4QW6+5YZ77",
            badge: "安全性重視",
          },
          {
            name: "クラウドバンク",
            rank: 2,
            highlight: "累計応募総額2,000億円超｜利回り5〜7%",
            features: [
              "証券会社運営で金融庁第一種金融商品取引業者",
              "不動産・再生可能エネルギー・中小企業支援ファンド",
              "償還実績で貸倒れ率業界最低水準",
              "1万円から投資可能",
            ],
            href: "https://crowdbank.jp/",
            badge: "バランス型",
          },
          {
            name: "OwnersBook",
            rank: 3,
            highlight: "不動産特化｜利回り4〜6%｜運営会社東証プライム",
            features: [
              "国内不動産プロジェクト特化",
              "運営のロードスターキャピタルは東証プライム上場",
              "担保付き案件が中心で信用リスク低減",
              "1万円から、運用期間6〜24ヶ月",
            ],
            href: "https://www.ownersbook.jp/",
            badge: "不動産特化",
          },
          {
            name: "CREAL",
            rank: 4,
            highlight: "不動産小口化｜1万円から｜優先劣後方式",
            features: [
              "不動産クラウドファンディングで10万円〜",
              "優先劣後方式で投資家の元本優先保護",
              "マンション・ホテル・保育園等多様な案件",
              "運用期間1〜3年、利回り4〜5%",
            ],
            href: "https://creal.jp/",
            badge: "新興注目",
          },
          {
            name: "SAMURAI FUND",
            rank: 5,
            highlight: "高利回り7〜8%｜案件選別がカギ",
            features: [
              "利回り業界最高水準7〜8%",
              "担保・保証付き案件も多い",
              "中小企業向け融資ファンド中心",
              "1万円から、運用期間6〜12ヶ月",
            ],
            href: "https://samurai-fund.jp/",
            badge: "高利回り",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ソーシャルレンディングのメリット・デメリット</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>◎値動きがない</strong>: 株式と違い運用期間中の価格変動なし、精神的にラク</li>
            <li><strong>◎少額から分散</strong>: 1万円で複数案件に分散投資可能</li>
            <li><strong>◎銀行預金より圧倒的高利回り</strong>: 定期預金0.2% vs SL 4〜8%</li>
            <li><strong>△中途解約不可</strong>: 運用期間中は引き出せない（生活費は別確保）</li>
            <li><strong>△貸倒れリスク</strong>: 元本保証なし、運営会社の破綻リスクもゼロではない</li>
            <li><strong>△税制優遇なし</strong>: 新NISAやiDeCoと違い、利益は雑所得・総合課税</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="Fundsで投資を始める【口座開設無料】"
        description="Fundsは上場企業案件中心で安全性重視派に人気。1円単位で投資可能、運用期間も短く、初心者のソシャレン入門に最適。新規口座開設キャンペーン実施中。"
        buttonText="Fundsで口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+D9RFJE+4QW6+5YZ77"
        icon="🏦"
        highlight="上場企業案件"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">分散投資の黄金パターン</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>3〜5社に口座開設</strong>: 運営会社リスクの分散が必須</li>
          <li><strong>1案件への投資上限を設ける</strong>: 総資産の5%まで、など自己ルール</li>
          <li><strong>利回り・期間・担保の3軸で選ぶ</strong>: 高利回りだけを追わない</li>
          <li><strong>新NISA・iDeCoをフル活用した上での余剰資金で</strong>: 税制優遇の方が優先</li>
          <li><strong>運用途中の情報開示を確認</strong>: 貸付先の状況レポートが定期的に出る運営会社を選ぶ</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ソシャレン投資家が払う税金</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>分配金は<strong>雑所得</strong>扱い、総合課税（最大55%）</li>
          <li>源泉徴収20.42%後の金額が振り込まれる</li>
          <li>会社員の場合、年20万円超で確定申告必要</li>
          <li>損失は他のソシャレン・雑所得との内部通算のみ可（株式の譲渡損とは通算不可）</li>
          <li>FX・仮想通貨と同様、新NISAでは使えない税優遇対象外商品</li>
        </ul>
      </section>
    </>
  ),
  "education-insurance-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">学資保険は「今の時代」本当に必要か？</h2>
        <p>
          学資保険の返戻率は近年低下し、主要商品でも<strong>105〜108%程度</strong>。一方、新NISAで月2万円を18年積立（年5%運用想定）なら<strong>約700万円</strong>（元本432万円、利益約268万円・返戻率162%）。<strong>リターンだけなら新NISAが圧倒的に有利</strong>ですが、学資保険には「親の死亡時に保険料払込免除＋満期金支払」という固有のメリットがあります。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 学資保険おすすめ比較"
        services={[
          {
            name: "ソニー生命 学資金準備スクエア",
            rank: 1,
            highlight: "返戻率108%前後｜業界最高水準",
            features: [
              "全期前納＋短期払いで返戻率108%超",
              "払込期間10年・15年・18年から選択",
              "大学進学時にまとめて受取 or 分割受取",
              "契約者死亡で以後保険料免除、満期金は確実受取",
            ],
            href: "https://www.sonylife.co.jp/examine/plan/gakushi/",
            badge: "返戻率No.1",
          },
          {
            name: "明治安田生命 つみたて学資",
            rank: 2,
            highlight: "返戻率107%前後｜シンプル設計",
            features: [
              "払込期間10年・15年で早めに完済",
              "大学4年間に分けて受取できる据置オプション",
              "契約者死亡で払込免除",
              "ネット申込で書類簡素",
            ],
            href: "https://www.meijiyasuda.co.jp/find2/savings/list/tsumitate-gakushi/",
            badge: "シンプル",
          },
          {
            name: "日本生命 ニッセイ学資保険",
            rank: 3,
            highlight: "入学祝金あり｜手厚いサポート",
            features: [
              "幼稚園・小・中・高・大学それぞれで祝金あり",
              "満期受取金と祝金を組み合わせ可能",
              "営業担当によるサポート充実",
              "返戻率104〜106%",
            ],
            href: "https://www.nissay.co.jp/keiyaku/gakushi/",
            badge: "祝金あり",
          },
          {
            name: "フコク生命 みらいのつばさ",
            rank: 4,
            highlight: "ジャンプ型で大学進学時に手厚い",
            features: [
              "ジャンプ型：大学進学時に受取集中",
              "兄弟割引制度あり",
              "返戻率105〜107%",
              "契約者死亡で払込免除＋満期金確実",
            ],
            href: "https://www.fukoku-life.co.jp/benefit/lineup/mirai/",
            badge: "兄弟割",
          },
          {
            name: "新NISA つみたて投資枠（代替案）",
            rank: 5,
            highlight: "18年で返戻率160%超も可能（期待値）",
            features: [
              "月2万円×18年×年5%＝約700万円（元本432万円）",
              "運用リスクはあるが長期・分散で軽減",
              "途中で資金が必要になっても売却可",
              "子供の教育以外の目的にも使える柔軟性",
            ],
            href: "/guide/nisa-broker-ranking-2026",
            badge: "高リターン",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">子供の年齢別 教育資金戦略</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>0〜3歳</strong>: 学資保険＋新NISAの併用（時間を味方に）</li>
            <li><strong>4〜7歳</strong>: 学資保険の返戻率が下がる時期、新NISA比率アップ</li>
            <li><strong>8〜10歳</strong>: 新NISAメイン＋現金預金で元本確保</li>
            <li><strong>11歳以降</strong>: 学資保険加入不可の会社多数、新NISA＋積立預金</li>
            <li><strong>共通</strong>: 児童手当（0〜15歳で総額200万円前後）を全額貯蓄・投資に回す</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="無料保険相談で学資保険と新NISA比較【オンラインOK】"
        description="独立系FPが学資保険・新NISA・収入保障保険を含めた最適な教育資金プランを中立的に提案。勧誘なし・完全無料の相談が全国でオンライン可。"
        buttonText="無料相談を予約する"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+73A1FM+3UXW+60WNR"
        icon="🎓"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学資保険の固有メリット（新NISAにないもの）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>契約者死亡時の保険料払込免除＋満期金支払い</li>
          <li>強制的に貯蓄できる（途中解約は損失発生のため継続しやすい）</li>
          <li>所得税・住民税の生命保険料控除対象</li>
          <li>受取時の課税優遇（一時所得扱い、50万円控除＋1/2課税）</li>
          <li>元本確保型（途中解約せず満期なら元本割れなし）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">結論：ハイブリッド戦略が最適</h2>
        <p>
          <strong>「学資保険で保障＋新NISAでリターン」のハイブリッド運用</strong>がおすすめ。学資保険は月1〜1.5万円程度で必要最小限の保障を確保し、残りの2〜3万円を新NISAで積立てる方式。これなら親の万一に備えつつ、教育費として700〜1,000万円の資産形成が可能です。
        </p>
      </section>
    </>
  ),
  "tax-filing-software-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">副業・フリーランスなら確定申告ソフトで年65万円の節税</h2>
        <p>
          副業所得が年20万円超の会社員・フリーランスは確定申告が必要。青色申告にすれば<strong>年65万円の所得控除</strong>が受けられ、年収500万円の人なら<strong>約13万円の節税</strong>になります。会計ソフトを使えば簿記の知識ゼロでも青色申告65万円控除を実現でき、導入価値は明確です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 確定申告ソフトおすすめ比較"
        services={[
          {
            name: "freee会計",
            rank: 1,
            highlight: "簿記知識ゼロでもOK｜スマホアプリ最強",
            features: [
              "質問に答えるだけで青色申告書が完成",
              "スマホで領収書撮影→自動仕訳",
              "銀行・クレカの明細自動連携",
              "スタータープラン 年11,760円〜",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+C7M3F6+2HOM+5YZ75",
            badge: "初心者No.1",
          },
          {
            name: "マネーフォワード クラウド確定申告",
            rank: 2,
            highlight: "会計知識ある人向け｜連携サービス最多",
            features: [
              "2,500以上のサービスと自動連携",
              "銀行・証券・カード等の取引データ自動取込",
              "複式簿記で本格会計",
              "パーソナルプラン 年11,760円〜",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+DLIEAE+0K+10DNE1",
            badge: "連携最強",
          },
          {
            name: "やよいの青色申告オンライン",
            rank: 3,
            highlight: "初年度無料｜老舗の安心感",
            features: [
              "セルフプラン初年度無料、2年目以降年8,800円",
              "会計ソフト老舗の弥生が提供",
              "サポート付きプランも選べる",
              "シンプルな画面で作業に迷わない",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HBLVN+EBO3FE+C8E+5YRHE",
            badge: "初年度無料",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">青色申告65万円控除を取るための3条件</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>複式簿記での記帳</strong>: 会計ソフトを使えば自動で対応</li>
            <li><strong>貸借対照表＋損益計算書の提出</strong>: ソフトが自動作成</li>
            <li><strong>e-Tax電子申告 or 電子帳簿保存</strong>: freee/マネフォ/弥生は全対応</li>
          </ol>
          <p className="text-xs text-muted mt-3">※1つでも欠けると55万円控除に減額、すべて欠けると10万円控除に</p>
        </div>
      </section>
      <AffiliateCTA
        title="freee会計で青色申告デビュー【30日間無料】"
        description="会計知識ゼロでも、スマホで撮るだけで仕訳完了。freeeなら年13万円の節税効果を簿記スキルなしで実現。30日間無料トライアル実施中。"
        buttonText="freee会計を無料で試す"
        href="https://px.a8.net/svt/ejp?a8mat=3HBLVN+C7M3F6+2HOM+5YZ75"
        icon="📝"
        highlight="30日間無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">副業収入別 おすすめソフト</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>副業売上 年20〜100万円</strong>: 弥生（初年度無料）で試す</li>
          <li><strong>副業売上 年100〜500万円</strong>: freeeで簿記スキル不要の青色申告</li>
          <li><strong>フリーランス本業 年500万円以上</strong>: マネーフォワードで本格会計</li>
          <li><strong>インボイス登録事業者</strong>: どのソフトもインボイス自動対応</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">確定申告で差がつくポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>副業用のクレカ・銀行口座を分離（経費集計が即完了）</li>
          <li>領収書は月次でまとめてクラウド保管（電子帳簿保存法対応）</li>
          <li>家事按分で自宅作業スペース・通信費・電気代を経費化</li>
          <li>小規模企業共済（年84万円）で追加所得控除</li>
          <li>経営セーフティ共済（年240万円）で節税＋準備金</li>
        </ol>
      </section>
    </>
  ),
  "inheritance-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">相続税は年110万円の暦年贈与で合法節税</h2>
        <p>
          2024年の税制改正で相続税の課税ラインが下がり、<strong>相続税を払う家庭は全体の約10%</strong>に増加。年間110万円までの贈与は非課税で、<strong>10年間コツコツ贈与すれば親から子へ1人1,100万円を無税で移せます</strong>。2人の子なら2,200万円、孫も含めれば数千万円単位の節税が可能。早めの生前対策が鉄則です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3つの贈与制度の使い分け</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>暦年贈与</strong>: 年110万円まで非課税、長期間で大きな節税効果</li>
            <li><strong>相続時精算課税</strong>: 累計2,500万円まで贈与税なし、2024年から年110万円の基礎控除追加</li>
            <li><strong>教育資金一括贈与</strong>: 祖父母→孫に最大1,500万円非課税（2026年3月末まで）</li>
            <li><strong>結婚・子育て資金一括贈与</strong>: 最大1,000万円非課税（2027年3月末まで）</li>
            <li><strong>住宅取得等資金贈与</strong>: 最大1,000万円非課税（省エネ住宅）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">2024年改正：生前贈与の加算期間が7年に延長</h2>
        <p>
          従来は相続開始前3年間の贈与のみ相続税に加算されていましたが、<strong>2024年からは7年間に延長</strong>（段階的に移行、2031年以降は完全7年）。「もらった年のタイミング次第で相続税対象」となるため、<strong>早めに贈与開始する戦略的な重要性が増しました</strong>。
        </p>
      </section>
      <ComparisonTableCTA
        title="相続対策おすすめ金融商品"
        services={[
          {
            name: "生命保険（一時払終身）",
            rank: 1,
            highlight: "500万円×法定相続人数が非課税",
            features: [
              "死亡保険金は500万円×法定相続人数まで非課税",
              "相続人3人なら1,500万円を無税で渡せる",
              "現金のまま相続すると全額課税対象",
              "一時払終身保険で高齢者でも加入可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+73A1FM+3UXW+60WNR",
            badge: "節税No.1",
          },
          {
            name: "不動産投資",
            rank: 2,
            highlight: "評価額圧縮で相続税を大幅減",
            features: [
              "不動産の相続税評価額は時価の60〜80%",
              "賃貸用マンションなら貸家建付地で更に圧縮",
              "1億円の現金→7,000万円の評価額",
              "立地の良い物件なら流動性も確保",
            ],
            href: "/guide/real-estate-crowdfunding",
            badge: "節税効果大",
          },
          {
            name: "新NISA（次世代への承継）",
            rank: 3,
            highlight: "非課税運用で実質贈与額を増やす",
            features: [
              "親が新NISAで運用→子への贈与原資に",
              "運用益非課税で長期で複利効果",
              "年110万円の贈与枠で毎年移転",
              "生前に計画的に資産移転可能",
            ],
            href: "/guide/nisa-broker-ranking-2026",
            badge: "長期運用",
          },
        ]}
      />
      <AffiliateCTA
        title="相続の無料相談【専門家にオンラインで】"
        description="独立系FP＋税理士が相続対策・贈与プランを中立的に提案。現状の資産ヒアリング→最適プラン提示まで完全無料、勧誘なしで安心。"
        buttonText="相続無料相談を予約"
        href="https://px.a8.net/svt/ejp?a8mat=3HDFZG+73A1FM+3UXW+60WNR"
        icon="🎁"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">世代別の相続対策ロードマップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>40代（贈与元が60〜70代）</strong>: 親世代と暦年贈与開始、教育資金一括贈与検討</li>
          <li><strong>50代（贈与元が70〜80代）</strong>: 親の資産状況把握、相続税試算、一時払終身保険</li>
          <li><strong>60代（自分が贈与者に）</strong>: 子・孫への暦年贈与計画、不動産組み換え</li>
          <li><strong>70代</strong>: 相続時精算課税と暦年贈与の併用、遺言書作成</li>
          <li><strong>80代</strong>: 生命保険活用（一時払）、認知症前にエンディングノート</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">相続対策で失敗しないための5つの鉄則</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>贈与契約書を毎年作成（「名義預金」と認定されない）</li>
          <li>贈与は受贈者名義の口座に振込（手渡し禁止）</li>
          <li>贈与税申告が必要な年（年110万円超）は必ず申告</li>
          <li>相続人全員が合意の遺産分割協議書を作成</li>
          <li>相続開始から10ヶ月以内に相続税申告（過ぎると特例使えず）</li>
        </ul>
      </section>
    </>
  ),
  "housewife-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">主婦・主夫が知っておくべき「壁」の全体像</h2>
        <p>
          扶養内で働く主婦・主夫が最初に押さえるべきは<strong>103万円・106万円・130万円・150万円の壁</strong>。これを理解せずに副業収入を増やすと、配偶者の税金が増えたり社会保険料で手取りが減ったりします。一方、<strong>新NISA・iDeCo・クレカ積立</strong>は扶養内でも活用でき、世帯の資産形成に大きく貢献します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">4つの壁と超えるメリット・デメリット</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>103万円の壁</strong>: 所得税が発生。配偶者控除（38万円）は150万円まで維持</li>
            <li><strong>106万円の壁</strong>: 従業員101人以上の企業で社会保険加入義務</li>
            <li><strong>130万円の壁</strong>: すべての企業で社会保険加入、扶養から外れる</li>
            <li><strong>150万円の壁</strong>: 配偶者特別控除が段階的に減少（201万円で0円）</li>
            <li><strong>結論</strong>: 扶養継続なら〜130万円、超えるなら170万円超で手取り逆転</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="主婦・主夫におすすめの新NISA・証券会社"
        services={[
          {
            name: "楽天証券",
            rank: 1,
            highlight: "楽天カード積立で1%還元｜楽天ポイントで投資",
            features: [
              "楽天カード積立で最大1%ポイント還元",
              "楽天ポイントでの投資（ポイ活投資）",
              "楽天市場SPUアップで主婦に人気",
              "アプリが使いやすく初心者向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HDFZG+5DBUY2+3VG4+61C2P",
            badge: "ポイ活派No.1",
          },
          {
            name: "SBI証券",
            rank: 2,
            highlight: "三井住友カードVポイント＋Tポイント投資",
            features: [
              "三井住友カード積立で最大5%還元",
              "Vポイント・TポイントでNISA投資可",
              "取扱投信2,000本以上で選択肢豊富",
              "夫婦で口座開設してつみたて分散",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5B3RFU+3L3S+BWGDT",
            badge: "総合力◎",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "マネックスカード積立で1.1%還元",
            features: [
              "クレカ積立還元率業界トップ",
              "ゴールドカード不要で1.1%",
              "少額からの積立に最適",
              "米国株分野にも強い",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3HCPP5+5FQQ1E+348+62TZF",
            badge: "高還元",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">主婦・主夫向け 新NISA活用の黄金パターン</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>月1〜5万円のつみたて</strong>: オルカン or S&P500を無理のない範囲で</li>
          <li><strong>クレカ積立で還元Get</strong>: 楽天カード・三井住友カード・マネックスカード</li>
          <li><strong>ボーナス時期に増額</strong>: 成長投資枠で年2〜3回のスポット買い</li>
          <li><strong>夫婦で2口座運用</strong>: 世帯で年720万円枠・生涯3,600万円枠を使える</li>
          <li><strong>10年後の目標</strong>: 月3万円×10年×年5%＝約465万円の教育資金</li>
        </ol>
      </section>
      <AffiliateCTA
        title="在宅で月3〜5万円｜クラウドワークス"
        description="主婦に人気の在宅ワーク。データ入力・ライター・デザインなど、スキマ時間で月3〜5万円の副収入。新NISA積立の原資づくりに最適。"
        buttonText="クラウドワークスに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP"
        icon="💻"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">扶養内で稼ぎやすい副業ランキング</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>クラウドワークス・ランサーズ：月3〜8万円（ライター・データ入力）</li>
          <li>ポイ活（楽天ポイントなど）：月5,000〜15,000円相当</li>
          <li>ハンドメイド販売（minne・Creema）：月1〜5万円</li>
          <li>フリマ（メルカリ・ラクマ）：不要品処分で月1〜3万円</li>
          <li>ブログ・YouTube：半年〜1年で月1万円、育てれば副業税申告要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ポイ活＋クレカ積立で年10万円のリターン"
        description="楽天経済圏を使い込むと、年間10万ポイント以上が貯まる主婦・主夫も多数。そのポイントをそのまま新NISA投資に回せば、実質0円で資産形成が進む。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="🎁"
        highlight="年会費無料"
      />
      <AffiliateCTA
        title="スキマ時間で月5,000〜15,000円｜マクロミル"
        description="大手マクロミルのアンケートモニター。スマホで数分のアンケートに答えるだけでポイントが貯まり、現金や電子マネーに交換可能。扶養内で気軽に続けられる定番副業。"
        buttonText="マクロミルに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD"
        icon="📋"
        highlight="スキマ時間OK"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">主婦・主夫の確定申告が必要になるケース</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>副業所得（売上−経費）が年20万円超＋給与がない場合</li>
          <li>給与収入が103万円超（所得税発生）</li>
          <li>医療費控除（家族合算で年10万円超の医療費）</li>
          <li>ふるさと納税 6自治体超（ワンストップ特例不可）</li>
          <li>投資の損益通算・繰越控除を使う場合</li>
        </ol>
      </section>
    </>
  ),
  "business-card-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人事業主・法人向けビジネスカードの選び方</h2>
        <p>
          開業・起業した途端、立替経費の把握が煩雑になるのが個人事業主・法人の悩み。ビジネスカードは「経費の一元管理」「キャッシュフロー改善（最大55日後払い）」「会計ソフト連携」の3点で事業オーナーの時短を実現します。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年会費と初年度無料条件（開業直後は無料カードで十分）</li>
          <li>還元率（ビジネス系は0.5〜1.5%が標準）</li>
          <li>利用限度額（仕入れ・広告費・設備購入で月100万円超なら必須）</li>
          <li>会計ソフト連携（freee・マネフォ・弥生との自動仕訳）</li>
          <li>追加カード・ETCカード発行枚数</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 個人事業主・法人向けビジネスカードランキング"
        services={[
          {
            name: "三井住友カード ビジネスオーナーズ",
            rank: 1,
            highlight: "年会費永年無料｜個人事業主も法人も申込OK｜与信審査ゆるめ",
            features: [
              "年会費永年無料（ゴールド版は年会費5,500円＋年100万円利用で翌年以降無料）",
              "登記簿謄本・決算書不要、本人確認書類のみで申込可能",
              "追加カード年会費永年無料（18枚まで発行可）",
              "Amazon Business 利用で1.5%還元（ゴールド版）",
            ],
            href: "https://www.smbc-card.com/nyukai/affiliate/business/bo_lp.jsp",
            badge: "開業直後におすすめ",
          },
          {
            name: "freee カード Unlimited",
            rank: 2,
            highlight: "freee会計連携で自動仕訳｜限度額最大2億円｜AI審査で即日発行",
            features: [
              "freee会計と連動した自動仕訳で経理工数を大幅削減",
              "利用限度額はAIが動的に算出（最大2億円）",
              "年会費無料、海外決済手数料も無料",
              "決算書・登記簿不要、法人設立直後でも審査通過可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            badge: "会計連携最強",
          },
          {
            name: "楽天ビジネスカード",
            rank: 3,
            highlight: "楽天プレミアムカード必須｜空港ラウンジ｜1%還元",
            features: [
              "楽天プレミアムカード（年11,000円）の追加カードとして発行",
              "プライオリティパス無料で世界の空港ラウンジ使い放題",
              "楽天市場での仕入れで最大5%還元",
              "楽天市場の出店者と相性最高",
            ],
            href: "https://www.rakuten-card.co.jp/card/rakuten-business-card/",
          },
          {
            name: "JCB CARD Biz",
            rank: 4,
            highlight: "本人確認書類のみで申込｜JCBプロパーの信頼感",
            features: [
              "登記簿謄本・決算書不要、個人の本人確認書類のみで申込",
              "JCBプロパーの信頼性で対法人取引で有利",
              "年会費1,375円（初年度無料）",
              "弥生会計・freee・マネフォ 3大会計ソフトと連携",
            ],
            href: "https://www.jcb.co.jp/ordercard/business/biz/",
          },
          {
            name: "UPSIDER",
            rank: 5,
            highlight: "スタートアップ・急成長企業向け｜与信枠最大10億円",
            features: [
              "設立1日目のスタートアップでも与信枠発行可能",
              "使い切り型仮想カードを従業員ごとに無制限発行",
              "年会費無料、ポイント還元率1.0〜1.5%",
              "クラウド会計との仕訳連携＋承認フロー機能",
            ],
            href: "https://up-sider.com/lp/cards",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">用途別のビジネスカード選び方</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>開業直後・フリーランス</strong>：三井住友カードビジネスオーナーズ or freee カード Unlimited（年会費無料・決算書不要）
          </li>
          <li>
            <strong>ネットショップ運営者</strong>：楽天ビジネスカード（仕入れで5%還元）
          </li>
          <li>
            <strong>スタートアップ・急成長中</strong>：UPSIDER（与信枠10億円・従業員カード無制限）
          </li>
          <li>
            <strong>海外出張多い経営者</strong>：アメックス・ビジネス・ゴールド or JCBプラチナビジネス（ラウンジ・コンシェルジュ）
          </li>
          <li>
            <strong>広告出稿が多い</strong>：Google/Facebook広告出稿でマイル・ポイント還元を狙えるカード
          </li>
        </ul>
      </section>
      <AffiliateCTA
        title="法人・個人事業主の開業書類＋会計を一気通貫｜freee"
        description="開業届・青色申告承認申請・会計ソフト・法人カード（freee カード Unlimited）まで、freee1つで完結。個人事業主なら年額11,760円〜、開業直後の手続きに最適。"
        buttonText="freee会計に無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="開業書類も無料作成"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード利用の税務ポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>事業用と個人用を完全分離</strong>：事業利用のみのカードを1枚作ることで経理が格段に楽に
          </li>
          <li>
            <strong>カード明細は7年保存</strong>：電子帳簿保存法対応の会計ソフトで自動保存推奨
          </li>
          <li>
            <strong>年会費・付帯保険料は経費計上可</strong>：ビジネスカードの年会費は全額経費
          </li>
          <li>
            <strong>ポイント還元は「事業主借」</strong>：個人事業主のポイント還元は会計処理不要（収入計上しない）
          </li>
          <li>
            <strong>法人は貯まったポイントも売上</strong>：法人カードでのポイント還元は法人の収益として計上必要
          </li>
        </ol>
      </section>
      <AffiliateCTA
        title="広告出稿・サーバー代を事業用カードで一元管理｜エックスサーバー"
        description="月額693円〜の高速レンタルサーバー。事業用カードで決済すれば経費の仕訳も自動化。ビジネスサイト・LP運営の定番インフラ。"
        buttonText="エックスサーバーを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
        icon="🖥️"
        highlight="10日間無料お試し"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード発行時の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>法人代表者の個人信用情報で審査されるケースが多い</li>
          <li>決算書不要カードでも設立3年目以降は決算書提出を求められる場合あり</li>
          <li>法人化前の個人事業主はビジネスカード・個人カード両方の保有がベスト</li>
          <li>キャッシング枠は原則ゼロで設定（総量規制対象外だが信用情報に影響）</li>
          <li>家族・従業員カード発行時は与信枠を事前確認</li>
        </ul>
      </section>
    </>
  ),
  "fp-consultation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FP無料相談で解決できる3つの悩み</h2>
        <p>
          ファイナンシャルプランナー（FP）無料相談は、保険・住宅ローン・新NISA・老後資金・教育費など、人生のお金の悩みを専門家に相談できるサービス。相談料が無料なのは、保険や金融商品の販売手数料で運営しているため。「売り込まれそう」と不安な方もいますが、優良サービスなら無理な勧誘は一切ありません。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>保険の見直し（加入中の保険が過剰かどうかのチェック）</li>
          <li>住宅ローンの借り換え相談（金利・総返済額の最適化）</li>
          <li>老後資金・教育費の積立シミュレーション（新NISA・iDeCo活用）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめFP無料相談サービス"
        services={[
          {
            name: "保険見直しラボ",
            rank: 1,
            highlight: "業界経験12年超のベテランFP｜訪問or オンライン対応",
            features: [
              "全国約60拠点、訪問・店頭・オンライン全対応",
              "在籍FP300名以上、業界経験平均12年超のベテランFPが担当",
              "30社以上の保険会社を取扱い、中立的な比較提案",
              "相談料完全無料・何度相談しても無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "経験豊富FP",
          },
          {
            name: "マネプロ",
            rank: 2,
            highlight: "IFA所属FPが対応｜保険＋資産運用の総合相談",
            features: [
              "保険だけでなくNISA・iDeCo・不動産投資まで総合アドバイス",
              "IFA（独立系ファイナンシャルアドバイザー）所属FPが対応",
              "完全オンライン対応で全国から相談可能",
              "書面設計書を後日送付、納得してから保険契約OK",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+2YBOY+50+5YJRM",
          },
          {
            name: "ほけんのトータルプロフェッショナル",
            rank: 3,
            highlight: "ハウスメーカー・工務店との提携で住宅ローン相談も強い",
            features: [
              "全国270社以上のハウスメーカー・工務店と提携",
              "住宅購入タイミングの保険見直し・住宅ローン相談が得意",
              "40社以上の保険会社取扱いで比較提案",
              "家計全体の見直しにも対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+3A4U8A+3IQ8+5YJRM",
          },
          {
            name: "マネードクター",
            rank: 4,
            highlight: "FP資格保有者のみ｜オンライン面談に強い",
            features: [
              "在籍FP全員がFP資格保有者（CFP・1級FP技能士中心）",
              "オンライン面談比率が高くコロナ以降急成長",
              "ライフプラン表作成＋保険提案＋NISA提案がセット",
              "相談後のアフターフォローが手厚い",
            ],
            href: "https://www.money-doctor.co.jp/",
          },
          {
            name: "リクルート ほけん比較",
            rank: 5,
            highlight: "大手リクルート運営の安心感｜来店型でじっくり相談",
            features: [
              "全国350店舗以上の保険ショップと提携",
              "47社以上の保険会社から中立的に比較提案",
              "リクルートIDでポイントが貯まる",
              "自宅・カフェ・オンラインなど希望の場所で相談可能",
            ],
            href: "https://hoken.hikaku.recruit.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FP無料相談の当日の流れ（60〜90分）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>ヒアリング（15分）</strong>：家族構成・収入・支出・加入保険・今後のライフイベント
          </li>
          <li>
            <strong>現状分析（15分）</strong>：加入保険の過剰・不足、毎月キャッシュフロー診断
          </li>
          <li>
            <strong>ライフプラン表作成（15分）</strong>：老後・教育費・住宅購入までの長期シミュレーション
          </li>
          <li>
            <strong>改善提案（20分）</strong>：保険見直し案・新NISA積立額・iDeCo活用の提案
          </li>
          <li>
            <strong>質疑応答・次回予約（15分）</strong>：疑問点の解消、契約の持ち帰り判断
          </li>
        </ol>
      </section>
      <AffiliateCTA
        title="保険見直しで年10万円以上の節約事例多数｜保険見直しラボ"
        description="年収500万円の30代共働き夫婦で年20万円の保険料削減事例も。現加入保険の無駄をプロ視点でチェック、新NISA原資として月1万円以上を捻出。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FP相談を上手に使う5つのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>事前に質問リストを準備</strong>：時間限定の相談を有効活用
          </li>
          <li>
            <strong>現在の契約書類を持参</strong>：保険証券・源泉徴収票・家計簿スクショ
          </li>
          <li>
            <strong>複数FPに相談して比較</strong>：同じ悩みを2〜3社に相談して提案内容を比較
          </li>
          <li>
            <strong>即決しない</strong>：その場で契約を急かされたら保留、一晩冷静に考える
          </li>
          <li>
            <strong>3ヶ月後に再相談</strong>：プラン実行後の検証を依頼、継続的にFPを活用
          </li>
        </ol>
      </section>
      <AffiliateCTA
        title="投資の基礎から学びたい方｜ファイナンシャルアカデミー"
        description="FP相談の前に、自分で基礎知識を付けたい方向け。株式・投資信託・不動産・保険まで、プロ講師が体系的に教える日本最大級の投資スクール。無料体験セミナーあり。"
        buttonText="ファイナンシャルアカデミー無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="📚"
        highlight="無料体験セミナーあり"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FP相談で避けるべき5つの罠</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>外貨建て終身保険の過剰提案（為替リスクが大きい）</li>
          <li>変額保険の手数料の高さを説明しない FP に注意</li>
          <li>「この商品しか扱えない」という FPは中立性なし</li>
          <li>ライフプラン表の「老後必要額」が過剰提示</li>
          <li>提案書面を持ち帰らせない FP はNG</li>
        </ul>
      </section>
    </>
  ),
  "dual-income-household-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">共働き夫婦が最優先で使うべき資産形成4制度</h2>
        <p>
          共働き夫婦は、夫婦それぞれが新NISA・iDeCo・ふるさと納税を使えるため、単身者・片働き世帯の2倍の節税・非課税枠を享受できます。世帯年収700万〜1,500万円の共働き層が最も恩恵を受けやすく、20年複利で3,000〜5,000万円の資産形成が十分可能です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong>新NISA</strong>：夫婦それぞれ年360万円・生涯1,800万円 → 世帯で年720万円・生涯3,600万円
          </li>
          <li>
            <strong>iDeCo</strong>：会社員なら夫婦それぞれ月23,000円（合計月46,000円）の所得控除
          </li>
          <li>
            <strong>ふるさと納税</strong>：夫婦それぞれの年収に応じた上限額（世帯合計で10〜30万円）
          </li>
          <li>
            <strong>クレカ積立</strong>：夫婦別々のカードでそれぞれ月10万円積立→毎月年1,200〜2,400ポイント還元
          </li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="共働き夫婦におすすめ ネット証券（夫婦別口座推奨）"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "取扱投信業界最多｜三井住友カード積立で最大5%還元",
            features: [
              "新NISA対応投資信託 2,500本以上で選択肢豊富",
              "三井住友カードゴールドNLで1%、プラチナプリファードで3%還元",
              "家族ポイントでSBI経済圏を世帯で最大化",
              "IPO取扱数が業界No.1（夫婦2口座で当選確率UP）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "夫用おすすめ",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天カード積立で1%還元｜楽天経済圏で世帯最適化",
            features: [
              "楽天カード積立で最大1%還元・楽天キャッシュ積立併用で月10万円分還元対象",
              "楽天市場・楽天モバイル・楽天銀行との連携で還元率UP",
              "楽天証券×楽天銀行マネーブリッジで普通預金金利0.1%",
              "投資信託の自動積立設定が直感的",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "妻用おすすめ",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "クレカ積立還元率1.1%業界最高｜米国株が強い",
            features: [
              "マネックスカード積立で1.1%還元（業界最高水準）",
              "米国株の取扱4,000銘柄超、分析ツール「銘柄スカウター」が強力",
              "外国株の為替手数料が買付時無料",
              "iDeCo手数料も業界最安水準",
            ],
            href: "https://info.monex.co.jp/nisa/index.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">世帯年収別 共働き夫婦の最適プラン</h2>
        <ul className="list-disc list-inside space-y-3 text-sm">
          <li>
            <strong>世帯年収700万円（夫400＋妻300）</strong>：夫婦クレカ積立 月10万円×2＝年240万円、iDeCo月23,000円×2、ふるさと納税世帯合計6万円。20年後の資産目安: 5,000万円（年利5%）
          </li>
          <li>
            <strong>世帯年収1,000万円（夫600＋妻400）</strong>：夫婦クレカ積立フル活用、iDeCo フル枠、ふるさと納税世帯合計10〜13万円。20年後の資産目安: 7,000〜8,000万円
          </li>
          <li>
            <strong>世帯年収1,500万円（夫900＋妻600）</strong>：新NISA年720万円フル活用、iDeCo＋企業型DC、ふるさと納税世帯合計25〜30万円。20年後の資産目安: 1億円超も視野
          </li>
          <li>
            <strong>世帯年収2,000万円超（DINKs・共働きエグゼクティブ）</strong>：新NISA＋特定口座で米国個別株、不動産投資、IFA経由のプライベートバンキングも検討
          </li>
        </ul>
      </section>
      <AffiliateCTA
        title="夫婦で年2.4%還元｜楽天カード＋楽天証券"
        description="夫婦それぞれ楽天カード発行＋楽天証券でクレカ積立月10万円ずつ設定。世帯で年24万ポイント還元。さらに楽天市場での日用品購入でSPU最大化し、実質2.4%以上の節約に。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">共働き夫婦の家計管理 3つのパターン</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>
            <strong>折半型（おすすめ度：★★★★）</strong>：生活費を完全折半、残りは各自管理。独立性が高く、共働きDINKs向け
          </li>
          <li>
            <strong>共通財布型（おすすめ度：★★★）</strong>：2人の収入を共通口座へ。家計が透明、夫婦関係の対立が起きにくい反面、個人自由支出が少ない
          </li>
          <li>
            <strong>収入比例型（おすすめ度：★★★★★）</strong>：家計費を収入比で按分（例：夫6・妻4）。収入差の不公平感が出にくく、子育て期の変動にも柔軟
          </li>
        </ol>
      </section>
      <AffiliateCTA
        title="夫婦の家計・投資を1アプリで可視化｜マネーフォワードME"
        description="夫婦で共有アカウント＋個人アカウントで使い分け。銀行・クレカ・証券口座を自動連携して世帯資産を一元管理。無料版でも十分、プレミアム（月500円）で連携数無制限。"
        buttonText="マネーフォワードMEを見る"
        href="https://moneyforward.com/pages/mf_me/"
        icon="📱"
        highlight="無料で使える"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">共働き夫婦が失敗しがちな5つの罠</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>お互いの資産・負債を把握していない → 住宅ローン審査で発覚する事例多数</li>
          <li>どちらか片方だけ投資している → 片働きの税制メリットを使い切れない</li>
          <li>児童手当を生活費に吸収 → 本来なら全額ジュニアNISA代替で運用すべき</li>
          <li>夫婦で同じ保険に加入 → 収入保障保険は収入差で加入額を調整</li>
          <li>出産・育休時の収入減を想定していない → 生活費6ヶ月分以上の預金必須</li>
        </ul>
      </section>
      <AffiliateCTA
        title="夫婦の保険見直しで年10万円以上の節約事例も｜保険見直しラボ"
        description="共働き夫婦の保険は夫婦別々に入るか、収入保障保険を収入差で調整するのが鉄則。現加入保険の過不足をプロが無料で診断、新NISA原資を捻出。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "real-estate-crowdfunding-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産クラウドファンディングの基礎</h2>
        <p>
          不動産クラウドファンディングは、多数の投資家から集めた資金で不動産を運営し、賃料収入や売却益を分配する投資商品。1万円〜の少額から始められ、想定利回り年4〜10%と銀行預金を大きく上回ります。従来の現物不動産投資と違い、物件管理・空室リスク対応は運営会社が行うため、手間ゼロで不動産投資のリターンを得られます。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>1万円〜1口の少額投資（現物不動産の初期費用3,000万円超と対比）</li>
          <li>想定利回り 4〜10%（銀行預金 0.001%、国債 0.1%）</li>
          <li>優先劣後構造で元本保全性を高めた商品多数</li>
          <li>運営会社が物件管理・空室対応を実施、投資家は保有するのみ</li>
          <li>分配金は雑所得（総合課税、上限55%）のため高所得者は要注意</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめ不動産クラウドファンディング比較10社"
        services={[
          {
            name: "COZUCHI",
            rank: 1,
            highlight: "想定利回り4〜20%｜中途解約可能｜リアルエステート系の最大手",
            features: [
              "想定利回り年4%〜20%（平均8%超の高利回り案件多数）",
              "中途解約可能（他社は満期まで拘束、流動性で圧倒）",
              "運営会社 LAETOLI株式会社、累計調達額600億円超",
              "毎週新ファンド公開、募集額数億円でも即日完売",
            ],
            href: "https://cozuchi.com/",
            badge: "総合No.1",
          },
          {
            name: "CREAL",
            rank: 2,
            highlight: "東証プライム上場運営｜物件の透明性が高い",
            features: [
              "運営 株式会社クリアル（東証プライム上場）",
              "想定利回り年4〜6%、保育園・児童向け施設など公益性の高い物件",
              "1万円から投資可能、元本毀損なしの実績",
              "毎月1〜2件の新規ファンド、投資家優待もあり",
            ],
            href: "https://creal.jp/",
            badge: "東証上場",
          },
          {
            name: "利回りくん",
            rank: 3,
            highlight: "応援型×利回り｜楽天ポイント対応",
            features: [
              "楽天ポイント連携（楽天Payでファンド購入可能）",
              "地方創生・アイドル等の応援型ファンド多数",
              "想定利回り年3〜7%、長期運用向き",
              "毎月ファンド公開、最低1万円から",
            ],
            href: "https://利回りくん.com/",
          },
          {
            name: "OwnersBook",
            rank: 4,
            highlight: "東証上場ロードスターキャピタル運営｜厳選物件",
            features: [
              "運営 ロードスターキャピタル（東証上場）",
              "商業不動産メイン、案件数は少ないが厳選された優良物件",
              "想定利回り年4〜6%、元本毀損ゼロ",
              "1万円から、運用期間1〜3年中心",
            ],
            href: "https://www.ownersbook.jp/",
          },
          {
            name: "Funds",
            rank: 5,
            highlight: "貸付型（社債型）｜上場企業の資金調達に投資",
            features: [
              "ソーシャルレンディング型、上場企業への貸付",
              "想定利回り年1.5〜3%、安全性重視",
              "運用期間3ヶ月〜2年と短期",
              "元本毀損ゼロの実績、毎週新ファンド",
            ],
            href: "https://funds.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">不動産クラファン投資の始め方（3ステップ）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>口座開設（10〜15分）</strong>：本人確認書類の撮影、マイナンバー提出。最短翌営業日で開設完了
          </li>
          <li>
            <strong>投資先ファンド選定</strong>：想定利回り・運用期間・優先劣後比率・物件所在地を確認
          </li>
          <li>
            <strong>応募・入金</strong>：抽選または先着で応募。当選後に投資口座へ入金、運用開始
          </li>
        </ol>
      </section>
      <AffiliateCTA
        title="想定利回り平均8%超の実績｜COZUCHI"
        description="不動産クラファンの最大手COZUCHIは、想定利回り平均8%超、中途解約可能という業界随一の流動性。累計調達600億円超、募集開始数分で完売するファンドも。"
        buttonText="COZUCHIに無料登録"
        href="https://cozuchi.com/"
        icon="🏢"
        highlight="1万円から"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">優先劣後構造とリスク</h2>
        <p>
          多くの不動産クラファンは「優先劣後」構造を採用。投資家資金が「優先出資」、運営会社資金が「劣後出資」となり、損失発生時は劣後出資が先に毀損する仕組み。例えば劣後30%の案件なら、物件評価額が30%下落しても投資家の元本は毀損しない設計です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>優先劣後比率の高いファンド（劣後20〜30%）を選ぶのが基本</li>
          <li>運用期間が長いほど金利変動リスクに晒される</li>
          <li>元本保証はないが、上記構造により保全性は高め</li>
          <li>分配金は雑所得で年20万円超は確定申告必要</li>
          <li>運営会社破綻リスクはあり（投資家資産は分別管理されているが）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="東証プライム上場運営で透明性No.1｜CREAL"
        description="東証プライム上場のクリアル株式会社が運営。保育園・児童向け施設など公益性の高いファンドが中心で、社会貢献×投資を両立。元本毀損なしの実績。"
        buttonText="CREALを見る"
        href="https://creal.jp/"
        icon="🏫"
        highlight="東証プライム上場"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税金と確定申告のポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>分配金は雑所得</strong>：年20万円超で確定申告必須</li>
          <li><strong>総合課税</strong>：給与所得と合算で最大55%課税（高所得者は要注意）</li>
          <li><strong>損失の繰越不可</strong>：株式投資と違い、損失を翌年以降に繰り越せない</li>
          <li><strong>源泉徴収済</strong>：配当金は20.42%源泉徴収後に支払い</li>
          <li><strong>NISA対象外</strong>：不動産クラファンは新NISAの投資対象外</li>
        </ol>
      </section>
    </>
  ),
  "tax-accountant-consultation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人事業主・フリーランスが税理士に相談すべき3つの場面</h2>
        <p>
          個人事業主・フリーランスの確定申告は年1回ですが、売上1,000万円を超えるとインボイス登録・消費税納税義務が発生し、自力での申告は困難に。税理士に相談すべきタイミングを知り、適切なプロを選べば年間節税10〜50万円、かつ申告工数を10分の1に削減できます。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>売上800〜1,000万円を超えそうなタイミング（消費税対応）</li>
          <li>開業・法人成り・事業承継など事業の大きな転機</li>
          <li>税務調査の通知が来たとき</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 税理士無料相談おすすめサービス比較"
        services={[
          {
            name: "税理士ドットコム",
            rank: 1,
            highlight: "業界最大手｜5,800人超の税理士から無料紹介",
            features: [
              "全国5,800人超の税理士ネットワークから希望条件でマッチング",
              "コーディネーターによる面談事前サポート付き",
              "相談料・紹介料ともに完全無料",
              "弁護士ドットコムグループ運営の安心感",
            ],
            href: "https://www.zeiri4.com/",
            badge: "業界最大手",
          },
          {
            name: "税理士紹介ネットワーク",
            rank: 2,
            highlight: "創業25年以上｜全国対応・対面相談可能",
            features: [
              "1999年創業、累計20万社以上の紹介実績",
              "全国47都道府県対応、対面・オンライン選択可",
              "専任コーディネーターが複数税理士を比較提案",
              "相談料・紹介料完全無料",
            ],
            href: "https://www.zeirishi-network.com/",
          },
          {
            name: "freee税理士検索",
            rank: 3,
            highlight: "freee認定アドバイザーのみ｜会計ソフト連携最強",
            features: [
              "freee会計認定税理士のみ紹介、会計データ連携でスムーズ",
              "顧問料 月1万円〜の格安税理士が多い",
              "スタートアップ・ITフリーランスとの相性◎",
              "オンライン完結可能",
            ],
            href: "https://www.freee.co.jp/kojin/advisor/",
          },
          {
            name: "マネーフォワード税理士紹介",
            rank: 4,
            highlight: "マネフォ連携税理士｜IT系フリーランス向け",
            features: [
              "マネーフォワードクラウド連携税理士を紹介",
              "会計・給与・請求書を一元管理済みの企業に最適",
              "顧問料 月1万円〜、比較的若手税理士が多い",
              "オンライン面談中心",
            ],
            href: "https://biz.moneyforward.com/tax_adviser/",
          },
          {
            name: "ビスカス",
            rank: 5,
            highlight: "創業30年超｜大手企業向けにも対応",
            features: [
              "1997年創業、累計15万社以上の紹介実績",
              "個人事業主〜大企業まで幅広く対応",
              "相続・事業承継・M&Aなど専門領域にも強い",
              "紹介後3ヶ月のフォロー付き",
            ],
            href: "https://www.viscas.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税理士の費用相場（個人事業主）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>確定申告のみ（スポット）</strong>：5〜20万円（売上規模による）</li>
          <li><strong>顧問契約（月次）</strong>：月1万〜5万円＋決算料 10〜20万円</li>
          <li><strong>年間合計</strong>：20〜80万円（顧問契約の場合）</li>
          <li><strong>会計ソフト連携</strong>：freee/マネフォ連携で顧問料30〜50%割引の事務所多数</li>
        </ul>
      </section>
      <AffiliateCTA
        title="確定申告を自分でやるなら｜freee会計"
        description="売上500万円以下なら、freee会計で自力申告が現実的。AI仕訳・電子帳簿保存法対応・e-Tax連携で、税理士料金の節約と経理時間の短縮を両立。"
        buttonText="freee会計に無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="30日間無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税理士選びで確認すべき5つのポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>業種経験</strong>：同業他社の顧問経験があるか（飲食/IT/建設等）</li>
          <li><strong>会計ソフト対応</strong>：freee/マネフォ/弥生のいずれに対応か</li>
          <li><strong>インボイス対応</strong>：適格請求書発行事業者登録のサポート可否</li>
          <li><strong>節税提案</strong>：顧問料以上の節税額を生む提案力があるか</li>
          <li><strong>コミュニケーション</strong>：月1回の定例MTG・メール対応速度</li>
        </ol>
      </section>
      <AffiliateCTA
        title="確定申告ソフト比較｜マネーフォワードクラウド"
        description="マネフォと連携する税理士を後から探せる。給与計算・請求書・会計まで一元管理、月額980円〜。税理士と連携するときも会計データをそのまま引き継ぎ可能。"
        buttonText="マネーフォワードクラウド確認"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4O0FYA+3L0Y+BWGDT"
        icon="💼"
        highlight="30日間無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税理士を使わず自力申告できるラインは？</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>売上500万円以下＋単一業種＋仕入れ少 → 自力申告（会計ソフト活用）</li>
          <li>売上500万〜1,000万円 → スポット依頼（確定申告のみ）</li>
          <li>売上1,000万円超（インボイス登録） → 顧問契約推奨</li>
          <li>法人成り検討中 → 必ず税理士相談</li>
          <li>税務調査通知あり → 即税理士に相談（無料の電話相談から）</li>
        </ul>
      </section>
    </>
  ),
  "high-income-tax-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年収1000万円超の税負担の実態</h2>
        <p>
          年収1,000万円超の給与所得者は、所得税33%＋住民税10%＋社会保険料15%で、実質手取りは額面の60〜65%。年収1,500万円でも所得税45%の超過部分が発生し、2,000万円超は給与所得控除の上限で節税余地が激減します。制度を正しく使い倒すことで、年収1,500万円なら年間80〜120万円の節税が現実的です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年収1,000万円：所得税率33%（課税所得900万超部分）</li>
          <li>年収1,800万円超：所得税率40%</li>
          <li>年収4,000万円超：所得税率45%（住民税合わせて55%）</li>
          <li>年収850万円超：給与所得控除195万円で頭打ち（2020年改正）</li>
          <li>年収2,400万円超：基礎控除48万円の段階的縮小</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="高所得者の節税手段ランキング（年収1500万円モデル）"
        services={[
          {
            name: "iDeCo（企業年金なし）",
            rank: 1,
            highlight: "所得控除 月23,000円｜年27.6万円×税率40%＝11万円節税",
            features: [
              "企業年金なし会社員は月2.3万円（年27.6万円）が全額所得控除",
              "運用益も非課税（特定口座なら約20%課税）",
              "受取時の税制優遇（退職所得控除・公的年金等控除）",
              "SBI/楽天/マネックスは口座管理手数料 月171円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "最優先",
          },
          {
            name: "ふるさと納税",
            rank: 2,
            highlight: "年収1500万円で上限37万円｜実質2,000円で37万円分の返礼品",
            features: [
              "年収1,500万円で年間上限 約37万円",
              "高所得者ほど上限額が大きく、お得度がUP",
              "ワンストップ特例（6自治体以内）でラクラク申告不要",
              "楽天ふるさと納税なら最大30%ポイント還元",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
            badge: "即効性",
          },
          {
            name: "小規模企業共済",
            rank: 3,
            highlight: "個人事業主・経営者専用｜月7万円×税率40%＝33万円節税",
            features: [
              "個人事業主・法人役員のみ加入可能",
              "掛金 月1,000円〜7万円（年最大84万円）が全額所得控除",
              "20年超加入で元本割れなし、退職時は退職所得として受取",
              "貸付制度あり（掛金の範囲内で低利融資）",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
          {
            name: "新NISA",
            rank: 4,
            highlight: "運用益非課税（年20%相当を年率で節税）",
            features: [
              "年360万円・生涯1,800万円の非課税投資枠",
              "運用益・配当益が完全非課税（通常20.315%課税）",
              "クレカ積立で年1〜3%還元",
              "夫婦でそれぞれ口座開設で世帯3,600万円枠",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "長期複利",
          },
          {
            name: "不動産投資（区分マンション）",
            rank: 5,
            highlight: "減価償却で年収圧縮｜年間30〜80万円の損益通算節税",
            features: [
              "減価償却費で会計上の赤字を作り、給与所得と損益通算",
              "年収1,000万円超で効果大、2,500万円超はビルトイン可",
              "ローン金利・管理費・修繕費も経費",
              "出口戦略（売却益）を含めた総合判断が必要",
            ],
            href: "https://www.mogecheck.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収1500万円モデルの節税シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>iDeCo 月2.3万円</strong>：年27.6万円 × 税率40% ＝ <strong>約11万円節税</strong></li>
          <li><strong>ふるさと納税 37万円</strong>：実質2,000円で37万円分の返礼品（約11万円相当）＋楽天SPU還元</li>
          <li><strong>新NISA 年360万円フル活用</strong>：年利5%運用時、20年後の非課税メリット約700万円</li>
          <li><strong>医療費控除（家族合算）</strong>：年10万円超の医療費×税率40% ＝ 平均5〜10万円節税</li>
          <li><strong>生命保険料控除</strong>：新契約で年最大12万円×税率40% ＝ 4.8万円節税</li>
          <li><strong>合計節税額</strong>：<strong>年間約50〜80万円</strong>（初年度。20年複利で2,000万円超の差）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCo月2.3万円で年11万円節税｜SBI証券"
        description="高所得者のiDeCoは絶対必修。月2.3万円の全額所得控除で年間11万円以上の税金が戻り、さらに運用益も非課税。SBI証券は運営管理手数料無料、商品ラインナップも業界最多。"
        buttonText="SBI証券 iDeCoを見る"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html"
        icon="🏦"
        highlight="手数料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">2026年以降に注目すべき制度改正</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>相続時精算課税の年110万円基礎控除（2024改正）：生前贈与戦略の主流化</li>
          <li>生前贈与7年加算ルール：贈与は早めに開始（段階移行中）</li>
          <li>インボイス制度本格化：副業収入への影響</li>
          <li>ふるさと納税ルール厳格化（2024/10〜）：還元率・地場産品の条件強化</li>
          <li>退職所得の課税改正議論：勤続20年超の優遇縮小リスク</li>
        </ul>
      </section>
      <AffiliateCTA
        title="年37万円のふるさと納税を最大還元｜楽天ふるさと納税"
        description="年収1500万円なら上限約37万円。楽天ふるさと納税なら楽天市場のSPU（最大16倍）＋5と0の付くキャンペーンで、実質30%以上のポイント還元を狙える最強ルート。"
        buttonText="楽天ふるさと納税を見る"
        href="https://event.rakuten.co.jp/furusato/"
        icon="🎁"
        highlight="SPU最大16倍"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高所得者が避けるべき5つの落とし穴</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>営業に勧められるままの節税保険（手数料が高く実質節税にならない）</li>
          <li>タワマン節税（相続税評価額算定方法の改正で効果激減）</li>
          <li>海外不動産投資（税制改正で減価償却による損益通算不可）</li>
          <li>個人年金保険の過剰加入（iDeCoの方が圧倒的に有利）</li>
          <li>法人化を急ぎすぎる（売上800万円超＋利益500万円超が目安）</li>
        </ul>
      </section>
    </>
  ),
  "fixed-cost-reduction-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">固定費削減で年30万円節約の全体像</h2>
        <p>
          家計の固定費（通信費・保険・サブスク・光熱費・住居費）は、一度見直すだけで毎月自動的に節約効果が継続する最強の節約術。平均的な家庭で年間30〜50万円の削減が可能で、その資金を新NISAに回せば20年後に1,000〜2,000万円の資産差となります。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>通信費（スマホ＋ネット）：年10〜15万円削減</li>
          <li>保険（生命・医療）：年5〜15万円削減</li>
          <li>サブスク：年2〜6万円削減</li>
          <li>電気・ガス：年1〜5万円削減</li>
          <li>住宅ローン借り換え：総返済額100〜500万円削減</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="固定費削減 おすすめ見直し順"
        services={[
          {
            name: "格安SIM乗り換え",
            rank: 1,
            highlight: "大手3キャリアから格安SIMへ→月5,000円節約",
            features: [
              "大手キャリア（平均月8,000円）→ IIJmio/mineo/BIGLOBE モバイル（月1,500〜3,000円）",
              "家族4人なら月2万円、年24万円の節約",
              "通信品質も改善、楽天モバイルなら月3,000円使い放題",
              "MNP乗換で特典キャッシュバック",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8P60Z6+1QFI+2Z68LU",
            badge: "即効性No.1",
          },
          {
            name: "保険見直し",
            rank: 2,
            highlight: "過剰保険の見直しで月1〜2万円節約",
            features: [
              "死亡保険は収入保障型＋定期保険で十分（終身は不要）",
              "医療保険は高額療養費制度を踏まえて最小限で",
              "FP無料相談で30社から比較提案",
              "見直しで月1〜2万円、年12〜24万円削減可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "大幅削減",
          },
          {
            name: "光回線見直し",
            rank: 3,
            highlight: "NURO光・ドコモ光・ahamo光への乗換で月1,000〜3,000円節約",
            features: [
              "NURO光：通信速度業界No.1＋月5,200円",
              "auひかり・ドコモ光はスマホとセットで割引",
              "乗換キャッシュバック5〜10万円が毎月出る",
              "工事費無料キャンペーンを狙え",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8GTYIA+3HKU+1ZG8B6",
          },
          {
            name: "電気・ガス自由化",
            rank: 4,
            highlight: "電力・ガス会社切替で年1〜3万円節約",
            features: [
              "旧料金プランから新料金プランへの切替だけで5〜10%削減",
              "新電力（Looop/エルピオ/自然電力等）なら月5〜15%削減",
              "都市ガスは東ガス→大阪ガス系・LPガスなど地域依存",
              "切替は無料、工事不要で5分で完了",
            ],
            href: "https://enechange.jp/",
          },
          {
            name: "住宅ローン借り換え",
            rank: 5,
            highlight: "金利差0.5%の借り換えで総返済額100〜500万円削減",
            features: [
              "残高1,000万円以上＋金利差0.5%以上＋残期間10年以上が目安",
              "モゲチェックなら無料シミュレーション＋審査代行",
              "変動 0.3%台の商品多数、団信も進化中",
              "諸費用30〜100万円を上回る削減額になるかで判断",
            ],
            href: "https://www.mogecheck.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">固定費見直しの実行順</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>今週中</strong>：スマホプラン見直し（格安SIM乗換）、不要サブスク解約</li>
          <li><strong>今月中</strong>：光回線乗換、電力・ガス会社切替</li>
          <li><strong>3ヶ月以内</strong>：保険のFP相談、住宅ローン借換検討</li>
          <li><strong>6ヶ月以内</strong>：見直し後の浮いた固定費をそのまま新NISA自動積立に回す</li>
        </ol>
      </section>
      <AffiliateCTA
        title="通信費を月5,000円削減｜DTI SIM"
        description="格安SIMの大手、データ通信SIM 月660円〜、音声通話SIM 月1,200円〜。docomo回線で大手キャリアと同じ品質、乗換ならキャッシュバック最大1万円。"
        buttonText="DTI SIMを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXL+8P60Z6+1QFI+2Z68LU"
        icon="📱"
        highlight="月660円〜"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">削減した固定費の最適な再投資先</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月1万円 → 新NISAつみたて投資枠（年利5%で20年後 約411万円）</li>
          <li>月2万円 → 新NISA＋iDeCo併用（年利5%で20年後 約822万円＋所得控除）</li>
          <li>月3万円 → 新NISA成長投資枠も活用（年利6%で20年後 約1,386万円）</li>
          <li>削減額は絶対に生活費に吸収させず、自動積立で投資に回す</li>
          <li>ボーナス時に年間分を一括積立する方法もアリ</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険見直しで月1〜2万円節約｜保険見直しラボ"
        description="固定費見直しの本丸は保険。加入中の終身保険・医療保険の過不足をFPが無料診断、大半の家庭で月1〜2万円（年12〜24万円）の削減に成功。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">固定費削減でやってはいけない5つのこと</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>必要な保険まで解約（医療保険の見直しは慎重に、特に既往症あり）</li>
          <li>激安光回線の飛びつき（回線品質・サポート品質が悪い可能性）</li>
          <li>複数のキャンペーン条件併用による混乱（乗換タイミングずれ）</li>
          <li>通信費ばかり切り詰めて住居費を放置（最大の固定費）</li>
          <li>削減額をそのまま生活費に吸収（必ず投資に回す）</li>
        </ul>
      </section>
    </>
  ),
  "early-career-investment-roadmap": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新社会人が投資を始めるべき5つの理由</h2>
        <p>
          20代の新社会人が今すぐ投資を始めるべき最大の理由は「時間」。年利5%で月3万円を30年積立すれば2,500万円、40年なら4,575万円に。同じ金額を40代から始めると2,000万円未満にとどまります。新社会人の今こそ、月3万円から始められる最強の資産形成フェーズです。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>複利の効果は時間に比例（40年運用なら元本の5倍超に）</li>
          <li>新NISAで生涯1,800万円を30〜40代で使い切るのがベスト</li>
          <li>少額から始められる（月100円〜OK）</li>
          <li>給与天引きで貯金が苦手な人でも自動化できる</li>
          <li>20代で投資習慣を付ければ、将来の収入増にも備えられる</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="20代新社会人におすすめの資産形成プラン（年収350万円モデル）"
        services={[
          {
            name: "月3万円積立プラン（推奨）",
            rank: 1,
            highlight: "新NISAつみたて投資枠｜年利5%で30年後 約2,500万円",
            features: [
              "SBI証券 × 三井住友カードNL（年会費無料）でクレカ積立1%還元",
              "投資信託はeMAXIS Slim全世界株式 or S&P500一本でOK",
              "ボーナス月のみ増額設定も可能",
              "積立額の月3万円×年36万円を新NISAつみたて枠内で運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "月1万円スタートプラン",
            rank: 2,
            highlight: "投資初心者向け｜無理なく習慣化",
            features: [
              "楽天証券 × 楽天カード積立で1%ポイント還元",
              "生活費の見直し後に始めるので貯金ペースと両立",
              "月1万円×30年×年利5% ＝ 約832万円",
              "最初の3ヶ月で慣れたら月額増額を検討",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
          },
          {
            name: "会社の企業型DC＋新NISA併用",
            rank: 3,
            highlight: "企業年金ありの場合｜給与天引きで自動化",
            features: [
              "企業型DC加入者はiDeCoは月2万円上限、合わせて最強の節税",
              "企業型DCの運営会社によってはeMAXIS Slimが選べない場合も",
              "新NISA＋企業型DCで世帯年投資額を最大化",
              "転職時はiDeCoへの移換手続きを忘れずに",
            ],
            href: "https://www.sbisec.co.jp/ETGate/WPLETmgR001Control?OutSide=on&burl=search_home&cat1=home&cat2=none&getFlg=on&dir=home&file=home.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新社会人 月3万円プランのシミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>10年後（30歳）</strong>：元本360万円 → 年利5%で <strong>約466万円</strong>（+106万円）</li>
          <li><strong>20年後（40歳）</strong>：元本720万円 → 年利5%で <strong>約1,232万円</strong>（+512万円）</li>
          <li><strong>30年後（50歳）</strong>：元本1,080万円 → 年利5%で <strong>約2,497万円</strong>（+1,417万円）</li>
          <li><strong>40年後（60歳）</strong>：元本1,440万円 → 年利5%で <strong>約4,575万円</strong>（+3,135万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新社会人の口座開設は SBI証券｜クレカ積立1%還元"
        description="20代に圧倒的No.1のおすすめ。三井住友カードNL（年会費無料）でクレカ積立1%還元、投資信託の取扱2,500本以上。新NISAつみたて枠も成長枠も対応。"
        buttonText="SBI証券に口座開設"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">20代が最初にやるべき5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1（今週）</strong>：SBI証券 or 楽天証券で口座開設（10〜15分）</li>
          <li><strong>Step2（来週）</strong>：新NISA口座の申込（1〜2週間で開設完了）</li>
          <li><strong>Step3（口座開設後）</strong>：クレジットカード申込（三井住友NL or 楽天カード）</li>
          <li><strong>Step4（開設後）</strong>：クレカ積立 月3万円の自動設定、銘柄はeMAXIS Slim全世界株式</li>
          <li><strong>Step5（3ヶ月後）</strong>：生活費の見直しで積立額を月5万円に増額検討</li>
        </ol>
      </section>
      <AffiliateCTA
        title="楽天経済圏で始めるなら｜楽天カード"
        description="年会費永年無料の楽天カード。楽天証券のクレカ積立で1%還元、楽天市場利用でSPU最大化。新社会人の初クレカとしても使える。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新社会人がやりがちな投資の失敗</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ボーナス全額を株に突っ込む（長期積立から外れてしまう）</li>
          <li>変額保険・外貨建て保険を資産運用と勘違い（手数料が重い）</li>
          <li>高配当株・個別株から始める（インデックスの方が遥かに楽で成績が上）</li>
          <li>短期的な値動きで売却（長期保有の複利が途切れる）</li>
          <li>不要なFX・暗号資産への手出し（生活費に食い込むリスク）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="副業で積立原資を増やす｜クラウドワークス"
        description="新社会人の強み「時間」を活かして、週10時間の副業で月3〜8万円の追加収入。その全額を新NISAに回せば、30年後の資産は倍増レベル。"
        buttonText="クラウドワークスに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP"
        icon="💻"
        highlight="完全無料"
      />
    </>
  ),
  "auto-insurance-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット型 vs 代理店型：保険料に年3万円差</h2>
        <p>
          自動車保険は、ネット型（ダイレクト型）と代理店型で年間保険料に2〜5万円の差が出るのが通常。代理店型の人件費・店舗維持費が保険料に上乗せされているため、ネットで完結する型のほうが断然お得です。例えば30代・6S等級・軽自動車なら、代理店型 年8万円 vs ネット型 年5万円と、年3万円の差に。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ネット型の保険料：代理店型の60〜75%</li>
          <li>事故対応品質は両者大差なし（損保ジャパン・東京海上の再保険会社と連携）</li>
          <li>ネット型の弱点：対面相談がないため、複雑な事故対応で不便さを感じる場合あり</li>
          <li>代理店型の強み：複雑な車両改造・業務用利用などの特殊ケース</li>
          <li>乗換タイミングは満期日の1〜2ヶ月前から検討</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめ自動車保険ランキング（ネット型）"
        services={[
          {
            name: "ソニー損保",
            rank: 1,
            highlight: "走行距離で保険料変動｜ロードサービス業界最高水準",
            features: [
              "走行距離に応じた合理的な保険料設計",
              "事故対応満足度 JDパワー19年連続No.1",
              "無料ロードサービス（レッカー車最大150km無料）",
              "ネット割引最大10,000円",
            ],
            href: "https://www.sonysonpo.co.jp/",
            badge: "総合No.1",
          },
          {
            name: "SBI損保",
            rank: 2,
            highlight: "業界最安水準｜SBIグループのブランド力",
            features: [
              "ダイレクト型の中でも最安クラスの保険料",
              "SBI証券・楽天グループでも割引対象",
              "ロードサービス充実（レッカー最大100km無料）",
              "新規・継続とも2,500円割引",
            ],
            href: "https://www.sbisonpo.co.jp/",
            badge: "最安水準",
          },
          {
            name: "チューリッヒ",
            rank: 3,
            highlight: "海外展開の信頼感｜弁護士費用特約付帯",
            features: [
              "弁護士費用特約が基本セット（相手方との示談交渉で威力）",
              "スーパー自動車保険なら夫婦の運転も補償",
              "事故時の専門部隊対応が早い",
              "ネット割最大21,000円",
            ],
            href: "https://www.zurich.co.jp/",
          },
          {
            name: "アクサダイレクト",
            rank: 4,
            highlight: "世界最大級保険グループ｜若年層割引が手厚い",
            features: [
              "AXAグループ、世界64カ国1億500万人の顧客基盤",
              "新規契約でネット割20,000円",
              "23〜29歳の若年ドライバー向け保険料割引",
              "24時間365日事故受付",
            ],
            href: "https://www.axa-direct.co.jp/",
          },
          {
            name: "セゾン自動車火災（おとなの自動車保険）",
            rank: 5,
            highlight: "40〜50代に最適｜セゾンポイントが貯まる",
            features: [
              "40〜50代の安全運転層に優遇された保険料設計",
              "セゾン・UC/NICOSカード会員はさらに割引",
              "永久不滅ポイントが貯まる",
              "ALSOK事故現場急行サービスが無料",
            ],
            href: "https://www.ins-saison.co.jp/otona/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">一括見積もりサービスで最安値を見つける</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>インズウェブ：最大20社一括見積もり、乗換時の見積もり比較に</li>
          <li>保険スクエアbang!：5〜10社比較、カーライフアドバイザーが電話相談可</li>
          <li>保険の窓口インズウェブ：Yahoo!運営の一括サービス</li>
          <li>各社への直接見積もりより効率的（所要時間5〜10分）</li>
          <li>見積もり後のしつこい営業電話はない（最近の傾向）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="複数社一括で最安値を発見｜自動車保険の無料見積もり"
        description="ソニー損保・SBI損保・チューリッヒ・アクサダイレクト等を最大20社一括比較。車種・年齢・等級を入力するだけで、年間2〜5万円の節約につながる最適プランが見つかる。"
        buttonText="自動車保険を一括見積り"
        href="https://www.inzweb.com/"
        icon="🚗"
        highlight="無料・5分で完了"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">自動車保険選びのチェックリスト</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>対人・対物賠償無制限</strong>：絶対必須、上限設定はNG</li>
          <li><strong>人身傷害補償</strong>：運転者・同乗者のケガに必要（搭乗者傷害より優先）</li>
          <li><strong>車両保険</strong>：新車3年以内は必須、10年超の古い車は不要検討</li>
          <li><strong>弁護士費用特約</strong>：示談交渉で相手方に強く出られる、年1,500〜3,000円</li>
          <li><strong>家族限定・年齢条件</strong>：特約で保険料20〜30%削減</li>
        </ol>
      </section>
      <AffiliateCTA
        title="固定費まとめて最適化｜保険見直しラボ"
        description="自動車保険だけでなく、生命・医療保険も合わせて見直すことで年30万円超の固定費削減に。FPが家計全体を無料診断、新NISA原資の捻出に最適。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢・等級別の保険料目安（年間）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>20代（新規6S等級・軽自動車）：年10〜15万円</li>
          <li>30代（12〜15等級・コンパクトカー）：年5〜7万円</li>
          <li>40代（17〜18等級・ミニバン）：年4〜6万円</li>
          <li>50代（20等級・セダン）：年3〜5万円</li>
          <li>60代（20等級・軽自動車）：年3〜4万円</li>
        </ul>
      </section>
    </>
  ),
  "ifa-service-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">IFAとは？証券会社との違い</h2>
        <p>
          IFA（Independent Financial Advisor／独立系ファイナンシャルアドバイザー）は、特定の金融機関に属さず、中立的な立場で資産運用アドバイスを行うプロ。通常の証券会社担当者が自社商品の販売ノルマに縛られるのに対し、IFAは複数の証券会社・投資信託・保険等を横断して「本当に顧客のためになる提案」を行うのが特徴。資産1,000万円超の富裕層中心に利用が急増しています。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>転勤なし・担当者が一生変わらない長期パートナー</li>
          <li>複数の証券会社の商品を比較して中立的に提案</li>
          <li>相談料・報酬は取扱商品からの手数料で成立（顧客の追加負担なし）</li>
          <li>資産1,000万円以上あると対応可能なIFAが増える</li>
          <li>相続・事業承継・法人向けサービスも強み</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめIFAサービス比較"
        services={[
          {
            name: "マネックスONE",
            rank: 1,
            highlight: "マネックスグループ｜対面＋オンライン両対応",
            features: [
              "マネックス証券グループのIFAサービス",
              "東京・大阪・名古屋・福岡に対面拠点、全国オンライン対応",
              "資産500万円〜相談可能、富裕層特化プランも",
              "投資信託・外国株・IFA独自ファンドまで幅広い取扱",
            ],
            href: "https://www.monex.co.jp/info/home.html",
            badge: "総合No.1",
          },
          {
            name: "GAIA（ガイア）",
            rank: 2,
            highlight: "資産1億円超向け｜IFA業界の最大手",
            features: [
              "資産1億円超のクラス対応、富裕層特化",
              "相続・事業承継・ファミリーオフィス対応",
              "SBI・楽天・マネックス等の複数証券会社と提携",
              "東京・大阪・福岡の対面拠点＋オンライン",
            ],
            href: "https://www.gaiainc.co.jp/",
          },
          {
            name: "資産運用の窓口",
            rank: 3,
            highlight: "オンライン完結｜1,000万円〜対応",
            features: [
              "オンライン面談中心、全国から相談可能",
              "資産1,000万円〜3億円のレンジに強い",
              "初回相談無料、複数IFAから選べる",
              "マッチング後のアフターフォロー3ヶ月無料",
            ],
            href: "https://shisankakei.com/",
          },
          {
            name: "IFA JAPAN",
            rank: 4,
            highlight: "独立系IFA専門マッチング｜特化領域選択可",
            features: [
              "不動産・保険・相続など特化領域のIFAを紹介",
              "無料相談＋報告書作成",
              "顧客との相性重視のマッチング",
              "サポート後の満足度で乗換提案も可能",
            ],
            href: "https://ifa-japan.jp/",
          },
          {
            name: "楽天証券IFAコース",
            rank: 5,
            highlight: "楽天経済圏ユーザー向け｜低コスト",
            features: [
              "楽天証券と提携したIFAに相談可能",
              "楽天ポイント関連特典あり",
              "資産300万円〜対応でハードル低め",
              "NISA・iDeCo・投資信託中心のアドバイス",
            ],
            href: "https://www.rakuten-sec.co.jp/web/lp/ifa/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">IFAが向いている人・向かない人</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>向いている人</strong>：資産1,000万円以上、長期的な資産運用パートナーを探している、相続・事業承継の相談をしたい、積極的に海外株・投資信託を運用したい</li>
          <li><strong>向かない人</strong>：資産300万円以下（自力でSBI/楽天のインデックス積立で十分）、相談は手数料無料のネット証券で完結したい、短期売買中心でアクティブに取引したい</li>
        </ul>
      </section>
      <AffiliateCTA
        title="まずは自分で始める｜SBI証券 新NISA"
        description="IFA利用を検討する前に、新NISAとiDeCoでインデックス投資を開始するのが基本。SBI証券なら口座開設無料、クレカ積立でポイント還元1%〜5%。資産1,000万円到達までの王道ルート。"
        buttonText="SBI証券 新NISAを見る"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">IFA選びの5つのチェックポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>所属証券会社</strong>：SBI/楽天/マネックス/大和 等、複数と提携している方が選択肢多い</li>
          <li><strong>報酬体系</strong>：フィーベース（預かり資産の0.5〜1.5%/年） vs 手数料ベース（商品販売手数料）</li>
          <li><strong>金融資格</strong>：1級FP技能士・CFP・日本証券アナリスト協会CMA等</li>
          <li><strong>運用実績・他顧客レビュー</strong>：HP公開実績、面談時に過去の提案例を質問</li>
          <li><strong>相性</strong>：長期パートナーなので話しやすさ・信頼感が最重要</li>
        </ol>
      </section>
      <AffiliateCTA
        title="IFA相談前に基礎知識を｜ファイナンシャルアカデミー"
        description="IFA相談を有意義にするには、自分自身の金融リテラシーも必須。日本最大級の投資スクールで、株式・投資信託・不動産・保険を体系的に学べる。無料体験セミナーから。"
        buttonText="ファイナンシャルアカデミー無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="📚"
        highlight="無料体験セミナーあり"
      />
    </>
  ),
  "freelance-retirement-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスの年金の厳しい現実</h2>
        <p>
          会社員の年金（老齢基礎年金＋厚生年金）が平均月22万円なのに対し、フリーランス・個人事業主の年金（老齢基礎年金のみ）は月約6.5万円。月15万円の差は、25年で4,500万円にも及びます。これを補うには、iDeCo・付加年金・国民年金基金・小規模企業共済等を総動員する必要があります。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>会社員の年金：月22万円（基礎＋厚生＋企業年金）</li>
          <li>フリーランスの年金：月6.5万円（基礎のみ）</li>
          <li>差額を補う原資を、現役時代に自力で作る必要あり</li>
          <li>iDeCo月6.8万円（年81.6万円）で全額所得控除</li>
          <li>複数制度の組合せで老後月25万円の実現を目指す</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="フリーランス・個人事業主の年金4制度比較"
        services={[
          {
            name: "iDeCo（個人型確定拠出年金）",
            rank: 1,
            highlight: "月6.8万円上限｜全額所得控除＋運用益非課税",
            features: [
              "掛金上限 月6.8万円（年81.6万円）、会社員の3倍の枠",
              "掛金全額が所得控除 → 税率30%なら年24万円節税",
              "運用益非課税（特定口座なら20%課税）",
              "受取時の退職所得控除も活用可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "最優先",
          },
          {
            name: "付加年金",
            rank: 2,
            highlight: "月400円掛金｜2年で元が取れる最強コスパ",
            features: [
              "月400円のみ、国民年金保険料に上乗せ",
              "受給時は「200円×納付月数」が毎年の年金に追加",
              "10年納付で年24,000円の終身受給 → 10年で元が取れる",
              "国民年金基金との併用は不可（どちらか選択）",
            ],
            href: "https://www.nenkin.go.jp/service/kokunen/kokuminnenkin/20140213.html",
            badge: "最強コスパ",
          },
          {
            name: "国民年金基金",
            rank: 3,
            highlight: "月6.8万円枠｜確定年金・終身年金",
            features: [
              "確定給付型なのでiDeCoと違い受取額が確定",
              "iDeCoと合わせて月6.8万円の上限",
              "終身年金プランで長生きリスクに備え可",
              "インフレ対応がiDeCoより弱い",
            ],
            href: "https://www.npfa.or.jp/",
          },
          {
            name: "小規模企業共済",
            rank: 4,
            highlight: "月7万円掛金｜退職金としての受取",
            features: [
              "個人事業主・法人役員のみ加入可",
              "月1,000〜7万円、全額所得控除",
              "20年超加入で元本割れなし",
              "貸付制度あり（掛金範囲内で低利融資）",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
          {
            name: "新NISA",
            rank: 5,
            highlight: "年360万円枠｜運用益完全非課税",
            features: [
              "老後資金の運用益が完全非課税",
              "生涯1,800万円の枠、iDeCoと併用OK",
              "60歳以前の引出も自由、流動性高い",
              "クレカ積立でポイント還元も享受",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスの老後資金3,000万円プラン</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>iDeCo月6.8万円×30年×年利5%</strong> → 約5,580万円</li>
          <li><strong>付加年金月400円×30年</strong> → 老齢基礎年金に年72,000円追加</li>
          <li><strong>小規模企業共済月3万円×30年</strong> → 元本1,080万円＋運用益</li>
          <li><strong>新NISA月3万円×30年×年利5%</strong> → 約2,500万円</li>
          <li><strong>合計老後資産</strong>：約8,000万円＋国民年金（終身月6.5万円）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="フリーランス最強の老後対策｜SBI証券 iDeCo"
        description="フリーランスのiDeCoは月6.8万円まで掛けられて、全額所得控除。SBI証券なら運営管理手数料無料、投資信託ラインナップも業界最多。今すぐ始めれば30年で5,000万円超の老後資金に。"
        buttonText="SBI証券 iDeCo 詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html"
        icon="🏦"
        highlight="手数料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年金制度の落とし穴と対策</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>国民年金未納期間があると、iDeCoの節税メリットが制限される</li>
          <li>iDeCoは60歳まで引き出し不可（流動性ゼロの縛り）</li>
          <li>国民年金基金は物価変動に弱い（インフレ時に目減り）</li>
          <li>小規模企業共済は20年未満の解約で元本割れ</li>
          <li>付加年金と国民年金基金は併用不可（どちらかを選択）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="会計・確定申告も自動化｜freee会計"
        description="フリーランスが年金・節税戦略を回すには、正確な所得把握が大前提。freee会計なら、カード連携・AI仕訳・電子帳簿保存法対応で経理時間を1/3に。iDeCo・小規模企業共済の計算も楽に。"
        buttonText="freee会計に無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="30日間無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスが今すぐやるべき3ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>今月中</strong>：付加年金を役所で申込（月400円、最強コスパ）</li>
          <li><strong>3ヶ月以内</strong>：iDeCo口座開設（SBI or 楽天）、月1万円〜スタート</li>
          <li><strong>6ヶ月以内</strong>：売上安定後、小規模企業共済 月1〜3万円、iDeCo上限まで増額</li>
        </ol>
      </section>
    </>
  ),
  "inheritance-tax-filing-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">相続税申告の基礎知識</h2>
        <p>
          相続税の申告は、相続開始（被相続人の死亡）を知った日の翌日から10ヶ月以内が期限。基礎控除「3,000万円＋600万円×法定相続人の数」を超える遺産がある場合、申告必須です。税理士に依頼すれば、複雑な評価・各種特例適用で数百万円単位の節税も可能。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>基礎控除: 3,000万円＋600万円×法定相続人の数</li>
          <li>申告期限: 相続開始から10ヶ月以内（延長不可）</li>
          <li>税理士費用相場: 遺産総額の0.5〜1.0%（最低30〜50万円）</li>
          <li>相続税は累進課税: 10%〜最大55%</li>
          <li>小規模宅地等の特例: 自宅評価額80%減</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 相続税申告おすすめ税理士紹介サービス"
        services={[
          {
            name: "税理士ドットコム",
            rank: 1,
            highlight: "全国5,800人超の税理士から相続税に強い専門家を無料紹介",
            features: [
              "相続税申告経験豊富な税理士を指定可能",
              "コーディネーターによる複数税理士の比較支援",
              "紹介料・相談料ともに完全無料",
              "弁護士ドットコムグループの信頼性",
            ],
            href: "https://www.zeiri4.com/",
            badge: "業界最大手",
          },
          {
            name: "ベンチャーサポート相続税理士法人",
            rank: 2,
            highlight: "相続税申告特化｜年間2,500件超の実績",
            features: [
              "相続税申告のみに特化した税理士法人",
              "土日祝も相談対応、オンライン相談可",
              "初回相談60分無料",
              "遺産5,000万円〜30億円まで対応",
            ],
            href: "https://v-baitai.com/",
          },
          {
            name: "チェスター",
            rank: 3,
            highlight: "相続税専門｜累計申告実績2万件超",
            features: [
              "相続税専門の税理士法人、累計2万件の申告実績",
              "税務調査率0.5%（業界平均10%）",
              "全国12拠点＋オンライン",
              "初回相談無料＋書面見積",
            ],
            href: "https://chester-tax.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">遺産額別の税理士費用目安</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>遺産5,000万円：税理士費用 30〜50万円</li>
          <li>遺産1億円：税理士費用 50〜100万円</li>
          <li>遺産3億円：税理士費用 100〜200万円</li>
          <li>遺産5億円超：税理士費用 200〜500万円</li>
          <li>※ 節税効果は税理士費用の3〜10倍になるケース多数</li>
        </ul>
      </section>
      <AffiliateCTA
        title="相続税申告の相談を今すぐ｜税理士ドットコム"
        description="相続税申告は経験豊富な専門税理士選びが節税の鍵。税理士ドットコムなら全国5,800人から相続税に強い税理士を無料紹介、複数事務所の比較も可能。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="📋"
        highlight="紹介料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">生前にやるべき相続対策5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>生前贈与の開始</strong>：年110万円の暦年贈与を7年以上前から</li>
          <li><strong>生命保険の活用</strong>：死亡保険金は「500万円×法定相続人」まで非課税</li>
          <li><strong>不動産の組み換え</strong>：賃貸物件化で評価額圧縮</li>
          <li><strong>遺言書作成</strong>：公正証書遺言で争族リスク回避</li>
          <li><strong>税理士との顧問契約</strong>：高資産家は生前から相続税シミュレーション</li>
        </ol>
      </section>
      <AffiliateCTA
        title="生命保険で相続対策｜保険見直しラボ"
        description="一時払終身保険で「500万円×法定相続人」の非課税枠を活用。相続人3人なら1,500万円を無税で移転可能。FPが最適プランを無料設計。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料無料"
      />
    </>
  ),
  "company-incorporation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">法人設立のメリットと判断基準</h2>
        <p>
          個人事業主が法人化（法人成り）を検討すべきタイミングは「課税所得900万円超」or「売上1,000万円超」。所得税の累進課税（最大55%）から法人税（実効税率25〜30%）に移行でき、年数十万〜数百万円の節税が可能。ただし社会保険加入義務など固定費増加もあるため、慎重に判断が必要です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>課税所得900万円超: 法人化で年30〜50万円節税</li>
          <li>売上1,000万円超: 2期連続でインボイス・消費税対応</li>
          <li>法人化の固定費: 社保・税理士・法人住民税均等割7万円</li>
          <li>合同会社の設立費用: 約6〜11万円</li>
          <li>株式会社の設立費用: 約20〜25万円</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 法人設立代行サービス比較"
        services={[
          {
            name: "freee会社設立",
            rank: 1,
            highlight: "設立費用0円｜AIが書類を自動作成",
            features: [
              "電子定款の代行で印紙代4万円が無料",
              "AIが入力データから定款・設立書類を自動生成",
              "freee会計と連携、設立後の経理も一気通貫",
              "合同会社6万円/株式会社22万円のみで設立可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            badge: "業界No.1",
          },
          {
            name: "マネーフォワード会社設立",
            rank: 2,
            highlight: "0円設立｜給与計算・請求書連携",
            features: [
              "電子定款対応で印紙代4万円無料",
              "設立後の経理・給与計算・請求書が一元管理",
              "法人銀行口座・ビジネスカードとの連携",
              "税理士マッチング機能付き",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4O0FYA+3L0Y+BWGDT",
          },
          {
            name: "弥生の設立支援",
            rank: 3,
            highlight: "老舗会計ソフト｜サポート手厚い",
            features: [
              "1987年創業の老舗会計ソフト、設立後の弥生会計連携",
              "電話サポート無料で初心者に優しい",
              "電子定款対応、印紙代4万円無料",
              "独立系税理士との連携が豊富",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">合同会社 vs 株式会社 徹底比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>合同会社</strong>：設立費用 約6万円、小規模事業主・フリーランス法人化に最適、信用力は株式会社より劣る</li>
          <li><strong>株式会社</strong>：設立費用 約20万円、資金調達・採用でブランド力高い、上場準備可能</li>
          <li><strong>節税効果</strong>：両者同じ（法人税制は共通）</li>
          <li><strong>決算公告義務</strong>：株式会社は必須（官報6万円/年）、合同会社は不要</li>
          <li><strong>推奨</strong>：1人法人・家族経営 → 合同会社、資金調達・採用重視 → 株式会社</li>
        </ul>
      </section>
      <AffiliateCTA
        title="設立費用0円・AI自動作成｜freee会社設立"
        description="freee会社設立なら、AI質問に答えるだけで定款・登記書類を自動作成。電子定款で印紙代4万円を節約、freee会計との連携で設立後の経理も自動化。"
        buttonText="freeeで無料会社設立"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="🏛️"
        highlight="設立費用0円"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">法人化後に必要な手続きリスト</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>法人銀行口座開設（GMOあおぞら・楽天ビジネスが開設容易）</li>
          <li>法人ビジネスカード（三井住友ビジネスオーナーズ/freeeカード）</li>
          <li>社会保険の加入手続き（健康保険・厚生年金）</li>
          <li>労働保険（従業員雇用時）</li>
          <li>税理士との顧問契約（月額1.5〜3万円）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="法人化後の税理士探しは｜税理士ドットコム"
        description="法人設立後の税務は個人事業主より複雑。税理士ドットコムなら法人対応の税理士を全国5,800人から無料紹介、月額顧問料も比較可能。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="👔"
        highlight="紹介料無料"
      />
    </>
  ),
  "retirement-payout-investment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">退職金運用で失敗しないための3原則</h2>
        <p>
          退職金1,500〜2,500万円は、老後30年の生活を支える原資。一括で高リスク商品に投資すると元本毀損のリスクが大きく、逆に全額定期預金ではインフレで目減りします。「守り7：攻め3」の原則で、新NISA・定期預金・投資信託に分散するのが王道です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>退職金を一括投資しない（平均購入コストの観点で不利）</li>
          <li>銀行・証券会社の営業商品を鵜呑みにしない（外貨建て保険・仕組債等）</li>
          <li>新NISA枠（生涯1,800万円）をフル活用</li>
          <li>リタイア世代は「守り7：攻め3」の分散</li>
          <li>IFA相談で複数プランを比較</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="退職金2,000万円の最適配分モデル"
        services={[
          {
            name: "守り：定期預金・普通預金",
            rank: 1,
            highlight: "700万円（35%）｜生活防衛資金3年分",
            features: [
              "ネット銀行の定期預金で年0.2〜0.4%",
              "生活費の3年分を即アクセス可能に",
              "元本保証、流動性も確保",
              "SBI新生銀行・楽天銀行・あおぞら銀行が高金利",
            ],
            href: "https://www.rakuten-bank.co.jp/",
            badge: "安全資産",
          },
          {
            name: "新NISA 成長投資枠",
            rank: 2,
            highlight: "600万円（30%）｜米国インデックス・高配当ETF",
            features: [
              "eMAXIS Slim 米国株式（S&P500）で長期運用",
              "高配当ETF（HDV/VYM）で毎月の配当収入",
              "年間240万円枠を2〜3年で埋める",
              "運用益・配当非課税で節税効果大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "長期成長",
          },
          {
            name: "新NISA つみたて投資枠",
            rank: 3,
            highlight: "360万円（18%）｜全世界株式で月10万円積立",
            features: [
              "eMAXIS Slim 全世界株式で分散投資",
              "月10万円×3年で埋める",
              "ドルコスト平均法でリスク低減",
              "クレカ積立で1%還元も享受",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "不動産クラファン",
            rank: 4,
            highlight: "200万円（10%）｜年利4〜8%のインカム重視",
            features: [
              "COZUCHI・CREAL等で複数ファンド分散",
              "想定利回り年4〜8%、運用期間1〜3年",
              "1万円から、複数ファンドで分散",
              "配当は雑所得（総合課税）注意",
            ],
            href: "https://cozuchi.com/",
          },
          {
            name: "個人向け国債",
            rank: 5,
            highlight: "140万円（7%）｜元本保証の守り",
            features: [
              "変動10年型で金利上昇に強い",
              "元本保証＋年0.3〜0.5%の利息",
              "1年経過後はいつでも解約可（1年分利息）",
              "インフレ懸念時の守りとして",
            ],
            href: "https://www.mof.go.jp/jgbs/individual/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">退職金運用のNGパターン</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>銀行の窓口で勧められる「外貨建て終身保険」（手数料年3〜5%）</li>
          <li>証券会社の「ファンドラップ」（手数料年2〜3%で運用益ほぼゼロ）</li>
          <li>高配当に惹かれる「毎月分配型投信」（元本取り崩し型）</li>
          <li>知識なしの「個別株集中投資」（暴落で老後破綻）</li>
          <li>親戚・友人からの「高利回り投資話」（元本毀損リスク高）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="退職金の正しい運用相談を｜保険見直しラボのFP"
        description="退職金は老後30年の命綱。FP無料相談で、あなたの家族構成・資産状況に合わせた最適配分プランを中立的に提案。外貨建て保険等の罠も回避できる。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">資産3,000万円超はIFAを検討</h2>
        <p>
          退職金＋既存資産で3,000万円を超える場合、IFA（独立系ファイナンシャルアドバイザー）を検討する価値あり。特定金融機関に縛られず、中立的な資産配分提案とリバランス支援を長期的に受けられます。
        </p>
      </section>
      <AffiliateCTA
        title="資産3,000万円超ならIFAも｜マネックスONE"
        description="マネックスグループのIFAサービス。東京・大阪・名古屋・福岡の対面拠点＋オンライン対応で、中立的な資産運用提案を受けられる。"
        buttonText="マネックスONEの詳細を見る"
        href="https://www.monex.co.jp/info/home.html"
        icon="💼"
        highlight="対面&オンライン対応"
      />
    </>
  ),
  "senior-shukatsu-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">60代以降に必要な終活の全体像</h2>
        <p>
          終活は「自分の死後、家族に迷惑をかけない」準備。エンディングノート・遺言書・相続税対策・お墓・葬儀・デジタル遺品整理まで、60代から計画的に進めることで家族の負担を大幅に軽減できます。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>エンディングノート作成（市販のものや無料テンプレでOK）</li>
          <li>遺言書作成（公正証書遺言推奨、法務局保管制度も活用）</li>
          <li>相続税対策（基礎控除超えなら生前贈与・保険活用）</li>
          <li>お墓・葬儀の生前準備（費用100〜400万円の幅）</li>
          <li>デジタル遺品整理（SNS・サブスク・銀行・暗号資産）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="終活に必要なサービス一覧"
        services={[
          {
            name: "FP無料相談（相続対策）",
            rank: 1,
            highlight: "相続税シミュレーション＋保険活用",
            features: [
              "生前贈与の計画立て",
              "生命保険を使った相続税非課税枠の活用",
              "家族構成から最適な相続対策を提案",
              "相談料完全無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "まず最初に",
          },
          {
            name: "税理士紹介（遺言・相続税）",
            rank: 2,
            highlight: "公正証書遺言・相続税申告の専門家紹介",
            features: [
              "相続専門税理士の無料マッチング",
              "公正証書遺言の作成サポート",
              "相続税シミュレーションと節税提案",
              "全国5,800人超の税理士から選択",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "生命保険（終身保険）",
            rank: 3,
            highlight: "500万円×法定相続人数の非課税枠",
            features: [
              "相続人3人なら1,500万円を無税で移転",
              "現金を保険に組み替えることで評価額圧縮",
              "80代でも加入可能な一時払終身保険",
              "遺産分割の指定もセットで可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">終活でやるべき順番（チェックリスト）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1</strong>：エンディングノートを書き始める（家族構成・資産状況・希望）</li>
          <li><strong>Step2</strong>：資産目録作成（銀行口座・証券口座・保険・不動産）</li>
          <li><strong>Step3</strong>：FP or 税理士に相続税シミュレーション依頼</li>
          <li><strong>Step4</strong>：遺言書作成（法務局保管制度 or 公正証書）</li>
          <li><strong>Step5</strong>：生前贈与（年110万円）開始、生命保険で非課税枠活用</li>
          <li><strong>Step6</strong>：お墓・葬儀の生前準備（家族と相談）</li>
          <li><strong>Step7</strong>：デジタル遺品整理（ID・パスワード・サブスク一覧）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="相続税対策をFPに無料相談｜保険見直しラボ"
        description="相続税対策で最も手堅いのが生命保険の非課税枠活用。FP無料相談で、家族構成に応じた最適な終身保険プランを提案。即日加入できる80代向け商品も。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">終活での失敗を防ぐ5つの注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>家族と情報を共有しない（突然の事態で遺族が困る）</li>
          <li>高齢での高リスク投資（値下がりから回復できない）</li>
          <li>詐欺商法への警戒不足（「投資・お墓・墓地」の勧誘）</li>
          <li>遺言書の方式ミス（自筆要件・押印漏れで無効）</li>
          <li>生前贈与が名義預金扱い（贈与契約書なし）</li>
        </ul>
      </section>
    </>
  ),
  "professional-asset-management": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医師・弁護士・士業の資産運用が特殊な理由</h2>
        <p>
          年収2,000万円超の医師・弁護士・税理士・公認会計士等は、一般サラリーマンと税・社会保険・資産規模が全く異なります。給与所得控除195万円で頭打ち、所得税45%＋住民税10%＝55%課税が常態化。通常の新NISAだけでなく、IFA経由のプライベートバンク・不動産投資・事業承継まで、専門家と長期的に組むのが王道です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年収2,400万円超: 基礎控除48万円の段階縮小</li>
          <li>年収4,000万円超: 基礎控除ゼロ・税率55%</li>
          <li>個人の節税枠は急速に限界を迎える</li>
          <li>法人化・MS法人・不動産投資等の活用が必須</li>
          <li>IFA・税理士・弁護士のチーム体制が基本</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="高所得専門職の資産運用4本柱"
        services={[
          {
            name: "IFA経由のプライベートバンキング",
            rank: 1,
            highlight: "資産1億円超向け｜複数証券会社・海外資産にアクセス",
            features: [
              "マネックスONE・GAIA等の大手IFAと契約",
              "複数証券会社＋海外ファンド＋私募ファンド",
              "長期的な担当者が資産運用・税務を伴走",
              "相続・事業承継・ファミリーオフィス対応",
            ],
            href: "https://www.monex.co.jp/info/home.html",
            badge: "富裕層向け",
          },
          {
            name: "不動産投資（区分マンション・一棟物）",
            rank: 2,
            highlight: "減価償却で損益通算｜年間数十〜数百万円節税",
            features: [
              "都内区分マンションで減価償却",
              "年収2,000万円超なら損益通算効果絶大",
              "モゲチェック等の一括シミュレーション活用",
              "出口戦略含めた総合コンサルが必須",
            ],
            href: "https://www.mogecheck.jp/",
          },
          {
            name: "医療法人・MS法人活用（医師限定）",
            rank: 3,
            highlight: "医療法人化で所得分散｜年500万円超の節税事例",
            features: [
              "医療法人設立で所得分散・経費範囲拡大",
              "MS法人（メディカルサービス法人）で診療報酬以外を計上",
              "役員報酬の分散で家族の所得税率下げ",
              "税理士＋弁護士の連携で設立支援",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "小規模企業共済（個人開業医・士業）",
            rank: 4,
            highlight: "月7万円全額所得控除｜20年で1,680万円の退職金",
            features: [
              "個人事業主・法人役員が加入可能",
              "掛金 月1,000〜7万円全額所得控除",
              "税率50%なら月3.5万円の即効節税",
              "20年超で退職金扱いの有利課税",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の推奨構成</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>年収2,000万円（勤務医・中堅士業）</strong>：新NISA＋iDeCo＋小規模企業共済＋区分マンション1戸</li>
          <li><strong>年収3,000万円（開業医・大手士業パートナー）</strong>：上記＋法人設立＋不動産2〜3戸＋IFA</li>
          <li><strong>年収5,000万円超（院長・事務所経営者）</strong>：上記＋医療法人／MS法人＋一棟マンション＋相続対策</li>
          <li><strong>年収1億円超</strong>：プライベートバンク＋海外資産＋事業承継戦略（5年以上の計画）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="資産1億円超の相談なら｜マネックスONE"
        description="マネックスグループのIFAサービスで、複数証券会社の商品を横断的に提案。1億円超の運用・相続・事業承継まで、長期パートナーとして伴走。"
        buttonText="マネックスONEの詳細"
        href="https://www.monex.co.jp/info/home.html"
        icon="💼"
        highlight="富裕層特化"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">専門家チームの構築手順</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1</strong>：信頼できる税理士を見つける（医療・士業特化税理士）</li>
          <li><strong>Step2</strong>：資産1億円超ならIFAとも契約</li>
          <li><strong>Step3</strong>：不動産投資コンサル（モゲチェック等）で物件選定</li>
          <li><strong>Step4</strong>：弁護士（相続・事業承継）との顧問契約</li>
          <li><strong>Step5</strong>：年1回のチーム合同ミーティングで資産戦略レビュー</li>
        </ol>
      </section>
      <AffiliateCTA
        title="医療・士業特化税理士を無料紹介｜税理士ドットコム"
        description="医師・弁護士・士業の税務は通常のサラリーマンとは全く異なる。業種特化税理士を全国5,800人から無料マッチング、複数事務所の比較も。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="👔"
        highlight="紹介料無料"
      />
    </>
  ),
  "ideco-by-age-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別iDeCoの考え方</h2>
        <p>
          iDeCoは加入時の年齢によって運用期間・受取までの時間軸が違うため、最適なポートフォリオが大きく変わります。20代の若年層は100%株式で攻め、50代は債券を増やして守りを固めるのが基本。受取方法（一時金 or 年金）も年齢別の出口戦略として重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="年代別iDeCoポートフォリオ目安"
        services={[
          {
            name: "20代（運用期間30年以上）",
            rank: 1,
            highlight: "100%株式｜リスク最大化で複利を享受",
            features: [
              "eMAXIS Slim 全世界株式（オルカン）100%",
              "月2.3万円で30年運用＝2,000万円超",
              "受取時に税控除フル活用（退職所得控除）",
              "会社員は企業型DCと併用で月2万円上限",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "積極運用",
          },
          {
            name: "30代（運用期間20〜30年）",
            rank: 2,
            highlight: "株式90%+債券10%｜結婚・育児コスト対応",
            features: [
              "オルカン or S&P500中心の積立",
              "掛金は昇給に応じて増額（〜月2.3万円）",
              "同時に新NISAつみたて枠も並走",
              "年収700万円台なら年6〜10万円の節税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "成長期",
          },
          {
            name: "40代（運用期間15〜20年）",
            rank: 3,
            highlight: "株式70%+債券30%｜老後資金の本格準備",
            features: [
              "株式重視でも債券・先進国ETFで安定化",
              "教育費ピーク後に掛金増額",
              "iDeCo＋新NISAで老後1,500〜2,500万円",
              "年収900万円台で年10〜15万円節税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "50代（運用期間5〜15年）",
            rank: 4,
            highlight: "株式50%+債券50%｜安定重視に移行",
            features: [
              "バランスファンド or インデックス＋債券",
              "55歳以上でも加入可（60歳までは掛金）",
              "受取方法は退職金と連動で調整",
              "掛金上限まで積立＝退職金代替",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">会社員の掛金上限（再確認）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>会社員（企業年金なし）：月2.3万円（年27.6万円）</li>
          <li>会社員（企業型DCのみ）：月2万円（年24万円）</li>
          <li>会社員（確定給付企業年金あり）：月1.2万円（年14.4万円）</li>
          <li>公務員：月1.2万円（年14.4万円）</li>
          <li>自営業・フリーランス：月6.8万円（年81.6万円）</li>
          <li>専業主婦（夫）：月2.3万円（年27.6万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCo口座開設はSBI証券｜運営管理手数料無料"
        description="SBI証券のiDeCoは運営管理手数料無料で最安水準。投資信託ラインナップも業界最多クラス（オルカン・S&P500も対応）、年代別の最適ファンドが見つかる。"
        buttonText="SBI証券 iDeCoを見る"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html"
        icon="🏦"
        highlight="手数料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">受取方法の選び方</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>一時金（一括受取）</strong>：退職所得控除活用、勤続年数次第で非課税</li>
          <li><strong>年金受取（60〜70歳）</strong>：公的年金等控除と併用で税メリット</li>
          <li><strong>併用</strong>：一時金＋年金の組み合わせで柔軟に設計</li>
          <li><strong>受取は60〜75歳まで遅延可能</strong>：他資産との調整で最適化</li>
        </ul>
      </section>
    </>
  ),
  "life-insurance-case-studies": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生命保険見直しで月1万円以上節約の実例</h2>
        <p>
          「なんとなく」加入している生命保険を見直すと、ほとんどの家庭で月1〜2万円（年12〜24万円）の節約が可能。浮いた保険料を新NISAに回せば20年で400〜800万円の資産差に。本稿では家族構成別10ケースの見直し実例を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="家族構成別の最適な生命保険プラン"
        services={[
          {
            name: "30代共働き（子1人）",
            rank: 1,
            highlight: "収入保障保険＋都道府県民共済｜月6,000円",
            features: [
              "夫：収入保障保険（60歳まで月15万円保障）",
              "妻：都道府県民共済4型（月4,000円）",
              "子：こども共済（月1,000円）",
              "見直し前月1.8万円→見直し後月6,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "典型ケース",
          },
          {
            name: "40代子育て（子2人）",
            rank: 2,
            highlight: "定期保険＋団信＋医療｜月1万円",
            features: [
              "夫：20年定期保険（死亡3,000万円）",
              "住宅ローン団信ですでに死亡補償あり",
              "医療保険は高額療養費制度を活用し最小限",
              "見直し前月2.5万円→見直し後月1万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "50代独身",
            rank: 3,
            highlight: "葬儀費用＋医療保険｜月5,000円",
            features: [
              "死亡保障は葬儀費用200〜300万円分のみ",
              "都道府県民共済 熟年型で十分",
              "終身保険・年金保険は不要",
              "見直し前月1.5万円→見直し後月5,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "60代リタイア",
            rank: 4,
            highlight: "相続税対策終身保険｜一時払500万円",
            features: [
              "死亡保険金500万円×相続人数が非課税",
              "一時払終身保険で相続対策に特化",
              "入院給付は貯蓄でカバー",
              "保険料月額は不要（一時払）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">見直しで削れる代表的な保険</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>終身保険</strong>：保険料が高く、老後では不要なケース多い</li>
          <li><strong>外貨建て保険</strong>：為替リスク＋手数料3〜5%で運用利回りマイナス化</li>
          <li><strong>ガン保険の重複加入</strong>：共済型＋医療保険特約でカバー可能</li>
          <li><strong>学資保険</strong>：新NISAのつみたてで代替可能</li>
          <li><strong>個人年金保険</strong>：iDeCoのほうが圧倒的に有利</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険見直しで年12〜24万円節約｜保険見直しラボ"
        description="あなたの家族構成・収入に合わせた最適プランをFPが無料診断。30社以上の保険会社から中立的に比較提案、過剰保険を削り新NISA原資を捻出。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">見直し後の余剰資金を新NISAへ</h2>
        <p>
          月2万円の保険料削減を新NISA（年利5%）に回すと：
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>10年後: 約310万円</li>
          <li>20年後: 約821万円</li>
          <li>30年後: 約1,663万円</li>
        </ul>
        <p>「保険料を払う」から「保険料を投資する」への発想転換が、老後資産に大きな差を生みます。</p>
      </section>
    </>
  ),
  "singlemother-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">シングルマザー世帯の資産形成の現実</h2>
        <p>
          シングルマザーの平均年収は約243万円（厚生労働省2023）と、二人親世帯の半分以下。しかし児童扶養手当・母子父子寡婦福祉資金・新NISA・iDeCoを活用すれば、20年で1,000〜1,500万円の老後資金準備が可能です。本稿では実践的な戦略を解説します。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>児童扶養手当：年収・子の数で変動、最大月45,500円</li>
          <li>住宅手当・医療費助成等の自治体制度を漏れなく申請</li>
          <li>母子父子寡婦福祉資金で学費・事業資金を低利借入</li>
          <li>扶養内（103万/130万）の壁を見極めた働き方</li>
          <li>浮いた固定費を新NISAつみたて投資枠に自動配分</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="シングルマザー向け 月2万円積立の20年プラン"
        services={[
          {
            name: "新NISA つみたて投資枠",
            rank: 1,
            highlight: "月1万円｜運用益非課税で堅実に増やす",
            features: [
              "eMAXIS Slim 全世界株式（信託報酬0.058%）",
              "月1万円×20年×年利5%＝約411万円",
              "楽天証券なら楽天カード積立で1%還元",
              "いつでも引き出し可能で教育費にも対応",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "最優先",
          },
          {
            name: "クラウドワークスで月5万円副業",
            rank: 2,
            highlight: "在宅OKの繋ぎ収入｜スキルアップの場",
            features: [
              "ライター・データ入力・翻訳等で月3〜8万円",
              "子が寝た後や家事のスキマ時間で作業",
              "実績を積めば時給3,000円超も可能",
              "扶養内の範囲で無理なく",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
          },
          {
            name: "iDeCo（月1万円）",
            rank: 3,
            highlight: "所得控除で年1万円以上の節税",
            features: [
              "年収243万円でも年1万円以上の節税効果",
              "運用益非課税で長期複利",
              "60歳以降の老後資金を着実に準備",
              "SBI証券なら手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "楽天経済圏でポイ活",
            rank: 4,
            highlight: "生活費＋ポイント投資で実質節約",
            features: [
              "楽天カード+楽天銀行+楽天モバイルでSPU",
              "年間ポイント5〜10万円獲得",
              "ポイントも新NISA積立に回せる",
              "楽天ふるさと納税で食費も削減",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">20年後の資産シミュレーション</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA月1万円×20年×年利5%＝約411万円</li>
          <li>iDeCo月1万円×20年×年利5%＝約411万円</li>
          <li>児童扶養手当の一部月5,000円積立×15年＝約133万円</li>
          <li>副業の一部月1万円積立×20年＝約411万円</li>
          <li>合計：約1,366万円（老後の基礎資産）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="在宅で月3〜8万円｜クラウドワークス"
        description="シングルマザーでも無理なく続けられる在宅副業。ライター・データ入力・翻訳など、子の生活リズムに合わせて働ける案件多数。実績次第で単価アップも。"
        buttonText="クラウドワークスに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP"
        icon="💻"
        highlight="完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">忘れてはいけない公的支援</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>児童扶養手当（全部支給 月45,500円+子加算）</li>
          <li>児童手当（月1万〜1.5万円）</li>
          <li>ひとり親家庭医療費助成（自治体による）</li>
          <li>母子父子寡婦福祉資金（学費・事業資金を低利借入）</li>
          <li>生活保護世帯減免（公共料金・NHK料金）</li>
          <li>自立支援教育訓練給付金（資格取得時）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="家計の土台づくりはFP無料相談で｜保険見直しラボ"
        description="シングルマザー世帯の保険は必要最小限に。子ども共済＋収入保障保険で月5,000〜1万円に抑え、浮いた分を新NISAへ。FPに無料で全体設計を相談できる。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "foreign-currency-deposit-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">外貨預金のメリットと為替リスク</h2>
        <p>
          外貨預金は、日本円よりも金利の高い米ドル・豪ドル・ユーロ等で預金する金融商品。米国の政策金利が4〜5%台の現在、1年定期で年4%前後の高金利が魅力です。ただし為替変動リスクがあり、預入時より円高になれば元本割れに。新NISAでの外貨建て投資（米国ETF等）との使い分けが重要です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>金利: 米ドル年4〜5%、豪ドル年4%、ユーロ年2〜3%</li>
          <li>為替手数料: 1通貨あたり片道6〜25銭</li>
          <li>預金保険対象外（銀行破綻時は保護されない）</li>
          <li>利息は20.315%源泉徴収、為替差益は雑所得</li>
          <li>新NISAでの外貨建てETFのほうが長期運用では有利</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 外貨預金おすすめネット銀行比較"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "為替手数料業界最安｜米ドル片道6銭",
            features: [
              "米ドル片道6銭（業界最安水準）",
              "24時間いつでも両替可能",
              "定額自動入金で積立外貨預金可",
              "SBI証券との連携で為替コスト最適化",
            ],
            href: "https://www.netbk.co.jp/contents/",
            badge: "最安水準",
          },
          {
            name: "ソニー銀行",
            rank: 2,
            highlight: "10通貨対応｜為替手数料片道4銭のキャンペーンあり",
            features: [
              "米ドル・ユーロ・豪ドル等10通貨対応",
              "定期キャンペーンで米ドル片道4銭",
              "外貨でVisaデビット利用可能",
              "Sony Bank Walletで海外ATM引き出しも",
            ],
            href: "https://moneykit.net/",
          },
          {
            name: "楽天銀行",
            rank: 3,
            highlight: "楽天ポイントで外貨預金可能",
            features: [
              "楽天ポイント1ポイント=1円で外貨預金可",
              "米ドル片道25銭、豪ドル50銭",
              "楽天証券とのマネーブリッジで連携",
              "楽天経済圏ユーザーに最適",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">外貨預金 vs 米国株ETF（新NISA）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>金利収入</strong>：外貨預金年4〜5%、米国ETFの配当は年1.5〜4%</li>
          <li><strong>値上がり益</strong>：外貨預金はゼロ、米国ETFは年5〜10%期待</li>
          <li><strong>税金</strong>：外貨預金は利息20.315%＋為替差益が雑所得、新NISAは非課税</li>
          <li><strong>長期20年では</strong>：米国ETFが圧倒的に有利（年7〜10%リターン）</li>
          <li><strong>使い分け</strong>：短期1〜2年の外貨活用は外貨預金、長期資産形成はNISAで米国ETF</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新NISAで米国投資なら｜SBI証券"
        description="新NISAで米国株・ETF（VOO・VTI・VYM）を買えば、外貨預金より圧倒的有利。SBI証券は為替手数料無料、取扱銘柄数も業界最多。外貨預金と併用で使い分け。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">外貨預金が向いている人</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>海外旅行・留学で外貨を使う予定がある</li>
          <li>海外居住予定で現地通貨での生活準備が必要</li>
          <li>資産の10〜20%を外貨で分散したい（インフレヘッジ）</li>
          <li>新NISA枠を使い切った後の追加運用先</li>
          <li>ドルコスト平均法で短期〜中期（1〜3年）の運用をしたい</li>
        </ul>
      </section>
    </>
  ),
  "pension-deferment-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年金繰下げ受給の基本</h2>
        <p>
          公的年金（老齢基礎年金・老齢厚生年金）は通常65歳から受給ですが、66〜75歳まで繰下げると受給額が増額。1ヶ月繰下げるごとに0.7%増額され、70歳繰下げで1.42倍、75歳繰下げで1.84倍に。ただし繰下げた分だけ受給期間が短くなるため、健康寿命・資産状況からの判断が鍵です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>65歳受給: 100%（基準）</li>
          <li>66歳: 108.4%（8.4%増）</li>
          <li>68歳: 125.2%（25.2%増）</li>
          <li>70歳: 142%（42%増）</li>
          <li>72歳: 158.8%（58.8%増）</li>
          <li>75歳: 184%（84%増）※上限</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="繰下げパターン別の損益分岐点（生涯受給額）"
        services={[
          {
            name: "70歳繰下げ（142%）",
            rank: 1,
            highlight: "損益分岐点は82歳｜健康寿命超えなら有利",
            features: [
              "5年間の年金をガマン、代わりに生涯142%",
              "65歳から82歳までに死亡なら損",
              "82歳以降に長生きするほど得（85歳で年間80万円増）",
              "日本人女性の平均寿命87歳なので統計的に有利",
            ],
            href: "https://www.nenkin.go.jp/",
            badge: "統計上有利",
          },
          {
            name: "75歳繰下げ（184%）",
            rank: 2,
            highlight: "損益分岐点は86〜87歳｜長生き前提",
            features: [
              "10年間の年金をガマン、代わりに生涯184%",
              "65歳から87歳までに死亡なら損",
              "87歳以降に長生きするほど得",
              "健康寿命73〜75歳を考えると、資産に余裕がある人向き",
            ],
            href: "https://www.nenkin.go.jp/",
          },
          {
            name: "65歳受給（100%）",
            rank: 3,
            highlight: "早期に使える｜旅行・趣味にお金を使いたい人",
            features: [
              "65歳から即受給開始",
              "元気なうちに使える安心感",
              "健康不安がある・家族歴で短命の場合も早期受給",
              "平均寿命未満で死亡すれば繰下げより有利",
            ],
            href: "https://www.nenkin.go.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">繰下げ判断の3つの要素</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>健康寿命・家族歴</strong>：両親の寿命・現在の健康状態で平均余命を推測</li>
          <li><strong>資産状況</strong>：繰下げ期間中の生活費を資産でカバーできるか</li>
          <li><strong>配偶者の状況</strong>：配偶者の年金・加給年金の扱いも考慮必須</li>
        </ol>
      </section>
      <AffiliateCTA
        title="繰下げ期間の生活費はiDeCoで備える｜SBI証券"
        description="70歳まで繰下げるなら、65〜70歳の5年間は自己資金で生活。iDeCoは65歳から75歳までの受取選択が可能なので、繰下げ期間中のキャッシュフロー源として最適。"
        buttonText="SBI証券 iDeCoの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html"
        icon="🏦"
        highlight="手数料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">繰下げ時の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>加給年金（配偶者加算39万円）は繰下げ期間中支給されない</li>
          <li>繰下げ期間中の生活費を資産で賄える設計が必須</li>
          <li>途中での繰下げキャンセル・取消も可能（年金事務所へ）</li>
          <li>繰下げ中の死亡は遺族に一時金として支給される</li>
          <li>健康状態が悪化したら早めに受給開始に切替え</li>
        </ul>
      </section>
    </>
  ),
  "sixties-nisa-exit-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">60代からのNISA出口設計</h2>
        <p>
          新NISAで築いた資産をどう取り崩すかが、60代以降の生活を左右します。感情的に「全部売って使う」のではなく、①4%ルール、②定率取崩、③バケツ戦略の3手法から自分に合う方法を選ぶのが王道。公的年金・iDeCo・退職金との優先順位も戦略的に決めましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="3つの取崩手法比較"
        services={[
          {
            name: "4%ルール（定額取崩）",
            rank: 1,
            highlight: "初年度4%→以降インフレ調整｜元本維持しやすい",
            features: [
              "初年度は資産4%を取崩（2,000万円なら80万円）",
              "翌年以降はインフレ率で増額",
              "米国研究では30年持続率95%以上",
              "元本を減らしにくい保守的手法",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "定率取崩（毎年4%）",
            rank: 2,
            highlight: "資産評価額の定率｜相場に応じた柔軟性",
            features: [
              "毎年資産評価額の4%を取崩",
              "相場下落時は自動的に取崩額減少",
              "元本ゼロにはならない（減り続ける）",
              "相場連動型で柔軟な生活設計",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "バケツ戦略（3層分散）",
            rank: 3,
            highlight: "短期・中期・長期で3層に分ける｜下落耐性",
            features: [
              "バケツ1: 2〜3年分の現金（普通預金）",
              "バケツ2: 4〜10年分の債券・REIT",
              "バケツ3: 長期株式（新NISA）",
              "暴落時もバケツ1で生活費確保、バケツ3は売らない",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">取崩順序の推奨</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>1. 特定口座の株式・投信</strong>（課税口座を先に取崩し）</li>
          <li><strong>2. 定期預金・普通預金</strong>（生活防衛資金は最後まで残す）</li>
          <li><strong>3. iDeCo</strong>（60〜75歳で一時金 or 年金受取）</li>
          <li><strong>4. 新NISA</strong>（非課税枠を最後まで活用、売却せず配当で生活も）</li>
          <li><strong>5. 公的年金</strong>（繰下げ検討で最大1.84倍に）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="出口戦略は新NISAを残す｜SBI証券"
        description="売却益・配当金が非課税の新NISAは、取崩順序の最後に。高配当ETF（VYM/HDV）を保有すれば毎月の配当だけで生活費の一部を賄える形に。"
        buttonText="SBI証券の新NISAを見る"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">取崩時の税務ポイント</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>特定口座（源泉徴収あり）は確定申告不要</li>
          <li>iDeCo一時金は退職所得控除、年金受取は公的年金等控除</li>
          <li>新NISAは売却益・配当金すべて非課税（確定申告不要）</li>
          <li>国民健康保険・介護保険料は確定申告不要年金でも算定</li>
          <li>相続対策として新NISAは早期取崩せず保有継続も選択肢</li>
        </ul>
      </section>
    </>
  ),
  "portfolio-rebalancing-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リバランスとは？なぜ必要か</h2>
        <p>
          リバランスは、当初決めた資産配分（株式50%・債券50%等）が相場変動で崩れたときに、元の配分に戻す作業。これにより①リスク水準の維持、②割安資産の買い増し・割高資産の利確、という2つの効果が得られます。年1回の実施だけで運用利回りが0.5〜1.0%向上するという研究結果もあります。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>放置すると株式比率が増加→リスク過大に</li>
          <li>自動的に「安く買って高く売る」効果</li>
          <li>年1回の実施で十分（過剰な頻度はコスト高）</li>
          <li>新NISAは売却せず、追加購入でリバランス</li>
          <li>iDeCoは売却も買付もできる（スイッチング）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="リバランスの4手法比較"
        services={[
          {
            name: "カレンダー方式（年1回）",
            rank: 1,
            highlight: "毎年1月または誕生月に実施｜シンプル",
            features: [
              "毎年決まった時期に資産配分チェック",
              "忘れにくくて継続しやすい",
              "過剰な売買でコスト増を防げる",
              "初心者におすすめの王道",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "5%バンド幅ルール",
            rank: 2,
            highlight: "配分が5%以上崩れたら調整｜相場連動",
            features: [
              "株式50%目標が55%以上 or 45%以下になったら調整",
              "相場の大きな動きに対応可能",
              "売買頻度が増える可能性あり",
              "中級者向け",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "年2回方式（半年ごと）",
            rank: 3,
            highlight: "3月と9月など半年ごと実施",
            features: [
              "相場変動への対応が速め",
              "取引コストが増えやすい",
              "NISAのみでは年2回は難しい（枠消費）",
              "iDeCoや特定口座向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ノーセル・リバランス",
            rank: 4,
            highlight: "売らずに追加購入だけでリバランス｜税最適",
            features: [
              "不足資産を追加購入するだけで配分を戻す",
              "売却益課税を回避、NISAに最適",
              "毎月の積立設定で自動化も可能",
              "積立初期ほど効果大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リバランス実行の3ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1</strong>：目標配分と現在配分を一覧化（家計簿アプリ・証券会社で確認）</li>
          <li><strong>Step2</strong>：乖離分を計算（不足資産・過剰資産を特定）</li>
          <li><strong>Step3</strong>：不足資産を購入 or 過剰資産を売却して調整</li>
        </ol>
      </section>
      <AffiliateCTA
        title="資産管理の一元化｜マネーフォワードME"
        description="複数の証券口座・銀行口座・クレカを自動連携して資産配分を一目で把握。無料版でも10口座連携、プレミアム（月500円）で無制限。リバランスの前提となる可視化が最強。"
        buttonText="マネーフォワードMEを見る"
        href="https://moneyforward.com/pages/mf_me/"
        icon="📱"
        highlight="無料で使える"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リバランス時の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA口座は売却すると枠が戻らない（翌年復活）</li>
          <li>特定口座の売却益は20.315%課税</li>
          <li>リバランス手数料（売買手数料＋信託財産留保額）</li>
          <li>感情的な売買を避け、ルール通り機械的に実施</li>
          <li>相場暴落時こそ規律正しく実施（値下がり資産を追加購入）</li>
        </ul>
      </section>
    </>
  ),
  "corporate-dc-matching-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">企業型DC・マッチング拠出の基本</h2>
        <p>
          企業型DC（確定拠出年金）は、会社が毎月一定額を拠出する企業年金。社員が自分で運用商品を選び、60歳以降の受取額は運用成績次第。マッチング拠出は社員も上乗せ拠出できる制度で、掛金全額が所得控除になります。2022年改正でiDeCo併用も大幅に柔軟化されました。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>会社拠出金: 月1.5万〜5.5万円（会社により異なる）</li>
          <li>マッチング拠出: 会社拠出額までかつ合計5.5万円まで</li>
          <li>マッチング掛金も全額所得控除</li>
          <li>iDeCo併用可（月2万円、企業型DCと合計5.5万円）</li>
          <li>運用商品選択が資産額を大きく左右</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="企業型DC 運用商品の選び方"
        services={[
          {
            name: "全世界株式インデックス",
            rank: 1,
            highlight: "最もおすすめ｜長期運用で年率5〜7%期待",
            features: [
              "eMAXIS Slim 全世界株式（オルカン）相当の商品",
              "信託報酬0.1%台を選ぶ",
              "全世界への分散投資でリスク低減",
              "初心者〜中級者の王道選択",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "米国株式（S&P500）",
            rank: 2,
            highlight: "成長重視｜年率7〜10%期待",
            features: [
              "eMAXIS Slim 米国株式（S&P500）相当",
              "米国経済の成長にベット",
              "20〜30代の若年層におすすめ",
              "単国集中リスクあり",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "バランスファンド（株60%・債券40%）",
            rank: 3,
            highlight: "自動リバランス｜40代以降の安定運用に",
            features: [
              "株式・債券・REIT・金などに自動分散",
              "年1回のリバランスを自動化",
              "信託報酬0.2〜0.4%とやや高め",
              "40代・50代の安定運用向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo併用で節税最大化（2022年改正後）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>企業型DCのみ</strong>：会社拠出 月5.5万円上限（年66万円）</li>
          <li><strong>+ iDeCo併用</strong>：合計月5.5万円まで（iDeCoは月2万円上限）</li>
          <li><strong>+ 確定給付企業年金あり</strong>：iDeCo月1.2万円まで</li>
          <li><strong>節税効果</strong>：年収700万円でマッチング月1.5万円＋iDeCo月2万円なら年8万円超節税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCo併用で節税を最大化｜SBI証券"
        description="企業型DC加入者でもiDeCoを月2万円まで併用可能。SBI証券は運営管理手数料無料、eMAXIS Slim等の低コスト投信を組合せて節税＋運用益を両取り。"
        buttonText="SBI証券 iDeCoの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html"
        icon="🏦"
        highlight="手数料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">転職時の注意点（移換手続き）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>転職先に企業型DCがある → 移換可（6ヶ月以内）</li>
          <li>転職先に企業型DCがない → iDeCoに移換（個人型確定拠出年金）</li>
          <li>自動移換（放置6ヶ月超）すると管理手数料が発生するので必ず手続き</li>
          <li>運用中商品の乗換も可能（スイッチング）</li>
          <li>公務員・自営業への転職はiDeCo移換＋掛金上限変更に注意</li>
        </ol>
      </section>
    </>
  ),
  "crypto-staking-lending-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ステーキングとレンディングの違い</h2>
        <p>
          ステーキングは、仮想通貨をブロックチェーン上にロックして報酬を得る仕組み。レンディングは、取引所に仮想通貨を貸し出して利息を得る仕組み。どちらも保有通貨を運用できる仕組みですが、リスクとリターンの性質が異なります。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ステーキング: 年利3〜20%、対応通貨はイーサリアム・ソラナ等</li>
          <li>レンディング: 年利1〜10%、取引所への貸出</li>
          <li>どちらも元本毀損リスクあり（通貨価格下落）</li>
          <li>報酬は雑所得（総合課税、最大55%）</li>
          <li>貸出中は売却不可（流動性リスク）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 仮想通貨ステーキング・レンディング比較"
        services={[
          {
            name: "bitbank（びっとばんく）",
            rank: 1,
            highlight: "レンディング年率1〜5%｜国内大手",
            features: [
              "BTC/ETH/XRP等の主要通貨でレンディング",
              "14日/30日/90日/180日/365日の期間選択",
              "レバレッジ取引手数料無料",
              "セキュリティ対策が業界最高水準",
            ],
            href: "https://bitbank.cc/",
            badge: "信頼性",
          },
          {
            name: "コインチェック",
            rank: 2,
            highlight: "貸暗号資産｜国内最大級取扱通貨",
            features: [
              "BTC/ETH/XRP/LTC/BCH等の主要通貨",
              "年率1〜5%の貸出サービス",
              "アプリDL数No.1",
              "NFTマーケットプレイスも運営",
            ],
            href: "https://coincheck.com/ja/",
          },
          {
            name: "GMOコイン",
            rank: 3,
            highlight: "年率1〜3%｜GMOグループの安心感",
            features: [
              "BTC/ETH/XRP/LTC/BCH/ETC等",
              "GMOグループの金融ノウハウ",
              "手数料・各種送金が無料",
              "ステーキングサービスも提供",
            ],
            href: "https://coin.z.com/jp/",
          },
          {
            name: "SBI VCトレード",
            rank: 4,
            highlight: "SBIグループ｜ステーキング対応通貨豊富",
            features: [
              "イーサリアム・ソラナ・ポルカドット等のステーキング",
              "年率3〜12%（通貨による）",
              "SBI証券とのグループ連携",
              "強固なセキュリティと運営基盤",
            ],
            href: "https://www.sbivc.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ステーキング・レンディングのリスク</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>価格変動リスク</strong>：運用中の価格下落で含み損</li>
          <li><strong>流動性リスク</strong>：貸出期間中は売却不可</li>
          <li><strong>取引所リスク</strong>：取引所破綻時の資産保全</li>
          <li><strong>スラッシングリスク</strong>：ステーキングの運用ミスで元本毀損</li>
          <li><strong>税務リスク</strong>：雑所得として累進課税、高所得者は55%課税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ステーキング・レンディングを始めるなら｜bitbank"
        description="国内大手のbitbankは、BTC/ETH/XRP等の主要通貨でレンディング可能。年率1〜5%で運用でき、セキュリティも業界最高水準。まずは取引所口座開設から。"
        buttonText="bitbankの詳細を見る"
        href="https://bitbank.cc/"
        icon="💎"
        highlight="業界最高セキュリティ"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税金の扱い（重要）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ステーキング報酬・レンディング利息は受取時に雑所得として課税</li>
          <li>総合課税で最大55%（所得税45%＋住民税10%）</li>
          <li>確定申告は年間利益20万円超で必須</li>
          <li>損失の繰越控除不可（株式と違う）</li>
          <li>海外取引所利用は税務リスク増（国内取引所推奨）</li>
        </ul>
      </section>
    </>
  ),
  "nft-investment-basics": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">NFT投資の基本</h2>
        <p>
          NFT（Non-Fungible Token）は、ブロックチェーン上で一意性を証明できるデジタル資産。アート・ゲームアイテム・音楽・写真等、多様な商品が取引されます。投資目的では「売買差益」と「ロイヤリティ収入（クリエイター側）」の2種類。ただし値下がりリスクも大きいため、仮想通貨の総資産の5〜10%以内に留めるのが鉄則です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>購入手段: イーサリアム（ETH）またはポリゴン（MATIC）が主流</li>
          <li>主要マーケット: OpenSea（海外）、Adam byGMO・LINE NFT・楽天NFT（国内）</li>
          <li>税金: 売却益は雑所得（総合課税、最大55%）</li>
          <li>ガス代（手数料）: 1取引あたり数百〜数千円</li>
          <li>詐欺プロジェクトに要注意（白紙プロジェクト・Rug Pull）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめNFTマーケット比較"
        services={[
          {
            name: "OpenSea",
            rank: 1,
            highlight: "世界最大｜取扱点数・流動性No.1",
            features: [
              "世界最大のNFTマーケット（取扱数数千万点）",
              "イーサリアム・ポリゴン・ソラナ対応",
              "日本円で購入できない（仮想通貨必須）",
              "詐欺プロジェクトも多いので要注意",
            ],
            href: "https://opensea.io/",
            badge: "世界最大",
          },
          {
            name: "Adam byGMO",
            rank: 2,
            highlight: "GMOグループ運営｜日本円決済可",
            features: [
              "日本円・クレジットカードで購入可能",
              "国内クリエイター中心、日本語完全対応",
              "購入したNFTを外部ウォレットに送信可",
              "初心者におすすめ",
            ],
            href: "https://adam.jp/",
            badge: "初心者向け",
          },
          {
            name: "LINE NFT",
            rank: 3,
            highlight: "LINE運営｜国内ユーザー向け",
            features: [
              "LINE Payで購入可能",
              "スマホアプリ完結でハードル低い",
              "限定NFTが毎月発行",
              "LINEの友達にプレゼント可",
            ],
            href: "https://nft.line.me/",
          },
          {
            name: "楽天NFT",
            rank: 4,
            highlight: "楽天経済圏｜楽天ポイントで購入可",
            features: [
              "楽天IDでログイン、楽天ポイントで決済",
              "楽天IDユーザーなら始めやすい",
              "スポーツ系NFT（楽天イーグルス・ヴィッセル神戸）充実",
              "国内向け",
            ],
            href: "https://nft.rakuten.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">NFT投資の始め方（5ステップ）</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1</strong>：国内仮想通貨取引所（bitbank/コインチェック等）で口座開設</li>
          <li><strong>Step2</strong>：イーサリアム（ETH）を購入</li>
          <li><strong>Step3</strong>：MetaMask等のウォレットを作成・ETHを送金</li>
          <li><strong>Step4</strong>：OpenSea等でNFT購入（ガス代に注意）</li>
          <li><strong>Step5</strong>：保有・売却のタイミング検討（値動きのチェック）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="まず仮想通貨口座から｜コインチェック"
        description="NFT購入にはETHが必要。コインチェックなら取扱通貨数No.1クラス、スマホアプリDL数国内No.1。500円から仮想通貨を購入してNFT投資を開始。"
        buttonText="コインチェックの詳細"
        href="https://coincheck.com/ja/"
        icon="₿"
        highlight="アプリDL No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">NFT投資の5大リスク</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>値下がりリスク（購入から数ヶ月で半値以下も）</li>
          <li>詐欺・Rug Pull（プロジェクト放棄）</li>
          <li>流動性リスク（売りたいときに買い手がつかない）</li>
          <li>ガス代高騰（イーサリアムネットワーク混雑時）</li>
          <li>税務リスク（総合課税55%＋確定申告）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="仮想通貨の基礎を学ぶ｜ファイナンシャルアカデミー"
        description="NFT・仮想通貨は投資として複雑。ファイナンシャルアカデミーの無料体験セミナーで、株式・投信と合わせた全体戦略を学ぼう。累計受講生78万人超の安心感。"
        buttonText="ファイナンシャルアカデミー無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="📚"
        highlight="無料体験あり"
      />
    </>
  ),
  "high-interest-bank-account-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">普通預金0.2%超の高金利ネット銀行</h2>
        <p>
          メガバンクの普通預金金利はわずか0.001%。一方、ネット銀行は普通預金で0.2〜0.4%と200〜400倍の高金利を実現。100万円預ければ年間3,000〜4,000円の利息差、1,000万円なら3〜4万円の差に。生活防衛資金を預ける先こそ、ネット銀行の金利活用が重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 高金利ネット銀行比較"
        services={[
          {
            name: "SBI新生銀行",
            rank: 1,
            highlight: "普通預金年0.3%｜ダイヤモンドステージ最高金利",
            features: [
              "ステージ条件クリアで普通預金年0.3%",
              "セブン銀行ATM手数料最大無制限無料",
              "振込手数料月最大10回無料",
              "SBI証券との連携で投資も便利",
            ],
            href: "https://www.sbishinseibank.co.jp/",
            badge: "最高金利",
          },
          {
            name: "あおぞら銀行BANK支店",
            rank: 2,
            highlight: "普通預金年0.2%｜条件なしのシンプル高金利",
            features: [
              "条件なしで普通預金年0.2%",
              "ゆうちょ銀行ATM手数料無料",
              "振込手数料月3回無料",
              "口座開設もWeb完結",
            ],
            href: "https://www.aozorabank.co.jp/bank/",
          },
          {
            name: "住信SBIネット銀行",
            rank: 3,
            highlight: "SBIハイブリッド預金で証券連携｜普通預金0.03%",
            features: [
              "SBI証券との自動スイープで高利回り投資と連動",
              "定額自動入金サービスで給与振込連携",
              "外貨預金の為替手数料が業界最安水準",
              "SMART認証でセキュリティ強固",
            ],
            href: "https://www.netbk.co.jp/",
          },
          {
            name: "楽天銀行",
            rank: 4,
            highlight: "マネーブリッジ連携で普通預金0.1%",
            features: [
              "楽天証券とのマネーブリッジで0.1%に",
              "楽天ポイントが貯まる",
              "セブン銀行・イオン銀行ATM手数料無料（条件）",
              "楽天経済圏ユーザーに最適",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
          {
            name: "auじぶん銀行",
            rank: 5,
            highlight: "au/UQユーザー向け｜普通預金最大0.33%",
            features: [
              "au PAY残高チャージ・auカードとの連携で0.33%",
              "auじぶんプラスのステージで金利UP",
              "auユーザーは振込手数料無料",
              "カブコム証券との連携も可能",
            ],
            href: "https://www.jibunbank.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行利用時の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>金利は原則「税引前」、実質手取りは約80%（利息に20.315%課税）</li>
          <li>一部ステージ条件を満たさないと低金利に戻る</li>
          <li>ATM手数料・振込手数料も重視（金利差以上の節約効果）</li>
          <li>外貨預金は預金保険対象外</li>
          <li>金利は変動、頻繁に見直しを</li>
        </ul>
      </section>
      <AffiliateCTA
        title="証券と一体で運用最適化｜SBI証券"
        description="SBI証券と住信SBIネット銀行を組み合わせると、自動スイープで普通預金金利を享受しつつ、シームレスに投資も可能。ネット銀行×証券のコンボが最強の資産運用基盤。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "auto-loan-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">自動車ローンの金利差で総返済額100万円の差</h2>
        <p>
          ディーラーのローン金利は年3〜5%が相場、一方、銀行自動車ローンは年1.5〜3%と圧倒的に低金利。300万円を5年ローンで借りる場合、金利差2%で総返済額15万円以上の差に。賢く選べば新車購入時の総コストを大幅圧縮できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 自動車ローン金利比較"
        services={[
          {
            name: "住信SBIネット銀行 ミスター自動車ローン",
            rank: 1,
            highlight: "年1.575〜2.775%｜Web完結・最短即日審査",
            features: [
              "変動金利 年1.575〜2.775%（業界最低水準）",
              "保証料・繰上返済手数料無料",
              "最大1,000万円まで借入可能",
              "Web完結で来店不要",
            ],
            href: "https://www.netbk.co.jp/",
            badge: "最安",
          },
          {
            name: "楽天銀行 スーパーローン",
            rank: 2,
            highlight: "固定金利2.9〜14.5%｜楽天会員は0.3%優遇",
            features: [
              "楽天会員なら金利0.3%優遇",
              "最大800万円まで借入可能",
              "Webで完結、来店不要",
              "楽天ポイントが貯まる",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
          {
            name: "東京スター銀行 スターカードローン",
            rank: 3,
            highlight: "金利2.25〜8.0%｜地方銀行最安水準",
            features: [
              "地方銀行の中で最低クラスの金利",
              "最大500万円まで借入可能",
              "他社からの借換にも対応",
              "来店可能で対面相談もOK",
            ],
            href: "https://www.tokyostarbank.co.jp/",
          },
          {
            name: "JAネットローン",
            rank: 4,
            highlight: "最低1.9%｜農協組合員向け低金利",
            features: [
              "JA組合員なら最低年1.9%",
              "農家・自営業者に有利",
              "事前審査もWebで可能",
              "地域のJA窓口で相談可",
            ],
            href: "https://www.ja-group.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ディーラーローン vs 銀行ローンの総返済額比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>300万円×5年</strong>：ディーラー年4%＝総331万円／銀行年2%＝総316万円（差15万円）</li>
          <li><strong>400万円×7年</strong>：ディーラー年4%＝総456万円／銀行年2%＝総428万円（差28万円）</li>
          <li><strong>500万円×7年</strong>：ディーラー年4%＝総571万円／銀行年2%＝総535万円（差36万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="自動車ローン借り換えでお得に｜住信SBIネット銀行"
        description="現在のディーラーローンを銀行ローンに借り換えるだけで総返済額20〜50万円節約の可能性。住信SBIネット銀行なら保証料・繰上返済手数料無料で、Web完結。"
        buttonText="住信SBIネット銀行を見る"
        href="https://www.netbk.co.jp/"
        icon="🚗"
        highlight="業界最安水準"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">自動車購入の総コスト最適化</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>銀行の低金利ローンで借入（保証料・繰上返済手数料無料）</li>
          <li>自動車保険はネット型（ソニー損保・SBI損保）で年3万円節約</li>
          <li>購入後の車検・メンテナンスは指定工場より民間工場で30%節約</li>
          <li>車両保険は車齢10年超なら見直し（貯蓄でカバー）</li>
          <li>エコカー減税・自動車重量税の減免を活用</li>
        </ol>
      </section>
    </>
  ),
  "carrier-credit-card-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">キャリア系クレカは「スマホ料金×クレカ決済」で相乗効果</h2>
        <p>
          携帯キャリア各社が発行するクレジットカードは、スマホ料金・ネット回線・電気・ガスの決済で還元率1〜3%と高還元。楽天・ドコモ・au・ソフトバンク経済圏ユーザーなら、生活インフラ決済の還元が年間5〜10万円に到達することも珍しくありません。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 キャリア系クレカ比較"
        services={[
          {
            name: "楽天カード",
            rank: 1,
            highlight: "年会費永年無料｜楽天市場で最大3%還元",
            features: [
              "楽天市場でSPU最大16倍、ポイント還元",
              "楽天モバイル・楽天ひかり決済で+1%",
              "楽天証券のクレカ積立で1%還元",
              "楽天ペイとの連携でさらにお得",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/",
            badge: "総合No.1",
          },
          {
            name: "dカードGOLD",
            rank: 2,
            highlight: "ドコモ料金10%還元｜年会費11,000円の元が取れる",
            features: [
              "ドコモ回線・ドコモ光の料金10%還元",
              "携帯補償3年間最大10万円",
              "月1万円使えば元が取れる（年1.2万円還元）",
              "ahamoは対象外な点に注意",
            ],
            href: "https://dcard.docomo.ne.jp/",
          },
          {
            name: "au PAYカード",
            rank: 3,
            highlight: "au PAY市場で2%還元｜au通信料金は対象外",
            features: [
              "au PAY市場の買物で2%還元",
              "au PAYチャージで1%還元＋支払いで1%＝実質2%",
              "年会費初年度無料（条件で永年無料）",
              "au/UQユーザーに最適",
            ],
            href: "https://aupay.wallet.auone.jp/contents/card/",
          },
          {
            name: "ソフトバンクカード",
            rank: 4,
            highlight: "PayPay連携｜ソフトバンク料金で還元",
            features: [
              "PayPayチャージでポイント還元",
              "Yahoo!ショッピング連携",
              "ソフトバンク/ワイモバイル料金決済",
              "年会費実質無料",
            ],
            href: "https://www.softbank.jp/mobile/service/softbank-card/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">キャリア経済圏別 年間還元シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>楽天経済圏フル活用（楽天カード+モバイル+ひかり+市場）</strong>：年間10〜15万ポイント</li>
          <li><strong>ドコモ経済圏（dカードGOLD+ドコモ+ドコモ光）</strong>：年間5〜8万円還元</li>
          <li><strong>au経済圏（au PAYカード+UQ+auひかり）</strong>：年間3〜5万円還元</li>
          <li><strong>ソフトバンク（ソフトバンクカード+SB+SB光）</strong>：年間2〜4万円還元</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏の中核｜楽天カード"
        description="年会費永年無料で、楽天市場のSPU最大16倍・楽天証券のクレカ積立1%還元・楽天経済圏連携で総合No.1。1枚目のクレカとしても最適。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">キャリア経済圏選びのポイント</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>既存のスマホ・ネット回線との組み合わせが重要</li>
          <li>楽天は市場・証券・銀行の総合力で頭1つ抜けている</li>
          <li>dカードGOLDは年会費11,000円の元を取れるか事前計算</li>
          <li>au・ソフトバンクは既存ユーザーの継続に価値</li>
          <li>複数経済圏の併用より1つに絞るほうが効率的</li>
        </ul>
      </section>
    </>
  ),
  "freelance-insurance-comprehensive": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランス特有の保険リスク</h2>
        <p>
          会社員には当然ある「労災」「健康保険の傷病手当金」「有給休暇」「失業保険」がフリーランスにはありません。病気・ケガで働けない期間の収入ゼロ・治療費負担、賠償事故への対応等、自分で備える必要があります。適切な保険選びで、リスクを大幅に低減できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="フリーランス必須の4つの保険"
        services={[
          {
            name: "労災保険 特別加入",
            rank: 1,
            highlight: "年間保険料2〜5万円｜月収の60%保障",
            features: [
              "2021年からフリーランスも特別加入可能",
              "業務中の病気・ケガで休業時に月収の60%保障",
              "通勤災害もカバー",
              "建設・IT等の業種別加入が可能",
            ],
            href: "https://www.mhlw.go.jp/",
            badge: "必須",
          },
          {
            name: "所得補償保険",
            rank: 2,
            highlight: "会社員の傷病手当金の代替｜月10〜50万円保障",
            features: [
              "病気・ケガで働けない期間の収入を補償",
              "月額給付金5〜50万円（加入額次第）",
              "支払期間 1年/2年/就業不能の年齢まで選択可",
              "月額保険料 1,500〜8,000円程度",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "推奨",
          },
          {
            name: "賠償責任保険",
            rank: 3,
            highlight: "年間3,000〜12,000円｜数千万円の賠償事故対応",
            features: [
              "仕事上のミスで顧客に損害を与えた場合の賠償",
              "IT系ならプログラムのバグ・情報漏洩",
              "建設・デザインは特に必須",
              "FREENANCE・フリーナンスの統合パッケージも便利",
            ],
            href: "https://freenance.net/",
          },
          {
            name: "FREENANCE AWAY（フリーランス向け統合保険）",
            rank: 4,
            highlight: "月500円〜｜所得補償+賠償責任+報酬即日払いの複合型",
            features: [
              "所得補償保険+賠償責任保険が月500円〜",
              "GMOクリエイターズネットワーク運営",
              "請求書の即日払いサービスも付帯",
              "フリーランスに最適化された統合サービス",
            ],
            href: "https://freenance.net/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の推奨保険構成</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>年収500万円以下</strong>：労災特別加入（年3万円）＋FREENANCE AWAY（月500円）＝年間約3.6万円</li>
          <li><strong>年収500〜1,000万円</strong>：労災＋所得補償月20万円（月3,000円）＋賠償責任保険＝年間約7万円</li>
          <li><strong>年収1,000万円超</strong>：労災＋所得補償月40万円＋賠償責任5,000万円＋役員賠償＝年間約15万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="フリーランス保険もFPに相談｜保険見直しラボ"
        description="フリーランス特化の保険プランはFPに無料相談が最も効率的。所得補償・賠償責任・生命保険を一元設計、30社超から中立的な提案を受けられる。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスの社会保険の基本</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>国民健康保険：年収・自治体で月1〜5万円</li>
          <li>国民年金：月16,520円（2024年度）</li>
          <li>付加年金：月+400円で将来年2万円増</li>
          <li>iDeCoで月6.8万円まで所得控除</li>
          <li>小規模企業共済で月7万円まで所得控除</li>
        </ul>
      </section>
    </>
  ),
  "student-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">学生だからこそ投資を始めるべき理由</h2>
        <p>
          18歳から新NISA口座開設可能。月3万円を20代から40年積立すれば、年利5%で約4,575万円の資産に。同じ月3万円を30代から30年積立でも約2,497万円にとどまるため、「時間」こそ学生の最大の武器。バイト代の一部からでも、まずは月1,000円から始めるのが圧倒的に有利です。
        </p>
      </section>
      <ComparisonTableCTA
        title="学生におすすめの証券会社"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "業界最大手｜三井住友カードNL年会費無料でクレカ積立",
            features: [
              "投資信託取扱2,500本以上",
              "三井住友カードNL（年会費無料）で1%還元",
              "国内株式売買手数料無料",
              "新NISAで月10万円まで積立可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天カード積立1%還元｜ポイント投資で楽天経済圏活用",
            features: [
              "楽天カード（年会費無料）でクレカ積立1%還元",
              "楽天ポイント500ポイント〜投資可能",
              "楽天市場でのお買物でSPU最大16倍",
              "NISA口座開設まで全てスマホで完結",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "マネックスカード積立1.1%｜業界最高還元率",
            features: [
              "マネックスカードで1.1%還元（業界最高）",
              "米国株取扱4,000銘柄超",
              "為替手数料が買付時無料",
              "マネックスポイントで投資可能",
            ],
            href: "https://info.monex.co.jp/nisa/index.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学生の月3万円プランの40年後</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>20代積立開始（40年運用）</strong>：元本1,440万円→約4,575万円</li>
          <li><strong>25歳積立開始（35年運用）</strong>：元本1,260万円→約3,400万円</li>
          <li><strong>30歳積立開始（30年運用）</strong>：元本1,080万円→約2,497万円</li>
          <li><strong>早く始めるほど複利で大きな差に</strong></li>
        </ul>
      </section>
      <AffiliateCTA
        title="学生の1枚目｜楽天カード"
        description="18歳以上の学生でも発行可能、年会費永年無料。楽天証券のクレカ積立で1%還元、楽天市場でSPU最大化で日常の買物も最適化。バイト代の効率化に最強。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学生の投資、5つの注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>バイト代の全額を投資に回さない（生活費・学費優先）</li>
          <li>FX・暗号資産は避ける（インデックス投信のみ）</li>
          <li>個別株も避ける（情報収集に時間取られて学業に支障）</li>
          <li>新NISAは絶対に使い切らず、自分のペースで</li>
          <li>親のクレカで作った口座は本人名義に変更を</li>
        </ul>
      </section>
      <AffiliateCTA
        title="学費の足しに在宅バイト｜クラウドワークス"
        description="バイト先での接客業を減らして、空き時間に在宅ワーク。ライター・データ入力・デザイン等で月3〜8万円、その一部を新NISAに回せば卒業時には数十万円の資産に。"
        buttonText="クラウドワークスに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP"
        icon="💻"
        highlight="完全無料"
      />
    </>
  ),
  "card-loan-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">カードローンの賢い選び方</h2>
        <p>
          急な出費でカードローン利用を検討する際、選ぶべきは「金利」「無利息期間」「審査スピード」の3要素。特に無利息期間（30日間等）を上手に活用すれば、実質無料で借入できるケースも。一方で長期利用は高金利の負担が大きいため、早期完済を前提に使うのが鉄則です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 カードローン比較"
        services={[
          {
            name: "プロミス",
            rank: 1,
            highlight: "年利4.5〜17.8%｜最短3分の審査・30日無利息",
            features: [
              "初回利用から30日間無利息（条件なし）",
              "Web完結申込・最短3分審査",
              "SMBCグループの信頼性",
              "三井住友銀行ATMで手数料無料",
            ],
            href: "https://cyber.promise.co.jp/",
            badge: "無利息あり",
          },
          {
            name: "アコム",
            rank: 2,
            highlight: "年利3.0〜18.0%｜初めての方30日間無利息",
            features: [
              "初回契約翌日から30日間無利息",
              "最短20分審査・即日融資可",
              "三菱UFJフィナンシャル・グループ",
              "24時間申込可能、Web完結",
            ],
            href: "https://www.acom.co.jp/",
          },
          {
            name: "アイフル",
            rank: 3,
            highlight: "年利3.0〜18.0%｜最大30日間無利息",
            features: [
              "初回契約翌日から30日間無利息",
              "Web完結で来店・郵送不要",
              "最短25分の審査",
              "SuLaLi（女性専用）等の派生商品も",
            ],
            href: "https://www.ir-aiful.com/",
          },
          {
            name: "SMBCモビット",
            rank: 4,
            highlight: "年利3.0〜18.0%｜Web完結で在籍確認なしも可",
            features: [
              "Web完結申込で原則電話での在籍確認なし",
              "10秒簡易審査、最短即日融資",
              "SMBCグループ運営",
              "三井住友銀行ATMで手数料無料",
            ],
            href: "https://www.mobit.ne.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">銀行カードローン vs 消費者金融カードローン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>銀行カードローン</strong>：金利年1.5〜15%で低め、審査厳しめ、即日融資不可</li>
          <li><strong>消費者金融</strong>：金利年3〜18%で高め、審査緩め、最短即日融資</li>
          <li><strong>総量規制</strong>：消費者金融は年収の1/3まで、銀行は対象外</li>
          <li><strong>急ぎなら</strong>：消費者金融の無利息期間活用</li>
          <li><strong>長期利用なら</strong>：銀行カードローンで金利節約</li>
        </ul>
      </section>
      <AffiliateCTA
        title="まずは1万円〜相談｜プロミス"
        description="急な出費にも対応のカードローン。30日間無利息で借りれば実質無料、短期間の返済なら利息負担最小化。最短3分の審査で即日融資も。"
        buttonText="プロミスの詳細"
        href="https://cyber.promise.co.jp/"
        icon="💴"
        highlight="30日間無利息"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">カードローン利用の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>原則「短期で完済」の計画（長期は高金利負担大）</li>
          <li>信用情報に記録が残る（住宅ローン審査に影響）</li>
          <li>複数社からの借入はブラックリスト扱いに</li>
          <li>返済が困難なら弁護士・司法書士に早めに相談</li>
          <li>ファクタリング（個人事業主）は別選択肢として検討</li>
        </ul>
      </section>
    </>
  ),
  "elderly-care-cost-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">親の介護費用は月5〜30万円、10年で3,000万円超</h2>
        <p>
          要介護1〜5の介護費用は、在宅介護で月5〜15万円、施設入居で月15〜30万円。介護期間は平均5〜10年、総額500〜3,000万円の負担に。公的介護保険＋親の年金＋家族負担の組み合わせで賄いますが、早めの資金計画が重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="要介護度別の費用目安"
        services={[
          {
            name: "要介護1〜2（在宅介護）",
            rank: 1,
            highlight: "月5〜10万円｜介護保険1割負担＋実費",
            features: [
              "訪問介護・デイサービス・福祉用具レンタル",
              "家族の負担もまだ軽め（パート就労可）",
              "介護休業給付金（最大93日）活用可",
              "自宅改修費用の補助あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
            badge: "初期段階",
          },
          {
            name: "要介護3〜4（在宅介護）",
            rank: 2,
            highlight: "月10〜15万円｜24時間見守りに近づく",
            features: [
              "訪問介護の回数増加、家族負担も増大",
              "ショートステイ・デイサービス併用",
              "仕事との両立が困難に",
              "介護離職のリスクが高まる時期",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "要介護5（施設入居）",
            rank: 3,
            highlight: "月15〜30万円｜特養は安いが入居待機1〜2年",
            features: [
              "特別養護老人ホーム：月10〜15万円（待機長い）",
              "介護付有料老人ホーム：月20〜30万円",
              "認知症対応型グループホーム：月15〜20万円",
              "親の年金で賄えるかシビアに計算必要",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">介護費用の資金源</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>親の年金</strong>：月15〜20万円（厚生年金ありの場合）</li>
          <li><strong>親の貯蓄</strong>：平均1,500〜3,000万円（総務省データ）</li>
          <li><strong>公的介護保険</strong>：1〜3割負担、高額介護サービス費で上限あり</li>
          <li><strong>高額医療・介護合算療養費制度</strong>：年間自己負担額の上限</li>
          <li><strong>家族負担</strong>：不足分を子が補填（平均月3〜5万円）</li>
          <li><strong>民間介護保険</strong>：月給付金10〜15万円の保険もあり</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護の準備もFPに相談｜保険見直しラボ"
        description="親の介護に備えた資金計画と、民間介護保険・医療保険の見直しを無料FP相談で一元設計。早めに準備するほど家族の負担を抑えられる。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">介護離職を防ぐ制度・サービス</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>介護休業給付金：通算93日、月収の67%を雇用保険から給付</li>
          <li>介護休暇：年5日（対象家族2人以上は10日）の有給休暇</li>
          <li>介護短時間勤務制度：所定労働時間の短縮</li>
          <li>地域包括支援センター：無料で相談・プランニング</li>
          <li>ケアマネジャー：要介護認定後、ケアプラン作成サポート</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護費用の備えに新NISA｜SBI証券"
        description="親の介護が始まる前に、自分自身の老後資金と合わせて介護資金の準備を。新NISAで月3万円×20年運用で約1,200万円、介護費用の主力資金源として機能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "funeral-cost-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">葬儀費用の種類別相場</h2>
        <p>
          葬儀費用は形式によって10万円〜300万円と大きく異なります。直葬（火葬のみ）は10〜50万円、家族葬は50〜150万円、一般葬は150〜300万円が相場。近年は家族葬・直葬のシェアが急増しており、事前準備で100万円以上の節約が可能です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>直葬（火葬のみ）: 10〜50万円</li>
          <li>一日葬（通夜なし）: 30〜80万円</li>
          <li>家族葬: 50〜150万円</li>
          <li>一般葬: 150〜300万円</li>
          <li>社葬・合同葬: 500万円〜</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 全国対応の格安葬儀社比較"
        services={[
          {
            name: "小さなお葬式",
            rank: 1,
            highlight: "業界最大手｜定額プラン11.9万円〜",
            features: [
              "全国4,000以上の葬儀社と提携",
              "定額制で追加費用なし（直葬11.9万円〜）",
              "24時間365日対応",
              "葬儀費用の明朗会計",
            ],
            href: "https://www.osohshiki.jp/",
            badge: "業界最大手",
          },
          {
            name: "よりそうお葬式",
            rank: 2,
            highlight: "定額9.8万円〜｜業界最安クラス",
            features: [
              "直葬プラン9.8万円〜",
              "追加費用・返礼品込みのオールインワン",
              "全国約4,000葬儀社のネットワーク",
              "事前の葬儀社紹介・無料見積り",
            ],
            href: "https://www.yoriso.com/",
          },
          {
            name: "いい葬儀",
            rank: 3,
            highlight: "日本最大級の葬儀社比較サイト",
            features: [
              "全国6,000超の葬儀社情報",
              "口コミ・評価で比較検討可能",
              "24時間対応、急な葬儀にも",
              "事前の資料請求で無料で情報入手",
            ],
            href: "https://www.e-sogi.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">葬儀費用を抑える5つのワザ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>直葬・家族葬を選ぶ</strong>：一般葬より100万円以上節約</li>
          <li><strong>複数社相見積り</strong>：同じ規模で50〜100万円の差が出ることも</li>
          <li><strong>会員価格を利用</strong>：互助会・JA葬祭は非会員より20〜30%安い</li>
          <li><strong>公営斎場を利用</strong>：民間より費用が3〜5割安い</li>
          <li><strong>事前契約（生前予約）</strong>：さらに10〜20%割引</li>
        </ol>
      </section>
      <AffiliateCTA
        title="葬儀費用の準備はFPで一元設計｜保険見直しラボ"
        description="葬儀費用・相続税対策・終活費用を総合的にFP無料相談。一時払終身保険で葬儀費用分を非課税で家族に残す設計も可能。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">葬儀費用の支払方法</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>故人の預金：葬儀後の引出しは要注意（相続財産扱い）</li>
          <li>相続開始前の引出しは遺産分割時に考慮される</li>
          <li>クレジットカード払いで返礼品・料理含む全額をポイント還元</li>
          <li>葬儀費用は相続税の債務控除対象（税控除可）</li>
          <li>生命保険の「葬祭給付金」特約を活用</li>
        </ul>
      </section>
    </>
  ),
  "wedding-consulting-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">結婚相談所の仕組みと選び方</h2>
        <p>
          結婚相談所は、専任カウンセラーが相手紹介・交際サポート・成婚まで伴走するサービス。マッチングアプリと違い、独身証明書・収入証明書が必須で、本気で結婚したい会員のみ。成婚率20〜30%と高く、30代40代の結婚活動で最も効率的な手段です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>初期費用: 5〜15万円（入会金+登録料）</li>
          <li>月会費: 1.5〜3万円</li>
          <li>成婚料: 10〜30万円（成婚時のみ発生）</li>
          <li>平均活動期間: 6〜12ヶ月</li>
          <li>総費用: 30〜100万円（活動期間で変動）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 結婚相談所おすすめ比較"
        services={[
          {
            name: "IBJメンバーズ",
            rank: 1,
            highlight: "日本最大級の会員数85,000人｜成婚率50%",
            features: [
              "日本結婚相談所連盟（IBJ）の会員プールを活用",
              "業界最大級の会員数85,000人以上",
              "成婚率50%超（業界平均の約2倍）",
              "30代40代の真剣婚活層が多い",
            ],
            href: "https://www.ibjmembers.jp/",
            badge: "会員数No.1",
          },
          {
            name: "ゼクシィ縁結びエージェント",
            rank: 2,
            highlight: "リクルート系｜コスパNo.1",
            features: [
              "初期費用33,000円〜、月会費9,900円〜と業界最安クラス",
              "リクルート運営の信頼性",
              "独自マッチングAIでの紹介",
              "全国28拠点でサポート",
            ],
            href: "https://zexy-enmusubi-agent.net/",
          },
          {
            name: "パートナーエージェント",
            rank: 3,
            highlight: "成婚率No.1｜年間成婚者1,900人超",
            features: [
              "コンシェルジュによる手厚いサポート",
              "成婚率No.1（約28%）",
              "30代40代の成婚実績が多い",
              "年間1,900人超が成婚",
            ],
            href: "https://www.p-a.jp/",
          },
          {
            name: "ツヴァイ",
            rank: 4,
            highlight: "イオン系｜会員数4万人超の老舗",
            features: [
              "1984年創業、結婚相談所の老舗",
              "全国50拠点、イオンモール内店舗も",
              "専任ハンドメイドマッチング",
              "会員の9割超が年収500万円以上",
            ],
            href: "https://www.zwei.com/",
          },
          {
            name: "エン婚活エージェント",
            rank: 5,
            highlight: "完全オンライン｜月会費14,300円",
            features: [
              "店舗なしの完全オンライン型で低コスト",
              "月会費14,300円＋登録料10,780円のみ",
              "成婚料なしで総費用30万円台",
              "地方在住者にもおすすめ",
            ],
            href: "https://en-konkatsu.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">結婚相談所とマッチングアプリの違い</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>本気度</strong>：相談所は結婚前提、アプリは恋愛〜遊びまで幅広い</li>
          <li><strong>費用</strong>：相談所30〜100万円、アプリ月3,000〜5,000円</li>
          <li><strong>成婚期間</strong>：相談所6〜12ヶ月、アプリは1〜3年かかるケース多い</li>
          <li><strong>サポート</strong>：相談所はカウンセラー伴走、アプリは自己責任</li>
          <li><strong>30代40代向き</strong>：時間効率重視なら相談所、若い層はアプリから</li>
        </ul>
      </section>
      <AffiliateCTA
        title="結婚相談所選びでFP相談も｜保険見直しラボ"
        description="結婚後の家計・保険・住宅ローンはFPに無料相談。新婚夫婦の家計設計を早めに固めれば、子育て資金・老後資金の準備もスムーズに。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">結婚相談所活用の5つのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>複数見学</strong>：最低2〜3社の無料カウンセリングを受けて比較</li>
          <li><strong>プロフィール写真</strong>：プロのフォトスタジオで撮影（成婚率3倍）</li>
          <li><strong>積極的な申込</strong>：週5〜10人に申込むペースを維持</li>
          <li><strong>初回デートは1時間のランチ</strong>：カジュアルに会う→2回目で評価</li>
          <li><strong>3ヶ月でマッチング、6ヶ月で交際、12ヶ月で成婚</strong>の目安</li>
        </ol>
      </section>
    </>
  ),
  "tutoring-school-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">学習塾の種類と選び方</h2>
        <p>
          学習塾は大きく「集団授業型」「個別指導型」「映像授業型」「オンライン塾」の4種類。子どもの学習スタイル・予算・志望校によって最適な形式が異なります。小4〜高3までの10年間で200〜500万円の教育費がかかるため、コスパと相性の両方で慎重に選びましょう。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>集団授業型（河合塾・駿台・早稲アカ）: 月2〜5万円</li>
          <li>個別指導型（東京個別・明光義塾）: 月3〜7万円</li>
          <li>映像授業型（東進・スタディサプリ）: 月2〜6万円</li>
          <li>オンライン塾: 月1〜3万円</li>
          <li>家庭教師: 月5〜15万円</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 学年別おすすめ学習塾"
        services={[
          {
            name: "東進ハイスクール・東進衛星予備校",
            rank: 1,
            highlight: "高校生向け映像授業｜東大京大合格実績No.1",
            features: [
              "全国1,000校舎超、映像授業で有名講師の授業",
              "東大・京大・医学部の合格実績業界トップ",
              "高速マスター基礎力養成講座で弱点克服",
              "月謝10万円〜（高3）",
            ],
            href: "https://www.toshin.com/",
            badge: "難関大向き",
          },
          {
            name: "駿台・河合塾",
            rank: 2,
            highlight: "集団授業の老舗｜医学部・難関大に強い",
            features: [
              "1918年創業、大手予備校2トップ",
              "医学部・旧帝大・早慶特化のコースあり",
              "ライブ授業の臨場感とクラス対抗の刺激",
              "月謝3〜5万円（高3）",
            ],
            href: "https://www.sundai.ac.jp/",
          },
          {
            name: "家庭教師のトライ",
            rank: 3,
            highlight: "個別指導｜AI診断で最適プラン",
            features: [
              "業界最大手、完全個別のマンツーマン",
              "120万人超の指導実績",
              "AI学習診断で苦手科目を見える化",
              "月謝2〜5万円（科目数による）",
            ],
            href: "https://www.trygroup.co.jp/",
          },
          {
            name: "スタディサプリ",
            rank: 4,
            highlight: "業界最安｜月額2,178円の映像授業",
            features: [
              "小4〜高3まで全科目の映像授業",
              "月額2,178円（年契約2万円台）",
              "無料体験14日間",
              "オンラインで完結、地方在住者に最適",
            ],
            href: "https://studysapuri.jp/",
            badge: "コスパNo.1",
          },
          {
            name: "明光義塾",
            rank: 5,
            highlight: "全国2,000教室の個別指導｜中学受験〜大学受験",
            features: [
              "全国2,000教室、業界最大の個別指導",
              "一人ひとりに合わせた学習プラン",
              "中学受験から大学受験まで対応",
              "月謝2〜4万円",
            ],
            href: "https://www.meikogijuku.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学年別の推奨パターン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>小4〜小6（中学受験）</strong>：SAPIX・日能研・四谷大塚（集団授業型で月4〜8万円）</li>
          <li><strong>中1〜中3（高校受験）</strong>：早稲アカ・湘南ゼミナール or 個別指導（月2〜4万円）</li>
          <li><strong>高1〜高2（基礎固め）</strong>：スタディサプリ＋塾なしor 個別指導（月0.2〜3万円）</li>
          <li><strong>高3（受験本番）</strong>：東進・駿台・河合塾の集団 or 個別の組合せ（月8〜15万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="教育費の準備は新NISAで｜SBI証券"
        description="子ども1人の教育費総額は公立1,000万円・私立2,500万円。新NISAで月3万円×15年積立＝約800万円で大学進学費用の準備が完了。児童手当と組み合わせて効率的に。"
        buttonText="SBI証券 新NISAの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">教育費の節約術</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>中学受験は早めの判断（小3夏までに決断）</li>
          <li>映像授業（東進・スタサプ）と個別を組合せて総額を抑える</li>
          <li>兄弟割引・紹介割引を活用</li>
          <li>自治体の塾代助成制度（東京都・大阪市等）</li>
          <li>塾なし戦略（スタディサプリ+参考書）で月3,000円の節約</li>
        </ul>
      </section>
    </>
  ),
  "pet-insurance-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ペット保険で医療費3〜7割カバー</h2>
        <p>
          犬・猫の医療費は、手術1回で10〜30万円、慢性疾病の通院で年5〜10万円と高額。ペット保険に加入すれば治療費の50〜70%をカバーでき、月額1,500〜5,000円で大切な家族の備えになります。ただし補償内容・保険料は会社で大差があるため、複数社比較が必須です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ペット保険おすすめ比較10選"
        services={[
          {
            name: "アイペット損保",
            rank: 1,
            highlight: "業界最大手｜通院・入院・手術すべてカバー",
            features: [
              "窓口精算対応の動物病院5,000院以上",
              "50%プラン・70%プラン・うちの子プラン",
              "ペットの高齢化にも対応",
              "月額1,500〜5,000円程度",
            ],
            href: "https://www.ipet-ins.com/",
            badge: "業界最大手",
          },
          {
            name: "アクサダイレクト ペット保険",
            rank: 2,
            highlight: "アクサグループの信頼性｜窓口精算なし（立替）",
            features: [
              "補償割合50%/70%/90%の3種類",
              "通院・入院・手術すべて補償",
              "アクサダイレクト（車保険）契約者は割引",
              "月額1,600〜4,500円程度",
            ],
            href: "https://www.axa-direct.co.jp/pet/",
          },
          {
            name: "SBIいきいき少短（SBI日本興亜）",
            rank: 3,
            highlight: "高齢ペット向け｜11歳まで新規加入可",
            features: [
              "シニアペット特化、11歳まで新規加入OK",
              "終身更新可能",
              "通院・入院・手術補償",
              "月額1,200〜3,500円と割安",
            ],
            href: "https://www.sbiikiiki.co.jp/pet/",
          },
          {
            name: "PS保険（ペット&ファミリー）",
            rank: 4,
            highlight: "最大100%補償｜手術重視プラン",
            features: [
              "手術補償の厚さが業界トップクラス",
              "補償割合50%/70%/100%",
              "免責金額なし",
              "月額1,400〜4,800円程度",
            ],
            href: "https://www.pshoken.co.jp/",
          },
          {
            name: "au損保 ペット保険",
            rank: 5,
            highlight: "auユーザー向け割引｜簡単Web手続き",
            features: [
              "au／UQユーザーは保険料割引",
              "通院・入院・手術すべて補償",
              "auスマートパスプレミアム会員特典",
              "月額1,300〜4,200円程度",
            ],
            href: "https://www.au-sonpo.co.jp/pet/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ペット保険選びの5つのポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>補償範囲</strong>：通院・入院・手術の3種類カバーが基本</li>
          <li><strong>補償割合</strong>：50%（保険料安）70%（標準）90-100%（手厚い）</li>
          <li><strong>窓口精算の可否</strong>：対応病院で立替払い不要</li>
          <li><strong>限度額と回数制限</strong>：通院日数・手術回数の上限</li>
          <li><strong>免責金額・待機期間</strong>：加入後30〜60日は対象外が多い</li>
        </ol>
      </section>
      <AffiliateCTA
        title="ペットの家計・保険もFPで最適化｜保険見直しラボ"
        description="ペット保険だけでなく、飼い主の生命保険・医療保険の見直しもFP無料相談で一元化。家族全員の保険を見直すことで年10〜20万円の節約も。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ペット保険加入のタイミング</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>子犬・子猫（生後60日〜）の健康なうちが加入ベスト</li>
          <li>高齢（7歳以上）は加入制限・保険料増加</li>
          <li>既往症がある場合、その疾病は対象外</li>
          <li>手術・入院だけの簡易プランでも月額1,000円台</li>
          <li>待機期間中の発症は対象外（加入直後は注意）</li>
        </ul>
      </section>
    </>
  ),
  "online-english-school-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オンライン英会話の選び方</h2>
        <p>
          オンライン英会話は月額3,000〜15,000円で毎日マンツーマンレッスン可能。通学型英会話（月3〜5万円）と比べ10分の1のコストで、自宅・通勤時間・スキマ時間に学習できます。ビジネス英語・日常会話・TOEIC対策など目的別に最適サービスを選びましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 オンライン英会話おすすめ比較"
        services={[
          {
            name: "DMM英会話",
            rank: 1,
            highlight: "月6,480円で毎日1レッスン｜135カ国の講師",
            features: [
              "毎日1レッスン25分 月6,480円〜",
              "135カ国10,000人超の講師プール",
              "iKnow!（単語学習）無料",
              "レッスン教材無料、多様な難易度に対応",
            ],
            href: "https://eikaiwa.dmm.com/",
            badge: "総合No.1",
          },
          {
            name: "ネイティブキャンプ",
            rank: 2,
            highlight: "回数無制限｜月6,480円でレッスン受け放題",
            features: [
              "月6,480円でレッスン回数無制限",
              "24時間365日予約なしで即レッスン可能",
              "世界120カ国の講師",
              "家族プランで兄弟・配偶者も安くなる",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM",
            badge: "回数無制限",
          },
          {
            name: "レアジョブ英会話",
            rank: 3,
            highlight: "月7,980円｜ビジネス英語に強い老舗",
            features: [
              "2007年創業、業界最大手",
              "毎日1レッスン25分 月7,980円〜",
              "ビジネス英会話コース有",
              "カウンセリング・学習管理が手厚い",
            ],
            href: "https://www.rarejob.com/",
          },
          {
            name: "Bizmates（ビズメイツ）",
            rank: 4,
            highlight: "ビジネス特化｜社会人向け",
            features: [
              "ビジネス特化のオンライン英会話No.1",
              "フィリピン人講師のビジネス経験者のみ",
              "月13,200円〜（25分×30回）",
              "法人研修でも大手企業が採用",
            ],
            href: "https://www.bizmates.jp/",
          },
          {
            name: "QQ English",
            rank: 5,
            highlight: "TESOL認定講師｜カランメソッド対応",
            features: [
              "正社員フィリピン人講師（TESOL保有）",
              "カランメソッドで英語脳形成",
              "月2,680円〜（月4回）〜11,980円（月30回）",
              "子ども向けコースも充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">目的別の推奨サービス</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>日常会話から始めたい</strong>：DMM英会話 or ネイティブキャンプ（コスパ最強）</li>
          <li><strong>ビジネス英会話</strong>：Bizmates or レアジョブビジネスコース</li>
          <li><strong>カランメソッドで早く上達したい</strong>：QQ English・ネイティブキャンプ</li>
          <li><strong>TOEIC・資格対策</strong>：レアジョブ・QQ English</li>
          <li><strong>子ども向け</strong>：QQキッズ・Novakid</li>
        </ul>
      </section>
      <AffiliateCTA
        title="無制限で学べる｜ネイティブキャンプ"
        description="月6,480円でレッスン回数無制限。毎日3レッスンやれば実質月216円/レッスンの破格。通学型英会話の10分の1以下のコストで、スキマ時間に即レッスン可能。"
        buttonText="ネイティブキャンプを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM"
        icon="🗣️"
        highlight="回数無制限"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">英語力で副業・転職を有利に</h2>
        <p>
          英語力（TOEIC 700点以上）があれば、翻訳・英文ライター・海外向けEC・英会話講師など高単価副業の選択肢が広がります。投資情報も英語の一次ソース（Bloomberg・WSJ等）にアクセスでき、資産運用の精度も向上。オンライン英会話への投資は「スキル資産」として長期的に回収可能です。
        </p>
      </section>
    </>
  ),
  "programming-school-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">プログラミング転職で年収+200〜300万円</h2>
        <p>
          プログラミングスクールを修了して未経験からエンジニア転職に成功すれば、年収300万円→500〜600万円の上昇も期待できます。受講料30〜70万円の初期投資が1〜2年で回収可能。教育訓練給付金で最大56万円の補助もあり、実質負担を大幅に減らせます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 プログラミングスクールおすすめ比較"
        services={[
          {
            name: "TechAcademy",
            rank: 1,
            highlight: "オンライン完結｜現役エンジニア講師のマンツーマン",
            features: [
              "Webアプリ・フロントエンド・AI・副業向けコース豊富",
              "メンタリング週2回、現役エンジニア講師",
              "副業・転職保証コースあり",
              "受講料16〜56万円、教育訓練給付金対象",
            ],
            href: "https://techacademy.jp/",
            badge: "オンライン最大手",
          },
          {
            name: "DMM WEBCAMP",
            rank: 2,
            highlight: "転職保証型｜未経験からエンジニア転職",
            features: [
              "転職成功率98%、未経験特化",
              "チーム開発経験で実践力アップ",
              "受講料69〜91万円（給付金で実質20〜46万円）",
              "キャリアアドバイザー付き",
            ],
            href: "https://web-camp.io/",
          },
          {
            name: "侍エンジニア",
            rank: 3,
            highlight: "マンツーマン指導｜オーダーメイドカリキュラム",
            features: [
              "専属マンツーマン講師でオーダーメイドカリキュラム",
              "受講料16〜88万円",
              "教育訓練給付金対象",
              "ポートフォリオ作成支援が手厚い",
            ],
            href: "https://www.sejuku.net/",
          },
          {
            name: "tech boost",
            rank: 4,
            highlight: "現役エンジニアの個別メンタリング",
            features: [
              "未経験からエンジニア転職特化",
              "月1.7万円〜の分割払い可",
              "オンライン・通学選択可（東京）",
              "転職エージェント連携あり",
            ],
            href: "https://tech-boost.jp/",
          },
          {
            name: "SkillHacks（スキルハックス）",
            rank: 5,
            highlight: "買い切り69,800円｜質問し放題",
            features: [
              "動画教材買い切りで継続費用ゼロ",
              "LINEでの質問し放題",
              "受講料69,800円（業界最安クラス）",
              "独学より圧倒的に効率的",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM",
            badge: "業界最安",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">教育訓練給付金を活用する</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>一般教育訓練給付金：受講料の20%（最大10万円）</li>
          <li>特定一般教育訓練給付金：受講料の40%（最大20万円）</li>
          <li>専門実践教育訓練給付金：受講料の70%（最大56万円）</li>
          <li>雇用保険加入1年以上の会社員・退職から1年以内</li>
          <li>DMM WEBCAMP・TechAcademy・侍エンジニアの一部コースが対象</li>
        </ul>
      </section>
      <AffiliateCTA
        title="まずは買い切り教材から｜SkillHacks"
        description="月額制スクールは高すぎる方向け、買い切り69,800円の動画教材。LINEでの質問し放題、プログラミング基礎〜実践まで学べる業界最安値。"
        buttonText="SkillHacksの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM"
        icon="💻"
        highlight="買い切り"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">エンジニア転職後のキャリア</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>1年目：ジュニアエンジニア 年収350〜450万円</li>
          <li>3年目：ミドルエンジニア 年収500〜700万円</li>
          <li>5年目：シニアエンジニア 年収700〜1,000万円</li>
          <li>フリーランス転身：月収80〜150万円も可能</li>
          <li>AI・クラウドスキルで年収さらにUP</li>
        </ul>
      </section>
    </>
  ),
  "finance-job-agent-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">金融業界転職で年収800万円〜のハイクラスへ</h2>
        <p>
          銀行・証券・保険・アセットマネジメント・ファンド等の金融業界転職は、現年収500〜700万円から800〜1,500万円へのアップが狙える領域。転職エージェントの選び方次第で年収と求人の質が大きく変わります。金融特化エージェントと総合エージェントの併用が王道です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 金融業界転職エージェントおすすめ比較"
        services={[
          {
            name: "JACリクルートメント",
            rank: 1,
            highlight: "ハイクラス転職No.1｜金融・外資系に強い",
            features: [
              "年収800〜2,000万円のハイクラス特化",
              "コンサルタントが業界別に分業、専門性が高い",
              "外資系金融機関（投資銀行・PEファンド等）に強い",
              "非公開求人が豊富",
            ],
            href: "https://www.jac-recruitment.jp/",
            badge: "ハイクラスNo.1",
          },
          {
            name: "ビズリーチ",
            rank: 2,
            highlight: "スカウト型｜ヘッドハンター経由でオファー",
            features: [
              "登録するとヘッドハンターからスカウト",
              "年収1,000万円以上の求人豊富",
              "無料プランでも最低限使える",
              "金融機関からの直接スカウトも",
            ],
            href: "https://www.bizreach.jp/",
          },
          {
            name: "リクルートエージェント",
            rank: 3,
            highlight: "業界最大手｜求人数40万件超",
            features: [
              "業界最大手、求人数No.1（40万件超）",
              "金融業界の求人も豊富",
              "若手〜ミドル層の幅広い求人",
              "転職支援ツールが充実",
            ],
            href: "https://www.r-agent.com/",
          },
          {
            name: "エンワールド・ジャパン",
            rank: 4,
            highlight: "外資系・グローバル特化｜英語力活用",
            features: [
              "外資系金融・グローバル企業に特化",
              "英語力を活かせる求人中心",
              "年収800〜3,000万円のハイクラス",
              "ダイバーシティ採用にも強い",
            ],
            href: "https://www.enworld.com/",
          },
          {
            name: "パソナキャリア",
            rank: 5,
            highlight: "3年連続顧客満足度No.1｜女性支援も手厚い",
            features: [
              "オリコン顧客満足度3年連続No.1",
              "女性のキャリア支援に強い",
              "金融機関への転職実績多数",
              "ハイクラス転職「パソナキャリアハイクラス」あり",
            ],
            href: "https://www.pasonacareer.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">転職エージェント活用のコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>複数エージェント併用</strong>：2〜3社でスカウト受けて比較</li>
          <li><strong>面談でキャリア相談</strong>：市場価値・年収水準を客観的に把握</li>
          <li><strong>ビズリーチで平行してスカウト受信</strong>：想定外のオファーを引き寄せ</li>
          <li><strong>金融特化のJAC＋総合のリクルート</strong>の組合せが鉄板</li>
          <li><strong>内定条件交渉はエージェント活用</strong>：年収+50〜100万円も</li>
        </ol>
      </section>
      <AffiliateCTA
        title="ハイクラス転職なら｜JACリクルートメント"
        description="年収800〜2,000万円のハイクラス転職で業界No.1。金融・外資系・ファンド等のプロフェッショナル転職に強く、非公開求人も豊富。まず無料登録から。"
        buttonText="JACリクルートメントに登録"
        href="https://www.jac-recruitment.jp/"
        icon="💼"
        highlight="ハイクラスNo.1"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">金融業界転職の年収相場</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>地方銀行 → メガバンク：年収+100〜200万円</li>
          <li>事業会社経理 → 監査法人・コンサル：年収+200〜400万円</li>
          <li>銀行リテール → 証券・投資銀行：年収+300〜500万円</li>
          <li>国内証券 → 外資系証券：年収+500〜1,000万円</li>
          <li>IFA・プライベートバンク：成果報酬型で年収1,500万円超も</li>
        </ul>
      </section>
    </>
  ),
  "marriage-app-comparison-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">婚活アプリで始める真剣な出会い</h2>
        <p>
          マッチングアプリは月額3,000〜5,000円で始められ、結婚相談所（月1〜3万円）と比べ圧倒的にコスパ良好。30代40代の真剣婚活層、20代の恋活層、シニアの再婚希望層と、年齢層別に最適アプリが異なります。複数アプリ並行で成約率を最大化しましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 婚活マッチングアプリおすすめ比較"
        services={[
          {
            name: "Pairs（ペアーズ）",
            rank: 1,
            highlight: "国内最大級会員2,000万人｜20〜30代恋活婚活",
            features: [
              "国内会員数No.1、2,000万人超",
              "女性無料、男性月3,700〜4,100円",
              "コミュニティで趣味マッチング",
              "真剣度が高い会員が多い",
            ],
            href: "https://www.pairs.lv/",
            badge: "会員数No.1",
          },
          {
            name: "with（ウィズ）",
            rank: 2,
            highlight: "心理テストで相性診断｜20〜30代中心",
            features: [
              "心理学者監修の心理テストで相性診断",
              "女性無料、男性月3,600〜4,200円",
              "20〜30代の真剣交際希望者が多い",
              "独自のコミュニティ機能",
            ],
            href: "https://with.is/",
          },
          {
            name: "ゼクシィ縁結び",
            rank: 3,
            highlight: "リクルート運営｜結婚前提の真剣層",
            features: [
              "ゼクシィブランドの安心感、真剣度高い",
              "男女とも月4,378円〜",
              "価値観診断で相性マッチング",
              "30〜40代の結婚前提交際に強い",
            ],
            href: "https://zexy-enmusubi.net/",
          },
          {
            name: "Omiai",
            rank: 4,
            highlight: "イエローカード制｜安全性重視",
            features: [
              "24時間365日の監視、イエローカード通報制",
              "女性無料、男性月3,980〜4,800円",
              "結婚意識の高い20〜30代中心",
              "本人確認厳格",
            ],
            href: "https://fb.omiai-jp.com/",
          },
          {
            name: "マリッシュ",
            rank: 5,
            highlight: "再婚・シンママパパ支援｜30〜50代",
            features: [
              "再婚・バツイチ・シングル親に理解のある会員",
              "女性無料、男性月3,400〜4,900円",
              "30〜50代の真剣婚活層",
              "再婚に前向きな方を優遇",
            ],
            href: "https://marrish.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢・目的別の推奨アプリ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>20代・恋活〜婚活</strong>：Pairs、with（コスパ重視）</li>
          <li><strong>30代・結婚前提</strong>：ゼクシィ縁結び、Pairs、Omiai</li>
          <li><strong>40代以降・真剣婚活</strong>：マリッシュ、Match.com（米国系）</li>
          <li><strong>バツイチ・再婚希望</strong>：マリッシュ、youbride</li>
          <li><strong>ハイクラス層</strong>：Dine、東カレデート</li>
        </ul>
      </section>
      <AffiliateCTA
        title="結婚相談所と並行で活動｜ゼクシィ縁結びエージェント"
        description="マッチングアプリで結果が出ない30代は結婚相談所の検討も。ゼクシィ縁結びエージェントなら月会費9,900円〜で手厚いサポート、アプリとの併用で成婚率を最大化。"
        buttonText="ゼクシィ縁結びエージェント"
        href="https://zexy-enmusubi-agent.net/"
        icon="💍"
        highlight="結婚相談所"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">マッチングアプリ活用の5つのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>プロフィール写真はプロのフォトスタジオで撮影（マッチング率3倍）</li>
          <li>自己紹介文は300文字以上、具体的な趣味・休日の過ごし方を記載</li>
          <li>複数アプリを並行利用（Pairs + Omiai + ゼクシィ等）</li>
          <li>初回メッセージは相手のプロフィールに触れた質問形式</li>
          <li>3ヶ月でマッチング、6ヶ月で交際、12ヶ月で結婚の目安</li>
        </ol>
      </section>
    </>
  ),
  "lawyer-consultation-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">弁護士無料相談で解決できる問題</h2>
        <p>
          弁護士への相談は「30分5,000円」が一般的ですが、無料相談サービスを使えば費用ゼロで専門家のアドバイスを得られます。借金・離婚・相続・労働問題・交通事故・刑事事件など、幅広い分野で初回無料相談が可能。悩みを抱え込む前に、まず無料相談で解決の道筋を見つけましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 弁護士無料相談サービス比較"
        services={[
          {
            name: "弁護士ドットコム",
            rank: 1,
            highlight: "業界最大手｜全国2万人の弁護士ネットワーク",
            features: [
              "全国約20,000人の弁護士が登録",
              "相談内容からマッチング可能",
              "口コミ評価で弁護士を選べる",
              "無料相談対応の弁護士が多数",
            ],
            href: "https://www.bengo4.com/",
            badge: "業界最大手",
          },
          {
            name: "法テラス（日本司法支援センター）",
            rank: 2,
            highlight: "無料相談3回まで｜収入基準で利用可",
            features: [
              "国が設立した法律相談窓口",
              "収入基準を満たせば無料相談3回まで",
              "弁護士費用の立替制度（償還）",
              "全国110ヶ所の窓口＋電話相談",
            ],
            href: "https://www.houterasu.or.jp/",
          },
          {
            name: "ベリーベスト法律事務所",
            rank: 3,
            highlight: "全国73拠点｜債務整理・離婚に強い",
            features: [
              "全国73拠点、大手法律事務所",
              "初回無料相談、債務整理・離婚・相続に強い",
              "分割払い対応",
              "企業法務・刑事事件まで幅広い",
            ],
            href: "https://www.vbest.jp/",
          },
          {
            name: "アディーレ法律事務所",
            rank: 4,
            highlight: "債務整理・過払い金請求に特化",
            features: [
              "債務整理・過払い金請求の専門",
              "初回相談無料＋着手金後払い制度",
              "全国64拠点、電話・Web相談可",
              "完全報酬制で初期費用ゼロ",
            ],
            href: "https://www.adire.jp/",
          },
          {
            name: "アトム法律事務所",
            rank: 5,
            highlight: "交通事故・刑事事件に強い",
            features: [
              "交通事故・刑事事件に特化",
              "全国主要都市に拠点",
              "無料相談・電話相談対応",
              "24時間対応の刑事事件窓口",
            ],
            href: "https://atomfirm.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">相談内容別のおすすめ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>借金・債務整理</strong>：アディーレ、ベリーベスト（過払い金請求は時効注意）</li>
          <li><strong>離婚・慰謝料</strong>：ベリーベスト、弁護士ドットコムで離婚専門検索</li>
          <li><strong>相続トラブル</strong>：税理士ドットコムの相続税理士＋弁護士の連携</li>
          <li><strong>労働問題（残業代・セクハラ・不当解雇）</strong>：弁護士ドットコム</li>
          <li><strong>交通事故・被害者請求</strong>：アトム法律事務所</li>
          <li><strong>刑事事件</strong>：アトム法律事務所（24時間対応）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="相続の税務面は税理士ドットコム"
        description="相続トラブルは弁護士＋税理士の連携が必須。税理士ドットコムなら相続専門税理士を無料紹介、弁護士ドットコムと合わせて使えば法務・税務の両面から解決可能。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="👔"
        highlight="紹介料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">弁護士費用の目安</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>相談料：30分5,000円（無料相談活用でゼロに）</li>
          <li>着手金：経済的利益の5〜10%（案件により変動）</li>
          <li>報酬金：経済的利益の10〜20%</li>
          <li>債務整理：任意整理1社2〜5万円、個人再生30〜50万円、自己破産30〜50万円</li>
          <li>離婚：協議離婚20〜40万円、裁判離婚80〜150万円</li>
        </ul>
      </section>
    </>
  ),
  "reverse-mortgage-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リバースモーゲージとは</h2>
        <p>
          リバースモーゲージは、自宅を担保に銀行から融資を受け、死亡時に自宅売却で一括返済する制度。持ち家シニアの老後資金調達策として注目されています。生存中は利息のみ支払うため毎月の返済負担は軽く、住み慣れた自宅に住み続けながら老後資金を確保可能です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>借入限度額：自宅評価額の50〜70%</li>
          <li>返済：死亡時に自宅売却で一括返済</li>
          <li>生存中は利息のみ支払い（月2〜5万円程度）</li>
          <li>自宅は所有権を保持、住み続けられる</li>
          <li>相続人は自宅を継ぐか売却か選択可能</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 リバースモーゲージ取扱金融機関比較"
        services={[
          {
            name: "東京スター銀行",
            rank: 1,
            highlight: "業界最大手｜商品設計が柔軟",
            features: [
              "リバースモーゲージの先駆者、業界最大手",
              "借入金の用途自由（生活費・医療費・リフォーム等）",
              "全国対応、対面相談可",
              "変動金利年2.9〜3.9%",
            ],
            href: "https://www.tokyostarbank.co.jp/",
            badge: "業界最大手",
          },
          {
            name: "三井住友信託銀行",
            rank: 2,
            highlight: "信託銀行のノウハウ｜相続対策も一体",
            features: [
              "信託銀行ならではの相続対策連携",
              "借入用途は生活資金・医療費・介護費等",
              "全国展開、対面相談可",
              "家族信託との組合せも可能",
            ],
            href: "https://www.smtb.jp/",
          },
          {
            name: "みずほ銀行",
            rank: 3,
            highlight: "メガバンクの安心感｜最低500万円〜",
            features: [
              "メガバンクの安心感と商品充実度",
              "借入用途はリフォーム・高齢者施設入居資金",
              "みずほ信託との連携可能",
              "固定金利プランあり",
            ],
            href: "https://www.mizuhobank.co.jp/",
          },
          {
            name: "住宅金融支援機構 リ・バース60",
            rank: 4,
            highlight: "全国の提携金融機関｜ノンリコース型",
            features: [
              "ノンリコース型（相続人が残債を負わない）",
              "全国の民間金融機関が取扱",
              "満60歳以上が対象",
              "公的制度の安心感",
            ],
            href: "https://www.jhf.go.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">メリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>メリット①</strong>：自宅に住み続けながら老後資金を確保</li>
          <li><strong>メリット②</strong>：毎月の返済は利息のみで負担軽い</li>
          <li><strong>メリット③</strong>：相続人は自宅を継ぐか売却か選択可能</li>
          <li><strong>デメリット①</strong>：金利上昇リスク（変動金利の場合）</li>
          <li><strong>デメリット②</strong>：長生きすると借入金が元本超過のリスク</li>
          <li><strong>デメリット③</strong>：配偶者の住み続け権が制限される場合あり</li>
        </ul>
      </section>
      <AffiliateCTA
        title="老後資金全体の相談はFPへ｜保険見直しラボ"
        description="リバースモーゲージ単体でなく、年金・退職金・貯蓄・保険・不動産を総合的に設計するのが王道。FP無料相談で家計全体のキャッシュフロー計画を。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リバースモーゲージが向いている人</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>持ち家（一戸建てまたは一定条件のマンション）あり</li>
          <li>60歳以上で現金資産が限られる</li>
          <li>子どもが独立済で自宅継承の希望なし</li>
          <li>年金だけでは生活費が不足しがち</li>
          <li>住み慣れた自宅を離れたくない</li>
        </ul>
      </section>
    </>
  ),
  "moving-cost-saving-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">引越し費用を最大20万円節約する方法</h2>
        <p>
          引越し費用は業者選び・時期・交渉で大きく変わります。3月の繁忙期は通常期の2倍以上になるケースもあり、一括見積もりで複数社比較すれば平均20〜30%の節約が可能。単身で5〜10万円、ファミリーで15〜30万円の費用差が出ます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 引越し一括見積もりサービス比較"
        services={[
          {
            name: "SUUMO引越し見積もり",
            rank: 1,
            highlight: "リクルート運営｜電話番号登録不要",
            features: [
              "電話番号登録不要、メールのみで見積もり取得可能",
              "最大10社の一括見積もり",
              "リクルートの信頼性",
              "業者の口コミ評価も確認可",
            ],
            href: "https://hikkoshi.suumo.jp/",
            badge: "電話なしOK",
          },
          {
            name: "引越し侍",
            rank: 2,
            highlight: "業界最大手｜340社の提携先",
            features: [
              "全国340社以上の業者と提携",
              "最大10社一括見積もり",
              "料金相場・口コミが充実",
              "即予約プランで時短",
            ],
            href: "https://hikkoshizamurai.jp/",
          },
          {
            name: "LIFULL引越し",
            rank: 3,
            highlight: "LIFULL HOME'S運営の安心感",
            features: [
              "LIFULL HOME'S（不動産大手）運営",
              "最大10社の一括見積もり",
              "単身〜家族向けまで対応",
              "引越し関連の手続きサポート",
            ],
            href: "https://hikkoshi.homes.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">引越し費用を抑える5つのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>9〜2月の通常期を狙う</strong>：繁忙期の半額になることも</li>
          <li><strong>平日昼間を選ぶ</strong>：土日祝より10〜20%安い</li>
          <li><strong>一括見積もりで最低3社比較</strong>：相見積もりで交渉余地を作る</li>
          <li><strong>不用品は事前にメルカリで売却</strong>：荷物量を減らして費用削減</li>
          <li><strong>段ボール・引越し用品は無料提供業者を選ぶ</strong></li>
        </ol>
      </section>
      <AffiliateCTA
        title="メルカリで不用品処分＋クラウドワークスで引越し資金｜クラウドワークス"
        description="引越し前の不用品処分はメルカリで現金化、さらにスキマ時間の副業で10〜20万円の引越し資金を捻出可能。クラウドワークスなら在宅で即始められる。"
        buttonText="クラウドワークスに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP"
        icon="💻"
        highlight="完全無料"
      />
    </>
  ),
  "home-renovation-loan-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リフォームローンの3種類と選び方</h2>
        <p>
          リフォーム費用100〜1,500万円を賄うローンには「住宅ローン型（金利1%台）」「無担保リフォームローン（金利2〜5%）」「カードローン型（金利5〜15%）」の3種類。金利と審査スピードのバランスで選びましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 リフォームローンおすすめ比較"
        services={[
          {
            name: "住信SBIネット銀行 リフォームローン",
            rank: 1,
            highlight: "変動金利1.8〜2.8%｜Web完結・最短即日審査",
            features: [
              "変動金利1.8〜2.8%（業界最低水準）",
              "保証料・繰上返済手数料無料",
              "最大1,000万円まで借入可能",
              "Web完結で来店不要",
            ],
            href: "https://www.netbk.co.jp/",
            badge: "最安",
          },
          {
            name: "楽天銀行 リフォームローン",
            rank: 2,
            highlight: "変動金利2.5〜7.0%｜楽天会員は0.3%優遇",
            features: [
              "楽天会員なら金利優遇あり",
              "最大500万円まで",
              "WEBで完結、来店不要",
              "楽天ポイント獲得",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
          {
            name: "三菱UFJ銀行 ネットDEリフォームローン",
            rank: 3,
            highlight: "変動金利1.99%〜｜メガバンクの安心感",
            features: [
              "メガバンクの低金利商品",
              "最大1,000万円まで",
              "最長15年の返済期間",
              "ネット申込で来店不要",
            ],
            href: "https://www.bk.mufg.jp/",
          },
          {
            name: "住宅金融支援機構 フラット35リフォーム一体型",
            rank: 4,
            highlight: "固定金利1.8%前後｜省エネリフォームで優遇",
            features: [
              "住宅購入＋リフォームを一体でフラット35に",
              "固定金利で返済計画が安定",
              "省エネリフォームは金利優遇あり",
              "最長35年返済",
            ],
            href: "https://www.jhf.go.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">省エネリフォーム補助金を活用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>こどもエコすまい支援事業：最大60万円</li>
          <li>先進的窓リノベ事業：最大200万円</li>
          <li>給湯省エネ事業：最大15万円/台</li>
          <li>長期優良住宅化リフォーム：最大250万円</li>
          <li>住宅ローン減税（リフォーム）：10年間の所得税控除</li>
        </ul>
      </section>
      <AffiliateCTA
        title="住宅ローン借換も合わせて｜モゲチェック"
        description="リフォームローンに加え、既存の住宅ローンも借換検討を。モゲチェックなら複数銀行を無料比較、金利差0.5%以上で総返済額100〜500万円削減の可能性。"
        buttonText="モゲチェックの詳細"
        href="https://www.mogecheck.jp/"
        icon="🏠"
        highlight="無料診断"
      />
    </>
  ),
  "business-loan-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人事業主・法人の資金調達5手段</h2>
        <p>
          事業の運転資金・設備投資には、①日本政策金融公庫（金利1〜2%台）、②銀行プロパー融資（金利1〜3%）、③信用保証協会付き融資、④ビジネスローン（金利3〜15%）、⑤ファクタリング（買掛売却）の5つが主な選択肢。規模・緊急度で使い分けましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 事業者ローンおすすめ比較"
        services={[
          {
            name: "日本政策金融公庫",
            rank: 1,
            highlight: "金利1〜2%台｜国の金融機関",
            features: [
              "国の金融機関で金利最安水準（1〜2.5%）",
              "開業・創業期の融資に強い",
              "最大7,200万円、固定金利",
              "審査は厳しめ、2〜3週間要",
            ],
            href: "https://www.jfc.go.jp/",
            badge: "金利最安",
          },
          {
            name: "ビジネクスト",
            rank: 2,
            highlight: "年利3〜18%｜最短即日融資",
            features: [
              "オリコグループのビジネスローン",
              "最短即日融資対応",
              "最大1,000万円",
              "Web完結申込",
            ],
            href: "https://www.businext.co.jp/",
          },
          {
            name: "GMOあおぞらネット銀行 あんしんワイド",
            rank: 3,
            highlight: "金利1.0〜14.0%｜AIによる審査",
            features: [
              "AI審査で最短即日融資",
              "金利1.0〜14.0%（個人信用次第）",
              "最大1,000万円",
              "個人事業主・法人対応",
            ],
            href: "https://gmo-aozora.com/",
          },
          {
            name: "資金調達プロ（ファクタリング）",
            rank: 4,
            highlight: "売掛金を即現金化｜審査なし",
            features: [
              "売掛債権を即日現金化",
              "借入ではないため信用情報に影響なし",
              "手数料2〜10%",
              "資金調達プロで複数業者を無料一括比較",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4VMX0A+40JM+TWTFL",
            badge: "借入以外",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">用途別の推奨</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>創業・開業資金</strong>：日本政策金融公庫（金利最安＋創業支援）</li>
          <li><strong>設備投資（数百万〜数千万）</strong>：銀行プロパー＋公庫併用</li>
          <li><strong>運転資金の急場</strong>：ビジネクスト・GMOあおぞら（即日融資）</li>
          <li><strong>売掛金待ち</strong>：ファクタリング（SoKuMo・Easy factor等）</li>
          <li><strong>100万円以下の少額</strong>：法人カードのキャッシング</li>
        </ul>
      </section>
      <AffiliateCTA
        title="売掛金を即現金化｜資金調達プロ"
        description="事業資金の急場に、売掛金ファクタリングで即日現金化。借入ではないため信用情報に影響なし、手数料2〜10%で複数業者を無料比較。"
        buttonText="資金調達プロの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4VMX0A+40JM+TWTFL"
        icon="💼"
        highlight="即日現金化"
      />
    </>
  ),
  "cashless-rewards-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年間還元10万円超を狙うキャッシュレス戦略</h2>
        <p>
          PayPay・楽天Pay・au PAY・d払い・LINE Pay・メルペイの6大キャッシュレス決済を使い分ければ、年間還元10万円以上を狙えます。各サービスのキャンペーン・経済圏連携を理解し、状況に応じて最適な決済を選ぶのがコツ。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 主要キャッシュレス決済比較"
        services={[
          {
            name: "楽天Pay",
            rank: 1,
            highlight: "楽天カード連携で1.5%還元｜楽天経済圏最適",
            features: [
              "楽天カードチャージ＋楽天Pay利用で1.5%還元",
              "楽天市場でのSPU連携",
              "使える店舗500万店超",
              "楽天ポイントがそのまま使える",
            ],
            href: "https://pay.rakuten.co.jp/",
            badge: "総合No.1",
          },
          {
            name: "PayPay",
            rank: 2,
            highlight: "利用店舗最多｜キャンペーン豊富",
            features: [
              "全国430万店以上の加盟店",
              "PayPayステップで最大1.5%還元",
              "Yahoo!ショッピング・ebook系で高還元",
              "ソフトバンクユーザーは連携でさらにお得",
            ],
            href: "https://paypay.ne.jp/",
          },
          {
            name: "au PAY",
            rank: 3,
            highlight: "ポンタ連携で1%還元｜au経済圏",
            features: [
              "au PAYカードからのチャージで1%還元",
              "au PAY利用で最大1%還元",
              "au/UQモバイルユーザーは特典豊富",
              "Pontaポイントが貯まる・使える",
            ],
            href: "https://aupay.wallet.auone.jp/",
          },
          {
            name: "d払い",
            rank: 4,
            highlight: "dポイント連携｜ドコモユーザー有利",
            features: [
              "dカードGOLD+d払いで最大10%還元（条件）",
              "ドコモ回線なら追加0.5%",
              "Amazon・メルカリでも使える",
              "dポイントクラブとの併用でステージ特典",
            ],
            href: "https://service.smt.docomo.ne.jp/keitai_payment/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">経済圏別の最適キャッシュレス</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>楽天経済圏</strong>：楽天Pay（楽天カード＋チャージ＋利用で1.5%）</li>
          <li><strong>ソフトバンク経済圏</strong>：PayPay＋Yahoo!ショッピング</li>
          <li><strong>au・UQ経済圏</strong>：au PAY＋au PAYカード</li>
          <li><strong>ドコモ経済圏</strong>：d払い＋dカードGOLD</li>
          <li><strong>中立（経済圏指定なし）</strong>：楽天Pay（還元率最高）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏の基本｜楽天カード"
        description="楽天Payとセットで使うなら楽天カード必須。年会費永年無料で、楽天市場SPU最大16倍、楽天証券でクレカ積立1%還元、楽天銀行マネーブリッジ連携も。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
    </>
  ),
  "point-investment-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ポイントで実質無料の資産形成</h2>
        <p>
          楽天ポイント・Tポイント・Pontaポイント・dポイント等を貯めて投資に回すことで、実質無料で資産形成が可能。月1,000ポイントの投資でも20年で40万円超（年利5%）に成長。ポイ活と新NISAを組み合わせた最強戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ポイント投資対応サービス比較"
        services={[
          {
            name: "楽天証券（楽天ポイント）",
            rank: 1,
            highlight: "1ポイント＝1円で投資信託・株式購入",
            features: [
              "楽天ポイントで投資信託・国内株式購入可能",
              "楽天カード積立でさらにポイント獲得",
              "楽天経済圏の集大成として最適",
              "100円/1ポイントから投資開始",
            ],
            href: "https://www.rakuten-sec.co.jp/",
            badge: "王道",
          },
          {
            name: "SBI証券（Tポイント・Vポイント・Pontaポイント）",
            rank: 2,
            highlight: "3種類のポイントで投資可能｜業界最多",
            features: [
              "Tポイント・Vポイント・Pontaポイントで投資信託購入",
              "三井住友カードNLでクレカ積立1%還元",
              "投資信託ラインナップNo.1",
              "新NISA対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "auカブコム証券（Pontaポイント）",
            rank: 3,
            highlight: "Pontaポイントで投資｜au経済圏",
            features: [
              "Pontaポイントで投資信託購入",
              "au PAYカード積立で1%還元",
              "auじぶん銀行との連携で金利優遇",
              "au/UQモバイルユーザーに最適",
            ],
            href: "https://kabu.com/",
          },
          {
            name: "マネックス証券（dポイント）",
            rank: 4,
            highlight: "dポイントで投資｜ドコモ経済圏",
            features: [
              "dポイントで投資信託購入",
              "マネックスカード積立で1.1%還元（業界最高）",
              "ドコモユーザーに最適",
              "米国株に強い",
            ],
            href: "https://info.monex.co.jp/nisa/index.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">月1,000ポイント投資の20年後</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>月1,000ポイント×12ヶ月＝年12,000円の投資</li>
          <li>20年積立×年利5%＝約41万円</li>
          <li>楽天ポイントならSPUで月2,000〜5,000ポイント可能</li>
          <li>月5,000ポイント投資なら20年後200万円超</li>
          <li>すべて実質無料（ポイント獲得原価ゼロ）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天ポイント×楽天証券｜最強の組合せ"
        description="楽天カードを日常決済に使えば、年50,000〜100,000ポイント獲得も可能。そのポイントを楽天証券で投資信託購入すれば、実質無料の資産形成に。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="🎁"
        highlight="年会費永年無料"
      />
    </>
  ),
  "esg-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ESG投資で社会貢献と運用益を両立</h2>
        <p>
          ESG（Environment/環境・Social/社会・Governance/ガバナンス）投資は、企業の環境配慮・社会貢献・透明な経営を評価して投資する手法。近年はESG指数連動ETF・グリーンボンド・SDGs関連投信等、選択肢が急拡大。長期的には非ESG企業を上回るリターン研究結果も。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ESG投資おすすめ商品"
        services={[
          {
            name: "MSCI ESG指数連動ETF（2832 等）",
            rank: 1,
            highlight: "東証ETF｜MSCIのESG格付上位企業に分散投資",
            features: [
              "東証上場ETFで流動性高い",
              "MSCI ESG格付け上位の企業に分散",
              "日本株・米国株・新興国株のバリエーション",
              "信託報酬0.1〜0.3%台",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "入門向け",
          },
          {
            name: "eMAXIS Slim 先進国株式＋ESG",
            rank: 2,
            highlight: "三菱UFJ国際投信｜低コストのESGインデックス",
            features: [
              "信託報酬0.2%台と低コスト",
              "先進国株式のESG上位に分散",
              "新NISAつみたて枠対応",
              "積立設定で長期運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "グリーンボンド（個人向け）",
            rank: 3,
            highlight: "環境プロジェクト向け債券｜低リスク",
            features: [
              "再生可能エネルギー等の環境事業に資金提供",
              "元本保証（発行体次第）＋定期利息",
              "年利0.5〜2%程度",
              "SDGs貢献と安定運用を両立",
            ],
            href: "https://www.mof.go.jp/jgbs/individual/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ESG投資のメリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>メリット①</strong>：長期的には非ESG企業を上回るリターン研究結果</li>
          <li><strong>メリット②</strong>：環境破壊・人権侵害企業を避けられる</li>
          <li><strong>メリット③</strong>：次世代への資産移転でESG配慮が重要に</li>
          <li><strong>デメリット①</strong>：短期では成績劣後する可能性</li>
          <li><strong>デメリット②</strong>：ESG評価の基準が不統一</li>
          <li><strong>デメリット③</strong>：信託報酬が通常インデックスよりやや高め</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新NISAでESG投資｜SBI証券"
        description="SBI証券なら、ESG関連ETF・投信が豊富。新NISAつみたて枠で月1,000円から始められ、長期運用で社会貢献しながら資産形成が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌱"
        highlight="業界No.1"
      />
    </>
  ),
  "defi-beginners-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">DeFi（分散型金融）の基礎</h2>
        <p>
          DeFi（Decentralized Finance）は、ブロックチェーン上で動く金融サービス。銀行・証券会社等の中央管理者なしで、貸付・借入・両替・デリバティブ等が可能。年利5〜50%と高利回りが魅力ですが、ハッキング・スマートコントラクトリスクも大きい上級者向けです。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 主要DeFiプロトコル"
        services={[
          {
            name: "Uniswap（ユニスワップ）",
            rank: 1,
            highlight: "分散型取引所No.1｜流動性提供で報酬",
            features: [
              "世界最大のDEX（分散型取引所）",
              "ETH・ERC20トークンの両替が可能",
              "流動性プールに預けて手数料報酬獲得",
              "ユーザー数・取引量ともに業界トップ",
            ],
            href: "https://uniswap.org/",
            badge: "DEX最大手",
          },
          {
            name: "Aave（アーベ）",
            rank: 2,
            highlight: "レンディング最大手｜年利3〜10%",
            features: [
              "暗号資産レンディング・借入プロトコル",
              "ステーブルコインで年利3〜10%",
              "複数ブロックチェーン対応",
              "フラッシュローンも可能",
            ],
            href: "https://aave.com/",
          },
          {
            name: "Compound（コンパウンド）",
            rank: 3,
            highlight: "老舗レンディング｜機関投資家も利用",
            features: [
              "2018年開始の老舗DeFiレンディング",
              "USDC・DAI・ETH等で貸付可能",
              "年利1〜8%程度",
              "COMPトークン付与",
            ],
            href: "https://compound.finance/",
          },
          {
            name: "Curve Finance",
            rank: 4,
            highlight: "ステーブルコイン両替に特化",
            features: [
              "ステーブルコイン間の両替が得意",
              "低スリッページで効率的",
              "流動性提供でCRVトークン報酬",
              "年利5〜30%（プールによる）",
            ],
            href: "https://curve.fi/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">DeFi投資の5つのリスク</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>スマートコントラクトリスク</strong>：バグで資産毀損の可能性</li>
          <li><strong>ハッキングリスク</strong>：プロトコルへの攻撃で盗難</li>
          <li><strong>価格変動リスク</strong>：仮想通貨自体の暴落</li>
          <li><strong>流動性リスク</strong>：引き出せなくなる可能性</li>
          <li><strong>税務リスク</strong>：雑所得で最大55%課税</li>
        </ol>
      </section>
      <AffiliateCTA
        title="まずは国内取引所から｜bitbank"
        description="DeFiに進む前に、まず国内の安全な取引所（bitbank・コインチェック）で仮想通貨を保有するのが基本。余裕資金で慎重にDeFiに展開しましょう。"
        buttonText="bitbankの詳細"
        href="https://bitbank.cc/"
        icon="⛓️"
        highlight="業界最高セキュリティ"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">DeFi投資は上級者向け</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>英語でDeFiプロトコルを理解できる</li>
          <li>MetaMaskウォレットの扱いに慣れている</li>
          <li>ガス代高騰期でも利益が出る資金規模</li>
          <li>余裕資金の5%以内で始める</li>
          <li>税務申告を自力でできる（または税理士契約）</li>
        </ul>
      </section>
    </>
  ),
};
