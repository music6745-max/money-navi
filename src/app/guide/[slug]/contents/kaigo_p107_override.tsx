import type { ReactNode } from "react";
import { KaigoActionBox } from "./helpers";

export const guideContentsP107Override: Record<string, ReactNode> = {
  "care-manager-first-consultation-family-memo": (
    <>
      <section>
        <h2 className="mb-3 text-xl font-bold">初回相談は「困っていること」を短く渡せる形にする</h2>
        <p>
ケアマネジャーや地域包括支援センターへ初めて相談するとき、家族が制度名やサービス名を正確に知っている必要はありません。
先に整理したいのは、親の暮らしで何が変わったか、家族がどこで困っているか、本人が何を嫌がっているかです。
        </p>
        <p>
相談の場で全てを決めようとすると、本人の希望、家族の都合、費用不安、通院や服薬の話が混ざりやすくなります。
生活状況、困りごと、家族の支援、費用と連絡体制を分けて持っていくと、次に確認する窓口や準備物が見えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">家族で先に書いておきたい4つの欄</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
<li>生活状況: 食事、入浴、着替え、買い物、掃除、通院、外出の様子</li>
<li>困りごと: 転倒、物忘れ、電話に出ない、説明が伝わらない、支払い忘れなど</li>
<li>家族の支援: 近くで動ける人、遠方から連絡できる人、記録を残す人</li>
<li>費用と連絡体制: 支払いの不安、領収書の保管、緊急時の連絡順</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">できる日とできない日の差を残す</h2>
        <p>
相談時に伝わりやすいのは、「普段はできるが疲れている日はできない」「電話では元気そうだが家に行くと片付いていない」
といった差です。大きな判断より、日付、場面、家族が見た事実を1行で残すほうが、本人を責める印象も弱くなります。
        </p>
        <p>
記憶違いで揉めないよう、見たことと聞いたことを分けてメモします。医療、介護制度、税金、契約の判断はこのメモだけで決めず、
自治体、相談窓口、医療機関、専門家の案内に沿って確認してください。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">相談前に家族内で仮決めすること</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
<li>相談窓口へ連絡する人と、相談結果を家族へ共有する人</li>
<li>本人へ事前にどう説明するか、相談に同席するかどうか</li>
<li>通院、買い物、書類、支払い確認のうち家族が担える範囲</li>
<li>費用の立替が出た場合の記録方法と領収書の保管担当</li>
<li>相談後に次回まで確認することと、まだ決めないこと</li>
        </ul>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-care-manager-first-consult-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care_manager_first_consult"
        toolLabel="初回相談メモを無料で作る"
        boothHref="https://kaigo-okane.booth.pm/items/8424688"
        boothLabel="ケアマネ初回相談テンプレートを見る"
      >
        <p>
まず無料ツールで相談前に伝えること、家族の役割、聞きたいことを整理します。継続して残す段階では、
BOOTHのテンプレートに転記すると、生活状況、困りごと、質問メモを同じ形式で見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
};
