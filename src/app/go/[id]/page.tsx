import { notFound, redirect } from "next/navigation";
import { offers, getOffer } from "@/lib/offers";
import { siteConfig } from "@/lib/tools";
import type { Metadata } from "next";

/**
 * /go/[id] — アフィリエイトリンクの一元リダイレクトエンドポイント。
 *
 * 目的:
 *  - 本文中に `https://px.a8.net/...` を直貼りしない（offers.ts で一元管理）
 *  - URL が変更になっても offers.ts 一箇所の修正で全ページ反映
 *  - /go/<id> という統一URLで GA4 / Search Console 上のクリック集計が容易に
 *  - 404 防止として未知の id は / にリダイレクト
 *
 * なお、本ページは noindex。検索結果に出さない。
 */

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return offers.map((o) => ({ id: o.id }));
}

export const metadata: Metadata = {
  title: `リダイレクト｜${siteConfig.name}`,
  robots: { index: false, follow: false },
};

export default async function GoPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const offer = getOffer(id);
  if (!offer) notFound();
  // Next.js の redirect はサーバサイドで 307 を返すので
  // クローラに対しても「ここはランディングではなくリダイレクタ」と伝わる。
  redirect(offer.affiliate_url);
}
