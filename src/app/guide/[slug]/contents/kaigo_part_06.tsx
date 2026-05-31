import type { ReactNode } from "react";
import { KaigoActionBox } from "./helpers";

export const guideContentsPart06: Record<string, ReactNode> = {
  "parent-belongings-name-label-carryout-management": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">親の持ち物は、記名・持ち出し・返却の情報が散らばりやすい</h2>
        <p>
          施設に持ち込む衣類や日用品、通院や外出で持っていくものは、家族の誰かがその場で対応して終わりになりがちです。
          後から見ると、どこまで名前を書いたか、何を持ち出したか、施設や自宅へ戻したかが分かりにくくなります。
        </p>
        <p>
          ここで作るのは、施設ルールや管理方法を決めるためのものではなく、家族内で見返せる持ち物メモです。
          確認済みの事実を同じ形式で残すと、面会、外出、一時帰宅、入退院準備のときに探しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まずは「品名」「特徴」「名前つけ状況」を短くそろえる</h2>
        <p>完璧な台帳を目指すより、次に見た家族が迷わない手がかりを優先します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>品名: 衣類、タオル、コップ、靴、かばんなど</li>
          <li>特徴: 色、柄、サイズ、目印、似ている物との違い</li>
          <li>名前つけ状況: 済み / 未確認 / 次回確認、書いた場所</li>
          <li>置き場所: 自宅、施設、かばん、収納ケースなど分かる範囲</li>
          <li>持ち出し・返却: いつ、誰が、どこへ持ち出したか、戻したか</li>
          <li>次に確認すること: 施設へ確認したいこと、家族内で見ること</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">施設やサービスのルールは利用先へ確認する</h2>
        <p>
          持ち込み可否、記名方法、洗濯、保管、返却、紛失時の扱いは、施設やサービスごとに異なります。
          家族メモには「確認した内容」と「未確認のこと」を分けて残し、判断が必要な点は利用先の案内や担当窓口へ確認してください。
        </p>
        <p>
          医療、契約、費用負担、施設との交渉、紛失時の対応判断は、このページやメモでは扱いません。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報と秘密情報は書きすぎない</h2>
        <p>
          持ち物メモには氏名や施設名などが含まれることがあります。共有先は家族内に絞り、外部へ転送しない前提で扱います。
          パスワード、暗証番号、ログイン情報、口座番号、カード番号、マイナンバーなどの秘密情報は記録しないでください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-belongings-name-label-carryout-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_belongings_name_label_carryout"
        toolLabel="持ち物・名前つけ管理メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8436265"
        boothLabel="持ち物 名前つけ・持ち出し管理メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、品名、特徴、記名状況、持ち出し・返却確認を短くそろえます。継続して見返す段階では、BOOTHのテンプレートへ転記しておくと、面会や一時帰宅のたびに確認しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-memory-family-history-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">親が話してくれた昔の話は、後から思い出そうとすると抜けやすい</h2>
        <p>
          帰省や電話で聞いた子どもの頃の話、仕事や暮らしの話、家族の節目の話は、その場では覚えているつもりでも時間がたつと細部が曖昧になりがちです。
          写真やアルバムと結びついている話ほど、家族の誰か一人の記憶だけに残っていることもあります。
        </p>
        <p>
          ここで作るのは、正確な家系図や法的な記録ではなく、家族内で見返せる思い出メモです。聞いた話を短く残しておくと、次に会ったときに続きを聞きやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">最初は「いつ」「どこで」「どんな話だったか」だけでよい</h2>
        <p>完璧な年表を作ろうとすると続きにくいため、まずは会話の断片を残します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>聞いた日: 帰省日、電話した日、写真を見た日</li>
          <li>話の時期: 子どもの頃、学生時代、仕事、結婚、子育て、引っ越しなど</li>
          <li>場所: 生まれた地域、学校、職場、住んでいた家、よく行った場所</li>
          <li>話してくれたこと: 印象に残った一言、出来事、好きだったもの</li>
          <li>一緒に見たもの: 写真、手紙、記念品、アルバムなど</li>
          <li>次に聞きたいこと: 続き、登場人物、時期、写真の説明など</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">手続きや判断が必要な情報とは分けておく</h2>
        <p>
          思い出の記録と、財産、相続、契約、医療、介護サービスの判断が必要な情報は分けて管理します。
          このページやメモは、家族の会話を整理するためのもので、手続きや専門判断の代わりにはなりません。
        </p>
        <p>
          判断が必要な内容が出てきた場合は、会話メモに結論を書き込むのではなく、「公式書類で確認する」「専門窓口に聞く」など次の確認先だけを残します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">公開範囲と秘密情報に注意する</h2>
        <p>
          家族の思い出には、本人や親族が外に出したくない話が含まれることがあります。共有先は家族内に絞り、必要がなければ外部サービスやSNSへ転記しない前提にします。
          パスワード、暗証番号、ログイン情報、口座番号、カード番号、マイナンバーなどの秘密情報は記録しないでください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-memory-family-history-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_memory_family_history_record"
        toolLabel="思い出・家族の歴史メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8436039"
        boothLabel="思い出・家族の歴史 書き留めメモテンプレートを見る"
      >
        <p>
          まず無料ツールで、親が話してくれたことや次に聞きたいことを短くそろえます。継続して残す段階では、BOOTHのテンプレートへ転記しておくと、生い立ち年表や家族の節目を見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
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
