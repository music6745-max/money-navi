"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

function withKaigoBoothUtm(href: string, page?: string, position?: string, itemId?: string): string {
  if (!href.startsWith("https://kaigo-okane.booth.pm/")) {
    return href;
  }

  try {
    const url = new URL(href);
    const medium = page === "kaigo" ? "hub" : page === "guide" ? "guide" : "site";
    const campaign = page === "kaigo" ? "kaigo_hub" : page || "tracked_external_link";
    const content = itemId || position || "booth_link";

    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", "toshi-navi");
    }
    if (!url.searchParams.has("utm_medium")) {
      url.searchParams.set("utm_medium", medium);
    }
    if (!url.searchParams.has("utm_campaign")) {
      url.searchParams.set("utm_campaign", campaign);
    }
    if (!url.searchParams.has("utm_content")) {
      url.searchParams.set("utm_content", content);
    }

    return url.toString();
  } catch {
    return href;
  }
}

export function TrackedExternalLink({
  href,
  eventName,
  page,
  position,
  itemId,
  className,
  children,
}: {
  href: string;
  eventName: string;
  page?: string;
  position?: string;
  itemId?: string;
  className?: string;
  children: ReactNode;
}) {
  const trackedHref = withKaigoBoothUtm(href, page, position, itemId);

  return (
    <a
      href={trackedHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent(eventName, {
          page,
          position,
          item_id: itemId,
          url: trackedHref.slice(0, 200),
        })
      }
    >
      {children}
    </a>
  );
}
