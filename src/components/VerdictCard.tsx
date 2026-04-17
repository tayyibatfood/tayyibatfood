import Link from "next/link";
import clsx from "clsx";
import type { FoodEntry, Locale } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { VerdictBadge } from "./VerdictBadge";
import { getRelatedFoods } from "@/lib/foods";
import { t } from "@/lib/i18n";

interface VerdictCardProps {
  food: FoodEntry;
  locale: Locale;
}

export function VerdictCard({ food, locale }: VerdictCardProps) {
  const isAr = locale === "ar";
  const tr = t(locale);
  const related = getRelatedFoods(food);

  return (
    <article className="relative mx-auto max-w-[680px] px-6 py-8">
      {/* 2px ottoman accent bar across top — amendment §05 */}
      <span
        aria-hidden
        className="absolute top-0 left-8 right-8 h-[2px] rounded-b-sm"
        style={{
          background: "linear-gradient(to left, transparent, var(--verdict-forbidden) 50%, transparent)"
        }}
      />

      {/* Header · title + verdict */}
      <div className="flex items-start justify-between gap-5 mb-6">
        <div>
          <h1 className="font-display text-[56px] md:text-[56px] font-semibold text-ink leading-[1.1] tracking-tight">
            {isAr ? food.name_ar : food.name_en}
          </h1>
          <p className="mt-2 font-body text-[12px] text-ink-muted uppercase tracking-[0.12em]">
            {isAr ? food.name_en : food.name_ar}
          </p>
        </div>
        <VerdictBadge verdict={food.verdict} locale={locale} size="lg" className="flex-shrink-0 mt-3" />
      </div>

      {/* Reasoning · editorial */}
      <div className="editorial">
        <p>{isAr ? food.reasoning_ar : food.reasoning_en}</p>
      </div>

      {/* Linguistic note · pull quote in Markazi italic */}
      {food.linguistic_note_ar && isAr && (
        <blockquote
          className="my-8 ps-5 py-2 font-display italic text-[22px] text-ink-soft leading-[1.45]"
          style={{ borderInlineStart: "3px solid var(--gold-leaf)" }}
        >
          {food.linguistic_note_ar}
        </blockquote>
      )}

      {/* Substitutions · if forbidden */}
      {food.substitutions && food.substitutions.length > 0 && (
        <section className="mt-10">
          <h2 className="font-body text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-4">
            {tr.substitutions_label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {food.substitutions.map(sub => {
              const slug = encodeURIComponent(sub.id);
              const href = isAr ? `/القاموس/${slug}/` : `/en/dictionary/${slug}/`;
              return (
                <Link
                  key={sub.id}
                  href={href}
                  className={clsx(
                    "block p-4 rounded-lg bg-gradient-to-b from-white to-cream-warm/50",
                    "border border-sage-soft/50 hover:border-sage shadow-sm hover:shadow-md transition-all"
                  )}
                >
                  <span className="font-display text-[22px] font-semibold text-sage-deep">
                    {isAr ? sub.name_ar : sub.name_en}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Meta bar · category · last reviewed */}
      <section className="mt-12 pt-6 border-t border-sage/15 flex flex-wrap gap-6">
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-deep mb-1">
            {tr.category}
          </p>
          <p className="font-body text-[14px] text-ink font-medium">
            {CATEGORY_LABELS[food.category][locale]}
          </p>
        </div>
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-deep mb-1">
            {tr.last_reviewed}
          </p>
          <p className="font-body text-[14px] text-ink font-medium">
            {food.updated_at}
          </p>
        </div>
      </section>

      {/* Related · horizontal strip */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="font-body text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-4">
            {tr.related_foods}
          </h2>
          <div className="flex flex-wrap gap-3">
            {related.map(rel => {
              const slug = encodeURIComponent(rel.slug);
              const href = isAr ? `/القاموس/${slug}/` : `/en/dictionary/${slug}/`;
              return (
                <Link
                  key={rel.id}
                  href={href}
                  className={clsx(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                    "bg-white/60 border border-cream-deep hover:border-sage transition-colors",
                    "font-body text-[14px] text-ink-soft hover:text-ink"
                  )}
                >
                  <span className={clsx(
                    "w-2 h-2 rounded-full flex-shrink-0",
                    rel.verdict === "allowed" && "bg-sage",
                    rel.verdict === "forbidden" && "bg-verdict-forbidden",
                    rel.verdict === "review" && "bg-gold"
                  )} />
                  {isAr ? rel.name_ar : rel.name_en}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Schema.org · Article for SEO per brief §6.3 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: isAr ? food.name_ar : food.name_en,
            description: isAr ? food.reasoning_ar : food.reasoning_en,
            datePublished: food.updated_at,
            dateModified: food.updated_at,
            author: { "@type": "Organization", name: "فريق تحرير الطيبات" },
            publisher: { "@type": "Organization", name: "Tayyibat" },
            inLanguage: locale
          })
        }}
      />
    </article>
  );
}
