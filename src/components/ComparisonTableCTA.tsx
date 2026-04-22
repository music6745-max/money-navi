"use client";
import { onAffiliateClick } from "@/lib/tracking";

interface Service {
  name: string;
  highlight: string;
  features: string[];
  href: string;
  rank?: number;
  badge?: string;
}

interface ComparisonTableCTAProps {
  title: string;
  services: Service[];
  /** The guide slug or page identifier, used for GA4 event grouping. */
  page?: string;
}

export function ComparisonTableCTA({ title, services, page }: ComparisonTableCTAProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-3">
        {services.map((service, i) => (
          <div
            key={service.name}
            className="rounded-xl border border-card-border bg-card-bg p-5 hover:border-primary/40 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                {service.rank && (
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm text-white ${
                      service.rank === 1
                        ? "bg-yellow-500"
                        : service.rank === 2
                        ? "bg-gray-400"
                        : service.rank === 3
                        ? "bg-orange-500"
                        : "bg-primary"
                    }`}
                  >
                    {service.rank}
                  </span>
                )}
                <div>
                  <h4 className="font-bold text-lg">{service.name}</h4>
                  <p className="text-sm text-primary font-medium">{service.highlight}</p>
                </div>
              </div>
              {service.badge && (
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
                  {service.badge}
                </span>
              )}
            </div>
            <ul className="space-y-1 mb-4 text-sm">
              {service.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={service.href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={onAffiliateClick({
                page,
                position: `comparison_rank_${service.rank ?? i + 1}`,
                service: service.name,
                href: service.href,
              })}
              className="inline-block px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-colors"
            >
              公式サイトで詳細を見る →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
