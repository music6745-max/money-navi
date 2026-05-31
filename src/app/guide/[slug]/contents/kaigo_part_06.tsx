import type { ReactNode } from "react";
import { KaigoActionBox } from "./helpers";

export const guideContentsPart06: Record<string, ReactNode> = {
  "parent-phone-visitor-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">電話や来客の用件は、後で確認すると細部が抜けやすい</h2>
        <p>
          高齢の親の家に電話や来客があったとき、その場では覚えているつもりでも、後で家族に共有すると「誰からだったか」「何を頼まれたか」「折り返しが必要か」が曖昧になりがちです。
          口頭だけで済ませると、同じ確認を何度もしたり、きょうだい間で認識がずれたりします。
        </p>
        <p>
          ここで作るのは、相手を評価したり対応方針を決めたりする記録ではなく、家族内で事実を見返すための電話・来客メモです。
          日時、相手の呼び名、用件の概要、対応した人、次に確認したいことを同じ形で残します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まず「いつ・誰から・どんな用件か」だけを分ける</h2>
        <p>細かい会話を全文で残すより、次に見る家族が迷わない項目に絞ると続けやすくなります。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>日時: 電話や来客があった日、だいたいの時間帯</li>
          <li>相手: 氏名を細かく書きすぎず、呼び名、関係、会社名や団体名など必要最小限</li>
          <li>用件: 連絡、確認、案内、訪問予定、配達、集金の有無などの概要</li>
          <li>対応した人: 親本人、同居家族、近所の人、別居家族など</li>
          <li>未確認のこと: 折り返し、書類確認、家族内確認、関係先への問い合わせなど</li>
          <li>家族共有メモ: すでに共有した相手、次に見る人への短い申し送り</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">返答、契約、支払い、手続きの判断はメモで決めない</h2>
        <p>
          電話や来客の中には、契約、支払い、行政手続き、介護サービス、医療、法律に関わる話が混ざることがあります。
          それらはこのメモだけで判断せず、本人と家族で確認し、必要に応じて公式窓口や専門家に相談します。
        </p>
        <p>
          メモには「相手が話した内容」「確認したいこと」「保留したこと」を分けて残し、結論や約束を家族の誰かが勝手に確定したように書かないことが大切です。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報は必要最小限にし、家族内で管理する</h2>
        <p>
          氏名、住所、電話番号、契約番号、本人確認情報、ログイン情報、支払い情報などは、書きすぎるほど管理リスクが上がります。
          電話・来客メモは家族内で見る前提にし、外部へ転送したり共有リンクで広げたりしない形で扱います。
        </p>
        <p>
          詳しい連絡先や重要書類の場所は、別の正式な保管場所に分け、メモには「確認先あり」「書類は家族で確認」程度にとどめると安全です。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-phone-visitor-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_phone_visitor_record"
        toolLabel="電話・来客メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383070"
        boothLabel="電話・来客メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、電話や来客の日時、相手、用件、未確認のことを短く整理できます。
          継続して残す段階では、BOOTHのテンプレートへ転記しておくと、家族内で同じ形式の記録として見返しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-hair-salon-barber-visit-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">散髪の予定は、担当が変わると前回の情報が抜けやすい</h2>
        <p>
          高齢の親の美容院・理容院は、予約した人、同行した人、前回の仕上がりを覚えている人が分かれやすい予定です。
          口頭だけで済ませると、次に予約する家族が「いつ行ったか」「どんな希望だったか」「次はいつ頃か」をもう一度確認することになります。
        </p>
        <p>
          ここで作るのは、髪型や施術を決めるための記録ではなく、家族内で予定と来店後メモを見返すための控えです。
          本人の希望、店舗の案内、予約した内容、次に確認することを同じ形式で残します。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まず「予約」「来店」「仕上がり」「次回目安」を分ける</h2>
        <p>詳しい美容記録よりも、次に連絡・同行する家族が迷わない手がかりを優先します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>予約メモ: 予約日、予約した人、店舗名、時間帯、変更時の確認先</li>
          <li>来店記録: 来店日、同行者、移動手段、待ち合わせ場所</li>
          <li>本人の希望: 短め、前回と同じ、避けたいことなど本人が話した範囲</li>
          <li>仕上がりメモ: 家族が見た印象、本人の感想、次回に伝えたいこと</li>
          <li>次回目安: 何週間後くらい、次に予約を確認する日、担当する家族</li>
          <li>家族共有: 誰へ共有済みか、次に確認すること</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">髪型・施術・料金の判断はメモで決めない</h2>
        <p>
          髪型、施術内容、料金、予約変更、店舗との調整は、本人の希望と店舗の案内を確認して進めます。
          このページやメモは、家族内で事実をそろえるためのもので、健康面や施術可否を判断するものではありません。
        </p>
        <p>
          メモには「本人が言っていたこと」「店へ確認すること」「家族内で共有したこと」を分けて残し、結論が必要な内容を家族だけで決め切らない形にします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報と支払い情報は必要最小限にする</h2>
        <p>
          店舗名や予約時間、本人の希望を書く場合も、共有先は家族内に絞ります。
          パスワード、暗証番号、ログイン情報、口座番号、カード番号、マイナンバーなどの秘密情報や支払い情報は記録しないでください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-hair-salon-barber-visit-record-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_hair_salon_barber_visit_record"
        toolLabel="美容院・理容院の予約と来店記録メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383065"
        boothLabel="美容院・理容院 予約と来店記録メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、予約日、来店日、本人の希望、仕上がりメモ、次回目安を短くそろえます。継続して見返す段階では、BOOTHのテンプレートへ転記しておくと、家族で予約や同行を引き継ぎやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
  "parent-photo-album-organization-record": (
    <>
      <section>
        <h2 className="text-xl font-bold mb-3">写真は、誰が写っているかを後から確認しにくくなる</h2>
        <p>
          実家のアルバムや写真箱は、家族にとって大切な手がかりですが、時間がたつほど人物名、場所、時期が分かりにくくなります。
          すべてを一度に整理する必要はなく、分かる写真から短いメモを残しておくことが現実的です。
        </p>
        <p>
          ここで作るのは、処分や公開を決めるための記録ではなく、家族内で写真の背景を見返すためのメモです。
          アルバム名、保管場所、写っている人、親へ聞きたいことを同じ形式にそろえます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">まず「保管場所」「時期」「人」「次に聞くこと」を分ける</h2>
        <p>完璧な整理番号を作るより、次に見た家族が同じ写真を探せる手がかりを優先します。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted">
          <li>保管場所: アルバム名、写真箱、押し入れ、棚など</li>
          <li>時期: 分かる年、年代、季節、行事名など</li>
          <li>写っている人: 確認済みの名前、呼び名、不明な人</li>
          <li>場所: 実家前、旅行先、学校、職場、親族宅など</li>
          <li>データ化状況: 未着手、撮影済み、家族へ共有済みなど</li>
          <li>次に聞きたいこと: 親へ確認したい人物名、場所、出来事</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">公開・処分・権利の判断はメモで決めない</h2>
        <p>
          写真の処分、SNSや外部サービスへの公開、クラウド保存、著作権や肖像に関わる判断は、このメモだけで決めません。
          家族で共有する範囲を確認し、必要な場合は公式案内や専門窓口で確認してください。
        </p>
        <p>
          メモには「未確認のこと」と「次に確認する先」を残す程度にして、判断が必要な内容を結論として書き込まないようにします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">個人情報と秘密情報は書きすぎない</h2>
        <p>
          写真には住所、学校名、職場名、親族名などの個人情報につながる手がかりが含まれることがあります。
          共有先は家族内に絞り、住所や連絡先は必要最小限にします。
          パスワード、暗証番号、ログイン情報、口座番号、カード番号、マイナンバーなどの秘密情報は記録しないでください。
        </p>
      </section>

      <KaigoActionBox
        toolHref="https://net-toolbox.jp/tools/kaigo-parent-photo-album-organization-memo?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent_photo_album_organization"
        toolLabel="写真・アルバム整理メモを作る"
        boothHref="https://kaigo-okane.booth.pm/items/8383061"
        boothLabel="写真・アルバム整理メモテンプレートを見る"
      >
        <p>
          まず無料ツールで、アルバム名、写っている人、時期、場所、データ化状況を短くそろえます。継続して残す段階では、BOOTHのテンプレートへ転記しておくと、写真ごとの確認状況や次に聞きたいことを整理しやすくなります。
        </p>
      </KaigoActionBox>
    </>
  ),
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
