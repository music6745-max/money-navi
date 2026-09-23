Warning: truncated output (original token count: 87199)
Total output lines: 7145

import type { ReactNode } from "react";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DecisionBox } from "./helpers";

export const guideContentsPart03: Record<string, ReactNode> = {
  "income-protection-insurance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">所得補償保険は「働けない」リスクの備え</h2>
        <p>
          病気・ケガで長期間働けなくなると、会社員の傷病手当金（最長1年6ヶ月、月給の2/3）・自営業はそれすらなく収入ゼロに。所得補償保険に加入すれば、月10〜50万円の給付を最長65歳まで受け取れます。月額保険料2,000〜8,000円で、経済的死亡リスクをカバー可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 所得補償保険おすすめ比較"
        services={[
          {
            name: "SBI損保 就業不能保険",
            rank: 1,
            highlight: "月額1,500円〜｜ネット専業で格安",
            features: [
              "月給付金10〜50万円から選択可能",
              "支払期間1年・2年・5年・60歳/65歳まで",
              "精神疾患も対象",
              "Web申込で保険料割引",
            ],
            href: "https://www.sbisonpo.co.jp/",
            badge: "最安水準",
          },
          {
            name: "チューリッヒ生命 くらすプラス",
            rank: 2,
            highlight: "ストレス性疾病対応｜月額2,500円〜",
            features: [
              "うつ病等のストレス性疾病も対象",
              "月給付金10〜30万円",
              "60日免責期間後から給付",
              "Web申込で保険料割引",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "アクサダイレクト生命 就業不能保険",
            rank: 3,
            highlight: "アクサグループ｜ネット完結",
            features: [
              "月給付金10〜50万円",
              "支払期間60歳/65歳まで",
              "インターネット完結で保険料抑え",
              "精神疾患も5年間保障",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "ライフネット生命 働く人の保険3",
            rank: 4,
            highlight: "シンプル設計｜Web完結",
            features: [
              "月給付金10〜50万円のシンプル設計",
              "支払期間55歳/60歳/65歳まで",
              "60日免責期間後",
              "ネット完結で保険料抑え",
            ],
            href: "https://www.lifenet-seimei.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">会社員 vs 自営業の所得補償の必要性</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>会社員</strong>：傷病手当金（月給の2/3、最長1年6ヶ月）＋貯蓄で半年〜1年は生活可</li>
          <li><strong>自営業</strong>：傷病手当金なし、即収入ゼロ。所得補償保険は必須レベル</li>
          <li><strong>共働き会社員</strong>：配偶者収入でカバー可能なら必要性低め</li>
          <li><strong>子育て世帯</strong>：夫婦とも必須（世帯収入の維持が重要）</li>
          <li><strong>賃貸 vs 持ち家</strong>：住宅ローンがあるなら必須（団信と合わせて備え）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="所得補償保険もFPに相談｜保険見直しラボ"
        description="自営業・フリーランスは特に所得補償保険が必須。家族構成・収入・貯蓄状況からの必要保障額をFPが無料で計算、最適プランを中立的に提案。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "travel-insurance-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">海外旅行保険の必要性</h2>
        <p>
          海外での医療費は日本の10〜50倍。米国で虫垂炎の手術なら300万円超、高度医療なら1,000万円を超えるケースも。海外旅行保険に加入すれば、治療費・救援者費用・携行品損害・賠償責任まで広くカバー。1週間の保険料は1,500〜5,000円程度で、絶対必須の備えです。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 海外旅行保険おすすめ比較"
        services={[
          {
            name: "AIG損保 海外旅行保険",
            rank: 1,
            highlight: "24時間多言語サポート｜海外拠点豊富",
            features: [
              "世界190カ国での医療機関ネットワーク",
              "24時間日本語サポート",
              "キャッシュレス医療対応多数",
              "1週間1,500〜3,500円",
            ],
            href: "https://travel.aig.co.jp/pa/",
            badge: "業界最大手",
          },
          {
            name: "損保ジャパン 新・海外旅行保険off!",
            rank: 2,
            highlight: "パッケージプランがシンプル",
            features: [
              "目的別のパッケージプランで選びやすい",
              "治療・救援者費用無制限プラン",
              "スマホから即日加入可能",
              "1週間2,000〜5,000円",
            ],
            href: "https://www.sjnk.co.jp/",
          },
          {
            name: "東京海上日動 海外旅行保険",
            rank: 3,
            highlight: "国内最大手の信頼感｜補償手厚い",
            features: [
              "国内保険業界最大手",
              "世界中の提携病院でキャッシュレス治療",
              "弁護士費用特約も選択可",
              "1週間2,500〜5,500円",
            ],
            href: "https://www.tokiomarine-nichido.co.jp/",
          },
          {
            name: "tabiho/t@biho（旅行ホ）",
            rank: 4,
            highlight: "Web専業｜格安プランが人気",
            features: [
              "ネット申込で保険料抑え",
              "最短即日の申込可能",
              "項目別の自由設計",
              "1週間1,200〜3,000円",
            ],
            href: "https://www.t-hoken.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ付帯 vs 単体加入</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>クレカ付帯</strong>：年会費無料カードでも治療費100〜200万円程度カバー</li>
          <li><strong>ゴールドカード</strong>：治療費300〜500万円、家族特約ありも</li>
          <li><strong>単体加入</strong>：治療費無制限、より手厚い補償＋携行品・賠償責任</li>
          <li><strong>推奨組合せ</strong>：クレカ付帯＋単体加入（足りない部分補完）</li>
          <li><strong>長期滞在（30日超）</strong>：単体加入が必須</li>
        </ul>
      </section>
      <AffiliateCTA
        title="海外旅行用のクレカも選択肢｜楽天プレミアムカード"
        description="楽天プレミアムカード（年11,000円）なら、プライオリティパス無料・海外旅行保険最大5,000万円補償付き。年2〜3回の海外旅行で元が取れる定番カード。"
        buttonText="楽天プレミアムカード"
        href="https://www.rakuten-card.co.jp/card/rakuten-premium-card/"
        icon="💳"
        highlight="海外旅行特化"
      />
    </>
  ),
  "bike-insurance-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">バイク保険は任意保険が必須</h2>
        <p>
          バイクで公道を走るには自賠責保険（強制）が必要ですが、自賠責は人身事故の対人賠償のみ（最大3,000万円）で対物・自損・搭乗者はカバーされません。任意保険に加入すれば、対物賠償無制限・人身傷害・車両保険まで総合的に備えられ、事故時の経済的負担を大幅軽減できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 バイク任意保険おすすめ比較"
        page="bike-insurance-comparison"
        services={[
          {
            name: "アクサダイレクト バイク保険",
            rank: 1,
            highlight: "ネット専業｜保険料業界最安水準",
            features: [
              "対人・対物賠償無制限",
              "ロードサービス付帯",
              "ネット割最大20,000円",
              "年間保険料 原付1万円台〜",
            ],
            href: "https://www.axa-direct.co.jp/bike/",
            badge: "最安水準",
          },
          {
            name: "チューリッヒ バイク保険",
            rank: 2,
            highlight: "弁護士費用特約あり｜手厚い補償",
            features: [
              "弁護士費用特約基本セット",
              "搭乗者傷害・人身傷害充実",
              "レッカー無料150km",
              "年間保険料 1万2千円〜",
            ],
            href: "https://www.zurich.co.jp/",
          },
          {
            name: "三井ダイレクト バイク保険",
            rank: 3,
            highlight: "三井住友海上系｜大手の安心感",
            features: [
              "三井住友海上グループ",
              "事故対応満足度業界上位",
              "最大2万円のネット割",
              "年間保険料 1万2千円〜",
            ],
            href: "https://www.mitsui-direct.co.jp/",
          },
          {
            name: "AIG損保 バイク保険",
            rank: 4,
            highlight: "海外展開の信頼感｜付帯サービス豊富",
            features: [
              "AIGグループの世界的ネットワーク",
              "ロードサービス・カーレスキュー充実",
              "全車種対応（大型バイク含む）",
              "年間保険料 1万5千円〜",
            ],
            href: "https://www.aig.co.jp/",
          },
        ]}
      />
      <DecisionBox
        title="結論：バイク保険は対物無制限とロードサービスを先に見る"
        points={[
          "任意保険は対人・対物無制限を基本にし、弁護士費用特約と人身傷害の有無を確認する。",
          "通勤や長距離ツーリングに使う人は、レッカー無料距離と夜間対応を重視する。",
          "車も所有している場合は、自動車保険も満期前に見直すと固定費削減の余地が広がる。",
        ]}
        note="バイク保険と自動車保険は別契約でも、家計上は同じ交通費・保険料としてまとめて管理します。"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">バイク保険選びの5つのポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>対人・対物賠償無制限</strong>：絶対必須、上限設定はNG</li>
          <li><strong>人身傷害補償</strong>：単独事故でも自分のケガをカバー</li>
          <li><strong>車両保険</strong>：新車3年以内は加入推奨、10年超は貯蓄カバーでOK</li>
          <li><strong>弁護士費用特約</strong>：年1,500〜3,000円で示談交渉を有利に</li>
          <li><strong>ロードサービス</strong>：レッカー無料km数が重要</li>
        </ol>
      </section>
    </>
  ),
  "family-trust-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">家族信託とは？成年後見制度との違い</h2>
        <p>
          家族信託は、親（委託者）が自分の財産を子（受託者）に託して管理してもらう制度。認知症になる前に設定することで、親が認知症になっても子が財産を運用・処分でき、成年後見制度の厳格な制約（裁判所の許可必須）を回避できます。2006年施行の比較的新しい制度で、近年急速に普及中です。
        </p>
      </section>
      <ComparisonTableCTA
        title="家族信託 vs 成年後見制度 vs 遺言"
        services={[
          {
            name: "家族信託",
            rank: 1,
            highlight: "認知症対策＋相続対策｜柔軟性高い",
            features: [
              "認知症発症前に設定、以降も財産管理継続",
              "不動産の売却・リフォーム・運用を子が代行可",
              "資産承継の指定も可能（受益者連続型）",
              "設定費用30〜100万円（司法書士・弁護士）",
            ],
            href: "https://www.bengo4.com/",
            badge: "最有力",
          },
          {
            name: "成年後見制度",
            rank: 2,
            highlight: "認知症後でも可｜制約大きい",
            features: [
              "認知症発症後の唯一の選択肢",
              "後見人は裁判所選任、家族がなれないこと多い",
              "不動産売却等は家裁の許可必須",
              "月2〜6万円の後見人報酬が発生",
            ],
            href: "https://www.bengo4.com/",
          },
          {
            name: "遺言",
            rank: 3,
            highlight: "相続時の財産配分指定",
            features: [
              "死後の財産配分を明確化",
              "認知症対策にはならない",
              "公正証書遺言5〜10万円",
              "家族信託と併用が王道",
            ],
            href: "https://www.bengo4.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">家族信託が必要なケース</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>親が高齢（70代〜）で認知症リスクあり</strong></li>
          <li><strong>親名義の不動産があり、将来の売却を見据える</strong></li>
          <li><strong>子が海外在住等で成年後見制度が使いにくい</strong></li>
          <li><strong>障害のある子の将来の生活を保障したい</strong></li>
          <li><strong>事業承継を円滑に進めたい</strong></li>
        </ol>
      </section>
      <AffiliateCTA
        title="家族信託の設定は専門家に｜弁護士ドットコム"
        description="家族信託は司法書士・弁護士への依頼費用30〜100万円。弁護士ドットコムで家族信託に強い専門家を無料検索、複数事務所の比較相談も可能。"
        buttonText="弁護士ドットコムで検索"
        href="https://www.bengo4.com/"
        icon="⚖️"
        highlight="家族信託対応"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">家族信託の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>受託者（子）が信頼できる家族であることが前提</li>
          <li>設定後の変更は難しい（事前設計が重要）</li>
          <li>税務面の優遇はなし（相続税は通常通り）</li>
          <li>金融機関の取扱実績あり（信託銀行が有利）</li>
          <li>不動産に抵当権があると制約あり</li>
        </ul>
      </section>
    </>
  ),
  "severance-early-retirement-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">早期退職パッケージの賢い活用</h2>
        <p>
          大手企業では45歳以上を対象に「早期退職優遇パッケージ」を提供する動きが増加。通常退職金の2〜3倍（＋割増金）が支給され、3,000〜5,000万円を超えるケースも。一方で退職後のキャリア・資産運用・社会保険の設計が必要で、パッケージ受取り前の事前計画が成否を決めます。
        </p>
      </section>
      <ComparisonTableCTA
        title="早期退職後の選択肢"
        services={[
          {
            name: "再就職（転職）",
            rank: 1,
            highlight: "年収ダウンが一般的｜50代管理職は厳しい",
            features: [
              "同業界で年収70〜90%水準",
              "異業界転身は年収50〜70%が現実",
              "JACリクルートメント・ビズリーチが有効",
              "パッケージ＋再就職で老後資金構築",
            ],
            href: "https://www.jac-recruitment.jp/",
            badge: "最多選択",
          },
          {
            name: "独立・起業",
            rank: 2,
            highlight: "退職金を資本金に｜freeeで法人設立0円",
            features: [
              "退職金1,000〜3,000万円を資本金に",
              "freee会社設立で合同会社6万円",
              "前職人脈を活かした独立",
              "個人事業主からの段階スタートも",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
          },
          {
            name: "早期リタイア（FIRE）",
            rank: 3,
            highlight: "資産5,000万円超が目安｜4%ルール",
            features: [
              "資産5,000万円＋年金で完全リタイア",
              "4%ルール（年間200万円取崩し）で生活",
              "新NISA＋特定口座の配分最適化",
              "健康保険任意継続2年間の手続き",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "セミリタイア（副業生活）",
            rank: 4,
            highlight: "月10〜30万円の収入で資産維持",
            features: [
              "退職金で生活費をカバー、副業で月10〜30万円",
              "クラウドワークス・Webマーケ等",
              "前職スキルのコンサル業も有力",
              "ストレスない暮らしを実現",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">退職金の税務（退職所得の計算）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>退職所得控除：勤続年数×40万円（20年超は800万円+70万円×超過年数）</li>
          <li>課税対象：(退職金-退職所得控除)×1/2</li>
          <li>勤続30年なら1,500万円まで無税</li>
          <li>勤続35年なら1,850万円まで無税</li>
          <li>分離課税なので他の所得と合算されない</li>
        </ul>
      </section>
      <AffiliateCTA
        title="退職金の運用相談はFPに｜保険見直しラボ"
        description="退職金の最適運用プラン（守り7：攻め3の分散）をFP無料相談で設計。外貨建て保険等の罠を避け、新NISA・定期預金・不動産クラファンへの分散が鉄則。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "credit-score-improve-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人信用情報（クレヒス）の重要性</h2>
        <p>
          日本のCIC・JICC・KSCに記録される個人信用情報は、クレジットカード・住宅ローン・カードローン審査の最重要指標。延滞・債務整理・多重申込等で信用スコアが低下すると、5〜10年間審査通過が困難に。逆に適切なクレヒスを積めば、プレミアムカード・ゴールドカード・住宅ローンの審査通過率が飛躍的に向上します。
        </p>
      </section>
      <ComparisonTableCTA
        title="日本の個人信用情報機関3社"
        services={[
          {
            name: "CIC（株式会社シー・アイ・シー）",
            rank: 1,
            highlight: "クレジットカード会社系｜一番重要",
            features: [
              "クレジットカード・信販会社の情報を保有",
              "個人で開示請求可能（1,000円/回）",
              "延滞情報は5年保存",
              "住宅ローン審査で必ずチェックされる",
            ],
            href: "https://www.cic.co.jp/",
            badge: "最重要",
          },
          {
            name: "JICC（日本信用情報機構）",
            rank: 2,
            highlight: "消費者金融系｜カードローン情報",
            features: [
              "消費者金融・銀行カードローンの情報",
              "個人で開示請求可能（1,000円/回）",
              "任意整理・自己破産の情報保存",
              "カードローン審査で必ずチェック",
            ],
            href: "https://www.jicc.co.jp/",
          },
          {
            name: "KSC（全国銀行個人信用情報センター）",
            rank: 3,
            highlight: "銀行系｜住宅ローン・自動車ローン",
            features: [
              "銀行・住宅金融機構の情報",
              "個人で開示請求可能（1,000円/回）",
              "自己破産情報は10年保存",
              "住宅ローン審査で重視",
            ],
            href: "https://www.zenginkyo.or.jp/pcic/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">信用スコアを上げる5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>開示請求で現状確認</strong>：CIC/JICC/KSCの3社で開示（各1,000円）</li>
          <li><strong>延滞を解消</strong>：未払いを完済、5年経過で記録消去</li>
          <li><strong>クレヒス構築</strong>：クレカ1〜2枚を計画的に利用（毎月10〜20万円を使い、期日までに全額支払）</li>
          <li><strong>借入を整理</strong>：カードローン借入を圧縮、年収1/3以内に</li>
          <li><strong>複数申込を避ける</strong>：一度に3社以上のクレカ・ローン申込はブラック扱い</li>
        </ol>
      </section>
      <AffiliateCTA
        title="信用構築にはクレヒスを積む｜楽天カード"
        description="年会費永年無料で取得しやすい楽天カードから、計画的な利用で良質なクレヒスを積むのが王道。6ヶ月〜1年の利用実績で、ゴールドカードやプレミアムカードへの昇格も見えてきます。"
        buttonText="楽天カードに無料申込"
        href="https://hb.afl.rakuten.co.jp/hgc/g00q0722.r9tfu12j.g00q0722.r9tfvd42/"
        icon="💳"
        highlight="年会費永年無料"
      />
    </>
  ),
  "angel-investment-japan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">エンジェル投資とは？</h2>
        <p>
          エンジェル投資は、スタートアップ企業の創業期〜成長期に個人投資家が資金提供する投資手法。成功すれば10〜100倍のリターンも可能ですが、失敗リスクも高く「ハイリスク・ハイリターン」の典型。日本では2008年制定のエンジェル税制により、所得控除・譲渡益軽減の税制優遇が受けられます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 エンジェル投資プラットフォーム比較"
        services={[
          {
            name: "FUNDINNO（ファンディーノ）",
            rank: 1,
            highlight: "国内最大の株式投資型クラファン",
            features: [
              "日本最大の株式投資型クラウドファンディング",
              "1社あたり10〜50万円の少額投資可",
              "エンジェル税制対応案件あり",
              "通算調達額200億円超",
            ],
            href: "https://fundinno.com/",
            badge: "業界No.1",
          },
          {
            name: "イークラウド",
            rank: 2,
            highlight: "ベンチャーキャピタル連携",
            features: [
              "大和証券グループ運営",
              "VCと同じ案件に個人投資家もアクセス",
              "エンジェル税制対応",
              "1案件10〜50万円",
            ],
            href: "https://ecrowd.co.jp/",
          },
          {
            name: "SonyStart（ソニースタート）",
            rank: 3,
            highlight: "ソニーグループ運営｜厳選案件",
            features: [
              "ソニーグループのブランド力",
              "厳選された成長企業のみ",
              "投資最低金額10万円〜",
              "エンジェル税制対応多数",
            ],
            href: "https://sonystart.sony-fs.com/",
          },
          {
            name: "Unicorn",
            rank: 4,
            highlight: "ディープテック・DX特化",
            features: [
              "AI・バイオ・ディープテック特化",
              "高成長企業への投資機会",
              "最低投資10万円〜",
              "エンジェル税制対応",
            ],
            href: "https://unicorn-cf.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">エンジェル税制の2つのタイプ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>優遇措置A</strong>：投資額の所得控除（総所得金額×40%または800万円のいずれか低い方）</li>
          <li><strong>優遇措置B</strong>：投資額を他の株式譲渡益と相殺</li>
          <li><strong>損失時</strong>：翌年以降3年間の譲渡所得と相殺</li>
          <li><strong>対象企業</strong>：設立5年以内＋資本金など一定要件を満たす企業</li>
          <li><strong>手続き</strong>：確定申告時にエンジェル税制適用書類を添付</li>
        </ul>
      </section>
      <AffiliateCTA
        title="エンジェル投資の税務は専門家に｜税理士ドットコム"
        description="エンジェル投資は税制が複雑で、税理士ドットコムで投資税務に強い税理士を無料紹介。適切な節税＋確定申告で、投資リターンを最大化。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="👔"
        highlight="紹介料無料"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">エンジェル投資のリスク</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>10社投資して成功1〜2社、残りは元本毀損が現実</li>
          <li>資金回収まで5〜10年（M&A・IPO待ち）</li>
          <li>投資先の経営状況把握が困難</li>
          <li>流動性ゼロ（売却困難）</li>
          <li>余裕資金の5〜10%以内で分散投資が鉄則</li>
        </ul>
      </section>
    </>
  ),
  "year-end-tax-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">年末までに実施すべき節税20項目</h2>
        <p>
          年内（12月31日まで）に実施することで税制メリットが得られる節税施策を20項目網羅。ふるさと納税・iDeCo・生命保険料・医療費・寄付金・住宅ローン控除等、合計で年収700万円の会社員なら年30〜50万円の節税も可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="年末までに完了すべき節税TOP10"
        services={[
          {
            name: "ふるさと納税",
            rank: 1,
            highlight: "年収別上限まで完全活用｜楽天SPU16倍",
            features: [
              "年収500万円→約6万円、700万円→10万円、1,000万円→18万円",
              "12/31 23:59までに決済完了が必須",
              "楽天ふるさと納税なら最大30%ポイント還元",
              "6自治体以内ならワンストップ特例で確定申告不要",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
            badge: "最優先",
          },
          {
            name: "iDeCo 年末まとめ拠出",
            rank: 2,
            highlight: "月掛金を年末に1年分｜全額所得控除",
            features: [
              "月掛金を年末に一括拠出で節税効果最大化",
              "会社員は月23,000円、自営業は月68,000円",
              "12月中に証券会社に入金",
              "翌年の確定申告で控除",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "生命保険料控除",
            rank: 3,
            highlight: "一般・介護・個人年金で最大12万円控除",
            features: [
              "一般生命保険・介護医療保険・個人年金の3区分",
              "各区分4万円ずつ、合計12万円まで控除",
              "年収500万円なら年2.4万円の節税",
              "12月末までの加入分が対象",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
          {
            name: "医療費控除",
            rank: 4,
            highlight: "家族合算10万円超の医療費を控除",
            features: [
              "家族合算で年10万円超の医療費が対象",
              "薬局で買う医薬品も対象（セルフメディケーション税制）",
              "領収書は5年保存、Myナポータルで確認可",
              "確定申告で還付",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "小規模企業共済 12月拠出",
            rank: 5,
            highlight: "個人事業主年84万円｜全額所得控除",
            features: [
              "12月末までに1〜7万円/月×12ヶ月を前納",
              "年最大84万円の所得控除",
              "個人事業主・法人役員限定",
              "税率30%なら年25万円節税",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">残り15項目のチェックリスト</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>6. 住宅ローン控除（年末残高×0.7%）の申請準備</li>
          <li>7. 地震保険料控除（年5万円まで）</li>
          <li>8. 寄付金控除（認定NPO・政党等）</li>
          <li>9. 小規模企業共済の増額拠出</li>
          <li>10. 新NISAつみたて枠の年120万円使い切り</li>
          <li>11. 新NISA成長枠の年240万円使い切り</li>
          <li>12. 特定支出控除（給与所得者の研修費等）</li>
          <li>13. 雑損控除（災害被害）</li>
          <li>14. 青色申告の65万円控除（個人事業主）</li>
          <li>15. 消費税のインボイス登録見直し</li>
          <li>16. 親族への年110万円贈与</li>
          <li>17. 法人の役員報酬の年末調整</li>
          <li>18. 法人の決算期変更検討</li>
          <li>19. 事業用車両・PC・備品の年末購入（経費・減価償却）</li>
          <li>20. 確定拠出年金マッチング拠出の増額</li>
        </ul>
      </section>
      <AffiliateCTA
        title="年末の節税は税理士に｜税理士ドットコム"
        description="年末の節税タイミングは税理士に相談するのが効率的。全国5,800人の税理士から業種・規模で最適な専門家を無料紹介、年30〜100万円の節税事例多数。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="👔"
        highlight="紹介料無料"
      />
    </>
  ),
  "corporate-tax-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">法人の節税戦略5大ポイント</h2>
        <p>
          法人税は実効税率約30%（地方税含む）。個人の所得税最高55%と比べ、法人化による節税効果は大きい。役員報酬の最適配分・経費計上・減価償却・退職金準備・決算対策等、複合的な施策で年数百万〜数千万円の節税が可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="法人節税の5大施策"
        services={[
          {
            name: "役員報酬の最適配分",
            rank: 1,
            highlight: "所得税＋法人税の合計を最小化",
            features: [
              "役員報酬を上げ過ぎると所得税高、下げ過ぎると法人税高",
              "家族役員への報酬分散で所得分散",
              "事前確定届出給与で賞与も損金算入",
              "株価対策として低めに設定する戦略も",
            ],
            href: "https://www.zeiri4.com/",
            badge: "最重要",
          },
          {
            name: "小規模企業共済（役員向け）",
            rank: 2,
            highlight: "月7万円｜全額所得控除＋退職金準備",
            features: [
              "役員・個人事業主のみ加入可",
              "月1,000〜70,000円、年最大84万円の所得控除",
              "20年超加入で元本割れなし",
              "退職時は退職所得として有利課税",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
          {
            name: "倒産防止共済（経営セーフティ共済）",
            rank: 3,
            highlight: "月20万円｜損金算入",
            features: [
              "取引先倒産時の連鎖リスク対策",
              "月5,000〜200,000円、年最大240万円",
              "掛金は全額損金算入",
              "40ヶ月以上加入で解約時100%戻り",
            ],
            href: "https://www.smrj.go.jp/kyosai/tkyosai/",
          },
          {
            name: "決算期前の経費計上",
            rank: 4,
            highlight: "30万円未満の備品は即時償却",
            features: [
              "中小企業の少額減価償却資産（30万円未満）は即時全額経費",
              "パソコン・備品・什器の年末購入",
              "年300万円まで利用可能",
              "青色申告法人のみ",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "法人保険",
            rank: 5,
            highlight: "生命保険で退職金準備＋節税",
            features: [
              "逓増定期保険・長期平準定期保険で退職金準備",
              "払込保険料の1/2〜全額損金算入",
              "契約から10年後に解約返戻金受取",
              "税制改正で効果減少中、慎重な選定必要",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">決算期前3ヶ月でやるべきこと</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>予想納税額のシミュレーション（税理士と相談）</li>
          <li>役員報酬の調整（次年度分）</li>
          <li>30万円未満の備品購入（年300万円まで）</li>
          <li>広告宣伝費・研究開発費の前倒し</li>
          <li>生命保険料・共済掛金の前納</li>
          <li>中小企業投資促進税制の活用検討</li>
          <li>欠損金の繰越控除（最大10年）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="法人節税の専門家に依頼｜税理士ドットコム"
        description="法人節税は高度な専門性が必要。税理士ドットコムで法人顧問に強い税理士を無料紹介、年数百万〜数千万円の節税実績多数。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="🏢"
        highlight="紹介料無料"
      />
    </>
  ),
  "sole-proprietor-tax-handbook": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人事業主の税務基礎</h2>
        <p>
          個人事業主は会社員と異なり、確定申告で自ら税金を計算・納付する必要があります。青色申告特別控除65万円・経費計上・小規模企業共済・iDeCo・ふるさと納税を組み合わせれば、年収500万円でも年30〜50万円の節税が可能。正しい税務知識と会計ソフト活用が成功の鍵です。
        </p>
      </section>
      <ComparisonTableCTA
        title="個人事業主の節税TOP5"
        services={[
          {
            name: "青色申告特別控除 65万円",
            rank: 1,
            highlight: "e-Tax＋電子帳簿保存で最大控除",
            features: [
              "青色申告＋e-Tax＋電子帳簿保存で65万円控除",
              "紙の申告や単純簿記では10〜55万円に減額",
              "年収500万円なら年13〜20万円の節税",
              "freee・マネフォ・弥生で自動対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            badge: "必須",
          },
          {
            name: "経費の家事按分",
            rank: 2,
            highlight: "家賃・光熱費・通信費の一部を経費化",
            features: [
              "自宅兼事務所の家賃30〜50%を経費",
              "電気・ガス・水道の20〜40%",
              "スマホ・インターネットの50〜80%",
              "按分比率は実態に即して設定",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
          },
          {
            name: "小規模企業共済",
            rank: 3,
            highlight: "月7万円｜全額所得控除",
            features: [
              "月1,000〜70,000円、年最大84万円",
              "所得税率20〜30%なら年17〜25万円節税",
              "20年超で元本割れなし",
              "退職金代替として老後資金に",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
          {
            name: "iDeCo（個人型確定拠出年金）",
            rank: 4,
            highlight: "月6.8万円｜会社員の3倍枠",
            features: [
              "月6.8万円×12ヶ月＝年81.6万円の所得控除",
              "運用益も非課税",
              "税率30%なら年24.5万円節税",
              "60歳まで引き出し不可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "ふるさと納税",
            rank: 5,
            highlight: "年収別上限｜実質2,000円で特産品",
            features: [
              "個人事業主は年末の所得確定後に実施",
              "楽天ふるさと納税なら最大30%還元",
              "6自治体以内ならワンストップ特例",
              "実質2,000円で年数万円分の返礼品",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">インボイス制度の対応</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>売上1,000万円超なら2023年10月以降インボイス登録必須</li>
          <li>売上1,000万円以下は任意だが、取引先次第で登録推奨</li>
          <li>登録すると消費税納税義務が発生（年数十万円〜）</li>
          <li>2026年9月末まで経過措置あり（仕入税額控除80%）</li>
          <li>freee・マネフォなら登録申請・請求書対応が簡単</li>
        </ul>
      </section>
      <AffiliateCTA
        title="個人事業主の税務は会計ソフトで｜freee会計"
        description="freee会計なら青色申告特別控除65万円対応、インボイス制度対応、AI仕訳で経理時間7〜8割削減。月額1,180円からの業界最安値で、個人事業主の税務を全自動化。"
        buttonText="freee会計に無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="30日無料"
      />
    </>
  ),
  "freelance-housing-loan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスの住宅ローン審査は厳しい？</h2>
        <p>
          フリーランス・個人事業主は会社員より住宅ローン審査が厳しいのは事実。収入の安定性が評価しにくいためです。しかし、①確定申告書3期分・所得要件をクリア、②金融機関選びを工夫、③連帯債務・頭金を多めに用意、の3点で審査通過率は大幅に上げられます。本記事で具体的な戦略を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="フリーランスに強い住宅ローン"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "個人事業主の融資実績豊富｜変動0.3%台",
            features: [
              "変動金利0.3〜0.5%の業界最低水準",
              "フリーランス向けの審査実績多数",
              "確定申告書3期分（最低2期分）で審査",
              "Web完結で来店不要",
            ],
            href: "https://www.netbk.co.jp/",
            badge: "フリーランス◎",
          },
          {
            name: "ソニー銀行",
            rank: 2,
            highlight: "フリーランス対応｜柔軟な審査",
            features: [
              "所得金額での審査（額面売上は関係なし）",
              "変動金利0.5〜0.7%",
              "団信・保証料無料",
              "最長35年返済",
            ],
            href: "https://moneykit.net/",
          },
          {
            name: "住宅金融支援機構 フラット35",
            rank: 3,
            highlight: "固定金利｜フリーランスでも通過率高い",
            features: [
              "固定金利で返済計画が安定",
              "所得要件をクリアすれば通過しやすい",
              "年収400万円以下でも適用可能",
              "長期10年優遇金利プランあり",
            ],
            href: "https://www.flat35.com/",
          },
          {
            name: "auじぶん銀行",
            rank: 4,
            highlight: "変動金利最低水準｜オンライン完結",
            features: [
              "変動金利0.2〜0.5%台",
              "auユーザーは金利優遇",
              "フリーランス向け審査あり",
              "Web完結で来店不要",
            ],
            href: "https://www.jibunbank.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">審査通過率を上げる5つのコツ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>確定申告3期分で所得安定性を示す</strong>：各期の所得が500万円以上あれば審査に有利</li>
          <li><strong>頭金を2〜3割用意</strong>：借入比率を下げて審査通過率アップ</li>
          <li><strong>連帯債務・連帯保証を活用</strong>：配偶者・親族と共同で審査</li>
          <li><strong>個人信用情報をクリアに</strong>：CIC/JICC/KSCで延滞記録なし</li>
          <li><strong>事業の安定性を示す資料</strong>：取引先・契約書・ポートフォリオ</li>
        </ol>
      </section>
      <AffiliateCTA
        title="複数銀行で一括比較｜モゲチェック"
        description="フリーランスでも通る住宅ローンを無料で一括比較。モゲチェックなら複数銀行の審査通過見込みを事前確認、最適な金融機関選びで審査通過率UP。"
        buttonText="モゲチェックで無料診断"
        href="/go/mogecheck-new-loan"
        icon="🏠"
        highlight="無料診断"
        page="freelance-housing-loan-guide"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランスの住宅ローン注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>売上ではなく「所得（売上-経費）」で審査される</li>
          <li>経費計上し過ぎで所得が低いと審査通過困難</li>
          <li>住宅ローン控除は会社員と同じく10年間適用</li>
          <li>住宅取得前2〜3年は節税より所得高めに調整</li>
          <li>青色申告3期分が最低必須（法人化直後は要注意）</li>
        </ul>
      </section>
    </>
  ),
  "japan-high-dividend-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本高配当株で月5万円の配当収入</h2>
        <p>
          日本高配当株は配当利回り3〜5%と、米国ETF（2〜4%）を上回るケースも。2,000万円を利回り4%で運用すれば年80万円（月6.7万円）の配当収入。新NISA口座（年240万円成長枠）で運用すれば配当も非課税で、退職後の年金代替資金として最強の選択肢になります。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 おすすめ日本高配当株10選"
        services={[
          {
            name: "三菱商事（8058）",
            rank: 1,
            highlight: "配当利回り3.5%前後｜総合商社最大手",
            features: [
              "世界的な総合商社、資源・食品・機械等に分散",
              "バフェットも投資、増配傾向",
              "配当性向30%前後で安定",
              "SBI証券・楽天証券で1株から購入可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合商社",
          },
          {
            name: "伊藤忠商事（8001）",
            rank: 2,
            highlight: "配当利回り3.2%｜非資源型で安定",
            features: [
              "非資源型で総合商社の中でも安定収益",
              "繊維・食料・情報通信等に強み",
              "11期連続増配",
              "海外展開積極的",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ENEOSホールディングス（5020）",
            rank: 3,
            highlight: "配当利回り4.5%｜石油元売最大手",
            features: [
              "日本石油元売り最大手、ガソリンスタンド全国展開",
              "高配当利回りが魅力",
              "脱炭素シフトでの変革期",
              "株価は割安傾向",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ソフトバンク（9434）",
            rank: 4,
            highlight: "配当利回り4.5%｜通信大手で業績安定",
            features: [
              "通信事業で安定キャッシュフロー",
              "配当性向85%で高水準",
              "ヤフー・PayPay等のグループ連携",
              "Zホールディングスとの関係も",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "武田薬品工業（4502）",
            rank: 5,
            highlight: "配当利回り4.5%｜製薬大手",
            features: [
              "日本最大の製薬会社、グローバル展開",
              "高水準の配当利回り",
              "希少疾病・消化器等の特化分野",
              "配当は長期安定",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">配当月5万円・年60万円のモデルポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>必要投資額：1,500万円（想定利回り4%）</li>
          <li>5銘柄に300万円ずつ分散（各銘柄の配当年12万円）</li>
          <li>新NISA成長枠を活用して配当を非課税化</li>
          <li>定期的なリバランスで業種分散</li>
          <li>年2回の決算確認＋配当再投資</li>
        </ul>
      </section>
      <AffiliateCTA
        title="日本高配当株の購入はSBI証券｜国内株式手数料無料"
        description="SBI証券なら新NISA口座で日本株売買手数料完全無料。配当金も非課税で受け取れ、月5万円の配当生活に一歩近づきます。取扱銘柄も東証全上場企業に対応。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "monthly-dividend-portfolio": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">毎月配当で月10万円の不労所得</h2>
        <p>
          米国ETF・日本株・J-REIT・毎月分配型投信を組み合わせれば、毎月配当・分配金を受け取るポートフォリオが構築可能。米国ETFは3月/6月/9月/12月、日本株は3月/9月、J-REITは3月/6月/9月/12月等、それぞれの配当時期を組合せることで月間不労所得が実現します。
        </p>
      </section>
      <ComparisonTableCTA
        title="毎月配当ポートフォリオの構成例"
        services={[
          {
            name: "米国高配当ETF VYM",
            rank: 1,
            highlight: "Vanguard｜400銘柄分散｜四半期配当",
            features: [
              "Vanguard High Dividend Yield ETF",
              "400銘柄以上に分散投資",
              "3月/6月/9月/12月の四半期配当",
              "配当利回り約3%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "米国王道",
          },
          {
            name: "米国高配当ETF HDV",
            rank: 2,
            highlight: "iShares｜75銘柄｜四半期配当",
            features: [
              "iShares Core High Dividend ETF",
              "75銘柄の厳選高配当企業",
              "3月/6月/9月/12月の四半期配当",
              "配当利回り約4%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SPYD",
            rank: 3,
            highlight: "State Street｜80銘柄｜高利回り4%超",
            features: [
              "SPDR ポートフォリオS&P 500 高配当株式ETF",
              "S&P 500の高配当80銘柄",
              "配当利回り約4%",
              "四半期配当",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "J-REIT（日本REIT）",
            rank: 4,
            highlight: "四半期配当｜分配金利回り4〜5%",
            features: [
              "オフィス・住居・物流・商業施設REIT",
              "四半期または半期ごとの分配金",
              "分配金利回り4〜5%",
              "安定収益型の投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">月10万円配当のモデル（投資額3,000万円）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>米国ETF（VYM/HDV/SPYD）：1,500万円×4%＝年60万円</li>
          <li>日本高配当株：800万円×4%＝年32万円</li>
          <li>J-REIT：500万円×4.5%＝年22.5万円</li>
          <li>高配当個別米国株（VZ/IBM等）：200万円×5%＝年10万円</li>
          <li>合計：年124万円（月10.3万円）、税引前</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国ETFの積立はSBI証券｜為替手数料無料"
        description="SBI証券は米国ETFの為替手数料無料、定期買付設定で自動積立も。毎月配当ポートフォリオ構築に最適、新NISA成長枠で配当も非課税化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "online-store-setup-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネットショップ開業で月10万円の副収入</h2>
        <p>
          ネットショップ開業はBASE・STORESなら無料で始められ、Shopify・楽天市場・Yahoo!ショッピングと使い分けで月10万円〜100万円の売上も現実的。初心者はBASE・STORESからスタートし、売上10万円超えたらShopifyや楽天市場への拡大が王道ルートです。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ネットショップ開業プラットフォーム比較"
        services={[
          {
            name: "BASE",
            rank: 1,
            highlight: "無料開業｜初心者に最適",
            features: [
              "初期費用・月額無料、決済手数料3.6%＋40円",
              "テンプレートで数時間でショップ開設",
              "アプリ追加で機能拡張可能",
              "商品登録数無制限",
            ],
            href: "https://thebase.com/",
            badge: "初心者向け",
          },
          {
            name: "STORES",
            rank: 2,
            highlight: "無料プラン｜デザイン性高い",
            features: [
              "無料プラン（月商10万円以下）＋スタンダード月1,980円",
              "デザインテンプレート豊富",
              "予約・サブスク機能も標準装備",
              "SNS連携強化",
            ],
            href: "https://stores.jp/",
          },
          {
            name: "Shopify",
            rank: 3,
            highlight: "世界シェアNo.1｜拡張性最強",
            features: [
              "月額3,650円〜、機能拡張アプリ数千種",
              "海外販売に強い（多言語・多通貨対応）",
              "決済手数料2.95%〜",
              "本格EC事業向き",
            ],
            href: "https://www.shopify.com/jp/",
          },
          {
            name: "楽天市場",
            rank: 4,
            highlight: "モール型｜集客力最強",
            features: [
              "月額25,000円〜＋成約手数料",
              "楽天の集客力で売上ゼロからでも販売可能",
              "ポイント還元で顧客囲い込み",
              "審査あり、法人優遇",
            ],
            href: "https://www.rakuten.co.jp/ec/",
          },
          {
            name: "Yahoo!ショッピング",
            rank: 5,
            highlight: "出店料無料｜PayPay連携",
            features: [
              "初期費用・月額無料",
              "PayPay・Yahoo!プレミアム連携",
              "ストア数国内最大",
              "決済・成約手数料のみ",
            ],
            href: "https://business-ec.yahoo.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">月10万円達成までのロードマップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>1〜2ヶ月目</strong>：商品開発・BASE開設・SNS発信開始</li>
          <li><strong>3〜4ヶ月目</strong>：最初の売上10個達成、改善PDCA</li>
          <li><strong>5〜6ヶ月目</strong>：月商3〜5万円、広告出稿開始（月1万円）</li>
          <li><strong>7〜10ヶ月目</strong>：月商10万円達成、リピーター獲得</li>
          <li><strong>11〜12ヶ月目</strong>：Shopify移行検討、拡大</li>
        </ol>
      </section>
      <AffiliateCTA
        title="オンラインショップ運営にはサーバーも｜エックスサーバー"
        description="ネットショップと連動するブログ・LPを作るなら、高速レンタルサーバーが必須。エックスサーバーなら月693円〜、WordPress簡単インストールで10分で開設。"
        buttonText="エックスサーバーの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
        icon="🖥️"
        highlight="10日間無料"
      />
    </>
  ),
  "amazon-side-business-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">Amazon物販で月10万円の副収入</h2>
        <p>
          Amazon物販（せどり・OEM・FBA）は、サラリーマンの副業として人気No.1。月商30〜50万円で利益10万円、月商100万円で利益30万円程度が現実的。Amazon の巨大な集客力＋FBA（フルフィルメント by Amazon）の物流代行を活用すれば、在宅で完結する副業が実現します。
        </p>
      </section>
      <ComparisonTableCTA
        title="Amazon物販の3つの手法"
        services={[
          {
            name: "国内せどり",
            rank: 1,
            highlight: "初心者向け｜初期投資10万円〜",
            features: [
              "Amazon店頭・楽天・メルカリから仕入れ",
              "Amazonで高値転売（利益率15〜30%）",
              "ツール（Keepa・せどりすと）で価格差を分析",
              "初期投資10〜30万円から",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
            badge: "初心者向け",
          },
          {
            name: "中国輸入",
            rank: 2,
            highlight: "利益率高い｜初期投資30万円〜",
            features: [
              "アリババ・タオバオから仕入れ",
              "独自商品で他との差別化",
              "利益率30〜50%を狙える",
              "代行業者使用で安全",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
          },
          {
            name: "OEM・メーカー直販",
            rank: 3,
            highlight: "長期安定｜初期投資100万円〜",
            features: [
              "自社ブランド商品の製造委託",
              "価格競争回避で利益率高い",
              "月商100万円超のスケール可能",
              "事業化レベル",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">Amazon物販の税務と確定申告</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>副業所得20万円超で確定申告必須（会社員も同様）</li>
          <li>freee会計等で帳簿付けを自動化（仕入・売上・Amazon手数料）</li>
          <li>インボイス登録（売上1,000万円超で消費税課税）</li>
          <li>青色申告特別控除65万円で節税</li>
          <li>在庫・仕入コストの管理が重要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="Amazon物販の税務はfreee会計で｜初心者に最適"
        description="Amazon物販の売上・仕入・手数料を自動連携、AI仕訳で経理時間1/3に削減。freee会計なら青色申告特別控除65万円にも対応、月1,180円から。"
        buttonText="freee会計の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="30日無料"
      />
    </>
  ),
  "childcare-leave-finance-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">育休中の家計を守る4つの制度</h2>
        <p>
          育休中は収入が減少しますが、①育児休業給付金（月給の67%→50%、最長2年）、②社会保険料免除（月数万円の手取り維持）、③児童手当（月1〜1.5万円）、④各種子育て支援（自治体）を活用すれば、手取り額は意外に減らない設計です。計画的な家計管理で育休を乗り切りましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="育休中に使える4つの公的支援"
        services={[
          {
            name: "育児休業給付金",
            rank: 1,
            highlight: "月給の67%→180日後50%｜最長2年",
            features: [
              "産休後〜子1歳（延長で最長2年）まで支給",
              "最初180日：月給の67%、以降50%",
              "月額上限315,369円（67%）/235,350円（50%）",
              "雇用保険から支給、非課税",
            ],
            href: "https://www.mhlw.go.jp/",
            badge: "最重要",
          },
          {
            name: "社会保険料免除",
            rank: 2,
            highlight: "育休中の健康保険・厚生年金が免除",
            features: [
              "育休中の健康保険・厚生年金の本人負担・会社負担とも免除",
              "月3〜8万円の負担軽減",
              "年金額は免除期間も納付扱い（損なし）",
              "申請は会社経由",
            ],
            href: "https://www.nenkin.go.jp/",
          },
          {
            name: "児童手当",
            rank: 3,
            highlight: "3歳未満月15,000円｜所得制限撤廃",
            features: [
              "0〜3歳未満月15,000円",
              "3歳〜中学生月10,000円（第3子以降30,000円）",
              "2024年10月改正で所得制限撤廃",
              "出生届と同時に申請",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "出産育児一時金",
            rank: 4,
            highlight: "出産1児につき50万円",
            features: [
              "2023年4月から50万円に増額（以前42万円）",
              "健康保険から支給",
              "直接支払制度で病院への立替不要",
              "産科医療補償制度対象",
            ],
            href: "https://www.kyoukaikenpo.or.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">育休中の家計最適化5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>固定費削減</strong>：格安SIM・保険見直しで月2〜3万円削減</li>
          <li><strong>育児休業給付金の予測計算</strong>：職場の給与明細＋概算で把握</li>
          <li><strong>生活費の最適化</strong>：外食減・家事シェア・メルカリ活用</li>
          <li><strong>児童手当は全額投資</strong>：新NISAで18年運用→約300万円</li>
          <li><strong>復職準備</strong>：保育園申込・時短勤務の検討</li>
        </ol>
      </section>
      <AffiliateCTA
        title="育休中の家計最適化もFPに相談｜保険見直しラボ"
        description="育休中こそ家計を見直すチャンス。FP無料相談で保険・通信費・ローン等の固定費を最適化、浮いた分を新NISAに回すことで子の教育費を準備。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "divorce-finance-recovery-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">離婚後の家計再建5ステップ</h2>
        <p>
          離婚後は収入・支出両面で大きな変化。シングル世帯の平均年収は父子家庭で約550万円・母子家庭で約243万円と大きな差がある反面、児童扶養手当・医療費助成等の公的支援もあります。計画的な家計再建で、離婚前より豊かな生活を目指すことが可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="離婚後の家計再建に使える制度"
        services={[
          {
            name: "児童扶養手当",
            rank: 1,
            highlight: "ひとり親世帯｜最大月45,500円",
            features: [
              "全部支給：月45,500円（子1人）",
              "第2子は月10,750円加算、第3子以降は月6,450円",
              "所得制限あり（前年所得で判定）",
              "自治体窓口で申請",
            ],
            href: "https://www.mhlw.go.jp/",
            badge: "最重要",
          },
          {
            name: "ひとり親家庭医療費助成",
            rank: 2,
            highlight: "医療費負担大幅軽減｜自治体による",
            features: [
              "自治体により異なる（月1,500〜3,000円程度）",
              "健康保険適用分の自己負担を助成",
              "児童の医療費も対象",
              "所得制限あり",
            ],
            href: "https://www.mhlw.go.jp/",
          },
          {
            name: "母子父子寡婦福祉資金",
            rank: 3,
            highlight: "低利融資｜学費・事業資金",
            features: [
              "利率1%以下（保証人ありなら無利子）",
              "学費・修学資金・事業開始資金等",
              "民間ローンより圧倒的に有利",
              "自治体福祉課で申請",
            ],
            href: "https://www.mhlw.go.jp/",
          },
          {
            name: "自立支援教育訓練給付金",
            rank: 4,
            highlight: "資格取得費用の60%補助",
            features: [
              "看護師・介護福祉士・保育士等の資格取得支援",
              "受講費用の60%（上限20万円）を補助",
              "自立のためのスキル獲得",
              "児童扶養手当受給世帯対象",
            ],
            href: "https://www.mhlw.go.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">離婚後の家計再建戦略</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>収入の確保</strong>：正社員復帰・スキルアップ転職・副業開始</li>
          <li><strong>支出の最適化</strong>：固定費（家賃・通信・保険）の削減</li>
          <li><strong>養育費の確保</strong>：公正証書で合意＋強制執行可能な状態に</li>
          <li><strong>公的支援フル活用</strong>：児童扶養手当・医療費助成等</li>
          <li><strong>資産形成開始</strong>：新NISAで少額積立、児童手当を投資に回す</li>
        </ol>
      </section>
      <AffiliateCTA
        title="シングル世帯の資産運用もSBI証券｜月1,000円から"
        description="シングル世帯でも新NISAは月1,000円から始められる。児童扶養手当の一部や副業収入を運用することで、老後資金1,000万円超の準備が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "second-home-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">2軒目不動産の4つの活用方法</h2>
        <p>
          年収1,000万円超の世帯が2軒目不動産を購入する目的は、①別荘としての自家利用、②投資用賃貸、③自宅オフィス兼用、④民泊運営、の4種類。目的次第で最適な物件・ローン・税務対策が変わるため、事前の戦略設計が成否を分けます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2軒目不動産の活用方法比較"
        services={[
          {
            name: "別荘（自家利用）",
            rank: 1,
            highlight: "リゾート地｜軽井沢・湯沢・八ヶ岳",
            features: [
              "家族のリフレッシュ・別荘地での交流",
              "住宅ローン型ではなく別荘ローン or 一括購入",
              "固定資産税・管理費が発生",
              "相続時は評価額が下がる傾向",
            ],
            href: "https://www.mogecheck.jp/",
            badge: "ライフスタイル",
          },
          {
            name: "投資用区分マンション",
            rank: 2,
            highlight: "家賃収入＋減価償却節税",
            features: [
              "都内1R・1K物件で月家賃8〜15万円",
              "減価償却で給与所得と損益通算",
              "年収1,000万円超で節税効果大",
              "モゲチェック等で物件選定",
            ],
            href: "https://www.mogecheck.jp/",
            badge: "投資",
          },
          {
            name: "自宅兼オフィス",
            rank: 3,
            highlight: "法人取得で経費化",
            features: [
              "法人名義で取得、家賃50%を会社経費化",
              "個人事業主は家事按分20〜50%",
              "自宅勤務の増加で需要高まる",
              "登記・税務対策が複雑",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "民泊物件",
            rank: 4,
            highlight: "短期賃貸で高利回り",
            features: [
              "Airbnb・Booking.comで貸出",
              "年180日の営業日制限あり",
              "利回り10〜20%も可能（立地次第）",
              "民泊新法の手続き・管理会社活用",
            ],
            href: "https://www.mogecheck.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">2軒目取得時の税務注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>住宅ローン控除は2軒目には適用されない（自宅限定）</li>
          <li>投資用物件は減価償却・損益通算でメリット大</li>
          <li>固定資産税・都市計画税は毎年発生</li>
          <li>相続税対策として不動産評価は時価の70〜80%</li>
          <li>譲渡所得税は5年超保有で半減（長期譲渡所得）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="2軒目ローンはモゲチェックで比較｜複数銀行一括審査"
        description="2軒目不動産のローンは銀行により金利・条件が大きく異なる。モゲチェックなら複数銀行の条件を無料一括比較、金利差で総返済額100〜500万円の削減も。"
        buttonText="モゲチェックで無料診断"
        href="https://www.mogecheck.jp/"
        icon="🏘️"
        highlight="無料診断"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">法人 vs 個人の取得比較</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>法人取得：経費計上範囲広い、相続対策に有効、設立コストあり</li>
          <li>個人取得：住宅ローン条件良い、手続き簡素、節税メリット限定的</li>
          <li>年収3,000万円超なら法人取得が有利</li>
          <li>複数物件保有なら法人化が効率的</li>
          <li>税理士と早めの相談が鉄則</li>
        </ul>
      </section>
    </>
  ),
  "us-etf-core-satellite-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国ETFのコア・サテライト戦略</h2>
        <p>
          コア・サテライト戦略は、資産の70〜80%を安定的なコア（VTI/VOO/VT等の広範分散ETF）、20〜30%を成長性の高いサテライト（半導体・AI・クリーンエネルギー等のテーマETF）に配分する投資手法。長期安定＋高リターンを両立できる王道戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 米国ETFポートフォリオ"
        services={[
          {
            name: "VTI（Vanguard Total Stock Market）",
            rank: 1,
            highlight: "米国株式全体｜信託報酬0.03%",
            features: [
              "米国株式4,000銘柄に分散",
              "業界最低信託報酬0.03%",
              "S&P500より幅広い（小型株も含む）",
              "コア資産として最適",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "コア",
          },
          {
            name: "VOO（Vanguard S&P 500）",
            rank: 2,
            highlight: "S&P500｜信託報酬0.03%",
            features: [
              "S&P 500指数連動、米国大型株500銘柄",
              "信託報酬0.03%",
              "過去30年の年平均リターン10%超",
              "バフェットおすすめ",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SOXL（半導体3倍レバレッジ）",
            rank: 3,
            highlight: "サテライト｜高リスク高リターン",
            features: [
              "半導体指数の3倍レバレッジ",
              "AI・半導体需要拡大で成長期待",
              "ボラティリティ大きい（上昇・下落とも3倍）",
              "サテライト5〜10%以内で運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "攻め",
          },
          {
            name: "ICLN（クリーンエネルギー）",
            rank: 4,
            highlight: "サテライト｜ESG投資と重ね打ち",
            features: [
              "クリーンエネルギー関連100銘柄",
              "Tesla・Enphase等を含む",
              "長期成長期待",
              "信託報酬0.41%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ROBO（AI・ロボット）",
            rank: 5,
            highlight: "AI・ロボット関連企業",
            features: [
              "AI・ロボット関連企業80銘柄",
              "NVIDIA・ABB等を含む",
              "長期成長期待",
              "信託報酬0.95%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">モデルポートフォリオ（月10万円積立）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コア（70%）：VTI 5万円 + VOO 2万円 = 7万円</li>
          <li>サテライト（30%）：SOXL 1万円 + ROBO 1万円 + ICLN 1万円 = 3万円</li>
          <li>20年運用（年利7%平均）：元本2,400万円→約5,200万円</li>
          <li>新NISA成長枠をフル活用で配当も非課税</li>
          <li>年1回のリバランスで比率維持</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国ETF積立はSBI証券｜為替手数料無料"
        description="SBI証券なら米国ETFの為替手数料完全無料、定期買付も設定可能。新NISA成長枠（年240万円）で配当非課税、コア・サテライト戦略の基盤に最適。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌎"
        highlight="業界No.1"
      />
    </>
  ),
  "side-business-tax-accounting": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">副業の税務ルール20万円の壁</h2>
        <p>
          会社員が副業した場合、副業所得（売上-経費）が年20万円超なら確定申告必須。20万円以下なら所得税の申告不要ですが、住民税は申告必要。副業が「雑所得」か「事業所得」かで経費計上範囲・青色申告特別控除の有無等が大きく変わります。
        </p>
      </section>
      <ComparisonTableCTA
        title="雑所得 vs 事業所得の違い"
        services={[
          {
            name: "雑所得",
            rank: 1,
            highlight: "副業初心者｜確定申告簡単",
            features: [
              "月数万円の副業に多い分類",
              "経費計上可能だが青色申告特別控除なし",
              "損失の繰越控除不可",
              "確定申告書B＋雑所得欄の記載",
            ],
            href: "https://www.zeiri4.com/",
            …47199 tokens truncated…運用。為替手数料無料（住信SBIネット連携）、米国債・海外ETFで多通貨分散投資が可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💹"
        highlight="業界No.1"
      />
    </>
  ),
  "pet-insurance-detailed-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ペット保険詳細比較｜10社ランキング</h2>
        <p>
          ペット保険は、犬・猫の通院・入院・手術費に備える保険です。補償割合だけでなく、通院の有無、免責金額、年間限度額、加入年齢、更新条件、待機期間、既往症の扱いで使い勝手が変わります。月額保険料の安さだけで決めず、実際に請求しやすい条件かを確認することが大切です。
        </p>
      </section>
      <DecisionBox
        title="結論：ペット保険は「通院・年齢・更新条件」を先に確認"
        points={[
          "若いうちは保険料が安くても、更新時の上昇や高齢時の継続条件を確認する。",
          "通院補償が必要か、手術・入院中心でよいかを飼育状況に合わせて分ける。",
          "約款、重要事項説明、待機期間、免責金額を申込前に確認する。",
        ]}
        note="補償内容は商品改定で変わるため、最終判断は保険会社の公式資料で確認してください。"
      />
      <ComparisonTableCTA
        title="ペット保険主要3社比較"
        services={[
          {
            name: "アニコム損保（どうぶつ健保）",
            rank: 1,
            highlight: "業界シェアNo.1｜動物病院窓口精算",
            features: [
              "シェア42%で業界最大",
              "全国6,200動物病院で窓口精算",
              "補償割合50%・70%",
              "月額1,500〜5,000円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "シェアNo.1",
          },
          {
            name: "アイペット損保（うちの子）",
            rank: 2,
            highlight: "手術保険金充実｜多頭割引",
            features: [
              "手術1回50〜70%補償（最大30万円）",
              "通院・入院・手術フル補償",
              "多頭飼育割引",
              "月額1,200〜4,500円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "FPCペット保険",
            rank: 3,
            highlight: "掛け捨てで最安｜若い犬猫向け",
            features: [
              "業界最安月額680円〜",
              "補償割合50%",
              "手術・入院のみ（通院なし）",
              "若年層の予防加入向け",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ペット保険選びの5つのポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>補償範囲：通院・入院・手術のどこまでカバーされるか</li>
          <li>補償割合：50% or 70%（高い程月額高）</li>
          <li>加入年齢：新規加入は7歳以下が多い（高齢犬猫は選択肢限定）</li>
          <li>継続可能年齢：終身継続可能な保険を選ぶ</li>
          <li>待機期間：加入直後30日は補償対象外が一般的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ペット保険選びは保険マンモスで｜無料相談"
        description="ペット保険を検討する際は、補償範囲・月額・加入年齢・継続条件を比較しましょう。無料相談を使う場合も、約款と重要事項説明を確認してから判断してください。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🐕"
        highlight="無料相談"
      />
    </>
  ),
  "retirement-allowance-optimization": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">退職金最適受取｜税金を最小化して手取り最大化</h2>
        <p>
          退職金は勤続年数と受取方法で税金が大きく変わります。退職所得控除（勤続20年まで年40万円、超過後年70万円）、1/2課税特例、年金受取なら公的年金控除、確定拠出年金との合算など、知識次第で手取り額が数百万円変わります。一時金受取・年金受取・併用受取の3パターンをシミュレーションし、自分に最適な方法を選択しましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">退職所得控除の計算</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>勤続20年以下：40万円×勤続年数（最低80万円）</li>
          <li>勤続20年超：800万円＋70万円×（勤続年数−20年）</li>
          <li>例：勤続30年なら800万円＋70万円×10年＝1500万円</li>
          <li>控除後の金額×1/2が課税対象</li>
          <li>他の所得と分離課税（税率低い）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="退職金運用のおすすめ証券会社"
        services={[
          {
            name: "SBI証券（退職金運用プラン）",
            rank: 1,
            highlight: "退職金特別定期預金＋投資信託",
            features: [
              "退職金特別定期預金（高金利）",
              "投資信託2,800本以上",
              "新NISA＋iDeCo併用可能",
              "為替手数料無料で米国債も",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（退職金保険相談）",
            rank: 2,
            highlight: "一時払い終身保険で相続対策",
            features: [
              "退職金を一時払い終身保険に",
              "相続税非課税枠500万×相続人",
              "介護保険・医療保険の見直し",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">退職金の受取方法3パターン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①一時金受取</strong>：退職所得控除＋1/2課税で税金最小、自由に運用可能</li>
          <li><strong>②年金受取</strong>：公的年金等控除適用、毎月安定収入、運用会社任せ</li>
          <li><strong>③併用受取</strong>：一部一時金＋一部年金、税制最適化＋安定収入のバランス</li>
          <li>確定拠出年金（企業型DC・iDeCo）と退職金は同年受取で控除重複注意</li>
        </ul>
      </section>
      <AffiliateCTA
        title="退職金運用はSBI証券で｜退職金特別プラン"
        description="SBI証券の退職金特別定期預金は高金利、投資信託2,800本以上で最適なポートフォリオ構築。新NISA＋iDeCoと併用で、退職後30年の資産寿命を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏖️"
        highlight="業界No.1"
      />
    </>
  ),
  "freelance-accounting-software-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">フリーランス会計ソフト完全比較</h2>
        <p>
          フリーランス・個人事業主の必須ツールが会計ソフト。freee（月2,178円〜）・マネーフォワードクラウド（月1,078円〜）・弥生オンライン（月2,700円〜）の3社が主要選択肢。電子帳簿保存法・インボイス制度・青色申告65万円控除への対応で、確定申告の手間を1/10に短縮。事業規模・業種・使い勝手で最適な1本を選びましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="会計ソフト3社比較"
        services={[
          {
            name: "freee（フリー）",
            rank: 1,
            highlight: "簿記知識不要｜質問形式で入力",
            features: [
              "月額2,178円〜",
              "簿記知識ゼロでもOK",
              "スマホアプリで完結",
              "インボイス・電子帳簿保存法対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "初心者向け",
          },
          {
            name: "マネーフォワードクラウド",
            rank: 2,
            highlight: "銀行連携最多｜経理経験者向け",
            features: [
              "月額1,078円〜（最安）",
              "銀行・カード連携2,500以上",
              "経理経験者向け機能充実",
              "給与計算・請求書も統合",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "最安",
          },
          {
            name: "弥生オンライン（青色申告）",
            rank: 3,
            highlight: "国内シェアNo.1の老舗",
            features: [
              "月額2,700円〜（初年度無料キャンペーン）",
              "国内シェアNo.1",
              "電話サポート充実",
              "税理士連携しやすい",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">選び方の3ポイント</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①簿記知識</strong>：知識なしならfreee、あればマネーフォワード</li>
          <li><strong>②事業規模</strong>：年商1000万円以下はfreee/マネフォ、それ以上は弥生＋税理士</li>
          <li><strong>③連携サービス</strong>：銀行・カードの自動連携数が多いほど入力工数減</li>
        </ul>
      </section>
      <AffiliateCTA
        title="会計ソフトの選定相談はココナラで｜税理士が対応"
        description="会計ソフトの選び方・移行方法・確定申告のサポートをココナラで税理士・FPに相談。1時間5,000円〜の個別相談、月1万円〜の顧問契約も。会員登録無料。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="📊"
        highlight="登録無料"
      />
    </>
  ),
  "mortgage-refinance-detailed-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">住宅ローン借換え詳細ガイド｜年100万円得する戦略</h2>
        <p>
          住宅ローン借換えは、金利差0.3%以上・残期間10年以上・残債1000万円以上の3条件を満たせば総返済額削減が可能。2022〜2023年の金利上昇局面で変動金利から固定金利への借換え需要が拡大。諸費用40〜100万円、手続き期間1〜2ヶ月、損益分岐点シミュレーションを正しく行うことで、年間10〜100万円の返済軽減が実現します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">借換えの3条件チェックリスト</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①金利差</strong>：現在の金利−新しい金利が0.3%以上あるか</li>
          <li><strong>②残期間</strong>：完済まで10年以上残っているか</li>
          <li><strong>③残債</strong>：1000万円以上の借入残高があるか</li>
          <li>3条件全てYESなら借換え検討、2条件なら要シミュレーション</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="住宅ローン借換え相談サービス"
        services={[
          {
            name: "家づくり相談所（住替え相談）",
            rank: 1,
            highlight: "借換え＋住替えも同時相談",
            features: [
              "住宅ローン借換えシミュレーション",
              "建替え・リフォーム相談",
              "専門家紹介無料",
              "オンライン完結",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
          {
            name: "保険マンモス（団信見直し）",
            rank: 2,
            highlight: "借換え時の団信保険見直し",
            features: [
              "借換え時の団体信用生命保険",
              "がん団信・3大疾病団信の提案",
              "借換え諸費用の削減",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">借換えの諸費用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>保証料：借入額×2%（銀行により0〜）</li>
          <li>事務手数料：3〜5万円or借入額×2.2%</li>
          <li>登録免許税：借入額×0.4%</li>
          <li>司法書士報酬：7〜15万円</li>
          <li>印紙税：2万円</li>
          <li>合計目安：40〜100万円（3000万円借換えで）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="住宅ローン借換え＋住替え相談は家づくり相談所で"
        description="借換え＋リフォーム・建替え・住替えまで家づくり相談所で一括相談。住宅ローンのプロが金利比較＋住まいの総合相談。専門家紹介無料、オンライン完結。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏠"
        highlight="無料相談"
      />
    </>
  ),
  "business-loan-comparison-detailed": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">事業者ローン詳細比較｜10社ランキング</h2>
        <p>
          事業者ローンは、個人事業主・法人向けの事業資金ローン。AGビジネスサポート・GMOあおぞらネット銀行・ビジネスパートナー等、10社以上の選択肢。金利3〜18%、即日融資・無担保・無保証・オンライン完結が主流。運転資金・設備投資・納税資金に活用でき、信用情報・決算書で審査。金融機関と比較して審査緩やかだが、金利は高めです。
        </p>
      </section>
      <ComparisonTableCTA
        title="事業者ローン主要3社比較"
        services={[
          {
            name: "GMOあおぞらネット銀行（あんしんワイド）",
            rank: 1,
            highlight: "最低金利1.0%｜法人口座連動",
            features: [
              "金利1.0〜14.0%（業界最安級）",
              "最大1億円融資",
              "決算書不要（口座情報で審査）",
              "オンライン完結",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+7R8C9M+3XT0+5YJRM",
            badge: "最安金利",
          },
          {
            name: "AGビジネスサポート（旧アイフルビジネス）",
            rank: 2,
            highlight: "即日融資対応｜最大1000万円",
            features: [
              "金利3.1〜18.0%",
              "最大1000万円融資",
              "即日融資可能",
              "無担保・無保証",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+7R8C9M+3XT0+5YJRM",
          },
          {
            name: "ビジネスパートナー（法人融資）",
            rank: 3,
            highlight: "創業1年以上でOK｜追加融資可",
            features: [
              "金利5.9〜14.8%",
              "最大500万円融資",
              "創業1年以上が目安",
              "追加融資・借換えOK",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+7R8C9M+3XT0+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">事業者ローン選びのコツ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>緊急性高：即日融資のAGビジネスサポート</li>
          <li>低金利優先：GMOあおぞらネット銀行（1.0〜）</li>
          <li>小規模事業：ビジネスパートナー（500万まで）</li>
          <li>ファクタリング（売掛金早期現金化）も選択肢</li>
          <li>金融機関融資（日本政策金融公庫）は最安だが審査厳しい</li>
        </ul>
      </section>
      <AffiliateCTA
        title="事業資金調達はファクタリングも検討｜西日本ファクター"
        description="売掛金を即日現金化するファクタリング。西日本ファクターは手数料2%〜、個人事業主・法人OK、3社間・2社間対応。融資と違い負債にならず、信用情報に影響なし。"
        buttonText="西日本ファクターの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+7R8C9M+3XT0+5YJRM"
        icon="💰"
        highlight="25,000円/件"
      />
    </>
  ),
  "crypto-wallet-security-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産ウォレット完全ガイド</h2>
        <p>
          暗号資産のセキュリティ要は「ウォレット」の管理。取引所の口座（ホットウォレット）は常時インターネット接続でハッキングリスクあり、Mt.Gox・Coincheck事件の再来も。100万円超の保有ならハードウェアウォレット（Ledger・Trezor・SafePal）で完全オフライン管理が必須。秘密鍵管理・2段階認証・フィッシング対策の基本を解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="ハードウェアウォレット主要3社比較"
        services={[
          {
            name: "Ledger Nano X（レジャーナノX）",
            rank: 1,
            highlight: "世界シェアNo.1｜5500通貨対応",
            features: [
              "Bluetooth・モバイル対応",
              "5500通貨対応",
              "価格2万円前後",
              "iOS・Android連携OK",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "シェアNo.1",
          },
          {
            name: "Trezor Model T",
            rank: 2,
            highlight: "オープンソース｜信頼性No.1",
            features: [
              "完全オープンソース",
              "タッチスクリーン搭載",
              "価格3万円前後",
              "1800通貨対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SafePal S1",
            rank: 3,
            highlight: "完全エアギャップ｜最安値",
            features: [
              "完全オフライン（QRコード通信）",
              "価格1万円以下で最安",
              "10,000通貨対応",
              "Binance投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "コスパ最強",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産セキュリティ5つの鉄則</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①秘密鍵管理</strong>：紙に書いて金庫保管、デジタルデータは複製リスクあり</li>
          <li><strong>②2段階認証</strong>：Google Authenticator必須、SMS認証は非推奨</li>
          <li><strong>③ハードウェアウォレット</strong>：100万円超の保有は必須</li>
          <li><strong>④フィッシング対策</strong>：公式URL直接入力、検索結果クリック厳禁</li>
          <li><strong>⑤分散保管</strong>：取引所30%＋ハードウェア70%の比率目安</li>
        </ul>
      </section>
      <AffiliateCTA
        title="暗号資産運用はSBI VCトレードで｜安全性No.1"
        description="暗号資産取引はSBI VCトレードでスタート。日本の規制対応、証券会社SBIグループで安心、ハードウェアウォレット連携も容易。ビットコイン・イーサリアム等主要コインを取扱。"
        buttonText="SBI VCトレードの詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔐"
        highlight="安全性No.1"
      />
    </>
  ),
  "ideco-employer-dc-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo vs 企業型DC｜2024年以降の最適戦略</h2>
        <p>
          2022年10月から会社員もiDeCo（個人型）と企業型DC（確定拠出年金）の併用が可能に。企業型DCの掛金＋マッチング拠出の余力があれば追加でiDeCoに加入、全額所得控除で節税効果最大化。会社員の場合、年間最大55,000円×12ヶ月＝66万円の所得控除も現実的。自分の企業型DCの規約と掛金上限を確認しましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo併用の掛金上限</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>企業型DCのみ加入：iDeCo月20,000円まで（他企業年金なし）</li>
          <li>企業型DC＋DB（確定給付年金）加入：iDeCo月12,000円まで</li>
          <li>公務員：iDeCo月20,000円（2024年12月から）</li>
          <li>会社員（企業年金なし）：iDeCo月23,000円</li>
          <li>自営業：iDeCo月68,000円</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="iDeCoおすすめ金融機関"
        services={[
          {
            name: "SBI証券 iDeCo（セレクトプラン）",
            rank: 1,
            highlight: "運営管理手数料無料｜信託報酬最安",
            features: [
              "運営管理手数料無料",
              "eMAXIS Slim全世界株式取扱",
              "信託報酬0.05775%",
              "加入者No.1",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券 iDeCo",
            rank: 2,
            highlight: "シンプルな商品ラインナップ",
            features: [
              "運営管理手数料無料",
              "40本厳選ラインナップ",
              "低コストインデックスファンド",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
            badge: "500円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">併用のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>全額所得控除：企業型DC＋iDeCoの両方とも拠出分は非課税</li>
          <li>運用益非課税：60歳までの運用益に税金かからない</li>
          <li>受取時の退職所得控除or年金控除：税制優遇大</li>
          <li>会社員でも年60万円超の節税効果（年収700万円以上で）</li>
          <li>企業型DCの商品ラインナップが劣る場合、iDeCoで補完可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="iDeCoなら松井証券｜運営管理手数料無料"
        description="松井証券iDeCoは運営管理手数料無料、40本厳選ラインナップ、低コストインデックスファンド充実。企業型DCと併用で節税効果最大化、老後資金づくりに最適。"
        buttonText="松井証券iDeCoの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ"
        icon="🏛️"
        highlight="手数料無料"
      />
    </>
  ),
  "nisa-tax-optimization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISA税務最適化｜手取り最大化戦略</h2>
        <p>
          新NISAは運用益非課税だが、特定口座との損益通算不可という弱点あり。NISA優先銘柄は「長期保有で大きく値上がり期待できる成長株＋高配当株」、特定口座には「損切りリスクある個別株＋短期売買銘柄」を配置するのが最適解。配当再投資の複利効果、売却タイミング、配偶者との口座分担まで、手取り最大化の技を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">NISA配分の鉄則</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>NISAつみたて枠</strong>：長期インデックス（eMAXIS Slim・SBI全世界株）月10万円</li>
          <li><strong>NISA成長枠</strong>：高配当株（VYM・1489）＋長期成長株（米国ハイテク）年240万円</li>
          <li><strong>特定口座</strong>：個別株の短期売買、損益通算可能な銘柄</li>
          <li><strong>回転売買NG</strong>：NISA枠は売却しても復活せず、長期保有が原則</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="NISA対応の主要証券会社"
        services={[
          {
            name: "SBI証券（新NISA口座）",
            rank: 1,
            highlight: "取扱銘柄業界最多｜手数料無料",
            features: [
              "国内株・米国株・投信で手数料無料",
              "eMAXIS Slim等の低コストファンド",
              "クレカ積立1%還元",
              "取扱銘柄業界最多",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（新NISA口座）",
            rank: 2,
            highlight: "シンプル操作｜サポート充実",
            features: [
              "国内株・米国株手数料無料",
              "投信取扱1700本",
              "100年以上の歴史",
              "電話サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">NISA売却の最適タイミング</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>大きな含み益→NISAで売却、利益全額非課税</li>
          <li>含み損→NISAでは売らず、特定口座で損益通算可能な銘柄と組合せ</li>
          <li>60歳以降の取崩し：NISA→特定口座→iDeCoの順番で</li>
          <li>相続：NISAは非課税継続OK、特定口座は含み益課税なし（相続時の取得費引継ぎ）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="NISA税務最適化はSBI証券で｜業界No.1銘柄数"
        description="SBI証券は新NISA対応銘柄業界最多、クレカ積立1%還元、投信・株式すべて手数料無料。税務最適化の専門レポート充実、長期資産形成のベストパートナー。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "seniors-nisa-strategy-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">60代以降のNISA戦略｜退職金・年金との併用</h2>
        <p>
          60代以降のNISA運用は、資産形成から取崩しへ戦略転換が必要。退職金2000万円の一部（500〜1000万円）をNISA成長枠で運用、配当・分配金で生活費補填、4%ルール（年4%取崩し）で30年以上資産寿命を延ばす設計が王道。年金受給開始年齢の繰下げと組合せ、相続税対策まで考慮した総合戦略を解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">60代のNISA配分モデル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>NISAつみたて枠：月10万円（全世界株式インデックス）</li>
          <li>NISA成長枠：年240万円（高配当株・米国債ETF）</li>
          <li>目標配当利回り3〜4%で月10〜15万円の配当収入</li>
          <li>特定口座：個人向け国債・定期預金で流動性確保</li>
          <li>配偶者のNISA枠も活用、夫婦で年720万円の非課税枠</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="60代向け運用サービス"
        services={[
          {
            name: "SBI証券（シニア向け商品充実）",
            rank: 1,
            highlight: "退職金運用＋NISA併用",
            features: [
              "退職金特別定期預金（高金利）",
              "NISA＋個人向け国債",
              "高配当株・米国債ETF",
              "相続対策型保険取扱",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（相続・生前整理）",
            rank: 2,
            highlight: "NISA＋保険の総合戦略",
            features: [
              "NISA＋生命保険の配分提案",
              "相続税非課税枠活用",
              "介護保険の見直し",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">取崩し戦略3パターン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>4%ルール</strong>：年4%を取崩し、30年以上の資産寿命</li>
          <li><strong>定率取崩し</strong>：毎年資産の3〜5%取崩し、残高連動で柔軟</li>
          <li><strong>定額取崩し</strong>：毎月同額取崩し、生活費計画立てやすい</li>
          <li>年金受給開始と連動、足りない分をNISAから補填</li>
          <li>相続時：NISAは名義変更不可、死亡日評価額で課税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="退職金＋NISA運用はSBI証券で｜シニア支援充実"
        description="SBI証券の退職金＋NISA運用プランは、退職金特別定期預金・NISA＋高配当株・米国債ETFまで総合提案。取崩し戦略・相続対策まで、シニアの資産運用をフルサポート。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👴"
        highlight="業界No.1"
      />
    </>
  ),
  "dividend-etf-us-japan-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当ETF米日完全比較</h2>
        <p>
          高配当ETFは、配当利回り3〜4.5%の米日ETFを組合せて月10万円超の配当収入を狙う強力なツール。米国VYM（Vanguard高配当）・HDV（iShares高配当）・SPYDと、日本1489（NEXT FUNDS高配当40）・1494（One 日経高配当）等、利回り・信託報酬・為替リスク・税制を徹底比較。新NISA成長枠での最適配分も解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="高配当ETF主要6銘柄比較"
        services={[
          {
            name: "VYM（Vanguard米国高配当）",
            rank: 1,
            highlight: "400銘柄分散｜信託報酬0.06%",
            features: [
              "配当利回り2.9%",
              "信託報酬0.06%（業界最安）",
              "400銘柄の超分散",
              "米国大型高配当株中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "分散No.1",
          },
          {
            name: "HDV（iShares米国高配当）",
            rank: 2,
            highlight: "財務健全75銘柄｜利回り3.5%",
            features: [
              "配当利回り3.5%",
              "信託報酬0.08%",
              "財務健全性重視の75銘柄",
              "エネルギー・生活必需品多め",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SPYD（SPDR S&P500高配当）",
            rank: 3,
            highlight: "高利回り4.5%｜80銘柄均等",
            features: [
              "配当利回り4.5%",
              "信託報酬0.07%",
              "S&P500高配当80銘柄均等",
              "不動産・公益中心",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "高利回り",
          },
          {
            name: "1489（NEXT FUNDS 日経平均高配当40）",
            rank: 4,
            highlight: "日本高配当40銘柄｜新NISA対応",
            features: [
              "配当利回り4.0%",
              "信託報酬0.308%",
              "日経平均高配当40",
              "為替リスクなし",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高配当ETF配分のベストミックス</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>米国VYM 40%：分散最強、長期安定成長</li>
          <li>米国HDV 30%：財務健全重視、ディフェンシブ</li>
          <li>米国SPYD 10%：高利回りブースター、ボラ高め</li>
          <li>日本1489 20%：為替リスク分散、円ベース配当</li>
          <li>合計で配当利回り3.5〜4%、月10万円配当には元本3000万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高配当ETF投資はSBI証券で｜米国ETF為替手数料無料"
        description="SBI証券は米国高配当ETF（VYM・HDV・SPYD）の為替手数料無料、日本高配当ETF（1489）も取扱、新NISA成長枠で非課税運用。月10万円配当生活のベストパートナー。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💵"
        highlight="業界No.1"
      />
    </>
  ),
  "bond-fund-vs-individual-bond-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">債券ファンド vs 個別債券｜判定ガイド</h2>
        <p>
          債券投資には「債券ファンド」（AGG・BND・日本債券インデックス等のETF）と「個別債券」（米国債・個人向け社債）の2種類。流動性・コスト・金利リスク・税制が異なり、投資金額と目的で最適解が変わります。500万円以下なら債券ファンド、1000万円超なら個別債券、という使い分けが王道。満期保有で元本確定の個別債券は、金利上昇局面で特に有利です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">債券ファンドと個別債券の比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>流動性</strong>：ファンド○（いつでも売買）、個別△（満期まで流動性低い）</li>
          <li><strong>コスト</strong>：ファンド0.03〜0.3%、個別は購入手数料無料</li>
          <li><strong>金利変動</strong>：ファンドは常に影響受ける、個別は満期まで保有で影響なし</li>
          <li><strong>新NISA対応</strong>：ファンドのみ（米国ETFは成長枠）、個別債券は対象外</li>
          <li><strong>少額投資</strong>：ファンドは1万円〜、個別は10万円〜</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="債券投資の主要商品"
        services={[
          {
            name: "SBI証券（債券ファンド・個別債券両方）",
            rank: 1,
            highlight: "業界最多ラインナップ",
            features: [
              "AGG・BND・米国債ETF取扱",
              "個別米国債・社債も豊富",
              "新NISA対応ファンド多数",
              "購入手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（個別社債中心）",
            rank: 2,
            highlight: "個別債券の取扱多数",
            features: [
              "個人向け社債取扱多数",
              "米国債・個別債券",
              "購入・売却手数料無料",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">資産規模別の使い分け</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>〜500万円：債券ファンド（AGG・BND）で分散＋新NISA</li>
          <li>500〜1000万円：債券ファンド70%＋個別米国債30%</li>
          <li>1000〜3000万円：個別米国債＋個人向け社債＋TLT/IEF</li>
          <li>3000万円超：個別債券中心、満期ラダー戦略</li>
        </ul>
      </section>
      <AffiliateCTA
        title="債券投資はSBI証券で｜業界最多の取扱銘柄"
        description="SBI証券は債券ファンド・個別米国債・個人向け社債まで業界最多ラインナップ。新NISA対応ファンド、為替手数料無料の米国ETF、少額から個別債券まで全てカバー。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📜"
        highlight="業界No.1"
      />
    </>
  ),
  "tax-loss-harvesting-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">損出し戦略完全ガイド</h2>
        <p>
          損出し（Tax Loss Harvesting）は、年末までに含み損銘柄を売却して損益通算し、税金を最小化する節税技。特定口座（源泉徴収あり）で生じた利益と損失を通算、残りの損失は翌年以降3年間繰越可能。NISA口座の損失は通算対象外なので注意が必要。米国のワッシュセール（30日以内の買戻し）ルールと違い、日本では即日買戻しも合法です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">損出しの基本ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①12月中旬</strong>：特定口座の年間利益と含み損銘柄を確認</li>
          <li><strong>②損切実行</strong>：含み損銘柄を売却して損失確定</li>
          <li><strong>③同銘柄再購入（任意）</strong>：継続保有したいなら即日買戻しOK（日本では）</li>
          <li><strong>④確定申告</strong>：翌年3月15日までに損失繰越申告</li>
          <li><strong>⑤繰越3年</strong>：損失は翌年以降3年間の利益と相殺可能</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="損出し対応の主要証券会社"
        services={[
          {
            name: "SBI証券（損出しツール充実）",
            rank: 1,
            highlight: "特定口座の年間損益一覧",
            features: [
              "年間損益一覧ツール",
              "損益通算シミュレーター",
              "確定申告書類自動作成",
              "米国株・投信の損出しも対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（特定口座・NISA併設）",
            rank: 2,
            highlight: "損出し手数料無料",
            features: [
              "国内株手数料無料（50万以下）",
              "NISAと特定口座の併設管理",
              "確定申告サポート",
              "電話サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">損出しの注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>NISA口座の損失は通算対象外、特定口座のみ</li>
          <li>年末受渡しベースなので、12月最終営業日の2営業日前までに売却</li>
          <li>即日買戻し可だが、異なる証券会社間の「繰替取引」は税制注意</li>
          <li>配当控除と併用時の税率計算に注意（総合課税vs分離課税）</li>
          <li>繰越控除は毎年確定申告が必要（前年分継続申告）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="損出し・確定申告はSBI証券で｜ツール業界最強"
        description="SBI証券の年間損益一覧・損益通算シミュレーターで損出しを自動化。確定申告書類の自動作成まで一気通貫、国内株・米国株・投信すべて対応。業界No.1ツール。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📉"
        highlight="業界No.1"
      />
    </>
  ),
  "trust-deed-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産小口化商品完全ガイド</h2>
        <p>
          不動産小口化商品は、高額な不動産（都心ビル等）を100万円〜の単位で分割投資できる商品。信託受益権型（信託受益権を小口化）と匿名組合型の2種類があり、利回り3〜6%で都心の優良不動産に投資可能。J-REITが市場価格で日々変動するのに対し、不動産小口化商品は物件保有期間中は安定、元本変動少なめ。相続税対策としても活用されます。
        </p>
      </section>
      <ComparisonTableCTA
        title="不動産小口化商品 主要運営会社"
        services={[
          {
            name: "SBI証券（不動産小口化商品取扱）",
            rank: 1,
            highlight: "大手運営会社の商品を厳選",
            features: [
              "都心オフィスビル・商業施設",
              "利回り3〜6%",
              "1口100万円〜",
              "相続税対策に活用可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "家づくり相談所（不動産投資相談）",
            rank: 2,
            highlight: "不動産投資の総合相談",
            features: [
              "不動産小口化商品の選び方",
              "現物投資との比較",
              "J-REITとの使い分け",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">不動産小口化商品のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>都心の優良不動産に100万円〜少額投資</li>
          <li>利回り3〜6%で安定収益</li>
          <li>運営は専門会社、手間不要</li>
          <li>相続税評価減（不動産評価額の60〜80%）</li>
          <li>現物不動産より流動性高い（専用市場で売却）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="不動産投資の選び方相談は家づくり相談所で"
        description="不動産小口化商品・J-REIT・現物投資の使い分けを家づくり相談所で無料相談。専門家が資産規模・目的に合わせて最適な不動産投資を提案。オンライン完結。"
        buttonText="家づくり相談所で無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏘️"
        highlight="無料相談"
      />
    </>
  ),
  "infrastructure-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">インフラ投資完全ガイド｜安定収益の源</h2>
        <p>
          インフラ投資は、公益事業・空港・港湾・通信塔・太陽光発電など、社会基盤への投資。景気変動の影響を受けにくく、インフレに強い特徴あり。日本のインフラファンド（タカラレーベン・日本再生エネルギー等）、米国公益事業ETF（XLU）、空港・港湾株など多様な選択肢。利回り3〜6%の安定収益で、ポートフォリオの10〜15%配分が推奨されます。
        </p>
      </section>
      <ComparisonTableCTA
        title="インフラ投資の主要商品"
        services={[
          {
            name: "SBI証券（XLU等インフラETF取扱）",
            rank: 1,
            highlight: "米国インフラETF完備",
            features: [
              "XLU（米国公益事業ETF）",
              "VPU（バンガード公益）",
              "GLIN（グローバルインフラ）",
              "日本インフラファンド",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（日本インフラファンド）",
            rank: 2,
            highlight: "日本の太陽光発電ファンド",
            features: [
              "タカラレーベン・インフラファンド",
              "日本再生エネルギーインフラ",
              "分配金利回り6%〜",
              "手数料無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">インフラ投資の3つの種類</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①公益事業株・ETF</strong>：電力・ガス・水道、XLU・VPU等、利回り3〜4%</li>
          <li><strong>②インフラファンド（日本）</strong>：太陽光発電、タカラレーベン等、利回り6%超</li>
          <li><strong>③インフラ個別株</strong>：空港・港湾・通信塔、世界の個別企業</li>
          <li>景気変動に強く、ディフェンシブ資産として有効</li>
          <li>金利上昇局面は価格下落リスクあり</li>
        </ul>
      </section>
      <AffiliateCTA
        title="インフラ投資はSBI証券で｜XLU・VPU・日本ファンド完備"
        description="SBI証券は米国公益事業ETF（XLU・VPU）・グローバルインフラETF・日本インフラファンドまで業界最多取扱。為替手数料無料（住信SBI連携）、新NISA成長枠対応。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏗️"
        highlight="業界No.1"
      />
    </>
  ),
  "emerging-markets-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新興国投資完全ガイド</h2>
        <p>
          新興国（中国・インド・ブラジル・メキシコ・インドネシア・ベトナム等）への投資は、GDP成長率5〜7%の高成長を取込める強力な手段。EEM（iShares）・VWO（Vanguard）等の新興国ETF、インドETF（INDA）、中国ETF（FXI・MCHI）で分散投資可能。政治・通貨リスクが高いため、ポートフォリオの10〜20%配分が目安です。
        </p>
      </section>
      <ComparisonTableCTA
        title="新興国投資の主要ETF"
        services={[
          {
            name: "VWO（バンガード新興国）",
            rank: 1,
            highlight: "低コスト｜24カ国分散",
            features: [
              "信託報酬0.08%（業界最安）",
              "中国・インド・台湾・ブラジル等",
              "4000銘柄超の超分散",
              "配当利回り3.0%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
          {
            name: "EEM（iShares新興国）",
            rank: 2,
            highlight: "業界最古｜流動性最高",
            features: [
              "信託報酬0.69%",
              "業界で最も歴史あり",
              "流動性最高",
              "オプション取引対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "FEZ（SPDR欧州新興）",
            rank: 3,
            highlight: "東欧・中東中心",
            features: [
              "ロシア・トルコ・ポーランド",
              "原油・資源多め",
              "信託報酬0.29%",
              "為替変動大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新興国投資のリスクとリワード</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>GDP成長率5〜7%（先進国2〜3%）</li>
          <li>過去20年リターン：年率7〜10%（先進国6〜8%）</li>
          <li>リスク：政治・通貨危機（2014年トルコ・2024年アルゼンチン等）</li>
          <li>ボラティリティ：先進国の1.5〜2倍</li>
          <li>推奨配分：ポートフォリオの10〜20%</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新興国ETFはSBI証券で｜VWO・EEM為替手数料無料"
        description="SBI証券は新興国ETF（VWO・EEM・IEMG）を為替手数料無料（住信SBI連携）で取扱。中国・インド個別国ETFも豊富、新NISA成長枠対応で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌏"
        highlight="業界No.1"
      />
    </>
  ),
  "china-stock-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">中国株投資完全ガイド</h2>
        <p>
          中国株投資の選択肢は、①香港H株（テンセント700、アリババ9988）、②米国ADR（JD.com、Baidu）、③中国ETF（FXI・MCHI・KWEB）の3ルート。2022〜2024年の規制強化・米中摩擦で株価低迷、2025年からのAI・EV産業回復で見直し局面。ポートフォリオの5%以内に抑え、政治リスク・上場廃止リスクを意識した分散投資が重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="中国株投資の主要ETF"
        services={[
          {
            name: "MCHI（iShares MSCI 中国）",
            rank: 1,
            highlight: "中国株全体に分散｜信託報酬0.58%",
            features: [
              "香港H株＋米国ADR含む",
              "600銘柄分散",
              "信託報酬0.58%",
              "テンセント・アリババ大型保有",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "分散No.1",
          },
          {
            name: "FXI（iShares 中国大型株）",
            rank: 2,
            highlight: "香港H株50銘柄",
            features: [
              "香港H株の大型50銘柄",
              "信託報酬0.74%",
              "金融・エネルギー中心",
              "ボラ少し低め",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "KWEB（KraneShares 中国インターネット）",
            rank: 3,
            highlight: "中国ネット企業特化｜ボラ大",
            features: [
              "テンセント・アリババ・JD・Baidu",
              "信託報酬0.69%",
              "ボラ高めで短期売買向き",
              "成長回復期に大化け期待",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">中国株投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>米中摩擦・規制リスク：教育・ネット・ゲーム業界への規制</li>
          <li>上場廃止リスク：米国ADRの上場廃止可能性</li>
          <li>為替リスク：人民元・香港ドル・米ドル</li>
          <li>不動産危機：エバーグランデ等の不動産企業デフォルト</li>
          <li>ポートフォリオ配分：5%以内が安全</li>
        </ul>
      </section>
      <AffiliateCTA
        title="中国株投資はSBI証券で｜香港株・米国ADR両対応"
        description="SBI証券は香港株（H株）・米国上場中国ADR・中国ETF（MCHI・FXI・KWEB）まで総合対応。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇨🇳"
        highlight="業界No.1"
      />
    </>
  ),
  "india-stock-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">インド株投資完全ガイド</h2>
        <p>
          インドは2026年時点で世界第5位の経済大国、GDP成長率7%超の驚異的成長。2050年まで続く人口ボーナス（若年層比率高）で消費・IT・製薬産業が急成長中。新興国の中でも最も注目される投資先で、INDA・EPI・INDYのインドETF、ADRのインフォシス・HDFC銀行等、多様な投資手段がある。ポートフォリオの5〜10%配分が推奨されます。
        </p>
      </section>
      <ComparisonTableCTA
        title="インド株投資の主要ETF"
        services={[
          {
            name: "INDA（iShares MSCI インド）",
            rank: 1,
            highlight: "インド株全体｜流動性最高",
            features: [
              "インド全体に分散投資",
              "85銘柄カバー",
              "信託報酬0.64%",
              "配当利回り0.8%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "流動性No.1",
          },
          {
            name: "EPI（WisdomTree インド利益）",
            rank: 2,
            highlight: "利益加重｜割安銘柄多め",
            features: [
              "利益額で加重配分",
              "PER低め銘柄中心",
              "信託報酬0.85%",
              "バリュー系",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "INDY（iShares インド50）",
            rank: 3,
            highlight: "大型50銘柄特化",
            features: [
              "インド大型50銘柄",
              "Nifty 50指数連動",
              "信託報酬0.89%",
              "流動性良好",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">インド投資の3つの追い風</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①人口ボーナス</strong>：2050年まで若年層比率高</li>
          <li><strong>②IT産業</strong>：世界のIT人材供給、輸出拡大</li>
          <li><strong>③内需拡大</strong>：14億人の中間層拡大、消費拡大</li>
          <li><strong>④モディノミクス</strong>：デジタルインフラ・製造業振興</li>
          <li>過去10年リターン年率10〜15%、米国S&P500と同水準</li>
        </ul>
      </section>
      <AffiliateCTA
        title="インド株投資はSBI証券で｜INDA・EPI為替手数料無料"
        description="SBI証券はインドETF（INDA・EPI・INDY）・インドADR（インフォシス等）まで完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇮🇳"
        highlight="業界No.1"
      />
    </>
  ),
  "semiconductor-etf-detailed-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">半導体ETF詳細ガイド｜AI時代の恩恵</h2>
        <p>
          半導体ETFは、AI、データセンター、自動車、産業機器など幅広い需要に関係する一方、景気循環や在庫調整の影響を受けやすいテーマ型ETFです。SOXX、SMH、SOXLは保有銘柄、集中度、レバレッジ、信託報酬が異なるため、過去リターンだけでなく下落幅と保有目的を確認してから検討します。
        </p>
      </section>
      <DecisionBox
        title="結論：半導体ETFは成長テーマだが、集中投資リスクを確認"
        points={[
          "SOXXとSMHは保有上位銘柄の集中度が高く、NVIDIAやTSMCの影響を受けやすい。",
          "SOXLは日次3倍レバレッジ型で、長期保有では減価や急落リスクを必ず確認する。",
          "新NISAで使う場合も、全資産の一部にとどめるなど配分ルールを先に決める。",
        ]}
        note="テーマ型ETFは値動きが大きくなりやすいため、短期の実績だけで判断しないでください。"
      />
      <ComparisonTableCTA
        title="半導体ETF主要3銘柄比較"
        services={[
          {
            name: "SOXX（iShares 半導体）",
            rank: 1,
            highlight: "業界最古｜NVIDIA・AVGO大型保有",
            features: [
              "30銘柄集中投資",
              "NVIDIA 9%・AVGO 7%",
              "信託報酬0.35%",
              "流動性最高",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "王道",
          },
          {
            name: "SMH（VanEck 半導体）",
            rank: 2,
            highlight: "世界半導体25銘柄｜TSMC含む",
            features: [
              "25銘柄集中投資",
              "TSMC・NVIDIA大型保有",
              "信託報酬0.35%",
              "SOXXより集中度高い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SOXL（Direxion 半導体3倍）",
            rank: 3,
            highlight: "3倍レバレッジ｜超ハイリスク",
            features: [
              "SOXX指数の3倍連動",
              "日次リバランス",
              "信託報酬0.75%",
              "長期保有非推奨（減価）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">半導体投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>AI需要拡大の追い風はあるが、業績・在庫・金利環境で大きく下落する可能性がある</li>
          <li>シクリカル（景気変動）性質：好不調波大きい</li>
          <li>2022年に50%下落、2023〜2024年に300%回復の値動き</li>
          <li>SOXLはレバレッジ減価リスクで長期保有NG</li>
          <li>ポートフォリオの5〜15%配分目安</li>
        </ul>
      </section>
      <AffiliateCTA
        title="半導体ETF投資はSBI証券で｜SOXX・SMH為替手数料無料"
        description="半導体ETFを検討する場合は、保有銘柄、信託報酬、為替コスト、レバレッジの有無を確認しましょう。新NISAで使う場合も、テーマ集中リスクと下落時の対応を先に決めておくことが大切です。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔌"
        highlight="業界No.1"
      />
    </>
  ),
  "water-investment-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">水関連ETF投資完全ガイド</h2>
        <p>
          水は21世紀の石油と呼ばれる戦略資源。気候変動・人口増加で水需要拡大、ヴェオリア・ペンテア・ザイレム等の水処理企業への投資が注目。PHO（米国水）・FIW（グローバル水）・CGW（水インフラ）の3つのETFで分散投資可能。ESG投資としても評価され、長期で年率8〜12%のリターン実績。ポートフォリオの5〜10%配分が推奨されます。
        </p>
      </section>
      <ComparisonTableCTA
        title="水関連ETF主要3銘柄比較"
        services={[
          {
            name: "PHO（Invesco 水資源）",
            rank: 1,
            highlight: "米国水企業｜利回り0.5%",
            features: [
              "米国水企業40銘柄",
              "ペンテア・ザイレム・エコラボ等",
              "信託報酬0.6%",
              "配当利回り0.5%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "米国特化",
          },
          {
            name: "FIW（First Trust 水）",
            rank: 2,
            highlight: "グローバル水企業｜分散No.1",
            features: [
              "36銘柄のグローバル水企業",
              "米国・欧州・日本含む",
              "信託報酬0.54%",
              "配当利回り0.8%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "CGW（Invesco S&P グローバル水）",
            rank: 3,
            highlight: "水インフラ特化",
            features: [
              "50銘柄のグローバル水インフラ",
              "ヴェオリア（仏）大型保有",
              "信託報酬0.57%",
              "配当利回り1.2%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">水投資の追い風要因</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>気候変動で水不足地域拡大（2050年に40億人が影響）</li>
          <li>水処理技術の需要拡大（淡水化・再利用）</li>
          <li>国連SDGs目標6（水と衛生）で投資マネー流入</li>
          <li>米国老朽インフラ更新需要（1兆ドル規模）</li>
          <li>長期リターン：年率8〜12%（S&P500並み）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="水関連ETFはSBI証券で｜PHO・FIW・CGW対応"
        description="SBI証券は水関連ETF（PHO・FIW・CGW）・水インフラ個別株（ヴェオリア・ペンテア・ザイレム等）まで完備。ESG投資の柱として、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💧"
        highlight="業界No.1"
      />
    </>
  ),
  "reits-usa-detailed-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国REIT詳細比較｜VNQ・IYR・SCHH・RWR</h2>
        <p>
          米国REIT（Real Estate Investment Trust）は、個人が少額から米国不動産に投資できる強力なツール。VNQ（Vanguard）・IYR（iShares）・SCHH（Schwab）・RWR（SPDR）の4大REIT ETFを比較。分配金利回り3〜4%、信託報酬0.08〜0.4%、オフィス・住居・倉庫・データセンターの分散投資が可能。新NISA成長枠で非課税運用、ポートフォリオの5〜15%配分が推奨です。
        </p>
      </section>
      <ComparisonTableCTA
        title="米国REIT主要4ETF比較"
        services={[
          {
            name: "VNQ（Vanguard 米国REIT）",
            rank: 1,
            highlight: "業界最大｜信託報酬0.12%",
            features: [
              "資産規模最大（600億ドル超）",
              "信託報酬0.12%（業界最安級）",
              "170銘柄の超分散",
              "分配金利回り3.8%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "SCHH（Schwab 米国REIT）",
            rank: 2,
            highlight: "信託報酬最安0.07%",
            features: [
              "信託報酬0.07%（業界最安）",
              "140銘柄分散",
              "分配金利回り3.5%",
              "長期保有で最安コスト",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最安",
          },
          {
            name: "IYR（iShares 米国REIT）",
            rank: 3,
            highlight: "流動性最高｜オプション対応",
            features: [
              "流動性最高",
              "オプション取引対応",
              "信託報酬0.40%",
              "分配金利回り3.2%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">米国REITの種類別特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>住居REIT（Equity Residential等）</strong>：アパート賃貸、安定性高</li>
          <li><strong>オフィスREIT（Boston Properties等）</strong>：コロナ後回復中</li>
          <li><strong>倉庫REIT（Prologis）</strong>：EC拡大で高成長</li>
          <li><strong>データセンターREIT（Equinix・Digital Realty）</strong>：AI需要で急成長</li>
          <li><strong>商業施設REIT（Simon Property）</strong>：郊外大型モール中心</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国REITはSBI証券で｜VNQ・SCHH・IYR対応"
        description="SBI証券は米国REIT ETF（VNQ・SCHH・IYR・RWR）・個別REIT（Prologis・Equinix等）まで完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏢"
        highlight="業界No.1"
      />
    </>
  ),
  "commodity-futures-comparison-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">商品先物投資完全ガイド</h2>
        <p>
          商品先物（Futures）は、金・銀・原油・穀物等のコモディティをレバレッジ取引する高度な投資手段。COMEX（金・銀）・NYMEX（原油）・CBOT（穀物）が主要取引所。日本では東証商品先物・くりっく365でレバレッジ取引可能。コンタンゴ（先物＞現物）・バックワーデーション（先物＜現物）の理解が必須で、ETF経由より直接取引で手数料・税制メリットを取れます。
        </p>
      </section>
      <ComparisonTableCTA
        title="商品先物取引の主要サービス"
        services={[
          {
            name: "SBI証券（くりっく365）",
            rank: 1,
            highlight: "商品CFD・先物取引対応",
            features: [
              "金・銀・原油・穀物のCFD",
              "レバレッジ最大20倍",
              "手数料業界最安級",
              "税率20.315%（申告分離）",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（商品先物）",
            rank: 2,
            highlight: "商品先物取引手数料無料",
            features: [
              "金・白金・ゴム先物",
              "手数料無料",
              "少額証拠金",
              "サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">商品先物の3つの活用法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①インフレヘッジ</strong>：金・銀・原油の先物で物価上昇対策</li>
          <li><strong>②短期売買</strong>：ボラ高く、デイトレード・スイング向き</li>
          <li><strong>③ヘッジ取引</strong>：株式ロング＋金先物ショートで下落リスク相殺</li>
          <li>レバレッジ管理が重要、総資産の5%以内</li>
          <li>コンタンゴ影響でETFより先物直接取引有利な場合多い</li>
        </ul>
      </section>
      <AffiliateCTA
        title="商品先物はSBI証券で｜CFD・くりっく365対応"
        description="SBI証券は商品CFD（金・銀・原油・穀物）・くりっく365に対応、レバレッジ最大20倍。手数料業界最安級、申告分離課税20.315%で確定申告も簡単。少額から始められます。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📈"
        highlight="業界No.1"
      />
    </>
  ),
  "private-equity-intro-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">プライベートエクイティ入門</h2>
        <p>
          プライベートエクイティ（PE）は、未上場企業への投資で高リターンを狙う投資手法。機関投資家・富裕層向けのPEファンド（KKR・ブラックストーン・カーライル・アポロ等）は、10年保有で年率15〜20%のリターン実績。個人投資家も、PE運用会社の上場株・PE連動ETF（PSP・PEX）で間接的に参加可能。LBO（レバレッジド・バイアウト）・バイアウトファンドの基本も解説します。
        </p>
      </section>
      <ComparisonTableCTA
        title="個人が投資できるPE関連商品"
        services={[
          {
            name: "SBI証券（PE運用会社株・PE ETF）",
            rank: 1,
            highlight: "KKR・BX・APO等のPE大手株",
            features: [
              "KKR・Blackstone・Apollo個別株",
              "PSP（PE ETF）取扱",
              "配当利回り3〜5%",
              "為替手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "FUNDINNO（株式投資型クラファン）",
            rank: 2,
            highlight: "未公開株投資の代替手段",
            features: [
              "10万円〜未公開株投資",
              "PE代替として活用",
              "エンジェル税制対応",
              "IPO事例多数",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">PE投資の4つの特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①高リターン</strong>：過去30年でS&P500を年率5%超アウトパフォーム</li>
          <li><strong>②長期ロックアップ</strong>：10年以上の流動性なし</li>
          <li><strong>③高手数料</strong>：2%の運用報酬＋20%の成功報酬（2-20）</li>
          <li><strong>④リスク分散</strong>：50社以上の分散投資</li>
          <li>個人は運用会社株or PE ETFでエクスポージャー取得</li>
        </ul>
      </section>
      <AffiliateCTA
        title="PE関連株はSBI証券で｜KKR・BX・APO対応"
        description="SBI証券はKKR・Blackstone・Apollo等のPE大手個別株、PSP（PE ETF）まで完備。為替手数料無料（住信SBI連携）、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💎"
        highlight="業界No.1"
      />
    </>
  ),
  "alternative-investments-overview": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">オルタナティブ投資完全ガイド</h2>
        <p>
          オルタナティブ投資は、株式・債券という伝統資産以外の投資分類で、①不動産、②コモディティ、③プライベートエクイティ、④ヘッジファンド、⑤インフラ、⑥アート・コレクティブル、⑦暗号資産の7つ。伝統資産との相関が低く、ポートフォリオ全体のリスク分散・リターン向上に寄与。機関投資家のポートフォリオでは20〜30%の配分が一般的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">オルタナティブ投資7分類</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①不動産</strong>：現物・J-REIT・小口化商品、利回り3〜6%</li>
          <li><strong>②コモディティ</strong>：金・銀・原油・穀物、インフレヘッジ</li>
          <li><strong>③プライベートエクイティ</strong>：未上場企業投資、年率15〜20%</li>
          <li><strong>④ヘッジファンド</strong>：絶対収益追求、多様な戦略</li>
          <li><strong>⑤インフラ</strong>：公益事業・空港・太陽光、安定利回り</li>
          <li><strong>⑥アート・コレクティブル</strong>：絵画・時計・ワイン・ウイスキー</li>
          <li><strong>⑦暗号資産</strong>：ビットコイン・イーサリアム等</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="個人向けオルタナティブ投資商品"
        services={[
          {
            name: "SBI証券（オルタナETF取扱）",
            rank: 1,
            highlight: "業界最多のオルタナETF",
            features: [
              "金ETF（1326）・石油ETF",
              "J-REIT・米国REIT",
              "PE ETF（PSP）",
              "新NISA成長枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "保険マンモス（オルタナ保険相談）",
            rank: 2,
            highlight: "変額保険・外貨建保険",
            features: [
              "変額保険（投資型）",
              "外貨建終身保険",
              "ヘッジファンド連動保険",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">推奨配分モデル</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>保守的：伝統資産90%＋オルタナ10%（不動産・金中心）</li>
          <li>バランス：伝統70%＋オルタナ30%（不動産・コモディティ・PE）</li>
          <li>攻撃的：伝統50%＋オルタナ50%（多様な分散）</li>
          <li>個人の総資産規模・リスク許容度で調整</li>
        </ul>
      </section>
      <AffiliateCTA
        title="オルタナティブ投資はSBI証券で｜総合対応"
        description="SBI証券はJ-REIT・米国REIT・金ETF・PE ETF・インフラETFまでオルタナティブ投資全領域に対応。為替手数料無料、新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🎯"
        highlight="業界No.1"
      />
    </>
  ),
};
