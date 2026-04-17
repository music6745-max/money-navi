import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `お問い合わせ｜${siteConfig.name}`,
  description: `${siteConfig.name}へのお問い合わせフォーム。サイトへのご意見・掲載依頼・取材のご相談等はこちらから。`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>お問い合わせ</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          {siteConfig.name}に関するご意見・ご要望、掲載依頼、取材のご相談等は、下記フォームよりお寄せください。内容を確認のうえ、数日以内にご返信いたします。
        </p>
        <form
          action="https://formsubmit.co/music6745@gmail.com"
          method="POST"
          className="space-y-4 bg-card-bg border border-card-border rounded-xl p-6"
        >
          <input type="hidden" name="_subject" value="マネーナビJPへのお問い合わせ" />
          <input type="hidden" name="_captcha" value="true" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">件名</label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
          >
            送信する
          </button>
        </form>
        <p className="text-xs text-muted">
          ※ お問い合わせいただいた個人情報は、<Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>に基づき適切に取り扱います。
        </p>
      </div>
    </div>
  );
}
