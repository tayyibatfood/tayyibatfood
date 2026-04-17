import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "جدول الوجبات · الطيبات",
  description: "جدول أسبوعي لوجبات نظام الطيبات — الفطور والغداء لكل يوم."
};

const days = [
  { name: "السبت", breakfast: "شوفان بالتمر واللوز", lunch: "عدس أصفر بالأرز البني" },
  { name: "الأحد", breakfast: "فول مدمّس بزيت الزيتون", lunch: "حمص بالطحينة والفريك" },
  { name: "الاثنين", breakfast: "شوفان بالعسل الأسود", lunch: "شوربة عدس بالخضار" },
  { name: "الثلاثاء", breakfast: "فول مدمّس بالليمون", lunch: "كشري (أرز بني + عدس + حمص)" },
  { name: "الأربعاء", breakfast: "شوفان بجوز الهند والتمر", lunch: "سلطة فتوش بخبز الفريك" },
  { name: "الخميس", breakfast: "فول بزيت الزيتون والكمّون", lunch: "مجدرة عدس أسمر" },
  { name: "الجمعة", breakfast: "شوفان بالفواكه الطازجة", lunch: "ملوخية بالأرز البني" }
];

export default function Page() {
  return (
    <SimplePage
      locale="ar"
      current="meal-plan"
      eyebrow="جدول الوجبات"
      title="أسبوع كامل من الطيبات."
      subtitle="بروتوكول الوجبتين — الفطور والغداء. كل يوم موثّق ومفصّل. قريباً: جدول مخصص لعائلتك."
    >
      <div className="space-y-3">
        {days.map(day => (
          <article key={day.name} className="p-5 rounded-[12px] bg-gradient-to-b from-white to-cream-warm/40 border border-cream-deep/60">
            <h2 className="font-display text-[28px] font-semibold text-sage-deep mb-4">{day.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-sage-mist/40 border border-sage-soft/30">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-sage-deep font-semibold mb-1">الفطور</p>
                <p className="font-display text-[20px] text-ink font-medium leading-tight">{day.breakfast}</p>
              </div>
              <div className="p-3 rounded-lg bg-gold-mist/40 border border-gold/20">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-1">الغداء</p>
                <p className="font-display text-[20px] text-ink font-medium leading-tight">{day.lunch}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
