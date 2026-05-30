import type { ReactNode } from "react";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { KaigoActionBox } from "./helpers";

export const guideContentsPart01: Record<string, ReactNode> = {
  "parent-shopping-supplies-replenishment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">買い物と日用品補充が「口頭だけ」だと、担当が変わったときに抜け漏れが起きやすい</h2>
        <p>
          親の暮らしを家族で支える中で、買い物や日用品の補充は「行ける人がついでにやる」になりがちです。ところが担当が入れ替わると、
          何を買ってよいか、何を買わなくてよいか、どれくらい残っているかが分からず、重複や不足が起きやすくなります。
        </p>
        <p>
          ここで作るのは「買うべきかどうかの判断」ではなく、家族内で見返せる買い物メモです。定番品と補充の目安をそろえると、迷いが減ります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まずは「定番」「買わない」「補充目安」「季節行事」を分けて短くそろえる</h2>
        <p>最初は完璧に書くよりも、あとで見返せる形を優先します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>よく買う定番品: 商品名 / 目安の数量 / 購入先（分かる範囲）</li>
          <li>買わなくてよいもの: すでに十分ある、親が使わない、重複しやすいもの</li>
          <li>補充の目安: 例）残り2つになったら補充、月末にまとめ買い、帰省時に確認</li>
          <li>季節行事の準備: 例）夏の虫よけ、冬の防寒、年末年始の備え（必要な範囲だけ）</li>
          <li>代替案: 欠品時に別の物で代用してよいか（家族内メモ）</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">共有範囲を決めて、秘密情報は書かない</h2>
        <p>
          買い物メモは家族の生活情報が含まれやすいので、共有範囲（誰まで見られるか）と保管場所を決めます。外部転送や公開を前提にしない運用が安全です。
        </p>
        <p>
          パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報は記録しないようにします。契約や制度、医療・介護の最終判断が必要な場合は、公式の案内や関係窓口へ確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-shopping-supplies-replenishment-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_shopping_supplies_replenishment"
        toolLabel="買い物・日用品補充メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8434977"
        boothLabel="買い物・日用品補充メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、家族内で共有したい買い物メモの項目をそろえます。継続して運用する段階では、BOOTHのテンプレートへ転記しておくと、定番品や季節行事の更新履歴を整理しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-neighborhood-contact-list": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">近所や地域の連絡先が曖昧だと、急な確認が必要なときに家族が迷いやすい</h2>
        <p>
          離れて暮らす親の暮らしでは、家族だけで状況を確認できない場面があります。回覧や自治会連絡、管理会社とのやりとりなど、地域側の窓口が分からないと行き違いが起きやすいです。
        </p>
        <p>
          ここで作るのは「判断のマニュアル」ではなく、家族内で見返せる連絡先メモです。連絡先と補足をそろえておくと、担当が入れ替わっても迷いにくくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">連絡先は「関係性」と「連絡してよい条件」をセットで残す</h2>
        <p>
          電話番号だけを並べると、後から「何の用件で連絡してよいか」が分からなくなります。最初は次の項目を短くそろえます。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>呼び名: 近所の人・町内会・管理会社など（実名は必要な範囲だけ）</li>
          <li>関係性: 何の窓口か（回覧、建物管理、見守りの連絡先など）</li>
          <li>連絡してよい用件: どんな時に連絡してよいか（家族内の目安）</li>
          <li>連絡手段: 電話、メール、掲示板、LINEなど分かる範囲</li>
          <li>注意点: 伝えるときの一言メモ（短く）</li>
        </ul>
        <p className="mt-3">
          「連絡してよい用件」を書いておくと、家族の誰が見ても迷いにくくなります。判断が必要な場面では、関係窓口や公式の案内に従って確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">共有範囲を決めて、秘密情報は書かない</h2>
        <p>
          連絡先メモには個人情報が含まれやすいので、家族内での共有範囲（誰まで見られるか）と保管場所を決めます。外部転送や公開を前提にしない運用が安全です。
        </p>
        <p>
          また、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報は記録しないようにします。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-neighborhood-contact-list-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_neighborhood_contact_list"
        toolLabel="近所・地域連絡先メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383033"
        boothLabel="近所付き合い・地域連絡先 整理メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、家族内で共有したい連絡先の「項目」をそろえます。継続して見返す段階では、BOOTHのテンプレートへ転記しておくと、更新履歴や補足メモを整理しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-checkin-contact-log": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">定期連絡の記録がないと、担当が入れ替わったときに不安が増えやすい</h2>
        <p>
          離れて暮らす親へ電話や訪問をしていると、連絡した内容はチャットや口頭で流れてしまいがちです。
        </p>
        <p>
          その結果、「いつ誰が連絡したか」「つながらなかった日はあったか」「次に確認することは何か」が見えなくなり、きょうだい間で重複や抜け漏れが起きやすくなります。
        </p>
        <p>正解を決めるよりも、家族が見返せる形で“事実”をそろえるのが目的です。</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「いつ・誰が・どの方法で・どうだったか」を短くそろえる</h2>
        <p>最初は細かい文章よりも、あとで見返せる手がかりをそろえます。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>日時: 連絡した日付と時間帯</li>
          <li>担当者: 連絡した家族（呼び名でOK）</li>
          <li>方法: 電話、メッセージ、訪問など</li>
          <li>対応可否: つながった / つながらなかった</li>
          <li>短い様子メモ: いつも通り、少し元気がない、次回聞きたいこと など</li>
        </ul>
        <p className="mt-3">月末などに、回数だけでも振り返れる形にしておくと、話し合いの材料になります。</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">つながらなかった日の「対応経緯」だけ残しておく</h2>
        <p>
          連絡が取れない日は、焦って判断を書くのではなく、試したことと結果だけを短く残します。次の担当者が同じことを繰り返さずに済みます。
        </p>
        <p>
          急ぎの判断や連絡先の確認が必要な場合は、家族内だけで抱えず、自治体や地域包括支援センターなどの関係窓口へ確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と最終判断は書かない</h2>
        <p>
          パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報は記録しない前提にします。
        </p>
        <p>
          また、医療・介護サービスの評価判断、契約判断、行政・法律・税務・金融・保険の判断は扱いません。必要な場合は担当窓口や専門職に確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-checkin-contact-log-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_checkin_contact_log"
        toolLabel="定期連絡記録メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8434675"
        boothLabel="安否確認・定期連絡 記録メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、家族内で共有したい連絡記録の形式をそろえます。継続して運用する段階では、BOOTHのテンプレートへ転記しておくと、月次まとめや見返しがしやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "kaigo-family-duty-role-share-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">当番と役割が曖昧だと、負担の偏りと認識ズレが起きやすい</h2>
        <p>
          きょうだい・家族で介護を分担していると、「誰が何を担当しているか」「今月の当番は誰か」が口頭だけになりやすいです。
        </p>
        <p>
          その状態が続くと、負担が偏っているように感じたり、後から「言った言わない」になったりして、話し合いが難しくなります。
        </p>
        <p>
          大事なのは正解を決めることではなく、家族が見返せる形で「担当」と「当番」と「実績」をそろえることです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「担当エリア」と「月次当番」を分けて整理する</h2>
        <p>
          まず、役割をざっくり項目に分けます。細かさよりも「家族が迷わない単位」を優先します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>連絡窓口: ケアマネ・病院・施設との連絡、問い合わせ担当</li>
          <li>訪問・買い物: 帰省、訪問、日用品の補充、必要な確認</li>
          <li>費用記録: 立替、領収書確認、分担の見える化</li>
          <li>実家整理: 置き場所、家事ルーティン、申し送りの更新</li>
          <li>家族共有: 月1などで全体を共有するまとめ役</li>
        </ul>
        <p className="mt-3">
          次に、月ごとの当番（誰がいつ担当するか）を決めます。最初は「訪問・連絡の予定」だけでもOKで、実績は後から追記します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">実績と変更を短く残し、見直しタイミングを作る</h2>
        <p>
          当番や役割は、状況によって変わります。変更が起きたときに「変更日」と「変更内容」だけでも残しておくと、次の見直しがスムーズです。
        </p>
        <p>
          半年ごと、入退院の前後、施設入所の前後など、見直すタイミングを決めておくと、更新されないまま形骸化しにくくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と判断は書かない</h2>
        <p>
          このメモには、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報を書かないようにします。
        </p>
        <p>
          また、家族間の意見調整・仲裁、医療や介護サービスの評価判断、契約判断は扱いません。必要な場合は担当窓口や専門職に確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-family-duty-role-share-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=family_duty_role_share_memo"
        toolLabel="当番・役割分担メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383027"
        boothLabel="当番・役割分担 記録メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、担当エリアと当番スケジュールを整理し、実績と変更を追記できる形にします。繰り返し見返す段階では、BOOTHのテンプレートへ転記しておくと、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          単品をまとめて整えたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383440"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            介護はじめの87商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "kaigo-family-handover-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">申し送りが散らばると、当番交代で抜け漏れが起きやすい</h2>
        <p>
          介護は、帰省のたび、きょうだいの当番交代、通院付き添い、ショートステイやデイサービスの前後などで、担当者が入れ替わりやすいです。
        </p>
        <p>
          そのたびにLINEや電話で伝えたことが流れてしまうと、「何が決まったか」「次に誰が何を確認するか」が曖昧になり、抜け漏れや二度手間が増えます。
        </p>
        <p>大事なのは正解を作ることではなく、家族が引き継げる形式で「決まったこと」と「未決のこと」をそろえることです。</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「事実」「決まったこと」「次に確認」「連絡が必要」を分ける</h2>
        <p>
          申し送りは長くしすぎると見返されません。評価や推測を増やすよりも、次の担当者が迷わない手がかりだけを短く残します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>事実: 今日見たこと、聞いたこと（例: 食事の様子、会話、服薬の確認など）</li>
          <li>決まったこと: 次回の予定、家族内で合意したこと</li>
          <li>次に確認: 担当窓口へ聞くこと、次回帰省で見たいこと</li>
          <li>連絡が必要: 誰に、いつまでに、何を連絡するか</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">日次・帰省後まとめ・定期共有の3レイヤーにする</h2>
        <p>
          1回の帰省だけで完結しないことが多いため、日々の短い申し送りと、帰省後のまとめ、家族への定期共有を分けると、見返しやすくなります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>日次: その日気づいたこと・変更点だけを短く残す</li>
          <li>帰省後まとめ: 決まったこと・未決のこと・次の担当を一度まとめる</li>
          <li>定期共有: 月1などで、家族に共有する要点だけを整理する</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と判断は書かない</h2>
        <p>
          このメモには、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報を書かないようにします。
        </p>
        <p>
          また、受診や治療、介護サービスの利用可否、契約の最終判断は扱いません。必要な場合は、担当窓口や専門職に確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-family-handover-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=family_handover_memo"
        toolLabel="申し送り・引き継ぎメモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383018"
        boothLabel="申し送り・引き継ぎメモ テンプレートを見る"
      >
        <p>
          まず無料ツールで、日次・帰省後まとめ・定期共有の3つに分けて書き出します。繰り返し見返す段階では、BOOTHのテンプレートへ転記しておくと、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          実家まわりの整理をまとめて進めたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383305"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            親の介護はじめの37商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-home-cleaning-laundry-housework-routine": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">実家の家事は「いつ・誰が・どこまで」が曖昧だと負担が増える</h2>
        <p>
          掃除や洗濯、ゴミ出し、片付けのような日常家事は、親が元気なうちは「いつものやり方」で回っていても、
          帰省や通院付き添い、短期利用の前後などで家族が入れ替わると、抜け漏れや重複が起きやすくなります。
        </p>
        <p>
          大事なのは正解を作ることではなく、家族が引き継げる形で「頻度」と「担当」と「申し送り」をそろえることです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「毎日/週1/不定期」に分けて書き出す</h2>
        <p>
          最初に、家事を頻度で分けます。細かさよりも、家族が迷わない単位を優先します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>毎日: ゴミの仮置き、キッチンの片付け、洗濯物の取り込みなど</li>
          <li>週1: 掃除機、浴室、トイレ、シーツ交換など</li>
          <li>不定期: 季節の大掃除、換気扇、カーテン洗い、粗大ゴミなど</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「場所」と「申し送り」を短く残す</h2>
        <p>
          家族が変わる場面で困りやすいのは、掃除道具や洗剤の場所、ゴミ出しの出し方、洗濯物の干し方などの小さな差分です。
        </p>
        <p>次の人が迷わない手がかりだけを短い言葉で残します。</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と安全判断は書かない</h2>
        <p>
          このメモには、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報を書かないようにします。
        </p>
        <p>
          また、設備操作、安全判断、専門作業が必要な内容は扱いません。必要な場合は、メーカーや自治体、専門業者の案内を確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-home-cleaning-laundry-housework-routine-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=housework_routine_memo"
        toolLabel="家事ルーティン共有メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383008"
        boothLabel="掃除・洗濯・家事ルーティン共有テンプレートを見る"
      >
        <p>
          まず無料ツールで、家事タスクを頻度別に書き出し、担当と申し送りを整理します。繰り返し見返す段階では、BOOTHのテンプレートへ転記しておくと、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          実家まわりの整理をまとめて進めたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383305"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            親の介護はじめの37商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-home-clothes-bedding-season-size-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">衣類と寝具は「サイズ」と「保管場所」が分からないと準備が止まる</h2>
        <p>
          帰省や入院・退院の前後、施設の見学や短期利用などで、親の衣類や寝具の準備が必要になることがあります。
        </p>
        <p>
          そのときに「どこにあるか」「どのサイズか」「季節物の入れ替えは済んでいるか」が分からないと、探す時間が増え、家族の負担になりやすいです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">カテゴリ別に「探す手がかり」をそろえる</h2>
        <p>
          正確さよりも、家族が探せる手がかりをそろえることを優先します。普段使うものから、短い言葉で書き留めるのがコツです。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>普段着・外出着: 上着、ズボン、部屋着など</li>
          <li>下着・靴下: サイズ、予備の有無、入っている引き出し</li>
          <li>季節物: 冬物コート、夏物寝具などの保管場所</li>
          <li>寝具: 布団、毛布、シーツなどの置き場所と替え</li>
          <li>家族共有メモ: 次に確認したいこと、更新ルール</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">更新ルールを決めて「次の人が困らない」状態にする</h2>
        <p>
          衣類や寝具は入れ替えが起きやすい領域です。メモを作ったら、次に見直すタイミングを決めておくと放置されにくくなります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>季節替えの後に更新する</li>
          <li>買い替え・処分・収納場所変更があったら更新する</li>
          <li>次回帰省日など、見直し日をメモに残す</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と外部ルールの判断は書かない</h2>
        <p>
          このメモには、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報を書かないようにします。
        </p>
        <p>
          また、施設やサービスの持ち物ルール、衣類の管理方法、洗濯や預け方の判断は利用先ごとに異なります。必要な場合は、利用先の案内や担当窓口に確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-clothes-bedding-season-size-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=clothes_bedding_size_memo"
        toolLabel="衣類・寝具・サイズメモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383004"
        boothLabel="衣類・寝具・季節替え・サイズ管理テンプレートを見る"
      >
        <p>
          まず無料ツールで、衣類・寝具のカテゴリ、サイズ、保管場所、季節替えメモを作ります。繰り返し見返す段階では、BOOTHの
          テンプレートへ転記しておくと、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          実家まわりの整理をまとめて進めたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383305"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            親の介護はじめの37商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-home-storage-location-map": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">実家の日用品は「どこにあるか」が分からないと詰まる</h2>
        <p>
          帰省したときに「洗剤はどこ？」「タオルの替えはどこ？」「掃除機はどこにしまった？」と、親に聞かないと分からない場面があります。
        </p>
        <p>
          親が入院して実家にひとりで行く状況では、日用品の置き場所が分からないだけで、家の中の用事が止まりやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">部屋別 → 収納場所別で「探す手がかり」をそろえる</h2>
        <p>
          正確さよりも、家族が探せる手がかりをそろえることが大切です。部屋名と、棚・引き出し・戸棚などの場所を先に決めると、書き方がぶれにくくなります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>部屋: 台所、リビング、寝室、洗面所、押し入れ、玄関など</li>
          <li>収納場所: 棚、引き出し、戸棚、ケース、ファイルなど</li>
          <li>品目: 洗剤、タオル、寝具、掃除用具、洗濯用品、電球の予備など</li>
          <li>メモ: 棚の段、引き出しの位置、ラベル名など</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と設備操作は書かない</h2>
        <p>
          通帳、印鑑、カード、鍵、パスワード、暗証番号、ログイン情報、口座番号、マイナンバーなどの秘密情報は記録しないようにします。
        </p>
        <p>
          また、医薬品・医療用品の保管場所、ブレーカー、ガス元栓、水道元栓、給湯器などの設備場所・操作は対象外とし、必要な場合は公式案内や専門業者へ確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">更新ルールを決めると続く</h2>
        <p>
          置き場所は少しずつ変わります。変更があったら誰が更新するか、次に見直すタイミング（次回帰省時など）を決めておくと、情報が古くなりにくくなります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-home-storage-location-map-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=storage_location_map"
        toolLabel="収納場所・置き場所マップを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383002"
        boothLabel="収納場所・置き場所マップテンプレートを見る"
      >
        <p>
          まず無料ツールで、部屋別・棚段別の置き場所をざっくり整理し、継続して見返す段階ではBOOTHのテンプレートへ転記すると、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          複数テーマをまとめて整えたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383305"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            親の介護はじめの37商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-home-appliance-remote-manual-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">実家の家電は家族が代わりに使う場面がある</h2>
        <p>
          高齢の親の家では、エアコン、テレビ、録画機、固定電話、洗濯機、電子レンジ、インターホン、照明など、
          日常的に使う家電が複数あります。
        </p>
        <p>
          親本人はいつもの操作として使えていても、帰省した家族が代わりに操作すると、リモコンのボタン、取扱説明書の場所、
          保証書や型番の控えが分からず、対応に時間がかかることがあります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">操作メモと書類の場所を分けて残す</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>家電名: エアコン、テレビ、録画機、電話、洗濯機、電子レンジ、照明など</li>
          <li>よく使う操作: 電源、温度変更、入力切替、録画再生、音量、タイマーなど</li>
          <li>取扱説明書: 保管場所、ファイル名、棚や引き出しの位置</li>
          <li>保証書・購入情報: 型番、購入日、購入店、保証期限の控え</li>
          <li>家族共有メモ: 次に確認すること、家族へ伝えたいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">秘密情報と専門作業は書かない</h2>
        <p>
          家電まわりのメモには、パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバーなどの秘密情報を書かないようにします。
          家族で見返すメモほど、紛失や共有範囲に注意が必要です。
        </p>
        <p>
          また、給湯器、IH、ブレーカー、ガス栓、水道元栓などの設備操作、修理、交換、配線、工事、点検の判断は家庭内メモで扱いません。
          必要な場合は、取扱説明書、メーカー窓口、専門業者の案内を確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">帰省時に少しずつ作ると続けやすい</h2>
        <p>
          すべての家電を一度に整理しようとすると負担が大きくなります。
          まずはエアコン、テレビ、電話など、家族が代わりに使う可能性が高いものから始めると続けやすくなります。
        </p>
        <p>
          写真で済ませる情報と、文字で残す情報を分け、家族の誰が見ても分かる短い言葉で書くことが大切です。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-home-appliance-remote-manual-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=home_appliance_manual_memo"
        toolLabel="家電リモコン・説明書メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382997"
        boothLabel="家電リモコン・取扱説明書テンプレートを見る"
      >
        <p>
          まず無料ツールで、よく使う家電、リモコン操作、取扱説明書や保証書の保管場所を整理し、継続して見返す段階ではBOOTHの
          高齢親の家電・リモコン・取扱説明書メモテンプレートへ転記すると、家族間で共有しやすくなります。
        </p>
        <p className="mt-2">
          複数テーマをまとめて整えたい場合は、
          <a
            href="https://kaigo-okane.booth.pm/items/8383305"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline underline-offset-2"
          >
            親の介護はじめの37商品まとめセット
          </a>
          も比較候補になります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "home-care-consumables-stock-replenishment": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">在宅介護の消耗品は種類が増えやすい</h2>
        <p>
          在宅介護では、大人用紙おむつ、尿とりパッド、防水シーツ、ウェットティッシュ、使い捨て手袋、口腔ケア用品、保湿用品、消臭袋など、
          日常的に使うものが少しずつ増えていきます。
        </p>
        <p>
          足りなくなってから買いに行くと、本人の状態や家族の予定と重なり、慌ただしくなります。
          家族で残量と補充予定を見える化しておくと、買い忘れや二重購入を減らしやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">カテゴリ別に分けると見返しやすい</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>排泄ケア用品: 大人用紙おむつ、尿とりパッド、防水シーツ、消臭袋</li>
          <li>清潔・衛生用品: ウェットティッシュ、清拭クロス、使い捨て手袋、マスク</li>
          <li>口腔・皮膚ケア用品: 歯ブラシ、スポンジブラシ、保湿クリーム、ガーゼ</li>
          <li>介護者・環境用品: 使い捨てエプロン、ゴミ袋、消臭剤、掃除用品</li>
          <li>買い物メモ: 補充したい数量、購入先、次に確認する人</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">残量は正確な数より目安でよい</h2>
        <p>
          消耗品の在庫管理は、正確な棚卸しを目指すより、「残り少ない」「次回買う」「まだ余裕がある」といった目安を共有するほうが続きやすいです。
          特に別居家族が買い物を担当する場合は、商品名、サイズ、購入先、普段買う個数を残しておくと迷いにくくなります。
        </p>
        <p>
          定期的に使うものは、週末や通院日、家族訪問日など、見直すタイミングを決めておくと更新漏れを減らせます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">医薬品や専門用品の判断には使わない</h2>
        <p>
          この整理は、家庭内で使う介護消耗品の買い物メモです。
          医薬品、処方薬、市販薬、サプリ、治療用品、医療機器、栄養補助食品の管理や判断には使いません。
        </p>
        <p>
          用品の選定、使用量、交換頻度、皮膚トラブル、介護保険給付の扱いに迷う場合は、担当ケアマネジャー、訪問看護師、福祉用具事業者、医師、薬剤師などへ確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-home-care-consumables-stock-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=consumables_stock_memo"
        toolLabel="消耗品の在庫・補充メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382994"
        boothLabel="消耗品在庫・補充テンプレートを見る"
      >
        <p>
          まず無料ツールで今足りないもの、次に買うもの、家族へ伝えることを整理し、継続して見返す段階ではBOOTHの
          在宅介護の消耗品 在庫・補充メモテンプレートへ転記すると、日々の補充漏れを減らしやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-doctor-pharmacy-prescription-info-list": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">医療機関・薬局情報は急な時ほど探しにくい</h2>
        <p>
          高齢の親が複数の医療機関や薬局を利用していると、家族の間で「どの病院に連絡すればよいか」「いつからどの薬を飲んでいるか」が散らばりやすくなります。
          通院付き添い、急な体調変化、ショートステイや入退院の準備では、連絡先と薬の名前をすぐ確認できることが重要です。
        </p>
        <p>
          ただし、家族メモは医療判断のためのものではありません。お薬手帳や薬袋に書かれている情報を控え、家族が同じ情報を見られるようにするための整理です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">お薬手帳の代わりではなく家族用の控えにする</h2>
        <p>
          お薬手帳は、医療機関や薬局で確認してもらう公式な記録として引き続き使います。
          家族用メモでは、手帳や薬袋から転記した薬の名前、用法メモ、処方元、確認日を一覧にして、別居家族や介護者が見返しやすい形に整えます。
        </p>
        <p>
          写真だけで共有すると、情報が古くなった時に気づきにくいことがあります。最後に確認した日、変更があった日、次に確認する相手を残しておくと、情報の更新漏れを減らせます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">書く項目を分けておく</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>医療機関: 病院名、診療科、担当医、電話番号、受診メモ</li>
          <li>薬局: 薬局名、電話番号、担当者、利用時に伝えること</li>
          <li>薬の情報: 処方薬、市販薬、サプリの名前、薬袋やお薬手帳に書かれている用法メモ</li>
          <li>更新履歴: いつ誰が確認したか、変更があった薬や連絡先</li>
          <li>相談メモ: 医師や薬剤師へ確認したいこと、家族へ共有したいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">飲み合わせ・副作用・用法は専門職へ確認する</h2>
        <p>
          家族メモを作っても、薬の飲み合わせ、副作用、用法、服薬変更、受診要否を家族だけで判断することはできません。
          気になることがある場合は、かかりつけ医、薬剤師、看護師などへ確認してください。
        </p>
        <p>
          急な体調変化、飲み間違いの疑い、強い副作用が疑われる症状がある場合は、家族内で様子見を決めず、医療機関や薬局、救急相談窓口へ連絡します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-doctor-pharmacy-medicine-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=doctor_pharmacy_medicine_info"
        toolLabel="医療機関・薬局・薬メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382989"
        boothLabel="かかりつけ医・薬局情報テンプレートを見る"
      >
        <p>
          まず無料ツールで医療機関、薬局、薬の名前、家族共有メモを整理し、継続して更新する段階ではBOOTHの
          親のかかりつけ医・薬局・処方薬情報まとめテンプレートへ転記すると、通院付き添い・入退院準備・家族申し送りで見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-meal-water-weight-daily-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">食事・水分・体重は記憶だけでは説明しにくい</h2>
        <p>
          高齢の親の在宅介護では、食事をどのくらい食べたか、水分をどのようにとれたか、体重がどう変わったかを聞かれる場面があります。
          ただ、数日たつと「いつから変わったのか」「どの日に食べにくそうだったのか」を思い出しにくくなります。
        </p>
        <p>
          この記録は、食事量や水分量を家族だけで評価するためのものではありません。
          家族が見た事実を短く残し、受診時やケアマネジャーへの相談時に日常の様子を説明しやすくするための整理です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">毎日書く項目は少なくする</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>食事: 朝昼夕で食べた様子、残したもの、むせや食べにくさの有無</li>
          <li>水分: 水分をとれた時間帯、飲みにくそうだった場面、家族が促したこと</li>
          <li>体重: 測れた日の体重、測れなかった理由、前回から気づいた変化</li>
          <li>本人の様子: 眠気、疲れ、気分、活動量、いつもと違う言動</li>
          <li>相談メモ: 受診時やケアマネへ聞きたいこと、家族へ共有したいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">数字だけでなく家族が見た様子も残す</h2>
        <p>
          体重や飲んだ量の数字だけでは、日常の変化が伝わりにくいことがあります。
          「昼食は半分ほど」「水分は声かけすると少し飲めた」「夕方に疲れが強そうだった」のように、家族が見た様子を短く添えると、相談時の材料になります。
        </p>
        <p>
          記録は細かく書きすぎると続きません。毎日同じ欄に、空欄があってもよい前提で残すと、家族間の申し送りや週ごとの振り返りに使いやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">医療・栄養の判断は専門職へ相談する</h2>
        <p>
          食事量、水分量、体重変化、栄養状態、脱水、病気、服薬、受診要否の判断は、家族メモだけでは決められません。
          気になる変化がある場合は、かかりつけ医、管理栄養士、看護師、薬剤師、担当ケアマネジャーなどへ相談してください。
        </p>
        <p>
          急な体調変化、強いぐったり感、飲食が難しい状態、意識や呼吸の異変がある場合は、家族内で判断を先延ばしにせず、医療機関や救急相談窓口へ確認します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-meal-water-weight-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_meal_water_weight"
        toolLabel="食事・水分・体重メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382987"
        boothLabel="食事水分体重記録テンプレートを見る"
      >
        <p>
          まず無料ツールで今日の食事、水分、体重、気になる変化を整理し、継続して記録する段階ではBOOTHの
          高齢親の食事・水分・体重の毎日記録テンプレートへ転記すると、受診前や家族申し送りの材料を残しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "welfare-equipment-rental-purchase-family-check": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">福祉用具の話は家族の困りごとから始める</h2>
        <p>
          ケアマネジャーや福祉用具事業者から、介護ベッド、手すり、歩行器、車いす、入浴用品などの話が出ると、
          家族は「何を選べばよいか」「レンタルと購入のどちらなのか」に意識が向きがちです。
        </p>
        <p>
          ただし家族が先に決めるべきなのは商品名ではなく、本人がどの生活場面で困っているか、家族が何を心配しているかを整理することです。
          そのメモがあると、専門職へ相談する時に確認したい点を伝えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">生活場面ごとに困りごとを分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>移動・歩行: 家の中、玄関、外出時、段差で困っていること</li>
          <li>起き上がり・立ち上がり: ベッド、椅子、トイレ、浴室で不安なこと</li>
          <li>入浴・排泄: 介助が必要な場面、本人が不安がる場面</li>
          <li>寝具まわり: 夜間、寝返り、起床時、転落や移動の不安</li>
          <li>家族の確認事項: 置き場所、費用、試用、返却、メンテナンス、連絡先</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">候補名と質問は分けて書く</h2>
        <p>
          パンフレットや知人の話で気になった道具名があっても、それをそのまま選ぶ前提にしない方が相談しやすくなります。
          「気になる候補」と「専門職へ確認したい質問」を分けて書いておくと、本人の状態や住環境に合うかを確認しやすくなります。
        </p>
        <p>
          家族内で意見が違う場合も、賛成・反対を結論にせず、心配している点として残しておくと、相談時の材料になります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">制度や適合判断は専門窓口へ確認する</h2>
        <p>
          福祉用具の貸与・購入の対象、介護保険の給付可否、自己負担額、本人への適合、安全面の判断は、家族メモだけでは決められません。
          担当ケアマネジャー、福祉用具事業者、市区町村窓口、医療・リハビリ職などへ確認してください。
        </p>
        <p>
          このページでは、相談前に家族の困りごとと質問をそろえるための整理方法に絞っています。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-welfare-equipment-rental-purchase-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=welfare_equipment_memo"
        toolLabel="福祉用具相談前メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382980"
        boothLabel="福祉用具確認テンプレートを見る"
      >
        <p>
          まず無料ツールで生活場面ごとの困りごと、気になる候補、ケアマネや事業者へ確認したいことを整理し、家族で継続して見返す段階ではBOOTHの
          福祉用具レンタル・購入前確認メモ集へ転記すると、相談前の材料を同じ形式で残せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "caregiver-rest-schedule-burden-visualization": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護者の負担は見えにくいまま積み上がる</h2>
        <p>
          親の介護では、通院付き添い、買い物、服薬確認、事業所との連絡、家族への共有など、小さな対応が日々積み重なります。
          ひとつひとつは短時間でも、週単位で見ると休息できる時間がほとんどないことがあります。
        </p>
        <p>
          介護者自身の休息予定と負担を見える化する目的は、がんばりを採点することではありません。
          家族や相談先に「どこが詰まっているか」を伝え、分担や外部支援を考えやすくするための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">予定・負担・休息を分けて書く</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>介護予定: 通院、見守り、買い物、サービス連絡、書類確認</li>
          <li>負担が重い時間帯: 朝、夜、通院日、仕事後、休日など</li>
          <li>休息予定: 何もしない時間、睡眠、外出、家族に任せる時間</li>
          <li>頼みたいこと: 交代、送迎、電話、買い物、書類確認、見守り</li>
          <li>次回見直し: 週末、月末、ケアマネ面談前、家族会議前</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「つらい」だけでなく具体的な時間にする</h2>
        <p>
          家族に負担を伝える時、「大変」「疲れている」だけでは、何を代わればよいか伝わりにくいことがあります。
          何曜日の何時ごろ、どの対応が重なっているかを書き出すと、交代しやすい作業や外部サービスに相談したい範囲が見えやすくなります。
        </p>
        <p>
          休息予定も、空いた時間ができたら休むのではなく、先に予定として置いておく方が家族内で共有しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">医療や制度判断は専門窓口へ確認する</h2>
        <p>
          強い疲労、不眠、気持ちの落ち込み、安全面の不安がある場合、家族メモだけで抱え込まないことが重要です。
          医療機関、自治体、地域包括支援センター、担当ケアマネジャー、勤務先の相談窓口などへ確認してください。
        </p>
        <p>
          このメモは、介護サービス利用、休業制度、医療やメンタルヘルスの判断を代替するものではありません。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-caregiver-rest-burden-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=caregiver_rest_burden"
        toolLabel="介護者の休息・負担メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382978"
        boothLabel="介護者休息テンプレートを見る"
      >
        <p>
          まず無料ツールで今週の予定、負担が重い時間、休息予定、家族へ頼みたいことを整理し、継続して見直す段階ではBOOTHの
          介護者自身の休息・予定・負担見える化テンプレートへ転記すると、家族会議や相談前の材料を残しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "elderly-parent-disaster-go-bag-contact-list": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">災害時の備えは家族内で散らばりやすい</h2>
        <p>
          高齢の親の災害時準備では、持ち出し品、薬、避難先、緊急連絡先、家族の役割が別々の場所に散らばりがちです。
          「薬はどこにあるか」「誰に連絡するか」「避難先候補を誰が確認したか」が曖昧なままだと、いざという時に家族が同じ情報を見られません。
        </p>
        <p>
          災害時メモは、避難判断や防災計画を家族だけで決めるものではありません。
          公式情報を確認する前に、家族が親の基本情報と確認先を見返せるようにするための手元整理です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">持ち出し品・連絡先・避難先を分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>持ち出し品: 薬、お薬手帳、保険証、眼鏡、補聴器、充電器、衛生用品</li>
          <li>連絡先: 家族、近所、かかりつけ医、薬局、ケアマネ、介護事業所</li>
          <li>避難先候補: 自宅近く、親族宅、福祉避難所など確認が必要な場所</li>
          <li>医療・介護情報: 服薬、既往歴、歩行や移動の注意点、必要な支援</li>
          <li>家族の役割: 誰が連絡、確認、迎え、補充を担当するか</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">親の状況が変わるたびに軽く更新する</h2>
        <p>
          災害時の持ち出し品は、一度作って終わりではありません。
          薬が変わる、通院先が変わる、介護サービスが増える、歩行状態が変わると、必要な物や連絡先も変わります。
        </p>
        <p>
          帰省時や季節の変わり目に、期限切れの物、古い連絡先、今は使っていない薬を見直すだけでも、家族内の確認漏れを減らせます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">判断ではなく確認先を残す</h2>
        <p>
          避難のタイミング、備蓄量、福祉避難所の利用可否、災害時の医療対応は、家族メモだけで判断できません。
          自治体、消防、地域包括支援センター、医療機関、担当ケアマネジャーなど、確認先を分けて残しておくことが重要です。
        </p>
        <p>
          パスワード、口座番号、マイナンバーなどの機密情報は書かず、共有範囲も家族内で決めておきます。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-disaster-go-bag-contact-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_disaster_go_bag"
        toolLabel="災害時持ち出し・連絡先メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382972"
        boothLabel="災害時持ち出しテンプレートを見る"
      >
        <p>
          まず無料ツールで持ち出し品、避難先、緊急連絡先を整理し、家族で定期的に見直す段階ではBOOTHの
          高齢親の災害時持ち出し・連絡先整理テンプレートへ転記すると、確認漏れを同じ形式で減らせます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "facility-after-admission-family-visit-contact-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">施設入所後も家族の確認事項は続く</h2>
        <p>
          親が老人ホームやグループホームなどへ入所すると、施設探しや契約の大きな山は越えます。
          ただしその後も、面会で見た本人の様子、施設からの連絡、次回持っていく物、家族へ共有することは少しずつ増えていきます。
        </p>
        <p>
          施設入所後の家族メモは、施設の公式記録や介護記録ではありません。
          家族が面会後の気づき、差し入れ・持ち物確認、施設連絡を見返し、離れて暮らす家族へ共有するための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">面会・差し入れ・施設連絡を分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>面会記録: 面会日、本人の様子、家族が見たこと、次回話したいこと</li>
          <li>差し入れ・持ち物: 持っていく物、施設へ確認した可否、次回必要な物</li>
          <li>施設からの連絡: 担当者名、連絡内容、家族内で共有すること</li>
          <li>次回確認事項: 施設スタッフ、ケアマネ、家族内で聞くこと</li>
          <li>家族共有: 同席していない家族へ伝える短い要点</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">差し入れは「可否を確認した内容」として残す</h2>
        <p>
          食べ物、衣類、日用品、貴重品などの持ち込みルールは施設によって異なります。
          家族のメモでは、何を持っていきたいかだけでなく、誰に確認したか、可否や条件をどう聞いたかを残しておくと見返しやすくなります。
        </p>
        <p>
          持ち込み可否、保管、食事制限、医療上の注意点は家族だけで判断せず、施設スタッフや医療職へ確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">評価ではなく共有メモとして使う</h2>
        <p>
          面会後に気になったことを残す目的は、施設を評価・採点することではありません。
          本人の様子、施設から聞いたこと、次に確認したいことを分けて、家族内の認識をそろえるためです。
        </p>
        <p>
          契約、費用、入退所、サービス内容、苦情申し立て、医療判断に関わることは、施設や担当窓口へ直接確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-facility-after-admission-visit-contact-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=facility_after_admission_contact"
        toolLabel="施設入所後の面会・連絡メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382968"
        boothLabel="施設入所後メモテンプレートを見る"
      >
        <p>
          まず無料ツールで面会記録、差し入れ、施設連絡、家族共有メモを整理し、継続して使う段階ではBOOTHの
          施設入所後の面会・差し入れ・連絡整理メモテンプレートへ転記すると、家族内共有を同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "home-visit-care-family-share-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">訪問介護の気づきは家族内で散らばりやすい</h2>
        <p>
          訪問介護を利用していると、ヘルパー訪問前に伝えたいこと、訪問後に家族が気づいたこと、次回確認したいことが少しずつ増えていきます。
          電話、LINE、口頭のやり取りだけで残していると、後から「何を誰に確認する予定だったか」が分かりにくくなります。
        </p>
        <p>
          家族共有メモは、訪問介護の業務記録や指示書ではありません。
          家族が訪問前後の気づきを見返し、担当ケアマネジャーや訪問介護事業所へ確認する前に情報をそろえるための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">訪問前後で分けて残す</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>訪問前に伝えたいこと: 体調、生活上の変化、家族が気になっていること</li>
          <li>訪問後に気づいたこと: 本人の様子、家の中の変化、家族が見た事実</li>
          <li>次回確認すること: ケアマネ、事業所、家族内で聞くこと</li>
          <li>家族共有: 離れて暮らす家族へ伝える要点、未確認事項</li>
          <li>週まとめ: 同じ気づきが続いているか、次の面談で聞くこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「指示」ではなく「確認事項」として残す</h2>
        <p>
          家族が気づいたことを残すときは、ヘルパーへの指示として書くのではなく、次に確認したいこととして整理します。
          たとえば、食事量、室内の様子、服薬の気がかり、買い物や掃除の範囲などは、事業所のルールや契約内容に関わる場合があります。
        </p>
        <p>
          サービス内容の変更、追加、休止、業務範囲、介護保険上の扱いは、家族だけで判断せず、担当ケアマネジャーや訪問介護事業所へ確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">週まとめで面談前の確認漏れを減らす</h2>
        <p>
          訪問ごとのメモを週単位で見返すと、同じ困りごとが続いているのか、一度だけの出来事なのかを整理しやすくなります。
          次回のケアマネ面談や事業所への連絡前に、聞くことを短くまとめられます。
        </p>
        <p>
          事実、家族の気づき、確認事項を分けておくと、家族内でも担当者にも伝えやすくなります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-home-visit-care-family-share-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=home_visit_care_family_share"
        toolLabel="訪問介護の家族共有メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382965"
        boothLabel="訪問介護メモテンプレートを見る"
      >
        <p>
          まず無料ツールで訪問前に伝えたいこと、訪問後の気づき、次回確認事項を整理し、継続して使う段階ではBOOTHの
          訪問介護利用時の家族共有メモテンプレートへ転記すると、訪問ごとの共有を同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-manager-meeting-after-todo-family-share": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">面談後は「聞いたこと」と「やること」が混ざりやすい</h2>
        <p>
          ケアマネジャーとの面談では、生活状況、サービス予定、家族の対応、次回までの確認事項など、短時間で多くの話が出ます。
          その場では分かったつもりでも、帰宅後に家族へ共有しようとすると、何が決定で何が未確認か分かりにくくなりがちです。
        </p>
        <p>
          面談後のToDo表は、ケアプランや契約書の代替ではありません。
          家族が面談内容を見返し、誰が何をするか、次に何を確認するかを整理するための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">面談直後に分けておく項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>決まったこと: サービス予定、次回面談、家族側の対応など</li>
          <li>家族ToDo: 連絡、書類確認、持ち物準備、本人への確認</li>
          <li>担当者: 家族の誰が、いつまでに、何を確認するか</li>
          <li>未確認事項: ケアマネ、事業所、病院、自治体へ聞くこと</li>
          <li>共有メモ: 面談に同席していない家族へ伝える要点</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「決定」と「確認中」を分ける</h2>
        <p>
          面談後に家族内で混乱しやすいのは、正式に決まったことと、これから確認することが同じメモに混ざることです。
          ToDo表では、決定済み、担当者未定、確認中、次回までに聞くことを分けて残します。
        </p>
        <p>
          担当者が決まっていないタスクは、未定のまま残しておく方が後から話し合いやすくなります。
          「誰かがやるだろう」を減らし、次の家族連絡で決めることを具体化できます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">サービス判断は家族だけで決め切らない</h2>
        <p>
          家族のToDo表は、サービス内容や契約の判断を代替するものではありません。
          ケアプラン、サービス変更、利用可否、自己負担額、介護保険上の扱いは、担当ケアマネジャー、各事業所、自治体へ確認してください。
        </p>
        <p>
          家族ができるのは、面談で聞いたことを落ち着いて整理し、次に確認することを漏らさないようにすることです。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-care-manager-meeting-todo-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care_manager_meeting_todo"
        toolLabel="面談後ToDoメモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382960"
        boothLabel="面談後ToDoテンプレートを見る"
      >
        <p>
          まず無料ツールで面談日、決まったこと、家族ToDo、担当者、確認事項を整理し、継続して使う段階ではBOOTHの
          ケアマネ面談後の家族ToDoまとめテンプレートへ転記すると、面談後の共有を同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "home-care-monthly-family-role-calendar": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">月単位になると家族分担は見えにくくなる</h2>
        <p>
          在宅介護が続くと、通院、訪問介護、デイサービス、訪問看護、買い物、見守り電話、帰省などの予定が月の中に散らばります。
          週ごとの予定は把握できていても、「今月全体で誰が何を担うか」は別の問題です。
        </p>
        <p>
          月間カレンダーは、ケアプランや事業所への指示書ではありません。
          家族が月内の予定と担当を見返し、未定の予定を確認し、ケアマネジャーや各事業所へ相談する前に状況をそろえるための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">月間カレンダーで分けておく項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>介護サービス予定: 訪問介護、デイサービス、訪問看護、訪問リハビリなど</li>
          <li>通院・薬局予定: 受診日、付き添い、薬の受け取り、次回予約</li>
          <li>家族対応: 買い物、見守り電話、実家訪問、手続き、連絡係</li>
          <li>担当状況: 決定済み、未定、要相談、変更確認中</li>
          <li>次に確認すること: ケアマネ、事業所、病院、家族会議で聞くこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「決定済み」と「未定」を同じ表に置く</h2>
        <p>
          家族分担で揉めやすいのは、誰かが何となく引き受けている予定と、まだ誰も決めていない予定が混ざることです。
          月間カレンダーでは、担当者が決まっている予定だけでなく、未定の予定も残しておきます。
        </p>
        <p>
          未定のまま残っている予定が見えると、次の家族連絡で決めることが具体化します。
          負担が一人に偏っている月も、感情論ではなく予定表を見ながら話しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">変更や追加は担当者へ確認する前提で残す</h2>
        <p>
          サービス予定の変更、休止、追加がありそうなときは、家族内で決め切るのではなく、
          「いつ」「何を」「誰に確認するか」をカレンダーとメモに分けて残します。
          介護保険サービスの利用可否、給付、自己負担、サービス構成は、担当ケアマネジャーや各事業所へ確認してください。
        </p>
        <p>
          月単位で見渡す目的は、判断を代替することではなく、相談前の情報をそろえることです。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-home-care-monthly-family-calendar-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=home_care_monthly_calendar"
        toolLabel="月間予定・家族分担メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382957"
        boothLabel="月間予定カレンダーテンプレートを見る"
      >
        <p>
          まず無料ツールで今月の介護予定、通院、家族分担、未定事項を整理し、継続して使う段階ではBOOTHの
          在宅介護の月間予定・家族分担カレンダーテンプレートへ転記すると、月ごとの共有を同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "home-care-weekly-service-schedule-family-share": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">在宅介護は週の予定が見えにくくなりやすい</h2>
        <p>
          訪問介護、デイサービス、訪問看護、訪問リハビリなどが組み合わさると、
          「今週どのサービスがいつ来るか」を家族だけで覚えておくのが難しくなります。
          振替、休止、担当者変更が入ると、電話や書類の内容も散らばりやすくなります。
        </p>
        <p>
          週間予定表は、ケアプランの代替ではありません。
          家族がサービス予定を見返し、離れて暮らす家族へ共有し、次に確認することを整理するための手元メモです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">週単位で固定しておく項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>サービス名: 訪問介護、デイサービス、訪問看護、訪問リハビリなど</li>
          <li>曜日と時間帯: 開始、終了、送迎や訪問の目安</li>
          <li>担当事業所と担当者: 連絡先や変更時の窓口</li>
          <li>今週の変更: 休止、振替、担当者変更、時間変更</li>
          <li>家族共有: 遠方の家族へ伝える要点、次に確認すること</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">変更・休止は「いつ・何が・誰から」を残す</h2>
        <p>
          サービスの変更連絡を受けたときは、対象日、変更内容、連絡してきた事業所や担当者、
          家族側で確認したことを分けて残します。
          後からケアマネジャーへ相談するときも、出来事が時系列で残っていると説明しやすくなります。
        </p>
        <p>
          ただし、予定表は事業所への指示書ではありません。
          サービスの追加、休止、振替、利用可否、自己負担額、介護保険上の扱いは、担当ケアマネジャーや各事業所へ確認してください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族共有は「判断」ではなく「状況の一致」</h2>
        <p>
          離れて暮らす家族へ共有する目的は、今のサービス状況を同じ認識にすることです。
          「このサービス構成でよいか」を家族だけで判断するのではなく、現状を整理したうえで担当者へ確認しやすくする使い方が現実的です。
        </p>
        <p>
          週の予定が見えると、帰省時の引き継ぎ、通院付き添いの調整、急な変更時の連絡も進めやすくなります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-home-care-weekly-service-schedule-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=home_care_weekly_schedule"
        toolLabel="週間サービス予定メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382953"
        boothLabel="週間予定テンプレートを見る"
      >
        <p>
          まず無料ツールで今週の訪問サービス予定、変更・休止、家族共有メモを整理し、継続して使う段階ではBOOTHの
          在宅介護の週間予定・訪問サービス予定表テンプレートへ転記すると、週ごとの共有を同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "post-discharge-one-month-home-monitoring-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">退院後1か月は「毎日の様子」を残す時期</h2>
        <p>
          親が退院して自宅へ戻ると、退院日までの手続きは終わっても、在宅生活の見守りはそこから始まります。
          食事、水分、睡眠、活動、訪問サービスで伝えられたことが、日ごとに少しずつ増えていきます。
        </p>
        <p>
          退院後1か月の記録は、体調を判断するためではなく、家族が日々の様子を見返し、ケアマネジャーや訪問看護師へ状況を伝えやすくするための材料です。
          事実を短く残すだけでも、次の面談や家族共有で役立ちます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">毎日見る項目を固定する</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>食事: 食べた量、食欲、家族が気になったこと</li>
          <li>水分: 飲む量の様子、声かけの有無、担当者へ聞きたいこと</li>
          <li>睡眠: 就寝、起床、夜間の様子、昼寝の多さ</li>
          <li>活動: 室内移動、外出、疲れやすさ、転倒やヒヤリハット</li>
          <li>担当者からの連絡: ヘルパー、訪問看護師、ケアマネから聞いたこと</li>
          <li>次に確認すること: 訪問時や面談時に聞きたいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">記録は「報告書」ではなく手元メモ</h2>
        <p>
          家族の記録は、正式な医療書類や介護記録の代替ではありません。
          「最近どうですか？」と聞かれたときに、見たことを思い出して説明するための手元メモです。
        </p>
        <p>
          たとえば「今週は食事量が少ない日が2日あった」「夜中に起きる日が続いた」「訪問看護師に次回確認したいことがある」のように、期間と出来事を分けて残します。
          遠方の家族へ電話やLINEで伝えるときも、記録を見ながら話すと共有しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">急な変化は記録だけで判断しない</h2>
        <p>
          体調の急な変化、強い痛み、意識の変化、食事や水分が大きく変わった場合などは、家族内の記録だけで様子見を決めないことが大切です。
          かかりつけ医、訪問看護師、救急相談窓口、ケアマネジャーなどへ確認してください。
        </p>
        <p>
          このページは、受診要否、在宅療養の継続可否、緊急性、診断、治療方針を判断するものではありません。
          家族が日々の様子を整理し、担当者へ伝え漏れを減らすための準備です。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-post-discharge-month-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=post_discharge_month"
        toolLabel="退院後1か月の生活記録メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8427230"
        boothLabel="退院後1か月テンプレートを見る"
      >
        <p>
          まず無料ツールで食事、水分、睡眠、活動、担当者へ伝えることを整理し、継続して残す段階ではBOOTHの
          退院後1か月の生活見守り記録テンプレートへ転記すると、家族内共有と面談前の振り返りを同じ形式で続けられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "clinic-visit-before-after-family-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">通院付き添いは「前」と「後」を分けて残す</h2>
        <p>
          親の定期通院に付き添うと、診察室で聞きたいことを忘れたり、帰宅後に医師の説明を家族へ伝えようとして内容が曖昧になったりします。
          受診前と受診後を同じメモで混ぜると、次に確認したいことも埋もれやすくなります。
        </p>
        <p>
          家族ができるのは、受診要否や診断を判断することではなく、見たこと、聞いたこと、確認したいことを整理して伝えやすくすることです。
          記録の目的を「判断」ではなく「共有」と「確認」に置くと、続けやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">受診前に書く項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>前回受診からの変化: 食事、睡眠、活動量、痛み、不安、転倒やヒヤリハットなど</li>
          <li>本人が話していること: 困っていること、気にしていること、希望していること</li>
          <li>家族が気づいたこと: 生活上の変化、付き添い時に確認したいこと</li>
          <li>質問メモ: 医師、薬剤師、ケアマネジャーへ聞きたいこと</li>
          <li>持参物: 診察券、保険証、お薬手帳、紹介状、前回メモなど</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">受診後は「聞いたこと」と「次回」を残す</h2>
        <p>
          受診後は、医師から説明された要点、次回予約、薬局で説明されたこと、次回までに確認することを短く残します。
          ここでも「どう解釈するか」より、「何を聞いたか」「次に何を確認するか」を分けます。
        </p>
        <p>
          薬について気になることがある場合も、効能や副作用を家族だけで評価するのではなく、医師や薬剤師へ確認する前提でメモします。
          お薬手帳の変更点を見て、家族共有用に「変更あり」「次回確認」などの形で残すと扱いやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">急な変化は記録だけで判断しない</h2>
        <p>
          急な体調変化、強い痛み、意識の変化、転倒後の不安、薬に関する気がかりがある場合は、家族内のメモだけで様子見を決めないことが大切です。
          医療機関、救急相談窓口、担当医師、薬剤師などへ確認してください。
        </p>
        <p>
          このページは、通院前後の記録整理と家族共有のためのものです。受診要否、診断内容、治療方針、薬の副作用や飲み合わせの判断を行うものではありません。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-clinic-visit-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=clinic_visit"
        toolLabel="通院付き添い記録メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8427038"
        boothLabel="通院付き添いテンプレートを見る"
      >
        <p>
          まず無料ツールで受診前の質問、受診後の説明、薬局で聞いたこと、次回予定を整理し、継続的に残す段階ではBOOTHの
          通院付き添い・受診前後記録テンプレートへ転記すると、複数科の通院記録を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-fall-near-miss-record-family-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">転倒は「原因を決める」前に「場面を残す」</h2>
        <p>
          親が転んだ、または転びそうになった場面が増えると、家族は原因や対策を急いで考えたくなります。
          ただ、転倒原因、受診の必要性、服薬との関係、住宅改修の要否は、家族だけで判断する領域ではありません。
        </p>
        <p>
          家族がまずできることは、いつ、どこで、何をしようとしていたかを事実として残すことです。
          記録があると、医師、ケアマネジャー、リハビリ専門職へ相談するときに、状況を説明しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">記録する項目を6つに分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>日時: 日付、時間帯、夜間か日中か、食後や入浴後などのタイミング</li>
          <li>場所: 寝室、廊下、トイレ、浴室、玄関、屋外など</li>
          <li>場面: 立ち上がり、歩行、方向転換、トイレ移動、段差、着替えなど</li>
          <li>本人の様子: 痛み、不安、ふらつき、疲れ、いつもと違う様子</li>
          <li>家族の対応: 声かけ、付き添い、確認したこと、相談予定</li>
          <li>次に聞くこと: 医師、ケアマネ、リハビリ専門職、福祉用具事業者へ確認したいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「原因はこれ」と書かず、見たことを書く</h2>
        <p>
          家族メモでは「薬のせい」「段差が原因」「筋力低下」と断定せず、見たことを分けて書きます。
          たとえば「寝室からトイレへ行こうとして廊下でふらついた。転倒はなし。翌朝の痛みの訴えはなし」のように残します。
        </p>
        <p>
          原因の推定や対策の判断は専門職へ確認し、家族側は相談時に伝える材料を整える役割に寄せます。
          遠方の家族へ共有する場合も、感想より場面をそろえると話し合いが進めやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">生活環境は「現状確認」として書き出す</h2>
        <p>
          段差、照明、手すり、マット、スリッパ、ベッドまわり、トイレまでの動線などは、相談前に見直しておくと便利です。
          ただし、書き出しただけで住宅改修や福祉用具の必要性を判断するものではありません。
        </p>
        <p>
          現状を書き出し、ケアマネジャー、リハビリ専門職、福祉用具事業者などへ確認するときの材料として使います。
          費用や制度の扱いも、自治体や担当者へ確認する前提で整理します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">急な変化やけがは家族内で判断しない</h2>
        <p>
          痛み、腫れ、出血、意識の変化、頭を打った可能性、いつもと違う様子がある場合は、家族内の記録だけで様子見を決めないことが大切です。
          医療機関、救急相談窓口、担当医師などへ確認してください。
        </p>
        <p>
          このページは、転倒原因の医学的分析、受診要否の判断、転倒予防指導、服薬管理、住宅改修の判定を行うものではありません。
          家族が状況を整理し、相談時に伝え漏れを減らすための準備です。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-fall-near-miss-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=fall_near_miss"
        toolLabel="転倒ヒヤリハット記録メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8426965"
        boothLabel="転倒ヒヤリハット記録テンプレートを見る"
      >
        <p>
          まず無料ツールで日時、場所、状況、本人の様子、相談先への質問を整理し、継続的に残す段階ではBOOTHの
          親の転倒・ヒヤリハット記録テンプレートへ転記すると、月ごとの記録や生活環境の現状確認を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "day-service-before-use-family-checklist": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">定期利用は「毎回迷うこと」を減らす準備が効く</h2>
        <p>
          デイサービスを使い始めると、持ち物、送迎、入浴、食事、薬、連絡帳など、毎回確認することが出てきます。
          初回だけでなく週ごとの利用が続くため、家族内で準備の型を作っておくと負担を減らしやすくなります。
        </p>
        <p>
          まずは、当日の持ち物、事業所へ必ず伝えること、家族が事前に確認すること、利用後に振り返ることを分けます。
          利用可否や医療対応の判断ではなく、相談前に情報をそろえるための整理として進めます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">利用前に確認する6項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>利用予定: 利用曜日、送迎時間、事業所名、担当窓口、欠席連絡の方法</li>
          <li>持ち物: 衣類、タオル、連絡帳、薬、お薬手帳、名前記入、返却物</li>
          <li>食事・水分: 食事量、むせ、好き嫌い、水分をすすめるタイミング</li>
          <li>入浴・排泄: 入浴時の見守り、着替え、トイレ、失敗しやすい場面</li>
          <li>本人の様子: 疲れやすい時間、不安になりやすい場面、声かけの仕方</li>
          <li>事業所確認: 持ち込みルール、薬の預け方、急変時の連絡、費用やキャンセル</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">申し送りは生活リズムを中心に短く書く</h2>
        <p>
          事業所へ渡す情報は、本人のすべてを細かく書くより、当日の安全と過ごし方に関係する内容を優先します。
          「昼食後に眠くなりやすい」「長い説明より短い声かけが伝わりやすい」「入浴後に冷えやすい」のように、場面で短く書きます。
        </p>
        <p>
          診断や評価ではなく、家族が普段見ている事実として残します。
          保険証番号、口座番号、暗証番号、マイナンバーなどの個人情報は、家族共有メモへまとめすぎないようにします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">利用後の記録を次回準備に回す</h2>
        <p>
          デイサービスは定期利用になることが多いため、利用後の振り返りが次回の準備に直結します。
          持ち物が足りたか、本人が疲れすぎていないか、入浴や食事で気になることがあったか、事業所からの連絡を家族で共有します。
        </p>
        <p>
          近くの家族だけで準備を抱えないように、持ち物担当、連絡帳確認、送迎連絡、費用記録を分けておくと、
          きょうだいや遠方の家族にも状況を伝えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">送迎・薬・医療対応は事業所と担当者へ確認する</h2>
        <p>
          デイサービスの利用条件、送迎範囲、医療対応、薬の扱い、持ち込み可否、費用やキャンセルは、事業所や契約内容によって変わります。
          家族のメモだけで受け入れ可否や医療判断を決めることはできません。
        </p>
        <p>
          担当ケアマネジャー、利用予定事業所、市区町村窓口などに確認し、家族側では聞いたこと、未確認のこと、次に確認することを残します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-day-service-prep-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=day_service_prep"
        toolLabel="デイサービス準備メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8426705"
        boothLabel="デイサービス利用前テンプレートを見る"
      >
        <p>
          まず無料ツールで持ち物、送迎、事業所への申し送り、家族の確認事項を整理し、継続的に残す段階ではBOOTHの
          デイサービス利用前整理テンプレートへ転記すると、利用ごとの記録と事業所情報を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "short-stay-before-use-family-checklist": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">利用前は「持ち物」と「申し送り」を分けて整理する</h2>
        <p>
          ショートステイを初めて使うとき、家族は持ち物、薬、送迎、生活リズム、緊急連絡先を短期間で確認することになります。
          頭の中だけで準備すると、施設へ伝えることと家族内で確認することが混ざりやすくなります。
        </p>
        <p>
          まずは、当日の持ち物、施設へ必ず伝えること、家族が事前に確認すること、利用後に振り返ることを分けます。
          利用可否や医療対応の判断ではなく、相談前に情報をそろえるための整理として進めるのが現実的です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">利用前に確認する6項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>利用予定: 日程、送迎時間、施設名、担当窓口、緊急連絡先</li>
          <li>持ち物: 衣類、洗面用品、薬、お薬手帳、名前記入、洗濯物の扱い</li>
          <li>食事・水分: 食事量、むせ、好き嫌い、水分をすすめるタイミング</li>
          <li>排泄・睡眠: 夜間トイレ、失敗しやすい場面、眠りにくい時間帯</li>
          <li>本人の様子: 不安になりやすい場面、声かけ、呼び方、落ち着きやすい物</li>
          <li>施設確認: 持ち込みルール、薬の預け方、急変時の連絡、費用やキャンセル</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">申し送りは長くしすぎない</h2>
        <p>
          施設へ渡す情報は、本人のすべてを細かく書くより、当日の安全と生活リズムに関係する内容を優先します。
          「夜間に一人で立ち上がることがある」「説明が長いと混乱しやすい」「水分をすすめないと飲み忘れやすい」のように、場面で短く書きます。
        </p>
        <p>
          診断や評価ではなく、家族が普段見ている事実として残します。
          保険証番号、口座番号、暗証番号、マイナンバーなどの個人情報は、家族共有メモへまとめすぎないようにします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">利用後の振り返りを次回準備に回す</h2>
        <p>
          ショートステイは一度使って終わりではなく、次回以降の準備を楽にすることが大切です。
          持ち物が多すぎた、足りなかった、本人が疲れていた、連絡先が分かりにくかったなど、次回直せることを残します。
        </p>
        <p>
          家族内でも、誰が持ち物を準備するか、誰が施設へ確認するか、誰が利用後の様子を聞くかを分けておくと、
          近くの家族だけに負担が寄りにくくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">受け入れ条件や医療対応は施設・担当者へ確認する</h2>
        <p>
          ショートステイの利用条件、医療対応、薬の扱い、送迎範囲、持ち込み可否、費用やキャンセルは、施設や契約内容によって変わります。
          家族のメモだけで受け入れ可否や医療判断を決めることはできません。
        </p>
        <p>
          担当ケアマネジャー、利用予定施設、市区町村窓口などに確認し、家族側では聞いたこと、未確認のこと、次に確認することを残します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-short-stay-prep-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=short_stay_prep"
        toolLabel="ショートステイ準備メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8426647"
        boothLabel="ショートステイ利用前テンプレートを見る"
      >
        <p>
          まず無料ツールで持ち物、施設への申し送り、家族の確認事項を整理し、継続的に残す段階ではBOOTHの
          ショートステイ利用前整理テンプレートへ転記すると、利用ごとの準備記録と施設情報を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-certification-renewal-before-check": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">認定更新前は「結果の予測」より「変化の棚卸し」をする</h2>
        <p>
          要介護認定の更新が近づくと、家族は「区分が変わるのか」「何を伝えればよいのか」と不安になりやすくなります。
          ただ、家族だけで認定区分を予測しようとすると、ふだんの生活変化や困りごとの記録が後回しになりがちです。
        </p>
        <p>
          更新前に家族ができることは、前回認定のころと比べて何が変わったかを、事実として整理することです。
          市区町村窓口や担当ケアマネジャーへ確認する前に、生活場面ごとの変化を短く残しておくと、相談時の伝え漏れを減らしやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">前回からの変化を6つに分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>移動: 立ち上がり、歩行、転倒、外出、通院付き添いの変化</li>
          <li>食事: 食事量、むせ、買い物、調理、片付けの変化</li>
          <li>入浴・着替え: 浴室への移動、洗身、服選び、見守りの必要性</li>
          <li>排泄・睡眠: 夜間のトイレ、失敗、昼夜逆転、家族の対応</li>
          <li>認知・連絡: もの忘れ、説明の理解、電話、郵便物、支払いの変化</li>
          <li>医療・服薬: 通院先、受診頻度、服薬確認、薬局へ聞きたいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「できる日」と「難しい日」を分けて残す</h2>
        <p>
          認定更新前のメモでは、「いつもできない」と決めつけるより、できる日と難しい日を分けて書くほうが現実的です。
          たとえば、昼間は一人で歩けるが夜間は見守りが必要、調子のよい日は入浴できるが疲れている日は声かけが必要、といった形です。
        </p>
        <p>
          本人を責める言葉ではなく、日付、場面、起きたこと、家族が対応したことを残します。
          遠方の家族へ共有する場合も、感想より場面をそろえると話し合いが進めやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族が実際に担っている対応も整理する</h2>
        <p>
          生活の変化だけでなく、家族が増やした支援も記録しておきます。
          買い物、通院付き添い、服薬確認、入浴前後の声かけ、夜間の見守り、費用や郵便物の確認などは、本人の生活を支えるために家族が担っていることです。
        </p>
        <p>
          家族の対応が増えている場合は、誰が、どのくらいの頻度で、何をしているのかを分けて書きます。
          きょうだい間で認識が違うときも、役割と頻度をそろえると共有しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">手続きや判断は市区町村・担当者へ確認する</h2>
        <p>
          更新申請の期限、有効期間、必要書類、認定調査の日程、結果への不服申立てなどの制度判断は、家族メモだけでは決められません。
          市区町村の介護保険窓口、担当ケアマネジャー、地域包括支援センターなどへ確認します。
        </p>
        <p>
          家族側で準備するメモには、認定区分の予測、点数換算、結果を左右する表現、口座番号や保険証番号などの個人情報を詰め込みすぎないようにします。
          まずは生活変化、困りごと、相談したいことを分けるだけで十分です。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-care-certification-renewal-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=certification_renewal"
        toolLabel="認定更新前メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8426543"
        boothLabel="要介護認定 更新前テンプレートを見る"
      >
        <p>
          まず無料ツールで前回からの生活変化、家族が困っていること、確認先への質問を整理し、継続的に残す段階ではBOOTHの
          要介護認定 更新前整理テンプレートへ転記すると、生活動作記録や通院・医療情報を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-memory-concern-consultation-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">もの忘れは「判断」より先に「出来事」を残す</h2>
        <p>
          親のもの忘れが気になり始めたとき、家族は「年齢のせいなのか」「受診したほうがよいのか」と迷いやすくなります。
          ただ、家族だけで診断や受診要否を判断しようとすると、かえって記録が残らないまま時間が過ぎてしまいます。
        </p>
        <p>
          最初にやることは、結論を出すことではありません。いつ、どこで、何が起きたかを、見たまま短く残すことです。
          その記録があると、地域包括支援センター、かかりつけ医、もの忘れ外来などへ相談するときに、家族が感じている変化を説明しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">相談前に分ける4つのメモ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>出来事: 同じ話の繰り返し、探し物、予定の混乱、支払い忘れなど、実際に起きたこと</li>
          <li>生活の変化: 食事、買い物、外出、服薬、通院、郵便物、金銭管理の変化</li>
          <li>家族の困りごと: 誰に伝えればよいか分からない、仕事に影響が出ている、きょうだいで認識が違うなど</li>
          <li>相談したいこと: どこへ相談するか、何を聞きたいか、次回までに記録すること</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">本人を責める言葉ではなく、場面で残す</h2>
        <p>
          「最近おかしい」「何も覚えていない」といった言い方は、家族間でも本人との会話でも感情的になりやすい表現です。
          メモでは評価や断定を避け、日付、場面、起きたこと、家族が対応したことを残します。
        </p>
        <p>
          たとえば「5月10日、薬が3日分残っていた。本人は飲んだつもりと言っていた。薬局の説明書を確認予定」のように書きます。
          こうすると、本人を責めるための記録ではなく、相談先に状況を伝える材料として使いやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族で認識が違うときは、頻度と距離をそろえる</h2>
        <p>
          同居している家族と、月に1回しか会わない家族では、親の変化の見え方が違います。
          電話では元気に聞こえても、実家へ行くと冷蔵庫や郵便物、薬、支払いに変化が出ていることもあります。
        </p>
        <p>
          家族会議では、誰が正しいかを決めるより、誰がどの頻度で何を見ているかをそろえます。
          出来事の記録、見守り連絡、次回確認日を共有できる形にしておくと、遠方の家族にも状況を伝えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">医療・運転・財産管理の判断は専門窓口へ分ける</h2>
        <p>
          認知症かどうか、受診が必要か、薬や治療、運転の継続、成年後見、財産管理などは、家族のメモだけで判断できません。
          地域包括支援センター、かかりつけ医、もの忘れ外来、自治体や専門家へ確認する領域です。
        </p>
        <p>
          家族側でできるのは、相談前に「何が起きたか」「何に困っているか」「何を確認したいか」を整理することです。
          パスワード、暗証番号、口座番号、マイナンバー、詳しい医療情報などを1つのメモにまとめすぎないようにします。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-memory-consult-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=memory_consult"
        toolLabel="もの忘れ相談前メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8382918"
        boothLabel="もの忘れ相談前整理テンプレートを見る"
      >
        <p>
          まず無料ツールで気になった出来事、生活の変化、家族の困りごと、相談先への質問を整理し、継続的に残す段階ではBOOTHの
          もの忘れ相談前整理テンプレートへ転記すると、出来事記録、相談履歴、見守り分担を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "hospital-discharge-home-return-family-checklist": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">退院後は「病院で聞いたこと」と「家で回すこと」を分ける</h2>
        <p>
          親の退院が近づくと、退院日、次回受診、薬、自宅で必要な物品、介護サービス、家族の付き添い、支払いなど、
          確認事項が短期間で増えます。病院で聞いた内容をそのまま頭の中だけで覚えておくと、家族へ共有するときに抜け漏れが起きやすくなります。
        </p>
        <p>
          まず分けたいのは、病院や薬局、ケアマネに確認することと、家族内で決めることです。
          医療や介護サービスの判断は専門職に確認し、家族は聞いた内容、未確認の内容、次に担当する人を残す役割に徹すると整理しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">在宅復帰前に確認する6項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>通院予定: 次回受診日、付き添い、移動手段、予約票や紹介状の保管場所</li>
          <li>服薬: 薬局から受け取った説明、飲むタイミング、家族が確認する範囲</li>
          <li>自宅環境: ベッド、手すり、段差、トイレ、風呂、食事、買い物の不安</li>
          <li>介護サービス: ケアマネへの連絡、訪問介護、デイサービス、福祉用具の確認</li>
          <li>費用と手続き: 入院費、領収書、保険や公的制度の確認先、家族の立替記録</li>
          <li>家族分担: 退院当日、初回通院、買い物、服薬確認、連絡係、費用記録の担当</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">退院当日だけでなく「退院後1週間」を見る</h2>
        <p>
          退院当日の迎えや支払いが終わっても、在宅復帰はそこで完了ではありません。
          帰宅後の食事、トイレ、入浴、服薬、夜間の不安、次回受診までの動きが実際に回るかを、最初の1週間で見ていきます。
        </p>
        <p>
          家族が全員で毎日動けるとは限らないため、誰が何曜日に確認するか、電話だけでよい日と訪問が必要な日を分けます。
          「何となく心配」ではなく、通院、薬、食事、買い物、連絡、費用記録のどこが不安かを分けておくと、ケアマネや病院にも相談しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">費用と手続きは判断ではなく記録に寄せる</h2>
        <p>
          入院費、高額療養費、保険給付、介護保険サービスの費用は、家族だけで判断しないほうが安全です。
          病院窓口、健康保険の担当窓口、自治体、ケアマネなどに確認し、家族側では「いつ、どこへ、何を確認したか」を残します。
        </p>
        <p>
          領収書、支払った人、親本人のお金から精算するのか家族が立て替えるのか、次に確認する窓口を分けるだけでも、
          あとからきょうだいへ説明しやすくなります。金額の結論を急ぐより、記録の形を先にそろえます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報をまとめすぎない</h2>
        <p>
          家族共有メモに、保険証番号、口座番号、暗証番号、詳しい病名、診断内容などをまとめて書き込む必要はありません。
          まずは確認先、書類の所在、担当者、未確認事項を残し、必要な具体情報は病院や窓口の案内に沿って扱います。
        </p>
        <p>
          退院可否、医療方針、服薬変更、介護サービスの要否は、この記事だけで判断するものではありません。
          家族内の状況整理と相談前準備として使い、最終判断は病院、薬局、ケアマネ、自治体などに確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-discharge-home-return-plan?utm_source=toshi-navi&utm_medium=guide&utm_campaign=discharge_home_return"
        toolLabel="在宅復帰メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8340434"
        boothLabel="入院・退院・在宅復帰テンプレートを見る"
      >
        <p>
          まず無料ツールで退院後の通院、服薬、自宅環境、サービス予定、家族分担を整理し、継続的に残す段階ではBOOTHの
          入院・退院・在宅復帰テンプレートへ転記すると、退院前確認、費用手続き、生活スケジュールを同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-work-balance-office-consultation-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">職場に話す前に、まず「介護で何が起きているか」を分ける</h2>
        <p>
          親の介護が始まると、通院付き添い、入退院説明、ケアマネとの連絡、家族会議、急な電話対応などが仕事の予定に入り込んできます。
          どれも単発では小さく見えても、勤務時間や会議、移動と重なると負担が急に大きくなります。
        </p>
        <p>
          職場へ相談する前に大事なのは、介護休業や時短勤務の結論を先に決めることではありません。
          今起きていること、今後起きそうなこと、仕事へ影響しそうな時間帯を分けて書き出すことです。
          それだけで、上司や人事へ何を確認したいのかが伝わりやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">相談前に整理する4つのメモ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>介護の現状: 通院、入退院、服薬、見守り、ケアマネ連絡など、仕事に影響している予定</li>
          <li>仕事への影響: 遅刻、早退、中抜け、休暇、会議変更、急な電話対応が起きそうな頻度</li>
          <li>希望する働き方: 休みたい、勤務時間を調整したい、在宅勤務を相談したい、まだ迷っているなど</li>
          <li>家族分担: 自分が担えること、家族へ頼みたいこと、外部窓口へ相談したいこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">「制度名」より「確認したいこと」を持っていく</h2>
        <p>
          介護休業、介護休暇、時短勤務、在宅勤務などの制度は、勤務先の規程や本人の状況によって確認事項が変わります。
          この記事だけで取得可否や給付金額を判断することはできません。正式な判断は、勤務先の人事担当、ハローワーク、自治体などの窓口で確認します。
        </p>
        <p>
          ただし、相談時に「何を確認したいか」を先にメモしておくことはできます。
          いつ頃から影響が出そうか、どの曜日に通院が入りやすいか、急な連絡がどれくらいありそうか、家族で代われる部分があるか。
          この材料があると、制度説明を受けるだけで終わらず、自分の状況に合わせて質問しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族会議では「仕事を休める人」だけに寄せない</h2>
        <p>
          仕事の調整がしやすい人に、通院、書類、連絡、費用記録が集中すると、あとから不満が出やすくなります。
          職場へ相談する前に、自分ができることとできないことを家族へ共有し、遠方でもできる連絡、書類整理、費用記録を分けます。
        </p>
        <p>
          近くに住む人が現地対応を担う場合でも、相談記録を残す人、費用を記録する人、次回確認をまとめる人は別にできます。
          「誰が休めるか」だけでなく、「誰が何を継続して持てるか」を見るほうが、仕事との両立は続けやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報と職場へ伝える範囲は分ける</h2>
        <p>
          職場へ相談するメモに、親の詳しい病名、住所、保険証番号、口座情報、暗証番号などを入れる必要はありません。
          伝えるのは、仕事へ影響しそうな予定、相談したい働き方、確認したい制度です。
          家族内で扱う情報と、職場へ伝える情報は分けて管理します。
        </p>
        <p>
          医療、労務、法律、税務、介護制度の判断は、この記事だけで決めるものではありません。
          相談前の整理として使い、最終判断は勤務先や公的窓口、専門家に確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-work-care-balance-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care_work_balance"
        toolLabel="両立メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8425543"
        boothLabel="介護と仕事 両立整理メモを見る"
      >
        <p>
          まず無料ツールで職場へ伝えること、休み方の希望、家族分担を整理し、継続的に残す段階ではBOOTHの
          介護と仕事 両立整理メモへ転記すると、職場相談、家族会議、相談先確認を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-facility-monthly-cost-estimate-check": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">施設費用は「パンフレットの月額」と「家族の実負担」を分ける</h2>
        <p>
          介護施設を検討するとき、パンフレットや見積書にある月額だけで家族会議を始めると、入居後の支払いで認識がずれやすくなります。
          家賃、管理費、食費、介護保険自己負担に加えて、医療対応、日用品、通院付き添い、家族の交通費など、別に発生しやすい費用があります。
        </p>
        <p>
          見積もり前にやることは、正確な金額を一度で当てることではありません。どの費用が施設請求に含まれ、どの費用が家族側で別管理になりそうかを
          分けておくことです。この分け方ができていると、きょうだい間の説明や親本人のお金から払う範囲の確認が進めやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">見積もり前に分ける費用項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>施設へ毎月払う費用: 家賃相当額、管理費、食費、水道光熱費、基本サービス費</li>
          <li>介護関連費: 介護保険自己負担、上乗せ介護費、夜間対応、個別支援の追加費</li>
          <li>医療関連費: 訪問診療、薬、通院付き添い、医療処置、入院時の連絡や立替</li>
          <li>生活費: 日用品、理美容、洗濯、衣類、嗜好品、通信費</li>
          <li>家族側の費用: 面会交通費、宿泊費、書類取得、実家整理、緊急時の移動</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">見学時に聞くべき追加費用</h2>
        <p>
          施設見学では「月額はいくらですか」だけでなく、「この月額に含まれない費用は何ですか」と聞きます。
          通院付き添い、医療処置、入院時の対応、外出同行、洗濯、理美容、消耗品、退去時の精算は、施設によって扱いが分かれます。
        </p>
        <p>
          本人の状態が変わった時の費用も重要です。介護度が変わった場合、認知症状が強くなった場合、医療処置が必要になった場合、
          退去や転居の条件がある場合は、家族の判断に直結します。金額だけでなく、追加費用が発生する条件をメモしておきます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族会議では月額、年額、立替の3つで見る</h2>
        <p>
          月額が見えたら、年額と初期費用を合わせて見ます。家族の交通費や入院時の立替を含めると、施設へ払う金額よりも実負担が大きくなることがあります。
          親本人の年金や預貯金から払う範囲、家族が一時的に立て替える範囲、きょうだいで相談する範囲を分けます。
        </p>
        <p>
          ここで大事なのは、最初から分担割合を決め切ることではありません。候補施設ごとに費用の内訳を同じ形式で残し、未確認の項目を次回の見学や電話確認に回すことです。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-facility-monthly-cost-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=facility_monthly_cost_estimate"
        toolLabel="月額費用見積もりメモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8424477"
        boothLabel="施設費用テンプレートを見る"
      >
        <p>
          まず無料ツールで施設請求、医療・生活費、家族側の交通費を分けて概算し、見学後に比較表として残す段階では
          BOOTHの施設費用テンプレートへ転記すると、月額費用、初期費用、家族負担、候補施設比較を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-manager-first-consultation-family-memo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">初回相談は「何を頼むか」より「何に困っているか」を持っていく</h2>
        <p>
          ケアマネや地域包括支援センターへ初めて相談するとき、家族は介護サービス名や制度名を正しく知っていなくても大丈夫です。
          先に必要なのは、親の日常で何が変わったか、家族がどこで困っているか、本人が何を嫌がっているかを短く説明できるメモです。
        </p>
        <p>
          相談の場で全部を決めようとすると、本人の希望、家族の都合、費用不安、通院や服薬の話が混ざります。
          生活状況、困りごと、家族の支援、費用と連絡体制を分けて持っていくと、次に確認する窓口や準備物が見えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族が持っていくメモの4分類</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>生活状況: 食事、入浴、着替え、買い物、掃除、服薬、通院、外出の様子</li>
          <li>困りごと: 転倒、もの忘れ、支払い忘れ、電話に出ない、病院説明が伝わらないなど</li>
          <li>家族の支援: 近くで動ける人、遠方から連絡できる人、費用記録を残す人</li>
          <li>費用と連絡体制: 親本人の支払い範囲、家族の立替、緊急時の連絡順</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">できる日とできない日の差を残す</h2>
        <p>
          相談時に伝わりにくいのは、普段はできるけれど疲れている日はできない、電話では元気そうだが家に行くと片付いていない、というような差です。
          「いつもできない」と大きく言うより、日付、場面、家族が見た事実を1行で残すほうが、本人を責める印象も弱くなります。
        </p>
        <p>
          たとえば、薬が余っていた、買い物に行けず同じ物ばかり食べていた、支払い用紙が未開封だった、通院予定を忘れていた、などです。
          記憶違いで揉めないよう、家族間で見たことと聞いたことを分けてメモします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">相談前に家族で仮決めすること</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>相談窓口へ連絡する人、相談結果を家族へ共有する人</li>
          <li>親本人に事前にどう説明するか、同席するかどうか</li>
          <li>通院、買い物、書類、支払い確認のうち家族が担える範囲</li>
          <li>費用の立替が出た場合の記録方法と領収書の保管担当</li>
          <li>相談後に、次回まで確認することと決めないこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報はメモに詰め込みすぎない</h2>
        <p>
          相談前メモには、住所、保険証番号、口座番号、暗証番号、詳しい病名などをまとめて書き込まないほうが安全です。
          まずは「何を確認したいか」「どの書類がありそうか」「誰が持参するか」までにとどめ、必要な情報は窓口の案内に沿って扱います。
        </p>
        <p>
          医療、介護制度、契約、税務、相続の判断は、この記事だけで決めるものではありません。
          家族内の状況整理と相談前準備として使い、最終判断は自治体、地域包括支援センター、医療機関、専門窓口へ確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-care-manager-first-consult-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care_manager_first_consult"
        toolLabel="初回相談メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8424970"
        boothLabel="入院・退院・ケアマネ相談パックを見る"
      >
        <p>
          まず無料ツールで相談前に伝えること、家族の役割、費用不安を整理し、継続的に残す段階ではBOOTHの
          入院・退院・ケアマネ相談パックへ転記すると、もしも準備、病院連携、生活状況、困りごと、質問メモを同じ流れで見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "long-distance-care-family-meeting-agenda": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">遠距離介護の家族会議は「不満の共有」ではなく「次の動きの整理」にする</h2>
        <p>
          遠距離介護では、近くに住む家族が現地対応を抱え込み、遠方の家族は状況が見えず、あとから費用や役割の不公平感が出やすくなります。
          家族会議を開く目的は、誰かを責めることではなく、情報、役割、費用、緊急時の動きを同じ表に置くことです。
        </p>
        <p>
          初回の会議では結論を出し切ろうとせず、決めること、未決のこと、次回までに集める情報を分けます。
          特に遠方の家族が担える作業を明確にすると、現地に行けない人も介護に参加しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">最初の議題は5つに絞る</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>親の現在の状況: 体調、通院、服薬、買い物、支払い、困っていること</li>
          <li>連絡体制: 親への連絡頻度、家族間の共有方法、返事がない時の順番</li>
          <li>現地対応: 通院付き添い、役所手続き、施設見学、急な訪問を誰が担うか</li>
          <li>費用記録: 交通費、立替、親本人の支払い、領収書保管の担当</li>
          <li>未決事項: 次回までに確認する窓口、書類、費用、相談先</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">遠方の家族に回しやすい役割</h2>
        <p>
          現地に行けない家族でも、定期連絡、会議メモ、費用記録、病院や施設へ聞く質問の整理、保険や書類の確認、
          次回の議題作成は担当できます。移動できる人だけを「介護している人」にすると、負担が一人へ寄りやすくなります。
        </p>
        <p>
          近くの家族は現地判断や急な対応を担うことが多いため、遠方の家族は事務作業や記録を引き受ける形にすると分担しやすくなります。
          作業負担と金銭負担を別々に見える化することが、揉めにくい話し合いの土台です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">会議後に残すメモ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>決まったこと、まだ決めないこと、次回までに確認すること</li>
          <li>親本人へ誰が何を確認するか</li>
          <li>病院、ケアマネ、施設、地域包括支援センターへ聞くこと</li>
          <li>立替費用、交通費、領収書、親本人の支払い範囲</li>
          <li>次回の家族共有日と、会議メモを保管する場所</li>
        </ul>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-distance-care-family-meeting-agenda?utm_source=toshi-navi&utm_medium=guide&utm_campaign=distance_care_family_meeting_agenda"
        toolLabel="家族会議アジェンダを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8411252"
        boothLabel="遠距離介護テンプレートを見る"
      >
        <p>
          まず無料ツールで議題、担当案、次回確認リストを作り、継続的に残す段階ではBOOTHの遠距離介護テンプレートへ転記すると、
          役割分担、連絡順、交通費、次回確認事項まで家族で見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-hospital-expense-advance-reimbursement": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">入院費の立替は「払った人の記憶」に残すだけだと揉めやすい</h2>
        <p>
          親が入院すると、入院保証金、入院費、差額ベッド代、日用品、洗濯、交通費、駐車場代など、細かい支払いが短期間に増えます。
          近くに住む家族が先に払うことも多く、あとで「どこまで親本人のお金から精算するのか」「きょうだいで分けるのか」が曖昧になりがちです。
        </p>
        <p>
          大切なのは、支払いをした直後に、支払った人、費目、金額、領収書の有無、精算予定を同じ形式で残すことです。
          金額の大小よりも、あとで説明できる状態を作ることが家族内の不信感を減らします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">最初に分ける費用</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>病院へ支払う費用: 入院費、保証金、差額ベッド代、食事代、診断書代</li>
          <li>入院生活の費用: パジャマ、タオル、日用品、テレビカード、洗濯代</li>
          <li>家族の移動費: 交通費、駐車場代、宿泊費、付き添い時の食事代</li>
          <li>手続き費用: 保険請求、役所手続き、郵送、コピー、書類取得</li>
          <li>退院後の費用: 介護用品、福祉用具、住宅内の小さな準備</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">精算ルールは後からではなく仮で先に置く</h2>
        <p>
          入院直後は細かいルールを決める余裕がないため、まず仮ルールで十分です。病院への支払いは親本人の資金から精算する、
          家族の交通費は月末にまとめて相談する、領収書がない少額支出はメモだけ残す、というように扱いを分けます。
        </p>
        <p>
          きょうだいがいる場合は、支払い係と連絡係を分けると一人に負担が集中しにくくなります。近くの家族が動いている場合は、
          現金負担だけでなく、付き添い、洗濯、書類提出、病院との連絡も作業負担として見える化します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">記録に残す項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>支払日、支払った人、支払先、費目、金額</li>
          <li>領収書の有無、写真を撮ったか、原本の保管場所</li>
          <li>親本人負担、家族分担、未定のどれにするか</li>
          <li>精算予定日、精算済み日、振込や現金のメモ</li>
          <li>病院や保険会社へ確認すること、次回の家族共有日</li>
        </ul>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-hospital-expense-reimbursement-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_hospital_expense_reimbursement"
        toolLabel="立替精算メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8340354"
        boothLabel="介護費用立替・分担記録テンプレートを見る"
      >
        <p>
          まず無料ツールで入院費、日用品、交通費、精算予定を整理し、継続的に管理する段階ではBOOTHの
          介護費用立替・分担記録テンプレートへ転記すると、きょうだい間で見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "living-alone-parent-monitoring-cost-contact-system": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">一人暮らしの親の見守りは「サービス選び」より先に連絡体制を決める</h2>
        <p>
          親が一人暮らしをしていると、電話に出ない、薬を飲み忘れる、郵便物がたまる、支払いが遅れる、転倒しても気づきにくいなど、
          家族が遠くから見えにくい不安が増えます。そこで最初にやることは、いきなり高額な見守りサービスを契約することではありません。
        </p>
        <p>
          まずは家族がどの頻度で連絡するか、誰が訪問するか、緊急時に誰へ連絡するか、親本人がどこまで共有してよいと感じているかをそろえます。
          そのうえで足りない部分だけを、自治体窓口、地域包括支援センター、民間サービス、家族の訪問で補うほうが、費用と心理的負担を抑えやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">見守り費用は4つに分ける</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>連絡費: 電話、スマホ、見守りアプリ、オンライン面談に使う通信費</li>
          <li>訪問費: 家族の交通費、宿泊費、食事代、現地での移動費</li>
          <li>外部サービス費: 安否確認、緊急通報、配食、買い物支援、家事支援などの利用料</li>
          <li>予備費: 鍵の対応、急な受診、入院時の立替、日用品購入などの臨時支出</li>
        </ul>
        <p className="mt-3">
          費用をまとめて「見守り代」と呼ぶと、何にいくらかかっているのかが見えにくくなります。
          家族の訪問費、親本人の生活費、外部サービスの固定費、緊急時の立替を分けておくと、きょうだい間の説明もしやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">連絡体制は「毎日」よりも「途切れた時の動き」を決める</h2>
        <p>
          毎日連絡すると決めても、家族側が続かなかったり、親が負担に感じたりすることがあります。大切なのは、
          何日連絡が取れなかったら誰が電話するか、誰が訪問するか、近所や管理会社へ相談してよい条件を先に決めておくことです。
        </p>
        <p>
          たとえば、平日は長男が電話、週末は長女が訪問、2日続けて連絡が取れない場合は近くの親族へ連絡、
          緊急性がある場合は自治体や専門窓口に相談する、というように段階を分けます。親本人にも「監視」ではなく、
          連絡が途切れた時に家族が迷わないためのルールだと説明します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族で共有しておきたい項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>通常の連絡頻度、電話がつながりやすい時間帯、連絡が取れない時の順番</li>
          <li>近所の連絡先、管理会社、民生委員、地域包括支援センターなどの相談先</li>
          <li>鍵の保管方法、救急搬送時に必要な保険証やお薬手帳の場所</li>
          <li>服薬、通院、買い物、郵便物、公共料金の支払いで見守りが必要な項目</li>
          <li>毎月かかる費用、家族が立て替えた費用、次回見直す日</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">サービスを契約する前に確認すること</h2>
        <p>
          民間の見守りサービスや機器を検討する場合は、初期費用、月額費、解約条件、緊急時の駆けつけ範囲、
          家族への通知方法、親本人が操作できるかを確認します。自治体によって相談できる制度や窓口が異なるため、
          まず地域包括支援センターや自治体の高齢者支援窓口に確認するのが現実的です。
        </p>
        <p>
          カメラやセンサーは便利な場合もありますが、本人が強い抵抗を感じることがあります。最初は電話、訪問、配食、郵便物確認など、
          生活の延長で受け入れやすい方法から始め、必要性が高まった段階で追加を検討します。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-monitoring-cost-check?utm_source=toshi-navi&utm_medium=guide&utm_campaign=living_alone_parent_monitoring"
        toolLabel="見守り費用をチェックする"
        boothHref="https://kaigo-okane.booth.pm/items/8409959"
        boothLabel="見守り連絡表テンプレートを見る"
      >
        <p>
          まず無料ツールで見守りにかかる費用、連絡頻度、緊急時の連絡順を整理し、連絡表として家族で継続管理する段階では
          BOOTHの「一人暮らし親の見守り連絡表テンプレート集」に転記すると共有しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-bankbook-insurance-asking-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">親のお金の確認は、資産額ではなく「困った時の場所」から聞く</h2>
        <p>
          親の介護や入院が近づくと、通帳、保険証券、年金、公共料金、カード支払いの確認が必要になります。
          ただ、いきなり「通帳を見せて」「資産はいくらあるの」と聞くと、親が警戒したり、家族間で不信感が出たりしやすくなります。
        </p>
        <p>
          最初に聞くべきなのは金額ではなく、入院時や支払い確認で家族が困らないための保管場所と問い合わせ先です。
          「管理したい」ではなく、「急な入院の時に連絡先や書類の場所が分からないと困るから、最低限だけ確認したい」と伝えるほうが進めやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">最初に聞く範囲</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>主に使っている銀行名、支店名、通帳やキャッシュカードの保管場所</li>
          <li>年金の受取口座、年金通知書や関連書類の保管場所</li>
          <li>医療保険、生命保険、火災保険、自動車保険の証券や問い合わせ先</li>
          <li>家賃、管理費、電気、ガス、水道、電話、携帯、サブスクの支払い方法</li>
          <li>健康保険証、介護保険証、お薬手帳、診察券、緊急連絡先</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">聞き方の例</h2>
        <p>
          聞き方は、親の財産を把握する話ではなく、手続きで困らないための話にします。たとえば「入院した時に保険の請求先が分からないと困るから、
          保険証券の場所だけ教えて」「公共料金が止まると困るから、どの口座から引き落とされているかだけメモしておきたい」といった聞き方です。
        </p>
        <p>
          きょうだいがいる場合は、聞いた人だけが情報を抱え込まないよう、確認した項目、未確認の項目、親が話したくない項目を分けて共有します。
          情報の扱いに不安がある場合は、見られる人を限定し、暗証番号やパスワードはメモに入れないルールにしておきます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">確認してはいけないものを先に決める</h2>
        <p>
          家族内整理では、暗証番号、ネットバンキングのパスワード、クレジットカードのセキュリティコードを集める必要はありません。
          代理手続きや支払い補助が必要な場合は、金融機関、保険会社、専門家、公的窓口へ確認する前提で進めます。
        </p>
        <p>
          まずは「どこに何があるか」「どこに問い合わせるか」「緊急時に誰へ連絡するか」だけで十分です。本人の意思確認を置き去りにせず、
          家族が勝手に管理範囲を広げないことが、後のトラブルを防ぎます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族共有メモに残す項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>確認日、確認した人、親本人が同意した範囲</li>
          <li>書類の種類、保管場所、問い合わせ先、次に確認すること</li>
          <li>支払いが止まると困るもの、年1回更新があるもの、緊急時だけ必要なもの</li>
          <li>きょうだいに共有する範囲、共有しない情報、専門窓口へ確認する事項</li>
        </ul>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-money-document-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_bankbook_insurance_asking_guide"
        toolLabel="確認メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8410669"
        boothLabel="通帳・保険・支払い確認テンプレートを見る"
      >
        <p>
          まず無料ツールで聞く順番と確認項目を整理し、通帳、保険、支払い、連絡先を継続的に管理する段階では
          BOOTHの通帳・保険・支払い確認テンプレートに転記すると家族で見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-facility-visit-question-list": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">施設見学は「見た印象」だけで終わらせない</h2>
        <p>
          介護施設の見学では、建物のきれいさやスタッフの雰囲気に目が向きやすくなります。
          もちろん印象も大切ですが、家族で比較するときに必要なのは、同じ質問を複数施設に投げて、費用、医療対応、夜間対応、
          面会、退去条件を同じ形式で残すことです。
        </p>
        <p>
          見学後に記憶だけで話し合うと、「よさそうだった」「高そうだった」という感想に寄りやすくなります。
          事前に質問リストを作り、聞いたことと未確認のことを分けて記録しておくと、家族へ説明しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">費用で聞くこと</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>入居一時金、敷金、保証金、償却、退去時の返金条件</li>
          <li>月額利用料の内訳、家賃、管理費、食費、水道光熱費</li>
          <li>介護保険自己負担、上乗せ介護費、夜間対応費、通院付き添い費</li>
          <li>おむつ、日用品、理美容、レクリエーション、医療連携で追加費用が出る場面</li>
          <li>入院が長引いた場合や退去する場合に発生する費用</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">生活と医療対応で聞くこと</h2>
        <p>
          本人の状態によって、確認すべき質問は変わります。服薬管理、通院付き添い、転倒リスク、認知面の不安、夜間の見守り、
          食事形態、看取り対応など、家族が気になっていることを見学前に並べておきます。
        </p>
        <p>
          施設側に「できますか」とだけ聞くより、「どの状態まで対応できますか」「追加費用はありますか」「状態が変わった時はどう相談しますか」
          と聞くほうが、入居後の認識違いを減らしやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族の通いやすさと連絡体制も比較する</h2>
        <p>
          施設選びは本人だけでなく、家族の通いやすさにも影響します。面会時間、オンライン面会、緊急時の連絡方法、
          家族への報告頻度、通院付き添いを施設が行うか家族が行うかを確認します。
        </p>
        <p>
          遠方の家族がいる場合は、見学に行った人が写真やパンフレットを共有するだけでなく、質問への回答、費用見積もり、
          未確認事項を同じメモにまとめると判断が進めやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">見学後に家族で確認すること</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>本人の状態に合いそうか、家族が通える距離か、予算内に収まるか</li>
          <li>追加費用、医療対応、退去条件で未確認の項目が残っていないか</li>
          <li>次に見学する施設、再確認する質問、相談する窓口を決めたか</li>
          <li>正式な見積もり、重要事項説明書、契約書を誰が確認するか</li>
        </ul>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-facility-visit-question-list?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care_facility_visit_question_list"
        toolLabel="見学質問リストを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8340642"
        boothLabel="施設選び重点パックを見る"
      >
        <p>
          見学前は無料ツールで質問リストを作り、候補施設の比較や家族共有まで残す段階ではBOOTHの施設選び重点パックにまとめると、
          費用と条件を同じ形式で見返せます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "long-distance-care-travel-cost-role-share": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">遠距離介護は、交通費と作業負担を分けて見える化する</h2>
        <p>
          親が離れた場所で暮らしていると、通院付き添い、施設見学、役所手続き、緊急時の移動が急に発生します。
          遠方から通う家族は交通費や宿泊費を負担し、近くに住む家族は日常の連絡や現地対応を担うことが多く、
          どちらも「自分ばかり負担している」と感じやすくなります。
        </p>
        <p>
          最初から負担割合を決め切るより、交通費、宿泊費、現地対応、電話連絡、書類整理を別々に記録します。
          金額と作業を同じ話し合いに混ぜないことが、家族間の説明をしやすくする第一歩です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">交通費メモに残す項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>訪問日、訪問目的、通院・施設見学・役所手続き・緊急対応などの区分</li>
          <li>往復交通費、現地移動費、駐車場代、宿泊費、食費などの実費</li>
          <li>誰が立て替えたか、領収書や明細があるか、親本人のお金から精算するか</li>
          <li>同じ日に発生した作業、面談内容、次回までに確認すること</li>
          <li>家族で分担する対象にする費用と、各自負担にする費用の仮ルール</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">遠方でも担当できる役割を先に決める</h2>
        <p>
          遠方の家族が現地に行ける回数は限られますが、費用記録、病院や施設に聞く質問の整理、親への定期連絡、
          きょうだい間の議事メモ作成は離れていても担当できます。近くの家族だけが現地対応と連絡係を兼ねると、
          連絡漏れや感情的な負担が大きくなります。
        </p>
        <p>
          たとえば、近くの家族は緊急時の現地対応、遠方の家族は月1回の費用集計と資料共有、全員で次回確認日を決める、
          というように分けます。介護度、入退院、施設検討などの節目では、役割と交通費の扱いを見直します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">決める前に避けたいこと</h2>
        <p>
          交通費を誰が持つかだけを急いで決めると、現地対応の時間や緊急時の負担が置き去りになります。
          また、親本人の口座から支払う費用、家族が立て替える費用、親族間で分担する費用は扱いが違います。
          税務、相続、契約に関わる判断は、整理したメモをもとに専門窓口へ確認してください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-distance-care-travel-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=long_distance_care_travel_cost_role_share"
        toolLabel="交通費メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8411252"
        boothLabel="遠距離介護テンプレートを見る"
      >
        <p>
          まず無料ツールで月あたりの交通費と役割案を作り、決まった連絡ルール、訪問計画、次回確認事項は遠距離介護テンプレートに残すと、
          遠方の家族にも共有しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "care-certification-application-prep": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護認定は、申請前のメモで相談が進めやすくなる</h2>
        <p>
          親の転倒、もの忘れ、服薬の不安、買い物や通院の負担が増えてきたとき、介護認定の申請を考える家族は多くなります。
          ただ、窓口へ相談する時点で日常の困りごとが整理できていないと、「何を伝えればよいか分からない」状態になりがちです。
        </p>
        <p>
          申請前に必要なのは、特別な書類を完璧に作ることではありません。本人が普段できること、できない日があること、家族が手伝っていることを、
          日付と場面で残しておくことです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">相談前に確認する基本項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>介護保険証、健康保険証、お薬手帳、かかりつけ医の情報</li>
          <li>地域包括支援センターや自治体の介護保険窓口へ連絡する担当者</li>
          <li>食事、入浴、排せつ、移動、服薬、買い物、金銭管理で困っていること</li>
          <li>家族がすでに手伝っていること、付き添い頻度、電話や見守りの頻度</li>
          <li>認定調査に同席できる人、結果通知後に相談する人</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">困りごとは「印象」ではなく「具体例」で残す</h2>
        <p>
          「最近大変そう」だけでは、相談時に状況が伝わりにくくなります。たとえば「5月10日、薬を飲んだか分からず家族が確認した」
          「買い物帰りにふらつきがあり、翌週から付き添いを始めた」のように、日付、場面、家族の対応をセットにします。
        </p>
        <p>
          本人を責めるための記録ではなく、必要な支援につなげるための記録として扱うことが大切です。きょうだいで見ている場面が違う場合は、
          それぞれが気づいたことを同じ形式で残すと共有しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族で分ける役割</h2>
        <p>
          申請前後は、連絡、同席、書類確認、通院付き添い、費用記録が同時に発生します。誰か一人に集中させず、
          連絡係、記録係、同席できる人、費用を立て替えた時に記録する人を分けておくと、負担感が偏りにくくなります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-care-certification-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care-certification-application-prep"
        toolLabel="申請前メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8407555"
        boothLabel="申請前テンプレートを見る"
      >
        <p>
          まず無料ツールで相談前の確認項目を作り、記録を残す段階ではBOOTHの要介護認定テンプレートを使うと、
          家族会議や窓口相談に持っていきやすい形に整えられます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "kaigo-cost-family-share": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護費用の話し合いは、金額より先に範囲を分ける</h2>
        <p>
          親の介護費用できょうだい間の負担感がずれやすい理由は、支払いだけでなく、通院付き添い、役所手続き、
          施設見学、連絡係といった作業負担まで混ざって話されるためです。まずは誰がいくら出すかを決める前に、
          費用と作業を分けて見える化します。
        </p>
        <p>
          最初に分けたいのは、親本人の年金や預貯金から払うもの、家族が立て替えたもの、交通費や通信費など家族側に出るもの、
          そして時間や手間の負担です。この4つを同じ表に入れると、現金を出した人だけでなく、動いた人の負担も説明しやすくなります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">分担表に入れる項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>介護サービス費、医療費、薬代、入院時の差額ベッド代などの直接費</li>
          <li>おむつ、介護用品、食事、日用品、家電買い替えなどの生活費</li>
          <li>通院付き添い、施設見学、面談、役所手続きにかかった交通費</li>
          <li>親の口座から払った金額、家族が立て替えた金額、まだ精算していない金額</li>
          <li>連絡係、支払い係、書類係、緊急対応係などの作業分担</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">もめにくい決め方</h2>
        <p>
          基本は「親本人のお金を先に使う」「立替は日付と用途を残す」「家族負担は毎月ではなく一定期間ごとに精算する」の3点です。
          きょうだいで所得差や距離差がある場合は、完全な均等割りにこだわるより、現金負担と作業負担を合わせて調整したほうが現実的です。
        </p>
        <p>
          たとえば近くに住む人が通院付き添いと役所手続きを担当し、遠方の人は定額の費用負担と資料整理を担当する、といった形です。
          重要なのは、一度決めたルールを固定しすぎず、介護度や入院、施設入居などの節目で見直すことです。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-cost-share?utm_source=toshi-navi&utm_medium=guide&utm_campaign=kaigo-cost-family-share"
        toolLabel="費用分担を試算する"
        boothHref="https://kaigo-okane.booth.pm/items/8340354"
        boothLabel="介護費用立替・分担記録テンプレートを見る"
      >
        <p>
          ざっくりした金額を入れて分担イメージを作りたい場合は無料ツールを使い、家族会議にそのまま持っていく資料が必要なら
          BOOTHの介護費用立替・分担記録テンプレートで項目を整えます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-care-money-first-checklist": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">介護が始まる前に、お金の所在を軽く確認しておく</h2>
        <p>
          親の介護は、入院や転倒をきっかけに急に始まることがあります。その時点で年金額、支払い口座、保険、公共料金、
          介護保険証の場所が分からないと、家族は支払いと手続きに追われます。元気なうちに細かい金額まで聞き出す必要はありませんが、
          どこを見れば分かるかだけでも整理しておくと負担が大きく下がります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">最初に確認する一覧</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>年金の受取口座、主に使っている銀行口座、通帳やキャッシュカードの保管場所</li>
          <li>医療保険、生命保険、火災保険、自動車保険などの証券や問い合わせ先</li>
          <li>介護保険証、健康保険証、マイナンバーカード、お薬手帳の保管場所</li>
          <li>家賃、住宅ローン、管理費、電気、ガス、水道、携帯電話、サブスクの支払い方法</li>
          <li>親族、かかりつけ医、ケアマネ候補、地域包括支援センターの連絡先</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">聞き方は、管理ではなく緊急時の備えにする</h2>
        <p>
          親にいきなり資産額を聞くと警戒されることがあります。最初は「入院した時に家族が困らないように、保険証と連絡先だけ教えて」
          という範囲に留めるのが現実的です。パスワードや暗証番号を集めるより、書類の場所、問い合わせ先、支払いの流れを確認します。
        </p>
        <p>
          そのうえで、月1回の支払い、年1回の更新、緊急時だけ必要な情報に分けると、家族が見返しやすいメモになります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-emergency-info?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-care-money-first-checklist"
        toolLabel="緊急メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8340473"
        boothLabel="スターターセットを見る"
      >
        <p>
          まず最低限の連絡先と服薬情報を無料ツールで整え、家族会議や親との確認を進める段階でスターターセットに転記すると、
          抜け漏れを減らせます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "nursing-home-cost-compare": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">施設費用は月額だけで比べない</h2>
        <p>
          介護施設を比較するときに月額費だけを見ると、入居後の負担を見誤ります。入居一時金、家賃、管理費、食費、介護サービス費、
          医療対応費、日用品費、退去時の精算など、支払うタイミングが違う費用を同じ表で見ます。
        </p>
        <p>
          特に家族の判断に影響するのは、毎月の最低額ではなく、医療対応が増えた場合、介護度が変わった場合、入院が長引いた場合に
          どこまで費用が増えるかです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">比較表に入れる費用項目</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>入居一時金、敷金、保証金、償却ルール、退去時の返金条件</li>
          <li>月額利用料、家賃相当額、管理費、食費、水道光熱費</li>
          <li>介護保険自己負担、上乗せ介護費、夜間対応、看取り対応の有無</li>
          <li>通院付き添い、服薬管理、訪問診療、医療処置が必要になった時の追加費用</li>
          <li>面会のしやすさ、家族の移動時間、緊急時の連絡体制</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">家族で見るべき判断軸</h2>
        <p>
          最安の施設が最適とは限りません。親の状態、家族が通える距離、医療対応、退去条件を合わせて考える必要があります。
          見学時はパンフレットの月額だけでなく、追加費用が発生する場面を具体的に聞き、同じ質問を複数施設に投げると比較しやすくなります。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-facility-compare?utm_source=toshi-navi&utm_medium=guide&utm_campaign=nursing-home-cost-compare"
        toolLabel="施設比較表を作る"
        boothHref="https://kaigo-okane.booth.pm/items/8340642"
        boothLabel="施設比較PDFを見る"
      >
        <p>
          候補施設を2から3件に絞ったら、無料ツールで費用と条件を並べます。印刷して家族で共有する場合は、見学メモ付きのPDFが使いやすいです。
        </p>
      </KaigoActionBox>
    </>
  ),
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
        boothHref="https://kaigo-okane.booth.pm/items/8382202"
        boothLabel="入退院準備PDFを見る"
      >
        <p>
          入院直後は無料チェックリストで確認漏れを防ぎ、家族で共有する書き込み用の資料が必要になったら入退院準備PDFにまとめます。
        </p>
      </KaigoActionBox>
    </>
  ),
  "nisa-broker-ranking-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAの証券会社選びで重要な3つのポイント</h2>
        <p>
          2024年から大幅刷新された新NISA制度は、年間360万円・生涯1,800万円の非課税投資が可能になりました。しかし、どの証券会社で口座を開設するかによって、実際の運用成績やポイント還元の金額が大きく変わってきます。
        </p>
        <p>選ぶ際に重視すべきポイントは以下の3つです。</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>取扱銘柄数（特に投資信託の種類）</li>
          <li>クレカ積立のポイント還元率</li>
          <li>使いやすさ（アプリ・画面のわかりやすさ）</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="2026年 新NISAおすすめネット証券ランキング"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "投資信託 2,500本以上｜三井住友カード積立で最大5%還元",
            features: [
              "国内株式売買手数料 0円（新NISA）",
              "投資信託ラインナップ業界最多水準",
              "三井住友カードゴールド積立で1%還元",
              "Vポイント・Tポイント・Pontaポイントで投資可能",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天カード積立で最大1%還元｜楽天ポイント投資対応",
            features: [
              "楽天カード積立で最大1%の楽天ポイント",
              "楽天キャッシュ積立と併用で月10万円分が還元対象",
              "楽天銀行との連携でマネーブリッジ特典",
              "アプリ「iSPEED」が初心者に人気",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "ポイント重視",
          },
          {
            name: "マネックス証券",
            rank: 3,
            highlight: "マネックスカード積立で1.1%還元（業界最高水準）",
            features: [
              "クレカ積立の還元率が1.1%と業界トップクラス",
              "米国株の取扱銘柄数が豊富",
              "外国株の為替手数料が無料",
              "銘柄スカウター（分析ツール）が強力",
            ],
            href: "https://info.monex.co.jp/nisa/index.html",
            badge: "還元率No.1",
          },
          {
            name: "松井証券",
            rank: 4,
            highlight: "投信保有でポイントがもらえる独自サービス",
            features: [
              "信託報酬の一部がポイントとしてキャッシュバック",
              "NISA口座の取扱銘柄が豊富",
              "日本株サポートの問い合わせ対応が手厚い",
              "25歳以下は日本株の手数料無料",
            ],
            href: "https://www.matsui.co.jp/service/nisa/",
          },
          {
            name: "auカブコム証券",
            rank: 5,
            highlight: "auユーザーなら還元率UP｜Pontaポイント投資可能",
            features: [
              "au PAYカード積立で最大1%還元",
              "Pontaポイントで投資信託の購入が可能",
              "auじぶん銀行との連携で金利優遇",
              "auユーザーには使い勝手◎",
            ],
            href: "https://kabu.com/nisa/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAのよくある質問</h2>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-bold">Q. 複数の証券会社で新NISA口座を開けますか？</p>
            <p className="text-muted">A. NISA口座は1人1口座のみです。ただし年単位で他社への変更は可能です。</p>
          </div>
          <div>
            <p className="font-bold">Q. つみたて投資枠と成長投資枠は併用できますか？</p>
            <p className="text-muted">A. 併用可能。年間合計360万円（つみたて120万円＋成長240万円）まで。</p>
          </div>
        </div>
      </section>
    </>
  ),
  "roboadvisor-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアドバイザーとは</h2>
        <p>
          ロボアドバイザーは、AIが投資家のリスク許容度に応じて自動的にポートフォリオを構築・運用するサービスです。自分で銘柄を選ぶ手間がなく、長期分散投資を実現できるため、投資初心者に人気です。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 主要ロボアドバイザー比較"
        services={[
          {
            name: "ウェルスナビ",
            rank: 1,
            highlight: "預かり資産No.1｜新NISA対応",
            features: [
              "預かり資産1兆円超の最大手",
              "手数料 年1.1%（税込）",
              "最低投資額 1万円から",
              "おまかせNISA対応",
            ],
            href: "https://www.wealthnavi.com/",
            badge: "最大手",
          },
          {
            name: "THEO+ docomo",
            rank: 2,
            highlight: "dポイントユーザーにお得",
            features: [
              "手数料 年0.715〜1.1%",
              "dカード利用額に応じた特典",
              "ロボアド初心者向けサポート充実",
              "最低投資額 10万円",
            ],
            href: "https://theo.blue/docomo/",
          },
          {
            name: "SUSTEN",
            rank: 3,
            highlight: "成功報酬型｜利益が出ない時は手数料無料",
            features: [
              "成功報酬型（年0.484%〜1.089%）",
              "ESG投資の選択肢あり",
              "利益が出ない月は手数料0円",
              "最低投資額 10万円",
            ],
            href: "https://susten.jp/",
            badge: "成功報酬型",
          },
          {
            name: "楽ラップ",
            rank: 4,
            highlight: "楽天証券のロボアド｜固定報酬 or 成功報酬選択可",
            features: [
              "手数料プランが2種類選択可能",
              "最低投資額 1万円",
              "楽天ポイント連携",
              "下落ショック軽減機能",
            ],
            href: "https://wrap.rakuten-sec.co.jp/",
          },
          {
            name: "ON COMPASS",
            rank: 5,
            highlight: "マネックスグループの低コストロボアド",
            features: [
              "運用手数料 年0.9775%（最大）",
              "最低投資額 1,000円",
              "8つのポートフォリオから選択",
              "マネックス証券口座が必要",
            ],
            href: "https://www.on-compass.com/",
          },
        ]}
      />
    </>
  ),
  "ideco-broker-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCoの金融機関選びが重要な理由</h2>
        <p>
          iDeCo（個人型確定拠出年金）は掛金が全額所得控除の対象となる強力な節税制度ですが、金融機関ごとに取扱商品や手数料が異なります。一度口座を開くと変更が面倒なため、最初の選択が重要です。
        </p>
        <p className="text-sm">年収500万円の会社員が月23,000円を拠出した場合、年間約55,200円の節税効果（所得税10%+住民税10%）が得られます。</p>
      </section>
      <ComparisonTableCTA
        title="iDeCoおすすめ金融機関ランキング"
        services={[
          {
            name: "SBI証券 iDeCo",
            rank: 1,
            highlight: "運営管理手数料0円｜商品ラインナップ豊富",
            features: [
              "運営管理手数料 0円（加入者数No.1）",
              "取扱商品 38本（セレクトプラン）",
              "低コストインデックスファンド多数",
              "eMAXIS Slimシリーズ取扱あり",
            ],
            href: "https://go.sbisec.co.jp/prd/ideco/ideco_top.html",
            badge: "商品数トップ",
          },
          {
            name: "楽天証券 iDeCo",
            rank: 2,
            highlight: "運営管理手数料0円｜楽天ポイント運用と併用可",
            features: [
              "運営管理手数料 0円",
              "取扱商品 32本",
              "楽天ポイント投資との連携",
              "アプリが使いやすい",
            ],
            href: "https://dc.rakuten-sec.co.jp/",
          },
          {
            name: "マネックス証券 iDeCo",
            rank: 3,
            highlight: "ロボアドバイザー「iDeCo ロボ」無料提供",
            features: [
              "運営管理手数料 0円",
              "取扱商品 27本",
              "iDeCo ロボで商品選びをサポート",
              "eMAXIS Slim シリーズあり",
            ],
            href: "https://info.monex.co.jp/ideco/",
          },
          {
            name: "松井証券 iDeCo",
            rank: 4,
            highlight: "投信保有で0.4%還元のサポートサービス",
            features: [
              "運営管理手数料 0円",
              "取扱商品 40本（業界最多）",
              "信託報酬に応じたポイント還元",
              "老舗証券のサポート体制",
            ],
            href: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+EKIXI2+3XCC+BXIYQ",
          },
        ]}
      />
    </>
  ),
  "fx-broker-ranking": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FX会社選びの3つのポイント</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>スプレッド（取引コスト）の狭さ</li>
          <li>約定力（意図した価格で約定できるか）</li>
          <li>口座開設キャンペーンの充実度</li>
        </ul>
      </section>
      <ComparisonTableCTA
        title="FX口座開設おすすめ比較TOP5"
        services={[
          {
            name: "GMOクリック証券 FXネオ",
            rank: 1,
            highlight: "FX取引高 世界トップクラス｜業界最狭水準スプレッド",
            features: [
              "米ドル/円スプレッド 0.2銭原則固定",
              "FX取引高12年連続世界1位",
              "高機能アプリ「GMOクリック FXneo」",
              "口座開設キャンペーン最大30万円",
            ],
            href: "https://www.click-sec.com/corp/guide/fxneo/",
            badge: "取引高No.1",
          },
          {
            name: "DMM FX",
            rank: 2,
            highlight: "初心者に人気｜口座開設キャンペーン最大30万円",
            features: [
              "米ドル/円スプレッド 0.2銭原則固定",
              "LINE問い合わせ24時間対応",
              "最短1時間で口座開設完了",
              "5,000円キャッシュバック（条件あり）",
            ],
            href: "https://fx.dmm.com/",
          },
          {
            name: "外為どっとコム",
            rank: 3,
            highlight: "情報量No.1｜初心者教育コンテンツ充実",
            features: [
              "オンラインセミナー無料開催",
              "アナリストレポート豊富",
              "1,000通貨単位から取引可能",
              "主婦・学生にも人気",
            ],
            href: "https://www.gaitame.com/",
          },
          {
            name: "みんなのFX",
            rank: 4,
            highlight: "高スワップポイント｜スワップ狙いの長期投資家向け",
            features: [
              "高金利通貨のスワップが業界最高水準",
              "米ドル/円スプレッド 0.2銭",
              "1,000通貨単位から",
              "約定力に定評",
            ],
            href: "https://min-fx.jp/",
          },
          {
            name: "松井証券 FX",
            rank: 5,
            highlight: "1通貨から取引可能｜少額お試しに最適",
            features: [
              "1通貨から取引可能（業界唯一レベル）",
              "米ドル/円スプレッド 0.2銭",
              "初心者向けサポートあり",
              "大手証券の安心感",
            ],
            href: "https://www.matsui.co.jp/fx/",
          },
        ]}
      />
      <AffiliateCTA
        title="【ゴールデンウェイ・ジャパン FXTF】でFXを始める"
        description="MT4対応、スプレッド業界最狭水準。上級者も納得の本格派FX。"
        buttonText="FXTFの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G4HOD6+48D0+626XT"
        icon="📊"
      />
      <AffiliateCTA
        title="【フジトミ証券】で商品先物・FX取引を始める"
        description="老舗商品先物会社の信頼性。商品CFD・FX両方対応。"
        buttonText="フジトミ証券の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G7GUE2+34QW+BX3J6"
        icon="💹"
      />
      <AffiliateCTA
        title="【DMM 株】で米国株・日本株・NISAを始める"
        description="スマホアプリで簡単、NISA口座にも対応。手数料業界最安水準。"
        buttonText="DMM 株の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="🎯"
        highlight="NISA対応"
      />
      <AffiliateCTA
        title="【DMM CFD】世界の株価指数・金・原油を取引"
        description="DMM.com証券のCFD。日経225、NYダウ、金、原油などレバレッジ取引が可能。"
        buttonText="DMM CFDの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FZ4RX6+1WP2+NZ4J7"
        icon="📉"
      />
      <AffiliateCTA
        title="【お名前.com FX専用VPS】24時間安定稼働のMT4/MT5環境"
        description="FX自動売買（EA）を24時間稼働させるならVPSが必須。お名前.comデスクトップクラウドは業界最安級。"
        buttonText="FX専用VPSの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G829ZU+50+3NONKX"
        icon="🖥️"
      />
      <AffiliateCTA
        title="【MT4自動売買】お名前.com監修のEA運用"
        description="MT4対応の自動売買で資産運用を手軽に。EAを利用した資産運用が簡単に始められます。"
        buttonText="MT4自動売買の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FVK6AI+50+89Q8HD"
        icon="🤖"
      />
    </>
  ),
  "crypto-exchange-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">仮想通貨取引所の選び方</h2>
        <p>
          仮想通貨取引所を選ぶ際は、取扱通貨数、手数料、セキュリティ、使いやすさを重視しましょう。金融庁登録の国内取引所であれば一定のセキュリティ水準は担保されています。
        </p>
      </section>
      <ComparisonTableCTA
        title="2026年 仮想通貨取引所比較TOP5"
        services={[
          {
            name: "bitFlyer",
            rank: 1,
            highlight: "国内最大手｜7年連続セキュリティ評価No.1",
            features: [
              "ビットコイン取引量 国内No.1",
              "1円から取引可能",
              "取扱通貨 35種類以上",
              "ハッキング被害0件の堅牢なセキュリティ",
            ],
            href: "https://bitflyer.com/",
            badge: "大手",
          },
          {
            name: "コインチェック",
            rank: 2,
            highlight: "アプリDL数No.1｜初心者に最もおすすめ",
            features: [
              "初心者でもわかりやすいアプリUI",
              "取扱通貨 30種類以上",
              "つみたて投資サービスあり",
              "電気代・ガス代を支払うとBTCが貯まる",
            ],
            href: "https://coincheck.com/",
            badge: "初心者向け",
          },
          {
            name: "GMOコイン",
            rank: 3,
            highlight: "各種手数料無料｜総合力No.1",
            features: [
              "入出金手数料 無料",
              "日本円出金手数料 無料",
              "レバレッジ取引対応",
              "取扱通貨 26種類",
            ],
            href: "https://coin.z.com/jp/",
          },
          {
            name: "bitbank",
            rank: 4,
            highlight: "アルトコイン取引量No.1｜板取引可能",
            features: [
              "全通貨でMaker -0.02%の手数料",
              "板取引でスプレッドの狭い取引が可能",
              "セキュリティ評価が高い",
              "取扱通貨 38種類",
            ],
            href: "https://bitbank.cc/",
          },
          {
            name: "SBI VCトレード",
            rank: 5,
            highlight: "SBIグループの安心感｜手数料無料が多い",
            features: [
              "各種手数料無料",
              "ステーキングサービスあり",
              "レンディング年利最大10%",
              "SBI証券連携",
            ],
            href: "https://www.sbivc.co.jp/",
          },
        ]}
      />
    </>
  ),
  "high-reward-credit-cards": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高還元率クレカの選び方</h2>
        <p>
          クレジットカードの還元率は通常0.5%前後ですが、1%以上なら「高還元率カード」と呼ばれます。年会費無料で1%以上還元される優秀なカードを厳選しました。
        </p>
      </section>
      <ComparisonTableCTA
        title="高還元率クレジットカードおすすめ5選"
        services={[
          {
            name: "楽天カード",
            rank: 1,
            highlight: "還元率1%｜楽天経済圏なら最大3%以上",
            features: [
              "基本還元率1%（楽天ポイント）",
              "楽天市場で3%以上",
              "年会費 永年無料",
              "楽天証券のクレカ積立で1%還元",
            ],
            href: "https://www.rakuten-card.co.jp/",
            badge: "楽天経済圏",
          },
          {
            name: "三井住友カード（NL）",
            rank: 2,
            highlight: "コンビニ・飲食店で最大7%還元",
            features: [
              "基本還元率0.5%",
              "セブン・ローソン・ファミマ等で7%",
              "年会費 永年無料",
              "SBI証券のクレカ積立で0.5%還元",
            ],
            href: "https://www.smbc-card.com/nyukai/card/nl.jsp",
            badge: "コンビニ最強",
          },
          {
            name: "JCBカードW",
            rank: 3,
            highlight: "39歳以下限定｜還元率1%の優良カード",
            features: [
              "基本還元率1%",
              "Amazonで2%還元",
              "年会費 永年無料",
              "39歳までに申込必要（以降は継続利用可）",
            ],
            href: "https://www.jcb.co.jp/ordercard/jcbw/",
          },
          {
            name: "PayPayカード",
            rank: 4,
            highlight: "PayPay利用者なら最大1.5%還元",
            features: [
              "基本還元率1%（PayPayポイント）",
              "PayPay残高チャージ可能",
              "年会費 永年無料",
              "Yahoo!ショッピングで最大3%還元",
            ],
            href: "https://card.yahoo.co.jp/",
          },
          {
            name: "リクルートカード",
            rank: 5,
            highlight: "還元率1.2%｜業界最高水準の年会費無料カード",
            features: [
              "基本還元率1.2%（常時）",
              "じゃらん・ホットペッパーで最大3.2%",
              "年会費 永年無料",
              "dポイントへの交換可能",
            ],
            href: "https://recruit-card.jp/",
            badge: "還元率No.1",
          },
        ]}
      />
      <AffiliateCTA
        title="【エポスカード】年会費永久無料で即日発行対応"
        description="海外旅行保険自動付帯、マルイで10%OFFセール、即時提携対応。年会費はずっと無料。"
        buttonText="エポスカードを申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+MMIJE+38L8+BY641"
        icon="💳"
        highlight="年会費永久無料"
      />
    </>
  ),
  "side-business-ranking-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員におすすめの副業とは</h2>
        <p>
          働き方改革と副業解禁の流れで、サラリーマンの副業は当たり前の時代になりました。ここでは、会社員が無理なく月5万円を目指せる副業を厳選して紹介します。
        </p>
      </section>
      <div className="space-y-4">
        {[
          { rank: 1, name: "Webライティング", earn: "月3〜10万円", skill: "文章力", start: "クラウドワークス / ランサーズ" },
          { rank: 2, name: "ブログアフィリエイト", earn: "月0〜50万円", skill: "SEO・ライティング", start: "WordPress + レンタルサーバー" },
          { rank: 3, name: "動画編集", earn: "月5〜20万円", skill: "Premiere Pro等", start: "オンラインスクール受講→案件獲得" },
          { rank: 4, name: "プログラミング案件", earn: "月5〜30万円", skill: "Web制作・開発", start: "プログラミングスクール受講" },
          { rank: 5, name: "ハンドメイド販売", earn: "月1〜10万円", skill: "制作スキル", start: "minne / Creema" },
          { rank: 6, name: "せどり・転売", earn: "月3〜20万円", skill: "リサーチ力", start: "メルカリ / Amazon" },
          { rank: 7, name: "Youtube運営", earn: "月0〜100万円+", skill: "動画制作・企画", start: "チャンネル登録者1000人から収益化" },
          { rank: 8, name: "オンライン英会話講師", earn: "月5〜15万円", skill: "英語力", start: "DMM英会話等に登録" },
          { rank: 9, name: "投資（配当金）", earn: "月1〜10万円", skill: "投資知識", start: "証券口座開設→高配当株購入" },
          { rank: 10, name: "Webデザイン", earn: "月3〜20万円", skill: "Figma / Photoshop", start: "オンラインスクール or 独学" },
        ].map((item) => (
          <div key={item.rank} className="rounded-xl border border-card-border bg-card-bg p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                {item.rank}
              </span>
              <h3 className="text-lg font-bold">{item.name}</h3>
            </div>
            <div className="text-sm space-y-1 text-muted">
              <p>💰 想定月収: <span className="text-foreground font-medium">{item.earn}</span></p>
              <p>🎯 必要スキル: {item.skill}</p>
              <p>🚀 始め方: {item.start}</p>
            </div>
          </div>
        ))}
      </div>
      <AffiliateCTA
        title="副業の確定申告はクラウド会計ソフトで"
        description="副業所得が年20万円を超えたら確定申告が必要。freee・マネーフォワード・弥生なら、会計知識なしでも申告書を自動作成できます。"
        buttonText="おすすめ会計ソフトを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
        icon="📊"
      />
      <AffiliateCTA
        title="スキマ時間にコツコツ｜マクロミルのアンケートモニター"
        description="毎日数分のスマホ操作で月5,000〜15,000円が狙える定番の副業。登録無料・銀行振込可で、Web調査・商品モニターなど多彩な案件。"
        buttonText="マクロミルに無料登録"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD"
        icon="📋"
        highlight="登録無料"
      />
      <AffiliateCTA
        title="ブログ副業を始めるならエックスサーバーで決まり"
        description="国内シェアNo.1のレンタルサーバー。月990円〜、独自ドメイン永久無料、WordPressクイックスタートで10分でブログ開設可能。"
        buttonText="エックスサーバーを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
        icon="🖥️"
        highlight="月990円〜"
      />
    </>
  ),
  "household-budget-apps": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">家計簿アプリで家計管理を簡単に</h2>
        <p>
          紙の家計簿はもう不要。銀行・クレカ・電子マネーと自動連携する家計簿アプリなら、手入力なしで支出を可視化できます。
        </p>
      </section>
      <ComparisonTableCTA
        title="家計簿アプリおすすめ4選"
        services={[
          {
            name: "マネーフォワードME",
            rank: 1,
            highlight: "連携数No.1｜2,600以上の金融機関対応",
            features: [
              "銀行・クレカ・証券・電子マネー等2,600以上と連携",
              "資産推移グラフが見やすい",
              "無料プランは連携4件まで",
              "プレミアム 月500円で無制限連携",
            ],
            href: "https://moneyforward.com/",
            badge: "定番",
          },
          {
            name: "Zaim",
            rank: 2,
            highlight: "レシート撮影で自動入力",
            features: [
              "AI OCRでレシート読み取り",
              "家族との共有家計簿に対応",
              "無料プランでも高機能",
              "プレミアム 月480円",
            ],
            href: "https://zaim.net/",
          },
          {
            name: "Money Tree",
            rank: 3,
            highlight: "シンプルUI｜法人カード対応",
            features: [
              "広告なしの快適なUI",
              "法人カード・ビジネス口座にも対応",
              "プレミアム 月500円",
              "セキュリティに定評",
            ],
            href: "https://moneytree.jp/",
          },
          {
            name: "おかねのコンパス",
            rank: 4,
            highlight: "完全無料｜東京海上グループ運営",
            features: [
              "基本機能が完全無料",
              "金融機関連携1,500以上",
              "東京海上日動グループの安心感",
              "シンプルな操作性",
            ],
            href: "https://moneiro.jp/compass",
          },
        ]}
      />
    </>
  ),
  "new-nisa-basics": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAとは</h2>
        <p>
          新NISA（少額投資非課税制度）は、2024年1月から始まった個人投資家向けの税制優遇制度です。運用益に対して通常かかる約20%の税金が非課税になり、長期資産形成に最適です。
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm space-y-2 my-4">
          <p><strong>年間投資枠:</strong> 360万円（つみたて120万円＋成長240万円）</p>
          <p><strong>生涯投資枠:</strong> 1,800万円（うち成長投資枠 1,200万円）</p>
          <p><strong>非課税保有期間:</strong> 無期限</p>
          <p><strong>対象年齢:</strong> 18歳以上</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">つみたて投資枠と成長投資枠の違い</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>つみたて投資枠:</strong> 年120万円。金融庁が認定した長期・積立・分散に適した投資信託のみ</li>
          <li><strong>成長投資枠:</strong> 年240万円。上場株式・投資信託・ETF・REITなど幅広い商品に投資可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者におすすめの始め方</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>SBI証券 or 楽天証券でNISA口座を開設（最短5分）</li>
          <li>つみたて投資枠で低コストの全世界株式・米国株式などのインデックスファンドを少額から積立</li>
          <li>成長投資枠は慣れてから活用（個別株やETFで分散）</li>
          <li>15年以上の長期保有を前提に、短期の値動きは気にしない</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">始める前に整える3つの前提</h2>
        <p className="text-sm">
          NISAは税制面で有利な制度ですが、投資元本が保証される制度ではありません。生活防衛資金、近い将来に使う予定のお金、借入返済の優先順位を確認してから、余裕資金で始めるのが基本です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm mt-3">
          <li>生活費の3〜6か月分を普通預金などで確保しているか</li>
          <li>住宅購入・教育費など5年以内に使うお金を投資に回していないか</li>
          <li>値下がり時にも積立を続けられる金額に抑えているか</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">NISAで避けたい失敗</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5 text-sm space-y-2">
          <p><strong>短期売買を前提にする:</strong> 非課税枠を活かすには、長期・分散・積立の設計が向いています。</p>
          <p><strong>人気銘柄だけで選ぶ:</strong> 手数料、投資対象、純資産残高、運用方針を確認してから選びます。</p>
          <p><strong>一括投資に偏りすぎる:</strong> 価格変動が不安な場合は、毎月積立で購入時期を分散します。</p>
        </div>
      </section>
    </>
  ),
  "fire-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">FIREとは</h2>
        <p>
          FIRE（Financial Independence, Retire Early）は、経済的自立と早期退職を意味します。十分な資産を築き、働かなくても生活できる状態を目指すライフスタイルです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">FIRE達成の目安: 年間支出の25倍</h2>
        <p>
          「4%ルール」に基づき、資産を年4%で運用しながら取り崩せば、理論上は元本を減らさずに生活できます。つまり年間支出の25倍がFIRE達成の目安です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>年間支出 300万円 → 必要資産 7,500万円</li>
          <li>年間支出 400万円 → 必要資産 1億円</li>
          <li>年間支出 500万円 → 必要資産 1億2,500万円</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">FIRE達成のための戦略</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>家計改善で貯蓄率を50%以上に引き上げる</li>
          <li>新NISA・iDeCoで税制優遇を最大活用</li>
          <li>全世界株式など低コストインデックスファンドで長期運用</li>
          <li>副業で収入源を複線化</li>
          <li>固定費（住居費・通信費・保険料）の見直し</li>
        </ol>
      </section>
      <AffiliateCTA
        title="FIRE達成の第一歩はネット証券の口座開設"
        description="SBI証券・楽天証券なら新NISA口座開設が無料。クレカ積立でポイントも貯まり、実質還元率1%以上でFIRE資産を育てられます。"
        buttonText="おすすめ証券会社を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
      />
    </>
  ),
  "tax-saving-techniques": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員でも使える節税テクニック</h2>
        <p>
          「会社員だから節税できない」は誤解です。以下の制度を上手く活用すれば、年間数十万円の節税も可能です。
        </p>
      </section>
      <div className="space-y-4">
        {[
          {
            name: "ふるさと納税",
            effect: "寄付額-2,000円分が翌年の税金から控除",
            target: "全会社員",
          },
          {
            name: "iDeCo（個人型確定拠出年金）",
            effect: "掛金全額が所得控除。年収500万円なら年約5-6万円節税",
            target: "全会社員（企業年金制度により上限額異なる）",
          },
          {
            name: "住宅ローン控除",
            effect: "住宅ローン残高の0.7%を13年間税額控除",
            target: "住宅購入予定者",
          },
          {
            name: "医療費控除",
            effect: "年間10万円超の医療費が所得控除",
            target: "通院・入院が多かった家庭",
          },
          {
            name: "セルフメディケーション税制",
            effect: "特定市販薬12,000円超で所得控除",
            target: "市販薬を頻繁に購入する人",
          },
          {
            name: "生命保険料控除",
            effect: "生命・介護医療・個人年金で最大12万円控除",
            target: "保険加入者",
          },
          {
            name: "特定支出控除",
            effect: "業務関連支出が一定額超で給与所得控除上乗せ",
            target: "通勤費・資格取得費が多い人",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl border border-card-border bg-card-bg p-5">
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <p className="text-sm mb-1"><strong>節税効果:</strong> {item.effect}</p>
            <p className="text-sm text-muted"><strong>対象者:</strong> {item.target}</p>
          </div>
        ))}
      </div>
    </>
  ),
  "online-bank-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ネット銀行は金利・手数料で圧倒的有利</h2>
        <p>
          メガバンクの普通預金金利が0.001%の時代、ネット銀行なら0.1〜0.2%と100〜200倍。ATM手数料・振込手数料も優遇があり、日常使いでも断然お得です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ネット銀行おすすめ比較"
        services={[
          {
            name: "住信SBIネット銀行",
            rank: 1,
            highlight: "SBI証券連携で金利0.2%｜スマホATM対応",
            features: [
              "ハイブリッド預金で金利0.01%→0.2%（SBI証券連携）",
              "スマートプログラムでATM無料最大15回/月",
              "他行振込最大20回/月無料",
              "外貨預金・外貨送金も強い",
            ],
            href: "https://www.netbk.co.jp/",
            badge: "総合力No.1",
          },
          {
            name: "楽天銀行",
            rank: 2,
            highlight: "楽天証券連携で金利0.1%｜ハッピープログラム",
            features: [
              "マネーブリッジで金利0.1%",
              "楽天ポイントが貯まる",
              "給与振込で他行振込3回無料",
              "口座数国内トップクラス",
            ],
            href: "https://www.rakuten-bank.co.jp/",
          },
          {
            name: "auじぶん銀行",
            rank: 3,
            highlight: "au経済圏なら最強｜金利最大0.3%",
            features: [
              "auマネ活プランで金利最大0.3%",
              "Pontaポイントが貯まる",
              "auカブコム証券との連携",
              "auユーザー向け特典多数",
            ],
            href: "https://www.jibunbank.co.jp/",
            badge: "auユーザー向け",
          },
          {
            name: "PayPay銀行",
            rank: 4,
            highlight: "PayPayチャージ可能｜手数料優遇豊富",
            features: [
              "PayPay残高チャージ対応",
              "ATM手数料月1回無料",
              "他行振込月1回無料",
              "取引のスマートさ◎",
            ],
            href: "https://www.paypay-bank.co.jp/",
          },
        ]}
      />
    </>
  ),
  "sbi-vs-rakuten-nisa": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券と楽天証券、新NISAで選ぶならどっち？</h2>
        <p>
          ネット証券の2強であるSBI証券と楽天証券。どちらも新NISAの取扱銘柄が豊富で、クレカ積立にも対応していますが、細かい還元率や利用可能なポイントに違いがあります。あなたの利用経済圏によって最適解が変わるのがポイントです。
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>楽天経済圏メインなら → 楽天証券</li>
          <li>Vポイント・三井住友カード利用者 → SBI証券</li>
          <li>取扱銘柄の多さ重視 → SBI証券</li>
          <li>アプリの使いやすさ → 楽天証券（iSPEED）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">比較ポイント①：クレカ積立の還元率</h2>
        <p className="text-sm">
          2024年のクレカ積立上限引き上げで、月10万円まで積立可能になりました。各社の還元率は以下の通りです。
        </p>
        <div className="rounded-xl border border-card-border bg-card-bg p-5 mt-3">
          <ul className="text-sm space-y-2">
            <li><strong>SBI証券</strong>: 三井住友カード（NL）0.5%、ゴールドNL 1.0%、プラチナプリファード 最大3%</li>
            <li><strong>楽天証券</strong>: 楽天カード通常1%（一部銘柄0.5%）、楽天キャッシュ併用で月10万円分が還元対象</li>
          </ul>
        </div>
      </section>
      <ComparisonTableCTA
        title="SBI証券 vs 楽天証券 項目別比較"
        services={[
          {
            name: "SBI証券",
            rank: 1,
            highlight: "取扱銘柄数・クレカ積立還元率ともに業界最高水準",
            features: [
              "投資信託 2,500本以上（業界最多水準）",
              "三井住友ゴールドカードNLで1%還元",
              "プラチナプリファードで最大3%還元",
              "Vポイント・Pontaポイント・Tポイントで投信購入可",
              "米国株の取扱銘柄数も豊富",
            ],
            href: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
            badge: "総合力No.1",
          },
          {
            name: "楽天証券",
            rank: 2,
            highlight: "楽天経済圏ユーザーならダントツでお得",
            features: [
              "楽天カード積立で最大1%ポイント還元",
              "楽天キャッシュ積立でさらに0.5%",
              "楽天ポイントで投資信託購入可能",
              "楽天銀行マネーブリッジで金利0.1%",
              "アプリ「iSPEED」が使いやすい",
            ],
            href: "https://www.rakuten-sec.co.jp/web/nisa/",
            badge: "楽天経済圏No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">結論：両方口座開設がベスト</h2>
        <p>
          ネット証券は口座開設・維持が無料なので、実は「両方開設」が最適解です。メイン口座をNISA用、サブ口座を特定口座・米国株用など、用途で使い分けることで両社のメリットを享受できます。
        </p>
      </section>
      <AffiliateCTA
        title="まずは人気No.1のSBI証券で口座開設"
        description="投資信託ラインナップ業界最多水準。三井住友カードNLで積立ポイント還元も受けられます。新NISA対応・口座開設無料。"
        buttonText="SBI証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="口座開設数No.1"
      />
    </>
  ),
  "furusato-tax-guide-2026": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ふるさと納税とは？実質2,000円で返礼品を受け取れる制度</h2>
        <p>
          ふるさと納税は、応援したい自治体に「寄付」する代わりに、寄付額のうち2,000円を超えた分が所得税・住民税から控除される制度です。しかも多くの自治体で、寄付額の約30%相当の返礼品が受け取れるため、実質2,000円負担で数万円分の特産品を手に入れられます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">限度額の目安（年収別・独身/共働き）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>年収400万円</strong>: 独身・共働き 約42,000円、夫婦（片働き） 約33,000円</li>
            <li><strong>年収500万円</strong>: 独身・共働き 約61,000円、夫婦（片働き） 約49,000円</li>
            <li><strong>年収600万円</strong>: 独身・共働き 約77,000円、夫婦（片働き） 約69,000円</li>
            <li><strong>年収700万円</strong>: 独身・共働き 約108,000円、夫婦（片働き） 約86,000円</li>
            <li><strong>年収1,000万円</strong>: 独身・共働き 約176,000円、夫婦（片働き） 約166,000円</li>
          </ul>
          <p className="text-xs text-muted mt-3">※医療費控除・住宅ローン控除などと併用する場合は限度額が下がります。シミュレーターで個別に試算してください。</p>
        </div>
      </section>
      <ComparisonTableCTA
        title="ふるさと納税おすすめポータルサイト"
        services={[
          {
            name: "楽天ふるさと納税",
            rank: 1,
            highlight: "楽天ポイント還元｜SPU対象で最大15%還元",
            features: [
              "楽天市場と同様にポイント還元",
              "お買い物マラソン・スーパーセール時が狙い目",
              "楽天カード決済でさらに+1%",
              "返礼品の種類が豊富",
            ],
            href: "https://event.rakuten.co.jp/furusato/",
            badge: "ポイント還元No.1",
          },
          {
            name: "さとふる",
            rank: 2,
            highlight: "使いやすさNo.1｜PayPay連携キャンペーン豊富",
            features: [
              "サイトの使い勝手が抜群",
              "PayPayポイントで還元",
              "レビュー・ランキングが充実",
              "返礼品の発送が比較的早い",
            ],
            href: "https://www.satofull.jp/",
            badge: "初心者向け",
          },
          {
            name: "ふるなび",
            rank: 3,
            highlight: "Amazonギフトカード還元｜家電の返礼品が充実",
            features: [
              "ふるなびコインでAmazonギフト交換可",
              "家電・ガジェット系返礼品が他サイトより豊富",
              "定期便の返礼品も充実",
            ],
            href: "https://furunavi.jp/",
          },
          {
            name: "ふるさとチョコイス",
            rank: 4,
            highlight: "返礼品掲載数最多｜マイナーな自治体も",
            features: [
              "掲載数業界最多クラス",
              "独自の返礼品レビュー豊富",
              "初めての人でも見つけやすい",
            ],
            href: "https://www.furusato-tax.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">ワンストップ特例 vs 確定申告</h2>
        <p className="text-sm">
          年間5自治体以内への寄付ならワンストップ特例で確定申告不要。6自治体以上、または医療費控除等と併用する場合は確定申告が必要です。
        </p>
      </section>
      <AffiliateCTA
        title="【ふるさと本舗】高還元率のふるさと納税ポータル"
        description="全国の特産品を厳選。独自ポイント還元とキャンペーンが充実。初めての方にも安心のサポート。"
        buttonText="ふるさと本舗で寄付する"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F75EHM+5IMU+60WN5"
        icon="🎁"
        highlight="独自キャンペーン豊富"
      />
      <AffiliateCTA
        title="【au PAY ふるさと納税】Pontaポイントで還元"
        description="au PAY 残高やPontaポイントで支払い可能。au経済圏の方ならお得に寄付できます。"
        buttonText="au PAY ふるさと納税へ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F2ZD96+54OC+5YJRM"
        icon="📱"
      />
      <AffiliateCTA
        title="【あるやうむ】NFT型ふるさと納税の新しい形"
        description="返礼品としてデジタル資産（NFT）やユニークな体験が選べる。新世代のふるさと納税。"
        buttonText="あるやうむを見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+F6JYVU+5U6O+5YJRM"
        icon="✨"
      />
    </>
  ),
  "side-business-tax-declaration": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">会社員の副業、確定申告は必要？</h2>
        <p>
          結論から言うと、<strong>年間20万円超の副業所得</strong>がある場合は確定申告が必要です。重要なのは「収入」ではなく「所得（収入-経費）」で判断する点。副業収入30万円でも経費が15万円あれば所得15万円となり、確定申告不要になる可能性があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">副業所得の種類と計算方法</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "雑所得", desc: "アフィリエイト・ウーバー・せどり等、多くの副業が該当。収入-経費で計算", target: "ブログ・アフィリエイト・クラウドソーシング" },
            { name: "事業所得", desc: "継続・反復して本格的に行う事業。青色申告で最大65万円控除", target: "フリーランス的に稼働している人" },
            { name: "不動産所得", desc: "アパート・マンション経営の家賃収入", target: "投資用不動産オーナー" },
            { name: "給与所得", desc: "ダブルワーク先で雇用されている場合", target: "パート・アルバイトの副業" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <h3 className="font-bold text-base">{item.name}</h3>
              <p className="text-sm mt-1">{item.desc}</p>
              <p className="text-xs text-muted mt-1"><strong>該当例:</strong> {item.target}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">経費として計上できるもの</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>PC・スマホ・カメラなど仕事に使う機材（10万円未満は全額、以上は減価償却）</li>
          <li>通信費（インターネット・携帯代）の副業利用分</li>
          <li>書籍・セミナー参加費など学習費用</li>
          <li>交通費・打ち合わせの飲食代</li>
          <li>ドメイン・サーバー代、サブスクツール料金</li>
          <li>家賃・光熱費の一部（家事按分。仕事部屋の面積比が目安）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">住民税「普通徴収」で会社バレを防ぐ</h2>
        <p>
          副業所得の住民税を確定申告で<strong>「自分で納付（普通徴収）」</strong>に設定すれば、本業の会社の給与天引きに反映されず、会社に副業収入が知られにくくなります。ただし、給与所得の副業（ダブルワーク）は対象外で特別徴収となる点に注意。
        </p>
      </section>
      <AffiliateCTA
        title="副業の確定申告をカンタンに。会計ソフトを活用"
        description="freee・マネーフォワードクラウドなどの会計ソフトを使えば、確定申告の手間を大幅に削減。スマホから数分で申告書作成が可能です。"
        buttonText="副業ランキングで稼ぐ副業を見つける"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💼"
      />
    </>
  ),
  "wealthnavi-vs-theo": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ロボアド2大サービス、どちらを選ぶ？</h2>
        <p>
          ロボアドバイザー市場で長年トップを争ってきたウェルスナビとTHEO。どちらも「全自動で国際分散投資」という点は共通ですが、手数料・運用アルゴリズム・提携サービスに違いがあります。結論は、<strong>ウェルスナビ＝シンプル派、THEO＝カスタマイズ派</strong>です。
        </p>
      </section>
      <ComparisonTableCTA
        title="ウェルスナビ vs THEO 項目別比較"
        services={[
          {
            name: "ウェルスナビ",
            rank: 1,
            highlight: "預かり資産No.1｜シンプルで続けやすい",
            features: [
              "手数料 年1.1%（3,000万円超部分は0.55%）",
              "DeTAX（税金最適化機能）で納税額を抑制",
              "6-7銘柄のETFで全世界分散",
              "新NISA対応で非課税運用も可能",
              "最低投資額 1万円から",
            ],
            href: "https://www.wealthnavi.com/",
            badge: "初心者おすすめ",
          },
          {
            name: "THEO",
            rank: 2,
            highlight: "カスタマイズ性◎｜docomoユーザー向け特典",
            features: [
              "手数料 年1.1%（段階的ディスカウントあり）",
              "231種類のETFから機能別ポートフォリオ",
              "THEO+ docomoならdポイント還元",
              "最低投資額 1万円から",
              "グロース/インカム/インフレヘッジの3機能",
            ],
            href: "https://theo.blue/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">運用実績の比較（過去5年）</h2>
        <p className="text-sm">
          過去5年（2020-2025）のリターンはウェルスナビ・THEOともに<strong>年平均7-9%程度</strong>。全世界株式インデックス（eMAXIS Slim 全世界株式）の同期間リターンが年12%前後であることを考えると、<strong>自分でインデックス投信を積立てた方が手数料1%分有利</strong>ではあります。ただし、メンテナンスフリーの利便性とリバランス機能を重視するならロボアドが選択肢です。
        </p>
      </section>
      <AffiliateCTA
        title="まずはロボアド全社比較から"
        description="ウェルスナビ・THEO以外にも楽ラップ・ON COMPASS・SUSTENなど個性的なサービスがあります。自分に合うロボアドを比較検討してください。"
        buttonText="ロボアド比較ガイドを見る"
        href="/guide/roboadvisor-comparison"
        external={false}
        icon="🤖"
      />
    </>
  ),
  "crypto-tax-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">仮想通貨の利益は「雑所得」扱い</h2>
        <p>
          ビットコインやイーサリアムなどの仮想通貨で得た利益は、税法上<strong>「雑所得」</strong>に分類されます。これは給与所得と合算して課税される「総合課税」の対象で、<strong>累進課税（最大55%）</strong>が適用されます。株式投資の譲渡所得（一律20.315%）とは税制が大きく異なる点に注意が必要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税率早見表（年収+仮想通貨利益の合計）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-1">
            <li>〜195万円: 所得税5% + 住民税10% = <strong>15%</strong></li>
            <li>195〜330万円: 所得税10% + 住民税10% = <strong>20%</strong></li>
            <li>330〜695万円: 所得税20% + 住民税10% = <strong>30%</strong></li>
            <li>695〜900万円: 所得税23% + 住民税10% = <strong>33%</strong></li>
            <li>900〜1,800万円: 所得税33% + 住民税10% = <strong>43%</strong></li>
            <li>1,800〜4,000万円: 所得税40% + 住民税10% = <strong>50%</strong></li>
            <li>4,000万円超: 所得税45% + 住民税10% = <strong>55%</strong></li>
          </ul>
          <p className="text-xs text-muted mt-3">※上記は課税所得ベース。各種控除後の金額に適用されます。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税金が発生するタイミング</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>仮想通貨を売却して円に戻したとき</li>
          <li>仮想通貨で商品・サービスを購入したとき</li>
          <li>仮想通貨同士を交換したとき（例：BTC→ETH）</li>
          <li>マイニング・ステーキング報酬を受け取ったとき</li>
        </ul>
        <p className="text-sm mt-3">※保有しているだけでは課税されません（含み益は非課税）。</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税のコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>利益確定を年をまたいで分散する（1年間で20万円以内なら申告不要）</li>
          <li>損失が出ている銘柄を売却して損益通算（仮想通貨同士のみ、他所得との通算不可）</li>
          <li>取引手数料・書籍代等を経費計上</li>
          <li>個人事業主として青色申告する（継続・反復取引の場合）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="仮想通貨取引所の比較はこちら"
        description="国内大手の仮想通貨取引所を手数料・セキュリティ・取扱通貨で比較。税金計算のしやすさも解説。"
        buttonText="仮想通貨取引所比較を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
      />
    </>
  ),
  "sbi-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券の基本情報</h2>
        <p>
          SBI証券は口座開設数1,200万超、国内ネット証券No.1の老舗総合証券会社です。新NISAの取扱銘柄数は業界トップクラス、三井住友カードとの連携でクレカ積立ポイント還元も受けられる、まさに総合力で選ぶなら第一候補の証券会社です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">メリット（実際に使って感じた強み）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>投資信託の取扱数が2,500本超で業界最多水準</li>
          <li>国内株式売買手数料が新NISA・特定口座ともに0円</li>
          <li>三井住友カードゴールドNLで積立ポイント1%還元（年間100万円利用で年会費無料）</li>
          <li>Vポイント・Tポイント・Pontaポイントと連携して投信購入可能</li>
          <li>IPO取扱社数が業界トップ、抽選権が得られやすい</li>
          <li>米国株・海外ETFの取扱銘柄も豊富</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">デメリット（正直な評価）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>画面・アプリのUIがやや古く、初心者は迷いやすい</li>
          <li>楽天ポイントは使えない（Vポイントに統合）</li>
          <li>NISA口座設定後の変更は年1回まで</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>投資信託・ETFを幅広く選びたい人</li>
          <li>三井住友カード・Vポイントを日常で使っている人</li>
          <li>IPO投資にチャレンジしたい人</li>
          <li>米国株・海外ETFも取引したい人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="SBI証券で新NISAを始めてみる"
        description="口座開設は無料・スマホで最短5分。三井住友カードNLと組み合わせることで、積立投資しながらポイントも貯まります。"
        buttonText="SBI証券の公式サイトを見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="業界No.1"
      />
    </>
  ),
  "high-yield-stock-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資で不労所得を作る</h2>
        <p>
          高配当株投資とは、<strong>配当利回り3-5%以上の株式やETFを長期保有し、配当収入を得る投資戦略</strong>です。値上がり益（キャピタルゲイン）を狙う成長株投資と違い、安定したキャッシュフローを得られるのが最大の魅力。新NISAの成長投資枠（年間240万円）を使えば、配当金も非課税で受け取れます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">日本の高配当株おすすめ銘柄</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "日本たばこ産業（JT）", yield: "約5.5%", feature: "連続減配なし、鉄板の高配当銘柄" },
            { name: "三菱UFJフィナンシャル・グループ", yield: "約3.3%", feature: "メガバンク最大手、金利上昇で業績改善" },
            { name: "三菱商事", yield: "約3.8%", feature: "バフェット銘柄、総合商社のリーダー" },
            { name: "三井住友フィナンシャルグループ", yield: "約3.5%", feature: "増配姿勢が明確" },
            { name: "KDDI", yield: "約3.3%", feature: "23年連続増配の優良銘柄" },
            { name: "NTT", yield: "約3.4%", feature: "通信の安定感、株式分割で買いやすさ◎" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base">{item.name}</h3>
                <span className="text-sm text-primary font-bold">利回り {item.yield}</span>
              </div>
              <p className="text-sm mt-1 text-muted">{item.feature}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※配当利回りは2026年4月時点の参考値。投資判断はご自身でお願いします。</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当ETFのおすすめ</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>VYM（バンガード・米国高配当株式ETF）</strong>: 利回り約3%、S&P500上位400銘柄から選定、経費率0.06%と超低コスト</li>
          <li><strong>HDV（iシェアーズ・コア米国高配当株ETF）</strong>: 利回り約3.5%、財務健全性を重視、経費率0.08%</li>
          <li><strong>SPYD（SPDRポートフォリオS&P500高配当株式ETF）</strong>: 利回り約4.5%、S&P500の上位80銘柄均等配分、経費率0.07%</li>
          <li><strong>QYLD（グローバルX・NASDAQ100カバード・コールETF）</strong>: 利回り約11%、カバード・コール戦略、毎月分配</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資の注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>利回りだけで選ぶと「減配・無配転落」リスクあり（配当性向チェック必須）</li>
          <li>米国株の配当は米国で10%源泉徴収→日本で20.315%課税（二重課税）。NISA口座でも米国課税は免除されない</li>
          <li>セクターが偏ると業績悪化時のダメージ大（分散投資を徹底）</li>
          <li>株価下落時でも配当が入るが、資産価値自体は目減りする</li>
        </ul>
      </section>
      <AffiliateCTA
        title="高配当株投資に最適なネット証券は？"
        description="国内株の売買手数料0円・米国株の為替手数料優遇など、配当再投資に最適なネット証券を比較解説。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "rakuten-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天証券の基本情報</h2>
        <p>
          楽天証券は口座開設数1,100万超の大手ネット証券。楽天経済圏（楽天市場・楽天カード・楽天銀行・楽天モバイル）と連携することで、ポイント二重取りができる点が最大の魅力です。新NISAのクレカ積立では楽天カードで1%還元（一部銘柄0.5%）、楽天キャッシュ併用で月10万円までが還元対象。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">メリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>楽天カード積立で1%のポイント還元</li>
          <li>楽天ポイントで投信・国内株・米国株の買付が可能</li>
          <li>楽天銀行マネーブリッジで普通預金金利が0.1%にアップ</li>
          <li>アプリ「iSPEED」が初心者にも使いやすい</li>
          <li>日経テレコンが無料で閲覧できる</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">デメリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>IPO取扱件数がSBI証券より少ない</li>
          <li>楽天ポイントの改悪が定期的に発生している</li>
          <li>単元未満株（S株）の取扱がない（かぶミニが代替）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天証券で新NISAを始めてみる"
        description="楽天ポイントユーザーなら圧倒的にお得。口座開設無料・スマホで最短翌営業日から取引開始。"
        buttonText="楽天証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
        highlight="楽天経済圏No.1"
      />
    </>
  ),
  "monex-securities-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">マネックス証券の強み：クレカ積立1.1%還元</h2>
        <p>
          マネックス証券は米国株に強いネット証券として有名ですが、2024年以降はマネックスカード積立で<strong>業界最高水準の1.1%還元</strong>を実現し注目を集めています。年会費1,100円（年1回以上の利用で無料）でこの還元率は他社を圧倒します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株投資に最適</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>米国株取扱銘柄 6,000超（業界トップクラス）</li>
          <li>買付時の為替手数料が無料</li>
          <li>時間外取引（プレマーケット）に対応</li>
          <li>銘柄スカウターという独自の分析ツールが強力</li>
          <li>米国株の配当再投資サービスあり</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>クレカ積立の還元率を最大化したい人</li>
          <li>米国株・ETFを本格的に取引したい人</li>
          <li>財務分析ツールを活用して銘柄選定したい人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="マネックス証券で最高還元率の積立を"
        description="マネックスカード積立1.1%還元で、新NISAの実質リターンを底上げ。口座開設・カード発行どちらも無料。"
        buttonText="マネックス証券の詳細を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
        highlight="還元率No.1"
      />
    </>
  ),
  "gmo-click-fx-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">GMOクリック証券FXの実力</h2>
        <p>
          GMOクリック証券のFX（FXネオ）は、口座開設数国内No.1。低スプレッド・高スワップポイント・使いやすい取引ツールの3拍子が揃っており、初心者から上級者まで幅広く支持されています。キャンペーンも常時開催。
        </p>
      </section>
      <ComparisonTableCTA
        title="GMOクリック証券FXの主要スペック"
        services={[
          {
            name: "GMOクリック証券 FXネオ",
            rank: 1,
            highlight: "業界最狭水準スプレッド｜口座開設数No.1",
            features: [
              "米ドル/円スプレッド 0.2銭（原則固定・例外あり）",
              "約定力99.9%の安定性",
              "PCツール「はっちゅう君FX+」が高機能",
              "スマホアプリも直感的で使いやすい",
              "新規口座開設で最大55万円キャッシュバック",
            ],
            href: "https://www.click-sec.com/corp/guide/fx/",
            badge: "総合力No.1",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュバック条件</h2>
        <p className="text-sm">
          新規口座開設+取引数量に応じて最大55万円のキャッシュバックが受けられます。達成のハードルは高めですが、段階的に少額から受け取れる仕組みなので初心者でも報酬を得やすいのが特徴です。
        </p>
      </section>
      <AffiliateCTA
        title="GMOクリック証券でFXを始めてみる"
        description="口座開設は無料・最短当日で取引開始。キャッシュバックキャンペーン常時開催中。"
        buttonText="GMOクリック証券の詳細を見る"
        href="/guide/fx-broker-ranking"
        external={false}
        icon="💹"
      />
    </>
  ),
  "dmm-fx-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">DMM FX の最大の魅力：高額キャッシュバック</h2>
        <p>
          DMM FXは、新規口座開設キャンペーンで<strong>最大30万円（2026年時点）</strong>のキャッシュバックが受けられることで有名。取引量に応じて段階的に受け取れるため、少しの取引でも数万円の報酬を手にできます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">DMM FXのメリット</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>米ドル/円スプレッド 0.2銭（原則固定）</li>
          <li>全20通貨ペア取扱</li>
          <li>LINEサポート対応（業界初）</li>
          <li>取引ツールがシンプルで初心者向き</li>
          <li>最短1時間で取引開始可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">キャッシュバック獲得のコツ</h2>
        <p className="text-sm">
          キャッシュバックは取引数量のレベルに応じて増加。最小レベル（2,000円）は1万通貨の取引1回で達成可能。スワップ狙いのポジションを建てて保有するだけでも目標達成しやすい設計です。
        </p>
      </section>
      <AffiliateCTA
        title="【DMM 株】で日本株・米国株・NISAを始める"
        description="アプリで簡単取引、NISA対応。口座開設+取引で特典受け取り可能。"
        buttonText="DMM 株の公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="💹"
        highlight="新規口座開設+取引で特典"
      />
      <AffiliateCTA
        title="ゴールデンウェイ・ジャパン【FXTF】でFXを始める"
        description="スプレッド業界最狭水準、MT4対応の本格派FX。口座開設は無料。"
        buttonText="ゴールデンウェイの公式サイトへ"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G4HOD6+48D0+626XT"
        icon="📈"
      />
      <AffiliateCTA
        title="【DMM CFD】株価指数・金・原油を取引"
        description="日経225・NYダウ・金・原油などCFDで多様な資産にレバレッジ投資。DMM.com証券の信頼性。"
        buttonText="DMM CFDの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FZ4RX6+1WP2+NZ4J7"
        icon="🛢️"
      />
      <AffiliateCTA
        title="【TOSSY】あらゆる取引をアプリひとつで完結"
        description="DMMの次世代取引アプリ。FX・CFD・株式をワンストップで。お得な特典付き。"
        buttonText="TOSSYの詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+FT6FVE+1WP2+1HL85U"
        icon="📱"
      />
    </>
  ),
  "bitflyer-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">bitFlyer の実力</h2>
        <p>
          bitFlyerは国内大手の仮想通貨取引所の一つです。2014年創業の老舗で、ビットコインを少額から購入できるため、初めて暗号資産を触る人にも候補になります。一方で、暗号資産は価格変動が大きく、余裕資金で扱う前提が欠かせません。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">bitFlyerの強み</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>国内大手として知名度が高く、初心者向けの情報も見つけやすい</li>
          <li>ビットコインは1円から買える（最小発注単位が業界最小）</li>
          <li>bitFlyerクレカで決済するだけでビットコインが貯まる</li>
          <li>取扱銘柄 34種類（国内最多クラス）</li>
          <li>Tポイントをビットコインに交換可能</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">手数料と注意点</h2>
        <p className="text-sm">
          販売所のスプレッドは他社と同程度。取引所形式ならスプレッドはほぼゼロ、別途取引手数料0.01〜0.15%が発生。初心者は販売所、慣れたら取引所を使い分けるのが基本戦略です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">暗号資産口座を使う前の確認リスト</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>生活費や税金の支払いに使う予定のお金を入金しない</li>
          <li>販売所と取引所の違い、スプレッド、入出金手数料を確認する</li>
          <li>二段階認証、出金先アドレス管理、フィッシング対策を設定する</li>
          <li>短期の値上がり期待だけでなく、最大損失を事前に決める</li>
        </ul>
        <p className="text-sm text-muted mt-3">
          暗号資産は株式や投資信託より値動きが急になりやすい資産です。初心者は資産全体の一部に抑え、取引履歴や税務上の扱いも記録しておくと管理しやすくなります。
        </p>
      </section>
      <AffiliateCTA
        title="bitFlyerで仮想通貨投資を始める"
        description="国内大手の暗号資産取引所。少額から始められ、口座開設・維持費は無料。"
        buttonText="bitFlyerの詳細を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
        highlight="取引量No.1"
      />
    </>
  ),
  "coincheck-review": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">コインチェック：初心者に圧倒的人気</h2>
        <p>
          コインチェックはアプリDL数6年連続No.1の仮想通貨取引所。マネックスグループ傘下で経営の安定性も高く、取扱銘柄も国内トップクラス。初心者向けの使いやすさが最大の強みです。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">コインチェックの特徴</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>取扱通貨 29種類（国内トップクラス）</li>
          <li>取引所での取扱通貨も豊富（BTC, ETH, XRP等）</li>
          <li>500円から購入可能</li>
          <li>NFTマーケットプレイス「Coincheck NFT」を運営</li>
          <li>電気・ガス料金支払いでビットコインが貯まる</li>
          <li>IEO（新規暗号資産公開）を国内で独占開催</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">こんな人におすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>初めて仮想通貨を買う人</li>
          <li>アプリの使いやすさ重視の人</li>
          <li>NFTにも興味がある人</li>
          <li>取扱通貨の種類を重視する人</li>
        </ul>
      </section>
      <AffiliateCTA
        title="コインチェックでビットコインを始めてみる"
        description="アプリDL数No.1の使いやすさ。500円から始められます。口座開設・維持費無料。"
        buttonText="コインチェックの詳細を見る"
        href="/guide/crypto-exchange-comparison"
        external={false}
        icon="₿"
        highlight="初心者人気No.1"
      />
    </>
  ),
  "investing-30s-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">30代からの投資戦略：時間を味方につける</h2>
        <p>
          30代は「時間」という最大の武器を持つ投資適齢期。長期・積立・分散の王道戦略を愚直に続けることで、65歳時点で4,000万円超の資産形成が現実的に可能です。具体的なプランを見ていきましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月3万円×35年×利回り5%のシミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li>元本合計: 月3万円 × 12ヶ月 × 35年 = <strong>1,260万円</strong></li>
            <li>運用後資産: 年利5%で複利運用 = <strong>約3,400万円</strong></li>
            <li>運用益: 約<strong>2,140万円</strong>（新NISAなら全額非課税）</li>
            <li>月5万円に増額した場合: <strong>約5,700万円</strong></li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">30代におすすめのポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA（つみたて投資枠）: eMAXIS Slim 全世界株式 or S&P500を毎月10万円積立</li>
          <li>新NISA（成長投資枠）: 米国ETF（VTI, VOO）・高配当ETF（VYM, HDV）</li>
          <li>iDeCo: 月2.3万円（企業年金なし会社員）を全世界株式で運用</li>
          <li>現金: 生活費6ヶ月分を普通預金で確保（それ以上は投資へ）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="新NISAで30代の資産形成を始めよう"
        description="SBI証券・楽天証券なら無料で口座開設可能。クレカ積立でポイントも貯まります。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📈"
      />
      <AffiliateCTA
        title="投資の基礎を体系的に｜ファイナンシャルアカデミー【無料体験】"
        description="日本最大級の投資スクール。株式・不動産・投資信託・FXの基礎を体系的に学べる無料体験セミナーを随時開催。自己流で損を出す前に投資の原則を押さえたい30代におすすめ。"
        buttonText="無料体験セミナーを予約"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="無料体験"
      />
      <AffiliateCTA
        title="米国株投資ならDMM株｜取引手数料0円"
        description="DMM株は新NISA対応、米国株の為替手数料0円・取引手数料0円で業界最安水準。30代の成長投資枠でVOO・VTIを買うならコスト最強。"
        buttonText="DMM株に無料口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="📊"
        highlight="取引手数料0円"
      />
    </>
  ),
  "investing-40s-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">40代からでも遅くない投資戦略</h2>
        <p>
          40代からの投資は「時間が短い」ことが最大の課題ですが、貯蓄余力があるため<strong>積立額を増やす</strong>ことで十分にリカバリー可能。また、教育費のピーク（50代）までに資産を作り、その後老後資金に切り替える2段階戦略が有効です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">40代におすすめのポートフォリオ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>新NISA（つみたて投資枠）: 月10万円で全世界株式インデックスに積立</li>
          <li>新NISA（成長投資枠）: 米国ETF+日本高配当株で利回りを重視</li>
          <li>iDeCo: 拠出上限いっぱい（企業年金なしなら月2.3万円）</li>
          <li>生命保険の見直し: 不要な保障を削減して投資資金を捻出</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月10万円×20年×5%のシミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li>元本合計: <strong>2,400万円</strong></li>
            <li>運用後資産: <strong>約4,100万円</strong></li>
            <li>運用益: <strong>約1,700万円</strong>（NISAなら非課税）</li>
            <li>60代からも継続すれば老後不安を大幅軽減可能</li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="40代から効率的に資産形成を"
        description="時間を取り戻すには「積立額の増額」と「非課税制度の最大活用」。おすすめネット証券を比較。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📈"
      />
      <AffiliateCTA
        title="40代でも学べる｜ファイナンシャルアカデミー【無料体験】"
        description="40代で投資デビューするなら、自己流より体系的な学びが近道。不動産投資・株式投資・投資信託の基礎を無料体験セミナーで学べる老舗スクール。"
        buttonText="無料体験セミナーを予約"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="無料体験"
      />
    </>
  ),
  "real-estate-crowdfunding": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">不動産クラウドファンディングとは</h2>
        <p>
          不動産クラウドファンディングは、<strong>1万円から不動産投資ができるサービス</strong>。運営会社が特定の不動産を仕入れ、複数の投資家が小口で出資することで、家賃収入や売却益を分配金として受け取ります。現物不動産より流動性・手軽さで勝り、株式より安定したミドルリスク・ミドルリターンの商品です。
        </p>
      </section>
      <ComparisonTableCTA
        title="主要な不動産クラウドファンディング"
        services={[
          {
            name: "COZUCHI（コヅチ）",
            rank: 1,
            highlight: "想定利回り最大10%超｜中途解約可能",
            features: [
              "年利4-10%の高利回り案件が豊富",
              "中途解約が可能（業界では珍しい）",
              "案件ごとの情報開示が詳細",
              "優先劣後出資方式でリスク軽減",
            ],
            href: "https://cozuchi.com/",
            badge: "高利回りNo.1",
          },
          {
            name: "CREAL（クリアル）",
            rank: 2,
            highlight: "上場企業運営｜信頼性の高いプラットフォーム",
            features: [
              "東証グロース上場のクリアル株式会社が運営",
              "1万円から投資可能",
              "年利3-6%の安定案件が中心",
              "保育園・学校等の社会性の高い案件も",
            ],
            href: "https://creal.jp/",
            badge: "信頼性No.1",
          },
          {
            name: "Funds（ファンズ）",
            rank: 3,
            highlight: "上場企業グループファンド中心｜安定運用",
            features: [
              "上場企業関連のファンドが中心",
              "年利1-3%の低リスク案件",
              "1円単位で投資可能",
              "税引き後利回りが表示されわかりやすい",
            ],
            href: "https://funds.jp/",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">リスクと注意点</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>元本保証はない（運用失敗時は元本毀損の可能性）</li>
          <li>原則として運用期間中の解約不可（一部サービスは可）</li>
          <li>人気案件は抽選・先着で当選困難</li>
          <li>利益は雑所得扱いで総合課税</li>
        </ul>
      </section>
    </>
  ),
  "insurance-life-comparison": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生命保険は「掛け捨て」＋「貯蓄は投資」が正解</h2>
        <p>
          生命保険は「必要な保障を最小限の保険料で確保する」のが鉄則。貯蓄型保険は保険としては割高、投資としてはリターンが低いため、掛け捨てと投資を分離するのが賢い選択です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ライフステージ別の必要保障額</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>独身（扶養家族なし）</strong>: 葬儀代200万円程度の死亡保障で十分</li>
          <li><strong>結婚・子なし共働き</strong>: 互いに葬儀代＋αの死亡保障</li>
          <li><strong>子育て世帯</strong>: 末子大学卒業までの生活費・教育費（3,000-5,000万円）</li>
          <li><strong>子独立後</strong>: 葬儀代＋配偶者の生活費数年分</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめの保険タイプ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>収入保障保険: 死亡時に月額で受け取れる掛け捨て。子育て世帯に最適</li>
          <li>定期保険: 一定期間の死亡保障。更新型・全期型を選択</li>
          <li>就業不能保険: 長期の働けない期間をカバー。社会保険との兼ね合いを確認</li>
          <li>医療保険: 公的保険で大半カバーされるため、必要性は低め</li>
        </ul>
      </section>
      <AffiliateCTA
        title="保険見直しで家計改善"
        description="不要な保険を整理して投資資金に回すと、資産形成スピードが加速します。無料相談で見直しを。"
        buttonText="家計改善ガイドを見る"
        href="/guide/household-budget-apps"
        external={false}
        icon="🛡️"
      />
    </>
  ),
  "kids-education-fund": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">教育資金の準備方法：学資保険 vs 新NISA</h2>
        <p>
          子ども1人の教育費は幼稚園〜大学まで約1,000-2,500万円。効率よく貯めるなら、低リターンの学資保険よりも<strong>新NISAつみたて投資枠での長期運用</strong>が現実的です。必要時期が決まっている資金は、時期が近づいたら現金化していく戦略が基本。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">学資保険のメリット・デメリット</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>メリット:</strong> 返戻率105-110%程度の確実性、契約者死亡時の払込免除特約</p>
          <p className="text-sm mt-2"><strong>デメリット:</strong> インフレに弱い、中途解約で元本割れ、利回りが低い（年0.5%前後）</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAでの教育資金準備</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>0歳から月3万円を18年積立、年利5%</strong></p>
          <ul className="text-sm mt-2 space-y-1">
            <li>元本: 648万円</li>
            <li>運用後資産: 約1,070万円</li>
            <li>運用益: 約420万円（NISAなら非課税）</li>
          </ul>
          <p className="text-xs text-muted mt-2">※相場下落リスクあり。大学進学の3-5年前から徐々に現金化を推奨。</p>
        </div>
      </section>
      <AffiliateCTA
        title="新NISAで教育資金準備を始める"
        description="SBI証券・楽天証券ならクレカ積立でポイントも貯まりお得。長期積立の第一歩に。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="🎓"
      />
    </>
  ),
  "crowdworks-vs-lancers": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">国内2大クラウドソーシングを徹底比較</h2>
        <p>
          副業で在宅ワークを始めるなら、<strong>クラウドワークスとランサーズ</strong>の2強が鉄板。両方登録して案件を見比べるのが鉄則ですが、それぞれに強みがあるので用途に合わせて使い分けが重要です。
        </p>
      </section>
      <ComparisonTableCTA
        title="クラウドワークス vs ランサーズ"
        services={[
          {
            name: "クラウドワークス",
            rank: 1,
            highlight: "会員数500万超｜案件数国内最大",
            features: [
              "案件カテゴリー 200種類以上",
              "初心者向けの簡単タスクが豊富",
              "サイト設計が使いやすい",
              "システム手数料5-20%（報酬額による）",
            ],
            href: "https://crowdworks.jp/",
            badge: "初心者向けNo.1",
          },
          {
            name: "ランサーズ",
            rank: 2,
            highlight: "プロ向け案件が豊富｜認定制度で高単価獲得",
            features: [
              "エンジニア・デザイナー向け案件が多い",
              "認定ランサー制度で信頼性アピール可能",
              "直接契約（Lancers Pro）もあり",
              "システム手数料5-20%（報酬額による）",
            ],
            href: "https://www.lancers.jp/",
            badge: "プロ向け",
          },
        ]}
      />
      <section>
        <h2 className="text-xl font-bold mb-3">稼ぎ方のコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>プロフィールを充実させて信頼性を演出</li>
          <li>最初は低単価でも実績を積む（評価★5を貯める）</li>
          <li>継続案件をゲットして時給換算を上げる</li>
          <li>得意分野を絞って専門家としてブランディング</li>
        </ul>
      </section>
      <AffiliateCTA
        title="会社員の副業ランキングもチェック"
        description="クラウドソーシング以外にも、月5万円以上狙える副業を一覧比較しています。"
        buttonText="副業ランキングを見る"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💼"
      />
    </>
  ),
  "blog-side-business": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ブログ副業で月5万円を稼ぐロードマップ</h2>
        <p>
          ブログ副業の魅力は、一度仕組みを作れば<strong>ストック収入として継続的に稼げる</strong>こと。月5万円を目指すなら、WordPress+独自ドメインで専門性の高いジャンルを選び、SEO対策とアフィリエイトを組み合わせるのが王道。10ヶ月〜1年で目標到達が現実的です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">セットアップ手順（所要時間2時間）</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>独自ドメインを取得（ムームードメイン・お名前.com、年1,500円程度）</li>
          <li>レンタルサーバーを契約（エックスサーバー・ConoHa WINGが定番、月1,000円程度）</li>
          <li>WordPressをインストール（サーバー管理画面から1クリック）</li>
          <li>テーマを選定（Cocoon無料・SWELL有料の使い勝手が良い）</li>
          <li>ASP登録（A8.net、もしもアフィリエイト、バリューコマース）</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">稼げるジャンル・キーワード選定</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>金融系</strong>: クレカ・FX・仮想通貨・証券口座（1件10,000円超）</li>
          <li><strong>転職・スキルアップ</strong>: 転職エージェント・プログラミングスクール（1件10,000-30,000円）</li>
          <li><strong>美容・健康</strong>: 脱毛・サプリ・化粧品（1件3,000-10,000円）</li>
          <li><strong>通信・WiFi</strong>: 光回線・モバイルWiFi（1件10,000円超）</li>
          <li><strong>サブスク系</strong>: VOD・電子書籍・食材宅配（1件1,000-3,000円）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">収益化までの期間目安</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>3ヶ月: 記事数30-50本、月数百円〜数千円</li>
          <li>6ヶ月: 記事数80-100本、月1-3万円</li>
          <li>10-12ヶ月: 記事数150本、SEO上位獲得、月5-10万円</li>
          <li>1.5年以降: 月20万円〜の人も登場</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ブログ副業を本格的に始めよう"
        description="WordPress・サーバー契約、ASP登録までの流れを詳しく解説。副業ランキングも参考に。"
        buttonText="副業ランキングを見る"
        href="/guide/side-business-ranking-2026"
        external={false}
        icon="💻"
      />
    </>
  ),
  "stock-beginner-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">株式投資の基礎知識</h2>
        <p>
          株式投資は、企業の株主になることで<strong>値上がり益（キャピタルゲイン）・配当（インカムゲイン）・株主優待</strong>の3つのリターンを得られる投資方法。新NISAの成長投資枠を使えば年240万円まで非課税で運用できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者が失敗しない7つのルール</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>信用取引（借金取引）は絶対にしない</strong> - 現物取引のみで始める</li>
          <li><strong>1銘柄に集中投資しない</strong> - 最低5-10銘柄に分散</li>
          <li><strong>資金の全額を投資しない</strong> - 余裕資金のみ</li>
          <li><strong>チャートで売買しない</strong> - 業績・財務の良い企業を選ぶ</li>
          <li><strong>SNSの投資情報を鵜呑みにしない</strong> - 自分の頭で判断</li>
          <li><strong>長期保有を基本</strong> - 短期売買は税金・手数料で不利</li>
          <li><strong>損切りルールを事前に決める</strong> - 感情で売買しない</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者向け銘柄選びのコツ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>自分が知っている企業・使っているサービスの会社を選ぶ</li>
          <li>配当利回り3%以上の安定企業から始める</li>
          <li>時価総額1,000億円以上の大型株を中心に（倒産リスク低）</li>
          <li>10年以上連続増配している企業は信頼できる</li>
          <li>PER15倍以下、PBR1倍前後の割安株を狙う</li>
        </ul>
      </section>
      <AffiliateCTA
        title="手数料0円のネット証券で株式投資を始める"
        description="SBI証券・楽天証券・マネックス証券なら国内株式の売買手数料が0円。新NISA対応で非課税運用も。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "etf-vs-mutual-fund": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ETFと投資信託、何が違う？</h2>
        <p>
          ETFは「上場投資信託」の略で、<strong>株式と同じように証券取引所で売買できる投資信託</strong>。一方、一般的な投資信託は1日1回の基準価額で取引します。両者にはコスト・使い勝手・流動性に明確な違いがあります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ETFと投資信託の比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>売買単位</strong>: ETFは1口から（価格は数千円〜）／投信は100円から</li>
            <li><strong>信託報酬</strong>: ETFは低い（年0.03-0.5%）／投信も低コスト化進行（0.1%-1.5%）</li>
            <li><strong>売買タイミング</strong>: ETFはリアルタイム／投信は1日1回</li>
            <li><strong>分配金</strong>: ETFは自動再投資不可／投信は自動再投資可</li>
            <li><strong>ポイント還元</strong>: ETFはクレカ積立対象外（一部例外）／投信はクレカ積立可</li>
            <li><strong>為替手数料</strong>: 米国ETFは発生／国内投信は不要</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">どちらを選ぶべきか</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>少額からコツコツ積立</strong>→ 投資信託（新NISAつみたて投資枠で）</li>
          <li><strong>配当を定期的に受け取りたい</strong>→ 高配当ETF（VYM・HDV等）</li>
          <li><strong>コストを極限まで抑えたい</strong>→ 米国ETF（VTI・VOO・VT）</li>
          <li><strong>迷ったら</strong>→ 新NISA成長枠で米国ETF、つみたて枠で全世界投信</li>
        </ul>
      </section>
      <AffiliateCTA
        title="ETF・投信どちらも買える万能証券は？"
        description="SBI証券・楽天証券なら国内投信・米国ETFどちらも充実ラインナップ。新NISA対応。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "investment-complete-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">投資の全体像を理解しよう</h2>
        <p>
          「投資」と一口に言っても、新NISA・iDeCo・株式・投資信託・ETF・FX・仮想通貨・不動産・金・債券など様々な種類があります。それぞれにリスク・リターン・流動性・税制が異なり、自分の目的・期間・リスク許容度に合わせて選択する必要があります。この記事では、投資初心者が<strong>最初に知っておくべき知識をすべて網羅</strong>します。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">投資の3大原則</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>長期</strong>: 10年以上の保有で複利効果を最大化、短期の値動きリスクを吸収</li>
          <li><strong>積立</strong>: 毎月同額を買い続けることで、購入価格を平準化（ドルコスト平均法）</li>
          <li><strong>分散</strong>: 複数の資産・地域・通貨に分散することでリスクを軽減</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">資産クラスごとの特徴</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>株式（個別株）</strong>: 高リスク・高リターン。長期平均リターン年6-8%</li>
            <li><strong>投資信託・ETF</strong>: 分散投資を手軽に実現。インデックス投信なら平均年5-7%</li>
            <li><strong>債券</strong>: 低リスク・低リターン。年1-3%程度。株式下落時の分散効果</li>
            <li><strong>不動産（REIT）</strong>: 中リスク・中リターン。年4-6%の分配金</li>
            <li><strong>FX</strong>: 高リスク・レバレッジ活用。短期トレード向き</li>
            <li><strong>仮想通貨</strong>: 超高リスク・超高リターン。余剰資金の5%以内推奨</li>
            <li><strong>金（ゴールド）</strong>: インフレヘッジ・安全資産。資産の5-10%目安</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">ステップ別の始め方</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>生活防衛資金として月収の6ヶ月分を普通預金で確保</li>
          <li>ネット証券の口座を開設（SBI証券・楽天証券・マネックス証券のいずれか）</li>
          <li>新NISAつみたて投資枠で「eMAXIS Slim 全世界株式」または「eMAXIS Slim 米国株式（S&P500）」を月1-10万円積立</li>
          <li>iDeCoで掛金全額所得控除の節税効果を享受（月5千円〜2.3万円）</li>
          <li>余裕があれば新NISA成長投資枠で高配当ETF・個別株に挑戦</li>
        </ol>
      </section>
      <AffiliateCTA
        title="まずはSBI証券で新NISAをスタート"
        description="投資信託2,500本以上、三井住友カードNLでクレカ積立1%還元。口座開設無料・スマホで5分。"
        buttonText="新NISA証券会社TOP5を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
        highlight="初心者向けNo.1"
      />
      <AffiliateCTA
        title="【ファイナンシャルアカデミー】で投資を本格的に学ぶ"
        description="株式投資・FX・NISA等を体系的に学べる投資スクール。初心者向け無料体験セミナーあり。"
        buttonText="無料体験セミナーに申し込む"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5"
        icon="🎓"
        highlight="投資スクール老舗"
      />
    </>
  ),
  "money-basics-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">お金の三大要素：貯める・増やす・守る</h2>
        <p>
          お金の基礎は「貯金（貯める）」「投資（増やす）」「保険（守る）」の3つ。それぞれに役割があり、<strong>バランスよく組合せる</strong>ことが資産形成の王道です。年代・家族構成・収入によって最適配分が変わります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年代別の最適配分</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>20代</strong>: 貯金20% / 投資75% / 保険5%（時間を最大活用、保険最小限）</p>
          <p className="text-sm mt-1"><strong>30代</strong>: 貯金25% / 投資65% / 保険10%（家族形成期、収入保障保険追加）</p>
          <p className="text-sm mt-1"><strong>40代</strong>: 貯金30% / 投資55% / 保険15%（教育費ピーク、投資を継続）</p>
          <p className="text-sm mt-1"><strong>50代</strong>: 貯金35% / 投資55% / 保険10%（老後資金確保フェーズ）</p>
          <p className="text-sm mt-1"><strong>60代以降</strong>: 貯金50% / 投資45% / 保険5%（取崩し期、リスク低減）</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">貯蓄率の目標</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>独身・実家暮らし: 手取りの30-40%</li>
          <li>独身・一人暮らし: 手取りの20-30%</li>
          <li>共働き・子なし: 手取りの25-35%</li>
          <li>子育て世帯: 手取りの10-20%（最低ラインでも継続することが大事）</li>
        </ul>
      </section>
      <AffiliateCTA
        title="家計管理アプリで貯蓄率をアップ"
        description="マネーフォワードME・Zaim等の家計簿アプリで、自動的に支出を見える化。年間数万円の節約に。"
        buttonText="家計簿アプリ比較を見る"
        href="/guide/household-budget-apps"
        external={false}
        icon="📝"
      />
    </>
  ),
  "retirement-planning-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">老後資金2,000万円問題の真実</h2>
        <p>
          2019年に話題となった「老後2,000万円問題」。実は<strong>金融庁の報告書で示された「ゆとりある老後」</strong>のケースで、一般的な生活水準ならもう少し少額で済むことも。ただし平均寿命延長・インフレを考慮すると、<strong>実際には3,000-5,000万円</strong>の準備が理想とされています。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">老後の収支シミュレーション（夫婦）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>月収入</strong>（夫婦の年金）: 平均22万円（厚生年金含む）</p>
          <p className="text-sm mt-1"><strong>月支出</strong>: 平均27-35万円（医療・介護・生活費）</p>
          <p className="text-sm mt-1"><strong>月不足額</strong>: 約5-13万円</p>
          <p className="text-sm mt-1"><strong>20年（65-85歳）の不足合計</strong>: 1,200-3,100万円</p>
          <p className="text-sm mt-1 text-muted">※退職金・自宅資産・配偶者の働き方で大きく変動</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">現役時代にやるべき3つのこと</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>新NISAを最大限活用</strong>: つみたて投資枠で月10万円×20-30年積立</li>
          <li><strong>iDeCoで節税＋老後資金</strong>: 会社員なら月2.3万円、自営業なら月6.8万円まで</li>
          <li><strong>収入を増やす副業</strong>: 月5万円の副業で投資余力を確保</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">取崩しフェーズの戦略（4%ルール）</h2>
        <p className="text-sm">
          FIRE達成者の間で有名な「4%ルール」: 年間支出の25倍の資産があれば、毎年4%ずつ取崩しても資産は減らないという研究結果。例えば年間支出400万円の場合、<strong>1億円の資産</strong>があれば理論上は永久に生活可能。実際には3%程度の安全マージンを確保するのが推奨です。
        </p>
      </section>
      <AffiliateCTA
        title="老後資金シミュレーターで試算"
        description="現在の年齢・貯蓄・予定年金から、今月いくら積立が必要かを計算。"
        buttonText="老後資金シミュレーターを使う"
        href="/tools/retirement-fund"
        external={false}
        icon="👴"
      />
    </>
  ),
  "nisa-growth-vs-tsumitate": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">新NISAの2つの枠、何が違う？</h2>
        <p>
          新NISAは「<strong>つみたて投資枠</strong>（年120万円）」と「<strong>成長投資枠</strong>（年240万円）」の2つがあり、合計で年間360万円まで非課税で投資可能。生涯投資枠は1,800万円（うち成長枠は1,200万円まで）です。両枠は併用可能で、使い分けがポイント。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">枠ごとの特徴比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>つみたて投資枠</strong>: 金融庁認可の長期投資向け投信約280本が対象。低コスト・分散投資・長期積立に特化。</p>
          <p className="text-sm mt-2"><strong>成長投資枠</strong>: 個別株・ETF・大半の投資信託が対象。自由度が高く、高配当ETF・グロース株・海外株式も購入可能。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">年収別のおすすめ配分</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>年収300-500万円</strong>: つみたて枠のみ（月5-10万円）で全世界株式に集中</li>
          <li><strong>年収500-800万円</strong>: つみたて枠10万円＋成長枠10万円で米国ETF追加</li>
          <li><strong>年収800万円以上</strong>: 両枠フル活用（月30万円）で早期の1,800万円到達を狙う</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">失敗しない使い分けルール</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>つみたて枠は必ず先に埋める（低コスト投信で王道運用）</li>
          <li>成長枠は余剰資金で、個別株やテーマ型に挑戦</li>
          <li>成長枠でも基本は「eMAXIS Slim S&P500」等の優良投信を積み立てるのが無難</li>
          <li>毎月の積立額が決まっていれば、つみたて・成長の区別はあまり気にしなくてOK</li>
        </ol>
      </section>
      <AffiliateCTA
        title="新NISA両枠が使える証券会社は？"
        description="SBI証券・楽天証券・マネックス証券なら両枠の投資信託・個別株・ETFがすべて揃います。"
        buttonText="新NISA証券会社比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💰"
      />
    </>
  ),
  "year-end-tax-saving": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">12月までにやるべき節税アクション</h2>
        <p>
          年末調整・確定申告の準備は、<strong>12月31日で区切り</strong>があります。それまでに実行しておけば、翌年の税金が大きく変わる施策をまとめました。1つでも取り組めば数万円〜数十万円の節税効果があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">6つの年末節税アクション</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>ふるさと納税（限度額まで寄付）</strong>: 年収500万円なら約6万円、返礼品30%で実質-2,000円で18,000円相当の特産品</li>
          <li><strong>iDeCo掛金を拠出上限まで増額</strong>: 残り月で追加拠出して所得控除を最大化</li>
          <li><strong>新NISA枠を使い切る</strong>: つみたて枠120万円・成長枠240万円の残額を12月までに投資</li>
          <li><strong>損益通算（損出し）</strong>: 含み損銘柄を年内に売却→翌日買戻で利益と相殺</li>
          <li><strong>医療費控除の準備</strong>: 年間10万円超の医療費レシートを集計、家族合算で申告準備</li>
          <li><strong>生命保険料控除の確認</strong>: 年末調整で4万円×3種＝最大12万円の所得控除</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">節税効果の目安（年収500万円の場合）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-1">
            <li>ふるさと納税: 実質負担-2,000円で寄付額相当の返礼品</li>
            <li>iDeCo満額（年27.6万円）: 所得税+住民税で年5.5万円節税</li>
            <li>医療費控除（年20万円）: 約2万円還付</li>
            <li>生命保険料控除: 年1.2-2.4万円節税</li>
            <li><strong>合計で年8-12万円の節税可能</strong></li>
          </ul>
        </div>
      </section>
      <AffiliateCTA
        title="ふるさと納税で年末節税を完結"
        description="楽天ふるさと納税なら最大15%ポイント還元。12月31日までの駆け込み需要に間に合います。"
        buttonText="ふるさと納税ガイドを見る"
        href="/guide/furusato-tax-guide-2026"
        external={false}
        icon="🎁"
      />
    </>
  ),
  "credit-card-stacking": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ積立3社併用で月30万円対応</h2>
        <p>
          新NISAの積立可能額は月10万円（年120万円）まで。しかし複数のネット証券で<strong>それぞれ月10万円のクレカ積立</strong>を行えば、非課税枠を超えた分は特定口座になるものの、<strong>クレカ積立ポイントを最大化</strong>できます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3社併用の具体例</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>SBI証券（新NISA）</strong>: 月10万円 × 三井住友ゴールドNL 1%還元 = 月1,000P</p>
          <p className="text-sm mt-1"><strong>楽天証券（特定口座）</strong>: 月10万円 × 楽天カード 1%還元 = 月1,000P</p>
          <p className="text-sm mt-1"><strong>マネックス証券（特定口座）</strong>: 月10万円 × マネックスカード 1.1%還元 = 月1,100P</p>
          <p className="text-sm mt-2"><strong>合計月3,100ポイント（年37,200ポイント）</strong></p>
          <p className="text-xs text-muted mt-2">※新NISAはSBIのみ、残り2社は特定口座となる点に注意</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3社併用のメリット・デメリット</h2>
        <p className="text-sm"><strong>メリット</strong>: ポイント還元の最大化、複数経済圏の恩恵</p>
        <p className="text-sm"><strong>デメリット</strong>: 管理が煩雑、特定口座分の利益に20.315%課税、資金拘束増</p>
        <p className="text-sm mt-2">一般的には<strong>「SBI×三井住友ゴールドNL」1社集中</strong>が最も効率的。3社併用は年収・投資余力が大きい人向けの上級テクニック。</p>
      </section>
      <AffiliateCTA
        title="まずは1社集中で始めてみる"
        description="SBI証券×三井住友カードNL / ゴールドNLなら年100万円利用で年会費無料。初心者に最もおすすめの組合せ。"
        buttonText="新NISA証券会社TOP5を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💳"
      />
    </>
  ),
  "sbi-securities-for-beginners": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">SBI証券で新NISAを始める手順（所要時間10分）</h2>
        <p>
          SBI証券の新NISA口座開設は<strong>スマホで最短10分</strong>で完了します。本人確認書類（マイナンバーカード or 運転免許証+通知カード）を準備して始めましょう。開設費用・維持費は完全無料です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">口座開設の5ステップ</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>SBI証券の公式サイトにアクセス→「口座開設」ボタンをタップ</li>
          <li>メールアドレスを登録→認証コードを入力</li>
          <li>個人情報入力（氏名・住所・電話番号・勤務先等）</li>
          <li>「NISA口座も同時に開設」にチェック（忘れずに！）</li>
          <li>本人確認書類をスマホで撮影→アップロード</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">クレカ積立の設定（ポイント還元最大化）</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>三井住友カードNL（年会費無料）またはゴールドNL（年100万円利用で年会費無料）を同時申込</li>
          <li>マイページ→「投信積立」→「クレジットカード積立」を選択</li>
          <li>積立金額（月1万円〜10万円）を設定</li>
          <li>銘柄選択: 初心者は「eMAXIS Slim 全世界株式（オールカントリー）」または「S&P500」推奨</li>
          <li>毎月の積立日を選択して設定完了</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">審査完了までの期間</h2>
        <p className="text-sm">
          申込後、通常<strong>翌営業日〜1週間</strong>で審査完了の通知メールが届きます。NISA口座は税務署確認があるため、取引開始まで2-3週間かかる場合も。ただし「NISA口座仮開設」で先行して取引開始できる場合もあります。
        </p>
      </section>
      <AffiliateCTA
        title="SBI証券の公式サイトで口座開設を始める"
        description="業界No.1のSBI証券で新NISAをスタート。三井住友カードNLと組み合わせてポイント還元を受けましょう。"
        buttonText="SBI証券比較ガイドを見る"
        href="/guide/sbi-securities-review"
        external={false}
        icon="📊"
      />
    </>
  ),
  "rakuten-securities-for-beginners": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天証券で新NISAを始める手順</h2>
        <p>
          楽天経済圏のユーザーなら、楽天証券×楽天カードの組合せが最強。口座開設は<strong>最短10分</strong>で申込完了、翌営業日から取引開始可能です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">口座開設の手順</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>楽天証券公式サイト→「口座開設」をタップ</li>
          <li>楽天会員なら楽天IDで連携ログイン（情報が自動入力）</li>
          <li>NISA口座を同時申込にチェック</li>
          <li>楽天銀行の口座開設も同時に（マネーブリッジで金利0.1%アップ）</li>
          <li>本人確認書類アップロード→完了</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天カード積立の設定</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>楽天カードを先に保有していること（未保有なら同時申込可）</li>
          <li>マイページ→「積立設定」→「楽天カードクレジット決済」選択</li>
          <li>月1,000円〜10万円の範囲で積立額設定（1%ポイント還元）</li>
          <li>楽天キャッシュ積立も併用可能（さらに0.5%還元）</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">楽天経済圏での連携設定</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>マネーブリッジ: 楽天銀行×楽天証券の連携で普通預金金利0.1%</li>
          <li>ハッピープログラム: 楽天銀行の手数料優遇・ATM無料回数増加</li>
          <li>SPU対象: 楽天市場のお買い物ポイントが+0.5〜1倍</li>
        </ul>
      </section>
      <AffiliateCTA
        title="楽天経済圏ユーザーなら楽天証券一択"
        description="楽天カード積立1%還元＋楽天銀行連携で総合力No.1。新NISA・iDeCoの取扱商品も豊富。"
        buttonText="楽天証券レビューを見る"
        href="/guide/rakuten-securities-review"
        external={false}
        icon="📊"
      />
    </>
  ),
  "foreign-dividend-stocks": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当株投資の魅力</h2>
        <p>
          米国株は<strong>50年以上連続増配の優良企業</strong>が多く、配当金による安定した不労所得を作るのに最適です。代表的な高配当ETFは利回り3-4%、個別株なら5-10%以上も可能。為替リスクはあるものの、長期的にドル建て資産を保有することで円安時にも安心感があります。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">代表的な米国高配当ETF</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "VYM（バンガード米国高配当株式ETF）", yield: "約3%", feature: "S&P500上位400銘柄から選定、経費率0.06%超低コスト" },
            { name: "HDV（iシェアーズ・コア米国高配当株ETF）", yield: "約3.5%", feature: "財務健全性を重視、75銘柄に絞り込み" },
            { name: "SPYD（SPDR S&P500高配当ETF）", yield: "約4.5%", feature: "S&P500の上位80銘柄均等配分、利回り重視派向け" },
            { name: "QYLD（NASDAQ100カバード・コール）", yield: "約11%", feature: "超高配当、ただし元本成長は期待しづらい" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base">{item.name}</h3>
                <span className="text-sm text-primary font-bold">{item.yield}</span>
              </div>
              <p className="text-sm mt-1 text-muted">{item.feature}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">配当金生活への道筋（月20万円を目指す）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm">月20万円（年240万円）の配当を得るには:</p>
          <ul className="text-sm space-y-1 mt-2">
            <li>利回り3%の場合: <strong>8,000万円の投資元本</strong>必要</li>
            <li>利回り4%の場合: <strong>6,000万円の投資元本</strong>必要</li>
            <li>利回り5%の場合: <strong>4,800万円の投資元本</strong>必要</li>
          </ul>
          <p className="text-xs text-muted mt-3">※税金（米国10%+日本20.315%の二重課税）を考慮するとやや多めに必要</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国株投資におすすめのネット証券</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>マネックス証券</strong>: 取扱銘柄6,000超、為替手数料無料が強み</li>
          <li><strong>SBI証券</strong>: 総合力No.1、米国株定期買付サービスあり</li>
          <li><strong>楽天証券</strong>: 楽天ポイントで米国株買付可能</li>
        </ul>
      </section>
      <AffiliateCTA
        title="米国株取引に強いネット証券を比較"
        description="マネックス・SBI・楽天など、米国株取扱数・手数料・使いやすさを総合比較。"
        buttonText="ネット証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="💵"
      />
    </>
  ),
  "ideco-vs-corporate-pension": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">iDeCo vs 企業型DC、会社員はどっちが有利？</h2>
        <p>
          企業型確定拠出年金（企業型DC）がある会社員の場合、iDeCoと併用できるケースと、どちらか一方しか選べないケースがあります。<strong>マッチング拠出の有無</strong>がまず確認ポイント。企業型DC単独よりも、個人の意思で選べるiDeCoの自由度が魅力です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">それぞれの特徴比較</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>iDeCo（個人型確定拠出年金）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>金融機関・商品を自分で選択可能</li>
            <li>低コストのインデックス投信が選べる</li>
            <li>月2.3万円まで（企業年金なし会社員）</li>
            <li>掛金全額所得控除</li>
          </ul>
          <p className="text-sm mt-3"><strong>企業型DC（企業型確定拠出年金）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>会社が掛金を拠出（給与には含まれない）</li>
            <li>商品ラインナップは会社指定（選択肢限定的）</li>
            <li>マッチング拠出で追加拠出可能（会社による）</li>
            <li>所得控除効果あり（マッチング拠出分）</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">転職時の注意点</h2>
        <p className="text-sm">
          企業型DC加入者が転職する場合、資産を<strong>6ヶ月以内にiDeCoや転職先の企業型DCに移換</strong>する必要があります。放置すると国民年金基金連合会に自動移換され、運用されず手数料だけ引かれ続けるので必ず手続きを。
        </p>
      </section>
      <AffiliateCTA
        title="iDeCo口座開設ならネット証券が有利"
        description="SBI証券・楽天証券・マネックス証券は運営管理手数料0円、取扱商品も豊富で節税効果を最大化。"
        buttonText="iDeCo金融機関比較を見る"
        href="/guide/ideco-broker-comparison"
        external={false}
        icon="🏦"
      />
    </>
  ),
  "taxable-vs-nisa": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">特定口座と新NISA口座の違い</h2>
        <p>
          投資信託や株式を購入する際、<strong>特定口座</strong>（課税される通常口座）と<strong>新NISA口座</strong>（非課税口座）の2種類があります。新NISAの年間投資枠（360万円）を使い切ったら、残りは特定口座で運用するのが基本パターン。税金で大きな差が出るため、優先順位を理解することが重要です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">税金の違い（100万円の利益が出た場合）</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>特定口座</strong>: 利益 × 20.315% = 20.3万円が税金 → 手取り79.7万円</p>
          <p className="text-sm mt-2"><strong>新NISA口座</strong>: 利益 × 0% = <strong>0円</strong>（非課税） → 手取り100万円</p>
          <p className="text-sm mt-2 text-primary font-bold">差額: 20.3万円</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">使い分けの優先順位</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li><strong>新NISAつみたて枠（年120万円）</strong>を最優先で埋める</li>
          <li><strong>新NISA成長枠（年240万円）</strong>で追加投資</li>
          <li>iDeCoで節税しながら追加運用</li>
          <li>さらに余裕があれば特定口座で高配当株・ETF</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">特定口座（源泉徴収あり vs なし）</h2>
        <p className="text-sm">
          特定口座には「源泉徴収あり」「源泉徴収なし」があります。<strong>源泉徴収あり</strong>なら確定申告不要で手間が省けますが、他の口座と損益通算したい場合は確定申告必要。サラリーマンは基本「源泉徴収あり」が便利です。
        </p>
      </section>
      <AffiliateCTA
        title="新NISA対応のネット証券で非課税運用"
        description="新NISAを使わないと年20万円以上の税金を損する可能性も。口座開設・維持費は完全無料。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="📊"
      />
    </>
  ),
  "fx-vs-stock-vs-crypto": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">代表的な投資先3つの比較</h2>
        <p>
          株式・FX・仮想通貨はそれぞれ<strong>リスク・リターン・税制・流動性</strong>が大きく異なります。投資戦略を決める前に、それぞれの特性を理解しましょう。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">項目別比較表</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>期待リターン（年平均）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式（インデックス）: 年5-8%（長期）</li>
            <li>FX: プラスマイナスゼロが基本（ゼロサムゲーム）</li>
            <li>仮想通貨: 年±50%超（極端な変動）</li>
          </ul>
          <p className="text-sm mt-3"><strong>税制（利益への課税）</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式: 一律20.315%（分離課税）</li>
            <li>FX: 一律20.315%（分離課税）</li>
            <li>仮想通貨: 最大55%（総合課税・累進課税）</li>
          </ul>
          <p className="text-sm mt-3"><strong>流動性</strong></p>
          <ul className="text-sm space-y-1 mt-1">
            <li>株式: 平日9-15時のみ（国内）、米国株は深夜</li>
            <li>FX: 平日24時間（土日除く）</li>
            <li>仮想通貨: 24時間365日</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">初心者へのおすすめ配分</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>株式（新NISAインデックス投信）: 資産の<strong>70-80%</strong>（メイン）</li>
          <li>FX: 資産の<strong>5%以下</strong>（スキル次第、少額推奨）</li>
          <li>仮想通貨: 資産の<strong>5-10%以下</strong>（ハイリスク、余剰資金で）</li>
          <li>現金・預金: 生活防衛資金6ヶ月分</li>
        </ul>
      </section>
      <AffiliateCTA
        title="まずは新NISAで株式投資から始めよう"
        description="新NISAインデックス投信なら税金ゼロで年利5-7%の長期リターンを狙えます。初心者の第一歩として最適。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="⚖️"
      />
    </>
  ),
  "emergency-fund-strategy": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">生活防衛資金とは？</h2>
        <p>
          生活防衛資金は、<strong>失業・病気・災害など不測の事態に備える現金</strong>です。投資資産とは別に、すぐに引き出せる形で確保しておく必要があります。これがないと、相場下落時に泣く泣く損切りして生活費に充てることに。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">職業タイプ別の必要月数</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>公務員・大企業正社員</strong>: 月収の3ヶ月分（失業リスク低）</li>
          <li><strong>中小企業正社員</strong>: 月収の6ヶ月分（標準的）</li>
          <li><strong>契約社員・派遣</strong>: 月収の9ヶ月分（雇用不安定）</li>
          <li><strong>フリーランス・自営業</strong>: 月収の12ヶ月分（収入変動あり）</li>
          <li><strong>子育て世帯・住宅ローンあり</strong>: +3ヶ月追加で余裕を</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">保管場所のおすすめ</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>ネット銀行の普通預金</strong>（住信SBI・楽天・auじぶん等）: 金利0.1-0.3%で最適</li>
          <li><strong>定期預金</strong>: 半年〜1年物で若干金利アップ（解約時はペナルティあり）</li>
          <li><strong>MMF・短期国債</strong>: より高利回りだが流動性がやや落ちる</li>
          <li><strong>避けるべき</strong>: 株式・投信（変動リスク）、外貨預金（為替リスク）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">生活防衛資金と投資の優先順位</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>まず生活防衛資金3ヶ月分を普通預金で確保</li>
          <li>NISAつみたて枠で少額（月1-3万円）積立開始</li>
          <li>生活防衛資金を6ヶ月分まで増やす</li>
          <li>その後は積極的にNISA・iDeCoへ投入</li>
        </ol>
      </section>
      <AffiliateCTA
        title="生活防衛資金に最適なネット銀行を比較"
        description="住信SBIネット銀行・楽天銀行・auじぶん銀行など、金利・手数料優遇を比較。"
        buttonText="ネット銀行比較を見る"
        href="/guide/online-bank-comparison"
        external={false}
        icon="🛟"
      />
    </>
  ),
  "junior-nisa-successor": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">ジュニアNISA廃止後の教育資金戦略</h2>
        <p>
          ジュニアNISA制度は2023年末で新規投資終了、2024年以降は<strong>新NISA</strong>が唯一の非課税投資枠となりました。子どもの教育資金準備は、<strong>親名義の新NISA</strong>を活用するのが現実的な選択肢です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">3つの教育資金準備方法</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: "親の新NISAで積立", pro: "非課税・流動性高・インフレに強い", con: "相場下落時は元本割れリスク" },
            { name: "学資保険", pro: "返戻率105-110%で確実、契約者死亡時の払込免除", con: "インフレに弱い、中途解約で元本割れ" },
            { name: "贈与+子ども名義口座", pro: "暦年贈与110万円まで非課税、子の金融教育に", con: "親が管理責任、18歳まで引き出さない工夫必要" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card-bg p-4">
              <h3 className="font-bold text-base">{item.name}</h3>
              <p className="text-sm mt-1"><strong className="text-primary">◎</strong> {item.pro}</p>
              <p className="text-sm"><strong className="text-accent">△</strong> {item.con}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">おすすめは「新NISA＋学資保険」併用</h2>
        <p className="text-sm">
          大学進学（約500-800万円）が必要な時期が確定しているため、<strong>安全資産（学資保険・定期預金）50% + リスク資産（新NISA）50%</strong> の併用戦略が推奨。相場下落時に備えて、進学の3-5年前から徐々にNISA分を現金化していくとベスト。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">0歳から18年積立シミュレーション</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <p className="text-sm"><strong>月3万円 × 18年 × 年利5%</strong></p>
          <ul className="text-sm space-y-1 mt-2">
            <li>元本合計: 648万円</li>
            <li>運用後資産: <strong>約1,070万円</strong></li>
            <li>運用益: 約420万円（新NISAなら非課税）</li>
          </ul>
          <p className="text-xs text-muted mt-2">※大学進学時期に暴落がある可能性も。3年前から徐々に現金化推奨。</p>
        </div>
      </section>
      <AffiliateCTA
        title="子の教育資金は親の新NISAで準備"
        description="新NISAつみたて投資枠で長期積立すれば、ジュニアNISA以上の非課税メリットが得られます。"
        buttonText="新NISA証券比較を見る"
        href="/guide/nisa-broker-ranking-2026"
        external={false}
        icon="👶"
      />
    </>
  ),
  "ipo-investment-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO投資とは？当選すれば初値で数十万円の利益も</h2>
        <p>
          IPO（新規公開株）投資は、上場前の企業の株を公募価格で購入し、上場初日の初値で売却する投資手法。<strong>初値騰落率の平均は約+70%</strong>と高く、1銘柄で数十万〜数百万円の利益を得るケースも珍しくありません。ただし当選しないと始まらないため、複数の証券会社で口座開設するのが基本戦略です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO当選確率を上げる証券会社選び</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>SBI証券</strong>: IPOチャレンジポイント制度、取扱数業界最多クラス</li>
            <li><strong>マネックス証券</strong>: 100%完全平等抽選、小口でも当選のチャンス</li>
            <li><strong>楽天証券</strong>: 取扱銘柄増加中、楽天ポイントで投資可</li>
            <li><strong>松井証券</strong>: 主幹事実績あり、取引手数料も1日50万円まで無料</li>
            <li><strong>auカブコム証券</strong>: 完全平等抽選の比率が高い</li>
            <li><strong>DMM.com証券</strong>: 取扱銘柄増加中、少額でも当選チャンス</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">IPO投資の戦略</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>主要ネット証券5〜10社で口座開設（複数申込で当選確率UP）</li>
          <li>BB（ブックビルディング）参加 - 公募価格が決定する前の需要調査</li>
          <li>抽選当選後、購入申込期間内に「購入する」を選択</li>
          <li>上場日の寄付き（初値）で成行売却が基本戦略</li>
          <li>業績好調銘柄はセカンダリ（上場後）で長期保有も検討</li>
        </ol>
      </section>
      <AffiliateCTA
        title="【DMM 株】でIPOに挑戦する"
        description="DMM.com証券ならIPO取扱も増加中、手数料は業界最安水準。"
        buttonText="DMM 株の詳細"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="🚀"
        highlight="手数料業界最安水準"
      />
    </>
  ),
  "high-dividend-stocks-guide": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">高配当株投資の魅力：不労所得を生むキャッシュフロー</h2>
        <p>
          高配当株投資は、配当利回り3〜5%以上の銘柄を長期保有し、<strong>定期的な配当金収入（不労所得）</strong>を得る投資手法。インデックス投資と違い、売却せずに持ち続けるだけで安定したキャッシュフローが得られるのが最大の魅力です。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">月5万円の配当金を得るために必要な投資額</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-5">
          <ul className="text-sm space-y-2">
            <li><strong>配当利回り3%</strong>: 2,000万円で年60万円（月5万円）</li>
            <li><strong>配当利回り4%</strong>: 1,500万円で年60万円</li>
            <li><strong>配当利回り5%</strong>: 1,200万円で年60万円</li>
          </ul>
          <p className="text-xs text-muted mt-3">※税引前。NISA成長投資枠なら非課税で全額受け取り可。</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">日本の高配当株おすすめ銘柄（参考）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>三菱商事・三井物産・住友商事など総合商社（利回り3〜4%）</li>
          <li>JT（日本たばこ産業）（利回り5%超）</li>
          <li>三菱UFJ FG・三井住友FG・みずほFGなどメガバンク（利回り3〜4%）</li>
          <li>KDDI・ソフトバンク・NTTなど通信大手（利回り3〜4%）</li>
          <li>ENEOS HD・出光興産などエネルギー（利回り4〜5%）</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">米国高配当ETF（分散投資に便利）</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>VYM</strong>: 高配当400銘柄に分散、経費率0.06%</li>
          <li><strong>SPYD</strong>: S&P500高配当上位80銘柄、利回り約4%</li>
          <li><strong>HDV</strong>: 高配当75銘柄、財務健全性重視</li>
        </ul>
      </section>
      <AffiliateCTA
        title="【DMM 株】で高配当米国株を購入"
        description="NISAで米国ETF（VYM・SPYD等）も購入可能。配当は非課税で受け取れます。"
        buttonText="DMM 株でNISA口座開設"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+1YUMJE+1WP2+15QHIA"
        icon="💵"
        highlight="NISAで非課税"
      />
      <AffiliateCTA
        title="【旬の厳選10銘柄】株歴50年超プロによる推奨銘柄"
        description="株式投資のプロが高騰期待銘柄を絞り込み、毎月『旬の厳選10銘柄』シリーズとして提供。個別銘柄選定に自信がない初心者・中級者の銘柄選びをサポート。ユーザーの声「年間利益は平均して300万円くらいです」"
        buttonText="最新号の銘柄を見る"
        href="https://px.a8.net/svt/ejp?a8mat=4B1O1P+4P35CQ+ONS+TS3OI"
        icon="📈"
        highlight="プロの推奨銘柄"
      />
    </>
  ),
};
