import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DecisionBox } from "./helpers";

type AutoInsuranceConversionContentProps = {
  page: "auto-insurance-comparison-2026" | "car-insurance-compare-guide";
  variant: "overview" | "detailed";
};

export function AutoInsuranceConversionContent({
  page,
  variant,
}: AutoInsuranceConversionContentProps) {
  const isDetailed = variant === "detailed";

  return (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">
          {isDetailed
            ? "更新前に、補償条件をそろえて比較する"
            : "ネット型と代理店型は、加入方法と相談方法が異なる"}
        </h2>
        <p>
          代理店型は担当者に相談しながら検討でき、ネット型は自分で補償内容を選ぶ代わりに、
          保険料を抑えやすい傾向があります。ただし、保険料は年齢、等級、車種、使用目的、
          運転者範囲、補償内容などで変わるため、同じ条件で見積もらなければ比較できません。
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
          <li>現在の保険証券または契約内容を手元に用意する</li>
          <li>対人・対物、人身傷害、車両保険の条件をそろえる</li>
          <li>運転者範囲、年齢条件、年間走行距離、使用目的をそろえる</li>
          <li>保険料だけでなく、事故受付、初期対応、ロードサービスも確認する</li>
        </ul>
      </section>

      <AffiliateCTA
        title="満期前に同じ条件で比較｜インズウェブ自動車保険"
        description="現在の等級・運転者範囲・車種などを入力し、複数社の見積もり候補をまとめて確認できます。候補を絞った後、各社の契約概要と重要事項説明を確認してください。"
        buttonText="無料で自動車保険を一括見積もり"
        href="/go/sbi-insweb-auto"
        icon="🚗"
        highlight="PR｜無料一括見積もり"
        page={page}
        position="intro_sbi_insweb_cta"
      />

      <DecisionBox
        title="比較はこの順番で進める"
        points={[
          "現在契約と同じ補償条件で見積もり、まず保険料差を確認する。",
          "候補を2〜3社に絞り、補償範囲、免責金額、事故対応、ロードサービスを比べる。",
          "変更する場合は、現在契約の満期日と新契約の始期日が途切れないよう両社に確認する。",
        ]}
        note="家族の運転状況や車の使い方が変わった場合は、保険料だけでなく必要な補償そのものを見直します。"
      />

      <section>
        <h2 className="text-xl font-bold mb-3">保険料以外に確認する項目</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["相手への補償", "対人・対物賠償の保険金額と適用条件"],
            ["自分と同乗者の補償", "人身傷害などの対象者・対象事故・保険金額"],
            ["車の補償", "車両保険の対象事故、免責金額、車の時価とのバランス"],
            ["運転者条件", "本人・配偶者・家族などの範囲と年齢条件"],
            ["事故時の支援", "受付時間、初期対応、示談交渉、ロードサービス"],
            ["契約の切替", "満期日、始期日、等級・事故有係数の引継ぎ確認"],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-card-border bg-card-bg p-4">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">公的な比較情報も併用する</h2>
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
          では、保険会社ごとの補償・特約・割引・サービスを確認できます。
          保険料だけで決めず、候補会社の契約概要や重要事項説明と合わせて使ってください。
        </p>
      </section>

      <AffiliateCTA
        title="候補を絞るための一括見積もり"
        description="同じ入力条件で複数社の候補を確認し、保険料と補償内容を比較する最初の一歩に使えます。申込み前には各保険会社の最新条件を必ず確認してください。"
        buttonText="インズウェブで無料見積もり"
        href="/go/sbi-insweb-auto"
        icon="🚗"
        highlight="PR｜契約前の候補比較"
        page={page}
        position="footer_sbi_insweb_cta"
      />

      <p className="text-xs leading-relaxed text-muted">
        本ページは一般的な比較手順を整理するもので、特定の補償内容や保険会社を一律に推奨するものではありません。
        補償・割引・引受条件は保険会社や契約条件によって異なります。
      </p>
    </>
  );
}
