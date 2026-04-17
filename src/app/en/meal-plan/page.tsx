"use client";

import { useEffect } from "react";
import { SimplePage } from "@/components/SimplePage";

const days = [
  { name: "Saturday", breakfast: "Oats with dates & almonds", lunch: "Yellow lentils with brown rice" },
  { name: "Sunday", breakfast: "Ful medames with olive oil", lunch: "Hummus with tahini & freekeh" },
  { name: "Monday", breakfast: "Oats with blackstrap molasses", lunch: "Lentil & vegetable soup" },
  { name: "Tuesday", breakfast: "Ful medames with lemon", lunch: "Koshari (brown rice, lentils, chickpeas)" },
  { name: "Wednesday", breakfast: "Oats with coconut & dates", lunch: "Fattoush salad with freekeh bread" },
  { name: "Thursday", breakfast: "Ful with olive oil & cumin", lunch: "Mujadara — brown lentils & rice" },
  { name: "Friday", breakfast: "Oats with fresh fruit", lunch: "Mulukhiyah with brown rice" }
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
      current="meal-plan"
      eyebrow="Meal Plan"
      title="A full week of Tayyibat meals."
      subtitle="The two-meal protocol — breakfast and lunch. Each day documented. Personalized family plans coming soon."
    >
      <div className="space-y-3">
        {days.map(day => (
          <article key={day.name} className="p-5 rounded-[12px] bg-gradient-to-b from-white to-cream-warm/40 border border-cream-deep/60">
            <h2 className="font-display text-[28px] font-semibold text-sage-deep mb-4">{day.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-sage-mist/40 border border-sage-soft/30">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-sage-deep font-semibold mb-1">Breakfast</p>
                <p className="font-display text-[20px] text-ink font-medium leading-tight">{day.breakfast}</p>
              </div>
              <div className="p-3 rounded-lg bg-gold-mist/40 border border-gold/20">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-1">Lunch</p>
                <p className="font-display text-[20px] text-ink font-medium leading-tight">{day.lunch}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
