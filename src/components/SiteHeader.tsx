"use client";

import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";

interface SiteHeaderProps {
  locale: Locale;
  current?: "home" | "dictionary" | "meal-plan" | "substitutions" | "encyclopedia";
}

/**
 * v1.1 treatment per amendment §05:
 *  - Always-floating pill, no scroll-state logic
 *  - Brand glyph in sage/gold glass circle
 *  - Locale toggle as a small glass circle
 *  - 58px tall, inset 22px from page edges
 */
export function SiteHeader({ locale, current }: SiteHeaderProps) {
  const tr = t(locale);
  const isAr = locale === "ar";

  // Hreflang-correct home link per locale
  const home = isAr ? "/" : "/en/";
  const dict = isAr ? "/القاموس/" : "/en/dictionary/";
  const meal = isAr ? "/جدول-الوجبات/" : "/en/meal-plan/";
  const subs = isAr ? "/البدائل/" : "/en/substitutions/";
  const ency = isAr ? "/الموسوعة/" : "/en/encyclopedia/";

  const navItems = [
    { key: "home",          label: tr.nav_home,          href: home },
    { key: "dictionary",    label: tr.nav_dictionary,    href: dict },
    { key: "meal-plan",     label: tr.nav_meal_plan,     href: meal },
    { key: "substitutions", label: tr.nav_substitutions, href: subs },
    { key: "encyclopedia",  label: tr.nav_encyclopedia,  href: ency }
  ];

  const otherLocale = isAr ? "/en/" : "/";
  const otherLabel = isAr ? "EN" : "AR";

  return (
    <header
      className={clsx(
        "fixed top-[22px] z-50 h-[58px] flex items-center justify-between",
        "glass-base rounded-full",
        isAr ? "right-[22px] left-[22px]" : "left-[22px] right-[22px]",
        "px-[6px] md:px-[8px]"
      )}
      style={{ paddingInlineStart: 6, paddingInlineEnd: 22 }}
    >
      {/* Brand pill — glyph + wordmark */}
      <Link
        href={home}
        className={clsx(
          "flex items-center gap-[10px] rounded-full py-[6px]",
          isAr ? "pr-[6px] pl-[16px]" : "pl-[6px] pr-[16px]",
          "bg-gradient-to-br from-white/70 to-white/30",
          "border border-white/80"
        )}
        aria-label={tr.site_name}
      >
        <span
          className={clsx(
            "flex items-center justify-center w-[38px] h-[38px] rounded-full",
            "bg-gradient-to-br from-sage to-sage-deep",
            "text-gold-mist font-editorial text-[20px] font-bold",
            "shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.18)]"
          )}
        >
          {isAr ? "ط" : "T"}
        </span>
        <span className="font-display text-[22px] font-semibold text-sage-ink leading-none tracking-tight">
          {tr.site_name}
        </span>
      </Link>

      {/* Nav links — hidden on mobile, replaced by hamburger in future sprint */}
      <nav className="hidden md:flex gap-1 items-center">
        {navItems.map(item => (
          <Link
            key={item.key}
            href={item.href}
            className={clsx(
              "font-body text-[14px] px-4 py-2 rounded-full transition-colors font-medium",
              current === item.key
                ? "bg-sage/15 text-sage-deep font-semibold"
                : "text-ink-soft hover:bg-white/40"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Locale toggle */}
      <Link
        href={otherLocale}
        className={clsx(
          "flex items-center justify-center w-[38px] h-[38px] rounded-full",
          "bg-gradient-to-br from-white/85 to-white/50 border border-white/90",
          "font-body text-[11px] font-bold text-ink-soft tracking-wider",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(71,89,58,0.08)]"
        )}
        aria-label={`Switch to ${otherLabel}`}
      >
        {otherLabel}
      </Link>
    </header>
  );
}
