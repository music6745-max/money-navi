"use client";
import Link from "next/link";
import { onAffiliateClick } from "@/lib/tracking";

interface AffiliateCTAProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  external?: boolean;
  icon?: string;
  highlight?: string;
  /** The guide slug or page identifier, used for GA4 event grouping. */
  page?: string;
  /** Distinguishes multiple CTAs on the same guide in GA4. */
  position?: string;
}

export function AffiliateCTA({
  title,
  description,
  buttonText,
  href,
  external = true,
  icon = "💡",
  highlight,
  page,
  position = "affiliate_cta",
}: AffiliateCTAProps) {
  const link = external ? (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onAffiliateClick({ page, position, service: title, href })}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
    >
      {buttonText} →
    </a>
  ) : (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
    >
      {buttonText} →
    </Link>
  );

  return (
    <div className="my-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
      {highlight && (
        <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-xs font-bold mb-3">
          {highlight}
        </span>
      )}
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <p className="text-sm text-muted mb-4 leading-relaxed">{description}</p>
      {link}
    </div>
  );
}
