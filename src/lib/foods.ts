import type { FoodEntry } from "./types";

export const FOODS: FoodEntry[] = [
  {
    id: "brown-rice",
    slug: "الأرز-البني",
    name_ar: "الأرز البني",
    name_en: "Brown Rice",
    verdict: "allowed",
    category: "grains",
    reasoning_ar: "حبّة كاملة غير مُكررة، تحافظ على النخالة والجنين وقيمتها الغذائية الأصلية. من أساسيات المطبخ في النظام — مسموح بلا تحفّظات.",
    reasoning_en: "A whole, unrefined grain that retains its bran and germ. A staple in the system — allowed without reservations.",
    linguistic_note_ar: "من الجذر السامي «أ-ر-ز»، دخل العربية قديماً عبر الفارسية. معروف في المطبخ المصري منذ القرن السابع الميلادي.",
    tags: ["فطور", "غداء"],
    related: ["white-rice", "oats", "barley"],
    updated_at: "2026-04-16"
  },
  {
    id: "white-rice",
    slug: "الأرز-الأبيض",
    name_ar: "الأرز الأبيض",
    name_en: "White Rice",
    verdict: "review",
    category: "grains",
    reasoning_ar: "أرز مُكرر مع إزالة النخالة والجنين. مقبول بكميات معتدلة لكن البدائل الكاملة أفضل.",
    reasoning_en: "Refined rice with bran and germ removed. Acceptable in moderation, though whole-grain alternatives are preferred.",
    tags: ["غداء"],
    related: ["brown-rice", "oats"],
    updated_at: "2026-04-16"
  },
  {
    id: "oats",
    slug: "الشوفان",
    name_ar: "الشوفان",
    name_en: "Oats",
    verdict: "allowed",
    category: "grains",
    reasoning_ar: "حبّة كاملة غنية بالألياف القابلة للذوبان. من أفضل خيارات الفطور في النظام، ويُنصح بنقعه ليلة كاملة قبل الطهي.",
    reasoning_en: "A whole grain rich in soluble fiber. One of the best breakfast options in the system — best soaked overnight before cooking.",
    tags: ["فطور"],
    related: ["brown-rice", "barley", "lentils"],
    updated_at: "2026-04-16"
  },
  {
    id: "barley",
    slug: "الشعير",
    name_ar: "الشعير",
    name_en: "Barley",
    verdict: "allowed",
    category: "grains",
    reasoning_ar: "من أقدم الحبوب في المطبخ المصري. يُستخدم في الحساء والمشروبات الصيفية.",
    reasoning_en: "One of the oldest grains in the Egyptian kitchen. Used in soups and summer drinks.",
    linguistic_note_ar: "مذكور في النصوص الفرعونية باسم «بدت» — شراب الشعير كان من أقدم المشروبات في الحضارة المصرية.",
    tags: ["غداء", "مشروبات"],
    related: ["oats", "wheat"],
    updated_at: "2026-04-16"
  },
  {
    id: "wheat",
    slug: "القمح",
    name_ar: "القمح",
    name_en: "Wheat",
    verdict: "review",
    category: "grains",
    reasoning_ar: "القمح المعاصر (الأصناف الحديثة المهجنة) يختلف عن قمح الأجداد. القمح الكامل القديم (مثل الفريك والبرغل) مسموح.",
    reasoning_en: "Modern hybridized wheat differs from ancestral grains. Ancient whole-grain forms (freekeh, bulgur) are permitted.",
    tags: ["فطور", "غداء"],
    related: ["freekeh", "barley"],
    updated_at: "2026-04-16"
  },
  {
    id: "freekeh",
    slug: "الفريك",
    name_ar: "الفريك",
    name_en: "Freekeh",
    verdict: "allowed",
    category: "grains",
    reasoning_ar: "قمح أخضر مشوي — شكل تقليدي أصيل للقمح. مسموح ومُفضّل على القمح المعاصر.",
    reasoning_en: "Roasted green wheat — a traditional authentic form. Allowed and preferred over modern wheat.",
    linguistic_note_ar: "من الفعل «فَرَك» بمعنى الفرك باليد لإزالة القشور بعد الشيّ. طبق مصري سوري لبناني قديم.",
    tags: ["غداء"],
    related: ["wheat", "barley"],
    updated_at: "2026-04-16"
  },
  {
    id: "lentils",
    slug: "العدس",
    name_ar: "العدس",
    name_en: "Lentils",
    verdict: "allowed",
    category: "legumes",
    reasoning_ar: "من أهم مصادر البروتين النباتي في النظام. يُنقع قبل الطبخ لتحسين الهضم. العدس الأصفر والأحمر والبني كلها مسموحة.",
    reasoning_en: "One of the most important plant-protein sources. Soak before cooking for better digestibility. Yellow, red, and brown lentils all permitted.",
    tags: ["غداء", "بروتين"],
    related: ["chickpeas", "fava-beans"],
    updated_at: "2026-04-16"
  },
  {
    id: "chickpeas",
    slug: "الحمص",
    name_ar: "الحمص",
    name_en: "Chickpeas",
    verdict: "allowed",
    category: "legumes",
    reasoning_ar: "بقولية أساسية، مصدر بروتين ممتاز. يُنقع ليلة كاملة ويُطبخ ببطء. يدخل في الفلافل والحمص والشوربات.",
    reasoning_en: "A foundational legume and excellent protein source. Soak overnight and cook slowly. Used in falafel, hummus, and soups.",
    tags: ["غداء", "بروتين"],
    related: ["lentils", "fava-beans"],
    updated_at: "2026-04-16"
  },
  {
    id: "fava-beans",
    slug: "الفول",
    name_ar: "الفول",
    name_en: "Fava Beans",
    verdict: "allowed",
    category: "legumes",
    reasoning_ar: "الطعام الشعبي الأول في المطبخ المصري. فطور كامل البروتين، يُطبخ ببطء ويُقدّم بزيت الزيتون والليمون.",
    reasoning_en: "The most iconic staple of the Egyptian kitchen. A complete-protein breakfast, slow-cooked and served with olive oil and lemon.",
    linguistic_note_ar: "«الفول» ورد في النصوص الفرعونية باسم «إيورت». طبق الفول المدمّس عمره أكثر من ٥٠٠٠ سنة.",
    tags: ["فطور", "بروتين"],
    related: ["chickpeas", "lentils"],
    updated_at: "2026-04-16"
  },
  {
    id: "dates",
    slug: "التمر",
    name_ar: "التمر",
    name_en: "Dates",
    verdict: "allowed",
    category: "fruits",
    reasoning_ar: "المُحلّي الطبيعي الأول في النظام. غني بالمعادن والألياف. يُستخدم بديلاً للسكر الأبيض في الحلويات والمشروبات.",
    reasoning_en: "The foremost natural sweetener in the system. Rich in minerals and fiber. Used as a replacement for refined sugar in desserts and drinks.",
    tags: ["حلوى", "محليات"],
    related: ["honey", "raisins"],
    updated_at: "2026-04-16"
  },
  {
    id: "honey",
    slug: "العسل",
    name_ar: "العسل",
    name_en: "Honey",
    verdict: "allowed",
    category: "sweeteners",
    reasoning_ar: "عسل النحل الخام (غير المُعالج حرارياً) مسموح ومُفضّل. يُضاف بعد الطبخ للحفاظ على خصائصه.",
    reasoning_en: "Raw, unpasteurized honey is permitted and preferred. Added after cooking to preserve its properties.",
    tags: ["محليات"],
    related: ["dates", "molasses"],
    updated_at: "2026-04-16"
  },
  {
    id: "molasses",
    slug: "العسل-الأسود",
    name_ar: "العسل الأسود",
    name_en: "Blackstrap Molasses",
    verdict: "allowed",
    category: "sweeteners",
    reasoning_ar: "عسل القصب التقليدي، غني بالحديد والمعادن. جزء من التراث المصري. يُستخدم بكميات قليلة كمُحلّي طبيعي.",
    reasoning_en: "Traditional cane molasses, rich in iron and minerals. Part of Egyptian heritage. Used sparingly as a natural sweetener.",
    tags: ["فطور", "محليات"],
    related: ["honey", "dates"],
    updated_at: "2026-04-16"
  },
  {
    id: "white-sugar",
    slug: "السكر-الأبيض",
    name_ar: "السكر الأبيض",
    name_en: "White Sugar",
    verdict: "forbidden",
    category: "sweeteners",
    reasoning_ar: "مُكرر صناعياً، مجرّد من أي قيمة غذائية. يُستبدل بالتمر، العسل الخام، أو العسل الأسود.",
    reasoning_en: "Industrially refined, stripped of all nutritional value. Substitute with dates, raw honey, or blackstrap molasses.",
    substitutions: [
      { id: "dates", name_ar: "التمر", name_en: "Dates" },
      { id: "honey", name_ar: "العسل", name_en: "Raw Honey" },
      { id: "molasses", name_ar: "العسل الأسود", name_en: "Molasses" }
    ],
    tags: ["محليات"],
    related: ["honey", "dates"],
    updated_at: "2026-04-16"
  },
  {
    id: "eggs",
    slug: "البيض",
    name_ar: "البيض",
    name_en: "Eggs",
    verdict: "forbidden",
    category: "protein",
    reasoning_ar: "يُعتبر البيض من الأطعمة المستبعدة في النظام نظراً لطريقة الإنتاج الصناعية الحديثة التي تؤثر على جودته.",
    reasoning_en: "Eggs are excluded from the system due to modern industrial production methods that affect quality.",
    linguistic_note_ar: "ورد في الحديث النبوي الشريف وكان جزءاً من الغذاء التقليدي. الاستبعاد هنا متعلق بالبيض الصناعي المعاصر.",
    substitutions: [
      { id: "chickpeas", name_ar: "الحمص", name_en: "Chickpeas" },
      { id: "lentils",   name_ar: "العدس", name_en: "Lentils" },
      { id: "fava-beans",name_ar: "الفول", name_en: "Fava Beans" }
    ],
    tags: ["فطور", "بروتين"],
    related: ["dairy-milk", "chickpeas"],
    updated_at: "2026-04-16"
  },
  {
    id: "dairy-milk",
    slug: "الحليب-البقري",
    name_ar: "الحليب البقري",
    name_en: "Cow's Milk",
    verdict: "forbidden",
    category: "dairy",
    reasoning_ar: "الحليب البقري المُعالج صناعياً (المُبستر والمُتجانس) مستبعد. الحليب الخام من أبقار مراعي مسموح في حالات خاصة.",
    reasoning_en: "Industrially processed (pasteurized/homogenized) cow's milk is excluded. Raw pasture-fed milk is permitted in specific cases.",
    substitutions: [
      { id: "almond-milk",   name_ar: "حليب اللوز",   name_en: "Almond Milk" },
      { id: "coconut-milk",  name_ar: "حليب جوز الهند", name_en: "Coconut Milk" }
    ],
    tags: ["فطور", "ألبان"],
    related: ["cheese", "yogurt"],
    updated_at: "2026-04-16"
  },
  {
    id: "almond-milk",
    slug: "حليب-اللوز",
    name_ar: "حليب اللوز",
    name_en: "Almond Milk",
    verdict: "allowed",
    category: "dairy",
    reasoning_ar: "بديل نباتي ممتاز للحليب البقري. يُحضَّر منزلياً بنقع اللوز وخلطه مع الماء.",
    reasoning_en: "An excellent plant-based substitute for cow's milk. Made at home by soaking and blending almonds with water.",
    tags: ["فطور", "ألبان"],
    related: ["dairy-milk", "coconut-milk"],
    updated_at: "2026-04-16"
  },
  {
    id: "olive-oil",
    slug: "زيت-الزيتون",
    name_ar: "زيت الزيتون",
    name_en: "Olive Oil",
    verdict: "allowed",
    category: "oils",
    reasoning_ar: "الزيت المُفضّل في النظام. يُستخدم باكر الاستخلاص (Extra Virgin) غير المُعالج حرارياً. للدهن الخام، ليس للقلي العميق.",
    reasoning_en: "The preferred oil in the system. Extra virgin, unrefined. For dressing and light cooking — not deep frying.",
    tags: ["زيوت"],
    related: ["coconut-oil", "sesame-oil"],
    updated_at: "2026-04-16"
  },
  {
    id: "coconut-oil",
    slug: "زيت-جوز-الهند",
    name_ar: "زيت جوز الهند",
    name_en: "Coconut Oil",
    verdict: "allowed",
    category: "oils",
    reasoning_ar: "مستقر حرارياً، مناسب للطبخ على نار متوسطة. البكر والعضوي مُفضّل.",
    reasoning_en: "Heat-stable, suitable for medium-heat cooking. Virgin and organic preferred.",
    tags: ["زيوت"],
    related: ["olive-oil"],
    updated_at: "2026-04-16"
  },
  {
    id: "vegetable-oil",
    slug: "الزيوت-النباتية-المكررة",
    name_ar: "الزيوت النباتية المكررة",
    name_en: "Refined Vegetable Oils",
    verdict: "forbidden",
    category: "oils",
    reasoning_ar: "زيوت الذرة والصويا ودوار الشمس وزيت الكانولا — كلها مُعالجة بمذيبات كيميائية ومؤكسدة. مستبعدة تماماً.",
    reasoning_en: "Corn, soy, sunflower, canola — all chemically solvent-extracted and oxidized. Entirely excluded.",
    substitutions: [
      { id: "olive-oil",   name_ar: "زيت الزيتون",   name_en: "Olive Oil" },
      { id: "coconut-oil", name_ar: "زيت جوز الهند", name_en: "Coconut Oil" }
    ],
    tags: ["زيوت"],
    related: ["olive-oil", "coconut-oil"],
    updated_at: "2026-04-16"
  },
  {
    id: "tomatoes",
    slug: "الطماطم",
    name_ar: "الطماطم",
    name_en: "Tomatoes",
    verdict: "allowed",
    category: "vegetables",
    reasoning_ar: "خضار أساسي في المطبخ المصري. الطازجة في موسمها أفضل. تُستخدم في السلطات والطبخ.",
    reasoning_en: "A staple vegetable in the Egyptian kitchen. Best fresh in season. Used in salads and cooking.",
    tags: ["غداء", "خضار"],
    related: ["cucumber", "onion"],
    updated_at: "2026-04-16"
  },
  {
    id: "cucumber",
    slug: "الخيار",
    name_ar: "الخيار",
    name_en: "Cucumber",
    verdict: "allowed",
    category: "vegetables",
    reasoning_ar: "خضار مُرطِّب، أساسي في السلطات الصيفية. مسموح بلا تحفّظ.",
    reasoning_en: "A hydrating vegetable, foundational to summer salads. Permitted without reservation.",
    tags: ["خضار"],
    related: ["tomatoes"],
    updated_at: "2026-04-16"
  },
  {
    id: "onion",
    slug: "البصل",
    name_ar: "البصل",
    name_en: "Onion",
    verdict: "allowed",
    category: "vegetables",
    reasoning_ar: "أساس النكهة في المطبخ المصري. مسموح في كل الأشكال — نيء، مقلي بزيت الزيتون، مشوي.",
    reasoning_en: "The flavor foundation of the Egyptian kitchen. Permitted in all forms — raw, sautéed in olive oil, grilled.",
    tags: ["خضار"],
    related: ["garlic", "tomatoes"],
    updated_at: "2026-04-16"
  },
  {
    id: "garlic",
    slug: "الثوم",
    name_ar: "الثوم",
    name_en: "Garlic",
    verdict: "allowed",
    category: "vegetables",
    reasoning_ar: "من أقوى الأطعمة الصحية في النظام. يُفضّل النيء أو المهروس قبل الطبخ مباشرة.",
    reasoning_en: "One of the most valued foods in the system. Best raw or crushed just before cooking.",
    tags: ["خضار"],
    related: ["onion"],
    updated_at: "2026-04-16"
  },
  {
    id: "spinach",
    slug: "السبانخ",
    name_ar: "السبانخ",
    name_en: "Spinach",
    verdict: "allowed",
    category: "vegetables",
    reasoning_ar: "خضار ورقي غني بالحديد. الطازج في موسمه مُفضّل. يُطبخ بزيت الزيتون والثوم.",
    reasoning_en: "Iron-rich leafy green. Fresh in season is preferred. Cooked with olive oil and garlic.",
    tags: ["خضار", "غداء"],
    related: ["kale"],
    updated_at: "2026-04-16"
  },
  {
    id: "lemon",
    slug: "الليمون",
    name_ar: "الليمون",
    name_en: "Lemon",
    verdict: "allowed",
    category: "fruits",
    reasoning_ar: "أساسي في نكهة المطبخ. الطازج فقط — عصير الليمون المُعلّب مُكرر ومُحلّى.",
    reasoning_en: "Essential to the kitchen's flavor profile. Fresh only — bottled lemon juice is processed and often sweetened.",
    tags: ["فواكه"],
    related: ["olive-oil"],
    updated_at: "2026-04-16"
  },
  {
    id: "apple",
    slug: "التفاح",
    name_ar: "التفاح",
    name_en: "Apple",
    verdict: "allowed",
    category: "fruits",
    reasoning_ar: "فاكهة أساسية، يُفضّل التفاح المحلي في موسمه على المستورد.",
    reasoning_en: "A foundational fruit. Local seasonal varieties preferred over imported.",
    tags: ["فواكه"],
    related: ["pear"],
    updated_at: "2026-04-16"
  },
  {
    id: "tea",
    slug: "الشاي",
    name_ar: "الشاي",
    name_en: "Tea",
    verdict: "allowed",
    category: "beverages",
    reasoning_ar: "الشاي الأسود والأخضر طبيعي ومسموح بدون سكر أبيض. يُحلّى بالعسل أو التمر.",
    reasoning_en: "Black and green tea — natural, permitted without white sugar. Sweetened with honey or dates.",
    tags: ["مشروبات"],
    related: ["herbal-tea"],
    updated_at: "2026-04-16"
  },
  {
    id: "herbal-tea",
    slug: "الأعشاب",
    name_ar: "شاي الأعشاب",
    name_en: "Herbal Tea",
    verdict: "allowed",
    category: "beverages",
    reasoning_ar: "النعناع، الحلبة، البابونج، الكركديه — كلها تراث مصري أصيل ومسموحة.",
    reasoning_en: "Mint, fenugreek, chamomile, hibiscus — authentic Egyptian heritage, all permitted.",
    tags: ["مشروبات"],
    related: ["tea"],
    updated_at: "2026-04-16"
  },
  {
    id: "soda",
    slug: "المشروبات-الغازية",
    name_ar: "المشروبات الغازية",
    name_en: "Soft Drinks",
    verdict: "forbidden",
    category: "beverages",
    reasoning_ar: "مُحلّيات صناعية، أحماض صناعية، ألوان اصطناعية. مستبعدة تماماً بلا استثناء.",
    reasoning_en: "Artificial sweeteners, industrial acids, synthetic colors. Entirely excluded without exception.",
    substitutions: [
      { id: "herbal-tea", name_ar: "شاي الأعشاب", name_en: "Herbal Tea" },
      { id: "lemon",      name_ar: "ليمون طازج", name_en: "Fresh Lemon Water" }
    ],
    tags: ["مشروبات"],
    related: ["tea", "herbal-tea"],
    updated_at: "2026-04-16"
  },
  {
    id: "processed-meat",
    slug: "اللحوم-المصنعة",
    name_ar: "اللحوم المصنّعة",
    name_en: "Processed Meats",
    verdict: "forbidden",
    category: "protein",
    reasoning_ar: "اللانشون، السوسيس، الهوت دوج — تحتوي على نترات ومواد حافظة. مستبعدة. اللحوم الطازجة مسموحة بضوابط.",
    reasoning_en: "Luncheon meats, sausages, hot dogs — contain nitrates and preservatives. Excluded. Fresh meats permitted with care.",
    substitutions: [
      { id: "lentils",    name_ar: "العدس",  name_en: "Lentils" },
      { id: "chickpeas",  name_ar: "الحمص",  name_en: "Chickpeas" }
    ],
    tags: ["بروتين"],
    related: ["eggs"],
    updated_at: "2026-04-16"
  }
];

export const getFoodBySlug = (slug: string): FoodEntry | undefined =>
  FOODS.find(f => f.slug === slug);

export const getFoodById = (id: string): FoodEntry | undefined =>
  FOODS.find(f => f.id === id);

export const getFoodsByVerdict = (verdict: FoodEntry["verdict"]): FoodEntry[] =>
  FOODS.filter(f => f.verdict === verdict);

export const getRelatedFoods = (food: FoodEntry): FoodEntry[] =>
  (food.related || [])
    .map(id => FOODS.find(f => f.id === id))
    .filter((f): f is FoodEntry => f !== undefined);

export const getFeaturedFoods = (): FoodEntry[] => {
  const priority = ["brown-rice", "dates", "eggs", "olive-oil", "lentils", "white-sugar"];
  return priority.map(id => FOODS.find(f => f.id === id)).filter((f): f is FoodEntry => !!f);
};
