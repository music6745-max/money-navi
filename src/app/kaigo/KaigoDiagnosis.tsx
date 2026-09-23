"use client";

import { useState } from "react";
import { kaigoSituations } from "@/lib/kaigoProducts";
import { trackEvent } from "@/lib/tracking";

const supportContacts = [
  {
    title: "地域包括支援センター",
    description: "相談先に迷うときや、介護サービスをまだ利用していないときに、親が住む地域の制度や支援先を確認します。",
  },
  {
    title: "市区町村の介護窓口",
    description: "要介護認定、介護保険、申請書類、自治体独自の高齢者支援について確認します。",
  },
  {
    title: "担当ケアマネ・利用中の事業所",
    description: "ケアプラン、サービスの変更・追加、利用調整、福祉用具や家族負担について相談します。",
  },
  {
    title: "医療機関・薬局など",
    description: "体調の変化、受診、服薬、退院後の生活は、かかりつけ医、病院の相談窓口、薬局などへ確認します。",
  },
];

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
          <h4 className="text-lg font-bold">相談・確認先</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            上の項目と質問をメモして、内容に合う公的・専門窓口へ相談してください。どこへ相談するか迷う場合は、地域包括支援センターか市区町村の介護窓口が入口になります。
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {supportContacts.map((contact) => (
              <article key={contact.title} className="rounded-md border border-card-border bg-card-bg p-4">
                <h3 className="text-sm font-bold">{contact.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{contact.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
