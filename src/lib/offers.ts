export type { OfferProvider, OfferStatus, Offer } from "./offersBase";
import { offers as baseOffers } from "./offersBase";
import type { Offer } from "./offersBase";

const phaseBOffers: Offer[] = [
  // 2026-05-01 A8終了確認。baseOffers側の古いactive定義を上書きする。
  {
    id: "z-kikaku-manematch",
    service: "マネマッチ（FP紹介・新規面談完了）",
    provider: "a8net",
    payout_yen: 9000,
    official_url: "https://manematch.jp/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+1U35P6+5U5A+5YZ75",
    status: "paused",
    note: "A8プログラム 25-1209 (insId=s00000027235001)。2026-05-01 loop #19-2でA8終了プログラム一覧掲載を確認。終了日2026-04-30のため送客停止。",
    category: "tax",
  },
  // 2026-05-01 A8 mylink取得 (insId=s00000026246001)。
  {
    id: "tree-financial-money-com",
    service: "マネードットコム（生命保険無料相談）",
    provider: "a8net",
    payout_yen: 5000,
    official_url: "https://moneycom.jp/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4EDCGQ+5MIK+60OXD",
    status: "active",
    note: "A8プログラム 24-1106。EPC 73.15、確定率85.18%。生命保険無料相談の新規面談完了案件。FP/保険/家計系CTA候補。",
    category: "tax",
  },
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
  // 2026-06-02 A8 / もしも管理画面で介護・終活系の提携中案件を確認し、テキスト素材URLを取得。
  {
    id: "kaigo-estate-cleanout",
    service: "遺品整理110番",
    provider: "a8net",
    payout_yen: 6000,
    official_url: "https://px.a8.net/svt/ejp?a8mat=4B5MC7+D6IIOQ+39GM+5MIDPE",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B5MC7+D6IIOQ+39GM+5MIDPE",
    status: "active",
    note: "A8プログラム s00000015223034。2026-06-02 投資ナビJP(webSiteId=002)で提携中確認・テキスト素材取得。成果条件: 新規見積依頼6000円。実家片付け、重要書類分別、生前整理の見積前CTAで使用。",
    category: "kaigo",
  },
  {
    id: "kaigo-home-care-support",
    service: "イチロウ（介護保険外サービス）",
    provider: "a8net",
    payout_yen: 4000,
    official_url: "https://ichirou.co.jp/lp-a8-010/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B5MC7+D3JCNU+54PG+60H7M",
    status: "active",
    note: "A8プログラム s00000023938001。2026-06-02 投資ナビJP(webSiteId=002)で提携中確認・テキスト素材取得。成果条件: 新規無料問い合わせ4000円。通院付き添い、自費介護、家族介護の休息導線で使用。",
    category: "kaigo",
  },
  {
    id: "kaigo-senior-monitoring",
    service: "見守りプラス認知のアイシル",
    provider: "moshimo",
    payout_yen: 2000,
    official_url: "https://www.aitosys.com/aishiru_special/",
    affiliate_url: "https://af.moshimo.com/af/c/click?a_id=5611288&p_id=1857&pc_id=3604&pl_id=25823&url=https%3A%2F%2Fwww.aitosys.com%2Faishiru_special%2F",
    status: "active",
    note: "もしも promotion_id=1857。2026-06-02 投資ナビJP(shop_site_id=668125)で提携中確認。どこでもリンクの許可ドメイン検証(result=true)後、既定LPへのテキストリンクを生成。成果報酬は2000-10000円レンジ。",
    category: "kaigo",
  },
  {
    id: "kaigo-home-cleanup-ecoclean",
    service: "ECOクリーン",
    provider: "a8net",
    payout_yen: 1000,
    official_url: "https://aff.eco-perfect.info/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B5MC7+DBVF4Q+36X8+15ORS2",
    status: "active",
    note: "A8プログラム s00000014894007。2026-06-02 投資ナビJP(webSiteId=002)で提携中確認・テキスト素材取得。成果条件: 新規成約1000円。実家の不用品回収・片付け系の補完候補。",
    category: "kaigo",
  },
];

const phaseBOfferIds = new Set(phaseBOffers.map((o) => o.id));

export const offers: Offer[] = [
  ...baseOffers.filter((o) => !phaseBOfferIds.has(o.id)),
  ...phaseBOffers,
];

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
