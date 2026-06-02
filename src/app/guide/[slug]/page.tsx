import BaseGuidePage from "./BasePage";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export const dynamic = "force-static";
export const dynamicParams = false;

export { generateMetadata, generateStaticParams } from "./BasePage";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

const supplementalCtas: Record<
  string,
  {
    title: string;
    description: string;
    buttonText: string;
    href: string;
    icon: string;
    highlight: string;
  }
> = {
  "living-alone-parent-monitoring-cost-contact-system": {
    title: "見守り連絡表とあわせて使える介護テンプレートまとめ",
    description:
      "一人暮らし親の見守り連絡表に加えて、通院、入退院、家族の役割分担、費用、書類確認までまとめて整理したい家庭向けのセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=living-alone-parent-monitoring-cost-contact-system&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "見守りから介護全体の整理へ",
  },
  "parent-bankbook-insurance-asking-guide": {
    title: "通帳・保険・支払い確認とあわせて使える介護テンプレートまとめ",
    description:
      "親のお金まわりを聞く順番に加えて、通院、入退院、費用分担、連絡先、書類整理まで家族で見返せる形にまとめたい家庭向けのセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-bankbook-insurance-asking-guide&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "お金まわりの確認から介護全体の整理へ",
  },
  "parent-regular-delivery-package-receipt-record": {
  title: "介護のテンプレまとめ（フルパック）で実家管理メモもまとめて用意",
  description:
    "定期便・宅配便の受け取りメモに加えて、郵便物、買い物、外出予定、連絡先、持ち物など、家族で共有しやすいテンプレートをまとめたセットです。必要なものから使えます。",
  buttonText: "フルパックをBOOTHで見る",
  href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-regular-delivery-package-receipt-record&utm_content=full_pack",
  icon: "BOOTH",
  highlight: "テンプレまとめ",
},
  "parent-memorial-service-anniversary-schedule-record": {
    title: "介護のテンプレまとめ（フルパック）で実家管理メモもまとめて用意",
    description:
      "法事・年忌予定メモに加えて、連絡先、外出予定、郵便物、持ち物、家族共有で使いやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-memorial-service-anniversary-schedule-record&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-phone-visitor-record": {
    title: "介護のテンプレまとめ（フルパック）で電話・来客メモもまとめて用意",
    description:
      "電話・来客メモに加えて、連絡先、外出予定、郵便物、買い物、持ち物、家族共有で使いやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-phone-visitor-record&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-hair-salon-barber-visit-record": {
    title: "介護のテンプレまとめ（フルパック）で生活メモもまとめて用意",
    description:
      "美容院・理容院の予約と来店記録に加えて、連絡先、外出予定、買い物、持ち物、家族共有で使いやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-hair-salon-barber-visit-record&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-photo-album-organization-record": {
    title: "介護のテンプレまとめ（フルパック）で家族共有メモもまとめて用意",
    description:
      "写真・アルバム整理メモに加えて、持ち物、連絡先、郵便物、買い物、ごみ出しなど、家族で共有しやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-photo-album-organization-record&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-belongings-name-label-carryout-management": {
    title: "介護のテンプレまとめ（フルパック）で持ち物メモもまとめて用意",
    description:
      "持ち物・名前つけ管理に加えて、連絡先、外出予定、郵便物、買い物、ごみ出しなど、家族で共有しやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-belongings-name-label-carryout-management&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "real-estate-crowdfunding-comparison-2026": {
    title: "少額の不動産投資を相談しながら検討する",
    description:
      "不動産クラウドファンディングで少額から始めたい方でも、家計全体や将来設計とのバランス確認は重要です。トウシェルの無料オンライン相談なら、投資経験が浅い方でも自分に合った進め方を整理できます。",
    buttonText: "トウシェルの無料相談を見る",
    href: "/go/power-planning-toucier",
    icon: "FP",
    highlight: "無料オンライン相談",
  },
  "insurance-life-comparison": {
    title: "生命保険の見直しを無料で相談する",
    description:
      "独身・既婚・子育て世帯では、必要な保障額が大きく変わります。マネードットコムなら生命保険の無料相談で、入りすぎや不足がないかを専門家と一緒に確認できます。",
    buttonText: "マネードットコムで無料相談",
    href: "/go/tree-financial-money-com",
    icon: "FP",
    highlight: "生命保険の無料相談",
  },
  "insurance-optimization-guide": {
    title: "保険料と保障額のバランスを確認する",
    description:
      "保障を削りすぎると万一に備えられず、入りすぎると家計を圧迫します。マネードットコムの無料相談で、現在の保障内容と保険料を見直すきっかけを作れます。",
    buttonText: "保険見直しを無料相談",
    href: "/go/tree-financial-money-com",
    icon: "FP",
    highlight: "見直し相談",
  },
  "parent-memory-family-history-record": {
    title: "介護のテンプレまとめ（フルパック）で家族共有メモもまとめて用意",
    description:
      "思い出・家族の歴史メモに加えて、連絡先、買い物、郵便物、ごみ出し、庭の手入れなど、家族で共有しやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-memory-family-history-record&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-garden-plants-vegetable-care": {
    title: "介護のテンプレまとめ（フルパック）で生活メモをまとめて用意",
    description:
      "庭・植木・家庭菜園の手入れメモに加えて、連絡先、買い物、郵便物、ごみ出しなど、家族で共有しやすいテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-garden-plants-vegetable-care&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-checkin-contact-log": {
    title: "介護のテンプレまとめ（フルパック）で連絡・見守りメモもまとめて用意",
    description:
      "定期連絡の記録だけでなく、連絡先や予定、家族共有で使えるテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-checkin-contact-log&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-neighborhood-contact-list": {
    title: "介護のテンプレまとめ（フルパック）で連絡先メモもまとめて用意",
    description:
      "近所・地域の連絡先整理だけでなく、日々の確認や家族共有で使えるテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-neighborhood-contact-list&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-outing-transport-plan": {
    title: "介護のテンプレまとめ（フルパック）で外出・手続きのメモをまとめて用意",
    description:
      "外出予定や移動手段、連絡先、当日の持ち物など、家族で共有しやすいテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-outing-transport-plan&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-home-garbage-schedule-separation": {
    title: "介護のテンプレまとめ（フルパック）で生活メモをまとめて用意",
    description:
      "ごみ出し曜日・分別の共有や、日々の確認・連絡で使えるテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-home-garbage-schedule-separation&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-mail-notification-management": {
    title: "介護のテンプレまとめ（フルパック）で書類・期限のメモもまとめて用意",
    description:
      "郵便物・通知の管理だけでなく、連絡先や支払いメモなど家族で共有しやすいテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-mail-notification-management&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "parent-shopping-supplies-replenishment": {
    title: "介護のテンプレまとめ（フルパック）で買い物・生活メモもまとめて用意",
    description:
      "買い物・補充メモに加えて、日々の確認や家族共有で使えるテンプレをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=parent-shopping-supplies-replenishment&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
  "care-certification-application-prep": {
    title: "介護のテンプレまとめ（フルパック）で申請前の整理もまとめて用意",
    description:
      "介護認定の申請前メモに加えて、通院、入退院、家族分担、費用、見守り連絡など、相談前に家族で見返しやすいテンプレートをまとめたセットです。必要なものから使えます。",
    buttonText: "フルパックをBOOTHで見る",
    href: "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=care-certification-application-prep&utm_content=full_pack",
    icon: "BOOTH",
    highlight: "テンプレまとめ",
  },
};

export default async function GuidePage({ params }: GuidePageProps) {
  const resolvedParams = await params;
  const page = await BaseGuidePage({ params: Promise.resolve(resolvedParams) });
  const cta = supplementalCtas[resolvedParams.slug];

  if (!cta) {
    return page;
  }

  return (
    <>
      {page}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <AffiliateCTA page={resolvedParams.slug} {...cta} />
      </div>
    </>
  );
}
