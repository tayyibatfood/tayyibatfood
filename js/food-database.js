/* ══════════════════════════════════════════════════════════════════
   tayyibatfood.com — Food Database
   60+ entries spanning allowed / restricted / conditional
   Every entry: bilingual, with reasoning, aliases, and substitutes
   ══════════════════════════════════════════════════════════════════ */

const FOODS = [
  // ── GRAINS & STARCHES ──────────────────────────
  { id:"rice", name_ar:"الأرز", name_en:"Rice", cat:"grains", status:"allowed",
    note_ar:"مسموح بجميع أنواعه — البسمتي، المصري، البني. من أفضل النشويات في النظام.",
    note_en:"All types allowed — basmati, Egyptian, brown. Among the best starches in the system.",
    aliases:["رز","ارز","rice","basmati","بسمتي"] },

  { id:"wheat", name_ar:"القمح الكامل", name_en:"Whole wheat", cat:"grains", status:"allowed",
    note_ar:"البرغل، الفريكة، البليلة، والقمح الكامل — كلها مسموحة ومُشجعة.",
    note_en:"Bulgur, freekeh, whole wheat — all allowed and encouraged.",
    aliases:["قمح","برغل","فريكة","بليلة","wheat","bulgur","freekeh"] },

  { id:"potato", name_ar:"البطاطس", name_en:"Potatoes", cat:"grains", status:"allowed",
    note_ar:"مسموحة — يُفضل مسلوقة أو مشوية. المقلية مسموحة باعتدال.",
    note_en:"Allowed — boiled or roasted preferred. Fried is allowed in moderation.",
    aliases:["بطاطس","بطاطا","potato","potatoes"] },

  { id:"corn", name_ar:"الذرة", name_en:"Corn", cat:"grains", status:"allowed",
    note_ar:"مسموحة بجميع أشكالها — مسلوقة، مشوية، فشار.",
    note_en:"Allowed in all forms — boiled, grilled, popcorn.",
    aliases:["ذرة","corn","فشار","popcorn"] },

  { id:"oats", name_ar:"الشوفان", name_en:"Oats", cat:"grains", status:"allowed",
    note_ar:"مسموح — خيار ممتاز للفطور.",
    note_en:"Allowed — excellent breakfast option.",
    aliases:["شوفان","oats","oatmeal"] },

  { id:"pasta", name_ar:"المكرونة", name_en:"Pasta", cat:"grains", status:"allowed",
    note_ar:"مسموحة بجميع أنواعها. السباغيتي والمعكرونة والفيتوتشيني.",
    note_en:"All types allowed — spaghetti, pasta, fettuccine.",
    aliases:["مكرونة","معكرونة","باستا","pasta","spaghetti"] },

  // ── BREAD ──────────────────────────
  { id:"wholebread", name_ar:"التوست كامل الحبة بالردة", name_en:"Whole grain bread with bran", cat:"bread", status:"allowed",
    note_ar:"مسموح ومُشجع. البديل الأفضل للخبز الأبيض المكرر.",
    note_en:"Allowed and encouraged. The preferred replacement for refined white bread.",
    aliases:["توست","خبز أسمر","خبز بالردة","whole bread","brown bread"] },

  { id:"whitebread", name_ar:"الخبز الأبيض", name_en:"White bread", cat:"bread", status:"restricted",
    note_ar:"الدقيق الأبيض المكرر ممنوع. يفقد قيمته الغذائية بفعل المعالجة الصناعية.",
    note_en:"Refined white flour is restricted. Loses nutritional value through industrial processing.",
    alt_ar:"توست كامل الحبة بالردة", alt_en:"Whole grain bread with bran",
    aliases:["خبز أبيض","عيش","فينو","white bread","عيش فينو"] },

  { id:"pastries", name_ar:"المعجنات والمخبوزات", name_en:"Pastries & baked goods", cat:"bread", status:"restricted",
    note_ar:"الكرواسون، الدونات، الكيك، الفطائر الصناعية — ممنوعة لاحتوائها على دقيق مكرر ودهون معالجة.",
    note_en:"Croissants, donuts, cake, industrial pastries — restricted due to refined flour and processed fats.",
    alt_ar:"توست كامل الحبة مع عسل أو مربى", alt_en:"Whole toast with honey or jam",
    aliases:["كرواسون","دونات","كيك","croissant","donut","cake","معجنات","مخبوزات"] },

  // ── SUGARS & SWEETS ──────────────────────────
  { id:"honey", name_ar:"العسل", name_en:"Honey", cat:"sugars", status:"allowed",
    note_ar:"مسموح ومُشجع بقوة — مصدر طاقة أساسي في النظام. عسل النحل الطبيعي.",
    note_en:"Strongly encouraged — a primary energy source. Natural bee honey.",
    aliases:["عسل","عسل نحل","honey"] },

  { id:"sugar_white", name_ar:"السكر الأبيض", name_en:"White sugar", cat:"sugars", status:"allowed",
    note_ar:"مسموح — خلافاً للأنظمة الغذائية الأخرى. يُعتبر طاقة نظيفة في نظام الطيبات.",
    note_en:"Allowed — unlike other diet systems. Considered clean energy in the Tayyibat protocol.",
    aliases:["سكر","sugar","سكر أبيض"] },

  { id:"molasses", name_ar:"العسل الأسود", name_en:"Molasses", cat:"sugars", status:"allowed",
    note_ar:"مسموح — غني بالحديد والمعادن.",
    note_en:"Allowed — rich in iron and minerals.",
    aliases:["عسل أسود","molasses"] },

  { id:"jam", name_ar:"المربى", name_en:"Jam", cat:"sugars", status:"allowed",
    note_ar:"مسموح — يُفضل المنزلي بسكر طبيعي.",
    note_en:"Allowed — homemade with natural sugar preferred.",
    aliases:["مربى","jam","مربة","preserves"] },

  { id:"chips", name_ar:"الشيبسي والمقرمشات", name_en:"Chips & crisps", cat:"sugars", status:"allowed",
    note_ar:"مسموحة — من الأطعمة المُفاجئة في قائمة المسموحات.",
    note_en:"Allowed — a surprising addition to the allowed list.",
    aliases:["شيبسي","chips","crisps","مقرمشات","بطاطس شيبسي"] },

  { id:"artificial_sweet", name_ar:"المحليات الصناعية", name_en:"Artificial sweeteners", cat:"sugars", status:"restricted",
    note_ar:"السويتال والأسبرتام وسكر الدايت — ممنوعة. يعتبرها النظام مواد صناعية خطرة.",
    note_en:"Sweetex, aspartame, diet sugar — restricted. Considered industrial compounds with risk.",
    alt_ar:"سكر أبيض أو عسل طبيعي", alt_en:"White sugar or natural honey",
    aliases:["سويتال","محليات","sweetener","diet","دايت","sugar free","aspartame"] },

  // ── FATS & OILS ──────────────────────────
  { id:"ghee", name_ar:"السمن البلدي", name_en:"Ghee (clarified butter)", cat:"fats", status:"allowed",
    note_ar:"مسموح ومُشجع بقوة — دهن طبيعي نقي. من أفضل دهون الطبخ.",
    note_en:"Strongly encouraged — pure natural fat. Among the best cooking fats.",
    aliases:["سمن","سمنة","سمن بلدي","ghee"] },

  { id:"olive_oil", name_ar:"زيت الزيتون", name_en:"Olive oil", cat:"fats", status:"allowed",
    note_ar:"مسموح — من أفضل الزيوت. يُفضل البكر الممتاز.",
    note_en:"Allowed — among the best oils. Extra virgin preferred.",
    aliases:["زيت زيتون","olive oil","زيتون","extra virgin"] },

  { id:"coconut_oil", name_ar:"زيت جوز الهند", name_en:"Coconut oil", cat:"fats", status:"allowed",
    note_ar:"مسموح — زيت طبيعي مستقر للطبخ.",
    note_en:"Allowed — natural cooking oil, heat-stable.",
    aliases:["زيت جوز الهند","coconut oil"] },

  { id:"butter", name_ar:"الزبدة", name_en:"Butter", cat:"fats", status:"allowed",
    note_ar:"مسموحة — الزبدة الطبيعية غير المهدرجة.",
    note_en:"Allowed — natural unhydrogenated butter.",
    aliases:["زبدة","زبد","butter"] },

  { id:"veg_oils", name_ar:"الزيوت النباتية المعالجة", name_en:"Processed vegetable oils", cat:"fats", status:"restricted",
    note_ar:"زيت الصويا، زيت الذرة المكرر، زيت دوار الشمس المعالج — ممنوعة. تحتوي على دهون متحولة.",
    note_en:"Soybean oil, refined corn oil, processed sunflower oil — restricted. Contains trans fats.",
    alt_ar:"زيت زيتون أو سمن بلدي", alt_en:"Olive oil or ghee",
    aliases:["زيت صويا","زيت ذرة","زيت دوار الشمس","soybean oil","corn oil","sunflower oil","vegetable oil"] },

  // ── DAIRY & EGGS ──────────────────────────
  { id:"processed_cheese", name_ar:"الجبن المطبوخ", name_en:"Processed cheese", cat:"dairy", status:"allowed",
    note_ar:"مسموح — مثلثات الجبن، جبنة الكوبات، الجبن المطبوخة الصفراء.",
    note_en:"Allowed — cheese triangles, cup cheese, yellow processed cheese.",
    aliases:["جبنة مطبوخة","مثلثات","processed cheese","جبنة نستو"] },

  { id:"cheddar", name_ar:"جبنة الشيدر", name_en:"Cheddar cheese", cat:"dairy", status:"allowed",
    note_ar:"مسموحة — من الأجبان الصفراء الموصى بها.",
    note_en:"Allowed — among the recommended yellow cheeses.",
    aliases:["شيدر","جبنة شيدر","cheddar"] },

  { id:"white_cheese", name_ar:"الجبنة البيضاء", name_en:"White cheese", cat:"dairy", status:"restricted",
    note_ar:"جميع الأجبان البيضاء ممنوعة — الفيتا، القريش، الطلقة، الدمياطي.",
    note_en:"All white cheeses restricted — feta, qarish, talqa, Damietta.",
    alt_ar:"جبنة شيدر أو جبنة مطبوخة", alt_en:"Cheddar or processed cheese",
    aliases:["جبنة بيضاء","فيتا","قريش","white cheese","feta","دمياطي"] },

  { id:"milk", name_ar:"اللبن الحليب", name_en:"Milk", cat:"dairy", status:"restricted",
    note_ar:"جميع منتجات الحليب السائل ممنوعة — لبن البقر والجاموس والماعز.",
    note_en:"All liquid dairy restricted — cow, buffalo, and goat milk.",
    alt_ar:"عصير طبيعي أو ماء", alt_en:"Natural juice or water",
    aliases:["لبن","حليب","milk","لبن رايب"] },

  { id:"yogurt", name_ar:"الزبادي", name_en:"Yogurt", cat:"dairy", status:"restricted",
    note_ar:"ممنوع — ضمن منتجات الألبان المخمرة.",
    note_en:"Restricted — among fermented dairy products.",
    alt_ar:"لا يوجد بديل مباشر — تجنبه", alt_en:"No direct alternative — avoid",
    aliases:["زبادي","يوجرت","yogurt","yoghurt","روب"] },

  { id:"eggs", name_ar:"البيض", name_en:"Eggs", cat:"dairy", status:"restricted",
    note_ar:"ممنوع — يعتبره النظام بنية جنينية كاملة غير مناسبة.",
    note_en:"Restricted — considered a complete embryonic structure, unsuitable.",
    alt_ar:"جبنة شيدر أو جبنة مطبوخة كمصدر بروتين", alt_en:"Cheddar or processed cheese as protein source",
    aliases:["بيض","بيضة","egg","eggs"] },

  { id:"kiri", name_ar:"جبنة كيري", name_en:"Kiri & spread cheeses", cat:"dairy", status:"restricted",
    note_ar:"كيري، لبنيتا، طعمة، الولد — جميعها ممنوعة.",
    note_en:"Kiri, La Vache Qui Rit spreads — all restricted.",
    alt_ar:"جبنة مطبوخة عادية (مثلثات)", alt_en:"Regular processed cheese (triangles)",
    aliases:["كيري","kiri","لبنيتا","طعمة","spread cheese"] },

  // ── MEAT & POULTRY ──────────────────────────
  { id:"beef", name_ar:"لحم البقر", name_en:"Beef", cat:"meat", status:"allowed",
    note_ar:"مسموح — يُفضل تقريباً مرة أسبوعياً. يُطهى جيداً.",
    note_en:"Allowed — preferably about once per week. Well cooked.",
    aliases:["لحم بقر","لحمة","beef","steak"] },

  { id:"lamb", name_ar:"لحم الضأن", name_en:"Lamb", cat:"meat", status:"allowed",
    note_ar:"مسموح — لحم الخروف والضأن البلدي.",
    note_en:"Allowed — lamb and domestic mutton.",
    aliases:["لحم ضأن","خروف","ضأن","lamb","mutton"] },

  { id:"camel", name_ar:"لحم الجمل", name_en:"Camel meat", cat:"meat", status:"allowed",
    note_ar:"مسموح — لحم أحمر صحي.",
    note_en:"Allowed — healthy red meat.",
    aliases:["لحم جمل","جمل","camel"] },

  { id:"liver", name_ar:"الكبدة", name_en:"Liver", cat:"meat", status:"allowed",
    note_ar:"مسموحة — غنية بالحديد.",
    note_en:"Allowed — rich in iron.",
    aliases:["كبدة","كبد","liver"] },

  { id:"chicken", name_ar:"الدجاج والفراخ", name_en:"Chicken", cat:"meat", status:"restricted",
    note_ar:"ممنوع — يعتبر النظام أن الطيور التي لا تطير (الدواجن) غير مناسبة.",
    note_en:"Restricted — the system considers flightless birds (poultry) unsuitable.",
    alt_ar:"لحم بقر أو ضأن أو سمك بحر", alt_en:"Beef, lamb, or sea fish",
    aliases:["فراخ","دجاج","فرخة","chicken","دواجن","poultry"] },

  { id:"duck", name_ar:"البط والوز", name_en:"Duck & goose", cat:"meat", status:"restricted",
    note_ar:"ممنوع — من الطيور التي لا تطير طيراناً كاملاً.",
    note_en:"Restricted — birds that don't fly fully.",
    alt_ar:"لحم بقر أو ضأن", alt_en:"Beef or lamb",
    aliases:["بط","وز","duck","goose"] },

  { id:"pigeon", name_ar:"الحمام", name_en:"Pigeon", cat:"meat", status:"allowed",
    note_ar:"مسموح — طائر يطير، ضمن اللحوم الموصى بها.",
    note_en:"Allowed — a flying bird, among the recommended meats.",
    aliases:["حمام","pigeon"] },

  // ── SEAFOOD ──────────────────────────
  { id:"sea_fish", name_ar:"سمك البحر الطبيعي", name_en:"Natural sea fish", cat:"seafood", status:"allowed",
    note_ar:"مسموح — أسماك البحر المصطادة طبيعياً. البوري، الدنيس، القاروص.",
    note_en:"Allowed — naturally caught sea fish. Mullet, sea bream, sea bass.",
    aliases:["سمك","سمك بحر","بوري","دنيس","قاروص","fish","sea fish"] },

  { id:"farm_fish", name_ar:"أسماك المزارع", name_en:"Farm-raised fish", cat:"seafood", status:"restricted",
    note_ar:"ممنوع — بسبب التغذية الصناعية في المزارع السمكية.",
    note_en:"Restricted — due to industrial feed in fish farms.",
    alt_ar:"سمك بحر طبيعي", alt_en:"Natural sea fish",
    aliases:["سمك مزارع","بلطي مزارع","farm fish","tilapia"] },

  { id:"shrimp", name_ar:"الجمبري", name_en:"Shrimp", cat:"seafood", status:"restricted",
    note_ar:"ممنوع — ضمن القشريات.",
    note_en:"Restricted — among crustaceans.",
    alt_ar:"سمك بحر", alt_en:"Sea fish",
    aliases:["جمبري","shrimp","قريدس"] },

  { id:"calamari", name_ar:"الكاليماري والسبيط", name_en:"Calamari & squid", cat:"seafood", status:"restricted",
    note_ar:"ممنوع — ضمن الرخويات.",
    note_en:"Restricted — among mollusks.",
    alt_ar:"سمك بحر", alt_en:"Sea fish",
    aliases:["كاليماري","سبيط","squid","calamari"] },

  { id:"tuna", name_ar:"التونة", name_en:"Tuna", cat:"seafood", status:"allowed",
    note_ar:"مسموحة — طازجة أو معلبة بالماء.",
    note_en:"Allowed — fresh or water-packed.",
    aliases:["تونة","تونا","tuna"] },

  // ── VEGETABLES ──────────────────────────
  { id:"cooked_veg", name_ar:"الخضروات المطبوخة", name_en:"Cooked vegetables", cat:"vegetables", status:"allowed",
    note_ar:"مسموحة ومُشجعة — الطهو يُفعّل فوائدها الغذائية.",
    note_en:"Allowed and encouraged — cooking activates their nutritional benefits.",
    aliases:["خضار مطبوخ","خضار","cooked vegetables"] },

  { id:"raw_veg", name_ar:"السلطة الخضراء النيئة", name_en:"Raw green salad", cat:"vegetables", status:"restricted",
    note_ar:"ممنوعة — الخضروات الورقية النيئة تُستبعد من النظام.",
    note_en:"Restricted — raw leafy vegetables are excluded from the system.",
    alt_ar:"نفس الخضروات مطبوخة", alt_en:"The same vegetables, cooked",
    aliases:["سلطة","سلطه","خس","خيار","salad","lettuce","raw"] },

  { id:"onion", name_ar:"البصل", name_en:"Onion", cat:"vegetables", status:"restricted",
    note_ar:"ممنوع — يعتبره النظام غير مناسب.",
    note_en:"Restricted — considered unsuitable by the system.",
    alt_ar:"بهارات وتوابل أخرى للنكهة", alt_en:"Other spices and seasonings for flavor",
    aliases:["بصل","بصلة","onion","onions"] },

  { id:"garlic", name_ar:"الثوم", name_en:"Garlic", cat:"vegetables", status:"restricted",
    note_ar:"ممنوع — مع البصل.",
    note_en:"Restricted — alongside onion.",
    alt_ar:"بهارات أخرى", alt_en:"Other spices",
    aliases:["ثوم","garlic"] },

  { id:"tomato", name_ar:"الطماطم", name_en:"Tomato", cat:"vegetables", status:"allowed",
    note_ar:"مسموحة — مطبوخة أفضل. الصلصة والعصير مسموحان.",
    note_en:"Allowed — cooked preferred. Sauce and juice allowed.",
    aliases:["طماطم","قوطة","بندورة","tomato"] },

  { id:"orange_veg", name_ar:"الخضروات البرتقالية", name_en:"Orange vegetables", cat:"vegetables", status:"restricted",
    note_ar:"ممنوعة — الجزر، القرع، اليقطين، البطاطا الحلوة.",
    note_en:"Restricted — carrots, pumpkin, squash, sweet potato.",
    alt_ar:"خضروات أخرى مطبوخة (كوسة، باذنجان، بامية)", alt_en:"Other cooked vegetables (zucchini, eggplant, okra)",
    aliases:["جزر","قرع","يقطين","بطاطا حلوة","carrot","pumpkin","sweet potato"] },

  { id:"zucchini", name_ar:"الكوسة", name_en:"Zucchini", cat:"vegetables", status:"allowed",
    note_ar:"مسموحة — من الخضروات الأساسية المطبوخة.",
    note_en:"Allowed — a staple cooked vegetable.",
    aliases:["كوسة","كوسا","zucchini"] },

  { id:"eggplant", name_ar:"الباذنجان", name_en:"Eggplant", cat:"vegetables", status:"allowed",
    note_ar:"مسموح — مطبوخاً أو مشوياً.",
    note_en:"Allowed — cooked or grilled.",
    aliases:["باذنجان","بدنجان","eggplant","aubergine"] },

  { id:"okra", name_ar:"البامية", name_en:"Okra", cat:"vegetables", status:"allowed",
    note_ar:"مسموحة — من الخضروات المطبوخة الأساسية.",
    note_en:"Allowed — a staple cooked vegetable.",
    aliases:["بامية","بامیه","okra"] },

  { id:"spinach", name_ar:"السبانخ المطبوخ", name_en:"Cooked spinach", cat:"vegetables", status:"allowed",
    note_ar:"مسموح — بشرط أن يكون مطبوخاً، ليس نيئاً في السلطة.",
    note_en:"Allowed — provided it's cooked, not raw in salad.",
    aliases:["سبانخ","spinach"] },

  // ── FRUITS ──────────────────────────
  { id:"fruits", name_ar:"الفواكه", name_en:"Fruits", cat:"fruits", status:"allowed",
    note_ar:"مسموحة — يُفضل بدون قشور أو بذور، أو كعصير أو مربى أو مجففة.",
    note_en:"Allowed — preferred without skin/seeds, or as juice, jam, or dried.",
    aliases:["فواكه","فاكهة","fruit","fruits"] },

  { id:"dates", name_ar:"التمر", name_en:"Dates", cat:"fruits", status:"allowed",
    note_ar:"مسموح ومُشجع بقوة — من أفضل مصادر الطاقة الطبيعية.",
    note_en:"Strongly encouraged — among the best natural energy sources.",
    aliases:["تمر","بلح","dates"] },

  { id:"apple", name_ar:"التفاح", name_en:"Apple", cat:"fruits", status:"allowed",
    note_ar:"مسموح — بدون قشرة.",
    note_en:"Allowed — without skin.",
    aliases:["تفاح","تفاحة","apple"] },

  { id:"banana", name_ar:"الموز", name_en:"Banana", cat:"fruits", status:"allowed",
    note_ar:"مسموح — مصدر طاقة سريع.",
    note_en:"Allowed — a quick energy source.",
    aliases:["موز","موزة","banana"] },

  { id:"orange_fruit", name_ar:"الفواكه البرتقالية", name_en:"Orange-colored fruits", cat:"fruits", status:"restricted",
    note_ar:"ممنوعة — البرتقال، المانجو، المشمش.",
    note_en:"Restricted — oranges, mangoes, apricots.",
    alt_ar:"تفاح، موز، تمر، أو فراولة", alt_en:"Apples, bananas, dates, or strawberries",
    aliases:["برتقال","مانجو","مشمش","orange","mango","apricot"] },

  // ── BEVERAGES ──────────────────────────
  { id:"water", name_ar:"الماء", name_en:"Water", cat:"beverages", status:"conditional",
    note_ar:"أساسي — لكن ممنوع شربه أثناء الوجبات. يُشرب قبل الأكل بساعة أو بعده بساعة.",
    note_en:"Essential — but restricted during meals. Drink one hour before or after eating.",
    aliases:["ماء","مية","مياه","water"] },

  { id:"tea", name_ar:"الشاي", name_en:"Tea", cat:"beverages", status:"allowed",
    note_ar:"مسموح — الشاي الأسود والأخضر.",
    note_en:"Allowed — black and green tea.",
    aliases:["شاي","tea","شاي اخضر","شاي أخضر"] },

  { id:"coffee", name_ar:"القهوة", name_en:"Coffee", cat:"beverages", status:"allowed",
    note_ar:"مسموحة — بدون لبن. يمكن إضافة السكر.",
    note_en:"Allowed — without milk. Sugar may be added.",
    aliases:["قهوة","نسكافيه","coffee","espresso"] },

  { id:"juice", name_ar:"العصائر الطبيعية", name_en:"Natural juices", cat:"beverages", status:"allowed",
    note_ar:"مسموحة — من فواكه طازجة، بدون إضافات.",
    note_en:"Allowed — from fresh fruits, without additives.",
    aliases:["عصير","juice","عصائر"] },

  { id:"soda", name_ar:"المشروبات الغازية", name_en:"Soda", cat:"beverages", status:"allowed",
    note_ar:"مسموحة — خلافاً للأنظمة الأخرى. البيبسي والكولا وسفن أب.",
    note_en:"Allowed — unlike other diet systems. Pepsi, Coke, 7Up.",
    aliases:["بيبسي","كوكاكولا","سفن اب","pepsi","cola","soda","sprite","غازية"] },

  // ── LEGUMES ──────────────────────────
  { id:"beans", name_ar:"البقوليات", name_en:"Legumes", cat:"legumes", status:"restricted",
    note_ar:"الفول، العدس، اللوبيا، الحمص، الفاصوليا — ممنوعة أو محدودة جداً.",
    note_en:"Fava beans, lentils, black-eyed peas, chickpeas, kidney beans — restricted or very limited.",
    alt_ar:"أرز أو بطاطس كمصدر نشويات", alt_en:"Rice or potatoes for carbs",
    aliases:["فول","عدس","لوبيا","فاصوليا","حمص","beans","lentils","chickpeas","legumes"] },

  // ── NUTS ──────────────────────────
  { id:"nuts", name_ar:"المكسرات", name_en:"Nuts", cat:"nuts", status:"allowed",
    note_ar:"مسموحة باعتدال — اللوز، الجوز، الكاجو، البندق.",
    note_en:"Allowed in moderation — almonds, walnuts, cashews, hazelnuts.",
    aliases:["مكسرات","لوز","جوز","كاجو","بندق","nuts","almonds","walnuts","cashew"] },

  { id:"peanuts", name_ar:"الفول السوداني", name_en:"Peanuts", cat:"nuts", status:"restricted",
    note_ar:"ممنوع — يُصنف مع البقوليات في النظام.",
    note_en:"Restricted — classified with legumes in the system.",
    alt_ar:"اللوز أو الجوز", alt_en:"Almonds or walnuts",
    aliases:["فول سوداني","سوداني","peanut","peanuts"] }
];

const CATEGORIES = [
  { id: "all", name_ar: "الكل", name_en: "All" },
  { id: "grains", name_ar: "الحبوب", name_en: "Grains" },
  { id: "bread", name_ar: "الخبز", name_en: "Bread" },
  { id: "sugars", name_ar: "السكريات", name_en: "Sweets" },
  { id: "fats", name_ar: "الدهون", name_en: "Fats" },
  { id: "dairy", name_ar: "الألبان", name_en: "Dairy" },
  { id: "meat", name_ar: "اللحوم", name_en: "Meat" },
  { id: "seafood", name_ar: "السمك", name_en: "Seafood" },
  { id: "vegetables", name_ar: "الخضروات", name_en: "Vegetables" },
  { id: "fruits", name_ar: "الفواكه", name_en: "Fruits" },
  { id: "beverages", name_ar: "المشروبات", name_en: "Drinks" },
  { id: "legumes", name_ar: "البقوليات", name_en: "Legumes" },
  { id: "nuts", name_ar: "المكسرات", name_en: "Nuts" }
];

if (typeof window !== 'undefined') {
  window.FOODS = FOODS;
  window.CATEGORIES = CATEGORIES;
}
