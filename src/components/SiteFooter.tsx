import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isAr = locale === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 py-12 border-t border-cream-deep/60 bg-cream-warm/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Disclaimer — verbatim */}
        <p className="font-editorial text-[15px] leading-[1.85] text-ink-muted max-w-3xl mx-auto text-center mb-8">
          {tr.disclaimer}
        </p>

        {/* Site map */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 text-[13px] font-body">
          <Link href={isAr ? "/عن-الموقع/" : "/en/about/"}   className="text-ink-soft hover:text-sage-deep">{tr.footer_about}</Link>
          <Link href={isAr ? "/السجل/"      : "/en/archive/"} className="text-ink-soft hover:text-sage-deep">{tr.footer_archive}</Link>
          <Link href={isAr ? "/الخصوصية/"    : "/en/privacy/"} className="text-ink-soft hover:text-sage-deep">{tr.footer_privacy}</Link>
          <Link href={isAr ? "/en/" : "/"}                    className="text-ink-soft hover:text-sage-deep">{isAr ? "English" : "العربية"}</Link>
        </nav>

        <p className="text-center font-body text-[12px] text-ink-muted">
          © {year} · {tr.site_name} · {tr.footer_rights}
        </p>
      </div>
    </footer>
  );
}
