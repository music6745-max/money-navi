/**
 * 🎯 Offer Master — 投資ナビJP のアフィリエイトリンク一元管理
 *
 * 運用ルール:
 *  - すべての外部課金リンクは offers.ts の id を経由する。
 *  - 直接 `https://px.a8.net/...` や `https://search.sbisec.co.jp/...` を
 *    ページに貼るのは禁止（URLが変わったら411ページを手直しになる）。
 *  - 各案件には id（英数ハイフン）をつけ、GA4イベントの `offer_id` に使う。
 *  - affiliate_url が空 or official のままのものは `status: "direct"`（＝成果発生なし）
 *    として明示し、ダッシュボードで機会損失として追える状態にする。
 *
 * 使い方:
 *   import { getOffer } from "@/lib/offers";
 *   const offer = getOffer("sbi-nisa");
 *   <a href={offer.href} target="_blank" rel="nofollow sponsored noopener noreferrer">…</a>
 *
 *   または /go/[id] 経由でトラッキング付きリダイレクト:
 *   <a href={`/go/${offer.id}`}>…</a>
 */

export type OfferProvider =
  | "a8net"
  | "moshimo"
  | "rakuten"
  | "valuecommerce"
  | "direct"; // 公式URL直リンク（現状アフィリエイトなし = 機会損失）

export type OfferStatus =
  | "active" // 有効なアフィリエイトURL
  | "direct" // 直リンク（成果発生なし）- 要: A8/もしもで提携申請
  | "paused" // 一時停止
  | "review"; // 審査中

export interface Offer {
  /** URL 安全な小文字英数ハイフン。GA4 event param "offer_id" にもなる。 */
  id: string;
  /** 表示名（サービス名）。CTAラベルや比較表で使う。 */
  service: string;
  /** プロバイダ（どのASP経由か）。 */
  provider: OfferProvider;
  /** 成果単価（円）。月次見積もり・優先度付けに使う。 */
  payout_yen: number;
  /** 公式サイトURL（アフィリエイトなし版）。フォールバックに使う。 */
  official_url: string;
  /** 実際に貼るリンク。provider=direct の場合は official_url と同じ。 */
  affiliate_url: string;
  /** 運用ステータス。direct は「アフィリエイト未提携 → 要交換」のフラグ。 */
  status: OfferStatus;
  /** 運用メモ（案件の特徴・注意点）。 */
  note?: string;
  /** 関連カテゴリ（money-navi 内カテゴリ slug）。 */
  category?: string;
}

/**
 * 🔴 最優先移行対象:
 *  下記 "direct" ステータスは、いま本文中に 484件 レベルで貼られているが
 *  アフィリエイト契約がなく成果が一切発生していない。
 *  A8.net / もしもアフィリエイト で同等案件を検索して affiliate_url を差替えること。
 */
export const offers: Offer[] = [
  // ============ 証券（NISA/投信/株） ============
  {
    id: "sbi-nisa",
    service: "SBI証券",
    provider: "direct",
    payout_yen: 10000, // A8.net経由で提携できれば 8,000〜12,000円/件見込み
    official_url: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
    affiliate_url: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lpnisa_ichoku.html",
    status: "direct",
    note: "🔴要対応: A8.net/もしもでSBI証券アフィリエイト提携申請。現在 484件の直リンクが本文中にあるが成果ゼロ。",
    category: "broker",
  },
  {
    id: "rakuten-sec-nisa",
    service: "楽天証券",
    provider: "direct",
    payout_yen: 8000,
    official_url: "https://www.rakuten-sec.co.jp/web/nisa/",
    affiliate_url: "https://www.rakuten-sec.co.jp/web/nisa/",
    status: "direct",
    note: "🔴要対応: もしもアフィリエイト（Rakutenアフィ）で提携申請。",
    category: "broker",
  },
  {
    id: "monex-nisa",
    service: "マネックス証券",
    provider: "direct",
    payout_yen: 7000,
    official_url: "https://info.monex.co.jp/nisa/index.html",
    affiliate_url: "https://info.monex.co.jp/nisa/index.html",
    status: "direct",
    note: "🔴要対応: A8.netにマネックス証券案件あり、要提携申請。",
    category: "broker",
  },
  {
    id: "matsui-nisa",
    service: "松井証券",
    provider: "direct",
    payout_yen: 5000,
    official_url: "https://www.matsui.co.jp/service/nisa/",
    affiliate_url: "https://www.matsui.co.jp/service/nisa/",
    status: "direct",
    note: "🔴要対応: A8.net で松井証券案件あり。",
    category: "broker",
  },
  {
    id: "kabu-nisa",
    service: "auカブコム証券",
    provider: "direct",
    payout_yen: 4000,
    official_url: "https://kabu.com/nisa/",
    affiliate_url: "https://kabu.com/nisa/",
    status: "direct",
    category: "broker",
  },

  // ============ iDeCo / 確定拠出年金 ============
  {
    id: "monex-ideco",
    service: "マネックス証券iDeCo",
    provider: "direct",
    payout_yen: 6000,
    official_url: "https://info.monex.co.jp/ideco/",
    affiliate_url: "https://info.monex.co.jp/ideco/",
    status: "direct",
    category: "ideco",
  },

  // ============ FX ============
  {
    id: "matsui-fx",
    service: "松井証券FX",
    provider: "direct",
    payout_yen: 15000,
    official_url: "https://www.matsui.co.jp/fx/",
    affiliate_url: "https://www.matsui.co.jp/fx/",
    status: "direct",
    note: "🔴要対応: FX口座開設は1件15,000円前後の高単価案件。A8.net提携必須。",
    category: "fx-crypto",
  },

  // ============ 税理士 / 会計 / FP（高単価 A8.net） ============
  {
    id: "zeirishi-dotcom",
    service: "税理士ドットコム",
    provider: "a8net",
    payout_yen: 12000,
    official_url: "https://www.zeiri4.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
    status: "active",
    note: "税理士マッチング。toolbox の tax-calculator など税務系ツールからの誘導が強い。",
    category: "tax",
  },
  {
    id: "hoken-mammoth",
    service: "保険マンモス",
    provider: "a8net",
    payout_yen: 10000,
    official_url: "https://hoken-mammoth.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
    status: "active",
    note: "FP無料相談。高単価 A8.net 案件。",
    category: "tax",
  },

  // ============ 仮想通貨 ============
  {
    id: "bitflyer",
    service: "bitFlyer",
    provider: "a8net",
    payout_yen: 5000,
    official_url: "https://bitflyer.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+FVK6AI+50+89Q8HD",
    status: "active",
    category: "fx-crypto",
  },
  {
    id: "coincheck",
    service: "Coincheck",
    provider: "a8net",
    payout_yen: 5000,
    official_url: "https://coincheck.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G829ZU+50+3NONKX",
    status: "active",
    category: "fx-crypto",
  },

  // ============ 家計・マネーフォワード系 ============
  {
    id: "moneyforward",
    service: "マネーフォワード ME",
    provider: "direct",
    payout_yen: 2000,
    official_url: "https://moneyforward.com/",
    affiliate_url: "https://moneyforward.com/",
    status: "direct",
    note: "もしもアフィリエイトで提携できる可能性あり、要確認。",
    category: "household",
  },

  // ============ 自動車保険一括見積（SBIホールディングス インズウェブ） ============
  {
    id: "sbi-insweb-auto",
    service: "インズウェブ自動車保険一括見積",
    provider: "a8net",
    payout_yen: 1000,
    official_url: "https://www.inzweb.com/",
    affiliate_url: "https://www.inzweb.com/",
    status: "review",
    note: "SBIホールディングス 2026-04-24承認 (A8プログラム 03-0603)。A8.net → 参加中プログラム → 広告リンク から本番URLをコピーして affiliate_url を差替、status を active に更新。単価は実際の報酬確認後に調整。",
    category: "household",
  },

  // ============ 住宅ローン一括比較（MFS モゲチェック） ============
  {
    id: "mogecheck-refinance",
    service: "モゲチェック（借り換え）",
    provider: "a8net",
    payout_yen: 2564,
    official_url: "https://www.mogecheck.jp/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4BZM1M+3SUE+5YJRM",
    status: "active",
    note: "MFS 2026-04-23 承認済 (A8プログラム 17-0614)。成果条件: 新規比較サービス申込。EPC 70.18。",
    category: "household",
  },
  {
    id: "mogecheck-new-loan",
    service: "モゲチェック（新規借り入れ）",
    provider: "a8net",
    payout_yen: 2564,
    official_url: "https://www.mogecheck.jp/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4ASQU2+3SUE+15QHIA",
    status: "active",
    note: "MFS 2026-04-23 承認済 (A8プログラム 22-0325)。成果条件: 新規比較サービス申込。EPC 80.03。",
    category: "household",
  },
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
