import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { KaigoDiagnosis } from "./KaigoDiagnosis";
import { siteConfig } from "@/lib/tools";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

const pageTitle = "親のこと整理ナビ";
const pageDescription =
  "親の介護、お金、入院、施設選び、きょうだい分担で迷ったときに、状況別のチェックリストと介護テンプレートを選べる無料診断ページです。";

const faqItems = [
  {
    question: "親のこと整理ナビは何をするページですか？",
    answer:
      "親の介護やお金まわりで起きやすい状況を選ぶと、最初にやること、無料note、BOOTHのテンプレート、必要に応じた外部相談先を整理して表示します。",
  },
  {
    question: "個人情報を入力する必要はありますか？",
    answer:
      "ありません。診断は選択式で、氏名、住所、口座情報、病歴などの個人情報は入力しない設計です。",
  },
  {
    question: "医療、税務、相続の判断もできますか？",
    answer:
      "このページは家族内の整理と相談前準備を目的としています。医療、税務、相続、契約の最終判断は専門家や公的窓口に確認してください。",
  },
];

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteConfig.name}`,
  description: pageDescription,
  alternates: { canonical: `${siteConfig.url}/kaigo` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/kaigo`,
    type: "website",
  },
};

export default function KaigoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: pageTitle, url: `${siteConfig.url}/kaigo` },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="mb-5 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>{pageTitle}</span>
      </nav>

      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div>
          <p className="text-xs font-bold text-primary">介護・お金・家族共有のセルフ整理</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{pageTitle}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{pageDescription}</p>
        </div>
        <div className="rounded-lg border border-card-border bg-card-bg p-4">
          <h2 className="text-sm font-bold">先に確認する無料記事</h2>
          <div className="mt-3 space-y-2">
            <TrackedExternalLink
              href="https://note.com/mild_quail6092/n/n44b9de8bf4b7"
              eventName="note_click"
              page="kaigo"
              position="intro"
              itemId="note-compare"
              className="block rounded-md border border-card-border bg-background px-3 py-2 text-sm font-bold hover:border-primary/40"
            >
              単品・セット・総合パックの選び方
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://note.com/mild_quail6092/n/n268e0eca58c4"
              eventName="note_click"
              page="kaigo"
              position="intro"
              itemId="note-faq"
              className="block rounded-md border border-card-border bg-background px-3 py-2 text-sm font-bold hover:border-primary/40"
            >
              PDF・ExcelテンプレートFAQ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382918"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p10"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: もの忘れ相談前整理テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382978"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p32"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 介護者の休息・負担見える化
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382980"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p33"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 福祉用具レンタル・購入前確認
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382997"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p37"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 家電・リモコン・取扱説明書メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383002"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p38"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 実家の収納場所・置き場所マップ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383004"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p39"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 衣類・寝具・季節替え・サイズ管理メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383008"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p40"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 掃除・洗濯・家事ルーティン共有メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383018"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p42"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 介護家族の申し送り・引き継ぎメモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383027"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p44"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 当番・役割分担 記録メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8434675"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p45"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 安否確認・定期連絡 記録メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383033"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p46"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 近所付き合い・地域連絡先 整理メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8434977"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p47"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 買い物・日用品補充メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383038"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p48"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 郵便物・通知まとめ管理
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8435122"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p49"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 外出予定・移動手段整理
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8383305"
              eventName="booth_click"
              page="kaigo"
              position="intro_pack"
              itemId="care-start-37"
              className="block rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-900 hover:border-amber-500"
            >
              まとめ: 親の介護はじめの37商品セット
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382994"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p36"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 在宅介護の消耗品 在庫・補充
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382989"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p35"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: かかりつけ医・薬局・処方薬情報
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382987"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p34"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 食事・水分・体重の毎日記録
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382972"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p31"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 災害時持ち出し・連絡先整理
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382968"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p30"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 施設入所後の面会・連絡メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382965"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p29"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 訪問介護の家族共有メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382960"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p28"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: ケアマネ面談後ToDoテンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382957"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p27"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 在宅介護の月間予定カレンダー
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8382953"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p26"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 在宅介護の週間予定テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8427230"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p25"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 退院後1か月見守り記録テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8427038"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 通院付き添い記録テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8426965"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p23"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 転倒ヒヤリハット記録テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8426705"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p22"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: デイサービス利用前テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8426647"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p21"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: ショートステイ利用前テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8426543"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p20"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 要介護認定 更新前テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8340434"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p09"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 入院・退院・在宅復帰テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8425543"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p13"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 介護と仕事 両立整理メモ
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8424970"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_pack"
              itemId="hospital-consult-pack"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 入院・退院・ケアマネ相談パック
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8424688"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p107"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: ケアマネ初回相談テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8424477"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p106"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 施設費用見積もりテンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8411252"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p105"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 遠距離介護テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8409959"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p103"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 見守り連絡表テンプレート
            </TrackedExternalLink>
            <TrackedExternalLink
              href="https://kaigo-okane.booth.pm/items/8410669"
              eventName="booth_click"
              page="kaigo"
              position="intro_new_template"
              itemId="p104"
              className="block rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:border-primary/60"
            >
              新着: 通帳・保険確認テンプレート
            </TrackedExternalLink>
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-lg border border-card-border bg-card-bg p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold text-primary">無料ツール</p>
            <h2 className="text-xl font-bold">家族で話し合う前に数字と確認項目を整理する</h2>
          </div>
          <a
            href="https://net-toolbox.jp/tools?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-primary hover:underline"
          >
            ネットツールボックスを見る
          </a>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {[
            ["kaigo-cost-share", "介護費用分担", "毎月の介護費用を家族でどう分けるか試算"],
            ["kaigo-hospital-checklist", "入退院準備", "入院・退院・介護認定の確認リストを生成"],
            ["kaigo-discharge-home-return-plan", "在宅復帰準備", "退院後の通院・服薬・サービス・家族分担を整理"],
            ["kaigo-facility-compare", "施設費用比較", "候補施設の月額と総額を比較"],
            ["kaigo-facility-monthly-cost-memo", "施設月額見積もり", "施設請求・医療費・生活費・家族交通費を整理"],
            ["kaigo-facility-after-admission-visit-contact-memo", "入所後の面会・連絡", "面会記録・差し入れ・施設連絡を整理"],
            ["kaigo-family-role-share", "役割分担", "きょうだい間の担当案を整理"],
            ["kaigo-family-handover-memo", "申し送り・引き継ぎ", "当番交代の申し送りと次回確認事項を整理"],
            ["kaigo-family-duty-role-share-memo", "当番・役割分担の記録", "当番スケジュールと担当・実績を家族で共有"],
            ["kaigo-emergency-info", "緊急メモ", "連絡先・服薬・支払い確認項目を作成"],
            ["kaigo-parent-disaster-go-bag-contact-memo", "災害時持ち出し・連絡先", "持ち出し品・避難先・緊急連絡先を整理"],
            ["kaigo-parent-neighborhood-contact-list-memo", "近所・地域連絡先", "近所の人・町内会・管理会社などの連絡先と補足を整理"],
            ["kaigo-caregiver-rest-burden-memo", "介護者の休息・負担", "休息予定・重い時間帯・頼みたいことを整理"],
            ["kaigo-welfare-equipment-rental-purchase-memo", "福祉用具相談前", "生活場面の困りごと・候補・質問を整理"],
            ["kaigo-parent-home-appliance-remote-manual-memo", "家電・リモコン・説明書", "日常家電の操作メモ・取扱説明書・保証書を整理"],
            ["kaigo-parent-home-storage-location-map-memo", "置き場所マップ", "実家の日用品の置き場所を部屋別・棚段別に整理"],
            ["kaigo-parent-mail-notification-management-memo", "郵便物・通知管理", "郵便物・通知を受取日・期限・保管場所で整理して家族で共有"],
            ["kaigo-parent-clothes-bedding-season-size-memo", "衣類・寝具・サイズ", "衣類・寝具のサイズ・季節・保管場所を家族で共有"],
            ["kaigo-home-care-consumables-stock-memo", "消耗品 在庫・補充", "介護消耗品の残量・買い物・家族共有を整理"],
            ["kaigo-parent-doctor-pharmacy-medicine-memo", "医療機関・薬局・薬", "かかりつけ医・薬局・薬の名前を共有"],
            ["kaigo-parent-meal-water-weight-record-memo", "食事・水分・体重", "毎日の様子・週まとめ・受診前メモを整理"],
            ["kaigo-care-certification-memo", "介護認定申請", "相談前の生活状況と調査前メモを整理"],
            ["kaigo-care-certification-renewal-memo", "認定更新前", "前回からの生活変化・困りごと・相談前メモを整理"],
            ["kaigo-home-care-weekly-service-schedule-memo", "週間サービス予定", "訪問介護・デイ・訪問看護の予定と変更を整理"],
            ["kaigo-home-visit-care-family-share-memo", "訪問介護メモ", "訪問前後の気づき・家族共有・次回確認事項を整理"],
            ["kaigo-home-care-monthly-family-calendar-memo", "月間予定・家族分担", "通院・サービス予定・家族対応を月単位で整理"],
            ["kaigo-parent-outing-transport-memo", "外出予定・移動手段", "通院・買い物などの外出予定と移動手段・送迎引き継ぎを整理"],
            ["kaigo-post-discharge-month-record-memo", "退院後1か月", "食事・水分・睡眠・活動・担当者確認を整理"],
            ["kaigo-clinic-visit-record-memo", "通院付き添い", "受診前の質問・受診後の説明・次回予定を整理"],
            ["kaigo-fall-near-miss-record-memo", "転倒ヒヤリハット", "転んだ・転びそうになった場面を相談前に記録"],
            ["kaigo-day-service-prep-memo", "デイサービス準備", "持ち物・送迎・申し送り・事業所確認事項を整理"],
            ["kaigo-short-stay-prep-memo", "ショートステイ準備", "持ち物・申し送り・施設確認事項を整理"],
            ["kaigo-care-manager-first-consult-memo", "ケアマネ相談", "初回相談で伝える生活状況・家族の役割を整理"],
            ["kaigo-care-manager-meeting-todo-memo", "面談後ToDo", "ケアマネ面談後の決定事項・家族タスクを整理"],
            ["kaigo-memory-consult-memo", "もの忘れ相談", "気になった出来事・困りごと・相談前メモを整理"],
            ["kaigo-work-care-balance-memo", "仕事と介護", "職場相談前の現状・休み方・家族分担を整理"],
            ["kaigo-hospital-expense-reimbursement-memo", "入院費精算", "入院費・日用品・交通費の立替精算を整理"],
            ["kaigo-parent-monitoring-cost-check", "見守り費用", "一人暮らしの親の見守り費用と連絡順を整理"],
            ["kaigo-distance-care-family-meeting-agenda", "遠距離家族会議", "議題・担当案・次回確認事項を整理"],
            ["kaigo-distance-care-travel-memo", "遠距離介護", "交通費と遠方でも担える役割を整理"],
            ["kaigo-facility-visit-question-list", "施設見学質問", "費用・医療対応・面会・退去条件の質問を整理"],
            ["kaigo-parent-money-document-memo", "通帳・保険確認", "親への聞き方と書類・支払いの確認順を整理"],
          ].map(([slug, title, desc]) => (
            <TrackedExternalLink
              key={slug}
              href={`https://net-toolbox.jp/tools/${slug}?utm_source=toshi-navi&utm_medium=referral&utm_campaign=kaigo_hub_tools`}
              eventName="toolbox_click"
              page="kaigo"
              position="free_tool_grid"
              itemId={slug}
              className="block rounded-md border border-card-border bg-background p-3 hover:border-primary/40"
            >
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
            </TrackedExternalLink>
          ))}
        </div>
      </section>

      <KaigoDiagnosis />

      <section className="mt-8 rounded-lg border border-card-border bg-card-bg p-5">
        <h2 className="text-xl font-bold">このページの使い方</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          {[
            ["1", "今の状況を選ぶ"],
            ["2", "最初にやることを確認"],
            ["3", "無料noteで判断材料を見る"],
            ["4", "必要なテンプレートだけ購入"],
          ].map(([step, label]) => (
            <div key={step} className="rounded-md border border-card-border bg-background p-3">
              <span className="text-xs font-bold text-primary">STEP {step}</span>
              <p className="mt-1 text-sm font-bold">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          個別の医療判断、税務判断、相続判断、契約判断は扱いません。家族で状況を整理し、必要に応じて専門窓口へ相談する前の準備に使うページです。
        </p>
      </section>
    </main>
  );
}
