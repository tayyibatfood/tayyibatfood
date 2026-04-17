/**
 * Analytics contract — events defined in v1.0 §6.5
 * Implementation is vendor-agnostic at this stage.
 * Plausible integration added in a subsequent commit (deployment brief §4.1).
 */

type AnalyticsEvent =
  | { name: "lookup_search"; props: { query: string; had_result: boolean; result_verdict?: string } }
  | { name: "lookup_affiliate_click"; props: { food_id: string; partner: string; page_origin: string } }
  | { name: "dictionary_view"; props: { food_id: string; verdict: string; referrer_type: string } }
  | { name: "meal_plan_view"; props: { day_of_week: string; is_today: boolean } }
  | { name: "shopping_list_open"; props: { source_day: string; items_count: number } }
  | { name: "newsletter_signup"; props: { source: string } }
  | { name: "controversy_view"; props: { page_slug: string } };

export function track<E extends AnalyticsEvent>(name: E["name"], props: E["props"]): void {
  if (typeof window === "undefined") return;
  // Plausible interface — no-op when script not loaded
  const w = window as unknown as { plausible?: (n: string, o?: { props: unknown }) => void };
  if (w.plausible) w.plausible(name, { props });
}
