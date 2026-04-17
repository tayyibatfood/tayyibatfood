"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VerdictCard } from "@/components/VerdictCard";
import { getFoodBySlug } from "@/lib/foods";

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    return () => {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    };
  }, []);

  const slug = decodeURIComponent(params.slug);
  const food = getFoodBySlug(slug);
  if (!food) notFound();

  return (
    <>
      <SiteHeader locale="en" current="dictionary" />
      <main className="pt-[110px]">
        <VerdictCard food={food} locale="en" />
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
