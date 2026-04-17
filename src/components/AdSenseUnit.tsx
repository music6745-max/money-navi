"use client";

import { useEffect } from "react";

interface AdSenseUnitProps {
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSenseUnit({ slot, format = "auto", className = "" }: AdSenseUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6483317297217533"
        data-ad-slot={slot || "auto"}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
