import Link from "next/link";
import clsx from "clsx";
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LookupSearch } from "@/components/LookupSearch";
import { Chip } from "@/components/Chip";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getFeaturedFoods } from "@/lib/foods";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function Homepage({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isAr = locale === "ar";
  const featured = getFeaturedFoods();

  return (
    <>
      <SiteHeader locale={locale} current="home" />

      <main>
        {/* ═════ HERO · mesh bg + grain + lookup ═════ */}
        <section className="mesh-bg grain relative min-h-[820px] overflow-hidden">
          {/* spacer for fixed header */}
          <div className="h-[150px]" aria-hidden />

          <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center">
            {/* Opener pill — glass-gold with pulsing dot */}
            <div
              className="inline-flex items-center gap-[10px] px-[18px] py-[8px] mb-7 rounded-full"
              style={{
                background: "rgba(245, 228, 188, 0.42)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "0.5px solid rgba(245, 228, 188, 0.9)",
                boxShadow: "0 4px 14px rgba(155, 111, 36, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)"
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full bg-gold-leaf"
                style={{ boxShadow: "0 0 8px var(--gold-leaf)" }}
              />
              <span className="font-editorial text-[13px] font-bold text-gold-deep tracking-[0.06em]">
                {tr.tagline} · {tr.site_name}
              </span>
            </div>

            <h1 className="font-display text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight text-ink mb-5">
              {tr.hero_headline_1}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--sage-deep) 0%, var(--gold-deep) 100%)",
                  WebkitBackgroundClip: "text"
                }}
              >
                {tr.hero_headline_2}
              </span>
            </h1>

            <p className="font-editorial text-[16px] md:text-[18px] text-ink-soft leading-[1.6] max-w-[540px] mx-auto mb-9">
              {tr.hero_sub}
            </p>

            <Suspense fallback={<div className="h-[76px] max-w-[640px] mx-auto rounded-full glass-base" />}>
              <LookupSearch locale={locale} autofocus />
            </Suspense>

            {/* Suggested chips */}
            <div className={clsx(
              "flex gap-[10px] justify-center flex-wrap mt-5",
              isAr ? "flex-row-reverse" : ""
            )}>
              {featured.slice(0, 5).map(food => (
                <Chip
                  key={food.id}
                  variant={food.verdict === "allowed" ? "allowed" : food.verdict === "forbidden" ? "forbidden" : "neutral"}
                >
                  {isAr ? food.name_ar : food.name_en}
                  {food.verdict === "allowed" && " ✓"}
                </Chip>
              ))}
            </div>
          </div>

          {/* bottom padding so mesh blobs have space */}
          <div className="h-[120px]" aria-hidden />
        </section>

        {/* ═════ SECONDARY SURFACES · 2-column ═════ */}
        <section className="max-w-[1280px] mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">

          {/* Meal-of-the-day */}
          <div className="relative min-h-[360px] rounded-[20px] overflow-hidden bg-cream-warm p-8 grain">
            <div
              className="absolute inset-0 z-0 opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, var(--sage-soft) 0%, transparent 55%), radial-gradient(circle at 20% 90%, var(--gold-mist) 0%, transparent 60%)"
              }}
            />
            <div className="relative z-10 h-full flex flex-col">
              <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-2">
                {tr.today_in_tayyibat}
              </p>
              <h2 className="font-display text-[32px] md:text-[38px] font-medium text-ink leading-tight mb-2">
                {isAr ? "جمعة من الأرض" : "Friday from the Earth"}
              </h2>
              <p className="font-editorial text-[14px] text-ink-muted mb-6">
                {isAr ? "الجمعة ١٧ أبريل" : "Friday, April 17"}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="glass-base rounded-[16px] p-4">
                  <p className="font-body text-[11px] tracking-[0.12em] uppercase text-sage-deep font-semibold mb-1">
                    {tr.breakfast}
                  </p>
                  <p className="font-display text-[18px] md:text-[20px] text-ink font-medium leading-tight">
                    {isAr ? "شوفان بالتمر واللوز" : "Oats with dates & almonds"}
                  </p>
                </div>
                <div className="glass-base rounded-[16px] p-4">
                  <p className="font-body text-[11px] tracking-[0.12em] uppercase text-sage-deep font-semibold mb-1">
                    {tr.lunch}
                  </p>
                  <p className="font-display text-[18px] md:text-[20px] text-ink font-medium leading-tight">
                    {isAr ? "عدس بالأرز البني" : "Lentils with brown rice"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community callout */}
          <div
            className="relative min-h-[360px] rounded-[20px] overflow-hidden p-8 text-cream isolate"
            style={{
              background: "linear-gradient(135deg, var(--sage-deep) 0%, var(--sage-ink) 100%)"
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(circle at 85% 85%, rgba(212, 168, 74, 0.35) 0%, transparent 55%), radial-gradient(circle at 15% 15%, rgba(184, 201, 156, 0.25) 0%, transparent 55%)"
              }}
            />
            <div className="relative z-10 h-full flex flex-col">
              <p className="font-body text-[11px] font-semibold text-gold-leaf tracking-[0.22em] uppercase mb-3">
                {isAr ? "المجتمع" : "The Community"}
              </p>
              <p
                className="font-display text-[64px] md:text-[84px] font-medium leading-none bg-clip-text text-transparent mb-1 tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--gold-mist) 0%, var(--gold-leaf) 100%)",
                  WebkitBackgroundClip: "text"
                }}
              >
                {isAr ? "٢ مليون" : "2M"}
              </p>
              <p className="font-editorial text-[16px] md:text-[18px] text-cream/85 mb-6 leading-[1.5]">
                {tr.community_label}<br />{tr.community_subline}
              </p>

              <NewsletterForm locale={locale} />
            </div>
          </div>
        </section>

        {/* ═════ DICTIONARY PREVIEW ═════ */}
        <section className="max-w-[1280px] mx-auto px-6 mt-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-[30px] md:text-[36px] font-medium text-ink tracking-tight">
              {tr.nav_dictionary}
            </h2>
            <Link
              href={isAr ? "/القاموس/" : "/en/dictionary/"}
              className="font-body text-[14px] text-sage-deep font-semibold hover:text-sage-ink"
            >
              {isAr ? "تصفّح القاموس كاملاً ←" : "Browse the full dictionary →"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.slice(0, 3).map(food => {
              const slug = encodeURIComponent(food.slug);
              const href = isAr ? `/القاموس/${slug}/` : `/en/dictionary/${slug}/`;
              return (
                <Link
                  key={food.id}
                  href={href}
                  className="group block relative p-6 rounded-[12px] bg-gradient-to-b from-white to-cream-warm/40 border border-cream-deep/60 hover:border-sage-soft transition-all shadow-sm hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-4 right-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to left, transparent, ${food.verdict === "forbidden" ? "var(--verdict-forbidden)" : food.verdict === "allowed" ? "var(--sage)" : "var(--gold)"} 50%, transparent)`
                    }}
                  />
                  <h3 className="font-display text-[26px] font-semibold text-ink mb-1 leading-tight tracking-tight">
                    {isAr ? food.name_ar : food.name_en}
                  </h3>
                  <p className="font-body text-[11px] text-ink-muted uppercase tracking-[0.1em] mb-4">
                    {isAr ? food.name_en : food.name_ar}
                  </p>
                  <p className="font-editorial text-[14px] text-ink-soft leading-[1.7] line-clamp-3">
                    {isAr ? food.reasoning_ar : food.reasoning_en}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
