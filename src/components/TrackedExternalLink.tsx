"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent(eventName, {
          page,
          position,
          item_id: itemId,
          url: href.slice(0, 200),
        })
      }
    >
      {children}
    </a>
  );
}
