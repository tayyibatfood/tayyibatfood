"use client";

import { useEffect } from "react";
import { SimplePage } from "@/components/SimplePage";

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
      eyebrow="Archive"
      title="Record: what happened, and who said it."
      subtitle="This section does not promote or defend. It documents. The medical debate around the Tayyibat system and the biography of Dr. Diaa Al-Awady — as reported in the Egyptian press."
    >
      <div className="editorial">
        <p>
          The Tayyibat system is a dietary framework presented by Dr. Diaa Al-Awady, an Egyptian physician, through YouTube content and televised interviews over the past several years. The system emphasizes whole grains, legumes, unrefined oils, and natural sweeteners — while excluding industrially-produced eggs, processed cow's milk, refined vegetable oils, and white sugar.
        </p>
        <p>
          Medical and professional questions have been raised about various aspects of the system. This site is not a platform to defend Dr. Al-Awady nor to attack him — it is a reference that documents the system as presented by its authors and presents the reader with the available information to judge for themselves.
        </p>
        <p>
          <strong>For the reader:</strong> Any dietary or medical decision should be made in consultation with a qualified physician. This site does not provide medical advice and does not claim therapeutic properties for any food.
        </p>
      </div>
    </SimplePage>
  );
}
