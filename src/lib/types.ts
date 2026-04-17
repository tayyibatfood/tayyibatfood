export type Locale = "ar" | "en";

export type Verdict = "allowed" | "forbidden" | "review";

export const VERDICT_LABELS: Record<Verdict, { ar: string; en: string }> = {
  allowed:   { ar: "من الطيبات", en: "From the Tayyibat" },
  forbidden: { ar: "ممنوع",       en: "Restricted" },
  review:    { ar: "قيد المراجعة", en: "Under Review" }
};

export type Category =
  | "grains" | "protein" | "dairy" | "vegetables"
  | "fruits" | "sweeteners" | "oils" | "beverages" | "legumes";

export const CATEGORY_LABELS: Record<Category, { ar: string; en: string }> = {
  grains:     { ar: "حبوب",     en: "Grains" },
  protein:    { ar: "بروتين",   en: "Protein" },
  dairy:      { ar: "ألبان",    en: "Dairy" },
  vegetables: { ar: "خضار",     en: "Vegetables" },
  fruits:     { ar: "فواكه",    en: "Fruits" },
  sweeteners: { ar: "محليات",   en: "Sweeteners" },
  oils:       { ar: "زيوت",     en: "Oils" },
  beverages:  { ar: "مشروبات",  en: "Beverages" },
  legumes:    { ar: "بقوليات",  en: "Legumes" }
};

export interface FoodEntry {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
  verdict: Verdict;
  category: Category;
  reasoning_ar: string;
  reasoning_en: string;
  linguistic_note_ar?: string;
  substitutions?: Array<{ id: string; name_ar: string; name_en: string }>;
  tags?: string[];
  related?: string[];
  updated_at: string;
}

export interface Article {
  slug: string;
  title_ar: string;
  title_en: string;
  excerpt_ar: string;
  excerpt_en: string;
  body_ar: string;
  body_en: string;
  category_ar: string;
  category_en: string;
  updated_at: string;
}
