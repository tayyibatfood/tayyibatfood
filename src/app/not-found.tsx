import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-cream">
      <p className="font-body text-[11px] font-semibold text-gold-deep tracking-[0.22em] uppercase mb-4">
        404
      </p>
      <h1 className="font-display text-[48px] md:text-[64px] font-medium text-ink leading-tight mb-4">
        الصفحة غير موجودة
      </h1>
      <p className="font-editorial text-[16px] text-ink-soft max-w-md mb-8 leading-relaxed">
        لم نجد الصفحة التي تبحث عنها. ربما تم نقلها، أو لم تُنشأ بعد.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-sage to-sage-deep text-cream font-body font-medium border border-white/20 shadow-md hover:shadow-lg transition-shadow"
      >
        العودة للرئيسية
      </Link>
    </main>
  );
}
