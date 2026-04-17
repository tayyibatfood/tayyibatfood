"use client";

import { useEffect } from "react";
import { Homepage } from "@/components/Homepage";

export default function Page() {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    return () => {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    };
  }, []);
  return <Homepage locale="en" />;
}
