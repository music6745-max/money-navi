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
