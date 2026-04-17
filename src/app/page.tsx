import type { Metadata } from "next";
import { Homepage } from "@/components/Homepage";

export const metadata: Metadata = {
  title: "الطيبات · المَطبخ المحايد",
  description: "ابحث عن أي طعام، واعرف إذا كان من الطيبات — في ثانية واحدة."
};

export default function Page() {
  return <Homepage locale="ar" />;
}
