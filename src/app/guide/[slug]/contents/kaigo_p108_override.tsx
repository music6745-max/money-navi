import type { ReactNode } from "react";
import { KaigoActionBox } from "./helpers";

export const guideContentsP108Override: Record<string, ReactNode> = {
  "parent-hospital-discharge-money": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">入退院時は、お金と連絡先を同時に整理する</h2>
        <p>
          親が入院すると、治療内容だけでなく、支払い、保険証、限度額適用認定証、退院後の生活、介護認定、服薬情報の確認が一気に必要になります。
          家族が慌てないためには、入院中に確認することと、退院前に確認することを分けておくのが有効です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">入院中に確認すること</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>入院費の支払い方法、概算費用、差額ベッド代、保証人や連絡先の扱い</li>
          <li>健康保険証、介護保険証、お薬手帳、診察券、医療保険の請求先</li>
          <li>退院支援窓口、医療ソーシャルワーカー、地域包括支援センターへの相談</li>
          <li>退院後に必要な介護サービス、福祉用具、住宅改修、通院付き添い</li>
          <li>きょうだい間の連絡係、支払い係、書類係、親族への共有範囲</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">退院前に家族で決めること</h2>
        <p>
          退院日は家族の都合だけで決まるものではありません。自宅に戻るのか、ショートステイや施設を挟むのか、通院付き添いを誰が担当するのかを
          早めに確認します。費用面では、入院費の精算、保険請求、介護用品の購入、退院後の交通費を別々に記録します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-hospital-checklist?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-hospital-discharge-money"
        toolLabel="入退院チェックリストを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8424970?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-hospital-discharge-money&utm_content=starter_pack"
        boothLabel="入院・退院・ケアマネ相談パックを見る"
      >
        <p>
          入院直後は無料チェックリストで確認漏れを防ぎ、家族で共有する書き込み用の資料が必要になったら、
          入院・退院・もしも準備・ケアマネ初回相談をまとめたパックに転記します。
        </p>
      </KaigoActionBox>
    </>
  ),
};
