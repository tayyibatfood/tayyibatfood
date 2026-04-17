import type { Locale } from "./types";

export const T = {
  ar: {
    site_name: "الطيبات",
    tagline: "المَطبخ المحايد",
    // Nav (max 5 per brief §4.2)
    nav_home: "الرئيسية",
    nav_dictionary: "القاموس",
    nav_meal_plan: "جدول الوجبات",
    nav_substitutions: "البدائل",
    nav_encyclopedia: "الموسوعة",
    // Hero
    hero_headline_1: "في المَطبخ المصري، فيه طعام بنعرفه",
    hero_headline_2: "وطعام بنعيد اكتشافه.",
    hero_sub: "ابحث عن أي طعام، واعرف إذا كان من الطيبات — في ثانية واحدة.",
    // Search
    search_placeholder: "اكتب اسم الطعام… البيض، اللبن، القمح…",
    search_button: "بحث",
    search_no_results: "لم نجد هذا الطعام بعد.",
    search_suggest_add: "ساعدنا بإضافته",
    // Labels
    last_reviewed: "آخر مراجعة",
    related_foods: "أطعمة مشابهة",
    substitutions_label: "البدائل",
    category: "التصنيف",
    // Verdicts
    allowed: "من الطيبات",
    forbidden: "ممنوع",
    review: "قيد المراجعة",
    // Misc
    read_more: "اقرأ المزيد",
    newsletter_cta: "اشترك",
    newsletter_placeholder: "بريدك الإلكتروني",
    community_label: "مصري يبحثون عن الطيبات كل شهر.",
    community_subline: "انضم لرحلتهم.",
    today_in_tayyibat: "اليوم في الطيبات",
    breakfast: "الفطور",
    lunch: "الغداء",
    dinner: "العشاء",
    // Footer & disclaimer (verbatim per v1.0 §8.3)
    disclaimer:
      "هذا الموقع مرجع معلوماتي فقط ولا يُعد استشارة طبية. المحتوى يوثّق نظام الطيبات كما يقدمه أصحابه ولا يتبنى أي ادعاءات علاجية. استشر طبيبك قبل أي تغيير في نظامك الغذائي أو أدويتك.",
    footer_rights: "جميع الحقوق محفوظة",
    footer_about: "عن الموقع",
    footer_archive: "السجل",
    footer_privacy: "الخصوصية"
  },
  en: {
    site_name: "Tayyibat",
    tagline: "The Neutral Kitchen",
    nav_home: "Home",
    nav_dictionary: "Dictionary",
    nav_meal_plan: "Meal Plan",
    nav_substitutions: "Substitutions",
    nav_encyclopedia: "Encyclopedia",
    hero_headline_1: "In the Egyptian kitchen, there's food we know",
    hero_headline_2: "and food we rediscover.",
    hero_sub: "Search any food. Know if it's from the Tayyibat — in one second.",
    search_placeholder: "Type a food name… eggs, milk, wheat…",
    search_button: "Search",
    search_no_results: "We haven't catalogued this food yet.",
    search_suggest_add: "Help us add it",
    last_reviewed: "Last reviewed",
    related_foods: "Related foods",
    substitutions_label: "Substitutions",
    category: "Category",
    allowed: "From the Tayyibat",
    forbidden: "Restricted",
    review: "Under review",
    read_more: "Read more",
    newsletter_cta: "Subscribe",
    newsletter_placeholder: "your email",
    community_label: "Egyptians searching the Tayyibat each month.",
    community_subline: "Join their journey.",
    today_in_tayyibat: "Today in Tayyibat",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    disclaimer:
      "This site is informational reference material only and does not constitute medical advice. The content documents the Tayyibat system as presented by its authors and makes no therapeutic claims. Consult your physician before any change to your diet or medications.",
    footer_rights: "All rights reserved",
    footer_about: "About",
    footer_archive: "Archive",
    footer_privacy: "Privacy"
  }
} as const;

export const t = (locale: Locale) => T[locale];
