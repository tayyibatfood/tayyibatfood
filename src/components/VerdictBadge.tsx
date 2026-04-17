import clsx from "clsx";
import { Check, X, AlertCircle } from "lucide-react";
import type { Verdict, Locale } from "@/lib/types";
import { VERDICT_LABELS } from "@/lib/types";

interface VerdictBadgeProps {
  verdict: Verdict;
  locale: Locale;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * v1.1 treatment per amendment §05:
 *  - Gradient fill (never flat color)
 *  - Small circular icon slot
 *  - Inset top highlight + inset bottom shadow
 *  - Ottoman red appears in UI ONLY in this component (forbidden variant)
 */
export function VerdictBadge({ verdict, locale, size = "md", className }: VerdictBadgeProps) {
  const label = VERDICT_LABELS[verdict][locale];
  const Icon = verdict === "allowed" ? Check : verdict === "forbidden" ? X : AlertCircle;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full font-medium font-body",
        "border border-white/20",
        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-2 text-[13px]",
        size === "lg" && "px-5 py-2.5 text-sm",
        verdict === "allowed" && [
          "text-cream",
          "bg-gradient-to-br from-sage to-sage-deep",
          "shadow-[0_6px_18px_rgba(71,89,58,0.32),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
        ],
        verdict === "forbidden" && [
          "text-cream",
          "bg-gradient-to-br from-verdict-forbidden to-verdict-forbidden-deep",
          "shadow-[0_6px_18px_rgba(139,35,50,0.32),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
        ],
        verdict === "review" && [
          "text-cream",
          "bg-gradient-to-br from-gold to-gold-deep",
          "shadow-[0_6px_18px_rgba(155,111,36,0.32),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
        ],
        className
      )}
    >
      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/25">
        <Icon className="w-2.5 h-2.5" strokeWidth={3} />
      </span>
      {label}
    </span>
  );
}
