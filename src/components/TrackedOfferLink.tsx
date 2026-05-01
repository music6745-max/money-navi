"use client";
import type { ReactNode } from "react";
import { getOffer } from "@/lib/offers";
import { trackEvent, providerFromUrl } from "@/lib/tracking";

/**
 * offer master (offers.ts) の id を指定してクリックを自動計測する CTA リンク。
 *
 * これに統一することで:
 *  - 本文にアフィリエイト直URLが散らばらない（URLが変わったら offers.ts 1箇所修正）
 *  - GA4 に `affiliate_click` が必ず飛ぶ（provider, offer_id, page, position 付き）
 *  - Looker Studio で KPI ダッシュボードが作れる（offer_id 単位の CVR）
 *
 * 使い方:
 *   <TrackedOfferLink offerId="zeirishi-dotcom" page="guide_invoice" position="hero_cta">
 *     税理士ドットコムで無料相談
 *   </TrackedOfferLink>
 */
export function TrackedOfferLink({
  offerId,
  page,
  position,
  className,
  children,
}: {
  offerId: string;
  page?: string;
  position?: string;
  className?: string;
  children: ReactNode;
}) {
  const offer = getOffer(offerId);
  if (!offer || offer.status !== "active") {
    // id typo や停止案件に気付けるよう、リンク自体を出さずテキストだけ返す
    return <span className={className}>{children}</span>;
  }
  const onClick = () => {
    trackEvent("affiliate_click", {
      page: page ?? "",
      position: position ?? "",
      service: offer.service,
      offer_id: offer.id,
      provider: offer.provider === "direct" ? "direct" : providerFromUrl(offer.affiliate_url),
      status: offer.status,
      url: offer.affiliate_url.slice(0, 200),
    });
  };
  return (
    <a
      href={offer.affiliate_url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onClick}
      className={className}
      data-offer-id={offer.id}
      data-offer-status={offer.status}
    >
      {children}
    </a>
  );
}
