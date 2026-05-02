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
