import type { ReactNode } from "react";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DecisionBox } from "./helpers";
import { AutoInsuranceConversionContent } from "./AutoInsuranceConversionContent";

export const guideContentsPart04: Record<string, ReactNode> = {
  "car-insurance-compare-guide": (
    <AutoInsuranceConversionContent
      page="car-insurance-compare-guide"
      variant="detailed"
    />
  ),
  "smart-beta-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">スマートベータETF完全ガイド</h2>
        <p>
          スマートベータETFは、時価総額加重（S&P500）とは異なる特定要因（ファクター）で銘柄選定するETF。バリュー（VLUE）・モメンタム（MTUM）・クオリティ（QUAL）・低ボラ（USMV）・小型（IJR）などのファクターETFは、長期でS&P500を年1〜2%アウトパフォームする実績。信託報酬0.15〜0.35%とパッシブETFより若干高めも、超過リターンで十分カバー可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="スマートベータETF主要4銘柄"
        services={[
          {
            name: "QUAL（iShares クオリティ）",
            rank: 1,
            highlight: "財務健全性重視｜長期安定",
            features: [
              "ROE・利益安定性・低負債で選定",
              "Apple・Microsoft等の優良企業",
              "信託報酬0.15%",
              "S&P500+1〜2%の実績",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最有力",
          },
          {
            name: "MTUM（iShares モメンタム）",
            rank: 2,
            highlight: "上昇中の銘柄に集中",
            features: [
              "過去6〜12ヶ月の上昇銘柄",
              "四半期リバランス",
              "信託報酬0.15%",
              "トレンドフォロー戦略",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "USMV（iShares 低ボラ）",
            rank: 3,
            highlight: "低ボラでディフェンシブ",
            features: [
              "ボラ低い銘柄に集中",
              "金融危機時の下落抑制",
              "信託報酬0.15%",
              "リスク調整後リターン最高",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "VLUE（iShares バリュー）",
            rank: 4,
            highlight: "割安株中心",
            features: [
              "PER・PBR低め銘柄",
              "金融・エネルギー多め",
              "信託報酬0.15%",
              "バリュー復活相場で活躍",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">スマートベータETF活用戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コア（S&P500）70%＋サテライト（QUAL・MTUM等）30%</li>
          <li>4ファクター分散：QUAL 30%+MTUM 20%+USMV 30%+VLUE 20%</li>
          <li>景気サイクル：拡大期はMTUM・VLUE、後退期はUSMV・QUAL</li>
          <li>長期保有10年以上でS&P500を年1〜2%アウトパフォーム期待</li>
        </ul>
      </section>
      <AffiliateCTA
        title="スマートベータETFはSBI証券で｜QUAL・MTUM・USMV対応"
        description="SBI証券はスマートベータETF（QUAL・MTUM・USMV・VLUE）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、S&P500を超えるリターンを目指せます。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎨"
        highlight="業界No.1"
      />
    </>
  ),
  "factor-investing-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ファクター投資完全ガイド｜5ファクター・モデル</h2>
        <p>
          ファクター投資は、株式のリターンを5つの要因（ファクター）で説明・予測する科学的手法。Fama-French 5ファクターモデル：①市場、②サイズ（小型株プレミアム）、③バリュー（割安株プレミアム）、④収益性、⑤投資。DFA（Dimensional Fund Advisors）が先駆者で、日本でもスマートベータETFで個人投資家も実装可能。アカデミック研究に基づく長期アウトパフォーム戦略です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">5ファクターの実装ETF</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>市場ファクター</strong>：VTI（全米株）・VT（全世界株）</li>
          <li><strong>サイズファクター</strong>：IJR（S&P小型株）・VB（バンガード小型）</li>
          <li><strong>バリューファクター</strong>：VLUE・IVE（S&P500 バリュー）</li>
          <li><strong>収益性ファクター</strong>：QUAL・MOAT（ワイドモート）</li>
          <li><strong>投資ファクター</strong>：企業の設備投資度合、OMFL等</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="ファクター投資の主要ETF"
        services={[
          {
            name: "SBI証券（ファクターETF業界最多）",
            rank: 1,
            highlight: "5ファクター対応完備",
            features: [
              "全5ファクターETF取扱",
              "為替手数料無料",
              "新NISA成長枠対応",
              "長期ポートフォリオ構築",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（シンプル実装）",
            rank: 2,
            highlight: "主要ファクターETF対応",
            features: [
              "VLUE・QUAL・IJR等",
              "米国株手数料無料",
              "NISA口座対応",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ファクター投資の実践配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コア（VTI）50%＋5ファクター均等配分（各10%）</li>
          <li>長期：ファクターのリバランス年1回</li>
          <li>アカデミック研究：S&P500+年1〜3%のアウトパフォーム期待</li>
          <li>注意：5〜10年の短期では逆転も、最低10年以上の保有前提</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ファクター投資はSBI証券で｜5ファクター全対応"
        description="SBI証券は5ファクター投資に必要な全ETF（VTI・IJR・VLUE・QUAL・MOAT等）を完備。為替手数料無料、新NISA成長枠で非課税運用、アカデミック理論で市場を超える。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔬"
        highlight="業界No.1"
      />
    </>
  ),
  "roboadvisor-detailed-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアドバイザー詳細比較</h2>
        <p>
          ロボアドバイザーは、AIが最適な国際分散ポートフォリオを自動構築・運用する投資サービス。ウェルスナビ・THEO・ON COMPASSの3大ロボアドが主要選択肢。手数料年1%前後、最低投資額1万円〜、税金最適化（DeTAX機能）搭載。過去10年のリターン年率5〜8%、新NISA対応も進展中。自分で運用する時間がない人、投資初心者向けの強力な選択肢です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ロボアドバイザー主要3社比較"
        services={[
          {
            name: "ウェルスナビ（WealthNavi）",
            rank: 1,
            highlight: "預かり資産業界No.1｜1.2兆円",
            features: [
              "預かり資産1.2兆円（業界最大）",
              "手数料1.1%（3000万円超で0.55%）",
              "DeTAX（税金最適化）搭載",
              "新NISA対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "THEO（テオ）",
            rank: 2,
            highlight: "docomo連携｜ポイント還元",
            features: [
              "手数料1.1%（5000万超で0.55%）",
              "ドコモユーザーはdポイント還元",
              "最低1万円から",
              "年次リバランス",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ON COMPASS（マネックス系）",
            rank: 3,
            highlight: "マネックス証券で口座連携",
            features: [
              "手数料年0.9825%（業界最安級）",
              "マネックス証券で口座連携",
              "米国大型株メインの運用",
              "最低1000円から",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアドvs自分で運用どっち？</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ロボアド：手数料1%高いが完全お任せ、時間節約</li>
          <li>自分で運用：手数料0.1%以下、年1回リバランスで十分</li>
          <li>資産3000万円以上：自分で運用（手数料差が年30万円以上）</li>
          <li>資産100万円以下：ロボアドで学びながら運用</li>
          <li>両立も可能：ロボアド＋新NISAで王道分散</li>
        </ul>
      </section>
      <AffiliateCTA
        title="自分で運用するならSBI証券で｜手数料最安"
        description="ロボアドの手数料1%を払うのがもったいない方はSBI証券で自分で運用。eMAXIS Slim等の低コストインデックスで、年0.1%以下の信託報酬＋新NISA成長枠で非課税。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🤖"
        highlight="業界No.1"
      />
    </>
  ),
  "crypto-beginner-mistakes-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産初心者が陥る10の失敗</h2>
        <p>
          暗号資産市場は2009年のBitcoin誕生以降、1000倍超の値動きを繰り返す高ボラ市場。初心者の約80%が1年以内に損失・退場すると言われる。FOMO（取り残される恐怖）でピーク買い、レバレッジ乱用、詐欺コイン購入、秘密鍵紛失、税金未申告など、典型的な10の失敗を事例と共に解説。失敗を事前に学ぶことで、長期的な資産形成が可能になります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者の典型的な10の失敗</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①FOMO買い</strong>：値上がり中に焦って高値掴み</li>
          <li><strong>②レバレッジ乱用</strong>：10倍以上のレバレッジで即退場</li>
          <li><strong>③詐欺コイン投資</strong>：「1日で100倍」等の甘言に乗る</li>
          <li><strong>④秘密鍵紛失</strong>：ハードウェアウォレットなし、取引所依存</li>
          <li><strong>⑤フィッシング被害</strong>：偽サイトへのアクセスで資産流出</li>
          <li><strong>⑥税金未申告</strong>：年間利益20万超で申告義務、追徴課税リスク</li>
          <li><strong>⑦暴落時の狼狽売り</strong>：20%下落で損切り、その後反発を逃す</li>
          <li><strong>⑧過剰な分散</strong>：100銘柄以上に分散して管理不能</li>
          <li><strong>⑨証拠金維持率を見ない</strong>：強制ロスカットで資産ゼロ</li>
          <li><strong>⑩ポジション管理甘い</strong>：総資産の50%以上を投入</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="暗号資産の安全な始め方"
        services={[
          {
            name: "SBI VCトレード（SBIグループ）",
            rank: 1,
            highlight: "証券会社の安心感｜日本規制対応",
            features: [
              "SBIグループで信頼性最高",
              "日本金融庁の規制対応",
              "ビットコイン・イーサリアム等",
              "初心者向けUI",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（リスク管理相談）",
            rank: 2,
            highlight: "税制・投資計画の相談",
            features: [
              "暗号資産を含む資産運用相談",
              "税金申告サポート",
              "リスク許容度診断",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">初心者向け5つの鉄則</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>総資産の5%以内に抑える</li>
          <li>ビットコイン70%＋イーサリアム20%＋他10%のコア配分</li>
          <li>レバレッジ厳禁（最初1年は現物のみ）</li>
          <li>ドルコスト平均法で月1〜5万円の積立</li>
          <li>100万円超ならハードウェアウォレットに移管</li>
        </ul>
      </section>
      <AffiliateCTA
        title="暗号資産は大手取引所で｜SBI VCトレードが安心"
        description="暗号資産取引はSBI VCトレードでスタート。SBIグループの安心感、日本規制対応、初心者向けUI、ビットコイン・イーサリアム等主要コインを取扱。100円から始められます。"
        buttonText="SBI VCトレードの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚠️"
        highlight="安全性No.1"
      />
    </>
  ),
  "vietnam-stock-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ベトナム株投資完全ガイド</h2>
        <p>
          ベトナムは人口1億人・GDP成長率7%の東南アジア成長エース。中国＋1政策の恩恵で製造業拠点拡大、若年層比率高・FDI流入でフロンティア市場として注目。VNM ETF（Market Vectors Vietnam）・VN指数連動ETFでベトナム全体に分散投資可能。ドン為替・流動性リスクを意識し、ポートフォリオの3〜5%配分が推奨されます。
        </p>
      </section>
      <ComparisonTableCTA
        title="ベトナム株投資の主要商品"
        services={[
          {
            name: "VNM（Market Vectors Vietnam ETF）",
            rank: 1,
            highlight: "ベトナム株全体に分散",
            features: [
              "ベトナム主要50銘柄",
              "Vinamilk・VinGroup・FPT等",
              "信託報酬0.66%",
              "米国上場で買いやすい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "SBI証券（ベトナム株個別株）",
            rank: 2,
            highlight: "日本の証券会社で唯一対応",
            features: [
              "日本の証券会社唯一のベトナム株取扱",
              "VinGroup・Vinamilk等の個別株",
              "手数料2.2%（最低1200円）",
              "為替は円→ドン直接",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界唯一",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ベトナム投資の3つの追い風</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①人口ボーナス</strong>：1億人・平均年齢32歳</li>
          <li><strong>②製造業拡大</strong>：中国＋1政策でFDI急増</li>
          <li><strong>③内需拡大</strong>：中間層急成長、消費・不動産拡大</li>
          <li>GDP成長率7%、先進国比2倍以上</li>
          <li>過去10年リターン年率8〜12%、ボラ高め</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ベトナム株はSBI証券で｜日本で唯一対応"
        description="SBI証券は日本の証券会社で唯一ベトナム株個別株を取扱。VinGroup・Vinamilk・FPT等のベトナム主要企業に円建てで直接投資可能。VNM ETFも米国市場経由で購入OK。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇻🇳"
        highlight="業界唯一"
      />
    </>
  ),
  "dividend-reinvestment-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">配当再投資完全戦略｜DRIP活用</h2>
        <p>
          配当再投資（DRIP：Dividend Reinvestment Plan）は、受取配当を自動or手動で同銘柄に再投資する強力な複利戦略。30年保有で元本の10倍超、配当込みトータルリターンが株価上昇だけの2〜3倍に達する実績あり。SBI証券・楽天証券・マネックス証券で自動再投資機能、新NISA成長枠で非課税再投資など、税効率最大化の実践法を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">配当再投資の複利効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>元本1000万円・利回り4%・年5%値上がり×30年</li>
          <li>配当受取だけ：累計配当3,000万円＋元本4,322万円＝7,322万円</li>
          <li>配当再投資：累計10,063万円（+2,741万円の差）</li>
          <li>40年保有なら差は8,000万円超に拡大</li>
          <li>S&P500過去100年リターンの約1/3は配当再投資由来</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="配当再投資に対応する証券会社"
        services={[
          {
            name: "SBI証券（自動・手動両対応）",
            rank: 1,
            highlight: "米国株DRIP自動対応",
            features: [
              "米国株の自動再投資可能",
              "新NISAで非課税再投資",
              "投信の分配金再投資自動",
              "手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（手動再投資メイン）",
            rank: 2,
            highlight: "シンプル運用で手動向け",
            features: [
              "配当を手動で再投資",
              "50万以下の取引手数料無料",
              "新NISA対応",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">配当再投資の3つの戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①同銘柄再投資</strong>：DRIPで自動、長期積立に最適</li>
          <li><strong>②新NISA枠集中</strong>：配当20.315%を非課税で再投資</li>
          <li><strong>③ポートフォリオ調整</strong>：配当を割安銘柄に投下、リバランス兼用</li>
          <li>新NISA成長枠年240万円、配当も枠内なら非課税</li>
          <li>20代から40年再投資なら元本の20倍超も現実的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="配当再投資はSBI証券で｜DRIP・新NISA対応"
        description="SBI証券は米国株DRIP自動対応＋新NISA成長枠で配当非課税再投資。投信分配金の自動再投資も可能、手数料無料で複利効果を最大化、長期資産形成のベストパートナー。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📈"
        highlight="業界No.1"
      />
    </>
  ),
  "asset-allocation-age-based-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別資産配分戦略</h2>
        <p>
          「100−年齢」が株式比率の目安と言われるが、現代の長寿化で「110−年齢」「120−年齢」も推奨されつつある。20代は株式90%＋債券10%、30代は株式85%、50代は株式60%、70代は株式40%など、年代別の最適ポートフォリオを、ライフイベント（結婚・住宅購入・教育費・退職）と連動して設計。新NISA・iDeCo活用の年代別最適解を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別推奨配分モデル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>20代</strong>：株式90%＋債券10%（成長重視、長期30年以上）</li>
          <li><strong>30代</strong>：株式85%＋債券15%（住宅・教育費準備開始）</li>
          <li><strong>40代</strong>：株式75%＋債券25%（教育費ピーク、老後準備本格化）</li>
          <li><strong>50代</strong>：株式60%＋債券40%（退職前、リスク抑制）</li>
          <li><strong>60代</strong>：株式50%＋債券50%（退職直後、資産取崩し開始）</li>
          <li><strong>70代</strong>：株式40%＋債券60%（年金補填メイン）</li>
          <li><strong>80代</strong>：株式30%＋債券70%＋現金保有</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="年代別おすすめ運用サービス"
        services={[
          {
            name: "SBI証券（全年代対応）",
            rank: 1,
            highlight: "新NISA＋iDeCoで年代別最適化",
            features: [
              "新NISA年360万円対応",
              "iDeCo運営管理手数料無料",
              "低コストインデックス豊富",
              "年代別モデルポートフォリオ提供",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（FP相談）",
            rank: 2,
            highlight: "ライフプラン設計",
            features: [
              "年代別資産配分提案",
              "保険と投資の最適バランス",
              "相続・教育費計画",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ライフイベント別の調整</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>結婚：夫婦合算で配分、収入状況に応じて株式比率調整</li>
          <li>住宅購入：頭金確保後に株式比率復元、住宅ローン金利と株式リターン比較</li>
          <li>教育費：子供0〜18歳は学資保険＋新NISA成長枠で運用</li>
          <li>退職：一時金受取→5〜10年かけて徐々に債券シフト</li>
          <li>介護：流動性確保、株式比率30%以下に</li>
        </ul>
      </section>
      <AffiliateCTA
        title="年代別資産配分の相談は保険マンモスで｜無料FP相談"
        description="年代・ライフイベントに応じた最適資産配分を保険マンモスで無料相談。経験豊富なFPが保険・投資・税制のバランスを診断、20代から80代まで幅広く対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🎯"
        highlight="無料相談"
      />
    </>
  ),
  "sustainable-investing-sri-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">サステナブル投資・SRI完全ガイド</h2>
        <p>
          サステナブル投資（SRI：Socially Responsible Investing）は、社会課題解決と投資リターン両立を目指す投資手法。ネガティブスクリーニング（武器・タバコ・化石燃料除外）、ESG統合（環境・社会・ガバナンス評価）、インパクト投資（社会的影響測定）の3分類あり。SPYX・ESGU・SUSL等のSRI ETFで、機関投資家と同等のサステナブル投資が個人でも可能になりました。
        </p>
      </section>
      <ComparisonTableCTA
        title="サステナブル投資の主要ETF"
        services={[
          {
            name: "ESGU（iShares ESG 米国）",
            rank: 1,
            highlight: "ESGスコア上位米国株｜信託報酬0.15%",
            features: [
              "MSCI USA ESGフォーカス指数連動",
              "300社のESG上位銘柄",
              "信託報酬0.15%",
              "S&P500とほぼ同等リターン",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "SPYX（SPDR S&P500 化石燃料除外）",
            rank: 2,
            highlight: "化石燃料完全除外",
            features: [
              "エネルギー株除外のS&P500",
              "信託報酬0.2%",
              "450銘柄構成",
              "クリーンエネルギー時代の指標",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SUSL（iShares MSCI KLD 400）",
            rank: 3,
            highlight: "社会的責任400企業",
            features: [
              "社会的責任高い400企業",
              "信託報酬0.25%",
              "1990年からの長い歴史",
              "初期SRIの代表",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">サステナブル投資のリターン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>過去10年リターン：ESG ETFはS&P500と同等〜+1%</li>
          <li>リスク：S&P500より低い（ESGスコア高い企業は財務健全）</li>
          <li>2022年エネルギー高騰で一時的劣位、中長期では挽回</li>
          <li>機関投資家の資金流入で構造的追い風</li>
          <li>新NISA成長枠で非課税運用可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="サステナブル投資はSBI証券で｜ESGU・SPYX対応"
        description="SBI証券はサステナブル投資ETF（ESGU・SPYX・SUSL）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、社会貢献と投資リターンの両立を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌱"
        highlight="業界No.1"
      />
    </>
  ),
  "global-dividend-aristocrats-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">世界の配当貴族完全ガイド</h2>
        <p>
          配当貴族（Dividend Aristocrats）とは、25年以上連続増配を達成したエリート銘柄群。S&P500配当貴族指数（NOBL）・欧州配当貴族ETF（EDIV）・日本連続増配銘柄（花王・KDDI・小林製薬等）、ジョンソン&ジョンソン・コカコーラ・P&G等の王道銘柄を網羅。過去30年でS&P500を上回るリターン＋低ボラの「攻守最強」の投資戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="世界の配当貴族ETF比較"
        services={[
          {
            name: "NOBL（ProShares S&P500配当貴族）",
            rank: 1,
            highlight: "25年連続増配の米国エリート",
            features: [
              "S&P500配当貴族指数連動",
              "約65社の連続増配企業",
              "信託報酬0.35%",
              "配当利回り2.5%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "REGL（ProShares S&P中型配当貴族）",
            rank: 2,
            highlight: "中型株の15年増配企業",
            features: [
              "中型株配当貴族",
              "NOBLより成長性高い",
              "信託報酬0.40%",
              "配当利回り2%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "VIG（Vanguard 配当増加）",
            rank: 3,
            highlight: "10年連続増配｜信託報酬最安",
            features: [
              "10年以上連続増配",
              "信託報酬0.06%（最安）",
              "300社分散",
              "配当利回り1.8%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">配当貴族の代表銘柄</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>米国：ジョンソン&ジョンソン（JNJ）</strong>：61年連続増配、配当利回り3%</li>
          <li><strong>米国：コカコーラ（KO）</strong>：61年連続増配、配当利回り3%</li>
          <li><strong>米国：P&G（PG）</strong>：67年連続増配、配当利回り2.4%</li>
          <li><strong>日本：花王</strong>：34年連続増配、配当利回り3%</li>
          <li><strong>日本：KDDI</strong>：22年連続増配、配当利回り3.5%</li>
          <li><strong>日本：小林製薬</strong>：23年連続増配、配当利回り2%</li>
        </ul>
      </section>
      <AffiliateCTA
        title="配当貴族投資はSBI証券で｜NOBL・VIG対応"
        description="SBI証券は配当貴族ETF（NOBL・VIG・REGL）・米国個別株（JNJ・KO・PG等)・日本連続増配銘柄完備。為替手数料無料、新NISA成長枠で非課税、世代を超える安定運用。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👑"
        highlight="業界No.1"
      />
    </>
  ),
  "asia-pacific-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">アジア太平洋ETF完全ガイド</h2>
        <p>
          アジア太平洋地域は世界のGDP成長の中心。VPL（Vanguard太平洋）・AAXJ（iSharesアジア除日本）・EPP（iShares太平洋除日本）等のETFで、日本・韓国・台湾・オーストラリア・香港・シンガポール等に分散投資可能。信託報酬0.08〜0.5%、配当利回り2〜3%、ポートフォリオの10〜20%配分が推奨です。
        </p>
      </section>
      <ComparisonTableCTA
        title="アジア太平洋ETF主要4銘柄"
        services={[
          {
            name: "VPL（Vanguard 太平洋）",
            rank: 1,
            highlight: "信託報酬0.08%｜最安",
            features: [
              "日本60%＋豪州＋韓国＋台湾等",
              "信託報酬0.08%（業界最安）",
              "2500銘柄分散",
              "配当利回り3%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
          {
            name: "AAXJ（iShares アジア除日本）",
            rank: 2,
            highlight: "日本除いた中韓台等",
            features: [
              "中国・韓国・台湾・インド等",
              "日本除外で新興アジア特化",
              "信託報酬0.69%",
              "配当利回り2.3%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "EPP（iShares 太平洋除日本）",
            rank: 3,
            highlight: "豪州＋韓国＋香港＋シンガポール",
            features: [
              "日本除外で新興・先進アジア",
              "豪州が最大比重",
              "信託報酬0.47%",
              "配当利回り3.5%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">アジア太平洋投資戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>日本重視：VPL（日本60%含む）</li>
          <li>新興アジア重視：AAXJ（中韓台印）</li>
          <li>先進・豪州：EPP（豪州・香港・シンガポール）</li>
          <li>個別国ETF：FXI（中国）・INDA（インド）・EWY（韓国）で微調整</li>
          <li>ポートフォリオ10〜20%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="アジア太平洋ETFはSBI証券で｜VPL・AAXJ・EPP対応"
        description="SBI証券はアジア太平洋ETF（VPL・AAXJ・EPP）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、世界のGDP成長の中心であるアジアの恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌏"
        highlight="業界No.1"
      />
    </>
  ),
  "europe-stock-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">欧州株投資完全ガイド</h2>
        <p>
          欧州は世界第2位の経済圏、ネスレ・LVMH・ASML・アストラゼネカ等のグローバル企業を擁する。VGK（Vanguard欧州）・IEUR（iShares欧州）・EZU（ユーロ圏）等のETFで分散投資可能。米国株に比べ割安（PER15倍 vs 米国25倍）、配当利回り3〜4%と高め。ユーロ為替リスクを意識し、ポートフォリオの5〜15%配分が推奨です。
        </p>
      </section>
      <ComparisonTableCTA
        title="欧州株ETF主要3銘柄"
        services={[
          {
            name: "VGK（Vanguard 欧州）",
            rank: 1,
            highlight: "信託報酬0.08%｜最安",
            features: [
              "欧州17カ国1300銘柄",
              "信託報酬0.08%（業界最安）",
              "配当利回り3.2%",
              "英・仏・独・スイス中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
          {
            name: "IEUR（iShares 欧州）",
            rank: 2,
            highlight: "流動性高・オプション対応",
            features: [
              "欧州15カ国1000銘柄",
              "信託報酬0.09%",
              "配当利回り3.0%",
              "オプション取引対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "EZU（iShares ユーロ圏）",
            rank: 3,
            highlight: "ユーロ圏のみに集中",
            features: [
              "ユーロ導入11カ国のみ",
              "独・仏・蘭・伊・西中心",
              "信託報酬0.51%",
              "配当利回り3.3%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">欧州投資のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>米国株より割安（PER15倍 vs 米国25倍）</li>
          <li>配当利回り3〜4%で高配当</li>
          <li>グローバル企業多数（ネスレ・LVMH・ASML等）</li>
          <li>米国と低相関でポートフォリオ分散効果</li>
          <li>注意：ユーロ為替・景気停滞リスク</li>
        </ul>
      </section>
      <AffiliateCTA
        title="欧州株投資はSBI証券で｜VGK・IEUR・個別株対応"
        description="SBI証券は欧州ETF（VGK・IEUR・EZU）・欧州個別株（ネスレ・LVMH・ASML等）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇪🇺"
        highlight="業界No.1"
      />
    </>
  ),
  "monthly-budget-optimization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">月次予算最適化完全ガイド</h2>
        <p>
          月次予算の50-30-20ルールは、収入を「必要経費50%・余暇30%・貯蓄投資20%」に配分する黄金比率。手取り30万円なら必要経費15万円・余暇9万円・貯蓄投資6万円。固定費削減（通信・保険・光熱費）で余裕を作り、新NISAつみたて枠で月10万円積立が実現可能。家計簿アプリ（マネーフォワードME・Zaim）で自動化、貯蓄率30%達成への道を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">固定費削減のターゲット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①通信費</strong>：格安SIM乗換で月5000円削減（年6万円）</li>
          <li><strong>②生命保険</strong>：見直しで月1〜3万円削減</li>
          <li><strong>③光熱費</strong>：新電力・新ガスで月3000円削減</li>
          <li><strong>④サブスク</strong>：使っていないサービス解約で月5000円削減</li>
          <li><strong>⑤住宅ローン借換え</strong>：金利差0.3%で年20万円削減</li>
          <li>合計で月3〜8万円の固定費削減可能</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="家計最適化サービス"
        services={[
          {
            name: "マネーフォワードクラウド（家計簿）",
            rank: 1,
            highlight: "銀行・カード連携2500以上",
            features: [
              "銀行・カード自動連携",
              "家計簿自動記録",
              "固定費見直し提案",
              "月500円〜",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "保険マンモス（保険見直し）",
            rank: 2,
            highlight: "固定費の最大費目を最適化",
            features: [
              "生命保険見直し相談",
              "月1〜3万円の削減事例多数",
              "完全無料相談",
              "オンライン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">貯蓄投資20%の最適配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>緊急資金（生活費3〜6ヶ月分）：定期預金・MMF</li>
          <li>中期資金（5〜10年）：新NISA成長枠で高配当ETF</li>
          <li>長期資金（20年超）：新NISAつみたて枠で全世界株</li>
          <li>老後資金：iDeCoで所得控除＋運用益非課税</li>
          <li>目安：手取り30万円なら月6万円（NISA 4万＋iDeCo 2万）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="家計見直し＋保険最適化は保険マンモスで｜完全無料"
        description="固定費の最大費目である保険見直しを保険マンモスで無料相談。月1〜3万円の削減事例多数、FPが家計全体を診断＋投資配分提案。オンライン相談対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="💰"
        highlight="無料相談"
      />
    </>
  ),
  "gift-tax-detailed-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">贈与税詳細ガイド｜2024年改正対応</h2>
        <p>
          贈与税は、親族間の資産移転に課される税金。暦年贈与（年110万円非課税）、相続時精算課税（2500万円特別控除＋2024年から年110万円基礎控除）、教育資金1500万円・結婚子育て1000万円の特例など、多彩な節税スキームあり。2024年改正で相続前3年→7年の生前贈与加算となり、早めの計画的贈与が重要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">贈与税の2つの方式</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①暦年贈与</strong>：年110万円非課税、超過分は10〜55%課税</li>
          <li><strong>②相続時精算課税</strong>：2500万円特別控除＋年110万円基礎控除（2024年〜）</li>
          <li>一度選択したら変更不可（精算課税→暦年贈与戻せない）</li>
          <li>60歳以上の親/祖父母から20歳以上の子/孫への贈与</li>
          <li>相続時に精算課税分も相続財産に加算</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="贈与・相続対策関連サービス"
        services={[
          {
            name: "保険マンモス（生命保険活用）",
            rank: 1,
            highlight: "非課税枠500万円×相続人",
            features: [
              "終身保険で非課税枠確保",
              "生前贈与と併用の設計",
              "受取人指定で遺産分割円滑化",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "ココナラ（税理士マッチング）",
            rank: 2,
            highlight: "贈与・相続の専門税理士",
            features: [
              "贈与税申告代行",
              "相続税シミュレーション",
              "税理士1時間5000円〜",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">非課税特例を最大活用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>暦年贈与：年110万円×子2人×30年＝6600万円の無税移転</li>
          <li>教育資金一括贈与：1500万円非課税（30歳まで）</li>
          <li>結婚子育て資金贈与：1000万円非課税（50歳まで）</li>
          <li>住宅取得資金贈与：最大1000万円非課税</li>
          <li>夫婦間贈与の特例：居住用不動産2000万円非課税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="贈与・相続対策の生命保険は保険マンモスで｜完全無料"
        description="生前贈与＋生命保険の組合せで相続税を最小化。保険マンモスで無料FP相談、終身保険の非課税枠500万円×相続人を活用した総合戦略を提案。オンライン対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🎁"
        highlight="無料相談"
      />
    </>
  ),
  "nenkin-kuriage-kurisage-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年金繰上げ・繰下げ完全ガイド</h2>
        <p>
          公的年金の受給開始年齢は原則65歳だが、60歳〜75歳の範囲で調整可能。繰上げ受給：最大60歳まで早く、1ヶ月あたり0.4%減額（60歳受給で24%減）。繰下げ受給：最大75歳まで遅く、1ヶ月あたり0.7%増額（75歳受給で84%増）。長寿リスク対応、退職金・iDeCoとの併用タイミング最適化まで解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">繰上げ・繰下げの損益分岐点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>60歳繰上げ（-24%）</strong>：80歳まで生きるなら損、79歳以下は得</li>
          <li><strong>65歳通常受給</strong>：平均余命（男81歳・女87歳）で標準</li>
          <li><strong>70歳繰下げ（+42%）</strong>：82歳まで生きるなら得</li>
          <li><strong>75歳繰下げ（+84%）</strong>：87歳まで生きるなら得</li>
          <li>男性平均余命81歳→70歳繰下げが合理的、女性87歳→75歳繰下げも視野</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="年金受給最適化サービス"
        services={[
          {
            name: "保険マンモス（年金・ライフプラン）",
            rank: 1,
            highlight: "受給タイミング相談",
            features: [
              "年金繰上げ・繰下げ相談",
              "iDeCo・退職金との併用設計",
              "長寿リスクシミュレーション",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "SBI証券（退職金＋NISA連携）",
            rank: 2,
            highlight: "繰下げ中のブリッジ運用",
            features: [
              "繰下げ期間中の生活費を運用",
              "退職金特別定期預金",
              "新NISA成長枠で運用",
              "iDeCo口座併用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">繰下げ戦略のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>長寿リスク対策（90歳以上生きれば受取総額最大化）</li>
          <li>75歳繰下げで受給額84%増（月20万円→月36.8万円）</li>
          <li>税金面でも有利（低年齢時は働いて収入あり、繰下げで所得調整）</li>
          <li>注意：繰下げ中は年金収入ゼロなので生活費準備必須</li>
          <li>健康状態・資産状況で判断、保険マンモスのFP相談推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="年金繰下げ戦略は保険マンモスで｜FP無料相談"
        description="年金繰上げ・繰下げの最適タイミングを保険マンモスで無料相談。iDeCo・退職金・資産運用との併用設計、長寿リスクシミュレーションまで、経験豊富なFPが対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📅"
        highlight="無料相談"
      />
    </>
  ),
  "corporate-pension-kigyonenkin-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">企業年金完全ガイド｜DB・DC・基金の違い</h2>
        <p>
          企業年金は大きく3種類：①確定給付企業年金（DB：給付額確定）、②確定拠出企業年金（DC：拠出額確定・運用自己責任）、③厚生年金基金（代行返上完了で縮小）。転職時のポータビリティ（DCはiDeCoに移管可）、退職時の受取方法（一時金・年金・併用）、税制優遇まで、複雑な企業年金制度を整理します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">企業年金3種類の比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>DB（確定給付）</strong>：給付額確定、企業が運用責任</li>
          <li><strong>DC（確定拠出）</strong>：拠出額確定、個人が運用責任、ポータビリティあり</li>
          <li><strong>厚生年金基金</strong>：2014年以降新設不可、既存は代行返上→DB化</li>
          <li><strong>ハイブリッド型</strong>：一部DB＋一部DCの混合型</li>
          <li>転職時：DC→iDeCo移管OK、DB→一時金or 他社DBに移管</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="企業年金の運用サービス"
        services={[
          {
            name: "松井証券 iDeCo（DC移管先）",
            rank: 1,
            highlight: "運営管理手数料無料",
            features: [
              "企業型DCからiDeCo移管OK",
              "運営管理手数料無料",
              "40本厳選ラインナップ",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
            badge: "500円/件",
          },
          {
            name: "SBI証券 iDeCo",
            rank: 2,
            highlight: "加入者No.1・商品豊富",
            features: [
              "加入者業界No.1",
              "eMAXIS Slim等の低コスト",
              "運営管理手数料無料",
              "信託報酬最安",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">企業年金の受取方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①一時金受取</strong>：退職所得控除（勤続年数×40〜70万円）＋1/2課税</li>
          <li><strong>②年金受取</strong>：公的年金等控除適用、毎月安定収入</li>
          <li><strong>③併用受取</strong>：一部一時金＋一部年金、税制最適化</li>
          <li>退職金と同年受取は退職所得控除を合算計算（要注意）</li>
          <li>iDeCo・退職金との3本立てで、受取年度分散が節税のカギ</li>
        </ul>
      </section>
      <AffiliateCTA
        title="企業型DCからの移管は松井証券iDeCoで｜手数料無料"
        description="退職・転職時の企業型DCは松井証券iDeCoに移管。運営管理手数料無料、40本厳選ラインナップで老後資金運用継続。加入者サポート充実、乗換手続きも簡単。"
        buttonText="松井証券iDeCoの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ"
        icon="🏛️"
        highlight="手数料無料"
      />
    </>
  ),
  "debt-consolidation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">債務整理完全ガイド｜3つの法的手段</h2>
        <p>
          多重債務・返済困難な借金問題を解決する法的手段が債務整理。①任意整理（将来利息カット・3〜5年分割）、②個人再生（借金5分の1〜10分の1に圧縮・住宅ローン除外可能）、③自己破産（借金全額免責・財産は清算）の3つ。弁護士費用20〜50万円、ブラックリスト（信用情報ブラック）5〜10年、生活への影響と再建ロードマップを解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="債務整理の相談窓口"
        services={[
          {
            name: "ココナラ（弁護士マッチング）",
            rank: 1,
            highlight: "債務整理の専門弁護士多数",
            features: [
              "弁護士1時間5000円〜相談",
              "任意整理・個人再生・自己破産",
              "費用見積も事前確認",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "保険マンモス（生活再建相談）",
            rank: 2,
            highlight: "債務整理後の家計再建",
            features: [
              "保険見直しで固定費削減",
              "再建期の家計設計",
              "緊急資金づくり相談",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">債務整理3つの違い</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①任意整理</strong>：将来利息カット、3〜5年分割。弁護士費用4〜6万円/社</li>
          <li><strong>②個人再生</strong>：借金を5分の1〜10分の1に圧縮。住宅ローン除外可能</li>
          <li><strong>③自己破産</strong>：借金全額免責、財産は清算。保険・車等一部除外</li>
          <li>選び方：任意整理→個人再生→自己破産の順で検討</li>
          <li>借金300万円以下なら任意整理、500万〜2000万円なら個人再生、返済不能なら自己破産</li>
        </ul>
      </section>
      <AffiliateCTA
        title="債務整理の弁護士相談はココナラで｜初回相談5000円〜"
        description="債務整理の専門弁護士をココナラで探せる。任意整理・個人再生・自己破産のプロが、あなたの状況に最適な方法を提案。費用も事前見積で安心、会員登録無料で即相談開始。"
        buttonText="ココナラで弁護士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="⚖️"
        highlight="登録無料"
      />
    </>
  ),
  "crowd-lending-comparison-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ソーシャルレンディング完全比較</h2>
        <p>
          ソーシャルレンディング（貸付型クラウドファンディング）は、個人が企業に1万円〜貸付する投資手段。利回り5〜10%と銀行預金の100倍以上、株式より低ボラの魅力。Funds・クラウドバンク・OwnersBook・LENDEX等、主要10社以上の選択肢あり。元本割れリスク（年1〜3%）、運営会社倒産リスクを意識して分散投資が鉄則です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ソーシャルレンディング主要3社"
        services={[
          {
            name: "Funds（ファンズ）",
            rank: 1,
            highlight: "上場企業向け貸付｜低リスク",
            features: [
              "上場企業・大手子会社向け",
              "利回り2〜4%",
              "累計調達額500億円超",
              "1円〜投資可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "安全性No.1",
          },
          {
            name: "クラウドバンク",
            rank: 2,
            highlight: "業界最大級｜不動産中心",
            features: [
              "不動産・太陽光発電案件中心",
              "利回り6〜8%",
              "累計募集1800億円超",
              "1万円〜",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "OwnersBook",
            rank: 3,
            highlight: "不動産特化｜運営老舗",
            features: [
              "不動産案件特化",
              "利回り4〜6%",
              "1万円〜投資",
              "運営8年以上の実績",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ソーシャルレンディングのリスク対策</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>複数社分散：3〜5社に分散投資</li>
          <li>案件分散：1社内で複数案件に分散</li>
          <li>運営健全性：上場企業運営 or 累計実績大の会社優先</li>
          <li>税制：雑所得扱い、20万超で確定申告必要</li>
          <li>ポートフォリオ5〜10%以内の配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="安全な運用はSBI証券で｜個別社債も選択肢"
        description="ソーシャルレンディングのリスクが気になる方はSBI証券の個人向け社債（利回り1〜3%）も検討。元本割れリスク低く、購入手数料無料。新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💸"
        highlight="業界No.1"
      />
    </>
  ),
  "financial-literacy-test-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">金融リテラシー検定完全ガイド</h2>
        <p>
          金融リテラシー向上は、資産形成・防衛の第一歩。FP（ファイナンシャルプランナー）3級→2級→1級の段階的取得、証券外務員（一種・二種）、簿記検定（日商2級・1級）など、金融系資格の取得ロードマップ。FP3級は1ヶ月の学習で取得可、FP2級は副業・転職にも活用可能。ユーキャン・TAC等の通信講座活用で効率的に学べます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめ金融系資格</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>FP3級</strong>：学習1ヶ月、取得率80%、家計管理の基礎</li>
          <li><strong>FP2級</strong>：学習3ヶ月、取得率40%、副業・転職にも有利</li>
          <li><strong>FP1級</strong>：学習1年、取得率10%、独立・高収入可</li>
          <li><strong>証券外務員</strong>：金融業界必須、学習1ヶ月</li>
          <li><strong>日商簿記2級</strong>：経理・財務理解、学習3ヶ月</li>
          <li><strong>宅建士</strong>：不動産投資・仕事両用、学習6ヶ月</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="資格学習のおすすめサービス"
        services={[
          {
            name: "すらら（オンライン学習）",
            rank: 1,
            highlight: "社会人の基礎学習にも",
            features: [
              "金融・経済の基礎学習",
              "AI学習で効率的",
              "月額8,800円〜",
              "無料体験あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
          {
            name: "ココナラ（FP・税理士マッチング）",
            rank: 2,
            highlight: "個別指導・相談",
            features: [
              "FP個別指導5000円〜",
              "資格取得後の活用相談",
              "副業としてのFP相談",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FP資格の活用法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>自分・家族の資産設計（節税・保険・投資）</li>
          <li>副業：ココナラ等でFP相談1時間5000円〜</li>
          <li>転職：金融・不動産・保険業界で評価</li>
          <li>独立：FP事務所開業、年収500万円〜</li>
          <li>投資判断の質向上、詐欺商品の見分け</li>
        </ul>
      </section>
      <AffiliateCTA
        title="FP資格取得後の副業はココナラで｜月5〜30万円"
        description="FP資格を活かして副業収入化。ココナラで家計相談・保険見直し・投資アドバイスを1時間5000円〜販売。400万人ユーザーで集客も容易、会員登録無料で即販売開始。"
        buttonText="ココナラに登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📚"
        highlight="登録無料"
      />
    </>
  ),
  "sbi-rakuten-economy-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI経済圏 vs 楽天経済圏</h2>
        <p>
          SBI経済圏（三井住友カード・SBI証券・住信SBIネット銀行・Olive）と楽天経済圏（楽天カード・楽天証券・楽天銀行・楽天市場・楽天モバイル）の頂上対決。クレカ積立ポイント（三井住友0.5〜3% vs 楽天0.5〜1%）、銀行金利（SBI 0.001〜0.2% vs 楽天0.1〜0.4%）、ポイント還元、総合力で年10〜30万円の差が出ます。両方活用も選択肢です。
        </p>
      </section>
      <ComparisonTableCTA
        title="SBI vs 楽天経済圏対決"
        services={[
          {
            name: "SBI経済圏（三井住友×SBI）",
            rank: 1,
            highlight: "クレカ積立最大3%還元",
            features: [
              "三井住友NL 0.5%（Olive 3%）",
              "SBI証券クレカ積立3%",
              "住信SBI銀行金利0.2%（優遇時）",
              "投信Vポイント還元",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "楽天経済圏",
            rank: 2,
            highlight: "楽天ポイントで日常使い",
            features: [
              "楽天カード1%還元",
              "楽天証券クレカ積立0.5〜1%",
              "楽天銀行金利0.1%",
              "楽天市場でSPU最大16倍",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">経済圏選びのポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新NISA積立重視→SBI経済圏（クレカ積立3%）</li>
          <li>日常ショッピング重視→楽天経済圏（楽天市場SPU）</li>
          <li>投信保有ポイント重視→SBI（業界最高水準）</li>
          <li>銀行金利重視→住信SBIネット銀行（優遇時0.2%）</li>
          <li>両方併用も有効：新NISAはSBI、日常決済は楽天カード</li>
        </ul>
      </section>
      <AffiliateCTA
        title="SBI経済圏の入口はSBI証券口座開設から"
        description="SBI証券口座開設でSBI経済圏スタート。三井住友カード（Olive）連携でクレカ積立最大3%、投信残高0.1%還元、住信SBIネット銀行の高金利まで、年10万円以上の特典獲得。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏆"
        highlight="業界No.1"
      />
    </>
  ),
  "home-sales-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">マイホーム売却時の税金完全ガイド</h2>
        <p>
          マイホーム売却時の譲渡所得税は、売却価格−（取得費＋譲渡費用）の利益に課税。ただし「3000万円特別控除」「10年超所有の軽減税率14.21%」「買換え特例」等の特例あり、多くの場合で無税or低税率になります。住宅ローン残債あり・退職後の売却・相続後の売却など、ケース別の税制最適化を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">マイホーム売却の税金特例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>3000万円特別控除</strong>：譲渡所得から3000万円控除（居住用条件）</li>
          <li><strong>軽減税率（10年超所有）</strong>：譲渡所得6000万円以下の部分が14.21%税率</li>
          <li><strong>買換え特例</strong>：一定要件で課税繰延可能</li>
          <li><strong>損失通算・繰越</strong>：住宅ローン残債ありの売却損は3年繰越可</li>
          <li>相続後3年以内の売却：被相続人の取得費・期間引継ぎ</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="マイホーム売却関連サービス"
        services={[
          {
            name: "家づくり相談所（売却＋買替え）",
            rank: 1,
            highlight: "売却価格査定＋買替え提案",
            features: [
              "マイホーム売却査定",
              "買替え相談",
              "専門家紹介無料",
              "税理士相談可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
          {
            name: "ココナラ（税理士マッチング）",
            rank: 2,
            highlight: "譲渡所得税の確定申告",
            features: [
              "譲渡所得の計算代行",
              "確定申告書作成",
              "税理士1時間5000円〜",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">売却時の節税5ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①3000万円特別控除の適用確認（居住要件）</li>
          <li>②所有期間10年超で軽減税率（14.21%）適用</li>
          <li>③買替え特例 or 損失通算の有利判定</li>
          <li>④譲渡費用（仲介手数料・印紙・登記費用）を漏れなく計上</li>
          <li>⑤税理士相談で最適化＋確定申告</li>
        </ul>
      </section>
      <AffiliateCTA
        title="マイホーム売却＋税理士相談はココナラで"
        description="マイホーム売却の譲渡所得税計算・確定申告をココナラの税理士に依頼。1時間5000円〜、3000万円特別控除・軽減税率の適用判定まで、総合的に税金最適化。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🏠"
        highlight="登録無料"
      />
    </>
  ),
  "digital-money-paypay-linepay-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">電子マネー・PayPay・LINE Pay完全比較</h2>
        <p>
          キャッシュレス決済は、現金決済より年3〜5%のポイント還元で手取りアップ。PayPay（5800万ユーザー）・楽天ペイ・d払い・au PAY・LINE Payの5大コード決済、Suica・WAON・nanaco等の電子マネー、クレジットカードとの使い分けで年間5〜10万円のポイント獲得が現実的です。年齢・用途別の最適組合せを解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="コード決済5社比較"
        services={[
          {
            name: "PayPay（ペイペイ）",
            rank: 1,
            highlight: "ユーザー数No.1｜加盟店最多",
            features: [
              "ユーザー数5800万超",
              "加盟店400万超",
              "還元率0.5〜1.5%",
              "個人間送金OK",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "シェアNo.1",
          },
          {
            name: "楽天ペイ",
            rank: 2,
            highlight: "楽天経済圏との相乗効果",
            features: [
              "楽天ポイント2重取り",
              "SPU連携で楽天市場ポイントUP",
              "還元率1〜1.5%",
              "楽天カードとの併用最強",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "d払い（NTTドコモ）",
            rank: 3,
            highlight: "dポイント還元｜ドコモユーザー向け",
            features: [
              "dポイント還元0.5〜1%",
              "Amazon・コンビニOK",
              "ドコモ料金支払いでdポイント",
              "ショッピングモールでdカード併用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">電子マネー・カードとの使い分け</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コード決済：スマホで完結、還元率高い</li>
          <li>交通系IC（Suica）：電車・駅ナカ特化</li>
          <li>流通系（WAON・nanaco）：特定店舗の割引</li>
          <li>クレジットカード：高額決済、ポイント2重取りベース</li>
          <li>ベスト組合せ：楽天カード→楽天ペイ→楽天ポイントの三重取り</li>
        </ul>
      </section>
      <AffiliateCTA
        title="SBI経済圏のOliveでもキャッシュレス最大3%還元"
        description="SBI・三井住友グループのOlive（ワンカード）は、利用シーン別に最大3%還元。SBI証券クレカ積立・PayPay等のコード決済も対応、経済圏統合で年10万円超のポイント獲得。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📱"
        highlight="業界No.1"
      />
    </>
  ),
  "side-business-kakutei-shinkoku-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">副業の確定申告完全ガイド</h2>
        <p>
          副業所得の年間合計が20万円を超えたら確定申告義務。青色申告（65万円控除）の活用、必要経費の正しい計上、マイナンバー記載、住民税の普通徴収選択（副業バレ回避）、eTax電子申告までを解説。正しい知識で節税＋副業バレ防止を両立、年間10〜30万円の節税効果も可能です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">副業申告の5つのポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①所得20万円超</strong>で確定申告義務（収入ではなく所得＝収入−経費）</li>
          <li><strong>②青色申告</strong>：開業届＋青色申告承認申請で65万円控除</li>
          <li><strong>③必要経費</strong>：仕事用通信費・取材費・書籍・家賃按分等</li>
          <li><strong>④住民税</strong>：申告時に「自分で納付」選択で会社に副業バレ回避</li>
          <li><strong>⑤e-Tax</strong>：電子申告で10万円控除追加（青色申告とe-Taxで65万円）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="副業の会計・申告サポート"
        services={[
          {
            name: "マネーフォワード（クラウド確定申告）",
            rank: 1,
            highlight: "月1078円で副業申告完結",
            features: [
              "月額1,078円〜（業界最安）",
              "銀行・カード自動連携",
              "青色申告65万円控除対応",
              "e-Tax電子申告",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "ココナラ（税理士マッチング）",
            rank: 2,
            highlight: "副業申告専門税理士",
            features: [
              "確定申告代行3万円〜",
              "副業開始の相談5000円〜",
              "税務調査対応",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">経費計上できる副業費目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>通信費：仕事用スマホ・Wi-Fi（家事按分30〜50%）</li>
          <li>書籍・セミナー：事業関連の学習費</li>
          <li>交通費：打合せ・取材・出張</li>
          <li>家賃按分：作業スペース面積分（総家賃の20〜30%）</li>
          <li>水道光熱費：家事按分（家賃同様）</li>
          <li>パソコン・備品：減価償却対象（10万円未満は一括経費）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="副業の確定申告はマネフォ＋税理士で｜月1078円〜"
        description="マネーフォワード（月1,078円）で青色申告65万円控除を自動化、難しい経費判断は ココナラの税理士に相談（5000円〜）。副業年収300万円なら節税効果10〜30万円、元は即取れます。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📝"
        highlight="登録無料"
      />
    </>
  ),
  "medical-expense-deduction-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医療費控除完全ガイド</h2>
        <p>
          医療費控除は、年間の医療費が10万円（所得200万円以下は所得の5%）を超えた分を所得から控除する制度。家族分合算OK、出産・歯科治療・介護費用・交通費も対象。セルフメディケーション税制（市販薬12,000円超）との選択制で、年間5〜10万円の還付金獲得が現実的です。サラリーマン・自営業問わず活用できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">医療費控除の対象費目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①診療・治療費</strong>：病院・歯科・整骨院（一部）</li>
          <li><strong>②出産・不妊治療</strong>：検査・入院・出産費用</li>
          <li><strong>③医薬品</strong>：医師処方薬・市販薬（治療目的）</li>
          <li><strong>④介護費用</strong>：一部の介護サービス</li>
          <li><strong>⑤交通費</strong>：通院・入院の公共交通機関</li>
          <li>対象外：健康診断・予防接種・美容整形・サプリ</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="医療費控除の申告サポート"
        services={[
          {
            name: "ココナラ（税理士マッチング）",
            rank: 1,
            highlight: "確定申告代行5000円〜",
            features: [
              "医療費控除の代行申告",
              "家族分の最適化アドバイス",
              "eTax電子申告対応",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "保険マンモス（医療保険見直し）",
            rank: 2,
            highlight: "高額医療費の備え",
            features: [
              "医療費控除＋医療保険の総合見直し",
              "高額療養費制度との組合せ",
              "がん保険・先進医療特約",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">医療費控除の節税効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年間医療費50万円・所得税率20%→控除額40万円×20%＝還付8万円</li>
          <li>住民税も10%減額→追加4万円軽減</li>
          <li>年間合計12万円の節税効果</li>
          <li>家族分合算で還付額さらに拡大</li>
          <li>e-Tax電子申告で時間短縮、スマホ申告も可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="医療費控除＋医療保険見直しは保険マンモスで｜無料相談"
        description="医療費控除で還付金獲得＋医療保険の見直しを保険マンモスで無料相談。高額療養費制度・がん保険・先進医療特約の組合せで、万一の医療費に備える最適設計を提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="💊"
        highlight="無料相談"
      />
    </>
  ),
  "ideco-product-selection-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo商品選定完全ガイド</h2>
        <p>
          iDeCoは運用商品で手取りが大きく変わる。eMAXIS Slim全世界株式・S&P500等の低コストインデックスが王道、アクティブファンドは選び方次第、バランス型は手間なし運用に最適。年代別の配分（20代：株式100%、50代：株式60%+債券40%）、スイッチング戦略、受取時の税金まで、SBI・楽天・松井のiDeCo商品選定を完全解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCoおすすめ商品タイプ別</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>王道インデックス</strong>：eMAXIS Slim全世界株式・S&P500（信託報酬0.05〜0.1%）</li>
          <li><strong>低コストバランス</strong>：楽天・全世界バランス（株式60%型、信託報酬0.2%）</li>
          <li><strong>米国集中</strong>：iFree S&P500、信託報酬0.15%</li>
          <li><strong>先進国株式</strong>：eMAXIS Slim先進国株式、信託報酬0.1%</li>
          <li><strong>債券含む</strong>：年代上がったらスイッチング検討</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="iDeCoおすすめ金融機関"
        services={[
          {
            name: "SBI証券 iDeCo（加入者No.1）",
            rank: 1,
            highlight: "商品数最多｜運営手数料無料",
            features: [
              "加入者業界No.1",
              "eMAXIS Slim全世界・S&P500",
              "運営管理手数料無料",
              "37商品のラインナップ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券 iDeCo",
            rank: 2,
            highlight: "40本厳選｜シンプル選択",
            features: [
              "40本厳選ラインナップ",
              "運営管理手数料無料",
              "低コストインデックス中心",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
            badge: "500円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年代別配分モデル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>20〜30代：全世界株式100%（eMAXIS Slim全世界）</li>
          <li>40代：全世界株式80%＋先進国債券20%</li>
          <li>50代前半：全世界株式60%＋先進国債券30%＋定期預金10%</li>
          <li>50代後半：株式40%＋債券40%＋定期預金20%（スイッチング開始）</li>
          <li>60歳受給直前：定期預金中心（暴落リスク回避）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCoは松井証券で｜運営管理手数料無料＋40本厳選"
        description="松井証券iDeCoは運営管理手数料無料、40本厳選ラインナップで初心者も迷わない。eMAXIS Slim全世界株式・S&P500等の低コスト商品で、年60万円超の節税＋非課税運用を実現。"
        buttonText="松井証券iDeCoの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ"
        icon="🎯"
        highlight="手数料無料"
      />
    </>
  ),
  "nisa-insurance-ideco-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">NISA vs 保険 vs iDeCo 3制度比較</h2>
        <p>
          資産形成の3つの柱：新NISA（非課税枠年360万円）・iDeCo（全額所得控除）・生命保険（死亡保障＋一部運用）。それぞれ目的・税制優遇・流動性が異なり、最適な組合せで年100万円超の節税効果も。所得税率20%以上の会社員は「iDeCo 27.6万円＋NISA 360万円＋最小限の保険」が王道、所得税率低い若年層はNISA優先の配分が効率的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3制度の特徴比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>新NISA</strong>：年360万円非課税、流動性高、生涯1800万円まで</li>
          <li><strong>iDeCo</strong>：全額所得控除＋運用益非課税＋受取時控除、60歳まで引出不可</li>
          <li><strong>生命保険</strong>：死亡保障＋一部運用、相続対策に有効、流動性低</li>
          <li>目的：NISA=資産形成、iDeCo=老後資金、保険=死亡保障</li>
          <li>税制優遇：iDeCo＞NISA＞保険の順</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="3制度活用のおすすめサービス"
        services={[
          {
            name: "SBI証券（NISA＋iDeCo）",
            rank: 1,
            highlight: "2大税制優遇制度を集約",
            features: [
              "新NISA年360万円非課税",
              "iDeCo運営管理手数料無料",
              "クレカ積立1〜3%還元",
              "加入者業界No.1",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（保険最適化）",
            rank: 2,
            highlight: "最小限の保険で相続対策",
            features: [
              "必要最低限の生命保険",
              "終身保険の非課税枠活用",
              "医療保険・がん保険見直し",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別の最適配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収300万円：NISAつみたて月3万円＋iDeCo月1万円＋掛捨保険のみ</li>
          <li>年収500万円：NISA月10万円＋iDeCo月2.3万円＋終身保険500万円</li>
          <li>年収800万円：NISA年360万円満額＋iDeCo月2.3万円＋相続対策の終身</li>
          <li>年収1000万円超：上記＋ふるさと納税＋マイクロ法人検討</li>
        </ul>
      </section>
      <AffiliateCTA
        title="NISA＋iDeCoの集約はSBI証券で｜業界No.1"
        description="SBI証券は新NISA＋iDeCoの2大制度に対応、合計年600万円超の税制優遇枠を活用可能。クレカ積立1〜3%還元、eMAXIS Slim等の低コスト商品で長期資産形成のベスト。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚖️"
        highlight="業界No.1"
      />
    </>
  ),
  "micro-investing-1000yen-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">1000円から始める投資</h2>
        <p>
          投資スタートに数百万円は不要。1000円・1万円から始められる少額投資が現代のスタンダード。投信は100円〜、単元未満株は1株〜、ETFは1口〜購入可能。SBI・楽天・松井のミニ株取引手数料無料化で、コスト障壁も撤廃。積立投資の複利効果で、月1万円×20年運用→約400万円、月3万円→1200万円の資産形成が現実的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">1000円投資の4つの手段</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①投資信託</strong>：100円〜、eMAXIS Slim全世界株式が王道</li>
          <li><strong>②単元未満株（ミニ株）</strong>：1株から、数百円でAppleやトヨタを買える</li>
          <li><strong>③ETF</strong>：1口〜、S&P500連動（VOO・1306）等</li>
          <li><strong>④ポイント投資</strong>：楽天・Tポイント・dポイントで1円〜</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="少額投資におすすめの証券会社"
        services={[
          {
            name: "SBI証券（S株・投信100円〜）",
            rank: 1,
            highlight: "単元未満株手数料無料",
            features: [
              "S株（単元未満株）手数料無料",
              "投信100円〜積立",
              "クレカ積立1%還元",
              "業界No.1",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（ミニ株手数料無料）",
            rank: 2,
            highlight: "50万円以下の取引手数料無料",
            features: [
              "50万円以下手数料無料",
              "ミニ株取引",
              "NISA対応",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">月1万円・3万円・5万円の20年後</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月1万円×20年（年利5%）：約410万円（元本240万円）</li>
          <li>月3万円×20年：約1,230万円（元本720万円）</li>
          <li>月5万円×20年：約2,050万円（元本1,200万円）</li>
          <li>月1万円×40年：約1,530万円（元本480万円）</li>
          <li>新NISA活用で非課税、複利効果最大化</li>
        </ul>
      </section>
      <AffiliateCTA
        title="少額投資はSBI証券で｜100円〜・S株手数料無料"
        description="SBI証券は投信100円〜、S株（単元未満株）手数料無料で少額投資最適。新NISAつみたて枠＋クレカ積立1%還元で、月1万円からでも20年で400万円超の資産形成が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💴"
        highlight="業界No.1"
      />
    </>
  ),
  "insurance-cancel-refund-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険解約の判断ガイド</h2>
        <p>
          不要になった生命保険・医療保険の解約判断。解約返戻金（終身保険なら10〜20年で元本回収）、解約控除（契約10年以内は解約控除で返戻金減額）、乗換えタイミング、見直し先の選び方など、年数十万円の固定費削減事例多数。保険マンモス等の無料相談で客観的判断、月3〜5万円の保険料を月1万円に圧縮→年30万円の可処分所得アップが現実的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">解約を検討すべき保険</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①加入時からライフスタイル変化（結婚・子供独立等）</li>
          <li>②保険料負担が家計圧迫（手取りの5%超は過剰）</li>
          <li>③同じ保障が公的制度でカバー（高額療養費・遺族年金）</li>
          <li>④新しい保険の方が条件有利（解約返戻金含めて比較）</li>
          <li>⑤運用型保険（予定利率低）→新NISAの方が効率的</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="保険解約・見直しサービス"
        services={[
          {
            name: "保険マンモス（無料見直し相談）",
            rank: 1,
            highlight: "FPが客観的に判断",
            features: [
              "解約・継続の判断相談",
              "保険商品の比較提案",
              "月数万円の削減事例多数",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "SBI証券（解約返戻金の運用）",
            rank: 2,
            highlight: "解約返戻金を新NISAで運用",
            features: [
              "受取金を新NISA成長枠に",
              "eMAXIS Slim等で長期運用",
              "保険より高利回り期待",
              "流動性も高い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">保険解約の3ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①現状把握：保険証券の内容・解約返戻金額確認</li>
          <li>②代替保障の検討：公的制度・代替保険・貯蓄でカバー可能か</li>
          <li>③解約手続き：保険会社に書面提出、解約返戻金受取（7〜10日）</li>
          <li>注意：短期解約は解約控除で返戻金減、10年超なら元本割れしにくい</li>
          <li>解約返戻金の運用は新NISAで非課税・長期複利が効率的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険見直しは保険マンモスで｜完全無料FP相談"
        description="不要な保険の解約・見直しを保険マンモスで無料相談。月数万円の保険料削減事例多数、削減分を新NISAで運用すれば20年で数百万円の資産形成。年1回の見直し推奨。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🔄"
        highlight="無料相談"
      />
    </>
  ),
  "internet-banking-rate-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行金利・手数料完全比較</h2>
        <p>
          ネット銀行は、普通預金金利、ATM無料回数、他行振込無料回数、証券口座連携、給与振込特典などで差が出ます。優遇金利は条件付きのことが多いため、表示金利だけでなく、対象残高、上限額、優遇ステージ、手数料無料回数をセットで確認しましょう。
        </p>
      </section>
      <DecisionBox
        title="結論：メイン口座は金利よりも手数料と使い方で選ぶ"
        points={[
          "給与振込、クレカ引落、投資用口座、生活費口座のどれに使うかを先に決める。",
          "高金利キャンペーンは上限額や期間があるため、恒常的な条件と分けて見る。",
          "ATMと振込の無料回数が不足すると、利息より手数料の損失が大きくなることがある。",
        ]}
      />
      <ComparisonTableCTA
        title="ネット銀行主要4行比較"
        services={[
          {
            name: "住信SBIネット銀行（SBI証券連携）",
            rank: 1,
            highlight: "SBI証券連携で外貨手数料無料",
            features: [
              "優遇時金利0.2%",
              "ATM無料月2〜20回",
              "米ドル為替手数料無料",
              "SBI証券クレカ積立対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "SBI経済圏",
          },
          {
            name: "楽天銀行（マネーブリッジ）",
            rank: 2,
            highlight: "楽天証券連携で金利0.1%",
            features: [
              "マネーブリッジで普通預金0.1%",
              "楽天ポイント連携",
              "給与振込でステージUP",
              "楽天カードとの連携",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "auじぶん銀行（au経済圏）",
            rank: 3,
            highlight: "金利0.4%（上乗せ）",
            features: [
              "au経済圏で最大0.4%",
              "Pontaポイント連携",
              "auカブコム証券連携",
              "ATM無料月8回",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行選びの4ポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①金利：優遇ステージ活用で年0.1〜0.4%確保</li>
          <li>②ATM無料：月5回以上は欲しい</li>
          <li>③他行振込無料：月3回以上あれば合格</li>
          <li>④証券会社連携：SBI-住信SBI、楽天-楽天銀行の経済圏内</li>
        </ul>
      </section>
      <AffiliateCTA
        title="住信SBIネット銀行＋SBI証券で経済圏構築"
        description="住信SBIネット銀行とSBI証券を連携する場合は、優遇金利、ATM無料回数、為替手数料、投資口座との使い分けを確認しましょう。特典条件は変更されることがあるため、申込前に公式情報を確認してください。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏦"
        highlight="業界No.1"
      />
    </>
  ),
  "credit-score-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">信用情報・クレジットスコア完全ガイド</h2>
        <p>
          個人信用情報は、CIC（クレカ・ローン）・JICC（消費者金融）・KSC（全国銀行協会）の3機関が管理。住宅ローン・自動車ローン審査で確認され、信用スコア低いと借入金利が高くなる or 審査不合格。スコア向上のコツ（延滞ゼロ・長期利用履歴・クレカ枚数適正化）、開示請求の手順、ブラックリスト解除時期を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">信用情報の3機関</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>CIC</strong>：クレジットカード・割賦・ローン（最大）</li>
          <li><strong>JICC</strong>：消費者金融・信販系</li>
          <li><strong>KSC</strong>：銀行系ローン・住宅ローン</li>
          <li>開示：オンライン500〜1000円、郵送1000円</li>
          <li>延滞記録：5年保持、自己破産は7〜10年</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="信用情報関連サービス"
        services={[
          {
            name: "家づくり相談所（住宅ローン審査対策）",
            rank: 1,
            highlight: "信用情報＋住宅ローン事前相談",
            features: [
              "信用情報の事前確認",
              "住宅ローン審査対策",
              "複数行一括審査",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
          {
            name: "ココナラ（FP・弁護士相談）",
            rank: 2,
            highlight: "信用情報トラブル相談",
            features: [
              "信用情報の開示サポート",
              "ブラック解除相談",
              "FP・弁護士5000円〜",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">信用スコア向上の6つのコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①延滞ゼロを維持（クレカ・公共料金・携帯）</li>
          <li>②クレカ長期利用履歴（5年以上継続保有）</li>
          <li>③複数枚保有（3〜5枚が理想、10枚超は過剰）</li>
          <li>④借入金額を利用枠の30%以内に</li>
          <li>⑤頻繁なクレカ新規申込を避ける</li>
          <li>⑥リボ・キャッシングは信用スコア低下要因</li>
        </ul>
      </section>
      <AffiliateCTA
        title="住宅ローン審査前の信用情報確認＋相談は家づくり相談所で"
        description="住宅ローン審査を控えた方は、家づくり相談所で事前に信用情報の確認＋対策相談。複数行一括審査でベスト金利を獲得、信用スコア向上のアドバイスも無料で受けられる。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="📊"
        highlight="無料相談"
      />
    </>
  ),
  "mortgage-flat35-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フラット35完全ガイド</h2>
        <p>
          フラット35は、住宅金融支援機構と民間金融機関の提携で提供される全期間固定金利の住宅ローン。最長35年、金利1.5〜2%（2026年）、融資上限8000万円。金利Sプラン（省エネ・耐震住宅で0.25%減）、買取型と保証型の違い、変動金利との比較、借換えシミュレーションまで、長期安心の住宅ローン選びを解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">フラット35の特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>全期間固定金利（金利変動リスクゼロ）</li>
          <li>最長35年、融資上限8000万円</li>
          <li>返済比率：年収400万超で35%以内、以下で30%以内</li>
          <li>団体信用生命保険は任意加入（別途加入料）</li>
          <li>金利Sプラン：省エネ・耐震住宅で当初10年0.25%減</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="フラット35＋比較相談サービス"
        services={[
          {
            name: "家づくり相談所（住宅ローン総合相談）",
            rank: 1,
            highlight: "フラット35＋民間ローン比較",
            features: [
              "フラット35の審査対策",
              "複数金融機関一括審査",
              "金利比較＋団信比較",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
          {
            name: "保険マンモス（団信比較）",
            rank: 2,
            highlight: "団信の最適選択",
            features: [
              "団信（通常・がん・3大疾病）比較",
              "フラット35の団信任意加入判断",
              "生命保険との併用最適化",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フラット35 vs 変動金利</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>フラット35：金利1.5〜2%固定、35年安心</li>
          <li>変動金利：金利0.3〜0.5%、将来上昇リスク</li>
          <li>2026年金利上昇局面でフラット35の人気急上昇</li>
          <li>リスク許容度低い家庭＝フラット35、高い家庭＝変動</li>
          <li>ミックスローン（半分固定＋半分変動）も選択肢</li>
        </ul>
      </section>
      <AffiliateCTA
        title="フラット35＋住宅ローン比較は家づくり相談所で"
        description="フラット35と民間住宅ローンを一括比較。家づくり相談所の専門家が、あなたの年収・物件・返済計画に最適な住宅ローンを提案。複数金融機関を横断審査で最安金利獲得。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏘️"
        highlight="無料相談"
      />
    </>
  ),
  "education-loan-scholarship-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">奨学金 vs 教育ローン完全比較</h2>
        <p>
          大学・専門学校の学費調達の2大手段が奨学金と教育ローン。日本学生支援機構（JASSO）の奨学金は、第一種（無利子・学力/家計基準）・第二種（有利子、在学中無利子）・給付型（返還不要）の3種類。民間教育ローン（銀行・労金）は金利1.5〜3.5%、審査緩やか。学費平均500〜800万円の調達戦略を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">奨学金vs教育ローン比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>奨学金（第一種無利子）</strong>：年収500万以下・学力基準、最も有利</li>
          <li><strong>奨学金（第二種有利子）</strong>：在学中無利子、卒業後返還開始、年利0.4%</li>
          <li><strong>奨学金（給付型）</strong>：低所得世帯のみ、返還不要の理想形</li>
          <li><strong>民間教育ローン</strong>：金利1.5〜3.5%、親名義、即融資可</li>
          <li>併用可能：奨学金＋教育ローンで総額カバー</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="教育資金準備のサービス"
        services={[
          {
            name: "SBI証券（ジュニアNISA・親の新NISA）",
            rank: 1,
            highlight: "早期の教育資金積立",
            features: [
              "親の新NISAで教育資金準備",
              "月3万×18年＝約1050万円",
              "児童手当の全額投資",
              "18歳までに十分な資金形成",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "すらら（学費軽減の学習）",
            rank: 2,
            highlight: "塾費用節約＋成績アップ",
            features: [
              "月8,800円〜で塾代わり",
              "AI学習で効率的",
              "大学受験対応",
              "無料体験あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学費調達の3つの戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①早期積立：0歳から親の新NISA月3万円→18歳で1000万円超</li>
          <li>②奨学金活用：第一種（無利子）優先、次に第二種</li>
          <li>③民間ローン：不足分のみ、金利1.5〜2%の銀行系</li>
          <li>④返還免除制度：教員・研究職等で一部免除可能</li>
          <li>⑤大学院進学時：学部奨学金と別枠で追加借入可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="教育資金の早期準備はSBI証券で｜月3万円×18年で1000万円"
        description="0歳から月3万円を新NISAに積立→18歳で約1050万円（年利5%想定）。児童手当もフル活用で教育資金を完全カバー、奨学金に頼らず大学進学できる資産形成が実現可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎓"
        highlight="業界No.1"
      />
    </>
  ),
  "_legacy-car-insurance-compare-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">自動車保険詳細比較</h2>
        <p>
          自動車保険はダイレクト系（ネット販売）と代理店系で年間保険料が2〜5万円も違う。ダイレクト系（ソニー損保・SBI損保・三井ダイレクト）は代理店手数料なしで年3〜5万円、代理店系（東京海上・損保ジャパン）は手厚いサポート込みで年5〜10万円。等級・年齢条件・特約（対人無制限・弁護士費用等）の最適化で、年数万円の節約が可能です。
        </p>
      </section>
      <AffiliateCTA
        title="満期前にまとめて比較｜インズウェブ自動車保険"
        description="いまの等級・運転者範囲・車種をそろえて複数社を比較。更新前に差額を見てから、乗換えるか継続するかを判断できます。"
        buttonText="無料で一括見積もりする"
        href="/go/sbi-insweb-auto"
        icon="🚗"
        highlight="成果実績あり"
        page="car-insurance-compare-guide"
        position="intro_sbi_insweb_cta"
      />
      <ComparisonTableCTA
        title="一括見積もりと主要ネット型の比較"
        page="car-insurance-compare-guide"
        services={[
          {
            name: "インズウェブ自動車保険一括見積",
            rank: 1,
            highlight: "最大20社をまとめて比較｜乗換候補の洗い出し向き",
            features: [
              "複数社の見積もりを一度に比較",
              "満期1〜2か月前の乗換検討に使いやすい",
              "年齢・等級・車種条件ごとの差額を確認しやすい",
              "無料で比較候補を絞り込める",
            ],
            href: "/go/sbi-insweb-auto",
            badge: "一括比較",
            buttonText: "無料で一括見積もりする →",
          },
          {
            name: "ソニー損保（ダイレクト系No.1）",
            rank: 2,
            highlight: "走行距離制｜ネット型の代表格",
            features: [
              "走行距離による保険料調整",
              "ロードサービスが充実",
              "ネット型の比較候補として知名度が高い",
              "インズウェブで他社と並べて確認しやすい",
            ],
            href: "https://www.sonysonpo.co.jp/",
          },
          {
            name: "SBI損保（ネット専業最安級）",
            rank: 3,
            highlight: "SBIグループ｜ネット完結型",
            features: [
              "ネット完結で見積もりしやすい",
              "対人・対物無制限を基本に検討",
              "SBIグループの安心感",
              "他社見積もりと保険料差を比較したい人向き",
            ],
            href: "https://www.sbisonpo.co.jp/",
          },
        ]}
      />
      <DecisionBox
        title="結論：保険会社名で選ぶ前に条件をそろえる"
        points={[
          "現在の等級、年齢条件、運転者範囲、年間走行距離をそろえると、保険料差の理由が見えやすい。",
          "最初に一括見積もりで候補を広げ、上位2〜3社だけ補償内容を細かく確認する。",
          "満期直前では選択肢が狭くなるため、更新日の1〜2か月前に見積もりを取る。",
        ]}
        note="事故対応やロードサービスの違いは、保険料の安さだけでは比較できないため、補償条件と一緒に確認します。"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">保険料節約の5つのポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①ダイレクト系に乗換え（年2〜5万円削減）</li>
          <li>②年齢条件最大化（全年齢→35歳以上で30%減）</li>
          <li>③運転者限定（家族限定・本人限定で5〜10%減）</li>
          <li>④特約整理（不要な車両保険・人身傷害を削減）</li>
          <li>⑤等級最大化（20等級到達で最大63%割引）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="自動車保険はインズウェブで一括見積もり"
        description="ソニー損保・SBI損保などのネット型を含め、複数社の見積もりをまとめて比較。年齢・等級・車種を入力して、いまの保険料との差額を確認できます。"
        buttonText="インズウェブで無料見積もり"
        href="/go/sbi-insweb-auto"
        icon="🚗"
        highlight="無料一括見積"
        page="car-insurance-compare-guide"
        position="footer_sbi_insweb_cta"
      />
    </>
  ),
  "smartphone-carrier-compare-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">スマホ料金プラン完全比較</h2>
        <p>
          スマホ通信費は家計の固定費の代表。大手3キャリア（ドコモ・au・ソフトバンク）の月7000〜10000円 vs 格安SIM（IIJmio・UQ・ahamo・povo）の月1000〜3000円で、年5〜10万円の差。楽天モバイルの1078円〜3278円従量制、ahamo（ドコモ回線）の2970円20GB、IIJmio（格安SIM最安）月500円〜など、ニーズ別の最適選択を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="スマホ料金プラン3系統"
        services={[
          {
            name: "楽天モバイル（従量制・無制限）",
            rank: 1,
            highlight: "データ無制限3,278円｜楽天経済圏",
            features: [
              "3GB以下1,078円・無制限3,278円",
              "楽天市場SPU+1倍",
              "国内通話無料",
              "海外2GBまで無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "経済圏連携",
          },
          {
            name: "ahamo（ドコモ回線）",
            rank: 2,
            highlight: "2,970円で20GB｜ドコモ品質",
            features: [
              "月2,970円で20GB",
              "ドコモ回線で高速安定",
              "国内通話5分無料",
              "海外20GBまで無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "IIJmio（格安SIM最安級）",
            rank: 3,
            highlight: "月500円〜｜家族割あり",
            features: [
              "月500円〜（2GB）",
              "家族割でさらに安く",
              "ドコモ・au回線選択可",
              "サポート充実",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年間削減額の具体例</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ドコモ8000円→ahamo 2970円：年6万円削減</li>
          <li>au 9000円→povo 2728円：年7.5万円削減</li>
          <li>ソフトバンク10000円→楽天モバイル3278円：年8万円削減</li>
          <li>家族4人ドコモ→IIJmio家族割：年20万円超削減</li>
          <li>削減分を新NISAで運用→20年で約200万円の資産形成</li>
        </ul>
      </section>
      <AffiliateCTA
        title="通信費削減＋投資の総合設計はSBI証券で"
        description="スマホ通信費の削減分を新NISAで運用。月5000円削減なら年6万円、20年で約200万円の資産形成。SBI証券のクレカ積立＋新NISAで、節約＋資産形成の一石二鳥を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📱"
        highlight="業界No.1"
      />
    </>
  ),
  "international-tax-treaty-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">国際税務・租税条約完全ガイド</h2>
        <p>
          日本から米国株・欧州株に投資する際、配当金は現地国で源泉徴収（米国10%・欧州15%等）＋日本で20.315%課税の二重課税が発生。日米租税条約で配当は10%に軽減、外国税額控除で二重課税回避が可能。正しい手続きで年数万円〜数十万円の税金を節約できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">二重課税と回避策</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>米国株配当：米国10%＋日本20.315%＝実効28.28%</li>
          <li>外国税額控除：確定申告で米国10%を日本税から控除</li>
          <li>新NISA内の米国株配当：米国10%は控除不可（NISA非課税のため）</li>
          <li>日米租税条約：通常税率30%→10%に軽減済</li>
          <li>特定口座：自動計算で楽、自分で申告なら還付金獲得</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="国際税務対応の証券会社"
        services={[
          {
            name: "SBI証券（外国税額控除自動計算）",
            rank: 1,
            highlight: "年間取引報告書で自動計算",
            features: [
              "米国株配当の源泉徴収明示",
              "外国税額控除用データ提供",
              "確定申告書作成ツール",
              "e-Tax連携",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "ココナラ（国際税務専門税理士）",
            rank: 2,
            highlight: "複雑な国際税務を代行",
            features: [
              "外国税額控除の確定申告",
              "海外不動産投資の税務",
              "税理士1時間5000円〜",
              "会員登録無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">国際税務の5ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①W-8BEN提出：米国株保有前に証券会社経由で提出（租税条約適用）</li>
          <li>②年間取引報告書の配当欄を確認</li>
          <li>③確定申告で外国税額控除を申告（所得税・住民税の両方）</li>
          <li>④還付金受取（3〜4月頃）</li>
          <li>⑤e-Tax活用で電子申告＋還付金を早期受取</li>
        </ul>
      </section>
      <AffiliateCTA
        title="国際税務の税理士相談はココナラで｜5000円〜"
        description="米国株・欧州株の配当金・売却益の国際税務を、ココナラの税理士に相談。外国税額控除の確定申告、海外不動産投資の税務、国際相続まで、5000円〜の個別相談で解決。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🌐"
        highlight="登録無料"
      />
    </>
  ),
  "forex-carry-trade-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FXキャリートレード完全ガイド</h2>
        <p>
          キャリートレードは、低金利通貨を売り、高金利通貨を買ってスワップポイント（金利差収益）を得る戦略。メキシコペソ（金利9%）・トルコリラ（金利40%）・南アフリカランド（金利7%）等の高金利通貨が主な対象。10万円の証拠金で1万通貨（約50万円相当）保有なら、年利3〜10%のスワップ収入。為替リスク管理が鍵です。
        </p>
      </section>
      <ComparisonTableCTA
        title="スワップ運用向けFX口座"
        services={[
          {
            name: "SBI FXトレード",
            rank: 1,
            highlight: "1通貨〜｜スワップ業界最高水準",
            features: [
              "1通貨〜取引可能（約6円〜）",
              "メキシコペソ・トルコリラ高スワップ",
              "スプレッド業界最狭",
              "手数料完全無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "GMOクリック証券",
            rank: 2,
            highlight: "取引高世界No.1",
            features: [
              "高金利通貨スワップ高水準",
              "安定した運営",
              "1000通貨〜",
              "スマホアプリ使いやすい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">キャリートレードの注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>為替急落リスク（2018年トルコリラ-40%）で大損失</li>
          <li>レバレッジは2〜3倍以内に抑制</li>
          <li>ストップロス設定で下落時の損失限定</li>
          <li>分散：複数高金利通貨に分散投資</li>
          <li>長期保有目的、短期売買は不要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="キャリートレードはSBI FXトレードで｜1通貨〜少額OK"
        description="SBI FXトレードは1通貨（約6円）から取引可能、メキシコペソ・トルコリラのスワップ業界最高水準。証拠金1万円でスタート、年利5〜10%のスワップ収入獲得が現実的。"
        buttonText="SBI FXトレードの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💱"
        highlight="業界No.1"
      />
    </>
  ),
  "cfd-investing-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">CFD（差金決済取引）完全ガイド</h2>
        <p>
          CFD（Contract for Difference）は、株価指数・コモディティ・暗号資産等を証拠金で取引する派生商品。日経225・S&P500・DAX・金・原油をレバレッジ10倍で取引可能、取引時間24時間、空売りも容易。IG証券・GMOクリック証券・DMM CFDが主要プラットフォーム。株式投資より多様な投資対象、短期トレード向きです。
        </p>
      </section>
      <ComparisonTableCTA
        title="CFD取引の主要証券会社"
        services={[
          {
            name: "SBI証券（米国ETF・株式CFD）",
            rank: 1,
            highlight: "通常取引＋CFD両対応",
            features: [
              "日経225・S&P500・DAX",
              "金・原油・暗号資産",
              "手数料業界最安",
              "24時間取引",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "GMOクリック証券（CFD）",
            rank: 2,
            highlight: "業界シェアNo.1 CFD",
            features: [
              "業界シェアNo.1のCFD",
              "取引手数料無料",
              "スプレッド業界最狭",
              "アプリ使いやすい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">CFDの活用法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>株価指数（S&P500・日経225）の方向性投資</li>
          <li>金・原油のインフレヘッジ＋短期トレード</li>
          <li>空売り（ショート）で下落相場でも利益</li>
          <li>ヘッジ取引：株式ロング＋日経CFDショートで下落リスク相殺</li>
          <li>レバレッジ管理：総資産5%以内のポジション</li>
        </ul>
      </section>
      <AffiliateCTA
        title="CFD取引はSBI証券で｜手数料業界最安"
        description="SBI証券は株価指数CFD・商品CFD・暗号資産CFDに対応、手数料業界最安＋24時間取引。新NISA・通常取引と連動した総合ポートフォリオ構築が可能、業界No.1の取引環境。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📊"
        highlight="業界No.1"
      />
    </>
  ),
  "option-trading-basics-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オプション取引完全ガイド</h2>
        <p>
          オプションは、特定の価格で株・ETFを買う/売る権利を取引する金融商品。コール（買う権利）とプット（売る権利）の2種類、買い手は損失限定＋利益無限大、売り手は利益限定＋損失無限大。ヘッジ戦略（カバードコール・プロテクティブプット）で保有株の収益向上＋リスク管理が可能。高度な投資手法です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">オプションの基本</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>コール</strong>：買う権利。原資産上昇で利益</li>
          <li><strong>プット</strong>：売る権利。原資産下落で利益</li>
          <li><strong>権利行使価格</strong>：権利行使できる価格</li>
          <li><strong>プレミアム</strong>：オプションの購入代金</li>
          <li><strong>満期</strong>：期限到達で権利消滅</li>
          <li><strong>インザマネー</strong>：原資産価格が行使価格を上回る（コール）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="オプション取引の証券会社"
        services={[
          {
            name: "SBI証券（日経225オプション）",
            rank: 1,
            highlight: "国内最大の日経オプション取引",
            features: [
              "日経225オプション主力",
              "米国オプション取引（限定）",
              "取引手数料業界最安",
              "取引ツール豊富",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（日経225オプション）",
            rank: 2,
            highlight: "手数料無料（一部）",
            features: [
              "日経225オプション対応",
              "1デイ信用取引との連携",
              "サポート充実",
              "顧客満足度高い",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">オプションのヘッジ戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>カバードコール</strong>：保有株＋コール売りで追加収入</li>
          <li><strong>プロテクティブプット</strong>：保有株＋プット買いで下落保険</li>
          <li><strong>カラー戦略</strong>：カバードコール＋プロテクティブプットで上下限定</li>
          <li><strong>ストラドル</strong>：コール＋プット同時買いで大きな値動き狙い</li>
          <li>初心者はカバードコールから、月1〜2%の追加収入が現実的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="オプション取引はSBI証券で｜業界最安手数料"
        description="SBI証券は日経225オプション・米国オプション（限定）に対応、取引手数料業界最安。カバードコール・プロテクティブプット等のヘッジ戦略で、保有株の収益最大化が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📉"
        highlight="業界No.1"
      />
    </>
  ),
  "day-trading-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">デイトレード戦略完全ガイド</h2>
        <p>
          デイトレードは、1日のうちにポジションを完結させる短期売買スタイル。板情報（Order Book）の読み方、スキャルピング（数秒〜数分）・デイトレ（数時間）の戦略、資金管理の鉄則（1回の損失を資金の2%以内）、勝率50%超で利益を出すロジック。SBI・楽天・松井の手数料比較、成功率20%と言われる厳しい世界の実態まで解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="デイトレ向けの証券会社"
        services={[
          {
            name: "SBI証券（国内株・米国株）",
            rank: 1,
            highlight: "手数料無料｜約定速度最速",
            features: [
              "国内株手数料無料",
              "米国株も手数料無料",
              "約定速度業界最速",
              "ツール豊富",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（デイトレ1日信用）",
            rank: 2,
            highlight: "1日信用取引金利0%",
            features: [
              "1日信用取引金利0%",
              "50万円以下手数料無料",
              "空売りし放題",
              "デイトレ特化ツール",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">デイトレの5つの鉄則</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①1回の損失は資金の2%以内（100万円なら2万円まで）</li>
          <li>②必ずストップロス設定（建値-1〜3%）</li>
          <li>③利確は損切の2〜3倍（リスクリワード1:2以上）</li>
          <li>④取引時間は9:00〜10:30＋14:00〜15:00の好機のみ</li>
          <li>⑤感情取引厳禁、ルール厳守</li>
        </ul>
      </section>
      <AffiliateCTA
        title="デイトレは松井証券で｜1日信用取引金利0%"
        description="松井証券の1日信用取引は金利0%、空売りし放題で、デイトレーダーに最適。50万円以下の手数料無料、専用ツール充実。初心者は少額から始めて、ルール厳守でコツコツ積み上げを。"
        buttonText="松井証券の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ"
        icon="⚡"
        highlight="金利0%"
      />
    </>
  ),
  "swing-trading-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">スイングトレード完全ガイド</h2>
        <p>
          スイングトレードは、数日〜数週間保有する中期トレード戦略です。デイトレより時間的余裕がありますが、短期売買である以上、損失管理が欠かせません。移動平均線・MACD・RSI等のテクニカル指標、出来高、時価総額、ボラティリティを確認し、損切り幅と利確条件を先に決めてから取引することが重要です。
        </p>
      </section>
      <DecisionBox
        title="結論：スイングトレードは利益目標より損失上限を先に決める"
        points={[
          "エントリー前に損切り位置、保有期間、利確条件、1回あたりの許容損失を決める。",
          "信用取引やレバレッジを使う場合は、追証や急落時の対応を必ず確認する。",
          "初心者は検証用の少額取引から始め、成績を記録してから金額を増やす。",
        ]}
        note="短期売買は税金、手数料、心理的負担も大きいため、長期分散投資とは別枠で管理してください。"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">スイングトレードの基本指標</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>移動平均線</strong>：25日・75日線の上抜け/下抜けでトレンド判定</li>
          <li><strong>MACD</strong>：トレンド転換のシグナル検出</li>
          <li><strong>RSI</strong>：30以下買われすぎ解消、70以上売られすぎ</li>
          <li><strong>出来高</strong>：急増で大きな動きの前兆</li>
          <li><strong>ボリンジャーバンド</strong>：±2σ逸脱で逆張り</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="スイングトレードの証券会社"
        services={[
          {
            name: "SBI証券（国内株・米国株スイング）",
            rank: 1,
            highlight: "日本株＋米国株で国際分散スイング",
            features: [
              "国内株手数料無料",
              "米国株手数料無料",
              "テクニカル分析ツール",
              "情報量業界No.1",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（スイング用信用取引）",
            rank: 2,
            highlight: "50万以下手数料無料",
            features: [
              "50万円以下手数料無料",
              "信用取引で空売り可能",
              "テクニカルツール",
              "サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">スイングトレードの実践5ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①銘柄選定：出来高100万株以上・時価総額500億円以上</li>
          <li>②エントリー：移動平均線上抜け＋RSI 30-70内</li>
          <li>③ストップロス：建値からの許容損失幅を事前に決める</li>
          <li>④利確：+10〜20%or 移動平均線下抜けで売却</li>
          <li>⑤週1回の振り返り：勝率・リスクリワード確認</li>
        </ul>
      </section>
      <AffiliateCTA
        title="スイングトレードはSBI証券で｜国内＋米国株"
        description="SBI証券なら国内株と米国株の取引環境、テクニカル分析ツール、マーケット情報をまとめて確認できます。短期売買では損失管理が重要なため、取引前に手数料・注文方法・リスクを確認しましょう。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌊"
        highlight="業界No.1"
      />
    </>
  ),
  "gold-advanced-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">金投資上級戦略｜4形態の使い分け</h2>
        <p>
          金投資は4つの形態：①現物（地金・金貨）、②金ETF（1326・GLD・IAU）、③金鉱株（GDX・NEM・NUGT）、④金先物。2026年の金価格1g1万円超の現在、インフレヘッジ＋地政学リスク対応として、総資産10〜15%を金配分することが推奨されます。ポートフォリオ全体のリスク低減効果＋長期的な価値保存に優れた戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="金投資4形態の特徴"
        services={[
          {
            name: "金ETF（1326 SPDR Gold）",
            rank: 1,
            highlight: "流動性・低コスト｜王道",
            features: [
              "信託報酬0.4%",
              "東証上場で円建て",
              "新NISA成長枠対応",
              "即時売買可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "金鉱株ETF（GDX）",
            rank: 2,
            highlight: "金価格の1.5〜2倍の値動き",
            features: [
              "ニューモント等金鉱株",
              "金価格上昇時に倍率効果",
              "配当利回り1〜2%",
              "下落時も倍率リスク",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "金現物（田中貴金属）",
            rank: 3,
            highlight: "究極の安全資産",
            features: [
              "1g1万円超（2026年）",
              "金融危機時も価値不変",
              "保管コスト・盗難リスク",
              "長期50〜100年保有向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">金投資の推奨配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>金ETF（1326 or GLD）：総資産の7〜10%</li>
          <li>金鉱株ETF（GDX）：総資産の3〜5%（ブースター）</li>
          <li>金現物：総資産の0〜5%（超長期保有・相続）</li>
          <li>金先物：総資産の0〜2%（上級者のみ）</li>
          <li>合計10〜15%の金配分でポートフォリオ最適化</li>
        </ul>
      </section>
      <AffiliateCTA
        title="金投資4形態はSBI証券で｜ETF・個別株・先物対応"
        description="SBI証券は金ETF（1326・GLD・IAU）・金鉱株（NEM・GDX）・金先物まで完備。為替手数料無料（住信SBI連携）、新NISA成長枠で金ETFを非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🪙"
        highlight="業界No.1"
      />
    </>
  ),
  "silver-platinum-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">銀・プラチナ投資完全ガイド</h2>
        <p>
          銀・プラチナは「金の弟分」と呼ばれる貴金属投資。金より値動き2〜3倍大きいボラティリティ、産業需要（太陽光パネル・自動車触媒）による長期成長性あり。SLV（銀ETF）・PPLT（プラチナETF）・SIVR等のETFで分散投資可能、新NISA成長枠で非課税運用OK。金と併せた貴金属ポートフォリオで、リスク分散効果最大化です。
        </p>
      </section>
      <ComparisonTableCTA
        title="銀・プラチナETF主要3銘柄"
        services={[
          {
            name: "SLV（iShares 銀ETF）",
            rank: 1,
            highlight: "銀現物裏付け｜業界最大",
            features: [
              "銀現物の裏付け",
              "信託報酬0.5%",
              "業界最大の銀ETF",
              "流動性最高",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "PPLT（Aberdeen プラチナETF）",
            rank: 2,
            highlight: "プラチナ現物ETF",
            features: [
              "プラチナ現物裏付け",
              "信託報酬0.6%",
              "自動車触媒需要",
              "長期成長性あり",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SIVR（Aberdeen 銀ETF）",
            rank: 3,
            highlight: "SLVより低コスト",
            features: [
              "銀現物裏付け",
              "信託報酬0.3%（SLVより安い）",
              "流動性はSLVに劣る",
              "長期保有向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">銀・プラチナの投資魅力</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>銀：太陽光パネル（1枚20g銀使用）需要拡大</li>
          <li>銀：金より安価で小口投資可能（1オンス約30ドル）</li>
          <li>プラチナ：自動車触媒需要で長期安定</li>
          <li>プラチナ：金より希少（産出量1/10）で価値保存</li>
          <li>貴金属ポートフォリオ：金50%＋銀30%＋プラチナ20%</li>
        </ul>
      </section>
      <AffiliateCTA
        title="銀・プラチナETFはSBI証券で｜SLV・PPLT為替手数料無料"
        description="SBI証券は銀ETF（SLV・SIVR）・プラチナETF（PPLT）を為替手数料無料で取扱。新NISA成長枠で非課税運用、金＋銀＋プラチナの貴金属ポートフォリオで分散投資。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚪"
        highlight="業界No.1"
      />
    </>
  ),
  "rare-metal-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">レアメタル投資完全ガイド｜EV革命の恩恵</h2>
        <p>
          レアメタル（リチウム・コバルト・ニッケル・レアアース）は、EV（電気自動車）・バッテリー革命の中核資材。Tesla・Apple・Samsung等のテクノロジー需要で2030年まで年率10〜20%成長予想。LIT（リチウムETF）・BATT（バッテリー素材）・REMX（レアアース）、個別株（ALB・ピルバラ等）、中国・豪州・チリの地政学を意識した分散投資が鍵です。
        </p>
      </section>
      <ComparisonTableCTA
        title="レアメタル関連ETF主要3銘柄"
        services={[
          {
            name: "LIT（Global X リチウム＆バッテリー）",
            rank: 1,
            highlight: "リチウム上流〜バッテリー下流",
            features: [
              "ALB・ピルバラ等のリチウム鉱山",
              "バッテリー製造企業",
              "信託報酬0.75%",
              "EV革命の恩恵最大化",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "BATT（Amplify バッテリーメタル）",
            rank: 2,
            highlight: "リチウム・コバルト・ニッケル",
            features: [
              "バッテリー材料総合",
              "信託報酬0.59%",
              "LITより分散広い",
              "電動化テーマ総合投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "REMX（VanEck レアアース）",
            rank: 3,
            highlight: "レアアース特化｜中国集中リスク",
            features: [
              "レアアース鉱山企業",
              "中国銘柄中心",
              "信託報酬0.54%",
              "地政学リスク注意",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">レアメタル投資のリスク管理</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>価格変動大（リチウム2022年+500%→2023年-70%）</li>
          <li>中国集中リスク（レアアース生産の80%）</li>
          <li>採掘企業の国別分散（豪州・チリ・南米）</li>
          <li>ポートフォリオ3〜5%以内の配分推奨</li>
          <li>ドルコスト平均法で急変動リスク軽減</li>
        </ul>
      </section>
      <AffiliateCTA
        title="レアメタルETFはSBI証券で｜LIT・BATT対応"
        description="SBI証券はレアメタルETF（LIT・BATT・REMX）・個別株（ALB・ピルバラ等）を為替手数料無料で取扱。EV革命・バッテリー革命の恩恵を、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔋"
        highlight="業界No.1"
      />
    </>
  ),
  "private-banking-japan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">プライベートバンキング完全ガイド</h2>
        <p>
          プライベートバンキング（PB）は、資産1億円超の富裕層向けのオーダーメイド金融サービス。三菱UFJ・SMBC・野村・大和の各PB部門が日本の主要プレーヤー、運用手数料1〜2%、専任担当者による資産運用・相続・事業承継のフルサポート。一般的な証券会社では提供されない、超富裕層向けの特別なサービス内容を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="プライベートバンキング主要3社"
        services={[
          {
            name: "三菱UFJ プライベートバンキング",
            rank: 1,
            highlight: "国内最大手｜資産1億円〜",
            features: [
              "最低資産1億円〜",
              "運用手数料1〜1.5%",
              "専任担当者の個別対応",
              "相続・事業承継サポート",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "野村プライベートバンキング",
            rank: 2,
            highlight: "証券系最大｜3億円〜",
            features: [
              "最低資産3億円〜",
              "海外投資・オルタナ強み",
              "IPO・未公開株優遇",
              "世界の投資機会提供",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SMBC日興プライベートバンキング",
            rank: 3,
            highlight: "三井住友系列",
            features: [
              "最低資産1億円〜",
              "三井住友FGのリソース活用",
              "法人オーナー向け",
              "税務・法務サポート",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">PBを選ぶ基準</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1億〜3億円：三菱UFJ・SMBC（最低資産低め）</li>
          <li>3億円〜：野村（証券系で投資機会豊富）</li>
          <li>5億円超：複数PB併用も選択肢</li>
          <li>事業オーナー：事業承継サポート充実の銀行系</li>
          <li>海外投資重視：外資系PB（UBS・クレディスイス）も検討</li>
        </ul>
      </section>
      <AffiliateCTA
        title="資産1億円以下はSBI証券で｜PB代替サービス"
        description="資産1億円以下ならSBI証券のIFA・対面サービスがPBの代替。手数料大幅に安く、SBI証券の運用担当者による個別対応で、新NISA＋iDeCoを活用した総合資産運用を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💎"
        highlight="業界No.1"
      />
    </>
  ),
  "wealth-management-service-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ウェルスマネジメント完全ガイド</h2>
        <p>
          ウェルスマネジメント（WM）は、資産3000万円〜1億円の「アッパーマス層」向け資産運用サービス。野村・大和・SMBC日興等のWM部門、IFA（独立系ファイナンシャルアドバイザー）、ロボアドの3つの選択肢。運用手数料1%前後、プライベートバンキング（1億円〜）より敷居低く、対面サポート＋専門知識のメリットを享受できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="ウェルスマネジメント比較"
        services={[
          {
            name: "SBI証券（IFA・対面サービス）",
            rank: 1,
            highlight: "手数料最安でWM代替",
            features: [
              "IFAのアドバイス無料",
              "運用手数料業界最安",
              "新NISA＋iDeCo＋米国株",
              "資産3000万円〜ベスト",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（FP・ライフプラン）",
            rank: 2,
            highlight: "保険＋投資の総合相談",
            features: [
              "FPによる個別ライフプラン",
              "保険＋投資＋税制の総合最適化",
              "完全無料相談",
              "オンライン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">WM選びの4ポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①資産規模：3000万〜1億円はWM、1億円超はPB</li>
          <li>②手数料：野村・大和1% vs SBI/楽天0.1%以下</li>
          <li>③サポート：対面重視ならWM、オンライン派はIFA</li>
          <li>④専門領域：税務・相続の専門知識の有無</li>
        </ul>
      </section>
      <AffiliateCTA
        title="手数料を抑えたWMはSBI証券＋保険マンモス"
        description="野村・大和の1%手数料に対し、SBI証券は0.1%以下＋保険マンモスのFP無料相談で総合ウェルスマネジメントを実現。資産3000万〜1億円ならこの組合せが圧倒的にコスパ良い。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🎯"
        highlight="無料相談"
      />
    </>
  ),
  "etf-vs-index-fund-detailed-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ETF vs インデックスファンド詳細比較</h2>
        <p>
          ETFとインデックスファンドは似て非なる投資商品。ETF（上場投信）はリアルタイム売買可能・信託報酬やや安い、インデックスファンド（非上場）は1日1回基準価額・少額積立向き。新NISAでの使い分け、分配金の扱い、税制、機関投資家視点での違いまで、実用的に解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ETF vs インデックスファンド対比</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>取引時間</strong>：ETF（リアルタイム）vs 投信（1日1回）</li>
          <li><strong>信託報酬</strong>：ETF 0.03〜0.1% vs 投信 0.05〜0.2%</li>
          <li><strong>少額積立</strong>：ETF（1口数千円〜）vs 投信（100円〜）</li>
          <li><strong>分配金</strong>：ETF（現金支給）vs 投信（再投資コース可）</li>
          <li><strong>新NISA</strong>：両方対応、投信の方がつみたて枠適合多い</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="ETF・投信の主要証券会社"
        services={[
          {
            name: "SBI証券（ETF＋投信業界最多）",
            rank: 1,
            highlight: "両方の業界最多銘柄",
            features: [
              "ETF：VTI・VOO・VT等",
              "投信：eMAXIS Slim全世界等",
              "投信100円〜・ETF1株〜",
              "新NISA対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（シンプル選択）",
            rank: 2,
            highlight: "初心者向け商品絞り込み",
            features: [
              "投信1700本・ETF主要銘柄",
              "50万以下手数料無料",
              "NISA対応",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">使い分けの指針</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>月1万円〜の積立：投信（少額対応）</li>
          <li>まとまった一括投資：ETF（低コスト）</li>
          <li>新NISAつみたて枠：投信優先（クレカ積立対応）</li>
          <li>新NISA成長枠：ETFも投信もOK</li>
          <li>分配金を再投資：投信の自動再投資コース</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ETF＋投信の両方はSBI証券で｜業界最多銘柄"
        description="SBI証券はETF・投信の両方で業界最多銘柄、信託報酬最安水準。新NISAつみたて枠は投信（100円〜）、成長枠はETF＋投信で使い分け、長期資産形成のベストパートナー。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔍"
        highlight="業界No.1"
      />
    </>
  ),
  "thematic-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">テーマ型投資完全ガイド</h2>
        <p>
          テーマ型投資は、特定の成長テーマ（AI・ロボット・5G・宇宙・バイオ等）に集中投資する戦略。BOTZ（ロボット・AI）・ARKK（革新テクノロジー）・SKYY（クラウド）・UFO（宇宙）等のテーマETFは、コア資産（S&P500）とは異なるリターン期待。集中投資のメリット（大化け可能性）とデメリット（テーマ崩壊リスク）を理解し、ポートフォリオの10〜20%配分が推奨です。
        </p>
      </section>
      <ComparisonTableCTA
        title="テーマ型ETF主要銘柄"
        services={[
          {
            name: "BOTZ（Global X ロボット＆AI）",
            rank: 1,
            highlight: "ロボット・AI集中投資",
            features: [
              "NVIDIA・キーエンス・ABB等",
              "信託報酬0.68%",
              "AI時代の恩恵",
              "2030年までの成長期待",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "AI投資",
          },
          {
            name: "SKYY（First Trust クラウド）",
            rank: 2,
            highlight: "クラウドコンピューティング特化",
            features: [
              "AWS・Azure・GCP関連",
              "Microsoft・Amazon・Google",
              "信託報酬0.6%",
              "SaaS企業中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "UFO（Procure 宇宙探査）",
            rank: 3,
            highlight: "宇宙・航空・衛星",
            features: [
              "SpaceX関連（非上場除く）",
              "ロッキードマーティン等",
              "信託報酬0.75%",
              "宇宙産業の長期成長",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">テーマ型投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>テーマ崩壊リスク（2021年ARKK-70%下落）</li>
          <li>集中投資で値動き激しい（コア資産の2倍変動）</li>
          <li>ポートフォリオ10〜20%以内の配分</li>
          <li>複数テーマ分散（AI＋クラウド＋宇宙等）</li>
          <li>コア（S&P500）70%＋テーマ20%＋安全資産10%</li>
        </ul>
      </section>
      <AffiliateCTA
        title="テーマ型ETFはSBI証券で｜BOTZ・ARKK・SKYY対応"
        description="SBI証券はテーマ型ETF（BOTZ・ARKK・SKYY・UFO）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、AI・クラウド・宇宙等の成長テーマの恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🚀"
        highlight="業界No.1"
      />
    </>
  ),
  "fire-earthquake-insurance-detail": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">火災・地震保険完全ガイド</h2>
        <p>
          火災保険は住宅の火災・風災・水災・盗難等の損害を補償、地震保険は火災保険と セットで加入し地震による損壊を5段階判定で補償。保険料は建物構造・地域・補償範囲で変動、年間2〜10万円。水災特約の要否、保険金請求のコツ、各社比較（東京海上・損保ジャパン・ソニー損保）で、年数万円の節約が可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="火災・地震保険の無料相談"
        services={[
          {
            name: "保険マンモス（火災保険見直し）",
            rank: 1,
            highlight: "複数社比較＋見直し相談",
            features: [
              "火災保険10社比較",
              "地震保険の必要補償額診断",
              "水災特約の要否判定",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "家づくり相談所（新築時の火災保険）",
            rank: 2,
            highlight: "新築同時の保険設計",
            features: [
              "ハウスメーカー提携の火災保険",
              "住宅ローン団信との併用",
              "10年一括契約で割引",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">火災保険選びの4つのポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>補償範囲：火災・風災は必須、水災は立地で判断</li>
          <li>建物構造：M構造（RC）＞T構造（木造鉄骨）＞H構造（木造）</li>
          <li>契約期間：5年or 10年一括で年2〜3割引</li>
          <li>免責金額：3万〜5万円で保険料5〜10%削減</li>
        </ul>
      </section>
      <AffiliateCTA
        title="火災・地震保険の見直しは保険マンモスで｜完全無料"
        description="火災保険10社を保険マンモスで無料一括比較。水災特約の要否判定、地震保険の最適補償額、免責金額の設計など、年数万円の保険料削減事例多数。オンライン相談対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🔥"
        highlight="無料相談"
      />
    </>
  ),
  "travel-insurance-detail-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">海外旅行保険詳細比較</h2>
        <p>
          海外旅行保険は「クレカ付帯」（ゴールド以上で傷害治療300〜2000万円）vs「単発加入」（AIG・ジェイアイ・t@bihoなど）の使い分けが重要。医療費実費型・定額型、家族プラン、年間契約（サブスク型）等、目的別の最適解を解説。海外は医療費高額（盲腸手術だけで米国200万円）のため、十分な補償が必須です。
        </p>
      </section>
      <ComparisonTableCTA
        title="海外旅行保険の主要選択肢"
        services={[
          {
            name: "クレカ付帯（エポスカード等）",
            rank: 1,
            highlight: "年会費無料でも自動付帯",
            features: [
              "エポスカード年会費永年無料",
              "傷害治療200万円自動付帯",
              "疾病治療270万円",
              "携行品損害20万円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "無料",
          },
          {
            name: "保険マンモス（旅行保険相談）",
            rank: 2,
            highlight: "医療費十分な補償設計",
            features: [
              "クレカ付帯＋単発加入の最適化",
              "長期滞在・留学向けプラン",
              "家族プランの設計",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">海外旅行保険の3つの選び方</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>短期（1週間以内）：クレカ付帯＋足りない分を単発追加</li>
          <li>中期（1ヶ月）：単発加入でしっかり補償（保険料5000〜1万円）</li>
          <li>長期（3ヶ月〜）：海外留学保険・長期滞在保険（数万円）</li>
          <li>欧米は医療費高額（傷害治療500万円以上推奨）</li>
          <li>アジアは中程度（傷害治療200万円あれば十分）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="海外旅行保険の最適設計は保険マンモスで｜無料相談"
        description="海外旅行・留学・長期滞在の保険設計を保険マンモスで無料相談。クレカ付帯＋単発加入の組合せ、家族プラン、年間契約まで、目的別の最適な補償を提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="✈️"
        highlight="無料相談"
      />
    </>
  ),
  "university-tuition-saving-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">大学学費節約完全ガイド</h2>
        <p>
          日本の大学学費は国公立年54万円・私立文系年90万円・私立理系年130万円・医学部年500万円と幅広い。4年間総額で国公立250万円〜医学部2500万円。新NISA・ジュニアNISAの早期運用、奨学金（無利子・有利子・給付型）、親の学費支援の税制優遇（教育資金一括贈与1500万円非課税）など、総合的な節約術を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">大学学費の実態（4年間総額）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>国立大学：250万円（初年度81万円＋年54万円×3）</li>
          <li>公立大学：260万円</li>
          <li>私立文系：400万円（初年度120万円＋年90万円×3）</li>
          <li>私立理系：530万円（初年度150万円＋年130万円×3）</li>
          <li>私立医学部：2500〜5000万円（6年間）</li>
          <li>別途：下宿代・教材費・通学費で年50〜150万円</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="大学学費準備の3戦略"
        services={[
          {
            name: "SBI証券（新NISA早期積立）",
            rank: 1,
            highlight: "0歳から月3万円で1000万円",
            features: [
              "親の新NISA成長枠活用",
              "月3万円×18年＝約1050万円",
              "eMAXIS Slim全世界株式",
              "児童手当の全額投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "すらら（塾代わりの学習）",
            rank: 2,
            highlight: "月8800円で塾代節約",
            features: [
              "AI学習で塾費用節約",
              "小中高一貫学習",
              "大学受験対応",
              "年10〜20万円の塾代削減",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">学費節約の5つの方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①早期積立：0歳から月3万円の新NISAで1000万円</li>
          <li>②奨学金活用：JASSO第一種（無利子）優先</li>
          <li>③自宅通学：下宿代200〜300万円の削減</li>
          <li>④大学の学費免除制度：成績優秀者は半額〜全額免除</li>
          <li>⑤祖父母からの教育資金贈与（1500万円非課税）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="大学学費準備はSBI証券＋すららで｜塾代節約＋運用"
        description="SBI証券の新NISAで月3万円積立＋すららで塾代月10万円→月8800円に圧縮。18年で1000万円の学費原資＋学力向上の両取りで、大学学費問題を根本解決できる戦略。"
        buttonText="すららの無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE"
        icon="🎓"
        highlight="無料体験"
      />
    </>
  ),
  "kids-money-education-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">子供の金融教育完全ガイド</h2>
        <p>
          2022年から高校家庭科で「資産形成」が必修化、金融リテラシーは現代の必須教育。お小遣い制度（定額・報酬型）、金銭感覚を育てる5ステップ、新NISAジュニア枠の活用、18歳からのクレカ教育、大学時代の一人暮らし家計管理まで、親が子供に教えるべき金融知識を年齢別に解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年齢別の金融教育</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>3〜6歳</strong>：お金の存在・ありがとうの気持ち</li>
          <li><strong>7〜12歳</strong>：お小遣い管理・貯金箱・買い物体験</li>
          <li><strong>13〜15歳</strong>：銀行口座開設・キャッシュレス決済</li>
          <li><strong>16〜18歳</strong>：投資の基礎・新NISAの仕組み</li>
          <li><strong>18歳以上</strong>：クレカ利用・一人暮らし家計管理・税金</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="子供向け金融教育ツール"
        services={[
          {
            name: "すらら（金融リテラシー学習）",
            rank: 1,
            highlight: "小中高の家庭科・社会科対応",
            features: [
              "小1〜高3の金融リテラシー",
              "家計管理・税金・投資の基礎",
              "AI学習で定着率高い",
              "月8800円〜",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
          {
            name: "SBI証券（親のNISAで実体験）",
            rank: 2,
            highlight: "親の運用を共有して学ぶ",
            features: [
              "親のNISAの運用状況を共有",
              "投資信託の値動きを観察",
              "18歳からの口座開設",
              "複利効果の実感",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">金融教育5つの実践ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①お小遣い：定額（管理力）＋報酬型（労働価値）の併用</li>
          <li>②貯金：目標金額を決めて、達成する体験</li>
          <li>③買い物：値段比較・本当に必要か考える訓練</li>
          <li>④投資：親のNISA運用を子供と一緒に確認</li>
          <li>⑤独立：18歳からクレカ・家計管理・新NISA開始</li>
        </ul>
      </section>
      <AffiliateCTA
        title="金融教育はすららで｜小中高の家庭科・社会科対応"
        description="すららのAI学習は家庭科・社会科の金融リテラシーに対応。小1〜高3まで一貫学習、家計管理・税金・投資の基礎を無理なく習得。無料体験で学習内容確認可能。"
        buttonText="すららの無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE"
        icon="👶"
        highlight="無料体験"
      />
    </>
  ),
  "stock-screening-tool-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">銘柄スクリーニング完全ガイド</h2>
        <p>
          銘柄スクリーニングは、数千銘柄から投資条件に合う優良銘柄を絞り込む必須スキル。PER（15倍以下）・PBR（1倍以下）・ROE（10%以上）・配当利回り（3%以上）等の指標を組合せ、月10分で優良銘柄20社を抽出可能。SBI証券・楽天証券のスクリーナー機能、米国株Finviz、日本株Yahoo Financeの使い方を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">スクリーニング主要5指標</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>PER（株価収益率）</strong>：15倍以下が割安</li>
          <li><strong>PBR（株価純資産倍率）</strong>：1倍以下が割安</li>
          <li><strong>ROE（自己資本利益率）</strong>：10%以上が優良</li>
          <li><strong>配当利回り</strong>：3%以上でインカム重視</li>
          <li><strong>売上成長率</strong>：5%以上で成長株</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="銘柄スクリーニングツール"
        services={[
          {
            name: "SBI証券（スクリーナー機能）",
            rank: 1,
            highlight: "50項目以上の絞込み",
            features: [
              "50項目以上の絞込み条件",
              "プリセット条件あり",
              "米国株・日本株両対応",
              "手数料無料で実行可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（テクニカル分析）",
            rank: 2,
            highlight: "チャート＋スクリーニング",
            features: [
              "テクニカル指標絞込み",
              "50万以下手数料無料",
              "NISA対応",
              "サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">3つのスクリーニング戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>バリュー戦略</strong>：PER15倍以下＋PBR1倍以下＋ROE10%以上</li>
          <li><strong>グロース戦略</strong>：売上成長10%以上＋ROE15%以上＋時価総額1000億円超</li>
          <li><strong>高配当戦略</strong>：配当利回り4%以上＋連続増配5年以上＋PER20倍以下</li>
          <li>月1回の定期スクリーニングで投資先20社をリスト化</li>
          <li>決算発表時に再チェック、銘柄入れ替え</li>
        </ul>
      </section>
      <AffiliateCTA
        title="銘柄スクリーニングはSBI証券で｜50項目以上で絞込み"
        description="SBI証券のスクリーナーは50項目以上の絞込み条件＋プリセット条件で、月10分で優良銘柄20社抽出可能。米国株・日本株両対応、手数料無料で実行できる業界No.1ツール。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔎"
        highlight="業界No.1"
      />
    </>
  ),
  "investment-diary-record-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資日記の付け方完全ガイド</h2>
        <p>
          投資日記・売買記録は、勝率UP・感情コントロール・税金計算の必須ツール。ExcelやGoogleスプレッドシートでの簡易テンプレート、売買日時・銘柄・理由・結果の記録、月次・年次の振り返り、マネーフォワード等の自動連携ツール活用で、投資スキルの継続的向上が可能。プロ投資家の共通習慣で、勝率10〜20%改善も実現できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">投資日記に記録すべき6項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①売買日時・銘柄・数量・価格</li>
          <li>②エントリー理由（テクニカル・ファンダ・ニュース）</li>
          <li>③目標利益・損切ライン</li>
          <li>④エグジット理由・結果</li>
          <li>⑤感情面（焦り・満足・後悔等）</li>
          <li>⑥反省・次回への改善点</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="投資記録ツール"
        services={[
          {
            name: "マネーフォワード（投資自動集計）",
            rank: 1,
            highlight: "口座連携で自動記録",
            features: [
              "証券口座自動連携",
              "ポートフォリオ自動集計",
              "損益自動計算",
              "月額500円〜",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "SBI証券（取引履歴・損益）",
            rank: 2,
            highlight: "年間取引報告書自動作成",
            features: [
              "取引履歴の全件管理",
              "損益自動計算",
              "確定申告書類自動作成",
              "無料で利用可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">勝率UP 4つのコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>①感情的取引の可視化：記録で発見し改善</li>
          <li>②勝ちパターン分析：成功取引の共通点抽出</li>
          <li>③負けパターン回避：失敗取引の共通点を避ける</li>
          <li>④月次振り返り：勝率・リスクリワード比算出</li>
          <li>毎回の振り返りで、勝率10〜20%改善可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="投資記録自動化はマネーフォワードで｜月500円〜"
        description="マネーフォワードの投資自動連携で、証券口座のデータを自動取込＋ポートフォリオ集計＋損益計算。月500円の投資で時間節約＋勝率UP、ココナラ経由で税理士相談も併用可能。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📓"
        highlight="登録無料"
      />
    </>
  ),
  "pension-supplement-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年金上乗せ戦略完全ガイド</h2>
        <p>
          公的年金（月15〜20万円）だけでは老後資金不足は明白。自営業者は国民年金基金（月6.8万円上限）・付加年金（月400円）・iDeCo（月6.8万円上限）の3段重ねで年金を2倍化可能。会社員はiDeCo＋新NISA＋企業年金の活用で、老後の月受給額30万円超を目指す戦略を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">自営業者の年金上乗せ3段構成</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①国民年金基金</strong>：月6.8万円上限、所得控除、終身年金</li>
          <li><strong>②付加年金</strong>：月400円納付で老齢基礎年金に月200円上乗せ（2年で元取れ）</li>
          <li><strong>③iDeCo</strong>：月6.8万円上限、所得控除＋運用益非課税</li>
          <li>合計で月13.6万円拠出、所得控除年163万円で節税効果大</li>
          <li>国民年金基金とiDeCoは合算で月6.8万円以内の制約あり</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="年金上乗せの金融機関"
        services={[
          {
            name: "松井証券 iDeCo（自営業者向け）",
            rank: 1,
            highlight: "運営管理手数料無料",
            features: [
              "iDeCo月6.8万円上限",
              "運営管理手数料無料",
              "全世界株式等の低コスト商品",
              "確定申告サポート",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
            badge: "500円/件",
          },
          {
            name: "保険マンモス（国民年金基金相談）",
            rank: 2,
            highlight: "自営業者の年金設計",
            features: [
              "国民年金基金＋iDeCoの最適配分",
              "付加年金の活用",
              "自営業者向け保険見直し",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年金上乗せの効果試算</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>自営業者：基礎年金月6.6万円→上乗せで月20万円超に</li>
          <li>会社員：厚生年金月15万円→iDeCo＋NISAで月25〜30万円</li>
          <li>所得控除：年163万円（自営業）で所得税・住民税20〜40万円節税</li>
          <li>30年継続で累計元本4080万円＋運用益で6000〜8000万円の老後資金</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCoは松井証券で｜運営管理手数料無料"
        description="自営業者・フリーランスのiDeCoは松井証券で。運営管理手数料無料、全世界株式・S&P500等の低コスト商品、月6.8万円上限で所得控除年81.6万円の節税効果。"
        buttonText="松井証券iDeCoの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ"
        icon="💰"
        highlight="手数料無料"
      />
    </>
  ),
  "fintech-startup-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フィンテック投資完全ガイド</h2>
        <p>
          フィンテック（Finance×Technology）は、キャッシュレス決済・デジタル銀行・投資アプリ等、金融×ITの成長分野。Square（Block）・PayPal・Adyen・Marqeta等のグローバル企業が急成長中、2030年までに市場規模1兆ドル予測。FINX・IPAY等のフィンテックETFで分散投資可能、新NISA成長枠で非課税運用できる注目テーマです。
        </p>
      </section>
      <ComparisonTableCTA
        title="フィンテック投資の主要銘柄"
        services={[
          {
            name: "FINX（Global X フィンテック）",
            rank: 1,
            highlight: "フィンテック総合ETF",
            features: [
              "Square・PayPal・Adyen等",
              "信託報酬0.68%",
              "グローバル分散",
              "AI・ブロックチェーン含む",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "IPAY（ETFMG プライム モバイル決済）",
            rank: 2,
            highlight: "決済特化ETF",
            features: [
              "Visa・Mastercard含む",
              "モバイル決済企業",
              "信託報酬0.75%",
              "キャッシュレス拡大恩恵",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フィンテック投資の魅力</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>2030年市場規模1兆ドル予測（年率15%成長）</li>
          <li>キャッシュレス決済・デジタル銀行・AI投資の融合</li>
          <li>新興国市場でも急成長（インド・東南アジア）</li>
          <li>銀行業界のDX需要拡大で長期追い風</li>
          <li>ポートフォリオ5〜10%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="フィンテックETFはSBI証券で｜FINX・IPAY対応"
        description="SBI証券はフィンテックETF（FINX・IPAY）・個別株（Block・PayPal・Adyen等）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、金融×IT革命の恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💳"
        highlight="業界No.1"
      />
    </>
  ),
  "metaverse-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">メタバース投資完全ガイド</h2>
        <p>
          メタバース（仮想空間）は、VR/AR・ゲーム・ソーシャル・商業活動が融合する次世代インターネット。Meta（旧Facebook）・Roblox・Unity・NVIDIA等のプラットフォーム企業、METV（Roundhill メタバースETF）で分散投資可能。2030年市場規模1兆ドル予測、VR・ARヘッドセット（Apple Vision Pro等）普及で急成長期待。
        </p>
      </section>
      <ComparisonTableCTA
        title="メタバース投資の主要ETF"
        services={[
          {
            name: "METV（Roundhill Ball メタバース）",
            rank: 1,
            highlight: "メタバース専業ETF",
            features: [
              "Meta・Roblox・Unity・NVIDIA等",
              "信託報酬0.59%",
              "ゲーム・VR/AR・決済総合",
              "メタバースのパイオニアETF",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "FMET（Fidelity メタバース）",
            rank: 2,
            highlight: "信託報酬0.39%の最安",
            features: [
              "Fidelityの低コストETF",
              "信託報酬0.39%（業界最安）",
              "メタバース関連35銘柄",
              "2022年新規ローンチ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">メタバース関連の主要個別株</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Meta（META）：Facebook・Instagram・Horizon Worldsの親会社</li>
          <li>Roblox（RBLX）：クリエイター主導のメタバースプラットフォーム</li>
          <li>Unity（U）：3D・VRコンテンツ開発エンジン</li>
          <li>NVIDIA（NVDA）：GPUでメタバース処理能力提供</li>
          <li>Apple（AAPL）：Vision Pro で本格参入</li>
        </ul>
      </section>
      <AffiliateCTA
        title="メタバース投資はSBI証券で｜METV・FMET対応"
        description="SBI証券はメタバースETF（METV・FMET）・個別株（Meta・Roblox・Unity・NVIDIA等）完備。為替手数料無料、新NISA成長枠で非課税運用、次世代インターネットの恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🥽"
        highlight="業界No.1"
      />
    </>
  ),
  "quantum-computing-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">量子コンピューティング投資完全ガイド</h2>
        <p>
          量子コンピューティングは、2030年代の実用化が期待される革命的技術。IBM・Google・Microsoft・Amazon等の大手が研究開発に巨額投資、純粋プレー（IonQ・Rigetti・D-Wave）も上場中。QTUM（Defiance Quantum ETF）で分散投資可能。高リスクハイリターンの新興テーマ、ポートフォリオ2〜5%配分が適切です。
        </p>
      </section>
      <ComparisonTableCTA
        title="量子コンピューティング投資手段"
        services={[
          {
            name: "QTUM（Defiance Quantum ETF）",
            rank: 1,
            highlight: "量子＋機械学習ETF",
            features: [
              "量子コンピューティング＋AI",
              "IBM・Google・MS・NVDA等",
              "信託報酬0.4%",
              "70銘柄分散",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "IonQ（IONQ）",
            rank: 2,
            highlight: "量子純粋プレー",
            features: [
              "イオントラップ方式のリーダー",
              "Amazon・Azure連携",
              "時価総額10億ドル級",
              "高ボラで変動大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">量子コンピューティングの投資戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>QTUMでETF分散（メイン、資産の3〜4%）</li>
          <li>純粋プレー（IONQ・RGTI等）は資産の0〜1%</li>
          <li>大手（IBM・GOOGL・MSFT）は他のETF経由で保有</li>
          <li>2030年代の商用化まで5〜10年の長期保有前提</li>
          <li>短期は赤字企業中心、損失許容度重要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="量子コンピューティング投資はSBI証券で｜QTUM対応"
        description="SBI証券は量子ETF（QTUM）・個別株（IonQ・Rigetti・D-Wave）・大手テック（IBM・Google・MS）まで完備。為替手数料無料、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚛️"
        highlight="業界No.1"
      />
    </>
  ),
  "biotech-investment-detailed-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">バイオテック投資完全ガイド</h2>
        <p>
          バイオテック（バイオテクノロジー）は、医薬品・遺伝子治療・再生医療等の先端医療分野。モデルナ・ファイザー・リジェネロン・ヴェルテックス等のグローバル企業、IBB（大型）・XBI（中小型）等のバイオETFで分散投資可能。新薬開発の成功失敗で株価激変する特徴、長期成長性とボラ大きさの両面を理解して投資が重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="バイオテックETF比較"
        services={[
          {
            name: "IBB（iShares バイオ）",
            rank: 1,
            highlight: "大型バイオ中心｜信託報酬0.45%",
            features: [
              "アムジェン・ギリアド・モデルナ等",
              "時価総額加重で大型中心",
              "信託報酬0.45%",
              "配当利回り0.5%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "大型",
          },
          {
            name: "XBI（SPDR バイオ）",
            rank: 2,
            highlight: "中小型均等｜高リターン狙い",
            features: [
              "中小型バイオ均等加重",
              "ハイリスクハイリターン",
              "信託報酬0.35%",
              "IBBより値動き2倍",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">バイオテック投資の特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新薬承認で+50〜300%、失敗で-50%以上の値動き</li>
          <li>長期（15〜20年）で高齢化・がん治療需要拡大</li>
          <li>IBB（大型）でコア、XBI（中小型）でサテライト</li>
          <li>個別株は分散必須（5〜10社）</li>
          <li>ポートフォリオ5〜10%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="バイオテック投資はSBI証券で｜IBB・XBI対応"
        description="SBI証券はバイオETF（IBB・XBI）・個別株（モデルナ・ファイザー・リジェネロン等）完備。為替手数料無料、新NISA成長枠で非課税運用、医療革新の恩恵を取込める環境。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🧬"
        highlight="業界No.1"
      />
    </>
  ),
  "cybersecurity-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">サイバーセキュリティETF完全ガイド</h2>
        <p>
          サイバーセキュリティは、DX化・リモートワーク拡大で需要爆増の成長分野。HACK・CIBR・BUGの主要3ETF、パロアルトネットワークス・クラウドストライク・フォーティネット等の個別株で投資可能。2030年市場規模5000億ドル予測、ランサムウェア・DDoS攻撃増加で継続需要拡大の王道テーマ、ポートフォリオ5〜10%配分推奨です。
        </p>
      </section>
      <ComparisonTableCTA
        title="サイバーセキュリティETF主要3銘柄"
        services={[
          {
            name: "HACK（ETFMG プライム サイバー）",
            rank: 1,
            highlight: "業界最古｜流動性最高",
            features: [
              "2014年からのパイオニア",
              "50銘柄分散",
              "信託報酬0.6%",
              "流動性最高",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "CIBR（First Trust サイバー）",
            rank: 2,
            highlight: "純粋プレー重視",
            features: [
              "サイバー純粋銘柄",
              "40銘柄集中",
              "信託報酬0.6%",
              "高成長銘柄多め",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "BUG（Global X サイバー）",
            rank: 3,
            highlight: "信託報酬0.5%最安",
            features: [
              "信託報酬0.5%（最安）",
              "30銘柄厳選",
              "クラウドセキュリティ多め",
              "新しいETF",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">サイバーセキュリティの追い風</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>2030年市場規模5000億ドル予測（年率10〜15%成長）</li>
          <li>ランサムウェア被害年20兆円超</li>
          <li>DX化・クラウド移行でセキュリティ需要爆増</li>
          <li>政府機関・金融機関の必須投資分野</li>
          <li>景気後退にも需要安定のディフェンシブ性質</li>
        </ul>
      </section>
      <AffiliateCTA
        title="サイバーセキュリティETFはSBI証券で｜HACK・CIBR・BUG対応"
        description="SBI証券はサイバーセキュリティETF（HACK・CIBR・BUG）・個別株（パロアルト・クラウドストライク・フォーティネット等）完備。為替手数料無料、新NISA成長枠で非課税運用。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🛡️"
        highlight="業界No.1"
      />
    </>
  ),
  "streaming-entertainment-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">動画ストリーミング・エンタメETF完全ガイド</h2>
        <p>
          動画ストリーミング・エンターテインメントは、Netflix・Disney+・Prime Video・Spotify等のサブスク市場急拡大で成長中。PEJ（Invesco エンタメETF）・PBS（Invesco 番組ETF）で分散投資、Netflix・Disney・Spotify等の個別株も選択肢。2030年サブスク市場5000億ドル超予想、ゲーム・スポーツコンテンツ含めた総合成長テーマです。
        </p>
      </section>
      <ComparisonTableCTA
        title="エンタメ投資の主要手段"
        services={[
          {
            name: "PEJ（Invesco エンタメ）",
            rank: 1,
            highlight: "動画・音楽・ゲーム総合",
            features: [
              "Netflix・Disney・Spotify等",
              "信託報酬0.58%",
              "エンタメ総合30銘柄",
              "メディア含む幅広い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "個別株（Netflix・Disney）",
            rank: 2,
            highlight: "集中投資で高リターン",
            features: [
              "Netflix（NFLX）：動画ストリーミング王者",
              "Disney（DIS）：コンテンツIP最強",
              "Spotify（SPOT）：音楽ストリーミング",
              "Warner Bros. Discovery（WBD）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">エンタメ市場の成長性</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>2030年サブスク市場5000億ドル超予測</li>
          <li>動画・音楽・ゲーム・ライブ配信の融合</li>
          <li>新興国のインターネット普及で拡大加速</li>
          <li>コンテンツIP（ディズニー等）が長期優位性</li>
          <li>ポートフォリオ3〜7%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="エンタメ投資はSBI証券で｜PEJ・個別株対応"
        description="SBI証券はエンタメETF（PEJ・PBS）・個別株（Netflix・Disney・Spotify等）完備。為替手数料無料、新NISA成長枠で非課税運用、サブスク市場急成長の恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎬"
        highlight="業界No.1"
      />
    </>
  ),
  "cloud-saas-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">クラウド・SaaS ETF完全ガイド</h2>
        <p>
          クラウドコンピューティング・SaaS（Software as a Service）は、企業DXの中核分野で年率15%成長中。SKYY（First Trust クラウド）・WCLD（WisdomTree SaaS）・CLOU（Global X）の主要3ETF、Salesforce・Adobe・Snowflake・ServiceNow等の個別株で投資可能。AI時代の基盤として長期成長性が高いコアテーマです。
        </p>
      </section>
      <ComparisonTableCTA
        title="クラウド・SaaS主要ETF3銘柄"
        services={[
          {
            name: "SKYY（First Trust クラウド）",
            rank: 1,
            highlight: "クラウド総合最大手",
            features: [
              "AWS・Azure・GCP関連含む",
              "Amazon・Microsoft・Google",
              "信託報酬0.6%",
              "クラウド総合70銘柄",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "WCLD（WisdomTree SaaS）",
            rank: 2,
            highlight: "SaaS純粋プレー",
            features: [
              "Salesforce・Snowflake等",
              "純粋SaaS企業特化",
              "信託報酬0.45%",
              "成長株中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "CLOU（Global X クラウド）",
            rank: 3,
            highlight: "クラウドサービス特化",
            features: [
              "ServiceNow・Zscaler等",
              "信託報酬0.68%",
              "35銘柄集中",
              "セキュリティクラウド含む",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">クラウド・SaaSの投資戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コア（SKYY）40%＋SaaS特化（WCLD）30%＋セキュリティ（CLOU）30%</li>
          <li>SKYYはAmazon・Microsoft・Google等の大手で安定</li>
          <li>WCLD・CLOUは中小型SaaS中心で高ボラ・高成長</li>
          <li>AI時代の基盤でコア資産として長期保有</li>
          <li>ポートフォリオ10〜15%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="クラウド・SaaS投資はSBI証券で｜SKYY・WCLD・CLOU対応"
        description="SBI証券はクラウド・SaaS ETF（SKYY・WCLD・CLOU）・個別株（Salesforce・Adobe・Snowflake等）完備。為替手数料無料、新NISA成長枠で非課税運用、AI時代の基盤に投資。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="☁️"
        highlight="業界No.1"
      />
    </>
  ),
  "e-commerce-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">eコマース投資完全ガイド</h2>
        <p>
          Eコマース市場は2030年に7兆ドル到達予測、年率10%超の持続的成長。Amazon（米国）・Shopify（プラットフォーム）・Mercado Libre（南米）・JD.com（中国）・アリババ・楽天等のEC大手、EBIZ・IBUY等のECETFで分散投資可能。コロナ後も継続的にEC化が進行、長期成長テーマのコア資産として最適です。
        </p>
      </section>
      <ComparisonTableCTA
        title="Eコマース投資の主要手段"
        services={[
          {
            name: "EBIZ（Global X Eコマース）",
            rank: 1,
            highlight: "グローバルEC 40銘柄",
            features: [
              "Amazon・Shopify・Mercado Libre等",
              "信託報酬0.5%",
              "グローバル分散",
              "成長株中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "IBUY（Amplify Online Retail）",
            rank: 2,
            highlight: "オンライン小売特化",
            features: [
              "オンライン小売専業40銘柄",
              "信託報酬0.65%",
              "Etsy・Wayfair・Chewy等",
              "米国中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">EC市場の成長性</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>2030年市場規模7兆ドル予測（年率10%成長）</li>
          <li>新興国のEC化は先進国の2倍のペース</li>
          <li>ラストマイル配送・物流インフラ需要も拡大</li>
          <li>Amazon個別株 or EBIZ/IBUY等のETF分散</li>
          <li>ポートフォリオ10〜15%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="EコマースETFはSBI証券で｜EBIZ・IBUY対応"
        description="SBI証券はECETF（EBIZ・IBUY）・個別株（Amazon・Shopify・Mercado Libre等）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、EC革命の恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🛒"
        highlight="業界No.1"
      />
    </>
  ),
  "gig-economy-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ギグエコノミー投資完全ガイド</h2>
        <p>
          ギグエコノミー（単発仕事のプラットフォーム経済）は、Uber・Airbnb・DoorDash・Lyft等のアプリベースサービスで急成長。フリーランス需要拡大、AI進化でタスクの細分化加速。個別株＋PTECH等の関連ETFで分散投資可能、新興国でも拡大中のテーマです。ポートフォリオ3〜7%配分推奨。
        </p>
      </section>
      <ComparisonTableCTA
        title="ギグエコノミー関連銘柄"
        services={[
          {
            name: "Uber（UBER）",
            rank: 1,
            highlight: "世界最大のギグ配車プラットフォーム",
            features: [
              "時価総額1000億ドル超",
              "配車＋Uber Eats両事業",
              "2023年初の黒字化達成",
              "AI活用で効率化中",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "Airbnb（ABNB）",
            rank: 2,
            highlight: "民泊プラットフォーム最大手",
            features: [
              "世界220カ国でサービス",
              "コロナ後回復＋体験市場拡大",
              "キャッシュフロー健全",
              "長期滞在需要も増",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ギグエコノミーの投資戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Uber・Airbnb：大手プラットフォーム（安定性高）</li>
          <li>DoorDash・Lyft：競合優位性で中位</li>
          <li>個別株は2〜3社分散（総資産3〜5%）</li>
          <li>ギグ労働者規制リスクで変動あり</li>
          <li>長期（5〜10年）保有前提でAI時代の恩恵取込む</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ギグエコノミー個別株はSBI証券で｜Uber・Airbnb対応"
        description="SBI証券はギグエコノミー個別株（Uber・Airbnb・DoorDash・Lyft等）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、プラットフォーム経済の恩恵を取込める。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🚕"
        highlight="業界No.1"
      />
    </>
  ),
  "solar-investment-detail-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">太陽光発電投資詳細ガイド</h2>
        <p>
          太陽光発電投資は3形態：①土地付き太陽光（1000万円〜、FIT20年固定買取）、②太陽光ETF（TAN・ICLN・KWT）、③太陽光クラウドファンディング（10万円〜、利回り6〜10%）。2022年の買取価格10円/kWh、FIP制度（市場連動）への移行、税制優遇（中小企業経営強化税制）まで、投資家視点で解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="太陽光投資3形態の比較"
        services={[
          {
            name: "太陽光ETF（TAN・ICLN）",
            rank: 1,
            highlight: "少額から分散投資",
            features: [
              "TAN（Invesco ソーラー）",
              "ICLN（iShares クリーンエネルギー）",
              "1万円〜投資可能",
              "新NISA成長枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "太陽光クラウドファンディング",
            rank: 2,
            highlight: "利回り6〜10%・中額投資",
            features: [
              "CRE Funding・SOLMINA等",
              "利回り6〜10%",
              "10万円〜投資",
              "元本保証なし",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "家づくり相談所（不動産投資の一形態）",
            rank: 3,
            highlight: "土地付き太陽光相談",
            features: [
              "新築時の太陽光導入",
              "蓄電池併用のシミュレーション",
              "ZEH（省エネ住宅）対応",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">太陽光投資のリスク・リターン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>土地付き太陽光：利回り8〜12%、初期1000〜2000万円、運用手間大</li>
          <li>ETF：利回りは株価変動依存、少額から可能</li>
          <li>クラファン：利回り6〜10%、中額・運営会社リスク</li>
          <li>FIT期間満了後の売電価格下落リスク</li>
          <li>自然災害（台風・豪雪）による発電量減少リスク</li>
        </ul>
      </section>
      <AffiliateCTA
        title="太陽光付き新築住宅相談は家づくり相談所で"
        description="新築時の太陽光発電＋蓄電池導入の相談を家づくり相談所で無料相談。初期費用・発電量・売電収入・節税効果の総合シミュレーション、ZEH対応住宅の提案まで専門家が対応。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="☀️"
        highlight="無料相談"
      />
    </>
  ),
  "healthcare-reit-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ヘルスケアREIT完全ガイド</h2>
        <p>
          ヘルスケアREITは、病院・介護施設・シニア住宅・医療オフィス等に投資するREIT。高齢化社会の進行で長期需要拡大、利回り4〜6%の安定収益が魅力。米国のHCN（Welltower）・Ventas・HCPが世界3大ヘルスケアREIT、日本にもヘルスケア＆メディカル投資法人等あり。ディフェンシブ性質で景気後退にも強い資産クラスです。
        </p>
      </section>
      <ComparisonTableCTA
        title="ヘルスケアREIT主要銘柄"
        services={[
          {
            name: "Welltower（WELL）",
            rank: 1,
            highlight: "世界最大のヘルスケアREIT",
            features: [
              "時価総額800億ドル超",
              "シニア住宅・介護施設・医療オフィス",
              "配当利回り3%",
              "30年連続配当支給",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "Ventas（VTR）",
            rank: 2,
            highlight: "医療研究施設・病院特化",
            features: [
              "時価総額250億ドル",
              "大学病院・研究施設多数",
              "配当利回り4%",
              "Welltowerより分散広い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "保険マンモス（介護保険見直し）",
            rank: 3,
            highlight: "介護保険＋投資の両取り",
            features: [
              "介護保険見直し相談",
              "介護費用の概算試算",
              "終身保険との組合せ",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高齢化の追い風</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>日本：2030年に高齢者人口3700万人、介護市場15兆円超</li>
          <li>米国：ベビーブーマー世代の退職で医療需要拡大</li>
          <li>シニア住宅・介護施設の継続的不足</li>
          <li>長期賃貸契約でREITのキャッシュフロー安定</li>
          <li>景気変動に強いディフェンシブ性質</li>
        </ul>
      </section>
      <AffiliateCTA
        title="介護保険見直しは保険マンモスで｜無料相談"
        description="ヘルスケアREIT投資と並行して、自身の介護保険も保険マンモスで無料見直し。将来の介護費用（月10〜20万円）に備え、終身介護保険・民間介護保険の最適設計を提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🏥"
        highlight="無料相談"
      />
    </>
  ),
  "data-center-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">データセンターETF完全ガイド</h2>
        <p>
          データセンターはAI・クラウド時代の「新たな石油」。Equinix（EQIX）・Digital Realty（DLR）が世界2大データセンターREIT、SRVR（Pacer データセンター）ETFで分散投資可能。AI革命で需要爆増、2030年市場規模3000億ドル予測、年率15%成長。高速通信・電力インフラ投資の恩恵を受ける成長テーマです。
        </p>
      </section>
      <ComparisonTableCTA
        title="データセンター投資の主要銘柄"
        services={[
          {
            name: "Equinix（EQIX）",
            rank: 1,
            highlight: "世界最大のデータセンター",
            features: [
              "時価総額800億ドル超",
              "世界31カ国240施設",
              "配当利回り1.8%",
              "S&P500組入れ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "Digital Realty（DLR）",
            rank: 2,
            highlight: "ハイパースケール特化",
            features: [
              "時価総額500億ドル",
              "AWS・Azure・GCPのデータセンター",
              "配当利回り3.2%",
              "成長性高い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SRVR（Pacer データセンター）",
            rank: 3,
            highlight: "データセンターETF",
            features: [
              "データセンター関連20銘柄",
              "信託報酬0.55%",
              "EQIX・DLR含む",
              "分散投資に最適",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">データセンターの投資メリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>AI革命で需要爆増（ChatGPT等の大規模モデルで計算需要拡大）</li>
          <li>長期契約で安定したキャッシュフロー</li>
          <li>配当利回り2〜3%＋価格上昇の両取り</li>
          <li>REIT形態で新NISA成長枠対応</li>
          <li>AIチップ（NVIDIA等）とセットで投資効果最大化</li>
        </ul>
      </section>
      <AffiliateCTA
        title="データセンター投資はSBI証券で｜EQIX・DLR・SRVR対応"
        description="SBI証券はデータセンター個別株（EQIX・DLR）・ETF（SRVR）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、AI革命の「デジタルインフラ」への投資機会。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🗄️"
        highlight="業界No.1"
      />
    </>
  ),
  "autonomous-vehicle-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">自動運転・EV投資完全ガイド</h2>
        <p>
          自動運転・EVは2030年市場8000億ドル予測、Tesla・BYD・Waymo（Google）・Apple・NVIDIA等の覇権争い激化。DRIV（Global X 自動運転ETF）・IDRV（iShares 自動運転ETF）で分散投資可能。EVバッテリー（レアメタル）・半導体・ソフトウェア・保険等、関連産業も拡大する長期成長テーマです。
        </p>
      </section>
      <ComparisonTableCTA
        title="自動運転・EV投資の主要手段"
        services={[
          {
            name: "DRIV（Global X 自動運転EV）",
            rank: 1,
            highlight: "自動運転＋EV総合ETF",
            features: [
              "Tesla・BYD・NVIDIA・Alphabet等",
              "75銘柄グローバル分散",
              "信託報酬0.68%",
              "自動運転技術＋EV両対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "Tesla（TSLA）",
            rank: 2,
            highlight: "EV・自動運転王者",
            features: [
              "時価総額世界トップクラス",
              "FSD（完全自動運転）開発中",
              "エネルギー貯蔵事業も拡大",
              "高ボラの象徴",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "BYD（1211.HK）",
            rank: 3,
            highlight: "中国EV最大手・Tesla超え",
            features: [
              "2023年世界EV販売No.1達成",
              "バッテリー自社製で垂直統合",
              "低価格EVで新興国攻略",
              "ウォーレン・バフェット投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">自動運転・EV投資戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>DRIV/IDRV ETFで分散（コア資産5〜7%）</li>
          <li>Tesla個別株は1〜2%（高ボラで集中投資リスク大）</li>
          <li>NVIDIA（AIチップ）経由で間接投資も有効</li>
          <li>レアメタルETF（LIT）との組合せでEVバリューチェーン全体カバー</li>
          <li>2030年EV普及率50%予測、長期保有で恩恵最大化</li>
        </ul>
      </section>
      <AffiliateCTA
        title="自動運転・EV投資はSBI証券で｜DRIV・Tesla・BYD対応"
        description="SBI証券は自動運転ETF（DRIV・IDRV）・個別株（Tesla・BYD・Rivian・NVIDIA等）・香港株BYD完備。為替手数料無料、新NISA成長枠で非課税運用、モビリティ革命の恩恵を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🚗"
        highlight="業界No.1"
      />
    </>
  ),
  "5g-telecom-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">5G・通信ETF完全ガイド</h2>
        <p>
          5G（第5世代通信）は、IoT・自動運転・メタバース等を支える基盤インフラ。FIVG（Defiance 5G ETF）・NXTG（First Trust 5G ETF）で分散投資、Verizon・AT&T・T-Mobile等の通信キャリア、Qualcomm・Ericsson・Nokia等の技術提供企業に投資可能。通信キャリアは高配当（4〜7%）、技術企業は成長性重視の2本柱です。
        </p>
      </section>
      <ComparisonTableCTA
        title="5G・通信投資の主要手段"
        services={[
          {
            name: "FIVG（Defiance 5G）",
            rank: 1,
            highlight: "5G技術特化ETF",
            features: [
              "Qualcomm・Ericsson・Nokia等",
              "5Gインフラ技術75銘柄",
              "信託報酬0.3%",
              "新NISA成長枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "Verizon（VZ）",
            rank: 2,
            highlight: "米国通信大手・高配当",
            features: [
              "時価総額1800億ドル",
              "配当利回り6〜7%",
              "5G展開で事業拡大",
              "ディフェンシブ株",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">5G投資の戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>成長重視：FIVG・NXTG ETF（5G技術企業）</li>
          <li>高配当重視：Verizon・AT&T等の通信キャリア</li>
          <li>両方組合せ：成長ETF 60%＋高配当株40%</li>
          <li>IoT・自動運転・スマート家電普及で長期需要</li>
          <li>ポートフォリオ5〜10%配分推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="5G・通信投資はSBI証券で｜FIVG・Verizon対応"
        description="SBI証券は5G ETF（FIVG・NXTG）・通信個別株（Verizon・AT&T・Qualcomm等）完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用、通信インフラ革命の恩恵を取込める。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📡"
        highlight="業界No.1"
      />
    </>
  ),
  "rental-income-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">家賃収入・不動産所得の税金完全ガイド</h2>
        <p>
          不動産投資・アパート経営等で得た家賃収入は「不動産所得」として確定申告が必要です。青色申告で65万円控除、経費計上（減価償却・修繕費）、事業的規模（5棟10室以上）判定で節税幅が大きく変わります。適切な申告で所得税・住民税の負担を最小化できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="不動産所得の申告形態比較"
        services={[
          {
            name: "青色申告（事業的規模）",
            rank: 1,
            highlight: "65万円控除・最大節税",
            features: [
              "65万円控除（e-Tax・複式簿記）",
              "家族への給与を経費化（青色事業専従者給与）",
              "30万円未満の少額減価償却資産特例",
              "赤字の3年繰越控除",
            ],
            href: "https://www.all-senmonka.jp/",
            badge: "王道",
          },
          {
            name: "青色申告（非事業的規模）",
            rank: 2,
            highlight: "10万円控除・基本形",
            features: [
              "10万円控除（単式簿記でOK）",
              "記帳の手間が少ない",
              "損益通算で給与所得と相殺",
              "5棟10室未満が対象",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "白色申告",
            rank: 3,
            highlight: "簡単・控除なし",
            features: [
              "特別控除なし",
              "帳簿付けが簡易",
              "事業規模に関係なく選択可能",
              "税理士不要でも可能",
            ],
            href: "https://www.freee.co.jp/kaikei/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">経費計上できる主な費目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>減価償却費（建物：木造22年・RC造47年で償却）</li>
          <li>修繕費・リフォーム費（20万円未満は一括経費化）</li>
          <li>管理費・管理会社委託料</li>
          <li>固定資産税・都市計画税</li>
          <li>火災・地震保険料</li>
          <li>ローン金利（元本返済は経費外）</li>
          <li>税理士報酬・司法書士報酬</li>
          <li>交通費・物件調査費</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">事業的規模（5棟10室）の判定</h2>
        <p className="text-sm">
          独立家屋なら5棟以上、マンション・アパートなら10室以上で「事業的規模」と判定され、青色申告65万円控除が適用可能になります。5棟10室未満でも青色申告は可能ですが、控除は10万円に下がります。大規模投資家ほど事業的規模＞青色申告＞65万円控除の恩恵が大きくなる構造です。
        </p>
      </section>
      <AffiliateCTA
        title="不動産投資の税務相談は税理士ドットコムで｜無料マッチング"
        description="税理士ドットコムは全国6000人以上の税理士から無料で紹介。不動産所得の確定申告・青色申告対応税理士を地域・料金・実績で絞り込み、相性の合う先生をマッチング。初回相談も無料で承れる。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏢"
        highlight="無料マッチング"
      />
    </>
  ),
  "sideline-writing-monetize-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ライティング副業で月10万円稼ぐ完全ガイド</h2>
        <p>
          ライティング副業は初期投資ゼロ、スキマ時間で始められる人気の副業。クラウドワークス・ランサーズ等のクラウドソーシングで案件獲得、SEO記事・取材記事・シナリオ等のジャンルで文字単価0.5〜5円まで幅広い。継続的な実績作りで月10万円以上も現実的です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ライティング副業のプラットフォーム比較"
        services={[
          {
            name: "クラウドワークス",
            rank: 1,
            highlight: "案件数No.1・初心者歓迎",
            features: [
              "登録ユーザー480万人超",
              "案件数業界最大級",
              "初心者向け案件多数（0.3〜1円/字）",
              "システム手数料20%（5万円以下）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "ランサーズ",
            rank: 2,
            highlight: "高単価案件が多い",
            features: [
              "登録ランサー110万人",
              "認定ランサー制度で実績差別化",
              "直接契約（エージェント案件）もあり",
              "文字単価1〜3円の中〜高単価",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "ココナラ",
            rank: 3,
            highlight: "出品型で自由度高",
            features: [
              "スキル出品型のマーケット",
              "価格を自分で設定可能",
              "得意ジャンルで指名受注",
              "システム手数料22%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">文字単価の相場と月10万円達成戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>初心者：0.3〜0.8円/字（月3〜5万円が目安）</li>
          <li>中級者：1〜2円/字（月10〜20万円可能）</li>
          <li>上級者・専門家：3〜5円/字（月30万円以上）</li>
          <li>取材記事・インタビュー：5,000〜30,000円/本</li>
          <li>シナリオライティング：10,000〜100,000円/本</li>
          <li>SEO特化ライター：月30〜50万円（継続契約）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">副業収入の確定申告</h2>
        <p className="text-sm">
          会社員で副業収入が年20万円を超えたら確定申告が必要。青色申告なら65万円控除＋赤字繰越可能で節税幅大。freee会計・マネーフォワードクラウド確定申告等のソフトを使えば簿記知識ゼロでも自動化できます。経費計上（パソコン・書籍・通信費の按分）で課税所得を圧縮しましょう。
        </p>
      </section>
      <AffiliateCTA
        title="ライティング案件獲得ならココナラ｜初心者から上級者まで"
        description="ココナラは150万人超の登録者数、ライティング出品者の約15%が月収10万円超。文字単価1〜3円の中単価案件が豊富、SEO記事・シナリオ・取材記事等のジャンル特化で指名受注も可能。"
        buttonText="ココナラに登録する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="✍️"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "online-salon-subscription-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オンラインサロン運営で月100万円稼ぐ完全ガイド</h2>
        <p>
          オンラインサロンは、固定ファンから月額料金を継続的に得られる高収益ビジネスモデル。DMMオンラインサロン・CAMPFIRE Community・Fanbox等のプラットフォームを活用し、会員100人×月3,000円で月30万円、会員500人×月5,000円で月250万円の収益化が現実的です。
        </p>
      </section>
      <ComparisonTableCTA
        title="オンラインサロンプラットフォーム比較"
        services={[
          {
            name: "DMMオンラインサロン",
            rank: 1,
            highlight: "国内最大手・集客力",
            features: [
              "DMMの集客力を活用できる",
              "決済・管理システム完備",
              "システム手数料20〜30%",
              "審査があるため一定の質担保",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "CAMPFIRE Community",
            rank: 2,
            highlight: "審査緩い・始めやすい",
            features: [
              "個人でも始めやすい",
              "月額課金＋単発プロジェクト併用可",
              "手数料10〜15%",
              "Facebookグループ連携OK",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "note（有料マガジン）",
            rank: 3,
            highlight: "クリエイター向け",
            features: [
              "記事単位の課金も可能",
              "手数料10%＋決済手数料5%",
              "SEOに強いプラットフォーム",
              "note pro（法人）もあり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">会員獲得＆継続率UPの戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>SNS（X・Instagram・YouTube）からの集客（フォロワー1万人以上推奨）</li>
          <li>無料コンテンツを毎日発信→有料サロンでプレミアム情報提供</li>
          <li>月額2,000〜5,000円が最も継続率高い（サブスク心理的上限）</li>
          <li>Discord・Slack・Facebookグループでコミュニティ形成</li>
          <li>月1回のオフ会・Zoom座談会で脱会防止</li>
          <li>コンテンツ更新頻度（週2〜3回）で満足度維持</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">収益化シミュレーション</h2>
        <p className="text-sm">
          月3,000円×100人＝月30万円、月5,000円×500人＝月250万円、月10,000円×1000人＝月1000万円まで収益拡大可能。手数料20%引いた実収入は8割程度、経費（ツール・広告・運営費）引いて最終利益率は60〜70%が目安。法人化（マイクロ法人）で節税効果も狙えます。
        </p>
      </section>
      <AffiliateCTA
        title="サロン開設の準備はココナラで｜ロゴ・サムネ・コンサル"
        description="ココナラではオンラインサロン立ち上げに必要なロゴ制作・ランディングページ・サムネ作成・運営コンサル等が1万円〜依頼可能。プロの力を借りて質の高いサロンを短期間で構築できる。"
        buttonText="ココナラで相談する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🎪"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "voice-actor-side-business-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">声優・ナレーター副業完全ガイド</h2>
        <p>
          声優・ナレーター副業は、自宅録音環境と営業力があれば未経験からでも始められる人気副業。ココナラ・Voip・MyLevel等のプラットフォームで1件500円〜10万円の案件を獲得、月5〜30万円の収入も現実的。YouTube動画・企業VP・ゲーム・電子書籍朗読と需要は拡大中です。
        </p>
      </section>
      <ComparisonTableCTA
        title="声優・ナレーター副業プラットフォーム"
        services={[
          {
            name: "ココナラ",
            rank: 1,
            highlight: "初心者でも始めやすい",
            features: [
              "声優・ナレーションカテゴリあり",
              "1件500〜30,000円の案件多数",
              "出品型で価格自由設定",
              "実績を積めばランキング上位で集客",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "クラウドワークス",
            rank: 2,
            highlight: "企業案件が多い",
            features: [
              "企業のVP・CM音声案件",
              "1件5,000〜50,000円の中単価",
              "継続契約の可能性あり",
              "登録者480万人の大手",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "SKIMA / MyLevel",
            rank: 3,
            highlight: "ゲーム・音声作品特化",
            features: [
              "乙女ゲーム・シチュエーションCD等",
              "1本5,000〜30,000円",
              "ファン層のつきやすいジャンル",
              "長期ファンからのリピート多め",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">必要な機材・環境</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コンデンサーマイク（SHURE SM7B・Audio-Technica AT2020等、2〜5万円）</li>
          <li>オーディオインターフェイス（Focusrite Scarlett等、1〜3万円）</li>
          <li>ポップガード・リフレクションフィルター（吸音処理、5,000円〜）</li>
          <li>DAW（Audacity無料、Adobe Audition月3,000円）</li>
          <li>静かな録音環境（深夜・クローゼット活用）</li>
          <li>初期投資合計：5〜15万円で開始可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">案件単価と月収ロードマップ</h2>
        <p className="text-sm">
          初心者（〜3ヶ月）：月1〜5万円（1件500〜3000円、実績作り段階）。中級者（3〜12ヶ月）：月10〜20万円（1件3000〜10000円、リピート受注）。上級者（1年以上）：月30万円〜（1件1〜10万円、企業案件・継続契約）。声質・演技力・営業力の3要素で差がつく副業です。
        </p>
      </section>
      <AffiliateCTA
        title="声優・ナレーター案件獲得ならココナラ｜月30万円も実現可能"
        description="ココナラは150万人超の登録者数、声優・ナレーターカテゴリで指名受注が狙える。出品価格も自由設定、SNSとの連携で集客力UP、実績積み重ねで月30万円以上の収入も実現可能。"
        buttonText="ココナラに登録する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🎙️"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "photo-stock-royalty-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">写真・動画素材販売で不労所得</h2>
        <p>
          ストックフォト・動画素材販売は、一度アップロードすれば半永久的に収益が発生する「不労所得型副業」。PIXTA・Adobe Stock・Shutterstock・iStock等に素材を投稿すると、DL毎にロイヤリティ（20〜60%）を得られ、100〜1000枚の素材ストックで月1〜10万円の継続収入を実現できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="ストックフォト・動画プラットフォーム比較"
        services={[
          {
            name: "PIXTA",
            rank: 1,
            highlight: "日本最大・ロイヤリティ高",
            features: [
              "ロイヤリティ35〜58%（ランク制）",
              "日本人モデル・和風素材が売れる",
              "審査厳しめで質重視",
              "月1〜5万円の収入例多数",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "Adobe Stock",
            rank: 2,
            highlight: "世界最大・DL数多",
            features: [
              "ロイヤリティ33%",
              "Adobe Creative Cloudから購入される",
              "動画素材の需要高",
              "海外DL中心（英語タイトル推奨）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "Shutterstock",
            rank: 3,
            highlight: "老舗・審査緩め",
            features: [
              "ロイヤリティ15〜40%（階段式）",
              "世界200カ国のクリエイター登録",
              "月100DLで中級ランクアップ",
              "動画・音楽素材もOK",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">売れる写真ジャンル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ビジネスシーン（会議・打ち合わせ・PC作業）</li>
          <li>日常生活（家族・料理・健康）</li>
          <li>季節イベント（正月・桜・紅葉・クリスマス）</li>
          <li>背景素材（シンプル・無地・テクスチャ）</li>
          <li>医療・介護（看護・健診・高齢者）</li>
          <li>IT・テクノロジー（AI・スマホ・ガジェット）</li>
          <li>動画素材（4K・短尺・ループ可能）は高単価</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">収益化の目安と戦略</h2>
        <p className="text-sm">
          初心者：月100〜5000円（素材50〜200枚）。中級者：月1〜5万円（素材500〜2000枚）。上級者：月10〜30万円（素材3000枚以上＋動画併用）。カメラ1台＋スマホでも開始可、初期投資5〜20万円でスタート可能。継続アップロード＋トレンド対応で安定収入を構築できます。
        </p>
      </section>
      <AffiliateCTA
        title="副業カメラマンのスキルアップはココナラで｜現役プロに相談"
        description="ココナラでは現役プロカメラマン・写真家が「売れる写真の撮り方」「PIXTA審査合格のコツ」等を5,000円〜指南。初心者が短期間で成果を出すための個別アドバイスが受けられる。"
        buttonText="ココナラで相談する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📸"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "youtube-shorts-monetize-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">YouTube Shorts収益化完全ガイド</h2>
        <p>
          YouTube Shortsは、60秒以下の縦型動画で広告収益・Super Thanks・メンバーシップから収益化可能。収益化条件はチャンネル登録者1000人＋過去90日のShorts視聴1000万回（or 通常動画4000時間）。1日10万再生で月3万円〜、バズれば月100万円超も実現可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="YouTube Shorts収益化の主要手段"
        services={[
          {
            name: "広告収益（YouTubeパートナープログラム）",
            rank: 1,
            highlight: "Shorts Fund廃止後の正式プログラム",
            features: [
              "RPM 0.01〜0.05ドル/再生",
              "1000万再生で15〜50万円",
              "日本語動画は単価低め（0.01〜0.02ドル）",
              "英語動画は高単価（0.03〜0.05ドル）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "企業案件・PR",
            rank: 2,
            highlight: "フォロワー×単価で高収益",
            features: [
              "チャンネル登録者1万人×1円＝10,000円〜",
              "10万人登録なら1案件5〜30万円",
              "ファッション・コスメ・ガジェット系が高単価",
              "Instagramと併用で単価UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "Super Thanks・メンバーシップ",
            rank: 3,
            highlight: "コアファン課金",
            features: [
              "Super Thanks（動画への投げ銭）",
              "メンバーシップ月額490〜5,990円",
              "登録者1万人で月3〜10万円が目安",
              "コミュニティ形成で継続収入",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">バズる動画の作り方</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>冒頭3秒で視聴者を掴む（意外性・疑問・驚き）</li>
          <li>縦型16:9比率・高画質（1080p以上）</li>
          <li>30〜45秒の最適尺（完視聴率70%以上）</li>
          <li>トレンド音源を活用（流行のBGMで拡散）</li>
          <li>ハッシュタグ3〜5個（#Shorts必須）</li>
          <li>サムネイル要素（テキストオーバーレイ）</li>
          <li>投稿タイミング（平日19〜22時が最適）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月10万円達成ロードマップ</h2>
        <p className="text-sm">
          初月：毎日1本投稿（30本で1本バズる確率）。3ヶ月：登録者1000人・10万再生達成で収益化開始（月1〜3万円）。6ヶ月：登録者1万人・100万再生で月10〜30万円。1年：登録者10万人・月1000万再生で月100〜300万円。継続力＆トレンド対応が成功の鍵です。
        </p>
      </section>
      <AffiliateCTA
        title="YouTube運営の悩みはココナラで｜サムネ・編集・コンサル"
        description="ココナラではサムネイル制作（3,000円〜）、動画編集（1本5,000円〜）、YouTube運営コンサル（1時間10,000円〜）等を依頼可能。プロの力で短期間でチャンネル急成長を実現できる。"
        buttonText="ココナラで相談する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📱"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "tiktok-creator-fund-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">TikTokクリエイター収益化ガイド</h2>
        <p>
          TikTokの収益化手段は、Creator Rewards Program（旧Creator Fund）・ライブ配信ギフト・企業案件・TikTok Shopアフィリエイト等多様。1万フォロワー＋動画10万再生で収益化開始、フォロワー10万人で月30〜100万円、フォロワー100万人で月300万円以上のトップクリエイターも珍しくありません。
        </p>
      </section>
      <ComparisonTableCTA
        title="TikTok収益化の主要手段"
        services={[
          {
            name: "Creator Rewards Program",
            rank: 1,
            highlight: "広告収益型・2024年刷新",
            features: [
              "1万フォロワー・動画10万再生条件",
              "1分以上の動画が対象",
              "RPM 0.5〜2ドル（日本は低め）",
              "100万再生で5〜20万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "王道",
          },
          {
            name: "ライブ配信ギフト",
            rank: 2,
            highlight: "フォロワー1000人で配信可能",
            features: [
              "ギフトの50%が収益化",
              "人気ライバーは月100万円超",
              "毎日配信の継続が重要",
              "アプリ内通貨換金率50%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "企業案件・PR投稿",
            rank: 3,
            highlight: "フォロワー数×単価で高収益",
            features: [
              "フォロワー×1〜5円が相場",
              "10万人なら1案件10〜50万円",
              "コスメ・ファッション・ガジェット系多",
              "Instagramと併用で単価UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">TikTokで伸ばすコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ニッチなジャンル特化（料理・美容・コメディ・教育）</li>
          <li>1日1〜3本投稿を最低1ヶ月継続（アルゴリズム評価期間）</li>
          <li>1秒目でフック作り（完視聴率80%以上を狙う）</li>
          <li>トレンド音源・ハッシュタグを常にチェック</li>
          <li>コメント返信で エンゲージメント向上</li>
          <li>Shorts・Reels等の他SNSでクロスプロモ</li>
          <li>TikTok LIVEで週2〜3回配信＝ファン化加速</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月30万円達成のロードマップ</h2>
        <p className="text-sm">
          初月〜3ヶ月：毎日投稿でフォロワー1000人＋配信開始。3〜6ヶ月：フォロワー1万人＋Creator Rewards対象、月5〜10万円の収益化。6〜12ヶ月：フォロワー5〜10万人＋企業案件獲得、月20〜50万円。1年以降：100万フォロワー目標で月100万円超のトップクリエイターへ。
        </p>
      </section>
      <AffiliateCTA
        title="TikTok運用ならココナラで｜動画編集・コンサル"
        description="ココナラではTikTok特化の動画編集（1本3,000円〜）、運用コンサル（月額30,000円〜）、サムネイル・BGM制作等を依頼可能。プロの力で再生数＆フォロワー数を一気に伸ばせる。"
        buttonText="ココナラで相談する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🎵"
        highlight="スキル売買No.1"
      />
    </>
  ),
  "dollar-cost-averaging-vs-lumpsum": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ドルコスト平均法vs一括投資｜徹底比較</h2>
        <p>
          1000万円の資金をどう投資するか？これは投資家の永遠の課題です。ドルコスト平均法（DCA）で月々分割投資する派と、一括投資（Lump Sum）で全額投入する派、過去40年のS&P500データで検証すると約70%の期間で一括投資が有利ですが、心理的負担ゼロの積立投資も実用性は高い。目的別の最適解を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="ドルコスト平均法 vs 一括投資の比較"
        services={[
          {
            name: "一括投資（Lump Sum）",
            rank: 1,
            highlight: "過去70%の期間で有利",
            features: [
              "資金を即座に市場暴露",
              "機会損失を最小化",
              "期待リターン最大化",
              "上昇相場で圧倒的に有利",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "統計的優位",
          },
          {
            name: "ドルコスト平均法（DCA）",
            rank: 2,
            highlight: "心理的負担ゼロ",
            features: [
              "高値掴みリスク回避",
              "価格下落時の買い増し効果",
              "毎月一定額で継続可能",
              "積立NISA・iDeCoの基本形",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "実用性高",
          },
          {
            name: "分割投資（Value Averaging）",
            rank: 3,
            highlight: "両者のハイブリッド",
            features: [
              "6〜12ヶ月で分割投資",
              "市場下落時に追加投資",
              "心理的ハードル低下",
              "上級者向け戦略",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">あなたに最適な戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>退職金・相続等のまとまった資金：6〜12ヶ月で分割投資</li>
          <li>毎月の給与からの積立：ドルコスト平均法一択（新NISA・iDeCo）</li>
          <li>暴落後の投資判断：一括投資が有利（Buy the Dip）</li>
          <li>初心者・心配性：ドルコスト平均法で心理的負担軽減</li>
          <li>1億円以上の富裕層：半分一括＋半分DCAが実用的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="積立投資も一括投資もSBI証券で｜投資信託・ETF両対応"
        description="SBI証券は新NISA・iDeCo完全対応、投資信託2500本以上、米国株ETF（VTI・VOO等）・国内ETF（TOPIX連動等）に対応。ドルコスト平均法・一括投資どちらの戦略でも最強のプラットフォーム。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚖️"
        highlight="業界No.1"
      />
    </>
  ),
  "rebalancing-strategy-detail": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">リバランス戦略完全ガイド</h2>
        <p>
          ポートフォリオは時間経過で本来の配分から乖離します。株式80%・債券20%の目標が、好調相場で株式90%・債券10%になることも。リバランスで初期配分に戻すことで、リスク管理＆逆張り効果を得られます。定期リバランス（年1〜2回）vs 閾値リバランス（±5%乖離）の最適解と、税金コスト最小化を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="リバランス手法の比較"
        services={[
          {
            name: "定期リバランス（年1〜2回）",
            rank: 1,
            highlight: "シンプル・実用的",
            features: [
              "年始or誕生日の固定タイミング",
              "忘れない仕組みが作れる",
              "税金コスト予測可能",
              "初心者に最適",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "閾値リバランス（±5%乖離）",
            rank: 2,
            highlight: "市場変動に応じた対応",
            features: [
              "目標配分から5%超乖離で実施",
              "大相場・暴落時に自動対応",
              "監視の手間が必要",
              "中上級者向け",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ロボアド自動リバランス",
            rank: 3,
            highlight: "完全自動化",
            features: [
              "ウェルスナビ・THEO等",
              "四半期ごと自動実施",
              "手数料1.1%が必要",
              "手間ゼロで運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">税金コスト最小化の実装</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新NISA口座で保有：売買益非課税でリバランスコストゼロ</li>
          <li>iDeCo口座：売買・スイッチング無料、退職時のみ課税</li>
          <li>特定口座：売却時20.315%課税、リバランスは最小限に</li>
          <li>新規買付で配分調整：売却ゼロで配分調整（最も税効率良い）</li>
          <li>年末調整で損出し：含み損銘柄を売却して益出しと相殺</li>
        </ul>
      </section>
      <AffiliateCTA
        title="リバランス実装はSBI証券で｜新NISA非課税で税コストゼロ"
        description="SBI証券の新NISA口座ではリバランス売買の税金がゼロ。iDeCoもスイッチング無料、特定口座でも損益通算活用で税負担最小化。リバランスを気にせず長期運用を継続できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔄"
        highlight="業界No.1"
      />
    </>
  ),
  "portfolio-60-40-classic-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">60/40ポートフォリオ｜王道戦略</h2>
        <p>
          株式60%・債券40%の配分は、数十年間ウォール街で「王道戦略」と呼ばれてきました。過去50年の年平均リターン8%、最大下落30%、シャープレシオも優秀。2022年は金利上昇で株債両落ちの異例を経験したものの、長期的な有効性は健在です。実装方法と新NISAでの構築例を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="60/40ポートフォリオの実装例"
        services={[
          {
            name: "米国特化型",
            rank: 1,
            highlight: "VTI 60%＋BND 40%",
            features: [
              "米国全株式ETF（VTI）60%",
              "米国総合債券ETF（BND）40%",
              "信託報酬0.03〜0.04%",
              "SBI証券・楽天証券で購入可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "低コスト",
          },
          {
            name: "日本人向け（為替ヘッジ）",
            rank: 2,
            highlight: "全世界株＋国内債券",
            features: [
              "eMAXIS Slim全世界株60%",
              "eMAXIS Slim国内債券40%",
              "為替リスク軽減",
              "新NISA積立枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "グローバル分散型",
            rank: 3,
            highlight: "VT 60%＋BNDW 40%",
            features: [
              "全世界株式ETF（VT）60%",
              "全世界債券ETF（BNDW）40%",
              "カントリーリスク最小",
              "究極の分散投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">60/40の過去パフォーマンス</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1990〜2024年：年平均リターン8.5%（S&P500単独は10.5%）</li>
          <li>最大下落：2008年-30%・2022年-16%（S&P500は-37%・-18%）</li>
          <li>シャープレシオ0.75（S&P500の0.6より優秀）</li>
          <li>リタイア期（取崩し期）に最適な配分</li>
          <li>2022年の株債両落ちは例外的現象（インフレ＋利上げ同時）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="60/40ポートフォリオ実装はSBI証券で｜VTI・BND対応"
        description="SBI証券はVTI・BND・VT・BNDW等の米国ETFが買付手数料無料。為替手数料も住信SBIネット銀行連携で無料、新NISA成長枠で非課税運用。60/40戦略を最安コストで実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="⚖️"
        highlight="業界No.1"
      />
    </>
  ),
  "all-weather-portfolio-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オールウェザー・ポートフォリオ｜ダリオ流分散戦略</h2>
        <p>
          ヘッジファンドBridgewater創業者レイ・ダリオが考案したオールウェザー・ポートフォリオは、株式30%・長期債40%・中期債15%・コモディティ7.5%・金7.5%の配分で、成長・不況・インフレ・デフレの4局面すべてで安定リターンを狙う戦略。過去40年間、年平均6〜8%・最大下落10%前後と驚異的な安定性を実現しています。
        </p>
      </section>
      <ComparisonTableCTA
        title="オールウェザー構成と実装ETF"
        services={[
          {
            name: "株式30%",
            rank: 1,
            highlight: "VTI（米国全株式）",
            features: [
              "VTI or VT（全世界株）",
              "eMAXIS Slim全世界株",
              "成長局面で収益源",
              "インフレ耐性も一部あり",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "長期債40%＋中期債15%",
            rank: 2,
            highlight: "TLT＋IEF",
            features: [
              "TLT（20年超米国債）40%",
              "IEF（7〜10年米国債）15%",
              "不況・デフレ時に収益源",
              "株式と逆相関",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "コア債券",
          },
          {
            name: "金7.5%＋コモディティ7.5%",
            rank: 3,
            highlight: "GLD＋DBC",
            features: [
              "GLD（金ETF）7.5%",
              "DBC（コモディティ）7.5%",
              "インフレ耐性",
              "地政学リスクヘッジ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">オールウェザーの過去実績</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1984〜2024年：年平均リターン7.7%</li>
          <li>最大下落：2008年-10%（S&P500は-37%）</li>
          <li>2022年：-15%前後（金利上昇・株債同時下落の例外）</li>
          <li>シャープレシオ0.9超（投資戦略トップクラス）</li>
          <li>富裕層・リタイア層に人気、安定志向向け</li>
        </ul>
      </section>
      <AffiliateCTA
        title="オールウェザー実装はSBI証券で｜VTI・TLT・GLD対応"
        description="SBI証券はオールウェザー構成の米国ETF（VTI・TLT・IEF・GLD・DBC）をすべて購入可能。為替手数料無料、新NISA成長枠で非課税運用、ダリオ流戦略を個人投資家でも実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌦️"
        highlight="業界No.1"
      />
    </>
  ),
  "permanent-portfolio-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">パーマネント・ポートフォリオ｜4均等戦略</h2>
        <p>
          ハリー・ブラウンが1980年代に考案したパーマネント・ポートフォリオは、株式25%・長期債25%・金25%・現金25%の均等配分戦略。どんな経済局面（繁栄・不況・インフレ・デフレ）でも4資産のいずれかが収益源となり、年平均6〜8%・最大下落15%前後の安定リターンを実現。危機耐性が極めて高い、保守派向けの名戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="パーマネント・ポートフォリオ構成"
        services={[
          {
            name: "株式25%",
            rank: 1,
            highlight: "繁栄局面の収益源",
            features: [
              "VTI（米国全株式）or VT",
              "eMAXIS Slim全世界株",
              "成長局面で10〜20%リターン",
              "インフレ耐性も一部あり",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "長期債25%",
            rank: 2,
            highlight: "不況・デフレの収益源",
            features: [
              "TLT（20年超米国債）",
              "EDV（超長期米国債）",
              "不況時に価格上昇",
              "金利低下で収益最大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "金25%＋現金25%",
            rank: 3,
            highlight: "インフレ＆安全資産",
            features: [
              "GLD（金ETF）25%",
              "現金（MMF・定期預金）25%",
              "地政学リスク・インフレ耐性",
              "暴落時の買い増し原資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "防衛",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">パーマネントの実績</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1972〜2024年：年平均リターン7.8%</li>
          <li>最大下落：2008年-10%・2022年-15%</li>
          <li>70年代スタグフレーション期：年平均9%超（S&P500は-1%）</li>
          <li>インフレ耐性・危機耐性でトップクラス</li>
          <li>60代以上のリタイア層・保守派投資家に最適</li>
        </ul>
      </section>
      <AffiliateCTA
        title="パーマネント・ポートフォリオ実装はSBI証券で"
        description="SBI証券ではVTI・TLT・GLDの米国ETFと国内MMF・定期預金の4資産を1つの口座で管理可能。為替手数料無料、新NISA成長枠で非課税運用、どんな相場でも眠れる安定ポートフォリオを実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏛️"
        highlight="業界No.1"
      />
    </>
  ),
  "three-fund-portfolio-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">3ファンドポートフォリオ｜ボーグル流シンプル投資</h2>
        <p>
          バンガード創業者ジョン・ボーグルが提唱した3ファンドポートフォリオは、米国株式・海外株式・米国債券の3本だけで構築する究極のシンプル戦略。年齢＝債券配分のルール（20代20%、40代40%等）で年代別調整も容易。低コスト（信託報酬0.1%以下）＆全世界分散で、S&P500にも匹敵する長期リターンを実現します。
        </p>
      </section>
      <ComparisonTableCTA
        title="3ファンドの実装例（年代別）"
        services={[
          {
            name: "20〜30代（積極型）",
            rank: 1,
            highlight: "株式80%＋債券20%",
            features: [
              "VTI（米国全株式）50%",
              "VXUS（海外株式）30%",
              "BND（米国債券）20%",
              "年平均リターン9%目標",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "成長重視",
          },
          {
            name: "40〜50代（バランス型）",
            rank: 2,
            highlight: "株式60%＋債券40%",
            features: [
              "VTI 40%＋VXUS 20%",
              "BND 40%",
              "年平均リターン7〜8%",
              "退職準備期に最適",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "60代以降（保守型）",
            rank: 3,
            highlight: "株式40%＋債券60%",
            features: [
              "VTI 25%＋VXUS 15%",
              "BND 60%",
              "年平均リターン5〜6%",
              "取崩し期の安定性重視",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">3ファンドの優位性</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>シンプル：3本だけで全世界分散を実現</li>
          <li>低コスト：信託報酬0.05〜0.1%（ロボアド1.1%より圧倒的に安い）</li>
          <li>年代別調整：年齢＝債券配分の明確ルール</li>
          <li>リバランス容易：年1回、新規買付で配分調整</li>
          <li>新NISA対応：積立＋成長枠で効率的運用</li>
        </ul>
      </section>
      <AffiliateCTA
        title="3ファンドポートフォリオはSBI証券で｜VTI・VXUS・BND対応"
        description="SBI証券では3ファンド（VTI・VXUS・BND）がすべて買付手数料無料。為替手数料も住信SBI連携で無料、新NISA成長枠で非課税運用、年0.1%の激安コストでボーグル流投資を実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📊"
        highlight="業界No.1"
      />
    </>
  ),
  "core-satellite-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">コア・サテライト戦略｜安定と成長の最適配分</h2>
        <p>
          コア・サテライト戦略は、安定のコア（全世界株式・S&P500等のインデックス70〜80%）＋成長狙いのサテライト（個別株・テーマETF・REIT・暗号資産等の20〜30%）を組み合わせる実用的戦略。インデックスの安定性を保ちつつ、個別の勝ち馬を狙う攻守両立のアプローチで、平均以上のリターンを実現できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="コア・サテライト構成例"
        services={[
          {
            name: "王道型（80/20）",
            rank: 1,
            highlight: "初心者〜中級者向け",
            features: [
              "コア80%（eMAXIS Slim全世界株）",
              "サテライト20%（個別株・テーマETF）",
              "リスク管理しやすい",
              "年平均リターン8〜10%目標",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "成長重視型（70/30）",
            rank: 2,
            highlight: "中〜上級者向け",
            features: [
              "コア70%（S&P500・全世界株）",
              "サテライト30%（テーマETF・個別株）",
              "NASDAQ・半導体・AI等で成長狙い",
              "年平均リターン10〜12%期待",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "保守型（90/10）",
            rank: 3,
            highlight: "シニア・保守派向け",
            features: [
              "コア90%（全世界株＋債券）",
              "サテライト10%（高配当・優良株）",
              "リスク最小限",
              "安定＋α程度の成長",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">サテライト部分の選び方</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>テーマETF：半導体（SOXX）・AI（BOTZ）・クリーンエネルギー（ICLN）</li>
          <li>高配当ETF：HDV・VYM・日経高配当（月次配当も人気）</li>
          <li>個別株：GAFAM・Tesla・日本個別株（トヨタ・任天堂等）</li>
          <li>REIT：VNQ（米国REIT）・J-REIT（国内不動産）</li>
          <li>暗号資産：BTC・ETH（ポートフォリオ1〜5%以内）</li>
          <li>サテライトは短期売買NG、長期保有が基本</li>
        </ul>
      </section>
      <AffiliateCTA
        title="コア・サテライト戦略はSBI証券で｜インデックス＋個別株対応"
        description="SBI証券は投資信託2500本＋米国ETF＋日本個別株＋暗号資産（BTC・ETH）まで1口座で完結。コア（全世界株インデックス）＋サテライト（テーマETF・個別株）の組合せ戦略を最適コストで実装できる。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎯"
        highlight="業界No.1"
      />
    </>
  ),
  "new-startup-tax-credit-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">スタートアップ支援税制｜エンジェル税制の最新活用法</h2>
        <p>
          2023年大幅拡充されたスタートアップ支援税制（エンジェル税制）は、未上場スタートアップへの投資で最大1億円以上の税額控除が可能。プレシード・シード特例（20億円まで全額控除）・非上場株式譲渡益20億円非課税等、富裕層の節税戦略として活用価値が急上昇しています。本記事でその全貌を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="エンジェル税制の4タイプ比較"
        services={[
          {
            name: "プレシード・シード特例",
            rank: 1,
            highlight: "20億円まで全額控除",
            features: [
              "2023年4月施行の新制度",
              "投資額20億円まで全額課税所得控除",
              "スタートアップ創業5年以内対象",
              "超富裕層の最強節税手段",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "最強",
          },
          {
            name: "優遇措置A",
            rank: 2,
            highlight: "総所得から控除",
            features: [
              "対象企業への投資額-2,000円",
              "総所得金額等×40%が上限",
              "設立3年未満企業対象",
              "年収高い人ほど有利",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "優遇措置B・Bプラス",
            rank: 3,
            highlight: "株式譲渡益から控除",
            features: [
              "優遇B：株式譲渡益から控除",
              "優遇Bプラス：20億円まで非課税",
              "設立10年未満企業対象",
              "出口戦略重視",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">節税効果シミュレーション</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収3000万円・投資1000万円の場合、優遇A適用で税額200〜300万円減</li>
          <li>株式譲渡益1億円・投資5000万円の場合、優遇B適用で税額1000万円減</li>
          <li>プレシード特例は投資額全額が所得控除、超富裕層なら最大55%の節税</li>
          <li>Bプラスで20億円まで譲渡益非課税、M&A成功時のリターン最大化</li>
          <li>5〜10年の長期投資が前提、出口（IPO・M&A）確保が重要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="エンジェル税制の詳細は税理士ドットコムで｜専門家無料マッチング"
        description="税理士ドットコムでは、エンジェル税制・プレシード特例・優遇措置Bプラス等の高度な税務対応経験のある税理士を無料で紹介。富裕層の節税戦略に特化した専門家を全国から探せる。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🚀"
        highlight="無料マッチング"
      />
    </>
  ),
  "hometown-tax-advanced-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ふるさと納税上級活用術</h2>
        <p>
          ふるさと納税は「2,000円の自己負担で返礼品（寄付額の30%）」が基本ですが、上級者は年収別限度額の見極め・ワンストップ特例vs確定申告・楽天ポイント還元・医療費控除との併用で実質メリットを最大化します。年収800万円なら年12万円寄付で返礼品4万円相当＋楽天ポイント1万円獲得可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ふるさと納税 申告方式の比較"
        services={[
          {
            name: "ワンストップ特例",
            rank: 1,
            highlight: "年5自治体まで簡単",
            features: [
              "確定申告不要",
              "年5自治体まで",
              "住民税のみ控除（所得税還付なし）",
              "サラリーマン向き",
            ],
            href: "https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/",
            badge: "簡単",
          },
          {
            name: "確定申告（推奨）",
            rank: 2,
            highlight: "無制限＋医療費控除併用可",
            features: [
              "寄付自治体数に制限なし",
              "所得税還付＋住民税控除",
              "医療費控除・副業と併用可",
              "e-Taxで簡単",
            ],
            href: "https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/",
          },
          {
            name: "楽天ふるさと納税",
            rank: 3,
            highlight: "ポイント還元最大化",
            features: [
              "SPU最大16倍還元",
              "お買い物マラソンで+10倍",
              "寄付額の10%以上ポイント還元",
              "楽天経済圏ユーザー必須",
            ],
            href: "https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">年収別ふるさと納税限度額</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収400万円（独身）：年42,000円（返礼品13,000円相当）</li>
          <li>年収600万円（独身）：年77,000円（返礼品23,000円相当）</li>
          <li>年収800万円（独身）：年130,000円（返礼品40,000円相当）</li>
          <li>年収1000万円（独身）：年176,000円（返礼品53,000円相当）</li>
          <li>年収1500万円（独身）：年390,000円（返礼品117,000円相当）</li>
          <li>年収2000万円（独身）：年570,000円（返礼品170,000円相当）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天ふるさと納税でポイント大量還元｜SPU最大16倍"
        description="楽天ふるさと納税は、寄付額に応じて通常購入の最大16倍のポイント還元。お買い物マラソン期間中は+10倍、年末年始キャンペーンと合わせれば寄付額の15〜20%がポイントで戻る。楽天経済圏ユーザー必須。"
        buttonText="楽天ふるさと納税で探す"
        href="https://search.rakuten.co.jp/search/mall/%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E/"
        icon="🎁"
        highlight="ポイント最大化"
      />
    </>
  ),
  "corporate-dc-detail-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">企業型確定拠出年金（DC）完全ガイド</h2>
        <p>
          企業型DC（確定拠出年金）は、企業が掛金を拠出し従業員が運用する退職年金制度。2022年改正でiDeCo併用ルールが緩和（事業主掛金5.5万円以内なら併用可）、マッチング拠出の活用、運用商品の選定、退職時のiDeCo移換等、活用次第で老後資金に1000万円以上の差が出る重要制度です。
        </p>
      </section>
      <ComparisonTableCTA
        title="企業型DC×iDeCo併用の最適解"
        services={[
          {
            name: "企業型DCのみ（マッチング拠出）",
            rank: 1,
            highlight: "事業主+従業員で節税",
            features: [
              "事業主掛金月5.5万円以内",
              "従業員マッチング（事業主同額まで）",
              "合計月5.5万円節税可能",
              "給与所得控除＋全額非課税運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
            badge: "王道",
          },
          {
            name: "企業型DC×iDeCo併用",
            rank: 2,
            highlight: "月最大5.5万円",
            features: [
              "2022年10月改正で併用可能に",
              "事業主掛金月5.5万円以内で",
              "iDeCoも月2万円まで追加可能",
              "年収1000万円超なら最強",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
          {
            name: "退職時にiDeCoへ移換",
            rank: 3,
            highlight: "自営業・転職後の継続",
            features: [
              "退職後6ヶ月以内に移換必須",
              "iDeCoで自由に運用継続",
              "SBI・楽天証券が手数料最安",
              "60歳まで引き出し不可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">企業型DC運用のコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>元本確保型（定期預金・保険）ではなく、投資信託で運用（年4〜8%リターン狙う）</li>
          <li>インデックス型（MAXIS 日経平均・DIAM外国株等）の低コスト商品選定</li>
          <li>年1回の配分見直し（リバランス）で初期配分に戻す</li>
          <li>マッチング拠出は月5,000円から可能、給与所得控除も含め年間数十万円節税</li>
          <li>転職・退職時のiDeCo移換を忘れずに（6ヶ月以内）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCoへの移換はSBI証券で｜手数料業界最安"
        description="SBI証券のiDeCoは運営管理手数料0円、投資信託約40本のラインナップで運用商品を自由選択可能。企業型DCからの移換も簡単、60歳まで非課税運用で老後資金を大きく育てられる。"
        buttonText="SBI証券iDeCoの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/ideco/lp/lpideco.html"
        icon="🏢"
        highlight="手数料0円"
      />
    </>
  ),
  "investment-tax-schedule-detail": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資の税金完全ガイド</h2>
        <p>
          株式・投資信託・ETFの売買益・配当は申告分離課税20.315%（所得税15.315%＋住民税5%）。新NISA口座なら非課税、特定口座（源泉徴収あり）なら申告不要、損失は確定申告で3年繰越控除可能。配当金の受取方式（株式数比例配分・登録配当金方式）の選択もNISA効率を左右する重要ポイントです。
        </p>
      </section>
      <ComparisonTableCTA
        title="投資口座タイプの比較"
        services={[
          {
            name: "新NISA口座",
            rank: 1,
            highlight: "永年非課税",
            features: [
              "売却益・配当が全て非課税",
              "年360万円・生涯1800万円",
              "確定申告不要",
              "損失繰越不可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最優先",
          },
          {
            name: "特定口座（源泉徴収あり）",
            rank: 2,
            highlight: "申告不要で簡単",
            features: [
              "売却益・配当20.315%源泉徴収",
              "確定申告原則不要",
              "他口座との損益通算で申告可",
              "会社員・忙しい人向き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "特定口座（源泉徴収なし）",
            rank: 3,
            highlight: "確定申告必須",
            features: [
              "売却益20万円超で申告必要",
              "他の所得と合算可能",
              "損失繰越3年可能",
              "税金コントロール自由",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">節税戦略のポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>新NISA枠優先、枠を使い切ってから特定口座</li>
          <li>配当金は「株式数比例配分方式」でNISA非課税適用（登録配当金方式は課税）</li>
          <li>年末に含み損銘柄売却→益出し相殺で税金ゼロ（損出し戦略）</li>
          <li>3年繰越控除を活用、確定申告で翌年以降の益と相殺</li>
          <li>配当控除（所得税5〜10%の税額控除）で国内株配当の税負担軽減</li>
        </ul>
      </section>
      <AffiliateCTA
        title="税効率の良い投資はSBI証券で｜新NISA＋特定口座連携"
        description="SBI証券は新NISA・特定口座を1つの画面で統合管理。配当金は株式数比例配分方式でNISA非課税最大化、損益通算・繰越控除も自動計算、確定申告書類も簡単ダウンロード可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📋"
        highlight="業界No.1"
      />
    </>
  ),
  "crypto-tax-optimization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産節税戦略完全ガイド</h2>
        <p>
          暗号資産（仮想通貨）は雑所得課税で累進最大55%（住民税含む）。株式（20%）に比べて圧倒的に不利ですが、法人化（法人税約20〜23%）・損失時期のコントロール・ステーキング/DeFi収益の適切な申告で税負担を大幅に抑えられます。海外移住（シンガポール・UAE等）も上級者の選択肢です。
        </p>
      </section>
      <ComparisonTableCTA
        title="暗号資産節税の主な手段"
        services={[
          {
            name: "マイクロ法人設立",
            rank: 1,
            highlight: "税率55%→23%に半減",
            features: [
              "法人税約23%（所得800万円以下15%）",
              "経費計上範囲大幅拡大",
              "役員報酬で給与所得控除活用",
              "設立費用20〜30万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "損益通算＆繰越",
            rank: 2,
            highlight: "暗号資産内は可",
            features: [
              "同年内の暗号資産同士は損益通算可",
              "株式との損益通算は不可",
              "繰越控除も不可（株式と違い）",
              "年内での利確・損切りのタイミング調整",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "海外移住（上級）",
            rank: 3,
            highlight: "シンガポール・UAE等",
            features: [
              "シンガポール：暗号資産売却益非課税",
              "UAE：所得税なし",
              "マレーシア：MM2H制度",
              "年収数千万超の富裕層向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">申告の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>取引ごとに損益計算必要（移動平均法または総平均法）</li>
          <li>ステーキング・DeFi報酬は受領時の時価で雑所得計上</li>
          <li>NFT売却益も雑所得（営利目的継続的なら事業所得）</li>
          <li>ハードフォークで得た新トークンは受領時時価で所得計上</li>
          <li>Cryptact・Gtax等の税計算ソフト（年1〜3万円）で自動化推奨</li>
        </ul>
      </section>
      <AffiliateCTA
        title="暗号資産の節税は税理士ドットコムで｜仮想通貨税務専門"
        description="税理士ドットコムでは暗号資産・DeFi・NFT税務に詳しい税理士を無料マッチング。法人化設計・確定申告書類作成・複雑な取引履歴の損益計算まで、暗号資産投資家の節税を徹底サポート。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="₿"
        highlight="仮想通貨専門"
      />
    </>
  ),
  "real-estate-depreciation-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産減価償却節税完全ガイド</h2>
        <p>
          不動産投資の大きな魅力は、減価償却費による節税効果です。建物取得価格を法定耐用年数で分割して毎年経費計上、給与所得との損益通算で所得税・住民税を圧縮可能。特に築古木造物件の簡便法（残耐用年数4年で全額償却）・米国不動産の建物割合80%を活用すると、年収1500万円超の高所得者は数百万円の節税が可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="減価償却戦略の比較"
        services={[
          {
            name: "築古木造（簡便法）",
            rank: 1,
            highlight: "4年で全額償却",
            features: [
              "築22年超の木造は耐用年数4年",
              "年間25%ずつ償却可能",
              "2000万円物件で年500万円経費計上",
              "年収1500万円超の節税最強",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "王道",
          },
          {
            name: "米国不動産",
            rank: 2,
            highlight: "建物割合80%・短期償却",
            features: [
              "木造27.5年・土地は償却なし",
              "日本は土地20%・建物80%が標準",
              "米国は土地10%・建物90%が一般的",
              "為替リスクあるも節税効果高",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "RC造マンション（長期保有）",
            rank: 3,
            highlight: "耐用年数47年",
            features: [
              "新築RC造は47年償却",
              "毎年2.1%ずつ償却",
              "安定したキャッシュフロー",
              "長期保有向き",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">デッドクロスに注意</h2>
        <p className="text-sm">
          築古木造の簡便法による4年償却は、5年目以降に減価償却費がゼロになるため、急激な所得税増加（デッドクロス）を引き起こします。対策は5年目直前に売却（出口戦略）、新規物件取得で償却費を維持等。税理士と連携した長期シミュレーションが重要です。
        </p>
      </section>
      <AffiliateCTA
        title="不動産節税の最適解は税理士ドットコムで｜不動産税務専門家"
        description="税理士ドットコムでは不動産投資・減価償却・デッドクロス対策に強い税理士を無料マッチング。築古物件・米国不動産・法人化を総合的に検討し、年収数千万円の高所得者の節税を最大化。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="🏠"
        highlight="不動産税務専門"
      />
    </>
  ),
  "company-expense-rules-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員の経費計上ルール完全ガイド</h2>
        <p>
          会社員でも確定申告で経費を計上する方法があります。特定支出控除（給与所得控除を超える経費があれば追加控除）、副業収入からの経費計上（雑所得or事業所得）、各種控除の活用で年数十万円の節税が可能。年収800万円・経費100万円なら所得税20〜30万円の還付を受けられます。
        </p>
      </section>
      <ComparisonTableCTA
        title="会社員の経費計上の3ルート"
        services={[
          {
            name: "特定支出控除",
            rank: 1,
            highlight: "給与所得控除超で追加控除",
            features: [
              "通勤費・転居費・研修費等が対象",
              "給与所得控除の半分超で適用",
              "年収500万円なら控除額77万円超",
              "会社の証明書必要",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
          {
            name: "副業の経費計上",
            rank: 2,
            highlight: "事業所得なら青色65万円控除",
            features: [
              "副業収入から経費差引き",
              "事業所得（300万円超）は青色申告可",
              "パソコン・通信費・書籍・交通費",
              "家事按分（家賃・光熱費の一部）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
            badge: "実用的",
          },
          {
            name: "各種所得控除",
            rank: 3,
            highlight: "医療費・ふるさと納税・iDeCo",
            features: [
              "医療費控除（年10万円超分）",
              "ふるさと納税（年収別限度額）",
              "iDeCo全額控除（月2.3万円）",
              "地震保険料控除（年5万円まで）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">具体的な節税効果</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>年収800万円・副業経費100万円：所得税・住民税で年30万円節税</li>
          <li>年収1000万円・特定支出控除50万円：年20万円節税</li>
          <li>年収500万円・医療費20万円・ふるさと納税77,000円：年5万円節税</li>
          <li>iDeCo月2万円：年収600万円で年7.2万円節税</li>
          <li>副業事業所得＋青色申告65万円控除：追加で年13万円節税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="確定申告はfreeeで｜会社員の副業・経費計上も簡単"
        description="freee会計はスマホから5分で確定申告完了。副業経費の仕訳・家事按分・青色申告65万円控除の書類作成まで全自動。税理士ドットコムで税務相談も併用可能、会社員の節税を最大化。"
        buttonText="税理士ドットコムで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5"
        icon="💼"
        highlight="副業節税"
      />
    </>
  ),
  "insurance-tax-deduction-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生命保険料控除完全ガイド</h2>
        <p>
          生命保険料控除は、会社員・自営業問わず使える節税制度で、年間最大12万円（新制度）or 10万円（旧制度）の所得控除を受けられます。3種類の枠（一般生命保険・介護医療保険・個人年金保険）を賢く活用することで、年3〜5万円の節税効果が期待できる重要な制度です。
        </p>
      </section>
      <ComparisonTableCTA
        title="新制度vs旧制度の比較"
        services={[
          {
            name: "新制度（2012年以降契約）",
            rank: 1,
            highlight: "3種類で年12万円控除",
            features: [
              "一般生命保険：4万円控除",
              "介護医療保険：4万円控除",
              "個人年金保険：4万円控除",
              "合計12万円（所得税）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "王道",
          },
          {
            name: "旧制度（2011年以前契約）",
            rank: 2,
            highlight: "2種類で年10万円控除",
            features: [
              "一般生命保険：5万円控除",
              "個人年金保険：5万円控除",
              "介護医療保険枠なし",
              "合計10万円（所得税）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "住民税控除",
            rank: 3,
            highlight: "所得税と別枠で控除",
            features: [
              "新制度：各2.8万円×3=最大7万円",
              "旧制度：各3.5万円×2=最大7万円",
              "所得税控除より控除額少",
              "自動適用・書類提出不要",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">効率的な契約戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>3枠すべて利用：定期保険（一般）＋医療保険（介護医療）＋個人年金の組合せ</li>
          <li>共働き夫婦は夫婦それぞれで3枠×2＝年6枠活用（控除額2倍）</li>
          <li>個人年金枠は「税制適格特約」付きのみ対象（要確認）</li>
          <li>年8万円超の保険料でも控除上限は各4万円、配分見直しが有効</li>
          <li>新NISA・iDeCoと併用で総控除額を最大化（年20万円以上可能）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険の見直し相談は保険マンモスで｜無料FP相談"
        description="保険マンモスは全国のFPが自宅・カフェで無料相談対応。生命保険料控除の3枠フル活用プランや、掛け捨て＋新NISA戦略への転換等、専門家の視点で最適化。相談回数無制限・無理な勧誘なし。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🛡️"
        highlight="無料FP相談"
      />
    </>
  ),
  "personal-pension-insurance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人年金保険vs新NISA｜どっちがお得？</h2>
        <p>
          個人年金保険は月数万円積立で60〜70歳から年金形式で受け取る老後資金商品。定額型（予定利率0.3〜0.5%）と変額型（投資信託運用・平均3〜5%）、円建てvs外貨建て（米ドル3〜5%）で大きくリターンが異なります。新NISA（年7〜10%期待）との比較で、個人年金保険は「元本確保」「税制控除」「強制貯蓄」の3大メリットが強みです。
        </p>
      </section>
      <ComparisonTableCTA
        title="人気の個人年金保険3社比較"
        services={[
          {
            name: "ソニー生命（変額個人年金）",
            rank: 1,
            highlight: "運用実績重視",
            features: [
              "投資信託で運用（平均年5〜7%）",
              "月1万円〜積立可能",
              "契約者貸付制度あり",
              "税制適格特約で控除対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "運用重視",
          },
          {
            name: "明治安田生命（米ドル建て個人年金）",
            rank: 2,
            highlight: "外貨で高利回り",
            features: [
              "予定利率年3〜5%（米ドルベース）",
              "為替リスクあり",
              "10年確定年金or終身年金選択",
              "契約時手数料あり",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "住友生命（定額個人年金）",
            rank: 3,
            highlight: "元本保証重視",
            features: [
              "予定利率0.3〜0.5%",
              "元本割れリスクなし",
              "税制適格特約で控除対象",
              "保守派向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAとの併用戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>個人年金保険：月5,000〜15,000円（年4万円控除枠フル活用）</li>
          <li>新NISA：月5〜10万円（年60〜120万円）でメイン運用</li>
          <li>iDeCo：月1〜2万円（全額所得控除＋非課税運用）</li>
          <li>3つ組合せで年収600万円なら年15〜20万円節税可能</li>
          <li>個人年金は「強制貯蓄＋税制メリット」目的、運用は新NISA・iDeCoメインが合理的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="個人年金選びは保険マンモスで｜ソニー・明治安田・住友の詳細比較"
        description="保険マンモスは全国の保険会社40社以上から最適な個人年金プランを提案。運用型・外貨建て・定額型の違いを詳しく解説、新NISA・iDeCoとの併用戦略まで無料で相談可能。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="👵"
        highlight="無料FP相談"
      />
    </>
  ),
  "dental-insurance-detail-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">歯科保険＆治療費節約完全ガイド</h2>
        <p>
          歯科治療費は公的医療保険の対象と対象外（自由診療）があり、インプラント1本30〜50万円、矯正治療50〜100万円と高額。歯科保険（ライフネット生命・エクセルエイド等）で費用の一部カバー、医療費控除の活用、デンタルローンの活用等、賢く負担を減らす戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="歯科治療費の節約手段"
        services={[
          {
            name: "歯科保険（民間）",
            rank: 1,
            highlight: "月1,000〜3,000円で備える",
            features: [
              "ライフネット生命・エクセルエイド",
              "虫歯・歯周病・インプラント対応",
              "年間10〜50万円の給付金",
              "待機期間90日〜1年",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "実用",
          },
          {
            name: "医療費控除の活用",
            rank: 2,
            highlight: "年10万円超で税金還付",
            features: [
              "年間医療費-10万円が控除額",
              "家族全員分合算可",
              "通院交通費も対象",
              "確定申告で実施",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "デンタルローン",
            rank: 3,
            highlight: "自由診療の分割払い",
            features: [
              "金利2〜5%（クレカより安い）",
              "最長84回払い",
              "高額治療でも月々3〜5万円に",
              "アプラス・ジャックス等",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">主要治療の費用目安</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>虫歯治療（保険適用）：1回1,500〜3,000円、合計5,000〜10,000円</li>
          <li>根管治療（保険適用）：3〜5回通院で5,000〜15,000円</li>
          <li>セラミッククラウン（自由診療）：1本8〜15万円</li>
          <li>インプラント（自由診療）：1本30〜50万円</li>
          <li>矯正治療（自由診療）：50〜100万円（ワイヤー・マウスピース）</li>
          <li>ホワイトニング：オフィス3〜5万円、ホーム1〜3万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="歯科保険は保険マンモスで｜複数社から最適プラン提案"
        description="保険マンモスは歯科保険を扱う複数社から比較提案。ライフネット生命・エクセルエイド等の違い、インプラント・矯正カバー範囲、月額保険料（1,000〜3,000円）を無料で分かりやすく解説。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🦷"
        highlight="無料FP相談"
      />
    </>
  ),
};
