import type { Metadata } from "next";
import { DictionaryList } from "@/components/DictionaryList";

export const metadata: Metadata = {
  title: "القاموس · الطيبات",
  description: "قاموس موثّق لكل طعام في نظام الطيبات — مسموح، ممنوع، وقيد المراجعة.",
  alternates: {
    canonical: "https://tayyibatfood.com/القاموس/",
    languages: {
      ar: "https://tayyibatfood.com/القاموس/",
      en: "https://tayyibatfood.com/en/dictionary/"
    }
  }
};

export default function Page() {
  return <DictionaryList locale="ar" />;
}
