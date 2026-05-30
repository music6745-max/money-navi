"use client";

import { useMemo, useState } from "react";
import { kaigoProducts, kaigoSituations, type KaigoProduct } from "@/lib/kaigoProducts";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { TrackedOfferLink } from "@/components/TrackedOfferLink";

const affiliateLabels: Record<string, { title: string; description: string; button: string }> = {
  "hoken-mammoth": {
    title: "保険と家計の見直しをFPに相談",
    description: "親の介護が始まる前後は、家族の保険料、保障、生活費を一度整理しておくと負担を把握しやすくなります。",
    button: "無料相談の詳細を見る",
  },
  "zeirishi-dotcom": {
    title: "相続前後の税務論点を税理士に確認",
    description: "贈与、相続、確定申告、親族間の精算で迷う場合は、資料を整理したうえで専門家に確認するのが安全です。",
    button: "税理士相談を確認する",
  },
  "sbi-insweb-auto": {
    title: "親の車や実家の車の保険を見直す",
    description: "施設入所や免許返納を検討する段階では、車の維持費と自動車保険も確認対象になります。",
    button: "自動車保険の見積もりを見る",
  },
};

export function KaigoDiagnosis() {
  const [selectedId, setSelectedId] = useState(kaigoSituations[0]?.id ?? "");
  const selected = kaigoSituations.find((item) => item.id === selectedId) ?? kaigoSituations[0];
  const recommendedProducts = useMemo(() => {
    const productById = new Map<string, KaigoProduct>(kaigoProducts.map((product) => [product.id, product]));
    const products: KaigoProduct[] = [];

    for (const productId of selected.productIds) {
      const product = productById.get(productId);
      if (!product) continue;
      products.push(product);
    }

    return products;
  }, [selected.productIds]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-lg border border-card-border bg-card-bg p-4">
        <h2 className="text-base font-bold">今の状況を選ぶ</h2>
        <div className="mt-4 space-y-2">
          {kaigoSituations.map((situation) => {
            const active = situation.id === selected.id;
            return (
              <button
                key={situation.id}
                type="button"
                onClick={() => setSelectedId(situation.id)}
                className={`w-full rounded-md border px-3 py-3 text-left text-sm transition ${
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-card-border bg-background hover:border-primary/40"
                }`}
              >
                <span className="block font-bold">{situation.shortLabel}</span>
                <span className={`mt-1 block text-xs leading-relaxed ${active ? "text-white/85" : "text-muted"}`}>
                  {situation.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="min-w-0 rounded-lg border border-card-border bg-card-bg p-5">
        <div className="border-b border-card-border pb-4">
          <p className="text-xs font-bold text-primary">診断結果</p>
          <h1 className="mt-1 text-2xl font-bold">{selected.shortLabel}から始める介護とお金の整理</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">{selected.description}</p>
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-bold">最初にやること</h2>
          <ol className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            {selected.nextActions.map((action, index) => (
              <li key={action} className="rounded-md border border-card-border bg-background p-3">
                <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                <p className="mt-1 text-sm leading-relaxed">{action}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold">おすすめテンプレート</h2>
              <p className="text-sm text-muted">無料noteで確認してから、必要な単品またはセットを選べます。</p>
            </div>
            <TrackedExternalLink
              href="https://note.com/mild_quail6092/n/n44b9de8bf4b7"
              eventName="note_click"
              page="kaigo"
              position="compare_note_top"
              itemId="note-compare"
              className="text-sm font-bold text-primary hover:underline"
            >
              選び方を見る
            </TrackedExternalLink>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {recommendedProducts.map((product) => (
              <article key={product.id} className="rounded-lg border border-card-border bg-background p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                    {product.priceLabel}
                  </span>
                  {product.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-card-bg px-2 py-0.5 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-base font-bold">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.boothUrl && (
                    <TrackedExternalLink
                      href={product.boothUrl}
                      eventName="booth_click"
                      page="kaigo"
                      position="product_card"
                      itemId={product.id}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-bold text-white hover:bg-primary-hover"
                    >
                      BOOTHで見る
                    </TrackedExternalLink>
                  )}
                  {product.noteUrl && (
                    <TrackedExternalLink
                      href={product.noteUrl}
                      eventName="note_click"
                      page="kaigo"
                      position="product_card"
                      itemId={product.id}
                      className="inline-flex items-center justify-center rounded-md border border-card-border px-3 py-2 text-sm font-bold hover:border-primary/40"
                    >
                      noteで読む
                    </TrackedExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h2 className="text-lg font-bold">外部相談が必要になりやすい項目</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            このページは整理用です。保険、税務、相続、契約の最終判断は、整理した資料をもとに専門窓口で確認してください。
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            {selected.affiliateOfferIds.map((offerId) => {
              const label = affiliateLabels[offerId];
              if (!label) return null;
              return (
                <TrackedOfferLink
                  key={offerId}
                  offerId={offerId}
                  page="kaigo"
                  position={`situation_${selected.id}`}
                  className="block rounded-md border border-card-border bg-card-bg p-4 hover:border-primary/40"
                >
                  <h3 className="text-sm font-bold">{label.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{label.description}</p>
                  <span className="mt-3 inline-block text-sm font-bold text-primary">{label.button}</span>
                </TrackedOfferLink>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
