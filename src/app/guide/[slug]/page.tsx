import BaseGuidePage from "./BasePage";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export const dynamic = "force-static";
export const dynamicParams = false;

export { generateMetadata, generateStaticParams } from "./BasePage";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GuidePage({ params }: GuidePageProps) {
  const resolvedParams = await params;
  const page = await BaseGuidePage({ params: Promise.resolve(resolvedParams) });

  if (resolvedParams.slug !== "real-estate-crowdfunding-comparison-2026") {
    return page;
  }

  return (
    <>
      {page}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <AffiliateCTA
          page={resolvedParams.slug}
          title="少額の不動産CFから一歩進めるなら｜トウシェル無料相談"
          description="不動産クラウドファンディングで少額から始めた方が、本格的な不動産投資の相談先を探すならトウシェル。経験豊富な専門家が無料でオンライン面談、強引な勧誘なしで自分に合ったプランを比較検討できます。利用者の90%以上がこれから不動産投資を始める方。"
          buttonText="トウシェルの無料相談を見る"
          href="/go/power-planning-toucier"
          icon="🏠"
          highlight="無料・オンライン相談"
        />
      </div>
    </>
  );
}
