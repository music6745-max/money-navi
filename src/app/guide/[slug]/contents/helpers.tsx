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
  return (
    <section className="rounded-xl border border-primary/25 bg-primary/5 p-5">
      <h2 className="text-lg font-bold mb-3">?????????????</h2>
      <div className="text-sm text-muted leading-relaxed mb-4">{children}</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/kaigo"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
        >
          ?????????????
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
          href={boothHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-card-border px-5 py-2.5 text-sm font-bold transition-colors hover:bg-muted/10"
        >
          {boothLabel}
        </a>
      </div>
    </section>
  );
}
