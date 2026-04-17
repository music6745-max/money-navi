"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { guides } from "@/lib/guides";

export function ToolSearch() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"all" | "tool" | "guide">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { tools: [], guides: [] };
    const matchedTools = tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.slug.includes(q)
    );
    const matchedGuides = guides.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.slug.includes(q)
    );
    return { tools: matchedTools, guides: matchedGuides };
  }, [query]);

  const showTools = tab !== "guide";
  const showGuides = tab !== "tool";

  return (
    <div className="mb-8">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="NISA / iDeCo / 副業 / 節税 などで検索..."
        className="w-full px-5 py-3 rounded-xl border border-card-border bg-card-bg focus:outline-none focus:border-primary transition-colors"
      />
      {query && (
        <div className="mt-4">
          <div className="flex gap-2 mb-3 text-sm">
            {(["all", "tool", "guide"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-full border transition-colors ${
                  tab === t
                    ? "bg-primary text-white border-primary"
                    : "border-card-border hover:border-primary/40"
                }`}
              >
                {t === "all" ? "すべて" : t === "tool" ? "ツール" : "ガイド"}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {showTools && results.tools.length > 0 && (
              <div>
                <p className="text-xs text-muted mb-2">ツール ({results.tools.length}件)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.tools.slice(0, 8).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="block p-3 rounded-lg border border-card-border bg-card-bg hover:border-primary/40 transition"
                    >
                      <div className="flex items-center gap-2">
                        <span>{tool.icon}</span>
                        <span className="font-medium text-sm">{tool.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {showGuides && results.guides.length > 0 && (
              <div>
                <p className="text-xs text-muted mb-2">ガイド ({results.guides.length}件)</p>
                <div className="space-y-2">
                  {results.guides.slice(0, 6).map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guide/${guide.slug}`}
                      className="block p-3 rounded-lg border border-card-border bg-card-bg hover:border-primary/40 transition"
                    >
                      <div className="flex items-center gap-2">
                        <span>{guide.icon}</span>
                        <span className="font-medium text-sm">{guide.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {results.tools.length === 0 && results.guides.length === 0 && (
              <p className="text-sm text-muted">該当するコンテンツが見つかりませんでした。</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
