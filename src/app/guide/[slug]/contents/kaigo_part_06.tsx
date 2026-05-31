import type { ReactNode } from "react";
import { KaigoActionBox } from "./helpers";

export const guideContentsPart06: Record<string, ReactNode> = {
  "parent-garden-plants-vegetable-care": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">庭・植木・家庭菜園の手入れが口頭だけだと、帰省のたびに確認が増えやすい</h2>
        <p>
          実家の庭木、鉢植え、家庭菜園は、季節ごとの手入れや置き場所、道具の場所が家族の記憶に分散しやすいです。
          担当が変わると、「何を見ればよいか」「いつ確認したか」「次に何をする予定か」が分からなくなります。
        </p>
        <p>
          ここで作るのは「剪定や栽培の判断」ではなく、家族内で見返せる手入れメモです。確認済みの内容を短い項目でそろえると、帰省時や当番交代でも迷いにくくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まずは「場所」「対象」「次に確認すること」を短くそろえる</h2>
        <p>最初は詳しい園芸記録よりも、次に見る家族が迷わない手がかりを優先します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>場所: 庭先、玄関横、鉢植え、畑の区画など</li>
          <li>対象: 庭木、花、野菜、鉢植えの呼び名（分かる範囲）</li>
          <li>確認日: 最後に見た日、写真を撮った日、家族で共有した日</li>
          <li>手入れ予定: 水やり、草取り、収穫、落ち葉掃除などの目安</li>
          <li>道具・資材の場所: はさみ、手袋、肥料、支柱などの置き場所</li>
          <li>次に確認すること: 次回帰省時に見る場所、専門窓口へ確認したいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">危険作業や専門判断はメモで決めない</h2>
        <p>
          高い場所の枝、電線付近、重い鉢、農薬や薬剤、伐採や工事が関係する作業は、家族メモだけで判断しない前提にします。
          必要な場合は、自治体、園芸店、造園業者、管理会社などの専門窓口へ確認してください。
        </p>
        <p>
          メモには「確認したいこと」と「問い合わせ先の候補」を残す程度にし、作業の可否や契約判断をこのページで決めないようにします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報は書かず、家族内で共有範囲を決める</h2>
        <p>
          写真や住所、連絡先などを含める場合は、必要最小限に絞り、家族内で管理してください。
          パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報は記録しない前提にします。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-garden-plants-vegetable-care-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_garden_plants_vegetable_care"
        toolLabel="庭・植木・家庭菜園メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8435874"
        boothLabel="庭・植木・家庭菜園 手入れメモテンプレートを見る"
      >
        <p>
          まず無料ツールで、家族内で共有したい庭・植木・家庭菜園メモの項目をそろえます。継続して運用する段階では、BOOTHのテンプレートへ転記しておくと、確認日や次回見直しを整理しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
};
