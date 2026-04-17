import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VerdictCard } from "@/components/VerdictCard";
import { FOODS, getFoodBySlug } from "@/lib/foods";

export async function generateStaticParams() {
  return FOODS.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);
  const food = getFoodBySlug(slug);
  if (!food) return { title: "غير موجود" };
  return {
    title: `${food.name_ar} · الطيبات`,
    description: food.reasoning_ar.slice(0, 160),
    alternates: {
      canonical: `https://tayyibatfood.com/القاموس/${food.slug}/`,
      languages: {
        ar: `https://tayyibatfood.com/القاموس/${food.slug}/`,
        en: `https://tayyibatfood.com/en/dictionary/${food.slug}/`
      }
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const food = getFoodBySlug(slug);
  if (!food) notFound();

  return (
    <>
      <SiteHeader locale="ar" current="dictionary" />
      <main className="pt-[110px]">
        <VerdictCard food={food} locale="ar" />
      </main>
      <SiteFooter locale="ar" />
    </>
  );
}
