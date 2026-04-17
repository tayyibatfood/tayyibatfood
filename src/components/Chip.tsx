"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

interface ChipProps {
  variant?: "neutral" | "allowed" | "forbidden";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

/**
 * v1.1 spec per amendment §05:
 *  - Three variants for verdict-preview on suggested-search chips
 *  - Glass tint per variant (cream / sage-mist / ottoman-mist)
 *  - Used only on the homepage hero search
 */
export function Chip({ variant = "neutral", onClick, children, className }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-medium text-[13px]",
        "backdrop-blur-xl border border-white/70 transition-all",
        "shadow-[0_4px_12px_rgba(71,89,58,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]",
        "hover:-translate-y-[1px]",
        variant === "neutral" && "bg-cream/52 text-ink-soft",
        variant === "allowed" && [
          "bg-gradient-to-b from-sage-mist/80 to-sage-soft/50",
          "text-sage-deep font-semibold border-sage-soft/70"
        ],
        variant === "forbidden" && [
          "bg-gradient-to-b from-[#FCEBEB]/80 to-[#F7C1C1]/40",
          "text-verdict-forbidden font-semibold border-[#F7C1C1]/60"
        ],
        className
      )}
    >
      {children}
    </button>
  );
}
