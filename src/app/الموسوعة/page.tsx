import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "الموسوعة · الطيبات",
  description: "مرجع تعليمي لنظام الطيبات — الفلسفة، الركائز، بروتوكول الوجبتين.",
  alternates: {
    canonical: "https://tayyibatfood.com/الموسوعة/",
    languages: {
      ar: "https://tayyibatfood.com/الموسوعة/",
      en: "https://tayyibatfood.com/en/encyclopedia/"
    }
  }
};

const articles = [
  { slug: "ما-هو-نظام-الطيبات", title: "ما هو نظام الطيبات؟", excerpt: "المبادئ الأساسية للنظام الغذائي والفلسفة وراءه." },
  { slug: "بروتوكول-الوجبتين", title: "بروتوكول الوجبتين", excerpt: "كيف تُنظَّم الوجبات عبر اليوم وما أساس هذا التنظيم." },
  { slug: "ركائز-النظام", title: "ركائز نظام الطيبات", excerpt: "الحبوب الكاملة، البقوليات، الزيوت الخام، والمُحلّيات الطبيعية." }
];

export default function Page() {
  return (
    <SimplePage
      locale="ar"
      current="encyclopedia"
      eyebrow="الموسوعة"
      title="مرجع تعليمي لنظام الطيبات."
      subtitle="المبادئ، الركائز، البروتوكولات. قراءة موسوعية لمن يريد فهم النظام من جذوره."
    >
      <ul className="space-y-3">
        {articles.map(a => (
          <li key={a.slug}>
            <Link href={`/الموسوعة/${a.slug}/`} className="block p-5 rounded-[12px] bg-white/60 border border-cream-deep/60 hover:border-sage-soft transition-all">
              <h2 className="font-display text-[26px] font-semibold text-ink mb-2">{a.title}</h2>
              <p className="font-editorial text-[15px] text-ink-soft leading-[1.7]">{a.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
