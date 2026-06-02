import { TrackedOfferLink } from "@/components/TrackedOfferLink";

type KaigoReferralCtaConfig = {
  offerId: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
};

const estateCleanoutCta: KaigoReferralCtaConfig = {
  offerId: "kaigo-estate-cleanout",
  eyebrow: "PR | 実家片付け・見積前準備",
  title: "片付けや生前整理の前に、残す物と処分する物を分ける",
  description:
    "重要書類、写真、通帳、保険書類を先に分けたうえで、必要な範囲だけ外部業者の対応条件を確認します。料金や対応範囲は公式情報で確認してください。",
  buttonText: "遺品整理110番の情報を確認する",
};

const seniorMonitoringCta: KaigoReferralCtaConfig = {
  offerId: "kaigo-senior-monitoring",
  eyebrow: "PR | 見守り体制の確認",
  title: "家族連絡だけで足りない部分を、見守りサービスで補えるか確認する",
  description:
    "安否確認の頻度、連絡順、家族が対応できない時間帯を決めてから、費用と契約条件を公式情報で確認します。安全や診断を保証するものではありません。",
  buttonText: "アイシルの公式情報を確認する",
};

const homeCareSupportCta: KaigoReferralCtaConfig = {
  offerId: "kaigo-home-care-support",
  eyebrow: "PR | 通院付き添い・自費介護",
  title: "介護保険だけで足りない付き添い・見守り時間を整理する",
  description:
    "通院付き添い、夜間の見守り、家族の休息時間など、家族内で不足しやすい場面を書き出してから、対応地域や費用を公式情報で確認します。",
  buttonText: "イチロウの公式情報を確認する",
};

const guideReferralCtas: Record<string, KaigoReferralCtaConfig> = {
  "parent-mail-notification-management": estateCleanoutCta,
  "parent-home-storage-location-map": estateCleanoutCta,
  "parent-belongings-name-label-carryout-management": estateCleanoutCta,
  "parent-photo-album-organization-record": estateCleanoutCta,
  "living-alone-parent-monitoring-cost-contact-system": seniorMonitoringCta,
  "parent-checkin-contact-log": seniorMonitoringCta,
  "care-manager-first-consultation-family-memo": homeCareSupportCta,
  "hospital-discharge-home-return-family-checklist": homeCareSupportCta,
  "parent-hospital-discharge-money": homeCareSupportCta,
};

export function getGuideReferralCta(slug: string): KaigoReferralCtaConfig | undefined {
  return guideReferralCtas[slug];
}

export function KaigoReferralCTA({
  cta,
  page,
  position = "guide_referral_cta",
}: {
  cta: KaigoReferralCtaConfig;
  page: string;
  position?: string;
}) {
  return (
    <section className="mt-8 rounded-lg border border-primary/25 bg-primary/5 p-5">
      <p className="text-xs font-bold text-primary">{cta.eyebrow}</p>
      <h2 className="mt-2 text-lg font-bold">{cta.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{cta.description}</p>
      <TrackedOfferLink
        offerId={cta.offerId}
        page={page}
        position={position}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
      >
        {cta.buttonText}
      </TrackedOfferLink>
    </section>
  );
}
