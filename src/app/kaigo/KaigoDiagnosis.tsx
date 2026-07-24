"use client";

import { useState } from "react";
import { kaigoSituations } from "@/lib/kaigoProducts";
import { TrackedOfferLink } from "@/components/TrackedOfferLink";
import { trackEvent } from "@/lib/tracking";

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
  "kaigo-senior-monitoring": {
    title: "一人暮らしの見守りサービスを確認",
    description: "家族の連絡頻度と緊急時の動きを決めたうえで、見守り方法、料金、対応条件を比較します。",
    button: "アイシルの公式情報を確認",
  },
  "kaigo-home-care-support": {
    title: "通院付き添い・自費介護を確認",
    description: "介護保険で足りない付き添い、夜間対応、家族の休息など、必要な時間と内容を整理して確認します。",
    button: "イチロウの公式情報を確認",
  },
  "kaigo-estate-cleanout": {
    title: "実家片付け・生前整理の見積条件を確認",
    description: "残す書類や写真を先に分け、作業範囲、料金、追加費用、立ち会い条件を確認してから見積もります。",
    button: "遺品整理110番の情報を確認",
  },
};

export function KaigoDiagnosis() {
  const [selectedId, setSelectedId] = useState(kaigoSituations[0]?.id ?? "");
  const selected = kaigoSituations.find((item) => item.id === selectedId) ?? kaigoSituations[0];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-lg border border-card-border bg-card-bg p-4">
        <h3 className="text-base font-bold">今の状況を選ぶ</h3>
        <div className="mt-4 space-y-2">
          {kaigoSituations.map((situation) => {
            const active = situation.id === selected.id;
            return (
              <button
                key={situation.id}
                type="button"
                onClick={() => {
                  setSelectedId(situation.id);
                  trackEvent("kaigo_diagnosis_select", {
                    page: "kaigo",
                    position: "situation_selector",
                    situation_id: situation.id,
                  });
                }}
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
          <h3 className="mt-1 text-2xl font-bold">{selected.shortLabel}から始める介護とお金の整理</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{selected.description}</p>
        </div>

        <div className="mt-5">
          <h4 className="text-lg font-bold">最初にやること</h4>
          <ol className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            {selected.nextActions.map((action, index) => (
              <li key={action} className="rounded-md border border-card-border bg-background p-3">
                <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                <p className="mt-1 text-sm leading-relaxed">{action}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h4 className="text-lg font-bold">条件に合う場合だけ確認するサービス</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            まず上の項目を整理し、家族だけでは埋められない部分がある場合に限って公式情報を確認してください。
          </p>
          {selected.affiliateOfferIds.length > 0 ? (
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
          ) : (
            <p className="mt-4 rounded-md border border-card-border bg-card-bg p-4 text-sm leading-relaxed text-muted">
              この状況に直接対応する提携サービスは掲載していません。市区町村、地域包括支援センター、
              担当ケアマネ、医療機関など、現在の公的・専門窓口へ確認してください。
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
