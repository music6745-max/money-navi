import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DecisionBox } from "./helpers";

type AutoInsurancePage =
  | "auto-insurance-comparison-2026"
  | "car-insurance-compare-guide";
type AutoInsuranceVariant = "overview" | "detailed";
type QuoteCtaPosition =
  | "intro_sbi_insweb_cta"
  | "footer_sbi_insweb_cta";

type AutoInsuranceConversionContentProps = {
  page: AutoInsurancePage;
  variant: AutoInsuranceVariant;
};

const quoteCtaCopy = {
  overview: {
    intro: {
      title: "同じ入力条件で見積もり候補を集める",
      description:
        "現在契約の等級、運転者範囲、車種、使用目的、補償条件をそろえて入力し、複数社の候補を確認します。見積もり取得後は条件差がないかを見直してください。",
      buttonText: "無料で自動車保険を一括見積もり",
      highlight: "PR｜同条件で候補を比較",
    },
    footer: {
      title: "比較表に入れる候補をまとめて確認",
      description:
        "同じ入力内容で候補を集め、保険料、補償の差、免責金額、事故時サービスを比較するために使えます。表示結果だけで契約を決めず、各社の最新条件を確認してください。",
      buttonText: "インズウェブで候補を確認",
      highlight: "PR｜見積もり比較の入口",
    },
  },
  detailed: {
    intro: {
      title: "更新案内と並べて見積もり候補を確認",
      description:
        "満期日、現在の等級、運転者条件、車の使い方を確認してから候補を集めます。家族構成や利用状況が変わった場合は、その内容を反映して見積もってください。",
      buttonText: "更新前の候補を無料で確認",
      highlight: "PR｜満期前の見直し",
    },
    footer: {
      title: "見直した条件で更新候補を確認",
      description:
        "必要な補償と運転者条件を整理した後、複数社の候補を確認できます。切替時は現在契約の満期日、新契約の始期日、等級の取扱いを両社へ確認してください。",
      buttonText: "インズウェブで更新候補を確認",
      highlight: "PR｜契約切替前の候補確認",
    },
  },
} as const;

function QuoteComparisonCta({
  page,
  variant,
  position,
}: {
  page: AutoInsurancePage;
  variant: AutoInsuranceVariant;
  position: QuoteCtaPosition;
}) {
  const copy =
    quoteCtaCopy[variant][
      position === "intro_sbi_insweb_cta" ? "intro" : "footer"
    ];

  return (
    <AffiliateCTA
      title={copy.title}
      description={copy.description}
      buttonText={copy.buttonText}
      href="/go/sbi-insweb-auto"
      icon="🚗"
      highlight={copy.highlight}
      page={page}
      position={position}
    />
  );
}

function OfficialComparisonSource({
  variant,
}: {
  variant: AutoInsuranceVariant;
}) {
  const isComparison = variant === "overview";

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">
        {isComparison
          ? "比較表を公的な商品情報で補完する"
          : "見直した補償を公的な商品情報で確認する"}
      </h2>
      <p className="text-sm leading-relaxed">
        日本損害保険協会の
        <a
          href="https://hikaku.sonpo.or.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 font-bold text-primary hover:underline"
        >
          自動車保険商品の比較サイト
        </a>
        では、保険会社ごとの補償、特約、割引、サービスを確認できます。
        {isComparison
          ? " 見積もり表で差が出た項目を確認し、候補会社の契約概要や重要事項説明と照合してください。"
          : " 現在契約から変更する項目が、候補商品の条件でどのように扱われるかを確認してください。"}
      </p>
    </section>
  );
}

function ComparisonIntentContent({ page }: { page: AutoInsurancePage }) {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">
          見積もり比較は、入力条件を固定してから始める
        </h2>
        <p>
          保険料は保険会社名だけでなく、等級、車、運転者、使用目的、走行距離、補償内容で変わります。
          条件が異なる見積もりを並べても、価格差が商品によるものか補償差によるものか判断できません。
          現在契約を基準に、次の入力項目を各社でそろえます。
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
          <li>等級、事故有係数適用期間、保険始期の予定日</li>
          <li>車種、型式、初度登録年月、使用目的、年間走行距離</li>
          <li>運転者の範囲、年齢条件、主に運転する人</li>
          <li>対人・対物、人身傷害、車両保険、免責金額、特約</li>
        </ul>
      </section>

      <QuoteComparisonCta
        page={page}
        variant="overview"
        position="intro_sbi_insweb_cta"
      />

      <DecisionBox
        title="同条件見積もりを比較する3段階"
        points={[
          "現在契約の補償内容を基準欄に書き出し、各見積もりの入力条件を合わせる。",
          "見積もり結果を同じ表に転記し、保険料だけでなく補償差と免責金額を確認する。",
          "候補を絞った後、事故受付、初期対応、ロードサービス、契約条件を公式情報で確認する。",
        ]}
        note="安く見える見積もりでも、補償範囲や運転者条件が狭くなっていれば同条件の比較ではありません。"
      />

      <section>
        <h2 className="text-xl font-bold mb-3">
          見積もり比較表に並べる項目
        </h2>
        <div className="overflow-x-auto rounded-lg border border-card-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/5">
              <tr>
                <th className="px-4 py-3 font-bold">比較欄</th>
                <th className="px-4 py-3 font-bold">記録する内容</th>
                <th className="px-4 py-3 font-bold">差がある時の確認</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                [
                  "年間保険料",
                  "一括払・分割払の総額",
                  "支払方法や適用割引が同じか",
                ],
                [
                  "補償範囲",
                  "対象事故、対象者、保険金額",
                  "現在契約より範囲が狭くないか",
                ],
                [
                  "自己負担",
                  "車両保険などの免責金額",
                  "事故回数による条件差がないか",
                ],
                [
                  "事故時対応",
                  "受付、初期対応、示談交渉",
                  "時間帯や連絡方法に条件がないか",
                ],
                [
                  "付帯サービス",
                  "レッカー、代車、故障対応",
                  "距離、回数、対象外条件を確認",
                ],
              ].map(([label, value, check]) => (
                <tr key={label}>
                  <th className="px-4 py-3 font-bold">{label}</th>
                  <td className="px-4 py-3 text-muted">{value}</td>
                  <td className="px-4 py-3 text-muted">{check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">
          見積もり比較で起きやすい落とし穴
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            車両保険や特約が外れた結果を、同じ補償の値下がりと誤認する
          </li>
          <li>
            使用目的、走行距離、運転者範囲を実態と異なる条件で入力する
          </li>
          <li>
            初年度だけの割引と、継続時にも適用される条件を分けずに比べる
          </li>
          <li>
            見積もり時点の金額を確定保険料と思い込み、申込画面の条件確認を省く
          </li>
        </ul>
      </section>

      <OfficialComparisonSource variant="overview" />

      <QuoteComparisonCta
        page={page}
        variant="overview"
        position="footer_sbi_insweb_cta"
      />

      <p className="text-xs leading-relaxed text-muted">
        本ページは同条件で見積もりを比較する手順を整理するもので、特定の保険会社や補償内容を一律に推奨するものではありません。
        補償、割引、引受条件は保険会社と契約条件によって異なります。
      </p>
    </>
  );
}

function RenewalGuideContent({ page }: { page: AutoInsurancePage }) {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">
          更新案内が届いたら、現在契約と生活の変化を確認する
        </h2>
        <p>
          見直しは、保険料を比べる前に「前回契約から何が変わったか」を整理するところから始めます。
          車の使い方、運転する家族、住所、走行距離、車の価値などが変わっていれば、必要な補償や申告内容も変わる可能性があります。
          満期直前に慌てないよう、更新案内を受け取った時点から確認を進めます。
        </p>
        <ol className="mt-3 space-y-2 text-sm">
          <li>
            <strong>更新案内の確認：</strong>
            満期日、自動更新の有無、変更手続きの期限を確認
          </li>
          <li>
            <strong>利用状況の棚卸し：</strong>
            運転者、使用目的、走行距離、住所や車の変更を整理
          </li>
          <li>
            <strong>補償の再確認：</strong>
            現在の補償、免責金額、特約が今の状況に合うか確認
          </li>
          <li>
            <strong>更新・切替の判断：</strong>
            現契約の更新条件と候補の重要事項を比較
          </li>
        </ol>
      </section>

      <QuoteComparisonCta
        page={page}
        variant="detailed"
        position="intro_sbi_insweb_cta"
      />

      <DecisionBox
        title="見直し前に用意する4つの情報"
        points={[
          "現在の保険証券または契約内容と、今回届いた更新案内。",
          "車検証の情報、運転免許証、主に運転する人と同居家族の状況。",
          "使用目的、年間走行距離、通勤利用など、前回契約から変わった使い方。",
          "事故・保険金請求の有無と、等級・事故有係数適用期間の案内。",
        ]}
        note="申告内容に迷う項目は推測で入力せず、現在または候補の保険会社へ確認します。"
      />

      <section>
        <h2 className="text-xl font-bold mb-3">
          補償選択のチェックリスト
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "相手への賠償",
              "対人・対物賠償の保険金額、対象外となるケース、事故時の連絡方法",
            ],
            [
              "自分と同乗者",
              "人身傷害などの対象者、対象事故、支払条件、保険金額",
            ],
            [
              "車の損害",
              "車両保険の対象事故、免責金額、車の時価、ローン残高との関係",
            ],
            [
              "運転する人",
              "本人、配偶者、同居家族、別居の家族など、対象となる範囲と年齢条件",
            ],
            [
              "重複しやすい特約",
              "弁護士費用など、家族の別契約や他の保険で補償が重ならないか",
            ],
            [
              "事故・故障時の支援",
              "事故受付、初期対応、ロードサービス、代車などの利用条件",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-lg border border-card-border bg-card-bg p-4"
            >
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">
          更新または切替を進める順番
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>現在の保険会社から、更新後の条件と保険料を確認する</li>
          <li>生活の変化を反映し、必要な補償と運転者条件を整理する</li>
          <li>整理した条件で候補を見積もり、契約概要を比較する</li>
          <li>切替える場合は、等級と事故有係数の取扱いを両社へ確認する</li>
          <li>現在契約の満期日と新契約の始期日を合わせ、空白や重複を防ぐ</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">
          更新手続きで見落としやすい点
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>自動更新や継続手続きの方法を確認せず、二重契約になる</li>
          <li>家族が運転するようになったのに、運転者範囲を変更していない</li>
          <li>通勤利用など使用目的の変化を、申告内容へ反映していない</li>
          <li>切替日だけを決め、等級や事故有係数の引継ぎを確認していない</li>
        </ul>
      </section>

      <OfficialComparisonSource variant="detailed" />

      <QuoteComparisonCta
        page={page}
        variant="detailed"
        position="footer_sbi_insweb_cta"
      />

      <p className="text-xs leading-relaxed text-muted">
        本ページは満期前の確認手順を整理するもので、特定の補償内容や保険会社を一律に推奨するものではありません。
        補償を変更する場合は、現在と候補の保険会社が示す契約概要・重要事項説明をご確認ください。
      </p>
    </>
  );
}

export function AutoInsuranceConversionContent({
  page,
  variant,
}: AutoInsuranceConversionContentProps) {
  return variant === "overview" ? (
    <ComparisonIntentContent page={page} />
  ) : (
    <RenewalGuideContent page={page} />
  );
}
