import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { VerdictBadge } from "@/components/VerdictBadge";
import { FOODS } from "@/lib/foods";

export const metadata: Metadata = {
  title: "البدائل · الطيبات",
  description: "لكل طعام ممنوع، بديل من الطيبات. دليل البدائل المعتمد.",
  alternates: {
    canonical: "https://tayyibatfood.com/البدائل/",
    languages: {
      ar: "https://tayyibatfood.com/البدائل/",
      en: "https://tayyibatfood.com/en/substitutions/"
    }
  }
};

export default function Page() {
  const forbidden = FOODS.filter(f => f.verdict === "forbidden" && f.substitutions && f.substitutions.length > 0);

  return (
    <SimplePage
      locale="ar"
      current="substitutions"
      eyebrow="البدائل"
      title="لكل طعام ممنوع، بديل."
      subtitle="لا تفكير في المحروم — بل في ما يحلّ محلّه. دليل البدائل المعتمدة في نظام الطيبات."
    >
      <div className="space-y-6">
        {forbidden.map(food => (
          <article key={food.id} className="p-6 rounded-[12px] bg-gradient-to-b from-white to-cream-warm/40 border border-cream-deep/60">
            <header className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-cream-deep/60">
              <div>
                <Link href={`/القاموس/${encodeURIComponent(food.slug)}/`} className="font-display text-[26px] font-semibold text-ink hover:text-sage-deep">
                  {food.name_ar}
                </Link>
                <p className="font-body text-[11px] text-ink-muted uppercase tracking-wider mt-1">{food.name_en}</p>
              </div>
              <VerdictBadge verdict="forbidden" locale="ar" size="sm" />
            </header>
            <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-3">البدائل</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {food.substitutions!.map(sub => (
                <Link key={sub.id} href={`/القاموس/${encodeURIComponent(sub.id)}/`} className="block p-3 rounded-lg bg-sage-mist/50 border border-sage-soft/50 hover:border-sage transition-colors">
                  <span className="font-display text-[20px] font-semibold text-sage-deep">{sub.name_ar}</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
