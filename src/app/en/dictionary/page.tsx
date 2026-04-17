"use client";

import { useEffect } from "react";
import { DictionaryList } from "@/components/DictionaryList";

export default function Page() {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    return () => {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    };
  }, []);
  return <DictionaryList locale="en" />;
}
