import { FOODS } from "./foods";
import type { FoodEntry } from "./types";

export interface SearchHit {
  food: FoodEntry;
  score: number; // lower = better
}

/** Normalize Arabic text for matching — strip tashkeel, unify alef variants */
export function normalizeAr(s: string): string {
  return s
    .replace(/[\u064B-\u0652\u0670]/g, "")   // tashkeel
    .replace(/[أإآا]/g, "ا")                    // alef variants
    .replace(/ى/g, "ي")                          // alef maksura
    .replace(/ة/g, "ه")                          // ta marbuta
    .replace(/[ؤئ]/g, "ء")                       // hamza variants
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function normalizeEn(s: string): string {
  return s.trim().toLowerCase();
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp: number[][] = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[0][i] = i;
  for (let j = 0; j <= b.length; j++) dp[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      dp[j][i] = Math.min(
        dp[j][i - 1] + 1,
        dp[j - 1][i] + 1,
        dp[j - 1][i - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[b.length][a.length];
}

export function searchFoods(query: string, limit = 8): SearchHit[] {
  const qAr = normalizeAr(query);
  const qEn = normalizeEn(query);
  if (!qAr && !qEn) return [];

  const hits: SearchHit[] = [];
  for (const food of FOODS) {
    const nameAr = normalizeAr(food.name_ar);
    const nameEn = normalizeEn(food.name_en);

    // Exact matches
    if (nameAr === qAr || nameEn === qEn) { hits.push({ food, score: 0 }); continue; }
    // Prefix matches
    if (nameAr.startsWith(qAr) || nameEn.startsWith(qEn)) { hits.push({ food, score: 1 }); continue; }
    // Substring matches
    if (nameAr.includes(qAr) || nameEn.includes(qEn)) { hits.push({ food, score: 2 }); continue; }
    // Fuzzy (Levenshtein ≤ 2)
    const dAr = levenshtein(qAr, nameAr);
    const dEn = levenshtein(qEn, nameEn);
    const d = Math.min(dAr, dEn);
    if (d <= 2) hits.push({ food, score: 3 + d });
  }

  return hits.sort((a, b) => a.score - b.score).slice(0, limit);
}
