"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";

const articles = [
  { slug: "what-is-tayyibat", title: "What is the Tayyibat System?", excerpt: "The foundational principles of the dietary system and the philosophy behind it." },
  { slug: "two-meal-protocol", title: "The Two-Meal Protocol", excerpt: "How meals are structured across the day, and the reasoning behind this structure." },
  { slug: "pillars", title: "Pillars of the System", excerpt: "Whole grains, legumes, unrefined oils, and natural sweeteners." }
];

export default function Page() {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    return () => {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    };
  }, []);
  return (
    <SimplePage
      locale="en"
      current="encyclopedia"
      eyebrow="Encyclopedia"
      title="The reference for the Tayyibat system."
      subtitle="Principles, pillars, protocols. For those who want to understand the system from its roots."
    >
      <ul className="space-y-3">
        {articles.map(a => (
          <li key={a.slug}>
            <Link href={`/en/encyclopedia/${a.slug}/`} className="block p-5 rounded-[12px] bg-white/60 border border-cream-deep/60 hover:border-sage-soft transition-all">
              <h2 className="font-display text-[26px] font-semibold text-ink mb-2">{a.title}</h2>
              <p className="font-editorial text-[15px] text-ink-soft leading-[1.7]">{a.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
