import type { MetadataRoute } from "next";
import { FOODS } from "@/lib/foods";

const BASE = "https://tayyibatfood.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [];

  // Core pages — AR
  const arPages = ["", "القاموس/", "الموسوعة/", "البدائل/", "جدول-الوجبات/", "السجل/"];
  for (const path of arPages) {
    urls.push({
      url: `${BASE}/${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8
    });
  }

  // Core pages — EN mirror
  const enPages = ["en/", "en/dictionary/", "en/encyclopedia/", "en/substitutions/", "en/meal-plan/", "en/archive/"];
  for (const path of enPages) {
    urls.push({
      url: `${BASE}/${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7
    });
  }

  // Dictionary entries — AR + EN
  for (const food of FOODS) {
    urls.push({
      url: `${BASE}/القاموس/${food.slug}/`,
      lastModified: food.updated_at,
      changeFrequency: "monthly",
      priority: 0.9
    });
    urls.push({
      url: `${BASE}/en/dictionary/${food.slug}/`,
      lastModified: food.updated_at,
      changeFrequency: "monthly",
      priority: 0.6
    });
  }

  return urls;
}
