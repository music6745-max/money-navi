import { Children, cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { guideContents } from "./contents";

export function GuideContent({ slug }: { slug: string }) {
  const content = guideContents[slug];
  if (!content) {
    return (
      <div className="prose prose-sm max-w-none text-muted">
        <p>この記事は現在準備中です。近日公開予定です。</p>
      </div>
    );
  }
  return <div className="space-y-6 leading-relaxed">{withDefaultPage(content, slug)}</div>;
}

type PageAwareProps = {
  page?: string;
  children?: ReactNode;
};

function withDefaultPage(node: ReactNode, page: string): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement<PageAwareProps>(child)) return child;

    const originalChildren = child.props.children;
    const nextChildren = originalChildren ? withDefaultPage(originalChildren, page) : originalChildren;
    const shouldSetPage = child.type === AffiliateCTA || child.type === ComparisonTableCTA;
    const nextProps: Partial<PageAwareProps> = {};

    if (shouldSetPage && !child.props.page) {
      nextProps.page = page;
    }
    if (nextChildren !== originalChildren) {
      nextProps.children = nextChildren;
    }

    return Object.keys(nextProps).length > 0
      ? cloneElement(child as ReactElement<PageAwareProps>, nextProps)
      : child;
  });
}
