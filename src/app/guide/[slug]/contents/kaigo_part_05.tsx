import type { ReactNode } from "react";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DecisionBox } from "./helpers";

export const guideContentsPart05: Record<string, ReactNode> = {
  "disability-insurance-detail-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">就業不能保険完全比較</h2>
        <p>
          就業不能保険・所得補償保険は、病気・ケガで働けなくなった時に月給の代替として給付金を受け取れる保険です。月10〜30万円の給付額、免責期間60日〜180日、精神疾患対応の有無で各社大きく異なります。住宅ローン＋子育て世帯では重要な保険、年10〜30万円の保険料で将来の生活不安を解消できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="就業不能保険の主要3社比較"
        services={[
          {
            name: "ライフネット生命（働く人への保険3）",
            rank: 1,
            highlight: "精神疾患対応・シンプル",
            features: [
              "月10〜50万円の給付額",
              "精神疾患も給付対象",
              "免責期間60日",
              "月保険料3,000〜10,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "総合1位",
          },
          {
            name: "アクサダイレクト生命",
            rank: 2,
            highlight: "シンプルでわかりやすい",
            features: [
              "月10〜30万円の給付額",
              "精神疾患対応あり",
              "免責期間180日",
              "月保険料2,000〜8,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "SBI生命",
            rank: 3,
            highlight: "安さ重視",
            features: [
              "月10〜20万円の給付額",
              "精神疾患は5年後から",
              "免責期間60日",
              "月保険料1,500〜5,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">加入判断のポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>住宅ローン契約者：就業不能で返済困難→必要性高い</li>
          <li>子育て世帯：教育費継続確保のため必要</li>
          <li>自営業・フリーランス：傷病手当金なしのため特に重要</li>
          <li>共働き・貯蓄1000万円超：必要性低め、NISA＋貯金で十分</li>
          <li>会社員は傷病手当金（月給の2/3・最大1年6ヶ月）＋貯蓄でカバー可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="就業不能保険選びは保険マンモスで｜3社比較提案"
        description="保険マンモスはライフネット・アクサダイレクト・SBI生命の就業不能保険を比較提案。精神疾患対応・免責期間・保険料の違いを詳しく解説、住宅ローン世帯・自営業の方の最適プランを無料相談。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="♿"
        highlight="無料FP相談"
      />
    </>
  ),
  "whole-life-insurance-use-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">終身保険の活用法完全ガイド</h2>
        <p>
          終身保険は死亡時に必ず保険金が支払われる保険で、相続税対策・貯蓄性・解約返戻金の3つの目的で活用されます。非課税枠500万円×法定相続人数、ドル建て終身保険の高利回り（4〜5%）、低解約返戻金型の解約返戻金200%超等、賢く使えば強力な資産形成・承継ツールになります。
        </p>
      </section>
      <ComparisonTableCTA
        title="終身保険の3大活用法"
        services={[
          {
            name: "相続税対策",
            rank: 1,
            highlight: "非課税枠最大活用",
            features: [
              "500万円×法定相続人数が非課税",
              "妻+子2人なら1500万円非課税",
              "現金よりも相続税削減効果大",
              "高所得者・富裕層の必須戦略",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "王道",
          },
          {
            name: "ドル建て終身保険（貯蓄性）",
            rank: 2,
            highlight: "利回り4〜5%で運用",
            features: [
              "米ドルベースで予定利率高",
              "10年後に110〜120%の返戻金",
              "為替リスクあり",
              "メットライフ・プルデンシャル等",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "低解約返戻金型（長期貯蓄）",
            rank: 3,
            highlight: "払込満了後200%超",
            features: [
              "60歳払込満了で200%返戻",
              "子供の大学資金・老後資金",
              "途中解約は70%以下で不利",
              "保険料割安",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新NISA時代の終身保険の位置付け</h2>
        <p className="text-sm">
          新NISA（年8〜10%期待）とドル建て終身保険（年4〜5%）を比較すると、純粋な資産形成はNISAが有利。ただし終身保険は「死亡時に必ず保険金が出る」「相続税非課税枠の活用」「強制貯蓄（中途解約しにくい）」の3要素で補完的な役割を果たします。年収1000万円超・相続税対策が必要な世帯では併用が合理的です。
        </p>
      </section>
      <AffiliateCTA
        title="終身保険の活用法は保険マンモスで｜相続税対策にも"
        description="保険マンモスは全国のFPが終身保険・相続税対策・ドル建て商品を詳しく解説。非課税枠フル活用・低解約返戻金型・ドル建ての違い、新NISAとの最適組合せを無料で相談可能。富裕層の資産承継対策に。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="💰"
        highlight="無料FP相談"
      />
    </>
  ),
  "insurance-receipt-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険金受取の税金完全ガイド</h2>
        <p>
          保険金受取時の税金は、契約者・被保険者・受取人の関係によって3パターン（所得税・相続税・贈与税）に分かれます。最も有利なのは相続税（非課税枠500万円×法定相続人）、最も不利なのは贈与税（超過累進税率最大55%）。契約設計次第で税額が10倍以上変わるため、保険契約時の名義選択が極めて重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="保険金の3つの課税パターン"
        services={[
          {
            name: "相続税（推奨）",
            rank: 1,
            highlight: "非課税枠あり・最有利",
            features: [
              "契約者=被保険者、受取人=配偶者or子",
              "500万円×法定相続人分が非課税",
              "妻+子2人なら1500万円非課税",
              "基礎控除3000万円+600万円×相続人",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "最有利",
          },
          {
            name: "所得税（一時所得）",
            rank: 2,
            highlight: "50万円控除・1/2課税",
            features: [
              "契約者=受取人、被保険者=別",
              "（保険金-支払保険料-50万円）×1/2が課税",
              "満期保険金・解約返戻金が対象",
              "累進税率5〜45%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "贈与税（最不利）",
            rank: 3,
            highlight: "避けるべき契約形態",
            features: [
              "契約者・被保険者・受取人が全員別",
              "基礎控除110万円のみ",
              "累進税率10〜55%で最も重い",
              "契約時に避けるべき組合せ",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">節税最適化の契約例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>相続税対策：契約者＋被保険者=夫、受取人=妻・子（相続税・非課税枠適用）</li>
          <li>学資保険：契約者=親、被保険者=子、受取人=親（所得税・一時所得＋50万円控除）</li>
          <li>NG例：契約者=夫、被保険者=妻、受取人=子（贈与税で最大55%課税）</li>
          <li>満期保険金受取時は所得税が基本、累進税率で節税戦略も可能</li>
          <li>契約見直し（名義変更）で相続税 → 所得税への変更も可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険契約の税金最適化は保険マンモスで｜プロFPが無料相談"
        description="保険マンモスは保険金の税金（相続税・所得税・贈与税）の違いと、最適な契約形態を無料で詳しく解説。現在の契約見直し・新規契約時の名義選択アドバイスで、将来の税額を10倍以上の差で最適化。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📜"
        highlight="無料FP相談"
      />
    </>
  ),
  "insurance-vs-investment-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険vs投資｜掛け捨て＋新NISAが最強な理由</h2>
        <p>
          貯蓄型保険（年1〜3%）と新NISA（年7〜10%期待）を30年間シミュレーションすると、新NISAが圧倒的に有利。保険は必要最小限の掛け捨て（死亡・医療）で、浮いた保険料を新NISAに回す「掛け捨て＋NISA」戦略が、最新の資産形成の定石。30年で1000万円以上の差が出ます。
        </p>
      </section>
      <ComparisonTableCTA
        title="30年運用の比較（月3万円）"
        services={[
          {
            name: "新NISA（年7%想定）",
            rank: 1,
            highlight: "30年で3,657万円",
            features: [
              "全世界株式インデックスで運用",
              "30年で3,657万円（元本1,080万円）",
              "売買益・配当非課税",
              "柔軟な引出し可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最有利",
          },
          {
            name: "変額個人年金（年5%想定）",
            rank: 2,
            highlight: "30年で2,498万円",
            features: [
              "投資信託で運用",
              "30年で2,498万円",
              "個人年金保険料控除4万円",
              "手数料で実質-1%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "定額終身保険（年1%想定）",
            rank: 3,
            highlight: "30年で1,258万円",
            features: [
              "元本保証型",
              "30年で1,258万円",
              "一般生命保険料控除4万円",
              "リターン極めて低い",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">最適戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>掛け捨て死亡保険：月2,000〜3,000円（ライフネット生命・月3000円で3000万円保障）</li>
          <li>掛け捨て医療保険：月2,000〜3,000円（必要最小限、または貯蓄でカバー）</li>
          <li>新NISA：月3〜5万円で全世界株インデックス積立</li>
          <li>iDeCo：月1〜2万円で所得控除＋非課税運用</li>
          <li>個人年金保険：月5,000円程度（年4万円控除枠活用のみ）</li>
          <li>30年後には資産5,000万円＋遺族保障3,000万円の鉄壁構成</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険の見直しは保険マンモスで｜掛け捨て＋NISA戦略"
        description="保険マンモスは貯蓄型保険から掛け捨て＋新NISA戦略への転換を無料でコンサル。現在の保険料・保障内容を分析、月2〜5万円の余剰を新NISAに回す最適設計で30年後の資産3,000〜5,000万円増を実現。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="⚖️"
        highlight="無料FP相談"
      />
    </>
  ),
  "rakuten-economy-master-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏完全攻略ガイド</h2>
        <p>
          楽天経済圏は、楽天カード・楽天モバイル・楽天証券・楽天銀行・楽天ひかりの5大サービス連携でSPU（スーパーポイントアッププログラム）最大16倍を実現可能。平均的な4人家族なら年間10〜20万ポイント獲得、楽天市場での買い物で30%以上の還元も。改悪対応と他経済圏との比較で、最適活用法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="楽天SPU上乗せ倍率の主要要素"
        services={[
          {
            name: "楽天カード（基本）",
            rank: 1,
            highlight: "SPU +2倍・月上限5000pt",
            features: [
              "楽天カード通常：+1倍",
              "楽天プレミアムカード：+2倍",
              "年会費無料で始めやすい",
              "楽天市場での定番",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F",
            badge: "必須",
          },
          {
            name: "楽天モバイル",
            rank: 2,
            highlight: "SPU +4倍・月上限5000pt",
            features: [
              "3GB以下2,980円/月",
              "Rakuten最強プラン",
              "家族割引あり",
              "楽天ペイ還元1%も",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F",
          },
          {
            name: "楽天証券×楽天カード積立",
            rank: 3,
            highlight: "SPU +1倍＋月1%還元",
            features: [
              "投信積立月5万円まで",
              "楽天カード積立で1%還元",
              "楽天キャッシュ積立併用可",
              "新NISA対応",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-sec.co.jp%2F",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年間20万ポイント獲得の実例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>楽天市場（月10万円利用）：月5000pt×12＝60,000pt</li>
          <li>楽天カード（月30万円利用）：月3000pt×12＝36,000pt</li>
          <li>楽天モバイル・ひかりSPU：月5000pt×12＝60,000pt</li>
          <li>お買い物マラソン（月1〜2回参加）：月5000〜15000pt×12＝120,000pt</li>
          <li>楽天ふるさと納税（年20万円寄付）：30,000pt</li>
          <li>年間合計：200,000〜250,000pt（実質年収+20〜25万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏スタートは楽天カードから｜新規入会8000pt"
        description="楽天カードは楽天経済圏の土台。年会費永年無料、新規入会＋利用で8000pt獲得（過去最大2万pt時期も）。楽天市場SPU+1倍、楽天ペイ・楽天Edy・楽天銀行と連携で還元率は3〜5%にUP。"
        buttonText="楽天カードの詳細"
        href="https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F"
        icon="🎯"
        highlight="新規8000pt"
      />
    </>
  ),
  "paypay-docomo-ecosystem-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">docomo経済圏完全ガイド</h2>
        <p>
          docomo経済圏は、dポイント・d払い・ドコモ光・ahamo・dカードGOLD等の連携で、年間10〜20万ポイント獲得が可能。楽天経済圏より地味ですが、3キャリアで最もユーザー数多く、dカードGOLDの金色サービス（ケータイ補償・海外旅行保険）等、付加価値で差別化されている経済圏です。
        </p>
      </section>
      <ComparisonTableCTA
        title="docomo経済圏の主要サービス"
        services={[
          {
            name: "dカードGOLD",
            rank: 1,
            highlight: "ドコモ利用10%還元",
            features: [
              "ドコモ料金・ドコモ光10%還元",
              "年会費11,000円（ケータイ補償10万円付帯）",
              "海外旅行保険最大1億円",
              "ドコモユーザー必須",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "dポイント・d払い",
            rank: 2,
            highlight: "ポイント最大10%還元",
            features: [
              "d払い：0.5〜1%還元",
              "dポイントカード：特定店最大7%",
              "dポイント投資（SBI・マネックス）",
              "全国130万店舗で利用可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "dポイントクラブ（LINEMO・ahamo）",
            rank: 3,
            highlight: "格安プランでdポイント",
            features: [
              "ahamo：月20GB 2970円",
              "LINEMO：月3GB 990円〜",
              "dポイントが貯まる・使える",
              "eSIM対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏との比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>還元率：楽天（最大16倍）＞docomo（最大10%）でポイント絶対額は楽天優位</li>
          <li>ユーザー数：docomo 9000万人＞楽天 5000万人で安定性はdocomo優位</li>
          <li>付帯保険：dカードGOLD（ケータイ補償10万円）が楽天プレミアム超え</li>
          <li>キャリアメール：docomo＠docomo.ne.jp継続、楽天なし</li>
          <li>選び方：楽天市場よく使うなら楽天、docomoモバイル契約あるならdocomo優位</li>
        </ul>
      </section>
      <AffiliateCTA
        title="docomo経済圏はdカードGOLDから｜年会費11,000円で元取れる"
        description="dカードGOLDはドコモ料金・ドコモ光の10%還元、ケータイ補償10万円付帯、海外旅行保険最大1億円。ドコモユーザーなら年会費11,000円は月1万円のモバイル利用で完全に元取れる、家族カードも1枚無料。"
        buttonText="dカードGOLDの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📱"
        highlight="ドコモ10%還元"
      />
    </>
  ),
  "paypay-softbank-economy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">PayPay経済圏完全攻略</h2>
        <p>
          PayPay経済圏は、PayPayカード・ソフトバンクモバイル・PayPay証券・Yahoo! Japan・LYPプレミアム等の連携で、PayPay残高やPayPayポイントを中心とした決済＆買い物の総合エコシステム。6000万人超のPayPayユーザーで国内最大級のキャッシュレス経済圏、Yahoo!ショッピング・LOHACOでの還元率10%超も可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="PayPay経済圏の主要サービス"
        services={[
          {
            name: "PayPayカード（基本）",
            rank: 1,
            highlight: "PayPayに即チャージ",
            features: [
              "還元率1%（PayPay残高）",
              "年会費永年無料",
              "Yahoo!ショッピング3%還元",
              "ソフトバンク・ワイモバイル割引",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "LYPプレミアム",
            rank: 2,
            highlight: "月508円の有料会員",
            features: [
              "Yahoo!ショッピング5%還元",
              "PayPayジャンボ当選率UP",
              "LINEギガフリー",
              "ソフトバンクユーザー無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "PayPay証券・PayPay銀行",
            rank: 3,
            highlight: "1000円からの投資",
            features: [
              "PayPay証券：米国株1000円から",
              "PayPay銀行：ATM手数料優遇",
              "金融連携で利便性UP",
              "新NISA対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">還元率最大化の戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>PayPayカード＋ソフトバンクスマホで+5%還元</li>
          <li>Yahoo!ショッピング：LYPプレミアム会員なら+5%、毎月5のつく日＋5%で計15%還元</li>
          <li>LOHACO（Yahoo!系）：PayPayジャンボで最大100%還元のチャンス</li>
          <li>PayPay残高払い＋ポイント2重取りで決済還元2〜3%</li>
          <li>月利用10万円で年20〜30万円のPayPayポイント獲得可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="PayPay経済圏はPayPayカードから｜年会費無料で還元1%"
        description="PayPayカードは年会費永年無料、PayPay残高チャージで1%還元、Yahoo!ショッピング3%還元。ソフトバンク・ワイモバイル・LINEMOユーザーは特別優待あり、PayPay決済とのシナジーでキャッシュレス還元を最大化できる。"
        buttonText="PayPayカードの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💳"
        highlight="年会費無料"
      />
    </>
  ),
  "au-pontas-ecosystem-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">au経済圏（Ponta）完全ガイド</h2>
        <p>
          au経済圏は、au PAYカード・UQモバイル・auじぶん銀行・Pontaポイント等の連携で、3キャリアの中では最も提携ポイント（Pontaポイント）の汎用性が高い特徴があります。ローソン・じゃらん・高島屋・ホットペッパーグルメ等でPontaが使える強みで、買い物・旅行派には大きな魅力です。
        </p>
      </section>
      <ComparisonTableCTA
        title="au経済圏の主要サービス"
        services={[
          {
            name: "au PAYカード",
            rank: 1,
            highlight: "Pontaポイント還元1%",
            features: [
              "年会費無料（ゴールドは1,375円）",
              "au PAYチャージで1.5%還元",
              "au料金・auでんき還元",
              "au PAY連携で還元率UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "UQモバイル",
            rank: 2,
            highlight: "格安プラン+Ponta",
            features: [
              "くりこしプラン+5G：月1628円〜",
              "Pontaポイントが貯まる",
              "auじぶん銀行と自動連携",
              "au PAY還元率UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "auじぶん銀行",
            rank: 3,
            highlight: "au系金融連携",
            features: [
              "普通預金金利0.21%（au PAY連携）",
              "ATM手数料優遇",
              "外貨預金・投資信託対応",
              "au PAYチャージで還元",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">Pontaポイントの使い勝手</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ローソン：毎週火・金曜にお試し引換券（Ponta 15〜30P → 定価150〜300円商品）</li>
          <li>じゃらん：旅行予約で2〜5%還元・宿泊代に使える</li>
          <li>高島屋・ホットペッパーグルメ：決済でPonta使用・還元</li>
          <li>au PAYマーケット：楽天・Amazonより安いことも、キャンペーン多数</li>
          <li>Ponta投資（auじぶん）：1P＝1円で投資信託購入可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="au経済圏はau PAYカードから｜年会費無料・Ponta1%還元"
        description="au PAYカードは年会費無料でPontaポイント1%還元。au PAYチャージで1.5%還元にUP、auユーザーはさらに割引。ローソン・じゃらん・高島屋等でPontaが使える汎用性の高さが魅力、買い物・旅行好きに最適。"
        buttonText="au PAYカードの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📲"
        highlight="Ponta1%還元"
      />
    </>
  ),
  "aeon-waon-economy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">イオン経済圏完全ガイド</h2>
        <p>
          イオン経済圏は、WAON・イオンカードセレクト・イオン銀行・WAON POINT・ウエルシア等の連携で、主婦・ファミリー層に圧倒的人気。毎月20日・30日のお客さま感謝デー5%OFF、毎月20日ウエルシアデー（WAON POINT 1.5倍）等、日常的な節約効果が大きく、年間10〜30万円の節約が可能な経済圏です。
        </p>
      </section>
      <ComparisonTableCTA
        title="イオン経済圏の主要サービス"
        services={[
          {
            name: "イオンカードセレクト",
            rank: 1,
            highlight: "WAONオートチャージで二重取り",
            features: [
              "年会費永年無料",
              "WAONオートチャージで0.5%還元",
              "WAON決済で0.5%還元（計1%）",
              "イオンで5%OFF（毎月20日・30日）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "ウエルシア（WAONポイント1.5倍）",
            rank: 2,
            highlight: "毎月20日・月曜日1.5倍",
            features: [
              "毎月20日（ウエルシアデー）WAON 1.5倍",
              "月曜日もWAON 1.5倍",
              "薬・食品・日用品全品対象",
              "医療費控除対象商品多数",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "イオン銀行",
            rank: 3,
            highlight: "ATM手数料無料",
            features: [
              "イオン銀行ATM・コンビニATM無料",
              "イオンカードと自動連携",
              "普通預金金利優遇",
              "住宅ローンの繰上返済手数料無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">主婦層に人気の理由</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>毎月20日・30日のお客さま感謝デー5%OFF（食品・日用品も対象）</li>
          <li>G.G感謝デー（55歳以上対象、毎月15日5%OFF）</li>
          <li>ウエルシアで医薬品・オムツを節約（WAON 1.5倍で実質7.5%還元）</li>
          <li>映画館（イオンシネマ）1000円鑑賞（株主優待・クーポン併用）</li>
          <li>イオンペット・旅行・保険・住宅ローン等、生活全般をカバー</li>
        </ul>
      </section>
      <AffiliateCTA
        title="イオン経済圏はイオンカードセレクトから｜年会費無料"
        description="イオンカードセレクトは年会費永年無料、イオングループで5%OFF（毎月20日・30日）、WAONオートチャージで1%還元。主婦・ファミリー層の日常支出を年間10〜30万円削減、イオン銀行ATM無料で日常の財布にも。"
        buttonText="イオンカードセレクトの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🛒"
        highlight="年会費無料"
      />
    </>
  ),
  "credit-card-combination-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ3枚持ち戦略｜還元率最大化</h2>
        <p>
          クレカ3枚持ち戦略は、メインカード（万能1%還元）＋サブカード（ジャンル特化3〜5%還元）＋投資用（クレカ積立ポイント）の組合せで、年間還元額を最大化する王道戦略。実質還元率2〜3%を実現し、年間利用300万円なら年間還元6〜9万円のキャッシュバック効果が得られます。
        </p>
      </section>
      <ComparisonTableCTA
        title="最強3枚組合せの例"
        services={[
          {
            name: "メイン：三井住友カードNL",
            rank: 1,
            highlight: "対象店舗で最大7%還元",
            features: [
              "年会費永年無料",
              "対象コンビニ・飲食店で最大7%",
              "Visaタッチ決済で高還元",
              "SBI証券クレカ積立で0.5〜3%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "メイン",
          },
          {
            name: "サブ：楽天カード",
            rank: 2,
            highlight: "楽天経済圏で高還元",
            features: [
              "年会費永年無料",
              "楽天市場SPU+1倍",
              "楽天ペイ・楽天Edy連携",
              "楽天証券クレカ積立で1%",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F",
          },
          {
            name: "特化：リクルートカード or エポス",
            rank: 3,
            highlight: "公共料金1.2% or マルイ10%",
            features: [
              "リクルートカード：公共料金も1.2%",
              "エポスカード：マルイ10%OFF・海外保険",
              "サブで年会費無料維持",
              "用途別に使い分け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">3枚使い分けの実例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>三井住友NL：コンビニ・マクドナルド・スタバで7%還元</li>
          <li>楽天カード：楽天市場・楽天ペイ・楽天トラベルで3〜5%</li>
          <li>リクルート：公共料金（電気・ガス・水道・携帯）で1.2%</li>
          <li>投資用：SBI証券×三井住友プラチナプリファードで3%還元</li>
          <li>年300万円利用で年間還元6〜9万円（実質年収+6〜9万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="最強3枚組合せは三井住友カードNLから｜コンビニ7%還元"
        description="三井住友カードNLは年会費永年無料、対象コンビニ・飲食店で最大7%還元（Visaタッチ決済）。SBI証券のクレカ積立で0.5〜3%の還元も、新NISA運用と合わせて資産形成の基盤に。3枚持ち戦略のメインカードに最適。"
        buttonText="三井住友カードNLの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🎴"
        highlight="最大7%還元"
      />
    </>
  ),
  "point-site-maximize-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ポイントサイト攻略法完全ガイド</h2>
        <p>
          ポイントサイト（ハピタス・モッピー・ECナビ）は、クレカ発行・口座開設・証券口座・各種申込みを経由することで、通常の申込みでは得られない高額ポイントを獲得できる裏技的サービス。年10〜30万円相当のポイント獲得が可能で、楽天・Yahoo・Amazon経由利用でも1〜5%の還元上乗せができます。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要ポイントサイト比較"
        services={[
          {
            name: "ハピタス",
            rank: 1,
            highlight: "案件数No.1・交換手数料無料",
            features: [
              "高額案件の主要獲得先",
              "3000以上の対応ショップ",
              "現金・電子マネー交換無料",
              "JRE POINT・dポイント等に交換可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "モッピー",
            rank: 2,
            highlight: "高単価案件で月1万以上稼げる",
            features: [
              "高単価広告案件が豊富",
              "友達紹介で追加ポイント",
              "ミニゲーム・アンケートで毎日稼げる",
              "交換先多数（現金・電子マネー・マイル）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "ECナビ",
            rank: 3,
            highlight: "Yahoo!グループで安心",
            features: [
              "Yahoo!系列運営",
              "高額案件多数",
              "Tポイント・PayPayポイントと連携",
              "20歳以上なら誰でも登録可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年間10〜30万円獲得の実例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>楽天カード発行：ハピタス経由で8000〜15000pt</li>
          <li>SBI証券口座開設：10000pt</li>
          <li>FX口座開設：20000〜40000pt（GMO・DMM・外為どっとコム）</li>
          <li>U-NEXT申込：2000pt</li>
          <li>保険相談：3000〜10000pt（保険マンモス・マネプロ等）</li>
          <li>楽天・Yahoo・Amazon経由利用：年5万円利用で1000〜3000pt</li>
          <li>年間合計：10〜30万円のポイント（実質年収+10〜30万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ポイ活の始まりはハピタスから｜新規登録で400pt"
        description="ハピタスは業界No.1のポイントサイト、クレカ・証券・FX申込で年10〜30万円獲得可能。現金・電子マネー交換も手数料無料、始めやすさ・安全性・高還元率の3拍子揃った最強のポイ活プラットフォーム。"
        buttonText="ハピタスで無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🎁"
        highlight="新規400pt"
      />
    </>
  ),
  "furusato-satofuru-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">さとふる徹底レビュー｜ふるさと納税No.1の理由</h2>
        <p>
          「さとふる」は国内最大級のふるさと納税ポータルサイト。累計寄付金額5000億円超、掲載自治体1400以上、返礼品42万点と圧倒的なラインナップを誇ります。楽天ふるさと納税と並ぶ2大巨頭で、PayPay還元・AmazonPay対応・ワンストップ特例のオンライン完結等、初心者でも手軽に利用できるのが魅力です。
        </p>
      </section>
      <ComparisonTableCTA
        title="さとふる vs 楽天ふるさと納税"
        services={[
          {
            name: "さとふる",
            rank: 1,
            highlight: "ワンストップ特例オンライン完結",
            features: [
              "掲載自治体数1400超",
              "返礼品42万点",
              "PayPayポイント還元",
              "ワンストップ特例アプリで完結",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "初心者向け",
          },
          {
            name: "楽天ふるさと納税",
            rank: 2,
            highlight: "SPU最大16倍・ポイント最強",
            features: [
              "楽天ポイント還元最大16%",
              "お買い物マラソン併用可",
              "楽天会員なら即開始",
              "返礼品30万点超",
            ],
            href: "https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/",
            badge: "還元最強",
          },
          {
            name: "ふるなび",
            rank: 3,
            highlight: "Amazonギフト券還元",
            features: [
              "Amazonギフト券で還元",
              "家電・電化製品が豊富",
              "高額寄付者向けキャンペーン",
              "ふるなびプレミアム",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">さとふるの特徴・メリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ワンストップ特例申請を「さとふるアプリ」でオンライン完結（郵送不要）</li>
          <li>PayPay残高還元＋PayPayポイント還元のダブル恩恵</li>
          <li>AmazonPay・d払い対応で決済柔軟性高い</li>
          <li>お肉・海鮮・フルーツ等の定番返礼品が豊富</li>
          <li>掲載自治体1400超で地域分散寄付に便利</li>
          <li>年末駆け込み（12月31日23:59）まで受付対応</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ふるさと納税はさとふるで｜ワンストップ特例オンライン完結"
        description="さとふるは累計寄付金額5000億円超の実績あるふるさと納税サイト。1400自治体・42万点の返礼品、PayPay還元、ワンストップ特例オンライン完結で初心者でも簡単。年12万円寄付で返礼品4万円相当獲得可能。"
        buttonText="さとふるで返礼品を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🎁"
        highlight="返礼品42万点"
      />
    </>
  ),
  "fx-jfx-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">JFX MATRIX TRADER徹底レビュー</h2>
        <p>
          JFX株式会社のMATRIX TRADERは、スキャルピング公式認定の数少ないFX会社として、FX上級者から圧倒的な支持を得ています。USD/JPYスプレッド業界最狭水準0.2銭、約定力・執行速度の高さ、高額キャッシュバックキャンペーンで、初心者から上級者まで幅広く活用できる高機能FXプラットフォームです。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要FX会社のスプレッド比較"
        services={[
          {
            name: "JFX MATRIX TRADER",
            rank: 1,
            highlight: "スキャルピング歓迎・約定力No.1級",
            features: [
              "USD/JPYスプレッド0.2銭原則固定",
              "スキャルピング公式認定",
              "約定スピード0.001秒級",
              "キャッシュバック最大20万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "上級者向け",
          },
          {
            name: "GMOクリック証券",
            rank: 2,
            highlight: "口座開設数国内No.1",
            features: [
              "USD/JPYスプレッド0.2銭",
              "高機能取引ツール",
              "キャッシュバック最大55万円",
              "初心者向け情報豊富",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "DMM FX",
            rank: 3,
            highlight: "キャッシュバック業界高水準",
            features: [
              "USD/JPYスプレッド0.2銭",
              "キャッシュバック最大30万円",
              "LINE問合せ24時間対応",
              "初心者サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">JFX MATRIX TRADERの強み</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>スキャルピング公式OKで、業界でも数少ない短期売買歓迎のFX</li>
          <li>USD/JPYスプレッド0.2銭原則固定、他通貨ペアも業界最狭水準</li>
          <li>約定スピード0.001秒、スリッページ発生率も極めて低い</li>
          <li>代表の小林芳彦氏（元為替ディーラー）による毎日の相場解説</li>
          <li>キャッシュバック最大20万円＋新規口座開設キャンペーン</li>
          <li>MT4型の高機能チャート、50種類以上のテクニカル指標</li>
        </ul>
      </section>
      <AffiliateCTA
        title="スキャルピング歓迎FXはJFXで｜新規口座開設＋キャッシュバック"
        description="JFX MATRIX TRADERはスキャルピング公式認定、スプレッド業界最狭水準（USD/JPY 0.2銭）、約定力抜群。新規口座開設＋取引でキャッシュバック最大20万円、FX上級者・スキャル派の方の最適解。"
        buttonText="JFXで口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💹"
        highlight="スキャル公式OK"
      />
    </>
  ),
  "factoring-mirai-asset-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">MIRAIアセットファイナンス徹底レビュー</h2>
        <p>
          MIRAIアセットファイナンス（MIRAI Assets Finance）は、最短即日資金化対応のファクタリング会社。個人事業主・中小企業の資金繰り改善に特化、手数料2〜20%の業界平均水準、2社間・3社間どちらも対応可能で、ノンバンク系ファクタリングの選択肢として注目されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="ファクタリング会社比較"
        services={[
          {
            name: "MIRAIアセットファイナンス",
            rank: 1,
            highlight: "最短即日・個人事業主OK",
            features: [
              "最短即日資金化",
              "手数料2〜20%",
              "2社間/3社間選択可",
              "個人事業主・中小企業対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "スピード重視",
          },
          {
            name: "西日本ファクター",
            rank: 2,
            highlight: "西日本エリア特化",
            features: [
              "手数料3〜15%",
              "最短即日入金",
              "審査通過率90%超",
              "対面相談も可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+7R8C9M+3XT0+5YJRM",
          },
          {
            name: "えんナビ",
            rank: 3,
            highlight: "初心者向けオンライン完結",
            features: [
              "オンライン完結",
              "手数料5〜20%",
              "24時間申込受付",
              "個人事業主特化",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ファクタリング利用時の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>手数料は2〜20%と幅広く、複数社の相見積り必須</li>
          <li>2社間は高速だが手数料高め、3社間は取引先承認必要だが手数料安い</li>
          <li>ヤミ金・悪徳業者に注意、金融庁登録事業者を選ぶ</li>
          <li>売掛金買取で借入ではないため、信用情報に影響しない</li>
          <li>長期利用は経営悪化シグナル、一時的な資金繰り対策として活用</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ファクタリングはMIRAIアセットファイナンスで｜最短即日資金化"
        description="MIRAIアセットファイナンスは最短即日資金化対応のファクタリング会社。個人事業主・中小企業の資金繰り改善に特化、手数料2〜20%、2社間・3社間選択可、オンライン完結で全国対応可能。"
        buttonText="MIRAIアセットで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💰"
        highlight="最短即日"
      />
    </>
  ),
  "invoice-system-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">インボイス制度完全ガイド</h2>
        <p>
          2023年10月開始のインボイス制度（適格請求書等保存方式）は、全ての事業者に影響する消費税の新ルール。免税事業者の7割が課税事業者に転換、個人事業主・フリーランスは「適格請求書発行事業者登録」の要否で事業の継続性が変わります。2割特例・少額特例等の経過措置を活用した最適な対応方法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="インボイス対応の3パターン"
        services={[
          {
            name: "適格請求書発行事業者に登録",
            rank: 1,
            highlight: "取引継続・納税発生",
            features: [
              "課税事業者に変更",
              "消費税納税必要",
              "2割特例で負担軽減（6年間）",
              "取引先の仕入税額控除OK",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "推奨",
          },
          {
            name: "免税事業者継続（登録せず）",
            rank: 2,
            highlight: "納税ゼロ・取引減リスク",
            features: [
              "消費税納税不要",
              "取引先が仕入税額控除不可",
              "値下げ要請リスクあり",
              "B2C事業者向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "2割特例の活用",
            rank: 3,
            highlight: "2023-2029年の経過措置",
            features: [
              "消費税納税額を売上税額×20%に",
              "6年間限定",
              "簡易課税より有利な場合多",
              "売上200万円なら納税4万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">会計ソフトによる対応</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>freee会計：インボイス自動判定・適格請求書発行ワンクリック</li>
          <li>マネーフォワードクラウド：AI仕訳でインボイス対応自動化</li>
          <li>弥生会計オンライン：老舗の安心感、インボイス書式完備</li>
          <li>月1,000〜3,000円の投資で、月10〜20時間の経理時間を削減可能</li>
          <li>税理士ドットコムでインボイス対応税理士を無料マッチング</li>
        </ul>
      </section>
      <AffiliateCTA
        title="インボイス対応は税理士ドットコムで｜無料マッチング"
        description="税理士ドットコムはインボイス制度対応に強い税理士を全国から無料マッチング。適格請求書発行事業者登録、2割特例、電子帳簿保存法との併用対応、フリーランス・個人事業主の最適プランを提案。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📋"
        highlight="無料マッチング"
      />
    </>
  ),
  "denshi-chobo-preservation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">電子帳簿保存法完全ガイド</h2>
        <p>
          電子帳簿保存法（電帳法）は2024年1月から本格施行。電子取引データ（メール受信の請求書・ECサイトのPDF等）の電子保存が義務化され、紙プリントアウト保存は認められなくなりました。freee・マネフォ等の対応システム導入、タイムスタンプ運用、罰則回避のための実務対応を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="電帳法対応の3分類"
        services={[
          {
            name: "電子取引データ保存（義務）",
            rank: 1,
            highlight: "2024年1月から必須",
            features: [
              "メール・EC・クラウドの電子取引",
              "改ざん防止要件満たす保存",
              "検索機能（日付・金額・取引先）",
              "7年間保存必須",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須対応",
          },
          {
            name: "スキャナ保存（任意）",
            rank: 2,
            highlight: "紙領収書をPDF化",
            features: [
              "紙の請求書・領収書をスキャン",
              "タイムスタンプ必要",
              "解像度200dpi以上",
              "事務負担軽減可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "電子帳簿保存（任意）",
            rank: 3,
            highlight: "会計帳簿の電子保存",
            features: [
              "一般・優良電子帳簿から選択",
              "優良電子帳簿は青色申告65万円控除",
              "システム要件厳しい",
              "上級者向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">罰則・注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>違反時：青色申告取消（65万円控除消失）＋重加算税10%加重</li>
          <li>電子取引データを紙で保存は違反、必ず電子保存</li>
          <li>タイムスタンプ必要（改ざん防止要件）</li>
          <li>猶予措置：2023年12月末までは紙保存でも可だったが、2024年から不可</li>
          <li>小規模事業者の猶予措置：2024年以降も一定要件で紙保存可（相当の理由）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="電帳法対応は税理士ドットコムで｜専門家無料相談"
        description="税理士ドットコムは電帳法対応に強い税理士を無料マッチング。電子取引データ保存、スキャナ保存、タイムスタンプ運用、freee・マネフォ導入支援まで、実務に即したアドバイスが受けられる。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💾"
        highlight="電帳法対応"
      />
    </>
  ),
  "cashless-business-payment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">店舗向けキャッシュレス決済完全ガイド</h2>
        <p>
          2026年のキャッシュレス決済比率は41%に達し、店舗にとってキャッシュレス対応は必須。Square・STORES決済・Airペイ・楽天ペイ・PayPay for Business等、各社の手数料（1.5〜3.25%）・入金サイクル・端末費用を比較し、業種別（飲食・小売・美容院・個人教室）の最適な選び方を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="店舗向けキャッシュレス決済サービス比較"
        services={[
          {
            name: "Square",
            rank: 1,
            highlight: "手数料業界最安・翌営業日入金",
            features: [
              "手数料3.25%（Visa/Master）",
              "端末4,980円〜",
              "翌営業日入金（三井住友銀行）",
              "ECとPOS統合",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "初心者向け",
          },
          {
            name: "STORES決済",
            rank: 2,
            highlight: "美容・サロン業界で人気",
            features: [
              "手数料3.24%",
              "端末0円キャンペーン",
              "STORES EC連携",
              "QR決済も対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "Airペイ",
            rank: 3,
            highlight: "リクルート運営・幅広い決済",
            features: [
              "手数料3.24〜3.74%",
              "交通系IC・電子マネー対応",
              "HOT PEPPER連携",
              "端末0円申込可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">業種別おすすめ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>飲食店：Square（タブレットPOS統合）or Airペイ（HPG連携）</li>
          <li>美容室・サロン：STORES決済（予約管理と統合）</li>
          <li>個人教室・教室：Square（レシート印刷不要モード）</li>
          <li>イベント・催事：STORES決済（モバイル特化）</li>
          <li>小売店：PayPay for Business＋Square（QR＋カード両対応）</li>
          <li>オンライン店舗：Stripe・PayPal・Stripe（低手数料）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="店舗のキャッシュレス化はSquareから｜端末4,980円・手数料業界最安"
        description="Squareは手数料3.25%の業界最安水準、端末4,980円〜でスタート可能。翌営業日入金（三井住友銀行）、POS・在庫管理・EC統合で店舗DXを加速。飲食・小売・美容業界で導入実績多数。"
        buttonText="Squareの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏪"
        highlight="手数料3.25%"
      />
    </>
  ),
  "inbound-travel-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">インバウンド投資完全ガイド</h2>
        <p>
          訪日外国人旅行者数は2024年に3687万人を記録、2030年までに6000万人を目指す日本政府目標。円安・観光促進政策で観光・宿泊・小売産業に追い風が続きます。航空・ホテル・百貨店・ドラッグストア・JR各社等の関連銘柄、HDV・IWM等のETFで、インバウンド需要の恩恵を投資で取込む戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="インバウンド関連の主要銘柄"
        services={[
          {
            name: "鉄道・航空",
            rank: 1,
            highlight: "JR東日本・ANA・JAL",
            features: [
              "JR東日本（9020）新幹線需要",
              "ANA（9202）・JAL（9201）国際線",
              "成田空港・関空関連株",
              "円安恩恵で売上UP",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "ホテル・観光",
            rank: 2,
            highlight: "星野リゾート・帝国ホテル",
            features: [
              "星野リゾート・リート投資法人",
              "藤田観光（9722）",
              "帝国ホテル（9708）",
              "ホテル稼働率高水準維持",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "小売・ドラッグストア",
            rank: 3,
            highlight: "三越伊勢丹・マツキヨ",
            features: [
              "三越伊勢丹HD（3099）",
              "マツキヨココカラ（3088）",
              "ドン・キホーテ（3048）",
              "免税売上増加",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">インバウンド投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>為替依存（円安で売上増、円高で売上減）の高ボラ</li>
          <li>地政学リスク（中国・韓国の情勢で訪日数大きく変動）</li>
          <li>個別株は集中リスク、インバウンドETF・J-REIT分散推奨</li>
          <li>長期（5〜10年）目線で、短期の観光トレンド変動に耐える必要</li>
          <li>ポートフォリオの5〜10%配分が適正、サテライト位置付け</li>
        </ul>
      </section>
      <AffiliateCTA
        title="インバウンド関連株はSBI証券で｜個別株＋REIT対応"
        description="SBI証券はJR東日本・ANA・星野リート投資法人等のインバウンド関連株＋J-REIT＋観光ETFが1口座で取引可能。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、2030年6000万人時代の恩恵を取込む。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="✈️"
        highlight="業界No.1"
      />
    </>
  ),
  "young-adult-finance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">20代の金融入門｜資産形成のスタートダッシュ</h2>
        <p>
          20代の金融教育は、50代までの生涯で最大の資産形成効果を生み出します。月3万円を年利7%で40年運用すれば7500万円超、20代の1年の差が晩年10万円の差になる複利の世界。固定費削減・副業・新NISA・クレカ選びの4本柱で、賢い資産形成のスタートを切る方法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="20代の資産形成ロードマップ"
        services={[
          {
            name: "生活防衛資金（最優先）",
            rank: 1,
            highlight: "生活費3〜6ヶ月分を預金",
            features: [
              "90〜180万円を普通預金に",
              "失業・病気時の生活費",
              "ネット銀行（あおぞら・住信SBI）で金利UP",
              "投資前の必須項目",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "必須",
          },
          {
            name: "新NISA月3〜5万円積立",
            rank: 2,
            highlight: "全世界株インデックス",
            features: [
              "eMAXIS Slim全世界株式",
              "月3万円×40年で5,900万円（年7%）",
              "SBI証券×三井住友カードで1%還元",
              "積立NISA枠優先活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "副業・スキルアップ",
            rank: 3,
            highlight: "収入源の多様化",
            features: [
              "月5〜10万円の副業収入",
              "ライティング・動画編集",
              "プログラミング学習",
              "資格取得（簿記・FP等）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">固定費削減で月3万円浮かす</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>スマホ：大手キャリア8000円 → 格安SIM1000円（月7000円節約）</li>
          <li>光回線：7000円 → NURO・楽天ひかり5000円（月2000円節約）</li>
          <li>生命保険：月1万円 → 県民共済2000円（月8000円節約）</li>
          <li>サブスク整理：月5000円の見直しで月3000円節約</li>
          <li>電力会社：月1万円 → Looopでんき8500円（月1500円節約）</li>
          <li>合計：月2〜3万円の固定費削減、年30〜36万円の原資確保</li>
        </ul>
      </section>
      <AffiliateCTA
        title="20代の資産形成はSBI証券で｜新NISA＋クレカ積立1%還元"
        description="SBI証券は20代の資産形成に最適。新NISA＋三井住友カードNLクレカ積立で1%還元、投資信託2500本から選択可能。月3万円×40年で5,900万円の資産形成、20代のスタートダッシュに最適なプラットフォーム。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎓"
        highlight="20代におすすめ"
      />
    </>
  ),
  "fire-movement-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FIRE（早期退職）完全ガイド</h2>
        <p>
          FIRE（Financial Independence, Retire Early）は、経済的自立＆早期退職を目指すライフスタイル運動。米国発祥で日本でも急速に広がりつつあります。4%ルール（年間生活費の25倍の資産で永遠に取崩し可能）、Lean FIRE・Fat FIRE・Coast FIREの各タイプ、達成までのロードマップを徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="FIREの3タイプ比較"
        services={[
          {
            name: "Lean FIRE（ミニマル）",
            rank: 1,
            highlight: "年生活費200万×25＝5000万円",
            features: [
              "質素倹約な暮らし",
              "目標資産3000〜5000万円",
              "達成10〜15年で可能",
              "若年層が実現しやすい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "Fat FIRE（ゆとり）",
            rank: 2,
            highlight: "年生活費400万×25＝1億円",
            features: [
              "中〜上級のライフスタイル",
              "目標資産8000万〜1.5億円",
              "達成15〜25年必要",
              "高所得者向け",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "ゆとり",
          },
          {
            name: "Coast FIRE（半引退）",
            rank: 3,
            highlight: "複利で自動的に達成",
            features: [
              "30代までに3000万円",
              "その後は元本維持のみ",
              "60歳時に1億円到達",
              "セミリタイアOK",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "現実的",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">4%ルールの意味</h2>
        <p className="text-sm">
          トリニティスタディ（1926〜1995年の米国市場データ）に基づく：年間生活費の25倍の資産があれば、4%ずつ取崩しても30年以上資産枯渇しない確率95%超。年250万円の生活費なら6250万円で永遠のFIRE可能。新NISA＋iDeCoでの低コスト運用＋S&P500連動インデックスが最適解です。
        </p>
      </section>
      <AffiliateCTA
        title="FIRE達成はSBI証券で｜新NISA＋iDeCoで最速資産形成"
        description="SBI証券は新NISA年360万円・iDeCo年27.6万円の非課税枠をフル活用可能。月30万円の積立で15〜20年でFIRE達成、S&P500連動インデックス＋クレカ積立1%還元で最速ルート。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔥"
        highlight="FIRE達成"
      />
    </>
  ),
  "single-mother-finance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">シングルマザーの家計完全ガイド</h2>
        <p>
          シングルマザー（ひとり親）世帯の平均年収は約270万円と、二親世帯の半分以下。ただし児童扶養手当・医療費助成・ひとり親控除等、活用できる公的支援を最大化することで、実質可処分所得を年50〜100万円増やすことが可能です。手当申請から節税・節約まで、生活安定化のための制度を網羅解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="シングルマザー向け主要支援制度"
        services={[
          {
            name: "児童扶養手当",
            rank: 1,
            highlight: "月1〜4万円＋子2人で+1万円",
            features: [
              "全部支給：月44,140円（子1人）",
              "所得制限あり（年収230万円等）",
              "8月・12月・4月に4ヶ月分振込",
              "年約52万円の基本支援",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須",
          },
          {
            name: "ひとり親控除",
            rank: 2,
            highlight: "所得税35万円・住民税30万円",
            features: [
              "所得500万円以下対象",
              "年収500万円なら年7万円節税",
              "確定申告or年末調整で申請",
              "寡婦控除と選択適用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "医療費助成（自治体）",
            rank: 3,
            highlight: "母子・児童の医療費ゼロ",
            features: [
              "ひとり親医療費助成",
              "子ども医療費ゼロ（0〜18歳）",
              "所得制限なしの自治体も",
              "月数千〜数万円の節約",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">収入アップの道筋</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>自立支援教育訓練給付金（資格取得費用の60〜70%補助）</li>
          <li>高等職業訓練促進給付金（月10万円×2〜3年で資格取得）</li>
          <li>クラウドワークス・ランサーズで在宅副業月5〜10万円</li>
          <li>看護師・保育士・介護福祉士等の国家資格で年収450万円も</li>
          <li>新NISA月3万円積立で将来の子ども学費2000万円準備</li>
        </ul>
      </section>
      <AffiliateCTA
        title="シングルマザーの資産形成はSBI証券で｜少額から始められる"
        description="SBI証券は新NISA積立100円から可能、シングルマザーの限られた余裕資金でも子どもの教育費・自分の老後資金を少しずつ育てられる。クレカ積立1%還元でさらに効率化、月5000円からでも将来の安心を。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👩‍👧"
        highlight="少額OK"
      />
    </>
  ),
  "post-divorce-finance-rebuild-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">離婚後の家計再建完全ガイド</h2>
        <p>
          離婚は精神的打撃に加え、家計にも大きな影響を与えます。養育費の取決め、住宅ローン・車ローンの名義変更、保険の受取人変更、氏（姓）の変更手続き、新たな資産形成プランまで、離婚後半年〜1年で必ず対応すべき金融手続きを体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="離婚後の優先対応項目"
        services={[
          {
            name: "養育費の取り決め",
            rank: 1,
            highlight: "月3〜15万円・公正証書化",
            features: [
              "算定表で適正額確認",
              "公正証書＋強制執行認諾付",
              "年金分割も同時検討",
              "未払い時の差押えも可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須",
          },
          {
            name: "名義変更・保険見直し",
            rank: 2,
            highlight: "住宅・車・保険の名義整理",
            features: [
              "住宅ローン借換or売却",
              "自動車保険の名義変更",
              "生命保険受取人変更",
              "クレカ・銀行口座整理",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "新たな資産形成",
            rank: 3,
            highlight: "新NISA＋iDeCoで再スタート",
            features: [
              "月5万円〜積立開始",
              "30〜40代なら20年で3000万円",
              "ひとり親控除活用で節税",
              "子の教育資金併走",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">養育費の算定相場</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>支払側年収500万・受取側年収200万・子1人：月6〜8万円</li>
          <li>支払側年収800万・受取側年収300万・子1人：月10〜12万円</li>
          <li>支払側年収1000万・受取側年収400万・子2人：月14〜16万円</li>
          <li>支払は原則子20歳までだが、大学進学すれば22歳まで継続も可</li>
          <li>未払い率30%超の現実、公正証書＋強制執行認諾で回避</li>
        </ul>
      </section>
      <AffiliateCTA
        title="離婚後の保険見直しは保険マンモスで｜受取人変更・プラン再設計"
        description="保険マンモスは離婚後の保険見直しに強いFPが無料相談対応。受取人変更だけでなく、ひとり親世帯に最適な保険設計（死亡保障・医療保障・個人年金）を一括提案、新NISAとの併用戦略も含めて最適化。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="💔"
        highlight="無料FP相談"
      />
    </>
  ),
  "caregiver-financial-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護者（ケアギバー）の家計プランニング</h2>
        <p>
          親の介護は、介護者自身のキャリア・家計に大きな影響を与えます。介護離職の経済損失は年収600万円×10年＝6000万円以上、並行して親の介護費用（月10〜30万円）もかかる二重負担。介護休業制度・介護保険サービス・所得控除を最大活用し、介護離職を避けながら経済基盤を守る方法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="介護者が使える主要制度"
        services={[
          {
            name: "介護休業制度",
            rank: 1,
            highlight: "通算93日・給付金67%",
            features: [
              "通算93日の休業可能",
              "介護休業給付金月給の67%",
              "対象家族1人につき3回まで分割",
              "会社員・パート（要件あり）対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "活用必須",
          },
          {
            name: "介護保険サービス",
            rank: 2,
            highlight: "自己負担1〜3割",
            features: [
              "要支援・要介護認定で利用開始",
              "訪問介護・デイサービス・ショートステイ",
              "自己負担1〜3割（月上限あり）",
              "ケアマネ選定が重要",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "扶養控除・介護控除",
            rank: 3,
            highlight: "所得税控除38〜58万円",
            features: [
              "同居老親扶養控除：58万円",
              "別居の親扶養控除：48万円",
              "医療費控除（介護サービス含）",
              "障害者控除（要介護4〜5で適用可）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">介護離職を避けるための対策</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>リモートワーク・時短勤務の活用（両立支援制度）</li>
          <li>要介護認定申請（市町村窓口で無料）</li>
          <li>ケアマネ経由で介護サービス導入（自己負担月3〜5万円）</li>
          <li>親の収入・資産活用（年金・預金・生命保険）</li>
          <li>きょうだい間の費用分担（公正証書で明確化）</li>
          <li>施設入居検討（特養5〜15万円/月、有料老人ホーム15〜30万円/月）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護費用の節税は税理士ドットコムで｜専門税理士無料相談"
        description="税理士ドットコムは介護関連の税務に強い税理士を無料マッチング。扶養控除・医療費控除・障害者控除の最大化、親の相続対策・生前贈与、介護費用の経費化（自営業者）まで総合アドバイス。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🤝"
        highlight="無料マッチング"
      />
    </>
  ),
  "disability-financial-support-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">障がい者・難病患者の金融支援完全ガイド</h2>
        <p>
          障がい者手帳や難病認定を受けた方は、様々な公的支援を受けられます。障害年金（月6〜10万円の継続収入）、税金控除（年7万円以上の節税）、NHK受信料・公共交通機関の割引、就労支援事業所の活用等、知っているかどうかで生涯収支が数百万円以上変わる制度を網羅的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要支援制度の比較"
        services={[
          {
            name: "障害年金",
            rank: 1,
            highlight: "月6〜10万円の継続収入",
            features: [
              "障害基礎年金：月6.8万円（2級）",
              "障害厚生年金：上乗せ",
              "精神疾患・難病も対象",
              "20歳以上で申請可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "重要",
          },
          {
            name: "税金控除",
            rank: 2,
            highlight: "所得税27〜40万円控除",
            features: [
              "障害者控除：27万円",
              "特別障害者控除：40万円",
              "同居特別障害者：75万円",
              "住民税も26〜30万円控除",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "就労支援（A型・B型）",
            rank: 3,
            highlight: "月5〜12万円の賃金",
            features: [
              "A型：雇用契約＋最低賃金",
              "B型：作業工賃月1〜3万円",
              "就労移行支援で一般就職",
              "自治体の就労継続支援",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">その他の各種割引・助成</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>NHK受信料：半額・全額免除（要件により）</li>
          <li>JR・私鉄：介護者含め50%割引</li>
          <li>有料道路：通行料50%割引</li>
          <li>公共施設入場料：本人・介護者無料</li>
          <li>携帯電話：月最大1,200円割引（各キャリア）</li>
          <li>住宅改修費補助：最大20万円（介護保険）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="障害年金申請は社労士無料相談で｜税理士ドットコム経由"
        description="障害年金申請は複雑な審査（不支給率30%超）、社労士の専門サポートで採用率大幅UP。税理士ドットコムでは障害年金専門の社労士・税理士を無料マッチング、税金控除の最大化も同時サポート。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="♿"
        highlight="無料マッチング"
      />
    </>
  ),
  "kodomo-education-cost-complete": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">子どもの教育費完全ガイド</h2>
        <p>
          子ども1人あたりの教育費は幼稚園〜大学まで約2000万円（全て公立）、私立中心なら3000万円超が目安。教育費負担のピークは大学期（年100〜200万円）、学資保険よりも新NISA積立が効率的な資産形成手段。奨学金・教育ローンとの組合せ、ジュニアNISA代替の方法まで体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="教育費準備の3大手段"
        services={[
          {
            name: "新NISA積立（推奨）",
            rank: 1,
            highlight: "18年で1000万円以上",
            features: [
              "月3万円×18年で1260万円（年7%）",
              "売却益・配当非課税",
              "柔軟な引出し可能",
              "親名義で管理・教育費以外にも活用可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最優先",
          },
          {
            name: "学資保険",
            rank: 2,
            highlight: "返戻率105〜110%",
            features: [
              "強制貯蓄効果",
              "契約者死亡時に保険料免除",
              "返戻率低め（5〜10%）",
              "途中解約で元本割れ",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "奨学金・教育ローン",
            rank: 3,
            highlight: "不足分を補う手段",
            features: [
              "日本学生支援機構（無利子・有利子）",
              "第一種：無利子（成績・所得要件）",
              "第二種：有利子（年3%以下）",
              "貸与型・給付型あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ライフステージ別の教育費</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>幼稚園（3〜5歳）：公立22万円/年、私立47万円/年</li>
          <li>小学校（6〜11歳）：公立35万円/年、私立167万円/年</li>
          <li>中学校（12〜14歳）：公立54万円/年、私立144万円/年</li>
          <li>高校（15〜17歳）：公立51万円/年、私立105万円/年</li>
          <li>大学（18〜21歳）：国公立82万円/年、私立文系116万円/年、私立理系153万円/年</li>
          <li>合計：オール公立1000万円、オール私立3000万円以上</li>
        </ul>
      </section>
      <AffiliateCTA
        title="教育費準備はSBI証券の新NISAで｜学資保険より有利"
        description="SBI証券の新NISAは月3万円×18年で1260万円（年7%）の教育資金を非課税で準備可能。学資保険（返戻率105〜110%）より圧倒的に有利、途中解約も自由で柔軟性抜群。子育て世代の王道戦略。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎒"
        highlight="教育資金"
      />
    </>
  ),
  "green-home-subsidy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ZEH・省エネ住宅補助金完全ガイド</h2>
        <p>
          ZEH（ゼロ・エネルギー・ハウス）は、高断熱＋省エネ＋太陽光発電で年間エネルギー収支ゼロを目指す住宅。国土交通省・環境省・経済産業省が連携した「こどもエコすまい支援事業」「ZEH補助金」で最大100万円＋住宅ローン控除上乗せ＋固定資産税優遇の三重メリット、新築戸建て建築時は必ず活用すべき制度です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要な住宅補助金制度"
        services={[
          {
            name: "こどもエコすまい支援事業",
            rank: 1,
            highlight: "子育て世帯最大100万円",
            features: [
              "新築（長期優良）：100万円",
              "新築（ZEH）：80万円",
              "リフォーム：5〜60万円",
              "2026年まで延長",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "子育て世帯",
          },
          {
            name: "ZEH補助金",
            rank: 2,
            highlight: "55〜100万円",
            features: [
              "ZEH：55万円",
              "ZEH＋：100万円",
              "次世代ZEH＋：112万円",
              "戸建て向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
          },
          {
            name: "住宅ローン控除優遇",
            rank: 3,
            highlight: "最大455万円控除",
            features: [
              "ZEH水準：借入5000万円対象",
              "認定長期優良：5000万円対象",
              "一般：3000万円対象",
              "13年間の税額控除",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">補助金の合計効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>こどもエコすまい100万円＋ZEH補助金100万円＝合計200万円</li>
          <li>住宅ローン控除（ZEH・年収600万円・3500万円借入）：年24.5万円×13年＝318万円</li>
          <li>固定資産税優遇：3年間1/2減額で50〜100万円相当</li>
          <li>光熱費削減：ZEH住宅で年15〜20万円節約、20年で300〜400万円</li>
          <li>トータル効果：新築ZEH住宅で1000万円超の実質削減効果</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ZEH住宅の相談は家づくり相談所で｜全国の工務店無料紹介"
        description="家づくり相談所はZEH・長期優良住宅の設計実績豊富な工務店を無料紹介。補助金申請サポート、住宅ローン比較、土地探しまで一括対応。新築戸建ての計画段階から相談するのが成功の鉄則。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏡"
        highlight="無料紹介"
      />
    </>
  ),
  "eco-car-subsidy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">EV・エコカー補助金完全ガイド</h2>
        <p>
          2026年のEV購入時は、CEV補助金（国）最大65万円＋自治体上乗せ（東京都最大35万円）＋エコカー減税（自動車税・重量税・環境性能割）で、新車購入時に100〜150万円の実質値引き効果。ガソリン車との価格差を縮め、EV普及を後押しする政策、購入予定者は必ず活用すべき制度です。
        </p>
      </section>
      <ComparisonTableCTA
        title="EV・エコカー補助金の主要制度"
        page="eco-car-subsidy-guide"
        services={[
          {
            name: "CEV補助金（国）",
            rank: 1,
            highlight: "EV最大65万円",
            features: [
              "EV：最大65万円",
              "PHEV：最大55万円",
              "FCV：最大255万円",
              "軽EV：最大55万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "国補助",
          },
          {
            name: "東京都EV補助金",
            rank: 2,
            highlight: "上乗せ最大35万円",
            features: [
              "国補助との併用OK",
              "再エネ充電で追加15万円",
              "V2H機器設置で最大50万円",
              "都内登録必須",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "エコカー減税",
            rank: 3,
            highlight: "税金実質ゼロ",
            features: [
              "自動車税：75%〜100%減",
              "重量税：全額免税（EV）",
              "環境性能割：非課税（EV）",
              "新車購入時の一時節税",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <DecisionBox
        title="結論：補助金で購入費を下げた後は維持費を確認する"
        points={[
          "EV・PHEVは車両価格や修理費が保険料に反映されるため、補助金額だけで判断しない。",
          "自治体補助金は予算枠や受付期限があるため、購入前に公式情報で申請条件を確認する。",
          "納車時期が見えたら自動車保険の見積もりも取り、ローン・電気代・保険料の月額を合算する。",
        ]}
        note="購入補助と維持費の両方を見れば、ガソリン車との実質差額を判断しやすくなります。"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">EV購入の総合的メリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>補助金合計（国＋自治体）：最大100〜130万円の値引き効果</li>
          <li>エコカー減税：購入時＋毎年の税金で10〜30万円削減</li>
          <li>燃料費削減：年1.5万km走行なら年10〜15万円節約（20年で200〜300万円）</li>
          <li>メンテナンス費：オイル交換不要で年3〜5万円節約</li>
          <li>トータル：EV所有20年で通常車比較500万円以上のメリット</li>
        </ul>
      </section>
      <AffiliateCTA
        title="EV購入後の保険料も一括比較｜インズウェブ"
        description="EV・PHEVは車両価格や補償条件で保険料が変わります。補助金で購入費を抑えた後は、インズウェブで複数社の自動車保険見積もりを比較し、維持費まで確認します。"
        buttonText="自動車保険を無料で一括見積もり"
        href="/go/sbi-insweb-auto"
        icon="🔌"
        highlight="維持費の見直し"
        page="eco-car-subsidy-guide"
      />
    </>
  ),
  "ibousha-pension-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">遺族年金完全ガイド</h2>
        <p>
          配偶者や家族を亡くした時に受け取れる遺族年金は、残された家族の生活を支える最重要公的制度。遺族基礎年金（子がいる配偶者対象、月8万円）＋遺族厚生年金（厚生年金加入者の遺族対象、月10〜20万円）の組合せで、配偶者死亡後も月15〜30万円の継続収入が確保できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="遺族年金の2タイプ比較"
        services={[
          {
            name: "遺族基礎年金",
            rank: 1,
            highlight: "子ありの配偶者に月8万円",
            features: [
              "18歳未満の子がいる配偶者・子が対象",
              "年額816,000円（配偶者）",
              "子加算：234,800円（1人目・2人目）",
              "第3子以降78,300円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "子育て世帯",
          },
          {
            name: "遺族厚生年金",
            rank: 2,
            highlight: "厚生年金加入者の遺族",
            features: [
              "死亡者の老齢厚生年金×3/4",
              "妻・子・孫が優先",
              "夫は55歳以降受給",
              "中高齢寡婦加算あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "寡婦年金・死亡一時金",
            rank: 3,
            highlight: "国民年金加入者の遺族",
            features: [
              "寡婦年金：60〜65歳の妻",
              "死亡一時金：12〜32万円",
              "遺族基礎年金受給なしの場合",
              "選択制",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">受給額シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収500万円サラリーマン死亡・配偶者＋子2人：月20〜22万円（年250万円）</li>
          <li>年収800万円サラリーマン死亡・配偶者＋子1人：月25〜28万円（年320万円）</li>
          <li>自営業死亡・配偶者＋子2人：月13万円（年155万円、遺族基礎のみ）</li>
          <li>配偶者のみ・厚生年金死亡：月10〜15万円</li>
          <li>子が18歳超えたら遺族基礎年金停止、遺族厚生年金のみ継続</li>
        </ul>
      </section>
      <AffiliateCTA
        title="遺族年金+生命保険の総合設計は保険マンモスで｜無料FP相談"
        description="保険マンモスは遺族年金を踏まえた生命保険の必要保障額を無料シミュレーション。公的年金の不足分をどれだけ保険でカバーすべきか、家族構成・収入に応じて最適な保険プランを提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🕊️"
        highlight="無料FP相談"
      />
    </>
  ),
  "kaigo-hoken-detail-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護保険制度完全ガイド</h2>
        <p>
          介護保険制度は40歳以上が加入義務の公的保険制度。65歳以上（第1号被保険者）は要介護認定で介護サービス利用可、40〜64歳（第2号被保険者）は特定疾病（16種類）で利用可。自己負担1〜3割で月限度額内のサービスを受けられ、年30〜100万円の介護費負担を軽減できる重要制度です。
        </p>
      </section>
      <ComparisonTableCTA
        title="要介護認定別のサービス上限"
        services={[
          {
            name: "要支援1・2（軽度）",
            rank: 1,
            highlight: "月上限5〜10万円",
            features: [
              "要支援1：月限度額50,320円",
              "要支援2：月限度額105,310円",
              "介護予防サービスが中心",
              "自己負担1〜3割",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "要介護1〜3（中度）",
            rank: 2,
            highlight: "月上限17〜27万円",
            features: [
              "要介護1：月167,650円",
              "要介護2：月197,050円",
              "要介護3：月270,480円",
              "訪問介護・デイサービス中心",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "中核",
          },
          {
            name: "要介護4・5（重度）",
            rank: 3,
            highlight: "月上限31〜36万円",
            features: [
              "要介護4：月309,380円",
              "要介護5：月362,170円",
              "特養入所対象",
              "24時間介護体制",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">介護保険申請の流れ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①市区町村の介護保険窓口で要介護認定申請（無料）</li>
          <li>②認定調査員による訪問調査（心身状態・生活状況確認）</li>
          <li>③主治医意見書作成（医療機関から自治体へ提出）</li>
          <li>④認定審査会で要支援・要介護度決定（約30日）</li>
          <li>⑤ケアマネジャー（無料）とケアプラン作成</li>
          <li>⑥サービス利用開始、月1回のケアプラン見直し</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護費用の資金計画は保険マンモスで｜介護保険付き生命保険相談"
        description="保険マンモスは介護保険・認知症保険・介護特約付き生命保険の無料比較。親の介護費用の備え、自分の将来介護への対策まで、FPが家族構成・資産状況を踏まえて最適プランを提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="♿"
        highlight="無料FP相談"
      />
    </>
  ),
  "active-etf-japan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">アクティブETF日本上陸完全ガイド</h2>
        <p>
          2023年9月から日本でもアクティブETFの上場が可能になり、野村・三菱UFJ・日興アセット等の大手が順次上場。米国ARKK（キャシー・ウッド）に代表されるテーマ型アクティブETFの日本版で、インデックスを上回るリターンを狙う低コスト（信託報酬0.5〜1%）＋流動性の高い新しい投資手段として注目されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要なアクティブETF比較"
        services={[
          {
            name: "NEXT FUNDS 日本成長株（2077）",
            rank: 1,
            highlight: "野村AM・グロース重視",
            features: [
              "日本の中小型成長株",
              "信託報酬0.49%",
              "新NISA成長枠対応",
              "月間売買代金10億円超",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "MAXIS 日本株アクティブ（2842）",
            rank: 2,
            highlight: "三菱UFJ・バリュー重視",
            features: [
              "日本株から厳選投資",
              "信託報酬0.66%",
              "配当金分配型",
              "低コスト＋目利き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ARKK（米国アクティブETF）",
            rank: 3,
            highlight: "キャシー・ウッド運用",
            features: [
              "イノベーション株特化",
              "信託報酬0.75%",
              "Tesla・Zoom等を組入れ",
              "高ボラティリティ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">アクティブETFのメリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>メリット①：インデックス超過リターンの可能性</li>
          <li>メリット②：ETF形式なのでリアルタイム売買可能</li>
          <li>メリット③：信託報酬がアクティブ投信より安い（0.5〜1% vs 1.5〜2%）</li>
          <li>デメリット①：運用者の腕次第でインデックスを下回るリスク</li>
          <li>デメリット②：長期運用では多くがインデックスに負ける統計あり</li>
          <li>配分：ポートフォリオ5〜10%以内のサテライト配分が現実的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="アクティブETFはSBI証券で｜日米のアクティブETF豊富"
        description="SBI証券は日本のアクティブETF（2077・2842等）＋米国ARKK・ARKQ・ARKG等、幅広くカバー。新NISA成長枠で非課税運用、信託報酬0.5〜1%の低コスト、イノベーション投資の入門にも最適。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚡"
        highlight="業界No.1"
      />
    </>
  ),
  "japan-treasury-30year-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本30年国債投資完全ガイド</h2>
        <p>
          2024年のアベノミクス・黒田日銀時代から一変し、植田日銀の正常化で日本30年国債の利回りは2%超に上昇。1000万円投資なら年20万円の利金、30年で600万円の確定金利が得られる計算。預金金利0.001%の1000倍超、インフレ対策＋安全資産＋分散投資の3拍子揃った、個人投資家にとっての新たな選択肢となっています。
        </p>
      </section>
      <ComparisonTableCTA
        title="日本国債の購入手段"
        services={[
          {
            name: "個人向け国債（変動10年）",
            rank: 1,
            highlight: "元本保証＋金利連動",
            features: [
              "年2回金利見直し",
              "最低保証金利0.05%",
              "1万円から購入可",
              "1年経過後いつでも解約可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "初心者向け",
          },
          {
            name: "利付国債（30年）",
            rank: 2,
            highlight: "利回り2%超",
            features: [
              "半年ごと利払い",
              "満期まで保有で元本保証",
              "途中売却は価格変動リスクあり",
              "5万円から購入可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "米国長期債ETF（TLT・EDV）",
            rank: 3,
            highlight: "ドル建て利回り4〜5%",
            features: [
              "TLT：20年超米国債",
              "EDV：ゼロクーポン米国債",
              "為替リスクあり",
              "分配金利回り3〜4%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">日本国債投資のシミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1000万円を30年国債（2.0%）投資：年20万円利金、30年で600万円</li>
          <li>ポートフォリオの20%（600万円）を日本国債＋80%株式で分散効果</li>
          <li>インフレ率2%のシナリオでは実質利回りほぼゼロ（注意）</li>
          <li>金利上昇局面の途中売却は元本割れリスク、満期保有が基本</li>
          <li>相続時は時価評価、相続人への移管可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="日本国債購入はSBI証券で｜個人向け国債キャンペーン"
        description="SBI証券は個人向け国債（変動10年・固定5年）の取扱い豊富、新規購入キャッシュバック（投資額×0.05〜0.10%）キャンペーン常時実施。30年利付国債も購入可能、安定資産のコア部分として活用できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏛️"
        highlight="業界No.1"
      />
    </>
  ),
  "sumitate-inherit-ideco-nisa-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">相続時のiDeCo・NISA完全ガイド</h2>
        <p>
          iDeCo・NISA加入者が亡くなった場合の手続きは、制度により大きく異なります。iDeCoは「遺族一時金」として相続税対象（500万円×法定相続人の非課税枠適用）、NISAは相続人の特定口座に課税移管。どちらも適切な手続きを踏まないと資産が凍結されるため、家族への情報共有と早期対応が重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="iDeCo・NISAの相続時対応"
        services={[
          {
            name: "iDeCo（確定拠出年金）",
            rank: 1,
            highlight: "遺族一時金・相続税対象",
            features: [
              "遺族一時金として受給",
              "500万円×法定相続人非課税",
              "運用者（配偶者・子）が受取人",
              "5年以内に手続き必須",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
            badge: "重要",
          },
          {
            name: "NISA（新NISA・つみたてNISA）",
            rank: 2,
            highlight: "課税口座へ移管",
            features: [
              "相続人の特定口座に移管",
              "相続時の時価で取得価格リセット",
              "以降の運用益は課税対象",
              "相続税も別途課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "特定口座・一般口座",
            rank: 3,
            highlight: "相続税＋譲渡所得",
            features: [
              "時価で相続税評価",
              "相続人の特定口座に移管",
              "被相続人の取得価格継続",
              "売却時譲渡所得税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">相続手続きの流れ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①死亡届提出（7日以内・市区町村）</li>
          <li>②金融機関に連絡（口座凍結）、iDeCoは運営管理機関に連絡</li>
          <li>③相続人確定、遺産分割協議書作成（必要な場合）</li>
          <li>④iDeCo：死亡一時金請求書・戸籍謄本・住民票等の提出（5年以内）</li>
          <li>⑤NISA：相続人の特定口座開設→被相続人口座から移管手続き</li>
          <li>⑥相続税申告（10ヶ月以内）、税理士相談推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="相続税対策は税理士ドットコムで｜iDeCo・NISA含む総合相談"
        description="税理士ドットコムはiDeCo・NISA・不動産・生命保険を含む相続税対策全般に強い税理士を無料マッチング。非課税枠フル活用、生前贈与、遺言書作成まで総合的にサポート、資産形成世帯の備えに。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📜"
        highlight="無料マッチング"
      />
    </>
  ),
  "asset-management-fee-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">運用手数料最適化完全ガイド</h2>
        <p>
          投資信託・ETF・ロボアドの手数料差は、30年運用で数百万円の差を生みます。eMAXIS Slim全世界株式（信託報酬0.05%）vs ウェルスナビ（1.1%）で年1%超の差、1000万円×30年で複利効果により350万円の差額。低コスト運用の徹底が、資産形成の最重要戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="手数料ランキング（全世界株インデックス）"
        services={[
          {
            name: "eMAXIS Slim全世界株式",
            rank: 1,
            highlight: "信託報酬0.05775%",
            features: [
              "業界最安水準",
              "純資産5兆円超の安定感",
              "新NISA積立枠対応",
              "SBI・楽天・マネックス全社取扱",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
          {
            name: "SBI・V・全世界株式（VT連動）",
            rank: 2,
            highlight: "信託報酬0.1238%",
            features: [
              "バンガードVT連動",
              "実質コスト0.15%程度",
              "SBI証券特化商品",
              "米国比率55%で成長期待",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ウェルスナビ（ロボアド）",
            rank: 3,
            highlight: "手数料1.1%",
            features: [
              "手間ゼロで自動運用",
              "リバランス自動化",
              "税金最適化機能",
              "eMAXIS Slimの22倍コスト",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">30年運用の手数料差シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月3万円積立・年利7%想定で30年運用</li>
          <li>eMAXIS Slim（0.05%）：最終資産3,710万円</li>
          <li>ウェルスナビ（1.1%）：最終資産3,090万円</li>
          <li>差額：620万円（手数料の複利効果）</li>
          <li>米国ETF買付手数料無料＋為替手数料無料で+0.3%改善も可</li>
          <li>手数料0.5%以下を死守するのが鉄則、1%超は要見直し</li>
        </ul>
      </section>
      <AffiliateCTA
        title="低コスト運用はSBI証券で｜eMAXIS Slim＋米国ETF"
        description="SBI証券はeMAXIS Slim全世界株式（信託報酬0.05%）・米国ETF買付手数料無料・為替手数料無料（住信SBI連携）の三拍子。ロボアド（1.1%）より年1%超コスト削減、30年で数百万円の差を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💸"
        highlight="手数料0.05%"
      />
    </>
  ),
  "bitcoin-etf-japan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ビットコイン現物ETF完全ガイド</h2>
        <p>
          米国ではビットコイン現物ETFが上場していますが、日本居住者が利用できる商品、証券会社の取扱い、税制、為替コストは時期によって変わります。暗号資産取引所で現物を保有する場合と、米国ETFを証券口座で保有する場合では、税金、管理方法、価格変動リスク、手数料の確認ポイントが異なります。
        </p>
      </section>
      <DecisionBox
        title="結論：ビットコインETFは購入可否・税金・価格変動を分けて確認"
        points={[
          "日本の証券会社で取扱いがあるか、NISA対象か、特定口座で管理できるかを確認する。",
          "暗号資産現物とETFでは税務上の扱いが異なるため、利益確定前に申告区分を確認する。",
          "ビットコインは価格変動が大きく、短期間で大幅下落する可能性がある。",
        ]}
        note="本記事は一般的な比較情報であり、暗号資産やETFの購入を推奨するものではありません。"
      />
      <ComparisonTableCTA
        title="主要ビットコイン現物ETF"
        services={[
          {
            name: "iShares Bitcoin Trust（IBIT）",
            rank: 1,
            highlight: "預かり資産トップクラス",
            features: [
              "ブラックロック運用",
              "信託報酬0.25%（プロモ中）",
              "預かり資産300億ドル超",
              "流動性・信頼性No.1",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "Fidelity Wise Origin Bitcoin（FBTC）",
            rank: 2,
            highlight: "フィデリティ運用",
            features: [
              "信託報酬0.25%",
              "預かり資産150億ドル超",
              "老舗フィデリティの信頼性",
              "米国401(k)対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ARK 21Shares Bitcoin（ARKB）",
            rank: 3,
            highlight: "キャシー・ウッド",
            features: [
              "信託報酬0.21%",
              "ARK系列のBTC特化",
              "預かり資産40億ドル",
              "イノベーション投資志向",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">日本から購入する方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>SBI証券・楽天証券・マネックス証券の米国株口座で直接購入</li>
          <li>為替手数料：SBI×住信SBI連携で無料、楽天は片道4銭</li>
          <li>買付手数料：各社0.495%（上限22ドル）or 無料プラン</li>
          <li>税金：商品・口座区分・国内取扱状況によって扱いが変わるため、証券会社と税務情報を確認</li>
          <li>暗号資産取引所の現物保有とは、管理方法・税務・手数料・リスクが異なる</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ビットコインETFはSBI証券で｜為替手数料無料で有利"
        description="ビットコイン関連商品を検討する場合は、取扱商品、為替手数料、税務上の扱い、価格変動リスクを確認しましょう。暗号資産現物とETFは管理方法が異なるため、申込前に公式情報を確認してください。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="₿"
        highlight="業界No.1"
      />
    </>
  ),
  "reverse-mortgage-detail-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リバースモーゲージ詳細比較</h2>
        <p>
          リバースモーゲージは、60歳以上の持家シニアが自宅を担保にお金を借り、死亡時に住宅売却で返済する仕組み。老後資金不足の解決策として東京スター銀行・JHF（住宅金融支援機構）・楽天銀行等が提供。金利2.5〜3.5%、担保掛目50〜70%で、月10〜30万円の追加年金を確保できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要リバースモーゲージ比較"
        services={[
          {
            name: "JHF リ・バース60",
            rank: 1,
            highlight: "ノンリコース型・公的制度",
            features: [
              "住宅金融支援機構",
              "50歳以上対象",
              "ノンリコース型（死亡後売却で完済）",
              "金利年2.8〜3.5%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "安心",
          },
          {
            name: "東京スター銀行",
            rank: 2,
            highlight: "借入上限大・金利低",
            features: [
              "金利年2.5〜3.0%",
              "担保掛目最大70%",
              "首都圏・大都市圏物件対応",
              "老舗リバースモーゲージ",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
          },
          {
            name: "楽天銀行 リタイアメント・ローン",
            rank: 3,
            highlight: "楽天経済圏連携",
            features: [
              "金利年3.0〜3.5%",
              "担保掛目50〜60%",
              "ネット完結で手続き楽",
              "楽天ポイント還元",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リバースモーゲージのメリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>メリット①：自宅に住み続けながら現金化可能</li>
          <li>メリット②：ノンリコース型なら残債も相続人に請求なし</li>
          <li>メリット③：月10〜30万円の追加年金で生活の質向上</li>
          <li>デメリット①：長寿で資産価値を下回る可能性</li>
          <li>デメリット②：金利上昇で負債増</li>
          <li>デメリット③：子が実家相続できない</li>
        </ul>
      </section>
      <AffiliateCTA
        title="リバースモーゲージの相談は家づくり相談所で｜不動産評価＋最適商品"
        description="家づくり相談所は不動産評価・リバースモーゲージ商品の比較・相続対策まで総合相談。JHF・東京スター銀行・楽天銀行等の商品を中立的立場で比較、60歳以降の資産活用プランを無料で設計できる。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏠"
        highlight="無料相談"
      />
    </>
  ),
  "carbon-credit-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">カーボンクレジット投資完全ガイド</h2>
        <p>
          2026年から本格スタートのGX-ETS（排出量取引）とJ-クレジット制度により、カーボンクレジットは新たな投資対象に。森林由来クレジット・ブルーカーボン・CO2削減技術への投資で、脱炭素社会の成長恩恵を取込めます。ESG投資の一環として、年10〜20%の成長が期待される新ジャンルです。
        </p>
      </section>
      <ComparisonTableCTA
        title="カーボンクレジット投資の主な手段"
        services={[
          {
            name: "GX-ETF（排出量取引ETF）",
            rank: 1,
            highlight: "野村・ダイワで2026年上場予定",
            features: [
              "J-クレジット価格連動",
              "信託報酬0.3〜0.5%",
              "新NISA成長枠対応",
              "個人投資家が参加しやすい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "新規",
          },
          {
            name: "ICLN（米国クリーンエネルギーETF）",
            rank: 2,
            highlight: "クリーンエネルギー総合",
            features: [
              "信託報酬0.4%",
              "太陽光・風力・水素の総合投資",
              "預かり資産50億ドル",
              "米国・欧州企業中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "個別脱炭素企業株",
            rank: 3,
            highlight: "高成長高リスク",
            features: [
              "レノバ（9519）",
              "イーレックス（9517）",
              "SBGネットゼロ",
              "ボラティリティ高い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">カーボンクレジット投資のリスク</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>政策変更リスク（脱炭素政策の後退）</li>
          <li>市場規模がまだ小さい（流動性リスク）</li>
          <li>クレジット価格ボラティリティ高い</li>
          <li>ESG投資バブル崩壊のリスク</li>
          <li>ポートフォリオ5〜10%のサテライト配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="GX-ETF・クリーンエネルギー投資はSBI証券で"
        description="SBI証券は2026年上場のGX-ETF、米国ICLN・FAN（風力ETF）・TAN（太陽光ETF）等の脱炭素テーマETFを全てカバー。為替手数料無料、新NISA成長枠で非課税運用、脱炭素社会の恩恵を取込める。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌿"
        highlight="業界No.1"
      />
    </>
  ),
  "robo-advisor-hybrid-detail": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">AIロボアド詳細比較2026</h2>
        <p>
          ロボアドバイザーは2026年時点で預かり資産1兆円超（ウェルスナビ）、AIの進化で運用精度も向上しています。THEO＋docomo・SUSTEN・FOLIO ROBO PRO等、手数料0.66〜1.1%で手間ゼロ運用が可能。新NISA対応は各社異なり、忙しい会社員・投資初心者・時間を買いたい人向けの選択肢として確固たる地位を築いています。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要ロボアド比較"
        services={[
          {
            name: "ウェルスナビ",
            rank: 1,
            highlight: "預かり資産1兆円・業界最大手",
            features: [
              "手数料1.1%（年）",
              "自動リバランス・税金最適化",
              "新NISA対応",
              "最低投資額1万円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界最大",
          },
          {
            name: "SUSTEN",
            rank: 2,
            highlight: "儲かった分のみ手数料",
            features: [
              "成功報酬型手数料",
              "手数料0.66〜0.99%",
              "新NISA対応",
              "最低投資額1万円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "FOLIO ROBO PRO",
            rank: 3,
            highlight: "AI判断で高リターン狙い",
            features: [
              "手数料1.1%",
              "AI予測による動的配分",
              "新NISA対応",
              "市場予測型の攻めの運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアドを使うべき人・使わない方が良い人</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>使うべき：投資初心者・時間を買いたい会社員・自動化したい人</li>
          <li>使うべき：リバランス面倒・税金最適化の知識ない人</li>
          <li>使わない：手数料を気にする長期投資家（eMAXIS Slim 0.05%）</li>
          <li>使わない：自分で運用したい経験者</li>
          <li>使わない：新NISA満額活用したい人（枠がロボアドで埋まる）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="低コスト運用派はSBI証券で｜eMAXIS Slim＋自動積立で実質ロボアド"
        description="SBI証券はeMAXIS Slim全世界株式の自動積立設定で、実質ロボアドと同じ楽さ＋コスト1/22（0.05% vs 1.1%）。新NISA成長枠でクレカ積立1%還元、手動リバランスも年1回で十分、上級者向けの選択肢。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🤖"
        highlight="コスト22倍差"
      />
    </>
  ),
  "bousai-financial-preparation": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">災害・緊急事態への金融備え完全ガイド</h2>
        <p>
          地震・台風・感染症等の緊急事態時、金融面での準備が家族を守ります。生活防衛資金（生活費6ヶ月分）、災害保険（地震保険）、複数金融機関分散、現金保有、避難時の電子マネー活用等、総合的な金融防災対策を体系的に解説します。コロナ禍・能登地震の教訓を踏まえた、現代の金融BCP（事業継続計画）です。
        </p>
      </section>
      <ComparisonTableCTA
        title="金融防災の必須要素"
        services={[
          {
            name: "生活防衛資金",
            rank: 1,
            highlight: "6ヶ月分・90〜180万円",
            features: [
              "普通預金で即座に引出し可",
              "メガバンク＋ネット銀行分散",
              "失業・病気・災害時の生活費",
              "投資前の最優先項目",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "必須",
          },
          {
            name: "災害保険（地震保険）",
            rank: 2,
            highlight: "火災保険の特約",
            features: [
              "火災保険の30〜50%補償",
              "月1,000〜3,000円の保険料",
              "地震・津波・噴火対応",
              "所得控除5万円の税制優遇",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "現金・ゴールド保有",
            rank: 3,
            highlight: "物理的な保全資産",
            features: [
              "現金5〜10万円を家に保管",
              "金の延べ棒・金貨（10〜30万円）",
              "停電・ATM停止時の備え",
              "避難時の電子マネー併用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">災害時の金融対応チェックリスト</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>通帳・キャッシュカード・印鑑・マイナンバーカードの避難バッグ準備</li>
          <li>ネットバンキング・スマホアプリのログイン情報の紙メモ保管</li>
          <li>現金5〜10万円の家庭内分散保管</li>
          <li>複数金融機関（メガバンク＋ネット銀行）に資産分散</li>
          <li>地震保険＋火災保険の最新化（世帯主死亡時の生命保険も）</li>
          <li>災害時は銀行預金特別措置（通帳・印鑑なしでも10〜20万円引出し可）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="災害保険の見直しは保険マンモスで｜地震保険・火災保険比較"
        description="保険マンモスは地震保険・火災保険を全社比較。耐震等級割引・長期契約割引・保険料控除の最大活用、住宅ローンとの連動まで、無料FP相談で災害リスクに備える最適プランを設計できる。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="⛑️"
        highlight="無料FP相談"
      />
    </>
  ),
  "couple-joint-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">夫婦共同投資完全ガイド</h2>
        <p>
          共働き夫婦は「夫婦合計の新NISA年720万円」フル活用で、1人世帯の2倍の資産形成速度を実現できます。世帯単位での資産配分、リスク許容度の調整、共同口座vs個別口座、離婚時のリスクまで、2人で1億円を目指す夫婦の王道戦略を解説。30代からの夫婦投資で、60代FIRE達成も夢ではありません。
        </p>
      </section>
      <ComparisonTableCTA
        title="夫婦投資の3大戦略"
        services={[
          {
            name: "両者NISA満額（年720万円）",
            rank: 1,
            highlight: "年720万円・10年で7200万円",
            features: [
              "夫360万＋妻360万＝年720万円",
              "10年で生涯枠3600万円フル活用",
              "運用益で合計1億円到達可能",
              "夫婦最強の資産形成術",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "iDeCo＋NISA併用",
            rank: 2,
            highlight: "年合計800万円の非課税運用",
            features: [
              "夫iDeCo 27.6万＋妻iDeCo 27.6万",
              "2人合計年55.2万円の所得控除",
              "夫婦で年5〜10万円節税",
              "最強の節税＋非課税運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "家計管理の2口座方式",
            rank: 3,
            highlight: "共通口座＋個別口座",
            features: [
              "共通：生活費・住宅ローン・子供費",
              "個別：各自の小遣い・自由資金",
              "世帯管理の透明性",
              "離婚時のリスク管理",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リスク分担の重要性</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>NISA口座は本人名義のみ、夫婦合算できない</li>
          <li>収入多い方が多く積立、iDeCoの所得控除効果最大化</li>
          <li>配偶者の生命保険も考慮（死亡時の遺族年金＋保険金）</li>
          <li>離婚時：婚姻期間中の資産は共有財産として分割対象</li>
          <li>夫婦間の贈与は年110万円非課税、それ超で贈与税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="夫婦NISAはSBI証券で｜家族口座開設＋クレカ積立1%還元"
        description="SBI証券は夫婦それぞれの口座開設＋三井住友カードNLで年1%クレカ積立還元、夫婦合計で年120万円×1%＝12,000pt獲得。新NISA年720万円・夫婦最強の資産形成プラットフォーム。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💑"
        highlight="夫婦投資"
      />
    </>
  ),
  "shinsotsu-first-bank-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新社会人の銀行・クレカ・証券完全ガイド</h2>
        <p>
          新社会人の最初の1〜3ヶ月で、給与振込用銀行・メインクレジットカード・証券口座を整えることが、今後40年の資産形成の土台になります。メガバンク（三菱UFJ・みずほ・三井住友）vsネット銀行（住信SBI・楽天・あおぞら）の選択、クレカキャンペーン活用、新NISA即スタートで、就職祝いキャンペーンを含め5〜10万円お得にスタートできます。
        </p>
      </section>
      <ComparisonTableCTA
        title="新社会人におすすめの金融プラットフォーム"
        services={[
          {
            name: "給与振込・生活口座",
            rank: 1,
            highlight: "ネット銀行が圧倒的に有利",
            features: [
              "住信SBIネット銀行（SBIハイブリッド）",
              "楽天銀行（楽天ポイント連携）",
              "あおぞら銀行 BANK支店（金利0.2%）",
              "メガバンクは金利0.001%で不利",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "給与振込",
          },
          {
            name: "メインクレジットカード",
            rank: 2,
            highlight: "三井住友NL or 楽天カード",
            features: [
              "三井住友NL：コンビニ7%還元",
              "楽天カード：楽天市場SPU+1倍",
              "年会費永年無料",
              "新規入会5000〜10,000pt",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "クレカ",
          },
          {
            name: "証券口座",
            rank: 3,
            highlight: "新NISA即スタート",
            features: [
              "SBI証券（業界No.1）",
              "楽天証券（楽天経済圏）",
              "月1万円からのクレカ積立",
              "新NISA年360万円枠フル活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新社会人が避けるべき失敗</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>メガバンクだけ使う（ネット銀行の金利200倍を知らない）</li>
          <li>クレカを持たない（ポイント還元で年3〜5万円損）</li>
          <li>貯金ばかり・投資しない（複利で将来1000万円以上の機会損失）</li>
          <li>親のすすめのみで判断（情報古い場合が多い）</li>
          <li>リボ払い・消費者ローン（手数料年15〜18%の罠）</li>
          <li>投資詐欺・怪しい副業勧誘に引っかかる</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新社会人の資産形成はSBI証券で｜20代から始める40年プラン"
        description="SBI証券は新NISA＋クレカ積立＋米国ETFの総合プラットフォーム。住信SBIネット銀行と連携で給与振込から投資まで1画面完結、月3万円×40年で5,900万円の資産形成が可能な最強の20代スタートセット。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎓"
        highlight="20代におすすめ"
      />
    </>
  ),
  "housewife-assets-invest-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">専業主婦の資産形成完全ガイド</h2>
        <p>
          専業主婦でも新NISA・iDeCoの活用で、世帯資産形成に大きく貢献できます。配偶者控除（年収103〜150万円）の範囲内でパート収入＋運用益を生み出し、離婚・死別のリスク対策としての「自分名義の資産」確保も重要。夫のNISAサポートと並行して、主婦特有の金融戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="専業主婦の資産形成3大戦略"
        services={[
          {
            name: "専業主婦の新NISA",
            rank: 1,
            highlight: "自分名義で年360万円",
            features: [
              "所得なくてもNISA口座開設可",
              "配偶者の資金で積立OK（贈与扱い注意）",
              "運用益非課税",
              "離婚・死別時の自分の資産",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "パート＋iDeCo",
            rank: 2,
            highlight: "年27.6万円の所得控除",
            features: [
              "パート年収103〜150万でiDeCo加入",
              "月2.3万円×所得控除",
              "年7.2万円の節税効果",
              "60歳まで非課税運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "夫のNISA・iDeCoサポート",
            rank: 3,
            highlight: "世帯最大化",
            features: [
              "夫のNISA年360万円＋自分のNISA",
              "夫婦合計で年720万円の非課税枠",
              "iDeCo夫婦で年50万円超節税",
              "配偶者控除＋両取り",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">専業主婦が知るべきポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>配偶者控除（年収103万円以下）・配偶者特別控除（201万円以下）</li>
          <li>第3号被保険者（専業主婦の国民年金、夫厚生年金加入時は無料）</li>
          <li>年収130万円の壁（社会保険扶養の境界線）</li>
          <li>新NISAは所得関係なく加入可、自分の資産として重要</li>
          <li>離婚時の共有財産分割、婚姻期間中の夫婦資産は半分が分与対象</li>
          <li>遺族年金受給のため、夫の死亡時は重要な生活資金源</li>
        </ul>
      </section>
      <AffiliateCTA
        title="専業主婦の資産形成はSBI証券で｜自分名義のNISA口座"
        description="SBI証券は所得関係なく口座開設可、新NISA年360万円で自分の資産を非課税運用。夫婦合計年720万円の非課税枠で世帯資産最大化、離婚・死別リスクへの備えとしても重要な「自分名義の資産」構築。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👩"
        highlight="主婦でもOK"
      />
    </>
  ),
  "koumuin-ideco-special-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">公務員のiDeCo完全ガイド</h2>
        <p>
          公務員（国家公務員・地方公務員・私立学校教職員）のiDeCoは、民間企業より拠出上限が低い月1.2万円（年14.4万円）に設定されています。それでも共済年金（退職給付）との組合せで老後資金を強化できる重要な制度、退職金節税・運用コストの違い・金融機関選びを徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="公務員向けiDeCo金融機関比較"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "運営管理手数料0円",
            features: [
              "運営管理手数料永年無料",
              "投資信託40本以上",
              "セレクトプランで低コスト商品",
              "事務手続き楽（Web完結）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
            badge: "王道",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天ポイント連携",
            features: [
              "運営管理手数料無料",
              "楽天・オールカントリー等人気商品",
              "楽天経済圏ユーザー向け",
              "初心者向けUI",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "iFreeシリーズ豊富",
            features: [
              "運営管理手数料無料",
              "iFree NEXT FANG＋等ユニーク",
              "投資信託27本",
              "米国株志向のラインナップ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">公務員のiDeCo節税効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月1.2万円×12ヶ月＝年14.4万円全額所得控除</li>
          <li>年収600万円公務員：所得税＋住民税で年4〜5万円節税</li>
          <li>30年積立：元本432万円＋運用益で800万円超（年5%想定）</li>
          <li>60歳以降一括受取：退職所得控除で税負担大幅軽減</li>
          <li>共済年金（退職給付）＋iDeCoで老後資金の三層化</li>
          <li>民間企業（月2.3万円）より少ないが、確実に活用したい制度</li>
        </ul>
      </section>
      <AffiliateCTA
        title="公務員iDeCoはSBI証券で｜手数料0円＋低コスト商品"
        description="SBI証券のiDeCoは運営管理手数料0円、eMAXIS Slim全世界・米国S&P500等の低コスト商品完備。公務員の月1.2万円を年14.4万円で非課税運用、所得控除で年4〜5万円節税、30年で800万円超の資産形成。"
        buttonText="SBI証券iDeCoの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html"
        icon="🏛️"
        highlight="公務員必須"
      />
    </>
  ),
  "early-retirement-ideco-exit": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">早期退職時のiDeCo戦略</h2>
        <p>
          早期退職（40〜55歳）時のiDeCoは、60歳まで引き出し不可の原則が壁になります。ただし運用指図者としての継続、60〜75歳の受取タイミング最適化、退職所得控除との組合せで、FIRE達成者・早期退職者でも最大の税務メリットを得られる戦略があります。
        </p>
      </section>
      <ComparisonTableCTA
        title="早期退職後のiDeCo対応"
        services={[
          {
            name: "運用指図者として継続",
            rank: 1,
            highlight: "拠出停止＋運用継続",
            features: [
              "月66円の手数料のみ",
              "60歳まで運用継続",
              "積立停止しても運用益非課税",
              "最も現実的な選択肢",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
            badge: "王道",
          },
          {
            name: "iDeCo継続拠出（条件あり）",
            rank: 2,
            highlight: "フリーランスで月6.8万円",
            features: [
              "退職後フリーランスで拠出継続",
              "月6.8万円（年81.6万円）",
              "全額所得控除",
              "所得ある限り有効活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "脱退一時金（例外的）",
            rank: 3,
            highlight: "厳格な要件あり",
            features: [
              "加入期間5年以下",
              "資産額25万円以下",
              "障害給付金受給資格なし",
              "適用は極めて稀",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">受取タイミングの税務最適化</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>60〜75歳の間で受取開始（一括or年金）</li>
          <li>一括受取：退職所得控除（勤続年数×40万円・20年超は70万円）</li>
          <li>年金受取：公的年金等控除（65歳超は年110万円非課税）</li>
          <li>退職金とiDeCoの受取タイミング分散で控除枠最大化</li>
          <li>退職金を60歳で受取→iDeCoを70歳で受取で控除枠分離活用</li>
          <li>税理士との事前相談で数百万円の税金節約も可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="早期退職後のiDeCo戦略は税理士ドットコムで｜税務最適化"
        description="税理士ドットコムは早期退職・FIRE達成者の税務戦略に強い税理士を無料マッチング。iDeCo受取タイミング・退職金との組合せ・運用指図者としての継続まで総合アドバイス、生涯数百万円の税金節約を実現。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏃"
        highlight="無料マッチング"
      />
    </>
  ),
  "pet-investment-cost-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ペットの経済学完全ガイド</h2>
        <p>
          犬猫を飼う生涯コストは、平均200万円（犬）・160万円（猫）と家計への影響大。購入・エサ・ワクチン・医療費・ペットホテル・葬儀まで、15〜20年のトータルコストを理解し、飼い始め前の経済計画、ペット保険加入の判断、家計への組込み方を体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="犬猫の生涯コスト内訳"
        services={[
          {
            name: "犬（トイプードル・15年）",
            rank: 1,
            highlight: "生涯200万円",
            features: [
              "購入費30〜50万円",
              "エサ・トリミング月1.5万円",
              "医療費年5〜20万円",
              "葬儀5〜10万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "人気",
          },
          {
            name: "猫（スコティッシュ・16年）",
            rank: 2,
            highlight: "生涯160万円",
            features: [
              "購入費15〜30万円",
              "エサ・トイレ砂月8000円",
              "医療費年3〜15万円",
              "葬儀3〜8万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "ペット保険（推奨）",
            rank: 3,
            highlight: "月1500〜5000円",
            features: [
              "アニコム・アイペット・SBI",
              "入院・手術50〜90%補償",
              "高齢期の医療費対策",
              "生涯30〜80万円の支払"
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ペット飼育前の経済チェック</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月1.5〜2万円の固定費増加を許容できるか</li>
          <li>医療費（特にシニア期）の貯蓄50〜100万円の備え</li>
          <li>賃貸住宅のペット可物件は家賃+5000〜10000円</li>
          <li>旅行・出張時のペットホテル・シッター費用</li>
          <li>万一の引越し時のペット可物件確保</li>
          <li>家族全員の合意（15〜20年の長期コミットメント）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ペット保険の比較は保険マンモスで｜10社以上から無料提案"
        description="保険マンモスはアニコム・アイペット・SBIいきいき少短等のペット保険10社以上から無料比較。犬種・年齢・持病で保険料は大きく変わる、最適プランで生涯20〜50万円の医療費節約が可能。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🐕"
        highlight="無料FP相談"
      />
    </>
  ),
  "moving-cost-detail-saving": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">引越し費用完全ガイド</h2>
        <p>
          引越しは一度に10〜30万円の大きな出費、時期と業者選びで費用は2〜3倍変わります。単身2〜7万円・家族8〜25万円が目安、3〜4月の繁忙期は2倍、一括見積りサービスで30〜50%節約可能。住信SBI・楽天等の住宅ローン借換えと組合せた引越し戦略も有効です。
        </p>
      </section>
      <ComparisonTableCTA
        title="引越し料金の時期別比較"
        services={[
          {
            name: "通常期（5〜2月）",
            rank: 1,
            highlight: "最安の時期",
            features: [
              "単身2〜5万円",
              "家族6〜15万円",
              "業者選びやすい",
              "平日午後指定で更に割引",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "お得",
          },
          {
            name: "繁忙期（3〜4月）",
            rank: 2,
            highlight: "2倍の料金",
            features: [
              "単身5〜10万円",
              "家族15〜30万円",
              "業者確保困難",
              "3月下旬〜4月上旬がピーク",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "一括見積り（推奨）",
            rank: 3,
            highlight: "30〜50%節約",
            features: [
              "ズバット・LIFULL引越し",
              "10社以上から比較",
              "相見積もりで価格交渉",
              "見積り無料・オンライン完結",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">引越し費用節約の具体テクニック</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>一括見積りで相見積もり→最安値提示業者と価格交渉</li>
          <li>繁忙期（3〜4月）を避ける、5〜2月の通常期利用で半額に</li>
          <li>平日・午後便指定で10〜20%割引</li>
          <li>不用品処分（メルカリ・ジモティー）で荷物減＋売上獲得</li>
          <li>自分でダンボール・梱包資材を調達（業者依頼は割高）</li>
          <li>単身者はレンタカー＋自力引越しで1〜3万円可能</li>
          <li>住宅ローン借換えとセットで引越し費用貸付特典もあり</li>
        </ul>
      </section>
      <AffiliateCTA
        title="引越し一括見積りで最安値｜10社比較で30〜50%節約"
        description="引越し一括見積りサービスで10社以上を一度に比較、相見積もりで最安値を引き出せる。繁忙期でも業者確保可能、平均30〜50%の料金削減実績多数、申込3分の手軽さで数万円の節約を実現できる。"
        buttonText="一括見積りを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📦"
        highlight="無料見積り"
      />
    </>
  ),
  "pregnancy-money-care-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">妊娠・出産の経済ガイド</h2>
        <p>
          妊娠・出産にかかる費用は公的支援込みで実質負担10〜30万円。出産育児一時金50万円・出産手当金・育児休業給付金等の制度フル活用で、家計への負担を最小化できます。妊娠確認から育休復帰まで、1年間の家計プラン・手続きタイムライン・会社員と自営業の違いを徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="妊娠・出産の主要公的支援"
        services={[
          {
            name: "出産育児一時金",
            rank: 1,
            highlight: "50万円/子",
            features: [
              "健康保険から全員支給",
              "直接支払制度で病院に直接",
              "双子なら100万円",
              "出産費用（40〜60万円）をほぼカバー",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "必須",
          },
          {
            name: "出産手当金",
            rank: 2,
            highlight: "月給の2/3×98日",
            features: [
              "産前42日＋産後56日分",
              "会社員・共済組合員対象",
              "月給30万円なら約66万円",
              "自営業は非対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "育児休業給付金",
            rank: 3,
            highlight: "月給の67%×6ヶ月",
            features: [
              "雇用保険から支給",
              "6ヶ月経過後は50%",
              "最大2年間延長可",
              "両親育休で延長ボーナスあり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">家計への影響シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>妊娠中：妊婦健診14回分（自治体券でほぼ無料）</li>
          <li>出産費用：40〜60万円→出産育児一時金50万円でカバー</li>
          <li>産前産後休業：出産手当金月20万円×3.2ヶ月＝64万円</li>
          <li>育児休業：育児休業給付金月20万円×18ヶ月＝360万円</li>
          <li>ベビー用品：初期費用10〜30万円（メルカリ・お下がり活用で半額に）</li>
          <li>マタニティ・ベビー衣類：10万円</li>
          <li>実質負担：10〜30万円（公的支援制度フル活用時）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="妊娠・出産の保険は保険マンモスで｜医療保険見直し"
        description="保険マンモスは妊娠・出産前の医療保険見直しに最適。帝王切開（20%の妊婦が経験）は手術・入院扱いで保険給付対象、加入のタイミング重要。FPが無料で妊娠前・妊娠中の最適な保険プランを提案します。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="👶"
        highlight="無料FP相談"
      />
    </>
  ),
  "stock-option-rsu-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ストックオプション・RSU税制完全ガイド</h2>
        <p>
          スタートアップ・上場企業のストックオプション（SO）・RSU（Restricted Stock Unit）は、社員が会社株式で報酬を受け取る制度です。税制適格SO（優遇）vs 税制非適格SO（重税）の違い、RSUの給与所得扱い、3段階課税（付与・権利行使・売却）、確定申告ポイントまで、上場企業社員が知るべき税務知識を網羅的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="ストックオプション・RSUの3タイプ"
        services={[
          {
            name: "税制適格ストックオプション",
            rank: 1,
            highlight: "売却時のみ課税（優遇）",
            features: [
              "付与時・権利行使時は非課税",
              "売却時のみ申告分離20.315%",
              "年1200万円までの枠上限",
              "スタートアップの王道制度",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "最優遇",
          },
          {
            name: "税制非適格ストックオプション",
            rank: 2,
            highlight: "権利行使時給与所得（重税）",
            features: [
              "権利行使時の含み益が給与所得",
              "累進課税最大55%",
              "上場企業で一般的",
              "売却時は別途20.315%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "RSU（譲渡制限付株式）",
            rank: 3,
            highlight: "権利確定時給与所得",
            features: [
              "権利確定（Vest）時の時価が給与所得",
              "累進課税最大55%",
              "源泉徴収される場合多",
              "売却時は別途20.315%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">節税戦略のポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>税制非適格SO・RSUは権利行使・確定年に所得集中、年末調整・確定申告必須</li>
          <li>RSU売却時の税金：含み益は給与所得済み、売却益のみ追加課税（20.315%）</li>
          <li>損益通算：別銘柄・別口座の損失と相殺可能</li>
          <li>分散売却：同年内に複数回売却で税率最適化</li>
          <li>長期保有→低税率で売却、タイミング戦略</li>
          <li>確定申告漏れに注意、税務調査対象になりやすい分野</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ストックオプション税務は税理士ドットコムで｜専門家無料相談"
        description="税理士ドットコムはストックオプション・RSU税制に精通した税理士を無料マッチング。外資系・日本スタートアップ・上場企業別の最適戦略、確定申告書類作成、税務調査対策まで、数百万円の節税実績多数。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💎"
        highlight="無料マッチング"
      />
    </>
  ),
  "us-etf-advanced-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国ETF上級戦略完全ガイド</h2>
        <p>
          米国ETFを使い分けることで、長期リターンと安定性を同時に追求できます。VTI（全米）・VOO（S&P500）・VIG（連続増配）・VYM（高配当）・SCHD（高配当成長）のそれぞれの特性を理解し、年齢・ライフステージ・リスク許容度に応じた最適配分を構築する上級者向け戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要米国ETFの特性比較"
        services={[
          {
            name: "VTI（バンガード全米株式）",
            rank: 1,
            highlight: "約4000銘柄に分散",
            features: [
              "信託報酬0.03%",
              "全米株式時価総額加重",
              "大型株80%＋中小型株20%",
              "万能型・コア資産向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "VOO（S&P500）",
            rank: 2,
            highlight: "米国大型株500銘柄",
            features: [
              "信託報酬0.03%",
              "米国大型株特化",
              "過去100年年平均10%",
              "ウォーレン・バフェット推奨",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SCHD（高配当成長）",
            rank: 3,
            highlight: "連続配当＋資本成長",
            features: [
              "信託報酬0.06%",
              "配当利回り3〜4%",
              "連続増配企業100銘柄",
              "FIRE・退職後の収入源",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢別最適配分例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>20〜30代：VTI 80%＋QQQ 20%（成長重視）</li>
          <li>30〜40代：VTI 60%＋VOO 20%＋SCHD 20%（バランス）</li>
          <li>40〜50代：VOO 50%＋SCHD 30%＋BND 20%（安定性重視）</li>
          <li>50〜60代：SCHD 40%＋VOO 30%＋BND 30%（配当収入重視）</li>
          <li>60代以降：SCHD 50%＋BND 40%＋VOO 10%（取崩し期）</li>
          <li>レバレッジETF（SOXL・TQQQ）は個別口座でサテライト5%以内</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国ETF運用はSBI証券で｜買付手数料無料＋為替無料"
        description="SBI証券はVTI・VOO・VIG・VYM・SCHD等の米国ETF買付手数料無料＋住信SBI連携で為替手数料無料。新NISA成長枠で非課税運用、年0.1%以下の圧倒的低コストで上級者向け戦略を実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇺🇸"
        highlight="業界No.1"
      />
    </>
  ),
  "medical-expense-practical-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医療費控除の実践的活用ガイド</h2>
        <p>
          医療費控除は、年10万円超の医療費を所得から控除できる制度で、確定申告するだけで数万円の還付が受けられる強力な節税手段です。通院交通費・治療目的医薬品も対象、家族全員合算可能、セルフメディケーション税制との選択も含めた実践活用法を、e-Tax手続きも含めて網羅的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="医療費控除の2タイプ比較"
        services={[
          {
            name: "医療費控除（通常）",
            rank: 1,
            highlight: "年10万円超で適用",
            features: [
              "年間医療費-10万円（総所得5%の低い方）",
              "最大200万円控除",
              "家族全員合算可能",
              "通院交通費・処方薬も対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "セルフメディケーション税制",
            rank: 2,
            highlight: "年1.2万円超で適用",
            features: [
              "スイッチOTC医薬品購入額-1.2万円",
              "最大8.8万円控除",
              "健診・予防接種受診者のみ",
              "通常医療費控除との選択制",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "高額療養費制度",
            rank: 3,
            highlight: "月の医療費上限",
            features: [
              "月自己負担上限（年収により）",
              "年収370〜770万なら月8〜17万円上限",
              "医療費控除と併用可",
              "事前申請で病院窓口負担軽減",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">対象となる医療費の範囲</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>医師・歯科医師による診療・治療費（保険適用＋自由診療）</li>
          <li>治療目的の医薬品購入費（市販薬含む）</li>
          <li>通院交通費（電車・バス・タクシー※やむを得ない場合）</li>
          <li>妊娠中・出産時の費用（定期検診・出産費用）</li>
          <li>入院時の食事代・付き添い家族の交通費</li>
          <li>歯科矯正（美容目的以外）、インプラント、レーシック</li>
          <li>介護保険サービス自己負担分</li>
          <li>対象外：美容整形、健康診断（治療につながらない）、サプリメント</li>
        </ul>
      </section>
      <AffiliateCTA
        title="医療費控除の申請は税理士ドットコムで｜無料相談で還付最大化"
        description="税理士ドットコムは医療費控除・高額療養費制度の実践活用に強い税理士を無料マッチング。過去5年分の医療費を遡って申告可能、家族全員の医療費集計＋最適な申告形態選択で、年10〜30万円の還付実現。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏥"
        highlight="無料マッチング"
      />
    </>
  ),
  "kaigo-work-balance-support": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護と仕事の両立支援完全ガイド</h2>
        <p>
          親の介護で介護離職すると生涯経済損失1億円超。法定の介護休業（通算93日）・介護休暇（年5日）・介護給付金（月給の67%）・短時間勤務・在宅勤務制度を徹底活用し、仕事を継続しながら介護を乗り切るための公的支援・会社制度・民間サービスを網羅的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="介護両立支援制度の全容"
        services={[
          {
            name: "介護休業（法定）",
            rank: 1,
            highlight: "通算93日・給付金67%",
            features: [
              "対象家族1人につき3回まで分割",
              "介護休業給付金月給の67%",
              "就業規則で確認",
              "社会保険料免除",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須活用",
          },
          {
            name: "介護休暇（年5〜10日）",
            rank: 2,
            highlight: "日・時間単位で取得",
            features: [
              "年5日（対象1人）・年10日（2人以上）",
              "1日または半日・時間単位",
              "無給が多いが有給の会社も",
              "通院付添・手続き時に活用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "短時間勤務・在宅勤務",
            rank: 3,
            highlight: "柔軟な働き方",
            features: [
              "介護のための短時間勤務",
              "フレックスタイム・時差出勤",
              "在宅勤務の活用",
              "会社規定による",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">介護離職回避の実践戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>要介護認定の早期申請（市区町村窓口で無料）</li>
          <li>ケアマネと連携してケアプラン作成</li>
          <li>介護休業93日で介護体制整備に集中</li>
          <li>デイサービス・ショートステイ・訪問介護の最大活用</li>
          <li>きょうだい間で介護分担（公正証書で明確化）</li>
          <li>在宅勤務・時短勤務制度の利用</li>
          <li>親の資産活用（年金・預貯金・生命保険）</li>
          <li>施設入居検討（特養5〜15万円、有料老人ホーム15〜30万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護費用の資金計画は保険マンモスで｜FP無料相談"
        description="保険マンモスは介護資金計画・介護特約付き生命保険の無料相談。親の介護費用シミュレーション＋自分の将来介護への備えを総合的にコンサル、年10〜30万円の保険料節約＋介護離職回避の最適プラン設計。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🤝"
        highlight="無料FP相談"
      />
    </>
  ),
  "fuyo-koujo-optimization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">扶養控除最適化完全ガイド</h2>
        <p>
          扶養控除の賢い使い方で、世帯年収200〜500万円UPの効果を実現できます。配偶者控除（年収103・150万円の壁）、16歳以上の子の扶養控除（38万円）、親の扶養控除（同居58万円・別居48万円）、複数扶養の組合せ、誰の扶養に入れるかの戦略で、年20万円以上の世帯節税が可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要扶養控除の種類"
        services={[
          {
            name: "配偶者控除・特別控除",
            rank: 1,
            highlight: "年38〜48万円",
            features: [
              "年収103万円：配偶者控除38万円",
              "年収150万円：特別控除38万円",
              "年収201万円：特別控除終了",
              "年約7〜11万円節税",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "定番",
          },
          {
            name: "扶養控除（16歳以上の子）",
            rank: 2,
            highlight: "年38〜63万円",
            features: [
              "16〜18歳：38万円",
              "19〜22歳（特定扶養）：63万円",
              "大学生は年12万円節税可能",
              "所得税＋住民税ダブル効果",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "扶養控除（親・親族）",
            rank: 3,
            highlight: "年48〜58万円",
            features: [
              "70歳以上同居老親：58万円",
              "別居の親：48万円",
              "仕送り要件で別居も対象",
              "複数兄弟で分担可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">扶養最適化の上級テクニック</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>夫婦のうち高収入側に扶養を集中（累進税率で節税効果最大化）</li>
          <li>大学生の子は特定扶養控除63万円をフル活用（年12〜18万円節税）</li>
          <li>親の扶養：年金収入158万円以下なら扶養に入れる</li>
          <li>別居の親：仕送り年60〜100万円で扶養に入れる</li>
          <li>共働き夫婦：どちらに子の扶養を入れるかシミュレーション必須</li>
          <li>兄弟で親の扶養を交代（数年ごとに入替で税負担分散）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="扶養控除の最適化は税理士ドットコムで｜世帯全体の節税"
        description="税理士ドットコムは世帯全員の扶養控除最適化に強い税理士を無料マッチング。共働き夫婦・複数子世帯・親の扶養・兄弟分担まで総合的にシミュレーション、年20〜50万円の世帯節税効果を実現。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="👨‍👩‍👧‍👦"
        highlight="無料マッチング"
      />
    </>
  ),
  "business-card-2026-detail-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード詳細比較2026</h2>
        <p>
          2026年のビジネスカード（法人カード）は、個人事業主・法人経営者にとって必須の経費管理・資金繰りツール。還元率・年会費・付帯特典・審査難易度等、10社以上の主要カードを徹底比較。個人事業主の経費管理＋ポイント還元で年間5〜30万円のメリットが得られる最強の組合せを提案します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要ビジネスカード比較"
        services={[
          {
            name: "三井住友カードビジネスオーナーズ",
            rank: 1,
            highlight: "年会費無料＋還元0.5〜1%",
            features: [
              "年会費永年無料",
              "還元率0.5%（対象店舗最大1.5%）",
              "法人向け特典豊富",
              "個人事業主も申込可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "初心者向け",
          },
          {
            name: "freeeカード Unlimited",
            rank: 2,
            highlight: "freee会計統合・審査甘め",
            features: [
              "年会費無料",
              "freee会計と自動連携",
              "freee特約店で還元率UP",
              "設立1年以内も申込可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "アメックスビジネスゴールド",
            rank: 3,
            highlight: "年会費3.4万円・高付帯",
            features: [
              "年会費36,300円",
              "還元率0.4〜1%（メンバーシップ・リワード）",
              "海外旅行保険最大1億円",
              "ラウンジ・コンシェルジュ",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード活用のコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>経費支払いを全てカードに集約＝freee・マネフォで自動仕訳</li>
          <li>年会費無料カードから始める、業績安定してゴールド昇格</li>
          <li>追加カード発行で従業員管理＋経費把握（社長・役員用）</li>
          <li>会計ソフト連携で記帳時間を月10〜20時間削減</li>
          <li>高年会費カードは年商3000万円超なら元取れる可能性大</li>
          <li>出張の多い業種はラウンジ・旅行保険付帯のアメックス系有利</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ビジネスカードは三井住友BOで｜年会費無料＋SBI証券連携"
        description="三井住友ビジネスオーナーズは年会費永年無料、SBI証券のクレカ積立も1%還元。個人事業主・法人経営者の経費管理＋freee会計連携で月10時間の記帳時間削減、年間5〜15万円のポイント獲得も実現。"
        buttonText="ビジネスカード詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💼"
        highlight="年会費無料"
      />
    </>
  ),
  "furusato-nisa-combo-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ふるさと納税×新NISA連携戦略</h2>
        <p>
          ふるさと納税（節税）と新NISA（資産形成）を組み合わせると、年100万円以上の家計効果を生み出せます。年収500万円なら、ふるさと納税77,000円で返礼品23,000円相当＋楽天ポイント12,000円、さらに新NISA満額活用で将来資産数千万円の二刀流戦略。節税と資産形成の最強の組合せを徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="連携戦略の3パターン"
        services={[
          {
            name: "楽天経済圏統合型",
            rank: 1,
            highlight: "楽天ふるさと納税＋楽天証券",
            features: [
              "楽天ふるさと納税SPU最大16倍",
              "楽天証券NISA年360万円",
              "楽天カード積立1%還元",
              "ポイント最大化戦略",
            ],
            href: "https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/",
            badge: "王道",
          },
          {
            name: "SBI経済圏統合型",
            rank: 2,
            highlight: "ふるなび＋SBI証券",
            features: [
              "ふるなびAmazonギフト還元",
              "SBI証券NISA＋三井住友NL積立",
              "投信保有残高ポイント",
              "低コスト運用重視",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "さとふる＋PayPay経済圏",
            rank: 3,
            highlight: "PayPayポイント最大化",
            features: [
              "さとふるでPayPay還元",
              "PayPay証券で米国株投資",
              "ワンストップ特例アプリ",
              "スマホ完結型",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">実践の年間スケジュール</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1月：前年のふるさと納税確定申告、NISA積立再開</li>
          <li>3月：年収予想計算、ふるさと納税限度額算出</li>
          <li>6月：夏のボーナスでNISA成長枠買付</li>
          <li>9月：秋の返礼品（米・食品）寄付</li>
          <li>11月：年末セール＋楽天お買い物マラソンでふるさと納税集中</li>
          <li>12月：年末ぎりぎりまでふるさと納税、NISA枠残確認</li>
          <li>翌年1月：ワンストップ特例or確定申告</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏フル活用で｜楽天ふるさと納税＋楽天証券NISA"
        description="楽天ふるさと納税はSPU最大16倍でポイント還元、楽天証券NISAはクレカ積立1%還元。年収500万円なら、ふるさと納税77,000円＋返礼品23,000円＋楽天ポイント12,000円＋NISA年120万円で年間100万円以上の家計メリット実現。"
        buttonText="楽天ふるさと納税を見る"
        href="https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/"
        icon="🎯"
        highlight="ポイント最強"
      />
    </>
  ),
  "international-school-cost-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">インターナショナルスクール費用完全ガイド</h2>
        <p>
          インターナショナルスクール（インター）は、日本に住みながら英語環境で教育を受けられる選択肢。年間授業料200〜400万円の高額投資だが、グローバル人材育成・海外大学進学の準備として注目されています。幼稚園〜高校までの総費用3000〜5000万円、公立教育との比較、節税対策、奨学金制度まで網羅的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要インターナショナルスクールの費用"
        services={[
          {
            name: "アメリカンスクール・イン・ジャパン（ASIJ）",
            rank: 1,
            highlight: "年350〜400万円",
            features: [
              "東京調布市、創立1902年",
              "幼稚園年365万・高校年400万",
              "入学金160万円",
              "米国認定校",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "名門",
          },
          {
            name: "西町インターナショナルスクール",
            rank: 2,
            highlight: "年280〜350万円",
            features: [
              "東京港区、創立1949年",
              "幼稚園〜9年生",
              "入学金150万円",
              "小規模で面倒見良い",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "国際バカロレア認定校",
            rank: 3,
            highlight: "年200〜350万円",
            features: [
              "カナディアンインター（千葉・東京）",
              "ハロウインターナショナル（安曇野）",
              "IB認定で海外大学進学有利",
              "文科省認可で卒業資格取得可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">公立＋インター比較の総費用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>公立（幼〜高校）：約1000万円 vs インター：3000〜5000万円</li>
          <li>差額2000〜4000万円は大学進学費用にも匹敵</li>
          <li>メリット：ネイティブレベルの英語、海外大学進学有利、国際的な交友関係</li>
          <li>デメリット：日本の大学受験に不利、日本文化理解薄め</li>
          <li>ハイブリッド：幼・小はインター→中高は日本校、柔軟に選択可</li>
        </ul>
      </section>
      <AffiliateCTA
        title="教育費の資産形成はSBI証券で｜新NISAで18年で1260万円"
        description="SBI証券の新NISA積立月5万円×18年で約2000万円（年7%想定）の教育資金準備可能。インターナショナルスクール費用の一部カバーに、クレカ積立1%還元も活用、早期からのコツコツ積立が鉄則です。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌍"
        highlight="教育資金"
      />
    </>
  ),
  "nisa-rollover-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">NISA移管戦略完全ガイド</h2>
        <p>
          NISA口座は年1回のみ金融機関変更可能。メガバンク系から低コストネット証券（SBI・楽天・マネックス）への移管で、クレカ積立1%還元・買付手数料無料・投資信託ラインナップ豊富等の大きなメリットを享受できます。旧NISA（つみたてNISA・一般NISA）の新NISAへの移管、手続きタイミング等を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="NISA金融機関変更の3大メリット"
        services={[
          {
            name: "SBI証券への移管",
            rank: 1,
            highlight: "投信2,500本・クレカ積立",
            features: [
              "三井住友NL積立で1%還元",
              "投信・米国ETF最多水準",
              "為替手数料無料（住信SBI連携）",
              "業界最強の総合力",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "楽天証券への移管",
            rank: 2,
            highlight: "楽天ポイント連携",
            features: [
              "楽天カード積立1%還元",
              "楽天SPU+0.5〜1倍",
              "楽天経済圏統合",
              "投信・米国ETF豊富",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "マネックス証券への移管",
            rank: 3,
            highlight: "マネックスカード1.1%",
            features: [
              "クレカ積立1.1%（業界最高）",
              "iFreeシリーズ豊富",
              "米国株情報量トップクラス",
              "dポイント連携（docomo経済圏）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">移管手続きのタイミング</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>変更時期：年1回のみ、前年10月〜当年9月の間に手続き</li>
          <li>10月以降の手続きは翌年1月から新金融機関で開始</li>
          <li>既存の保有商品は旧金融機関に残る、新規買付のみ新金融機関で</li>
          <li>年内に新NISA買付していない場合は、当年から変更可能</li>
          <li>手続き書類：勘定廃止通知書、新金融機関のNISA口座申込書</li>
          <li>郵送で2〜4週間、電子手続き対応の金融機関は1〜2週間</li>
        </ul>
      </section>
      <AffiliateCTA
        title="NISA口座はSBI証券へ移管｜年1回の無料手続きで最強運用"
        description="SBI証券のNISA口座は、投信・米国ETF・日本株の業界最多ラインナップ、三井住友NLクレカ積立1%、為替無料（住信SBI）の三拍子。メガバンク系からの移管で、年数千〜数万円のコスト削減＋還元ポイント獲得が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔄"
        highlight="業界No.1"
      />
    </>
  ),
  "single-retirement-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">独身の老後設計完全ガイド</h2>
        <p>
          独身者の老後は「経済面」と「孤独死対策」の二本柱で設計が必要。必要老後資金3000万円、公的年金月13万円、介護費用1000万円の準備、孤独死対策（生命保険・見守りサービス・任意後見）、相続の扱いまで、独身者特有の課題を網羅的に解説します。生涯独身率上昇中の2026年、必須の知識です。
        </p>
      </section>
      <ComparisonTableCTA
        title="独身者の老後3本柱"
        services={[
          {
            name: "老後資金3000万円",
            rank: 1,
            highlight: "NISA＋iDeCo併用",
            features: [
              "新NISA月5〜10万円積立",
              "iDeCo月2.3万円（会社員）",
              "30年で3,000〜5,000万円",
              "年金月13万+運用資産で安心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "必須",
          },
          {
            name: "孤独死・見守り対策",
            rank: 2,
            highlight: "月3,000〜10,000円",
            features: [
              "セコム・ALSOK見守り（月3,000〜5,000円）",
              "緊急通報システム",
              "定期安否確認サービス",
              "任意後見契約（元気なうちに）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "生命保険・相続準備",
            rank: 3,
            highlight: "相続人・遺言書の準備",
            features: [
              "生命保険受取人指定",
              "遺言書作成（公正証書10万円〜）",
              "家族信託の活用",
              "終活サービス契約",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">独身老後の支出シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>老後生活費：月20〜25万円（家賃含む場合）</li>
          <li>公的年金：国民年金月6.8万円＋厚生年金月8〜15万円＝計15〜22万円</li>
          <li>不足分：月3〜5万円×20年（65〜85歳）＝700〜1200万円</li>
          <li>介護費用：月10〜30万円×5〜10年＝600〜3600万円</li>
          <li>葬儀・墓代：300〜500万円</li>
          <li>目標老後資金：3000万円（介護期間考慮なら5000万円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="独身老後の備えは保険マンモスで｜終身保険＋介護保険の設計"
        description="保険マンモスは独身者の老後設計に強いFPが無料相談。終身保険（相続税対策＋葬儀費用）、介護保険（月10〜30万円の介護費カバー）、任意後見契約の専門家紹介まで、独身者の全リスクに備える総合提案可能。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🧑"
        highlight="無料FP相談"
      />
    </>
  ),
  "business-succession-ma-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">事業承継・M&A完全ガイド</h2>
        <p>
          中小企業経営者の事業承継は、親族承継・従業員承継・M&A（第三者譲渡）の3パターンがあります。2026年の事業承継税制（納税猶予・免除）、M&A仲介会社（日本M&Aセンター・M&Aキャピタルパートナーズ等）の活用、事業価値評価、譲渡益の税務まで、経営者のイグジット戦略として必読の内容を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="事業承継の3大パターン"
        services={[
          {
            name: "親族承継",
            rank: 1,
            highlight: "事業承継税制活用で納税猶予",
            features: [
              "子・親族への承継",
              "特例事業承継税制で相続・贈与税100%猶予",
              "特例承認計画の提出必須",
              "5〜10年継続で全額免除",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "税制優遇",
          },
          {
            name: "従業員承継（EBO・MBO）",
            rank: 2,
            highlight: "社内人材への承継",
            features: [
              "役員・従業員への株式譲渡",
              "経営者個人の株式を分割売却",
              "融資＋自己資金で買取",
              "3〜5年かけた段階承継",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "M&A（第三者譲渡）",
            rank: 3,
            highlight: "日本M&Aセンター等仲介",
            features: [
              "売却益を一括現金化",
              "仲介手数料3〜10%（売上規模で）",
              "事業シナジー＋プレミアム評価",
              "2〜6ヶ月の手続き期間",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">M&Aの売却価格シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>一般的な評価：純資産＋営業利益×3〜5年分</li>
          <li>売上1億円・営業利益1000万円：売却価格3,000〜5,000万円</li>
          <li>売上5億円・営業利益5000万円：売却価格1.5〜3億円</li>
          <li>売上10億円・営業利益1億円：売却価格3〜5億円</li>
          <li>高プレミアム業種：SaaS・医療・福祉・インフラ（5〜10倍評価）</li>
          <li>低プレミアム業種：小売・飲食（2〜3倍評価）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="事業承継・M&Aは税理士ドットコムで｜専門家無料相談"
        description="税理士ドットコムは事業承継税制・M&A税務に強い税理士を無料マッチング。親族承継の相続・贈与税対策、M&A売却益の税務最適化、事業承継計画の策定まで、経営者の生涯財産を守る総合サポートを提供。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏢"
        highlight="無料マッチング"
      />
    </>
  ),
  "real-estate-loan-advanced-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産投資用融資完全ガイド</h2>
        <p>
          不動産投資用融資は、住宅ローンと異なる審査基準（物件の収益性＋個人の属性）で判断されます。三井住友トラストL&F・オリックス銀行等のアパートローン、日本政策金融公庫、プロパー融資（地銀・信金）の使い分け、金利2〜5%、融資期間15〜35年、頭金2〜3割の準備、年収700万円以上の属性要件まで解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="不動産投資用融資の3大選択肢"
        services={[
          {
            name: "アパートローン（ノンバンク系）",
            rank: 1,
            highlight: "金利2.5〜4.5%",
            features: [
              "三井住友トラストL&F",
              "オリックス銀行",
              "融資期間25〜35年",
              "融資額物件価格の80〜90%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "日本政策金融公庫",
            rank: 2,
            highlight: "金利1.5〜3%・公的資金",
            features: [
              "創業初期・新規参入向き",
              "融資期間10〜20年",
              "融資額最大7,200万円",
              "女性・若者・シニア優遇",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "プロパー融資（地銀・信金）",
            rank: 3,
            highlight: "物件評価次第で有利条件",
            features: [
              "金利1.5〜3.5%",
              "融資期間15〜30年",
              "物件・エリアの詳細審査",
              "取引実績で条件改善",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">融資審査の属性要件</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収要件：700万円以上（アパートローン）、500万円以上（公庫）</li>
          <li>勤続年数：3年以上（会社員）、1年以上（自営業）</li>
          <li>自己資金：物件価格の20〜30%＋諸費用100〜200万円</li>
          <li>借入比率（DTI）：年間返済額÷年収 35%以内</li>
          <li>物件の利回り：表面利回り8%以上、実質利回り5%以上が目安</li>
          <li>他借入（住宅ローン・カーローン）を加味して判断</li>
        </ul>
      </section>
      <AffiliateCTA
        title="不動産投資の相談は家づくり相談所で｜融資シミュレーション"
        description="家づくり相談所は不動産投資向け融資シミュレーション＋物件選定＋税務対策までワンストップサポート。アパートローン・日本政策金融公庫の最適な選択、年収別の借入可能額計算で、失敗しない不動産投資を実現。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏢"
        highlight="無料相談"
      />
    </>
  ),
  "mama-papa-remote-work-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ママ・パパの在宅副業完全ガイド</h2>
        <p>
          育児中でも子育ての空き時間（1日2〜4時間）で月5〜15万円稼ぐママ・パパが増加中。ライティング・動画編集・オンライン秘書・Web制作・ポイ活・アフィリエイト等、場所と時間に縛られない在宅副業の具体的な始め方、扶養範囲内の働き方、確定申告まで、子育て世帯の家計改善を徹底サポートします。
        </p>
      </section>
      <ComparisonTableCTA
        title="育児中に最適な副業TOP3"
        services={[
          {
            name: "ライティング（クラウドワークス）",
            rank: 1,
            highlight: "文字単価0.5〜3円",
            features: [
              "スキマ時間で記事執筆",
              "月5〜15万円（月20〜50記事）",
              "子どもの昼寝中に作業",
              "実績積めば単価UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "初心者向け",
          },
          {
            name: "オンライン秘書・アシスタント",
            rank: 2,
            highlight: "時給1500〜3000円",
            features: [
              "スケジュール管理・資料作成",
              "週10〜20時間で月7〜15万",
              "事務職経験活かせる",
              "リモート完結",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "ポイ活＋アフィリエイト",
            rank: 3,
            highlight: "月3〜10万円",
            features: [
              "ハピタス・モッピー活用",
              "ブログ・SNS経由のアフィリエイト",
              "初期投資ほぼゼロ",
              "育児情報発信で信頼構築",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">扶養範囲内の賢い働き方</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>扶養103万円：配偶者控除満額、所得税ゼロ</li>
          <li>扶養130万円：社会保険扶養維持</li>
          <li>扶養150万円：配偶者特別控除満額</li>
          <li>年収200万円超：扶養外れ自分で社保加入、世帯収入UP</li>
          <li>副業月5〜10万円なら扶養内、月15万円なら扶養外検討</li>
          <li>確定申告：年20万円超で必須、青色申告65万円控除も活用可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="在宅副業の始まりはココナラで｜スキル出品＋案件獲得"
        description="ココナラは15万人超のママ・パパが利用、スキル出品（ライティング・デザイン・育児相談等）500円〜で販売開始。スキマ時間で月5〜15万円の副業収入を得られる最強プラットフォーム、育児中の女性にも人気です。"
        buttonText="ココナラに登録する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="👨‍👩‍👧"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "annuity-insurance-compare-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年金保険比較2026</h2>
        <p>
          2026年の個人年金保険は、定額型（元本保証・利回り0.3〜0.5%）・変額型（運用リターン3〜7%）・外貨建て（米ドル3〜5%）の3タイプがあります。ソニー生命・明治安田・住友生命・JAライフプランナーの主要4社を比較、新NISA・iDeCoとの併用戦略、税制適格特約による所得控除活用で、老後資金形成の最適解を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要4社の個人年金保険比較"
        services={[
          {
            name: "ソニー生命（変額個人年金）",
            rank: 1,
            highlight: "運用実績年5〜7%",
            features: [
              "投資信託で運用",
              "月1万円〜積立可能",
              "特別勘定10種類以上",
              "税制適格特約で所得控除",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "成長重視",
          },
          {
            name: "明治安田（米ドル建て個人年金）",
            rank: 2,
            highlight: "利回り年3〜5%（ドル）",
            features: [
              "予定利率高い",
              "10年確定年金or終身年金",
              "為替リスクあり",
              "外貨資産形成併用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "住友生命（定額個人年金）",
            rank: 3,
            highlight: "元本保証・安定型",
            features: [
              "予定利率0.3〜0.5%",
              "元本割れリスクゼロ",
              "保守派向け",
              "税制適格特約対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">NISA・iDeCoとの組合せ戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新NISA：月5〜10万円（最大限運用、インデックス投資）</li>
          <li>iDeCo：月1〜2.3万円（所得控除＋運用益非課税）</li>
          <li>個人年金保険：月5,000円（年4万円控除枠のみフル活用）</li>
          <li>年収600万なら、年60万円の投資＋年6万円の節税効果</li>
          <li>30年運用で3,000〜5,000万円の老後資金構築可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="個人年金保険の選び方は保険マンモスで｜FP無料相談"
        description="保険マンモスはソニー生命・明治安田・住友生命・JA等の個人年金保険を全社比較。定額・変額・外貨建ての違い、新NISA・iDeCoとの最適組合せ、税制適格特約の活用で、老後資金3,000万円構築プランを無料設計。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="👵"
        highlight="無料FP相談"
      />
    </>
  ),
  "health-checkup-kenshin-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">健康診断・人間ドック完全ガイド</h2>
        <p>
          健康診断は、会社員の定期健診（無料）から、自費の人間ドック（3〜10万円）まで幅広い選択肢。協会けんぽの一般健診（自己負担5,000円程度）・自治体補助（5,000〜20,000円）・医療費控除対象（10万円超）等を活用すれば、高額な検査も実質負担を大幅軽減できます。年1回の健康投資で将来の医療費を削減する戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="健康診断の3大選択肢"
        services={[
          {
            name: "会社・協会けんぽ健診",
            rank: 1,
            highlight: "自己負担0〜5,000円",
            features: [
              "会社の定期健診は無料",
              "協会けんぽ一般健診5,000円程度",
              "生活習慣病予防健診で心電図・胃がん検診追加",
              "基本的な検査は網羅",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "定番",
          },
          {
            name: "人間ドック（一般）",
            rank: 2,
            highlight: "3〜10万円・詳細検査",
            features: [
              "MRI・CT・内視鏡等の詳細検査",
              "自治体補助5,000〜20,000円",
              "医療費控除対象（10万円超）",
              "年1回受診推奨",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "PET・脳ドック等特殊ドック",
            rank: 3,
            highlight: "10〜30万円",
            features: [
              "PET-CT（がん検診）10〜15万円",
              "脳ドック（MRI・MRA）5〜8万円",
              "心臓ドック（冠動脈CT）10〜15万円",
              "40〜50代から検討推奨",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢別の推奨検査</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>30代：基本健診（血液・尿・心電図・レントゲン）、女性は乳がん・子宮頸がん検診</li>
          <li>40代：+ 胃・大腸・肺がん検診、脂質・糖尿病チェック</li>
          <li>50代：+ PET-CT（がん全身検査）、脳ドック、前立腺がん検査（男性）</li>
          <li>60代以降：骨密度測定、認知機能検査、心臓ドック</li>
          <li>家族歴がある人：30代から該当部位の精密検査</li>
        </ul>
      </section>
      <AffiliateCTA
        title="医療保険の見直しは保険マンモスで｜健診結果連動プラン"
        description="保険マンモスは健診結果に基づいた医療保険の最適提案が可能。人間ドックで異常値が出た場合の加入制限前に、FPが無料相談で最適プラン設計。40代・50代のがん保険・三大疾病保険の加入タイミングもアドバイス。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🏥"
        highlight="無料FP相談"
      />
    </>
  ),
  "sharehouse-cost-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">シェアハウス完全ガイド</h2>
        <p>
          シェアハウスは、家賃3〜10万円・初期費用3〜10万円・光熱費/Wi-Fi込みで、通常賃貸（初期費用20〜30万円）より圧倒的に安く住める選択肢。オークハウス・ひつじ不動産・ソーシャルアパートメント・LABHOTEL等の大手を中心に、東京・大阪・福岡の都市部で急増中。若手社会人・転勤族・上京者の生活コスト削減策として解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要シェアハウス運営会社"
        services={[
          {
            name: "オークハウス",
            rank: 1,
            highlight: "物件数業界最大",
            features: [
              "東京・関東200物件超",
              "家賃3万円台〜",
              "初期費用4万円台〜",
              "国際交流・英語環境",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "ひつじ不動産",
            rank: 2,
            highlight: "デザイン性重視",
            features: [
              "東京中心100物件超",
              "家賃5〜15万円",
              "ハイグレード物件多",
              "デザイナーズシェアハウス",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "ソーシャルアパートメント",
            rank: 3,
            highlight: "個室＋共用ラウンジ",
            features: [
              "個室重視・プライバシー確保",
              "家賃7〜15万円",
              "ジム・スタジオ・BBQ施設",
              "高所得層・クリエイター向き",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">シェアハウスのメリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>メリット①：初期費用が安い（敷金礼金なし）、即入居可能</li>
          <li>メリット②：家賃＋光熱費＋Wi-Fiで月3〜10万円</li>
          <li>メリット③：家具・家電付きで引越し楽</li>
          <li>メリット④：国際交流・人脈形成</li>
          <li>デメリット①：プライバシー限定（個室＋共用）</li>
          <li>デメリット②：ルームメイトとの相性リスク</li>
          <li>デメリット③：独自ルール（深夜の利用制限等）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="シェアハウス探しは家づくり相談所で｜住宅全般の相談"
        description="家づくり相談所はシェアハウス・賃貸・マイホームを含む住まい全般の無料相談。月3〜10万円のシェアハウスから、将来のマイホーム購入まで、ライフステージに合わせた住まい選びのロードマップを提案。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏘️"
        highlight="無料相談"
      />
    </>
  ),
  "investment-diversify-global-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">グローバル分散投資完全ガイド</h2>
        <p>
          グローバル分散投資は、通貨・資産・地域の3軸でリスク分散する上級戦略。円資産だけでなくドル・ユーロ資産、株式だけでなく債券・不動産・金、日本だけでなく米欧新興国への分散で、どんな経済局面でも安定的なリターンを目指します。新NISA成長枠でのETF活用を中心に、実践的な配分例を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="3軸分散投資の実装例"
        services={[
          {
            name: "通貨分散（3通貨）",
            rank: 1,
            highlight: "円40%・ドル40%・ユーロ20%",
            features: [
              "日本円（生活防衛＋日本株）",
              "米ドル（VTI・VOO等）",
              "ユーロ（VGK等）",
              "為替変動リスク軽減",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "必須",
          },
          {
            name: "資産分散（4資産）",
            rank: 2,
            highlight: "株50%・債券30%・REIT10%・金10%",
            features: [
              "株式（VTI・eMAXIS全世界）",
              "債券（BND・TLT）",
              "不動産（VNQ・J-REIT）",
              "金（GLD・純金積立）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "地域分散（4地域）",
            rank: 3,
            highlight: "日10%・米60%・欧15%・新興国15%",
            features: [
              "日本株（TOPIX ETF）",
              "米国株（VTI・VOO）",
              "欧州株（VGK・HEDJ）",
              "新興国株（VWO）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">分散投資のリターン期待値</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>通貨分散：為替リスク軽減で年0.5〜1%のリターン安定化</li>
          <li>資産分散：株式単独より最大下落30%→15%に軽減</li>
          <li>地域分散：日本一国集中より年リターン+1〜2%</li>
          <li>全分散組合せ：年5〜7%のリターン＋最大下落10〜15%</li>
          <li>シャープレシオ（リスク調整後リターン）0.7〜0.9で優秀</li>
          <li>富裕層・保守派のポートフォリオとして定番の戦略</li>
        </ul>
      </section>
      <AffiliateCTA
        title="グローバル分散投資はSBI証券で｜ETF・投信・日本株完結"
        description="SBI証券は世界各国のETF・投資信託・日本株・米国株・新興国株を1口座で取引可能。為替手数料無料（住信SBI連携）、新NISA成長枠での非課税運用、グローバル分散投資の実装に最強のプラットフォーム。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌍"
        highlight="業界No.1"
      />
    </>
  ),
  "overseas-bank-account-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">海外銀行口座完全ガイド</h2>
        <p>
          海外銀行口座（HSBC香港・DBSシンガポール・米国シティバンク等）は、為替リスク分散・相続対策・海外投資のゲートウェイとして富裕層に活用されています。ただしマネロン規制強化で開設ハードル上昇中。Wise・Revolut等のオンライン口座なら手軽に開設可能、用途別の最適解を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="海外銀行口座の3大選択肢"
        services={[
          {
            name: "HSBC香港",
            rank: 1,
            highlight: "アジア富裕層の定番",
            features: [
              "Premier口座：1000万円以上",
              "Advance口座：100万円以上",
              "世界中のHSBCで取引可",
              "現地訪問での開設",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "富裕層",
          },
          {
            name: "Wise（オンライン）",
            rank: 2,
            highlight: "手数料安・手軽",
            features: [
              "マルチカレンシー口座",
              "為替スプレッド0.3〜0.5%",
              "オンライン完結",
              "個人の国際送金に最適",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "Revolut（欧州系フィンテック）",
            rank: 3,
            highlight: "30通貨対応・即時送金",
            features: [
              "日本版あり、スマホで口座開設",
              "30通貨の外貨保有可",
              "仮想通貨取引も対応",
              "月額0〜3,000円プラン",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">海外口座の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>マネロン規制：現地訪問・本人確認書類・住所証明・職業証明等が必要</li>
          <li>CRS（共通報告基準）：口座情報が日本の税務署に自動報告</li>
          <li>5000万円超の海外資産：国外財産調書提出義務</li>
          <li>相続時の手続き複雑、現地の法律・税金も考慮</li>
          <li>閉鎖・凍結リスク：税務当局の調査対象になりやすい</li>
          <li>用途が明確でない場合は国内口座の方が合理的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="海外資産の税務は税理士ドットコムで｜国際税務の専門家"
        description="税理士ドットコムは海外資産・国際税務に強い税理士を無料マッチング。海外口座開設・相続対策・国外財産調書の作成、CRS対応まで、国際税務の複雑な問題を総合的にサポート、数千万円の節税実現事例多数。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏦"
        highlight="無料マッチング"
      />
    </>
  ),
  "credit-card-lounge-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">空港ラウンジカード完全ガイド</h2>
        <p>
          空港ラウンジ付帯クレジットカードは、国内外の空港ラウンジ（年間2,000〜10,000円相当のサービス）を無料利用できる特典付きカード。年10回以上の出張・旅行なら年会費を超える恩恵、出張族・旅行好きの必須アイテム。プライオリティ・パス（年3万円・世界1,300箇所）vs カードラウンジ（国内限定）の使い分けを徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="空港ラウンジ付きクレカTOP3"
        services={[
          {
            name: "楽天プレミアムカード",
            rank: 1,
            highlight: "年11,000円でプライオリティパス",
            features: [
              "年会費11,000円",
              "プライオリティパス本会員",
              "楽天市場SPU+2倍",
              "コスパ最強",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F",
            badge: "王道",
          },
          {
            name: "エポスゴールド",
            rank: 2,
            highlight: "年会費無料（条件達成で）",
            features: [
              "年50万円利用で年会費無料",
              "国内空港ラウンジ無料",
              "海外旅行傷害保険最大5000万円",
              "マルイでの割引",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "セゾンプラチナアメックス",
            rank: 3,
            highlight: "ハイエンド付帯",
            features: [
              "年会費22,000円",
              "プライオリティパス本会員",
              "コンシェルジュサービス",
              "海外旅行保険1億円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ラウンジ活用のコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>国内ラウンジ（カードラウンジ）：軽食・ドリンクの範囲、ネット・充電</li>
          <li>プライオリティ・パス：世界1,300箇所・食事＋シャワー＋マッサージも</li>
          <li>年10回利用で年2〜3万円相当の節約（1回あたり2,000〜3,000円換算）</li>
          <li>同伴者料金3,000円前後、家族旅行時は本会員＋同伴で利用</li>
          <li>出発3〜4時間前からラウンジ入り、食事・休憩に活用</li>
        </ul>
      </section>
      <AffiliateCTA
        title="プライオリティ・パスは楽天プレミアムカードで｜年会費11,000円"
        description="楽天プレミアムカードは年会費11,000円で、通常年3万円のプライオリティ・パスが付帯。年5回以上空港利用する人は余裕で元取れる、楽天SPU+2倍で楽天市場でのポイント還元も魅力、コスパ最強のラウンジカード。"
        buttonText="楽天プレミアムカード詳細"
        href="https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F"
        icon="✈️"
        highlight="プライオリティPass"
      />
    </>
  ),
  "retirement-income-diversify": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">老後の収入源多様化完全ガイド</h2>
        <p>
          老後の収入源を「公的年金」だけに頼るのは危険。公的年金（月15万円）＋配当収入（月5〜10万円）＋副業収入（月3〜10万円）の三本柱で月25〜35万円確保し、生活の質を保ちながら資産を減らさない戦略を解説します。高配当株投資・シニア副業・不動産収入まで、65歳以降の収入源多様化の実践戦略を網羅します。
        </p>
      </section>
      <ComparisonTableCTA
        title="老後の収入源3本柱"
        services={[
          {
            name: "公的年金（基本）",
            rank: 1,
            highlight: "月13〜22万円",
            features: [
              "国民年金月6.8万円",
              "厚生年金月8〜15万円（加入期間による）",
              "65歳から支給開始",
              "繰上げ・繰下げ受給可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "基本",
          },
          {
            name: "配当収入（新NISA高配当株）",
            rank: 2,
            highlight: "月5〜15万円",
            features: [
              "高配当ETF（HDV・VYM・SCHD）",
              "日本個別株（三菱商事・NTT等）",
              "配当利回り3〜5%",
              "1500万円投資で月5万円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "シニア副業",
            rank: 3,
            highlight: "月3〜15万円",
            features: [
              "ブログ・YouTubeでの経験発信",
              "シルバー人材センター週3日",
              "コンサル業務（元管理職）",
              "趣味を活かした販売",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年齢別の収入源プラン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>60〜65歳：現役継続＋副業準備＋新NISA高配当株移行</li>
          <li>65〜75歳：年金＋副業＋配当収入の三本柱で月35万円</li>
          <li>75〜85歳：年金＋配当収入が中心、副業は縮小</li>
          <li>85歳以降：年金＋配当＋取崩しで生活維持</li>
          <li>100歳時代の老後設計：70歳まで働く＋投資で資産増加の時代</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高配当株投資はSBI証券で｜新NISA成長枠で非課税配当"
        description="SBI証券は高配当ETF（HDV・VYM・SCHD）と日本個別株（三菱商事・JT・NTT等）を1口座で取引可能。新NISA成長枠での投資は配当も非課税、月5〜15万円の配当収入を老後の生活費に活用できる強力なプラットフォーム。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👴"
        highlight="業界No.1"
      />
    </>
  ),
  "etf-bond-ladder-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">債券ETFラダー戦略完全ガイド</h2>
        <p>
          債券ETFラダー戦略は、異なる満期の債券ETFを階段状に保有し、毎年満期分を再投資することで金利変動リスクを分散する上級戦略。BIL（短期）・IEF（中期）・TLT（長期）の組合せで、年3〜5%の安定収入を目指します。退職後のリタイア期資金管理、金利上昇時代の安定運用として注目される手法です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要債券ETFラダー構成"
        services={[
          {
            name: "BIL（短期1〜3ヶ月米国債）",
            rank: 1,
            highlight: "利回り4〜5%",
            features: [
              "短期金利連動",
              "元本変動ほぼなし",
              "流動性高い",
              "現金代替資産として",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "短期",
          },
          {
            name: "IEF（7〜10年中期米国債）",
            rank: 2,
            highlight: "利回り3〜4%",
            features: [
              "中期金利リスク",
              "安定収入",
              "株式と逆相関",
              "バランス型に最適",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "中期",
          },
          {
            name: "TLT（20年超長期米国債）",
            rank: 3,
            highlight: "利回り4〜5%",
            features: [
              "金利低下時の値上がり益大",
              "ボラ大（20〜30%変動）",
              "低金利時代の主力",
              "株式暴落時のヘッジ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ラダー戦略の実践例（1000万円の場合）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>BIL（短期）300万円：年15万円配当</li>
          <li>IEF（中期）400万円：年14万円配当</li>
          <li>TLT（長期）300万円：年13万円配当</li>
          <li>合計：年42万円の配当収入（利回り4.2%）</li>
          <li>毎年、満期分を再投資することで金利変動リスクを平準化</li>
          <li>新NISA成長枠で非課税運用＝実質利回り5.2%相当</li>
        </ul>
      </section>
      <AffiliateCTA
        title="債券ETFラダー戦略はSBI証券で｜米国債券ETF完備"
        description="SBI証券はBIL・IEF・TLT等の米国債券ETFを買付手数料無料で取引可能。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、金利上昇時代の安定収入戦略を低コストで実装、リタイア期の資金管理に最適。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📶"
        highlight="業界No.1"
      />
    </>
  ),
  "credit-score-repair-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">信用情報・クレジットスコア改善完全ガイド</h2>
        <p>
          信用情報（CIC・JICC・KSC）は、住宅ローン・クレカ・カーローン審査の判断材料。延滞5年・自己破産10年の消去期間を知り、信用情報開示請求（1,000円）で自分の履歴を確認、正しい信用構築で有利な条件で借入できるようになります。20〜30代から信用履歴を育てることが、生涯の金融コストに大きく影響します。
        </p>
      </section>
      <ComparisonTableCTA
        title="信用情報機関3社の役割"
        services={[
          {
            name: "CIC（株式会社シー・アイ・シー）",
            rank: 1,
            highlight: "クレカ系情報",
            features: [
              "クレジット会社の加盟団体",
              "クレカ・分割払い情報管理",
              "開示手数料500円（WEB）",
              "延滞情報5年保有",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "重要",
          },
          {
            name: "JICC（日本信用情報機構）",
            rank: 2,
            highlight: "消費者金融系情報",
            features: [
              "消費者金融・信販会社",
              "キャッシング・カードローン情報",
              "開示手数料1,000円",
              "延滞情報5年保有",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "KSC（全国銀行個人信用情報センター）",
            rank: 3,
            highlight: "銀行系情報・最重要",
            features: [
              "銀行・信用金庫・信用組合",
              "住宅ローン・マイカーローン情報",
              "開示手数料1,000円",
              "自己破産情報10年保有",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">信用情報改善の実践方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>クレカ・ローン返済を一度も延滞しない（自動引落設定）</li>
          <li>クレカ利用率30%以内（限度額100万なら30万まで）</li>
          <li>延滞情報は5年後に自動消去、その間は新規借入困難</li>
          <li>自己破産情報は10年後に消去、クレカ発行可能に</li>
          <li>クレカ・ローンの短期間での多数申込みは「申込ブラック」注意</li>
          <li>定期的な信用情報開示（年1回）で異常値チェック</li>
        </ul>
      </section>
      <AffiliateCTA
        title="クレカ・ローン相談は税理士ドットコムで｜信用情報と税務の専門家"
        description="税理士ドットコムは税務＋融資・信用情報の総合相談に対応。住宅ローン審査通過戦略、事業者の融資枠拡大、信用情報改善に向けた計画立案まで、金融機関との交渉力強化のサポートを無料マッチング。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📊"
        highlight="無料マッチング"
      />
    </>
  ),
  "cashless-advanced-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュレス決済詳細比較2026</h2>
        <p>
          2026年の日本のキャッシュレス決済比率は41%、国際的には低水準だが急速に普及中。PayPay（国内最大6000万人）・楽天Pay・d払い・au PAY・LINE Payの主要5大QR決済を徹底比較し、各自の経済圏に応じた最適な使い分け、ダブル還元・トリプル還元のコツ、キャンペーン活用術を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要QR決済5社比較"
        services={[
          {
            name: "PayPay",
            rank: 1,
            highlight: "ユーザー6000万人・加盟店最大",
            features: [
              "通常還元0.5%、PayPayカード連携1%",
              "PayPayステップ最大1.5%還元",
              "加盟店400万店超",
              "ソフトバンクユーザー特典",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "楽天Pay",
            rank: 2,
            highlight: "楽天ポイント連動",
            features: [
              "楽天カードチャージで1.5%還元",
              "楽天ポイントでも支払可能",
              "楽天経済圏SPU+α",
              "ポイント二重取り可",
            ],
            href: "https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F",
          },
          {
            name: "d払い",
            rank: 3,
            highlight: "dポイント還元",
            features: [
              "dポイント0.5〜1%還元",
              "dカードGOLD連携最大4.5%",
              "docomoユーザー特典",
              "dポイントカード連携で+1倍",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">還元率最大化の使い分け</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>楽天経済圏ユーザー：楽天Pay＋楽天カードで計1.5〜2.5%</li>
          <li>docomoユーザー：d払い＋dカードGOLD＋dポイントカードで計3〜4.5%</li>
          <li>PayPay派：PayPayカード＋PayPayで計1〜2.5%、キャンペーン時5%超</li>
          <li>au PAY派：au PAYカード＋au PAYで計1.5%、Pontaダブル取り</li>
          <li>複数QR決済併用で年間数万円のポイント獲得、メイン経済圏統一推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="キャッシュレス決済の基盤は楽天カードで｜楽天Pay連携1.5%還元"
        description="楽天カードは楽天Payチャージで1.5%還元、年会費永年無料で楽天経済圏の入り口。SPU+1倍・お買い物マラソン＋5のつく日でポイント爆増、キャッシュレス決済と併用で年5〜10万円のポイント獲得可能。"
        buttonText="楽天カードの詳細"
        href="https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F"
        icon="📱"
        highlight="年会費無料"
      />
    </>
  ),
  "side-hustle-scale-up-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">副業スケールアップ完全ガイド</h2>
        <p>
          副業収入を月3万円→月100万円にスケールアップする現実的ロードマップを徹底解説。初級（クラウドワークス・ランサーズ）→中級（専門特化・実績積上げ）→上級（法人化・仕組化）の段階戦略、税金対策、法人化タイミング、副業から本業への移行まで、副業で本業超えを目指す実践戦略を網羅します。
        </p>
      </section>
      <ComparisonTableCTA
        title="副業ステージ別の戦略"
        services={[
          {
            name: "初級（月3〜10万円）",
            rank: 1,
            highlight: "クラウドワークスで実績作り",
            features: [
              "文字単価0.5〜1円でスタート",
              "半年で月3〜10万円達成",
              "雑所得扱い、確定申告対応",
              "副業OK企業が推奨対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "スタート",
          },
          {
            name: "中級（月20〜50万円）",
            rank: 2,
            highlight: "専門特化＋直接契約",
            features: [
              "文字単価3〜5円・指名受注",
              "事業所得＋青色申告65万円控除",
              "ブログ・YouTubeの複収入源",
              "月20〜50万円が現実圏内",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "上級（月50〜100万円以上）",
            rank: 3,
            highlight: "法人化＋仕組化",
            features: [
              "マイクロ法人設立（節税効果大）",
              "外注活用でスケール拡大",
              "オンラインサロン・コンサル",
              "本業超えの収入達成",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">スケールアップの節税戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月20万円超：雑所得→事業所得へ移行、青色申告65万円控除活用</li>
          <li>月50万円超：法人化（マイクロ法人）検討、税率55%→23%に軽減</li>
          <li>月100万円超：役員報酬＋配当の最適配分で税率最小化</li>
          <li>経費計上範囲拡大：PC・書籍・セミナー・接待交際費</li>
          <li>税理士顧問契約（月3〜5万円）で節税効果数百万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="副業スケールアップはココナラで｜初級から上級まで全対応"
        description="ココナラは月3万円の初心者から月100万円の上級者まで活用可能な万能プラットフォーム。スキル出品でリピート顧客獲得、実績積上げで単価UP、個人ブランディング構築までサポート、副業で本業超えを目指す全ての人に最適。"
        buttonText="ココナラに登録する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📈"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "kid-financial-education-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">子どもの金融教育完全ガイド</h2>
        <p>
          2022年4月から高校家庭科で「資産形成」教育必修化、金融リテラシーの時代的必要性が高まっています。お小遣い制度の設計、投資体験の機会、金融リテラシー書籍・ゲーム・家庭での実践方法、ジュニアNISA廃止後の代替策まで、子どもを金融リテラシー豊かな大人に育てる教育戦略を体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="年齢別の金融教育ポイント"
        services={[
          {
            name: "小学生（お小遣い3〜5千円）",
            rank: 1,
            highlight: "お金の基本学習",
            features: [
              "お小遣い帳で収支管理",
              "欲しいもの・必要なものの区別",
              "貯金の習慣化（お年玉活用）",
              "金融絵本・アプリ活用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "基礎",
          },
          {
            name: "中学生（お小遣い5千〜1万円）",
            rank: 2,
            highlight: "投資・経済の基礎",
            features: [
              "株式投資のシミュレーションゲーム",
              "新聞・ニュースで経済理解",
              "銀行口座を自分で管理",
              "ふるさと納税・消費税の仕組み",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "高校生（アルバイト収入）",
            rank: 3,
            highlight: "NISA体験・税務知識",
            features: [
              "18歳からNISA口座開設可",
              "月5千円からの少額投資体験",
              "確定申告・年末調整の仕組み",
              "クレカ・ローンの信用概念",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">親名義NISAでの教育資金活用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ジュニアNISA廃止（2023年末）→親名義の新NISAが代替策</li>
          <li>親の新NISA枠で月3万円×18年＝1260万円の教育資金準備</li>
          <li>子ども名義の投資信託購入は贈与税注意（年110万円非課税枠内）</li>
          <li>大学進学費用（500〜1000万円）の一部を運用益でカバー</li>
          <li>18歳到達時に子どもの新NISA口座開設、教育資金の自立運用へ</li>
        </ul>
      </section>
      <AffiliateCTA
        title="子どもの投資体験はSBI証券で｜親のNISA＋18歳で本人口座"
        description="SBI証券は親の新NISAで子どもの教育資金を運用、18歳到達時に子ども自身のNISA口座開設も可能。親子で投資信託選び・ポートフォリオ構築を体験、金融リテラシー教育の実践プラットフォームとして最適。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🧒"
        highlight="業界No.1"
      />
    </>
  ),
  "insurance-underwriting-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険の告知義務・加入審査完全ガイド</h2>
        <p>
          生命保険・医療保険・がん保険の加入時に求められる告知義務は、病歴・手術歴・通院歴・健康状態を正直に申告する義務です。通常加入（健康体）・引受基準緩和型（持病あり）・無選択型（告知不要）の3タイプの違い、告知義務違反のリスク（契約解除・保険金不払い）、持病があっても加入できる保険の選び方を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="保険加入タイプ別の比較"
        services={[
          {
            name: "通常加入（健康体）",
            rank: 1,
            highlight: "保険料最安",
            features: [
              "詳細な告知書＋健康診断",
              "保険料が最も割安",
              "保障内容も最充実",
              "健康な30〜50代が対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "王道",
          },
          {
            name: "引受基準緩和型",
            rank: 2,
            highlight: "持病ありでも加入可",
            features: [
              "告知項目3〜5項目のみ",
              "保険料1.5〜2倍高い",
              "保障内容縮小あり",
              "持病あり60代以上向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "無選択型（告知不要）",
            rank: 3,
            highlight: "審査なし・誰でも加入可",
            features: [
              "告知・健康診断一切不要",
              "保険料2〜3倍高い",
              "保障額小さめ",
              "重度の持病あり・高齢者向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">告知時の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>告知義務違反：契約解除＋保険金不払いのリスク、絶対に正直申告</li>
          <li>過去5年以内の入院・手術歴は必ず告知</li>
          <li>定期健診で異常値あり→精密検査受診→正常値なら加入可能</li>
          <li>軽度の高血圧・高脂血症は通常加入可、薬服用状況も告知</li>
          <li>迷った場合は保険マンモスの無料FP相談で最適プラン選択</li>
        </ul>
      </section>
      <AffiliateCTA
        title="持病ありの保険加入は保険マンモスで｜FP無料相談"
        description="保険マンモスは持病・病歴のある方の保険加入を総合サポート。通常・引受緩和・無選択型の3タイプから最適プラン選択、告知義務の範囲・具体的な書き方アドバイス、複数社比較で最も加入しやすい保険を提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📋"
        highlight="無料FP相談"
      />
    </>
  ),
  "high-income-asset-protection": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高所得者の資産防衛完全ガイド</h2>
        <p>
          年収2000万円超の富裕層は、所得税最大55%の税負担＋相続税最大55%の二重リスクに直面。資産管理会社設立・不動産投資の減価償却・生命保険の非課税枠・海外分散・相続対策まで、税負担を半減させながら資産を確実に次世代へ承継する上級戦略を体系的に解説します。富裕層の資産防衛の定石を網羅します。
        </p>
      </section>
      <ComparisonTableCTA
        title="富裕層の4大防衛戦略"
        services={[
          {
            name: "資産管理会社設立",
            rank: 1,
            highlight: "法人税23%・節税効果大",
            features: [
              "個人税率55%→法人税率23%へ",
              "経費計上範囲大幅拡大",
              "役員報酬分散で累進税率下げ",
              "家族への所得分散可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須",
          },
          {
            name: "不動産投資の減価償却",
            rank: 2,
            highlight: "築古・米国不動産で最大化",
            features: [
              "築22年超木造：4年償却",
              "米国不動産：建物割合80%",
              "年収2000万円なら年200〜500万円節税",
              "所得圧縮＋減価償却ダブル効果",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "生命保険非課税枠",
            rank: 3,
            highlight: "500万円×法定相続人",
            features: [
              "相続税対策の王道",
              "配偶者＋子2人＝1500万円非課税",
              "終身保険でフル活用",
              "現金→保険金で相続税大幅削減",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の税負担と節税効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収2000万円：税負担620万円（31%）→節税策で400万円（20%）に</li>
          <li>年収5000万円：税負担2100万円（42%）→1300万円（26%）に</li>
          <li>年収1億円：税負担4900万円（49%）→3000万円（30%）に</li>
          <li>資産管理会社＋不動産＋保険の複合戦略で年500〜3000万円の節税</li>
          <li>相続税対策含め生涯で数千万〜数億円の節税効果</li>
        </ul>
      </section>
      <AffiliateCTA
        title="富裕層の資産防衛は税理士ドットコムで｜専門家無料マッチング"
        description="税理士ドットコムは富裕層の税務・資産管理に強い税理士を無料マッチング。資産管理会社設立・不動産節税・生命保険・海外分散・相続対策の総合コンサルティング、年500〜3000万円の節税実績多数の専門家紹介。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💎"
        highlight="無料マッチング"
      />
    </>
  ),
  "inheritance-advance-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生前贈与・相続対策完全ガイド</h2>
        <p>
          2024年1月の相続税改正で、生前贈与の7年加算ルール・相続時精算課税制度の基礎控除新設等、大幅変更がありました。暦年贈与（年110万円非課税）・相続時精算課税（2500万円控除）の使い分け、教育資金・結婚子育て資金の贈与特例、生命保険活用まで、2026年最新の相続対策を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="生前贈与の3大制度"
        services={[
          {
            name: "暦年贈与（基本）",
            rank: 1,
            highlight: "年110万円非課税",
            features: [
              "年110万円まで贈与税なし",
              "受贈者ごとに110万円",
              "相続前7年以内は相続財産加算",
              "長期計画で数千万円の節税可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "相続時精算課税制度",
            rank: 2,
            highlight: "2500万円＋年110万円",
            features: [
              "2024年改正で年110万円基礎控除追加",
              "2500万円まで無税贈与（相続時精算）",
              "贈与後は暦年課税に戻れない",
              "65歳以上親→20歳以上子対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "教育・結婚子育て資金贈与特例",
            rank: 3,
            highlight: "教育1500万円・結婚1000万円",
            features: [
              "教育資金一括贈与：1500万円非課税",
              "結婚子育て資金：1000万円非課税",
              "金融機関経由の専用口座",
              "2026年まで延長",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">2024年改正の重要ポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>暦年贈与の加算期間：3年→7年に延長（2024年1月以降）</li>
          <li>相続時精算課税に年110万円の基礎控除新設</li>
          <li>相続開始3年前の贈与は全額加算（対象拡大）</li>
          <li>高額資産家は相続時精算課税の活用価値UP</li>
          <li>早期からの計画的贈与が重要、7年加算リスク回避</li>
        </ul>
      </section>
      <AffiliateCTA
        title="相続対策は税理士ドットコムで｜2024年改正対応の専門家"
        description="税理士ドットコムは2024年相続税改正に精通した税理士を無料マッチング。暦年贈与・相続時精算課税・各種特例の最適活用、資産家向けの生涯計画策定、数千万円の相続税軽減実績多数の専門家紹介を提供。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🎁"
        highlight="無料マッチング"
      />
    </>
  ),
  "nenkin-intensive-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年金受給額最大化完全ガイド</h2>
        <p>
          公的年金の受給額は、受給開始時期・任意加入・付加年金・繰下げ受給の組合せで月3〜5万円の差を生みます。65歳標準月15万→75歳繰下げで月27万円（1.84倍）、任意加入＋付加年金で月+1〜2万円追加も。正しい知識で老後収入を最大化、生涯年金受給額を数百万〜数千万円UP させる戦略を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="年金最大化の4大戦略"
        services={[
          {
            name: "繰下げ受給（最強）",
            rank: 1,
            highlight: "75歳で受給額1.84倍",
            features: [
              "65→70歳：1.42倍（+42%）",
              "65→75歳：1.84倍（+84%）",
              "長寿化時代の最適戦略",
              "月15万→月27万円へ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
            badge: "最強",
          },
          {
            name: "付加年金（自営業）",
            rank: 2,
            highlight: "月200円で年2,400円",
            features: [
              "国民年金1号被保険者対象",
              "月額400円の付加保険料",
              "受給額年2,400円UP（2年で元取れ）",
              "自営業・フリーランス必須",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "任意加入（60〜65歳）",
            rank: 3,
            highlight: "満額受給に近づける",
            features: [
              "加入期間40年未満で活用",
              "60〜65歳の5年間拠出可能",
              "月1.6万円×5年＝96万円追加",
              "受給額月1〜3万円UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年金受給額シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>平均年収500万円・加入40年：月16万円（65歳受給）、月22.7万円（70歳繰下げ）</li>
          <li>年収800万円・加入40年：月22万円、月31.2万円（70歳繰下げ）</li>
          <li>自営業（国民年金のみ）：月6.8万円、付加年金＋任意加入で月8万円</li>
          <li>夫婦2人の世帯年金：月25〜40万円（会社員共働きならMAX）</li>
          <li>75歳繰下げ×平均寿命85歳：約10年間で3000万円超の受給額差</li>
        </ul>
      </section>
      <AffiliateCTA
        title="年金＋iDeCoの老後戦略はSBI証券で｜三層構造の資産形成"
        description="SBI証券のiDeCoは運営管理手数料0円、公的年金＋iDeCo＋NISAの三層構造で老後月35万円の理想的な収入確保。年金受給額最大化＋iDeCoの非課税運用＋NISA配当収入で、生涯数千万円の差を実現できる。"
        buttonText="SBI証券iDeCoの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html"
        icon="🏦"
        highlight="手数料0円"
      />
    </>
  ),
  "tax-free-zone-investment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">非課税枠フル活用完全ガイド</h2>
        <p>
          日本の税制にある非課税・税制優遇枠を全て活用すると、年収800万円の会社員でも年30万円超の節税が可能です。新NISA・iDeCo・企業型DC・小規模企業共済・ふるさと納税・生命保険料控除・医療費控除の組合せで、資産形成と節税を両立する総合戦略を徹底解説します。年収別の最適配分も網羅します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要非課税・税制優遇枠"
        services={[
          {
            name: "新NISA（運用益非課税）",
            rank: 1,
            highlight: "年360万・生涯1800万",
            features: [
              "積立枠年120万＋成長枠年240万",
              "生涯1800万円まで",
              "売却益・配当非課税",
              "全員必須の制度",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最優先",
          },
          {
            name: "iDeCo（所得控除＋非課税運用）",
            rank: 2,
            highlight: "年14〜81.6万円",
            features: [
              "会社員：年14.4〜27.6万円",
              "公務員：年14.4万円",
              "自営業：年81.6万円",
              "全額所得控除＋運用益非課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "小規模企業共済（個人事業主）",
            rank: 3,
            highlight: "年最大84万円の所得控除",
            features: [
              "個人事業主・小規模経営者専用",
              "月1,000〜70,000円拠出",
              "全額所得控除",
              "退職所得扱いで有利",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の最適配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収400万：新NISA月5万＋iDeCo月1万＋ふるさと納税4.2万＝年10万節税</li>
          <li>年収600万：NISA月8万＋iDeCo月2万＋ふるさと納税7.7万＝年15万節税</li>
          <li>年収800万：NISA月10万＋iDeCo月2.3万＋ふるさと納税13万＝年20万節税</li>
          <li>年収1000万：NISA月10万＋iDeCo月2.3万＋ふるさと納税17.6万＋生保料控除＝年30万節税</li>
          <li>自営業：NISA月10万＋iDeCo月6.8万＋小規模共済月7万＋ふるさと納税＝年40〜50万節税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="非課税枠フル活用はSBI証券で｜NISA＋iDeCo総合"
        description="SBI証券はNISA・iDeCo両方で業界最高水準。NISA年360万円＋iDeCo月最大6.8万円の非課税運用、年30万円超の節税効果を実現。個人事業主向けの小規模企業共済の案内もfreee会計経由で。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎯"
        highlight="業界No.1"
      />
    </>
  ),
  "cryptocurrency-analysis-tools": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産分析ツール完全ガイド</h2>
        <p>
          暗号資産投資の成功には、適切な分析ツールの活用が不可欠です。価格・時価総額（CoinGecko・CoinMarketCap）、チャート分析（TradingView）、オンチェーン分析（Glassnode）、機関投資家データ（CryptoQuant）、ポートフォリオ管理（Delta）の使い分けで、勘に頼らない体系的な投資判断ができます。初級〜上級者向けのツール選定を詳解します。
        </p>
      </section>
      <ComparisonTableCTA
        title="暗号資産分析ツール4大カテゴリ"
        services={[
          {
            name: "CoinGecko / CoinMarketCap",
            rank: 1,
            highlight: "価格・時価総額（必須）",
            features: [
              "1万以上の暗号資産カバー",
              "日本円建て価格表示",
              "時価総額ランキング",
              "無料で十分な情報量",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "必須",
          },
          {
            name: "TradingView",
            rank: 2,
            highlight: "プロ級チャート分析",
            features: [
              "100以上のテクニカル指標",
              "取引所直接連携",
              "有料プラン月15ドル〜",
              "FX・株式にも対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "Glassnode（上級者向け）",
            rank: 3,
            highlight: "オンチェーン分析",
            features: [
              "BTC・ETHの流通状況分析",
              "大口アドレスの動向",
              "有料プラン月29ドル〜",
              "機関投資家レベル情報",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">分析ツールの組合せ戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>初級者：CoinGecko＋取引所アプリ（bitFlyer・コインチェック）</li>
          <li>中級者：TradingView無料プラン＋CoinMarketCapでスクリーニング</li>
          <li>上級者：TradingView有料＋Glassnode＋ポートフォリオアプリ（Delta）</li>
          <li>税務：Cryptact・Gtax（年1〜3万円）で自動損益計算</li>
          <li>ニュース：CoinDesk Japan・CoinPost（日本語メディア）で情報収集</li>
        </ul>
      </section>
      <AffiliateCTA
        title="暗号資産取引はbitFlyerで｜分析ツールと連携可能"
        description="bitFlyerはTradingView連携・リアルタイム情報提供の業界最大手。登録800万人超のユーザー実績、セキュリティ業界No.1、分析ツールと組合せた体系的な投資戦略の実装に最適なプラットフォーム。"
        buttonText="bitFlyerの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="📊"
        highlight="業界最大手"
      />
    </>
  ),
  "japan-stock-dividend-kings": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本株高配当株投資完全ガイド</h2>
        <p>
          日本株の高配当戦略は、配当収入を重視する投資手法ですが、配当利回りが高いほど安全という意味ではありません。減配、業績悪化、株価下落、業種集中のリスクがあるため、利回り、配当性向、キャッシュフロー、過去の減配実績、NISAでの使い方を分けて確認します。
        </p>
      </section>
      <DecisionBox
        title="結論：高配当株は利回りよりも減配リスクを先に見る"
        points={[
          "配当利回りが高い銘柄ほど、業績悪化や一時的な株価下落で高く見えている可能性がある。",
          "通信、商社、金融、製造など業種を分け、1銘柄に配当収入を依存しない。",
          "新NISAで買う場合も、売却時の損益通算ができない点を理解しておく。",
        ]}
        note="配当金額は企業方針や業績で変わるため、将来の配当を保証するものではありません。"
      />
      <ComparisonTableCTA
        title="主要日本高配当株TOP5"
        services={[
          {
            name: "日本たばこ産業（JT）",
            rank: 1,
            highlight: "利回り5.5%・減配抵抗",
            features: [
              "配当利回り5.5%前後",
              "1994年から連続配当",
              "ディフェンシブ株",
              "新NISA成長枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "高配当",
          },
          {
            name: "ソフトバンク（SBKK）",
            rank: 2,
            highlight: "利回り5%・通信インフラ",
            features: [
              "配当利回り5%前後",
              "親会社ソフトバンクGとは別",
              "ディフェンシブ＋インフラ",
              "安定的な配当方針",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "三菱商事",
            rank: 3,
            highlight: "バフェット投資・総合商社",
            features: [
              "配当利回り3.5%",
              "連続増配10年以上",
              "ウォーレン・バフェット保有",
              "自社株買い積極的",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高配当投資の業種分散戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>金融：三菱UFJ・三井住友FG・みずほ（利回り3〜4%）</li>
          <li>通信：NTT・KDDI・ソフトバンク（利回り3〜5%）</li>
          <li>商社：三菱商事・伊藤忠・三井物産・住友商事（利回り3〜4%）</li>
          <li>製造：JT・キヤノン・花王（利回り4〜5%）</li>
          <li>インフラ：東京電力・JR東日本（利回り3〜4%）</li>
          <li>業種・企業分散で減配リスクを抑える。均等配分か時価総額配分かは目的に合わせて選ぶ</li>
        </ul>
      </section>
      <AffiliateCTA
        title="日本高配当株はSBI証券で｜新NISA成長枠で非課税配当"
        description="日本株の高配当銘柄を検討する場合は、売買手数料、NISA対応、銘柄検索、配当情報の見やすさを確認しましょう。配当は保証されないため、減配リスクと分散方針もあわせて確認してください。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇯🇵"
        highlight="業界No.1"
      />
    </>
  ),
  "cashback-maximize-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュバック最大化完全ガイド</h2>
        <p>
          各種サービスの新規登録キャッシュバックを戦略的に活用すると、年間30万円以上の不労所得を獲得可能です。クレカ発行（1〜3万円×5枚）・FX口座開設＋取引（最大100万円）・証券口座・住宅ローン借換え等の組合せ、ポイントサイト（ハピタス・モッピー）経由での上乗せ、申込みタイミングの戦略まで完全網羅します。
        </p>
      </section>
      <ComparisonTableCTA
        title="高額キャッシュバック5大カテゴリ"
        services={[
          {
            name: "FX口座開設＋取引",
            rank: 1,
            highlight: "最大100万円",
            features: [
              "GMOクリック：最大55万円",
              "DMM FX：最大30万円",
              "外為どっとコム：最大102万円",
              "ポイントサイト経由で+4万円上乗せ",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "最強",
          },
          {
            name: "クレカ発行",
            rank: 2,
            highlight: "1〜3万円×複数枚",
            features: [
              "楽天カード：8千〜2万円",
              "三井住友NL：1〜2万円",
              "JCBカード：1〜3万円",
              "年3〜5枚×2万円＝10万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "証券・銀行口座開設",
            rank: 3,
            highlight: "各5千〜3万円",
            features: [
              "SBI証券：5千円〜",
              "楽天証券：5千円〜",
              "住信SBI：5千円〜",
              "ネット銀行：3千〜1万円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl function-bold mb-3">年間30万円獲得の実例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>FX口座4社開設＋取引：15〜20万円</li>
          <li>クレカ5枚発行：8〜10万円</li>
          <li>証券口座3社開設：1.5〜3万円</li>
          <li>ネット銀行3社開設：1〜3万円</li>
          <li>住宅ローン借換え：2〜5万円</li>
          <li>保険相談：3千〜1万円×3社</li>
          <li>年間合計：28〜42万円の不労所得</li>
        </ul>
      </section>
      <AffiliateCTA
        title="キャッシュバック獲得はハピタスから｜ポイントサイト経由で上乗せ"
        description="ハピタスはクレカ・FX・証券口座開設で通常の1.5〜2倍のキャッシュバック獲得可能。登録無料・現金交換手数料無料、年30〜50万円の不労所得を実現するプラットフォーム、本格的なポイ活の入り口として最適。"
        buttonText="ハピタスで無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💵"
        highlight="新規登録400pt"
      />
    </>
  ),
  "small-business-loan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人事業主・中小企業の融資完全ガイド</h2>
        <p>
          個人事業主・中小企業の融資は、日本政策金融公庫（金利1.5〜3%・最大7,200万円）、自治体の制度融資（金利1〜2%・利子補給）、プロパー融資（地銀・信金）、信用保証協会保証付きまで多様な選択肢があります。創業期・成長期・安定期それぞれの段階に応じた融資戦略、成功する事業計画書の作成方法まで解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="中小企業向け融資の4大選択肢"
        services={[
          {
            name: "日本政策金融公庫",
            rank: 1,
            highlight: "政府系・金利1.5〜3%",
            features: [
              "新規開業資金最大7,200万円",
              "創業1年以内でも可",
              "女性・若者・シニア優遇",
              "事業計画書の質が鍵",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "自治体の制度融資",
            rank: 2,
            highlight: "利子補給で実質1%以下",
            features: [
              "都道府県・市区町村の制度",
              "信用保証協会保証付き",
              "金利の一部自治体負担",
              "地元企業向け有利条件",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "プロパー融資（地銀・信金）",
            rank: 3,
            highlight: "実績積上げで有利条件",
            features: [
              "金利1.5〜3.5%",
              "取引実績2〜3年必要",
              "メインバンク確保が鍵",
              "将来の事業拡大に有利",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">融資成功の実践ポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>事業計画書：売上予測・資金繰り表・市場分析を具体的に</li>
          <li>自己資金：融資額の20〜30%を目安に準備</li>
          <li>創業期：公庫＋制度融資の組合せが有利条件獲得</li>
          <li>成長期：メインバンクでの実績積上げ、追加融資要請</li>
          <li>税理士の支援：事業計画書作成・交渉サポートで成功率UP</li>
          <li>断られても粘る：3行以上の銀行に同時申込み、比較検討</li>
        </ul>
      </section>
      <AffiliateCTA
        title="融資相談は税理士ドットコムで｜事業計画書作成サポート"
        description="税理士ドットコムは融資・資金調達に強い税理士を無料マッチング。日本政策金融公庫・制度融資・プロパー融資の最適選択、事業計画書の作成支援、銀行との交渉サポートまで、融資成功率を劇的に向上させます。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏛️"
        highlight="無料マッチング"
      />
    </>
  ),
  "silent-wealth-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">サイレントウェルス戦略完全ガイド</h2>
        <p>
          サイレントウェルス（静かな富裕層）は、派手な消費を避けて目立たず、実際は数千万〜1億円の資産を持つ人々。年収600〜800万円でも、中古住宅・中古車・ミニマル生活で年間200〜300万円貯蓄、新NISAで複利運用、30年でFIRE達成の実践戦略。SNS全盛時代の逆張り思考、見栄消費のワナを回避する富裕層思考を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="サイレントウェルスの3原則"
        services={[
          {
            name: "消費ミニマル化",
            rank: 1,
            highlight: "年収の30%以内で生活",
            features: [
              "中古住宅（新築より2000万円安）",
              "中古車（新車より200万円安）",
              "外食・旅行控えめ",
              "サブスク・消費を厳選",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "基本",
          },
          {
            name: "高貯蓄率（30〜50%）",
            rank: 2,
            highlight: "月20〜30万円の貯蓄",
            features: [
              "手取りの30〜50%を貯蓄",
              "年240〜360万円の蓄積",
              "固定費削減で達成可能",
              "先取り貯金で自動化",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "長期分散投資",
            rank: 3,
            highlight: "新NISA＋iDeCoで複利",
            features: [
              "年7%想定で30年運用",
              "月30万円積立→9,000万円",
              "全世界株インデックス中心",
              "派手な銘柄選びは不要",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">見栄消費のワナを避ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新車購入：200〜500万円、5年で半値、25年で2000万円の損失可能</li>
          <li>新築マイホーム：中古より2000万円高、ローン金利含めて3000万円の差</li>
          <li>ブランド品：20〜100万円、価値減少率90%超、投資に回せば大きく育つ</li>
          <li>頻繁な外食・旅行：年100万円、10年で1000万円、NISA運用なら2倍以上に</li>
          <li>SNS映え消費：他人軸の見栄、自分軸の満足に切替えるのが富裕層マインド</li>
        </ul>
      </section>
      <AffiliateCTA
        title="静かに資産を築く道はSBI証券で｜長期インデックス投資"
        description="SBI証券のeMAXIS Slim全世界株式＋三井住友NL月5万円クレカ積立で、年7%運用×30年＝月5万円が2500万円に。派手な投資戦略より、地味でコツコツ続く長期インデックスが、サイレントウェルス実現の王道。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🤫"
        highlight="業界No.1"
      />
    </>
  ),
  "stocks-fundamental-analysis": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">株式ファンダメンタル分析完全ガイド</h2>
        <p>
          ファンダメンタル分析は、企業の財務指標（PER・PBR・ROE・配当利回り・EPS等）から本来価値を算出し、割安株・優良株を見つける投資手法。チャート分析（テクニカル）と対比される基本アプローチで、長期投資家のバフェット・ピーター・リンチ等が実践。各指標の読み方、業種別の目安、割安株の選別方法を体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要ファンダメンタル指標"
        services={[
          {
            name: "PER（株価収益率）",
            rank: 1,
            highlight: "株価が割安か判定",
            features: [
              "株価÷EPS（1株当たり純利益）",
              "日本株平均PER15倍、割安12倍以下",
              "成長株30倍超も許容",
              "業種比較で判断",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "基本",
          },
          {
            name: "PBR（株価純資産倍率）",
            rank: 2,
            highlight: "解散価値との比較",
            features: [
              "株価÷1株当たり純資産",
              "1倍以下は解散価値割れ",
              "日本株平均1.5倍",
              "金融・素材業種で低め",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ROE（自己資本利益率）",
            rank: 3,
            highlight: "収益性の指標",
            features: [
              "純利益÷自己資本×100%",
              "10%以上が優良企業",
              "15%以上はグローバル水準",
              "バフェット重視の指標",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">割安優良株の選別手法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①PER 15倍以下＋ROE 10%以上＋配当利回り3%以上の3条件</li>
          <li>②5年連続増益・増配企業</li>
          <li>③自己資本比率50%以上（財務健全性）</li>
          <li>④売上高成長率3%以上（成長性）</li>
          <li>⑤時価総額1000億円以上（流動性）</li>
          <li>スクリーニング：SBI証券・楽天証券の銘柄検索で一括抽出可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ファンダメンタル投資はSBI証券で｜スクリーニングツール完備"
        description="SBI証券のスクリーニングツールで、PER・PBR・ROE・配当利回り等10以上の条件で銘柄絞り込み可能。日本株・米国株の両方で割安優良株を自動抽出、新NISA成長枠で非課税運用、本格的なファンダメンタル投資の実装に最適。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📐"
        highlight="業界No.1"
      />
    </>
  ),
  "macro-economic-indicators-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">マクロ経済指標完全ガイド</h2>
        <p>
          マクロ経済指標は、一国の経済状況を把握し、投資判断を左右する重要な情報。GDP成長率・インフレ率（CPI）・失業率・政策金利・10年国債利回り・購買力平価（PPP）・景気動向指数等の基本指標を理解することで、中長期的な相場予測、資産配分の最適化、景気サイクルに沿った投資戦略が可能になります。
        </p>
      </section>
      <ComparisonTableCTA
        title="投資判断の重要指標TOP5"
        services={[
          {
            name: "GDP成長率",
            rank: 1,
            highlight: "経済全体の健康度",
            features: [
              "四半期ごと公表",
              "日本1〜2%・米国2〜3%が標準",
              "3%超は過熱・0%以下は後退",
              "株式相場と強い相関",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最重要",
          },
          {
            name: "インフレ率（CPI）",
            rank: 2,
            highlight: "物価上昇率・金利政策の根拠",
            features: [
              "月次公表",
              "目標2%（日米欧共通）",
              "3%超で利上げ圧力",
              "インフレ連動債・不動産ヘッジ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "政策金利・10年債利回り",
            rank: 3,
            highlight: "金融政策・債券価格",
            features: [
              "日銀（-0.1〜0.5%）、FRB（4〜5%）",
              "10年債利回り：株式の評価基準",
              "金利上昇で株価下落圧力",
              "GDP成長率との関係重要",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">主要経済指標の確認方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>日本：内閣府・日銀・総務省統計局の月次レポート</li>
          <li>米国：BEA（経済分析局）・BLS（労働統計局）・FRBの経済指標カレンダー</li>
          <li>欧州：ECB・Eurostatの統計データ</li>
          <li>民間：Bloomberg・Reuters・日経新聞の速報・分析</li>
          <li>カレンダー：みんかぶFX等の経済指標カレンダーで翌日の発表予定把握</li>
        </ul>
      </section>
      <AffiliateCTA
        title="経済指標の分析はSBI証券で｜情報量業界No.1"
        description="SBI証券は経済指標カレンダー・アナリストレポート・企業決算情報を一元提供。日米欧の主要指標をリアルタイムで把握、投資判断に必要な情報を全て無料で取得できる、上級投資家にも対応できる情報量の多さ。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌐"
        highlight="情報量No.1"
      />
    </>
  ),
  "option-futures-basic-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オプション・先物取引基礎完全ガイド</h2>
        <p>
          オプション・先物取引は、将来の価格変動に対応するデリバティブ（派生商品）。ヘッジ（リスク回避）と投機（リスク取り利益狙い）の両面で活用され、日経225先物・個別株オプション・商品先物・FX先物等多岐にわたります。個人投資家向けに、基本の仕組み、実践的な活用法、レバレッジリスクの管理まで体系的に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要デリバティブの特徴"
        services={[
          {
            name: "日経225先物",
            rank: 1,
            highlight: "日経平均のレバレッジ取引",
            features: [
              "ミニ先物：1単位10万円の証拠金",
              "マイクロ先物：1万円から可",
              "レバレッジ20〜30倍",
              "ヘッジ・投機の両活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "定番",
          },
          {
            name: "個別株オプション",
            rank: 2,
            highlight: "銘柄ごとの権利取引",
            features: [
              "コール：買う権利、プット：売る権利",
              "プレミアム（権利料）を支払い",
              "最大損失＝プレミアム額限定",
              "保険的活用も可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "商品先物・ETF連動",
            rank: 3,
            highlight: "金・原油・農産物等",
            features: [
              "金ETF（1540・GLD）",
              "原油ETF（1699・USO）",
              "商品先物取引業者経由",
              "インフレヘッジ効果",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">個人投資家のリスク管理</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>レバレッジ10倍以下、投資資金の10%以内を原則</li>
          <li>損切りライン事前設定（-5〜-10%で機械的に損切り）</li>
          <li>ヘッジ目的の活用：保有株の下落リスクを先物売りでカバー</li>
          <li>オプション買い（プレミアム支払い）は最大損失限定で安全</li>
          <li>投機より長期インデックス投資が圧倒的に勝率高い</li>
          <li>知識・経験不足のまま取引すると短期間で資産喪失の可能性大</li>
        </ul>
      </section>
      <AffiliateCTA
        title="先物・オプション取引はSBI証券で｜低コスト・充実した情報"
        description="SBI証券はデリバティブ取引手数料業界最安水準、日経225先物・個別株オプション・商品ETFまで総合カバー。リスク管理ツール・シミュレーターで安全な取引、上級投資家の高度戦略実装にも対応。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚡"
        highlight="業界No.1"
      />
    </>
  ),
  "esop-stock-purchase-plan": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">従業員持株会・ESPP完全ガイド</h2>
        <p>
          従業員持株会・ESPP（Employee Stock Purchase Plan）は、会社員だけが使える特権的な制度。会社の奨励金（拠出額の5〜10%上乗せ）、株価10〜15%割引購入、配当金の自動再投資で、5〜10年で数百万円の資産形成が可能。ただし自社株集中リスクの管理が重要、退職時の対応含めて実践的な活用法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="持株会・ESPPのメリット"
        services={[
          {
            name: "会社奨励金（最大のメリット）",
            rank: 1,
            highlight: "拠出額の5〜10%上乗せ",
            features: [
              "月3万円拠出＋奨励金3000円",
              "ノーリスクの利益確定",
              "年36〜72万円のリターン",
              "全員参加推奨レベル",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最強",
          },
          {
            name: "ESPP割引購入（外資系）",
            rank: 2,
            highlight: "株価10〜15%割引",
            features: [
              "6ヶ月ごとの購入機会",
              "最安値基準＋15%割引",
              "即売却で確定利益",
              "GAFAM等で実施",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "配当金自動再投資",
            rank: 3,
            highlight: "複利効果の最大化",
            features: [
              "配当で追加株式購入",
              "長期で複利効果大",
              "手動再投資の手間ゼロ",
              "10年で株数30%UPも",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">自社株集中リスクの管理</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>自社株比率はポートフォリオの20%以内に制限</li>
          <li>ESPP割引購入後は即売却（割引分だけ確定利益化）</li>
          <li>持株会は長期保有、ただし会社業績悪化時は早期売却</li>
          <li>退職時は全株売却＆NISA等へ再投資の検討</li>
          <li>リーマン・シャープの悲劇（自社株＋失業のダブルパンチ）回避</li>
          <li>奨励金を得つつ、分散投資を維持する賢いバランス</li>
        </ul>
      </section>
      <AffiliateCTA
        title="自社株売却後の再投資はSBI証券で｜NISA活用"
        description="SBI証券は自社株の売却資金を、新NISAでの分散投資（全世界株式・高配当株）に効率的に再投資可能。新NISA成長枠での非課税運用、持株会＋ESPP＋NISAの三層戦略で、会社員の資産形成を最大化できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏢"
        highlight="業界No.1"
      />
    </>
  ),
  "wealth-report-book-recommend": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">富裕層の必読書100冊</h2>
        <p>
          富裕層や成功した投資家が読んでいる、お金・投資・人生の名著を厳選紹介。バフェットの師ベンジャミン・グレアム「賢明なる投資家」、モーガン・ハウゼル「お金の心理学」、ラミット・サティ「金持ちになる方法」等、数十年読み継がれる古典＋2020年代の現代の名著を組合せ。読書が人生と資産を変える100冊を領域別に解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="必読書TOP5（ジャンル別）"
        services={[
          {
            name: "投資の古典",
            rank: 1,
            highlight: "時代を超える名著",
            features: [
              "賢明なる投資家（ベンジャミン・グレアム）",
              "敗者のゲーム（チャールズ・エリス）",
              "ピーター・リンチの株で勝つ",
              "マネーマスターズ列伝（ジョン・トレイン）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "行動経済学・心理",
            rank: 2,
            highlight: "投資心理の理解",
            features: [
              "お金の心理学（モーガン・ハウゼル）",
              "ファスト＆スロー（カーネマン）",
              "投資家が大切にしたいたった3つの疑問",
              "行動経済学入門",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "FIRE・人生設計",
            rank: 3,
            highlight: "現代の生き方",
            features: [
              "Your Money or Your Life",
              "サイコロジー・オブ・マネー",
              "Die With Zero（死ぬ時は最大限使う）",
              "FIRE 最強の早期リタイア術",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">読書の実践方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>紙の本：主要投資本は紙で購入、書き込み・読み返しに有利</li>
          <li>Kindle Unlimited（月980円）：多数のビジネス書読み放題</li>
          <li>Audible（月1,500円）：通勤時間で月2〜3冊の耳読書</li>
          <li>読書ノート：重要な学びをメモ、実践に繋げる</li>
          <li>年50冊目標：週1冊ペース、5年で250冊の蓄積で人生変わる</li>
          <li>図書館活用：無料で古典・新刊読めて経済的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="投資本購入は楽天ブックスで｜SPU+0.5倍＋送料無料"
        description="楽天ブックスは投資・ビジネス書の品揃え業界トップクラス。楽天カード決済でSPU+0.5倍、1冊から送料無料、書籍ポイント＋楽天経済圏でのポイント還元でお得。月3〜5冊の継続読書で人生が変わる習慣を。"
        buttonText="楽天ブックスで本を探す"
        href="https://hb.afl.rakuten.co.jp/hgc/g00n15i1.3cb8aef3.g00n15i2.3cb8af52/?pc=https%3A%2F%2Fwww.rakuten-card.co.jp%2F"
        icon="📚"
        highlight="送料無料"
      />
    </>
  ),
  "keizai-cycle-timing-investment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">景気サイクル投資戦略完全ガイド</h2>
        <p>
          景気は「好況→後退→停滞→回復」の4局面を繰り返し、各局面で有利な資産クラスが異なります。好況期は株式・REIT、後退期は国債・金、停滞期は高配当株・債券、回復期は新興国株・コモディティが強い傾向。景気サイクルを読んで資産配分を調整することで、年リターン+2〜3%の改善が可能な上級戦略を徹底解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="4局面と有利な資産クラス"
        services={[
          {
            name: "好況期（金利低〜上昇）",
            rank: 1,
            highlight: "株式・REIT主力",
            features: [
              "株式：新興国・成長株・シクリカル",
              "REIT：金利上昇前に売却検討",
              "コモディティ：エネルギー・素材",
              "債券比率を下げる",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "攻め",
          },
          {
            name: "後退期（金利高止まり）",
            rank: 2,
            highlight: "防御モード",
            features: [
              "国債（TLT・BND）で利益確保",
              "金（GLD）で危機ヘッジ",
              "ディフェンシブ株（生活必需品）",
              "現金ポジション増加",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "回復期（金利低下）",
            rank: 3,
            highlight: "再び攻めへ",
            features: [
              "中小型株・新興国株の買戻し",
              "高配当株で配当＋値上がり",
              "不動産・REITの再加重",
              "インフレヘッジ資産の継続",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">相場転換のシグナル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>逆イールド（長短金利逆転）：後退シグナル、6〜18ヶ月後にリセッション</li>
          <li>失業率の底打ち→上昇：景気後退の初期シグナル</li>
          <li>製造業PMI 50割れ：景気後退突入の可能性</li>
          <li>消費者信頼感指数の急落：消費減退→企業業績悪化</li>
          <li>VIX（恐怖指数）30超：市場混乱、大底近い可能性</li>
        </ul>
      </section>
      <AffiliateCTA
        title="景気サイクル投資はSBI証券で｜多様な資産クラス対応"
        description="SBI証券は株式・ETF・投資信託・債券・REIT・商品・金・外貨預金まで1口座で総合運用可能。景気サイクルに応じた資産配分の機動的変更、経済指標レポート・アナリスト情報の豊富さで、上級戦略の実装を支援。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌊"
        highlight="業界No.1"
      />
    </>
  ),
  "real-time-portfolio-monitor": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リアルタイムポートフォリオ管理完全ガイド</h2>
        <p>
          複数口座・複数銘柄のポートフォリオを効率的に管理するには、リアルタイム監視ツールが必須。マネーフォワード・OANDA・Yahoo!ファイナンス・TradingView・証券会社純正アプリの特徴を比較、用途別の最適な組合せ、自動通知設定による機会損失回避、リバランス頻度の最適化まで、プロ級の資産管理手法を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="ポートフォリオ管理ツール比較"
        services={[
          {
            name: "マネーフォワード ME",
            rank: 1,
            highlight: "総合家計管理・投資統合",
            features: [
              "証券口座全て自動連携",
              "月500円・全銀行/証券カバー",
              "時価評価リアルタイム",
              "家計＋投資の統合管理",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "TradingView",
            rank: 2,
            highlight: "チャート分析特化",
            features: [
              "世界の株式・FX・暗号資産",
              "有料月15ドル〜",
              "アラート通知",
              "プロ級のテクニカル分析",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SBI証券アプリ",
            rank: 3,
            highlight: "取引＋管理の一体化",
            features: [
              "口座残高・損益リアルタイム",
              "株価アラート機能",
              "注文・決済直接実行",
              "SBIユーザーなら必須",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">効率的な管理方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>基本：マネフォで家計＋全資産を一元管理（日次確認）</li>
          <li>分析：TradingViewで保有銘柄のチャート＆アラート設定</li>
          <li>取引：証券会社アプリで売買実行</li>
          <li>月1回：配分チェック＆必要なリバランス実行</li>
          <li>年1回：年間パフォーマンス評価・戦略見直し</li>
          <li>自動化：アラート・自動積立で手作業最小化</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ポートフォリオ管理はSBI証券＋マネフォで｜資産一元把握"
        description="SBI証券は業界最大手、マネーフォワードMEとの自動連携で全資産を一元管理。新NISA・iDeCo・特定口座の損益リアルタイム確認、リバランス・配分調整が効率的、プロ級の資産運用体制を個人でも実現可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📊"
        highlight="業界No.1"
      />
    </>
  ),
};
