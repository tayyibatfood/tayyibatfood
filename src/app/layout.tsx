import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tayyibatfood.com"),
  title: {
    default: "الطيبات · المَطبخ المحايد",
    template: "%s · الطيبات"
  },
  description: "ابحث عن أي طعام، واعرف إذا كان من الطيبات. قاموس موثّق لنظام الطيبات الغذائي.",
  openGraph: {
    siteName: "الطيبات",
    locale: "ar_EG",
    type: "website"
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://tayyibatfood.com/",
    languages: {
      ar: "https://tayyibatfood.com/",
      en: "https://tayyibatfood.com/en/"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
