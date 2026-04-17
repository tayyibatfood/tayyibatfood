import { FOODS } from "@/lib/foods";

export async function generateStaticParams() {
  return FOODS.map(f => ({ slug: f.slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
