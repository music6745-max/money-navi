import type { ReactNode } from "react";
import Link from "next/link";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

const p59BoothUrl =
  "https://kaigo-okane.booth.pm/items/8383082?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59";

export default function KaigoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <section className="mx-auto mb-10 max-w-6xl px-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="mb-2 text-xs font-bold text-primary">新着テンプレート</p>
          <h2 className="mb-2 text-lg font-bold">実家 窓・カーテン・網戸サイズ控えメモ</h2>
          <p className="mb-4 text-sm leading-7 text-muted">
            帰省時に測った窓まわりのサイズ、測定日、次に確認することを家族内で見返しやすく整理します。
          </p>
          <div className="flex flex-wrap gap-3">
            <TrackedExternalLink
              href={p59BoothUrl}
              eventName="booth_click"
              page="kaigo"
              position="supplemental_new_template"
              itemId="p59"
              className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
            >
              BOOTHで見る
            </TrackedExternalLink>
            <Link
              href="/guide/parent-window-curtain-screen-size-record"
              className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
            >
              作り方を読む
            </Link>
            <a
              href="https://net-toolbox.jp/tools/kaigo-parent-window-curtain-screen-size-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59_tool"
              className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
            >
              無料メモを使う
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
