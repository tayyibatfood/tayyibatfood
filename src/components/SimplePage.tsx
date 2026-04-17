import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/lib/types";
import type { ReactNode } from "react";

interface SimplePageProps {
  locale: Locale;
  current?: "home" | "dictionary" | "meal-plan" | "substitutions" | "encyclopedia";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SimplePage({ locale, current, eyebrow, title, subtitle, children }: SimplePageProps) {
  return (
    <>
      <SiteHeader locale={locale} current={current} />
      <main className="pt-[110px] pb-16">
        <div className="max-w-[780px] mx-auto px-6">
          <header className="mb-10">
            {eyebrow && (
              <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-[40px] md:text-[56px] font-medium text-ink leading-[1.15] tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="font-editorial text-[17px] text-ink-soft leading-[1.75] max-w-2xl">
                {subtitle}
              </p>
            )}
          </header>
          {children}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
