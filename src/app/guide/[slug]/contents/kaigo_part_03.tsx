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
      <AffiliateCTA
        title="車も持っているなら自動車保険を一括比較"
        description="バイク保険とは別に、自動車保険は満期前の見直しで保険料差が出やすい固定費です。車も所有している場合は、インズウェブで複数社の見積もりをまとめて確認できます。"
        buttonText="自動車保険を無料で一括見積もり"
        href="/go/sbi-insweb-auto"
        icon="🛡️"
        highlight="車所有者向け"
        page="bike-insurance-comparison"
      />
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
            badge: "基本",
          },
          {
            name: "事業所得（青色申告）",
            rank: 2,
            highlight: "本格副業｜税制優遇大",
            features: [
              "継続・安定した売上・利益があること",
              "青色申告特別控除65万円",
              "損失の3年繰越控除",
              "家族への給与を経費計上可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            badge: "本格派",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">副業バレしない税務対策</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>住民税を普通徴収に変更</strong>：確定申告書で「自分で納付」を選択</li>
          <li><strong>副業所得を抑えめに申告</strong>：会社からの住民税通知で気づかれやすい</li>
          <li><strong>SNS等での公開は慎重に</strong>：実名・顔出しは会社関係者に見られるリスク</li>
          <li><strong>本業との競合避け</strong>：同業界・競合他社との取引を避ける</li>
          <li><strong>会社の副業規定を確認</strong>：禁止ならトラブル回避</li>
        </ol>
      </section>
      <AffiliateCTA
        title="副業の税務はfreee会計で自動化｜月1,180円から"
        description="副業の売上・経費・確定申告を自動化。freee会計なら月1,180円から、AI仕訳・e-Tax連携で副業バレ対策の住民税「自分で納付」も1クリック設定。"
        buttonText="freee会計の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
        highlight="30日無料"
      />
    </>
  ),
  "investment-trust-active-vs-index": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">アクティブvsインデックスの20年リターン差</h2>
        <p>
          アクティブ投信（プロが銘柄選定、信託報酬1〜2%）とインデックス投信（指数連動、信託報酬0.05〜0.2%）の20年リターン差は、信託報酬の複利効果で大きな差に。月3万円・20年積立で信託報酬1.5%差があれば、最終資産で300〜500万円の差が出ます。
        </p>
      </section>
      <ComparisonTableCTA
        title="代表的なアクティブ vs インデックス投信"
        services={[
          {
            name: "eMAXIS Slim 全世界株式（インデックス）",
            rank: 1,
            highlight: "信託報酬0.058%｜業界最安",
            features: [
              "オールカントリー、全世界の株式に分散",
              "信託報酬0.058%と業界最安",
              "過去10年リターン年率10%超",
              "新NISAつみたて枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "インデックスNo.1",
          },
          {
            name: "SBI・V・S&P500インデックス（インデックス）",
            rank: 2,
            highlight: "信託報酬0.09%｜米国集中",
            features: [
              "S&P 500指数連動、米国株式500銘柄",
              "信託報酬0.09%",
              "過去30年年率10%超",
              "SBI証券オリジナル商品",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ひふみプラス（アクティブ）",
            rank: 3,
            highlight: "信託報酬1.078%｜国内株中心",
            features: [
              "日本株中心で運用",
              "過去10年年率8〜12%程度",
              "信託報酬1.078%（インデックスの10倍以上）",
              "運用者のスター性あり",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "セゾン・バンガード・グローバルバランスファンド（アクティブ）",
            rank: 4,
            highlight: "信託報酬0.57%｜バランス型",
            features: [
              "株式50%・債券50%のバランス型",
              "Vanguardファンドを使用",
              "信託報酬0.57%",
              "リスクを抑えた運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">20年積立シミュレーション（月3万円）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>インデックス（信託報酬0.1%・年率7%）：約1,580万円</li>
          <li>アクティブ（信託報酬1.5%・年率7%）：約1,400万円</li>
          <li>信託報酬差0.9%で20年後に約180万円の差</li>
          <li>アクティブが市場平均を上回る確率は10〜20%</li>
          <li>結論：特別な理由がない限りインデックス投信が合理的</li>
        </ul>
      </section>
      <AffiliateCTA
        title="低コストインデックス投信ならSBI証券｜投信取扱No.1"
        description="SBI証券は投資信託取扱2,500本以上、eMAXIS Slim・SBI・V・インデックス等の低コスト投信が豊富。新NISAつみたて枠で月10万円まで積立設定可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📊"
        highlight="業界No.1"
      />
    </>
  ),
  "crowd-funding-donation-trust": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">寄付型クラウドファンディングの仕組み</h2>
        <p>
          寄付型クラウドファンディングは、社会貢献プロジェクト（災害支援・医療・教育等）への資金提供方法。認定NPO法人への寄付なら所得税の寄附金控除（所得税40%控除 or 寄附金特別控除）が受けられ、社会貢献と節税を両立できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="寄付型クラウドファンディングサービス"
        services={[
          {
            name: "READYFOR",
            rank: 1,
            highlight: "日本最大級｜社会貢献型プロジェクト多数",
            features: [
              "日本最大級のクラウドファンディング",
              "社会課題解決プロジェクト豊富",
              "認定NPO法人のプロジェクトで税控除可",
              "災害支援・医療・教育等",
            ],
            href: "https://readyfor.jp/",
            badge: "業界最大手",
          },
          {
            name: "CAMPFIRE",
            rank: 2,
            highlight: "プロジェクト数No.1｜創業期支援にも",
            features: [
              "プロジェクト数No.1",
              "購入型＋寄付型の両方対応",
              "個人発信プロジェクトも多数",
              "クリエイター・起業家支援",
            ],
            href: "https://camp-fire.jp/",
          },
          {
            name: "ふるさとチョイス（GCF）",
            rank: 3,
            highlight: "ふるさと納税×クラファン｜税控除＋返礼品",
            features: [
              "自治体プロジェクトに寄付",
              "ふるさと納税として控除対象",
              "返礼品も受け取れる",
              "地域の具体的な課題解決支援",
            ],
            href: "https://www.furusato-tax.jp/gcf/",
            badge: "税控除",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">寄付の税制優遇</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>認定NPO法人への寄付：所得税の寄附金控除 or 寄附金特別控除（40%）</li>
          <li>公益社団法人・学校法人への寄付：所得税控除</li>
          <li>ふるさと納税：寄付金額-2,000円が翌年の住民税から控除</li>
          <li>寄附金特別控除：所得税率20〜30%より有利なケース多い</li>
          <li>確定申告で寄附金受領証明書を添付</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ふるさと納税でクラファン支援｜楽天ふるさと納税"
        description="楽天ふるさと納税ならSPU最大16倍＋5と0の付く日で最大30%還元。実質2,000円で返礼品＋社会貢献、自治体クラファン型の寄付も対応。"
        buttonText="楽天ふるさと納税を見る"
        href="https://event.rakuten.co.jp/furusato/"
        icon="❤️"
        highlight="SPU最大16倍"
      />
    </>
  ),
  "unemployment-benefits-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">失業給付（雇用保険）の基礎</h2>
        <p>
          雇用保険加入1年以上の会社員は、退職時に失業給付（基本手当）を受給可能。自己都合退職は3ヶ月待機後に受給開始、会社都合は即受給。受給期間90〜330日、月給与の50〜80%の支給で、転職活動期間の生活を守ります。
        </p>
      </section>
      <ComparisonTableCTA
        title="失業給付の受給条件と金額"
        services={[
          {
            name: "自己都合退職",
            rank: 1,
            highlight: "3ヶ月待機＋7日｜受給期間90〜150日",
            features: [
              "3ヶ月の給付制限期間あり",
              "受給期間：雇用保険加入期間10年未満90日・10〜20年120日・20年以上150日",
              "給付率50〜80%（月給の）",
              "ハローワークで求職申込必須",
            ],
            href: "https://www.hellowork.mhlw.go.jp/",
            badge: "通常",
          },
          {
            name: "会社都合退職",
            rank: 2,
            highlight: "即受給｜受給期間90〜330日",
            features: [
              "待機期間7日後に即受給開始",
              "受給期間は自己都合の2倍（〜330日）",
              "給付率50〜80%",
              "国民健康保険・国民年金の軽減あり",
            ],
            href: "https://www.hellowork.mhlw.go.jp/",
            badge: "優遇",
          },
          {
            name: "教育訓練給付金併用",
            rank: 3,
            highlight: "失業給付＋スキルアップの最強組合せ",
            features: [
              "失業給付中に職業訓練校受講",
              "教育訓練給付金で受講料60〜70%補助",
              "訓練延長給付で給付期間延長",
              "ハローワーク経由でのスキル転換",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">失業給付の受給額計算</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>基本手当日額＝賃金日額（退職前6ヶ月の平均日額）×給付率（50〜80%）</li>
          <li>月給30万円→基本手当日額約6,000円→月15〜18万円</li>
          <li>月給50万円→基本手当日額約8,000円（上限）→月20〜24万円</li>
          <li>年齢・賃金水準で給付率変動</li>
          <li>受給総額は最大200〜300万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="失業中のスキルアップに｜SkillHacks"
        description="失業給付受給中は時間に余裕があるので、プログラミング・Webマーケ等のスキル習得に最適。買い切り69,800円のSkillHacksなら失業給付の1ヶ月分で学べます。"
        buttonText="SkillHacksの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM"
        icon="💻"
        highlight="買い切り"
      />
    </>
  ),
  "maternity-leave-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">出産前の家計準備5ポイント</h2>
        <p>
          出産は人生の大きなイベントで、費用は出産前後で合計100〜150万円かかります。出産育児一時金50万円・出産手当金（産休中の月給の2/3）等の公的給付を最大限活用し、不足分は事前貯蓄で備えることで、経済不安なく出産を迎えられます。
        </p>
      </section>
      <ComparisonTableCTA
        title="出産前後の公的給付"
        services={[
          {
            name: "出産育児一時金",
            rank: 1,
            highlight: "50万円｜健康保険から支給",
            features: [
              "2023年4月から50万円に増額",
              "健康保険・国民健康保険から支給",
              "直接支払制度で病院への立替不要",
              "産科医療補償制度対象の病院で出産",
            ],
            href: "https://www.kyoukaikenpo.or.jp/",
            badge: "必須",
          },
          {
            name: "出産手当金",
            rank: 2,
            highlight: "産前42日＋産後56日｜月給の2/3",
            features: [
              "会社員の健康保険加入者のみ",
              "産前42日＋産後56日＝98日間",
              "月給の約2/3を給付",
              "月給30万円なら合計約66万円",
            ],
            href: "https://www.kyoukaikenpo.or.jp/",
          },
          {
            name: "育児休業給付金",
            rank: 3,
            highlight: "育休中｜月給の67%→50%",
            features: [
              "産後〜子1歳（延長2歳まで）",
              "最初180日：月給67%、以降50%",
              "雇用保険から支給、非課税",
              "社会保険料免除との組合せで手取り維持",
            ],
            href: "https://www.mhlw.go.jp/",
          },
          {
            name: "自治体の出産祝金",
            rank: 4,
            highlight: "自治体による｜10〜100万円の差",
            features: [
              "自治体により出産祝金が異なる",
              "移住後の出産で数十万円支給もあり",
              "子の数で増額（第3子100万円等）",
              "事前に自治体HPで確認",
            ],
            href: "https://www.mhlw.go.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">出産準備費用の目安</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>出産費用（病院代）：50〜80万円（出産育児一時金50万円でカバー）</li>
          <li>マタニティ用品：10〜20万円</li>
          <li>ベビー用品：10〜30万円</li>
          <li>出産後の生活費（半年分）：60〜120万円</li>
          <li>合計の事前貯蓄目安：100〜200万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="出産前の保険見直しはFPに｜保険見直しラボ"
        description="出産を機に学資保険不要・生命保険見直し・医療保険追加等、保険ポートフォリオの再設計が必要。FP無料相談で家族構成・収入に合わせた最適プランを提案。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "home-loan-refinancing-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">住宅ローン借換の3条件</h2>
        <p>
          住宅ローン借換は「金利差0.3%以上＋残債1,000万円以上＋残期間10年以上」の3条件が揃えば検討価値あり。諸費用30〜100万円を払っても、総返済額100〜500万円の削減が実現できます。変動金利0.3%台の現在、固定→変動への借換も選択肢です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 住宅ローン借換比較サービス"
        services={[
          {
            name: "モゲチェック",
            rank: 1,
            highlight: "複数銀行一括審査｜無料診断",
            features: [
              "複数銀行の審査を無料で一括比較",
              "金利・諸費用・諸条件を総合判断",
              "借換プロのコンサル付き",
              "業界最大級のユーザー数",
            ],
            href: "/go/mogecheck-refinance",
            badge: "業界最大手",
          },
          {
            name: "住信SBIネット銀行",
            rank: 2,
            highlight: "変動金利0.3%台｜業界最低水準",
            features: [
              "変動金利0.3〜0.5%",
              "保証料・繰上返済手数料無料",
              "団信・疾病保障充実",
              "Web完結で来店不要",
            ],
            href: "https://www.netbk.co.jp/",
          },
          {
            name: "auじぶん銀行",
            rank: 3,
            highlight: "変動0.2〜0.5%｜auユーザー特典",
            features: [
              "変動金利0.2〜0.5%の業界最安級",
              "auユーザーは金利優遇",
              "Web完結",
              "団信・保証料無料",
            ],
            href: "https://www.jibunbank.co.jp/",
          },
          {
            name: "ソニー銀行",
            rank: 4,
            highlight: "変動0.5〜0.7%｜フリーランスも対応",
            features: [
              "変動金利0.5〜0.7%",
              "フリーランス・個人事業主の審査実績",
              "所得金額での審査",
              "最長35年返済",
            ],
            href: "https://moneykit.net/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">借換シミュレーション（残債2,000万円）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>金利1.5%→0.5%（差1%）、残期間20年の場合</li>
          <li>月返済：約97,000円→約88,000円（月9,000円減）</li>
          <li>総返済額：約2,330万円→約2,120万円（210万円減）</li>
          <li>諸費用50万円を差し引いても、約160万円の節約</li>
          <li>浮いた分を新NISAで運用すれば老後資金UP</li>
        </ul>
      </section>
      <AffiliateCTA
        title="住宅ローン借換は一括比較｜モゲチェック"
        description="モゲチェックなら複数銀行の借換条件を無料一括比較。金利差0.5%以上で総返済額100〜500万円の削減を狙える最強の無料ツール。事前審査も代行してくれる。"
        buttonText="モゲチェックの詳細"
        href="/go/mogecheck-refinance"
        icon="🔄"
        highlight="無料診断"
        page="home-loan-refinancing-strategy"
      />
    </>
  ),
  "doctor-asset-building-detailed": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医師の資産形成の3つの柱</h2>
        <p>
          医師（勤務医・開業医）の資産形成は、①税制優遇（iDeCo・小規模企業共済・医療法人化）、②不動産投資（減価償却節税）、③専門家チーム活用（IFA・税理士・弁護士）の3本柱で設計。年収1,500〜3,000万円の医師が年間節税300〜800万円を実現する事例多数です。
        </p>
      </section>
      <ComparisonTableCTA
        title="医師向け資産形成の優先順位"
        services={[
          {
            name: "iDeCo（企業型DC未加入の勤務医）",
            rank: 1,
            highlight: "月2.3万円｜年約14万円節税",
            features: [
              "月2.3万円×12＝年27.6万円の所得控除",
              "税率50%（住民税込）なら年14万円節税",
              "運用益も非課税",
              "SBI・楽天証券で手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "最優先",
          },
          {
            name: "小規模企業共済（開業医）",
            rank: 2,
            highlight: "月7万円｜年約40万円節税",
            features: [
              "月7万円×12＝年84万円の所得控除",
              "税率50%なら年42万円節税",
              "退職所得として受取で二重節税",
              "個人医院の開業医が対象",
            ],
            href: "https://www.smrj.go.jp/kyosai/skyosai/",
          },
          {
            name: "不動産投資（区分マンション）",
            rank: 3,
            highlight: "減価償却節税｜年50〜150万円節税",
            features: [
              "減価償却費で会計上の赤字を作り損益通算",
              "年収2,000万円で節税効果最大",
              "モゲチェック等で物件・ローン比較",
              "2〜3戸保有で年100〜300万円節税",
            ],
            href: "https://www.mogecheck.jp/",
          },
          {
            name: "医療法人化（開業医）",
            rank: 4,
            highlight: "所得分散＋経費拡大で節税500万円超",
            features: [
              "年間医業収入5,000万円超で検討",
              "役員報酬分散（家族役員に）",
              "経費範囲拡大（生命保険・退職金）",
              "設立費用100〜300万円、税理士必須",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "新NISA（年360万円）",
            rank: 5,
            highlight: "運用益非課税｜長期複利で大差",
            features: [
              "年360万円×5年で生涯枠1,800万円",
              "米国ETF（VTI/VOO/VYM）＋全世界株式",
              "20年運用で元本2.5〜3倍に",
              "SBI証券のクレカ積立も活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">勤務医 vs 開業医の資産形成比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>勤務医（年収1,500〜2,500万円）</strong>：iDeCo＋新NISA＋不動産2〜3戸で年節税100〜200万円</li>
          <li><strong>開業医（年収3,000〜5,000万円）</strong>：上記＋小規模企業共済＋医療法人化で年節税500〜1,000万円</li>
          <li><strong>副業可能な勤務医</strong>：産業医・外勤・著作権等で年収＋300〜500万円</li>
          <li><strong>退職後</strong>：退職所得控除を最大活用、iDeCoも退職金扱いで有利</li>
          <li><strong>相続対策</strong>：生命保険の非課税枠＋家族信託で円滑な承継</li>
        </ul>
      </section>
      <AffiliateCTA
        title="医師専門の税理士を無料紹介｜税理士ドットコム"
        description="医師の税務は極めて複雑。税理士ドットコムで医療法人・開業医専門税理士を無料紹介、年間節税500〜1,000万円の事例多数。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="⚕️"
        highlight="紹介料無料"
      />
    </>
  ),
  "public-servant-money-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">公務員の資産形成のコツ</h2>
        <p>
          公務員は原則副業禁止ですが、①株式・投資信託投資、②不動産投資（5棟10室未満）、③執筆・講演、④家業の手伝い、⑤許可制の専門資格活用等は可能。安定した給与＋共済年金＋退職金＋iDeCo/NISAで、退職時3,000万円超の資産構築が現実的です。
        </p>
      </section>
      <ComparisonTableCTA
        title="公務員が活用できる資産形成5手段"
        services={[
          {
            name: "iDeCo（月1.2万円）",
            rank: 1,
            highlight: "全額所得控除｜運用益非課税",
            features: [
              "公務員の上限は月1.2万円（年14.4万円）",
              "税率30%なら年約4.3万円節税",
              "SBI・楽天証券で手数料無料",
              "退職後の年金代替資金",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
            badge: "最優先",
          },
          {
            name: "新NISA（年360万円）",
            rank: 2,
            highlight: "運用益非課税｜副業禁止でも可",
            features: [
              "株式・投信の運用は副業にあたらず",
              "年360万円の枠をフル活用",
              "米国ETF・インデックス投信中心",
              "SBI証券のクレカ積立で還元",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "不動産投資（5棟10室未満）",
            rank: 3,
            highlight: "事業的規模未満なら副業に当たらず",
            features: [
              "5棟10室未満の小規模不動産投資は可能",
              "区分マンション1〜4戸＋戸建て等",
              "相続による承継も可",
              "事前に職場の服務規程で確認",
            ],
            href: "https://www.mogecheck.jp/",
          },
          {
            name: "執筆・講演",
            rank: 4,
            highlight: "職務経験を活かした副収入",
            features: [
              "学術論文・専門書・講演等は許可制で可能",
              "職務に関連する内容で上長許可",
              "年間数十万円の副収入",
              "学校教員・研究者・技術系公務員に多い",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "共済年金＋退職金",
            rank: 5,
            highlight: "公務員の最大の資産",
            features: [
              "国家公務員退職手当：勤続35年で約2,200万円",
              "地方公務員：類似水準",
              "共済年金（厚生年金相当）で月20〜25万円",
              "iDeCo・NISA併用で老後3,000万円超",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">公務員のNG副業一覧</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>他企業への労働（アルバイト・パート）</li>
          <li>ネット通販・物販（事業的規模）</li>
          <li>YouTuber・ブロガーでの広告収入（営利活動）</li>
          <li>ネットワークビジネス（MLM）</li>
          <li>フリーランス・個人事業主としての活動</li>
        </ul>
      </section>
      <AffiliateCTA
        title="公務員でもOK｜楽天証券で新NISA開始"
        description="公務員の副業禁止規則でも、株式・投信の運用は可能。楽天証券なら楽天カード積立で1%還元、新NISAで年360万円までの非課税投資が可能。"
        buttonText="楽天証券 新NISAを見る"
        href="https://www.rakuten-sec.co.jp/web/nisa/"
        icon="🏛️"
        highlight="副業禁止でもOK"
      />
    </>
  ),
  "dual-income-family-high-income": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">世帯年収2,000万円超の家計戦略</h2>
        <p>
          世帯年収2,000〜3,000万円の共働き高収入夫婦は、所得税率40〜45%の高税率ゾーンで苦しむケース多。ただし、①所得分散（夫婦それぞれフル活用）、②法人化、③不動産投資、④IFA活用、⑤相続対策の5本柱で年間節税200〜500万円が実現します。
        </p>
      </section>
      <ComparisonTableCTA
        title="高収入共働き夫婦の節税5大戦略"
        services={[
          {
            name: "新NISA 夫婦それぞれフル活用",
            rank: 1,
            highlight: "世帯で年720万円の非課税枠",
            features: [
              "夫婦別口座で各年360万円×2＝720万円",
              "生涯で3,600万円の非課税枠",
              "米国ETF・全世界株式でコア運用",
              "SBI証券・楽天証券のクレカ積立で還元も",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最優先",
          },
          {
            name: "iDeCo 夫婦それぞれフル",
            rank: 2,
            highlight: "所得控除＋運用益非課税",
            features: [
              "夫婦とも月2.3万円（会社員）＝世帯年55万円",
              "世帯年収2,500万円なら年節税25〜30万円",
              "運用益も非課税で20年複利",
              "受取時の退職所得控除活用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "不動産投資（2〜5戸）",
            rank: 3,
            highlight: "減価償却で年100〜300万円節税",
            features: [
              "夫名義・妻名義で分散購入",
              "高所得者は減価償却効果最大化",
              "モゲチェックでローン金利比較",
              "家族信託で相続対策も",
            ],
            href: "https://www.mogecheck.jp/",
          },
          {
            name: "法人化（不動産管理法人）",
            rank: 4,
            highlight: "所得分散＋経費拡大",
            features: [
              "不動産保有が多い世帯向け",
              "配偶者・親族を役員にして所得分散",
              "生命保険・退職金を経費計上",
              "年節税100〜300万円",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
          },
          {
            name: "IFA活用（資産1億円超）",
            rank: 5,
            highlight: "中立的な資産運用提案",
            features: [
              "マネックスONE・GAIA等のIFA",
              "海外資産・私募ファンドへのアクセス",
              "資産1億円超で検討価値",
              "相続対策も一元化",
            ],
            href: "https://www.monex.co.jp/info/home.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高収入共働き世帯の家計管理</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>家計管理は「収入比例型」がベスト（収入比で家計費を按分）</li>
          <li>個人の自由支出を月20〜30万円確保（心理的健全性）</li>
          <li>夫婦合わせて月50万円は強制投資（新NISA＋iDeCo＋不動産）</li>
          <li>生命保険は収入保障型でシンプルに</li>
          <li>ふるさと納税は世帯合計で年30〜50万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高収入世帯の資産管理もFPに相談｜保険見直しラボ"
        description="世帯年収2,000万円超は所得税・相続税対策が複雑。FP無料相談で家計全体を最適化、保険・投資・相続の一元設計で年数百万円の節税を実現。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="💎"
        highlight="相談料完全無料"
      />
    </>
  ),
  "yen-depreciation-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">円安時代の資産防衛</h2>
        <p>
          2022年からの急速な円安（1ドル=150円台）により、日本円資産だけの購買力は実質30%以上減少。米国株・外貨預金・ゴールドETFを組み合わせて、円安ヘッジポートフォリオを構築することで、円安が続いても資産価値を維持できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="円安ヘッジポートフォリオ（3,000万円モデル）"
        services={[
          {
            name: "米国ETF VTI・VOO（40%＝1,200万円）",
            rank: 1,
            highlight: "ドル建て資産｜長期成長",
            features: [
              "米国株式全体に分散投資",
              "ドル建てなので円安メリット享受",
              "信託報酬0.03%と業界最安",
              "新NISA成長枠で非課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "コア",
          },
          {
            name: "全世界株式 eMAXIS Slim（20%＝600万円）",
            rank: 2,
            highlight: "世界分散｜為替リスク低減",
            features: [
              "全世界の株式に自動分散",
              "日本株も含むため為替ヘッジ効果",
              "信託報酬0.058%",
              "新NISAつみたて枠対応",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ゴールドETF（10%＝300万円）",
            rank: 3,
            highlight: "実物資産｜インフレ対策",
            features: [
              "SPDR ゴールドシェア（1326）",
              "円安・インフレのヘッジ",
              "地政学リスク対策",
              "信託報酬0.4%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "外貨預金（10%＝300万円）",
            rank: 4,
            highlight: "高金利＋為替差益",
            features: [
              "米ドル定期預金で年4〜5%金利",
              "住信SBIネット銀行（為替手数料6銭）",
              "ソニー銀行（キャンペーン4銭）",
              "流動性確保として",
            ],
            href: "https://www.netbk.co.jp/",
          },
          {
            name: "日本株・J-REIT（20%＝600万円）",
            rank: 5,
            highlight: "円建て資産｜配当金",
            features: [
              "日本高配当株（三菱商事・伊藤忠等）",
              "J-REIT（配当利回り4〜5%）",
              "円資産として家計安定",
              "為替リスクなし",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">円安が加速した場合のシナリオ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>1ドル180円：米国ETF・ドル預金の円換算資産が20%増</li>
          <li>1ドル200円：ゴールドETF・海外資産がさらに上昇</li>
          <li>日本円資産のみだと購買力30%以上低下</li>
          <li>ヘッジポートフォリオなら資産価値を維持 or 増加</li>
          <li>インフレ2〜3%×円安が進むほど重要性増</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ドル建て投資の入口｜SBI証券"
        description="SBI証券は米国ETFの為替手数料無料、定期買付設定で円安対策の自動積立が可能。新NISA成長枠で年240万円の非課税投資を最大活用。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💱"
        highlight="為替手数料無料"
      />
    </>
  ),
  "bonus-investment-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ボーナスの黄金ルール「3:3:4」</h2>
        <p>
          ボーナス（夏冬各50〜100万円）の使い方で資産形成のスピードが決まります。「30%投資・30%貯金・40%使う」の3:3:4ルールが王道で、年2回×10年で1,000〜3,000万円の資産構築が可能。新NISA成長枠への一括投資がボーナス活用の最強戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ボーナス活用の優先順位"
        services={[
          {
            name: "新NISA成長投資枠 一括投資",
            rank: 1,
            highlight: "ボーナスの30%｜即時全額投資",
            features: [
              "ボーナス60万円なら18万円を新NISA成長枠へ",
              "米国ETF（VTI/VOO）に一括投入",
              "運用益・配当非課税",
              "年2回のボーナスで計36万円の追加投資",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最優先",
          },
          {
            name: "iDeCo 年末増額拠出",
            rank: 2,
            highlight: "年末ボーナスで月掛金の1年分を一括",
            features: [
              "12月に翌年分をまとめて拠出",
              "所得控除額最大化",
              "税率30%なら年8万円の節税",
              "SBI・楽天証券で手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
          },
          {
            name: "生活防衛資金",
            rank: 3,
            highlight: "月給6ヶ月分｜いざという時の備え",
            features: [
              "貯金30%のうち半分を生活防衛資金に",
              "ネット銀行の普通預金（年0.2〜0.4%）",
              "住信SBI・あおぞら・楽天銀行",
              "目標月給の6ヶ月分まで積み上げ",
            ],
            href: "https://www.netbk.co.jp/",
          },
          {
            name: "ふるさと納税 年内完了",
            rank: 4,
            highlight: "冬ボーナスで年間上限を活用",
            features: [
              "12月末までに年間上限額まで完了",
              "楽天ふるさと納税で最大30%還元",
              "実質2,000円で返礼品獲得",
              "6自治体以内ならワンストップ特例",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
          },
          {
            name: "自己投資・趣味・旅行（40%）",
            rank: 5,
            highlight: "継続モチベーション維持",
            features: [
              "全額を投資するとモチベ低下",
              "自己投資（書籍・セミナー）",
              "趣味・旅行でリフレッシュ",
              "家族との思い出作り",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">10年後の資産シミュレーション（年2回ボーナス）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ボーナス30%投資（年36万円）×10年×年利5%＝約461万円</li>
          <li>ボーナス30%貯金（年36万円）×10年＝360万円</li>
          <li>合計10年後：約821万円</li>
          <li>20年運用なら約1,600万円</li>
          <li>給与分の積立と合算で20年3,000〜5,000万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ボーナス一括投資はSBI証券で｜新NISA成長枠"
        description="SBI証券の新NISA成長枠は年240万円、ボーナスでの一括投資に最適。米国ETF買付で為替手数料無料、運用益・配当も非課税で長期複利を最大化。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "large-assets-management": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">資産5,000万円超の運用戦略</h2>
        <p>
          資産5,000万円〜5億円の富裕層は、通常の新NISAだけでは物足りず、プライベートバンキング・IFA・ファミリーオフィス・海外資産・私募ファンド等、多角的なポートフォリオが必要。相続・事業承継も視野に入れた長期戦略が求められます。
        </p>
      </section>
      <ComparisonTableCTA
        title="富裕層向け資産運用チャネル"
        services={[
          {
            name: "プライベートバンキング（1億円超）",
            rank: 1,
            highlight: "三菱UFJ・三井住友・SMBC信託等",
            features: [
              "最低資産1〜3億円（銀行による）",
              "専属担当者が一元サポート",
              "海外資産・相続対策・不動産まで",
              "年間手数料0.5〜1.5%程度",
            ],
            href: "https://www.smtb.jp/",
            badge: "超富裕層",
          },
          {
            name: "IFA（独立系FA）5,000万〜1億円",
            rank: 2,
            highlight: "中立的な資産運用提案",
            features: [
              "マネックスONE・GAIA等",
              "複数証券会社の商品を横断提案",
              "年間手数料0.5〜1%",
              "長期パートナー関係が築ける",
            ],
            href: "https://www.monex.co.jp/info/home.html",
          },
          {
            name: "ファミリーオフィス（5億円超）",
            rank: 3,
            highlight: "資産管理・相続・教育まで総合",
            features: [
              "個別の家族ごとの専属チーム",
              "資産管理・税務・法務・相続・教育",
              "シングルファミリー型（1家専属）も可",
              "年間手数料0.3〜1%",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "海外プライベートバンク（数億円）",
            rank: 4,
            highlight: "スイス・シンガポールで資産分散",
            features: [
              "UBS・クレディスイス・DBS等",
              "多通貨・多国籍資産管理",
              "相続対策・海外移住との連携",
              "最低資産数億円〜",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "私募ファンド（PEファンド等）",
            rank: 5,
            highlight: "非公開企業への投資",
            features: [
              "未公開株・不動産・ヘッジファンド",
              "最低投資1,000万円〜1億円",
              "期待リターン年8〜15%",
              "流動性低い・5〜10年ロック",
            ],
            href: "https://www.monex.co.jp/info/home.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">資産規模別の推奨ポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>5,000万円</strong>：新NISA＋iDeCo＋IFA活用＋不動産1〜2戸</li>
          <li><strong>1億円</strong>：上記＋IFA経由の海外資産＋不動産3〜5戸</li>
          <li><strong>3億円</strong>：プライベートバンキング＋家族信託＋法人化検討</li>
          <li><strong>5億円超</strong>：ファミリーオフィス＋海外プライベートバンク</li>
          <li><strong>10億円超</strong>：シングルファミリーオフィス＋PEファンド</li>
        </ul>
      </section>
      <AffiliateCTA
        title="資産1億円超の相談はIFAで｜マネックスONE"
        description="マネックスONEは富裕層向けIFAサービスの代表格。複数証券会社の商品横断提案、海外資産・相続・事業承継まで一元サポート、年間手数料0.5〜1%で長期パートナーに。"
        buttonText="マネックスONEの詳細"
        href="https://www.monex.co.jp/info/home.html"
        icon="🏆"
        highlight="富裕層特化"
      />
    </>
  ),
  "diamond-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ダイヤモンド投資の基礎</h2>
        <p>
          ダイヤモンド投資（投資ダイヤ）は、GIA鑑定書付きの一定グレード以上のダイヤモンドを購入し、価格上昇で利益を得る投資手法。現物資産としてインフレヘッジ機能があり、ポートフォリオの5〜10%程度の分散投資として使われます。ただし流動性・鑑定リスクがあり、上級者向けです。
        </p>
      </section>
      <ComparisonTableCTA
        title="ダイヤモンド投資のグレード基準"
        services={[
          {
            name: "投資グレード（1ct以上）",
            rank: 1,
            highlight: "最低100万円〜｜流動性あり",
            features: [
              "1カラット以上のダイヤモンド",
              "GIA鑑定書付き（Dカラー・IF〜VVSクラリティ）",
              "100万〜1,000万円のレンジ",
              "海外オークションで取引可能",
            ],
            href: "https://nanboya.com/",
            badge: "本格投資",
          },
          {
            name: "宝飾グレード（0.5〜1ct）",
            rank: 2,
            highlight: "30〜100万円｜宝飾品兼用",
            features: [
              "0.5〜1カラットの宝飾品グレード",
              "Fカラー以上・VSクラリティ以上",
              "30〜100万円",
              "結婚指輪等の宝飾品としても活用",
            ],
            href: "https://nanboya.com/",
          },
          {
            name: "ハイエンド投資（3ct以上）",
            rank: 3,
            highlight: "1,000万円超｜世界オークション",
            features: [
              "3カラット以上の希少ダイヤ",
              "ファンシーカラー（ピンク・ブルー）は特に高価",
              "1,000万〜1億円超",
              "Sotheby's・Christie'sオークションで取引",
            ],
            href: "https://nanboya.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ダイヤモンド投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>流動性が低い（売却に時間がかかる）</li>
          <li>購入価格と買取価格の差が大きい（数十%）</li>
          <li>GIA以外の鑑定書は信頼性低い</li>
          <li>偽物・処理済ダイヤ（レーザー処理等）に注意</li>
          <li>ポートフォリオの5〜10%以内が適正</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ダイヤの査定・売却は専門業者で｜なんぼや"
        description="なんぼやは全国100店舗超、ダイヤモンドの査定・買取に強い業界大手。GIA鑑定書付きダイヤを適正価格で査定、売却・現金化がスムーズ。"
        buttonText="なんぼやの詳細"
        href="https://nanboya.com/"
        icon="💍"
        highlight="業界大手"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ダイヤ投資が向いている人</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>資産3,000万円超の余裕資金がある</li>
          <li>宝飾品への知識・興味がある</li>
          <li>長期保有（5〜20年）の心構えがある</li>
          <li>インフレ・通貨下落対策としての位置づけ</li>
          <li>相続財産としての価値も活用したい</li>
        </ul>
      </section>
    </>
  ),
  "luxury-watch-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高級時計投資の概要</h2>
        <p>
          高級時計投資は、ロレックス・パテックフィリップ・オーデマピゲ等の投資グレード時計を購入し、価格上昇で利益を得る投資手法。人気モデル（ロレックス デイトナ・パテック ノーチラス等）は定価の2〜5倍のプレミアム価格で取引され、年10〜30%のリターンも可能。ただし相場変動と偽物リスクに注意。
        </p>
      </section>
      <ComparisonTableCTA
        title="投資価値のある高級時計ブランド"
        services={[
          {
            name: "ロレックス（Rolex）",
            rank: 1,
            highlight: "デイトナ・サブマリーナー｜投資時計No.1",
            features: [
              "デイトナ：定価170万円→プレミア400〜600万円",
              "サブマリーナー・GMTマスターも人気",
              "世界中で流動性高く、売却しやすい",
              "定価購入は抽選・長い順番待ち",
            ],
            href: "https://nanboya.com/",
            badge: "王道",
          },
          {
            name: "パテックフィリップ",
            rank: 2,
            highlight: "ノーチラス5711｜定価300万→1,500万円",
            features: [
              "ノーチラス・アクアノート等のスポーツモデル",
              "ヴィンテージ・コンプリケーションは数千万〜",
              "世界三大時計メーカーの最高峰",
              "オークションで取引が活発",
            ],
            href: "https://nanboya.com/",
          },
          {
            name: "オーデマピゲ",
            rank: 3,
            highlight: "ロイヤルオーク｜定価400万→800万円超",
            features: [
              "ロイヤルオーク・オフショア系が人気",
              "スポーツラグジュアリーの代表",
              "プレミア倍率1.5〜3倍",
              "少ない生産量で希少性維持",
            ],
            href: "https://nanboya.com/",
          },
          {
            name: "ブランパン・ヴァシュロン",
            rank: 4,
            highlight: "コレクターズアイテム｜長期値上がり期待",
            features: [
              "機械式時計の老舗ブランド",
              "シリーズ限定品は資産性高い",
              "市場流通が少なく相場が安定",
              "50〜300万円の価格帯",
            ],
            href: "https://nanboya.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">高級時計投資の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>偽物リスク大（ロレックスは世界的に偽物最多）</li>
          <li>ボックス・保証書・余コマ保管必須（査定額15〜20%差）</li>
          <li>定価購入は抽選・長い順番待ち（2〜5年）</li>
          <li>プレミア価格で購入するなら信頼できる業者選び</li>
          <li>売却時の税金：5年超保有で譲渡所得の半額課税</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高級時計の売却・査定は｜なんぼや・ブランドオフ"
        description="高級時計の売却なら、なんぼや（全国100店舗超）・ブランドオフ（国内60店舗＋海外）等の専門店が高価買取。複数業者で相見積もり、最高値で売却するのが鉄則。"
        buttonText="なんぼやの詳細"
        href="https://nanboya.com/"
        icon="⌚"
        highlight="業界大手"
      />
    </>
  ),
  "wine-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ワイン投資（ファインワイン）の基礎</h2>
        <p>
          ファインワイン投資は、ボルドー五大シャトー（ラフィット・ムートン・ラトゥール・マルゴー・オーブリオン）・ブルゴーニュ（DRC・ルロワ等）・シャンパーニュの高級ワインを購入・熟成・売却する投資。Liv-ex指数によると過去20年で年率約10%のリターンを記録しています。
        </p>
      </section>
      <ComparisonTableCTA
        title="投資価値のあるワイン"
        services={[
          {
            name: "ボルドー五大シャトー",
            rank: 1,
            highlight: "ラフィット・ムートン等｜流動性高い",
            features: [
              "ラフィット・ロートシルト、ムートン・ロートシルト等",
              "1本10〜100万円の価格帯",
              "世界的な流動性、オークション取引活発",
              "ヴィンテージで数倍の価格差",
            ],
            href: "https://nanboya.com/",
            badge: "王道",
          },
          {
            name: "ブルゴーニュ（DRC・ルロワ）",
            rank: 2,
            highlight: "DRC ロマネ・コンティ｜1本300万円超",
            features: [
              "DRC（ドメーヌ・ド・ラ・ロマネコンティ）ロマネ・コンティ",
              "1本200〜1,000万円のプレミアム",
              "生産量極少で希少性最高",
              "上級コレクター向け",
            ],
            href: "https://nanboya.com/",
          },
          {
            name: "シャンパーニュ（クリスタル・ドン・ペリニヨン）",
            rank: 3,
            highlight: "飲みやすく投資性も高い",
            features: [
              "クリスタル・ドン・ペリニヨン P3等",
              "1本3〜30万円",
              "初心者にもアクセスしやすい",
              "祝い事需要で安定的な需要",
            ],
            href: "https://nanboya.com/",
          },
          {
            name: "カリフォルニア・ナパバレー",
            rank: 4,
            highlight: "新世界ワイン｜成長性期待",
            features: [
              "スクリーミング・イーグル、ハーラン・エステート等",
              "1本30〜300万円",
              "米国投資家の需要急増",
              "ボルドーよりも流通量少ない",
            ],
            href: "https://nanboya.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ワイン投資のリスクと注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>保管条件（13〜18℃・湿度70%）が超重要、環境崩壊で価値ゼロ</li>
          <li>セラー保管料：年1本500〜2,000円（ワインセラー業者）</li>
          <li>偽物リスク（高級ボトルほど偽物が多い）</li>
          <li>流動性は低い（売却まで数ヶ月）</li>
          <li>日本では酒類販売免許が必要（転売目的）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ワイン投資の基礎を学ぶ｜ファイナンシャルアカデミー"
        description="実物資産投資の入門なら、ファイナンシャルアカデミーの無料体験セミナーで体系的に学習。株式・不動産・ワイン等、多角的な投資の基礎を理解。"
        buttonText="ファイナンシャルアカデミー無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="📚"
        highlight="無料体験あり"
      />
    </>
  ),
  "cryptocurrency-tax-advanced": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">仮想通貨・NFTの複雑な税務</h2>
        <p>
          仮想通貨・NFT取引の税務は極めて複雑。売却益だけでなく、DeFi報酬・イールドファーミング・エアドロップ・NFTマーケット手数料（ガス代）まで損益計算に影響。雑所得で総合課税（最大55%）、損失の繰越不可、厳密な取引記録が必須です。
        </p>
      </section>
      <ComparisonTableCTA
        title="仮想通貨取引の所得区分"
        services={[
          {
            name: "売買益・利益確定",
            rank: 1,
            highlight: "雑所得｜総合課税（最大55%）",
            features: [
              "購入価格と売却価格の差額が雑所得",
              "他の所得と合算して累進課税",
              "年間20万円超なら確定申告必須",
              "損失の翌年繰越不可",
            ],
            href: "https://www.zeiri4.com/",
            badge: "基本",
          },
          {
            name: "DeFi報酬・ステーキング",
            rank: 2,
            highlight: "受取時の時価で所得計上",
            features: [
              "ステーキング報酬受取時の時価で雑所得",
              "受取後の値動きは別途譲渡所得",
              "エアドロップも受取時の時価で課税",
              "ガス代は必要経費として控除可",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "NFT売買",
            rank: 3,
            highlight: "雑所得 or 譲渡所得",
            features: [
              "投資目的なら雑所得（総合課税）",
              "趣味の範囲なら譲渡所得（50万円控除）",
              "個人クリエイターの販売は事業所得も",
              "判断基準は頻度・規模",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "海外取引所利用",
            rank: 4,
            highlight: "取引記録管理が極めて重要",
            features: [
              "Binance・Bybit等の海外取引所も同様に課税",
              "取引履歴を詳細に保管（7年）",
              "税務調査対象になりやすい",
              "Cryptact・Tax Pro等の専門ツール活用必須",
            ],
            href: "https://www.zeiri4.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">確定申告の必要書類</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>各取引所の取引履歴（CSV）</li>
          <li>MetaMask等のウォレット取引履歴</li>
          <li>Cryptact・Tax Pro等での損益計算書</li>
          <li>Gas代・手数料の記録</li>
          <li>ステーキング・エアドロップ受取時の時価記録</li>
        </ul>
      </section>
      <AffiliateCTA
        title="仮想通貨の税務は専門家に｜税理士ドットコム"
        description="仮想通貨・NFTの税務は極めて複雑。税理士ドットコムで仮想通貨専門税理士を無料紹介、適切な申告で税務調査リスクを回避。Cryptact等のツール活用もサポート。"
        buttonText="税理士ドットコムで無料相談"
        href="https://www.zeiri4.com/"
        icon="📐"
        highlight="紹介料無料"
      />
    </>
  ),
  "corporate-housing-welfare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">法人社宅制度の仕組み</h2>
        <p>
          法人が賃貸物件を借りて社員（役員含む）に社宅として貸す制度。家賃の50〜90%を会社経費化でき、社員の手取り増＋法人の節税という二重のメリットがあります。1人法人でも活用可能で、年間100〜300万円の節税効果が期待できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="社宅制度の種類と節税効果"
        services={[
          {
            name: "役員社宅（小規模住宅）",
            rank: 1,
            highlight: "家賃の50%が経費｜年間数百万円節税",
            features: [
              "延床132㎡以下の役員社宅",
              "家賃の50%を個人負担、残り50%を会社経費",
              "家賃20万円なら月10万円を会社経費化",
              "1人法人でも活用可能",
            ],
            href: "https://www.zeiri4.com/",
            badge: "王道",
          },
          {
            name: "役員社宅（一般住宅）",
            rank: 2,
            highlight: "家賃の50%＋専有部分経費",
            features: [
              "延床132㎡超の役員社宅",
              "国税庁計算式で個人負担額算出",
              "通常家賃の10〜30%の個人負担でOK",
              "節税効果さらに大きい",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "従業員社宅",
            rank: 3,
            highlight: "従業員の住居費を会社が補助",
            features: [
              "社員の月給の20%以下なら個人負担",
              "会社経費として全額計上",
              "社員福利厚生で採用競争力UP",
              "給与でないため社会保険料対象外",
            ],
            href: "https://www.zeiri4.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">社宅制度活用の5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>法人契約で賃貸物件を借りる（本人確認書類のみ）</li>
          <li>法人と社員（役員）で社宅使用契約を締結</li>
          <li>国税庁計算式で個人負担額を算出</li>
          <li>給与から個人負担分を天引き</li>
          <li>残額を法人経費として処理</li>
        </ol>
      </section>
      <AffiliateCTA
        title="法人設立＋社宅制度で節税｜freee会社設立"
        description="社宅制度活用には法人化が必要。freee会社設立なら設立費用0円（印紙代4万円無料）、freee会計との連携で社宅制度の仕訳も自動化。"
        buttonText="freee会社設立の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="🏠"
        highlight="設立費用0円"
      />
    </>
  ),
  "education-fund-gift-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">教育資金一括贈与の特例</h2>
        <p>
          祖父母（直系尊属）から孫（30歳未満）への教育資金を、信託銀行を通じて1,500万円まで非課税で一括贈与できる制度。2026年3月末までの期限付き制度で、相続財産の大幅圧縮＋孫の教育費確保を両立できる相続対策の王道です。
        </p>
      </section>
      <ComparisonTableCTA
        title="教育資金贈与 vs 通常暦年贈与"
        services={[
          {
            name: "教育資金一括贈与の特例",
            rank: 1,
            highlight: "1,500万円｜非課税｜相続財産圧縮",
            features: [
              "1人につき1,500万円まで非課税",
              "学校関係500万円・塾等1,000万円",
              "30歳までに使い切れば残額も非課税",
              "信託銀行（三井住友信託等）経由で手続き",
            ],
            href: "https://www.smtb.jp/",
            badge: "大型贈与",
          },
          {
            name: "暦年贈与（年110万円）",
            rank: 2,
            highlight: "シンプル｜毎年繰返し可能",
            features: [
              "年110万円までの贈与は非課税",
              "10年で1,100万円を無税移転",
              "相続開始前7年以内は相続財産加算",
              "使途自由",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "結婚・子育て資金贈与の特例",
            rank: 3,
            highlight: "1,000万円｜結婚・育児資金に限定",
            features: [
              "20〜50歳の子・孫に1,000万円まで非課税",
              "結婚関連300万円、その他700万円",
              "2025年3月末まで（延長の可能性）",
              "用途限定",
            ],
            href: "https://www.smtb.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">教育資金贈与の活用ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>信託銀行（三井住友信託・三菱UFJ信託等）に口座開設</li>
          <li>祖父母が孫の口座に一括入金（最大1,500万円）</li>
          <li>孫の教育費支払い後、領収書を信託銀行に提出</li>
          <li>信託銀行が口座から教育費分を引き出し</li>
          <li>30歳到達時に残額は贈与税課税（または残額ゼロなら終了）</li>
        </ol>
      </section>
      <AffiliateCTA
        title="相続税対策もFPに相談｜保険見直しラボ"
        description="教育資金贈与と合わせて、生命保険の非課税枠・家族信託・遺言書等の相続対策をFP無料相談で一元設計。年間数百万〜数千万円の節税効果を実現。"
        buttonText="保険見直しラボに無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE"
        icon="🛡️"
        highlight="相談料完全無料"
      />
    </>
  ),
  "hedge-fund-japan-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本人個人投資家とヘッジファンド</h2>
        <p>
          ヘッジファンドは機関投資家中心の投資商品ですが、日本でも富裕層個人向けのヘッジファンド投資が拡大。スマートエクイティ・フォートレスインベストメント等の国内対応ファンドは、最低投資1,000万円〜3,000万円から参入可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="日本人個人が投資できるヘッジファンド"
        services={[
          {
            name: "スマートエクイティ",
            rank: 1,
            highlight: "最低投資1,000万円｜日本人向け",
            features: [
              "日本人個人投資家向けヘッジファンド",
              "最低投資1,000万円〜",
              "想定利回り年5〜15%",
              "四半期ごとの解約機会",
            ],
            href: "https://www.monex.co.jp/info/home.html",
            badge: "参入しやすい",
          },
          {
            name: "フォートレス インベストメント",
            rank: 2,
            highlight: "世界的ヘッジファンド｜IFA経由",
            features: [
              "ソフトバンク傘下の世界大手",
              "最低投資3,000万円〜",
              "複数戦略（イベントドリブン・マクロ等）",
              "IFA経由でのアクセス",
            ],
            href: "https://www.monex.co.jp/info/home.html",
          },
          {
            name: "ヘッジファンド証券",
            rank: 3,
            highlight: "日本のヘッジファンド専門",
            features: [
              "日本人向けヘッジファンド運用会社",
              "最低投資1,000万円〜",
              "日本株ロングショート戦略",
              "日本語サポート完備",
            ],
            href: "https://www.monex.co.jp/info/home.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ヘッジファンドの特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>相場環境に左右されない絶対収益を目指す</li>
          <li>手数料は2%（管理報酬）+20%（成功報酬）が一般的</li>
          <li>流動性低い（四半期・半期単位の解約）</li>
          <li>運用成績の変動大きい</li>
          <li>最低投資1,000〜3,000万円</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ヘッジファンド投資はIFA経由｜マネックスONE"
        description="マネックスONEのIFAサービスで、ヘッジファンド投資へのアクセスを提供。資産3,000万円超の個人投資家向け、中立的な運用相談＋複数ファンド比較。"
        buttonText="マネックスONEの詳細"
        href="https://www.monex.co.jp/info/home.html"
        icon="🎯"
        highlight="富裕層特化"
      />
    </>
  ),
  "foreign-tax-credit-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株配当の二重課税を取り戻す</h2>
        <p>
          米国株・米国ETFの配当金は、米国で源泉徴収された後、日本でも課税対象になります。外国税額控除は、この二重課税を一定範囲で調整する制度です。ただし、控除できる金額は所得、国内外の所得割合、NISA口座か課税口座かによって変わるため、申告前に国税庁や証券会社の資料を確認する必要があります。
        </p>
      </section>
      <DecisionBox
        title="結論：外国税額控除は「課税口座の米国配当」が主な確認対象"
        points={[
          "新NISA口座の配当は国内で非課税扱いのため、外国税額控除の扱いが課税口座と異なる。",
          "特定口座年間取引報告書、配当金支払通知書、証券会社の外国税額の記載を確認する。",
          "還付額は一律ではないため、e-Tax入力前に国税庁の説明と証券会社資料を照合する。",
        ]}
        note="本記事は一般的な確認手順の整理であり、個別の税務判断は税務署または税理士へ確認してください。"
      />
      <ComparisonTableCTA
        title="外国税額控除の計算例"
        services={[
          {
            name: "配当10万円のケース",
            rank: 1,
            highlight: "約7,000円の還付",
            features: [
              "米国配当10万円",
              "米国源泉税10,000円（10%）",
              "日本の税金20,315円",
              "外国税額控除で約7,000円還付",
            ],
            href: "https://www.zeiri4.com/",
            badge: "基本",
          },
          {
            name: "配当100万円のケース",
            rank: 2,
            highlight: "約7〜8万円の還付",
            features: [
              "米国配当100万円",
              "米国源泉税100,000円",
              "日本の税金203,150円",
              "外国税額控除で約70,000〜80,000円還付",
            ],
            href: "https://www.zeiri4.com/",
          },
          {
            name: "配当500万円のケース",
            rank: 3,
            highlight: "約35〜40万円の還付",
            features: [
              "米国配当500万円",
              "米国源泉税500,000円",
              "外国税額控除で約350,000〜400,000円還付",
              "所得状況によって控除上限が変わる",
            ],
            href: "https://www.zeiri4.com/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">確定申告の手順</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>証券会社から「外国所得税額及び外国所得税額の内訳」を取得</li>
          <li>確定申告書Bの「外国税額控除」欄に記載</li>
          <li>「外国税額控除に関する明細書」を添付</li>
          <li>所得税・復興特別所得税・住民税の3段階で控除適用</li>
          <li>国税庁のe-Taxで電子申告も可能</li>
        </ol>
      </section>
      <AffiliateCTA
        title="外国税額控除の計算も自動化｜freee会計"
        description="米国株投資の税務処理もfreee会計で効率化。証券口座の自動連携で配当・為替損益を自動仕訳、外国税額控除の計算もサポート。"
        buttonText="freee会計の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="🌐"
        highlight="30日無料"
      />
    </>
  ),
  "hoken-mammoth-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険マンモスのサービス概要</h2>
        <p>
          保険マンモスは、大手FP法人が運営する無料保険相談サービス。全国対応で47都道府県にFPが在籍し、30社以上の保険会社から中立的に最適プランを提案。相談料完全無料で、強引な勧誘もなく、ユーザーが納得できる保険選びをサポートします。
        </p>
      </section>
      <ComparisonTableCTA
        title="保険マンモスの5つの特徴"
        services={[
          {
            name: "全国対応・47都道府県のFP",
            rank: 1,
            highlight: "自宅・カフェ・オンラインで相談可",
            features: [
              "47都道府県すべてにFP在籍",
              "対面・訪問・オンラインで相談可",
              "土日祝も対応",
              "相談料完全無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "業界大手",
          },
          {
            name: "取扱保険会社30社以上",
            rank: 2,
            highlight: "中立的な比較提案",
            features: [
              "大手30社以上の保険会社を取扱",
              "生命保険・医療保険・ガン保険・学資保険",
              "ユーザーニーズに最適な商品を提案",
              "特定保険会社に偏らない中立提案",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
          {
            name: "強引な勧誘なしの安心感",
            rank: 3,
            highlight: "イエローカード制で管理",
            features: [
              "強引な勧誘は厳禁（イエローカード制）",
              "コンプライアンス教育徹底",
              "納得できなければ契約不要",
              "FPの変更も可能",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">保険マンモス vs 他サービス比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>保険マンモス</strong>：全国47都道府県、30社以上、相談料無料</li>
          <li><strong>保険見直しラボ</strong>：30社以上、業界経験平均12年超のベテランFP</li>
          <li><strong>マネプロ</strong>：IFA所属、保険＋資産運用も総合相談</li>
          <li><strong>ほけんのトータルプロフェッショナル</strong>：ハウスメーカー提携で住宅ローン連携強い</li>
          <li><strong>リクルートほけん比較</strong>：全国350店舗、リクルートID連携</li>
        </ul>
      </section>
      <AffiliateCTA
        title="顧客満足度95%の保険相談なら保険マンモス"
        description="保険の見直し・新規加入なら、保険マンモスの無料相談が最速。47都道府県のFPが対面・オンライン対応、30社以上から最適プラン提案。イエローカード制で強引勧誘なし。"
        buttonText="無料保険相談の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="🦣"
        highlight="新規面談11,278円報酬"
      />
    </>
  ),
  "matsui-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">松井証券の特徴</h2>
        <p>
          松井証券は創業100年超の老舗ネット証券。25歳以下の日本株売買手数料無料、投信の信託報酬一部をポイントとして還元する独自サービス、NISA口座の取扱銘柄数の豊富さで差別化。サポート品質の高さでも知られ、初心者から上級者まで幅広く支持されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="松井証券の5大メリット"
        services={[
          {
            name: "25歳以下 日本株手数料無料",
            rank: 1,
            highlight: "若年層に圧倒的有利",
            features: [
              "25歳以下は日本株売買手数料無料",
              "1日の約定代金制限なし",
              "NISA対応",
              "若者に優しい料金体系",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "若年層No.1",
          },
          {
            name: "投信保有で松井ポイント還元",
            rank: 2,
            highlight: "信託報酬の一部を還元",
            features: [
              "投信の信託報酬の一部がポイントとして還元",
              "独自の還元制度",
              "Amazonギフト等に交換可",
              "長期保有で差が大きい",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
          },
          {
            name: "新NISA対応",
            rank: 3,
            highlight: "投信ラインナップ豊富",
            features: [
              "新NISA口座でも日本株売買可",
              "投信取扱1,800本超",
              "eMAXIS Slim・SBI・Vシリーズ対応",
              "クレカ積立は非対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
          },
          {
            name: "手厚いサポート",
            rank: 4,
            highlight: "株の問合せ対応に定評",
            features: [
              "株の相談窓口が手厚い",
              "オリコン顧客満足度上位常連",
              "初心者向けセミナー・教育コンテンツ豊富",
              "電話・メール・チャット対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
          },
          {
            name: "iDeCo手数料業界最安水準",
            rank: 5,
            highlight: "iDeCoも取扱",
            features: [
              "iDeCo運営管理手数料0円",
              "投信ラインナップ充実",
              "40代以降のiDeCoにも最適",
              "サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">松井証券 vs 他ネット証券比較</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>松井証券</strong>：25歳以下手数料無料、投信ポイント還元、サポート充実</li>
          <li><strong>SBI証券</strong>：総合力No.1、クレカ積立1%、IPO業界最多</li>
          <li><strong>楽天証券</strong>：楽天経済圏、楽天カード積立1%</li>
          <li><strong>マネックス証券</strong>：クレカ積立1.1%、米国株取扱4,000銘柄</li>
          <li><strong>選び方</strong>：若者は松井、総合は SBI、楽天ユーザーは楽天、米国株はマネックス</li>
        </ul>
      </section>
      <AffiliateCTA
        title="松井証券で口座開設｜新NISA・iDeCo両対応"
        description="松井証券は25歳以下日本株無料・投信ポイント還元・iDeCo手数料0円の三拍子。老舗100年超の信頼性とネット証券の低コストを両立、初心者〜ベテランまで幅広く支持。"
        buttonText="松井証券の詳細（公式）"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ"
        icon="🌸"
        highlight="新規口座開設1,000円報酬"
      />
    </>
  ),
  "coconala-side-business-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ココナラで月5〜20万円の副収入</h2>
        <p>
          ココナラは日本最大級のスキルマーケット。ライティング・デザイン・動画編集・占い・相談等、自分のスキルを500円〜10万円で販売できます。登録300万人以上のユーザーの中で、月5〜20万円を稼ぐ副業ユーザーも多数。会社員の副業として最短で収益化できるプラットフォームです。
        </p>
      </section>
      <ComparisonTableCTA
        title="ココナラで稼ぎやすいカテゴリTOP5"
        services={[
          {
            name: "ライティング・ブログ執筆",
            rank: 1,
            highlight: "月5〜15万円｜文章スキル活用",
            features: [
              "記事執筆：1記事3,000〜1万円",
              "セールスコピー：1案件1〜5万円",
              "ブログ代行：月1〜5万円/クライアント",
              "ライティング未経験でも始めやすい",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "初心者向き",
          },
          {
            name: "デザイン",
            rank: 2,
            highlight: "月10〜30万円｜スキル次第",
            features: [
              "ロゴ制作：5,000〜5万円",
              "LP制作：3〜20万円",
              "Youtubeサムネ：1件1,000〜5,000円",
              "Canvaレベルから始められる",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "動画編集",
            rank: 3,
            highlight: "月5〜20万円｜YouTube需要",
            features: [
              "YouTube編集：1本3,000〜3万円",
              "TikTok・Instagramリール編集：1本2,000〜1万円",
              "セミナー動画：1本1〜5万円",
              "Premiere Pro・Final Cut Pro習得で高単価",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "占い・心理カウンセリング",
            rank: 4,
            highlight: "月3〜15万円｜独占市場",
            features: [
              "占い：1件500〜5,000円",
              "悩み相談：1時間3,000〜1万円",
              "リピーター獲得で安定収入",
              "資格・専門性があれば単価UP",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
          {
            name: "Web制作・プログラミング",
            rank: 5,
            highlight: "月10〜50万円｜高単価",
            features: [
              "WordPress構築：3〜30万円",
              "コーディング：1ページ1〜5万円",
              "システム開発：10〜100万円",
              "技術スキル必須だが圧倒的に稼げる",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ココナラで月20万円稼ぐ5ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Step1</strong>：スキル棚卸＋出品カテゴリ決定</li>
          <li><strong>Step2</strong>：プロフィール・出品ページ作成（写真・自己紹介・実績）</li>
          <li><strong>Step3</strong>：初回価格を安めに設定、レビュー獲得（最初10件）</li>
          <li><strong>Step4</strong>：レビュー5件＋販売実績10件で価格を50%UP</li>
          <li><strong>Step5</strong>：リピーター獲得＋SNS連携で月20万円超</li>
        </ol>
      </section>
      <AffiliateCTA
        title="ココナラで副業デビュー｜登録無料"
        description="日本最大級のスキルマーケット。登録300万人超、出品350万件以上で需要が豊富。自分のスキルを500円から販売して、月5〜20万円の副収入を実現可能。無料会員登録して相談することから始められます。"
        buttonText="ココナラ無料会員登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🎯"
        highlight="新規会員登録100円報酬"
      />
    </>
  ),
  "suraraa-online-learning-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">すららの特徴</h2>
        <p>
          すららネットは、不登校児童・発達障害の子供向けに特化したAI学習システム。小学1年生〜高校3年生までの英・数・国・理・社を網羅し、AIが子供の理解度に合わせて問題を自動調整。出席扱いになる自治体も多く、2024年時点で全国1,000校以上の学校で採用されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="すららの3つのメリット"
        services={[
          {
            name: "AI教材で自分のペースで学習",
            rank: 1,
            highlight: "月8,800円〜｜家庭学習を自動化",
            features: [
              "小学1年〜高校3年の全科目カバー",
              "AIが理解度に合わせて問題生成",
              "発達障害・ADHD・アスペルガー対応",
              "月8,800円〜（4教科コース）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "AI特化",
          },
          {
            name: "不登校でも出席扱い",
            rank: 2,
            highlight: "文科省ガイドライン対応",
            features: [
              "全国1,000校以上で出席扱い認定",
              "文部科学省のガイドラインに準拠",
              "学校と連携して証明書発行",
              "進学・進級への影響を最小化",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
          },
          {
            name: "すららコーチが学習サポート",
            rank: 3,
            highlight: "子どもの学習状況を可視化",
            features: [
              "専属すららコーチが学習計画作成",
              "親への学習状況レポート",
              "モチベーション維持のサポート",
              "保護者も安心の伴走体制",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">料金プラン</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>小中コース（3教科：国・数・英）</strong>：月8,800円〜</li>
          <li><strong>小中コース（4教科）</strong>：月9,900円〜</li>
          <li><strong>中高コース（3教科）</strong>：月8,800円〜</li>
          <li><strong>小中高5教科コース</strong>：月10,978円〜</li>
          <li>入会金7,700円〜（4教科コースは11,000円）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="すらら無料体験｜不登校・発達障害の子に"
        description="塾に通わず自宅で学習！自分のペースで学習できる【すらら】は不登校・発達障害児童向けAI学習システム。全国1,000校以上で出席扱い認定、無料体験受講で相性確認可能。"
        buttonText="すらら無料体験の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE"
        icon="🎓"
        highlight="新規受講申込15,385円報酬"
      />
    </>
  ),
  "epos-card-detailed-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">エポスカードの特徴</h2>
        <p>
          エポスカードは年会費永年無料・即日発行・海外旅行保険自動付帯（最大500万円）の3拍子揃った優秀カード。マルイ系列の優待・ゴールドカードへのインビテーション・プラチナステータスへの道筋まで、コスパ最強クラスの1枚です。サブカードとしても、メインカードとしても機能します。
        </p>
      </section>
      <ComparisonTableCTA
        title="エポスカード5大メリット"
        services={[
          {
            name: "年会費永年無料",
            rank: 1,
            highlight: "一生涯無料で維持可能",
            features: [
              "年会費・入会金・更新料すべて無料",
              "保有するだけでコスト0",
              "即日発行（マルイ店頭）",
              "VISAブランドで世界中で使える",
            ],
            href: "https://www.eposcard.co.jp/",
            badge: "コスパNo.1",
          },
          {
            name: "海外旅行保険自動付帯",
            rank: 2,
            highlight: "持ってるだけで最大500万円補償",
            features: [
              "傷害治療200万円・疾病治療270万円",
              "携帯品損害20万円",
              "自動付帯なので利用しなくても適用",
              "年会費無料カードで最高水準",
            ],
            href: "https://www.eposcard.co.jp/",
          },
          {
            name: "マルイ系列優待",
            rank: 3,
            highlight: "マルコとマルオの日は10%OFF",
            features: [
              "マルイ・モディで年4回10%OFF（マルコとマルオの日）",
              "マルイのネット通販でも優待対象",
              "年間20〜50万円マルイ利用なら大きい",
              "優待店舗10,000店以上",
            ],
            href: "https://www.eposcard.co.jp/",
          },
          {
            name: "ゴールドカードへの招待",
            rank: 4,
            highlight: "年50万円利用でインビテーション",
            features: [
              "年間50万円利用でゴールドインビテーション",
              "エポスゴールド年会費永年無料に",
              "年間100万円利用で1万ポイントボーナス",
              "空港ラウンジ無料利用可",
            ],
            href: "https://www.eposcard.co.jp/",
          },
          {
            name: "プラチナカードへの道",
            rank: 5,
            highlight: "ゴールドから招待で年会費20,000円",
            features: [
              "エポスプラチナ年会費20,000円（招待制）",
              "家族カード・プライオリティパス付帯",
              "100万円利用で2万ポイントボーナス",
              "年200万円利用で実質年会費無料",
            ],
            href: "https://www.eposcard.co.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">エポスカード発行の手順</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>エポスカード公式サイトで申込（Web審査3〜5分）</li>
          <li>マルイ店頭で即日発行 or 郵送（約1週間）</li>
          <li>エポスNetに登録、アプリインストール</li>
          <li>年間50万円利用でゴールドインビテーション獲得</li>
          <li>ゴールド→プラチナへのステップアップ</li>
        </ol>
      </section>
      <AffiliateCTA
        title="エポスカード｜年会費無料＋海外旅行保険"
        description="年会費永年無料で海外旅行保険最大500万円付帯、マルイで10%OFF、ゴールド・プラチナへの道もあるコスパ最強1枚。即日発行可能。"
        buttonText="エポスカード申込"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+MMIJE+38L8+BY641"
        icon="💳"
        highlight="年会費永年無料"
      />
    </>
  ),
  "housing-consultation-builder-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ハウスメーカー選びで失敗しない方法</h2>
        <p>
          注文住宅・分譲住宅の購入は、人生最大の買い物の一つ。ハウスメーカー・工務店選びで2,000〜5,000万円の予算を適正に使うには、複数業者の無料相談＋一括比較が必須。タウンライフ家づくり・HOME4U家づくり等のサービスを使えば、最短5分で5〜10社から提案を受けられます。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 ハウスメーカー無料比較サービス"
        services={[
          {
            name: "家づくり相談所",
            rank: 1,
            highlight: "住宅会社がわかる無料相談｜1万人以上利用",
            features: [
              "ハウスメーカー・工務店・建築家を幅広く紹介",
              "住宅のプロが要望ヒアリング→最適な会社を厳選紹介",
              "しつこい営業なし、中立的なアドバイス",
              "資金計画・土地探しもワンストップで相談可",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "後悔しない家づくり",
          },
          {
            name: "タウンライフ家づくり",
            rank: 2,
            highlight: "1,150社以上｜間取りプランも無料作成",
            features: [
              "全国1,150社以上のハウスメーカー・工務店と提携",
              "間取りプラン・見積もり・土地提案を無料作成",
              "3分で一括請求可能",
              "家づくり計画書プレゼント",
            ],
            href: "https://www.town-life.jp/",
            badge: "業界最大手",
          },
          {
            name: "HOME4U家づくり",
            rank: 3,
            highlight: "NTTグループ｜大手ハウスメーカー中心",
            features: [
              "NTTデータ・スマートソーシング運営",
              "大手ハウスメーカー中心の提携",
              "プランニング比較が得意",
              "家づくり計画書プレゼント",
            ],
            href: "https://house.home4u.jp/",
          },
          {
            name: "LIFULL HOME'S",
            rank: 4,
            highlight: "不動産情報大手の信頼感",
            features: [
              "LIFULL HOME'S（不動産大手）運営",
              "ハウスメーカー30社以上",
              "資料請求・展示場予約も対応",
              "住宅ローン試算機能付き",
            ],
            href: "https://house.homes.co.jp/",
          },
          {
            name: "ほけんのトータルプロフェッショナル",
            rank: 5,
            highlight: "FP相談＋ハウスメーカー紹介のセット",
            features: [
              "全国270社以上のハウスメーカー・工務店と提携",
              "FPによる住宅ローン・保険見直しもセット",
              "家計設計から建築まで一元サポート",
              "相談料完全無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ハウスメーカー選びの5つのポイント</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>予算配分</strong>：建物60%・土地30%・諸費用10%の目安</li>
          <li><strong>工法選び</strong>：木造軸組・ツーバイフォー・鉄骨・RCの特徴理解</li>
          <li><strong>アフターサービス</strong>：保証期間（20年・30年・60年）と点検頻度</li>
          <li><strong>住宅ローン審査</strong>：モゲチェック等で事前審査</li>
          <li><strong>省エネ基準対応</strong>：ZEH・長期優良住宅で補助金活用</li>
        </ol>
      </section>
      <AffiliateCTA
        title="家づくりの後悔を無くす！【家づくり相談所】"
        description="ハウスメーカー選びで失敗したくないなら、まず家づくり相談所の無料相談。住宅のプロがあなたの要望を聞き取り、全国のハウスメーカー・工務店・建築家から最適な会社を厳選紹介。しつこい営業一切なし。"
        buttonText="家づくり相談所の無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75"
        icon="🏠"
        highlight="新規無料相談5,000円報酬"
      />
      <AffiliateCTA
        title="住宅ローンも合わせて比較｜モゲチェック"
        description="ハウスメーカー選びと合わせて、住宅ローンも複数銀行で一括比較。モゲチェックなら金利差0.5%で総返済額100〜500万円削減の可能性。"
        buttonText="モゲチェックの詳細"
        href="https://www.mogecheck.jp/"
        icon="💰"
        highlight="無料診断"
      />
      <section>
        <h2 className="text-xl font-bold mb-3">家づくりの補助金・税制優遇</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>住宅ローン減税：年末残高×0.7%を10年間所得税控除</li>
          <li>長期優良住宅：住宅ローン減税の上限UP＋登録免許税減免</li>
          <li>ZEH補助金：55〜100万円</li>
          <li>住宅取得資金贈与の特例：1,000万円まで非課税（父母・祖父母から）</li>
          <li>すまい給付金（2024年以降は別制度へ移行）</li>
        </ul>
      </section>
    </>
  ),
  "japanese-stock-ranking-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">2026年 注目の日本株10選</h2>
        <p>
          日本株は新NISA成長投資枠で検討されやすい一方、個別株は業績、為替、金利、業界サイクルの影響を強く受けます。本記事では、時価総額、事業分散、配当方針、業績テーマ、値動きの大きさを分けて確認し、初心者が銘柄選びで見落としやすいリスクも整理します。
        </p>
      </section>
      <DecisionBox
        title="結論：日本株は銘柄名よりも分散ルールを先に決める"
        points={[
          "1銘柄への集中を避け、業種、時価総額、配当方針が異なる銘柄を組み合わせる。",
          "新NISA成長投資枠で買う場合も、決算、減配リスク、株価下落時の対応を事前に決める。",
          "個別株が難しい場合は、TOPIX連動投信や高配当ETFとの比較も行う。",
        ]}
        note="ランキングは購入推奨ではなく、比較軸を示すための整理です。"
      />
      <ComparisonTableCTA
        title="2026年 日本株ランキングTOP10"
        services={[
          {
            name: "トヨタ自動車（7203）",
            rank: 1,
            highlight: "時価総額1位｜EV・HV両輪戦略",
            features: [
              "日本最大手の自動車メーカー",
              "配当利回り約2.5%",
              "EV（ハイブリッド・水素）多方面展開",
              "連続増配傾向",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "時価総額No.1",
          },
          {
            name: "ソニーグループ（6758）",
            rank: 2,
            highlight: "ゲーム・音楽・映画・半導体の複合企業",
            features: [
              "PlayStation・映画・音楽・半導体イメージセンサー",
              "配当利回り約1%",
              "継続的な成長戦略",
              "海外売上比率70%超",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "任天堂（7974）",
            rank: 3,
            highlight: "Switch後継機期待｜世界的ブランド",
            features: [
              "Nintendo Switch後継機発売期待",
              "配当利回り約2.5%",
              "世界的IP（マリオ・ポケモン・ゼルダ）",
              "映画事業も拡大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "三菱UFJフィナンシャル・グループ（8306）",
            rank: 4,
            highlight: "配当利回り3.5%｜金利上昇で追い風",
            features: [
              "日本最大のメガバンク",
              "配当利回り約3.5%",
              "金利上昇局面で収益拡大",
              "海外展開も積極的",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "高配当",
          },
          {
            name: "武田薬品工業（4502）",
            rank: 5,
            highlight: "配当利回り4.5%｜製薬大手",
            features: [
              "日本最大の製薬会社",
              "配当利回り約4.5%",
              "希少疾病・消化器で世界展開",
              "高配当維持",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ポートフォリオ構築の基本</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>コア銘柄、成長株、高配当株の役割を分けて考える</li>
          <li>特定業種や特定企業への集中を避け、投資額の上限を決める</li>
          <li>決算、配当方針、株価下落時の対応を購入前に確認する</li>
          <li>年1回程度、業種バランスと含み損益を見直す</li>
          <li>個別株が難しい場合は、投資信託やETFも比較候補にする</li>
        </ul>
      </section>
      <AffiliateCTA
        title="日本株売買手数料無料｜SBI証券 新NISA"
        description="日本株を新NISAで検討する場合は、売買手数料、取扱商品、配当金の受取方法、アプリの使いやすさを確認しましょう。個別株は値動きが大きいため、分散方針もあわせて決めておくと安心です。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📈"
        highlight="手数料無料"
      />
    </>
  ),
  "dividend-kings-japan": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">日本版「連続増配株」の魅力</h2>
        <p>
          米国には「配当王（Dividend Kings）」と呼ばれる50年以上連続増配企業がありますが、日本でも20年以上連続増配を維持する企業が増加中。花王34年連続増配をはじめ、長期の配当成長で安定収入を得られる銘柄を長期保有するのが、配当投資の王道戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 日本の連続増配株ランキング"
        services={[
          {
            name: "花王（4452）",
            rank: 1,
            highlight: "34年連続増配｜日本最長",
            features: [
              "日用品・化粧品の大手",
              "34年連続増配の実績",
              "配当利回り約3%",
              "海外売上比率40%超",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "連続増配No.1",
          },
          {
            name: "KDDI（9433）",
            rank: 2,
            highlight: "22年連続増配｜通信大手の安定感",
            features: [
              "通信事業の高安定収益",
              "22年連続増配",
              "配当利回り約3.5%",
              "auブランド＋金融事業も拡大",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "リコーリース（8566）",
            rank: 3,
            highlight: "27年連続増配｜リース事業の安定性",
            features: [
              "リコー系リース会社",
              "27年連続増配",
              "配当利回り約3.5%",
              "顧客基盤の安定性",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "小林製薬（4967）",
            rank: 4,
            highlight: "25年連続増配｜独自商品戦略",
            features: [
              "独自ブランド商品（熱さまシート等）",
              "25年連続増配",
              "配当利回り約2%",
              "中国市場も展開",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "三菱HCキャピタル（8593）",
            rank: 5,
            highlight: "26年連続増配｜総合金融",
            features: [
              "総合金融・リース・不動産",
              "26年連続増配",
              "配当利回り約4.5%",
              "高配当銘柄として注目",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "高配当",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">連続増配株投資のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>配当金が毎年増え続け、インフレにも対応</li>
          <li>長期保有で複利効果が最大化</li>
          <li>経営の安定性・透明性が高い</li>
          <li>新NISA成長枠で非課税受取</li>
          <li>リーマンショック等の不況時でも配当維持</li>
        </ul>
      </section>
      <AffiliateCTA
        title="連続増配株もSBI証券で｜国内株式手数料無料"
        description="日本の連続増配株への投資はSBI証券が最適。新NISA口座で日本株売買手数料完全無料、配当金も非課税で長期複利効果を享受。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="👑"
        highlight="業界No.1"
      />
    </>
  ),
  "growth-stock-investment-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">成長株投資の基本</h2>
        <p>
          成長株（グロース株）投資は、売上・利益の成長率が平均を大きく上回る企業に投資する手法。配当よりもキャピタルゲイン（株価上昇）を狙い、米国ハイテク株・日本グロース株の長期保有で年率10〜20%のリターンも可能。ただし変動幅が大きく、慎重な銘柄選定が必要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="成長株投資の対象"
        services={[
          {
            name: "米国ハイテク7社（MAGNIFICENT 7）",
            rank: 1,
            highlight: "Apple・Microsoft・Google・Amazon・NVIDIA・Meta・Tesla",
            features: [
              "世界を牽引する米国ハイテク大手",
              "過去10年で年率20%超のリターン",
              "AI・クラウド・EV・デジタル広告",
              "NASDAQ100 ETF（QQQ）で一括投資も可",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "世界の主役",
          },
          {
            name: "日本グロース株（キーエンス等）",
            rank: 2,
            highlight: "高収益・高成長の日本企業",
            features: [
              "キーエンス（6861）：営業利益率50%超",
              "SBIホールディングス・エムスリー・GMOインターネット",
              "成長率20%超を維持する企業群",
              "時価総額上位の安定感",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "新興市場グロース株",
            rank: 3,
            highlight: "マザーズ・JASDAQの高成長企業",
            features: [
              "東証グロース市場の中小型株",
              "10倍株（テンバガー）候補多数",
              "ボラティリティ大きい",
              "ポートフォリオの5〜10%以内",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">成長株選定の5指標</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>売上成長率</strong>：年率20%超が目安</li>
          <li><strong>営業利益率</strong>：15%以上</li>
          <li><strong>ROE（自己資本利益率）</strong>：15%以上</li>
          <li><strong>PER</strong>：業界平均の1.5〜2倍以内（成長性に応じて）</li>
          <li><strong>PEGレシオ</strong>：1以下なら割安、2超は割高</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国ハイテク株は SBI証券｜為替手数料無料"
        description="SBI証券なら米国個別株（NVIDIA・Apple・Microsoft等）を為替手数料無料で購入可能。新NISA成長枠で非課税運用、世界のハイテク成長を享受。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🚀"
        highlight="業界No.1"
      />
    </>
  ),
  "value-investing-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">バリュー投資の基本</h2>
        <p>
          バリュー投資は、本質的価値より市場価格が割安な銘柄を買う手法。ウォーレン・バフェット・ベンジャミン・グレアムが提唱する王道戦略で、長期保有で安定したリターンを得られます。PER・PBR・ROE等の指標を活用し、財務健全性の高い割安株を見つけるのが鍵です。
        </p>
      </section>
      <ComparisonTableCTA
        title="バリュー投資の主要指標"
        services={[
          {
            name: "PER（株価収益率）",
            rank: 1,
            highlight: "10倍以下なら割安候補",
            features: [
              "株価÷1株あたり利益",
              "10倍以下なら割安（業界により変動）",
              "日本株平均14〜15倍",
              "米国株平均20倍",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "最重要",
          },
          {
            name: "PBR（株価純資産倍率）",
            rank: 2,
            highlight: "1倍以下なら純資産より安い",
            features: [
              "株価÷1株あたり純資産",
              "1倍以下なら理論上解散価値より安い",
              "東証PBR1倍割れ企業の改革圧力",
              "バリュー投資家の定番指標",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ROE（自己資本利益率）",
            rank: 3,
            highlight: "10%以上なら優良",
            features: [
              "純利益÷自己資本",
              "10%以上が優良企業の目安",
              "15%以上なら超優良",
              "収益性の高さを示す",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "配当利回り",
            rank: 4,
            highlight: "3%以上で割安＋配当の両取り",
            features: [
              "1株配当÷株価",
              "3%以上で高配当",
              "バリュー株は配当利回り高めが多い",
              "新NISAで配当非課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">バリュー投資の対象</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>日本の大手商社（三菱商事・伊藤忠・三井物産）</li>
          <li>メガバンク（三菱UFJ・三井住友）</li>
          <li>大手保険（東京海上・MS&AD）</li>
          <li>高配当公益株（ENEOS・電力・ガス）</li>
          <li>米国ダウ構成銘柄（Coca-Cola・P&G等）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="バリュー投資を学ぶ｜ファイナンシャルアカデミー"
        description="バフェット流のバリュー投資を体系的に学ぶなら、ファイナンシャルアカデミーの無料体験セミナーが最適。株式投資の基礎から応用まで、累計受講生78万人超。"
        buttonText="ファイナンシャルアカデミー無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="📚"
        highlight="無料体験あり"
      />
    </>
  ),
  "sector-investment-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">セクターローテーションとは</h2>
        <p>
          景気サイクルに応じて、上昇しやすいセクター（業種）に投資を切替える戦略。景気拡大期は「消費・工業・金融」、景気後退期は「公益・ヘルスケア・生活必需品」が強くなる傾向。セクター別ETFを活用して、機動的に投資配分を調整できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要セクター別投資対象"
        services={[
          {
            name: "テクノロジー（XLK）",
            rank: 1,
            highlight: "米国ハイテク｜長期成長期待",
            features: [
              "Apple・Microsoft・NVIDIA等",
              "過去10年で年率20%超",
              "AI・クラウドの成長継続",
              "ボラティリティ大きい",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "成長",
          },
          {
            name: "金融（XLF）",
            rank: 2,
            highlight: "金利上昇局面で有利",
            features: [
              "JPMorgan・Bank of America等",
              "金利上昇で収益拡大",
              "配当利回り約2〜3%",
              "景気拡大期に強い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ヘルスケア（XLV）",
            rank: 3,
            highlight: "ディフェンシブ｜景気に左右されにくい",
            features: [
              "Johnson & Johnson・UnitedHealth等",
              "景気後退期に強い",
              "高齢化で長期需要",
              "配当利回り約1〜2%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "生活必需品（XLP）",
            rank: 4,
            highlight: "ディフェンシブ｜不況でも安定",
            features: [
              "Procter & Gamble・Coca-Cola等",
              "景気後退期に強い",
              "配当利回り約2〜3%",
              "長期安定配当",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "エネルギー（XLE）",
            rank: 5,
            highlight: "インフレ時に強い｜資源価格連動",
            features: [
              "ExxonMobil・Chevron等",
              "インフレ・原油高で収益拡大",
              "配当利回り約3〜4%",
              "景気循環セクター",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">景気サイクル別 推奨セクター</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>景気拡大初期</strong>：テクノロジー・一般消費財・工業</li>
          <li><strong>景気拡大後期</strong>：エネルギー・素材</li>
          <li><strong>景気後退初期</strong>：金融縮小→生活必需品へシフト</li>
          <li><strong>景気後退後期</strong>：ヘルスケア・生活必需品・公益</li>
          <li><strong>景気回復期</strong>：金融・一般消費財が先に上昇</li>
        </ul>
      </section>
      <AffiliateCTA
        title="セクター別ETFはSBI証券｜米国ETF為替手数料無料"
        description="SPDRセクターETF（XLK・XLF・XLV等）はSBI証券で為替手数料無料で購入可能。新NISA成長枠でセクター別の配分調整も可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🔀"
        highlight="業界No.1"
      />
    </>
  ),
  "jreit-detailed-investment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">J-REITの種類と特徴</h2>
        <p>
          J-REIT（日本不動産投資信託）は、オフィス・住居・物流・商業施設・ホテル・ヘルスケア等の不動産に分散投資する金融商品。分配金利回り年4〜6%で、個別不動産を買うよりも手軽に不動産投資できます。J-REIT個別銘柄を組合せてポートフォリオ構築するのが基本戦略です。
        </p>
      </section>
      <ComparisonTableCTA
        title="J-REIT種類別おすすめ"
        services={[
          {
            name: "オフィス系：日本ビルファンド（8951）",
            rank: 1,
            highlight: "業界最大手｜都心大型オフィス中心",
            features: [
              "J-REIT時価総額1位",
              "三井不動産がスポンサー",
              "東京都心Aクラスオフィス中心",
              "分配金利回り約3.5%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "住居系：アドバンス・レジデンス（3269）",
            rank: 2,
            highlight: "住居特化｜安定性高い",
            features: [
              "都心賃貸マンション中心",
              "住居系J-REIT最大手",
              "分配金利回り約4%",
              "景気変動に強い",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "物流系：日本プロロジスリート（3283）",
            rank: 3,
            highlight: "物流特化｜EC拡大で追い風",
            features: [
              "最大規模の物流特化REIT",
              "Amazon等の物流施設賃貸",
              "EC市場拡大で需要拡大",
              "分配金利回り約4%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "商業施設系：フロンティア不動産投資（8964）",
            rank: 4,
            highlight: "イオンモール等の大型商業施設",
            features: [
              "郊外型大型商業施設中心",
              "三井不動産・三菱地所系",
              "分配金利回り約5%",
              "地域経済との連動",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "J-REIT指数連動ETF（1343）",
            rank: 5,
            highlight: "J-REIT全体に分散投資",
            features: [
              "J-REIT全銘柄に分散投資",
              "NEXT FUNDS 東証REIT指数連動",
              "信託報酬0.155%",
              "分配金利回り約4%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "分散投資",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">J-REIT投資のメリット・デメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>メリット①</strong>：少額から不動産投資可能（数万円から）</li>
          <li><strong>メリット②</strong>：分配金利回り4〜6%と高い</li>
          <li><strong>メリット③</strong>：新NISA成長枠で非課税受取</li>
          <li><strong>メリット④</strong>：不動産運営の手間不要</li>
          <li><strong>デメリット</strong>：金利上昇時に価格下落リスク、スポンサー企業の信用リスク</li>
        </ul>
      </section>
      <AffiliateCTA
        title="J-REIT投資はSBI証券｜新NISA成長枠対応"
        description="SBI証券なら全J-REIT銘柄を新NISA成長枠で購入可能。日本株同様に売買手数料完全無料、分配金も非課税で長期運用が有利。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🏗️"
        highlight="業界No.1"
      />
    </>
  ),
  "commodity-etf-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">コモディティETFでインフレヘッジ</h2>
        <p>
          コモディティETFは、金・銀・原油・天然ガス・農産物等の実物資産に連動するETF。株式と相関が低く、インフレ・地政学リスクのヘッジとしてポートフォリオ5〜15%の配分が推奨されます。SPDR ゴールド等の大手ETFで個人投資家も少額から投資可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要コモディティETF比較"
        services={[
          {
            name: "SPDR ゴールド・シェア（1326）",
            rank: 1,
            highlight: "金現物の裏付け｜世界最大",
            features: [
              "金価格に連動、現物で裏付け",
              "世界最大の金ETF",
              "信託報酬0.4%",
              "東証上場で日本円で買える",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "金の王道",
          },
          {
            name: "SLV（iShares シルバー）",
            rank: 2,
            highlight: "銀価格連動｜ボラティリティ大",
            features: [
              "銀価格に連動",
              "金より値動き2〜3倍大きい",
              "産業需要（太陽光パネル等）",
              "投機的な性格強め",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "USO（United States Oil Fund）",
            rank: 3,
            highlight: "WTI原油先物連動",
            features: [
              "WTI原油先物価格に連動",
              "短期トレード向き",
              "長期保有でコンタンゴ（期差損）に注意",
              "地政学リスクヘッジに",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "DBA（Invesco 農産物）",
            rank: 4,
            highlight: "穀物・砂糖等の農産物分散",
            features: [
              "小麦・トウモロコシ・大豆・砂糖・ココア等",
              "食料インフレヘッジ",
              "分散型で安定性",
              "信託報酬0.85%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "PDBC（Invesco コモディティ総合）",
            rank: 5,
            highlight: "コモディティ全体に分散投資",
            features: [
              "エネルギー・金属・農産物を総合",
              "14種類のコモディティに分散",
              "信託報酬0.59%",
              "ポートフォリオ簡素化",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合分散",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">コモディティETFのポートフォリオ配分</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>総資産の5〜15%をコモディティETFに</li>
          <li>うち半分を金（SPDR ゴールド）でインフレヘッジ</li>
          <li>残り半分をエネルギー・農産物に分散</li>
          <li>株式との相関低く、ポートフォリオ全体のリスク低減</li>
          <li>新NISA成長枠で非課税運用可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="コモディティETFもSBI証券で｜米国ETF為替手数料無料"
        description="SBI証券は米国コモディティETF（SLV・USO・DBA・PDBC等）の為替手数料無料。日本の金ETF（1326）と組合せて、インフレヘッジの分散投資を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🛢️"
        highlight="業界No.1"
      />
    </>
  ),
  "moving-overseas-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">海外移住の税金・年金完全ガイド</h2>
        <p>
          海外移住（非居住者化）すると、日本の税制上の扱いが大きく変わります。出国税（国外転出時課税、1億円以上の有価証券保有者対象）、住民税・所得税の非課税化、国民年金の任意加入、国際税務の基本を理解しなければ、二重課税や未納リスクがあります。5年ルール・10年ルールで居住者判定されるため、出国前の準備が重要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">出国前に必ずやるべき手続き</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>住民票の海外転出届</strong>：出国予定日14日前以降に市区町村に提出</li>
          <li><strong>国民健康保険の脱退</strong>：転出届提出と同時に手続き</li>
          <li><strong>国民年金の任意加入</strong>：保険料納付継続で将来の年金受給権を維持</li>
          <li><strong>出国税の申告</strong>：有価証券1億円以上なら確定申告が必要</li>
          <li><strong>納税管理人の選任</strong>：日本に不動産・賃貸収入ある場合</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="海外移住関連の相談窓口"
        services={[
          {
            name: "保険マンモス（無料保険相談）",
            rank: 1,
            highlight: "海外移住前の保険見直し",
            features: [
              "海外移住時の生命保険の継続可否",
              "海外傷害保険の選び方",
              "日本の保険を海外で受取可能か",
              "無料相談・オンライン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "SBI証券（海外移住後の運用継続）",
            rank: 2,
            highlight: "非居住者でも継続可能な口座",
            features: [
              "海外移住後も口座維持可能",
              "NISA口座は原則解約必要",
              "特定口座は継続保有可能",
              "為替手数料無料で米ドル運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">海外移住後の確定申告</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>日本国内の不動産賃貸収入→確定申告必要（非居住者課税20.42%）</li>
          <li>日本の会社からの給与→源泉徴収のみで完結（確定申告不要）</li>
          <li>日本株の配当→15.315%源泉徴収（租税条約で軽減可能）</li>
          <li>日本株の譲渡益→非居住者は原則非課税</li>
          <li>海外口座の利子配当→現地国税のみ（日本は非課税）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="海外移住前の保険見直しは保険マンモスで｜完全無料"
        description="海外移住前後の保険見直しなら保険マンモス。生命保険の継続・海外傷害保険・医療保険など、海外移住者向けプランを複数社から比較。オンライン相談対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="✈️"
        highlight="無料相談"
      />
    </>
  ),
  "divorce-financial-recovery-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">離婚時の財産分与完全ガイド</h2>
        <p>
          離婚時の財産分与は、婚姻中に築いた財産を原則1/2で分ける制度です。不動産・預貯金・退職金・年金など対象範囲は広く、住宅ローン残債や税金（譲渡所得税・贈与税）も考慮が必要。3号分割（会社員妻の厚生年金）と合意分割（協議で決める）の違い、離婚調停・財産分与請求の期限（2年）など、正しい知識が重要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">財産分与の対象になる資産</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>不動産</strong>：マイホーム・投資用不動産（住宅ローン残債控除後の純資産）</li>
          <li><strong>預貯金・証券</strong>：婚姻期間中に積み立てた資産</li>
          <li><strong>退職金</strong>：婚姻期間に対応する部分（別居時点の見込額）</li>
          <li><strong>年金</strong>：厚生年金・共済年金（3号分割or合意分割）</li>
          <li><strong>生命保険解約返戻金</strong>：婚姻期間中に積立てた部分</li>
          <li><strong>対象外</strong>：特有財産（婚前資産・相続・贈与）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="離婚時の資産関連サービス"
        services={[
          {
            name: "保険マンモス（生命保険見直し）",
            rank: 1,
            highlight: "離婚後のライフプラン見直し",
            features: [
              "契約者・受取人変更の相談",
              "シングル家計の保険設計",
              "子供の学資保険の扱い",
              "無料相談・オンライン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "11,278円/件",
          },
          {
            name: "家づくり相談所（住宅売却・買替）",
            rank: 2,
            highlight: "離婚時の不動産処分相談",
            features: [
              "住宅ローン残債と財産分与",
              "売却か共有継続かの判断",
              "新居建築の相談",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">財産分与に伴う税金の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>財産分与は原則贈与税非課税（配偶者間の精算のため）</li>
          <li>不動産分与で時価相当→譲渡所得税（所有者）が発生</li>
          <li>3000万円特別控除（居住用財産）で節税可能</li>
          <li>分与額が過大な場合→贈与税対象となるリスク</li>
          <li>離婚後2年以内に財産分与請求しないと時効</li>
        </ul>
      </section>
      <AffiliateCTA
        title="離婚後の保険見直しは保険マンモスで｜無料相談"
        description="離婚後のシングル家計・子供の学資保険・生命保険受取人変更など、離婚前後の保険見直しを保険マンモスで無料相談。経験豊富なFPが対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="⚖️"
        highlight="無料相談"
      />
    </>
  ),
  "child-allowance-expanded-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">2024年10月拡充後の児童手当制度</h2>
        <p>
          児童手当は2024年10月から大幅拡充：①所得制限の撤廃（高所得世帯も受給可）、②高校生年代（18歳年度末）まで支給延長、③第3子以降は月3万円（従来1.5万円）。新NISAとの併用、ジュニアNISA代替の投資戦略、申請方法を解説します。共働き子育て世帯は年間36〜108万円の公的支援を受けられる制度です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">児童手当の支給額（2024年10月〜）</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>3歳未満</strong>：月1.5万円（第1子・第2子）、月3万円（第3子以降）</li>
          <li><strong>3歳〜小学校修了</strong>：月1万円（第1子・第2子）、月3万円（第3子以降）</li>
          <li><strong>中学生</strong>：月1万円（第1子・第2子）、月3万円（第3子以降）</li>
          <li><strong>高校生年代</strong>：月1万円（第1子・第2子）、月3万円（第3子以降）※新設</li>
          <li><strong>第3子カウント</strong>：22歳年度末まで兄姉を第1子とカウント</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="児童手当で始める子供の教育投資"
        services={[
          {
            name: "すらら（小中高オンライン学習）",
            rank: 1,
            highlight: "AI搭載オンライン学習｜不登校でも安心",
            features: [
              "小1〜高3対応のAI学習",
              "月額8,800円から",
              "不登校児童の出席認定実績",
              "発達障害児への配慮",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
          {
            name: "SBI証券（新NISA成長枠で教育資金）",
            rank: 2,
            highlight: "児童手当をインデックス投資で運用",
            features: [
              "月1〜3万円を全世界株に積立",
              "年利5%想定で18年間運用",
              "18歳時点で500〜700万円",
              "新NISA成長枠で非課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">児童手当の申請方法と注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>出生後15日以内に市区町村に申請（遅延で翌月分からしか受給できない）</li>
          <li>申請書＋健康保険証＋年金手帳＋印鑑＋マイナンバー</li>
          <li>年2回（6月・10月）に現況届を提出</li>
          <li>支給月：2月・6月・10月（4ヶ月分まとめて）</li>
          <li>2024年10月以降、高所得世帯も新たに申請必要</li>
        </ul>
      </section>
      <AffiliateCTA
        title="児童手当を活かした教育資金づくりならすらら｜AI学習"
        description="児童手当月1万円で、すららのAI学習（月8,800円〜）と教材費を実質無料化。小1〜高3まで一貫学習、不登校児童の出席認定実績も豊富。無料体験可能。"
        buttonText="すららの無料体験"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE"
        icon="👶"
        highlight="無料体験"
      />
    </>
  ),
  "green-energy-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">再生可能エネルギー投資完全ガイド</h2>
        <p>
          再エネ投資は、2030年までに電源構成36〜38%を再エネ化する国策を追い風に拡大中。太陽光・風力・地熱・水素などの投資手段は、個別株・ETF・グリーンボンド・太陽光クラウドファンディングなど多岐にわたります。FIT（固定価格買取）からFIP（市場価格連動プレミアム）への移行、ESG投資との連動、税制優遇（中小企業経営強化税制）まで解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">再エネ投資の4つの方法</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①再エネETF</strong>：iShares Global Clean Energy（ICLN）、信託報酬0.4%</li>
          <li><strong>②個別株</strong>：ファーストソーラー・ヴェスタス・エネコム、日本はレノバ・Jクリエーション等</li>
          <li><strong>③グリーンボンド</strong>：環境プロジェクト資金調達、利回り0.5〜2%</li>
          <li><strong>④太陽光クラウドファンディング</strong>：1万円から投資可能、利回り4〜8%</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="再エネ投資のおすすめ証券会社"
        services={[
          {
            name: "SBI証券（米国再エネETF・個別株）",
            rank: 1,
            highlight: "ICLN・TANなど再エネETF為替手数料無料",
            features: [
              "ICLN（グローバル再エネETF）取扱",
              "TAN（ソーラーETF）取扱",
              "ファーストソーラー等の米国株",
              "新NISA成長枠で非課税",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（日本の再エネ関連株）",
            rank: 2,
            highlight: "日本の再エネ株を手数料無料",
            features: [
              "50万円以下の取引手数料無料",
              "レノバ・イーレックス等",
              "NISA口座の手数料無料",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FIT/FIP制度と投資リスク</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>FIT（固定価格買取）：20年間固定、但し買取価格は年々低下（10円/kWh台）</li>
          <li>FIP（市場価格連動）：2022年4月〜、市場価格+プレミアム</li>
          <li>太陽光発電投資のリスク：出力抑制・パネル劣化・災害リスク</li>
          <li>メリット：中小企業経営強化税制で即時償却or税額控除可能</li>
          <li>ESG投資としての長期安定リターン（再エネ株は年5〜10%）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="再エネETF・個別株はSBI証券で｜米国株為替手数料無料"
        description="SBI証券は再エネETF（ICLN・TAN）と米国個別株（ファーストソーラー・ヴェスタス等）を為替手数料無料で取扱。新NISA成長枠で非課税運用可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🌱"
        highlight="業界No.1"
      />
    </>
  ),
  "mid-career-retraining-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">40〜50代のリスキリング完全戦略</h2>
        <p>
          リスキリング（学び直し）は人生100年時代の必須スキル。教育訓練給付金（最大受講料の80%）、リスキリングを通じたキャリアアップ支援事業（企業経由で最大100万円補助）、自己啓発支援制度など、国・自治体の支援が豊富。IT・AI・データサイエンス・語学学習の需要が高く、40〜50代でも年収100〜200万円アップの転職が可能です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">リスキリングで年収アップが狙える分野</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>IT・プログラミング</strong>：Python・JavaScript、平均年収500〜800万円</li>
          <li><strong>AI・機械学習</strong>：TensorFlow・PyTorch、平均年収700〜1200万円</li>
          <li><strong>データサイエンス</strong>：SQL・統計、平均年収600〜1000万円</li>
          <li><strong>クラウド資格</strong>：AWS・Azure、平均年収600〜900万円</li>
          <li><strong>語学（英語ビジネス）</strong>：TOEIC 800点以上で年収+100〜300万円</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="リスキリングおすすめサービス"
        services={[
          {
            name: "すらら（社会人の学び直し）",
            rank: 1,
            highlight: "小中高の基礎からAI学習",
            features: [
              "数学・英語の基礎固め",
              "AI学習で効率的",
              "月額8,800円〜",
              "教育訓練給付金対象外（自費）",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+54KF2Y+4CT0+60OXE",
            badge: "EPC 15.56",
          },
          {
            name: "ココナラ（副業・スキル販売）",
            rank: 2,
            highlight: "学んだスキルを副業収入化",
            features: [
              "プログラミング・デザインの副業",
              "翻訳・コンサル販売",
              "月5〜30万円の副収入実績",
              "手数料10〜20%",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">教育訓練給付金・リスキリング助成金の活用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>一般教育訓練給付金：受講料の20%（上限10万円）</li>
          <li>特定一般教育訓練給付金：受講料の40%（上限20万円）</li>
          <li>専門実践教育訓練給付金：受講料の50〜70%（上限56万円）</li>
          <li>リスキリングを通じたキャリアアップ支援事業：企業経由で最大75万円補助</li>
          <li>人材開発支援助成金：企業が従業員の訓練に活用</li>
        </ul>
      </section>
      <AffiliateCTA
        title="学んだスキルを副業収入に｜ココナラで月5〜30万円"
        description="プログラミング・デザイン・翻訳など学んだスキルをココナラで販売。400万人超のユーザー、月5〜30万円の副収入実績多数。登録無料で即販売開始。"
        buttonText="ココナラに登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🎓"
        highlight="登録無料"
      />
    </>
  ),
  "senior-life-organization-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生前整理完全ガイド｜終活で家族に迷惑をかけない</h2>
        <p>
          生前整理は、50〜70代から始める終活の核心。エンディングノート（法的効力なし）と遺言書（法的効力あり）、デジタル遺品（SNS・サブスク・暗号資産）整理、保険証券・不動産の整理、相続税対策、介護費用の準備など、死後の家族負担を大幅軽減できます。葬儀費用200〜300万円、相続税の10ヶ月以内申告など、予備知識が必須です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">生前整理でやるべき7つのこと</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①エンディングノート作成</strong>：資産・連絡先・葬儀希望を記載</li>
          <li><strong>②遺言書作成</strong>：自筆証書遺言or公正証書遺言（3〜5万円）</li>
          <li><strong>③デジタル遺品整理</strong>：SNSアカウント・サブスク・ネット銀行のID/PW管理</li>
          <li><strong>④保険証券の整理</strong>：契約一覧を作成、不要保険を解約</li>
          <li><strong>⑤不動産の処分検討</strong>：空き家売却or相続対策</li>
          <li><strong>⑥介護費用の準備</strong>：介護保険・高齢者医療費</li>
          <li><strong>⑦葬儀の事前相談</strong>：家族葬・直葬など形式決定</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="生前整理関連サービス"
        services={[
          {
            name: "保険マンモス（保険整理・相続対策）",
            rank: 1,
            highlight: "生前の保険整理でスッキリ",
            features: [
              "生命保険の解約・減額相談",
              "受取人変更・相続対策",
              "医療保険・がん保険の見直し",
              "相続税対策として終身保険活用",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "11,278円/件",
          },
          {
            name: "家づくり相談所（実家処分・小さな家）",
            rank: 2,
            highlight: "50代からの住替え相談",
            features: [
              "空き家の処分・売却",
              "終の住処の建替え・リフォーム",
              "バリアフリー住宅",
              "専門家紹介無料",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+3PD522+5OGA+5YZ75",
            badge: "5,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">相続税対策の基礎</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>基礎控除：3000万円＋600万円×法定相続人数</li>
          <li>生命保険の非課税枠：500万円×法定相続人数</li>
          <li>生前贈与：年110万円まで非課税（暦年贈与）</li>
          <li>相続時精算課税：2500万円までの特別控除</li>
          <li>小規模宅地等の特例：自宅土地の評価額80%減</li>
        </ul>
      </section>
      <AffiliateCTA
        title="生前の保険整理・相続対策は保険マンモスで｜完全無料"
        description="生命保険の整理・相続対策・受取人変更など、生前整理に必要な保険見直しを保険マンモスで無料相談。FPが50〜70代のニーズに合わせて提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📔"
        highlight="無料相談"
      />
    </>
  ),
  "gold-jewelry-buyback-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">金・宝石買取完全ガイド｜高額売却のコツ</h2>
        <p>
          2026年の金相場は1g1万円超と史上最高値を更新。不要な金・プラチナ・ダイヤモンド・時計・ブランド品は、買取店選びと査定のコツで売却額が20〜30%変わります。田中貴金属・なんぼや・大黒屋など大手の特徴、譲渡所得50万円控除、金の税務処理、買取詐欺の回避法まで実践的に解説します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">買取対象とおすすめ買取店</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>金・プラチナ</strong>：田中貴金属（最高値・手数料低）、石福金属</li>
          <li><strong>ダイヤモンド・宝石</strong>：GIA鑑定書付は専門店で高額査定</li>
          <li><strong>ブランドバッグ</strong>：なんぼや・大黒屋・コメ兵</li>
          <li><strong>高級時計</strong>：ロレックス・オメガ等は専門店で</li>
          <li><strong>骨董・美術品</strong>：目利きある老舗店で鑑定</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="金・宝石売却後の運用先"
        services={[
          {
            name: "SBI証券（金ETFで再投資）",
            rank: 1,
            highlight: "売却益で金ETFに再投資",
            features: [
              "SPDR ゴールド（1326）で金連動",
              "物理金より信託報酬安い（0.4%）",
              "新NISA成長枠で非課税",
              "相場上昇時は即売却可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（コモディティETF）",
            rank: 2,
            highlight: "金・銀・プラチナETFを手数料無料",
            features: [
              "50万円以下の取引手数料無料",
              "純金上場信託（1540）取扱",
              "NISA口座の手数料無料",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">金・宝石売却時の税金</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>譲渡所得50万円特別控除（金・宝石は対象）</li>
          <li>5年超保有で長期譲渡所得（所得額1/2で課税）</li>
          <li>5年以下は短期譲渡所得（全額課税）</li>
          <li>200万円超の売却は買取店から税務署に支払調書提出</li>
          <li>副業的に繰返売却→事業所得となる可能性</li>
        </ul>
      </section>
      <AffiliateCTA
        title="金売却後の資産運用は松井証券で｜手数料無料"
        description="金売却の現金を松井証券で運用。50万円以下の取引手数料無料、純金上場信託（1540）・金鉱株ETFなど豊富な商品ラインアップ。NISA口座の手数料も無料。"
        buttonText="松井証券で口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ"
        icon="💍"
        highlight="手数料無料"
      />
    </>
  ),
  "startup-equity-crowdfunding-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">株式投資型クラウドファンディングの基本</h2>
        <p>
          株式投資型クラウドファンディング（ECF）は、未公開スタートアップに10万円〜投資できる手段。FUNDINNO・イークラウド・ユニコーンの3社が主要プラットフォーム。2017年登場後、IPOやM&A成立案件が増加し、投資額の5〜10倍のリターン事例も。エンジェル税制で最大800万円の所得控除が受けられ、富裕層の節税・スタートアップ応援として注目されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="株式投資型クラファン主要3社比較"
        services={[
          {
            name: "FUNDINNO（フアンディーノ）",
            rank: 1,
            highlight: "国内シェアNo.1｜累計100億円超",
            features: [
              "累計応募金額100億円超",
              "累計成約案件200件以上",
              "IPO事例：琉球アスティーダ等",
              "エンジェル税制優遇措置対象多数",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "シェアNo.1",
          },
          {
            name: "イークラウド",
            rank: 2,
            highlight: "大和証券グループの安心感",
            features: [
              "大和証券グループ運営",
              "審査基準厳しく優良案件",
              "年2〜3件の少数精鋭",
              "平均1社5000万〜2億円調達",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "ユニコーン",
            rank: 3,
            highlight: "新興ベンチャー特化",
            features: [
              "AI・DX・バイオ系が中心",
              "投資家向けセミナー充実",
              "エンジェル税制対応",
              "上場化まで徹底サポート",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">投資リスクとエンジェル税制</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>元本割れリスク大（企業倒産で投資額全損）</li>
          <li>流動性なし（上場まで売却困難）</li>
          <li>投資から回収まで5〜10年が目安</li>
          <li>エンジェル税制Aタイプ：最大800万円所得控除</li>
          <li>エンジェル税制Bタイプ：譲渡所得から控除</li>
          <li>年間投資額は総資産の5%以内に抑える</li>
        </ul>
      </section>
      <AffiliateCTA
        title="スタートアップ投資にSBI証券でIPO当選も狙う"
        description="スタートアップ投資＋IPO株の両取りをSBI証券で。IPO取扱数業界No.1、過去5年で100社以上のIPO取扱実績。未公開株投資のリスクヘッジに上場株も活用。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🚀"
        highlight="IPO取扱No.1"
      />
    </>
  ),
  "stock-lending-service-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">貸株サービスで眠れる株に追加収入</h2>
        <p>
          貸株サービスは、保有する現物株を証券会社に貸し出すことで年利0.1〜5%の金利を得る仕組み。SBI・楽天・マネックスで提供され、特に信用取引の空売り需要がある銘柄は高金利（年利5〜20%）になる場合も。月数千円〜数万円の追加収入となり、長期保有銘柄で「株価値上がり＋配当＋貸株金利」の三重取りが可能です。
        </p>
      </section>
      <ComparisonTableCTA
        title="貸株サービス主要3社比較"
        services={[
          {
            name: "SBI証券（貸株サービス）",
            rank: 1,
            highlight: "業界最大級｜対象銘柄多数",
            features: [
              "全上場銘柄（約3,900銘柄）対象",
              "金利0.1〜20%（銘柄により変動）",
              "優待・配当優先設定可能",
              "信用取引との両立OK",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "楽天証券（貸株サービス）",
            rank: 2,
            highlight: "楽天ポイント受取も可能",
            features: [
              "金利0.1〜5%",
              "楽天ポイント受取オプション",
              "優待自動取得サービス",
              "スマホアプリから簡単設定",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "マネックス証券（貸株サービス）",
            rank: 3,
            highlight: "高金利銘柄が多い",
            features: [
              "金利0.1〜15%",
              "自動優待取得",
              "配当金相当額も受取可能",
              "米国株は貸株対象外",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">貸株サービスのメリット・注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>メリット</strong>：保有株から追加収入（年0.1〜5%）、設定だけで完了</li>
          <li><strong>メリット</strong>：信用取引の売建に比べ低リスク</li>
          <li><strong>注意</strong>：証券会社倒産時の貸株は保護対象外（分別管理対象外）</li>
          <li><strong>注意</strong>：貸株金利は雑所得扱い、20万円超で確定申告必要</li>
          <li><strong>注意</strong>：株主優待・配当取得日は要設定（優先権限設定）</li>
          <li><strong>NISA口座</strong>：NISA保有株は貸株対象外</li>
        </ul>
      </section>
      <AffiliateCTA
        title="貸株サービスならSBI証券｜全上場銘柄対象"
        description="SBI証券の貸株サービスは全3,900銘柄対応、金利0.1〜20%で眠れる株に追加収入。優待・配当優先設定で三重取り可能。口座開設無料、NISA口座併用OK。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="📈"
        highlight="業界No.1"
      />
    </>
  ),
  "individual-corporate-bond-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">個人向け社債で利回り1〜3%の安定運用</h2>
        <p>
          個人向け社債は、企業が個人投資家向けに発行する債券で、利回り1〜3%・期間3〜10年が一般的。SBI・ソフトバンク・楽天・みずほなどの大企業が発行し、元本保証は銀行預金ではないが信用格付けが高い企業なら安定運用が可能。定期預金（0.1〜0.3%）より高利回り、株式よりも値動き少なく、50代以降の堅実運用に人気です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">個人向け社債の特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>最小投資単位：10万円〜100万円</li>
          <li>利回り：1〜3%（信用格付けにより変動）</li>
          <li>期間：3年・5年・7年・10年が主流</li>
          <li>元本保証ではない（発行企業の倒産リスクあり）</li>
          <li>格付けA以上の投資適格債が目安</li>
          <li>償還前売却は流動性低く、損失の可能性</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="個人向け社債を買える主要証券会社"
        services={[
          {
            name: "SBI証券（個人向け社債）",
            rank: 1,
            highlight: "取扱数業界最多",
            features: [
              "SBIホールディングス・ソフトバンク等",
              "楽天グループ債・三菱UFJ債",
              "既発債市場も充実",
              "購入手数料無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（個人向け社債）",
            rank: 2,
            highlight: "手数料完全無料",
            features: [
              "大手企業の新発債取扱",
              "購入・売却手数料無料",
              "少額10万円〜投資可能",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめの個人向け社債銘柄</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>ソフトバンクグループ債：年利3〜4%（高利回り、BB+格付）</li>
          <li>楽天グループ債：年利3〜5%（高利回り、BB格付）</li>
          <li>SBIホールディングス債：年利1〜2%（投資適格、BBB+格付）</li>
          <li>みずほ銀行・三菱UFJ銀行債：年利0.5〜1%（A格以上、低リスク）</li>
          <li>トヨタファイナンス債：年利0.3〜0.8%（超安定、AA格以上）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="個人向け社債はSBI証券で｜取扱数業界No.1"
        description="SBI証券は個人向け社債の取扱数業界最多。ソフトバンク・楽天・SBI・三菱UFJ等の新発債、既発債市場も充実。購入手数料無料、10万円〜少額投資可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💼"
        highlight="業界No.1"
      />
    </>
  ),
  "insurance-claim-proper-procedure": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">保険金請求の正しい方法｜請求漏れを防ぐ</h2>
        <p>
          保険金請求は、契約時の給付条件を満たせば保険法で3年以内に請求する権利があります。医療保険・生命保険・火災保険で請求漏れが多く、入院給付金・手術給付金・通院給付金・三大疾病給付金など複数の給付対象を見逃すケースが多発。正しい請求手順、診断書取得、弁護士依頼タイミングを知ることで、満額受取を実現できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">保険金請求の7ステップ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①事故・入院発生</strong>：発生日時・場所・状況を記録</li>
          <li><strong>②保険会社に連絡</strong>：コールセンターor代理店で給付金請求書取寄せ</li>
          <li><strong>③診断書取得</strong>：入院・手術・通院の診断書を医療機関で発行</li>
          <li><strong>④給付金請求書提出</strong>：記入＋診断書＋領収書＋身分証</li>
          <li><strong>⑤保険会社審査</strong>：通常2週間〜1ヶ月</li>
          <li><strong>⑥給付金振込</strong>：指定口座に入金</li>
          <li><strong>⑦審査結果に不服なら異議申立て</strong>：or 金融ADR・弁護士依頼</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="保険見直し・請求相談サービス"
        services={[
          {
            name: "保険マンモス（無料保険相談）",
            rank: 1,
            highlight: "請求漏れの見直しも相談可能",
            features: [
              "既契約の保険の確認",
              "請求可能な給付金の洗出し",
              "保険見直しの提案",
              "完全無料・オンライン対応",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">請求漏れしやすい給付金一覧</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>入院中の手術給付金（複数手術なら個別請求）</li>
          <li>三大疾病給付金（がん・心筋梗塞・脳卒中）</li>
          <li>女性疾病給付金・女性特約</li>
          <li>先進医療給付金</li>
          <li>介護給付金・介護一時金</li>
          <li>通院給付金（退院後の外来通院）</li>
          <li>個人年金保険の死亡給付金</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険請求漏れチェックは保険マンモスで｜完全無料"
        description="既契約保険の請求漏れチェック・追加請求相談なら保険マンモス。経験豊富なFPが過去の事故・入院から請求可能な給付金を洗い出し。オンライン相談対応。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📋"
        highlight="無料相談"
      />
    </>
  ),
  "micro-corporation-tax-saving": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">マイクロ法人設立で節税｜年収1000万円攻略</h2>
        <p>
          マイクロ法人は、1人社長の小規模会社（資本金1円〜）で、会社員副業・フリーランスの節税手段として注目。年収800〜1200万円のフリーランスなら、所得税・住民税・社会保険で年間70〜150万円の節税効果。役員報酬の最適設計、社会保険の最小化、経費計上の拡大など、適切な運用で個人事業主より大幅に手取り増加できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">マイクロ法人のメリット</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①所得分散</strong>：役員報酬と利益を調整、累進税率を低減</li>
          <li><strong>②社会保険最適化</strong>：役員報酬6〜10万円で社会保険料最小化</li>
          <li><strong>③経費範囲拡大</strong>：自宅家賃の一部・車両・通信費・接待費</li>
          <li><strong>④欠損金繰越10年</strong>：個人事業主は3年のみ</li>
          <li><strong>⑤退職金で非課税枠活用</strong>：退職所得控除＋1/2課税</li>
          <li><strong>⑥生命保険料の経費計上</strong>：節税型法人保険</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="マイクロ法人設立関連サービス"
        services={[
          {
            name: "ココナラ（税理士マッチング）",
            rank: 1,
            highlight: "法人設立・節税相談に対応",
            features: [
              "税理士・行政書士の出品多数",
              "法人設立手続き代行（数万円〜）",
              "記帳・決算代行",
              "副業法人化相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD",
            badge: "EPC 22.73",
          },
          {
            name: "SBI証券（法人口座開設）",
            rank: 2,
            highlight: "法人資産運用を株式・債券で",
            features: [
              "法人口座開設可能",
              "法人節税保険と併用",
              "役員退職金準備",
              "個人・法人両方で運用",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">マイクロ法人設立の注意点</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>設立費用：合同会社6万円〜、株式会社25万円〜</li>
          <li>年間ランニングコスト：法人住民税7万円＋税理士顧問料15〜40万円</li>
          <li>社会保険加入義務（役員報酬発生すれば）</li>
          <li>会社員の場合は就業規則の副業条項確認必須</li>
          <li>税務調査リスクに備え、適切な帳簿管理必要</li>
          <li>利益200〜300万円以下なら個人事業主のほうが有利な場合も</li>
        </ul>
      </section>
      <AffiliateCTA
        title="マイクロ法人設立・税理士相談はココナラで｜実績多数"
        description="ココナラに税理士・行政書士が多数出店。法人設立手続き代行5〜10万円、記帳・決算代行月1〜3万円、節税相談1時間5000円〜。会員登録無料で即相談開始。"
        buttonText="ココナラで税理士を探す"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4A7B8A+2PEO+OK4PD"
        icon="🏢"
        highlight="登録無料"
      />
    </>
  ),
  "inheritance-tax-preparation-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">相続税対策完全ガイド｜生前準備で節税</h2>
        <p>
          相続税は基礎控除（3000万円＋600万円×法定相続人数）を超える部分に10〜55%の累進課税。対象資産は不動産・預貯金・株式・生命保険・退職金・事業用資産など広範で、適切な対策なしでは相続財産の30〜50%を税金で失う可能性。生前贈与・生命保険非課税枠・小規模宅地等の特例・配偶者控除・教育資金贈与など、複数の対策を組合せて実質税率を下げるのが王道です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">相続税の基礎知識</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>基礎控除：3000万円＋600万円×法定相続人数</li>
          <li>税率：10%（1000万円以下）〜55%（6億円超）</li>
          <li>配偶者控除：法定相続分or1.6億円まで非課税</li>
          <li>生命保険非課税枠：500万円×法定相続人数</li>
          <li>退職金非課税枠：500万円×法定相続人数</li>
          <li>小規模宅地特例：自宅土地330㎡まで80%減額</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="相続税対策関連サービス"
        services={[
          {
            name: "保険マンモス（生命保険活用）",
            rank: 1,
            highlight: "非課税枠500万円×相続人を活用",
            features: [
              "終身保険で非課税枠確保",
              "受取人指定で遺産分割円滑化",
              "相続税対策型保険の提案",
              "完全無料相談",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
            badge: "EPC 31.06",
          },
          {
            name: "SBI証券（生前贈与用口座）",
            rank: 2,
            highlight: "贈与後の資産運用で長期成長",
            features: [
              "新NISA口座で非課税運用",
              "贈与された資金を複利運用",
              "教育資金一括贈与対応",
              "世代間資産移転の最適化",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">相続税対策7つの王道</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①暦年贈与</strong>：年110万円×相続人×年数で非課税移転</li>
          <li><strong>②相続時精算課税</strong>：2500万円特別控除＋年110万円基礎控除（2024年改正）</li>
          <li><strong>③生命保険</strong>：非課税枠500万円×相続人</li>
          <li><strong>④小規模宅地特例</strong>：自宅土地の評価額80%減</li>
          <li><strong>⑤教育資金一括贈与</strong>：1500万円まで非課税</li>
          <li><strong>⑥結婚子育て資金贈与</strong>：1000万円まで非課税</li>
          <li><strong>⑦不動産法人化</strong>：相続税評価を圧縮</li>
        </ul>
      </section>
      <AffiliateCTA
        title="相続税対策の生命保険活用は保険マンモスで｜完全無料"
        description="相続税対策の要となる生命保険活用を保険マンモスで無料相談。非課税枠500万円×相続人、受取人指定による遺産分割円滑化、相続税対策型終身保険の提案。"
        buttonText="保険マンモスで無料相談"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM"
        icon="📜"
        highlight="無料相談"
      />
    </>
  ),
  "us-treasury-bond-investing-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国債投資完全ガイド｜利回り4〜5%の低リスク運用</h2>
        <p>
          米国債（U.S. Treasury Bond）は、米国政府が発行する世界最安全レベルの債券。2026年現在、2年債・10年債・30年債の利回り4〜5%と魅力的で、円安局面の為替ヘッジとしても有効。SBI証券・楽天証券で1000ドル〜購入可能、新NISA成長枠は対象外だが特定口座で運用可。満期保有なら元本＋利息が確定、中途売却は金利変動リスクあります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国債の種類と特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>短期国債（T-Bill）</strong>：1年以下、ゼロクーポン、利回り4〜5%</li>
          <li><strong>中期国債（T-Note）</strong>：2〜10年、半年ごとクーポン、利回り4〜4.5%</li>
          <li><strong>長期国債（T-Bond）</strong>：20〜30年、利回り4.5〜5%</li>
          <li><strong>ゼロクーポン債</strong>：割引発行、満期に額面受取（再投資リスクなし）</li>
          <li><strong>インフレ連動債（TIPS）</strong>：インフレ率に連動して元本調整</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="米国債が買える主要証券会社"
        services={[
          {
            name: "SBI証券（米国債・米国ETF）",
            rank: 1,
            highlight: "米国債取扱銘柄業界最多",
            features: [
              "既発米国債多数取扱",
              "為替手数料無料（住信SBIネット）",
              "1000ドル〜少額投資可能",
              "TLT・IEF等米国債ETFも",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "業界No.1",
          },
          {
            name: "松井証券（米国債）",
            rank: 2,
            highlight: "手数料完全無料",
            features: [
              "米国債購入手数料無料",
              "新発債・既発債両方",
              "少額投資OK",
              "顧客サポート充実",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G6VESA+3XCC+6AZAQ",
            badge: "1,000円/件",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">米国債投資のメリット・リスク</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>メリット①</strong>：米国政府保証で世界最安全級</li>
          <li><strong>メリット②</strong>：利回り4〜5%で日本の定期預金の10倍</li>
          <li><strong>メリット③</strong>：円安局面の為替ヘッジ</li>
          <li><strong>メリット④</strong>：満期保有なら元本＋利息確定</li>
          <li><strong>リスク①</strong>：為替リスク（円高で目減り）</li>
          <li><strong>リスク②</strong>：金利上昇時の中途売却で損失</li>
          <li><strong>リスク③</strong>：新NISA対象外（特定口座で20.315%課税）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国債投資はSBI証券で｜業界最大の取扱銘柄"
        description="SBI証券は米国債取扱銘柄業界最多。既発米国債・ゼロクーポン債・TLT等のETFまで豊富。住信SBIネット銀行連携で為替手数料無料、1000ドル〜少額投資可能。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="🇺🇸"
        highlight="業界No.1"
      />
    </>
  ),
  "corporate-card-detailed-ranking": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード詳細ランキング2026</h2>
        <p>
          個人事業主・法人向けビジネスカードは、経費管理の効率化・ポイント還元・出張保険など、事業運営に欠かせない武器。アメックスビジネスゴールド（年会費31,900円）は豪華特典、三井住友ビジネスカード（年会費1,375円〜）は定番、セゾンプラチナビジネス（年会費22,000円）はコスパ良。事業規模・利用シーンで最適な1枚を選びましょう。
        </p>
      </section>
      <ComparisonTableCTA
        title="ビジネスカード主要5枚比較"
        services={[
          {
            name: "アメックス・ビジネス・ゴールド",
            rank: 1,
            highlight: "ステータス＋豊富な特典",
            features: [
              "年会費36,300円（初年度無料キャンペーンあり）",
              "ポイント還元1%（対象加盟店で3%）",
              "国内外空港ラウンジ無料",
              "海外旅行保険1億円",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "ステータス",
          },
          {
            name: "三井住友カード ビジネスオーナーズ",
            rank: 2,
            highlight: "年会費永年無料",
            features: [
              "年会費永年無料（一般）",
              "利用限度額最大500万円",
              "ポイント還元0.5%",
              "個人事業主・法人OK",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "年会費無料",
          },
          {
            name: "セゾンプラチナ・ビジネス・アメックス",
            rank: 3,
            highlight: "プライオリティパス付きでコスパ良",
            features: [
              "年会費22,000円",
              "プライオリティパス（空港ラウンジ）",
              "コンシェルジュサービス",
              "マイル還元率1.125%",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ビジネスカード選びの3つの基準</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①年会費</strong>：事業規模との釣合い。年商3000万円以下は無料カード、それ以上はゴールド以上推奨</li>
          <li><strong>②ポイント還元率</strong>：年間利用額×還元率でゴールドの年会費を相殺可能か</li>
          <li><strong>③付帯特典</strong>：空港ラウンジ・旅行保険・ETCカード・従業員用追加カード</li>
        </ul>
      </section>
      <AffiliateCTA
        title="事業資金運用はSBI証券の法人口座で"
        description="ビジネスカード決済の余剰資金をSBI証券の法人口座で運用。米国株・投資信託・個人向け社債で法人資産を最適化。個人NISA・iDeCoと合わせて事業主の総合資産運用を実現。"
        buttonText="SBI証券の詳細"
        href="https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html"
        icon="💳"
        highlight="業界No.1"
      />
    </>
  ),
  "fx-beginner-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FX初心者完全ガイド｜円安時代の資産防衛</h2>
        <p>
          FX（外国為替証拠金取引）は、ドル円など通貨ペアを売買して為替変動から利益を得る投資手法。2022年以降の円安局面で注目度急上昇。1000円〜の少額スタート可、レバレッジ最大25倍、スワップポイント（金利差）で日々の収入も。GMO・DMM・SBIの大手3社で口座開設無料、初心者はドル円のスワップ運用から始めるのが王道です。
        </p>
      </section>
      <ComparisonTableCTA
        title="FX主要口座3社比較"
        services={[
          {
            name: "GMOクリック証券",
            rank: 1,
            highlight: "取引高世界No.1｜スプレッド業界最狭",
            features: [
              "取引高世界1位（10年連続）",
              "ドル円スプレッド0.2銭",
              "スワップポイント業界高水準",
              "1000通貨〜取引可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "世界No.1",
          },
          {
            name: "DMM FX",
            rank: 2,
            highlight: "初心者向け操作性｜LINEサポート",
            features: [
              "LINE問合せ24時間対応",
              "スプレッド0.2銭",
              "取引ツール使いやすい",
              "1万通貨〜",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
          {
            name: "SBI FXトレード",
            rank: 3,
            highlight: "1通貨〜取引可能｜超少額OK",
            features: [
              "1通貨〜取引可能（約4円〜）",
              "スプレッド0.17銭（ドル円）",
              "スワップポイント高水準",
              "手数料完全無料",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">FX初心者の3つの基本戦略</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>①スワップ運用</strong>：ドル円・メキシコペソ・トルコリラで毎日金利受取（年利3〜10%）</li>
          <li><strong>②デイトレード</strong>：短期の値動きで利益、レバレッジ活用でリスク/リワード最大化</li>
          <li><strong>③スイングトレード</strong>：数日〜数週間保有、テクニカル分析ベース</li>
          <li>初心者はスワップ運用＋1万円からのスタートが安全</li>
        </ul>
      </section>
      <AffiliateCTA
        title="FX口座と併せて外貨MMFも｜SBI証券で総合運用"
        description="FX口座でスワップ運用しながら、SBI証券の外貨MMFで米ドル・豪ドルの安定運用。為替手数料無料（住信SBIネット連携）、米国債・海外ETFで多通貨分散投資が可能。"
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
