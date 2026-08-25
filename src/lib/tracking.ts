// Unified affiliate/CTA click tracking for GA4.
// Works as a no-op if gtag isn't loaded, so it's safe to use in any component.

import { getOffer, offers } from "@/lib/offers";
import type { Offer } from "@/lib/offers";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

type TrackedClickEventName =
  | "affiliate_click"
  | "outbound_click"
  | "internal_referral_click";

const SITE_ORIGIN = "https://toshi-navi.jp";
const SISTER_SITE_HOSTS = new Set(["net-toolbox.jp", "ai-tools-navi.jp"]);

/**
 * Fire a GA4 event. Falls back to dataLayer push if gtag isn't present.
 * Safe to call during SSR (no-op).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) {
      window.gtag("event", name, { ...getInboundUtm(), ...params });
    } else if (window.dataLayer) {
      window.dataLayer.push({ event: name, ...getInboundUtm(), ...params });
    }
  } catch {
    // Swallow - tracking must never break UX.
  }
}

/**
 * Extract the ASP/affiliate provider from a URL, so we can group events.
 */
export function providerFromUrl(url: string): string {
  if (!url) return "unknown";
  const u = url.toLowerCase();
  if (u.includes("px.a8.net")) return "a8net";
  if (u.includes("af.moshimo.com")) return "moshimo";
  if (u.includes("hb.afl.rakuten.co.jp") || u.includes("rakuten.co.jp")) return "rakuten";
  if (u.includes("valuecommerce") || u.includes("vc.aforest.jp")) return "valuecommerce";
  if (u.includes("sbisec.co.jp")) return "sbi-direct";
  if (u.includes("rakuten-sec.co.jp")) return "rakuten-sec-direct";
  if (u.includes("monex.co.jp")) return "monex-direct";
  return "other";
}

/**
 * クロスドメイン流入検知: 到達時点のURLに含まれる utm_* を sessionStorage に保存し、
 * 以降の affiliate_click 等に自動付与する。
 *
 * 使用例:
 *   - /guide/invoice-system-complete-guide?utm_source=net-toolbox&utm_medium=referral
 *     → sessionStorage に { utm_source: "net-toolbox", utm_medium: "referral" } を保存
 *   - 同セッション内の /guide/... で affiliate_click 発火時、
 *     utm_source を付けて送信するので「toolbox からの誘導→税理士CTA」が追える。
 */
const UTM_KEY = "tn_utm";
const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function captureInboundUtm(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const captured: Record<string, string> = {};
    UTM_FIELDS.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) captured[k] = v;
    });
    if (Object.keys(captured).length > 0) {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(captured));
    }
  } catch {
    // ignore
  }
}

export function getInboundUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

function offerIdFromGoHref(href: string): string | undefined {
  try {
    const path = href.startsWith("http") ? new URL(href).pathname : href;
    const match = path.match(/^\/go\/([^/?#]+)/);
    return match ? decodeURIComponent(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

function normalizedUrlKey(href: string): string | undefined {
  try {
    const url = new URL(href, SITE_ORIGIN);
    url.hash = "";
    url.search = "";
    const pathname = url.pathname.replace(/\/$/, "") || "/";
    return `${url.origin.toLowerCase()}${pathname.toLowerCase()}`;
  } catch {
    return undefined;
  }
}

function findOfferByHref(href: string): Offer | undefined {
  const exactMatch = offers.find(
    (offer) => offer.affiliate_url === href || offer.official_url === href
  );
  if (exactMatch) return exactMatch;

  // ASP URLs often share the same host/path and differ only in query parameters.
  // Ignoring the query would attribute every such click to the first offer in the
  // master list, so unknown ASP URLs must remain explicitly unmapped.
  const provider = providerFromUrl(href);
  if (["a8net", "moshimo", "valuecommerce", "rakuten"].includes(provider)) {
    return undefined;
  }

  const hrefKey = normalizedUrlKey(href);
  return offers.find((offer) => {
    if (!hrefKey) return false;
    return [offer.affiliate_url, offer.official_url].some((url) => normalizedUrlKey(url) === hrefKey);
  });
}

function resolveOfferFromHref(href: string, offerId?: string): Offer | undefined {
  const id = offerId ?? offerIdFromGoHref(href);
  if (id) return getOffer(id);
  return findOfferByHref(href);
}

function fallbackOfferIdFromUrl(href: string): string | undefined {
  try {
    const url = new URL(href, SITE_ORIGIN);
    const provider = providerFromUrl(url.href);
    if (provider === "a8net") {
      const a8mat = url.searchParams.get("a8mat");
      return a8mat ? `a8mat_${a8mat.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}` : "unmapped_a8net";
    }
    if (provider === "moshimo") return "unmapped_moshimo";
    if (provider === "valuecommerce") return "unmapped_valuecommerce";
    if (provider === "rakuten") return "unmapped_rakuten";
    return undefined;
  } catch {
    return undefined;
  }
}

function hostnameFromHref(href: string): string | undefined {
  try {
    return new URL(href, SITE_ORIGIN).hostname.toLowerCase();
  } catch {
    return undefined;
  }
}

function isKnownAffiliateUrl(href: string): boolean {
  const hostname = hostnameFromHref(href);
  if (!hostname) return false;
  return (
    hostname === "px.a8.net" ||
    hostname === "af.moshimo.com" ||
    hostname === "hb.afl.rakuten.co.jp" ||
    hostname === "vc.aforest.jp" ||
    hostname.endsWith(".vc.aforest.jp") ||
    hostname.includes("valuecommerce")
  );
}

function classifyTrackedClick(
  href: string,
  offer: Offer | undefined
): TrackedClickEventName | null {
  const goOfferId = offerIdFromGoHref(href);
  if (goOfferId) {
    return offer?.status === "active" ? "affiliate_click" : null;
  }

  const hostname = hostnameFromHref(href);
  if (!hostname) return null;
  if (SISTER_SITE_HOSTS.has(hostname)) return "internal_referral_click";
  if (hostname === "toshi-navi.jp" || hostname === "www.toshi-navi.jp") return null;

  const isActiveOfferDestination =
    offer?.status === "active" &&
    offer.provider !== "direct" &&
    offer.affiliate_url === href;
  if (isActiveOfferDestination || isKnownAffiliateUrl(href)) {
    return "affiliate_click";
  }
  return "outbound_click";
}

/**
 * Common handler for CTA click events.
 * Only active/recognizable revenue links become `affiliate_click`.
 * Official external links and sister-site referrals use separate events so
 * they never inflate the monetized-click denominator.
 * Attach to <a onClick={onAffiliateClick(...)}>.
 */
export function onAffiliateClick(params: {
  page?: string;
  position?: string;
  service?: string;
  offerId?: string;
  href: string;
}) {
  return () => {
    const offer = resolveOfferFromHref(params.href, params.offerId);
    const eventName = classifyTrackedClick(params.href, offer);
    if (!eventName) return;

    const isOfferRedirect = Boolean(offerIdFromGoHref(params.href));
    const trackedUrl =
      eventName === "affiliate_click" && isOfferRedirect && offer
        ? offer.affiliate_url
        : params.href;
    const provider = providerFromUrl(trackedUrl);
    trackEvent(eventName, {
      page: params.page,
      position: params.position,
      service: offer?.service ?? params.service,
      offer_id: offer?.id ?? fallbackOfferIdFromUrl(params.href),
      provider,
      status: offer?.status,
      destination: hostnameFromHref(params.href),
      url: trackedUrl.slice(0, 200),
    });
  };
}
