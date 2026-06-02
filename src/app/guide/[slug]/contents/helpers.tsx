import type { ReactNode } from "react";

export function DecisionBox({
  title,
  points,
  note,
}: {
  title: string;
  points: string[];
  note?: string;
}) {
  return (
    <section className="rounded-xl border border-primary/30 bg-primary/5 p-5">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-sm text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {note && <p className="text-xs text-muted mt-3">{note}</p>}
    </section>
  );
}

export function KaigoActionBox({
  toolHref,
  toolLabel,
  boothHref,
  boothLabel,
  children,
}: {
  toolHref: string;
  toolLabel: string;
  boothHref: string;
  boothLabel: string;
  children: ReactNode;
}) {
  const trackedBoothHref = boothHref.includes("utm_source=")
    ? boothHref
    : `${boothHref}${boothHref.includes("?") ? "&" : "?"}utm_source=toshi-navi&utm_medium=guide&utm_campaign=kaigo-guide-action-box&utm_content=single_template`;
  const fullPackHref =
    "https://kaigo-okane.booth.pm/items/8383441?utm_source=toshi-navi&utm_medium=guide&utm_campaign=kaigo-guide-action-box&utm_content=full_pack";
  const showFullPack = !boothHref.includes("/8383441");

  return (
    <section className="rounded-xl border border-primary/25 bg-primary/5 p-5">
      <h2 className="text-lg font-bold mb-3">無料ツールで試し、必要ならテンプレに残す</h2>
      <div className="text-sm text-muted leading-relaxed mb-4">{children}</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/kaigo"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
        >
          関連テンプレを診断する
        </a>
        <a
          href={toolHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
        >
          {toolLabel}
        </a>
        <a
          href={trackedBoothHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-card-border px-5 py-2.5 text-sm font-bold transition-colors hover:bg-muted/10"
        >
          {boothLabel}
        </a>
        {showFullPack && (
          <a
            href={fullPackHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-card-border px-5 py-2.5 text-sm font-bold transition-colors hover:bg-muted/10"
          >
            フルパックを見る
          </a>
        )}
      </div>
    </section>
  );
}
