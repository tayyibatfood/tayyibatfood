"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { VerdictBadge } from "@/components/VerdictBadge";
import { FOODS } from "@/lib/foods";

export default function Page() {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    return () => {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    };
  }, []);

  const forbidden = FOODS.filter(f => f.verdict === "forbidden" && f.substitutions && f.substitutions.length > 0);

  return (
    <SimplePage
      locale="en"
      current="substitutions"
      eyebrow="Substitutions"
      title="For every restricted food, a better alternative."
      subtitle="Don't dwell on what's excluded — focus on what replaces it. The Tayyibat substitution guide."
    >
      <div className="space-y-6">
        {forbidden.map(food => (
          <article key={food.id} className="p-6 rounded-[12px] bg-gradient-to-b from-white to-cream-warm/40 border border-cream-deep/60">
            <header className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-cream-deep/60">
              <div>
                <Link href={`/en/dictionary/${encodeURIComponent(food.slug)}/`} className="font-display text-[26px] font-semibold text-ink hover:text-sage-deep">
                  {food.name_en}
                </Link>
                <p className="font-body text-[11px] text-ink-muted uppercase tracking-wider mt-1">{food.name_ar}</p>
              </div>
              <VerdictBadge verdict="forbidden" locale="en" size="sm" />
            </header>
            <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-3">Substitutions</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {food.substitutions!.map(sub => (
                <Link key={sub.id} href={`/en/dictionary/${encodeURIComponent(sub.id)}/`} className="block p-3 rounded-lg bg-sage-mist/50 border border-sage-soft/50 hover:border-sage transition-colors">
                  <span className="font-display text-[20px] font-semibold text-sage-deep">{sub.name_en}</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
