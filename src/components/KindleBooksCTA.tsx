import { TrackedExternalLink } from "@/components/TrackedExternalLink";

// 自社で出版しているKindle電子書籍（KDP）への相互送客リンク。
// シナジー追及新事業 A-5: 介護プロパティ → Kindle版（販売中の本のみ）。
// 公開中のみ掲載する。レビュー中の本はASIN確定後に追記する。
export interface KindleBook {
  id: string;
  asin: string;
  title: string;
  description: string;
}

export const kindleBooks: KindleBook[] = [
  {
    id: "K01",
    asin: "B0H3R2S5C9",
    title: "親の介護とお金 はじめの一歩",
    description:
      "何から手をつけるか分からない人へ。連絡先・お金・介護費用の整理を、家族で進めるための入門書。",
  },
  {
    id: "K04",
    asin: "B0GXH1FSX1",
    title: "親の通院・入退院 情報整理ノート",
    description:
      "受診同行メモ、服薬・既往歴の自己記録、緊急連絡先、ケアマネ相談、退院後の準備までを場面別に整理。",
  },
];

function amazonHref(asin: string, page: string, id: string): string {
  const params = new URLSearchParams({
    utm_source: "toshi-navi",
    utm_medium: "referral",
    utm_campaign: `kindle_${page}`,
    utm_content: id.toLowerCase(),
  });
  return `https://www.amazon.co.jp/dp/${asin}?${params.toString()}`;
}

/**
 * Kindle版（電子書籍）への送客セクション。自社出版物なので「PR」表記は不要。
 * 既存ハブの他セクションと同じ枠線/余白スタイルに合わせている。
 */
export function KindleBooksCTA({ page = "kaigo" }: { page?: string }) {
  if (kindleBooks.length === 0) return null;
  return (
    <section className="mb-6 rounded-lg border border-card-border bg-card-bg p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold text-primary">Kindle版（電子書籍）</p>
          <h2 className="text-xl font-bold">スマホでも読める、介護の整理ガイド</h2>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-muted">
          各テーマを読み物としてまとめた電子書籍です。Kindle Unlimited 対象なら追加料金なしで読めます。
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {kindleBooks.map((book) => (
          <div key={book.id} className="flex flex-col rounded-lg border border-card-border bg-background p-4">
            <h3 className="text-sm font-bold">{book.title}</h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{book.description}</p>
            <TrackedExternalLink
              href={amazonHref(book.asin, page, book.id)}
              eventName="kindle_click"
              page={page}
              position="kindle_cross_referral"
              itemId={book.id}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary-hover"
            >
              Kindle版を見る（Amazon）
            </TrackedExternalLink>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        ※ 電子書籍は Amazon Kindle で販売しています。価格・配信条件は Amazon の商品ページでご確認ください。
      </p>
    </section>
  );
}
