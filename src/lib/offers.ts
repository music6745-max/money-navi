export type { OfferProvider, OfferStatus, Offer } from "./offersBase";
import { offers as baseOffers } from "./offersBase";
import type { Offer } from "./offersBase";

const phaseBOffers: Offer[] = [
  // 2026-04-28 A8 mylink取得 (insId=s00000009416006)。EPC 50以上の高CVR案件。
  {
    id: "power-planning-toucier",
    service: "トウシェル（無料の不動産投資相談）",
    provider: "a8net",
    payout_yen: 10000,
    official_url: "https://toucier.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+52S49M+20NK+ZQFQA",
    status: "active",
    note: "🔴高単価想定10000円(8000-14000円レンジ)。A8プログラム 17-0407 (insId=s00000009416006)。2026-04-28 mylink取得・active化。素材ID 002テキスト推奨、EPC 50以上、CTR 2.36%。category=fx-crypto (実態は real-estate-investment)。real-estate-crowdfunding-comparison-2026 等の不動産系ガイドで活用。",
    category: "fx-crypto",
  },
];

export const offers: Offer[] = [...baseOffers, ...phaseBOffers];

const offerById = new Map<string, Offer>(offers.map((o) => [o.id, o]));

export function getOffer(id: string): Offer | undefined {
  return offerById.get(id);
}

/** /go/[id] 等で safe-fallback 込みで URL を返す */
export function getOfferHref(id: string): string | null {
  const o = offerById.get(id);
  return o ? o.affiliate_url : null;
}

/** CTA を貼る直前に「本当にアフィリエイトURLが入っているか」を確認するヘルパ */
export function isMonetized(id: string): boolean {
  const o = offerById.get(id);
  return !!o && o.status === "active";
}

/** 機会損失レポート用: direct のまま放置している案件一覧 */
export function getDirectOffers(): Offer[] {
  return offers.filter((o) => o.status === "direct");
}
