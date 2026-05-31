import type { ReactNode } from "react";
import Link from "next/link";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

const supplementalTemplates = [
  {
    id: "p60",
    title: "高齢親と暮らすペットのお世話控えメモ",
    description:
      "ごはん・水・散歩・トイレ・用品の置き場所を、家族内の引き継ぎメモとして整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383160?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p60",
    guidePath: "/guide/parent-pet-care-routine-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-pet-care-routine-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p60_tool",
  },
  {
    id: "p59",
    title: "実家の窓・カーテン・網戸サイズ控えメモ",
    description:
      "帰省時に測った窓まわりのサイズ、測定日、次に確認することを家族で見返しやすく整理できます。",
    boothUrl:
      "https://kaigo-okane.booth.pm/items/8383082?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59",
    guidePath: "/guide/parent-window-curtain-screen-size-record",
    toolUrl:
      "https://net-toolbox.jp/tools/kaigo-parent-window-curtain-screen-size-memo?utm_source=toshi-navi&utm_medium=hub&utm_campaign=kaigo_hub&utm_content=p59_tool",
  },
];

export default function KaigoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <section className="mx-auto mb-10 max-w-6xl px-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="mb-2 text-xs font-bold text-primary">新着テンプレート</p>
          <h2 className="mb-2 text-lg font-bold">家族で見返す小さな控えメモ</h2>
          <p className="mb-4 text-sm leading-7 text-muted">
            介護や実家の整理で後回しになりやすい生活まわりの情報を、判断ではなく家族内の引き継ぎメモとして残せるテンプレートです。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {supplementalTemplates.map((item) => (
              <article key={item.id} className="rounded-lg border border-primary/15 bg-white p-4">
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <TrackedExternalLink
                    href={item.boothUrl}
                    eventName="booth_click"
                    page="kaigo"
                    position="supplemental_new_template"
                    itemId={item.id}
                    className="rounded-md bg-primary px-3 py-2 text-sm font-bold text-white hover:opacity-90"
                  >
                    BOOTHで見る
                  </TrackedExternalLink>
                  <Link
                    href={item.guidePath}
                    className="rounded-md border border-primary/30 px-3 py-2 text-sm font-bold text-primary hover:border-primary"
                  >
                    作り方を読む
                  </Link>
                  <a
                    href={item.toolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-primary/30 px-3 py-2 text-sm font-bold text-primary hover:border-primary"
                  >
                    無料メモを使う
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
