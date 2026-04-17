import Link from "next/link";
import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VerdictBadge } from "@/components/VerdictBadge";
import { FOODS } from "@/lib/foods";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function DictionaryList({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isAr = locale === "ar";

  // Group by first letter of locale-appropriate name
  const groups = new Map<string, typeof FOODS>();
  const sorted = [...FOODS].sort((a, b) => {
    const an = isAr ? a.name_ar : a.name_en;
    const bn = isAr ? b.name_ar : b.name_en;
    return an.localeCompare(bn, locale);
  });

  for (const food of sorted) {
    const name = isAr ? food.name_ar : food.name_en;
    const letter = (isAr ? name.replace(/^(ال)?/, "") : name)[0]?.toUpperCase() ?? "#";
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(food);
  }

  return (
    <>
      <SiteHeader locale={locale} current="dictionary" />
      <main className="pt-[110px] pb-16">
        <div className="max-w-[980px] mx-auto px-6">
          <header className="mb-10">
            <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-3">
              {isAr ? "قاموس نظام الطيبات" : "Tayyibat Dictionary"}
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] font-medium text-ink leading-[1.15] tracking-tight mb-4">
              {isAr
                ? "كل طعام بنعرفه، موثّق."
                : "Every food we know, documented."}
            </h1>
            <p className="font-editorial text-[17px] text-ink-soft leading-[1.75] max-w-2xl">
              {isAr
                ? "قاموس ينمو بمرور الوقت. ابحث عن أي طعام لتعرف إذا كان من الطيبات، البدائل المسموحة، والسياق اللغوي والتاريخي."
                : "A dictionary that grows over time. Search any food to learn if it is from the Tayyibat, its substitutions, and its linguistic and historical context."}
            </p>
          </header>

          {[...groups.entries()].map(([letter, foods]) => (
            <section key={letter} className="mb-10">
              <h2
                className="font-display text-[32px] font-semibold text-sage-deep mb-4 pb-2 border-b"
                style={{ borderColor: "rgba(198, 151, 73, 0.3)" }}
              >
                {letter}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {foods.map(food => {
                  const slug = encodeURIComponent(food.slug);
                  const href = isAr ? `/القاموس/${slug}/` : `/en/dictionary/${slug}/`;
                  return (
                    <li key={food.id}>
                      <Link
                        href={href}
                        className="flex items-center justify-between gap-4 p-4 rounded-[10px] bg-white/60 border border-cream-deep/60 hover:border-sage-soft hover:bg-white transition-all"
                      >
                        <div className={clsx("flex flex-col", isAr ? "text-right" : "text-left")}>
                          <span className="font-display text-[22px] font-semibold text-ink leading-tight">
                            {isAr ? food.name_ar : food.name_en}
                          </span>
                          <span className="font-body text-[11px] text-ink-muted uppercase tracking-wider">
                            {isAr ? food.name_en : food.name_ar}
                          </span>
                        </div>
                        <VerdictBadge verdict={food.verdict} locale={locale} size="sm" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
